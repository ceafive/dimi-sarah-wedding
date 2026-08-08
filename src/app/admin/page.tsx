"use client";

import { useEffect, useState } from "react";

interface AdditionalGuest {
  name: string;
  isChild: boolean;
}

interface RSVPRow {
  id: number;
  name: string;
  email: string;
  attendance: "attending" | "not-attending";
  guests: number;
  dietary: string | null;
  message: string | null;
  song_request: string | null;
  additional_guests: string | null;
  created_at: string;
}

interface Stats {
  total: number;
  attending: number;
  notAttending: number;
  totalGuests: number;
}

const STORAGE_KEY = "wedding-admin-password";

function parseGuests(raw: string | null): AdditionalGuest[] {
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function toCsv(rows: RSVPRow[]): string {
  const header = [
    "Name",
    "Email",
    "Attendance",
    "Guests",
    "Additional Guests",
    "Dietary Requirements",
    "Song Request",
    "Events",
    "Submitted",
  ];
  const lines = rows.map((r) => {
    const extra = parseGuests(r.additional_guests)
      .map((g) => `${g.name}${g.isChild ? " (child)" : ""}`)
      .join("; ");
    return [
      r.name,
      r.email,
      r.attendance,
      String(r.guests),
      extra,
      r.dietary ?? "",
      r.song_request ?? "",
      r.message ?? "",
      r.created_at,
    ]
      .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
      .join(",");
  });
  return [header.join(","), ...lines].join("\n");
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [rsvps, setRsvps] = useState<RSVPRow[]>([]);

  const load = async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/rsvps", {
        headers: { Authorization: `Bearer ${pw}` },
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Incorrect password.");
        setAuthed(false);
        sessionStorage.removeItem(STORAGE_KEY);
        return;
      }
      setStats(data.stats);
      setRsvps(data.rsvps);
      setAuthed(true);
      setPassword(pw);
      sessionStorage.setItem(STORAGE_KEY, pw);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) load(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    load(password);
  };

  const downloadCsv = () => {
    const blob = new Blob([toCsv(rsvps)], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-rsvps.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!authed) {
    return (
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-12 py-24 sm:px-20 md:px-28">
        <form onSubmit={handleSubmit} className="w-full max-w-xs text-center">
          <h1 className="font-display text-3xl text-ink">RSVP Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-8 w-full border-0 border-b border-line bg-transparent px-1 py-2 text-center font-serif text-ink outline-none focus:border-cornflower"
            autoFocus
          />
          {error && (
            <p className="mt-3 font-serif text-sm text-rose">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 border border-ink px-10 py-3 font-serif text-xs uppercase tracking-caps text-ink transition-colors hover:bg-ink hover:text-bg disabled:opacity-50"
          >
            {loading ? "Checking…" : "View RSVPs"}
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="relative px-12 py-16 sm:px-20 md:px-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-3xl text-ink">RSVP Admin</h1>
          <button
            onClick={downloadCsv}
            className="border border-ink px-6 py-2.5 font-serif text-xs uppercase tracking-caps text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            Export CSV
          </button>
        </div>

        {stats && (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Responses", value: stats.total },
              { label: "Attending", value: stats.attending },
              { label: "Not Attending", value: stats.notAttending },
              { label: "Total Guests", value: stats.totalGuests },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-sm border border-line bg-cream px-4 py-5 text-center"
              >
                <p className="font-display text-3xl text-ink">{s.value}</p>
                <p className="mt-1 font-serif text-xs uppercase tracking-caps text-ink-soft">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left font-serif text-base">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-caps text-ink-soft">
                <th className="py-2 pr-4">Name</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Attendance</th>
                <th className="py-2 pr-4">Guests</th>
                <th className="py-2 pr-4">Additional Guests</th>
                <th className="py-2 pr-4">Dietary</th>
                <th className="py-2 pr-4">Song Request</th>
                <th className="py-2 pr-4">Submitted</th>
              </tr>
            </thead>
            <tbody>
              {rsvps.map((r) => (
                <tr key={r.id} className="border-b border-line/60">
                  <td className="py-2 pr-4">{r.name}</td>
                  <td className="py-2 pr-4">{r.email}</td>
                  <td className="py-2 pr-4">
                    {r.attendance === "attending"
                      ? "Attending"
                      : "Not attending"}
                  </td>
                  <td className="py-2 pr-4">{r.guests}</td>
                  <td className="py-2 pr-4">
                    {parseGuests(r.additional_guests)
                      .map((g) => `${g.name}${g.isChild ? " (child)" : ""}`)
                      .join(", ") || "—"}
                  </td>
                  <td className="py-2 pr-4">{r.dietary || "—"}</td>
                  <td className="py-2 pr-4">{r.song_request || "—"}</td>
                  <td className="py-2 pr-4">
                    {new Date(r.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {rsvps.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-ink-soft">
                    No RSVPs yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
