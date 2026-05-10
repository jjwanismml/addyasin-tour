'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plane,
  Car,
  Search,
  ChevronDown,
} from 'lucide-react';
import {
  AIRPORTS,
  CAR_LOCATIONS,
  RESORTS,
  TRANSFER_TYPES,
  type TransferType,
} from '@/lib/booking-data';
import {
  URL_BOOKING_AIRPORT_TRANSFER,
  URL_BOOKING_CAR_HIRE,
} from '@/lib/booking-links';

type Tab = 'transfer' | 'car';

function buildTransferHref(params: {
  airport: string;
  resort: string;
  transferType: TransferType;
}) {
  const q = new URLSearchParams({
    airport: params.airport,
    resort: params.resort,
    type: params.transferType,
  });
  return `${URL_BOOKING_AIRPORT_TRANSFER}?${q.toString()}`;
}

function buildCarHref(params: {
  pickup: string;
  returnLoc: string;
  dropOffDate: string;
  dropOffTime: string;
}) {
  const q = new URLSearchParams({
    pickup: params.pickup,
    return: params.returnLoc,
    dropDate: params.dropOffDate,
    dropTime: params.dropOffTime,
  });
  return `${URL_BOOKING_CAR_HIRE}?${q.toString()}`;
}

export default function HeroBookingWidget() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('transfer');
  const [slideDot, setSlideDot] = useState(0);

  /* Transfer */
  const [airport, setAirport] = useState<string>(AIRPORTS[0]);
  const [resort, setResort] = useState<string>(RESORTS[0]);
  const [transferType, setTransferType] = useState<TransferType>('roundtrip');

  /* Car hire */
  const [pickup, setPickup] = useState<string>(CAR_LOCATIONS[0]);
  const [returnLoc, setReturnLoc] = useState<string>(CAR_LOCATIONS[0]);
  const [dropOffDate, setDropOffDate] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');

  const transferSummary = useMemo(
    () => ({ airport, resort, transferType }),
    [airport, resort, transferType]
  );

  const onBookTransfer = () => {
    router.push(buildTransferHref(transferSummary));
  };

  const onSearchCars = () => {
    router.push(
      buildCarHref({
        pickup,
        returnLoc,
        dropOffDate: dropOffDate || '—',
        dropOffTime: dropOffTime || '—',
      })
    );
  };

  const tabBtn =
    'flex flex-1 items-center justify-center gap-2 py-3.5 px-3 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors duration-300';

  return (
    <div className="overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a]/85 shadow-2xl backdrop-blur-xl">
      {/* Tabs */}
      <div className="flex">
        <button
          type="button"
          onClick={() => setTab('transfer')}
          className={`${tabBtn} ${
            tab === 'transfer'
              ? 'bg-gradient-to-br from-gold to-gold-dark text-black'
              : 'bg-black/50 text-white hover:bg-black/70'
          }`}
        >
          <Plane className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          <span className="whitespace-nowrap">Airport Transfers</span>
        </button>
        <button
          type="button"
          onClick={() => setTab('car')}
          className={`${tabBtn} ${
            tab === 'car'
              ? 'bg-gradient-to-br from-gold to-gold-dark text-black'
              : 'bg-black/50 text-white hover:bg-black/70'
          }`}
        >
          <Car className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          <span className="whitespace-nowrap">Car Hire</span>
        </button>
      </div>

      <div className="border-t border-white/10 bg-[#0d0d0d]/90 p-5 sm:p-7 lg:p-8">
        {tab === 'transfer' ? (
          <>
            <div className="grid gap-6 sm:grid-cols-3">
              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  Airport
                </span>
                <div className="relative">
                  <select
                    value={airport}
                    onChange={(e) => setAirport(e.target.value)}
                    className="w-full appearance-none rounded-sm border border-white/15 bg-[#050505] py-3 pl-3 pr-9 text-sm text-white outline-none transition-colors focus:border-gold"
                  >
                    {AIRPORTS.map((a) => (
                      <option key={a} value={a} className="bg-[#050505]">
                        {a}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                    strokeWidth={1.5}
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  Resort
                </span>
                <div className="relative">
                  <select
                    value={resort}
                    onChange={(e) => setResort(e.target.value)}
                    className="w-full appearance-none rounded-sm border border-white/15 bg-[#050505] py-3 pl-3 pr-9 text-sm text-white outline-none transition-colors focus:border-gold"
                  >
                    {RESORTS.map((r) => (
                      <option key={r} value={r} className="bg-[#050505]">
                        {r}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                    strokeWidth={1.5}
                  />
                </div>
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  Transfer type
                </span>
                <div className="relative">
                  <select
                    value={transferType}
                    onChange={(e) =>
                      setTransferType(e.target.value as TransferType)
                    }
                    className="w-full appearance-none rounded-sm border border-white/15 bg-[#050505] py-3 pl-3 pr-9 text-sm text-white outline-none transition-colors focus:border-gold"
                  >
                    {TRANSFER_TYPES.map((t) => (
                      <option
                        key={t.value}
                        value={t.value}
                        className="bg-[#050505]"
                      >
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                    strokeWidth={1.5}
                  />
                </div>
              </label>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={onBookTransfer}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-gold to-gold-dark px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110 active:scale-[0.98]"
              >
                <Plane className="h-4 w-4" strokeWidth={2} />
                Book transfer
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid gap-6 lg:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  Pick-up location
                </span>
                <div className="relative">
                  <select
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full appearance-none rounded-sm border border-white/15 bg-[#050505] py-3 pl-3 pr-9 text-sm text-white outline-none transition-colors focus:border-gold"
                  >
                    {CAR_LOCATIONS.map((l) => (
                      <option key={l} value={l} className="bg-[#050505]">
                        {l}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                    strokeWidth={1.5}
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  Return location
                </span>
                <div className="relative">
                  <select
                    value={returnLoc}
                    onChange={(e) => setReturnLoc(e.target.value)}
                    className="w-full appearance-none rounded-sm border border-white/15 bg-[#050505] py-3 pl-3 pr-9 text-sm text-white outline-none transition-colors focus:border-gold"
                  >
                    {CAR_LOCATIONS.map((l) => (
                      <option key={l} value={l} className="bg-[#050505]">
                        {l}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                    strokeWidth={1.5}
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  Drop-off date
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="DD-MM-YYYY"
                  value={dropOffDate}
                  onChange={(e) => setDropOffDate(e.target.value)}
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  Drop-off time
                </span>
                <input
                  type="text"
                  placeholder="HH:MM"
                  value={dropOffTime}
                  onChange={(e) => setDropOffTime(e.target.value)}
                  className="w-full rounded-sm border border-white/15 bg-[#050505] py-3 px-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
                />
              </label>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={onSearchCars}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-gold to-gold-dark px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-110 active:scale-[0.98]"
              >
                <Search className="h-4 w-4" strokeWidth={2} />
                Search cars
              </button>
            </div>
          </>
        )}

        {/* Step / carousel dots (visual only — hero is step 1) */}
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`Indicator ${i + 1}`}
              onClick={() => setSlideDot(i)}
              className={`h-0.5 w-10 rounded-full transition-colors ${
                slideDot === i ? 'bg-gold' : 'bg-white/15'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
