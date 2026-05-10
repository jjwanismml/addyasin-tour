import { Suspense } from 'react';
import TransferVehicleClient from '@/components/booking/TransferVehicleClient';

export default function TransferVehiclePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ink pt-32 text-center text-gray-500">
          Loading…
        </div>
      }
    >
      <TransferVehicleClient />
    </Suspense>
  );
}
