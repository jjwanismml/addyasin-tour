export interface Tour {
  slug: string;
  title: string;
  subtitle: string;
  category: 'boat' | 'jeep' | 'historical' | 'activity';
  duration: string;
  heroImage: string;
  overview: string;
  activities: string[];
  inclusions: string[];
  notes: string[];
  priceFrom?: string;
}

export const TOURS: Tour[] = [
  {
    slug: 'kalkan-boat-trip',
    title: 'Kalkan Boat Trip',
    subtitle: 'Day or Sunset Cruise',
    category: 'boat',
    duration: '6 Hours',
    heroImage: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Embark on a private voyage along the pristine Lycian coastline. Discover hidden coves, swim in turquoise waters, and enjoy a bespoke lunch prepared on board as the captain navigates to the most secluded bays around Kalkan.',
    activities: ['Swimming in Crystal Waters', 'Sunbathing on Deck', 'Lunch On Board'],
    inclusions: ['Hotel Pickup & Drop-off', 'Lunch & Refreshments', 'Professional Captain & Crew', 'Insurance'],
    notes: ['Bring sunscreen, swimwear and a towel.', 'Suitable for all ages.'],
    priceFrom: '€85',
  },
  {
    slug: 'myra-kekova-sunken-city',
    title: 'Myra & Kekova Sunken City',
    subtitle: 'A Mediterranean Odyssey',
    category: 'boat',
    duration: 'Full Day',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Sail bespoke yachts over ancient ruins. Explore the legendary sunken city of Kekova, the rock-cut tombs of Myra, and the charming village of Simena with its hilltop castle. A journey through history and mythology.',
    activities: ['Glass-bottom Boat Viewing', 'Swimming over Ruins', 'Castle Hike'],
    inclusions: ['Round-trip Transfer', 'Boat Tour', 'Professional Guide', 'Lunch'],
    notes: ['Comfortable walking shoes recommended.', 'The boat tour is weather dependent.'],
    priceFrom: '€120',
  },
  {
    slug: 'patara-beach-sunset-jeep',
    title: 'Patara Beach Sand Dunes Sunset Trip',
    subtitle: 'Golden Hour Sanctuary',
    category: 'jeep',
    duration: '5 Hours',
    heroImage: 'https://images.unsplash.com/photo-1616422285623-138243640b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Conquer the golden dunes of Patara in an open-top jeep. Witness a spectacular sunset over the longest beach in the Mediterranean. Feel the adrenaline as you traverse sand hills and discover ancient Patara ruins.',
    activities: ['Dune Bashing', 'Sunset Photography', 'Patara Ruins Visit'],
    inclusions: ['Jeep & Driver', 'Refreshments', 'Entrance Fees'],
    notes: ['Bring a camera and a jacket for the evening breeze.', 'Not recommended for passengers with back problems.'],
    priceFrom: '€75',
  },
  {
    slug: 'gombe-green-lake',
    title: 'Gömbe Green Lake',
    subtitle: 'Alpine Escape in Lycia',
    category: 'jeep',
    duration: 'Full Day',
    heroImage: 'https://images.unsplash.com/photo-1629807464019-38c2ea851c24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Journey into the Taurus Mountains to discover Gömbe Green Lake. Surrounded by cedar forests and soaring peaks, this off-road expedition offers a refreshing contrast to the coastal heat.',
    activities: ['Mountain Driving', 'Lake Swimming', 'Forest Walk'],
    inclusions: ['4x4 Jeep', 'Picnic Lunch', 'Professional Guide'],
    notes: ['Mountain roads are bumpy — prepare accordingly.', 'Altitude may be cooler; bring layers.'],
    priceFrom: '€95',
  },
  {
    slug: 'jeep-safari-saklikent-4in1',
    title: 'Jeep Safari Saklikent Gorge Extreme Sports Trip',
    subtitle: '4 in 1 Adventure',
    category: 'jeep',
    duration: 'Full Day',
    heroImage: 'https://images.unsplash.com/photo-1596423735880-5f2a689b903e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Our first stop is the breathtaking Saklıkent Gorge, the second longest gorge in Europe. After exploring the beauty of Saklıkent, our journey continues to Gizlikent Waterfall for a refreshing break. The adventure intensifies with a selection of extreme sports.',
    activities: ['Quad Bike or Buggy Off Road', 'Zipline', 'Rafting', 'Swing Shot', 'Water Fight'],
    inclusions: ['Lunch', 'Entrance Fees For Saklıkent Gorge and Gizlikent Waterfall', 'Mud Bath included'],
    notes: [
      'Please do not forget to bring your towel and swimwear with you.',
      'This tour includes 3 different packages. Prices vary depending on the number of activities selected.',
    ],
    priceFrom: '€110',
  },
  {
    slug: 'historical-trip-4in1',
    title: 'Historical Trip 4 in 1',
    subtitle: 'Xanthos, Tlos, Letoon & Saklıkent Gorge',
    category: 'historical',
    duration: 'Full Day',
    heroImage: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Walk through the pages of history with a private guided tour. Visit Xanthos, the capital of ancient Lycia; Tlos with its dramatic cliff-top tombs; the sacred sanctuary of Letoon; and the majestic Saklıkent Gorge.',
    activities: ['Archaeological Walks', 'Photography', 'Guided Narration'],
    inclusions: ['Private Guide', 'Transportation', 'Entrance Fees', 'Lunch'],
    notes: ['Comfortable shoes are essential.', 'Saklıkent involves river walking — aqua shoes recommended.'],
    priceFrom: '€100',
  },
  {
    slug: 'scuba-diving-try-dive',
    title: 'Scuba Diving — Try Dive',
    subtitle: 'Deep Blue Discovery',
    category: 'activity',
    duration: '4 Hours',
    heroImage: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Descend into pristine tranquility with a PADI-certified instructor. Whether you are a complete beginner or looking for a refresher, our try-dive experience introduces you to the underwater world of the Lycian coast with absolute safety and comfort.',
    activities: ['Fish Feeding', 'Underwater Photography', 'Try Dive Session'],
    inclusions: ['All Equipment', 'Professional Instructor', 'Insurance', 'Transfer'],
    notes: ['Minimum age 10. No prior experience required.', 'Medical questionnaire must be completed.'],
    priceFrom: '€65',
  },
  {
    slug: 'canoe-adventure',
    title: 'Canoe Adventure',
    subtitle: 'River & Coast Expedition',
    category: 'activity',
    duration: '3 Hours',
    heroImage: 'https://images.unsplash.com/photo-1544550808-410fbba46949?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Paddle through serene waterways and along the dramatic Lycian coastline. Our guided canoe adventure is tailored for both beginners and experienced paddlers seeking a unique perspective of ancient harbours and hidden beaches.',
    activities: ['Guided Paddling', 'Coastal Exploration', 'Swim Stops'],
    inclusions: ['Canoe & Paddle', 'Life Jacket', 'Guide', 'Refreshments'],
    notes: ['Bring swimwear, towel and a change of clothes.', 'Physical fitness level: moderate.'],
    priceFrom: '€55',
  },
  {
    slug: 'sea-kayaking-kekova',
    title: 'Sea Kayaking in Kekova',
    subtitle: 'Paddle Through History',
    category: 'activity',
    duration: '4 Hours',
    heroImage: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Paddle through Kekova\'s clear, calm waters. Glide over the sunken ruins of an ancient Lycian city, explore sea caves, and land on untouched beaches accessible only by kayak.',
    activities: ['Kayaking over Sunken Ruins', 'Sea Cave Exploration', 'Beach Landing'],
    inclusions: ['Kayak & Equipment', 'Safety Briefing', 'Guide', 'Waterproof Bag'],
    notes: ['Basic swimming ability required.', 'Morning departures recommended for calmer waters.'],
    priceFrom: '€70',
  },
];

export const CATEGORIES = [
  { key: 'all', label: 'All Tours' },
  { key: 'boat', label: 'Boat Trips' },
  { key: 'jeep', label: 'Jeep Safaris' },
  { key: 'historical', label: 'Historical Trips' },
  { key: 'activity', label: 'Activities' },
] as const;
