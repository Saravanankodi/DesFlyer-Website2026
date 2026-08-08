// Single source of truth for verified DesFlyer business facts.
// Every value here was confirmed from the live site screenshots / PDF the client provided.
// Do not add facts that aren't verified — flag isPlaceholder instead.

export const siteConfig = {
  name: 'DesFlyer',
  tagline: 'Innovative Software Solutions for Your Business',
  description:
    "DesFlyer delivers cutting-edge software solutions tailored to your unique business needs. We specialize in creating robust, scalable, and user-friendly applications that drive growth and efficiency. Let's build the future together.",
  founded: 2024,
  location: 'Thanjavur, Tamil Nadu, India',
  email: 'desflyer.tech@gmail.com',
  phone: '+91 8525913433',
  // Social links: icons were shown on the live site but no handles/URLs were visible in the screenshot.
  // Placeholders — swap hrefs when you send the real profile links.
  socials: [{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/desflyer.tech', isPlaceholder: false, },
  { name: 'WhatsApp', href: 'https://wa.me/918525913433', isPlaceholder: false, },
  { name: 'Instagram', href: 'https://www.instagram.com/desflyer.tech/', isPlaceholder: false, },
  { name: 'Facebook', href: 'https://www.facebook.com/people/Desflyer-Desflyer/pfbid0UAJEWVoBJBrKjEk2d8tJoKo1vUJviUN63AqvZQiaQn1rMkgRJHbSYsZGUquzGFEol/', isPlaceholder: false, },
  { name: 'X', href: 'https://x.com/desflyer_tech', isPlaceholder: false, },],
}

export const aboutContent = {
  eyebrow: 'Our Journey',
  heading: 'Discover DesFlyer Journey',
  intro:
    'Founded in 2024, DesFlyer has been dedicated to providing innovative software solutions that empower businesses. Our mission is to deliver high-quality products tailored to your needs.',
  vision: {
    title: 'Our Vision',
    body: 'To drive meaningful change in businesses globally by delivering cutting-edge technology solutions that optimize operations and accelerate digital transformation, establishing DesFlyer as a trusted partner for sustainable growth.',
  },
  mission: {
    title: 'Our Mission',
    body: 'To provide custom software and web development services tailored to our clients\u2019 unique needs, ensuring high quality, reliability, and measurable impact. We are committed to fostering long-term partnerships through transparency, innovation, and dedicated support.',
  },
  team: {
    title: 'Meet Our Team',
    body: 'Our team consists of skilled professionals who are deeply passionate about technology and innovation. With a strong foundation in UI/UX design and several years of industry experience, we blend creativity with technical know-how to craft outstanding solutions that consistently surpass client expectations.',
    // No individual member names/photos were available on the live site — kept generic per client instruction.
    isPlaceholder: false,
  },
}
