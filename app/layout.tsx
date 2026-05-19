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
    default: 'Kalkan & Kas Tours | Boat Trips, Jeep Safari & Airport Transfers — Adda Tours Yasin',
    template: '%s | Adda Tours Yasin',
  },
  description:
    'Book Kalkan and Kas tours with Adda Tours Yasin. Boat trips, Saklikent jeep safari, Kekova Sunken City, Patara, Meis Island, private airport transfers and car hire on the Lycian Coast.',
  applicationName: 'Adda Tours Yasin',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Kalkan tours',
    'Kas tours',
    'Kalkan boat trip',
    'Kekova sunken city tour',
    'Saklikent jeep safari',
    'Patara beach tour',
    'Meis island day trip',
    'Kalkan airport transfer',
    'Dalaman to Kalkan transfer',
    'Kalkan car hire',
    'private tours Kalkan',
    'day trips from Kalkan',
    'things to do in Kalkan',
    'Turkish Riviera tours',
    'Lycian Coast excursions',
    'Antalya excursions',
    'Kalkan tekne turu',
    'Kaş turları',
    'экскурсии в Калкане',
    'морская прогулка Калкан',
    'Adda Tours Yasin',
  ],
  authors: [{ name: 'Adda Tours Yasin' }],
  creator: 'Adda Tours Yasin',
  publisher: 'Adda Tours Yasin',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'tr-TR': '/tr',
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Adda Tours Yasin',
    title: 'Kalkan & Kas Tours | Boat Trips, Jeep Safari & Airport Transfers',
    description:
      'Book Kalkan and Kas tours with Adda Tours Yasin. Boat trips, Saklikent jeep safari, Kekova Sunken City, Patara, Meis Island, private airport transfers and car hire on the Lycian Coast.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Kalkan boat trip — Adda Tours Yasin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalkan & Kas Tours | Boat Trips, Jeep Safari & Airport Transfers',
    description:
      'Book Kalkan and Kas tours with Adda Tours Yasin. Boat trips, Saklikent jeep safari, Kekova Sunken City, Patara, Meis Island, private airport transfers and car hire on the Lycian Coast.',
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
  name: 'Adda Tours Yasin',
  alternateName: ['ADDA Luxury Lycia', 'Adda Group', 'Adda Tours'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Kalkan and Kas tours, boat trips, jeep safaris, Kekova Sunken City tours, airport transfers and car hire on the Turkish Riviera Lycian Coast.',
  foundingDate: '1999',
  telephone: '+90 533 513 85 73',
  email: 'info@addatours.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kalkan',
    addressRegion: 'Antalya',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.2643,
    longitude: 29.4176,
  },
  areaServed: [
    'Kalkan',
    'Kas',
    'Kekova',
    'Patara',
    'Saklikent',
    'Meis Island',
    'Fethiye',
    'Antalya',
    'Demre',
    'Myra',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kalkan & Kas Tours',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Kalkan Boat Trip' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Kekova Sunken City Tour' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Saklikent Jeep Safari' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Patara Sunset Jeep Safari' } },
      { '@type': 'Offer', itemOffered: { '@type': 'TouristTrip', name: 'Sea Kayaking in Kekova' } },
    ],
  },
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
