'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, Users, CheckCircle2, AlertTriangle, ChevronDown, MessageCircle, Car } from 'lucide-react';
import type { Tour } from '@/lib/data';
import { urlWhatsAppTourBooking } from '@/lib/booking-links';

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5 md:py-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <span className="text-gray-200 font-light text-sm md:text-[15px] leading-relaxed group-hover:text-white transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      {open && (
        <p className="mt-4 text-gray-400 font-light text-sm md:text-[15px] leading-[2] md:leading-[2.2]">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function SingleTourClient({ tour }: { tour: Tour }) {
  const [guests, setGuests] = useState(2);

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
  }, []);

  return (
    <main className="min-h-screen bg-[#020202] text-[#e5e5e5] overflow-x-hidden font-sans">
      {/* SECTION 1: HERO INTRO */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover opacity-40 filter grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="text-mask mb-4">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient font-medium">
              {tour.category} Tour
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl leading-[1.05] font-light text-white tracking-tight">
            <span className="text-mask">
              <span>{tour.title}</span>
            </span>
          </h1>
          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 text-gray-400">
              <Clock className="w-4 h-4 text-[#D4AF37]" strokeWidth={1} />
              <span className="text-xs md:text-sm font-light tracking-wide">
                {tour.duration}
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Users className="w-4 h-4 text-[#D4AF37]" strokeWidth={1} />
              <span className="text-xs md:text-sm font-light tracking-wide">
                Private / Group
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            {/* SECTION 2: OVERVIEW */}
            <section className="cinematic-reveal">
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-10 gold-text-gradient">
                Overview
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-[1.1] mb-8">
                The <i className="gold-text-gradient">Experience</i>
              </h2>
              <div className="space-y-6 text-gray-400 font-light text-sm md:text-[15px] leading-[2] md:leading-[2.2] tracking-wide">
                {tour.overview.split('. ').map((sentence, i) =>
                  sentence.trim() ? (
                    <p key={i}>{sentence.trim()}.</p>
                  ) : null
                )}
              </div>
            </section>

            {/* SECTION 3: ACTIVITIES & INCLUSIONS */}
            <section className="cinematic-reveal">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-8 gold-text-gradient">
                    Activities
                  </p>
                  <ul className="space-y-4">
                    {tour.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <ArrowUpRight className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" strokeWidth={1} />
                        <span className="text-gray-300 font-light text-sm md:text-[15px]">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-8 gold-text-gradient">
                    Inclusions
                  </p>
                  <ul className="space-y-4">
                    {tour.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" strokeWidth={1} />
                        <span className="text-gray-300 font-light text-sm md:text-[15px]">
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 4: NOTES */}
            <section className="cinematic-reveal">
              <div className="border border-[#D4AF37]/20 p-6 md:p-10 relative gold-border-gradient">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" strokeWidth={1} />
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] gold-text-gradient">
                    Important Notes
                  </p>
                </div>
                <ul className="space-y-3">
                  {tour.notes.map((note, idx) => (
                    <li key={idx} className="text-gray-400 font-light text-sm md:text-[15px] leading-relaxed">
                      — {note}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* SECTION 5: FAQ */}
            {tour.faqs && tour.faqs.length > 0 && (
              <section className="cinematic-reveal">
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-10 gold-text-gradient">
                  FAQ
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-[1.1] mb-10">
                  Frequently Asked <i className="gold-text-gradient">Questions</i>
                </h2>
                <div className="space-y-0 divide-y divide-[#D4AF37]/10">
                  {tour.faqs.map((faq, idx) => (
                    <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 6: TRANSFER CTA */}
            <section className="cinematic-reveal">
              <div className="border border-[#D4AF37]/20 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 gold-border-gradient">
                <Car className="w-8 h-8 text-[#D4AF37] flex-shrink-0" strokeWidth={1} />
                <div className="flex-1">
                  <p className="text-white font-serif text-xl md:text-2xl font-light mb-1">
                    Need a transfer to or from the airport?
                  </p>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    We offer private airport transfers from Dalaman and Antalya airports to Kalkan, with flight tracking and 24/7 availability.
                  </p>
                </div>
                <a
                  href="/vip-transfer/"
                  className="flex-shrink-0 text-[#D4AF37] text-[9px] uppercase tracking-[0.3em] border-b border-[#D4AF37]/40 pb-1 hover:border-[#D4AF37] transition-all whitespace-nowrap"
                >
                  View Transfer &amp; Car Hire →
                </a>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: STICKY BOOKING CARD */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="cinematic-reveal gold-border-gradient p-1">
                <div className="bg-[#050505]/80 backdrop-blur-xl p-6 md:p-8 border border-[#D4AF37]/10">
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] gold-text-gradient mb-4">
                    Reserve Your Journey
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-light mb-6">
                    {tour.subtitle}
                  </p>

                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#D4AF37]/20">
                    <Clock className="w-4 h-4 text-[#D4AF37]" strokeWidth={1} />
                    <span className="text-gray-300 text-sm font-light">
                      {tour.duration}
                    </span>
                  </div>

                  <div className="mb-8">
                    <label className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-3 block">
                      Guests
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="w-10 h-10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors text-lg"
                        aria-label="Decrease guests"
                      >
                        −
                      </button>
                      <span className="text-white font-light text-lg w-8 text-center">
                        {guests}
                      </span>
                      <button
                        onClick={() => setGuests((g) => Math.min(20, g + 1))}
                        className="w-10 h-10 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors text-lg"
                        aria-label="Increase guests"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {tour.priceFrom && (
                    <div className="mb-8">
                      <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-1">
                        From
                      </p>
                      <p className="font-serif text-3xl md:text-4xl gold-text-gradient">
                        {tour.priceFrom}
                      </p>
                      <p className="text-gray-500 text-[10px] mt-1">per person</p>
                    </div>
                  )}

                  <a
                    href={urlWhatsAppTourBooking(tour.title, tour.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full text-center py-4 bg-[#25D366] text-[#020202] text-[10px] uppercase tracking-[0.3em] hover:brightness-110 transition-all duration-300 font-medium mb-3"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={2} />
                    Book via WhatsApp
                  </a>
                  <a
                    href="/contact/"
                    className="block w-full text-center py-3 border border-[#D4AF37]/30 text-gray-400 text-[9px] uppercase tracking-[0.3em] hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all duration-500"
                  >
                    Send Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
