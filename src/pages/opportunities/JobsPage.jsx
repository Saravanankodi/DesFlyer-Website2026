// // import { motion } from 'framer-motion'
// // import { FiMail, FiPhone, FiClock, FiMapPin, FiBriefcase } from 'react-icons/fi'
// // import Seo from '../../lib/Seo'
// // import Eyebrow from '../../components/ui/Eyebrow'
// // import DynamicForm from '../../components/form/DynamicForm'
// // import BenefitsGrid from '../../components/BenefitsGrid'
// // import FAQ from '../../components/FAQ'
// // import { jobFormSections } from '../../data/jobForm'
// // import { jobBenefits, jobFaqs } from '../../data/opportunitiesContent'
// // import { siteConfig } from '../../data/siteConfig'
// // import { api } from '../../lib/api'
// // import { useJobOpenings } from '../../store/openingsStore'

// // export default function JobsPage() {
// //   // Reads live from the shared store — Admin changes appear here instantly, same session.
// //   const allOpenings = useJobOpenings()
// //   const jobs = allOpenings.filter((o) => o.status === 'Open')

// //   async function handleSubmit(values) {
// //     await api.submitApplication({ type: 'job', ...values, resumeFileName: values.resume?.name })
// //   }

// //   return (
// //     <>
// //       <Seo
// //         title="Jobs"
// //         description="Join DesFlyer — open full-time roles in engineering and design, based in Thanjavur with remote flexibility."
// //         path="/opportunities/jobs"
// //       />

// //       {/* Hero */}
// //       <section className="pt-40 pb-20 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">
// //           <Eyebrow>Careers</Eyebrow>
// //           <h1 className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl">
// //             Build with us
// //           </h1>
// //           <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">
// //             We&rsquo;re a small, hands-on team. Open roles below — reach out even if nothing fits perfectly.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Job Information */}
// //       <section className="pb-24 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">
// //           <h2 className="font-display font-semibold text-2xl text-[var(--fg)] mb-8">Open Roles</h2>
// //           {jobs.length === 0 && (
// //             <p className="text-sm text-[var(--fg)]/50">No open roles right now — check back soon.</p>
// //           )}
// //           <div className="flex flex-col gap-4">
// //             {jobs.map((job, i) => (
// //               <motion.div
// //                 key={job.id}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, margin: '-60px' }}
// //                 transition={{ duration: 0.5, delay: i * 0.06 }}
// //                 className="border border-[var(--border)] rounded-2xl p-7"
// //               >
// //                 <h3 className="font-display font-semibold text-lg text-[var(--fg)]">{job.title}</h3>
// //                 <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs font-mono text-[var(--fg)]/50">
// //                   <span className="flex items-center gap-1.5"><FiBriefcase size={12} /> {job.department}</span>
// //                   <span className="flex items-center gap-1.5"><FiMapPin size={12} /> {job.location}</span>
// //                   <span className="flex items-center gap-1.5"><FiClock size={12} /> {job.employmentType}</span>
// //                 </div>
// //                 <p className="mt-4 text-sm text-[var(--fg)]/65 leading-relaxed max-w-2xl">{job.description}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Application Form */}
// //       <section className="pb-28 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">
// //           <Eyebrow>Apply Now</Eyebrow>
// //           <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--fg)] mb-12">Job Application</h2>
// //           <DynamicForm sections={jobFormSections} onSubmit={handleSubmit} submitLabel="Submit Application" />
// //         </div>
// //       </section>

// //       <BenefitsGrid benefits={jobBenefits} title="Why work at DesFlyer" />

// //       <FAQ items={jobFaqs} eyebrow="Careers FAQ" title="Questions about working here" />

// //       {/* Contact section */}
// //       <section className="pb-28 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto border border-[var(--border)] rounded-2xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
// //           <div>
// //             <h3 className="font-display font-semibold text-xl text-[var(--fg)]">Still have questions?</h3>
// //             <p className="text-sm text-[var(--fg)]/60 mt-1">Reach out directly and we&rsquo;ll help you figure it out.</p>
// //           </div>
// //           <div className="flex gap-4">
// //             <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-signal">
// //               <FiMail size={15} /> {siteConfig.email}
// //             </a>
// //             <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-signal">
// //               <FiPhone size={15} /> {siteConfig.phone}
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   )
// // }



// // import { useState } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import {
// //   FiMail,
// //   FiPhone,
// //   FiClock,
// //   FiMapPin,
// //   FiBriefcase,
// //   FiArrowRight,
// //   FiCheckCircle,
// // } from 'react-icons/fi'

// // import Seo from '../../lib/Seo'
// // import Eyebrow from '../../components/ui/Eyebrow'
// // import DynamicForm from '../../components/form/DynamicForm'
// // import BenefitsGrid from '../../components/BenefitsGrid'
// // import FAQ from '../../components/FAQ'

// // import { jobFormSections } from '../../data/jobForm'
// // import { jobBenefits, jobFaqs } from '../../data/opportunitiesContent'
// // import { siteConfig } from '../../data/siteConfig'
// // import { api } from '../../lib/api'
// // import { useJobOpenings } from '../../store/openingsStore'

// // export default function JobsPage() {
// //   const allOpenings = useJobOpenings()

// //   const jobs = allOpenings.filter((o) => o.status === 'Open')

// //   const [step, setStep] = useState(1)

// //   async function handleSubmit(values) {
// //     await api.submitApplication({
// //       type: 'job',
// //       ...values,
// //       resumeFileName: values.resume?.name,
// //     })
// //   }

// //   // -------------------------------
// //   // Split your existing form into 3 steps
// //   // -------------------------------

// //   const step1Sections = jobFormSections.slice(0, 1)

// //   const step2Sections = jobFormSections.slice(1, 2)

// //   const step3Sections = jobFormSections.slice(2)

// //   const cardAnim = {
// //     hidden: {
// //       opacity: 0,
// //       y: 40,
// //     },
// //     show: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //       },
// //     },
// //     exit: {
// //       opacity: 0,
// //       y: -20,
// //       transition: {
// //         duration: 0.35,
// //       },
// //     },
// //   }

// //   return (
// //     <>
// //       <Seo
// //         title="Careers"
// //         description="Join DesFlyer and build next generation digital products."
// //       />
// //             {/* ========================================================= */}
// //       {/* HERO */}
// //       {/* ========================================================= */}

