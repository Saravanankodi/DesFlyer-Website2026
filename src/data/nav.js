// Note: "Portfolio" (client project case studies) and "Product" were originally a
// duplicate nav bug and merged into one. Per the v2.0 update request, "Products" is now
// reinstated as its own dedicated page with a different purpose (product showcase with
// filtering) — so both live in the nav again, intentionally, not a regression of the bug.
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Products', to: '/products' },
  {
    label: 'Opportunities',
    dropdown: [
      { label: 'Internship', to: '/opportunities/internship', desc: 'Hands-on internships across engineering & design' },
      { label: 'Jobs', to: '/opportunities/jobs', desc: 'Open full-time roles at DesFlyer' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks = {
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Products', to: '/products' },
    { label: 'Careers', to: '/opportunities/jobs' },
    { label: 'Internships', to: '/opportunities/internship' },
  ],
  services: [
    { label: 'Custom Software Development', to: '/services#custom-software-development' },
    { label: 'Mobile App Development', to: '/services#mobile-app-development' },
    { label: 'Web Development', to: '/services#web-development' },
  ],
}
