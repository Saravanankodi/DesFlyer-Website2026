import { motion } from 'framer-motion'
import { FiCompass, FiTarget, FiUsers } from 'react-icons/fi'
import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import CTABand from '../components/sections/CTABand'
import { aboutContent, siteConfig } from '../data/siteConfig'

const cards = [
  { icon: FiCompass, ...aboutContent.vision },
  { icon: FiTarget, ...aboutContent.mission },
  { icon: FiUsers, ...aboutContent.team },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Founded in 2024, DesFlyer delivers custom software and web development services empowering businesses worldwide."
        path="/about"
      />
      <section className="pt-40 pb-24 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>{aboutContent.eyebrow}</Eyebrow>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-3xl"
          >
            {aboutContent.heading}
          </motion.h1>
          <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">{aboutContent.intro}</p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-signal">
            Founded {siteConfig.founded} &middot; {siteConfig.location}
          </p>
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto grid md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--bg)] p-8 lg:p-10"
            >
              <c.icon className="text-signal" size={28} />
              <h2 className="font-display font-semibold text-xl mt-5 text-[var(--fg)]">{c.title}</h2>
              <p className="mt-3 text-sm text-[var(--fg)]/65 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
