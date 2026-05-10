import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EXCURSIONS, getExcursionBySlug } from '@/lib/excursions-data';
import ExcursionDetailView from '@/components/excursions/ExcursionDetailView';

export function generateStaticParams() {
  return EXCURSIONS.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const excursion = getExcursionBySlug(params.slug);
  if (!excursion) {
    return { title: 'Excursion' };
  }
  return {
    title: excursion.title,
    description: excursion.metaDescription,
    alternates: { canonical: `/excursions/${excursion.slug}/` },
    openGraph: {
      title: excursion.title,
      description: excursion.metaDescription,
    },
  };
}

export default function ExcursionPage({
  params,
}: {
  params: { slug: string };
}) {
  const excursion = getExcursionBySlug(params.slug);
  if (!excursion) notFound();

  return (
    <div className="min-h-screen bg-ink pt-24 md:pt-28">
      <ExcursionDetailView excursion={excursion} />
    </div>
  );
}
