import { Suspense } from 'react';
import CarHireVehiclesClient from '@/components/booking/CarHireVehiclesClient';

export default function CarHireVehiclesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ink pt-32 text-center text-gray-500">
          Loading…
        </div>
      }
    >
      <CarHireVehiclesClient />
    </Suspense>
  );
}
