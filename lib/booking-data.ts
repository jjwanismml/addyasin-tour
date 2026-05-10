export type TransferType = 'roundtrip' | 'arrival' | 'departure';

export const AIRPORTS = ['Dalaman Airport', 'Antalya Airport'] as const;
export const RESORTS = ['Kalkan', 'Patara', 'Kas', 'Fethiye'] as const;
export const TRANSFER_TYPES: { value: TransferType; label: string }[] = [
  { value: 'roundtrip', label: 'Round-trip Transfers' },
  { value: 'arrival', label: 'Arrival' },
  { value: 'departure', label: 'Departure' },
];

export interface TransferVehicle {
  id: string;
  title: string;
  priceGbp: number;
  subtitle: string;
  pax: string;
  image: string;
}

/** Local `public/` PNG (spaces safe for URLs). */
function transferImg(filename: string): string {
  return encodeURI(`/${filename}`);
}

const IMG_MINIVAN_1_3 = transferImg(
  'volkswagen-carvelle-Private Minivan 1-3 pax.png'
);
const IMG_VITO_PREMIUM = transferImg(
  'mercedes-vito-Private Minivan 4-6 pax.png'
);
const IMG_MINIBUS_7_12 = transferImg(
  'mercedes-Private Minibus 7-12 pax.png'
);

export const TRANSFER_VEHICLES: TransferVehicle[] = [
  {
    id: 'mv-1-3',
    title: 'Private Minivan 1–3 pax',
    priceGbp: 170,
    subtitle: 'Round-trip',
    pax: '1–3 Pax',
    image: IMG_MINIVAN_1_3,
  },
  {
    id: 'mv-4-6',
    title: 'Private Minivan 4–6 pax',
    priceGbp: 200,
    subtitle: 'Round-trip',
    pax: '4–6 Pax',
    image: IMG_VITO_PREMIUM,
  },
  {
    id: 'mb-7-12',
    title: 'Private Minibus 7–12 pax',
    priceGbp: 300,
    subtitle: 'Round-trip',
    pax: '7–12 Pax',
    image: IMG_MINIBUS_7_12,
  },
  {
    id: 'premium',
    title: 'Premium Transfer',
    priceGbp: 280,
    subtitle: 'Round-trip',
    pax: 'VIP',
    image: IMG_VITO_PREMIUM,
  },
];

export const CAR_LOCATIONS = ['Kalkan', 'Dalaman', 'Fethiye', 'Kas', 'Antalya'] as const;

export interface FleetCar {
  id: string;
  name: string;
  priceGbp: number;
  days: number;
  image: string;
  pax: number;
  bags: number;
  transmission: 'Manual' | 'Automatic';
  fuel: 'Diesel' | 'Petrol';
  manufacturer: string;
  vehicleType: 'Station Wagon' | 'Sedan' | 'Jeep' | 'Minibus';
}

