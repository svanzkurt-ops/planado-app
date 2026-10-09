export const eventTypes = ['Wedding', 'Debut', 'Birthday', 'Graduation'];
export const cities = ['Davao City', 'Cebu City', 'Metro Manila', 'Cagayan de Oro'];

export const providers = [
  {
    id: 1,
    name: 'Lumière Studios',
    category: 'Photography + Video',
    rating: 4.9,
    reviews: 128,
    startsAt: 1500,
    location: 'Davao City',
    description:
      'Boutique photo and video team for weddings, debuts, and milestone events.',
    accent: ['#d98b70', '#a4472f'],
    verified: true,
    tags: ['Wedding', 'Debut', 'Photo + Video'],
    packages: [
      { name: 'Essential', price: 8000, detail: 'Photography coverage' },
      { name: 'Signature', price: 20000, detail: 'Photo + video highlight' },
      { name: 'Complete', price: 35000, detail: 'All services + extras' },
    ],
  },
  {
    id: 2,
    name: 'Kalayaan Events Co.',
    category: 'Event Organizer',
    rating: 4.7,
    reviews: 86,
    startsAt: 2000,
    location: 'Davao City',
    description:
      'Full-service event coordination from planning to day-of execution.',
    accent: ['#d9b97a', '#8a6a2c'],
    verified: true,
    tags: ['Wedding', 'Birthday', 'Coordination'],
    packages: [
      { name: 'Planner Package', price: 18000, detail: 'Concept and vendor coordination' },
      { name: 'Day-of Team', price: 26000, detail: 'On-site management' },
      { name: 'Full Service', price: 44000, detail: 'Planning + production + coordination' },
    ],
  },
  {
    id: 3,
    name: 'Bloom & Frame',
    category: 'Studio',
    rating: 4.8,
    reviews: 64,
    startsAt: 1000,
    location: 'Cebu City',
    description:
      'Creative studio for portraits, prenups, and album-ready event content.',
    accent: ['#c9a09a', '#6d3b3a'],
    verified: true,
    tags: ['Portrait', 'Studio', 'Albums'],
    packages: [
      { name: 'Mini Session', price: 12000, detail: 'Studio portrait session' },
      { name: 'Theme Set', price: 20000, detail: 'Conceptual styling + editing' },
      { name: 'Full Story', price: 30000, detail: 'Photos, album, and print review' },
    ],
  },
  {
    id: 4,
    name: 'Sunrise Films',
    category: 'Videographer',
    rating: 4.6,
    reviews: 41,
    startsAt: 1800,
    location: 'Metro Manila',
    description:
      'Cinematic event videography with fast turnaround and highlight reels.',
    accent: ['#e3b58f', '#7a4a2c'],
    verified: false,
    tags: ['Video', 'Highlights', 'Wedding'],
    packages: [
      { name: 'Short Film', price: 15000, detail: '2–3 minute highlight reel' },
      { name: 'Full Coverage', price: 30000, detail: 'Full-day event coverage' },
      { name: 'Premium Edit', price: 42000, detail: 'Cinematic edit + teaser' },
    ],
  },
  {
    id: 5,
    name: 'Garden Pavilion Venue',
    category: 'Event Place',
    rating: 4.7,
    reviews: 52,
    startsAt: 35000,
    location: 'Davao City',
    description:
      'Garden venue for weddings, receptions, and intimate celebrations.',
    accent: ['#b5c9a1', '#4f6b3a'],
    verified: true,
    tags: ['Venue', 'Wedding', 'Reception'],
    packages: [
      { name: 'Garden Package', price: 35000, detail: 'Up to 150 guests' },
      { name: 'Reception Setup', price: 55000, detail: 'Tables, chairs, and decor' },
      { name: 'Full Venue Hire', price: 78000, detail: 'Full venue and management' },
    ],
  },
  {
    id: 6,
    name: 'Gear Garage Rentals',
    category: 'Equipment Rental',
    rating: 4.8,
    reviews: 37,
    startsAt: 2500,
    location: 'Davao City',
    description:
      'Camera, lighting, and sound rentals for events, productions, and shoots.',
    accent: ['#9fb8c9', '#3d5a73'],
    verified: true,
    tags: ['Rental', 'Sound', 'Lighting'],
    packages: [
      { name: 'Camera Kit', price: 2500, detail: 'DSLR rig for one day' },
      { name: 'LED Light Set', price: 1200, detail: 'Three panels with stand' },
      { name: 'Sound System', price: 3500, detail: 'Speakers and wireless mics' },
    ],
  },
];

export const bookings = [
  {
    id: 1,
    venue: 'Lumière Studios',
    date: '2026-11-14',
    event: 'Wedding',
    status: 'Deposit received',
  },
  {
    id: 2,
    venue: 'Kalayaan Events Co.',
    date: '2026-12-12',
    event: 'Debut',
    status: 'Awaiting deposit',
  },
];

export const quotes = [
  {
    id: 101,
    provider: 'Lumière Studios',
    event: 'Wedding',
    amount: 23500,
    status: 'Approved',
  },
  {
    id: 102,
    provider: 'Garden Pavilion Venue',
    event: 'Debut',
    amount: 35000,
    status: 'Pending',
  },
  {
    id: 103,
    provider: 'Sunrise Films',
    event: 'Birthday',
    amount: 18000,
    status: 'Needs review',
  },
];
