import {
  URL_BOOKING_CAR_HIRE,
  urlAirportTransferBooking,
} from '@/lib/booking-links';
import SocialIconLinks from '@/components/SocialIconLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact-us"
      className="relative overflow-hidden border-t border-white/5 bg-[#030303] pt-20 lg:pt-32 pb-8 lg:pb-12"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[45%] z-0 w-[min(95vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] mix-blend-screen"
        aria-hidden
      >
        <img src="/LOGO.png" alt="" className="h-auto w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 lg:px-12">
        {/* CTA */}
        <div className="mb-16 flex flex-col items-center text-center lg:mb-24">
          <h4 className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] lg:mb-4">
            Ready for your journey?
          </h4>
          <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl lg:mb-8 lg:text-6xl">
            Start Planning Your Perfect Holiday
          </h2>
          <p className="mb-8 max-w-lg text-sm font-light text-gray-400 lg:mb-10 lg:text-base">
            Contact us today for personalized travel solutions. TURSAB Licensed &
            Trusted since 2014.
          </p>
          <div className="flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row lg:gap-6">
            <a
              href="tel:+902428443610"
              className="w-full bg-[#B38728] px-8 py-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-white hover:text-black active:scale-95 sm:w-auto lg:px-10 lg:py-5 lg:text-[11px]"
            >
              +90 242 844 3610
            </a>
            <a
              href="mailto:info@addatours.com"
              className="w-full border border-white/20 px-8 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-[#D4AF37] hover:text-[#D4AF37] active:scale-95 sm:w-auto lg:px-10 lg:py-5 lg:text-[11px]"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="mb-12 flex flex-col flex-wrap items-center justify-center gap-4 border-y border-white/5 py-6 text-[9px] uppercase tracking-[0.2em] text-gray-500 sm:flex-row sm:gap-8 md:gap-16 lg:mb-20 lg:py-8">
          <span>— TURSAB Licensed</span>
          <span className="hidden sm:inline">— Premium Service</span>
          <span className="hidden sm:inline">— 24/7 Support</span>
          <span className="hidden lg:inline">— Secure Payment</span>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:mb-16 lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col items-center sm:col-span-2 sm:items-start">
            <img
              src="/LOGO.png"
              alt="ADDA Tours"
              className="mb-4 h-12 w-auto lg:mb-6 lg:h-14"
            />
            <p className="max-w-sm text-xs font-light leading-relaxed text-gray-400 lg:text-sm">
              Operating from Kalkan, Turkiye for over 20 years, we are a well
              established and trusted travel company providing reliable services across
              Dalaman, Antalya, and other destinations across the region and beyond.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 font-serif text-lg text-white lg:mb-6 lg:text-xl">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[10px] uppercase tracking-[0.1em] text-gray-500 lg:space-y-4 lg:text-[11px]">
              <li>
                <a href="/" className="transition-colors hover:text-[#D4AF37]">
                  Home
                </a>
              </li>
              <li>
                <a href="/about/" className="transition-colors hover:text-[#D4AF37]">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact/" className="transition-colors hover:text-[#D4AF37]">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog/" className="transition-colors hover:text-[#D4AF37]">
                  Blog
                </a>
              </li>
              <li>
                <a href="/excursions/" className="transition-colors hover:text-[#D4AF37]">
                  Excursions
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 font-serif text-lg text-white lg:mb-6 lg:text-xl">
              Services
            </h3>
            <ul className="space-y-3 text-[10px] uppercase tracking-[0.1em] text-gray-500 lg:space-y-4 lg:text-[11px]">
              <li>
                <a
                  href={urlAirportTransferBooking()}
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  Airport Transfers
                </a>
              </li>
              <li>
                <a
                  href={URL_BOOKING_CAR_HIRE}
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  Car Hire
                </a>
              </li>
              <li>
                <a
                  href="/excursions/?category=daily"
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  Daily tours
                </a>
              </li>
              <li>
                <a
                  href="/excursions/?category=boat"
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  Boat tours
                </a>
              </li>
              <li>
                <a
                  href="/excursions/?category=adventure"
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  Adventure tours
                </a>
              </li>
              <li>
                <a
                  href="/excursions/?category=multi-day"
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  Multi-day tours
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10">
          <div className="mb-10 flex justify-center">
            <SocialIconLinks variant="compact" className="scale-110" />
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 text-[9px] uppercase tracking-[0.2em] text-gray-600 md:flex-row md:gap-0 lg:text-[10px]">
          <p className="mb-0 text-center md:text-left">
            &copy; {year} Adda Tours. All Rights Reserved.
          </p>
          <a
            href="https://addatours.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
          >
            <img
              src="/adda-logo.png"
              alt="ADDA Group – Luxury Lycia Travel"
              className="h-14 w-auto"
            />
            <span className="text-[9px] tracking-[0.2em] text-[#D4AF37] lg:text-[10px]">
              addatours.com
            </span>
          </a>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            <span>Member of TURSAB</span>
            <span>Luxury Operator</span>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
