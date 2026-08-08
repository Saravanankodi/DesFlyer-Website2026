// // import { useState } from 'react'
// // import { motion } from 'framer-motion'
// // import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
// // import Seo from '../lib/Seo'
// // import Eyebrow from '../components/ui/Eyebrow'
// // import Button from '../components/ui/Button'
// // import FAQ from '../components/FAQ'
// // import { siteConfig } from '../data/siteConfig'

// // export default function Contact() {
// //   const [status, setStatus] = useState('idle')
// //   const [form, setForm] = useState({ name: '', email: '', message: '' })

// //   function handleChange(e) {
// //     setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
// //   }

// //   function handleSubmit(e) {
// //     e.preventDefault()
// //     // No backend yet — this is wired to a mock submit so the UI/UX is final
// //     // and a real endpoint can be dropped in via src/lib/api.js later.
// //     setStatus('sent')
// //   }

// //   return (
// //     <>
// //       <Seo
// //         title="Contact"
// //         description="Get in touch with DesFlyer — email, call, or send us a message about your project."
// //         path="/contact"
// //       />
// //       <section className="pt-40 pb-28 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto grid lg:grid-cols-5 gap-16">
// //           <div className="lg:col-span-2">
// //             <Eyebrow>Get In Touch</Eyebrow>
// //             <h1 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.25rem)] text-[var(--fg)]">
// //               Let&rsquo;s talk about your project
// //             </h1>
// //             <p className="mt-6 text-[var(--fg)]/65 leading-relaxed max-w-sm">
// //               Tell us what you&rsquo;re building. We usually reply within one business day.
// //             </p>

// //             <div className="mt-10 flex flex-col gap-6">
// //               <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
// //                 <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal group-hover:border-signal transition-colors">
// //                   <FiMail size={16} />
// //                 </span>
// //                 <span className="text-[var(--fg)]/80 group-hover:text-signal transition-colors">
// //                   {siteConfig.email}
// //                 </span>
// //               </a>
// //               <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
// //                 <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal group-hover:border-signal transition-colors">
// //                   <FiPhone size={16} />
// //                 </span>
// //                 <span className="text-[var(--fg)]/80 group-hover:text-signal transition-colors">
// //                   {siteConfig.phone}
// //                 </span>
// //               </a>
// //               <div className="flex items-center gap-4">
// //                 <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal">
// //                   <FiMapPin size={16} />
// //                 </span>
// //                 <span className="text-[var(--fg)]/80">{siteConfig.location}</span>
// //               </div>
// //             </div>
// //           </div>

// //           <motion.form
// //             initial={{ opacity: 0, y: 24 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
// //             onSubmit={handleSubmit}
// //             className="lg:col-span-3 border border-[var(--border)] rounded-2xl p-8 lg:p-10 flex flex-col gap-6"
// //           >
// //             <div className="grid sm:grid-cols-2 gap-6">
// //               <div>
// //                 <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
// //                   Name
// //                 </label>
// //                 <input
// //                   id="name"
// //                   name="name"
// //                   required
// //                   value={form.name}
// //                   onChange={handleChange}
// //                   className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none transition-colors"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
// //                   Email
// //                 </label>
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   required
// //                   value={form.email}
// //                   onChange={handleChange}
// //                   className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none transition-colors"
// //                 />
// //               </div>
// //             </div>
// //             <div>
// //               <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
// //                 Project details
// //               </label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 rows={5}
// //                 required
// //                 value={form.message}
// //                 onChange={handleChange}
// //                 className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none transition-colors resize-none"
// //               />
// //             </div>
// //             <Button type="submit" className="self-start">
// //               Send Message <FiSend />
// //             </Button>
// //             {status === 'sent' && (
// //               <p role="status" className="text-sm text-signal">
// //                 Message captured. (Connect a backend in src/lib/api.js to send this for real.)
// //               </p>
// //             )}
// //           </motion.form>
// //         </div>
// //       </section>

// //       <FAQ />
// //     </>
// //   )
// // }



// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiSend,
// } from 'react-icons/fi'
// import Seo from '../lib/Seo'
// import Eyebrow from '../components/ui/Eyebrow'
// import Button from '../components/ui/Button'
// import FAQ from '../components/FAQ'
// import { siteConfig } from '../data/siteConfig'

