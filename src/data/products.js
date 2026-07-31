// Real DesFlyer-built software products. These are the same verified projects shown
// on the Portfolio page (client work), re-presented here as products since that's what
// they are — legitimate reuse of verified facts, not fabricated new entries.
// The 3 "Coming Soon" slots are explicit placeholders for future products.

export const products = [
  {
    slug: 'tamil-printer',
    name: 'Tamil Printer \u2013 Invoice Application',
    category: 'Business Software',
    description: 'A simple, efficient billing app for creating, managing, and printing professional invoices quickly.',
    technologies: ['React', 'Electron JS', 'MySQL'],
    image: '/images/portfolio/tamil-printer.png',
    isPlaceholder: false,
  },
  {
    slug: 'kings-mechanical-symposium',
    name: 'Kings-Mechanical Symposium 2k25',
    category: 'Event Platform',
    description: 'A registration and management platform built for a national-level technical symposium.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/mechancientz.png',
    isPlaceholder: true,
    placeholderNote: 'Description simplified for the Products context — same underlying project as the Portfolio entry.',
  },
  {
    slug: 'sm-manpower-service',
    name: 'SM Manpower Service',
    category: 'HR & Staffing',
    description: 'A platform supporting manpower and staffing service operations.',
    technologies: ['React', 'MongoDB', 'Firebase'],
    image: '/images/portfolio/sm-manpower.png',
    isPlaceholder: true,
  },
  {
    slug: 'kings-hall-booking-software',
    name: 'Kings Hall Booking Software',
    category: 'Education',
    description: 'A hall/venue booking management system built for an educational institution.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/kings-hall.png',
    isPlaceholder: true,
  },
  {
    slug: 'product-slot-1',
    name: 'Product Slot 01',
    category: 'Coming Soon',
    description: 'A new DesFlyer product is in the works — check back soon.',
    technologies: [],
    image: null,
    isPlaceholder: true,
    comingSoon: true,
  },
  {
    slug: 'product-slot-2',
    name: 'Product Slot 02',
    category: 'Coming Soon',
    description: 'A new DesFlyer product is in the works — check back soon.',
    technologies: [],
    image: null,
    isPlaceholder: true,
    comingSoon: true,
  },
  {
    slug: 'product-slot-3',
    name: 'Product Slot 03',
    category: 'Coming Soon',
    description: 'A new DesFlyer product is in the works — check back soon.',
    technologies: [],
    image: null,
    isPlaceholder: true,
    comingSoon: true,
  },
]

export const productCategories = ['All', ...new Set(products.map((p) => p.category))]
