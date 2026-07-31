import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiClock, FiMapPin, FiBriefcase } from 'react-icons/fi'
import Seo from '../../lib/Seo'
import Eyebrow from '../../components/ui/Eyebrow'
import DynamicForm from '../../components/form/DynamicForm'
import BenefitsGrid from '../../components/BenefitsGrid'
import FAQ from '../../components/FAQ'
import { jobFormSections } from '../../data/jobForm'
import { jobBenefits, jobFaqs } from '../../data/opportunitiesContent'
import { siteConfig } from '../../data/siteConfig'
import { api } from '../../lib/api'
import { useJobOpenings } from '../../store/openingsStore'

export default function JobsPage() {
  // Reads live from the shared store — Admin changes appear here instantly, same session.
  const allOpenings = useJobOpenings()
  const jobs = allOpenings.filter((o) => o.status === 'Open')

  async function handleSubmit(values) {
    await api.submitApplication({ type: 'job', ...values, resumeFileName: values.resume?.name })
  }

  return (
    <>
      <Seo
        title="Jobs"
        description="Join DesFlyer — open full-time roles in engineering and design, based in Thanjavur with remote flexibility."
        path="/opportunities/jobs"
      />

      {/* Hero */}
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

      {/* Job Information */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <h2 className="font-display font-semibold text-2xl text-[var(--fg)] mb-8">Open Roles</h2>
          {jobs.length === 0 && (
            <p className="text-sm text-[var(--fg)]/50">No open roles right now — check back soon.</p>
          )}
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border border-[var(--border)] rounded-2xl p-7"
              >
                <h3 className="font-display font-semibold text-lg text-[var(--fg)]">{job.title}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs font-mono text-[var(--fg)]/50">
                  <span className="flex items-center gap-1.5"><FiBriefcase size={12} /> {job.department}</span>
                  <span className="flex items-center gap-1.5"><FiMapPin size={12} /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><FiClock size={12} /> {job.employmentType}</span>
                </div>
                <p className="mt-4 text-sm text-[var(--fg)]/65 leading-relaxed max-w-2xl">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>Apply Now</Eyebrow>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--fg)] mb-12">Job Application</h2>
          <DynamicForm sections={jobFormSections} onSubmit={handleSubmit} submitLabel="Submit Application" />
        </div>
      </section>

      <BenefitsGrid benefits={jobBenefits} title="Why work at DesFlyer" />

      <FAQ items={jobFaqs} eyebrow="Careers FAQ" title="Questions about working here" />

      {/* Contact section */}
      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto border border-[var(--border)] rounded-2xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-semibold text-xl text-[var(--fg)]">Still have questions?</h3>
            <p className="text-sm text-[var(--fg)]/60 mt-1">Reach out directly and we&rsquo;ll help you figure it out.</p>
          </div>
          <div className="flex gap-4">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-signal">
              <FiMail size={15} /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-signal">
              <FiPhone size={15} /> {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