// export default function Contact() {
//   const [status, setStatus] = useState('idle')
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })

//   function handleChange(e) {
//     setForm((f) => ({
//       ...f,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   function handleSubmit(e) {
//     e.preventDefault()

//     // No backend yet — mock submit
//     setStatus('sent')
//   }

//   return (
//     <>
//       <Seo
//         title="Contact"
//         description="Get in touch with DesFlyer — email, call, or send us a message about your project."
//         path="/contact"
//       />

//       <section className="pt-40 pb-28 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto grid lg:grid-cols-5 gap-16">

//           {/* LEFT SIDE — unchanged */}
//           <div className="lg:col-span-2">
//             <Eyebrow>Get In Touch</Eyebrow>

//             <h1 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.25rem)] text-[var(--fg)]">
//               Let&rsquo;s talk about your project
//             </h1>

//             <p className="mt-6 text-[var(--fg)]/65 leading-relaxed max-w-sm">
//               Tell us what you&rsquo;re building. We usually reply within one business day.
//             </p>

//             <div className="mt-10 flex flex-col gap-6">

//               <a
//                 href={`mailto:${siteConfig.email}`}
//                 className="flex items-center gap-4 group"
//               >
//                 <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal group-hover:border-signal transition-colors">
//                   <FiMail size={16} />
//                 </span>

//                 <span className="text-[var(--fg)]/80 group-hover:text-signal transition-colors">
//                   {siteConfig.email}
//                 </span>
//               </a>

//               <a
//                 href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
//                 className="flex items-center gap-4 group"
//               >
//                 <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal group-hover:border-signal transition-colors">
//                   <FiPhone size={16} />
//                 </span>

//                 <span className="text-[var(--fg)]/80 group-hover:text-signal transition-colors">
//                   {siteConfig.phone}
//                 </span>
//               </a>

//               <div className="flex items-center gap-4">
//                 <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal">
//                   <FiMapPin size={16} />
//                 </span>

//                 <span className="text-[var(--fg)]/80">
//                   {siteConfig.location}
//                 </span>
//               </div>

//             </div>
//           </div>

//           {/* =====================================================
//               NEW FORM DESIGN
//           ===================================================== */}

//           <motion.form
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.6,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             onSubmit={handleSubmit}
//             className="
//               lg:col-span-3
//               relative
//               overflow-hidden
//               rounded-[2rem]
//               border
//               border-[var(--border)]
//               bg-[var(--fg)]/[0.025]
//               p-7
//               lg:p-10
//             "
//           >

//             {/* Decorative corner */}
//             <div
//               className="
//                 absolute
//                 -top-16
//                 -right-16
//                 w-40
//                 h-40
//                 rounded-full
//                 border
//                 border-[var(--border)]
//                 pointer-events-none
//               "
//             />

//             <div
//               className="
//                 absolute
//                 top-0
//                 right-0
//                 w-20
//                 h-20
//                 bg-signal/[0.035]
//                 rounded-bl-[4rem]
//                 pointer-events-none
//               "
//             />

//             <div className="relative z-10">

//               {/* FORM HEADER */}
//               <div className="flex items-start justify-between mb-10">

//                 <div>
//                   <div className="flex items-center gap-3">

//                     <span className="w-2 h-2 rounded-full bg-signal" />

//                     <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
//                       Project Brief
//                     </span>

//                   </div>

//                   <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-[var(--fg)]">
//                     Tell us about it.
//                   </h2>

//                   <p className="mt-2 text-sm text-[var(--fg)]/40">
//                     A few details are enough to get started.
//                   </p>
//                 </div>

//                 <span className="font-mono text-[10px] text-[var(--fg)]/20">
//                   01
//                 </span>

//               </div>

//               {/* NAME */}
//               <div className="mb-7">

//                 <div className="flex items-center justify-between mb-2">

//                   <label
//                     htmlFor="name"
//                     className="
//                       font-mono
//                       text-[10px]
//                       uppercase
//                       tracking-[0.14em]
//                       text-[var(--fg)]/45
//                     "
//                   >
//                     Name
//                   </label>

