export const URL_BOOKING_CAR_HIRE = '/booking/car-hire/vehicles/';

export const URL_BOOKING_AIRPORT_TRANSFER = '/booking/transfer/vehicle/';

const WHATSAPP_NUMBER = '905335138573';

export function urlAirportTransferBooking(): string {
  const q = new URLSearchParams({
    airport: 'Dalaman Airport',
    resort: 'Kalkan',
    type: 'roundtrip',
  });
  return `${URL_BOOKING_AIRPORT_TRANSFER}?${q.toString()}`;
}

export function urlWhatsAppTourBooking(tourTitle: string, tourSlug: string): string {
  const message = `Hi, I'd like to enquire about the ${tourTitle}. (addatours.com/tours/${tourSlug}/)`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function urlWhatsAppGeneral(message?: string): string {
  const text = message ?? "Hi, I'd like to enquire about tours from Kalkan. (addatours.com)";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function urlWhatsAppTransfer(): string {
  const message = "Hi, I'd like to book an airport transfer to/from Kalkan. (addatours.com/vip-transfer/)";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
