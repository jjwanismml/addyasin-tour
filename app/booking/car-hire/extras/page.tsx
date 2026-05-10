import { Suspense } from 'react';
import CarHireExtrasClient from '@/components/booking/CarHireExtrasClient';

export default function CarHireExtrasPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ink pt-32 text-center text-gray-500">
          Loading…
        </div>
      }
    >
      <CarHireExtrasClient />
    </Suspense>
  );
}