//                   <span className="text-[10px] text-signal">
//                     Required
//                   </span>

//                 </div>

//                 <div className="relative">

//                   <input
//                     id="name"
//                     name="name"
//                     required
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     className="
//                       w-full
//                       bg-[var(--fg)]/[0.025]
//                       border
//                       border-[var(--border)]
//                       rounded-xl
//                       px-4
//                       py-4
//                       text-sm
//                       text-[var(--fg)]
//                       placeholder:text-[var(--fg)]/20
//                       outline-none
//                       focus:border-signal
//                       focus:bg-signal/[0.025]
//                       transition-all
//                       duration-300
//                     "
//                   />

//                   <span
//                     className="
//                       absolute
//                       bottom-0
//                       left-4
//                       right-4
//                       h-px
//                       bg-signal
//                       scale-x-0
//                       origin-left
//                       transition-transform
//                       duration-300
//                       pointer-events-none
//                     "
//                   />

//                 </div>

//               </div>

//               {/* EMAIL */}
//               <div className="mb-7">

//                 <div className="flex items-center justify-between mb-2">

//                   <label
//                     htmlFor="email"
//                     className="
//                       font-mono
//                       text-[10px]
//                       uppercase
//                       tracking-[0.14em]
//                       text-[var(--fg)]/45
//                     "
//                   >
//                     Email
//                   </label>

//                   <span className="text-[10px] text-signal">
//                     Required
//                   </span>

//                 </div>

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className="
//                     w-full
//                     bg-[var(--fg)]/[0.025]
//                     border
//                     border-[var(--border)]
//                     rounded-xl
//                     px-4
//                     py-4
//                     text-sm
//                     text-[var(--fg)]
//                     placeholder:text-[var(--fg)]/20
//                     outline-none
//                     focus:border-signal
//                     focus:bg-signal/[0.025]
//                     transition-all
//                     duration-300
//                   "
//                 />

//               </div>

//               {/* MESSAGE */}
//               <div className="mb-8">

//                 <div className="flex items-center justify-between mb-2">

//                   <label
//                     htmlFor="message"
//                     className="
//                       font-mono
//                       text-[10px]
//                       uppercase
//                       tracking-[0.14em]
//                       text-[var(--fg)]/45
//                     "
//                   >
//                     Project details
//                   </label>

//                   <span className="font-mono text-[9px] text-[var(--fg)]/20">
//                     03
//                   </span>

//                 </div>

//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   required
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="Tell us what you're building..."
//                   className="
//                     w-full
//                     bg-[var(--fg)]/[0.025]
//                     border
//                     border-[var(--border)]
//                     rounded-xl
//                     px-4
//                     py-4
//                     text-sm
//                     text-[var(--fg)]
//                     placeholder:text-[var(--fg)]/20
//                     outline-none
//                     focus:border-signal
//                     focus:bg-signal/[0.025]
//                     transition-all
//                     duration-300
//                     resize-none
//                   "
//                 />

//               </div>

//               {/* FORM FOOTER */}
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

//                 <div>

//                   {status === 'sent' ? (
//                     <motion.div
//                       initial={{
//                         opacity: 0,
//                         x: -10,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       className="flex items-center gap-2"
//                     >

//                       <span className="w-2 h-2 rounded-full bg-signal" />

//                       <p
//                         role="status"
//                         className="
//                           font-mono
//                           text-[9px]
//                           uppercase
//                           tracking-[0.12em]
//                           text-signal
//                         "
//                       >
//                         Message received
//                       </p>

//                     </motion.div>
//                   ) : (
//                     <p
//                       className="
//                         max-w-[180px]
//                         font-mono
//                         text-[9px]
//                         uppercase
//                         tracking-[0.1em]
//                         leading-relaxed
//                         text-[var(--fg)]/25
//                       "
//                     >
//                       Your information stays private.
//                     </p>
//                   )}

//                 </div>

//                 <Button
//                   type="submit"
//                   className="
//                     group
//                     self-start
//                     sm:self-auto
//                     !rounded-xl
//                     !px-6
//                     !py-3.5
//                   "
//                 >

