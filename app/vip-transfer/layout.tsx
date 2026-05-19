import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://addatours.com';

export const metadata: Metadata = {
  title: 'Kalkan Airport Transfer & Car Hire | Dalaman to Kalkan',
  description:
    'Private airport transfer from Dalaman or Antalya to Kalkan with flight tracking, meet & greet and 24/7 availability. Car hire in Kalkan also available. Book via WhatsApp.',
  keywords: [
    'Kalkan airport transfer',
    'Dalaman to Kalkan transfer',
    'Antalya to Kalkan transfer',
    'Dalaman Kalkan transfer',
    'Kalkan car hire',
    'Kas car hire',
    'private transfer Kalkan',
    'Dalaman airport Kalkan taxi',
    'Kalkan transfer price',
    'трансфер Даламан Калкан',
    'аренда авто Калкан',
    'dalaman kalkan transfer',
  ],
  alternates: {
    canonical: `${SITE_URL}/vip-transfer/`,
    languages: {
      'en-US': `${SITE_URL}/vip-transfer/`,
      'tr-TR': `${SITE_URL}/tr/transfer/`,
      'ru-RU': `${SITE_URL}/ru/transfer/`,
    },
  },
  openGraph: {
    title: 'Kalkan Airport Transfer & Car Hire | Dalaman to Kalkan',
    description:
      'Private airport transfer from Dalaman or Antalya to Kalkan. Flight tracking, 24/7 service, meet & greet. Car hire also available. Book via WhatsApp.',
    url: `${SITE_URL}/vip-transfer/`,
    siteName: 'Adda Tours Yasin',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1494905998459-3642952f4c93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Kalkan airport transfer — private VIP vehicle',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kalkan Airport Transfer & Car Hire',
  provider: {
    '@type': 'TravelAgency',
    name: 'Adda Tours Yasin',
    telephone: '+90 533 513 85 73',
    url: SITE_URL,
  },
  description:
    'Private airport transfer from Dalaman and Antalya airports to Kalkan. Flight tracking, 24/7 availability, meet & greet. Car hire also available.',
  areaServed: ['Kalkan', 'Kas', 'Antalya', 'Dalaman', 'Fethiye'],
  serviceType: 'Airport Transfer',
};

export default function VipTransferLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      {children}
    </>
  );
}
