import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheckCircle } from 'react-icons/fi'
import { api } from '../lib/api'
import Button from './ui/Button'

export default function ApplicationModal({ role, type, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | done

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    await api.submitApplication({ type, roleId: role.id, roleTitle: role.title, ...form })
    setStatus('done')
  }

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
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg)]/70 hover:text-signal hover:border-signal"
          >
            <FiX size={16} />
          </button>

          {status === 'done' ? (
            <div className="text-center py-8">
              <FiCheckCircle className="text-signal mx-auto" size={40} />
              <h3 className="font-display font-semibold text-xl mt-4 text-[var(--fg)]">Application received</h3>
              <p className="mt-2 text-sm text-[var(--fg)]/60">
                We&rsquo;ll be in touch soon about {role.title}.
              </p>
              <Button onClick={onClose} className="mt-6">
                Close
              </Button>
            </div>
          ) : (
            <>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal">Apply for</p>
              <h3 className="font-display font-semibold text-xl mt-1 text-[var(--fg)]">{role.title}</h3>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <div>
                  <label htmlFor="app-name" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
                    Full name
                  </label>
                  <input
                    id="app-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="app-email" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
                      Email
                    </label>
                    <input
                      id="app-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="app-phone" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
                      Phone
                    </label>
                    <input
                      id="app-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="app-message" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
                    Why you&rsquo;re a good fit
                  </label>
                  <textarea
                    id="app-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none resize-none"
                  />
                </div>
                <p className="text-xs text-[var(--fg)]/40">
                  Resume upload will be added once file storage is connected. For now, mention a link in the message.
                </p>
                <Button type="submit" disabled={status === 'submitting'} className="self-start">
                  {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