// //       <section className="pt-40 pb-20 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">

// //           <Eyebrow>Careers</Eyebrow>

// //           <motion.h1
// //             initial={{ opacity: 0, y: 35 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: .7 }}
// //             className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-[var(--fg)]"
// //           >
// //             Build the
// //             <span className="block text-signal">
// //               Future With Us
// //             </span>
// //           </motion.h1>

// //           <motion.p
// //             initial={{ opacity: 0, y: 25 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: .2 }}
// //             className="mt-8 max-w-2xl text-lg text-[var(--fg)]/65 leading-8"
// //           >
// //             Join a passionate team creating modern software,
// //             AI products and digital experiences used by
// //             businesses around the world.
// //           </motion.p>

// //         </div>
// //       </section>

// //       {/* ========================================================= */}
// //       {/* OPEN POSITIONS */}
// //       {/* ========================================================= */}

// //       <section className="pb-24 px-6 lg:px-10">

// //         <div className="max-w-shell mx-auto">

// //           <h2 className="font-display font-bold text-3xl mb-10">
// //             Current Openings
// //           </h2>

// //           {jobs.length === 0 && (

// //             <div className="rounded-3xl border border-dashed border-[var(--border)] p-12 text-center">

// //               <FiClock
// //                 className="mx-auto mb-4 text-signal"
// //                 size={36}
// //               />

// //               <h3 className="text-xl font-semibold">
// //                 No Open Roles
// //               </h3>

// //               <p className="mt-3 text-[var(--fg)]/60">
// //                 We aren't hiring at the moment,
// //                 but we'd still love to hear from you.
// //               </p>

// //             </div>

// //           )}

// //           <div className="space-y-6">

// //             {jobs.map((job, index) => (

// //               <motion.div
// //                 key={job.id}
// //                 initial={{ opacity: 0, y: 35 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{
// //                   duration: .6,
// //                   delay: index * .08,
// //                 }}
// //                 whileHover={{
// //                   y: -5,
// //                 }}
// //                 className="
// //                 rounded-3xl
// //                 border
// //                 border-[var(--border)]
// //                 bg-[var(--card)]
// //                 p-8
// //                 transition-all
// //                 duration-300
// //                 hover:border-signal/40
// //                 "
// //               >

// //                 <div className="flex flex-wrap items-center justify-between gap-6">

// //                   <div>

// //                     <h3 className="font-display text-2xl font-semibold">
// //                       {job.title}
// //                     </h3>

// //                     <div className="mt-5 flex flex-wrap gap-5 text-sm text-[var(--fg)]/55">

// //                       <span className="flex items-center gap-2">
// //                         <FiBriefcase />
// //                         {job.department}
// //                       </span>

// //                       <span className="flex items-center gap-2">
// //                         <FiMapPin />
// //                         {job.location}
// //                       </span>

// //                       <span className="flex items-center gap-2">
// //                         <FiClock />
// //                         {job.employmentType}
// //                       </span>

// //                     </div>

// //                     <p className="mt-6 max-w-3xl leading-8 text-[var(--fg)]/65">
// //                       {job.description}
// //                     </p>

// //                   </div>

// //                   <div
// //                     className="
// //                     px-5
// //                     py-2
// //                     rounded-full
// //                     bg-signal/10
// //                     text-signal
// //                     text-sm
// //                     font-medium
// //                     "
// //                   >
// //                     OPEN
// //                   </div>

// //                 </div>

// //               </motion.div>

// //             ))}

// //           </div>

// //         </div>

// //       </section>

// //       {/* ========================================================= */}
// //       {/* APPLICATION FORM */}
// //       {/* ========================================================= */}

// //       <section className="pb-28 px-6 lg:px-10">

// //         <div className="max-w-shell mx-auto">

// //           <Eyebrow>Application</Eyebrow>

// //           <h2 className="font-display font-bold text-3xl mt-4">
// //             Complete Your Application
// //           </h2>

// //           <p className="mt-4 text-[var(--fg)]/60">
// //             Finish one step to unlock the next.
// //           </p>
// //                     {/* ========================= */}
// // {/* ========================= */}
// // {/* CHECKBOX PROGRESS */}
// // {/* ========================= */}

// // <div className="flex items-center justify-center gap-6 mb-16">

// //   {[
// //     "Personal",
// //     "Education",
// //     "Resume"
// //   ].map((label, index) => {

// //     const current = index + 1
// //     const active = step >= current

// //     return (

// //       <div
// //         key={label}
// //         className="flex items-center"
// //       >

// //         <motion.div

// //           whileHover={{ scale: 1.08 }}

// //           animate={
// //             active
// //               ? {
// //                   scale: [1, 1.15, 1],
// //                 }
// //               : {}
// //           }

// //           transition={{
// //             duration: .6,
// //           }}

// //           className={`
// //           relative
// //           w-16
// //           h-16
// //           rounded-2xl
// //           flex
// //           items-center
// //           justify-center
// //           border-2
// //           overflow-hidden
// //           transition-all
// //           duration-500

// //           ${
// //             active
// //               ? "bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-400 shadow-[0_0_35px_rgba(34,211,238,.45)]"
// //               : "border-white/15 bg-white/5"
// //           }
// //           `}
// //         >

// //           {/* Glow */}

// //           {active && (

// //             <motion.div

// //               animate={{
// //                 scale: [1, 2, 1],
// //                 opacity: [.6, 0, .6]
// //               }}

// //               transition={{
// //                 duration: 2,
// //                 repeat: Infinity
// //               }}

// //               className="
// //               absolute
// //               inset-0
// //               rounded-2xl
// //               bg-cyan-400
// //               blur-xl
// //               "
// //             />

// //           )}

// //           <motion.span

// //             initial={false}

// //             animate={{
// //               rotate: active ? 0 : -90,
// //               scale: active ? 1 : .7,
// //             }}

// //             className="relative z-10 text-white text-xl font-bold"

// //           >
// //             {active ? "✓" : current}
// //           </motion.span>

// //         </motion.div>

// //         <div className="ml-4 mr-6">

// //           <h4
// //             className={`font-semibold ${
// //               active
// //                 ? "text-cyan-400"
// //                 : "text-white/40"
// //             }`}
// //           >
// //             {label}
// //           </h4>

// //           <p className="text-xs text-white/40 mt-1">
// //             Step {current}
// //           </p>

// //         </div>

