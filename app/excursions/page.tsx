import type { Metadata } from 'next';
import { Suspense } from 'react';
import ExcursionsHubClient from '@/components/excursions/ExcursionsHubClient';

export const metadata: Metadata = {
  title: 'Excursions',
  description:
    'Daily tours, boat trips, adventure activities and multi-day journeys from Kalkan across the Lycian coast — curated by ADDA Luxury Lycia.',
  alternates: { canonical: '/excursions/' },
};

export default function ExcursionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ink font-sans text-[#e5e5e5]">
      <section className="relative flex h-[55vh] min-h-[320px] w-full flex-col justify-end px-6 pb-12 pt-28 md:h-[60vh] md:px-16 md:pb-20 md:pt-36">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src="/Excursions.jpg"
            alt=""
            className="h-full w-full object-cover opacity-35 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-screen-2xl">
          <p className="mb-3 text-[9px] uppercase tracking-[0.45em] text-gold md:text-[10px]">
            Excursions
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.05] text-white md:text-7xl lg:text-8xl">
            The Lycian coast,
            <span className="mt-2 block italic text-gold-light">day by day</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-gray-400 md:text-base">
            Ancient cities, turquoise bays, jeep safaris and longer escapes — each
            experience is crafted with the same discretion and local insight as our
            private transfers.
          </p>
          <nav className="mt-8 text-[10px] uppercase tracking-[0.25em] text-gray-500">
            <a href="/" className="transition-colors hover:text-gold">
              Home
            </a>
            <span className="mx-2 text-white/25">/</span>
            <span className="text-gray-400">Excursions</span>
          </nav>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="min-h-[200px] border-b border-white/10 bg-[#020202]/95 px-6 py-10 md:px-12">
            <div className="mx-auto max-w-screen-2xl animate-pulse text-center text-xs text-gray-600">
              Loading excursions…
            </div>
          </div>
        }
      >
        <ExcursionsHubClient />
      </Suspense>
    </main>
  );
}
