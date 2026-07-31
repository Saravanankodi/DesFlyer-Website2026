import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiBriefcase } from 'react-icons/fi'
import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'
import ApplicationModal from '../components/ApplicationModal'
import { api } from '../lib/api'

export default function Careers() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeRole, setActiveRole] = useState(null)

  useEffect(() => {
    api.getJobs().then((data) => {
      setJobs(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Seo
        title="Careers"
        description="Join DesFlyer — open roles in engineering and design, based in Thanjavur with remote flexibility."
        path="/careers"
      />
      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl">
            Build with us
          </h1>
          <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">
            We&rsquo;re a small, hands-on team. Open roles below — reach out even if nothing fits perfectly.
          </p>
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto flex flex-col gap-4">
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-32 rounded-2xl border border-[var(--border)] animate-pulse bg-[var(--surface-2)]" />
            ))}

          {!loading &&
            jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border border-[var(--border)] rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 hover:border-signal/50 transition-colors"
              >
                <div>
                  <h2 className="font-display font-semibold text-xl text-[var(--fg)]">{job.title}</h2>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs font-mono text-[var(--fg)]/50">
                    <span className="flex items-center gap-1.5">
                      <FiBriefcase size={12} /> {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={12} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiClock size={12} /> {job.type}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-[var(--fg)]/65 leading-relaxed max-w-xl">{job.description}</p>
                </div>
                <Button onClick={() => setActiveRole(job)} className="shrink-0">
                  Apply Now
                </Button>
              </motion.div>
            ))}
        </div>
      </section>

      {activeRole && (
        <ApplicationModal role={activeRole} type="job" onClose={() => setActiveRole(null)} />
      )}
    </>
  )
}
