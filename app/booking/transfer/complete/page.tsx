import { Suspense } from 'react';
import TransferCompleteClient from '@/components/booking/TransferCompleteClient';

export default function TransferCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ink pt-32 text-center text-gray-500">
          Loading…
        </div>
      }
    >
      <TransferCompleteClient />
    </Suspense>
  );
}
