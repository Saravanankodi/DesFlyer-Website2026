// import { motion } from 'framer-motion'
// import * as FiIcons from 'react-icons/fi'
// import { FiCheck, FiArrowRight } from 'react-icons/fi'
// import { Link } from 'react-router-dom'

// export default function ServiceFlipCard({ service, index }) {
//   const Icon = FiIcons[service.icon] || FiIcons.FiBox

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '-60px' }}
//       transition={{
//         duration: 0.5,
//         delay: (index % 4) * 0.06,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//       id={service.slug}
//       whileHover={{ y: -8 }}
//       className="group h-full"
//     >
//     <div
//   className="
//   relative
//   h-full
//   rounded-3xl
//   border
//   border-signal/20
//   bg-[#0b1120]/95
//   backdrop-blur-3xl
//   p-7
//   flex
//   flex-col
//   justify-between
//   overflow-hidden
//   transition-all
//   duration-500
//   hover:border-signal
//   hover:shadow-[0_25px_60px_-20px_rgba(46,111,255,.35)]
//   "
// >
//         {/* Glow */}
//         <div
//           className="
//           absolute
//           -right-16
//           -top-16
//           h-40
//           w-40
//           rounded-full
//           bg-signal/15
//           blur-3xl
//           opacity-0
//           group-hover:opacity-100
//           transition-opacity
//           duration-500
//           "
//         />

//         {/* Header */}
//         <div className="relative z-10 flex items-start justify-between">
//           <div>
//             <span className="font-display text-5xl font-bold text-signal/15">
//               {String(index + 1).padStart(2, '0')}
//             </span>

//             <h3 className="mt-3 font-display text-2xl font-bold text-[var(--fg)]">
//               {service.title}
//             </h3>

//             <p className="mt-2 text-sm text-signal">
//               Digital Solution
//             </p>
//           </div>

//           <div
//             className="
//             flex
//             h-14
//             w-14
//             items-center
//             justify-center
//             rounded-2xl
//             bg-signal/10
//             text-signal
//             "
//           >
//             <Icon size={26} />
//           </div>
//         </div>

//         {/* Description */}
//         <div className="relative z-10 mt-6">
//           <p className="text-sm leading-7 text-[var(--fg)]/70">
//             {service.body}
//           </p>

//           {service.benefits?.length > 0 && (
//             <ul className="mt-6 space-y-3">
//               {service.benefits.slice(0, 4).map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-start gap-3 text-sm text-[var(--fg)]/75"
//                 >
//                   <FiCheck
//                     className="mt-1 shrink-0 text-signal"
//                     size={15}
//                   />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="relative z-10 mt-8 flex items-center justify-between">
//           <Link
//             to="/contact"
//             className="
//             inline-flex
//             items-center
//             gap-2
//             font-medium
//             text-signal
//             transition-all
//             duration-300
//             hover:gap-3
//             "
//           >
//             Let's Build
//             <FiArrowRight size={16} />
//           </Link>

//           <div className="flex gap-1.5">
//             <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
//             <span className="h-2 w-2 rounded-full bg-signal/60" />
//             <span className="h-2 w-2 rounded-full bg-signal/30" />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }




import { useState } from 'react'
import { motion } from 'framer-motion'
import * as FiIcons from 'react-icons/fi'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ServiceFlipCard({ service, index }) {
  const [flipped, setFlipped] = useState(false)
  const Icon = FiIcons[service.icon] || FiIcons.FiBox

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      id={service.slug}
      className="scroll-mt-28 [perspective:1200px] h-64"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0, y: flipped ? -4 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-[var(--border)] p-7 flex flex-col justify-between transition-shadow duration-300"
          style={{
            backfaceVisibility: 'hidden',
            boxShadow: flipped ? 'none' : '0 4px 20px -8px rgba(0,0,0,0.15)',
          }}
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, '0')}</span>
            <span className="w-11 h-11 rounded-xl bg-signal/10 text-signal flex items-center justify-center">
              <Icon size={18} />
            </span>
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-[var(--fg)]">{service.title}</h3>
            <p className="mt-2 text-xs font-mono text-[var(--fg)]/40 uppercase tracking-wide">Hover to explore</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-between bg-deep text-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: flipped ? '0 20px 50px -12px rgba(46,111,255,0.45)' : 'none',
            border: '1px solid rgba(46,111,255,0.35)',
          }}
        >
          <div>
            <h3 className="font-display font-semibold text-base">{service.title}</h3>
            <p className="mt-2.5 text-xs text-white/70 leading-relaxed line-clamp-4">{service.body}</p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {service.benefits?.slice(0, 3).map((b) => (
                <li key={b} className="flex items-start gap-1.5 text-xs text-white/80">
                  <FiCheck className="text-signal shrink-0 mt-0.5" size={12} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/contact"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:gap-2.5 transition-all duration-200"
          >
            Learn More <FiArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}