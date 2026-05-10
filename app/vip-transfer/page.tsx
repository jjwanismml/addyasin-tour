'use client';

import Link from 'next/link';
import { Shield, Car, Clock, Calendar, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';
import {
  URL_BOOKING_CAR_HIRE,
  urlAirportTransferBooking,
} from '@/lib/booking-links';

export default function VipTransferPage() {
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
            src="https://images.unsplash.com/photo-1494905998459-3642952f4c93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80"
            alt="Luxury VIP fleet"
            className="w-full h-full object-cover opacity-30 filter grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="text-mask mb-4">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient font-medium">
              Logistics of Luxury
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] font-light text-white tracking-tight">
            <span className="text-mask">
              <span>VIP Transfer</span>
            </span>
            <span className="text-mask">
              <span className="flex items-center gap-4 md:gap-6">
                <span className="w-12 md:w-24 h-[1px] md:h-[2px] gold-bg-gradient block mt-2 md:mt-4"></span>
                <i className="font-light gold-text-gradient">&amp; Rent A Car</i>
              </span>
            </span>
          </h1>
          <p className="mt-6 md:mt-8 text-gray-400 text-xs md:text-[13px] font-light leading-relaxed tracking-wide max-w-lg">
            Lycia&apos;s Most Beautiful Routes — delivered with absolute discretion,
            supreme comfort and flawless punctuality.
          </p>
        </div>
      </section>

      {/* VIP TRANSFER SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-16 border-t border-[#D4AF37]/10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="cinematic-reveal order-2 lg:order-1">
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-10 gold-text-gradient">
                VIP Transfer
              </p>
              <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-8 md:mb-12">
                Chauffeur Driven <br />
                <i className="gold-text-gradient">Excellence</i>
              </h2>
              <p className="text-gray-400 leading-[2] md:leading-[2.2] font-light text-sm md:text-[15px] max-w-lg mb-12 md:mb-16">
                Your sanctuary does not end at the hotel door. Our immaculate
                fleet and deeply vetted private chauffeurs ensure absolute
                discretion, supreme comfort, and flawless punctuality.
              </p>

              <div className="space-y-8 md:space-y-10">
                {[
                  {
                    icon: <Shield className="w-4 h-4" />,
                    title: 'Airport Transfers',
                    desc: 'Seamless arrivals and departures from Dalaman and Antalya airports.',
                  },
                  {
                    icon: <Car className="w-4 h-4" />,
                    title: 'Private Chauffeur Service',
                    desc: 'Dedicate a driver for the duration of your stay.',
                  },
                  {
                    icon: <Clock className="w-4 h-4" />,
                    title: '24/7 Availability',
                    desc: 'Round-the-clock service for any schedule, any destination.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 md:gap-8 group">
                    <div className="mt-1">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] backdrop-blur-md bg-[#020202]/30">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-light mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 font-light text-xs md:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cinematic-reveal d-100 order-1 lg:order-2">
              <div className="aspect-[4/5] overflow-hidden relative gold-border-gradient p-1 md:p-2">
                <img
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                  alt="VIP chauffeur transfer"
                  className="w-full h-full object-cover filter grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RENT A CAR SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-16 border-t border-[#D4AF37]/10 bg-[#020202]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="cinematic-reveal">
              <div className="aspect-[4/5] overflow-hidden relative gold-border-gradient p-1 md:p-2">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
                  alt="Premium rental car fleet"
                  className="w-full h-full object-cover filter grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="cinematic-reveal d-100">
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-10 gold-text-gradient">
                Rent A Car
              </p>
              <h2 className="font-serif text-4xl md:text-6xl text-white font-light leading-[1.1] mb-8 md:mb-12">
                Premium Fleet <br />
                <i className="text-gray-500">At Your Disposal</i>
              </h2>
              <p className="text-gray-400 leading-[2] md:leading-[2.2] font-light text-sm md:text-[15px] max-w-lg mb-12 md:mb-16">
                The latest models of luxury and family vehicles, maintained to
                obsessive standards for your peace of mind.
              </p>

              <div className="space-y-8 md:space-y-10">
                {[
                  {
                    icon: <Calendar className="w-4 h-4" />,
                    title: 'Daily & Weekly Rental',
                    desc: 'Flexible durations tailored to your itinerary.',
                  },
                  {
                    icon: <Car className="w-4 h-4" />,
                    title: 'Comfortable Family Cars',
                    desc: 'Spacious, air-conditioned, child-seat compatible.',
                  },
                  {
                    icon: <Shield className="w-4 h-4" />,
                    title: 'Reliable & Well-Maintained',
                    desc: 'Fully insured, serviced and sanitised before every handover.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 md:gap-8 group">
                    <div className="mt-1">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] backdrop-blur-md bg-[#020202]/30">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-light mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 font-light text-xs md:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 px-6 md:px-16 border-t border-[#D4AF37]/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#D4AF37] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center cinematic-reveal relative z-10">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient mb-8 md:mb-12">
            Reservation
          </p>
          <h2 className="font-serif text-3xl md:text-6xl font-light text-white mb-8 md:mb-12">
            Available for Airport, Hotel <br className="hidden md:block" />
            and <i className="gold-text-gradient">Private Transfers</i>
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-[15px] max-w-xl mx-auto leading-relaxed mb-12 md:mb-16">
            Contact our concierge team to reserve your vehicle or arrange a
            bespoke transfer itinerary.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 md:mb-16">
            <Link
              href={urlAirportTransferBooking()}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium hover:brightness-110 transition-all"
            >
              Book airport transfer
            </Link>
            <Link
              href={URL_BOOKING_CAR_HIRE}
              className="inline-flex items-center justify-center px-8 py-4 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#D4AF37]/10 transition-all"
            >
              Rent a car
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            <a href="tel:+905335138573" className="group flex items-center gap-4">
              <Phone className="w-4 h-4 text-[#D4AF37]" strokeWidth={1} />
              <span className="text-white font-light text-lg group-hover:text-[#D4AF37] transition-colors">
                +90 533 513 85 73
              </span>
            </a>
            <a href="mailto:info@addatours.com" className="group flex items-center gap-4">
              <Mail className="w-4 h-4 text-[#D4AF37]" strokeWidth={1} />
              <span className="text-white font-light text-lg group-hover:text-[#D4AF37] transition-colors">
                info@addatours.com
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
