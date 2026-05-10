'use client';

import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

type Props = { tourTitle: string };

export default function ExcursionEnquirySidebar({ tourTitle }: Props) {
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-8 lg:sticky lg:top-32">
      <div className="rounded-sm border border-white/10 bg-[#0a0a0a] p-6 shadow-xl md:p-8">
        <h2 className="mb-6 flex items-center gap-2 font-serif text-lg text-gold md:text-xl">
          <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
          Enquire about this tour
        </h2>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input type="hidden" name="tour" value={tourTitle} />
          <label className="block">
            <span className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
              Full name *
            </span>
            <input
              required
              name="name"
              className="w-full rounded-sm border border-white/15 bg-[#050505] px-3 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
              autoComplete="name"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
              Email *
            </span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-sm border border-white/15 bg-[#050505] px-3 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
              autoComplete="email"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
              Phone
            </span>
            <input
              type="tel"
              name="phone"
              className="w-full rounded-sm border border-white/15 bg-[#050505] px-3 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
              autoComplete="tel"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
              Preferred date
            </span>
            <input
              name="date"
              placeholder="DD-MM-YYYY"
              className="w-full rounded-sm border border-white/15 bg-[#050505] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-gold"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
              Number of people
            </span>
            <input
              name="pax"
              type="number"
              min={1}
              defaultValue={2}
              className="w-full rounded-sm border border-white/15 bg-[#050505] px-3 py-3 text-sm text-white outline-none focus:border-gold"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[9px] uppercase tracking-[0.2em] text-gray-500">
              Message
            </span>
            <textarea
              name="message"
              rows={4}
              className="w-full resize-y rounded-sm border border-white/15 bg-[#050505] px-3 py-3 text-sm text-white outline-none focus:border-gold"
              placeholder={`Interested in: ${tourTitle}`}
            />
          </label>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110"
          >
            <Send className="h-4 w-4" strokeWidth={2} />
            Send enquiry
          </button>
          {sent ? (
            <p className="text-center text-xs text-gold">
              Thank you — we will contact you shortly.
            </p>
          ) : null}
        </form>
      </div>

      <div className="rounded-sm border border-white/10 bg-[#080808] p-6 md:p-8">
        <h3 className="mb-4 font-serif text-lg text-white">Need help?</h3>
        <a
          href="tel:+902428443610"
          className="mb-4 flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-gold"
        >
          <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
          +90 242 844 3610
        </a>
        <a
          href="mailto:info@addatours.com"
          className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-gold"
        >
          <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
          info@addatours.com
        </a>
      </div>
    </div>
  );
}
