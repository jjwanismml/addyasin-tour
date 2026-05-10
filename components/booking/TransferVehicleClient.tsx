'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Snowflake, Users } from 'lucide-react';
import BookingPageShell from '@/components/booking/BookingPageShell';
import BookingStepper from '@/components/booking/BookingStepper';
import { TRANSFER_VEHICLES } from '@/lib/booking-data';
import type { TransferType } from '@/lib/booking-data';

const STEPS = [
  { id: 'search', label: 'Search' },
  { id: 'vehicle', label: 'Choose Vehicle' },
  { id: 'book', label: 'Details & Book' },
];

export default function TransferVehicleClient() {
  const searchParams = useSearchParams();
  const airport = searchParams.get('airport') ?? 'Dalaman Airport';
  const resort = searchParams.get('resort') ?? 'Kalkan';
  const transferType = (searchParams.get('type') ?? 'roundtrip') as TransferType;

  const typeLabel = useMemo(() => {
    if (transferType === 'roundtrip') return 'Round-trip';
    if (transferType === 'arrival') return 'Arrival';
    return 'Departure';
  }, [transferType]);

  const baseQs = useMemo(() => {
    const q = new URLSearchParams({
      airport,
      resort,
      type: transferType,
    });
    return q.toString();
  }, [airport, resort, transferType]);

  return (
    <BookingPageShell
      title="Choose Your Vehicle"
      subtitle="Select the vehicle class that suits your party."
      stepper={
        <BookingStepper steps={STEPS} currentIndex={1} />
      }
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8 space-y-8">
          {TRANSFER_VEHICLES.map((v) => (
            <article
              key={v.id}
              className="group overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] transition-colors hover:border-gold/40"
            >
              <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
                <div className="relative aspect-[16/10] bg-[#121212] md:aspect-auto md:min-h-[200px]">
                  <Image
                    src={v.image}
                    alt=""
                    fill
                    className="object-cover opacity-90 transition group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-serif text-xl text-white md:text-2xl font-light">
                    {v.title}
                  </h2>
                  <p className="mt-2 font-serif text-3xl text-white md:text-4xl">
                    £{v.priceGbp}
                    <span className="ml-2 font-sans text-xs font-normal uppercase tracking-[0.2em] text-gold/90">
                      {v.subtitle}
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.15em] text-gray-400">
                    <span className="inline-flex items-center gap-2">
                      <Users className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      {v.pax}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Snowflake className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      A/C
                    </span>
                  </div>
                  <div className="mt-8">
                    <Link
                      href={`/booking/transfer/complete/?${baseQs}&vehicle=${encodeURIComponent(
                        v.id
                      )}`}
                      className="inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold-dark py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110 md:w-auto md:min-w-[200px]"
                    >
                      Select
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-black/10">
                        <ArrowRight className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-sm border border-white/10 bg-[#080808] p-6 shadow-xl md:p-8">
            <p className="text-[9px] uppercase tracking-[0.35em] text-gold">
              Journey summary
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-4">
                <dt className="text-gray-500">Airport</dt>
                <dd className="text-right text-white">{airport}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-4">
                <dt className="text-gray-500">Resort</dt>
                <dd className="text-right text-white">{resort}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">Transfer type</dt>
                <dd className="text-right text-white">{typeLabel}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </BookingPageShell>
  );
}
