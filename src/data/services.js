// isPlaceholder: true means the copy needs your review before final launch.
// Nothing here is a fabricated statistic or achievement — placeholders are only
// used where the live site's copy was missing, duplicated, or buggy.
// icon: react-icons/fi name used on the Services page flip cards.
// benefits: short generic value-prop bullets (not company-specific claims).

const SERVICE_IMAGE =
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'

export const services = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    icon: 'FiCode',
    body: 'We offer custom app development services to help businesses bring their ideas to life through powerful and intuitive mobile applications. Our team develops high-quality apps for both Android and iOS platforms, focusing on seamless performance, attractive user interfaces, and reliable functionality. Whether you’re launching a new product or improving internal processes, we build scalable and secure mobile solutions tailored to your goals.',
    benefits: [
      'Tailored to your exact workflow',
      'Built to scale as you grow',
      'Full ownership of your codebase',
    ],
    isPlaceholder: true,
    placeholderNote:
      'Duplicate copy bug carried over from live site — needs a real, distinct description.',
    image: SERVICE_IMAGE,
  },

  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'FiSmartphone',
    body: 'We offer custom app development services to help businesses bring their ideas to life through powerful and intuitive mobile applications. Our team develops high-quality apps for both Android and iOS platforms, focusing on seamless performance, attractive user interfaces, and reliable functionality. Whether you’re launching a new product or improving internal processes, we build scalable and secure mobile solutions tailored to your goals.',
    benefits: [
      'Native-quality performance',
      'Android & iOS from one codebase',
      'Polished, intuitive UI',
    ],
    isPlaceholder: false,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'web-development',
    title: 'Web Development',
    icon: 'FiGlobe',
    body: 'We also specialize in web development services, creating responsive and visually engaging websites and web applications that deliver a smooth user experience across all devices. From simple websites to complex business portals and e-commerce platforms, we ensure each project is crafted with precision and attention to detail. At DesFlyer, we are committed to helping businesses establish a strong and effective digital presence through modern, efficient web solutions.',
    benefits: [
      'Fully responsive, every device',
      'Fast load times by default',
      'Built for SEO from day one',
    ],
    isPlaceholder: false,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'database-management',
    title: 'Data Base Management',
    icon: 'FiDatabase',
    body: 'We empower your business with smart, flexible database solutions tailored to your unique needs. Whether you prefer the control of traditional server-based databases like MySQL and PostgreSQL or the agility and scalability of cutting-edge serverless platforms like Firebase Firestore and AWS DynamoDB, we’ve got you covered. Our expert team crafts seamless, secure, and high-performance data systems that effortlessly support your web and mobile applications.',
    benefits: [
      'Secure by design',
      'Scales with your data growth',
      'SQL or serverless — your choice',
    ],
    isPlaceholder: false,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'enterprise-software-solutions',
    title: 'Enterprise Software Solutions',
    icon: 'FiLayers',
    body: 'We design and build enterprise-grade systems that streamline complex operations across teams and departments, built for reliability, security, and long-term scalability.',
    benefits: [
      'Built for multi-team operations',
      'Enterprise-grade reliability',
      'Long-term scalability',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'admin-dashboards',
    title: 'Admin Dashboards',
    icon: 'FiGrid',
    body: 'Custom-built admin panels that give you clear control over your data, users, and content — designed around the workflows your team actually uses.',
    benefits: [
      'Built around your workflow',
      'Real-time data visibility',
      'Role-based access control',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    icon: 'FiLayout',
    body: 'High-converting, fast-loading landing pages built to turn visitors into leads, with clean structure and copy tailored to your campaign goals.',
    benefits: [
      'Optimized for conversion',
      'Fast to launch',
      'Mobile-first design',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'FiPenTool',
    body: 'Interfaces designed around real user behavior — wireframes, prototypes, and polished visual design that make your product intuitive and enjoyable to use.',
    benefits: [
      'Grounded in user research',
      'Prototype before you build',
      'Accessible by design',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    icon: 'FiTool',
    body: 'Ongoing updates, monitoring, and support to keep your website secure, fast, and running smoothly after launch.',
    benefits: [
      'Proactive monitoring',
      'Regular security updates',
      'Fast turnaround on fixes',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'software-testing-qa',
    title: 'Software Testing & QA',
    icon: 'FiCheckCircle',
    body: 'Rigorous manual and automated testing that catches issues before your users do, across devices, browsers, and edge cases.',
    benefits: [
      'Cross-device test coverage',
      'Automated + manual QA',
      'Fewer bugs in production',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'business-automation',
    title: 'Business Automation',
    icon: 'FiZap',
    body: 'We identify repetitive manual work in your business and replace it with automated workflows, saving time and reducing errors.',
    benefits: [
      'Less manual busywork',
      'Fewer human errors',
      'Time back for your team',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'FiTrendingUp',
    body: 'Data-driven campaigns across search and social that build visibility and bring qualified traffic to your business.',
    benefits: [
      'Data-driven targeting',
      'Cross-channel campaigns',
      'Clear performance tracking',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'video-editing',
    title: 'Video Editing',
    icon: 'FiFilm',
    body: 'Clean, professional video editing for product demos, social content, and brand storytelling.',
    benefits: [
      'Platform-ready formats',
      'Fast turnaround',
      'On-brand visual style',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'motion-graphics',
    title: 'Motion Graphics',
    icon: 'FiPlayCircle',
    body: 'Animated graphics and explainer visuals that make complex ideas easy to follow and engaging to watch.',
    benefits: [
      'Simplifies complex ideas',
      'Engaging, shareable format',
      'Consistent brand motion',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'brand-identity',
    title: 'Brand Identity',
    icon: 'FiAward',
    body: 'Logo, color, and visual identity systems that give your business a consistent, professional presence everywhere it shows up.',
    benefits: [
      'Consistent brand presence',
      'Complete identity system',
      'Professional first impression',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    icon: 'FiImage',
    body: 'Custom visual assets for print and digital — from marketing materials to social creatives — designed to match your brand.',
    benefits: [
      'On-brand every time',
      'Print & digital ready',
      'Fast creative turnaround',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    icon: 'FiShare2',
    body: 'Consistent content planning and posting across your social channels to build an engaged, growing audience.',
    benefits: [
      'Consistent posting cadence',
      'Cross-platform strategy',
      'Audience growth focus',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },

  {
    slug: 'content-writing-seo',
    title: 'Content Writing & SEO',
    icon: 'FiSearch',
    body: 'Clear, search-optimized writing for your website and content channels, built to rank and to read well.',
    benefits: [
      'Written to rank',
      'Clear, readable copy',
      'Keyword-researched content',
    ],
    isPlaceholder: true,
    image: SERVICE_IMAGE,
  },
]
