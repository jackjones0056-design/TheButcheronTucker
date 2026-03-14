# The Butcher on Tucker Website

Production-ready starter for a local butcher shop website using **Next.js App Router + TypeScript + Tailwind CSS**, built to integrate with **Square** as the source of truth for catalog, orders, payments, and fulfillment.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel-friendly configuration

## Route Structure
- `/` - Conversion-focused homepage
- `/shop` - Category browsing page
- `/shop/[category]` - Dynamic category page
- `/bundles` - Meat bundle landing page
- `/specials` - Weekly specials page
- `/catering` - Catering inquiry page
- `/about` - About page
- `/contact` - Contact page
- `/pickup-order` - Pickup ordering flow placeholder
- `/api/health` - Server-side health/config check

## Architecture
- `app/` - App Router pages and API routes
- `components/layout/` - Shared layout components (header, footer, page shell)
- `components/sections/` - Homepage-specific reusable sections
- `lib/site.ts` - Environment-variable driven site configuration

## Environment Variables
Copy `.env.example` to `.env.local` and update values.

## Development
```bash
npm install
npm run dev
```

## Next Implementation Steps (Square)
1. Add a server-side Square client module using environment variables only.
2. Implement catalog sync endpoints (categories, items, item variations).
3. Build `/pickup-order` cart state and server-side order creation endpoint.
4. Add payment confirmation flow through Square Payments APIs.
5. Implement pickup fulfillment windows and order status updates.
6. Add webhook handlers for order/payment updates.
7. Add analytics and conversion tracking.

## Notes
- No fake payment logic is implemented.
- Pages currently use placeholder content sections for rapid iteration.
