# Us Two — Travel Planner
Next.js 15 (App Router) + TypeScript + Tailwind + Supabase (Postgres, Auth, Storage) on Vercel.

## Setup
1. `npm install`
2. Create a Supabase project. Copy `.env.example` to `.env.local` and fill in the values.
3. Apply `supabase/migrations/0001_init.sql` (SQL editor, or `supabase db push`).
4. `npm run dev` · `npm run typecheck` · `npm test`

## Deploy
Import the repo into Vercel, add the three env vars, deploy. In Supabase Auth, add your Vercel URL to Redirect URLs.

## Status
Implemented: schema + RLS (roles, restricted documents, private bucket), countdown/time zone logic with tests,
Open-Meteo weather adapter (Seoul/Busan), map-link helpers, layout/navigation, Home dashboard.
Not yet built: login page, itinerary/wishlist/map/preparation pages, Travel Essentials UI, invitation flow, document upload UI,
RLS integration tests. Nothing here has been run or deployed.
