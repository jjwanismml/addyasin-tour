/**
 * Rezervasyon giriş URL’leri (`next.config` ile uyumlu trailing slash).
 */

export const URL_BOOKING_CAR_HIRE = '/booking/car-hire/vehicles/';

export const URL_BOOKING_AIRPORT_TRANSFER = '/booking/transfer/vehicle/';

/** Varsayılan arama parametreleri (Dalaman → Kalkan, gidiş-dönüş). */
export function urlAirportTransferBooking(): string {
  const q = new URLSearchParams({
    airport: 'Dalaman Airport',
    resort: 'Kalkan',
    type: 'roundtrip',
  });
  return `${URL_BOOKING_AIRPORT_TRANSFER}?${q.toString()}`;
}
