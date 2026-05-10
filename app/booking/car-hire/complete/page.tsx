import { Suspense } from 'react';
import CarHireCompleteClient from '@/components/booking/CarHireCompleteClient';

export default function CarHireCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ink pt-32 text-center text-gray-500">
          Loading…
        </div>
      }
    >
      <CarHireCompleteClient />
    </Suspense>
  );
}