// //         {current !== 3 && (

// //           <motion.div

// //             animate={{
// //               backgroundPosition: active
// //                 ? ["0%", "100%"]
// //                 : "0%"
// //             }}

// //             transition={{
// //               duration: 2,
// //               repeat: Infinity
// //             }}

// //             className="
// //             w-24
// //             h-[3px]
// //             rounded-full
// //             bg-gradient-to-r
// //             from-cyan-400
// //             via-blue-400
// //             to-cyan-400
// //             bg-[length:200%_100%]
// //             opacity-60
// //             "
// //           />

// //         )}

// //       </div>

// //     )

// //   })}

// // </div>          {/* ========================= */}
// //           {/* STEP 1 */}
// //           {/* ========================= */}

// //           <AnimatePresence mode="wait">

// //             {step === 1 && (

// //               <motion.div
// //                 key="step1"
// //                 variants={cardAnim}
// //                 initial="hidden"
// //                 animate="show"
// //                 exit="exit"
// //               >

// //                 <div className="rounded-3xl border border-[var(--border)] p-8">

// //                   <h3 className="font-display text-2xl font-semibold mb-8">
// //                     Step 1
// //                   </h3>

// //                   <DynamicForm
// //                     sections={step1Sections}
// //                     submitLabel="Continue"
// //                     onSubmit={(values) => {
// //                       setStep(2)
// //                     }}
// //                   />

// //                 </div>

// //               </motion.div>

// //             )}

// //           </AnimatePresence>

// //           {/* ========================= */}
// //           {/* STEP 2 */}
// //           {/* ========================= */}

// //           <AnimatePresence mode="wait">

// //             {step === 2 && (

// //               <motion.div
// //                 key="step2"
// //                 variants={cardAnim}
// //                 initial="hidden"
// //                 animate="show"
// //                 exit="exit"
// //               >

// //                 <div className="rounded-3xl border border-[var(--border)] p-8">

// //                   <h3 className="font-display text-2xl font-semibold mb-8">
// //                     Step 2
// //                   </h3>

// //                   <DynamicForm
// //                     sections={step2Sections}
// //                     submitLabel="Continue"
// //                     onSubmit={(values) => {
// //                       setStep(3)
// //                     }}
// //                   />

// //                 </div>

// //               </motion.div>

// //             )}

// //           </AnimatePresence>

// //           {/* ========================= */}
// //           {/* STEP 3 */}
// //           {/* ========================= */}

// //           <AnimatePresence mode="wait">

// //             {step === 3 && (

// //               <motion.div
// //                 key="step3"
// //                 variants={cardAnim}
// //                 initial="hidden"
// //                 animate="show"
// //                 exit="exit"
// //               >

// //                 <div className="rounded-3xl border border-[var(--border)] p-8">

// //                   <h3 className="font-display text-2xl font-semibold mb-8">
// //                     Final Step
// //                   </h3>

// //                   <DynamicForm
// //                     sections={step3Sections}
// //                     submitLabel="Submit Application"
// //                     onSubmit={handleSubmit}
// //                   />

// //                 </div>

// //               </motion.div>

// //             )}

// //           </AnimatePresence>
// //                   </div>
// //       </section>

// //       {/* ========================================================= */}
// //       {/* BENEFITS */}
// //       {/* ========================================================= */}

// //       <BenefitsGrid
// //         benefits={jobBenefits}
// //         title="Why Work at DesFlyer"
// //       />

// //       {/* ========================================================= */}
// //       {/* FAQ */}
// //       {/* ========================================================= */}

// //       <FAQ
// //         items={jobFaqs}
// //         eyebrow="Careers FAQ"
// //         title="Questions About Working Here"
// //       />

// //       {/* ========================================================= */}
// //       {/* CONTACT */}
// //       {/* ========================================================= */}

// //       {/* <section className="pb-28 px-6 lg:px-10">

// //         <div
// //           className="
// //           max-w-shell
// //           mx-auto
// //           rounded-3xl
// //           border
// //           border-[var(--border)]
// //           p-10
// //           lg:p-14
// //           flex
// //           flex-col
// //           lg:flex-row
// //           justify-between
// //           gap-10
// //           items-center
// //           "
// //         >

// //           <div>

// //             <Eyebrow>Need Help?</Eyebrow>

// //             <h2 className="font-display text-3xl font-bold mt-4">
// //               Questions Before Applying?
// //             </h2>

// //             <p className="mt-4 text-[var(--fg)]/60 max-w-lg leading-8">
// //               Contact our recruitment team if you'd like to know
// //               more about any role, internship or future opportunity.
// //             </p>

// //           </div>

// //           <div className="space-y-5">

// //             <a
// //               href={`mailto:${siteConfig.email}`}
// //               className="
// //               flex
// //               items-center
// //               gap-4
// //               text-signal
// //               hover:translate-x-2
// //               transition
// //               "
// //             >
// //               <FiMail size={18} />
// //               {siteConfig.email}
// //             </a>

// //             <a
// //               href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
// //               className="
// //               flex
// //               items-center
// //               gap-4
// //               text-signal
// //               hover:translate-x-2
// //               transition
// //               "
// //             >
// //               <FiPhone size={18} />
// //               {siteConfig.phone}
// //             </a>

// //           </div>

// //         </div>

// //       </section> */}

// //     </>
// //   )
// // }














// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   FiMail,
//   FiPhone,
//   FiClock,
//   FiMapPin,
//   FiBriefcase,
//   FiArrowRight,
//   FiCheckCircle,
// } from 'react-icons/fi'

// import Seo from '../../lib/Seo'
// import Eyebrow from '../../components/ui/Eyebrow'
// import DynamicForm from '../../components/form/DynamicForm'
// import BenefitsGrid from '../../components/BenefitsGrid'
// import FAQ from '../../components/FAQ'

// import { jobFormSections } from '../../data/jobForm'
// import { jobBenefits, jobFaqs } from '../../data/opportunitiesContent'
// import { siteConfig } from '../../data/siteConfig'
// import { api } from '../../lib/api'
// import { useJobOpenings } from '../../store/openingsStore'

// export default function JobsPage() {
//   const allOpenings = useJobOpenings()

//   const jobs = allOpenings.filter((o) => o.status === 'Open')

//   const [step, setStep] = useState(1)

