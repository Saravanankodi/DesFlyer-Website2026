import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiClock, FiMapPin, FiUsers } from 'react-icons/fi'
import Seo from '../../lib/Seo'
import Eyebrow from '../../components/ui/Eyebrow'
import DynamicForm from '../../components/form/DynamicForm'
import BenefitsGrid from '../../components/BenefitsGrid'
import FAQ from '../../components/FAQ'
import { internshipFormSections } from '../../data/internshipForm'
import { internshipBenefits, internshipFaqs } from '../../data/opportunitiesContent'
import { siteConfig } from '../../data/siteConfig'
import { api } from '../../lib/api'
import { useInternshipOpenings } from '../../store/openingsStore'

export default function InternshipPage() {
  // Reads live from the shared store — Admin changes appear here instantly, same session.
  const allOpenings = useInternshipOpenings()
  const listings = allOpenings.filter((o) => o.status === 'Open')

  async function handleSubmit(values) {
    await api.submitApplication({ type: 'internship', ...values, resumeFileName: values.resume?.name })
  }

  return (
    <>
      <Seo
        title="Internships"
        description="Internship opportunities at DesFlyer in engineering, design, and marketing."
        path="/opportunities/internship"
      />

      {/* Hero */}
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

      {/* Internship Information */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <h2 className="font-display font-semibold text-2xl text-[var(--fg)] mb-8">Open Internship Tracks</h2>
          {listings.length === 0 && (
            <p className="text-sm text-[var(--fg)]/50">No open internships right now — check back soon.</p>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {listings.map((role, i) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-[var(--border)] rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-lg text-[var(--fg)]">{role.title}</h3>
                <p className="text-xs text-[var(--fg)]/45 mt-1">{role.department}</p>
                <div className="flex flex-col gap-1.5 mt-4 text-xs font-mono text-[var(--fg)]/50">
                  <span className="flex items-center gap-1.5"><FiClock size={12} /> {role.duration}</span>
                  <span className="flex items-center gap-1.5"><FiMapPin size={12} /> {role.location}</span>
                  <span className="flex items-center gap-1.5"><FiUsers size={12} /> {role.openings} openings</span>
                </div>
                <p className="mt-4 text-sm text-[var(--fg)]/65 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>Apply Now</Eyebrow>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--fg)] mb-12">Internship Application</h2>
          <DynamicForm sections={internshipFormSections} onSubmit={handleSubmit} submitLabel="Submit Application" />
        </div>
      </section>

      <BenefitsGrid benefits={internshipBenefits} title="Why intern with DesFlyer" />

      <FAQ items={internshipFaqs} eyebrow="Internship FAQ" title="Questions about interning here" />

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