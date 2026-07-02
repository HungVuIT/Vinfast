# CLAUDE.md — Vinfast Kim Sơn Long Bình Đồng Nai

> Tài liệu context để maintain dự án qua nhiều phiên làm việc. Đọc file này trước khi sửa code.

## 1. Dự án là gì

Website đại lý xe điện **VinFast Kim Sơn Long Bình (Biên Hòa, Đồng Nai)** — clone & hiện đại hóa từ trang gốc `https://vinfastautovn.com/`.

- Đây là site **giới thiệu + thu thập lead** (tư vấn, báo giá, đăng ký lái thử, trả góp). **Không** có bán hàng online, **không** có backend/CSDL — tất cả form chỉ hiển thị thông báo "cảm ơn" ở client, chưa gửi đi đâu.
- Toàn bộ nội dung (xe, giá, mô tả, ảnh, khuyến mãi) được cào từ site gốc và lưu **tĩnh** trong repo.
- Ngôn ngữ nội dung: **tiếng Việt**.

## 2. Tech stack & lệnh

- **Next.js 16.2.1** (App Router, React 19, TypeScript strict, Turbopack)
- **Tailwind CSS v4** (config qua CSS `@theme` trong `globals.css`, không có `tailwind.config`)
- **shadcn/ui** có sẵn ở `src/components/ui/` (hiện chỉ dùng nhẹ)
- **Font:** `Be_Vietnam_Pro` (next/font/google) — chọn vì hỗ trợ tiếng Việt tốt + hiện đại
- Deploy dự kiến: Vercel. Ảnh dùng `next/image` với file **local trong `public/`** (không cần `remotePatterns`).

```bash
npm run dev        # dev server (localhost:3000)
npm run build      # production build (SSG toàn bộ)
npm run typecheck  # tsc --noEmit
npm run check      # lint + typecheck + build
```

> ⚠️ Đây là Next.js 16 — API/quy ước có thể khác bản cũ. Xem `node_modules/next/dist/docs/` khi nghi ngờ. `params` trong route động là **Promise**, phải `await` (xem `san-pham/[slug]/page.tsx`).

## 3. Kiến trúc dữ liệu — QUAN TRỌNG NHẤT

**Toàn bộ dữ liệu nằm trong 1 file duy nhất: [`src/lib/cars.ts`](src/lib/cars.ts).** Sửa ở đây là mọi trang tự cập nhật. Type ở [`src/types/car.ts`](src/types/car.ts).

Gồm 4 export:

- `CARS: Car[]` — mảng 13 xe, **thứ tự = thứ tự hiển thị**. Mỗi xe:
  ```ts
  { slug, name, price, priceExtra, promoBullets[], specs[{label,value}], description[{heading,text}], image, gallery[] }
  ```
  - `slug` = định danh URL (`/san-pham/<slug>`), ví dụ `vinfast-vf-3-73`. **Đừng đổi slug** nếu không muốn hỏng link.
  - `image` = ảnh thẻ (card), trong `public/images/cars/`.
  - `gallery` = mảng ảnh chi tiết, trong `public/images/gallery/<slug>/`.
  - `specs` hiện chỉ **VF3** có (site gốc chỉ điền VF3) — các xe khác `[]`, đúng với bản gốc, **không bịa số liệu**.
- `BANNERS` — 3 ảnh hero (`public/images/banners/`), mỗi banner link tới 1 xe.
- `CONTACT` — thông tin liên hệ (xem mục 7).
- Helpers: `getCarBySlug(slug)`, `getOtherCars(slug, limit=6)`.

## 4. Danh sách component (`src/components/`)

Server component trừ khi ghi `"use client"`.