//   async function handleSubmit(values) {
//     await api.submitApplication({
//       type: 'job',
//       ...values,
//       resumeFileName: values.resume?.name,
//     })
//   }

//   // -------------------------------
//   // Split your existing form into 3 steps
//   // -------------------------------

//   const step1Sections = jobFormSections.slice(0, 1)
//   const step2Sections = jobFormSections.slice(1, 2)
//   const step3Sections = jobFormSections.slice(2)

//   const cardAnim = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//     exit: {
//       opacity: 0,
//       y: -20,
//       transition: {
//         duration: 0.35,
//       },
//     },
//   }

//   return (
//     <>
//       <Seo />

//       {/* =========================================================
//           HERO
//       ========================================================= */}

//       <section className="relative overflow-hidden pt-36 pb-24 px-6 lg:px-10">
//         {/* Background grid */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             opacity-[0.035]
//           "
//           style={{
//             backgroundImage:
//               'linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)',
//             backgroundSize: '60px 60px',
//           }}
//         />

//         {/* Glow */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             -top-40
//             right-[-10%]
//             w-[500px]
//             h-[500px]
//             rounded-full
//             bg-signal/10
//             blur-[120px]
//           "
//         />

//         <div className="relative max-w-shell mx-auto">
//           <Eyebrow>Careers</Eyebrow>

//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.7,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="mt-6"
//           >
//             <h1
//               className="
//                 font-display
//                 font-bold
//                 text-[clamp(3rem,7vw,6rem)]
//                 leading-[0.92]
//                 tracking-[-0.04em]
//                 text-[var(--fg)]
//                 max-w-5xl
//               "
//             >
//               Build the
//               <span className="block text-signal">
//                 future with us.
//               </span>
//             </h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: 0.2,
//             }}
//             className="
//               mt-10
//               flex
//               flex-col
//               lg:flex-row
//               lg:items-end
//               justify-between
//               gap-10
//             "
//           >
//             <p
//               className="
//                 max-w-2xl
//                 text-lg
//                 lg:text-xl
//                 text-[var(--fg)]/60
//                 leading-8
//               "
//             >
//               Join a passionate team creating modern software,
//               AI products and digital experiences used by
//               businesses around the world.
//             </p>

//             <div
//               className="
//                 hidden
//                 lg:flex
//                 items-center
//                 gap-3
//                 font-mono
//                 text-xs
//                 uppercase
//                 tracking-[0.18em]
//                 text-[var(--fg)]/40
//               "
//             >
//               <span
//                 className="
//                   w-2
//                   h-2
//                   rounded-full
//                   bg-signal
//                   shadow-[0_0_15px_var(--signal)]
//                   animate-pulse
//                 "
//               />

//               We're growing
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================================
//           OPEN POSITIONS
//       ========================================================= */}

//       <section className="relative pb-28 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto">

//           {/* Section heading */}
//           <div
//             className="
//               flex
//               flex-col
//               lg:flex-row
//               lg:items-end
//               justify-between
//               gap-8
//               mb-12
//             "
//           >
//             <div>
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   font-mono
//                   text-xs
//                   uppercase
//                   tracking-[0.2em]
//                   text-signal
//                   mb-4
//                 "
//               >
//                 <span className="w-8 h-px bg-signal" />
//                 Opportunities
//               </div>

//               <h2
//                 className="
//                   font-display
//                   font-bold
//                   text-[clamp(2rem,4vw,3.5rem)]
//                   leading-tight
//                   text-[var(--fg)]
//                 "
//               >
//                 Find your next
//                 <span className="text-[var(--fg)]/35">
//                   {' '}challenge.
//                 </span>
//               </h2>
//             </div>

//             <div
//               className="
//                 font-mono
//                 text-xs
//                 uppercase
//                 tracking-[0.15em]
//                 text-[var(--fg)]/40
//               "
//             >
//               {jobs.length > 0
//                 ? `${jobs.length} open position${jobs.length > 1 ? 's' : ''}`
//                 : 'No current openings'}
//             </div>
//           </div>

//           {/* Empty state */}
//           {jobs.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[28px]
//                 border
//                 border-dashed
//                 border-[var(--border)]
//                 p-12
//                 lg:p-20
//                 text-center
//               "
//             >
//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-br
//                   from-signal/5
//                   via-transparent
//                   to-transparent
//                 "
//               />

//               <div className="relative">
//                 <div
//                   className="
//                     mx-auto
//                     w-16
//                     h-16
//                     rounded-2xl
//                     border
//                     border-signal/30
//                     bg-signal/10
//                     flex
//                     items-center
//                     justify-center
//                     text-signal
//                     mb-6
//                   "
//                 >
//                   <FiClock size={28} />
//                 </div>

//                 <h3
//                   className="
//                     font-display
//                     text-2xl
//                     font-semibold
//                     text-[var(--fg)]
//                   "
//                 >
//                   No open roles right now
//                 </h3>

//                 <p
//                   className="
//                     mt-3
//                     max-w-md
//                     mx-auto
//                     text-[var(--fg)]/55
//                     leading-7
//                   "
//                 >
//                   We aren't hiring at the moment,
//                   but we'd still love to hear from you.
//                 </p>
//               </div>
//             </motion.div>
//           )}

