export interface TourFAQ {
  question: string;
  answer: string;
}

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
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  faqs?: TourFAQ[];
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
    seoTitle: 'Kalkan Boat Trip | Daily & Sunset Cruise from Kalkan',
    seoDescription:
      'Join a Kalkan boat trip with swimming stops at hidden bays, BBQ lunch on board, sunset cruise options and private boat hire from Kalkan harbour. From €85 per person.',
    seoKeywords: [
      'Kalkan boat trip',
      'Kalkan boat tour',
      'Kalkan cruise',
      'day trip from Kalkan',
      'private boat Kalkan',
      'Kalkan sunset cruise',
      'boat trips Kalkan Kas',
      'Turkish Riviera boat tour',
    ],
    faqs: [
      {
        question: 'What bays does the Kalkan boat trip visit?',
        answer:
          'The Kalkan boat trip visits Frank Bay, Mouse Island, Cenerlik Beach and several secluded coves, with swimming stops at each location.',
      },
      {
        question: 'Is lunch included in the Kalkan boat trip?',
        answer:
          'Yes, a BBQ lunch is prepared on board and served during the trip, along with soft drinks and refreshments throughout the day.',
      },
      {
        question: 'Can I book a private boat in Kalkan?',
        answer:
          'Yes, private boat hire is available for groups and families. Contact us via WhatsApp to discuss your preferred itinerary, dates and group size.',
      },
      {
        question: 'What time does the Kalkan boat trip depart?',
        answer:
          'The daily boat trip departs from Kalkan harbour at approximately 10:00 and returns around 16:00–17:00. Sunset cruises depart later in the afternoon.',
      },
      {
        question: 'Is the Kalkan boat trip suitable for children?',
        answer:
          'Yes, the Kalkan boat trip is suitable for all ages including young children. Life jackets are provided on board.',
      },
      {
        question: 'How do I book a Kalkan boat trip?',
        answer:
          'You can book directly via WhatsApp. Contact Adda Tours Yasin for availability, pricing and group discounts.',
      },
    ],
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
    seoTitle: 'Myra & Kekova Sunken City Tour from Kalkan | Full Day',
    seoDescription:
      'Explore the Kekova Sunken City by boat, visit the ancient rock-cut tombs of Myra and the hilltop castle of Simena on this full-day guided tour from Kalkan. From €120 per person.',
    seoKeywords: [
      'Kekova sunken city',
      'Kekova boat trip',
      'Myra Kekova tour',
      'sunken city Turkey',
      'Kekova tour from Kalkan',
      'Simena castle tour',
      'Lycian ruins boat tour',
      'Kekova day trip',
    ],
    faqs: [
      {
        question: 'What is the Kekova Sunken City?',
        answer:
          'Kekova is an ancient Lycian city that sank into the sea following a series of earthquakes in the 2nd century AD. You can see the submerged ruins — staircases, doorways and walls — through the crystal-clear water from the boat.',
      },
      {
        question: 'Can I swim at Kekova Sunken City?',
        answer:
          'Swimming directly over the main submerged ruins is restricted to protect the archaeological site. However, there are designated swimming stops nearby in clear turquoise water.',
      },
      {
        question: 'What is included in the Myra Kekova tour?',
        answer:
          'The tour includes round-trip transfer from Kalkan, a guided boat cruise over Kekova, a visit to Myra rock-cut tombs, Simena village, lunch and a professional guide.',
      },
      {
        question: 'How long is the Myra & Kekova tour?',
        answer:
          'The tour is a full day, typically departing around 08:30 and returning to Kalkan by approximately 18:00–19:00.',
      },
      {
        question: 'Is the Kekova tour suitable for families with children?',
        answer:
          'Yes, it is suitable for families. The boat cruise is calm and the historical sites are accessible for older children. We recommend comfortable shoes for the castle hike.',
      },
    ],
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
    seoTitle: 'Patara Sunset Jeep Safari from Kalkan | Sand Dunes & Ancient Ruins',
    seoDescription:
      'Discover Patara Beach sand dunes at golden hour on an open-top jeep safari from Kalkan. Ancient Lycian ruins, spectacular Mediterranean sunset and refreshments included. From €75.',
    seoKeywords: [
      'Patara sunset tour',
      'Patara jeep safari',
      'Patara beach tour',
      'Patara sand dunes',
      'jeep safari from Kalkan',
      'Patara sunset Kalkan',
      'Lycian coast jeep tour',
      'Patara ruins tour',
    ],
    faqs: [
      {
        question: 'How long is Patara Beach?',
        answer:
          'Patara Beach stretches for 18 kilometres, making it the longest sandy beach in the Mediterranean. It is also a protected nesting site for loggerhead sea turtles.',
      },
      {
        question: 'What time does the Patara Sunset Jeep Safari depart?',
        answer:
          'The sunset safari typically departs from Kalkan in the late afternoon so you arrive at Patara for the golden hour. Exact departure times vary by season.',
      },
      {
        question: 'Is the Patara jeep safari suitable for all ages?',
        answer:
          'The jeep safari is suitable for most ages, but due to the off-road terrain it is not recommended for passengers with back or neck problems or pregnant women.',
      },
      {
        question: 'Can I swim at Patara Beach during the tour?',
        answer:
          'Swimming opportunities depend on the time of year and the tide. The tour focuses on the sand dunes and sunset experience; bring swimwear just in case.',
      },
    ],
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
    seoTitle: 'Gömbe Green Lake Jeep Safari from Kalkan | Taurus Mountains',
    seoDescription:
      'Off-road 4x4 adventure from Kalkan into the Taurus Mountains to the stunning Gömbe Green Lake. Cedar forests, mountain scenery, lake swimming and picnic lunch included. From €95.',
    seoKeywords: [
      'Gömbe Green Lake tour',
      'Taurus Mountains jeep safari',
      'off-road tour Kalkan',
      '4x4 adventure Kalkan',
      'mountain tour from Kalkan',
      'Lycian mountains tour',
    ],
    faqs: [
      {
        question: 'How far is Gömbe Green Lake from Kalkan?',
        answer:
          'Gömbe is approximately 80 km from Kalkan, nestled in the Taurus Mountains. The journey takes around 1.5–2 hours by 4x4 jeep, travelling through beautiful mountain scenery.',
      },
      {
        question: 'Can I swim in Gömbe Green Lake?',
        answer:
          'Yes, the lake is a highlight of the trip and swimming is included. The water is cool and refreshing, a welcome contrast to the coastal heat.',
      },
      {
        question: 'Is the Gömbe jeep tour suitable for children?',
        answer:
          'Yes, the tour is family-friendly, though the mountain roads are bumpy. Children should be comfortable with long off-road drives.',
      },
    ],
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
    seoTitle: 'Saklikent Jeep Safari from Kalkan | Gorge, Rafting & Zipline',
    seoDescription:
      'Full-day Saklikent Jeep Safari from Kalkan with quad biking, zipline, white water rafting, gorge walk and mud bath. Choose your 4-in-1 adventure package. From €110 per person.',
    seoKeywords: [
      'Saklikent jeep safari',
      'Saklikent Gorge tour',
      'jeep safari from Kalkan',
      'rafting Saklikent',
      'zipline Saklikent',
      'quad bike Kalkan',
      'Saklıkent gorge Kalkan',
      'adventure tour Kalkan',
      'extreme sports Kalkan',
    ],
    faqs: [
      {
        question: 'What activities are included in the Saklikent Jeep Safari?',
        answer:
          'The 4-in-1 package includes quad biking or buggy off-road, zipline, white water rafting and a swing shot. The tour also includes a visit to Saklikent Gorge, Gizlikent Waterfall and a mud bath.',
      },
      {
        question: 'Is Saklikent Gorge suitable for children?',
        answer:
          'The gorge walk is suitable for older children and adults. The extreme sports activities have minimum age and weight requirements. Please contact us before booking with young children.',
      },
      {
        question: 'How long is Saklikent Gorge?',
        answer:
          'Saklikent Gorge is 18 km long and up to 300 metres deep, making it the second longest gorge in Europe and one of the most dramatic natural sites on the Lycian coast.',
      },
      {
        question: 'What should I bring to the Saklikent Jeep Safari?',
        answer:
          'Bring swimwear, a towel, a change of clothes, sunscreen and water shoes if possible. Lunch is provided on the tour.',
      },
      {
        question: 'How far is Saklikent from Kalkan?',
        answer:
          'Saklikent Gorge is approximately 70 km from Kalkan. The jeep safari includes transport from your hotel in Kalkan.',
      },
      {
        question: 'Can I choose which activities to do on the Saklikent Safari?',
        answer:
          'Yes. The tour offers three packages — Bronze, Silver and Gold — with different combinations of activities at different prices. You can discuss your preferences when booking.',
      },
    ],
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
    seoTitle: 'Historical Tour from Kalkan | Xanthos, Tlos, Letoon & Saklikent',
    seoDescription:
      'Private guided historical day trip from Kalkan visiting ancient Lycian sites: Xanthos (UNESCO), Tlos cliff-top tombs, Letoon sanctuary and Saklikent Gorge. Entrance fees and lunch included.',
    seoKeywords: [
      'historical tour from Kalkan',
      'Xanthos tour',
      'Tlos ruins tour',
      'Letoon tour',
      'Lycian ruins tour',
      'ancient sites Kalkan',
      'guided history tour Kalkan',
      'UNESCO World Heritage Turkey tour',
    ],
    faqs: [
      {
        question: 'What ancient sites does the Historical Trip visit?',
        answer:
          'The tour visits four UNESCO-listed or significant Lycian sites: Xanthos (capital of ancient Lycia), Tlos (with its dramatic cliff-cut rock tombs), Letoon (sacred sanctuary) and Saklikent Gorge.',
      },
      {
        question: 'Is the historical tour guided?',
        answer:
          'Yes, a professional private guide accompanies the tour, providing detailed historical context at each site. Guides are available in English and other languages on request.',
      },
      {
        question: 'How long does the Historical 4-in-1 tour take?',
        answer:
          'The tour is a full day, typically departing from Kalkan around 09:00 and returning by 19:00. The pace is relaxed and allows time for photography at each site.',
      },
      {
        question: 'Are the historical sites accessible for elderly visitors?',
        answer:
          'Most of the archaeological sites involve walking on uneven terrain. Comfortable shoes are essential. Some areas of Saklikent Gorge require river walking, but these sections can be skipped.',
      },
    ],
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
    seoTitle: 'Scuba Diving in Kalkan | Try Dive for Beginners — No Experience Needed',
    seoDescription:
      'Try scuba diving in the crystal waters of Kalkan with a PADI-certified instructor. No experience needed. All equipment, insurance and transfer from Kalkan hotel included. From €65.',
    seoKeywords: [
      'scuba diving Kalkan',
      'try dive Kalkan',
      'diving Kalkan Turkey',
      'PADI dive Kalkan',
      'beginner diving Kalkan',
      'diving Lycian coast',
      'Kalkan water sports',
      'diving Kas Kalkan',
    ],
    faqs: [
      {
        question: 'Do I need diving experience to join the try dive in Kalkan?',
        answer:
          'No prior experience is required. The try dive is specifically designed for complete beginners. Your PADI-certified instructor will give you a full briefing and accompany you throughout the dive.',
      },
      {
        question: 'What is the minimum age for scuba diving in Kalkan?',
        answer:
          'The minimum age for the try dive is 10 years old. All divers must complete a short medical questionnaire before diving.',
      },
      {
        question: 'What equipment is provided for the dive?',
        answer:
          'All diving equipment is included: wetsuit, mask, fins, BCD, regulator and tank. You do not need to bring any specialist equipment.',
      },
      {
        question: 'How deep will we dive during the try dive?',
        answer:
          'The try dive reaches a maximum depth of 5–8 metres, which is ideal for beginners and allows you to see the underwater world safely.',
      },
      {
        question: 'Is transfer from my hotel in Kalkan included?',
        answer:
          'Yes, transfer from your hotel in Kalkan to the dive centre and back is included in the price.',
      },
    ],
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
    seoTitle: 'Canoe Adventure in Kalkan | River & Coastal Paddling',
    seoDescription:
      'Paddle along the Lycian coastline and ancient harbours of Kalkan on a guided canoe adventure. Suitable for beginners. Includes canoe, life jacket, guide and refreshments. From €55.',
    seoKeywords: [
      'canoe Kalkan',
      'kayaking Kalkan',
      'water sports Kalkan',
      'paddling tour Kalkan',
      'guided canoe tour Turkey',
      'Lycian coast kayaking',
    ],
    faqs: [
      {
        question: 'Is canoeing in Kalkan suitable for beginners?',
        answer:
          'Yes, the canoe adventure is tailored for both beginners and experienced paddlers. Your guide will provide instructions and accompaniment throughout.',
      },
      {
        question: 'What is the physical fitness requirement for the canoe tour?',
        answer:
          'A moderate level of physical fitness is recommended. The tour involves paddling for around 2–3 hours with rest and swim stops along the way.',
      },
    ],
  },
  {
    slug: 'meis-island-day-trip',
    title: 'Meis Island Day Trip',
    subtitle: 'Kastellorizo from Kas',
    category: 'boat',
    duration: 'Full Day',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      'Take the short ferry crossing from Kas to the tiny Greek island of Meis (Kastellorizo). Colourful neoclassical mansions line the waterfront, the atmosphere is completely unhurried and the water is impossibly clear. A passport day trip unlike any other on the Lycian Coast.',
    activities: ['Ferry Crossing to Greece', 'Village Exploration', 'Swimming in Clear Water', 'Fresh Seafood Lunch'],
    inclusions: ['Transfer from Kalkan to Kas', 'Ferry Ticket', 'Free Time to Explore'],
    notes: ['Valid passport required — no visa needed for most nationalities.', 'Departure from Kas harbour, approx. 30 minutes from Kalkan.'],
    priceFrom: '€45',
    seoTitle: 'Meis Island Day Trip from Kas | Kastellorizo Ferry from Kalkan',
    seoDescription:
      'Day trip to Meis Island (Kastellorizo) by ferry from Kas, near Kalkan. Colourful Greek harbour, crystal-clear swimming and fresh seafood. Passport required. From €45 per person.',
    seoKeywords: [
      'Meis island day trip',
      'Kastellorizo day trip',
      'Meis island from Kas',
      'Meis island ferry',
      'Greek island from Kalkan',
      'Kastellorizo from Kalkan',
      'Meis island excursion',
      'day trip from Kas',
    ],
    faqs: [
      {
        question: 'Do I need a passport to visit Meis Island?',
        answer:
          'Yes, a valid passport is required to cross from Turkey to Greece. Most nationalities do not need a visa for a short visit. Please check entry requirements for your nationality before booking.',
      },
      {
        question: 'How do I get from Kalkan to Meis Island?',
        answer:
          'The tour includes transfer from Kalkan to Kas harbour (approximately 30 minutes), from where the ferry departs to Meis Island. The ferry crossing itself takes around 20 minutes.',
      },
      {
        question: 'What is there to do on Meis Island?',
        answer:
          'Meis (Kastellorizo) is a tiny island best explored on foot. Highlights include the colourful neoclassical harbour, the Byzantine castle, swimming in crystal-clear water and fresh seafood at waterfront restaurants.',
      },
      {
        question: 'How long is the Meis Island day trip?',
        answer:
          'The trip is a full day, departing from Kalkan in the morning and returning in the late afternoon. You typically have 3–4 hours of free time on the island.',
      },
      {
        question: 'Is Meis Island suitable for families with children?',
        answer:
          'Yes. The island is compact and safe for children. The ferry crossing is short and calm. Swimming conditions are excellent.',
      },
    ],
  },
  {
    slug: 'sea-kayaking-kekova',
    title: 'Sea Kayaking in Kekova',
    subtitle: 'Paddle Through History',
    category: 'activity',
    duration: '4 Hours',
    heroImage: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    overview:
      "Paddle through Kekova's clear, calm waters. Glide over the sunken ruins of an ancient Lycian city, explore sea caves, and land on untouched beaches accessible only by kayak.",
    activities: ['Kayaking over Sunken Ruins', 'Sea Cave Exploration', 'Beach Landing'],
    inclusions: ['Kayak & Equipment', 'Safety Briefing', 'Guide', 'Waterproof Bag'],
    notes: ['Basic swimming ability required.', 'Morning departures recommended for calmer waters.'],
    priceFrom: '€70',
    seoTitle: 'Sea Kayaking in Kekova | Paddle Over Ancient Sunken Ruins',
    seoDescription:
      "Kayak over Kekova's sunken Lycian ruins, explore sea caves and discover hidden beaches accessible only by kayak. Morning departures from Kalkan for the calmest waters. From €70.",
    seoKeywords: [
      'sea kayaking Kekova',
      'kayaking Kekova ruins',
      'Kekova kayak tour',
      'sea kayaking Kalkan',
      'Kekova sunken city kayak',
      'water sports Kekova',
      'guided kayak tour Turkey',
    ],
    faqs: [
      {
        question: 'Do I need kayaking experience for the Kekova sea kayaking tour?',
        answer:
          'No prior kayaking experience is needed, but a basic ability to swim is required. Your guide will provide a full safety briefing before departure.',
      },
      {
        question: 'What can I see while kayaking at Kekova?',
        answer:
          "You will kayak directly over the submerged ruins of the ancient Lycian city — staircases, walls and archways visible through the clear water. The tour also includes sea cave exploration and landings on secluded beaches.",
      },
      {
        question: 'Why are morning departures recommended for Kekova kayaking?',
        answer:
          'Morning departures benefit from calmer sea conditions and better visibility. The light is also ideal for photography of the underwater ruins.',
      },
      {
        question: 'Is sea kayaking in Kekova suitable for families with children?',
        answer:
          'Yes, tandem kayaks are available for adults paddling with children. Children must be able to swim and wear a life jacket throughout the tour.',
      },
    ],
  },
];

export const CATEGORIES = [
  { key: 'all', label: 'All Tours' },
  { key: 'boat', label: 'Boat Trips' },
  { key: 'jeep', label: 'Jeep Safaris' },
  { key: 'historical', label: 'Historical Trips' },
  { key: 'activity', label: 'Activities' },
] as const;
