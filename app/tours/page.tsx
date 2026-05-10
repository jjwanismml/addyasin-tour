'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TOURS, CATEGORIES } from '@/lib/data';
import type { Tour } from '@/lib/data';

function TourCard({ tour }: { tour: Tour }) {
  return (
    <a
      href={`/tours/${tour.slug}/`}
      className="group relative border-b border-[#D4AF37]/10 py-10 md:py-8 flex flex-col md:flex-row md:items-center justify-between cinematic-reveal hover:border-[#D4AF37]/50 transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 md:w-2/3">
        <span className="text-xs md:text-sm font-light gold-text-gradient font-serif italic opacity-70 md:opacity-100">
          {tour.category}
        </span>
        <h3 className="font-serif text-2xl md:text-4xl text-white font-light md:group-hover:translate-x-6 transition-transform duration-700 ease-out md:group-hover:text-[#D4AF37]">
          {tour.title}
        </h3>
      </div>
      <div className="mt-4 md:mt-0 md:w-1/3 flex justify-between items-end md:items-center opacity-70 md:opacity-50 md:group-hover:opacity-100 transition-all duration-700">
        <div className="flex flex-col">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-1">
            {tour.subtitle}
          </span>
          <span className="text-gray-300 font-light text-xs md:text-sm">
            {tour.duration}
          </span>
        </div>
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] transform md:-rotate-45 md:group-hover:rotate-0 transition-transform duration-700" />
      </div>
    </a>
  );
}

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filtered, setFiltered] = useState<Tour[]>(TOURS);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFiltered(TOURS);
    } else {
      setFiltered(TOURS.filter((t) => t.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.cinematic-reveal').forEach((el) => observer.observe(el));
    setTimeout(() => document.body.classList.add('intro-loaded'), 100);
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <main className="min-h-screen bg-[#020202] text-[#e5e5e5] overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80"
            alt="Luxury Lycia Travel"
            className="w-full h-full object-cover opacity-30 filter grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="text-mask mb-4">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient font-medium">
              The Anthology
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] font-light text-white tracking-tight">
            <span className="text-mask">
              <span>Luxury Lycia</span>
            </span>
            <span className="text-mask">
              <span className="flex items-center gap-4 md:gap-6">
                <span className="w-12 md:w-24 h-[1px] md:h-[2px] gold-bg-gradient block mt-2 md:mt-4"></span>
                <i className="font-light gold-text-gradient">Travel</i>
              </span>
            </span>
          </h1>
          <p className="mt-6 md:mt-8 text-gray-400 text-xs md:text-[13px] font-light leading-relaxed tracking-wide max-w-lg">
            Premium curated tours across the Lycian coast. From ancient ruins to
            turquoise waters, each journey is designed for the discerning traveler.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-8 md:py-12 px-6 md:px-16 border-b border-[#D4AF37]/10 sticky top-[80px] md:top-[100px] z-40 bg-[#020202]/90 backdrop-blur-xl">
        <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-3 md:gap-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`text-[9px] md:text-[10px] uppercase tracking-[0.3em] px-4 py-2 md:px-6 md:py-3 border transition-all duration-500 ${
                activeCategory === cat.key
                  ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10'
                  : 'border-[#D4AF37]/20 text-gray-400 hover:border-[#D4AF37]/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* TOUR LIST */}
      <section className="py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full h-[1px] bg-[#D4AF37]/20 mb-4 md:mb-8 cinematic-reveal"></div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center cinematic-reveal">
              <p className="font-serif text-2xl text-gray-400 font-light">
                No tours found in this category.
              </p>
            </div>
          ) : (
            filtered.map((tour) => <TourCard key={tour.slug} tour={tour} />)
          )}
        </div>
      </section>
    </main>
  );
}
