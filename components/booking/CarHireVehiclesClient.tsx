'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  ArrowRight,
  ChevronDown,
  Fuel,
  Gauge,
  Snowflake,
  Luggage,
  Users,
  Search,
} from 'lucide-react';
import BookingPageShell from '@/components/booking/BookingPageShell';
import BookingStepper from '@/components/booking/BookingStepper';
import {
  FLEET,
  MANUFACTURERS,
  VEHICLE_TYPES,
  type FleetCar,
} from '@/lib/booking-data';

const STEPS = [
  { id: 'search', label: 'Search', icon: Search },
  { id: 'choose', label: 'Choose a Car' },
  { id: 'extras', label: 'Extras' },
  { id: 'book', label: 'Book' },
];

function qsBase(searchParams: URLSearchParams) {
  const pickup = searchParams.get('pickup') ?? 'Kalkan';
  const ret = searchParams.get('return') ?? searchParams.get('returnLoc') ?? 'Kalkan';
  const dropDate = searchParams.get('dropDate') ?? '—';
  const dropTime = searchParams.get('dropTime') ?? '—';
  const q = new URLSearchParams({
    pickup,
    return: ret,
    dropDate,
    dropTime,
  });
  return q;
}

export default function CarHireVehiclesClient() {
  const searchParams = useSearchParams();
  const pickup = searchParams.get('pickup') ?? 'Kalkan';
  const returnLoc =
    searchParams.get('return') ?? searchParams.get('returnLoc') ?? 'Kalkan';
  const dropDate = searchParams.get('dropDate') ?? '—';
  const dropTime = searchParams.get('dropTime') ?? '—';

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPax, setMinPax] = useState(4);
  const [maxPax, setMaxPax] = useState(9);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return FLEET.filter((c) => {
      if (selectedBrands.length && !selectedBrands.includes(c.manufacturer)) {
        return false;
      }
      if (selectedTypes.length && !selectedTypes.includes(c.vehicleType)) {
        return false;
      }
      if (c.pax < minPax || c.pax > maxPax) return false;
      return true;
    });
  }, [selectedBrands, selectedTypes, minPax, maxPax]);

  const toggle = (arr: string[], v: string, set: (x: string[]) => void) => {
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  };

  const hrefForCar = (car: FleetCar) => {
    const q = qsBase(new URLSearchParams(searchParams.toString()));
    q.set('carId', car.id);
    return `/booking/car-hire/extras/?${q.toString()}`;
  };

  return (
    <BookingPageShell
      title="Choose Your Car"
      subtitle="Refine your fleet — every vehicle is maintained to ADDA standards."
      stepper={<BookingStepper steps={STEPS} currentIndex={1} />}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-8 lg:col-span-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {filtered.map((car) => (
              <article
                key={car.id}
                className="flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] transition-colors hover:border-gold/35"
              >
                <div className="relative aspect-[16/11] bg-[#141414]">
                  <Image
                    src={car.image}
                    alt=""
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-white/10 p-5">
                  <h2 className="font-serif text-lg text-white">{car.name}</h2>
                  <p className="mt-2 font-serif text-2xl text-white">
                    £{car.priceGbp}
                    <span className="ml-2 font-sans text-xs font-normal text-gray-400">
                      / {car.days} days
                    </span>
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.12em] text-gray-400">
                    <li className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                      {car.pax} Pax
                    </li>
                    <li className="flex items-center gap-2">
                      <Luggage className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                      {car.bags} Bags
                    </li>
                    <li className="flex items-center gap-2">
                      <Gauge className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                      {car.transmission}
                    </li>
                    <li className="flex items-center gap-2">
                      <Fuel className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                      {car.fuel}
                    </li>
                    <li className="col-span-2 flex items-center gap-2">
                      <Snowflake className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                      A/C
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-1 items-end">
                    <Link
                      href={hrefForCar(car)}
                      className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110"
                    >
                      Select
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!filtered.length ? (
            <p className="text-center text-gray-500">
              No vehicles match these filters — widen passenger range or clear filters.
            </p>
          ) : null}
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8 rounded-sm border border-white/10 bg-[#080808] p-6 md:p-8">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-gold">
                Filters
              </p>
              <p className="mt-2 text-sm font-light text-gray-400">
                Pick-up {pickup} · Return {returnLoc}
              </p>
            </div>

            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Manufacturers
              </p>
              <ul className="space-y-2">
                {MANUFACTURERS.map((m) => (
                  <li key={m}>
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-300">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(m)}
                        onChange={() =>
                          toggle(selectedBrands, m, setSelectedBrands)
                        }
                        className="accent-[#D4AF37]"
                      />
                      {m}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Passengers
              </p>
              <div className="flex gap-3">
                <label className="flex-1">
                  <span className="mb-1 block text-[9px] uppercase text-gray-600">
                    Min
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={minPax}
                    onChange={(e) => setMinPax(Number(e.target.value))}
                    className="w-full rounded-sm border border-white/15 bg-[#050505] py-2 px-3 text-sm outline-none focus:border-gold"
                  />
                </label>
                <label className="flex-1">
                  <span className="mb-1 block text-[9px] uppercase text-gray-600">
                    Max
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={maxPax}
                    onChange={(e) => setMaxPax(Number(e.target.value))}
                    className="w-full rounded-sm border border-white/15 bg-[#050505] py-2 px-3 text-sm outline-none focus:border-gold"
                  />
                </label>
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Vehicle type
              </p>
              <ul className="space-y-2">
                {VEHICLE_TYPES.map((t) => (
                  <li key={t}>
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-300">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(t)}
                        onChange={() =>
                          toggle(selectedTypes, t, setSelectedTypes)
                        }
                        className="accent-[#D4AF37]"
                      />
                      {t}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 border border-gold/40 bg-gold/10 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-gold/20"
              onClick={() => {
                setSelectedBrands([]);
                setSelectedTypes([]);
                setMinPax(4);
                setMaxPax(9);
              }}
            >
              Reset filters
              <ChevronDown className="h-4 w-4 rotate-180" strokeWidth={2} />
            </button>
          </div>
        </aside>
      </div>
    </BookingPageShell>
  );
}
