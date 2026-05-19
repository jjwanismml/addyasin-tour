import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://addatours.com';

export const metadata: Metadata = {
  title: 'Kalkan & Kas Tours | Boat Trips, Jeep Safaris, Diving & More',
  description:
    'Browse all tours from Kalkan and Kas: boat trips, Saklikent jeep safari, Kekova Sunken City, Meis Island, sea kayaking, scuba diving and historical day trips on the Lycian Coast.',
  keywords: [
    'Kalkan tours',
    'Kas tours',
    'Kalkan boat trip',
    'Saklikent jeep safari',
    'Kekova tour',
    'day trips from Kalkan',
    'Lycian Coast excursions',
    'things to do in Kalkan',
    'Kalkan activities',
    'Turkish Riviera tours',
  ],
  alternates: {
    canonical: `${SITE_URL}/tours/`,
    languages: {
      'en-US': `${SITE_URL}/tours/`,
      'tr-TR': `${SITE_URL}/tr/turlar/`,
      'ru-RU': `${SITE_URL}/ru/tury/`,
    },
  },
  openGraph: {
    title: 'Kalkan & Kas Tours | Boat Trips, Jeep Safaris & Day Trips',
    description:
      'All tours from Kalkan and Kas: boat trips, Saklikent jeep safari, Kekova Sunken City, Meis Island day trip, sea kayaking, scuba diving and historical tours.',
    url: `${SITE_URL}/tours/`,
    siteName: 'Adda Tours Yasin',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Kalkan tours — boat trip on the Lycian Coast',
      },
    ],
  },
};

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
