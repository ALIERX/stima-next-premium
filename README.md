# STIMA — Next.js Premium (App Router)

Production-ready starter for a premium, animated RWA tokenization portal.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS (dark-first), Framer Motion, GSAP, React Spring
- Three.js + React Three Fiber + Drei
- Supabase (auth, db, storage) — optional, client included
- Ethers.js — Sepolia testnet mint placeholder
- Recharts — radar & valuation charts

## Quick Start
1. `cp .env.example .env.local` and fill values (optional to run without Supabase).
2. `npm install`
3. `npm run dev`

## Deploy (Vercel)
- Import the repo
- Set env vars (NEXT_PUBLIC_...)
- Deploy

## Extensibility
- Widgets in `/components` (small, focused, composable)
- Pages in `/app` feature folders (`/assets`, `/mint`)
- Drop-in new widgets without touching existing ones
