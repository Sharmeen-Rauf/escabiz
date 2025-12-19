# Environment Variables Setup

## Create `.env.local` file

Create a `.env.local` file in the root directory (`escabiz/`) with the following content:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://Backend_Project_Database:backend_project_database123@cluster0.wqsxt7b.mongodb.net/escabiz?retryWrites=true&w=majority&appName=Cluster0

# Admin Credentials (change these in production)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=escabiz2025

# JWT Secret for session management
JWT_SECRET=escabiz_secret_key_2025_change_in_production

# Database Name
DB_NAME=escabiz

# Google Analytics ID (required for tracking website traffic and conversions)
# Get your GA4 Measurement ID from https://analytics.google.com/
# Format: G-XXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-M4G5RC7VZ3

# Google Ads Conversion ID (optional - for Google Ads conversion tracking)
# Get this from your Google Ads account: Tools & Settings > Conversions
# Format: AW-XXXXXXXXXX
# NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
```

## Important Notes

1. **Never commit `.env.local` to Git** - It's already in `.gitignore`
2. **For Vercel Deployment**: Add these environment variables in your Vercel project settings
3. **Change default credentials** in production for security
4. **Use a strong JWT_SECRET** in production

## Installation

After creating the `.env.local` file, install the required packages:

```bash
npm install mongoose bcryptjs jsonwebtoken
npm install --save-dev @types/bcryptjs @types/jsonwebtoken
```

## Admin Dashboard

Access the admin dashboard at: `/admin`

Default credentials:
- Username: `admin`
- Password: `escabiz2025`

**Important**: Change these credentials in production!

