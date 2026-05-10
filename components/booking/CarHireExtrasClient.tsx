'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Search } from 'lucide-react';
import BookingPageShell from '@/components/booking/BookingPageShell';
import BookingStepper from '@/components/booking/BookingStepper';
import { CAR_EXTRAS, FLEET } from '@/lib/booking-data';

const STEPS = [
  { id: 'search', label: 'Search', icon: Search },
  { id: 'choose', label: 'Choose a Car' },
  { id: 'extras', label: 'Extras' },
  { id: 'book', label: 'Book' },
];

export default function CarHireExtrasClient() {
  const searchParams = useSearchParams();
  const carId = searchParams.get('carId') ?? FLEET[0].id;
  const pickup = searchParams.get('pickup') ?? 'Kalkan';
  const returnLoc =
    searchParams.get('return') ?? searchParams.get('returnLoc') ?? 'Kalkan';
  const dropDate = searchParams.get('dropDate') ?? '—';
  const dropTime = searchParams.get('dropTime') ?? '—';

  const car = useMemo(
    () => FLEET.find((c) => c.id === carId) ?? FLEET[0],
    [carId]
  );

  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const extrasTotal = useMemo(() => {
    let extra = 0;
    CAR_EXTRAS.forEach((e) => {
      if (!selected[e.id] || e.free) return;
      if (e.flatFee) extra += e.flatFee;
      else if (e.pricePerDay) extra += e.pricePerDay * car.days;
    });
    return extra;
  }, [selected, car.days]);

  const total = car.priceGbp + extrasTotal;

  const toggle = (id: string) =>
    setSelected((s) => ({ ...s, [id]: !s[id] }));

  const continueHref = () => {
    const q = new URLSearchParams(searchParams.toString());
    const ids = CAR_EXTRAS.filter((e) => selected[e.id]).map((e) => e.id);
    q.set('extras', ids.join(','));
    q.set('carId', car.id);
    return `/booking/car-hire/complete/?${q.toString()}`;
  };

  return (
    <BookingPageShell
      title="Available Extras"
      subtitle="Enhance your hire — optional add-ons before you confirm."
      stepper={<BookingStepper steps={STEPS} currentIndex={2} />}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          {CAR_EXTRAS.map((ex) => (
            <article
              key={ex.id}
              className={`flex flex-col overflow-hidden rounded-sm border bg-[#0a0a0a] transition-colors ${
                selected[ex.id]
                  ? 'border-gold/50'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="relative aspect-[16/10] bg-[#141414]">
                <Image
                  src={ex.image}
                  alt={ex.title}
                  fill
                  className="object-contain object-center opacity-95"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-lg text-white">{ex.title}</h2>
                    <p className="mt-2 text-sm font-light leading-relaxed text-gray-400">
                      {ex.description}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={!!selected[ex.id]}
                    onChange={() => toggle(ex.id)}
                    className="mt-1 accent-[#D4AF37]"
                    aria-label={`Select ${ex.title}`}
                  />
                </div>
                <p className="mt-4 font-serif text-xl text-gold">{ex.priceLabel}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 overflow-hidden rounded-sm border border-white/10 bg-[#080808] shadow-xl">
            <div className="relative aspect-[16/10] bg-[#141414]">
              <Image
                src={car.image}
                alt=""
                fill
                className="object-contain p-4"
                sizes="400px"
              />
            </div>
            <div className="space-y-5 p-6 md:p-8">
              <div>
                <p className="font-serif text-lg text-white">{car.name}</p>
                <ul className="mt-3 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.12em] text-gray-500">
                  <li>{car.pax} passengers</li>
                  <li>{car.bags} suitcases</li>
                  <li>{car.transmission}</li>
                  <li>A/C</li>
                </ul>
              </div>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Pick-up</dt>
                  <dd className="text-right text-gray-300">
                    {dropDate} {dropTime}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Return</dt>
                  <dd className="text-right text-gray-300">—</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Pick-up location</dt>
                  <dd className="text-right">{pickup}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Car rental</dt>
                  <dd className="text-right">£{car.priceGbp}</dd>
                </div>
              </dl>
              <p className="border-t border-white/10 pt-4 font-serif text-2xl text-gold">
                Total: £{total}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href={continueHref()}
          className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-gold to-gold-dark px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110"
        >
          Continue booking
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </div>
    </BookingPageShell>
  );
}
