// All 4 projects verified from the live site. Three share a copy-pasted "Retail Corp /
// payment gateways" description that doesn't match the actual project — a known bug on
// the live site. Client instruction: leave as-is for now, fix later. Flagged below.

export const projects = [
  {
    slug: 'tamil-printer',
    title: 'Tamil Printer \u2013 Invoice Application',
    body: 'Tamil Printer \u2013 Invoice Application is a simple and efficient billing app that helps businesses create, manage, and print professional invoices quickly. Designed for speed and accuracy, it streamlines daily billing operations and keeps your financial records organized with ease.',
    client: 'Tamilarasi K',
    date: 'Feb 2026',
    technologies: ['React', 'Electron JS', 'MySQL'],
    image: '/images/portfolio/tamil-printer.png',
    isPlaceholder: false,
  },
  {
    slug: 'kings-mechanical-symposium',
    title: 'Kings-Mechanical Symposium 2k25',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Mech Dept - Kings',
    date: 'Apr 2025',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/mechancientz.png',
    isPlaceholder: true,
    placeholderNote: 'Description copy-pasted incorrectly on live site (mentions "Retail Corp" / payment gateways for what is a technical symposium event). Client asked to leave as-is for now.',
  },
  {
    slug: 'sm-manpower-service',
    title: 'SM Manpower Service',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Abi Shek',
    date: 'Apr 2026',
    technologies: ['React', 'MongoDB', 'Firebase'],
    image: '/images/portfolio/sm-manpower.png',
    isPlaceholder: true,
    placeholderNote: 'Same copy-paste bug as above. Client asked to leave as-is for now.',
  },
  {
    slug: 'kings-hall-booking-software',
    title: 'Kings Hall Booking Software',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Kings College',
    date: 'Dec 2024',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/kings-hall.png',
    isPlaceholder: true,
    placeholderNote: 'Same copy-paste bug as above. Client asked to leave as-is for now.',
  },
]
