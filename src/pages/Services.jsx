import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import CTABand from '../components/sections/CTABand'
import ServiceFlipCard from '../components/ServiceFlipCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Custom software, web, and mobile app development, enterprise solutions, UI/UX design, and more from DesFlyer."
        path="/services"
      />
      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>What We Do</Eyebrow>
          <h1 className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl">
            Services built to move your business forward
          </h1>
          <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">
            From custom software to brand identity — engineering and design under one roof.
            <span className="block mt-1 text-sm text-[var(--fg)]/40">Hover any card (or tap on mobile) to see details.</span>
          </p>
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceFlipCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
