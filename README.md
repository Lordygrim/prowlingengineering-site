# Prowling Engineering website

Next.js 15.5 (App Router) + React 19 + TypeScript + Tailwind CSS.

## Run it
1. Install Node.js 18.18 or newer (https://nodejs.org)
2. `npm install`
3. `cp .env.example .env.local`
4. `npm run dev` then open http://localhost:3000

## Structure
- `app/` pages: `page.tsx` (home), `about`, `services`, `ehs`, `contact`
- `app/api/contact/route.ts` receives the quote form and sends it to HubSpot (`lib/hubspot.ts`)
- `components/` Header, Footer, Hero, ServiceGrid, ContactForm and so on
- `lib/site.ts` your phone, email, address, hours, menu and services
- `app/globals.css` colours, fonts, tiles and hover effects
- `public/logo.svg` the logo

## Connect HubSpot
1. In HubSpot go to Marketing > Lead Capture > Forms and create a form with exactly these fields:
   First name (`firstname`), Last name (`lastname`), Email (`email`), Phone number (`phone`), Message (`message`).
   Turn off reCAPTCHA on this form (HubSpot rejects API submissions to forms that have it on).
2. Find your Hub ID (the number next to your account name or in the HubSpot URL) and the form's ID
   (in the form's embed code, the value after `formId`).
3. Put both in `.env.local`:
   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your hub id
   HUBSPOT_FORM_GUID=your form id
   HUBSPOT_REGION=eu1   (only if your HubSpot address starts with app-eu1; otherwise leave empty)
4. Restart `npm run dev`, submit the form on /contact, and check Contacts and the form's Submissions in HubSpot.
Tracking code loads automatically once the Hub ID is set.

## Build and host
- `npm run build` then `npm run start`
- Hosts that need a Node entry file: `npm run build` then `npm run start:server` (uses `server.js`)
