# Jewelry Store on Cloudflare Workers

## Project Summary
- Goal: build a premium jewelry e-commerce website with customer, admin, and operations features.
- Frontend rule: reuse the `nextjs-material-kit` design language 100% as the visual reference.
- Codebase rule: create a new sibling project and do not build directly inside `nextjs-material-kit`.
- Deploy target: Cloudflare Workers.
- Reference folder: `nextjs-material-kit`
- Target app folder: `jewelry-store-cf`

## Architecture Decisions
- Keep `nextjs-material-kit` as a reference-only UI source.
- Build the real app in a new folder: `jewelry-store-cf`.
- Use a modern Next.js setup compatible with Cloudflare Workers.
- Use Cloudflare's recommended scaffold path when possible, but keep manual setup valid when CLI prompts block automation.
- Use `@opennextjs/cloudflare` and `wrangler` for build/deploy.
- Prefer a clean reimplementation of kit sections instead of copying the old Next 12 app wholesale.

## Why This Structure
- The existing kit uses an older stack (`Next 12` + `Material UI v4`).
- Directly deploying that older app to Workers adds unnecessary migration risk.
- A new app lets us preserve the exact UI direction while using a Cloudflare-friendly runtime and project shape.

## Product Scope

### Storefront
- Home page
- Shop listing
- Product detail
- Collections
- Search and filters
- Cart
- Checkout
- Wishlist
- Account profile
- Orders history
- Addresses
- Contact / consultation booking
- Blog / guides
- Policy pages

### Admin
- Dashboard
- Product management
- Category and collection management
- Inventory management
- Order management
- Customer management
- Review moderation
- Coupon management
- Banner/content management
- Blog management
- Basic role separation

## Cloudflare Constraints
- No custom long-running Node server design.
- Avoid unnecessary server-only assumptions.
- Keep bundle size under control.
- Prefer route handlers / framework-native APIs.
- Use `wrangler` preview for production-like local verification.
- Avoid adding `runtime = "edge"` unless specifically needed.

## Source References
- UI reference: `nextjs-material-kit`
- Cloudflare docs: Workers Next.js guide and OpenNext Cloudflare guide

## Phase Plan

### Phase 0 - Planning and Setup
- [x] Confirm product direction
- [x] Confirm use of kit as visual reference only
- [x] Confirm deploy target is Cloudflare Workers
- [x] Create persistent project plan file
- [x] Scaffold `jewelry-store-cf`
- [ ] Verify local dev and Workers preview commands

### Phase 1 - Reference Audit
- [x] Audit reusable kit sections
- [x] Map kit components to storefront pages
- [ ] Map kit components to admin pages
- [x] Extract brand tokens from kit (spacing, colors, typography, buttons)

### Phase 2 - Foundation
- [x] Finalize app router structure
- [x] Set up global layout and theme
- [x] Set up shared UI primitives based on kit patterns
- [x] Set up asset folders and placeholder brand content
- [x] Configure linting, formatting, and env templates if needed

### Phase 3 - Storefront MVP
- [x] Build homepage
- [x] Build shop listing page
- [x] Build product detail page
- [x] Build cart page
- [x] Build checkout page
- [x] Build login/register pages
- [x] Build account/orders pages

### Phase 4 - Admin MVP
- [x] Build admin layout
- [x] Build admin dashboard
- [x] Build product management screens
- [x] Build order management screens
- [x] Build customer management screens

### Phase 5 - Data and Integrations
- [x] Define database schema
- [x] Add auth flow
- [x] Add products API/data layer
- [x] Add cart and checkout logic
- [x] Add orders flow
- [ ] Add media/storage strategy
- [x] Add coupons, reviews, wishlist

### Phase 6 - Cloudflare Deployment
- [x] Confirm `wrangler` config
- [x] Confirm OpenNext config
- [ ] Verify `npm run dev`
- [ ] Verify Workers preview flow
- [x] Verify production build
- [ ] Prepare deploy checklist

## Progress Log

### 2026-06-08
- Created `PLAN.md`.
- Confirmed the existing kit remains a reference project only.
- Confirmed the new app should be created as a sibling folder.
- Confirmed Cloudflare Workers is the deployment target.
- Scaffolded `jewelry-store-cf` as the new application workspace.
- Applied OpenNext Cloudflare migration to prepare Workers deployment.
- Audited the kit landing page sections and reusable visual patterns.
- Built the first homepage shell in `jewelry-store-cf` using the kit as the design reference.
- Added foundation files for layout, sections, and mock storefront data.
- Reworked local Cloudflare config paths into the project to avoid sandbox log/cache issues.
- Added route shells for `shop`, `collections`, `gifting`, `contact`, and `account`.
- Added product detail, cart, checkout, login, and register shells.
- Added admin layout plus dashboard, products, orders, and customers shells.
- Wired storefront cards to shared mock product data.
- Added `.env.example` and initial `prisma/schema.prisma` for the core commerce domain.
- Installed Prisma packages, configured Prisma v7, generated the client, and added a project-local data access helper.
- Added a catalog service that falls back to mock data until a real database is connected.
- Added local cart state, header cart count, and checkout form persistence.
- Added local wishlist and demo order history tied into account and checkout flows.
- Added R2 media key/public URL strategy and verified OpenNext preview packaging output.
- Verified local Next dev and Workers preview runtime flows.
- Added local wishlist and demo order history tied into account and checkout flows.
- Added R2 media key/public URL strategy and verified OpenNext preview packaging output.
- Verified local Next dev and Workers preview runtime flows.
- Verified the current code passes lint and production build locally.

## Current Status
- Current phase: `Phase 5 - Data and Integrations`
- Current task: `Reconnect Prisma-backed data mutations and API routes`
- Next after that: `Prepare payment integration shell`

## Notes for Future Updates
- Update this file whenever a phase starts or finishes.
- Append dated entries to `Progress Log` after meaningful milestones.
- Keep checkboxes accurate so project state is visible at a glance.