| Component | Vai trò | Client? |
|---|---|---|
| `Header.tsx` | Top bar + glass header đổi trạng thái khi scroll + mega menu sản phẩm + drawer mobile trượt phải | ✅ |
| `HeroCarousel.tsx` | Carousel hero full-bleed, Ken Burns, autoplay 5.5s, dots progress | ✅ |
| `StatsBar.tsx` | Dải 4 thông số nổi đè lên đáy hero (dùng `-mt` âm) | — |
| `ProductGrid.tsx` | Lưới xe (props: eyebrow/title/description), render `ProductCard` trong `Reveal` | — |
| `ProductCard.tsx` | Thẻ xe cao cấp (hover lift + zoom ảnh) — dùng chung | — |
| `SellerInfo.tsx` | Section "Liên hệ tư vấn" (ảnh showroom + CTA) | — |
| `FastAccess.tsx` | 3 thẻ truy cập nhanh (báo giá / trả góp / bảng giá) | — |
| `TestDriveForm.tsx` | Section đăng ký lái thử, nền gradient, form glass | ✅ |
| `Footer.tsx` | Footer tối navy (4 cột + social + lưu ý + copyright) | — |
| `FloatingCall.tsx` | Cụm nút nổi liên hệ + nút back-to-top (xem mục 7) | ✅ |
| `Breadcrumb.tsx` | Breadcrumb (items: `{label, href?}[]`) | — |
| `ProductGallery.tsx` | Gallery ảnh trang chi tiết (main + thumbnail + prev/next) | ✅ |
| `QuoteSidebarForm.tsx` | Form "Nhận báo giá" sticky ở sidebar chi tiết | ✅ |
| `OtherCarsRow.tsx` | Hàng "Các dòng xe khác" (scroll ngang) | — |
| `ContactForm.tsx` | Form trang Liên hệ (họ tên / email / nội dung) | ✅ |
| `Reveal.tsx` | Wrapper scroll-reveal (IntersectionObserver → class `.reveal.is-visible`). Props: `delay`, `as` | ✅ |
| `SectionHeading.tsx` | Tiêu đề section chuẩn (eyebrow + title + description + gạch gradient) | — |

**Lưu ý form:** tất cả form đều là demo — `onSubmit` chỉ `setSubmitted(true)`, chưa có API. Khi cần gửi thật, nối vào đây.

## 5. Routes (`src/app/`)

| Route | File | Ghi chú |
|---|---|---|
| `/` | `page.tsx` | Hero → StatsBar → ProductGrid → FastAccess → SellerInfo → TestDriveForm |
| `/san-pham` | `san-pham/page.tsx` | Breadcrumb + ProductGrid |
| `/san-pham/[slug]` | `san-pham/[slug]/page.tsx` | SSG qua `generateStaticParams`; có `generateMetadata`; `params` là Promise |
| `/bang-gia-xe` | `bang-gia-xe/page.tsx` | Bảng giá + CTA |
| `/khuyen-mai` | `khuyen-mai/page.tsx` | Nội dung "Mãnh liệt vì tương lai xanh" (giá trị hardcode trong page) |
| `/lien-he` | `lien-he/page.tsx` | ContactForm + info card + Google Maps iframe |

Mọi trang bọc `Header` + `Footer` + `FloatingCall`. Slug không tồn tại → `notFound()` (404).

## 6. Design system

Định nghĩa trong [`src/app/globals.css`](src/app/globals.css) (`@theme inline` + phần "Modern helpers").

**Màu thương hiệu** (đã đăng ký thành Tailwind token, dùng được `bg-brand`, `text-brand-red`...):
- `--color-brand` `#003469` (navy chủ đạo), thang `brand-50/100/400/600/700`, `brand-dark` `#001b38`
- `--color-brand-red` `#c8102e` (đỏ giá tiền), `brand-red-dark` `#9e0c24`
- `--color-brand-gold` `#f0c808` (vàng nhấn)

**Utility/class tự định nghĩa:**
- `container-page` — khung `max-w-[1200px]` + padding + `mx-auto`. **Dùng thay cho div container thủ công.**
- `bg-brand-gradient`, `text-gradient-brand`, `hairline`
- `.reveal` / `.is-visible` (scroll reveal, tôn trọng `prefers-reduced-motion`)
- Animation: `animate-kenburns`, `animate-floaty`, `animate-fade-up`, keyframe `shimmer`
- `no-scrollbar` (ẩn scrollbar cho hàng scroll ngang)