//                   <span>
//                     {status === 'sent'
//                       ? 'Message Sent'
//                       : 'Send Message'}
//                   </span>

//                   {status === 'sent' ? (
//                     <span className="ml-2">
//                       ✓
//                     </span>
//                   ) : (
//                     <FiSend
//                       size={14}
//                       className="
//                         ml-2
//                         transition-transform
//                         duration-300
//                         group-hover:translate-x-1
//                       "
//                     />
//                   )}

//                 </Button>

//               </div>

//               {/* SUCCESS MESSAGE */}
//               {status === 'sent' && (
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     y: 8,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   className="
//                     mt-5
//                     rounded-xl
//                     border
//                     border-signal/20
//                     bg-signal/[0.04]
//                     px-4
//                     py-3
//                   "
//                 >
//                   <p
//                     className="text-xs text-signal"
//                   >
//                     Message captured successfully. Connect your backend
//                     when you're ready.
//                   </p>
//                 </motion.div>
//               )}

//             </div>
//           </motion.form>
//         </div>
//       </section>

//       <FAQ />
//     </>
//   )
// }




import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from 'react-icons/fi'
import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import Button from '../components/ui/Button'
import FAQ from '../components/FAQ'
import { siteConfig } from '../data/siteConfig'

// Small helper: fires a burst of particles from the button on success
function Particles({ show }) {
  const particles = Array.from({ length: 10 })
  return (
    <AnimatePresence>
      {show && (
        <span className="pointer-events-none absolute inset-0">
          {particles.map((_, i) => {
            const angle = (i / particles.length) * Math.PI * 2
            const distance = 60 + Math.random() * 30
            return (
              <motion.span
                key={i}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: 0,
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  scale: 1,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-signal"
              />
            )
          })}
        </span>
      )}
    </AnimatePresence>
  )
}

