export type ExcursionCategory = 'daily' | 'adventure' | 'boat' | 'multi-day';

export interface Excursion {
  slug: string;
  title: string;
  shortTitle?: string;
  category: ExcursionCategory;
  excerpt: string;
  description: string[];
  highlights: string[];
  includes: string[];
  excludes: string[];
  /** Label + value lines */
  details: { label: string; value: string }[];
  /** Multi-day only */
  daySections?: { heading: string; body: string }[];
  metaDescription: string;
}

export const EXCURSION_CATEGORIES: {
  key: 'all' | ExcursionCategory;
  label: string;
}[] = [
  { key: 'all', label: 'All tours' },
  { key: 'daily', label: 'Daily tours' },
  { key: 'boat', label: 'Boat tours' },
  { key: 'adventure', label: 'Adventure tours' },
  { key: 'multi-day', label: 'Multi-day tours' },
];

export const EXCURSIONS: Excursion[] = [
  {
    slug: 'tlos-saklikent',
    title: 'Tlos & Saklıkent',
    category: 'daily',
    excerpt:
      'Ancient Lycian citadel, mountain lunch, and one of Europe’s deepest gorges — a full day of history and nature.',
    metaDescription:
      'Day tour from Kalkan: Tlos ancient city, Yakapark lunch, Saklıkent Gorge and optional rafting. Hotel pick-up, guide, entrances.',
    description: [
      'Begin at **Tlos**, one of Lycia’s most important cities, with its theatre, rock tombs and acropolis overlooking the Xanthos valley.',
      'Lunch at **Yakapark**, a trout restaurant set among waterfalls and shade trees in the foothills of the Taurus Mountains.',
      'Continue to **Saklıkent Gorge**, carved deep into the limestone — walk the wooden walkways between towering cliffs. Optional rafting can be arranged on site for an extra thrill.',
      'Comfortable shoes and a change of clothes are recommended; the gorge can be cool even in summer.',
    ],
    highlights: [
      'Visit Tlos Ancient City',
      'Lunch at Yakapark',
      'Explore Saklıkent Gorge',
      'Optional rafting experience',
    ],
    includes: [
      'Hotel and villa pick-up and drop-off',
      'Professional guide',
      'Entrance fees',
      'Lunch',
    ],
    excludes: ['Drinks', 'Optional rafting', 'Optional gratuities'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: '09:00 – 17:00' },
    ],
  },
  {
    slug: 'xanthos-saklikent-patara',
    title: 'Xanthos, Saklıkent & Patara',
    category: 'daily',
    excerpt:
      'UNESCO heritage, dramatic gorge, and the longest sand beach on the Mediterranean — in one unforgettable day.',
    metaDescription:
      'Full-day tour: Xanthos UNESCO site, Saklıkent Gorge, lunch, and Patara Beach from Kalkan with guide and transfers.',
    description: [
      'Explore **Xanthos**, capital of ancient Lycia and a UNESCO World Heritage Site, with its theatre, agora and famous Harpy Monument.',
      'Walk **Saklıkent Gorge** along suspended platforms between sheer cliffs, then enjoy lunch at a local restaurant.',
      'End the day at **Patara Beach** — miles of golden sand, shallow turquoise water and the dunes behind ancient Patara.',
    ],
    highlights: [
      'UNESCO site of Xanthos',
      'Saklıkent Gorge walk',
      'Swim at Patara Beach',
      'Scenic coastal drive',
    ],
    includes: [
      'Hotel and villa pick-up and drop-off',
      'Professional guide',
      'Entrance fees',
      'Lunch',
    ],
    excludes: ['Drinks', 'Optional gratuities', 'Sun loungers at Patara (if applicable)'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: '09:00 – 17:00' },
    ],
  },
  {
    slug: 'xanthos-letoon-patara',
    title: 'Xanthos, Letoon & Patara',
    category: 'daily',
    excerpt:
      'Two UNESCO jewels and the legendary beach of Patara — culture, sacred springs and sea in a single itinerary.',
    metaDescription:
      'Day tour from Kalkan: Xanthos, Letoon sanctuary and Patara Beach with guide, lunch and transfers.',
    description: [
      'Visit **Xanthos** and **Letoon**, the religious heart of the Lycian League — temples, nymphaeum and the famous three-headed Letoon stele.',
      'Lunch at a selected local restaurant before continuing to **Patara** for swimming and relaxation on one of Turkey’s finest beaches.',
    ],
    highlights: [
      'Visit Xanthos Ancient City',
      'Explore Letoon sanctuary',
      'Swim at Patara Beach',
      'Guided commentary throughout',
    ],
    includes: [
      'Hotel pick-up and drop-off',
      'Professional guide',
      'Entrance fees',
      'Lunch',
    ],
    excludes: ['Drinks', 'Optional gratuities'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: '09:00 – 17:00' },
    ],
  },
  {
    slug: 'fethiye-market-kayakoy-oludeniz',
    title: 'Fethiye Market, Kayaköy & Ölüdeniz',
    category: 'daily',
    excerpt:
      'Bazaar colours, a haunting “ghost village”, and the Blue Lagoon — a Tuesday classic from the coast.',
    metaDescription:
      'Tuesday tour from Kalkan: Fethiye market, Kayaköy abandoned Greek village, lunch and Ölüdeniz beach. Transfers and guide.',
    description: [
      'Browse the vibrant **Fethiye market** — spices, textiles, produce and local crafts.',
      'Walk the stone streets of **Kayaköy** (Levissi), the atmospheric abandoned village above the valley.',
      'After lunch, relax at **Ölüdeniz** with its famous lagoon and beach (beach time subject to schedule).',
    ],
    highlights: [
      'Shopping in Fethiye Market',
      'Explore Kayaköy',
      'Relax at Ölüdeniz Beach',
    ],
    includes: [
      'Hotel and villa pick-up and drop-off',
      'Professional guide',
      'Transportation',
      'Lunch',
      'Entrance fees',
    ],
    excludes: ['Drinks', 'Optional gratuities'],
    details: [
      { label: 'Departure', value: 'Tuesday' },
      { label: 'Time', value: '09:00 – 18:00' },
    ],
  },
  {
    slug: 'rafting-saklikent-jeep-safari',
    title: 'Rafting & Saklıkent by Jeep Safari',
    category: 'adventure',
    excerpt:
      'Off-road thrills, ancient Xanthos, gorge walking and river rafting — an action-packed Lycian day.',
    metaDescription:
      'Jeep safari from Kalkan: Xanthos, Saklıkent Gorge, lunch, rafting on the Xanthos River and mud baths. Daily departure.',
    description: [
      'Set off in an open **jeep** through mountain roads towards **Xanthos** for a short guided visit.',
      'Enter **Saklıkent Gorge** on foot along the famous walkways, then enjoy lunch by the river.',
      'Optional **rafting** on the Xanthos River and time at **mud baths** round off the adventure.',
    ],
    highlights: [
      'Jeep safari experience',
      'Short visit to Xanthos',
      'Saklıkent Gorge',
      'Rafting on the Xanthos River',
      'Mud bath stop',
    ],
    includes: [
      'Hotel and villa pick-up and drop-off',
      'Jeep transportation',
      'Guide',
      'Lunch',
      'Rafting (where included in season)',
    ],
    excludes: ['Drinks', 'Optional gratuities'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: '09:00 – 17:00' },
    ],
  },
  {
    slug: 'yesilgol-gombe-jeep-safari',
    title: 'Yeşilgöl (Green Lake) & Gömbe: Highlands by Jeep Safari',
    category: 'adventure',
    excerpt:
      'Cool air, cedar forests, Green Lake and village lunch — the Taurus Mountains in a day.',
    metaDescription:
      'Full-day jeep safari from Kalkan to Yeşilgöl (Green Lake), Uçarsu waterfall area and highland villages with lunch.',
    description: [
      'Climb into the **Taurus Mountains** by jeep, leaving the heat of the coast behind.',
      'Visit **Yeşilgöl (Green Lake)** and enjoy the alpine scenery, short walks and photo stops.',
      'Lunch in a **mountain village** before returning via scenic routes with your driver-guide.',
    ],
    highlights: [
      'Jeep safari through the Taurus Mountains',
      'Visit Yeşilgöl (Green Lake)',
      'Highland landscapes and fresh air',
      'Village lunch',
    ],
    includes: [
      'Hotel and villa pick-up and drop-off',
      'Transportation by jeep',
      'Lunch',
      'Driver / guide',
    ],
    excludes: ['Drinks', 'Optional gratuities'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: '09:00 – 18:00' },
    ],
  },
  {
    slug: 'sea-kayaking-kekova',
    title: 'Sea Kayaking',
    category: 'adventure',
    excerpt:
      'Paddle the Kekova coast — sunken ruins, turquoise water and the castle village of Simena.',
    metaDescription:
      'Sea kayaking day from Kalkan: Kekova coastline, sunken city views, Simena, equipment and lunch. Daily departure.',
    description: [
      'Launch from **Üçağız** and kayak over the famous **Sunken City** of Kekova, with breaks at Tersane Bay and swimming spots.',
      'Land below **Simena (Kaleköy)** and climb to the castle viewpoint (entrance fee to castle not included).',
      'No experience needed — briefing and equipment provided; moderate fitness helps.',
    ],
    highlights: [
      'Sea kayaking along the Kekova coastline',
      'Views over the Sunken City',
      'Visit Simena “Kaleköy”',
      'Small-group experience',
    ],
    includes: [
      'Hotel & villa pick-up and drop-off',
      'Kayaking equipment',
      'Guide / instructor',
      'Lunch',
    ],
    excludes: ['Drinks', 'Entrance fee to Simena Castle', 'Optional gratuities'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: '07:30 – 16:45' },
    ],
  },
  {
    slug: 'scuba-diving-try-dive',
    title: 'Scuba Diving',
    category: 'adventure',
    excerpt:
      'Try dive in clear Mediterranean water — professional guidance and all gear included.',
    metaDescription:
      'Introductory scuba diving from Kalkan with equipment, instructor and transfers. Flexible session times.',
    description: [
      'A relaxed **try dive** for beginners: short theory, shallow-water skills and an underwater tour with your instructor.',
      'Fish feeding and calm bays make this an ideal first underwater experience on the Lycian coast.',
    ],
    highlights: [
      'Introduction to scuba diving',
      'Fish feeding experience',
      'Small groups',
      'Qualified instructors',
    ],
    includes: [
      'All equipment',
      'Professional instruction',
      'Insurance',
      'Transfer from accommodation',
    ],
    excludes: ['Drinks', 'Optional gratuities', 'Photos / DVD (if offered locally)'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: 'Flexible — sessions throughout the day' },
      { label: 'Duration', value: 'Approx. 1 hour in water' },
    ],
  },
  {
    slug: 'horse-riding-patara',
    title: 'Horse Riding',
    category: 'adventure',
    excerpt:
      'Gentle rides through Patara’s dunes and countryside — mornings and afternoons available.',
    metaDescription:
      'Horse riding near Patara from Kalkan: instruction, safety equipment and scenic routes for beginners and experienced riders.',
    description: [
      'Explore the **Patara** area on horseback at an easy pace, with routes suited to your experience.',
      'Morning and afternoon sessions; basic instruction and helmets provided.',
    ],
    highlights: [
      'Horse riding in the Patara region',
      'Suitable for beginners and experienced riders',
      'Countryside and open landscapes',
      'Calm, relaxed pace',
    ],
    includes: ['Horse riding session', 'Basic instruction and supervision', 'Safety equipment'],
    excludes: ['Drinks', 'Optional gratuities'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: 'Morning and afternoon sessions' },
      { label: 'Duration', value: 'Approx. 3 hours' },
    ],
  },
  {
    slug: 'river-canoeing-xanthos',
    title: 'River Canoeing',
    category: 'adventure',
    excerpt:
      'Paddle the Xanthos River, mud baths and BBQ lunch — finish with time at Patara Beach.',
    metaDescription:
      'River canoeing day from Kalkan: Xanthos River, mud baths, BBQ lunch and Patara Beach with transfers.',
    description: [
      'A light **canoeing** stretch on the Xanthos River followed by **mud baths** and a **BBQ lunch** by the water.',
      'Afternoon swimming at **Patara Beach** before returning to your accommodation.',
    ],
    highlights: [
      'Canoeing on the Xanthos River',
      'Mud bath experience',
      'BBQ lunch by the river',
      'Swim at Patara Beach',
    ],
    includes: [
      'Hotel and villa pick-up and drop-off',
      'Transportation',
      'Canoeing experience',
      'Lunch',
    ],
    excludes: ['Drinks', 'Optional gratuities'],
    details: [
      { label: 'Departure', value: 'Daily' },
      { label: 'Time', value: '09:30 – 17:30' },
    ],
  },
  {
    slug: 'kekova-boat-day',
    title: 'Kekova & Sunken City Boat Day',
    category: 'boat',
    excerpt:
      'Classic gulet or motor-cruise: swimming stops, sunken ruins and lunch on the water.',
    metaDescription:
      'Full-day boat trip from Kalkan to Kekova, sunken city and bays with lunch and crew.',
    description: [
      'Cruise the **Kekova** protected area with multiple swim stops and views of Lycian tombs above the waterline.',
      'Lunch on board; route and vessel may vary by season and group size.',
    ],
    highlights: ['Kekova coastline', 'Swim stops', 'Lunch on board', 'Sunken city views'],
    includes: ['Transfers to harbour', 'Boat cruise', 'Lunch', 'Crew'],
    excludes: ['Drinks', 'Entrance fees if landing at paid sites', 'Tips'],
    details: [
      { label: 'Departure', value: 'May – October (typical)' },
      { label: 'Time', value: 'Approx. 10:00 – 17:00' },
    ],
  },
  {
    slug: 'kalkan-sunset-boat',
    title: 'Kalkan Sunset Cruise',
    category: 'boat',
    excerpt:
      'Golden hour on the water — canapés, swim and the lights of Kalkan from the bay.',
    metaDescription:
      'Evening boat cruise from Kalkan with swimming, light refreshments and sunset views.',
    description: [
      'Depart late afternoon for a **relaxed cruise** along the bays near Kalkan as the light softens over the sea.',
      'Swim stop and return after sunset — perfect for couples and small groups.',
    ],
    highlights: ['Sunset views', 'Swimming', 'Coastal scenery', 'Relaxed pace'],
    includes: ['Hotel transfer to harbour', 'Boat cruise', 'Light refreshments'],
    excludes: ['Alcoholic drinks (unless pre-ordered)', 'Tips'],
    details: [
      { label: 'Departure', value: 'Selected evenings' },
      { label: 'Time', value: 'Approx. 17:00 – 20:30' },
    ],
  },
  {
    slug: 'oludeniz-coastal-boat',
    title: 'Ölüdeniz & Butterfly Valley by Sea',
    category: 'boat',
    excerpt:
      'Blue Lagoon waters and the dramatic cliffs of Butterfly Valley from the deck.',
    metaDescription:
      'Boat day from Kalkan region towards Ölüdeniz area with swim stops — seasonal routing.',
    description: [
      'Longer coastal passage (subject to weather) with emphasis on **swim stops** and clear water.',
      'Itinerary adjusted for sea conditions and departure point.',
    ],
    highlights: ['Blue Lagoon area', 'Butterfly Valley views from sea', 'Swim stops'],
    includes: ['Boat', 'Lunch', 'Crew', 'Transfers where agreed'],
    excludes: ['Drinks', 'National park fees if applicable', 'Tips'],
    details: [
      { label: 'Departure', value: 'On request / seasonal' },
      { label: 'Time', value: 'Full day' },
    ],
  },
  {
    slug: 'simena-castle-boat',
    title: 'Simena Castle & Island Villages',
    category: 'boat',
    excerpt:
      'Kaleköy on foot from the quay — castle, ice cream and the classic Kekova panorama.',
    metaDescription:
      'Boat trip with stop at Simena (Kaleköy) castle village and Kekova bays from Kalkan.',
    description: [
      'Combine **kayak-free** sightseeing by boat with a stop at **Kaleköy** to climb to Simena Castle (ticket not always included).',
    ],
    highlights: ['Kaleköy village', 'Castle viewpoint', 'Kekova bays'],
    includes: ['Boat', 'Lunch', 'Guide on board'],
    excludes: ['Castle entrance', 'Drinks', 'Tips'],
    details: [
      { label: 'Departure', value: 'Daily (season)' },
      { label: 'Time', value: 'Full day' },
    ],
  },
  {
    slug: 'lycian-bays-private-boat',
    title: 'Private Lycian Bays Charter',
    category: 'boat',
    excerpt:
      'Your boat, your rhythm — family groups and VIP privacy along the coast.',
    metaDescription:
      'Private boat charter from Kalkan for families and small groups — bespoke route and timing.',
    description: [
      'Charter a **private motor-yacht or gulet** for your party; itinerary tailored to swimming, snorkelling and lunch preferences.',
      'Price on request according to season, duration and vessel.',
    ],
    highlights: ['Private use', 'Flexible itinerary', 'Crew and catering options'],
    includes: ['Boat charter', 'Captain & crew', 'Fuel (standard route)'],
    excludes: ['Food upgrades', 'Premium beverages', 'Tips'],
    details: [
      { label: 'Departure', value: 'On request' },
      { label: 'Duration', value: 'Half or full day' },
    ],
  },
  {
    slug: 'seven-nights-lycian-escape',
    title: '7 Nights / 7 Experiences: A Lycian Escape',
    category: 'multi-day',
    excerpt:
      'Stay in Kalkan and unfold the coast through seven curated day experiences — culture, sea and mountains.',
    metaDescription:
      'Multi-day programme from Kalkan: 7 nights accommodation base with 7 hand-picked daily excursions. Sample itinerary.',
    description: [
      'A **sample programme** designed around a week in Kalkan: each day a different highlight — ancient cities, boat days, jeep safaris and beaches.',
      'Exact order and inclusions can be **tailored** to your dates, fitness level and interests.',
    ],
    daySections: [
      {
        heading: 'Day 1 – Arrival in Kalkan',
        body: 'Private transfer from Dalaman or Antalya airport to your villa or hotel. Time to settle in and a short orientation.',
      },
      {
        heading: 'Day 2 – Example: Kekova boat',
        body: 'Full-day boat with swim stops and lunch — classic introduction to the turquoise coast.',
      },
      {
        heading: 'Day 3 – Example: Historical Lycia',
        body: 'Xanthos, Letoon or Tlos-focused day with guide and lunch.',
      },
      {
        heading: 'Day 4–7 – Mix & match',
        body: 'Jeep safari, Saklıkent, Patara, Fethiye market trip, sea kayaking or relaxation days — we architect the week with you.',
      },
      {
        heading: 'Day 8 – Departure',
        body: 'Transfer to airport according to your flight.',
      },
    ],
    highlights: [
      'One curated experience per day (sample)',
      'Private transfers available',
      'Concierge support throughout',
    ],
    includes: ['Programme planning', 'Daily excursions as booked', 'Transfers as per package'],
    excludes: ['Flights', 'Accommodation (unless part of agreed package)', 'Meals on free days', 'Personal expenses'],
    details: [
      { label: 'Duration', value: '7 nights / 8 days template' },
      { label: 'Departure', value: 'On request' },
    ],
  },
  {
    slug: 'cappadocia-from-kalkan',
    title: 'Cappadocia',
    category: 'multi-day',
    excerpt:
      'Fairy chimneys, underground cities and Göreme — a multi-day journey from the coast.',
    metaDescription:
      'Multi-day Cappadocia tour from Kalkan: Göreme, underground cities, valleys and return. On-request departures.',
    description: [
      'Travel from the **Lycian coast** into the heart of **Cappadocia** for a multi-day immersion in its unique landscapes and heritage.',
      'Typical stops include **Göreme Open-Air Museum**, **underground cities**, **Rose Valley** viewpoints and handcraft workshops.',
    ],
    daySections: [
      {
        heading: 'Day 1 – Journey to Cappadocia',
        body: 'Road or flight connection (as arranged) and first evening in the region.',
      },
      {
        heading: 'Day 2 – Fairy chimneys & Göreme',
        body: 'Open-air museum, valleys and panoramic viewpoints with your guide.',
      },
      {
        heading: 'Day 3 – Underground city & valleys',
        body: 'Deeper exploration of subterranean sites and hiking or photo stops.',
      },
      {
        heading: 'Day 4 – Return to Kalkan',
        body: 'Return transfer to the coast.',
      },
    ],
    highlights: [
      'Göreme region landscapes',
      'Underground city visit',
      'Rose Valley & viewpoints',
      'Handcraft and culture stops',
    ],
    includes: ['Transportation as per programme', 'Guided tours', 'Breakfasts where stated'],
    excludes: ['Flights (unless included)', 'Some lunches/dinners', 'Accommodation (unless package)', 'Personal expenses'],
    details: [
      { label: 'Duration', value: '4 days typical' },
      { label: 'Departure', value: 'On request' },
    ],
  },
  {
    slug: 'ephesus-pamukkale-tour',
    title: "Ephesus & Pamukkale 'Cotton Castle'",
    category: 'multi-day',
    excerpt:
      'Two icons in one journey: Ephesus and the white travertines of Pamukkale with Hierapolis.',
    metaDescription:
      'Two-day Ephesus and Pamukkale tour from Kalkan with guide and transport. UNESCO highlights.',
    description: [
      '**Day 1** focuses on **Ephesus** and the **House of the Virgin Mary**, with layers of Greek, Roman and early Christian history.',
      '**Day 2** visits **Pamukkale** travertine terraces and the ancient spa city of **Hierapolis** before return to Kalkan.',
    ],
    daySections: [
      {
        heading: 'Day 1 – Ephesus & House of the Virgin Mary',
        body: 'Guided walk through the marble streets, Library of Celsus, theatre and optional house visit.',
      },
      {
        heading: 'Day 2 – Pamukkale & Hierapolis',
        body: 'Walk the calcium pools and explore the vast necropolis and theatre of Hierapolis.',
      },
    ],
    highlights: [
      'Ephesus ancient city',
      'Pamukkale travertines',
      'Hierapolis archaeological site',
      'Scenic drives between regions',
    ],
    includes: ['Transportation', 'Guided tours as per programme', 'Entrances where stated'],
    excludes: ['Accommodation', 'Meals unless specified', 'Drinks', 'Cleopatra pool extra ticket'],
    details: [
      { label: 'Duration', value: '2 days' },
      { label: 'Departure', value: 'On request' },
    ],
  },
];

export function getExcursionBySlug(slug: string): Excursion | undefined {
  return EXCURSIONS.find((e) => e.slug === slug);
}

export function getExcursionsByCategory(cat: 'all' | ExcursionCategory): Excursion[] {
  if (cat === 'all') return EXCURSIONS;
  return EXCURSIONS.filter((e) => e.category === cat);
}
