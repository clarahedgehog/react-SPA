export const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    continent: "Europe",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    rating: 4.8,
    price: 1400,
    tags: ["city", "romantic", "culture"],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "The city of lights known for the Eiffel Tower, art, and cafes."
  },
  {
    id: 2,
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    coordinates: { lat: 41.9028, lng: 12.4964 },
    rating: 4.7,
    price: 1300,
    tags: ["history", "culture", "city"],
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
    description: "Historic capital filled with ancient ruins and Italian cuisine."
  },
  {
    id: 4,
    name: "Amsterdam",
    country: "Netherlands",
    continent: "Europe",
    coordinates: { lat: 52.3676, lng: 4.9041 },
    rating: 4.6,
    price: 1250,
    tags: ["canals", "culture", "city"],
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    description: "Beautiful canals, museums, and cycling culture."
  },
  {
    id: 6,
    name: "New York",
    country: "USA",
    continent: "North America",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    rating: 4.8,
    price: 1600,
    tags: ["city", "nightlife", "shopping"],
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59",
    description: "The city that never sleeps with world-famous attractions."
  },
  {
    id: 7,
    name: "Los Angeles",
    country: "USA",
    continent: "North America",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    rating: 4.6,
    price: 1500,
    tags: ["beach", "entertainment", "city"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Hollywood, beaches, and sunny California lifestyle."
  },
  {
    id: 9,
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    coordinates: { lat: 35.0116, lng: 135.7681 },
    rating: 4.9,
    price: 1600,
    tags: ["temples", "culture", "nature"],
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    description: "Traditional Japan with shrines, geishas, and cherry blossoms."
  },
  {
    id: 10,
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    coordinates: { lat: 13.7563, lng: 100.5018 },
    rating: 4.6,
    price: 900,
    tags: ["food", "culture", "nightlife"],
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    description: "Bustling city famous for street food and temples."
  },

  {
    id: 11,
    name: "Phuket",
    country: "Thailand",
    continent: "Asia",
    coordinates: { lat: 7.8804, lng: 98.3923 },
    rating: 4.7,
    price: 1000,
    tags: ["beach", "island", "resort"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "Tropical beaches and crystal clear waters."
  },
  {
    id: 13,
    name: "Singapore",
    country: "Singapore",
    continent: "Asia",
    coordinates: { lat: 1.3521, lng: 103.8198 },
    rating: 4.8,
    price: 1600,
    tags: ["city", "food", "modern"],
    image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd",
    description: "Ultra-clean futuristic city with amazing food."
  },
  {
    id: 14,
    name: "Sydney",
    country: "Australia",
    continent: "Australia",
    coordinates: { lat: -33.8688, lng: 151.2093 },
    rating: 4.8,
    price: 1800,
    tags: ["beach", "city", "nature"],
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    description: "Home to the Opera House and Bondi Beach."
  },
  {
    id: 16,
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    coordinates: { lat: -33.9249, lng: 18.4241 },
    rating: 4.8,
    price: 1300,
    tags: ["nature", "beach", "mountains"],
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
    description: "Beautiful coastal city under Table Mountain."
  },
  {
    id: 17,
    name: "Marrakesh",
    country: "Morocco",
    continent: "Africa",
    coordinates: { lat: 31.6295, lng: -7.9811 },
    rating: 4.6,
    price: 1000,
    tags: ["markets", "culture", "desert"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    description: "Historic city full of markets and palaces."
  },
  {
    id: 20,
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    coordinates: { lat: -34.6037, lng: -58.3816 },
    rating: 4.6,
    price: 1200,
    tags: ["culture", "tango", "food"],
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    description: "European-style city with vibrant culture."
  }
]

const getRandomDestination = targetArray => {
  const randomIndex = Math.floor(Math.random() * targetArray.length);
  const randomDestination = targetArray[randomIndex]
  targetArray.splice(randomIndex, 1)
  return randomDestination
}

export const popularDestinations = [getRandomDestination(destinations), getRandomDestination(destinations), getRandomDestination(destinations),]

export const tourPackages = [getRandomDestination(destinations), getRandomDestination(destinations), getRandomDestination(destinations),]