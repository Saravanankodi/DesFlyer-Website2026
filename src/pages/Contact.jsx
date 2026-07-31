import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'
import FAQ from '../components/FAQ'
import { siteConfig } from '../data/siteConfig'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend yet — this is wired to a mock submit so the UI/UX is final
    // and a real endpoint can be dropped in via src/lib/api.js later.
    setStatus('sent')
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with DesFlyer — email, call, or send us a message about your project."
        path="/contact"
      />
      <section className="pt-40 pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <Eyebrow>Get In Touch</Eyebrow>
            <h1 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.25rem)] text-[var(--fg)]">
              Let&rsquo;s talk about your project
            </h1>
            <p className="mt-6 text-[var(--fg)]/65 leading-relaxed max-w-sm">
              Tell us what you&rsquo;re building. We usually reply within one business day.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal group-hover:border-signal transition-colors">
                  <FiMail size={16} />
                </span>
                <span className="text-[var(--fg)]/80 group-hover:text-signal transition-colors">
                  {siteConfig.email}
                </span>
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal group-hover:border-signal transition-colors">
                  <FiPhone size={16} />
                </span>
                <span className="text-[var(--fg)]/80 group-hover:text-signal transition-colors">
                  {siteConfig.phone}
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal">
                  <FiMapPin size={16} />
                </span>
                <span className="text-[var(--fg)]/80">{siteConfig.location}</span>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 border border-[var(--border)] rounded-2xl p-8 lg:p-10 flex flex-col gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none transition-colors resize-none"
              />
            </div>
            <Button type="submit" className="self-start">
              Send Message <FiSend />
            </Button>
            {status === 'sent' && (
              <p role="status" className="text-sm text-signal">
                Message captured. (Connect a backend in src/lib/api.js to send this for real.)
              </p>
            )}
          </motion.form>
        </div>
      </section>

      <FAQ />
    </>
  )
}
