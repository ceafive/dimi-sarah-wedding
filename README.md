# Dimi & Sarah Wedding Website

A beautiful, modern wedding website built with Next.js 16, Tailwind CSS 4, and Turso (SQLite in the cloud).

## Features

- 💒 Elegant hero with countdown timer
- 💕 Our Story section with timeline
- 📅 Wedding day schedule
- 📍 Venue information with map
- 📬 RSVP form with database persistence
- 📱 Fully responsive design

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Database:** Turso (libSQL - SQLite compatible)
- **Fonts:** Cormorant Garamond + Montserrat
- **Deployment:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Turso Database

```bash
# Install Turso CLI
brew install tursodatabase/tap/turso

# Login
turso auth login

# Create database
turso db create dimi-sarah-wedding

# Get your database URL
turso db show dimi-sarah-wedding --url

# Create auth token
turso db tokens create dimi-sarah-wedding
```

### 3. Configure environment

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
TURSO_DATABASE_URL=libsql://dimi-sarah-wedding-xxx.turso.io
TURSO_AUTH_TOKEN=eyJ...
ADMIN_PASSWORD=your-secret-password
```

### 4. Initialize database (automatic)

The database schema is created automatically on first RSVP submission.

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Submit RSVP
```http
POST /api/rsvp
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john@example.com",
  "attendance": "attending",
  "guests": 2,
  "dietary": "Vegetarian",
  "message": "Can't wait!"
}
```

### View All RSVPs (Admin)
```http
GET /api/admin/rsvps
Authorization: Bearer your-admin-password
```

Returns:
```json
{
  "success": true,
  "stats": {
    "total": 50,
    "attending": 42,
    "notAttending": 8,
    "totalGuests": 78
  },
  "rsvps": [...]
}
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables:
   - `TURSO_DATABASE_URL`
   - `TURSO_AUTH_TOKEN`
   - `ADMIN_PASSWORD`
4. Deploy!

### Custom Domain

After deployment, add your domain in Vercel:
- `dimiandsarah.co.uk`
- `www.dimiandsarah.co.uk`

## Customization

### Update Wedding Details

Edit these files:
- `src/components/Hero.tsx` - Names, date, countdown
- `src/components/OurStory.tsx` - Your story, timeline
- `src/components/WeddingDay.tsx` - Schedule, dress code
- `src/components/Venue.tsx` - Venue details, hotels
- `src/components/RSVP.tsx` - RSVP deadline

### Colors

Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --color-cream: #FAF8F5;
  --color-sage: #9CAF88;
  --color-gold: #C9A962;
  --color-charcoal: #3D3D3D;
}
```

## License

Private - For Dimi & Sarah's Wedding 💒
