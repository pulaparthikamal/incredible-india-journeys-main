import { delhiManaliKasolShimla } from "./itinerary";
import kashmirImg from "@/assets/kashmir.jpg";
import tajmahalImg from "@/assets/tajmahal.jpg";
import keralaImg from "@/assets/kerala.jpg";
import jaipurImg from "@/assets/jaipur.jpg";
import goaImg from "@/assets/goa.jpg";
import varanasiImg from "@/assets/varanasi.jpg";
import darjeelingImg from "@/assets/darjeeling.jpg";
import shimlaImg from "@/assets/Shimla.jpg";

export interface ItineraryDay {
  day: number;
  title: string;
  description?: string;
  points?: string[];
  meal?: string;
  stay?: string;
}

export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  region: "North" | "South" | "East" | "West" | "Central";
  image: string;
  gallery: string[];
  duration: {
    days: number;
    nights: number;
  };
  price: {
    standard: number;
    extended?: number;
  };
  totalSeats: number;
  availableSeats: number;
  isPopular: boolean;
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

export const tourPackages: TourPackage[] = [

  // {
  //   id: "shimla-manali-kasol",
  //   name: "Shimla Manali Kasol Budget Trip",
  //   destination: "Delhi, Shimla, Manali, Kasol",
  //   region: "North",
  //   image: shimlaImg,
  //   gallery: [
  //     shimlaImg,
  //     shimlaImg,
  //     shimlaImg,
  //   ],
  //   duration: {
  //     days: delhiManaliKasolShimla.itinerary.length,
  //     nights: delhiManaliKasolShimla.itinerary.length - 1,
  //   },
  //   price: {
  //     standard: 9999,
  //   },
  //   totalSeats: 40,
  //   availableSeats: 25,
  //   isPopular: true,
  //   description: delhiManaliKasolShimla.description,

  //   highlights: [
  //     "Shimla Mall Road & Kufri",
  //     "Manali Local Sightseeing",
  //     "Kasol & Parvati Valley",
  //     "Budget Friendly Himalayan Trip",
  //     "Perfect for Friends & Backpackers",
  //   ],

  //   itinerary: [
  //     {
  //       day: 1,
  //       title: "Delhi to Shimla",
  //       description:
  //         "Overnight journey from Delhi to Shimla by Volvo/Tempo Traveller. Enjoy scenic mountain views on arrival.",
  //       meal: "Dinner",
  //       stay: "Hotel in Shimla",
  //     },
  //     {
  //       day: 2,
  //       title: "Shimla and Kufri Sightseeing",
  //       description:
  //         "Visit Kufri, Green Valley, Jakhoo Temple, and explore Mall Road & Ridge in the evening.",
  //       meal: "Breakfast & Dinner",
  //       stay: "Hotel in Shimla",
  //     },
  //     {
  //       day: 3,
  //       title: "Shimla to Manali",
  //       description:
  //         "Drive to Manali via Kullu Valley. En-route river rafting point & shawl factory visit.",
  //       meal: "Breakfast & Dinner",
  //       stay: "Hotel in Manali",
  //     },
  //     {
  //       day: 4,
  //       title: "Manali Local Sightseeing",
  //       description:
  //         "Visit Hadimba Temple, Vashisht Kund, Tibetan Monastery, Mall Road and local cafes.",
  //       meal: "Breakfast & Dinner",
  //       stay: "Hotel in Manali",
  //     },
  //     {
  //       day: 5,
  //       title: "Solang Valley / Atal Tunnel",
  //       description:
  //         "Enjoy Solang Valley adventure activities like paragliding, snow games (seasonal) and Atal Tunnel sightseeing.",
  //       meal: "Breakfast & Dinner",
  //       stay: "Hotel in Manali",
  //     },
  //     {
  //       day: 6,
  //       title: "Manali to Kasol",
  //       description:
  //         "Drive to Kasol. Visit Parvati Valley, Kasol Market, Chalal village walk and riverside cafes.",
  //       meal: "Breakfast & Dinner",
  //       stay: "Hotel/Camp in Kasol",
  //     },
  //     {
  //       day: 7,
  //       title: "Kasol to Delhi",
  //       description:
  //         "Morning at leisure. Start return journey to Delhi with beautiful Himalayan memories.",
  //       meal: "Breakfast",
  //       stay: "Overnight Journey",
  //     },
  //   ],

  //   inclusions: [
  //     "Accommodation in well-maintained hotels/camps",
  //     "Daily breakfast and dinner",
  //     "All sightseeing as per itinerary",
  //     "All transfers by Volvo/Tempo Traveller",
  //     "Driver allowance, fuel & parking",
  //     "All applicable taxes",
  //   ],

  //   exclusions: [
  //     "Any kind of personal expenses",
  //     "Adventure activities (paragliding, rafting, snow games)",
  //     "Lunch and any extra meals",
  //     "Entry tickets to monuments or activities",
  //     "Travel insurance",
  //     "Anything not mentioned in inclusions",
  //   ],
  // },


  {
    id: "kashmir-paradise",
    name: "Kashmir Paradise Tour",
    destination: "Srinagar, Gulmarg, Pahalgam",
    region: "North",
    image: kashmirImg,
    gallery: [kashmirImg, kashmirImg, kashmirImg],
    duration: { days: 8, nights: 7 },
    price: { standard: 45999, extended: 62999 },
    totalSeats: 20,
    availableSeats: 8,
    isPopular: true,
    description: "Experience the breathtaking beauty of Kashmir, known as 'Paradise on Earth'. From the serene Dal Lake to the snow-capped peaks of Gulmarg, this tour offers an unforgettable Himalayan adventure.",
    highlights: [
      "Shikara ride on Dal Lake",
      "Gondola ride in Gulmarg",
      "Stay in traditional houseboat",
      "Visit Mughal Gardens",
      "Betaab Valley exploration"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", description: "Arrive at Srinagar Airport. Transfer to your houseboat on Dal Lake. Evening Shikara ride to witness the sunset. Dinner and overnight stay on houseboat." },
      { day: 2, title: "Srinagar Local Sightseeing", description: "Visit the famous Mughal Gardens - Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Explore the old city and local markets. Return to hotel for dinner." },
      { day: 3, title: "Excursion to Gulmarg", description: "Drive to Gulmarg (56 km). Enjoy the Gondola ride (Phase 1 & 2). Experience snow activities. Return to Srinagar by evening." },
      { day: 4, title: "Srinagar to Pahalgam", description: "After breakfast, drive to Pahalgam (95 km). En route visit Saffron fields and Awantipora ruins. Check-in hotel and evening at leisure by Lidder River." },
      { day: 5, title: "Pahalgam Exploration", description: "Full day exploration - visit Aru Valley, Betaab Valley, and Chandanwari. Enjoy pony rides and nature walks. Return to hotel for dinner." },
      { day: 6, title: "Pahalgam to Srinagar", description: "Morning at leisure. Drive back to Srinagar. Visit local craft shops for Pashmina shawls and dry fruits. Overnight stay in Srinagar." },
      { day: 7, title: "Sonmarg Day Trip", description: "Day excursion to Sonmarg (80 km). Visit Thajiwas Glacier on ponies. Enjoy the meadow of gold. Return to Srinagar." },
      { day: 8, title: "Departure", description: "After breakfast, transfer to Srinagar Airport for your onward journey. Tour ends with beautiful memories." }
    ],
    inclusions: [
      "7 nights accommodation (3★/4★ hotels & houseboat)",
      "Daily breakfast and dinner",
      "Airport transfers & sightseeing by private AC vehicle",
      "Shikara ride on Dal Lake",
      "Gondola tickets (Phase 1)",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare / Train fare",
      "Lunch and personal expenses",
      "Pony rides and adventure activities",
      "Gondola Phase 2 tickets",
      "Travel insurance",
      "Entry fees at monuments"
    ]
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle Adventure",
    destination: "Delhi, Agra, Jaipur",
    region: "North",
    image: tajmahalImg,
    gallery: [tajmahalImg, jaipurImg, tajmahalImg],
    duration: { days: 6, nights: 5 },
    price: { standard: 32999, extended: 45999 },
    totalSeats: 20,
    availableSeats: 15,
    isPopular: true,
    description: "Explore India's most iconic destinations in this classic Golden Triangle tour. Witness the majesty of Taj Mahal, the grandeur of Jaipur's palaces, and Delhi's rich history.",
    highlights: [
      "Sunrise at Taj Mahal",
      "Amber Fort elephant ride",
      "Old Delhi heritage walk",
      "Jaipur's Pink City tour",
      "Agra Fort exploration"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Delhi", description: "Arrive in Delhi. City tour covering India Gate, Parliament House, and Qutub Minar. Evening at Connaught Place." },
      { day: 2, title: "Delhi to Agra", description: "Drive to Agra (230 km). Visit Agra Fort and Mehtab Bagh for sunset view of Taj Mahal." },
      { day: 3, title: "Taj Mahal & Jaipur", description: "Sunrise visit to Taj Mahal. Drive to Jaipur (240 km). Evening at leisure in Pink City." },
      { day: 4, title: "Jaipur Sightseeing", description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Evening bazaar shopping." },
      { day: 5, title: "Jaipur to Delhi", description: "Morning visit to Nahargarh Fort. Drive back to Delhi. Visit Lotus Temple and Akshardham." },
      { day: 6, title: "Departure", description: "Transfer to Delhi Airport/Railway Station. Tour ends." }
    ],
    inclusions: [
      "5 nights accommodation in 4★ hotels",
      "Daily breakfast",
      "AC vehicle for all transfers",
      "Professional English-speaking guide",
      "Monument entry tickets",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare / Train fare",
      "Lunch and dinner",
      "Elephant ride at Amber Fort",
      "Camera fees at monuments",
      "Personal expenses",
      "Travel insurance"
    ]
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwater Bliss",
    destination: "Cochin, Munnar, Alleppey, Kovalam",
    region: "South",
    image: keralaImg,
    gallery: [keralaImg, keralaImg, keralaImg],
    duration: { days: 9, nights: 8 },
    price: { standard: 48999, extended: 65999 },
    totalSeats: 20,
    availableSeats: 5,
    isPopular: true,
    description: "Discover God's Own Country with this enchanting Kerala tour. From misty tea plantations to serene backwaters, experience the diverse beauty of South India.",
    highlights: [
      "Overnight houseboat stay in Alleppey",
      "Tea plantation visit in Munnar",
      "Kathakali dance performance",
      "Kovalam beach sunset",
      "Spice garden tour"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Cochin", description: "Arrive at Cochin Airport. Visit Fort Kochi, Chinese Fishing Nets, and St. Francis Church. Evening Kathakali show." },
      { day: 2, title: "Cochin to Munnar", description: "Drive to Munnar (130 km). Visit Cheeyappara waterfalls en route. Check-in to hillside resort." },
      { day: 3, title: "Munnar Sightseeing", description: "Visit Tea Museum, Mattupetty Dam, Echo Point, and Tea plantations. Evening nature walk." },
      { day: 4, title: "Munnar to Thekkady", description: "Drive to Thekkady (110 km). Visit spice plantations. Evening Periyar Lake boating." },
      { day: 5, title: "Thekkady to Alleppey", description: "Drive to Alleppey (150 km). Board your private houseboat. Cruise through backwaters with meals onboard." },
      { day: 6, title: "Alleppey to Kovalam", description: "Disembark houseboat. Drive to Kovalam (160 km). Evening at the famous Lighthouse Beach." },
      { day: 7, title: "Kovalam Beach Day", description: "Full day at leisure. Enjoy beach activities, Ayurvedic spa, or visit Padmanabhaswamy Temple." },
      { day: 8, title: "Kovalam Exploration", description: "Visit Trivandrum city, Napier Museum, and local markets. Sunset at beach." },
      { day: 9, title: "Departure", description: "Transfer to Trivandrum Airport. Tour ends with cherished memories." }
    ],
    inclusions: [
      "8 nights accommodation",
      "1 night premium houseboat with all meals",
      "Daily breakfast at hotels",
      "AC vehicle for all transfers",
      "Periyar Lake boating",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner (except houseboat)",
      "Ayurvedic treatments",
      "Water sports",
      "Personal expenses",
      "Travel insurance"
    ]
  },
  {
    id: "royal-rajasthan",
    name: "Royal Rajasthan Explorer",
    destination: "Jaipur, Jodhpur, Udaipur, Jaisalmer",
    region: "West",
    image: jaipurImg,
    gallery: [jaipurImg, jaipurImg, jaipurImg],
    duration: { days: 12, nights: 11 },
    price: { standard: 58999, extended: 78999 },
    totalSeats: 20,
    availableSeats: 12,
    isPopular: true,
    description: "Experience the royal heritage of Rajasthan. From majestic forts to golden sand dunes, this comprehensive tour covers the best of India's most colorful state.",
    highlights: [
      "Desert safari in Jaisalmer",
      "Mehrangarh Fort visit",
      "Lake Pichola boat ride",
      "Camel ride in Sam Dunes",
      "Heritage palace stays"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Jaipur", description: "Arrive in Jaipur. Check-in to heritage hotel. Evening visit to Birla Temple." },
      { day: 2, title: "Jaipur Sightseeing", description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Evening at Chokhi Dhani." },
      { day: 3, title: "Jaipur to Jodhpur", description: "Drive to Jodhpur (340 km). En route visit Ajmer and Pushkar. Evening at leisure." },
      { day: 4, title: "Jodhpur Exploration", description: "Visit Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace. Blue City walk." },
      { day: 5, title: "Jodhpur to Jaisalmer", description: "Drive to Jaisalmer (285 km). Check-in and evening at Sam Sand Dunes." },
      { day: 6, title: "Jaisalmer Sightseeing", description: "Visit Jaisalmer Fort, Patwon ki Haveli, and Gadisar Lake. Desert camp dinner." },
      { day: 7, title: "Desert Experience", description: "Morning camel safari. Explore Kuldhara ghost village. Sunset at sand dunes." },
      { day: 8, title: "Jaisalmer to Udaipur", description: "Drive to Udaipur (560 km) via Ranakpur Temples. Evening at leisure." },
      { day: 9, title: "Udaipur Lake City", description: "Visit City Palace, Jagdish Temple, and Saheliyon ki Bari. Sunset boat ride on Lake Pichola." },
      { day: 10, title: "Udaipur Surroundings", description: "Day trip to Kumbhalgarh Fort and Haldighati. Evening at Bagore ki Haveli dance show." },
      { day: 11, title: "Udaipur to Jaipur", description: "Drive back to Jaipur (400 km). Farewell dinner at heritage restaurant." },
      { day: 12, title: "Departure", description: "Transfer to Jaipur Airport. Tour ends." }
    ],
    inclusions: [
      "11 nights in heritage/4★ hotels",
      "Daily breakfast",
      "Desert camp with dinner",
      "AC vehicle throughout",
      "Boat ride on Lake Pichola",
      "Camel safari in Jaisalmer"
    ],
    exclusions: [
      "Airfare",
      "Lunch and other meals",
      "Entry tickets to monuments",
      "Jeep safari in desert",
      "Personal expenses",
      "Travel insurance"
    ]
  },
  {
    id: "goa-beach-escape",
    name: "Goa Beach Escape",
    destination: "North Goa, South Goa",
    region: "West",
    image: goaImg,
    gallery: [goaImg, goaImg, goaImg],
    duration: { days: 5, nights: 4 },
    price: { standard: 24999, extended: 35999 },
    totalSeats: 20,
    availableSeats: 18,
    isPopular: false,
    description: "Relax on pristine beaches, explore Portuguese heritage, and enjoy the vibrant nightlife of Goa. Perfect for a quick beach getaway.",
    highlights: [
      "Beach hopping tour",
      "Old Goa churches visit",
      "Dudhsagar Falls trip",
      "Water sports activities",
      "Sunset cruise"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Arrive at Goa Airport. Transfer to beach resort. Evening at leisure on Calangute Beach." },
      { day: 2, title: "North Goa Tour", description: "Visit Fort Aguada, Candolim Beach, Baga Beach. Evening at Tito's Lane." },
      { day: 3, title: "Old Goa Heritage", description: "Visit Basilica of Bom Jesus, Se Cathedral. Afternoon Dudhsagar Falls trip." },
      { day: 4, title: "South Goa Beaches", description: "Explore Palolem, Colva, and Benaulim beaches. Sunset river cruise with dinner." },
      { day: 5, title: "Departure", description: "Morning at leisure. Transfer to Goa Airport. Tour ends." }
    ],
    inclusions: [
      "4 nights in beachside resort",
      "Daily breakfast",
      "Airport transfers",
      "North & South Goa sightseeing",
      "Sunset cruise with snacks",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Water sports",
      "Dudhsagar Falls entry",
      "Personal expenses",
      "Travel insurance"
    ]
  },
  {
    id: "varanasi-spiritual",
    name: "Varanasi Spiritual Journey",
    destination: "Varanasi, Sarnath, Bodhgaya",
    region: "Central",
    image: varanasiImg,
    gallery: [varanasiImg, varanasiImg, varanasiImg],
    duration: { days: 5, nights: 4 },
    price: { standard: 28999, extended: 38999 },
    totalSeats: 20,
    availableSeats: 10,
    isPopular: false,
    description: "Experience the spiritual heart of India in Varanasi. Witness the mesmerizing Ganga Aarti, explore ancient temples, and discover the birthplace of Buddhism.",
    highlights: [
      "Ganga Aarti ceremony",
      "Boat ride at sunrise",
      "Sarnath Buddhist pilgrimage",
      "Temple hopping",
      "Bodhgaya excursion"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Varanasi", description: "Arrive at Varanasi Airport. Evening Ganga Aarti at Dashashwamedh Ghat." },
      { day: 2, title: "Varanasi Ghats", description: "Sunrise boat ride on Ganges. Visit Kashi Vishwanath Temple, ghats walking tour." },
      { day: 3, title: "Sarnath Excursion", description: "Day trip to Sarnath - Buddha's first sermon site. Visit Dhamek Stupa and museum." },
      { day: 4, title: "Bodhgaya Day Trip", description: "Full day trip to Bodhgaya (240 km). Visit Mahabodhi Temple and Bodhi Tree." },
      { day: 5, title: "Departure", description: "Morning at leisure. Visit local markets. Transfer to airport." }
    ],
    inclusions: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Boat ride on Ganges",
      "All sightseeing as per itinerary",
      "English-speaking guide"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Temple donations",
      "Personal expenses",
      "Travel insurance",
      "Camera fees"
    ]
  },
  // {
  //   id: "darjeeling-sikkim",
  //   name: "Darjeeling & Sikkim Delight",
  //   destination: "Darjeeling, Gangtok, Pelling",
  //   region: "East",
  //   image: darjeelingImg,
  //   gallery: [darjeelingImg, darjeelingImg, darjeelingImg],
  //   duration: { days: 10, nights: 9 },
  //   price: { standard: 52999, extended: 68999 },
  //   totalSeats: 20,
  //   availableSeats: 14,
  //   isPopular: false,
  //   description: "Explore the enchanting hills of Eastern Himalayas. From tea gardens of Darjeeling to monasteries of Sikkim, experience nature at its finest.",
  //   highlights: [
  //     "Tiger Hill sunrise",
  //     "Toy train ride",
  //     "Tsomgo Lake visit",
  //     "Rumtek Monastery",
  //     "Tea garden tours"
  //   ],
  //   itinerary: [
  //     { day: 1, title: "Arrival in Bagdogra", description: "Arrive at Bagdogra Airport. Drive to Darjeeling (90 km). Check-in and evening Mall Road stroll." },
  //     { day: 2, title: "Tiger Hill & Darjeeling", description: "Early morning Tiger Hill for Kanchenjunga sunrise. Visit Batasia Loop, Peace Pagoda." },
  //     { day: 3, title: "Darjeeling Sightseeing", description: "Toy train ride. Visit Happy Valley Tea Estate, Himalayan Zoo, and Rock Garden." },
  //     { day: 4, title: "Darjeeling to Gangtok", description: "Drive to Gangtok (100 km). Evening MG Road exploration." },
  //     { day: 5, title: "Gangtok Local Tour", description: "Visit Rumtek Monastery, Enchey Monastery, and Ganesh Tok viewpoint." },
  //     { day: 6, title: "Tsomgo Lake Excursion", description: "Day trip to Tsomgo Lake and Baba Mandir (permit required). Yak rides available." },
  //     { day: 7, title: "Gangtok to Pelling", description: "Drive to Pelling (120 km). Visit en route Ravangla and Buddha Park." },
  //     { day: 8, title: "Pelling Sightseeing", description: "Visit Pemayangtse Monastery, Rabdentse Ruins, and Khecheopalri Lake." },
  //     { day: 9, title: "Pelling to Darjeeling", description: "Drive back to Darjeeling. Last minute shopping and leisure." },
  //     { day: 10, title: "Departure", description: "Transfer to Bagdogra Airport. Tour ends." }
  //   ],
  //   inclusions: [
  //     "9 nights accommodation",
  //     "Daily breakfast and dinner",
  //     "Toy train ride tickets",
  //     "Tsomgo Lake permits",
  //     "AC vehicle throughout",
  //     "All sightseeing"
  //   ],
  //   exclusions: [
  //     "Airfare",
  //     "Lunch",
  //     "Yak rides",
  //     "Personal expenses",
  //     "Travel insurance",
  //     "Camera fees"
  //   ]
  // },
  {
    id: "andaman-islands",
    name: "Andaman Island Paradise",
    destination: "Port Blair, Havelock, Neil Island",
    region: "East",
    image: goaImg,
    gallery: [goaImg, goaImg, goaImg],
    duration: { days: 7, nights: 6 },
    price: { standard: 42999, extended: 55999 },
    totalSeats: 20,
    availableSeats: 6,
    isPopular: true,
    description: "Discover the pristine beaches and crystal-clear waters of the Andaman Islands. Perfect for beach lovers, snorkeling enthusiasts, and nature seekers.",
    highlights: [
      "Radhanagar Beach visit",
      "Cellular Jail light show",
      "Snorkeling at Elephant Beach",
      "Glass bottom boat ride",
      "Scuba diving opportunity"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Port Blair", description: "Arrive at Port Blair. Visit Cellular Jail and attend Light & Sound show." },
      { day: 2, title: "Port Blair Sightseeing", description: "Visit Ross Island, North Bay Island. Enjoy glass-bottom boat ride." },
      { day: 3, title: "Port Blair to Havelock", description: "Ferry to Havelock Island. Evening at Radhanagar Beach (Asia's best beach)." },
      { day: 4, title: "Havelock Exploration", description: "Snorkeling at Elephant Beach. Water sports activities. Beach relaxation." },
      { day: 5, title: "Havelock to Neil Island", description: "Ferry to Neil Island. Visit Bharatpur, Laxmanpur beaches. Sunset point." },
      { day: 6, title: "Neil to Port Blair", description: "Morning at leisure. Ferry back to Port Blair. Sagarika Emporium shopping." },
      { day: 7, title: "Departure", description: "Transfer to Port Blair Airport. Tour ends." }
    ],
    inclusions: [
      "6 nights accommodation",
      "Daily breakfast",
      "All ferry tickets",
      "Airport & jetty transfers",
      "Sightseeing as per itinerary",
      "All permits"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Water sports & scuba",
      "Personal expenses",
      "Travel insurance",
      "Camera fees"
    ]
  }
];

export const getPackageById = (id: string): TourPackage | undefined => {
  return tourPackages.find(pkg => pkg.id === id);
};

export const getPackagesByRegion = (region: string): TourPackage[] => {
  if (region === "All") return tourPackages;
  return tourPackages.filter(pkg => pkg.region === region);
};

export const filterPackages = (
  region: string,
  duration: string,
  priceRange: string
): TourPackage[] => {
  return tourPackages.filter(pkg => {
    const regionMatch = region === "All" || pkg.region === region;

    let durationMatch = true;
    if (duration === "3-5") durationMatch = pkg.duration.days >= 3 && pkg.duration.days <= 5;
    if (duration === "6-8") durationMatch = pkg.duration.days >= 6 && pkg.duration.days <= 8;
    if (duration === "9-12") durationMatch = pkg.duration.days >= 9 && pkg.duration.days <= 12;

    let priceMatch = true;
    if (priceRange === "under30k") priceMatch = pkg.price.standard < 30000;
    if (priceRange === "30k-50k") priceMatch = pkg.price.standard >= 30000 && pkg.price.standard <= 50000;
    if (priceRange === "above50k") priceMatch = pkg.price.standard > 50000;

    return regionMatch && durationMatch && priceMatch;
  });
};
