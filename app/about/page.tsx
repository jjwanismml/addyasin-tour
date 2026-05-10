'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import {
  URL_BOOKING_CAR_HIRE,
  urlAirportTransferBooking,
} from '@/lib/booking-links';

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.cinematic-reveal').forEach((el) => observer.observe(el));
    setTimeout(() => document.body.classList.add('intro-loaded'), 100);
    return () => observer.disconnect();
  }, []);
  return (
    <main className="min-h-screen bg-[#020202] text-[#e5e5e5] overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80"
            alt="Kalkan harbour heritage view"
            className="w-full h-full object-cover opacity-30 filter grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="text-mask mb-4 md:mb-6">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient font-medium">
              Est. 1999 — Kalkan, Turkey
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] font-light text-white tracking-tight">
            <span className="text-mask">
              <span>Our</span>
            </span>
            <span className="text-mask">
              <span className="flex items-center gap-4 md:gap-6">
                <span className="w-12 md:w-24 h-[1px] md:h-[2px] gold-bg-gradient block mt-2 md:mt-4"></span>
                <i className="font-light gold-text-gradient">Heritage</i>
              </span>
            </span>
          </h1>
        </div>
      </section>

      {/* SECTION 1: OUR STORY */}
      <section className="py-24 md:py-40 px-6 md:px-16 relative">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 cinematic-reveal">
              <div className="aspect-[4/5] overflow-hidden relative gold-border-gradient p-1">
                <img
                  src="https://images.unsplash.com/photo-1528255953008-01e351f041d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional village evening in Lycia"
                  className="w-full h-full object-cover filter grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 cinematic-reveal d-100">
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-10 gold-text-gradient">
                The Story
              </p>
              <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-8 md:mb-12">
                A Quarter Century of <br />
                <i className="text-gray-500">Distinguished</i> Service.
              </h2>
              <div className="space-y-6 text-gray-400 font-light text-sm md:text-[15px] leading-[2] md:leading-[2.2] tracking-wide">
                <p>
                  Operating from Turkey for the last 25 years, we are a
                  well-established and well-known travel company with offices all
                  over the country and branches overseas.
                </p>
                <p>
                  Adda is one of the first local travel agencies in Kalkan. We
                  have grown organically from a humble family venture into one of
                  the most trusted names in Lycian travel, yet our core values
                  remain unchanged.
                </p>
                <p>
                  Every itinerary we design carries the weight of our reputation
                  — and the warmth of our origins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION */}
      <section className="py-24 md:py-40 px-6 md:px-16 bg-[#020202] border-t border-[#D4AF37]/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#D4AF37] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center cinematic-reveal relative z-10">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient mb-8 md:mb-12">
            Our Mission
          </p>
          <h2 className="font-serif text-3xl md:text-7xl leading-[1.3] md:leading-[1.2] font-light text-white mb-16 md:mb-24">
            &ldquo;We do not sell tours;{' '}
            <i className="gold-text-gradient">we curate memories</i> that endure
            long after the journey ends.&rdquo;
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-left">
            <div className="cinematic-reveal d-100">
              <div className="w-8 h-[1px] gold-bg-gradient mb-6"></div>
              <h3 className="font-serif text-2xl text-white font-light mb-4">
                24/7 Operation
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                We operate 24 hours a day, 7 days a week. Our concierge desk never
                closes because extraordinary moments do not follow business hours.
              </p>
            </div>
            <div className="cinematic-reveal d-200">
              <div className="w-8 h-[1px] gold-bg-gradient mb-6"></div>
              <h3 className="font-serif text-2xl text-white font-light mb-4">
                Professional Backup
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                We provide a professional back-up service for our clients,
                ensuring seamless continuity from airport arrival to departure.
              </p>
            </div>
            <div className="cinematic-reveal d-300">
              <div className="w-8 h-[1px] gold-bg-gradient mb-6"></div>
              <h3 className="font-serif text-2xl text-white font-light mb-4">
                Organised Programme
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                We offer an extensive and well-organised tour programme for your
                enjoyment, designed to reveal both celebrated landmarks and
                secreted treasures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES SCOPE */}
      <section className="py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-16 md:mb-24 cinematic-reveal">
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient mb-4 md:mb-6">
              Comprehensive Services
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-white">
              Whatever Your <i className="text-gray-500">Needs</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: 'Accommodation',
                desc: 'From simple to sophisticated lodging, we secure the finest rooms with privileged rates and bespoke amenities.',
                href: null as string | null,
              },
              {
                title: 'Car Hire',
                desc: 'Premium fleet of luxury and family vehicles, maintained to obsessive standards for absolute peace of mind.',
                href: URL_BOOKING_CAR_HIRE,
              },
              {
                title: 'Airport Transfers',
                desc: 'Immaculate punctuality with deeply vetted private chauffeurs ensuring discretion and supreme comfort.',
                href: urlAirportTransferBooking(),
              },
              {
                title: 'Guided Tours',
                desc: 'Expertly curated excursions across the Lycian coast — ancient ruins, turquoise waters, and hidden valleys.',
                href: '/excursions/',
              },
            ].map((service, idx) => {
              const card = (
                <div className="bg-[#050505] p-8 md:p-10 h-full flex flex-col hover:bg-[#0a0a0a] transition-colors duration-700">
                  <div className="w-2 h-2 rounded-full gold-bg-gradient mb-6 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
                  <h3 className="font-serif text-2xl text-white font-light mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
              return (
                <div
                  key={service.title}
                  className="group cinematic-reveal gold-border-gradient p-1"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {service.href ? (
                    <Link href={service.href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/40 rounded-sm">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-20 md:mt-32 text-center cinematic-reveal">
            <p className="text-gray-300 font-light text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
              &ldquo;Whatever your needs, from simple to sophisticated
              accommodation, car hire and airport transfers, and guided tours,{' '}
              <i className="gold-text-gradient">we can make your time in Turkey perfect.</i>&rdquo;
            </p>
            <div className="mt-12 md:mt-16 w-[1px] h-16 md:h-24 gold-bg-gradient mx-auto"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
