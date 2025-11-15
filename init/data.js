const sampleListings = [
  // ROOMS Category (3 items)
  {
    title: "Cozy Beachfront Room",
    description: "Escape to this charming beachfront room for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "rooms"
  },
  {
    title: "Modern Loft Room",
    description: "Stay in the heart of the city in this stylish loft room. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "rooms"
  },
  {
    title: "Historic Canal House Room",
    description: "Stay in a piece of history in this beautifully preserved canal house room in Amsterdam's iconic district.",
    image: {
      url: "https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "rooms"
  },

  // ICONIC CITIES Category (3 items)
  {
    title: "Manhattan Penthouse",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3500,
    location: "New York City",
    country: "United States",
    category: "iconic cities"
  },
  {
    title: "Tokyo Modern Apartment",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "iconic cities"
  },
  {
    title: "Paris City Center Loft",
    description: "Stay in the heart of Paris in this elegant loft with views of the Eiffel Tower.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2800,
    location: "Paris",
    country: "France",
    category: "iconic cities"
  },

  // MOUNTAIN Category (3 items)
  {
    title: "Mountain Retreat Cabin",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "mountain"
  },
  {
    title: "Alpine Ski Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "mountain"
  },
  {
    title: "Mountain View Lodge",
    description: "Enjoy breathtaking mountain views from this cozy lodge in the Canadian Rockies.",
    image: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "mountain"
  },

  // CASTLES Category (2 items)
  {
    title: "Medieval Castle Suite",
    description: "Live like royalty in this historic castle suite in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      url: "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castles"
  },
  {
    title: "French Chateau Room",
    description: "Experience luxury in this beautifully restored French chateau with elegant furnishings.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3500,
    location: "Loire Valley",
    country: "France",
    category: "castles"
  },

  // ARCTIC Category (2 items)
  {
    title: "Northern Lights Igloo",
    description: "Experience the magic of the Northern Lights from this cozy glass igloo in Lapland.",
    image: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2500,
    location: "Lapland",
    country: "Finland",
    category: "arctic"
  },
  {
    title: "Arctic Cabin Retreat",
    description: "Cozy heated cabin in the Arctic wilderness with stunning aurora views.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2200,
    location: "Tromsø",
    country: "Norway",
    category: "arctic"
  },

  // CAMPING Category (3 items)
  {
    title: "Treehouse Camping Experience",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "camping"
  },
  {
    title: "Forest Camping Site",
    description: "Stay in an eco-friendly camping site nestled in the forest. Perfect escape for nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "camping"
  },
  {
    title: "Safari Camping Tent",
    description: "Luxury camping experience in the African savanna with wildlife viewing opportunities.",
    image: {
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1200,
    location: "Serengeti",
    country: "Tanzania",
    category: "camping"
  },

  // FARMS Category (2 items)
  {
    title: "Countryside Farm Stay",
    description: "Experience rural life in this charming farmhouse. Wake up to fresh air and farm-to-table breakfast.",
    image: {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "farms"
  },
  {
    title: "Organic Farm Cottage",
    description: "Stay in a cozy cottage on an organic farm and participate in daily farm activities.",
    image: {
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1000,
    location: "Tuscany",
    country: "Italy",
    category: "farms"
  },

  // DOMS Category (2 items)
  {
    title: "Geodesic Dome Retreat",
    description: "Unique geodesic dome accommodation with 360-degree nature views and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1800,
    location: "Big Sur",
    country: "United States",
    category: "doms"
  },
  {
    title: "Desert Dome Experience",
    description: "Futuristic dome accommodation in the desert with stargazing opportunities.",
    image: {
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2000,
    location: "Joshua Tree",
    country: "United States",
    category: "doms"
  },

  // BOAT Category (3 items)
  {
    title: "Luxury Yacht Experience",
    description: "Stay aboard a luxury yacht with full crew service and ocean adventures.",
    image: {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 5000,
    location: "Monaco",
    country: "Monaco",
    category: "boat"
  },
  {
    title: "Canal Boat Amsterdam",
    description: "Traditional Dutch canal boat converted into cozy accommodation in Amsterdam.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "boat"
  },
  {
    title: "Floating Villa Maldives",
    description: "Overwater villa with direct ocean access and world-class snorkeling.",
    image: {
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "boat"
  },

  // DESERTS Category (3 items)
  {
    title: "Sahara Desert Camp",
    description: "Authentic Berber camp experience in the heart of the Sahara Desert with camel trekking.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2500,
    location: "Merzouga",
    country: "Morocco",
    category: "deserts"
  },
  {
    title: "Arizona Desert Lodge",
    description: "Modern desert lodge with stunning sunset views and spa treatments.",
    image: {
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3000,
    location: "Scottsdale",
    country: "United States",
    category: "deserts"
  },

  // TRENDING Category (3 items)
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "trending"
  },
  {
    title: "Tropical Beach Villa",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool.",
    image: {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "trending"
  },
  {
    title: "Secluded Beach House",
    description: "Escape to a secluded beach house on the Pacific coast. Perfect for surfing, relaxing, and unwinding.",
    image: {
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
      filename: "listingimage"
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "trending"
  }
];

module.exports = { data: sampleListings };