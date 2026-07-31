import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Eyebrow from '../ui/Eyebrow'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

export default function PortfolioTeaser() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-shell mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(1.9rem,3.5vw,3rem)] text-[var(--fg)]">
              Projects we&rsquo;ve shipped
            </h2>
          </div>
          <Button to="/portfolio" variant="outline">
            Full Portfolio <FiArrowUpRight />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-[var(--border)] rounded-2xl p-8 hover:border-signal/50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center justify-between font-mono text-xs text-[var(--fg)]/50 flex-1">
                  <span>{p.client}</span>
                  <span>{p.date}</span>
                </div>
              </div>
              {p.image && (
                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center p-2 mt-4">
                  <img src={p.image} alt="" aria-hidden="true" className="max-w-full max-h-full object-contain" loading="lazy" />
                </div>
              )}
              <h3 className="font-display font-semibold text-xl mt-4 text-[var(--fg)] group-hover:text-signal transition-colors">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--fg)]/60 leading-relaxed line-clamp-2">{p.body}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--fg)]/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