export const FLEET: FleetCar[] = [
  {
    id: 'dacia-duster-d',
    name: 'Dacia Duster Diesel',
    priceGbp: 750,
    days: 15,
    image: '/duster.png',
    pax: 5,
    bags: 4,
    transmission: 'Manual',
    fuel: 'Diesel',
    manufacturer: 'Dacia',
    vehicleType: 'Jeep',
  },
  {
    id: 'fiat-egea-d',
    name: 'Fiat Egea Diesel',
    priceGbp: 750,
    days: 15,
    image: '/egea.png',
    pax: 5,
    bags: 3,
    transmission: 'Manual',
    fuel: 'Diesel',
    manufacturer: 'Fiat',
    vehicleType: 'Sedan',
  },
  {
    id: 'fiat-egea',
    name: 'Fiat Egea',
    priceGbp: 675,
    days: 15,
    image: '/egea.png',
    pax: 5,
    bags: 3,
    transmission: 'Manual',
    fuel: 'Petrol',
    manufacturer: 'Fiat',
    vehicleType: 'Sedan',
  },
  {
    id: 'renault-fluence-d-auto',
    name: 'Renault Fluence Diesel Auto',
    priceGbp: 750,
    days: 15,
    image: '/renault-symbol-dacia-sandero-car-dacia-logan-renault-9917f10a8756d49357127fa4a17ae9d7.png',
    pax: 5,
    bags: 2,
    transmission: 'Automatic',
    fuel: 'Diesel',
    manufacturer: 'Renault',
    vehicleType: 'Sedan',
  },
  {
    id: 'chevrolet-captiva',
    name: 'Chevrolet Captiva',
    priceGbp: 1050,
    days: 15,
    image: '/captiva.png',
    pax: 7,
    bags: 4,
    transmission: 'Automatic',
    fuel: 'Petrol',
    manufacturer: 'Chevrolet',
    vehicleType: 'Jeep',
  },
  {
    id: 'renault-symbol',
    name: 'Renault Symbol',
    priceGbp: 600,
    days: 15,
    image: '/renault-symbol-dacia-sandero-car-dacia-logan-renault-9917f10a8756d49357127fa4a17ae9d7.png',
    pax: 5,
    bags: 2,
    transmission: 'Manual',
    fuel: 'Petrol',
    manufacturer: 'Renault',
    vehicleType: 'Sedan',
  },
  {
    id: 'mercedes-vito',
    name: 'Mercedes Vito',
    priceGbp: 1500,
    days: 15,
    image: encodeURI('/mercedes-vito-Private Minivan 4-6 pax.png'),
    pax: 8,
    bags: 6,
    transmission: 'Automatic',
    fuel: 'Diesel',
    manufacturer: 'Mercedes',
    vehicleType: 'Minibus',
  },
  {
    id: 'vw-caravelle',
    name: 'Volkswagen Caravelle',
    priceGbp: 1500,
    days: 15,
    image: encodeURI('/volkswagen-carvelle-Private Minivan 1-3 pax.png'),
    pax: 8,
    bags: 6,
    transmission: 'Automatic',
    fuel: 'Diesel',
    manufacturer: 'Volkswagen',
    vehicleType: 'Minibus',
  },
];

export interface ExtraOption {
  id: string;
  title: string;
  description: string;
  priceLabel: string;
  /** Daily add-on (multiplied by hire days). */
  pricePerDay?: number;
  /** One-off surcharge when selected. */
  flatFee?: number;
  image: string;
  free?: boolean;
}

export const CAR_EXTRAS: ExtraOption[] = [
  {
    id: 'gps',
    title: 'GPS Navigator',
    description: 'Satellite navigation with turn-by-turn directions.',
    priceLabel: '£2 per day',
    pricePerDay: 2,
    image:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'chauffeur',
    title: 'Chauffeur Service',
    description: 'Professional driver — surcharge applies per direction.',
    priceLabel: '£20 per way',
    flatFee: 20,
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'baby-seat',
    title: 'Baby Seat',
    description: 'Safety-approved seat for younger passengers.',
    priceLabel: 'FREE!',
    free: true,
    image:
      'https://www.tommybaby.com.tr/idea/em/27/myassets/products/645/tommybaby-lux-pedli-bebek-tasima-bebek-oto-koltugu-puset-4462.jpeg?revision=1777130936',
  },
  {
    id: 'booster',
    title: 'Booster Seat',
    description: 'Comfortable booster for older children.',
    priceLabel: 'FREE!',
    free: true,
    image:
      'https://rforrabbit.com/cdn/shop/files/1_2_5360a8d6-1497-4863-b2f0-e384da86696d.jpg?v=1776156592',
  },
  {
    id: 'insurance-extra',
    title: 'Insurance incl. Windscreen & Tyre',
    description: 'Extended cover for glass and tyres.',
    priceLabel: 'FREE!',
    free: true,
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=400&q=80',
  },
];

export const MANUFACTURERS = [
  'Dacia',
  'Fiat',
  'Renault',
  'Chevrolet',
  'Mercedes',
  'Volkswagen',
] as const;

export const VEHICLE_TYPES = ['Station Wagon', 'Sedan', 'Jeep', 'Minibus'] as const;
