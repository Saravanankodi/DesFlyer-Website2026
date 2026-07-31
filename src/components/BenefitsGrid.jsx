import { motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'

export default function BenefitsGrid({ benefits, title = 'Why join us' }) {
  return (
    <section className="py-24 px-6 lg:px-10 bg-[var(--surface-2)]">
      <div className="max-w-shell mx-auto">
        <Eyebrow>Benefits</Eyebrow>
        <h2 className="font-display font-bold text-[clamp(1.7rem,3vw,2.5rem)] text-[var(--fg)] mb-12">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6"
            >
              <b.icon className="text-signal" size={22} />
              <h3 className="font-display font-semibold text-base mt-4 text-[var(--fg)]">{b.title}</h3>
              <p className="mt-2 text-sm text-[var(--fg)]/60 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
