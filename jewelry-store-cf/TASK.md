# TASK.md

## Current Status
- Current phase: `Phase 3 - Storefront MVP polish`
- Current task: `M? r?ng layout storefront l?n 120rem v? ??ng b? spacing/grid to?n site`
- Next after that: `R? tr?c quan c?c breakpoint th?c t? v? polish ?nh s?n ph?m n?u c?n`

## Active Context
- Gi? nguy?n visual direction dark luxury hi?n t?i.
- Kh?ng ??i logic filter/sort, routing hay data layer.
- ?u ti?n n?i container, grid, spacing v? c?c shared component ?? n?i dung tr?i ??u m?n h?nh h?n.
- `/shop` ti?p t?c gi? layout 2 c?t v?i filter tr?i v? product list ph?i.

## Files Changed
- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/ui/page-intro.tsx`
- `src/components/ui/product-card.tsx`
- `src/components/ui/product-visual.tsx`
- `src/components/ui/product-skeleton.tsx`
- `src/components/shop/shop-catalog.tsx`
- `src/components/sections/hero-section.tsx`
- `src/components/cart/cart-view.tsx`
- `src/components/cart/checkout-form.tsx`
- `src/components/cart/product-reviews.tsx`
- `src/components/account/account-dashboard.tsx`
- `src/app/page.tsx`
- `src/app/collections/page.tsx`
- `src/app/gifting/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/shop/page.tsx`
- `src/app/shop/loading.tsx`
- `src/app/shop/[slug]/page.tsx`
- `src/app/login/page.tsx`
- `src/app/register/page.tsx`
- `src/app/admin/layout.tsx`
- `src/app/admin/orders/page.tsx`
- `src/app/admin/customers/page.tsx`
- `src/app/admin/products/page.tsx`
- `src/app/admin/products/new/page.tsx`
- `src/app/admin/products/[slug]/page.tsx`

## Decisions
- N?ng container chu?n t? `110rem` l?n `120rem` ?? gi?m c?m gi?c n?i dung b? gom v?o gi?a m?n h?nh.
- Gi? c?u tr?c 2 c?t c?a `/shop`, ??ng th?i gi?m nh? sidebar ?? product grid c? ?? ch? l?n 3 c?t tr?n desktop.
- Gi?m nh? t? l? image area v? n?i footer card ?? title, badge, chip, wishlist v? CTA kh?ng ch?n nhau.
- Header ti?p t?c ?u ti?n tr?nh overlap b?ng c?ch t?ng gap v? ch? hi?n tagline ? breakpoint r?t r?ng.
- D?n l?i hero copy ?? b? c?m gi?c ghi ch? dev, gi? tone b?n h?ng cao c?p h?n.

## Verification
- Ch?y `npm run lint`

## Remaining Work
- Ki?m tra tr?c quan trong browser tr?n c?c m?n h?nh ph? bi?n n?u mu?n ch?t th?m breakpoint.
- C? th? polish th?m b? ?nh s?n ph?m ?? gi?m c?m gi?c placeholder ? m?t s? item.

## Progress Log

### 2026-06-09
- Ho?n t?t pass s?a UTF-8 cho storefront text v? t?i li?u l?m vi?c.
- Tinh ch?nh `/shop` ?? card ??c tho?ng h?n, badge/chip/CTA ?n ??nh h?n v? product grid l?n 3 c?t t?t h?n tr?n desktop.
- M? r?ng shared container to?n storefront l?n `120rem` ?? layout tr?i ??u m?n h?nh h?n.
- ??ng b? l?i header, footer, page intro, hero, cart, checkout, account v? shop detail theo c?ng nh?p spacing/layout.

- S?a l?i production `500 Internal Server Error` tr?n Cloudflare do OpenNext + Turbopack g?y thi?u runtime chunk.
- ??ng b? pipeline build sang Webpack, th?m `prisma generate` tr??c build v? deploy l?i th?nh c?ng l?n Workers.
