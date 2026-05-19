import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TOURS } from '@/lib/data';
import SingleTourClient from './SingleTourClient';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://addatours.com';

export function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tour = TOURS.find((t) => t.slug === params.slug);
  if (!tour) return { title: 'Tour Not Found' };

  const title = tour.seoTitle ?? `${tour.title} | ADDA Luxury Lycia`;
  const description = tour.seoDescription ?? tour.overview.slice(0, 160);
  const canonical = `${SITE_URL}/tours/${tour.slug}/`;

  return {
    title,
    description,
    keywords: tour.seoKeywords,
    alternates: {
      canonical,
      languages: {
        'en-US': canonical,
        'tr-TR': `${SITE_URL}/tr/turlar/${tour.slug}/`,
        'ru-RU': `${SITE_URL}/ru/tury/${tour.slug}/`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'ADDA Luxury Lycia',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: tour.heroImage,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [tour.heroImage],
    },
  };
}

export default function TourPage({ params }: { params: { slug: string } }) {
  const tour = TOURS.find((t) => t.slug === params.slug);
  if (!tour) return notFound();

  const canonical = `${SITE_URL}/tours/${tour.slug}/`;

  const tourSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.seoDescription ?? tour.overview,
    url: canonical,
    touristType: ['Leisure', 'Adventure'],
    provider: {
      '@type': 'TravelAgency',
      name: 'ADDA Luxury Lycia',
      url: SITE_URL,
      telephone: '+90 533 513 85 73',
    },
    offers: tour.priceFrom
      ? {
          '@type': 'Offer',
          price: tour.priceFrom.replace(/[^\d]/g, ''),
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: canonical,
        }
      : undefined,
    duration: `PT${tour.duration.replace('Full Day', '8H').replace(' Hours', 'H').replace(' Hour', 'H')}`,
    image: tour.heroImage,
    itinerary: {
      '@type': 'ItemList',
      itemListElement: tour.activities.map((activity, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: activity,
      })),
    },
  };

  const faqSchema = tour.faqs && tour.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: tour.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tours', item: `${SITE_URL}/tours/` },
      { '@type': 'ListItem', position: 3, name: tour.title, item: canonical },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
        suppressHydrationWarning
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          suppressHydrationWarning
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        suppressHydrationWarning
      />
      <SingleTourClient tour={tour} />
    </>
  );
}