// Wraps an input/textarea with a tilt-reactive glow that tracks the cursor
function FieldShell({ children, className = '' }) {
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    glowX.set(((e.clientX - rect.left) / rect.width) * 100)
    glowY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative group ${className}`}
    >
      <motion.div
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(160px circle at ${x}% ${y}%, var(--signal-glow, rgba(255,255,255,0.08)), transparent 70%)`
          ),
        }}
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
      {children}
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [focused, setFocused] = useState(null)

  // ---- 3D tilt for the whole form card ----
  const cardRef = useRef(null)
  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 18, mass: 0.6 })
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 18, mass: 0.6 })
  const cardScale = useSpring(1, { stiffness: 200, damping: 20 })
  const sheenX = useTransform(rotateY, [-8, 8], [0, 100])
  const sheenY = useTransform(rotateX, [8, -8], [0, 100])

  function handleCardMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rawRotateY.set(px * 10) // left/right tilt
    rawRotateX.set(-py * 10) // up/down tilt
  }

  function handleCardMouseEnter() {
    cardScale.set(1.012)
  }

  function handleCardMouseLeave() {
    rawRotateX.set(0)
    rawRotateY.set(0)
    cardScale.set(1)
  }

  function handleChange(e) {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    // No backend yet — mock submit
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 550)
  }

  const fieldBase = `
    w-full
    bg-[var(--fg)]/[0.025]
    border
    border-[var(--border)]
    rounded-xl
    px-4
    py-4
    text-sm
    text-[var(--fg)]
    placeholder:text-[var(--fg)]/20
    outline-none
    transition-all
    duration-300
    relative
  `

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with DesFlyer — email, call, or send us a message about your project."
        path="/contact"
      />

      <section className="pt-40 pb-28 px-6 lg:px-10 relative overflow-hidden">

        {/* Ambient floating orbs — drift slowly behind the content */}
        <motion.div
          aria-hidden
          animate={{
            x: [0, 30, -10, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-24 right-[8%] w-72 h-72 rounded-full bg-signal/[0.06] blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{
            x: [0, -25, 10, 0],
            y: [0, 25, -15, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="pointer-events-none absolute bottom-0 left-[4%] w-64 h-64 rounded-full bg-signal/[0.05] blur-3xl"
        />

        <div className="max-w-shell mx-auto grid lg:grid-cols-5 gap-16 relative">

          {/* LEFT SIDE — subtle entrance + hover lift on contact rows */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <Eyebrow>Get In Touch</Eyebrow>

            <h1 className="font-display font-bold text-[clamp(2.2rem,4.5vw,3.25rem)] text-[var(--fg)]">
              Let&rsquo;s talk about your project
            </h1>

            <p className="mt-6 text-[var(--fg)]/65 leading-relaxed max-w-sm">
              Tell us what you&rsquo;re building. We usually reply within one business day.
            </p>

            <div className="mt-10 flex flex-col gap-6">

              <motion.a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 group"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.span
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal group-hover:border-signal group-hover:shadow-[0_0_20px_-4px_var(--signal)] transition-[border-color,box-shadow] duration-300"
                >
                  <FiMail size={16} />
                </motion.span>

                <span className="text-[var(--fg)]/80 group-hover:text-signal transition-colors">
                  {siteConfig.email}
                </span>
              </motion.a>

              <motion.a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 group"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.span
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal group-hover:border-signal group-hover:shadow-[0_0_20px_-4px_var(--signal)] transition-[border-color,box-shadow] duration-300"
                >
                  <FiPhone size={16} />
                </motion.span>

                <span className="text-[var(--fg)]/80 group-hover:text-signal transition-colors">
                  {siteConfig.phone}
                </span>
              </motion.a>

              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-signal">
                  <FiMapPin size={16} />
                </span>

                <span className="text-[var(--fg)]/80">
                  {siteConfig.location}
                </span>
              </div>

            </div>
          </motion.div>

          {/* =====================================================
              FORM — 3D tilt card, glowing focus states, particle burst
          ===================================================== */}

          <motion.form
            ref={cardRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseMove={handleCardMouseMove}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            onSubmit={handleSubmit}
            style={{
              rotateX,
              rotateY,
              scale: cardScale,
              transformPerspective: 1200,
              transformStyle: 'preserve-3d',
            }}
            className="
              lg:col-span-3
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[var(--border)]
              bg-[var(--fg)]/[0.025]
              p-7
              lg:p-10
              will-change-transform
            "
          >

            {/* Moving sheen that follows the tilt — gives the glass a light-catching feel */}
            <motion.div
              aria-hidden
              style={{
                background: useTransform(
                  [sheenX, sheenY],
                  ([x, y]) =>
                    `radial-gradient(600px circle at ${x}% ${y}%, var(--fg-05, rgba(255,255,255,0.06)), transparent 60%)`
                ),
              }}
              className="absolute inset-0 pointer-events-none"
            />

            {/* Decorative corner — now drifts gently with its own float loop */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="
                absolute
                -top-16
                -right-16
                w-40
                h-40
                rounded-full
                border
                border-dashed
                border-[var(--border)]
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                top-0
                right-0
                w-20
                h-20
                bg-signal/[0.035]
                rounded-bl-[4rem]
                pointer-events-none
              "
            />

            <div className="relative z-10" style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>

              {/* FORM HEADER */}
              <div className="flex items-start justify-between mb-10">

                <div>
                  <div className="flex items-center gap-3">

                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-2 h-2 rounded-full bg-signal"
                    />

                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                      Project Brief
                    </span>

                  </div>

                  <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-[var(--fg)]">
                    Tell us about it.
                  </h2>

                  <p className="mt-2 text-sm text-[var(--fg)]/40">
                    A few details are enough to get started.
                  </p>
                </div>

                <span className="font-mono text-[10px] text-[var(--fg)]/20">
                  01
                </span>

              </div>

              {/* NAME */}
              <div className="mb-7" style={{ transform: 'translateZ(10px)' }}>

                <div className="flex items-center justify-between mb-2">

                  <label
                    htmlFor="name"
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.14em]
                      text-[var(--fg)]/45
                    "
                  >
                    Name
                  </label>

                  <span className="text-[10px] text-signal">
                    Required
                  </span>

                </div>

                <FieldShell>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Your name"
                    className={`${fieldBase} focus:border-signal focus:bg-signal/[0.025] ${
                      focused === 'name' ? 'shadow-[0_0_0_3px_var(--signal-ring,rgba(255,255,255,0.06))]' : ''
                    }`}
                  />

                  <motion.span
                    initial={false}
                    animate={{ scaleX: focused === 'name' ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="
                      absolute
                      bottom-0
                      left-4
                      right-4
                      h-px
                      bg-signal
                      origin-left
                      pointer-events-none
                    "
                  />
                </FieldShell>

              </div>

              {/* EMAIL */}
              <div className="mb-7" style={{ transform: 'translateZ(10px)' }}>

                <div className="flex items-center justify-between mb-2">

                  <label
                    htmlFor="email"
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.14em]
                      text-[var(--fg)]/45
                    "
                  >
                    Email
                  </label>

                  <span className="text-[10px] text-signal">
                    Required
                  </span>

                </div>

                <FieldShell>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="you@example.com"
                    className={`${fieldBase} focus:border-signal focus:bg-signal/[0.025] ${
                      focused === 'email' ? 'shadow-[0_0_0_3px_var(--signal-ring,rgba(255,255,255,0.06))]' : ''
                    }`}
                  />

                  <motion.span
                    initial={false}
                    animate={{ scaleX: focused === 'email' ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-4 right-4 h-px bg-signal origin-left pointer-events-none"
                  />
                </FieldShell>

              </div>

              {/* MESSAGE */}
              <div className="mb-8" style={{ transform: 'translateZ(10px)' }}>

                <div className="flex items-center justify-between mb-2">

                  <label
                    htmlFor="message"
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.14em]
                      text-[var(--fg)]/45
                    "
                  >
                    Project details
                  </label>

                  <span className="font-mono text-[9px] text-[var(--fg)]/20">
                    03
                  </span>

                </div>

                <FieldShell>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell us what you're building..."
                    className={`${fieldBase} resize-none focus:border-signal focus:bg-signal/[0.025] ${
                      focused === 'message' ? 'shadow-[0_0_0_3px_var(--signal-ring,rgba(255,255,255,0.06))]' : ''
                    }`}
                  />

                  <motion.span
                    initial={false}
                    animate={{ scaleX: focused === 'message' ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-4 right-4 h-px bg-signal origin-left pointer-events-none"
                  />
                </FieldShell>

              </div>

              {/* FORM FOOTER */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                style={{ transform: 'translateZ(20px)' }}
              >

                <div>

                  <AnimatePresence mode="wait">
                    {status === 'sent' ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <motion.span
                          animate={{ scale: [1, 1.6, 1] }}
                          transition={{ duration: 0.6 }}
                          className="w-2 h-2 rounded-full bg-signal"
                        />

                        <p
                          role="status"
                          className="
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.12em]
                            text-signal
                          "
                        >
                          Message received
                        </p>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                          max-w-[180px]
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[0.1em]
                          leading-relaxed
                          text-[var(--fg)]/25
                        "
                      >
                        Your information stays private.
                      </motion.p>
                    )}
                  </AnimatePresence>

                </div>

                <motion.div
                  className="relative self-start sm:self-auto"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Particles show={status === 'sent'} />

                  <Button
                    type="submit"
                    disabled={status === 'sending'}
                    className="
                      group
                      !rounded-xl
                      !px-6
                      !py-3.5
                    "
                  >

                    <span>
                      {status === 'sent'
                        ? 'Message Sent'
                        : status === 'sending'
                        ? 'Sending…'
                        : 'Send Message'}
                    </span>

                    {status === 'sent' ? (
                      <motion.span
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className="ml-2 inline-block"
                      >
                        ✓
                      </motion.span>
                    ) : status === 'sending' ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        className="ml-2 inline-block"
                      >
                        <FiSend size={14} />
                      </motion.span>
                    ) : (
                      <FiSend
                        size={14}
                        className="
                          ml-2
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    )}

                  </Button>
                </motion.div>

              </div>

              {/* SUCCESS MESSAGE */}
              <AnimatePresence>
                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="
                      mt-5
                      rounded-xl
                      border
                      border-signal/20
                      bg-signal/[0.04]
                      px-4
                      py-3
                    "
                  >
                    <p className="text-xs text-signal">
                      Message captured successfully. Connect your backend
                      when you're ready.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.form>
        </div>
      </section>

      <FAQ />
    </>
  )
}