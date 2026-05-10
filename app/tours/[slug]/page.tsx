import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TOURS } from '@/lib/data';
import SingleTourClient from './SingleTourClient';

export function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tour = TOURS.find((t) => t.slug === params.slug);
  if (!tour) return { title: 'Tour Not Found' };
  return {
    title: tour.title,
    description: tour.overview.slice(0, 160),
    alternates: { canonical: `/tours/${tour.slug}/` },
  };
}

export default function TourPage({ params }: { params: { slug: string } }) {
  const tour = TOURS.find((t) => t.slug === params.slug);
  if (!tour) return notFound();
  return <SingleTourClient tour={tour} />;
}
