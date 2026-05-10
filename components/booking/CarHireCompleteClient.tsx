'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import {
  Car,
  User,
  PlaneLanding,
  PlaneTakeoff,
  Home,
  Search,
} from 'lucide-react';
import BookingPageShell from '@/components/booking/BookingPageShell';
import BookingStepper from '@/components/booking/BookingStepper';
import { CAR_EXTRAS, FLEET } from '@/lib/booking-data';

const STEPS = [
  { id: 'search', label: 'Search', icon: Search },
  { id: 'choose', label: 'Choose a Car' },
  { id: 'extras', label: 'Extras' },
  { id: 'book', label: 'Book' },
];

export default function CarHireCompleteClient() {
  const searchParams = useSearchParams();
  const carId = searchParams.get('carId') ?? FLEET[0].id;
  const pickup = searchParams.get('pickup') ?? 'Kalkan';
  const returnLoc =
    searchParams.get('return') ?? searchParams.get('returnLoc') ?? 'Kalkan';
  const dropDate = searchParams.get('dropDate') ?? '—';
  const dropTime = searchParams.get('dropTime') ?? '—';
  const extrasParam = searchParams.get('extras') ?? '';

  const car = useMemo(
    () => FLEET.find((c) => c.id === carId) ?? FLEET[0],
    [carId]
  );

  const selectedExtras = useMemo(() => {
    const ids = extrasParam.split(',').filter(Boolean);
    return CAR_EXTRAS.filter((e) => ids.includes(e.id));
  }, [extrasParam]);

  const extrasTotal = useMemo(() => {
    let sum = 0;
    selectedExtras.forEach((e) => {
      if (e.free) return;
      if (e.flatFee) sum += e.flatFee;
      else if (e.pricePerDay) sum += e.pricePerDay * car.days;
    });
    return sum;
  }, [selectedExtras, car.days]);

  const total = car.priceGbp + extrasTotal;

  return (
    <BookingPageShell
      title="Complete Your Booking"
      subtitle="Tell us how to reach you — your vehicle is reserved while you finish."
      stepper={<BookingStepper steps={STEPS} currentIndex={3} />}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-7">
          <div className="rounded-sm border border-gold/20 bg-gold/5 p-5 text-sm font-light leading-relaxed text-gray-300">
            <p>
              Delivery to your villa can be arranged in Kalkan region. Airport handover is
              available on request. Save our line{' '}
              <a href="tel:+905335138573" className="text-gold underline-offset-4 hover:underline">
                +90 533 513 85 73
              </a>{' '}
              for day-of coordination.
            </p>
          </div>

          <section className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            <h2 className="mb-6 flex items-center gap-3 font-serif text-xl text-white">
              <User className="h-5 w-5 text-gold" strokeWidth={1.5} />
              Personal information
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block md:col-span-2">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Title
                </span>
                <select className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold">
                  <option className="bg-[#050505]">Mr</option>
                  <option className="bg-[#050505]">Mrs</option>
                  <option className="bg-[#050505]">Ms</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  First name
                </span>
                <input className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold" />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Last name
                </span>
                <input className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold" />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Age
                </span>
                <input className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold" />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Email *
                </span>
                <input
                  type="email"
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Phone *
                </span>
                <input className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold" />
              </label>
            </div>
          </section>

          <section className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            <h2 className="mb-6 flex items-center gap-3 font-serif text-xl text-white">
              <PlaneLanding className="h-5 w-5 text-gold" strokeWidth={1.5} />
              Arrival flight (optional)
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <input
                className="rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
                placeholder="Date"
              />
              <input
                className="rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
                placeholder="Flight no."
              />
              <input
                className="rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
                placeholder="Time"
              />
            </div>
          </section>

          <section className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            <h2 className="mb-6 flex items-center gap-3 font-serif text-xl text-white">
              <PlaneTakeoff className="h-5 w-5 text-gold" strokeWidth={1.5} />
              Departure flight (optional)
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <input
                className="rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
                placeholder="Date"
              />
              <input
                className="rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
                placeholder="Flight no."
              />
              <input
                className="rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
                placeholder="Time"
              />
            </div>
          </section>

          <section className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            <h2 className="mb-6 flex items-center gap-3 font-serif text-xl text-white">
              <Home className="h-5 w-5 text-gold" strokeWidth={1.5} />
              Address & notes
            </h2>
            <textarea
              rows={3}
              className="mb-4 w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
              placeholder="Accommodation address"
            />
            <textarea
              rows={3}
              className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm outline-none focus:border-gold"
              placeholder="Notes for delivery / collection"
            />
          </section>

          <div className="flex justify-center pb-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-gold to-gold-dark px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110"
            >
              <Car className="h-4 w-4" strokeWidth={2} />
              Book now
            </button>
          </div>
        </div>

        <aside className="lg:col-span-5">
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
              <p className="font-serif text-lg text-white">{car.name}</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Pick-up</dt>
                  <dd className="text-right">{dropDate}</dd>
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
                  <dt className="text-gray-500">Return location</dt>
                  <dd className="text-right">{returnLoc}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Car rental</dt>
                  <dd className="text-right">£{car.priceGbp}</dd>
                </div>
                {selectedExtras.map((e) => (
                  <div key={e.id} className="flex justify-between gap-4 text-gray-400">
                    <dt>{e.title}</dt>
                    <dd>
                      {e.free
                        ? 'FREE'
                        : e.flatFee != null
                          ? `£${e.flatFee}`
                          : `£${(e.pricePerDay ?? 0) * car.days}`}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="border-t border-white/10 pt-4 font-serif text-2xl text-gold">
                Total: £{total}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </BookingPageShell>
  );
}
