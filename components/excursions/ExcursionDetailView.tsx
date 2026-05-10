import Link from 'next/link';
import type { Excursion } from '@/lib/excursions-data';
import { RichParagraph } from '@/components/excursions/RichParagraph';
import ExcursionEnquirySidebar from '@/components/excursions/ExcursionEnquirySidebar';

function ListBlock({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: 'default' | 'excludes';
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 font-serif text-xl text-white md:text-2xl">{title}</h2>
      <ul className="space-y-2.5 text-sm font-light leading-relaxed text-gray-400 md:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/80" aria-hidden />
            <span className={variant === 'excludes' ? 'text-gray-500' : ''}>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ExcursionDetailView({ excursion }: { excursion: Excursion }) {
  return (
    <article>
      <header className="border-b border-white/10 bg-[#0a0a0a] px-6 py-10 md:px-12 md:py-14">
        <nav className="mb-4 text-[10px] uppercase tracking-[0.25em] text-gray-500">
          <Link href="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <span className="mx-2 text-white/30">/</span>
          <Link href="/excursions/" className="transition-colors hover:text-gold">
            Excursions
          </Link>
        </nav>
        <h1 className="max-w-4xl font-serif text-3xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
          {excursion.title}
        </h1>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-10 space-y-5 text-sm font-light leading-relaxed text-gray-400 md:text-base">
              {excursion.description.map((para, i) => (
                <RichParagraph key={i} text={para} />
              ))}
            </div>

            {excursion.daySections?.length ? (
              <div className="mb-10 space-y-8">
                {excursion.daySections.map((d) => (
                  <section key={d.heading}>
                    <h2 className="mb-3 font-serif text-lg text-gold md:text-xl">
                      {d.heading}
                    </h2>
                    <p className="text-sm font-light leading-relaxed text-gray-400 md:text-base">
                      {d.body}
                    </p>
                  </section>
                ))}
              </div>
            ) : null}

            <ListBlock title="Highlights" items={excursion.highlights} variant="default" />
            <ListBlock title="Includes" items={excursion.includes} variant="default" />
            <ListBlock title="Excludes" items={excursion.excludes} variant="excludes" />

            <section>
              <h2 className="mb-4 font-serif text-xl text-white md:text-2xl">Details</h2>
              <dl className="space-y-3 text-sm text-gray-400 md:text-base">
                {excursion.details.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 border-b border-white/5 py-3 sm:flex-row sm:justify-between"
                  >
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      {row.label}
                    </dt>
                    <dd className="font-light text-white sm:text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <p className="mt-10 text-center lg:text-left">
              <Link
                href="/excursions/"
                className="text-[10px] uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-light"
              >
                ← All excursions
              </Link>
            </p>
          </div>

          <div className="lg:col-span-5">
            <ExcursionEnquirySidebar tourTitle={excursion.title} />
          </div>
        </div>
      </div>
    </article>
  );
}
