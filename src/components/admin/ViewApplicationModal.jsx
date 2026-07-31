import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function ViewApplicationModal({ data, fields, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl w-full max-w-lg p-8 relative max-h-[85vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg)]/70 hover:text-signal hover:border-signal"
          >
            <FiX size={16} />
          </button>
          <h2 className="font-display font-semibold text-xl text-[var(--fg)] mb-6">Applicant Details</h2>
          <dl className="flex flex-col gap-4">
            {fields.map((f) => (
              <div key={f.key}>
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/50">{f.label}</dt>
                <dd className="mt-1 text-sm text-[var(--fg)]/85">{data[f.key] || '\u2014'}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
