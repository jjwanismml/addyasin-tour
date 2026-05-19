export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'exploring-the-lycian-way',
    title: 'Exploring the Lycian Way: A Journey Through Ancient Trails',
    excerpt: 'Discover the breathtaking beauty of the Lycian Way, one of the world\'s most spectacular long-distance hiking trails winding through Turkey\'s stunning Mediterranean coast.',
    content: `The Lycian Way stretches over 500 kilometers along Turkey's southwestern coast, offering hikers an unforgettable journey through ancient history and natural splendor. From the dramatic cliffs of Fethiye to the golden sands of Antalya, this trail weaves through pine forests, olive groves, and traditional villages that have remained unchanged for centuries.

As you traverse this ancient path, you'll encounter remarkable ruins from the Lycian civilization - rock-cut tombs carved into cliff faces, ancient theaters still standing against the elements, and harbors that once welcomed Greek and Roman vessels. Each step reveals layers of history, from the days of Alexander the Great to the Byzantine era.

The trail's diversity is its greatest strength. One day you might be swimming in crystal-clear coves accessible only by foot, the next climbing to mountain passes offering panoramic views of the turquoise sea below. The hospitality of local villages adds another dimension, with family-run guesthouses offering authentic Turkish cuisine and warm welcomes.

For those seeking adventure, the Lycian Way offers everything from challenging mountain ascents to gentle coastal walks. Spring and autumn provide ideal conditions, with mild temperatures and wildflowers painting the landscape in vibrant colors.

Whether you're a seasoned trekker or a casual walker, the Lycian Way promises an experience that transcends mere hiking - it's a journey through time, culture, and some of the most beautiful scenery on Earth.`,
    author: 'Yasin Çelik',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Hiking', 'Lycian Coast', 'Ancient History', 'Turkey'],
  },
  {
    id: '2',
    slug: 'hidden-gems-of-kalkan',
    title: 'Hidden Gems of Kalkan: Beyond the Tourist Trail',
    excerpt: 'Uncover the secret spots of Kalkan that most visitors never see - from secluded beaches to authentic village experiences that capture the true essence of this Turkish paradise.',
    content: `Kalkan, with its whitewashed houses cascading down the hillside to the azure bay, is often celebrated as one of Turkey's most beautiful towns. But beyond the popular rooftop restaurants and bustling harbor, lies a world of hidden treasures waiting to be discovered by the curious traveler.

Start your exploration at the ancient Kalamar Bay, where a short walk leads to a hidden beach accessible only by foot or boat. The crystal-clear waters here are perfect for snorkeling, revealing an underwater world of colorful fish and ancient artifacts. Early morning visits reward you with complete solitude and the chance to watch local fishermen heading out to sea.

Venture into the surrounding villages of Islamlar and Bezirgan, where time seems to have stood still. Here, traditional stone houses with terracotta roofs nestle among olive groves and vineyards. Family-run restaurants serve dishes passed down through generations - try the famous 'kabak çiçeği dolması' (stuffed zucchini flowers) prepared with olive oil from the family's own trees.

For panoramic views without the crowds, hike to the abandoned village of Sydima. The stone ruins tell stories of a community that once thrived here, and the 360-degree views of the coastline are simply breathtaking. Bring a picnic and watch the sunset paint the sky in shades of gold and crimson.

The secret beaches around Kalkan are perhaps its greatest hidden gems. Patara Beach, though well-known, stretches for kilometers and you can always find a secluded spot. But for true privacy, seek out the smaller coves like Kaputaş Beach, accessible by a dramatic staircase carved into the cliff face.

These hidden gems reveal the authentic heart of Kalkan - a place where tradition meets natural beauty, and where every discovery feels like your own private paradise.`,
    author: 'Yasin Çelik',
    date: '2024-03-10',
    readTime: '6 min read',
    category: 'Local Secrets',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Kalkan', 'Hidden Beaches', 'Village Life', 'Local Culture'],
  },
  {
    id: '3',
    slug: 'luxury-yachting-mediterranean',
    title: 'Luxury Yachting: The Ultimate Mediterranean Experience',
    excerpt: 'Experience the pinnacle of maritime luxury as we guide you through the most exclusive yachting destinations along the Turkish Riviera, complete with private chefs and personalized itineraries.',
    content: `The Turkish Riviera, often called the Turquoise Coast, offers some of the world's most spectacular yachting experiences. From the moment you step aboard your private vessel, you enter a world of unparalleled luxury and freedom.

Your journey begins in Göçek, a sophisticated harbor town where the yachting elite gather. Here, your crew awaits with champagne and fresh seafood, ready to welcome you aboard your floating sanctuary. As you set sail, the stresses of everyday life dissolve into the rhythm of the waves.

The itinerary is entirely yours to craft. Perhaps you'll anchor in the secluded coves of Butterfly Valley, accessible only by sea, where waterfalls cascade directly into the turquoise waters. Or maybe you'll prefer the sophisticated atmosphere of Fethiye, where you can dine at waterfront restaurants watching the sunset over the harbor.

Each day brings new discoveries. Swim in the crystal-clear waters of the Twelve Islands, explore ancient ruins that rise directly from the sea, or simply relax on deck while your private chef prepares a feast of Mediterranean delicacies. The crew's attention to detail ensures every moment is perfect - from the temperature of your champagne to the timing of your sunset cocktails.

Evenings are magical. Anchor in a quiet bay under a canopy of stars, enjoy a gourmet dinner prepared with locally sourced ingredients, and fall asleep to the gentle rocking of the boat. Wake to the sunrise painting the mountains in gold, ready for another day of exploration.

This is yachting at its finest - where luxury meets adventure, and every moment is tailored to your desires. The Turkish Riviera awaits.`,
    author: 'Yasin Çelik',
    date: '2024-03-05',
    readTime: '7 min read',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Yachting', 'Luxury Travel', 'Mediterranean', 'Private Charter'],
  },
  {
    id: '4',
    slug: 'turkish-cuisine-guide',
    title: 'A Culinary Journey: Authentic Turkish Cuisine',
    excerpt: 'From meze to main courses, discover the rich flavors and traditions of Turkish cuisine, with recipes and restaurant recommendations from local chefs.',
    content: `Turkish cuisine is a celebration of fresh ingredients, time-honored traditions, and the diverse cultural influences that have shaped this land over millennia. It's a culinary journey that engages all the senses and tells the story of a civilization at the crossroads of East and West.

The experience typically begins with meze - a selection of small dishes meant to be shared and savored slowly. In Kalkan, you'll find variations like 'ezme' (spicy tomato dip), 'haydari' (yogurt with herbs), and 'fava' (pureed fava beans). Each restaurant has its own recipes, passed down through generations, making every meze experience unique.

Seafood plays a starring role in coastal cuisine. Fresh-caught fish grilled simply with olive oil and lemon is a masterpiece of simplicity. More elaborate dishes include 'kalamar tava' (fried calamari) and 'levrek' (sea bass) baked with vegetables. The key is freshness - caught that morning and on your plate by evening.

Meat dishes are equally celebrated. 'Kebab' comes in countless regional variations, from the famous Adana kebab (spiced minced meat) to the more subtle 'şiş kebab' (grilled skewers). In the villages around Kalkan, you'll find 'hünkar beğendi' - lamb stewed on a bed of creamy eggplant purée, a dish fit for sultans.

No Turkish meal is complete without dessert. 'Baklava' - layers of filo pastry filled with nuts and sweetened with syrup - is the most famous, but don't miss 'künefe' (shredded dough with cheese, soaked in syrup) or the refreshing 'ayva tatlısı' (quince dessert).

The best way to experience Turkish cuisine is to eat where the locals eat. Family-run restaurants in villages like Islamlar offer authentic dishes you won't find in tourist areas. Let the owner guide you through the menu - they'll take pride in introducing you to their family's culinary heritage.`,
    author: 'Yasin Çelik',
    date: '2024-02-28',
    readTime: '9 min read',
    category: 'Food & Culture',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Turkish Cuisine', 'Food', 'Local Restaurants', 'Culinary Heritage'],
  },
  {
    id: '5',
    slug: 'best-time-visit-turkey',
    title: 'The Best Time to Visit Turkey: A Seasonal Guide',
    excerpt: 'Plan your perfect trip with our comprehensive guide to Turkey\'s seasons, weather patterns, and the optimal times to visit different regions for the best experience.',
    content: `Turkey's diverse geography means the best time to visit depends entirely on what you want to experience. From the Mediterranean coast to the central Anatolian plateau, each region has its own climate and seasonal highlights.

Spring (April to June) is perhaps the ideal time for most visitors. The weather is pleasantly warm without being oppressive, wildflowers carpet the countryside, and the tourist crowds haven't yet reached their peak. In Kalkan and the Lycian coast, sea temperatures are beginning to warm, making it perfect for swimming and water activities. This is also the best time for hiking the Lycian Way, with comfortable temperatures and stunning wildflower displays.

Summer (July to August) brings hot, sunny weather ideal for beach lovers. The Mediterranean coast lives up to its reputation, with crystal-clear waters perfect for swimming, snorkeling, and diving. This is peak season, so expect higher prices and more crowds, but the vibrant atmosphere and endless sunshine make it worthwhile. Evenings are warm and perfect for al fresco dining.

Autumn (September to November) offers a sweet spot similar to spring. The sea retains its summer warmth well into October, making it excellent for water activities. The grape harvest in September means wine festivals and fresh local produce. Temperatures are comfortable for exploring archaeological sites and hiking. The autumn light is particularly beautiful, casting a golden glow over the landscape.

Winter (December to March) transforms Turkey. While the coast is quiet and mild, perfect for those seeking solitude, the interior offers excellent skiing opportunities in places like Uludağ and Palandöken. Istanbul takes on a different character, with fewer tourists and a cozy atmosphere perfect for exploring museums and enjoying Turkish tea in historic cafés.

For the Lycian coast specifically, May-June and September-October are optimal. You'll enjoy perfect weather, fewer crowds, and the chance to experience the region at its most authentic. Whenever you choose to visit, Turkey offers something special in every season.`,
    author: 'Yasin Çelik',
    date: '2024-02-20',
    readTime: '5 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Travel Planning', 'Seasons', 'Weather', 'Best Time to Visit'],
  },
  {
    id: '6',
    slug: 'things-to-do-in-kalkan',
    title: 'Top 10 Things to Do in Kalkan, Turkey',
    excerpt:
      'From boat trips on turquoise bays to jeep safaris through ancient gorges, Kalkan offers an extraordinary range of experiences. Here are the top 10 things to do in Kalkan for every type of traveller.',
    content: `Kalkan is one of Turkey's most beautiful and well-kept resort towns, set on a hillside above a sheltered bay on the Lycian Coast. Whether you're visiting for a week or just a few days, there's no shortage of things to do. Here are the top 10 experiences that make Kalkan unforgettable.

**1. Take a Kalkan Boat Trip**
Nothing captures the magic of Kalkan quite like a day on the water. A Kalkan boat trip takes you to hidden coves, natural bays and swimming spots that are impossible to reach by road. Most boats depart from Kalkan harbour in the morning and return by late afternoon, with a BBQ lunch served on board. Private boat hire is also available for groups who want a bespoke itinerary. This is easily the most popular activity in Kalkan — book early in high season.

**2. Explore the Kekova Sunken City**
A full-day tour to Kekova is one of the most memorable excursions from Kalkan. You'll visit the rock-cut tombs at Myra, sail over the submerged ruins of the ancient Lycian city of Kekova and climb to the hilltop castle of Simena. The underwater ruins are visible through the crystal-clear water — a truly extraordinary sight. Contact Adda Tours Yasin to book the Myra & Kekova tour.

**3. Jeep Safari to Saklikent Gorge**
For an adrenaline-charged day out, the Saklikent Jeep Safari is the perfect choice. This 4-in-1 adventure takes you from Kalkan through stunning mountain scenery to Saklikent Gorge — the second longest gorge in Europe. Activities include quad biking, zipline, white water rafting and a mud bath. Lunch is included and the whole day is managed by experienced guides.

**4. Watch the Sunset at Patara**
Patara Beach is the longest sandy beach in the Mediterranean at 18 kilometres. The Patara Sunset Jeep Safari from Kalkan takes you to the beach and its ancient ruins in the golden hour, when the light is magical and the dunes glow amber. It's a photographer's dream and a memory that stays with you long after you leave.

**5. Go Scuba Diving in Kalkan**
The waters around Kalkan are among the clearest on the Mediterranean, making them ideal for diving. Even if you've never dived before, the try-dive experience with a PADI-certified instructor is a safe and exhilarating introduction to the underwater world. Visibility is excellent and marine life is abundant.

**6. Sea Kayaking at Kekova**
For a slower-paced water adventure, sea kayaking at Kekova lets you glide over the sunken ruins at your own pace. You'll explore sea caves and land on beaches that are only accessible by kayak. Morning departures are recommended for the calmest water.

**7. Visit the Kalkan Old Town**
Kalkan's old town is a delight to explore on foot. Whitewashed houses with bougainvillea-draped balconies line narrow streets that lead down to the harbour. The rooftop restaurants are famous for their views — choose one overlooking the bay for lunch or dinner and watch the sunset with a glass of Turkish wine.

**8. Day Trip to Meis Island (Kastellorizo)**
Just a 20-minute boat ride from Kas, the tiny Greek island of Meis (Kastellorizo) offers a completely different atmosphere. Colourful neoclassical houses line the waterfront, and the island has a laid-back charm that's instantly relaxing. It's possible to visit Meis on a day trip from Kalkan via Kas.

**9. Book a Private Tour**
One of the best things about Kalkan is the ease of arranging private, custom experiences. Adda Tours Yasin specialises in private tours tailored to your group — whether that's a family, a couple or a group of friends. A private tour means you set the pace, choose the stops and get undivided attention from your guide.

**10. Transfer Stress-Free from Dalaman Airport**
Your Kalkan experience starts the moment you land. A private airport transfer from Dalaman to Kalkan takes around 1 hour 15 minutes and means you arrive relaxed rather than navigating unfamiliar roads. Adda Tours Yasin offers flight-tracked transfers with meet-and-greet service, available 24 hours a day.

Ready to book? Contact Adda Tours Yasin via WhatsApp for availability, prices and tailored recommendations for your stay in Kalkan.`,
    author: 'Yasin Çelik',
    date: '2026-04-10',
    readTime: '9 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Kalkan', 'Things to Do', 'Travel Guide', 'Lycian Coast'],
  },
  {
    id: '7',
    slug: 'best-day-trips-from-kalkan',
    title: 'Best Day Trips from Kalkan and Kas',
    excerpt:
      'Kalkan and Kas are perfectly positioned to explore the best of the Lycian Coast. Here are the most rewarding day trips, from sunken cities to mountain gorges and Greek island ferry crossings.',
    content: `Kalkan and Kas sit at the heart of one of Turkey's most diverse regions. Within a few hours in any direction you can reach ancient ruins, dramatic gorges, pristine beaches and even a neighbouring Greek island. Here are the best day trips from Kalkan and Kas for every type of traveller.

**Kekova Sunken City — The Must-Do Day Trip**
The Kekova & Myra full-day tour is the single most popular excursion from Kalkan. You'll visit the ancient rock-cut tombs of Myra at Demre, sail over the submerged ruins of the Lycian city of Kekova and explore the charming village of Simena with its hilltop castle. The boat glides over walls, staircases and doorways preserved beneath the clear shallow water. This is a day trip that stays with you for years. Book via Adda Tours Yasin.

**Saklikent Gorge — Adventure in the Mountains**
The Saklikent Jeep Safari from Kalkan is the best choice for a high-energy day. The gorge itself is breathtaking — carved 300 metres into the rock by glacial meltwater. Activities available include quad biking, zipline, white water rafting and a traditional mud bath. Lunch is included and the return journey takes in more mountain scenery.

**Patara Beach — Ancient Ruins and the Longest Beach in the Mediterranean**
Patara is just 30 minutes from Kalkan by road, making it an easy day trip or half-day excursion. The ancient city of Patara was the birthplace of St Nicholas (the original Santa Claus) and the ruins include a theatre, a lighthouse and a triumphal arch. Beyond the ruins, the 18-kilometre beach is one of the finest in Turkey. Go in the late afternoon for the Patara Sunset Jeep Safari — a golden-hour experience.

**Meis Island (Kastellorizo) from Kas**
The tiny Greek island of Meis sits just 2 km off the coast of Kas and is reachable by a short ferry crossing. Meis (Kastellorizo in Greek) has a colourful harbour lined with neoclassical mansions, excellent seafood and a deeply unhurried atmosphere. Day-trippers can walk around the island in a few hours, swim in clear water and return to Turkey on the afternoon ferry. Passports are required. This trip is most conveniently arranged from Kas, approximately 30 minutes from Kalkan.

**Fethiye, Kayakoy and Oludeniz**
Fethiye is 80 km from Kalkan and makes for a full-day excursion. Highlights include Fethiye market (held on Tuesdays), the ghost village of Kayakoy and the iconic Blue Lagoon at Oludeniz — one of the most photographed spots in Turkey and a world-famous paragliding destination. This is a particularly good day trip for first-time visitors to the region.

**Historical 4-in-1 — Xanthos, Tlos, Letoon and Saklikent**
For those interested in ancient history, the Historical 4-in-1 tour from Kalkan covers four significant Lycian sites in a single day: Xanthos (a UNESCO World Heritage site), Tlos (with dramatic cliff-top tombs), Letoon (a sacred sanctuary) and Saklikent Gorge. A private guide brings the history to life and entrance fees are included.

**Kalkan Boat Trip — The Classic Day Out**
If you haven't been on a Kalkan boat trip, you haven't really experienced Kalkan. The daily cruise visits the best bays around Kalkan — Frank Bay, Mouse Island, Cenerlik Beach — with swimming stops and a BBQ lunch on board. Private boat hire is available for groups who want a custom itinerary.

To arrange any of these day trips from Kalkan or Kas, contact Adda Tours Yasin via WhatsApp. We handle all logistics, transport and guiding so you can focus entirely on the experience.`,
    author: 'Yasin Çelik',
    date: '2026-04-18',
    readTime: '8 min read',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Day Trips', 'Kalkan', 'Kas', 'Lycian Coast', 'Excursions'],
  },
  {
    id: '8',
    slug: 'kalkan-boat-trip-guide',
    title: 'Kalkan Boat Trip Guide: Bays, Prices and Booking Tips',
    excerpt:
      'Everything you need to know about booking a Kalkan boat trip — which bays you visit, what\'s included, how much it costs and how to get the best experience on the water.',
    content: `A boat trip is the centrepiece of most holidays in Kalkan, and for good reason. The coastline around Kalkan is spectacular — a mix of secluded coves, dramatic limestone cliffs and turquoise water that ranks among the clearest in the Mediterranean. This guide covers everything you need to know.

**Which Bays Does the Kalkan Boat Trip Visit?**
The exact route varies by day and weather, but most Kalkan boat trips visit a selection of the following bays: Frank Bay (Franko Koyu), Mouse Island (Fare Adası), Cenerlik Beach, the natural mud bath at Hamam Bay, and several unnamed coves accessible only by boat. The captain adjusts the itinerary based on conditions to ensure you get the best swimming spots.

**What's Included in a Kalkan Boat Trip?**
Standard group boat trips include hotel pickup and drop-off, a BBQ lunch prepared on board, soft drinks and water throughout the day, swimming stops at multiple locations and insurance. Life jackets are provided. Some operators include snorkelling equipment; confirm this when booking.

**Group Boat Trip vs. Private Boat Hire in Kalkan**
Group trips depart daily from Kalkan harbour and are the most economical option, typically costing from €85 per person. Private boat hire gives you complete control of the itinerary, departure time and pace — ideal for families, couples celebrating a special occasion or groups who want a tailored experience. Private boats can be combined with sunset cruises, fishing and snorkelling. Contact Adda Tours Yasin to discuss private boat hire options.

**How Long is the Kalkan Boat Trip?**
Most daily boat trips run for approximately 6 hours, departing from Kalkan harbour around 10:00 and returning by 16:00–17:00. Sunset cruise options are shorter, typically 2–3 hours, departing in the late afternoon.

**What Should I Bring?**
Bring high-factor sunscreen (the sun reflects off the water and burns quickly), swimwear, a towel, sunglasses and a hat. A light layer is useful if you burn easily or for the journey back to harbour in the breeze. Most boats have shade but direct sun is intense in summer.

**Is the Kalkan Boat Trip Suitable for Children?**
Yes. Kalkan boat trips are popular with families and are suitable for all ages. Children particularly enjoy the swimming stops and lunch on deck. Younger children should wear sun protection and stay hydrated.

**Best Time of Year for a Kalkan Boat Trip**
The boat trip season runs from April through October. July and August are hottest and busiest. For the best combination of good weather, warm water and manageable crowds, May–June and September–October are ideal. The sea is typically calm and visibility is excellent outside of the peak summer months.

**How to Book a Kalkan Boat Trip**
The easiest way to book is directly via WhatsApp with Adda Tours Yasin. We can confirm availability, advise on the best options for your group size and arrange hotel pickup. Group and private trips are both available. Message us to get started.`,
    author: 'Yasin Çelik',
    date: '2026-04-25',
    readTime: '7 min read',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Kalkan Boat Trip', 'Boat Tours', 'Kalkan', 'Water Activities'],
  },
  {
    id: '9',
    slug: 'kekova-sunken-city-guide',
    title: 'Kekova Sunken City Boat Trip: Complete Visitor Guide',
    excerpt:
      'The sunken city of Kekova is one of the most extraordinary sights on the Turkish coast. This complete guide covers what to expect, how to get there from Kalkan, and what else to see on the full-day tour.',
    content: `The sunken ruins of Kekova are among the most haunting and beautiful sights in Turkey. An ancient Lycian city, partially submerged after earthquakes in the 2nd century AD, lies just below the surface of crystal-clear water — visible in remarkable detail from a boat above. Here's everything you need to know about visiting Kekova on a day trip from Kalkan.

**What Is the Kekova Sunken City?**
Kekova (also known as Dolichiste in ancient sources) was a prosperous Lycian city that suffered severe earthquake damage in the 2nd century AD. Much of the city — houses, stairways, walls, doorways — sank into the sea and has been preserved in extraordinary condition ever since. The site is a protected archaeological zone, so swimming directly over the main ruins is restricted, but the clarity of the water means you can see everything from the boat. It is one of the most remarkable archaeological sites in the Mediterranean.

**What Else Does the Tour Include?**
The full-day Myra & Kekova tour from Kalkan includes three main stops. First, the ancient rock-cut tombs of Myra at Demre — a UNESCO-listed site where Lycian tombs carved directly into the cliff face have survived remarkably intact for 2,500 years. Second, the boat cruise over Kekova's sunken ruins, including a stop at Kaleköy (Simena), a tiny village built on and around a Byzantine castle. Third, swimming and lunch on the boat in the calm waters of the Kekova lagoon.

**How Long Does the Kekova Tour Take?**
The tour is a full day. Departure from Kalkan is typically around 08:30, with a return by 18:00–19:00. The journey to Demre takes approximately 1 hour 20 minutes by road.

**Can I Swim at Kekova?**
You cannot swim directly over the main submerged city — this is a protected area. However, there are designated swimming areas in the Kekova lagoon with beautiful clear water and you can anchor near the ruins for close viewing.

**Is the Kekova Tour Suitable for Children?**
Yes. The boat cruise is calm and children find the underwater ruins fascinating. The castle climb at Simena is manageable for older children. Comfortable shoes are recommended for the short hike.

**When Is the Best Time to Visit Kekova?**
April–June and September–October offer the best conditions — calm seas, good visibility and manageable temperatures. July and August are popular but hotter. The Kekova lagoon is naturally sheltered, so the boat trip is usually possible even on windier days.

**How to Book the Kekova Tour from Kalkan**
The Myra & Kekova tour departs from Kalkan and is arranged by Adda Tours Yasin. All transfers, the guided boat cruise and lunch are included. Contact us via WhatsApp to check availability and book your place.`,
    author: 'Yasin Çelik',
    date: '2026-05-02',
    readTime: '8 min read',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Kekova', 'Sunken City', 'Boat Trip', 'Ancient History', 'Lycian Coast'],
  },
  {
    id: '10',
    slug: 'saklikent-jeep-safari-guide',
    title: 'Saklikent Jeep Safari from Kalkan: What to Expect',
    excerpt:
      'The Saklikent Jeep Safari is one of the most popular full-day excursions from Kalkan. Here\'s exactly what to expect — the route, the activities and how to choose the right package.',
    content: `The Saklikent Jeep Safari is the go-to adventure tour from Kalkan. It combines off-road driving, one of Europe's most dramatic gorges and a choice of extreme sports into a single unforgettable day. Here's what to expect.

**What Is Saklikent Gorge?**
Saklikent (meaning 'hidden city' in Turkish) is an 18-kilometre gorge carved through the Ak Dağları mountains by glacial meltwater. It is the second longest gorge in Europe and reaches depths of 300 metres in places. The narrow entrance opens into a series of chambers where a cold mountain river runs between towering rock walls. Walking through the gorge, with water rushing around your feet and walls of rock rising on either side, is one of the most dramatic natural experiences on the Lycian coast.

**The Route from Kalkan**
The jeep safari departs from your hotel in Kalkan in the morning. The drive through the mountains to Saklikent takes around 1.5 hours, passing through traditional villages, olive groves and gradually rising into pine forest. The journey itself is part of the experience — the views from the open-top jeeps are spectacular.

**The 4-in-1 Activity Options**
After the gorge walk, the adventure intensifies. The Saklikent Jeep Safari offers three packages — Bronze, Silver and Gold — combining different activities:

Quad Biking or Buggy Off-Road: 30–45 minutes driving 4x4 buggies or quad bikes through mountain terrain. Suitable for adults and older teenagers.

Zipline: A long zip wire over the gorge valley — fast, exhilarating and over in seconds.

White Water Rafting: The river that flows through Saklikent provides excellent rafting. The rapids are suitable for beginners but still give a proper adrenaline rush.

Swing Shot (Canyon Swing): The most extreme option — a pendulum swing launched from a platform over the gorge.

Mud Bath: Every package includes the famous Saklikent mud bath, a natural clay pool where you cover yourself in mineral-rich mud before washing off in the river. It sounds strange; it's actually brilliant.

**What's Included in the Saklikent Jeep Safari?**
Transfer from your hotel in Kalkan, entrance fees for Saklikent Gorge and Gizlikent Waterfall, lunch at a riverside restaurant and the mud bath are included in all packages. The extreme sports activities vary by package. All guides and safety equipment are provided.

**What to Bring**
Swimwear and a towel are essential — you will get wet. Water shoes or old trainers that you don't mind getting muddy are strongly recommended. Bring a change of clothes for the journey home.

**Is the Saklikent Jeep Safari Suitable for Families?**
The gorge walk and mud bath are suitable for families with children aged 6 and above. The extreme sports activities have individual age and weight restrictions — discuss your group composition when booking.

**How to Book**
Contact Adda Tours Yasin via WhatsApp to check availability and choose your package. We operate daily departures from Kalkan throughout the season and can accommodate groups of all sizes.`,
    author: 'Yasin Çelik',
    date: '2026-05-08',
    readTime: '9 min read',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1596423735880-5f2a689b903e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Saklikent', 'Jeep Safari', 'Adventure', 'Gorge', 'Kalkan Excursions'],
  },
  {
    id: '11',
    slug: 'dalaman-to-kalkan-transfer',
    title: 'Dalaman to Kalkan Transfer Guide for UK Travellers',
    excerpt:
      'Flying into Dalaman? Here\'s everything UK visitors need to know about getting from Dalaman Airport to Kalkan — transfer times, options and prices — so your holiday starts the moment you land.',
    content: `Dalaman Airport is the gateway for most UK visitors flying to the Kalkan area. It handles direct flights from numerous UK airports including London Gatwick, Manchester, Birmingham and Bristol, particularly in summer. Once you land, the transfer to Kalkan is straightforward — if you plan ahead.

**How Far Is Dalaman Airport from Kalkan?**
Dalaman Airport to Kalkan is approximately 110 kilometres, which takes around 1 hour 15 minutes to 1 hour 30 minutes by road in normal traffic. The route is well-maintained dual carriageway for most of the journey, passing through the mountains with some spectacular scenery near Kalkan.

**Transfer Options from Dalaman to Kalkan**
There are three main options for getting from Dalaman Airport to Kalkan:

Private Airport Transfer: The most comfortable and stress-free option. A driver meets you at arrivals with a name board, helps with luggage and takes you directly to your villa or hotel in Kalkan. No stops, no waiting. Adda Tours Yasin offers private transfers in air-conditioned vehicles with flight tracking — if your flight is delayed, your driver waits. This is what most UK visitors choose, particularly families.

Shared Transfer: A minibus service that collects several arriving groups and drops them at different hotels. More economical than a private transfer but slower, as you may wait for other passengers and make multiple stops. Journey time can extend to 2–3 hours.

Hire Car: Several car hire companies operate from Dalaman Airport. Driving yourself gives flexibility but you'll be navigating unfamiliar roads after a long flight, and parking in Kalkan's steep old town can be tricky. If you plan to use a hire car during your stay, consider having it delivered to Kalkan rather than collecting at the airport.

**Why Choose a Private Transfer with Adda Tours Yasin?**
We track your flight in real time, so there's no waiting around if you're delayed. Our drivers meet you in arrivals, take care of your luggage and get you to Kalkan efficiently. We operate 24 hours a day, 7 days a week — including early morning and late-night arrivals. We also offer return transfers to Dalaman for your departure and can arrange transfers to and from Antalya Airport for those flying from different UK airports.

**Antalya Airport to Kalkan**
Antalya Airport is further from Kalkan — approximately 200 km, taking around 2 hours 30 minutes to 3 hours. Some UK charter flights use Antalya, particularly from the Midlands. Adda Tours Yasin operates transfers from Antalya Airport to Kalkan on request.

**Prices for Dalaman to Kalkan Transfer**
Private transfer prices depend on vehicle size and the number of passengers. Contact Adda Tours Yasin via WhatsApp for a quote tailored to your group size. We offer competitive rates with no hidden extras — the price you agree includes all toll charges and waiting time.

**Tips for UK Travellers Flying to Kalkan**
Book your transfer before you travel, particularly in July and August when demand is high. Have the contact number for your driver saved on your phone before you board. The Dalaman arrivals hall can be busy — look for the name board in the arrivals area. If you have young children, let us know in advance and we'll ensure appropriate child seats are available.

To book your Dalaman to Kalkan transfer, message Adda Tours Yasin on WhatsApp with your flight details, arrival date and group size. We'll confirm availability and pricing within a few hours.`,
    author: 'Yasin Çelik',
    date: '2026-05-14',
    readTime: '7 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Dalaman Transfer', 'Airport Transfer', 'Kalkan', 'UK Travellers', 'Travel Tips'],
  },
  {
    id: '12',
    slug: 'family-tours-kalkan',
    title: 'Best Family-Friendly Tours in Kalkan',
    excerpt:
      'Kalkan is an excellent base for family holidays. Here are the best tours and excursions for families with children — from gentle boat trips to adventure safaris — with tips on what works at different ages.',
    content: `Kalkan has built a strong reputation as a family-friendly resort over the years. The calm bay is ideal for young swimmers, the town is compact and walkable, and the range of excursions on offer means there's something for every age group. Here are the best family tours from Kalkan.

**Kalkan Boat Trip — Perfect for All Ages**
The daily boat trip is the most family-friendly excursion in Kalkan. The boat departs from the harbour in the morning, spending the day visiting bays and coves with calm, shallow water ideal for children. A BBQ lunch is served on board, and younger children often enjoy helping the crew. Life jackets are available for all ages. Private boat hire is an excellent option for families who want to set their own pace and choose swimming spots suitable for young children.

**Myra & Kekova Sunken City — Educational and Exciting**
The Kekova tour combines history and the wow factor in equal measure. Children are fascinated by the sight of ancient ruins visible through the water — walls, staircases and archways from a city that sank 2,000 years ago. The boat cruise is calm and enclosed within the sheltered Kekova lagoon. The rock-cut tombs at Myra are dramatic and memorable. Best for children aged 5 and above.

**Saklikent Jeep Safari — Adventure for Older Children**
The Saklikent Jeep Safari is the top choice for families with older children and teenagers. The gorge walk is suitable from around age 6 upwards (you walk through shallow water along the gorge floor). The mud bath is a highlight for children of all ages. The extreme sports activities — rafting, zipline and buggy — have minimum age requirements and are best for teenagers. Adults love it just as much.

**Patara Sunset Jeep Safari — Magical for Families**
The Patara Sunset trip is a gentler adventure. You travel by open-top jeep to Patara Beach, explore the sand dunes and ancient ruins, and watch the sunset over the Mediterranean. Children love the dunes, which are safe to run and play on. The golden evening light makes for beautiful family photographs.

**Sea Kayaking at Kekova — Active Adventure for Families**
Tandem kayaks are available for adults paddling with children, making the Kekova kayaking tour accessible for families. Older children can paddle their own kayak with guidance from the instructor. The experience of gliding over the sunken ruins is magical for children who are interested in history or simply love being on the water.

**Tips for Family Excursions from Kalkan**
Book morning departures where possible — children (and adults) are fresher and the light is better. Always bring high-factor sunscreen; the sun reflecting off the water is intense. Pack snacks for younger children in case they don't enjoy the lunch provided. For boat trips, let the operator know in advance if you have very young children — they can suggest the calmest routes.

For advice on the best tours for your specific age group and interests, contact Adda Tours Yasin via WhatsApp. We've been arranging family holidays on the Lycian Coast for over 25 years and can recommend the right combination of activities for your family.`,
    author: 'Yasin Çelik',
    date: '2026-05-20',
    readTime: '8 min read',
    category: 'Family Travel',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Family Tours', 'Kalkan', 'Family Holiday', 'Kids Activities', 'Lycian Coast'],
  },

  // ─── 3 Missing English Posts ───────────────────────────────────────────────
  {
    id: '13',
    slug: 'patara-sunset-tour-guide',
    title: 'Patara Beach Sunset Tour: A Perfect Evening from Kalkan',
    excerpt:
      'Patara Beach is the longest sandy beach in the Mediterranean — and at sunset, it is one of the most beautiful places on earth. Here\'s everything you need to know about the Patara Sunset Tour from Kalkan.',
    content: `Patara Beach stretches for 18 uninterrupted kilometres along the Lycian Coast, and as the sun drops towards the western sea, the golden light transforms the sand dunes into something extraordinary. The Patara Sunset Jeep Safari from Kalkan is one of the most popular and romantic excursions in the region — here's what to expect.

**Why Patara at Sunset?**
Patara's orientation means the sun sets almost directly along the beach, casting long shadows across the dunes and lighting the sea in shades of amber and coral. Photographers come specifically for this light. Even non-photographers are stopped in their tracks. Add ancient ruins, warm evening air and the sound of the sea, and you have a genuinely unforgettable evening.

**What Does the Patara Sunset Jeep Safari Include?**
The tour departs from Kalkan in the late afternoon by open-top jeep, driving through olive groves and limestone hills before arriving at Patara. You'll explore the ancient ruins of Patara city — the birthplace of St Nicholas (the original Father Christmas) — before heading to the beach and sand dunes for the sunset. The tour includes the jeep and driver, entrance fees and refreshments. The return to Kalkan is in the early evening, usually around 21:00.

**The Patara Ruins**
Ancient Patara was one of the most important cities in Lycia and a major Mediterranean port. The ruins are impressive: a triumphal arch, a lighthouse (the oldest in the world still standing), a Roman theatre, a granary and the Bouleuterion (senate house). Most visitors are surprised by how extensive and well-preserved the ruins are. A private guide can be arranged — contact Adda Tours Yasin if you'd like commentary on the history.

**The Sand Dunes and Beach**
Patara's sand dunes are dramatic — some rise to 15–20 metres, and scrambling up them for the view is worth the effort. The beach itself is protected as a nesting site for loggerhead sea turtles from May to October, so access to certain areas may be restricted. Swimming is possible at the main beach section.

**Is the Patara Sunset Tour Suitable for Everyone?**
The tour involves some walking on uneven terrain and loose sand. It is suitable for most ages but is not recommended for passengers with serious mobility issues. Children enjoy the dunes and the open jeep. Bring a light jacket as it can be breezy on the way back after sunset.

**How to Book**
The Patara Sunset Jeep Safari departs from Kalkan. Contact Adda Tours Yasin via WhatsApp to check departure times for your dates and confirm availability. Hotel pickup is included from Kalkan.`,
    author: 'Yasin Çelik',
    date: '2026-05-10',
    readTime: '7 min read',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1616422285623-138243640b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Patara', 'Sunset Tour', 'Jeep Safari', 'Kalkan Excursions'],
  },
  {
    id: '14',
    slug: 'meis-island-day-trip-guide',
    title: 'How to Visit Meis Island from Kas or Kalkan',
    excerpt:
      'Meis Island (Kastellorizo) is a tiny Greek island just 2 km from the Turkish coast. This guide explains how to visit on a day trip from Kas or Kalkan — ferry times, what to do and what to bring.',
    content: `Meis Island — known in Greek as Kastellorizo — is one of the most unusual day trips available from the Turkish Riviera. It takes just 20 minutes by ferry to cross from the Turkish town of Kas to this tiny Greek island, and the contrast is striking. Here's everything you need to plan your visit.

**What Is Meis Island?**
Meis (Kastellorizo) is the easternmost inhabited island in Greece, with a permanent population of just a few hundred people. It sits 2 km off the coast of Kas and 570 km from Athens — closer to Turkey than to any other Greek island. Despite its remote position, Meis has a deeply proud identity and an outsized charm. The harbour is lined with colourful neoclassical mansions, and the pace of life is entirely unhurried.

**How to Get from Kalkan to Meis Island**
The ferry to Meis departs from Kas harbour, not Kalkan directly. Kas is approximately 30 minutes from Kalkan by road. The Meis Island Day Trip with Adda Tours Yasin includes transfer from Kalkan to Kas and the ferry ticket. The ferry crossing takes around 20 minutes and runs daily in summer (seasonal — check availability before booking).

**What to Do on Meis Island**
The island is small enough to walk around in a few hours. Start at the waterfront and explore the neoclassical mansion facades — many are painted in vivid ochre, blue and terracotta. The Byzantine castle above the village offers panoramic views across to the Turkish coast. The Blue Cave (Fokiali) is a sea cave accessible by small boat from the harbour, famous for its luminescent blue light — worth the extra visit.

**Where to Eat on Meis**
The waterfront tavernas serve excellent fresh fish and Greek mezze. Try the grilled octopus and the local cheese. Prices are in euros. Most restaurants accept cash only — bring some with you.

**What Do I Need to Bring?**
A valid passport is required — this is an international crossing, even if it feels local. Most nationalities do not need a visa for Greece. Check your specific nationality's requirements before booking. Bring euros for lunch and shopping. Bring a hat and sunscreen — the island is exposed.

**Is the Meis Day Trip Worth It?**
Absolutely. The combination of the short crossing, a completely different culture and atmosphere just 20 minutes away, excellent swimming and the charm of Meis town makes this one of the most memorable day trips from Kalkan or Kas. It's a genuinely unique experience on the Lycian Coast.

Contact Adda Tours Yasin via WhatsApp to book the Meis Island Day Trip from Kalkan, including transfer from your hotel to Kas and the return ferry ticket.`,
    author: 'Yasin Çelik',
    date: '2026-05-12',
    readTime: '7 min read',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Meis Island', 'Kastellorizo', 'Kas', 'Greek Island', 'Day Trip'],
  },
  {
    id: '15',
    slug: 'private-tours-kalkan',
    title: 'Private Tours in Kalkan: Why Book a Custom Experience?',
    excerpt:
      'Group tours are convenient — but private tours in Kalkan offer something genuinely different. Here\'s why a custom private experience might be the best thing you do on your holiday.',
    content: `When you travel to Kalkan, the range of group tours is impressive. But for many visitors — particularly families, couples celebrating a special occasion and those who simply value their time — a private tour is the better choice. Here's why.

**You Control the Pace**
On a group boat trip, the captain has a fixed route and fixed timings. On a private boat from Kalkan, you decide how long you stay in each bay, whether you want to anchor for a long swim or move on quickly. If you find a cove you love, you stay. If the children are tired, you head back early. This flexibility transforms the experience.

**You Choose the Itinerary**
Private tours can be built entirely around your interests. Love ancient history? We'll focus on Kekova and Myra with a specialist guide and skip the shopping stops. Want to combine a morning boat trip with an afternoon at Saklikent? We'll arrange it. Prefer a sunset cruise with a private barbecue? Done. The tour becomes yours.

**Private Boat Hire in Kalkan**
A private boat in Kalkan is not only a luxury choice — for larger groups, it can be genuinely competitive with individual group tour prices. If you have eight or more people, hiring a private gulet or day boat can cost a similar amount per head to a standard group trip, while offering complete exclusivity. Contact Adda Tours Yasin for a quote tailored to your group size.

**Private Jeep Safari and Land Tours**
Private jeep safaris to Saklikent, Patara and the mountains are another popular option. A private vehicle means you're not waiting for others, your driver focuses entirely on your group, and you can stop for photographs wherever you like. The same applies to historical tours — a private guide who speaks directly to your group, answers your questions and tailors the commentary to your level of interest.

**Private Airport Transfers**
The transfer from Dalaman Airport to Kalkan sets the tone for your holiday. Adda Tours Yasin's private transfer service means a driver with your name at arrivals, help with luggage, no waiting for other passengers and a direct, comfortable journey to your villa or hotel.

**How to Book a Private Tour in Kalkan**
Contact Adda Tours Yasin via WhatsApp with your group size, dates and interests. We'll suggest the best options and send a tailored quote. Most private tours can be arranged at 24 hours' notice, though earlier booking is recommended in July and August.`,
    author: 'Yasin Çelik',
    date: '2026-05-16',
    readTime: '6 min read',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Private Tours', 'Kalkan', 'Custom Experience', 'Private Boat', 'VIP'],
  },

  // ─── Turkish Blog Posts ───────────────────────────────────────────────────
  {
    id: '16',
    slug: 'tr-kalkan-yapilacak-seyler',
    title: "Kalkan'da Yapılacak En Güzel 10 Aktivite",
    excerpt:
      "Kalkan'da ne yapılır? Tekne turlarından jeep safarilere, antik şehirlerden deniz kanousuna kadar Kalkan'ın en güzel 10 aktivitesini derledik.",
    content: `Kalkan, Antalya'nın batısında, Likya kıyısında yer alan ve her yıl binlerce turisti ağırlayan eşsiz bir tatil beldesidir. Beyaz boyalı evleri, dar sokakları ve masmavi koyu ile Kalkan'da yapılacaklar hiç bitmez. İşte en güzel 10 aktivite.

**1. Kalkan Tekne Turu**
Kalkan çıkışlı günlük tekne turları, bölgenin en popüler aktivitesi olmaya devam etmektedir. Frank Bay, Mouse Island ve Cenerlik Koyu'na uğrayan tekneler, yüzme molaları ve teknede servis edilen BBQ öğle yemeğiyle mükemmel bir gün sunar. Özel tekne kiralama da mümkündür; kalabalık gruplar için ideal bir seçenektir.

**2. Kekova Batık Şehir ve Myra Turu**
Tam gün süren bu tur, Kalkan çıkışlı en etkileyici güzergahlardan biridir. Myra'nın kaya mezarlarını, Kekova'nın denize gömülü antik şehrini ve Simena'daki ortaçağ kalesini ziyaret edersiniz. Kekova'nın berrak sularından batan şehrin duvarlarını ve merdivenlerini görmek unutulmaz bir deneyimdir.

**3. Saklıkent Jeep Safari**
Avrupa'nın en uzun ikinci kanyonu olan Saklıkent, Kalkan'dan yaklaşık 70 km uzaklıktadır. Jeep safari ile kanyona ulaştıktan sonra quad bike, zipline, rafting ve çamur banyosu seçeneklerinden oluşan 4'ü 1 arada macera paketi ile dolu dolu bir gün geçirebilirsiniz.

**4. Patara Plajı Gün Batımı Turu**
Akdeniz'in en uzun plajı olan 18 km'lik Patara, gün batımı saatlerinde büyüleyici bir görünüm kazanmaktadır. Antik Patara kalıntılarını ve kum tepelerini Kalkan'dan hareket eden jeep safari ile keşfedebilirsiniz.

**5. Tüplü Dalış (Try Dive)**
Kalkan'ın berrak suları, Akdeniz'in en iyi dalış noktaları arasında yer almaktadır. PADI sertifikalı eğitmenler eşliğinde gerçekleştirilen try dive deneyimi, hiç dalmamış olanlar için mükemmel bir başlangıçtır. Minimum yaş 10, tüm ekipman dahildir.

**6. Kekova'da Deniz Kanosu**
Kekova'nın sakin sularında kano yapmak, antik kalıntıları en yakından keşfetmenin en iyi yoludur. Deniz mağaraları ve sadece kayıkla ulaşılabilen gizli koylar turu tamamlar. Sabah kalkışları önerilir.

**7. Meis Adası Günübirlik Turu**
Kaş'tan 20 dakikalık bir feribot yolculuğuyla Yunan adası Meis'e (Kastellorizo) ulaşabilirsiniz. Renkli neo-klasik evleri, taze deniz ürünleri ve tamamen farklı bir atmosferi keşfedin. Pasaport zorunludur.

**8. Tarihi Tur (Xanthos, Tlos, Letoon)**
Antik Likya medeniyetinin izlerini takip etmek isteyenler için Kalkan'dan düzenlenen tarihi tur idealdir. UNESCO Dünya Mirası alanları olan Xanthos ve Letoon başta olmak üzere bölgenin en önemli arkeolojik sitlerini özel rehber eşliğinde ziyaret edebilirsiniz.

**9. Kalkan Eski Şehir Yürüyüşü**
Kalkan'ın dar sokakları, çiçeklerle kaplı balkonları ve limana hakim çatı restoranları başlı başına bir deneyimdir. Öğle ya da akşam yemeği için bir çatı restoranı seçerek Kalkan Körfezi'nin panoramik manzarasının tadını çıkarın.

**10. Dalaman veya Antalya'dan Özel Transfer**
Kalkan tatilinin konforu, havalimanından başlar. Adda Tours Yasin'in sunduğu özel transfer hizmetiyle, uçuş takibi ve karşılama servisiyle, havalimanından doğrudan otelinize veya villanıza konforlu bir yolculuk yapabilirsiniz.

Rezervasyon ve bilgi için WhatsApp üzerinden Adda Tours Yasin ile iletişime geçebilirsiniz.`,
    author: 'Yasin Çelik',
    date: '2026-04-05',
    readTime: '8 dk okuma',
    category: 'Gezi Rehberi',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Kalkan', 'Yapılacak Şeyler', 'Gezi Rehberi', 'Likya Kıyısı'],
  },
  {
    id: '17',
    slug: 'tr-kas-kalkan-gunluk-turlar',
    title: "Kaş ve Kalkan'dan Günübirlik En İyi Turlar",
    excerpt:
      "Kaş ve Kalkan, Likya kıyısının en güzel günübirlik turlarına ev sahipliği yapmaktadır. Tekne turlarından dağ safarilerine, antik şehirlerden Yunan adası geçişlerine kadar en iyi rotalar.",
    content: `Kalkan ve Kaş, Türkiye'nin güneybatı kıyısında, birbirine 30 km uzaklıkta yer alan iki güzel tatil beldesidir. Her iki merkez de Likya kıyısının en iyi günübirlik turlarına çıkış noktası olmaktadır. İşte mutlaka yapılması gereken günübirlik turlar.

**Kekova Batık Şehir ve Myra — Herkes İçin Olmazsa Olmaz**
Kalkan ve Kaş çıkışlı en popüler tam gün tur olan Myra ve Kekova turu, tarih ile doğanın eşsiz bir birleşimini sunmaktadır. Demre'deki (eski adıyla Myra) kaya mezarlarını ziyaret ettikten sonra Kekova Körfezi'nde tekneye binerek deniz altında yatan antik şehrin kalıntılarını izleyebilirsiniz. Simena'daki Kaleköy ve ortaçağ kalesi de turun vazgeçilmez duraklarıdır.

**Saklıkent Jeep Safari — Macera Arayanlar İçin**
Saklıkent, Kalkan'dan 70 km, Kaş'tan ise yaklaşık 80 km uzaklıktadır. Jeep safari bu eşsiz kanyona ulaşmanın en keyifli yoludur. Quad bike, zipline, rafting ve çamur banyosundan oluşan 4'ü 1 arada aktivite paketi sayesinde enerji dolu bir gün geçirebilirsiniz. Öğle yemeği dahildir.

**Patara Plajı ve Gün Batımı — Fotoğraf Tutkunları İçin**
Patara Plajı, Kalkan'a 30 km, Kaş'a ise yaklaşık 45 km uzaklıktadır. Gün batımı jeep safari ile kum tepelerini ve antik kalıntıları ziyaret ederken Akdeniz'in en uzun plajında eşsiz gün batımı manzaralarının keyfini çıkarabilirsiniz.

**Meis Adası — Yunanistan'a 20 Dakikada**
Kaş'tan düzenlenen Meis Adası günübirlik turu, pasaportunuzu yanınıza alarak Yunan adacığına kısa bir gezi yapmanızı sağlar. Renkli neo-klasik evler, berrak yüzme noktaları ve taze deniz ürünleriyle geçireceğiniz bu özel gün, Kalkan'dan da katılım imkânıyla sunulmaktadır.

**Fethiye, Kayaköy ve Ölüdeniz**
Kalkan'dan yaklaşık 80 km uzaklıkta olan Fethiye, tam gün bir tur için idealdir. Salı günleri kurulan Fethiye pazarı, hayalet köy Kayaköy ve paraşüt tutkunlarının mekânı Ölüdeniz'in mavi lagünü bu güzergahın öne çıkan noktalarıdır.

**Kalkan Tekne Turu — Klasik Seçim**
Kalkan çıkışlı günlük tekne turu, bölgenin en rahat ve keyifli aktivitelerinden biridir. Frank Bay ve Mouse Island gibi yalnızca tekneyle ulaşılabilen koylarda yüzme, güneşlenme ve teknede hazırlanan BBQ öğle yemeğiyle geçirilen bir gün, her yaştan misafir için uygun bir seçenektir.

Tüm bu turları rezerve etmek için WhatsApp üzerinden Adda Tours Yasin ile iletişime geçebilirsiniz. Özel araç veya grup turları için her gün hareket imkânı sunulmaktadır.`,
    author: 'Yasin Çelik',
    date: '2026-04-12',
    readTime: '7 dk okuma',
    category: 'Gezi Rehberi',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Günübirlik Turlar', 'Kalkan', 'Kaş', 'Likya Kıyısı'],
  },
  {
    id: '18',
    slug: 'tr-kalkan-tekne-turu-rehberi',
    title: 'Kalkan Tekne Turu Rehberi: Koylar, Saatler ve Rezervasyon İpuçları',
    excerpt:
      'Kalkan tekne turunu planlamadan önce bilmeniz gereken her şey: hangi koyları ziyaret edeceksiniz, ne dahil, fiyatlar ne kadar ve nasıl rezervasyon yapılır?',
    content: `Kalkan tekne turu, bölgeyi ziyaret eden her turistin deneyimlemesi gereken aktivitelerin başında gelmektedir. Masmavi koylar, berrak sular ve teknede hazırlanan BBQ öğle yemeğiyle geçirilen bir gün, Kalkan tatilinin unutulmaz anları arasında yer alır. İşte bilmeniz gereken her şey.

**Kalkan Tekne Turu Hangi Koyları Ziyaret Eder?**
Günlük tekne turları hava koşulları ve kaptan tercihlerine göre farklılık gösterse de genellikle şu noktalara uğrar: Frank Bay (Franko Koyu), Mouse Island (Fare Adası), Cenerlik Koyu, Hamam Koyu'ndaki doğal çamur banyosu ve yalnızca tekneyle ulaşılabilen çeşitli gizli koylar. Kaptanlar, en iyi yüzme noktalarına yönlendirilmesi açısından deneyimlidir.

**Tekne Turuna Neler Dahildir?**
Standart grup tekne turuna şunlar dahildir: otelden alım ve bırakma, teknede hazırlanan BBQ öğle yemeği, meşrubat ve su, birden fazla yüzme molası ile sigorta. Can yelekleri tüm boyutlarda mevcuttur. Bazı tekne turlarında şnorkel ekipmanı da dahil olabilir; rezervasyon sırasında teyit edin.

**Grup Tekne Turu mu, Özel Tekne Kiralama mı?**
Grup tekne turları, sabah Kalkan Limanı'ndan hareket eden ve akşama kadar süren standart günlük turlar olup kişi başı fiyatı yaklaşık 85 Euro'dan başlamaktadır. Özel tekne kiralama, kendi programınızı belirlemenizi, kalkış saatini seçmenizi ve tamamen kişiselleştirilmiş bir deneyim yaşamanızı sağlar. Aile ve arkadaş grupları için özel tekne oldukça ideal bir seçenektir.

**Tekne Turu Ne Zaman Harekete Geçer?**
Günlük tekne turu genellikle sabah 10:00'da Kalkan Limanı'ndan hareket eder ve öğleden sonra 16:00–17:00 civarında döner. Gün batımı cruise seçenekleri öğleden sonra geç saatlerde hareket eder ve 2–3 saat sürer.

**Tekne Turuna Ne Getirilmeli?**
Yüksek faktörlü güneş koruyucu (su yüzeyinden yansıyan güneş çok kuvvetlidir), mayo, havlu, güneş gözlüğü ve şapka getirmeniz önerilir. Öğleden sonra serinleyebileceğiniz için hafif bir üst kat da işinize yarayabilir.

**Kalkan Tekne Turu Çocuklar İçin Uygun mu?**
Evet. Kalkan tekne turları her yaştan misafir için uygundur; küçük çocuklar için de can yelekleri mevcuttur. Yüzme molalarında çocuklar için sığ ve sakin koylar tercih edilmektedir.

**Rezervasyon için ne yapmalıyım?**
WhatsApp üzerinden Adda Tours Yasin ile iletişime geçerek müsaitlik, fiyat ve grup indirimi bilgilerini öğrenebilirsiniz. Temmuz ve Ağustos aylarında kapasiteler hızla dolduğundan önceden rezervasyon yapılması önerilmektedir.`,
    author: 'Yasin Çelik',
    date: '2026-04-20',
    readTime: '7 dk okuma',
    category: 'Gezi Rehberi',
    image: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Kalkan Tekne Turu', 'Tekne Gezisi', 'Kalkan', 'Su Aktiviteleri'],
  },
  {
    id: '19',
    slug: 'tr-kekova-batiksehir-turu',
    title: "Kekova Batık Şehir Turu Hakkında Bilmeniz Gerekenler",
    excerpt:
      "Kekova Batık Şehir, Türkiye'nin en etkileyici arkeolojik sit alanlarından biridir. İşte Kalkan çıkışlı Kekova turunu planlamadan önce bilmeniz gereken her şey.",
    content: `Kekova, MS 2. yüzyıldaki depremler sonucunda denize gömülen antik bir Likya kentidir. Kristal berraklığındaki sular sayesinde batık şehrin duvarları, merdivenleri ve kapı çerçeveleri teknenin altından net bir şekilde görülebilmektedir. Kekova, pek çok arkeolog ve tarih meraklısı tarafından Akdeniz'in en olağanüstü sualtı alanı olarak kabul edilmektedir. İşte Kalkan'dan Kekova turunu planlamak için bilmeniz gerekenler.

**Kekova Batık Şehir Nedir?**
Antik dönemlerde Dolichiste adıyla bilinen Kekova, Batı Likya'nın önemli kentlerinden biriydi. 2. yüzyılda yaşanan şiddetli depremler sonucunda şehrin büyük bir bölümü denize battı. Günümüzde bu kalıntılar, Kekova Körfezi'nin korunaklı sularında muhteşem bir sualtı müzesi oluşturmaktadır. Alan, Türkiye'nin resmi koruma statüsüne sahip bir sualtı arkeoloji sahası olarak tescillenmiştir.

**Tam Gün Myra ve Kekova Turu**
Kalkan'dan düzenlenen Myra ve Kekova Turu üç ana noktayı kapsamaktadır. İlk olarak Demre (antik Myra) ziyareti gerçekleştirilir. Burası, noel baba figürünün tarihsel kaynağı olan Aziz Nikolas'ın memleketi ve kaya mezarlarıyla ünlü Likya'nın başkentlerinden biridir. Ardından Kekova Körfezi'ne geçilir; tekne, batık şehrin kalıntılarının üzerinden yavaşça geçerken rehber tarihi aktarır. Son olarak Simena köyüne çıkarılır ve tepeye inşa edilmiş ortaçağ kalesi ziyaret edilir.

**Kekova'da Yüzme Yasak Mı?**
Batık şehrin doğrudan üzerinde yüzmek, alana zarar vermemek amacıyla yasaktır. Ancak Kekova Körfezi'nde belirlenen yüzme noktalarında tekneyi bırakarak denize girebilirsiniz. Su berraklığı olağanüstüdür.

**Tur Ne Kadar Sürer?**
Tam gün turun toplam süresi yaklaşık 10–11 saattir. Kalkan'dan sabah 08:30–09:00 arasında hareket edilir ve akşam 18:00–19:00 civarında dönülür.

**Çocuklar İçin Uygun mu?**
Evet; Kekova turu her yaştan misafire uygundur. Tekne gezisi sakindir ve körfez korunaklıdır. Simena'daki kale yürüyüşü için rahat ayakkabı önerilir.

**Kekova Turu Nasıl Rezerve Edilir?**
WhatsApp üzerinden Adda Tours Yasin ile iletişime geçerek müsaitlik ve fiyat bilgisi alabilirsiniz. Tur, Kalkan'dan transfer dahil olarak sunulmaktadır.`,
    author: 'Yasin Çelik',
    date: '2026-04-28',
    readTime: '7 dk okuma',
    category: 'Tarihi Turlar',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Kekova', 'Batık Şehir', 'Tekne Turu', 'Antik Tarih', 'Likya'],
  },
  {
    id: '20',
    slug: 'tr-saklikent-jeep-safari-rehberi',
    title: "Saklıkent Jeep Safari Turu: Kimler İçin Uygun?",
    excerpt:
      "Saklıkent Jeep Safari, Kalkan'dan yapılabilecek en heyecan verici günübirlik turlardan biridir. Kim katılabilir, ne beklenmeli ve nasıl rezervasyon yapılır?",
    content: `Saklıkent Jeep Safari, Kalkan tatilcileri arasında en çok tercih edilen macera turlarından biridir. Avrupa'nın en uzun ikinci kanyonunu gezip rafting ve zipline gibi adrenalin dolu aktiviteler yapabileceğiniz bu tur, tüm gün boyunca etkinlik dolu vakit geçirmenizi sağlar. Peki kimler bu turdan en iyi şekilde yararlanabilir?

**Saklıkent Kanyonu Nedir?**
Saklıkent Kanyonu, 18 km uzunluğu ve bazı bölgelerde 300 metreye ulaşan derinliğiyle Avrupa'nın en büyük ikinci kanyonudur. Akdağlar'ın bağrından açılan bu doğal yapının tabanında buz gibi soğuk bir dağ nehri akmaktadır. Kanyona giriş platformundan ilerleyerek nehrin içinde yürümek, yükselen kaya duvarları arasında geçmek son derece etkileyici bir deneyimdir.

**Saklıkent Jeep Safari Neleri Kapsıyor?**
Tur, Kalkan'dan jeep ile hareket ederek başlar. Güzergah boyunca dağ manzaraları ve köyler geçilir. Saklıkent Kanyonu ve Gizlikent Şelalesi ziyaretlerinin ardından aktivite seçenekleri devreye girer. Quad bike veya buggy ile off-road sürüş, zipline, rafting ve salıncak atışı (swing shot) arasından tercih yapabilirsiniz. Günün sonunda geleneksel çamur banyosu standart pakete dahildir. Öğle yemeği nehir kenarında bir restoranda sunulur.

**Saklıkent Jeep Safari'ye Kimler Katılabilir?**
Kanyon yürüyüşü ve çamur banyosu 6 yaş ve üzeri çocuklar dahil tüm aile üyeleri için uygundur. Rafting, zipline ve quad bike gibi adrenalin aktivitelerinin ise minimum yaş ve kilo şartları bulunmaktadır. Ailelerle seyahat edenler, çocuklarının hangi aktivitelere katılabileceğini rezervasyon sırasında sorabileceğini bilmelidir.

**Ne Getirmeliyim?**
Mayo ve havlu kesinlikle unutulmamalıdır; ıslak olmayı bekleyin. Mümkünse su ayakkabısı ya da ıslanması sakıncasız spor ayakkabı tercih edin. Değiştirmelik kıyafet de çantanızda bulundurun.

**Saklıkent Jeep Safari Fiyatları**
Tur, aktivite kombinasyonuna göre Bronz, Gümüş ve Altın olmak üzere üç farklı paket halinde sunulmaktadır. Fiyatlar ve içerikler hakkında bilgi almak için WhatsApp üzerinden Adda Tours Yasin ile iletişime geçebilirsiniz.`,
    author: 'Yasin Çelik',
    date: '2026-05-03',
    readTime: '6 dk okuma',
    category: 'Macera Turları',
    image: 'https://images.unsplash.com/photo-1596423735880-5f2a689b903e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Saklıkent', 'Jeep Safari', 'Macera', 'Kanyon', 'Kalkan Turları'],
  },
  {
    id: '21',
    slug: 'tr-patara-gun-batimi-rehberi',
    title: "Patara Plajı ve Gün Batımı Turları Rehberi",
    excerpt:
      "Akdeniz'in en uzun plajı olan Patara, gün batımı saatlerinde büyüleyici bir güzelliğe bürünür. Kalkan'dan Patara Gün Batımı Turu hakkında bilmeniz gerekenler.",
    content: `Patara Plajı, 18 km uzunluğuyla Akdeniz'in en uzun kumlu plajı olma unvanını korumaktadır. Deniz kaplumbağalarının yuvalama alanı olarak koruma altında tutulan bu plaj, gün batımı saatlerinde altın rengi kum tepeleri ve antik kalıntılarıyla nefes kesen bir manzara sunmaktadır. Kalkan'dan düzenlenen Patara Gün Batımı Jeep Safari, bölgenin en sevilen akşam turları arasında yer almaktadır.

**Patara Neden Özeldir?**
Patara yalnızca bir plaj değildir. Antik Likya'nın en önemli kentlerinden biri olan Patara, aynı zamanda Aziz Nikolas'ın doğduğu yer olarak da bilinmektedir. Burada biri Kıbrıslılar'dan daha eski olduğu düşünülen bir deniz feneri, bir Roma tiyatrosu, tahıl ambarı, meclis binası (buleuterion) ve zafer takı bulunmaktadır. Kalıntıların koruma altındaki plajla iç içe geçmesi son derece sıra dışı bir arkeolojik manzara oluşturmaktadır.

**Patara Gün Batımı Turu Nasıl Bir Deneyim Sunar?**
Tur, Kalkan'dan öğleden sonra geç saatlerde açık üstü jeep ile hareket eder. Zeytinlikler ve kireçtaşı tepeler arasından geçen yol, yaklaşık 30 dakika sürmektedir. Patara'ya vardığınızda önce antik kalıntılar gezilir, ardından kum tepelerine yönelinir ve gün batımı seyredilebilir en iyi noktaya ulaşılır. Güneş battıktan sonra Kalkan'a dönülür.

**Patara Turu Çocuklar İçin Uygun mu?**
Evet. Kum tepeleri çocuklar için harika bir oyun alanıdır. Açık üstü jeep yolculuğu çocuklar tarafından çok sevilen bir deneyimdir. Yolculuk boyunca güneş koruyucu ve hafif bir üst kat bulundurmanız önerilir.

**Patara'da Yüzme İmkânı Var mı?**
Tur gün batımına odaklandığından yüzme zamanı sınırlı olabilir. Ancak plajın ana kısmında yüzme imkânı bulunmaktadır. Şans eseri kaplumbağa yuvası olmayan bir alana denk gelirseniz bu fırsat değerlendirilebilir.

**Patara Gün Batımı Turu Rezervasyonu**
Tur, Kalkan'dan hareketle düzenlenmektedir. Kalkış saati mevsime göre değiştiğinden en güncel bilgi için WhatsApp üzerinden Adda Tours Yasin ile iletişime geçin.`,
    author: 'Yasin Çelik',
    date: '2026-05-06',
    readTime: '6 dk okuma',
    category: 'Gezi Rehberi',
    image: 'https://images.unsplash.com/photo-1616422285623-138243640b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Patara', 'Gün Batımı Turu', 'Jeep Safari', 'Kalkan', 'Antik Sit'],
  },
  {
    id: '22',
    slug: 'tr-meis-adasi-nasil-gidilir',
    title: "Kalkan'dan Meis Adası'na Nasıl Gidilir?",
    excerpt:
      "Meis Adası (Kastellorizo), Kaş açıklarında yer alan büyülü bir Yunan adasıdır. Kalkan'dan Meis'e nasıl gidilir, pasaport gerekli mi ve adada ne yapılır?",
    content: `Meis Adası, Kaş'ın tam karşısında, Türkiye kıyısına yalnızca 2 km uzaklıkta yer alan küçük bir Yunan adasıdır. Yunanistan'ın en doğu noktasındaki bu adacık, Atina'dan çok Türkiye'ye yakındır. Renkli neo-klasik evleri, yavaş temposu ve berrak suları ile Meis, Kalkan'dan yapılabilecek en ilginç günübirlik turlardan biridir.

**Kalkan'dan Meis Adası'na Nasıl Gidilir?**
Meis feribot seferleri Kaş Limanı'ndan kaldığından, Kalkan'dan hareket eden Meis Adası Turu öncelikle yaklaşık 30 dakikalık bir yol transferini kapsamaktadır. Kaş'tan Meis'e feribot geçişi ise sadece 20 dakika sürmektedir. Adda Tours Yasin'in Meis Adası Turu, Kalkan oteli veya villanızdan transfer ve feribot bileti dahil olarak sunulmaktadır.

**Pasaport Zorunlu mu?**
Evet, Türkiye'den Yunanistan'a geçiş yaptığınız için geçerli bir pasaport zorunludur. Pek çok ülkenin vatandaşı Yunanistan'a vize olmaksızın kısa süreli giriş yapabilir; ancak kendi ülkenizin şartlarını önceden kontrol etmenizi öneririz.

**Meis Adası'nda Ne Yapılır?**
Ada, yürüyerek birkaç saatte tamamen keşfedilebilecek kadar küçüktür. Renkli neo-klasik cepheli evlerin sıralandığı limanı gezip Bizans kalesi'ne tırmanabilir ve körfezin panoramik manzarasını izleyebilirsiniz. Mavizeren meşhur Mavi Mağara'yı (Fokiali) küçük bir tekneyle ziyaret etmek de mümkündür. Limandaki tavernalarda taze deniz ürünleri yemek ise adanın kesinlikle kaçırılmaması gereken deneyimlerinden biridir.

**Meis Turu Ne Kadar Sürer?**
Tam gün olarak düzenlenen tur sabah Kalkan'dan hareket eder ve akşam geç saatlerde geri döner. Adada geçirilen serbest zaman yaklaşık 3–4 saattir.

**Rezervasyon için WhatsApp**
Meis Adası Turu'nu rezerve etmek veya fiyat bilgisi almak için WhatsApp üzerinden Adda Tours Yasin ile iletişime geçebilirsiniz.`,
    author: 'Yasin Çelik',
    date: '2026-05-09',
    readTime: '6 dk okuma',
    category: 'Gezi Rehberi',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Meis Adası', 'Kastellorizo', 'Kaş', 'Yunan Adası', 'Günübirlik Tur'],
  },
  {
    id: '23',
    slug: 'tr-kas-dalis-rehberi',
    title: "Kaş'ta Dalış Yapmak İsteyenler İçin Başlangıç Rehberi",
    excerpt:
      "Kaş ve Kalkan, Türkiye'nin en iyi dalış noktaları arasında yer almaktadır. Hiç dalmamış olsanız bile PADI try dive deneyimi sizi sualtının büyüleyici dünyasıyla tanıştırır.",
    content: `Kaş ve çevresi, Türkiye'nin dalış için en elverişli bölgelerinden biri olarak uzmanlar tarafından sık sık öne çıkarılmaktadır. Berrak Akdeniz suları, olağanüstü görüş mesafesi ve zengin sualtı yaşamı, hem yeni başlayanlar hem de deneyimli dalgıçlar için ideal bir ortam sunmaktadır. Kalkan ve çevresinde try dive olanağı da mevcuttur; bu sayede hiçbir deneyim olmaksızın dalışın keyfini çıkarabilirsiniz.

**Kalkan ve Kaş Neden Dalış İçin İdeal?**
Likya kıyısının suları özellikle ilkbahar ve sonbaharda 30–40 metreye kadar varan görüş mesafesiyle Akdeniz'in en berrak noktaları arasında yer almaktadır. Bölgede Akdeniz foku, ahtapot, akrep balığı ve renkli kayalık balık türleriyle zengin bir sualtı ekosistemi bulunmaktadır. Tarihi batıklar ve antik liman kalıntıları da dalışlara tarihi bir boyut katmaktadır.

**Try Dive (Deneme Dalışı) Nedir?**
Try dive, daha önce hiç dalmamış kişiler için tasarlanmış, PADI sertifikalı bir eğitmen eşliğinde gerçekleştirilen kontrollü bir deneme dalışıdır. Başlamadan önce kısa bir teorik brifing verilir, ardından sığ suda pratik yapılır ve maksimum 5–8 metre derinliğe inerek gerçek bir dalış deneyimi yaşanır. Tüm ekipman dahildir ve minimum yaş 10'dur.

**Kalkan Dalış Turuna Neler Dahildir?**
Adda Tours Yasin aracılığıyla organize edilen try dive; Kalkan otelinizden transfer, tüm dalış ekipmanı (elbise, maske, palet, tüp), PADI sertifikalı eğitmen ve sigorta içermektedir.

**Dalış İçin En İyi Dönem**
Nisan–Kasım arası Kalkan ve çevresinde dalış için idealdir. Haziran–Eylül aylarında su sıcaklığı 25–28 dereceye çıkmakta olup görüş mesafesi de maksimum düzeye ulaşmaktadır.

**Rezervasyon**
Tüplü dalış deneyimi için WhatsApp üzerinden Adda Tours Yasin ile iletişime geçerek müsaitlik ve fiyat bilgisi alabilirsiniz.`,
    author: 'Yasin Çelik',
    date: '2026-05-11',
    readTime: '6 dk okuma',
    category: 'Su Sporları',
    image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Dalış', 'Try Dive', 'Kaş', 'Kalkan', 'Su Sporları'],
  },
  {
    id: '24',
    slug: 'tr-kalkan-aile-turlari',
    title: "Kalkan'da Aileler İçin En Uygun Turlar",
    excerpt:
      "Kalkan, aile tatili için mükemmel bir seçenektir. Çocuklar için en uygun turlar, yaş gruplarına göre aktivite önerileri ve ipuçları bu rehberde.",
    content: `Kalkan, küçük çocuklu ailelerden gençlerle seyahat eden büyük aile gruplarına kadar her tür aile tatili için son derece elverişlidir. Korunaklı körfezi, güvenli yüzme noktaları ve birbirinden farklı tur seçenekleri sayesinde Kalkan'da herkesin tadını çıkaracağı bir aktivite bulunmaktadır.

**Kalkan Tekne Turu — Her Yaştan Aile İçin**
Günlük tekne turu, aileler için en uygun Kalkan aktivitelerinin başında gelmektedir. Sakin ve korunaklı koylarda gerçekleştirilen yüzme molaları, küçük çocuklar için idealdir. Teknede hazırlanan BBQ öğle yemeği tüm aile üyeleri tarafından sevilen bir deneyimdir. Can yelekleri tüm boyutlarda mevcuttur. Birden fazla çocuğu olan aileler için özel tekne kiralama, kendi programınızı belirleme ve tamamen özel bir gün geçirme imkânı sunmaktadır.

**Myra ve Kekova Turu — Tarihe Meraklı Çocuklar İçin**
Kalıntıları berrak suyun altından gözlemlemek çocukların hayal gücünü büyük ölçüde canlandırmaktadır. Myra'nın kaya mezarları ve Simena'daki kale yürüyüşü 5 yaş ve üzeri çocuklar için uygundur. Tekne gezisi sakindir ve korumacı körfez sayesinde deniz daima durgun kalır.

**Saklıkent Jeep Safari — Büyük Çocuklar ve Gençler İçin**
Saklıkent kanyon yürüyüşü ve çamur banyosu 6 yaş ve üzeri çocuklar için uygundur. Rafting, zipline ve quad bike gibi ekstrem aktivitelerin bireysel yaş ve kilo şartları bulunmaktadır; bu nedenle rezervasyon sırasında grubunuzun yaşlarını belirtmeniz önerilir.

**Patara Gün Batımı Jeep Safari — Aile Fotoğrafları İçin**
Gün batımı ışığında Patara'nın kum tepeleri üzerinde fotoğraf çektirmek, aile albümlerine girecek kareler yakalamak için eşsiz bir fırsattır. Çocuklar kum tepelerinde koşmaktan ve açık üstü jeep yolculuğundan büyük keyif alır.

**Ailelere Pratik Öneriler**
Sabah saatlerinde başlayan turlarda çocuklar çok daha enerjik ve istekli olmaktadır. Yüksek faktörlü güneş koruyucu, şapka ve bol su mutlaka yanınızda bulundurulmalıdır. Küçük çocuklar için kendi atıştırmalıklarınızı getirmenizi öneririz.

Aileniz için en uygun tur kombinasyonunu belirlemek üzere WhatsApp üzerinden Adda Tours Yasin ile iletişime geçebilirsiniz.`,
    author: 'Yasin Çelik',
    date: '2026-05-13',
    readTime: '7 dk okuma',
    category: 'Aile Turları',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Aile Turları', 'Kalkan', 'Çocuklu Tatil', 'Aile Aktiviteleri'],
  },
  {
    id: '25',
    slug: 'tr-dalaman-kalkan-transfer-rehberi',
    title: "Dalaman Havalimanı'ndan Kalkan'a Transfer Rehberi",
    excerpt:
      "Dalaman Havalimanı'ndan Kalkan'a nasıl gidilir? Transfer seçenekleri, süreler, fiyatlar ve özel transfer avantajları hakkında kapsamlı rehber.",
    content: `Dalaman Havalimanı, Kalkan bölgesine gelen turistlerin büyük çoğunluğunun tercih ettiği havalimanıdır. Türkiye'nin güneybatısında yer alan bu havalimanı, İstanbul, Ankara ve pek çok Avrupa şehrinden düzenli direkt uçuşlar almaktadır. Dalaman'dan Kalkan'a transfer yaklaşık 1 saat 15 dakika ile 1 saat 30 dakika arasında sürmektedir.

**Dalaman'dan Kalkan'a Transfer Seçenekleri**
Üç temel transfer seçeneği mevcuttur. Özel transfer, en konforlu ve hızlı seçenek olup araç sizi direkt olarak Kalkan'daki otelinize veya villanıza ulaştırır. Paylaşımlı minibüs hizmeti daha ekonomik olmakla birlikte farklı otellere uğradığından toplam süre 2–3 saate uzayabilir. Kiralık araç seçeneğinde ise Dalaman Havalimanı'ndaki çeşitli şirketlerden araç kiralayarak kendi kullanımınıza göre yol alabilirsiniz.

**Adda Tours Yasin Özel Transfer Hizmeti**
Adda Tours Yasin'in sunduğu özel transfer hizmeti, uçuş takibi, karşılama servisi ve 24/7 erişilebilirlik ile öne çıkmaktadır. Uçuşunuz geç kalsa bile şoförünüz sizi beklemeye devam eder. Kalkan'a varışınızda herhangi bir ekstra bekleme veya güzergah değişikliği söz konusu değildir; araç doğrudan otelinize veya villanıza gider.

**Antalya Havalimanı'ndan Kalkan'a Transfer**
Bazı uçuşlar Antalya Havalimanı üzerinden gelmektedir; özellikle kış aylarında direkt charter seçenekleri için bu havalimanı tercih edilebilir. Antalya'dan Kalkan yaklaşık 200 km, seyahat süresi ise 2,5–3 saattir. Adda Tours Yasin bu güzergahta da özel transfer hizmeti sunmaktadır.

**Fiyat ve Rezervasyon**
Transfer fiyatları araç tipine ve kişi sayısına göre değişmektedir. Yuvarlak sefer (gidiş–dönüş) rezervasyonlarında indirim uygulanmaktadır. Fiyat bilgisi ve rezervasyon için WhatsApp üzerinden Adda Tours Yasin ile iletişime geçebilirsiniz. Uçuş bilgilerinizi, varış tarihinizi ve grup büyüklüğünüzü belirtmeniz yeterlidir.`,
    author: 'Yasin Çelik',
    date: '2026-05-17',
    readTime: '6 dk okuma',
    category: 'Transfer',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Dalaman Transfer', 'Havalimanı Transferi', 'Kalkan', 'Transfer Rehberi'],
  },

  // ─── Russian Blog Posts ───────────────────────────────────────────────────
  {
    id: '26',
    slug: 'ru-chto-posmotret-v-kalkane',
    title: 'Что посмотреть в Калкане: 10 лучших мест и экскурсий',
    excerpt:
      'Калкан — один из самых красивых курортов Турции. Мы собрали 10 лучших экскурсий и мест, которые стоит посетить во время отдыха в Калкане.',
    content: `Калкан расположен на юго-западном побережье Турции, в регионе Ликийского берега. Белоснежные дома, узкие улочки и бирюзовый залив создают неповторимую атмосферу этого курорта. Если вы планируете отдых в Калкане, вот 10 мест и экскурсий, которые обязательно стоит посетить.

**1. Морская прогулка из Калкана**
Морская прогулка — главное развлечение в Калкане. Лодки отправляются из калканского порта каждое утро и посещают укромные бухты: Бухту Фрэнка, Мышиный остров, пляж Шенерлик и другие живописные места. В стоимость включены обед-барбекю на борту и напитки. Также доступна аренда частной лодки для группы.

**2. Экскурсия в Кекову и Миру**
Это самая популярная однодневная экскурсия из Калкана. Вы посетите скальные гробницы в Мире (античная Мира), проплывёте над затонувшим городом Кекова, видимым сквозь прозрачную воду, и поднимитесь в средневековый замок Симена. Незабываемый день истории и природы.

**3. Джип сафари в Саклыкент**
Саклыкентское ущелье — второе по величине в Европе — находится в 70 км от Калкана. Джип сафари включает квадроциклы, зиплайн, рафтинг и грязевую ванну. Всё это в рамках одного насыщенного дня с обедом на берегу реки.

**4. Экскурсия на пляж Патара на закате**
18-километровый пляж Патара — самый длинный песчаный пляж Средиземноморья. Тур на закате включает поездку на открытом джипе по дюнам и прогулку по руинам античной Патары, когда золотой свет превращает пейзаж в нечто волшебное.

**5. Дайвинг в Калкане**
Воды вблизи Калкана отличаются исключительной прозрачностью и богатством морской жизни. Try Dive — пробное погружение с инструктором PADI — доступно даже для тех, кто никогда не нырял. Минимальный возраст: 10 лет. Всё снаряжение включено.

**6. Морской каякинг в Кекове**
Плыть на каяке над затонувшими руинами античного ликийского города — одно из самых удивительных занятий на всём побережье. Тур включает исследование морских пещер и высадку на труднодоступные пляжи.

**7. Остров Мейс (Кастелоризо)**
Всего в 20 минутах на пароме от Каша находится крошечный греческий остров Мейс (Кастелоризо). Разноцветные особняки, кристально чистое море и непринуждённая атмосфера делают этот маршрут одним из самых необычных однодневных туров с Ликийского берега.

**8. Исторический тур (Ксантос, Тлос, Летоон)**
Для любителей истории — экскурсия по античным городам Ликии: Ксантосу, Тлосу, Летоону и ущелью Саклыкент. Объекты Всемирного наследия ЮНЕСКО с частным гидом и трансфером из Калкана.

**9. Прогулка по Старому городу Калкана**
Пешеходная прогулка по белоснежным улочкам Старого города с обедом или ужином на крышной террасе с видом на залив — лучший способ прочувствовать атмосферу этого места.

**10. Трансфер из аэропорта Даламан**
Начните отпуск правильно: частный трансфер из аэропорта Даламан в Калкан с отслеживанием рейса и встречей по прилёту. Сервис доступен круглосуточно.

Для бронирования любой из этих экскурсий свяжитесь с Adda Tours Yasin по WhatsApp.`,
    author: 'Yasin Çelik',
    date: '2026-04-08',
    readTime: '9 мин чтения',
    category: 'Путеводитель',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Калкан', 'Экскурсии', 'Путеводитель', 'Ликийский берег'],
  },
  {
    id: '27',
    slug: 'ru-luchshie-ekskursii-kalkan',
    title: 'Лучшие экскурсии из Калкана и Каша',
    excerpt:
      'Калкан и Каш — идеальные отправные точки для однодневных экскурсий по Ликийскому берегу. Рассказываем о лучших маршрутах: от морских прогулок до горных сафари.',
    content: `Калкан и Каш расположены в самом центре Ликийского побережья Турции и являются превосходными базами для однодневных экскурсий. В пределах нескольких часов езды вы можете посетить античные руины, горные ущелья, нетронутые пляжи и даже соседний греческий остров. Вот лучшие однодневные экскурсии.

**Кекова и Мира — экскурсия, которую нельзя пропустить**
Полнодневный тур в Кекову и Миру из Калкана — самая популярная экскурсия в регионе. Утром вы посещаете скальные гробницы в Мире, затем садитесь на лодку и плывёте над затонувшим городом Кекова, наблюдая через прозрачную воду остатки стен, лестниц и дверных проёмов. Завершает программу подъём к замку Симена и обед на борту.

**Джип сафари в Саклыкент — для любителей приключений**
Джип сафари из Калкана в Саклыкентское ущелье — лучший выбор для активного отдыха. Пакет 4-в-1 включает квадроциклы, зиплайн, рафтинг и грязевую ванну. Обед предоставляется. Тур подходит для семей с детьми от 6 лет и группами друзей.

**Пляж Патара на закате — для романтиков и фотографов**
Пляж Патара находится примерно в 30 км от Калкана. Тур на закате на открытом джипе привозит вас к 18-километровому песчаному пляжу и античным руинам, когда солнце окрашивает дюны в золото. Один из самых красивых вечерних туров на Ликийском побережье.

**Остров Мейс из Каша**
Маленький греческий остров Мейс (Кастелоризо) находится всего в 2 км от турецкого берега. Паром из Каша доставляет вас туда за 20 минут. Разноцветные неоклассические дома вдоль набережной, свежие морепродукты и исключительно чистое море — всё это делает остров незабываемым местом для дневной прогулки. Требуется действующий паспорт.

**Морская прогулка из Калкана**
Если вы ещё не были на лодочной прогулке — вы не видели Калкан. Ежедневные туры посещают лучшие бухты с купанием и обедом-барбекю на борту. Для групп доступна аренда частной лодки.

**Исторический тур 4-в-1**
Для ценителей истории — тур по античным городам Ликии: Ксантос, Тлос, Летоон и Саклыкент. Частный гид, трансфер и входные билеты включены. Все объекты — в списке ЮНЕСКО.

Для бронирования любого тура из Калкана или Каша свяжитесь с Adda Tours Yasin по WhatsApp. Отвечаем быстро и предлагаем лучшие цены.`,
    author: 'Yasin Çelik',
    date: '2026-04-15',
    readTime: '8 мин чтения',
    category: 'Путеводитель',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Экскурсии', 'Калкан', 'Каш', 'Ликийский берег', 'Однодневные туры'],
  },
  {
    id: '28',
    slug: 'ru-morskaya-progulka-kalkan',
    title: 'Морская прогулка в Калкане: маршрут, цены и советы',
    excerpt:
      'Всё, что нужно знать о морской прогулке из Калкана: какие бухты посещает лодка, что включено в стоимость, цены и как забронировать.',
    content: `Морская прогулка — это, пожалуй, главное, что нужно сделать в Калкане. Бирюзовые бухты, укромные пещеры, купание в кристально чистой воде и обед-барбекю прямо на борту — всё это ждёт вас в рамках классической однодневной лодочной прогулки. Вот всё, что нужно знать.

**Какие бухты посещает лодка?**
Маршрут формируется капитаном с учётом погодных условий, но как правило включает: Бухту Фрэнка (Franko Koyu), Мышиный остров (Fare Adası), пляж Шенерлик (Cenerlik Beach), природную грязевую ванну в Хамам-Буне и несколько диких бухт, доступных только с воды. В каждой бухте предусмотрена остановка для купания.

**Что включено в стоимость морской прогулки из Калкана?**
Трансфер от отеля до порта и обратно, обед-барбекю, приготовленный на борту, безалкогольные напитки и вода в течение дня, несколько остановок для купания и страховка. Спасательные жилеты есть для всех размеров.

**Групповая прогулка или аренда частной лодки?**
Групповые туры отправляются ежедневно из калканского порта примерно в 10:00 и возвращаются к 16:00–17:00. Стоимость от 85 € с человека. Аренда частной лодки предоставляет полный контроль над маршрутом и временем — идеально для семей и компаний друзей. Свяжитесь с Adda Tours Yasin по WhatsApp для расчёта стоимости.

**Подходит ли морская прогулка для детей?**
Да. Прогулка подходит для всех возрастов. Бухты спокойные, купание безопасное. Детские спасательные жилеты предоставляются. Рекомендуем взять солнцезащитный крем высокой защиты и головные уборы.

**В какое время года лучше всего?**
Сезон морских прогулок — с апреля по октябрь. Самые тихие и прозрачные воды — в мае–июне и сентябре–октябре. В июле–августе море немного оживлённее, но всё равно прекрасно.

**Как забронировать морскую прогулку в Калкане?**
Напишите в WhatsApp Adda Tours Yasin с указанием даты, количества человек и предпочтений (группа или частная лодка). Мы подтвердим наличие мест и расскажем о стоимости.`,
    author: 'Yasin Çelik',
    date: '2026-04-22',
    readTime: '7 мин чтения',
    category: 'Путеводитель',
    image: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Морская прогулка', 'Калкан', 'Лодочный тур', 'Водные активности'],
  },
  {
    id: '29',
    slug: 'ru-ekskursiya-kekova-gid',
    title: 'Экскурсия в Кекову и затонувший город: полный гид',
    excerpt:
      'Кекова — один из самых удивительных археологических объектов Средиземноморья. Рассказываем, как добраться из Калкана, что смотреть и чего ожидать.',
    content: `Затонувший город Кекова — одно из тех мест, которые остаются в памяти на всю жизнь. Античный ликийский город, погрузившийся в море после землетрясений II века н. э., сохранился в удивительно хорошем состоянии. Стены, лестницы, арки — всё это видно сквозь кристально чистую воду прямо с борта лодки. Вот полный гид по экскурсии в Кекову из Калкана.

**Что такое Кекова?**
В античности этот город назывался Долихисте. Расположенный в защищённой лагуне на ликийском побережье, он был процветающим торговым центром. После серии землетрясений во II веке значительная часть города ушла под воду. Сегодня это официально охраняемый подводный археологический объект Турции и одно из немногих мест в мире, где можно наблюдать руины античного города прямо с лодки.

**Что включает тур «Мира и Кекова»?**
Полнодневный тур из Калкана включает три ключевые остановки. Первая — скальные гробницы Миры в Демре. Ликийские гробницы, вырубленные прямо в скале, сохранились около 2500 лет назад и поражают своей монументальностью. Вторая — лодочная прогулка над затонувшим городом Кекова с остановкой в деревне Кале (Симена) у подножья средневекового замка. Третья — купание и обед на борту в акватории лагуны Кекова.

**Можно ли купаться в Кекове?**
Купание непосредственно над руинами запрещено — это охраняемая зона. Однако в лагуне есть специально отведённые места для купания с отличной прозрачностью воды.

**Сколько длится экскурсия?**
Полный день: выезд из Калкана около 08:30, возвращение к 18:00–19:00. Дорога до Демре занимает около 1,5 часов.

**Подходит ли тур для семей с детьми?**
Да, тур отлично подходит для семей. Лодочная прогулка проходит в спокойной акватории, дети в восторге от вида руин сквозь воду. Для прогулки по замку рекомендуется удобная обувь.

**Бронирование**
Свяжитесь с Adda Tours Yasin по WhatsApp, чтобы узнать стоимость и забронировать тур «Мира и Кекова» из Калкана.`,
    author: 'Yasin Çelik',
    date: '2026-04-29',
    readTime: '8 мин чтения',
    category: 'Исторические туры',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Кекова', 'Затонувший город', 'Экскурсия', 'Античная история', 'Ликия'],
  },
  {
    id: '30',
    slug: 'ru-dzhip-safari-saklikent',
    title: 'Джип сафари Саклыкент из Калкана: что входит в тур',
    excerpt:
      'Джип сафари в Саклыкентское ущелье — одна из самых популярных активных экскурсий с Ликийского берега. Рассказываем о маршруте, активностях и пакетах.',
    content: `Саклыкентское ущелье — второе по длине в Европе — расположено в горах Акдаглар в 70 км от Калкана. Джип сафари туда и обратно включает квадроциклы, зиплайн, рафтинг и знаменитую грязевую ванну — всё в рамках одного насыщенного дня. Вот полный рассказ о том, что вас ожидает.

**Что такое Саклыкент?**
«Саклыкент» по-турецки означает «спрятанный город». Ущелье длиной 18 км уходит на глубину до 300 метров в горный массив. По дну протекает ледяная горная река. Пройтись по ущелью, когда холодная вода доходит до колен, а с обеих сторон возвышаются отвесные скалы — незабываемый опыт.

**Маршрут из Калкана**
Тур начинается с вашего отеля в Калкане утром. Поездка на джипе через горные деревни и оливковые рощи занимает около 1,5 часов. По дороге открываются потрясающие виды на Ликийские горы. Это уже сам по себе яркий опыт, особенно в открытом джипе.

**Активности: пакеты Бронза, Серебро и Золото**
Все пакеты включают прогулку по ущелью, посещение водопада Гизликент и грязевую ванну. Пакет Бронза добавляет квадроцикл или багги. Пакет Серебро — квадроцикл + зиплайн. Пакет Золото — квадроцикл + зиплайн + рафтинг + тарзанка. Обед в ресторане на берегу реки включён во все пакеты.

**Что взять с собой?**
Купальник и полотенце обязательны — вы точно намокнете. Обувь, которую не жалко намочить, или специальные тапочки для воды. Запасной комплект одежды для обратной дороги.

**Подходит ли тур для детей?**
Прогулка по ущелью и грязевая ванна подходят для детей от 6 лет. Экстремальные активности (рафтинг, зиплайн, квадроциклы) имеют возрастные и весовые ограничения. Уточните детали при бронировании.

**Стоимость и бронирование**
Цена зависит от выбранного пакета. Свяжитесь с Adda Tours Yasin по WhatsApp, чтобы узнать актуальные цены и забронировать место.`,
    author: 'Yasin Çelik',
    date: '2026-05-04',
    readTime: '7 мин чтения',
    category: 'Активный отдых',
    image: 'https://images.unsplash.com/photo-1596423735880-5f2a689b903e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Саклыкент', 'Джип сафари', 'Активные туры', 'Ущелье', 'Калкан'],
  },
  {
    id: '31',
    slug: 'ru-patara-i-zakat',
    title: 'Пляж Патара и тур на закате: почему стоит поехать',
    excerpt:
      'Патара — самый длинный песчаный пляж Средиземноморья. Тур на закате из Калкана на открытом джипе — один из самых романтичных вечеров на Ликийском берегу.',
    content: `Патара — это не просто пляж. Это один из важнейших античных городов Ликии, место рождения Святого Николая и 18-километровый нетронутый берег, объявленный заповедником. Когда солнце садится над Средиземным морем, дюны Патары приобретают золотистый оттенок — это зрелище, которое стоит увидеть хотя бы раз.

**Почему Патара особенная?**
Пляж Патара — самый длинный непрерывный песчаный берег Средиземноморья. Он является охраняемым заповедником для гнездовий логгерхедных черепах. Непосредственно среди дюн находятся хорошо сохранившиеся руины античной Патары: Триумфальная арка, Маяк (предположительно один из древнейших сохранившихся в мире), Булевтерион (здание городского совета), Греко-римский театр и Зернохранилище. Сочетание масштабных руин, огромного нетронутого пляжа и закатного света производит сильнейшее впечатление.

**Как проходит тур на закате из Калкана?**
Тур отправляется из Калкана во второй половине дня на открытом джипе. Дорога через оливковые рощи и скалистые холмы занимает около 30 минут. По прибытии вы прогуляетесь по руинам, затем поднимитесь на дюны — и встретите закат над морем. После захода солнца джип отвезёт вас обратно в Калкан.

**Подходит ли тур для детей?**
Да. Дети обожают дюны — по ним можно бегать и скатываться. Открытый джип сам по себе — большое приключение для детей. Возьмите лёгкую куртку на обратную дорогу.

**Можно ли искупаться?**
В зависимости от сезона и охранного статуса отдельных участков купание может быть доступно в основной зоне пляжа. Тур сосредоточен на закате и руинах, поэтому время на купание ограничено.

**Бронирование**
Время отправления меняется в зависимости от сезона. Свяжитесь с Adda Tours Yasin по WhatsApp, чтобы уточнить расписание и забронировать место.`,
    author: 'Yasin Çelik',
    date: '2026-05-07',
    readTime: '6 мин чтения',
    category: 'Путеводитель',
    image: 'https://images.unsplash.com/photo-1616422285623-138243640b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Патара', 'Тур на закате', 'Джип сафари', 'Калкан', 'Античные руины'],
  },
  {
    id: '32',
    slug: 'ru-ostrov-meis-iz-kasha',
    title: 'Остров Мейс из Каша: как добраться и что посмотреть',
    excerpt:
      'Остров Мейс (Кастелоризо) — маленький греческий остров в 20 минутах на пароме от Каша. Рассказываем, как организовать поездку из Калкана и что делать на острове.',
    content: `Остров Мейс, известный по-гречески как Кастелоризо, — самый восточный обитаемый остров Греции. Он находится всего в 2 км от турецкого берега у Каша и значительно ближе к Турции, чем к любому другому греческому острову. Сюда приезжают за непосредственной атмосферой, разноцветными неоклассическими домами и исключительно чистым морем.

**Как добраться с острова Мейс из Калкана?**
Паром на Мейс отправляется из порта Каш, а не из Калкана. Расстояние от Калкана до Каша — около 30 км (примерно 30 минут езды). Тур «Остров Мейс» от Adda Tours Yasin включает трансфер из вашего отеля в Калкане до порта в Каше и паромный билет туда и обратно. Паромная переправа занимает около 20 минут.

**Нужен ли загранпаспорт?**
Да. Это международная переправа из Турции в Грецию. Действующий загранпаспорт обязателен. Большинству граждан СНГ для краткосрочного визита в Грецию виза не требуется, однако рекомендуем уточнить требования для вашей страны заранее.

**Что делать на острове Мейс?**
Остров небольшой — его можно обойти пешком за несколько часов. Начните с прогулки вдоль гавани, полюбуйтесь фасадами разноцветных особняков, поднимитесь к Византийскому замку с панорамным видом на побережье Турции. Знаменитая Голубая пещера (Φωκιάλη) — морская пещера с невероятным голубым свечением воды — доступна на маленьких лодках из порта. Не забудьте пообедать в одной из таверн на набережной: свежая рыба и греческие мезе здесь превосходны.

**Сколько времени нужно на острове?**
Тур занимает целый день. Вы приедете на остров утром и проведёте там 3–4 часа свободного времени перед обратным паромом.

**Бронирование**
Свяжитесь с Adda Tours Yasin по WhatsApp, чтобы узнать стоимость тура на остров Мейс из Калкана и забронировать место.`,
    author: 'Yasin Çelik',
    date: '2026-05-10',
    readTime: '7 мин чтения',
    category: 'Путеводитель',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Остров Мейс', 'Кастелоризо', 'Каш', 'Греческий остров', 'Однодневный тур'],
  },
  {
    id: '33',
    slug: 'ru-semeynye-ekskursii',
    title: 'Семейные экскурсии в Калкане и Каше',
    excerpt:
      'Калкан — отличный курорт для семейного отдыха. Рассказываем, какие экскурсии лучше всего подходят для разных возрастов и как организовать идеальный день с детьми.',
    content: `Калкан давно снискал репутацию одного из лучших курортов для семейного отдыха на Ликийском берегу. Защищённый залив, спокойное море, компактный старый город и богатый выбор экскурсий делают его идеальным местом для семей с детьми любого возраста.

**Морская прогулка — для всей семьи**
Лодочная прогулка из Калкана — самая семейно-ориентированная экскурсия в регионе. Лодка посещает защищённые бухты с мелким, спокойным морем, идеальным для детского купания. Обед-барбекю на борту нравится всем без исключения. Спасательные жилеты всех размеров предоставляются. Для семей от 8 человек аренда частной лодки предоставляет полный контроль над маршрутом и темпом.

**Мира и Кекова — для детей, интересующихся историей**
Дети приходят в полный восторг от вида руин античного города прямо под водой. Лодочная прогулка по спокойной лагуне Кекова безопасна для любого возраста. Скальные гробницы Миры производят сильное впечатление. Подъём к замку Симена подходит для детей от 5 лет. Рекомендуется удобная закрытая обувь.

**Джип сафари в Саклыкент — для детей постарше**
Прогулка по ущелью и грязевая ванна отлично подходят для детей от 6 лет. Квадроциклы, зиплайн и рафтинг имеют возрастные ограничения и лучше всего подходят подросткам и взрослым. При бронировании обязательно сообщайте возраст детей.

**Тур на закате в Патару — семейные фотографии**
Золотой закат над дюнами Патары — идеальный фон для семейных фотографий. Дети любят бегать по дюнам и кататься в открытом джипе.

**Практические советы для семей**
Выбирайте утренние туры: дети бодрее в первой половине дня. Солнцезащитный крем с высокой степенью защиты, головные уборы и достаточное количество воды — обязательны. Для маленьких детей возьмите перекусы.

Для подбора оптимальной комбинации экскурсий для вашей семьи свяжитесь с Adda Tours Yasin по WhatsApp.`,
    author: 'Yasin Çelik',
    date: '2026-05-14',
    readTime: '7 мин чтения',
    category: 'Семейный отдых',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Семейные экскурсии', 'Калкан', 'Семейный отдых', 'Дети', 'Ликийский берег'],
  },
  {
    id: '34',
    slug: 'ru-vip-ekskursii-kalkan',
    title: 'VIP экскурсии в Калкане: индивидуальные туры и яхты',
    excerpt:
      'Индивидуальные экскурсии и аренда яхты в Калкане — как организовать идеальный отдых по собственному сценарию с сервисом высшего уровня.',
    content: `Групповые туры удобны и доступны — но если вы хотите незабываемый отдых, выстроенный именно под ваши пожелания, индивидуальная экскурсия или аренда яхты в Калкане открывают совершенно иной уровень впечатлений.

**Почему стоит выбрать индивидуальный тур?**
На групповой прогулке капитан держится расписания и маршрута. На частной лодке вы сами решаете, где остановиться, как долго задержаться в понравившейся бухте, когда и что есть. Если дети устали — возвращаетесь раньше. Если нашли идеальную купальню — остаётесь дольше. Это принципиально другой опыт.

**Аренда яхты в Калкане**
Частная лодка или яхта в Калкане доступна для аренды на полный день, полдня или на заход солнца. Маршрут формируется по вашим пожеланиям — любые бухты Ликийского побережья, рыбалка, снорклинг, пикник на борту. Для групп от 8 человек стоимость частной лодки нередко сопоставима с ценой групповых билетов — а впечатления несравнимо богаче.

**Индивидуальный джип тур**
Частное джип сафари в Саклыкент, Патару или горы Таурус означает: свой темп, свои остановки, гид, сосредоточенный только на вашей группе. Фотографируйте где хотите, задавайте вопросы без ограничений времени.

**VIP трансфер из аэропорта**
Начните отдых правильно: встреча у выхода, помощь с багажом, комфортный автомобиль, доставка прямо к вилле или отелю без остановок и ожиданий. Adda Tours Yasin предлагает VIP трансфер из Даламана и Антальи круглосуточно.

**Как забронировать индивидуальную экскурсию в Калкане?**
Свяжитесь с Adda Tours Yasin по WhatsApp. Укажите количество человек, желаемые даты и интересы. Мы составим программу и рассчитаем стоимость в течение нескольких часов. Большинство туров можно организовать за 24 часа.`,
    author: 'Yasin Çelik',
    date: '2026-05-17',
    readTime: '6 мин чтения',
    category: 'VIP Туры',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['VIP экскурсии', 'Индивидуальные туры', 'Аренда яхты', 'Калкан', 'Частная лодка'],
  },
  {
    id: '35',
    slug: 'ru-transfer-dalaman-kalkan',
    title: 'Трансфер из Даламана в Калкан: цены, время и советы',
    excerpt:
      'Всё о трансфере из аэропорта Даламан в Калкан: время в пути, виды трансфера, стоимость и советы для комфортного начала отдыха.',
    content: `Аэропорт Даламан — главные воздушные ворота для туристов, летящих на Ликийский берег Турции. Прямые рейсы из Москвы, Санкт-Петербурга и других городов России работают в сезон (май–октябрь). После приземления главный вопрос — как добраться из Даламана в Калкан. Вот всё, что нужно знать.

**Сколько ехать из Даламана в Калкан?**
Расстояние от аэропорта Даламан до Калкана составляет около 110 км. При нормальных условиях дорога займёт 1 час 15 минут – 1 час 30 минут. Большая часть маршрута — современная скоростная трасса; ближе к Калкану начинаются живописные горные серпантины.

**Виды трансфера из Даламана в Калкан**
Частный трансфер — наиболее комфортный и быстрый вариант. Водитель встречает вас в зале прилёта с табличкой, помогает с багажом и везёт прямо в ваш отель или на виллу без остановок. Стоимость фиксированная, без скрытых платежей. Коллективный (шаттл) трансфер — дешевле, но значительно дольше: минибус собирает несколько групп и делает несколько остановок. Общее время в пути может растянуться до 2,5–3 часов. Аренда автомобиля — возможна прямо в аэропорту Даламан, однако управление незнакомой машиной после долгого перелёта требует внимательности.

**Сервис Adda Tours Yasin**
Adda Tours Yasin предлагает частный трансфер из Даламана в Калкан с отслеживанием рейса в реальном времени. Если рейс задержится — водитель будет ждать. Встреча в зале прилёта, помощь с багажом, кондиционированный автомобиль, доставка прямо на виллу или в отель. Сервис доступен 24/7.

**Трансфер из Антальи в Калкан**
Часть рейсов из России прилетает в Анталью. Расстояние от Антальи до Калкана — около 200 км (2,5–3 часа). Adda Tours Yasin выполняет трансферы и из аэропорта Антальи по запросу.

**Стоимость трансфера Даламан — Калкан**
Цена зависит от типа автомобиля и количества пассажиров. Для получения точной стоимости свяжитесь с Adda Tours Yasin по WhatsApp, указав дату, время рейса и количество человек.`,
    author: 'Yasin Çelik',
    date: '2026-05-19',
    readTime: '7 мин чтения',
    category: 'Трансфер',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Трансфер Даламан Калкан', 'Аэропортный трансфер', 'Калкан', 'Туристам из России'],
  },
];
