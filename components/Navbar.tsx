'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  URL_BOOKING_CAR_HIRE,
  urlAirportTransferBooking,
} from '@/lib/booking-links';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Excursions', href: '/excursions/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Car Hire', href: URL_BOOKING_CAR_HIRE },
  { label: 'Airport Transfers', href: urlAirportTransferBooking() },
  { label: 'Contact', href: '/contact/' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-[#020202]/95 backdrop-blur-2xl z-[90] flex flex-col justify-center px-8 md:px-16 transition-all duration-700 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible menu-open'
            : 'opacity-0 invisible'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="absolute top-0 right-0 p-8 md:p-16">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[#D4AF37] hover:rotate-90 transition-transform duration-500"
            aria-label="Close menu"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 md:gap-10" aria-label="Mobile">
          <div
            className="text-[10px] uppercase tracking-[0.5em] gold-text-gradient mb-4 menu-link-reveal"
            style={{ transitionDelay: '100ms' }}
          >
            Navigation
          </div>
          {NAV_LINKS.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="menu-link-reveal text-4xl md:text-7xl text-white font-light hover:text-[#D4AF37] transition-colors w-fit font-serif"
              style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className="absolute bottom-10 left-8 md:left-16 menu-link-reveal"
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 mb-2">
            Direct Concierge
          </p>
          <a href="tel:+905335138573" className="text-[#D4AF37] font-light text-lg">
            +90 533 513 85 73
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`fixed w-full z-50 flex items-center justify-between gap-3 overflow-visible px-6 py-4 md:px-16 md:py-5 transition-all duration-500 ${
          scrolled
            ? 'bg-[#020202]/80 backdrop-blur-xl border-b border-[#D4AF37]/10'
            : 'bg-transparent'
        }`}
      >
        <a
          href="/"
          className="relative flex h-11 shrink-0 items-center overflow-visible md:h-24 lg:h-28 xl:h-32"
          aria-label="ADDA Luxury Home"
        >
          <img
            src="/LOGO.png"
            alt="ADDA Luxury Lycia Logo"
            className="h-full w-auto max-w-[min(200px,55vw)] origin-left object-contain object-left scale-[2.25] sm:max-w-[min(240px,58vw)] md:max-w-none md:scale-100"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:gap-12 md:flex" aria-label="Primary">
          {NAV_LINKS.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[9px] tracking-[0.3em] uppercase text-white font-light hover:text-[#D4AF37] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex shrink-0 items-center justify-center rounded-sm border border-[#D4AF37]/35 p-2.5 text-[#D4AF37] transition-colors hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          )}
        </button>
      </header>
    </>
  );
}
