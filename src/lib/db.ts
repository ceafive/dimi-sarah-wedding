import { createClient, Client } from "@libsql/client";

// Turso database client
// After running `turso auth login` and `turso db create dimi-sarah-wedding`,
// run `turso db show dimi-sarah-wedding --url` and `turso db tokens create dimi-sarah-wedding`
// Then add these to your .env.local file

let db: Client | null = null;

export function getDb(): Client {
  if (!db) {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;
    
    if (!url || !authToken) {
      throw new Error(
        "Database not configured. Please set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in .env.local"
      );
    }
    
    db = createClient({ url, authToken });
  }
  return db;
}

// Initialize database schema
export async function initializeDatabase() {
  const database = getDb();
  await database.execute(`
    CREATE TABLE IF NOT EXISTS rsvps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      attendance TEXT NOT NULL CHECK(attendance IN ('attending', 'not-attending')),
      guests INTEGER DEFAULT 1,
      dietary TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  // Index for quick lookups
  await database.execute(`
    CREATE INDEX IF NOT EXISTS idx_rsvps_email ON rsvps(email)
  `);
  
  await database.execute(`
    CREATE INDEX IF NOT EXISTS idx_rsvps_attendance ON rsvps(attendance)
  `);
}

// RSVP Types
export interface RSVPData {
  name: string;
  email: string;
  attendance: "attending" | "not-attending";
  guests?: number;
  dietary?: string;
  message?: string;
}

export interface RSVPRecord extends RSVPData {
  id: number;
  created_at: string;
  updated_at: string;
}

// Create or update RSVP (upsert by email)
export async function upsertRSVP(data: RSVPData): Promise<RSVPRecord> {
  const database = getDb();
  
  // Ensure table exists
  await initializeDatabase();
  
  const result = await database.execute({
    sql: `
      INSERT INTO rsvps (name, email, attendance, guests, dietary, message)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(email) DO UPDATE SET
        name = excluded.name,
        attendance = excluded.attendance,
        guests = excluded.guests,
        dietary = excluded.dietary,
        message = excluded.message,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `,
    args: [
      data.name,
      data.email,
      data.attendance,
      data.guests || 1,
      data.dietary || null,
      data.message || null,
    ],
  });
  
  return result.rows[0] as unknown as RSVPRecord;
}

// Get all RSVPs
export async function getAllRSVPs(): Promise<RSVPRecord[]> {
  const database = getDb();
  const result = await database.execute("SELECT * FROM rsvps ORDER BY created_at DESC");
  return result.rows as unknown as RSVPRecord[];
}

// Get RSVP by email
export async function getRSVPByEmail(email: string): Promise<RSVPRecord | null> {
  const database = getDb();
  const result = await database.execute({
    sql: "SELECT * FROM rsvps WHERE email = ?",
    args: [email],
  });
  
  return (result.rows[0] as unknown as RSVPRecord) || null;
}

// Get RSVP statistics
export async function getRSVPStats() {
  const database = getDb();
  const result = await database.execute(`
    SELECT 
      COUNT(*) as total,
      SUM(CASE WHEN attendance = 'attending' THEN 1 ELSE 0 END) as attending,
      SUM(CASE WHEN attendance = 'not-attending' THEN 1 ELSE 0 END) as not_attending,
      SUM(CASE WHEN attendance = 'attending' THEN guests ELSE 0 END) as total_guests
    FROM rsvps
  `);
  
  const row = result.rows[0] as Record<string, number>;
  return {
    total: Number(row.total) || 0,
    attending: Number(row.attending) || 0,
    notAttending: Number(row.not_attending) || 0,
    totalGuests: Number(row.total_guests) || 0,
  };
}
