# AGENTS.md

## Project Identity

This project is a premium jewelry e-commerce website deployed to Cloudflare Workers.

The real application lives in:

```txt
jewelry-store-cf/
```

The folder below is reference-only:

```txt
nextjs-material-kit/
```

Do not build the production app directly inside `nextjs-material-kit`.

## Communication Rules

* Reply to the user in Vietnamese by default.
* Keep explanations practical and concise.
* When making changes, summarize:

  * what changed
  * which files changed
  * what commands were run
  * what remains to do
* Be explicit when something could not be verified.

## Core Product Goal

Build a premium jewelry e-commerce website with:

* Storefront pages
* Customer account features
* Cart and checkout
* Wishlist
* Orders
* Reviews
* Coupons
* Admin dashboard
* Product, order, customer, category, collection, inventory, review, coupon, banner/content, and blog management
* Cloudflare Workers deployment compatibility

## Visual Design Rule

Use `nextjs-material-kit` as the visual reference.

The storefront and admin UI should preserve the same design direction:

* premium landing-page feel
* Material Kit-inspired spacing
* clean card layouts
* soft shadows
* rounded sections
* elegant typography
* image-forward product sections
* polished buttons and navigation
* luxury jewelry tone

Do not copy the old Next 12 application wholesale.

Prefer a clean reimplementation in the modern app inside `jewelry-store-cf`.

## Reference Project Rule

`nextjs-material-kit` is a read-only visual and structural reference.

Allowed:

* Inspect components
* Inspect sections
* Reuse design ideas
* Recreate layout patterns
* Extract visual tokens such as spacing, typography, colors, and button style

Avoid:

* Building directly inside `nextjs-material-kit`
* Treating it as the production app
* Migrating the old Next 12 app wholesale
* Copying unnecessary legacy structure
* Introducing Material UI v4 dependency unless explicitly requested

## Target App Rule

All real implementation work should happen in:

```txt
jewelry-store-cf/
```

Before editing, confirm the current working directory and make sure changes are inside the target app unless the user specifically asks otherwise.

## Cloudflare Workers Rules

The deployment target is Cloudflare Workers.

Use a Cloudflare-compatible Next.js setup.

Expected deployment stack:

* Next.js App Router
* `@opennextjs/cloudflare`
* `wrangler`

Avoid:

* custom long-running Node server design
* unnecessary server-only assumptions
* large server-only dependencies
* direct reliance on Node APIs that are not compatible with Workers
* adding `runtime = "edge"` unless there is a specific reason
* architecture that cannot be previewed with Wrangler

Prefer:

* framework-native APIs
* route handlers
* Cloudflare-compatible data and storage patterns
* production-like verification through Wrangler preview
* keeping bundle size under control

## Data and API Rules

The current task is focused on reconnecting Prisma-backed data mutations and API routes.

When working on data/API features:

* Inspect the existing Prisma schema before editing.
* Reuse existing data helpers and catalog service patterns where possible.
* Keep mock fallback behavior if it is already part of the app flow.
* Avoid breaking current storefront pages while connecting real data.
* Keep API routes simple and Cloudflare-conscious.
* Validate request payloads before mutations.
* Return clear JSON errors from route handlers.
* Do not assume a traditional long-running Node database connection unless the project already supports it.

## Media and Storage Rules

The project has an R2 media key/public URL strategy.

When working with product images or media:

* Prefer the existing R2 media strategy.
* Do not introduce a new storage provider without approval.
* Keep product image fields compatible with existing mock and database product data.
* Avoid hardcoding local-only image paths when a media key/public URL pattern exists.

## Auth and Account Rules

The project includes an auth flow.

When modifying auth/account/order features:

* Preserve existing login/register/account page behavior.
* Keep customer-facing pages usable with demo or fallback data if real auth is incomplete.
* Avoid adding heavy auth dependencies without checking current implementation.
* Keep role separation in mind for admin routes.

## Admin Rules

Admin MVP currently includes:

* admin layout
* dashboard
* products
* orders
* customers

When extending admin:

* Follow the existing admin layout.
* Preserve the visual language inspired by the storefront and kit.
* Keep screens practical and data-oriented.
* Do not overbuild complex permissions unless requested.
* Prefer clear tables, cards, forms, and status badges.

## Storefront Rules

Storefront MVP currently includes:

* home page
* shop listing
* product detail
* cart
* checkout
* login/register
* account/orders

When modifying storefront:

* Preserve premium jewelry brand tone.
* Keep UI consistent with existing shared primitives.
* Reuse existing mock product data or data services where appropriate.
* Avoid unrelated visual redesigns.
* Keep cart, wishlist, checkout, and demo order flows working.

## File and Encoding Rules

