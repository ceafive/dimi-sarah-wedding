#!/bin/bash

# Dimi & Sarah Wedding - Turso Database Setup Script
# Run this once to set up your database

set -e

echo "🎊 Setting up Turso database for Dimi & Sarah's wedding site..."
echo ""

# Check if turso is installed
if ! command -v turso &> /dev/null; then
    echo "❌ Turso CLI not found. Installing..."
    brew install tursodatabase/tap/turso
fi

# Check if logged in
if ! turso auth whoami &> /dev/null; then
    echo "🔐 Please log in to Turso..."
    turso auth login
fi

echo "✅ Logged in as: $(turso auth whoami)"
echo ""

# Create database
DB_NAME="dimi-sarah-wedding"
echo "📦 Creating database: $DB_NAME..."

if turso db show "$DB_NAME" &> /dev/null; then
    echo "   Database already exists!"
else
    turso db create "$DB_NAME"
    echo "   ✅ Database created!"
fi

# Get URL and token
echo ""
echo "🔗 Getting database credentials..."
DB_URL=$(turso db show "$DB_NAME" --url)
DB_TOKEN=$(turso db tokens create "$DB_NAME")

# Write to .env.local
ENV_FILE=".env.local"
echo ""
echo "📝 Writing to $ENV_FILE..."

cat > "$ENV_FILE" << EOF
# Turso Database
TURSO_DATABASE_URL=$DB_URL
TURSO_AUTH_TOKEN=$DB_TOKEN

# Admin password for viewing RSVPs at /api/admin/rsvps
ADMIN_PASSWORD=dimi-sarah-2025
EOF

echo "   ✅ Environment file created!"

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Your database is ready at:"
echo "   $DB_URL"
echo ""
echo "To start the dev server:"
echo "   npm run dev"
echo ""
echo "To view RSVPs (after some are submitted):"
echo "   curl -H 'Authorization: Bearer dimi-sarah-2025' http://localhost:3000/api/admin/rsvps"
echo ""
