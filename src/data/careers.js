// Mock job listings — replace with real openings, or wire api.getJobs() to a real endpoint.
export const jobs = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Thanjavur / Remote',
    department: 'Engineering',
    description:
      'Build and maintain client-facing React applications, working closely with design and backend teams to ship polished product experiences.',
    requirements: [
      'Strong proficiency in React and modern JavaScript',
      'Experience with responsive, accessible UI development',
      'Familiarity with Git and collaborative workflows',
    ],
    isPlaceholder: true,
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    type: 'Full-time',
    location: 'Thanjavur / Remote',
    department: 'Engineering',
    description:
      'Design and build the APIs and data systems powering DesFlyer client projects, with a focus on reliability and clean architecture.',
    requirements: [
      'Experience with Node.js and REST/GraphQL APIs',
      'Comfortable with SQL and NoSQL databases',
      'Understanding of authentication and API security basics',
    ],
    isPlaceholder: true,
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Thanjavur',
    department: 'Design',
    description:
      'Own the design process from wireframe to polished UI for client and internal products, working closely with engineering.',
    requirements: [
      'Portfolio showing end-to-end product design work',
      'Proficiency in Figma or similar tools',
      'Understanding of accessibility and responsive design',
    ],
    isPlaceholder: true,
  },
]
