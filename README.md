# Prowling Engineering website

Next.js 15.5 (App Router) + React 19 + TypeScript + Tailwind CSS.

## Structure
- `app/` pages: `page.tsx` (home), `about`, `services`, `ehs`, `contact`
- `app/api/contact/route.ts` receives the quote form and sends it to HubSpot (`lib/hubspot.ts`)
- `components/` Header, Footer, Hero, ServiceGrid, ContactForm and so on
- `lib/site.ts` your phone, email, address, hours, menu and services
- `app/globals.css` colours, fonts, tiles and hover effects
- `public/logo.svg` the logo