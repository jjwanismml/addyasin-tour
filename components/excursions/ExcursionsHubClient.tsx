'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import {
  EXCURSION_CATEGORIES,
  EXCURSIONS,
  type ExcursionCategory,
} from '@/lib/excursions-data';

type CategoryFilterKey = (typeof EXCURSION_CATEGORIES)[number]['key'];

function categoryFromQuery(value: string | null): CategoryFilterKey {
  if (
    value === 'daily' ||
    value === 'boat' ||
    value === 'adventure' ||
    value === 'multi-day' ||
    value === 'all'
  ) {
    return value;
  }
  return 'all';
}

const IMG =
  'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

const categoryLabel: Record<ExcursionCategory, string> = {
  daily: 'Daily tours',
  adventure: 'Adventure tours',
  boat: 'Boat tours',
  'multi-day': 'Multi-day tours',
};

export default function ExcursionsHubClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const urlCategory = categoryFromQuery(searchParams.get('category'));

  const [active, setActive] = useState<CategoryFilterKey>(urlCategory);

  useEffect(() => {
    setActive(urlCategory);
  }, [urlCategory]);

  const selectCategory = useCallback(
    (key: CategoryFilterKey) => {
      setActive(key);
      const next = new URLSearchParams(searchParams.toString());
      if (key === 'all') next.delete('category');
      else next.set('category', key);
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const filtered = useMemo(() => {
    if (active === 'all') return EXCURSIONS;
    return EXCURSIONS.filter((e) => e.category === active);
  }, [active]);

  return (
    <>
      <section className="sticky top-[80px] z-30 border-b border-white/10 bg-[#020202]/95 px-6 py-6 backdrop-blur-xl md:top-[100px] md:px-12">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap gap-2 md:gap-3">
          {EXCURSION_CATEGORIES.map((cat) => {
            const count =
              cat.key === 'all'
                ? EXCURSIONS.length
                : EXCURSIONS.filter((e) => e.category === cat.key).length;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => selectCategory(cat.key)}
                className={`rounded-sm border px-3 py-2.5 text-[9px] uppercase tracking-[0.2em] transition-all md:px-5 md:py-3 md:text-[10px] ${
                  active === cat.key
                    ? 'border-gold bg-gold/15 text-gold'
                    : 'border-white/15 text-gray-500 hover:border-gold/40 hover:text-white'
                }`}
              >
                {cat.label}
                <span className="ml-1.5 opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-screen-2xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filtered.map((ex) => (
            <Link
              key={ex.slug}
              href={`/excursions/${ex.slug}/`}
              className="group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] transition-colors hover:border-gold/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={IMG}
                  alt=""
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-sm bg-gold/90 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-black md:left-4 md:top-4">
                  {categoryLabel[ex.category]}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h2 className="font-serif text-xl font-light text-white transition-colors group-hover:text-gold md:text-2xl">
                  {ex.title}
                </h2>
                <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-gray-500">
                  {ex.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold">
                  View details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
