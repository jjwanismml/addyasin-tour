import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://addatours.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ADDA Luxury Lycia — Bespoke Journeys on the Lycian Coast',
    template: '%s | ADDA Luxury Lycia',
  },
  description:
    'ADDA Luxury Lycia orchestrates entirely bespoke journeys, private yacht charters, VIP concierge and chauffeured experiences across Kalkan, Kekova and the Lycian coast. Est. 1999.',
  applicationName: 'ADDA Luxury Lycia',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Kalkan luxury tours',
    'Lycian coast yacht charter',
    'Kekova private tour',
    'Saklikent off-road',
    'Patara dunes safari',
    'Meis day trip',
    'VIP concierge Turkey',
    'bespoke travel Lycia',
    'private chauffeur Kalkan',
    'Adda Tours',
  ],
  authors: [{ name: 'ADDA Luxury Lycia' }],
  creator: 'ADDA Luxury Lycia',
  publisher: 'ADDA Luxury Lycia',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'tr-TR': '/tr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'ADDA Luxury Lycia',
    title: 'ADDA Luxury Lycia — Bespoke Journeys on the Lycian Coast',
    description:
      'Private yacht charters, VIP concierge and bespoke Lycian itineraries crafted for the world\'s most discerning travelers.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'ADDA Luxury Lycia — Lycian Coast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADDA Luxury Lycia — Bespoke Journeys on the Lycian Coast',
    description:
      'Private yacht charters, VIP concierge and bespoke Lycian itineraries crafted for the world\'s most discerning travelers.',
    images: [
      'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'travel',
};

export const viewport: Viewport = {
  themeColor: '#020202',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'ADDA Luxury Lycia',
  alternateName: 'Adda Group',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Pioneer of distinguished travel in Kalkan, Turkey. Bespoke yacht charters, VIP concierge and curated Lycian experiences since 1999.',
  foundingDate: '1999',
  telephone: '+90 533 513 85 73',
  email: 'info@addatours.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kalkan',
    addressRegion: 'Antalya',
    addressCountry: 'TR',
  },
  areaServed: ['Kalkan', 'Kekova', 'Kas', 'Patara', 'Saklikent', 'Meis'],
  sameAs: [
    'https://www.instagram.com/addatours/',
    'https://www.facebook.com/AddaTours/',
    'https://x.com/addatours',
    'https://tr.pinterest.com/AddaTours/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body className="font-sans bg-ink text-[#e5e5e5] antialiased">
        <div className="film-grain" aria-hidden="true"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
