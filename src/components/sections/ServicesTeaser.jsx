import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Eyebrow from '../ui/Eyebrow'
import Button from '../ui/Button'
import { services } from '../../data/services'

export default function ServicesTeaser() {
  const featured = services.slice(0, 4)

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--surface-2)]">
      <div className="max-w-shell mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.5vw,3rem)] text-[var(--fg)]">
              Engineering built around your goals
            </h2>
          </div>
          <Button to="/services" variant="outline">
            All Services <FiArrowUpRight />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 hover:border-signal/50 transition-colors duration-300"
            >
              <span className="font-mono text-xs text-signal">0{i + 1}</span>
              <h3 className="font-display font-semibold text-lg mt-4 text-[var(--fg)]">{s.title}</h3>
              <p className="mt-3 text-sm text-[var(--fg)]/60 leading-relaxed line-clamp-4">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
