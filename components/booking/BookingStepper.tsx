'use client';

import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

export type StepDef = {
  id: string;
  label: string;
  icon?: LucideIcon;
};

type Props = {
  steps: StepDef[];
  currentIndex: number;
};

export default function BookingStepper({ steps, currentIndex }: Props) {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex min-w-[280px] items-center justify-center gap-2 md:gap-4">
        {steps.map((step, i) => {
          const isComplete = i < currentIndex;
          const isActive = i === currentIndex;
          const Icon = step.icon;

          return (
            <React.Fragment key={step.id}>
              {i > 0 && (
                <div
                  className={`h-px max-w-[80px] min-w-[24px] flex-1 ${
                    currentIndex >= i ? 'bg-gold/40' : 'bg-white/10'
                  }`}
                  aria-hidden
                />
              )}
              <div className="flex shrink-0 flex-col items-center gap-2 text-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-medium transition-colors ${
                    isActive || isComplete
                      ? 'border-gold bg-gold text-black'
                      : 'border-white/15 bg-[#0a0a0a] text-gray-500'
                  }`}
                >
                  {isComplete && !isActive ? (
                    <Check className="h-4 w-4" strokeWidth={2} />
                  ) : Icon && isActive ? (
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                <span
                  className={`hidden max-w-[100px] text-[9px] uppercase leading-tight tracking-[0.2em] sm:block ${
                    isActive ? 'font-medium text-white' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
