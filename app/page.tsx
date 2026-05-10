'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import HeroBookingWidget from '@/components/booking/HeroBookingWidget';
import { TRANSFER_VEHICLES } from '@/lib/booking-data';
import {
  URL_BOOKING_CAR_HIRE,
  urlAirportTransferBooking,
} from '@/lib/booking-links';
// --- CUSTOM HOOK FOR SCROLL ANIMATIONS ---
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible] as const;
};

// --- ANIMATED WRAPPER COMPONENT ---
const AnimatedSection = ({ children, className = '', delay = 0, direction = 'up' }: { children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'left' | 'right' }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  let translateClass = 'translate-y-12 lg:translate-y-16';
  if (direction === 'left') translateClass = '-translate-x-12 lg:-translate-x-16';
  if (direction === 'right') translateClass = 'translate-x-12 lg:translate-x-16';

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translateClass}` 
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* CUSTOM CSS FOR LUXURY STYLING */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Jost', sans-serif; }
        
        .gold-gradient-text {
          background: linear-gradient(135deg, #E6C875 0%, #C59B3C 50%, #FBF5B7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gold-gradient-bg {
          background: linear-gradient(135deg, #D4AF37 0%, #AA771C 100%);
        }
        
        .glass-panel {
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(212, 175, 55, 0.1);
        }

        .glass-card {
          background: linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(5,5,5,0.9) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        /* Hide scrollbar for clean look */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
        
        /* Premium Image Overlay */
        .img-overlay {
          background: linear-gradient(to top, rgba(3,3,3,1) 0%, rgba(3,3,3,0.5) 50%, rgba(3,3,3,0.2) 100%);
        }
      `}} />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100svh] flex items-center pt-28 lg:pt-32" id="home">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Mercedes" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_30s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 img-overlay"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="lg:col-span-7 mt-12 lg:mt-0 text-center lg:text-left">
            <AnimatedSection delay={100} direction="up">
              <span className="text-[#D4AF37] tracking-[0.3em] uppercase text-[9px] lg:text-[10px] font-medium mb-4 lg:mb-6 block">
                — Adda Tours Exclusive
              </span>
            </AnimatedSection>
            <AnimatedSection delay={300} direction="up">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl leading-[1.1] mb-6 lg:mb-8 text-white">
                Your journey <br className="hidden sm:block" />
                starts the moment <br />
                <span className="gold-gradient-text italic font-light">you land.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={500} direction="up">
              <p className="text-gray-400 text-base md:text-lg lg:text-xl font-light max-w-xl mx-auto lg:mx-0 mb-10 lg:mb-12 leading-relaxed">
                Seamless airport transfers, private car hire, and carefully selected local experiences across the Lycian coast.
              </p>
            </AnimatedSection>
          </div>

          {/* Minimalist Booking Form - Now fully responsive & visible on mobile */}
          <AnimatedSection delay={600} direction="up" className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <HeroBookingWidget />
          </AnimatedSection>
        </div>
      </section>

      {/* --- SERVICES (CREATIVE CARDS) --- */}
      <section className="py-20 lg:py-32 bg-[#030303] relative z-20" id="services">
        <div className="container mx-auto px-6 lg:px-12">
          
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="text-[#D4AF37] tracking-[0.2em] uppercase text-[10px] block mb-4">— Discover</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6">Premium Travel Services</h2>
            <p className="text-gray-400 font-light text-base md:text-lg">
              From luxury car rentals to private airport transfers and curated excursions - we make your Turkish Riviera experience unforgettable.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Car Hire",
                desc: "Wide range of premium vehicles for every need. Compact cars to luxury SUV, all with full insurance.",
                img: "/car-hire.jpg",
                link: "BOOK NOW",
                href: URL_BOOKING_CAR_HIRE,
              },
              {
                title: "Airport Transfers",
                desc: "Comfortable and reliable airport transfer services from Dalaman & Antalya airports to all resorts.",
                img: encodeURI("/airport tranfers.jpg"),
                link: "BOOK NOW",
                href: urlAirportTransferBooking(),
              },
              {
                title: "Excursions",
                desc: "Discover hidden gems of the Lycian Coast with our carefully curated boat tours, nature and adventures.",
                img: "/Excursions.jpg",
                link: "EXPLORE TOURS",
                href: "/excursions/",
              },
            ].map((srv, i) => (
              <AnimatedSection key={i} delay={i * 200} className="relative group overflow-hidden rounded-sm h-[400px] lg:h-[600px] w-full">
                <Link
                  href={srv.href}
                  className="absolute inset-0 z-20 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
                  aria-label={`${srv.title} — ${srv.link}`}
                >
                  <span className="sr-only">{srv.link}</span>
                </Link>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img src={srv.img} alt="" role="presentation" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1500ms] ease-out grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-500"></div>
                </div>
                
                {/* Content Container */}
                <div className="absolute inset-0 z-10 p-8 lg:p-10 flex flex-col justify-end pointer-events-none">
                  <h3 className="font-serif text-2xl lg:text-3xl mb-4 group-hover:-translate-y-2 lg:group-hover:-translate-y-4 transition-transform duration-500">{srv.title}</h3>
                  
                  {/* Hidden Text Revealed on Hover (Always slightly visible on mobile, fully revealed on desktop hover) */}
                  <div className="h-auto opacity-100 lg:h-0 lg:opacity-0 overflow-hidden lg:group-hover:h-auto lg:group-hover:opacity-100 mb-6 lg:mb-0 lg:group-hover:mb-6 transition-all duration-500 ease-out">
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  
                  <div className="w-full h-[1px] bg-white/20 mb-6 group-hover:bg-[#D4AF37]/50 transition-colors"></div>
                  
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] flex items-center justify-between w-full">
                    {srv.link}
                    <span className="text-lg font-light leading-none">+</span>
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT & WELCOME SECTIONS --- */}
      <section className="py-20 lg:py-32 bg-[#050505] border-t border-white/5" id="about-us">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Top About Part */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
            <AnimatedSection>
              <h4 className="text-[#D4AF37] tracking-[0.2em] uppercase text-[10px] mb-4 lg:mb-6 text-center lg:text-left">— About Adda Tours</h4>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-8 leading-tight text-center lg:text-left">
                Reliable Travel Services <br className="hidden md:block" />
                <span className="italic font-light text-gray-400">on the Lycian Coast</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-8 text-base md:text-lg text-center lg:text-left">
                Adda Tours is a trusted travel company based in Kalkan, providing reliable services across Kas, Antalya, and Dalaman for over 20 years. We specialise in private airport transfers, car hire, and excursions. providing a seamless and expertly managed service tailored to your stay. From Dalaman and Antalya airport transfers to handpicked daily tours across the region, every aspect is handled with care, precision, and in-depth local knowledge.
              </p>
              
              <div className="flex flex-col gap-6 lg:gap-4">
                {[
                  { t: "Seamless Airport Transfers", d: "Smooth and reliable transfers from Dalaman or Antalya Airport to your accommodation." },
                  { t: "On-Time. Every Time", d: "We track your flight to ensure punctual pick-ups and a smooth journey." },
                  { t: "24/7 Support", d: "Dedicated assistance whenever you need it throughout your stay." }
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-[#D4AF37]/30 pl-5 py-1">
                    <h4 className="font-serif text-lg lg:text-xl mb-1 lg:mb-2 text-white">{item.t}</h4>
                    <p className="text-gray-500 font-light text-sm">{item.d}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative h-[400px] sm:h-[500px] lg:h-[700px] mt-10 lg:mt-0">
               <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Coastline" 
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-[2000ms]"
              />
              <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-[#0A0A0A] p-6 lg:p-12 border border-white/5 shadow-2xl">
                <span className="font-serif text-5xl lg:text-7xl text-[#D4AF37] block leading-none mb-1 lg:mb-2">20+</span>
                <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-gray-400">Years of Excellence</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom Welcome Part */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start bg-[#080808] p-6 sm:p-10 lg:p-16 border border-white/5 relative">
            <div className="absolute top-0 left-0 w-1/3 lg:w-1/4 h-[1px] bg-[#D4AF37]"></div>
            
            <AnimatedSection className="lg:col-span-8">
              <h2 className="font-serif text-2xl lg:text-3xl mb-6 lg:mb-8 text-[#D4AF37] lg:text-white">Welcome.</h2>
              <div className="space-y-4 lg:space-y-6 text-gray-400 font-light text-sm md:text-base leading-relaxed">
                <p>We&apos;re here to provide you with everything you need to ensure your holiday gets off to the best possible start.</p>
                <p>When you book a hire car with us, we can arrange delivery directly to your accommodation in Kalkan at a time that suits you, with collection also available from Dalaman Airport if required. All our vehicles are air-conditioned and maintained to a high standard, ensuring a comfortable and reliable experience throughout your stay.</p>
                <p>Our experienced drivers provide safe and professional transfers, making your journey smooth and stress-free from start to finish.</p>
                <p>Dalaman Airport to Kalkan takes approximately 1 hour 45 minutes, while transfers from Antalya Airport take around 3 hours 45 minutes, including a short comfort break along the way.</p>
                <p className="text-white pt-2 lg:pt-4">Please contact us for transfers to other destinations throughout the region.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="lg:col-span-4 space-y-8 lg:space-y-12 mt-4 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-t-0 border-white/5">
              {[
                { t: "Flexible Car Hire", d: "Car hire with delivery to your villa or airport pick-up / drop-off available." },
                { t: "Local Knowledge", d: "Based in Kalkan, helping you discover the best of Lycia and beyond." },
                { t: "Free WIFI Onboard", d: "Stay connected throughout your journey with complimentary WIFI in our vehicles." }
              ].map((ft, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex items-center gap-3 lg:gap-4 mb-2 lg:mb-3">
                    <span className="text-[#D4AF37] lg:opacity-50 lg:group-hover:opacity-100 transition-opacity">—</span>
                    <h4 className="font-serif text-lg lg:text-xl text-white">{ft.t}</h4>
                  </div>
                  <p className="text-gray-500 font-light text-xs sm:text-sm pl-7 lg:pl-8">{ft.d}</p>
                </div>
              ))}
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* --- CAR HIRE (ADVANCED CARDS) --- */}
      <section className="relative overflow-x-hidden bg-[#000000] py-20 lg:py-32" id="car-hire">
        <div className="container mx-auto px-6 lg:px-12">
          
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 lg:mb-20 border-b border-white/10 pb-6 lg:pb-8 text-center md:text-left">
            <div>
              <h4 className="text-[#D4AF37] tracking-[0.2em] uppercase text-[10px] mb-2 lg:mb-4">— Our Fleet</h4>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Car Hire</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              { name: "Renault Symbol", price: "40", image: "/renault-symbol-dacia-sandero-car-dacia-logan-renault-9917f10a8756d49357127fa4a17ae9d7.png", desc: "Economy • Manual/Auto" },
              { name: "Fiat Egea", price: "45", image: "/egea.png", desc: "Compact • Air Conditioned" },
              { name: "Dacia Duster Diesel", price: "50", image: "/duster.png", desc: "SUV • Manual" },
              { name: "Chevrolet Captiva", price: "70", image: "/captiva.png", desc: "Premium SUV • 7 Seats" }
            ].map((car, index) => (
              <AnimatedSection key={index} delay={index * 100} direction="up" className="w-full min-w-0">
                <div 
                  className="flex h-full flex-col items-center overflow-hidden rounded-sm bg-white px-6 py-10 text-center transition-all duration-500 group lg:px-8 lg:py-12 lg:hover:-translate-y-2"
                >
                  
                  {/* Subtle Background Accent on Hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] scale-x-100 lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <h3 className="font-serif text-xl lg:text-2xl text-black mb-1 lg:mb-2">{car.name}</h3>
                  <div className="text-[#D4AF37] font-serif text-3xl lg:text-4xl mb-6 flex items-end justify-center gap-1">
                    £{car.price} <span className="text-[10px] lg:text-xs text-gray-400 font-sans uppercase tracking-widest mb-1 lg:mb-2">/ per day</span>
                  </div>

                  <div className="relative mb-6 flex h-40 w-full shrink-0 lg:mb-8 lg:h-48">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="h-full w-full object-contain transition-opacity duration-500"
                    />
                  </div>
                  
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 lg:mb-8 w-full border-t border-gray-200 pt-4">
                    {car.desc}
                  </div>

                  <Link
                    href={URL_BOOKING_CAR_HIRE}
                    className="w-full bg-[#B38728] text-white py-3.5 lg:py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-black active:scale-95 transition-all duration-500 text-center block"
                  >
                    Rent Now
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- AIRPORT TRANSFERS (fleet cards — matches Car Hire layout) --- */}
      <section className="overflow-x-hidden bg-[#050505] py-20 lg:py-32" id="airport-transfers">
        <div className="container mx-auto px-6 lg:px-12">
          
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 lg:mb-20 border-b border-white/10 pb-6 lg:pb-8 text-center md:text-left">
            <div>
              <h4 className="text-[#D4AF37] tracking-[0.2em] uppercase text-[10px] mb-2 lg:mb-4">— Seamless Journeys</h4>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Airport Transfers</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {TRANSFER_VEHICLES.map((transfer, index) => (
              <AnimatedSection key={transfer.id} delay={index * 100} direction="up" className="w-full min-w-0">
                <div className="flex h-full flex-col items-center overflow-hidden rounded-sm bg-white px-6 py-10 text-center transition-all duration-500 group lg:px-8 lg:py-12 lg:hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] scale-x-100 lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <h3 className="font-serif text-xl lg:text-2xl text-black mb-1 lg:mb-2 px-1 leading-tight">
                    {transfer.title}
                  </h3>
                  <div className="text-[#D4AF37] font-serif text-3xl lg:text-4xl mb-6 flex items-end justify-center gap-1 flex-wrap">
                    £{transfer.priceGbp}{' '}
                    <span className="text-[10px] lg:text-xs text-gray-400 font-sans uppercase tracking-widest mb-1 lg:mb-2">
                      / round-trip
                    </span>
                  </div>

                  <div className="relative mb-6 flex h-40 w-full shrink-0 items-center justify-center rounded-sm bg-neutral-50 lg:mb-8 lg:h-48">
                    <img
                      src={transfer.image}
                      alt={transfer.title}
                      className="max-h-full w-full object-contain object-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-opacity duration-500"
                    />
                  </div>

                  <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 lg:mb-8 w-full border-t border-gray-200 pt-4">
                    Dalaman / Kalkan · {transfer.pax}
                  </div>

                  <Link
                    href={urlAirportTransferBooking()}
                    className="w-full bg-[#B38728] text-white py-3.5 lg:py-4 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-black active:scale-95 transition-all duration-500 text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 lg:py-32 relative bg-black overflow-hidden">
        {/* Background typographic decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[200px] md:text-[300px] lg:text-[400px] text-white/[0.02] leading-none select-none pointer-events-none">
          {'"'}
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl relative z-10">
          <AnimatedSection>
            <h4 className="text-[#D4AF37] tracking-[0.2em] uppercase text-[10px] mb-8 lg:mb-12">— Testimonials</h4>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-relaxed lg:leading-snug mb-8 lg:mb-12 text-white">
              &ldquo;We booked the Arkos trip with Adda Tours and had such a great day. The villa pick up was seamless and the whole experience was well organised and enjoyable. Highly recommended if you&apos;re staying in Kalkan.&rdquo;
            </h3>
            <div className="flex flex-col items-center">
              <div className="text-[#D4AF37] text-xl lg:text-2xl tracking-[0.2em] mb-4 lg:mb-6 font-serif">
                * * * * *
              </div>
              <p className="text-white font-serif text-lg lg:text-xl mb-1">Mr & Mrs Collins</p>
              <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-gray-500">September 2021</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
