import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiDollarSign } from 'react-icons/fi'
import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'
import ApplicationModal from '../components/ApplicationModal'
import { api } from '../lib/api'

export default function Internship() {
  const [internships, setInternships] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeRole, setActiveRole] = useState(null)

  useEffect(() => {
    api.getInternships().then((data) => {
      setInternships(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Seo
        title="Internships"
        description="Internship opportunities at DesFlyer in engineering, design, and marketing."
        path="/internship"
      />
      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>Internships</Eyebrow>
          <h1 className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl">
            Learn by building real things
          </h1>
          <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">
            Hands-on internships working directly with our team on live client projects.
          </p>
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-52 rounded-2xl border border-[var(--border)] animate-pulse bg-[var(--surface-2)]" />
            ))}

          {!loading &&
            internships.map((role, i) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[var(--border)] rounded-2xl p-7 flex flex-col hover:border-signal/50 transition-colors"
              >
                <h2 className="font-display font-semibold text-lg text-[var(--fg)]">{role.title}</h2>
                <div className="flex flex-col gap-1.5 mt-4 text-xs font-mono text-[var(--fg)]/50">
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} /> {role.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={12} /> {role.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiDollarSign size={12} /> {role.stipend}
                  </span>
                </div>
                <p className="mt-4 text-sm text-[var(--fg)]/65 leading-relaxed flex-1">{role.description}</p>
                <Button onClick={() => setActiveRole(role)} className="mt-6 w-full">
                  Apply Now
                </Button>
              </motion.div>
            ))}
        </div>
      </section>

      {activeRole && (
        <ApplicationModal role={activeRole} type="internship" onClose={() => setActiveRole(null)} />
      )}
    </>
  )
}
