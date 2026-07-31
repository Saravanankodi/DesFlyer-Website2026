import { motion } from 'framer-motion'
import { FiClock } from 'react-icons/fi'
import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import CTABand from '../components/sections/CTABand'
import { projects } from '../data/projects'

const upcomingProducts = ['Product Slot 01', 'Product Slot 02', 'Product Slot 03']

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Explore DesFlyer's featured projects — from invoicing software to booking platforms — built for real clients."
        path="/portfolio"
      />
      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>Selected Work</Eyebrow>
          <h1 className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl">
            Highlighted Projects
          </h1>
          <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">
            Explore our featured projects that demonstrate our expertise in delivering innovative software
            solutions tailored to client needs.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6 lg:px-10">
        <div className="max-w-shell mx-auto flex flex-col gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[var(--border)] rounded-2xl p-8 lg:p-10 hover:border-signal/50 transition-colors duration-300 grid sm:grid-cols-[1fr_auto] gap-8 items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--fg)]/50">
                  <span>Client: {p.client}</span>
                  <span>Date: {p.date}</span>
                </div>
                <h2 className="font-display font-semibold text-2xl mt-4 text-[var(--fg)]">{p.title}</h2>
                <p className="mt-3 text-[var(--fg)]/65 leading-relaxed max-w-2xl">{p.body}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--fg)]/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {p.image && (
                <div className="w-full sm:w-44 h-32 rounded-xl bg-white flex items-center justify-center p-4 shrink-0">
                  <img src={p.image} alt={`${p.title} logo`} className="max-w-full max-h-full object-contain" loading="lazy" />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>Coming Soon</Eyebrow>
          <h2 className="font-display font-bold text-2xl text-[var(--fg)] mb-8">More products on the way</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {upcomingProducts.map((label) => (
              <div
                key={label}
                className="border border-dashed border-[var(--border)] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 text-[var(--fg)]/40"
              >
                <FiClock size={22} />
                <span className="font-mono text-xs uppercase tracking-[0.15em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