**Quy ước style:**
- Mobile-first; breakpoint "desktop" của cụm nút nổi là **`lg` (1024px)** — dưới đó coi như mobile/tablet.
- Bo góc lớn (`rounded-2xl/3xl`), shadow mềm, hover nhấc `-translate-y`, ảnh zoom khi hover.
- Nhiều màu viết dạng arbitrary `[#003469]` cho khớp brand — ESLint/Tailwind chỉ **cảnh báo** gợi ý đổi sang token (`bg-brand`) hoặc `bg-linear-to-*`. **Đây là warning, không phải lỗi, build vẫn pass.** Không cần sửa hết.
- `bg-gradient-to-*` vẫn chạy tốt trong Tailwind v4 (alias của `bg-linear-to-*`).

## 7. Thông tin liên hệ & kênh chat (giá trị hiện tại)

Trong `CONTACT` ([`src/lib/cars.ts`](src/lib/cars.ts)) — **đổi 1 chỗ, cả site đổi theo**:

- **SĐT hiển thị:** `0352 444 809` — raw: `0352444809` (dùng cho `tel:` và `zalo.me`)
- salesName: `Phi Long` *(tên này giữ từ bản cũ — nếu người phụ trách mới đổi thì sửa `salesName`)*
- email: `chaulong.vinfast@gmail.com`
- địa chỉ: `643 QL1A, Kp2, Long Bình, Biên Hòa, Đồng Nai`
- **facebook:** `https://www.facebook.com/VinFastdongnaichinhhang`
- **messenger:** `https://m.me/VinFastdongnaichinhhang`

**Cụm nút nổi (`FloatingCall.tsx`):** Gọi · Messenger · Zalo · Facebook + nút back-to-top.
- **Vị trí responsive:** dưới `lg` (mobile/tablet ~8 inch) cụm liên hệ nằm **bên phải**, back-to-top **bên trái**; từ `lg` trở lên đảo lại (liên hệ trái, back-to-top phải). Nhãn hover tự lật theo.
- **Zalo** mở dạng **cửa sổ popup** (`window.open`, 420×640) tới `zalo.me/0352444809`. Facebook/Messenger mở tab mới. (Zalo/FB chỉ mở được chat khi số/trang đã tồn tại.)

## 8. Tác vụ maintain thường gặp

- **Sửa giá / tên / mô tả / thông số 1 xe:** sửa trong `CARS` ở `src/lib/cars.ts`.
- **Thêm xe mới:** thêm 1 object vào `CARS` (đủ field theo type `Car`), bỏ ảnh card vào `public/images/cars/`, ảnh gallery vào `public/images/gallery/<slug>/`. Route `/san-pham/<slug>` tự sinh.
- **Đổi SĐT / Facebook / Zalo:** sửa `CONTACT`. Kiểm tra thêm 2 link zalo hardcode trong `khuyen-mai/page.tsx` (đã trỏ `CONTACT.phoneRaw`).
- **Đổi banner hero:** thay ảnh trong `public/images/banners/` + sửa `BANNERS`.
- **Đổi màu thương hiệu:** sửa token trong `@theme inline` (`globals.css`).
- Sau khi sửa: chạy `npm run typecheck` rồi `npm run build` để chắc chắn.

## 9. Assets (`public/images/`)

- `logo.png`, `seller.jpg`
- `banners/` — 3 banner hero
- `cars/` — 13 ảnh thẻ xe
- `gallery/<slug>/` — ảnh chi tiết từng xe (đánh số `1.png`, `2.jpg`...)

Tất cả ảnh đã tải về local từ site gốc; không phụ thuộc CDN ngoài.

## 10. Lưu ý / cạm bẫy

- Route động Next 16: `params: Promise<{slug}>` → `const { slug } = await params`.
- Component có state/handler/scroll/IntersectionObserver phải `"use client"`.
- Dữ liệu từng được sinh bằng script cào (parse HTML → JSON → `cars.ts`); các script đó là tạm trong scratchpad, **không còn trong repo**. Nguồn sự thật giờ là `cars.ts` — sửa trực tiếp file này.
- Không có test tự động. "Kiểm thử" = `npm run build` pass + tự mở `localhost:3000` xem.
- `khuyen-mai/page.tsx` chứa nội dung khuyến mãi hardcode (mốc thời gian 2026) — cập nhật thủ công khi CTKM đổi.

---

@AGENTS.md
