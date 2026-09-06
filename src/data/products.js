// ============================================================
// DESFLYER PRODUCTS
// ============================================================
// Each product has its own:
// - name
// - description
// - technologies
// - image
// - website
//
// "website" is used by Products.jsx when the user clicks
// "View Details".
// ============================================================

export const products = [
  // ==========================================================
  // 01 — TAMIL PRINTER
  // ==========================================================

  {
    slug: "tamil-printer",
    name: "Tamil Printer – Invoice Application",
    category: "Business Software",

    description:
      "A simple, efficient billing app for creating, managing, and printing professional invoices quickly.",

    technologies: ["React", "Electron JS", "MySQL"],

    image: "/images/portfolio/tamil-printer.png",

    // PUT THE ACTUAL WEBSITE URL HERE
    website: "https://your-tamil-printer-website.com",

    isPlaceholder: false,
    comingSoon: false,
  },

  // ==========================================================
  // 02 — KINGS MECHANICAL SYMPOSIUM
  // ==========================================================

  {
    slug: "kings-mechanical-symposium",
    name: "Kings-Mechanical Symposium 2k25",
    category: "Event Platform",

    description:
      "A registration and management platform built for a national-level technical symposium.",

    technologies: ["React", "Node.js", "MongoDB"],

    image: "/images/portfolio/mechancientz.png",

    // PUT THE ACTUAL WEBSITE URL HERE
    website: "https://your-mechanical-symposium-website.com",

    isPlaceholder: true,

    placeholderNote:
      "Description simplified for the Products context — same underlying project as the Portfolio entry.",

    comingSoon: false,
  },

  // ==========================================================
  // 03 — SM MANPOWER SERVICE
  // ==========================================================

  {
    slug: "sm-manpower-service",
    name: "SM Manpower Service",
    category: "HR & Staffing",

    description:
      "A platform supporting manpower and staffing service operations.",

    technologies: ["React", "MongoDB", "Firebase"],

    image: "/images/portfolio/sm-manpower.png",

    // PUT THE ACTUAL WEBSITE URL HERE
    website: "https://your-sm-manpower-website.com",

    isPlaceholder: true,

    comingSoon: false,
  },

  // ==========================================================
  // 04 — KINGS HALL BOOKING
  // ==========================================================

  {
    slug: "kings-hall-booking-software",
    name: "Kings Hall Booking Software",
    category: "Education",

    description:
      "A hall/venue booking management system built for an educational institution.",

    technologies: ["React", "Node.js", "MongoDB"],

    image: "/images/portfolio/kings-hall.png",

    // PUT THE ACTUAL WEBSITE URL HERE
    website: "https://your-kings-hall-booking-website.com",

    isPlaceholder: true,

    comingSoon: false,
  },

  // ==========================================================
  // 05 — COMING SOON
  // ==========================================================

  {
    slug: "product-slot-1",
    name: "Product Slot 01",
    category: "Coming Soon",

    description:
      "A new DesFlyer product is in the works — check back soon.",

    technologies: [],

    // YOUR IMAGE
    image: "/images/portfolio/bg.png",

    website: null,

    isPlaceholder: true,
    comingSoon: true,
  },

  // ==========================================================
  // 06 — COMING SOON
  // ==========================================================

  {
    slug: "product-slot-2",
    name: "Product Slot 02",
    category: "Coming Soon",

    description:
      "A new DesFlyer product is in the works — check back soon.",

    technologies: [],

    // YOUR IMAGE
    image: "/images/portfolio/logo.png",

    website: null,

    isPlaceholder: true,
    comingSoon: true,
  },

  // ==========================================================
  // 07 — COMING SOON
  // ==========================================================

  {
    slug: "product-slot-3",
    name: "Product Slot 03",
    category: "Coming Soon",

    description:
      "A new DesFlyer product is in the works — check back soon.",

    technologies: [],

    // YOUR IMAGE
    image: "/images/portfolio/job.png",

    website: null,

    isPlaceholder: true,
    comingSoon: true,
  },
];

// ============================================================
// PRODUCT CATEGORIES
// ============================================================

export const productCategories = [
  "All",
  ...new Set(
    products
      .filter((product) => !product.comingSoon)
      .map((product) => product.category)
  ),
];