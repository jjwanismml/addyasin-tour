'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Plane, User, PlaneLanding, PlaneTakeoff, MapPin } from 'lucide-react';
import BookingPageShell from '@/components/booking/BookingPageShell';
import BookingStepper from '@/components/booking/BookingStepper';
import { TRANSFER_VEHICLES } from '@/lib/booking-data';
import type { TransferType } from '@/lib/booking-data';

const STEPS = [
  { id: 'search', label: 'Search' },
  { id: 'vehicle', label: 'Choose Vehicle' },
  { id: 'book', label: 'Details & Book' },
];

export default function TransferCompleteClient() {
  const searchParams = useSearchParams();
  const airport = searchParams.get('airport') ?? 'Dalaman Airport';
  const resort = searchParams.get('resort') ?? 'Kalkan';
  const transferType = (searchParams.get('type') ?? 'roundtrip') as TransferType;
  const vehicleId = searchParams.get('vehicle') ?? 'mv-1-3';

  const vehicle = useMemo(
    () => TRANSFER_VEHICLES.find((v) => v.id === vehicleId) ?? TRANSFER_VEHICLES[0],
    [vehicleId]
  );

  const typeLabel = useMemo(() => {
    if (transferType === 'roundtrip') return 'Round-trip';
    if (transferType === 'arrival') return 'Arrival';
    return 'Departure';
  }, [transferType]);

  return (
    <BookingPageShell
      title="Complete Your Booking"
      subtitle="We monitor flights and meet you on time — add your details below."
      stepper={<BookingStepper steps={STEPS} currentIndex={2} />}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-7">
          <div className="rounded-sm border border-gold/20 bg-gold/5 p-5 text-sm font-light leading-relaxed text-gray-300">
            <p>
              For arrival transfers, we track your flight. If you are delayed, we wait. For
              departures, we suggest pick-up times aligned with airport check-in. Questions?
              Call{' '}
              <a href="tel:+905335138573" className="text-gold underline-offset-4 hover:underline">
                +90 533 513 85 73
              </a>
              .
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
                <select className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none focus:border-gold">
                  <option className="bg-[#050505]">Mr</option>
                  <option className="bg-[#050505]">Mrs</option>
                  <option className="bg-[#050505]">Ms</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  First name
                </span>
                <input
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                  placeholder="First name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Last name
                </span>
                <input
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                  placeholder="Last name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Age
                </span>
                <input
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                  placeholder="—"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Email
                </span>
                <input
                  type="email"
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Phone
                </span>
                <input
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                  placeholder="+44 …"
                />
              </label>
            </div>
          </section>

          <section className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            <h2 className="mb-6 flex items-center gap-3 font-serif text-xl text-white">
              <PlaneLanding className="h-5 w-5 text-gold" strokeWidth={1.5} />
              Arrival flight
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Date
                </span>
                <input
                  type="text"
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none focus:border-gold"
                  placeholder="DD-MM-YYYY"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Flight no.
                </span>
                <input
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none focus:border-gold"
                  placeholder="e.g. BA123"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Time
                </span>
                <input
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none focus:border-gold"
                  placeholder="HH:MM"
                />
              </label>
            </div>
          </section>

          <section className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            <h2 className="mb-6 flex items-center gap-3 font-serif text-xl text-white">
              <PlaneTakeoff className="h-5 w-5 text-gold" strokeWidth={1.5} />
              Departure flight
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Date
                </span>
                <input
                  type="text"
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none focus:border-gold"
                  placeholder="DD-MM-YYYY"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Flight no.
                </span>
                <input
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none focus:border-gold"
                  placeholder="e.g. BA456"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Time
                </span>
                <input
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none focus:border-gold"
                  placeholder="HH:MM"
                />
              </label>
            </div>
          </section>

          <section className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            <h2 className="mb-6 flex items-center gap-3 font-serif text-xl text-white">
              <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} />
              Addresses & notes
            </h2>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Accommodation address
                </span>
                <textarea
                  rows={3}
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                  placeholder="Villa or hotel address"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Your notes
                </span>
                <textarea
                  rows={3}
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                  placeholder="Child seats, luggage, special requests…"
                />
              </label>
            </div>
          </section>

          <div className="flex justify-center pb-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-gold to-gold-dark px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110"
            >
              <Plane className="h-4 w-4" strokeWidth={2} />
              Book now
            </button>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-28 overflow-hidden rounded-sm border border-white/10 bg-[#080808] shadow-xl">
            <div className="relative aspect-[16/10] bg-[#121212]">
              <Image
                src={vehicle.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            <div className="space-y-6 p-6 md:p-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                  Vehicle
                </p>
                <p className="mt-1 font-serif text-lg text-white">{vehicle.title}</p>
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Airport</dt>
                  <dd className="text-right">{airport}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Resort</dt>
                  <dd className="text-right">{resort}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Transfer type</dt>
                  <dd className="text-right">{typeLabel}</dd>
                </div>
              </dl>
              <p className="border-t border-white/10 pt-6 font-serif text-2xl text-gold">
                Total: £{vehicle.priceGbp}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </BookingPageShell>
  );
}