* Preserve UTF-8 encoding in all files.
* Do not rewrite files using ANSI/codepage encoding.
* Be careful with Vietnamese text and special characters.
* On Windows, prefer PowerShell 7 and explicit UTF-8 when writing files.
* Do not change line endings unnecessarily.
* Do not reformat unrelated files.
* Never round-trip Vietnamese UI text through terminal output.
* Never copy text from a potentially mojibake console view back into source files.
* When editing text files, prefer `apply_patch` or explicit UTF-8 writes only.
* If using a script to write files, always set encoding explicitly to UTF-8.
* After changing user-facing copy, re-open the file in UTF-8 and verify the actual stored text.
* Treat these files as high-risk for encoding issues: `src/app/**`, `src/components/**`, `src/lib/site-data.ts`.
* When scanning for encoding issues, look for real mojibake markers such as `Ã`, `Â`, `Ä`, `á»`, `áº`, `�`.
* Do not treat TypeScript syntax like `?:` or `??` as encoding errors.
* If terminal output looks corrupted, trust the file bytes and re-open the source file instead of trusting console rendering.

## UTF-8 Recovery Rules

* If Vietnamese text appears corrupted, stop feature work and fix encoding first.
* Re-read the affected source file directly as UTF-8 before making more edits.
* Rewrite only the corrupted strings or file content, not unrelated logic.
* After UTF-8 repairs, run build verification before continuing feature work.

## Workflow Rules

Before starting work:

1. Read this `AGENTS.md`.
2. Read `PLAN.md` if it exists.
3. Read `TASK.md` if it exists.
4. Inspect the relevant files before editing.
5. Identify whether the requested change belongs in `jewelry-store-cf`.

During work:

* Make focused changes only.
* Do not modify unrelated files.
* Do not delete existing functionality unless clearly required.
* Prefer small, reviewable edits.
* Keep existing naming conventions.
* Keep existing folder structure unless there is a strong reason to change it.
* Avoid broad refactors during feature work.

After meaningful changes:

* Update `TASK.md` if it exists.
* If the phase or milestone changes, update `PLAN.md` if it exists.
* Add a dated progress log entry when a meaningful milestone is completed.
* Keep checklist items accurate.

## Verification Rules

Use available project commands when relevant.

Common commands may include:

```bash
npm run dev
npm run lint
npm run build
npm run preview
npx wrangler --version
```

For Cloudflare/OpenNext verification, prefer the scripts already defined in `package.json`.

Before claiming success:

* Run lint/build when practical.
* If unable to run a command, explain why.
* If a command fails, report the error and suggest the next fix.
* Do not claim Workers compatibility unless preview/build has been verified.

## Git Rules

* Do not commit unless the user explicitly asks.
* Do not push unless the user explicitly asks.
* Do not create branches unless requested.
* Before large changes, check current git status if available.
* Mention modified files in the final summary.

## Dependency Rules

Before adding a dependency:

* Check whether the project already has an equivalent.
* Prefer lightweight dependencies.
* Avoid packages incompatible with Cloudflare Workers.
* Avoid legacy dependencies from the old `nextjs-material-kit` stack.
* Do not add Material UI v4 unless explicitly requested.
* Explain why a new dependency is needed.

## Current Project State

The project has already completed major storefront and admin MVP work.

Completed areas include:

* app scaffold
* OpenNext Cloudflare setup
* homepage
* shop listing
* product detail
* cart
* checkout
* login/register
* account/orders
* admin layout
* admin dashboard
* admin product/order/customer screens
* Prisma schema
* auth flow
* product API/data layer
* cart and checkout logic
* orders flow
* coupons
* reviews
* wishlist
* R2 media strategy
* production build verification

Current focus:

```txt
Reconnect Prisma-backed data mutations and API routes
```

Next planned focus:

```txt
Prepare payment integration shell
```

## Out of Scope Unless Requested

Do not start these unless the user asks:

* full payment provider integration
* large design redesign
* replacing the whole UI library
* moving away from Cloudflare Workers
* rewriting the app architecture
* migrating the old Material Kit app wholesale
* advanced role/permission system
* real production inventory reservation logic
* real email/SMS notification integration

## Recovery From Lost Context

If context seems missing or inconsistent:

1. Stop editing.
2. Re-read `AGENTS.md`.
3. Re-read `PLAN.md` and `TASK.md` if present.
4. Summarize:

   * current goal
   * completed work
   * files already touched
   * next recommended step
5. Continue only after the project state is clear.

If `TASK.md` is stale, update it before continuing.

## Recommended Checkpoint Format

When updating `TASK.md`, use this structure:

```md
# TASK.md

## Current Status
- Current phase:
- Current task:
- Next after that:

## Active Context
-

## Files Changed
-

## Decisions
-

## Verification
-

## Remaining Work
-

## Progress Log

### YYYY-MM-DD
-
```

## Important Principle

Do not rely only on chat history.

Use repository files as persistent memory:

* `AGENTS.md` for fixed rules
* `PLAN.md` for project plan and phases
* `TASK.md` for current working state and checkpoint