//           {/* Job cards */}
//           <div className="space-y-5">
//             {jobs.map((job, index) => (
//               <motion.div
//                 key={job.id}
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   margin: '-80px',
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.08,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 whileHover={{
//                   y: -5,
//                 }}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[28px]
//                   border
//                   border-[var(--border)]
//                   bg-[var(--card)]
//                   transition-all
//                   duration-500
//                   hover:border-signal/50
//                 "
//               >
//                 {/* Hover light */}
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     inset-0
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-opacity
//                     duration-500
//                     bg-gradient-to-r
//                     from-signal/[0.07]
//                     via-transparent
//                     to-transparent
//                   "
//                 />

//                 <div className="relative p-7 lg:p-9">

//                   <div
//                     className="
//                       flex
//                       flex-col
//                       lg:flex-row
//                       lg:items-center
//                       gap-8
//                     "
//                   >

//                     {/* Number */}
//                     <div
//                       className="
//                         hidden
//                         lg:flex
//                         w-16
//                         h-16
//                         shrink-0
//                         rounded-2xl
//                         border
//                         border-[var(--border)]
//                         items-center
//                         justify-center
//                         font-mono
//                         text-sm
//                         text-[var(--fg)]/35
//                         group-hover:text-signal
//                         group-hover:border-signal/40
//                         transition-all
//                         duration-300
//                       "
//                     >
//                       {String(index + 1).padStart(2, '0')}
//                     </div>

//                     {/* Main content */}
//                     <div className="flex-1">

//                       <div
//                         className="
//                           flex
//                           flex-wrap
//                           items-center
//                           gap-3
//                           mb-4
//                         "
//                       >
//                         <span
//                           className="
//                             inline-flex
//                             items-center
//                             gap-2
//                             rounded-full
//                             border
//                             border-signal/30
//                             bg-signal/10
//                             px-3
//                             py-1.5
//                             text-[10px]
//                             font-mono
//                             uppercase
//                             tracking-[0.15em]
//                             text-signal
//                           "
//                         >
//                           <span
//                             className="
//                               w-1.5
//                               h-1.5
//                               rounded-full
//                               bg-signal
//                               shadow-[0_0_10px_var(--signal)]
//                             "
//                           />

//                           Open
//                         </span>

//                         <span
//                           className="
//                             lg:hidden
//                             font-mono
//                             text-xs
//                             text-[var(--fg)]/30
//                           "
//                         >
//                           #{String(index + 1).padStart(2, '0')}
//                         </span>
//                       </div>

//                       <h3
//                         className="
//                           font-display
//                           text-2xl
//                           lg:text-3xl
//                           font-semibold
//                           text-[var(--fg)]
//                           group-hover:text-signal
//                           transition-colors
//                           duration-300
//                         "
//                       >
//                         {job.title}
//                       </h3>

//                       {/* Meta */}
//                       <div
//                         className="
//                           mt-5
//                           flex
//                           flex-wrap
//                           gap-2
//                         "
//                       >
//                         <span
//                           className="
//                             inline-flex
//                             items-center
//                             gap-2
//                             rounded-xl
//                             border
//                             border-[var(--border)]
//                             px-3
//                             py-2
//                             text-xs
//                             text-[var(--fg)]/55
//                           "
//                         >
//                           <FiBriefcase size={13} />
//                           {job.department}
//                         </span>

//                         <span
//                           className="
//                             inline-flex
//                             items-center
//                             gap-2
//                             rounded-xl
//                             border
//                             border-[var(--border)]
//                             px-3
//                             py-2
//                             text-xs
//                             text-[var(--fg)]/55
//                           "
//                         >
//                           <FiMapPin size={13} />
//                           {job.location}
//                         </span>

//                         <span
//                           className="
//                             inline-flex
//                             items-center
//                             gap-2
//                             rounded-xl
//                             border
//                             border-[var(--border)]
//                             px-3
//                             py-2
//                             text-xs
//                             text-[var(--fg)]/55
//                           "
//                         >
//                           <FiClock size={13} />
//                           {job.employmentType}
//                         </span>
//                       </div>

//                       <p
//                         className="
//                           mt-6
//                           max-w-3xl
//                           text-sm
//                           lg:text-base
//                           leading-7
//                           text-[var(--fg)]/55
//                         "
//                       >
//                         {job.description}
//                       </p>
//                     </div>

//                     {/* Arrow */}
//                     <div
//                       className="
//                         hidden
//                         lg:flex
//                         w-14
//                         h-14
//                         shrink-0
//                         rounded-full
//                         border
//                         border-[var(--border)]
//                         items-center
//                         justify-center
//                         text-[var(--fg)]/30
//                         group-hover:text-signal
//                         group-hover:border-signal
//                         group-hover:bg-signal/10
//                         group-hover:translate-x-1
//                         transition-all
//                         duration-300
//                       "
//                     >
//                       <FiArrowRight size={20} />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Bottom accent */}
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     h-px
//                     w-0
//                     bg-signal
//                     group-hover:w-full
//                     transition-all
//                     duration-700
//                   "
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           APPLICATION FORM
//       ========================================================= */}

//       <section className="relative pb-32 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto">

//           <div
//             className="
//               relative
//               overflow-hidden
//               rounded-[32px]
//               border
//               border-[var(--border)]
//               bg-[var(--card)]
//             "
//           >

//             {/* Background decoration */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -top-40
//                 right-[-100px]
//                 w-[450px]
//                 h-[450px]
//                 rounded-full
//                 bg-signal/10
//                 blur-[120px]
//               "
//             />

//             <div className="relative p-7 lg:p-12">

//               {/* Header */}
//               <div className="max-w-2xl mb-12">
//                 <Eyebrow>Application</Eyebrow>

//                 <h2
//                   className="
//                     font-display
//                     font-bold
//                     text-[clamp(2rem,4vw,3.25rem)]
//                     leading-tight
//                     text-[var(--fg)]
//                     mt-4
//                   "
//                 >
//                   Tell us about
//                   <span className="text-signal">
//                     {' '}yourself.
//                   </span>
//                 </h2>

//                 <p
//                   className="
//                     mt-4
//                     text-[var(--fg)]/55
//                     leading-7
//                   "
//                 >
//                   Complete each step to submit your
//                   application. Your information will be
//                   reviewed by our team.
//                 </p>
//               </div>

//               {/* =================================================
//                   CHECKBOX PROGRESS
//               ================================================= */}

//               <div
//                 className="
//                   mb-12
//                   overflow-x-auto
//                   pb-3
//                 "
//               >
//                 <div
//                   className="
//                     flex
//                     items-center
//                     min-w-max
//                   "
//                 >
//                   {[
//                     'Personal',
//                     'Education',
//                     'Resume',
//                   ].map((label, index) => {
//                     const current = index + 1
//                     const active = step >= current

//                     return (
//                       <div
//                         key={label}
//                         className="flex items-center"
//                       >
//                         <motion.div
//                           whileHover={{
//                             scale: 1.06,
//                           }}
//                           animate={
//                             active
//                               ? {
//                                   boxShadow: [
//                                     '0 0 0 rgba(34,211,238,0)',
//                                     '0 0 25px rgba(34,211,238,.25)',
//                                     '0 0 0 rgba(34,211,238,0)',
//                                   ],
//                                 }
//                               : {}
//                           }
//                           transition={{
//                             duration: 2,
//                             repeat: active
//                               ? Infinity
//                               : 0,
//                           }}
//                           className={`
//                             relative
//                             w-12
//                             h-12
//                             lg:w-14
//                             lg:h-14
//                             rounded-2xl
//                             flex
//                             items-center
//                             justify-center
//                             border
//                             overflow-hidden
//                             transition-all
//                             duration-500
//                             ${
//                               active
//                                 ? 'bg-signal border-signal text-white'
//                                 : 'border-[var(--border)] bg-[var(--fg)]/[0.03] text-[var(--fg)]/30'
//                             }
//                           `}
//                         >
//                           {active && (
//                             <motion.div
//                               className="
//                                 absolute
//                                 inset-0
//                                 bg-white/10
//                               "
//                               animate={{
//                                 x: ['-100%', '100%'],
//                               }}
//                               transition={{
//                                 duration: 1.5,
//                                 repeat: Infinity,
//                                 ease: 'linear',
//                               }}
//                             />
//                           )}

//                           <span className="relative z-10">
//                             {active ? (
//                               <FiCheckCircle size={19} />
//                             ) : (
//                               current
//                             )}
//                           </span>
//                         </motion.div>

//                         <div className="ml-3 mr-5 lg:mr-7">
//                           <h4
//                             className={`
//                               font-medium
//                               text-sm
//                               ${
//                                 active
//                                   ? 'text-signal'
//                                   : 'text-[var(--fg)]/35'
//                               }
//                             `}
//                           >
//                             {label}
//                           </h4>

//                           <p
//                             className="
//                               text-[10px]
//                               font-mono
//                               uppercase
//                               tracking-wider
//                               text-[var(--fg)]/30
//                               mt-1
//                             "
//                           >
//                             Step {current}
//                           </p>
//                         </div>

//                         {current !== 3 && (
//                           <div
//                             className="
//                               w-12
//                               lg:w-20
//                               h-px
//                               bg-[var(--border)]
//                               mr-5
//                               lg:mr-7
//                               relative
//                               overflow-hidden
//                             "
//                           >
//                             {step > current && (
//                               <motion.div
//                                 initial={{
//                                   width: 0,
//                                 }}
//                                 animate={{
//                                   width: '100%',
//                                 }}
//                                 transition={{
//                                   duration: 0.5,
//                                 }}
//                                 className="
//                                   absolute
//                                   inset-y-0
//                                   left-0
//                                   bg-signal
//                                 "
//                               />
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     )
//                   })}
//                 </div>
//               </div>

//               {/* =================================================
//                   STEP 1
//               ================================================= */}

//               <AnimatePresence mode="wait">
//                 {step === 1 && (
//                   <motion.div
//                     key="step1"
//                     variants={cardAnim}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                   >
//                     <div
//                       className="
//                         rounded-[24px]
//                         border
//                         border-[var(--border)]
//                         bg-[var(--fg)]/[0.02]
//                         p-6
//                         lg:p-9
//                       "
//                     >
//                       <div className="mb-8">
//                         <span
//                           className="
//                             font-mono
//                             text-[10px]
//                             uppercase
//                             tracking-[0.2em]
//                             text-signal
//                           "
//                         >
//                           01 / Personal
//                         </span>

//                         <h3
//                           className="
//                             font-display
//                             text-2xl
//                             font-semibold
//                             text-[var(--fg)]
//                             mt-2
//                           "
//                         >
//                           Start with the basics
//                         </h3>
//                       </div>

//                       <DynamicForm
//                         sections={step1Sections}
//                         submitLabel="Continue"
//                         onSubmit={(values) => {
//                           setStep(2)
//                         }}
//                       />
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* =================================================
//                   STEP 2
//               ================================================= */}

//               <AnimatePresence mode="wait">
//                 {step === 2 && (
//                   <motion.div
//                     key="step2"
//                     variants={cardAnim}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                   >
//                     <div
//                       className="
//                         rounded-[24px]
//                         border
//                         border-[var(--border)]
//                         bg-[var(--fg)]/[0.02]
//                         p-6
//                         lg:p-9
//                       "
//                     >
//                       <div className="mb-8">
//                         <span
//                           className="
//                             font-mono
//                             text-[10px]
//                             uppercase
//                             tracking-[0.2em]
//                             text-signal
//                           "
//                         >
//                           02 / Education
//                         </span>

//                         <h3
//                           className="
//                             font-display
//                             text-2xl
//                             font-semibold
//                             text-[var(--fg)]
//                             mt-2
//                           "
//                         >
//                           Tell us about your background
//                         </h3>
//                       </div>

//                       <DynamicForm
//                         sections={step2Sections}
//                         submitLabel="Continue"
//                         onSubmit={(values) => {
//                           setStep(3)
//                         }}
//                       />
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* =================================================
//                   STEP 3
//               ================================================= */}

//               <AnimatePresence mode="wait">
//                 {step === 3 && (
//                   <motion.div
//                     key="step3"
//                     variants={cardAnim}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                   >
//                     <div
//                       className="
//                         rounded-[24px]
//                         border
//                         border-[var(--border)]
//                         bg-[var(--fg)]/[0.02]
//                         p-6
//                         lg:p-9
//                       "
//                     >
//                       <div className="mb-8">
//                         <span
//                           className="
//                             font-mono
//                             text-[10px]
//                             uppercase
//                             tracking-[0.2em]
//                             text-signal
//                           "
//                         >
//                           03 / Resume
//                         </span>

//                         <h3
//                           className="
//                             font-display
//                             text-2xl
//                             font-semibold
//                             text-[var(--fg)]
//                             mt-2
//                           "
//                         >
//                           Almost there
//                         </h3>
//                       </div>

//                       <DynamicForm
//                         sections={step3Sections}
//                         submitLabel="Submit Application"
//                         onSubmit={handleSubmit}
//                       />
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           BENEFITS
//       ========================================================= */}

//       <BenefitsGrid
//         benefits={jobBenefits}
//         title="Why Work at DesFlyer"
//       />

//       {/* =========================================================
//           FAQ
//       ========================================================= */}

//       <FAQ
//         items={jobFaqs}
//         eyebrow="Careers FAQ"
//         title="Questions About Working Here"
//       />

//       {/* =========================================================
//           CONTACT
//       ========================================================= */}

//       {/* Contact section intentionally preserved from your original */}
//     </>
//   )
// }













import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiClock,
  FiMapPin,
  FiBriefcase,
  FiArrowUpRight,
  FiCheckCircle,
} from 'react-icons/fi'

