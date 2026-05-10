'use client';

import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import SocialIconLinks from '@/components/SocialIconLinks';
import { useEffect } from 'react';

export default function ContactPage() {
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
      <section className="relative h-[60vh] md:h-[70vh] w-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80"
            alt="Kalkan coast"
            className="w-full h-full object-cover opacity-30 filter grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="text-mask mb-4">
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.6em] gold-text-gradient font-medium">
              Concierge
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl leading-[0.95] font-light text-white tracking-tight">
            <span className="text-mask">
              <span>Get in</span>
            </span>
            <span className="text-mask">
              <span className="flex items-center gap-4 md:gap-6">
                <span className="w-12 md:w-24 h-[1px] md:h-[2px] gold-bg-gradient block mt-2 md:mt-4"></span>
                <i className="font-light gold-text-gradient">Touch</i>
              </span>
            </span>
          </h1>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* LEFT: FORM */}
          <div className="lg:col-span-7 cinematic-reveal">
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-10 gold-text-gradient">
              Direct Correspondence
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white font-light leading-[1.1] mb-8 md:mb-12">
              Request Your <i className="gold-text-gradient">Itinerary</i>
            </h2>

            <form className="space-y-8 md:space-y-10" action="#" method="get">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="relative group">
                  <label htmlFor="firstName" className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-2 md:mb-3 block">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-[#D4AF37]/20 py-3 text-white font-light text-sm tracking-wide outline-none focus:border-[#D4AF37] transition-colors placeholder-gray-600"
                    placeholder="John"
                  />
                </div>
                <div className="relative group">
                  <label htmlFor="lastName" className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-2 md:mb-3 block">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-[#D4AF37]/20 py-3 text-white font-light text-sm tracking-wide outline-none focus:border-[#D4AF37] transition-colors placeholder-gray-600"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="relative group">
                <label htmlFor="email" className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-2 md:mb-3 block">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-[#D4AF37]/20 py-3 text-white font-light text-sm tracking-wide outline-none focus:border-[#D4AF37] transition-colors placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="relative group">
                <label htmlFor="message" className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-2 md:mb-3 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-[#D4AF37]/20 py-3 text-white font-light text-sm tracking-wide outline-none focus:border-[#D4AF37] transition-colors resize-none placeholder-gray-600"
                  placeholder="Tell us about your ideal journey..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] border-b border-[#D4AF37]/40 pb-2 hover:border-[#D4AF37] transition-all duration-700 flex items-center gap-4 mt-4"
              >
                <span>Send Inquiry</span>
                <span className="text-lg">→</span>
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="lg:col-span-5 cinematic-reveal d-100">
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] mb-6 md:mb-10 gold-text-gradient">
              Contact Details
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light leading-[1.1] mb-8 md:mb-12">
              The <i className="text-gray-500">Concierge</i> Desk
            </h2>

            <div className="space-y-8 md:space-y-10">
              <a href="tel:+905335138573" className="flex gap-4 md:gap-6 group">
                <div className="mt-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#020202] transition-colors">
                    <Phone className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-1">
                    Direct Line
                  </p>
                  <p className="text-white font-light text-base md:text-lg group-hover:text-[#D4AF37] transition-colors">
                    +90 533 513 85 73
                  </p>
                </div>
              </a>

              <div className="flex gap-4 md:gap-6">
                <div className="mt-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <Mail className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-2">
                    Correspondence
                  </p>
                  <div className="space-y-1">
                    <a href="mailto:yasincelik07@yahoo.com" className="text-white font-light text-base md:text-lg block hover:text-[#D4AF37] transition-colors">
                      yasincelik07@yahoo.com
                    </a>
                    <a href="mailto:info@addatours.com" className="text-white font-light text-base md:text-lg block hover:text-[#D4AF37] transition-colors">
                      info@addatours.com
                    </a>
                    <a href="mailto:reservation@addatours.com" className="text-white font-light text-base md:text-lg block hover:text-[#D4AF37] transition-colors">
                      reservation@addatours.com
                    </a>
                  </div>
                </div>
              </div>

              <a href="https://www.addatoursyasin.com" target="_blank" rel="noopener noreferrer" className="flex gap-4 md:gap-6 group">
                <div className="mt-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#020202] transition-colors">
                    <Globe className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-1">
                    Website
                  </p>
                  <p className="text-white font-light text-base md:text-lg group-hover:text-[#D4AF37] transition-colors">
                    www.addatoursyasin.com
                  </p>
                </div>
              </a>

              <div className="flex gap-4 md:gap-6">
                <div className="mt-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-1">
                    Location
                  </p>
                  <p className="text-white font-light text-base md:text-lg">
                    Kalkan, Antalya, Turkey
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-10 border-t border-[#D4AF37]/20">
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4 md:mb-6">
                The Society
              </p>
              <SocialIconLinks variant="circles" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
