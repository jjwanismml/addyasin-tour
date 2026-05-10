# ADDA Luxury Lycia — Next.js

Lüks, sinematik ve tamamen SEO uyumlu Next.js 14 (App Router + TypeScript + TailwindCSS) projesi.

## Tech Stack

- **Next.js 14** (App Router, RSC, Metadata API)
- **React 18** + **TypeScript**
- **Tailwind CSS 3**
- **lucide-react** (icon set)
- **next/font** (Cormorant Garamond + Jost — self-hosted, SEO + performance)

## SEO Özellikleri

- App Router `metadata` API (title template, description, keywords, canonical, hreflang)
- Open Graph + Twitter Card meta
- `app/robots.ts` ve `app/sitemap.ts` (dinamik üretim)
- JSON-LD `TravelAgency` schema (Organization data)
- `manifest.webmanifest`, `themeColor`, `viewport`
- Self-hosted Google Fonts (CLS + LCP iyileştirmesi)
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, ARIA labels)
- `next/image` remote pattern config (Unsplash)

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Tarayıcıda: <http://localhost:3000>

## Production Build

```bash
npm run build
npm run start
```

## Ortam Değişkenleri (opsiyonel)

`.env.local` dosyası oluşturup canonical URL'i tanımlayın:

```
NEXT_PUBLIC_SITE_URL=https://addatours.com
```

## Klasör Yapısı

```
app/
  layout.tsx        # SEO metadata, fontlar, JSON-LD
  page.tsx          # Ana sayfa (entegre edilen tasarım)
  globals.css       # Tailwind + custom luxury CSS
  robots.ts         # Dinamik robots.txt
  sitemap.ts        # Dinamik sitemap.xml
public/
  manifest.webmanifest
```