import Seo from '../../lib/Seo'
import Eyebrow from '../../components/ui/Eyebrow'
import DynamicForm from '../../components/form/DynamicForm'
import BenefitsGrid from '../../components/BenefitsGrid'
import FAQ from '../../components/FAQ'

import { jobFormSections } from '../../data/jobForm'
import { jobBenefits, jobFaqs } from '../../data/opportunitiesContent'
import { api } from '../../lib/api'
import { useJobOpenings } from '../../store/openingsStore'

export default function JobsPage() {
  const allOpenings = useJobOpenings()

  const jobs = allOpenings.filter(
    (o) => o.status === 'Open'
  )

  const [step, setStep] = useState(1)

  async function handleSubmit(values) {
    await api.submitApplication({
      type: 'job',
      ...values,
      resumeFileName: values.resume?.name,
    })
  }

  // ---------------------------------------------------------
  // EXISTING FORM STRUCTURE — NOT CHANGED
  // ---------------------------------------------------------

  const step1Sections = jobFormSections.slice(0, 1)
  const step2Sections = jobFormSections.slice(1, 2)
  const step3Sections = jobFormSections.slice(2)

  const cardAnim = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.35,
      },
    },
  }

  return (
    <>
      <Seo />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">
          <Eyebrow>Careers</Eyebrow>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              mt-4
              font-display
              font-bold
              text-[clamp(2.5rem,6vw,4.5rem)]
              leading-[0.95]
              text-[var(--fg)]
            "
          >
            Build the
            <span className="block text-signal">
              Future With Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="
              mt-8
              max-w-2xl
              text-lg
              text-[var(--fg)]/65
              leading-8
            "
          >
            Join a passionate team creating modern software,
            AI products and digital experiences used by
            businesses around the world.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          CURRENT OPENINGS
          COMPLETELY REDESIGNED
      ===================================================== */}

      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">

          <div className="mb-12">
            <Eyebrow>Open Positions</Eyebrow>

            <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2
                  className="
                    font-display
                    font-bold
                    text-3xl
                    lg:text-4xl
                    text-[var(--fg)]
                  "
                >
                  Find your next opportunity.
                </h2>

                <p className="mt-4 max-w-2xl text-[var(--fg)]/60 leading-7">
                  Explore the roles where your skills can make
                  a real impact at DesFlyer.
                </p>
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-signal/30
                  bg-signal/5
                  px-4
                  py-2
                  text-xs
                  font-mono
                  text-signal
                  self-start
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-signal
                      opacity-60
                    "
                  />
                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-signal
                    "
                  />
                </span>

                {jobs.length} OPEN ROLE{jobs.length !== 1 ? 'S' : ''}
              </div>
            </div>
          </div>

          {jobs.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-[28px]
                border
                border-dashed
                border-[var(--border)]
                p-12
                lg:p-20
                text-center
                bg-[var(--card)]/40
              "
            >
              <div
                className="
                  mx-auto
                  mb-6
                  w-16
                  h-16
                  rounded-2xl
                  border
                  border-signal/30
                  bg-signal/10
                  flex
                  items-center
                  justify-center
                  text-signal
                "
              >
                <FiClock size={28} />
              </div>

              <h3
                className="
                  font-display
                  text-2xl
                  font-semibold
                  text-[var(--fg)]
                "
              >
                No Open Roles
              </h3>

              <p
                className="
                  mt-3
                  max-w-md
                  mx-auto
                  text-[var(--fg)]/55
                  leading-7
                "
              >
                We aren't hiring at the moment,
                but we'd still love to hear from you.
              </p>
            </motion.div>
          )}

          {jobs.length > 0 && (
            <div className="grid gap-5">

              {jobs.map((job, index) => (
                <motion.article
                  key={job.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    p-7
                    lg:p-9
                    transition-all
                    duration-500
                    hover:border-signal/40
                    hover:-translate-y-1
                  "
                >

                  {/* subtle animated background */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      w-64
                      h-64
                      rounded-full
                      bg-signal/5
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:bg-signal/10
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-center
                      gap-8
                    "
                  >

                    {/* NUMBER */}

                    <div
                      className="
                        hidden
                        lg:flex
                        w-14
                        h-14
                        shrink-0
                        rounded-2xl
                        border
                        border-[var(--border)]
                        items-center
                        justify-center
                        font-mono
                        text-xs
                        text-[var(--fg)]/35
                        group-hover:text-signal
                        group-hover:border-signal/30
                        transition-all
                        duration-300
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* MAIN CONTENT */}

                    <div className="flex-1 min-w-0">

                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-x-5
                          gap-y-2
                          text-xs
                          font-mono
                          text-[var(--fg)]/45
                        "
                      >
                        <span className="flex items-center gap-2">
                          <FiBriefcase
                            size={13}
                            className="text-signal"
                          />
                          {job.department}
                        </span>

                        <span className="flex items-center gap-2">
                          <FiMapPin
                            size={13}
                            className="text-signal"
                          />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-2">
                          <FiClock
                            size={13}
                            className="text-signal"
                          />
                          {job.employmentType}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-5
                          font-display
                          text-2xl
                          lg:text-3xl
                          font-semibold
                          text-[var(--fg)]
                          group-hover:text-signal
                          transition-colors
                          duration-300
                        "
                      >
                        {job.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-3xl
                          text-[var(--fg)]/60
                          leading-7
                        "
                      >
                        {job.description}
                      </p>

                    </div>

                    {/* RIGHT SIDE */}

                    <div
                      className="
                        flex
                        lg:flex-col
                        items-center
                        lg:items-end
                        justify-between
                        gap-5
                        shrink-0
                      "
                    >

                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-signal/30
                          bg-signal/10
                          px-4
                          py-2
                          text-[11px]
                          font-mono
                          tracking-wider
                          text-signal
                        "
                      >
                        <FiCheckCircle size={13} />
                        OPEN
                      </span>

                      <motion.div
                        whileHover={{
                          x: 4,
                        }}
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-medium
                          text-[var(--fg)]/55
                          group-hover:text-signal
                          transition-colors
                        "
                      >
                        Apply now
                        <FiArrowUpRight size={16} />
                      </motion.div>

                    </div>

                  </div>

                  {/* bottom accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-signal
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </motion.article>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          APPLICATION FORM
      ===================================================== */}

      <section className="pb-32 px-6 lg:px-10">
        <div className="max-w-shell mx-auto">

          <div className="text-center">
            <Eyebrow>Application</Eyebrow>

            <h2
              className="
                mt-4
                font-display
                font-bold
                text-3xl
                lg:text-4xl
                text-[var(--fg)]
              "
            >
              Complete Your Application
            </h2>

            <p
              className="
                mt-4
                text-[var(--fg)]/55
              "
            >
              Finish one step to unlock the next.
            </p>
          </div>

          {/* =================================================
              CENTERED STEP PROGRESS
          ================================================= */}

          <div className="mt-14 flex justify-center">
            <div
              className="
                w-full
                max-w-3xl
                flex
                items-center
                justify-center
              "
            >

              {[
                'Personal',
                'Education',
                'Resume',
              ].map((label, index) => {

                const current = index + 1
                const active = step >= current
                const completed = step > current

                return (
                  <div
                    key={label}
                    className="
                      flex
                      items-center
                      flex-1
                      last:flex-none
                    "
                  >

                    {/* STEP */}

                    <div
                      className="
                        flex
                        flex-col
                        items-center
                        min-w-[72px]
                      "
                    >

                      <motion.div
                        animate={
                          active
                            ? {
                                scale: [1, 1.04, 1],
                              }
                            : {
                                scale: 1,
                              }
                        }
                        transition={{
                          duration: 0.6,
                        }}
                        className={`
                          relative
                          w-14
                          h-14
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          border
                          transition-all
                          duration-500
                          ${
                            active
                              ? 'border-signal bg-signal text-white shadow-[0_0_30px_rgba(46,111,255,0.25)]'
                              : 'border-[var(--border)] bg-[var(--card)] text-[var(--fg)]/35'
                          }
                        `}
                      >

                        {active && (
                          <motion.div
                            initial={{
                              scale: 0.5,
                              opacity: 0,
                            }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                            }}
                            className="
                              absolute
                              inset-0
                              rounded-2xl
                              bg-signal/20
                              blur-lg
                            "
                          />
                        )}

                        <span
                          className="
                            relative
                            z-10
                            text-base
                            font-semibold
                          "
                        >
                          {completed || current < step
                            ? '✓'
                            : current}
                        </span>

                      </motion.div>

                      <span
                        className={`
                          mt-3
                          text-xs
                          font-medium
                          transition-colors
                          duration-300
                          ${
                            active
                              ? 'text-signal'
                              : 'text-[var(--fg)]/35'
                          }
                        `}
                      >
                        {label}
                      </span>

                    </div>

                    {/* CONNECTOR */}

                    {current !== 3 && (
                      <div
                        className="
                          flex-1
                          h-px
                          mx-3
                          bg-[var(--border)]
                          relative
                          overflow-hidden
                          min-w-[35px]
                        "
                      >
                        <motion.div
                          initial={{
                            width: '0%',
                          }}
                          animate={{
                            width:
                              step > current
                                ? '100%'
                                : '0%',
                          }}
                          transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                          }}
                          className="
                            absolute
                            inset-y-0
                            left-0
                            bg-signal
                          "
                        />
                      </div>
                    )}

                  </div>
                )
              })}

            </div>
          </div>

          {/* =================================================
              FORM AREA
          ================================================= */}

          <div className="mt-14 max-w-4xl mx-auto">

            <AnimatePresence mode="wait">

              {/* STEP 1 */}

              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={cardAnim}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      p-6
                      sm:p-8
                      lg:p-10
                    "
                  >

                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-signal
                        to-transparent
                      "
                    />

                    <div className="mb-8">
                      <span
                        className="
                          font-mono
                          text-[11px]
                          uppercase
                          tracking-[0.2em]
                          text-signal
                        "
                      >
                        Step 01
                      </span>

                      <h3
                        className="
                          mt-2
                          font-display
                          text-2xl
                          font-semibold
                          text-[var(--fg)]
                        "
                      >
                        Personal Information
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-[var(--fg)]/50
                        "
                      >
                        Tell us a little about yourself.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]/30
                        p-5
                        sm:p-7
                      "
                    >
                      <DynamicForm
                        sections={step1Sections}
                        submitLabel="Continue"
                        onSubmit={() => {
                          setStep(2)
                        }}
                      />
                    </div>

                  </div>

                </motion.div>
              )}

              {/* STEP 2 */}

              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={cardAnim}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      p-6
                      sm:p-8
                      lg:p-10
                    "
                  >

                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-signal
                        to-transparent
                      "
                    />

                    <div className="mb-8">
                      <span
                        className="
                          font-mono
                          text-[11px]
                          uppercase
                          tracking-[0.2em]
                          text-signal
                        "
                      >
                        Step 02
                      </span>

                      <h3
                        className="
                          mt-2
                          font-display
                          text-2xl
                          font-semibold
                          text-[var(--fg)]
                        "
                      >
                        Education & Background
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-[var(--fg)]/50
                        "
                      >
                        Share your education and professional background.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]/30
                        p-5
                        sm:p-7
                      "
                    >
                      <DynamicForm
                        sections={step2Sections}
                        submitLabel="Continue"
                        onSubmit={() => {
                          setStep(3)
                        }}
                      />
                    </div>

                  </div>

                </motion.div>
              )}

              {/* STEP 3 */}

              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={cardAnim}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      p-6
                      sm:p-8
                      lg:p-10
                    "
                  >

                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-signal
                        to-transparent
                      "
                    />

                    <div className="mb-8">
                      <span
                        className="
                          font-mono
                          text-[11px]
                          uppercase
                          tracking-[0.2em]
                          text-signal
                        "
                      >
                        Step 03
                      </span>

                      <h3
                        className="
                          mt-2
                          font-display
                          text-2xl
                          font-semibold
                          text-[var(--fg)]
                        "
                      >
                        Resume & Final Details
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-[var(--fg)]/50
                        "
                      >
                        Upload your resume and complete your application.
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]/30
                        p-5
                        sm:p-7
                      "
                    >
                      <DynamicForm
                        sections={step3Sections}
                        submitLabel="Submit Application"
                        onSubmit={handleSubmit}
                      />
                    </div>

                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <BenefitsGrid
        benefits={jobBenefits}
        title="Why Work at DesFlyer"
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <FAQ
        items={jobFaqs}
        eyebrow="Careers FAQ"
        title="Questions About Working Here"
      />
    </>
  )
}
