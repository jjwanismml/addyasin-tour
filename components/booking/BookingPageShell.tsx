import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  stepper?: React.ReactNode;
  children: React.ReactNode;
};

export default function BookingPageShell({
  title,
  subtitle,
  stepper,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-ink text-[#e5e5e5] pb-24 pt-28 md:pt-32">
      <header className="border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12 text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 text-sm font-light text-gray-400">{subtitle}</p>
          ) : null}
        </div>
      </header>

      {stepper ? (
        <div className="border-b border-white/5 bg-[#030303] px-4 py-8 md:py-10">
          <div className="mx-auto max-w-4xl">{stepper}</div>
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">{children}</div>
    </main>
  );
}
