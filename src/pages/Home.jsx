import Seo from '../lib/Seo'
import Hero from '../components/sections/Hero'
import TechStrip from '../components/sections/TechStrip'
import ServicesTeaser from '../components/sections/ServicesTeaser'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import PortfolioTeaser from '../components/sections/PortfolioTeaser'
import Testimonials from '../components/sections/Testimonials'
import CTABand from '../components/sections/CTABand'
import { siteConfig } from '../data/siteConfig'

export default function Home() {
  return (
    <>
      <Seo title="Home" description={siteConfig.description} path="/" />
      <Hero />
      <TechStrip />
      <ServicesTeaser />
      <ProcessTimeline />
      <PortfolioTeaser />
      <Testimonials />
      <CTABand />
    </>
  )
}
