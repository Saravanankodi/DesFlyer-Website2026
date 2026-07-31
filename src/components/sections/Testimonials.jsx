import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import Eyebrow from '../ui/Eyebrow'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10 bg-[var(--surface-2)]">
      <div className="max-w-shell mx-auto">
        <Eyebrow>Client Success</Eyebrow>
        <h2 className="font-display font-bold text-[clamp(1.9rem,3.5vw,3rem)] text-[var(--fg)] max-w-xl">
          Discover how DesFlyer has transformed businesses
        </h2>
        <div className="flex gap-1 mt-5 text-signal">
          {Array.from({ length: 5 }).map((_, i) => (
            <FiStar key={i} fill="currentColor" size={18} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8"
            >
              <p className="text-[var(--fg)]/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
