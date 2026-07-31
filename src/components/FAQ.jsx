import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import Eyebrow from './ui/Eyebrow'
import { faqs as defaultFaqs } from '../data/faqs'

export default function FAQ({ items = defaultFaqs, title = 'Common questions', eyebrow = 'FAQ' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-6 lg:px-10 pb-28">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display font-bold text-[clamp(1.7rem,3vw,2.5rem)] text-[var(--fg)] mb-10">
          {title}
        </h2>
        <div className="flex flex-col divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display font-medium text-base sm:text-lg text-[var(--fg)]">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-signal shrink-0"
                  >
                    <FiPlus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-[var(--fg)]/65 leading-relaxed max-w-2xl">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
