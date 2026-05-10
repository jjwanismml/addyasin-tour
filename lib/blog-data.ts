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
];
