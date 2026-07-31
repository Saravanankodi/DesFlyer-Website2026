import { motion } from 'framer-motion'
import { FiCompass, FiTarget, FiUsers } from 'react-icons/fi'
import Eyebrow from '../ui/Eyebrow'
import { aboutContent } from '../../data/siteConfig'

const cards = [
  { icon: FiCompass, ...aboutContent.vision },
  { icon: FiTarget, ...aboutContent.mission },
  { icon: FiUsers, ...aboutContent.team },
]

export default function AboutTeaser() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-shell mx-auto">
        <Eyebrow>Our Journey</Eyebrow>
        <h2 className="font-display font-bold text-[clamp(1.9rem,3.5vw,3rem)] text-[var(--fg)] max-w-2xl">
          {aboutContent.heading}
        </h2>
        <p className="mt-5 text-[var(--fg)]/65 max-w-2xl leading-relaxed">{aboutContent.intro}</p>

        <div className="grid md:grid-cols-3 gap-px mt-16 bg-[var(--border)] rounded-2xl overflow-hidden">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--bg)] p-8 lg:p-10"
            >
              <c.icon className="text-signal" size={26} />
              <h3 className="font-display font-semibold text-xl mt-5 text-[var(--fg)]">{c.title}</h3>
              <p className="mt-3 text-sm text-[var(--fg)]/65 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
