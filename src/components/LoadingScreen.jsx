// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const WORDS = ['Innovate', 'Create', 'Empower']
// const WORD_DURATION = 1000 // ms per word, 3 words = 3s total

// export default function LoadingScreen({ onComplete }) {
//   const [index, setIndex] = useState(0)
//   const [exiting, setExiting] = useState(false)

//   useEffect(() => {
//     const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
//     if (reduceMotion) {
//       onComplete()
//       return
//     }

//     if (index < WORDS.length - 1) {
//       const t = setTimeout(() => setIndex((i) => i + 1), WORD_DURATION)
//       return () => clearTimeout(t)
//     }
//     const t = setTimeout(() => setExiting(true), WORD_DURATION)
//     return () => clearTimeout(t)
//   }, [index, onComplete])

//   useEffect(() => {
//     if (!exiting) return
//     const t = setTimeout(onComplete, 550) // matches exit transition duration below
//     return () => clearTimeout(t)
//   }, [exiting, onComplete])

//   // const progress = Math.min(((index + 1) / WORDS.length) * 100, 100)

//   return (
//     <AnimatePresence>
//       {!exiting && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0, filter: 'blur(16px)' }}
//           transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//           className="fixed inset-0 z-[999] bg-ink flex flex-col items-center justify-center overflow-hidden"
//         >
//           {/* ambient glow background */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 'radial-gradient(circle at 50% 45%, rgba(46,111,255,0.16), transparent 55%)',
//             }}
//           />
//           <div className="absolute inset-0 opacity-[0.03]" style={{
//             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
//             backgroundSize: '48px 48px',
//           }} />

//           {/* animated logo mark */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             className="relative mb-10"
//           >
//             <motion.div
//             >
//               <div className="font-display font-bold text-2xl text-signal">
//                 <img src="/images/portfolio/logo.png" alt="Logo" className="w-60 h-60" />
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* word sequence */}
//           <div className="relative h-16 flex items-center justify-center px-6">
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={WORDS[index]}
//                 initial={{ opacity: 0, scale: 0.85, y: 12 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 1.08, y: -12 }}
//                 transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
//                 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-wide"
//                 style={{ textShadow: '0 0 30px rgba(46,111,255,0.5)' }}
//               >
//                 {WORDS[index]}
//               </motion.h1>
//             </AnimatePresence>
//           </div>

//           {/* progress indicator */}
//         <div className="absolute bottom-16 flex items-center gap-3">
//   {[0, 1, 2].map((dot) => (
//     <motion.div
//       key={dot}
//       className="w-2.5 h-2.5 rounded-full bg-signal"
//       animate={{
//         y: [0, -6, 0],
//         opacity: [0.4, 1, 0.4],
//         scale: [1, 1.4, 1],
//       }}
//       transition={{
//         duration: 0.9,
//         repeat: Infinity,
//         delay: dot * 0.2,
//         ease: "easeInOut",
//       }}
//     />
//   ))}
// </div>
//           <p className="absolute bottom-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
//             DesFlyer
//           </p>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }









// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   FiCode,
//   FiCpu,
//   FiDatabase,
//   FiLayers,
// } from 'react-icons/fi'

// const WORDS = ['Innovate', 'Create', 'Empower']
// const WORD_DURATION = 1000

// const services = [
//   {
//     icon: FiCode,
//     label: 'Software',
//   },
//   {
//     icon: FiLayers,
//     label: 'Web',
//   },
//   {
//     icon: FiCpu,
//     label: 'Apps',
//   },
//   {
//     icon: FiDatabase,
//     label: 'Data',
//   },
// ]

// export default function LoadingScreen({ onComplete }) {
//   const [index, setIndex] = useState(0)
//   const [exiting, setExiting] = useState(false)

//   useEffect(() => {
//     const reduceMotion = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches

//     if (reduceMotion) {
//       onComplete()
//       return
//     }

//     if (index < WORDS.length - 1) {
//       const timer = setTimeout(() => {
//         setIndex((current) => current + 1)
//       }, WORD_DURATION)

//       return () => clearTimeout(timer)
//     }

//     const timer = setTimeout(() => {
//       setExiting(true)
//     }, WORD_DURATION)

//     return () => clearTimeout(timer)
//   }, [index, onComplete])

//   useEffect(() => {
//     if (!exiting) return

//     const timer = setTimeout(() => {
//       onComplete()
//     }, 800)

//     return () => clearTimeout(timer)
//   }, [exiting, onComplete])

//   if (exiting) {
//     return (
//       <motion.div
//         initial={{
//           opacity: 1,
//           scale: 1,
//         }}
//         animate={{
//           opacity: 0,
//           scale: 1.08,
//           filter: 'blur(20px)',
//         }}
//         transition={{
//           duration: 0.8,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         className="
//           fixed
//           inset-0
//           z-[9999]
//           flex
//           items-center
//           justify-center
//           overflow-hidden
//           bg-ink
//         "
//       >
//         <motion.div
//           initial={{
//             scaleX: 0,
//           }}
//           animate={{
//             scaleX: 1,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="
//             absolute
//             h-px
//             w-[45vw]
//             bg-signal
//             shadow-[0_0_30px_rgba(46,111,255,0.9)]
//           "
//         />
//       </motion.div>
//     )
//   }

//   return (
//     <motion.div
//       initial={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//       }}
//       className="
//         fixed
//         inset-0
//         z-[9999]
//         overflow-hidden
//         bg-ink
//       "
//     >

//       {/* =====================================================
//           BACKGROUND ATMOSPHERE
//       ====================================================== */}

//       <div
//         className="
//           absolute
//           inset-0
//           pointer-events-none
//         "
//         style={{
//           background: `
//             radial-gradient(
//               circle at 50% 45%,
//               rgba(46,111,255,0.14),
//               transparent 32%
//             ),
//             radial-gradient(
//               circle at 50% 50%,
//               rgba(0,220,255,0.05),
//               transparent 55%
//             )
//           `,
//         }}
//       />

//       {/* GRID */}

//       <div
//         className="
//           absolute
//           inset-0
//           pointer-events-none
//           opacity-[0.035]
//         "
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               rgba(255,255,255,0.5) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255,255,255,0.5) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: '70px 70px',
//         }}
//       />

//       {/* =====================================================
//           TOP BRAND LINE
//       ====================================================== */}

//       <motion.div
//         initial={{
//           width: 0,
//           opacity: 0,
//         }}
//         animate={{
//           width: '100%',
//           opacity: 1,
//         }}
//         transition={{
//           duration: 1,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         className="
//           absolute
//           left-0
//           top-0
//           h-px
//           bg-signal/50
//           shadow-[0_0_20px_rgba(46,111,255,0.7)]
//         "
//       />

//       {/* =====================================================
//           CORNER MARKS
//       ====================================================== */}

//       <div className="absolute left-8 top-8 h-8 w-8 border-l border-t border-white/10" />

//       <div className="absolute right-8 top-8 h-8 w-8 border-r border-t border-white/10" />

//       <div className="absolute bottom-8 left-8 h-8 w-8 border-b border-l border-white/10" />

//       <div className="absolute bottom-8 right-8 h-8 w-8 border-b border-r border-white/10" />

//       {/* =====================================================
//           TOP LEFT LABEL
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: -20,
//         }}
//         animate={{
//           opacity: 1,
//           x: 0,
//         }}
//         transition={{
//           delay: 0.3,
//           duration: 0.6,
//         }}
//         className="
//           absolute
//           left-10
//           top-10
//           hidden
//           sm:block
//         "
//       >
//         <div
//           className="
//             font-mono
//             text-[9px]
//             uppercase
//             tracking-[0.3em]
//             text-white/30
//           "
//         >
//           DESFlyer
//         </div>

//         <div
//           className="
//             mt-1
//             font-mono
//             text-[7px]
//             uppercase
//             tracking-[0.2em]
//             text-signal/60
//           "
//         >
//           Digital Engineering
//         </div>
//       </motion.div>

//       {/* =====================================================
//           TOP RIGHT STATUS
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: 20,
//         }}
//         animate={{
//           opacity: 1,
//           x: 0,
//         }}
//         transition={{
//           delay: 0.4,
//           duration: 0.6,
//         }}
//         className="
//           absolute
//           right-10
//           top-10
//           hidden
//           items-center
//           gap-2
//           sm:flex
//         "
//       >
//         <span
//           className="
//             h-1.5
//             w-1.5
//             rounded-full
//             bg-signal
//             shadow-[0_0_12px_rgba(46,111,255,1)]
//           "
//         />

//         <span
//           className="
//             font-mono
//             text-[8px]
//             uppercase
//             tracking-[0.2em]
//             text-white/30
//           "
//         >
//           Initializing
//         </span>
//       </motion.div>

//       {/* =====================================================
//           CENTRAL EXPERIENCE
//       ====================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           flex
//           min-h-screen
//           items-center
//           justify-center
//         "
//       >

//         {/* =================================================
//             LARGE ROTATING FRAME
//         ================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.7,
//             rotate: -20,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//             rotate: 0,
//           }}
//           transition={{
//             duration: 1.1,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="
//             absolute
//             h-[330px]
//             w-[330px]
//             rounded-[45px]
//             border
//             border-white/[0.06]
//           "
//         />

//         <motion.div
//           animate={{
//             rotate: 360,
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="
//             absolute
//             h-[360px]
//             w-[360px]
//             rounded-full
//             border
//             border-signal/[0.08]
//           "
//         >

//           <span
//             className="
//               absolute
//               left-1/2
//               top-0
//               h-2
//               w-2
//               -translate-x-1/2
//               rounded-full
//               bg-signal
//               shadow-[0_0_20px_rgba(46,111,255,1)]
//             "
//           />

//         </motion.div>

//         {/* =================================================
//             SECOND FRAME
//         ================================================== */}

//         <motion.div
//           animate={{
//             rotate: -360,
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="
//             absolute
//             h-[420px]
//             w-[420px]
//             rounded-full
//             border
//             border-white/[0.035]
//             border-dashed
//           "
//         />

//         {/* =================================================
//             LOGO CORE
//         ================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.5,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             delay: 0.25,
//             duration: 0.9,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="
//             relative
//             z-20
//             flex
//             h-[230px]
//             w-[230px]
//             items-center
//             justify-center
//           "
//         >

//           {/* Glow */}

//           <motion.div
//             animate={{
//               scale: [1, 1.18, 1],
//               opacity: [0.2, 0.4, 0.2],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//             className="
//               absolute
//               inset-0
//               rounded-full
//               bg-signal/[0.08]
//               blur-3xl
//             "
//           />

//           {/* Glass circle */}

//           <div
//             className="
//               absolute
//               inset-5
//               rounded-full
//               border
//               border-signal/15
//               bg-white/[0.015]
//               shadow-[0_0_80px_rgba(46,111,255,0.12)]
//               backdrop-blur-md
//             "
//           />

//           {/* Logo */}

//           <motion.img
//             src="/images/portfolio/logo.png"
//             alt="DESFlyer"
//             className="
//               relative
//               z-20
//               h-[170px]
//               w-[170px]
//               object-contain
//             "
//             animate={{
//               scale: [1, 1.03, 1],
//               rotateY: [0, 5, 0, -5, 0],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//             style={{
//               transformStyle: 'preserve-3d',
//               filter: `
//                 drop-shadow(
//                   0 0 25px
//                   rgba(46,111,255,0.65)
//                 )
//                 drop-shadow(
//                   0 0 70px
//                   rgba(0,220,255,0.25)
//                 )
//               `,
//             }}
//           />

//           {/* =================================================
//               SCANNING LINE
//           ================================================== */}

//           <motion.div
//             animate={{
//               y: [-75, 75, -75],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 2.2,
//               repeat: Infinity,
//               ease: 'easeInOut',
//             }}
//             className="
//               absolute
//               left-[25%]
//               right-[25%]
//               z-30
//               h-px
//               bg-signal
//               shadow-[0_0_15px_rgba(46,111,255,1)]
//             "
//           />

//         </motion.div>

//         {/* =================================================
//             SERVICE NODES
//         ================================================== */}

//         {services.map((service, serviceIndex) => {

//           const Icon = service.icon

//           const positions = [
//             'left-[calc(50%-245px)] top-[calc(50%-135px)]',
//             'right-[calc(50%-245px)] top-[calc(50%-135px)]',
//             'right-[calc(50%-245px)] bottom-[calc(50%-135px)]',
//             'left-[calc(50%-245px)] bottom-[calc(50%-135px)]',
//           ]

//           return (
//             <motion.div
//               key={service.label}
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 delay: 0.7 + serviceIndex * 0.15,
//                 duration: 0.6,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className={`
//                 absolute
//                 z-30
//                 hidden
//                 lg:block
//                 ${positions[serviceIndex]}
//               `}
//             >

//               <motion.div
//                 animate={{
//                   y: [-4, 4, -4],
//                 }}
//                 transition={{
//                   duration: 3 + serviceIndex * 0.4,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   rounded-xl
//                   border
//                   border-white/[0.07]
//                   bg-white/[0.025]
//                   px-4
//                   py-3
//                   backdrop-blur-xl
//                 "
//               >

//                 <span
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-lg
//                     border
//                     border-signal/10
//                     bg-signal/[0.05]
//                     text-signal
//                   "
//                 >
//                   <Icon size={14} />
//                 </span>

//                 <div>

//                   <div
//                     className="
//                       font-mono
//                       text-[8px]
//                       uppercase
//                       tracking-[0.15em]
//                       text-white/45
//                     "
//                   >
//                     {service.label}
//                   </div>

//                   <div
//                     className="
//                       mt-1
//                       h-px
//                       w-14
//                       bg-gradient-to-r
//                       from-signal/40
//                       to-transparent
//                     "
//                   />

//                 </div>

//               </motion.div>

//             </motion.div>
//           )
//         })}

//         {/* =================================================
//             WORD SEQUENCE
//         ================================================== */}

//         <div
//           className="
//             absolute
//             bottom-[19%]
//             left-1/2
//             z-40
//             -translate-x-1/2
//           "
//         >

//           <AnimatePresence mode="wait">

//             <motion.div
//               key={WORDS[index]}
//               initial={{
//                 opacity: 0,
//                 y: 15,
//                 filter: 'blur(8px)',
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 filter: 'blur(0px)',
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -15,
//                 filter: 'blur(8px)',
//               }}
//               transition={{
//                 duration: 0.45,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="
//                 whitespace-nowrap
//                 font-display
//                 text-3xl
//                 font-bold
//                 tracking-[0.08em]
//                 text-white
//                 sm:text-4xl
//               "
//               style={{
//                 textShadow:
//                   '0 0 35px rgba(46,111,255,0.45)',
//               }}
//             >
//               {WORDS[index]}
//             </motion.div>

//           </AnimatePresence>

//         </div>

//         {/* =================================================
//             PROGRESS BAR
//         ================================================== */}

//         <div
//           className="
//             absolute
//             bottom-[12%]
//             left-1/2
//             h-px
//             w-[180px]
//             -translate-x-1/2
//             overflow-hidden
//             bg-white/[0.08]
//           "
//         >

//           <motion.div
//             className="
//               h-full
//               bg-signal
//               shadow-[0_0_15px_rgba(46,111,255,0.9)]
//             "
//             animate={{
//               width: [
//                 '0%',
//                 '33%',
//                 '66%',
//                 '100%',
//               ],
//             }}
//             transition={{
//               duration: 3.2,
//               ease: 'linear',
//             }}
//           />

//         </div>

//       </div>

//       {/* =====================================================
//           BOTTOM INFORMATION
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 10,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           delay: 0.6,
//           duration: 0.6,
//         }}
//         className="
//           absolute
//           bottom-10
//           left-1/2
//           flex
//           -translate-x-1/2
//           items-center
//           gap-3
//           whitespace-nowrap
//         "
//       >

//         <span
//           className="
//             font-mono
//             text-[8px]
//             uppercase
//             tracking-[0.25em]
//             text-white/20
//           "
//         >
//           Building digital experiences
//         </span>

//         <span className="h-px w-8 bg-signal/30" />

//         <span
//           className="
//             font-mono
//             text-[8px]
//             tracking-[0.15em]
//             text-signal/50
//           "
//         >
//           2026
//         </span>

//       </motion.div>

//     </motion.div>
//   )
// }







// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   FiCode,
//   FiGlobe,
//   FiSmartphone,
//   FiDatabase,
// } from 'react-icons/fi'

// const WORDS = ['Innovate', 'Create', 'Empower']
// const WORD_DURATION = 1000

// const SERVICES = [
//   {
//     icon: FiCode,
//     label: 'Software Development',
//     number: '01',
//   },
//   {
//     icon: FiGlobe,
//     label: 'Web Development',
//     number: '02',
//   },
//   {
//     icon: FiSmartphone,
//     label: 'App Development',
//     number: '03',
//   },
//   {
//     icon: FiDatabase,
//     label: 'Database Management',
//     number: '04',
//   },
// ]

// export default function LoadingScreen({ onComplete }) {
//   const [index, setIndex] = useState(0)
//   const [exiting, setExiting] = useState(false)

//   useEffect(() => {
//     const reduceMotion = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches

//     if (reduceMotion) {
//       onComplete()
//       return
//     }

//     if (index < WORDS.length - 1) {
//       const timer = setTimeout(() => {
//         setIndex((current) => current + 1)
//       }, WORD_DURATION)

//       return () => clearTimeout(timer)
//     }

//     const timer = setTimeout(() => {
//       setExiting(true)
//     }, WORD_DURATION)

//     return () => clearTimeout(timer)
//   }, [index, onComplete])

//   useEffect(() => {
//     if (!exiting) return

//     const timer = setTimeout(() => {
//       onComplete()
//     }, 900)

//     return () => clearTimeout(timer)
//   }, [exiting, onComplete])

//   return (
//     <AnimatePresence>
//       {!exiting && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{
//             opacity: 1,
//           }}
//           className="
//             fixed
//             inset-0
//             z-[9999]
//             overflow-hidden
//             bg-ink
//           "
//         >

//           {/* =====================================================
//               BACKGROUND
//           ====================================================== */}

//           <div
//             className="
//               absolute
//               inset-0
//               pointer-events-none
//             "
//             style={{
//               background: `
//                 radial-gradient(
//                   circle at 70% 45%,
//                   rgba(46,111,255,0.12),
//                   transparent 30%
//                 ),
//                 radial-gradient(
//                   circle at 25% 55%,
//                   rgba(0,220,255,0.05),
//                   transparent 35%
//                 )
//               `,
//             }}
//           />

//           {/* GRID */}

//           <div
//             className="
//               absolute
//               inset-0
//               opacity-[0.025]
//               pointer-events-none
//             "
//             style={{
//               backgroundImage: `
//                 linear-gradient(
//                   rgba(255,255,255,0.7) 1px,
//                   transparent 1px
//                 ),
//                 linear-gradient(
//                   90deg,
//                   rgba(255,255,255,0.7) 1px,
//                   transparent 1px
//                 )
//               `,
//               backgroundSize: '64px 64px',
//             }}
//           />

//           {/* =====================================================
//               CINEMATIC EXIT PANELS
//           ====================================================== */}

//           {exiting && (
//             <>
//               <motion.div
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: 1 }}
//                 transition={{
//                   duration: 0.8,
//                   ease: [0.76, 0, 0.24, 1],
//                 }}
//                 className="
//                   absolute
//                   left-0
//                   top-0
//                   h-full
//                   w-1/2
//                   origin-top
//                   bg-ink
//                   z-[100]
//                 "
//               />

//               <motion.div
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: 1 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: 0.05,
//                   ease: [0.76, 0, 0.24, 1],
//                 }}
//                 className="
//                   absolute
//                   right-0
//                   top-0
//                   h-full
//                   w-1/2
//                   origin-bottom
//                   bg-ink
//                   z-[100]
//                 "
//               />
//             </>
//           )}

//           {/* =====================================================
//               TOP NAV
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.7,
//             }}
//             className="
//               absolute
//               left-0
//               right-0
//               top-0
//               z-30
//               flex
//               items-center
//               justify-between
//               px-6
//               py-6
//               sm:px-10
//               lg:px-14
//             "
//           >

//             {/* Brand */}

//             <div className="flex items-center gap-3">

//               <div
//                 className="
//                   h-2
//                   w-2
//                   rounded-full
//                   bg-signal
//                   shadow-[0_0_15px_rgba(46,111,255,0.9)]
//                 "
//               />

//               <span
//                 className="
//                   font-mono
//                   text-[9px]
//                   uppercase
//                   tracking-[0.3em]
//                   text-white/40
//                 "
//               >
//                 DESFlyer
//               </span>

//             </div>

//             {/* Status */}

//             <div className="flex items-center gap-3">

//               <span
//                 className="
//                   hidden
//                   font-mono
//                   text-[8px]
//                   uppercase
//                   tracking-[0.2em]
//                   text-white/25
//                   sm:block
//                 "
//               >
//                 Digital Engineering Studio
//               </span>

//               <span
//                 className="
//                   h-px
//                   w-8
//                   bg-white/10
//                 "
//               />

//               <span
//                 className="
//                   font-mono
//                   text-[8px]
//                   tracking-[0.2em]
//                   text-signal/60
//                 "
//               >
//                 2026
//               </span>

//             </div>

//           </motion.div>

//           {/* =====================================================
//               LEFT VERTICAL LABEL
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -20,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               delay: 0.4,
//               duration: 0.7,
//             }}
//             className="
//               absolute
//               left-6
//               top-1/2
//               z-20
//               hidden
//               -translate-y-1/2
//               lg:block
//             "
//           >

//             <div
//               className="
//                 flex
//                 flex-col
//                 items-center
//                 gap-4
//               "
//             >

//               <span
//                 className="
//                   h-20
//                   w-px
//                   bg-gradient-to-b
//                   from-transparent
//                   via-signal/40
//                   to-transparent
//                 "
//               />

//               <span
//                 className="
//                   font-mono
//                   text-[7px]
//                   uppercase
//                   tracking-[0.35em]
//                   text-white/20
//                   [writing-mode:vertical-rl]
//                 "
//               >
//                 Building Digital Experiences
//               </span>

//               <span
//                 className="
//                   h-20
//                   w-px
//                   bg-gradient-to-b
//                   from-transparent
//                   via-white/10
//                   to-transparent
//                 "
//               />

//             </div>

//           </motion.div>

//           {/* =====================================================
//               MAIN CONTENT
//           ====================================================== */}

//           <div
//             className="
//               relative
//               z-10
//               flex
//               min-h-screen
//               items-center
//               justify-center
//               px-6
//             "
//           >

//             <div
//               className="
//                 grid
//                 w-full
//                 max-w-6xl
//                 items-center
//                 gap-12
//                 lg:grid-cols-[0.9fr_1.1fr]
//                 lg:gap-20
//               "
//             >

//               {/* =================================================
//                   LEFT — WORD EXPERIENCE
//               ================================================== */}

//               <div className="relative">

//                 {/* Small heading */}

//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     y: 15,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     delay: 0.35,
//                     duration: 0.6,
//                   }}
//                   className="
//                     mb-7
//                     flex
//                     items-center
//                     gap-3
//                   "
//                 >

//                   <span
//                     className="
//                       h-px
//                       w-8
//                       bg-signal/60
//                     "
//                   />

//                   <span
//                     className="
//                       font-mono
//                       text-[8px]
//                       uppercase
//                       tracking-[0.28em]
//                       text-signal/60
//                     "
//                   >
//                     Welcome
//                   </span>

//                 </motion.div>

//                 {/* WORD */}

//                 <div className="relative">

//                   <div
//                     className="
//                       absolute
//                       -left-4
//                       -top-10
//                       select-none
//                       font-display
//                       text-[9rem]
//                       font-bold
//                       leading-none
//                       text-white/[0.015]
//                       sm:text-[12rem]
//                     "
//                   >
//                     0{index + 1}
//                   </div>

//                   <AnimatePresence mode="wait">

//                     <motion.h1
//                       key={WORDS[index]}
//                       initial={{
//                         opacity: 0,
//                         x: -60,
//                         filter: 'blur(12px)',
//                       }}
//                       animate={{
//                         opacity: 1,
//                         x: 0,
//                         filter: 'blur(0px)',
//                       }}
//                       exit={{
//                         opacity: 0,
//                         x: 60,
//                         filter: 'blur(12px)',
//                       }}
//                       transition={{
//                         duration: 0.55,
//                         ease: [0.16, 1, 0.3, 1],
//                       }}
//                       className="
//                         relative
//                         z-10
//                         font-display
//                         text-[clamp(3.5rem,8vw,7rem)]
//                         font-bold
//                         leading-[0.9]
//                         tracking-[-0.06em]
//                         text-white
//                       "
//                       style={{
//                         textShadow:
//                           '0 0 60px rgba(46,111,255,0.18)',
//                       }}
//                     >
//                       {WORDS[index]}
//                       <span className="text-signal">.</span>
//                     </motion.h1>

//                   </AnimatePresence>

//                 </div>

//                 {/* Description */}

//                 <motion.p
//                   initial={{
//                     opacity: 0,
//                     y: 15,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     delay: 0.6,
//                     duration: 0.6,
//                   }}
//                   className="
//                     mt-8
//                     max-w-md
//                     text-sm
//                     leading-7
//                     text-white/30
//                     sm:text-base
//                   "
//                 >
//                   Transforming ideas into purposeful
//                   digital products through software,
//                   web, mobile and data engineering.
//                 </motion.p>

//                 {/* Progress */}

//                 <div className="mt-10 max-w-md">

//                   <div
//                     className="
//                       mb-3
//                       flex
//                       items-center
//                       justify-between
//                     "
//                   >

//                     <span
//                       className="
//                         font-mono
//                         text-[7px]
//                         uppercase
//                         tracking-[0.25em]
//                         text-white/20
//                       "
//                     >
//                       Initializing experience
//                     </span>

//                     <span
//                       className="
//                         font-mono
//                         text-[8px]
//                         text-signal/60
//                       "
//                     >
//                       {String(index + 1).padStart(2, '0')}
//                       /03
//                     </span>

//                   </div>

//                   <div
//                     className="
//                       relative
//                       h-px
//                       w-full
//                       overflow-hidden
//                       bg-white/[0.08]
//                     "
//                   >

//                     <motion.div
//                       className="
//                         absolute
//                         left-0
//                         top-0
//                         h-full
//                         bg-signal
//                         shadow-[0_0_15px_rgba(46,111,255,0.9)]
//                       "
//                       animate={{
//                         width: `${((index + 1) / 3) * 100}%`,
//                       }}
//                       transition={{
//                         duration: 0.7,
//                         ease: [0.16, 1, 0.3, 1],
//                       }}
//                     />

//                   </div>

//                 </div>

//               </div>

//               {/* =================================================
//                   RIGHT — LOGO ARCHITECTURE
//               ================================================== */}

//               <div
//                 className="
//                   relative
//                   flex
//                   min-h-[400px]
//                   items-center
//                   justify-center
//                   lg:min-h-[520px]
//                 "
//               >

//                 {/* Vertical beam */}

//                 <motion.div
//                   initial={{
//                     height: 0,
//                     opacity: 0,
//                   }}
//                   animate={{
//                     height: '100%',
//                     opacity: 1,
//                   }}
//                   transition={{
//                     duration: 1.2,
//                     delay: 0.2,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="
//                     absolute
//                     left-1/2
//                     top-0
//                     w-px
//                     -translate-x-1/2
//                     bg-gradient-to-b
//                     from-transparent
//                     via-signal/20
//                     to-transparent
//                   "
//                 />

//                 {/* Horizontal beam */}

//                 <motion.div
//                   initial={{
//                     width: 0,
//                   }}
//                   animate={{
//                     width: '100%',
//                   }}
//                   transition={{
//                     duration: 1.4,
//                     delay: 0.4,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="
//                     absolute
//                     left-0
//                     top-1/2
//                     h-px
//                     -translate-y-1/2
//                     bg-gradient-to-r
//                     from-transparent
//                     via-signal/20
//                     to-transparent
//                   "
//                 />

//                 {/* Corner architecture */}

//                 <div
//                   className="
//                     absolute
//                     left-[10%]
//                     top-[12%]
//                     h-16
//                     w-16
//                     border-l
//                     border-t
//                     border-signal/15
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     right-[10%]
//                     top-[12%]
//                     h-16
//                     w-16
//                     border-r
//                     border-t
//                     border-signal/15
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     bottom-[12%]
//                     left-[10%]
//                     h-16
//                     w-16
//                     border-b
//                     border-l
//                     border-signal/15
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     bottom-[12%]
//                     right-[10%]
//                     h-16
//                     w-16
//                     border-b
//                     border-r
//                     border-signal/15
//                   "
//                 />

//                 {/* LOGO */}

//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     scale: 0.65,
//                     rotateY: -25,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                     rotateY: 0,
//                   }}
//                   transition={{
//                     duration: 1,
//                     delay: 0.35,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="
//                     relative
//                     z-20
//                     flex
//                     h-[250px]
//                     w-[250px]
//                     items-center
//                     justify-center
//                     sm:h-[300px]
//                     sm:w-[300px]
//                   "
//                   style={{
//                     perspective: '1000px',
//                   }}
//                 >

//                   {/* Glass panel */}

//                   <motion.div
//                     animate={{
//                       y: [-6, 6, -6],
//                     }}
//                     transition={{
//                       duration: 5,
//                       repeat: Infinity,
//                       ease: 'easeInOut',
//                     }}
//                     className="
//                       absolute
//                       inset-5
//                       rounded-[35px]
//                       border
//                       border-white/[0.08]
//                       bg-white/[0.02]
//                       shadow-[0_30px_100px_rgba(0,0,0,0.25)]
//                       backdrop-blur-xl
//                     "
//                   />

//                   {/* Inner border */}

//                   <div
//                     className="
//                       absolute
//                       inset-10
//                       rounded-[25px]
//                       border
//                       border-signal/10
//                     "
//                   />

//                   {/* Glow */}

//                   <motion.div
//                     animate={{
//                       opacity: [0.15, 0.35, 0.15],
//                       scale: [0.9, 1.08, 0.9],
//                     }}
//                     transition={{
//                       duration: 3.5,
//                       repeat: Infinity,
//                       ease: 'easeInOut',
//                     }}
//                     className="
//                       absolute
//                       h-44
//                       w-44
//                       rounded-full
//                       bg-signal/[0.08]
//                       blur-3xl
//                     "
//                   />

//                   {/* Logo */}

//                   <motion.img
//                     src="/images/portfolio/logo.png"
//                     alt="DESFlyer"
//                     className="
//                       relative
//                       z-20
//                       h-[180px]
//                       w-[180px]
//                       object-contain
//                       sm:h-[210px]
//                       sm:w-[210px]
//                     "
//                     animate={{
//                       y: [-5, 5, -5],
//                       rotateY: [0, 4, 0, -4, 0],
//                     }}
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       ease: 'easeInOut',
//                     }}
//                     style={{
//                       transformStyle: 'preserve-3d',
//                       filter: `
//                         drop-shadow(
//                           0 0 25px
//                           rgba(46,111,255,0.7)
//                         )
//                         drop-shadow(
//                           0 0 70px
//                           rgba(0,220,255,0.25)
//                         )
//                       `,
//                     }}
//                   />

//                   {/* Scan */}

//                   <motion.div
//                     animate={{
//                       top: ['18%', '82%', '18%'],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 2.5,
//                       repeat: Infinity,
//                       ease: 'easeInOut',
//                     }}
//                     className="
//                       absolute
//                       left-[20%]
//                       right-[20%]
//                       z-30
//                       h-px
//                       bg-signal
//                       shadow-[0_0_15px_rgba(46,111,255,1)]
//                     "
//                   />

//                 </motion.div>

//                 {/* =================================================
//                     SERVICE LIST
//                 ================================================== */}

//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-1/2
//                     z-30
//                     flex
//                     w-full
//                     max-w-[560px]
//                     -translate-x-1/2
//                     flex-wrap
//                     justify-center
//                     gap-x-5
//                     gap-y-3
//                     px-4
//                   "
//                 >

//                   {SERVICES.map((service, serviceIndex) => {

//                     const Icon = service.icon

//                     return (
//                       <motion.div
//                         key={service.label}
//                         initial={{
//                           opacity: 0,
//                           y: 15,
//                         }}
//                         animate={{
//                           opacity: 1,
//                           y: 0,
//                         }}
//                         transition={{
//                           delay: 0.8 + serviceIndex * 0.12,
//                           duration: 0.5,
//                         }}
//                         className="
//                           flex
//                           items-center
//                           gap-2
//                         "
//                       >

//                         <span
//                           className="
//                             flex
//                             h-6
//                             w-6
//                             items-center
//                             justify-center
//                             rounded-md
//                             border
//                             border-white/[0.07]
//                             bg-white/[0.025]
//                             text-signal/60
//                           "
//                         >
//                           <Icon size={11} />
//                         </span>

//                         <span
//                           className="
//                             font-mono
//                             text-[7px]
//                             uppercase
//                             tracking-[0.12em]
//                             text-white/25
//                           "
//                         >
//                           {service.number}
//                         </span>

//                         <span
//                           className="
//                             hidden
//                             font-mono
//                             text-[7px]
//                             uppercase
//                             tracking-[0.08em]
//                             text-white/35
//                             sm:block
//                           "
//                         >
//                           {service.label}
//                         </span>

//                       </motion.div>
//                     )
//                   })}

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* =====================================================
//               MOVING SCAN BAR
//           ====================================================== */}

//           <motion.div
//             initial={{
//               x: '-100%',
//             }}
//             animate={{
//               x: '100%',
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: 'linear',
//             }}
//             className="
//               pointer-events-none
//               absolute
//               left-0
//               top-0
//               z-40
//               h-full
//               w-px
//               bg-gradient-to-b
//               from-transparent
//               via-signal/30
//               to-transparent
//             "
//           />

//           {/* =====================================================
//               BOTTOM LABEL
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 10,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               delay: 0.7,
//               duration: 0.6,
//             }}
//             className="
//               absolute
//               bottom-7
//               left-1/2
//               z-30
//               flex
//               -translate-x-1/2
//               items-center
//               gap-3
//               whitespace-nowrap
//             "
//           >

//             <span
//               className="
//                 font-mono
//                 text-[7px]
//                 uppercase
//                 tracking-[0.28em]
//                 text-white/20
//               "
//             >
//               Software
//             </span>

//             <span
//               className="
//                 h-px
//                 w-5
//                 bg-white/10
//               "
//             />

//             <span
//               className="
//                 font-mono
//                 text-[7px]
//                 uppercase
//                 tracking-[0.28em]
//                 text-white/20
//               "
//             >
//               Web
//             </span>

//             <span
//               className="
//                 h-px
//                 w-5
//                 bg-white/10
//               "
//             />

//             <span
//               className="
//                 font-mono
//                 text-[7px]
//                 uppercase
//                 tracking-[0.28em]
//                 text-white/20
//               "
//             >
//               Apps
//             </span>

//             <span
//               className="
//                 h-px
//                 w-5
//                 bg-white/10
//               "
//             />

//             <span
//               className="
//                 font-mono
//                 text-[7px]
//                 uppercase
//                 tracking-[0.28em]
//                 text-white/20
//               "
//             >
//               Data
//             </span>

//           </motion.div>

//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }



















import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCode,
  FiGlobe,
  FiSmartphone,
  FiDatabase,
} from 'react-icons/fi'

const WORDS = ['Innovate', 'Create', 'Empower']
const WORD_DURATION = 1000

const SERVICES = [
  {
    icon: FiCode,
    label: 'Software Development',
    code: 'SW',
  },
  {
    icon: FiGlobe,
    label: 'Web Development',
    code: 'WEB',
  },
  {
    icon: FiSmartphone,
    label: 'App Development',
    code: 'APP',
  },
  {
    icon: FiDatabase,
    label: 'Database Management',
    code: 'DB',
  },
]

export default function LoadingScreen({ onComplete }) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      onComplete()
      return
    }

    if (index < WORDS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((current) => current + 1)
      }, WORD_DURATION)

      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setExiting(true)
    }, WORD_DURATION)

    return () => clearTimeout(timer)
  }, [index, onComplete])

  useEffect(() => {
    if (!exiting) return

    const timer = setTimeout(() => {
      onComplete()
    }, 1000)

    return () => clearTimeout(timer)
  }, [exiting, onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            overflow-hidden
            bg-ink
          "
        >

          {/* =====================================================
              BACKGROUND
          ====================================================== */}

          <div
            className="
              absolute
              inset-0
              pointer-events-none
            "
            style={{
              background: `
                radial-gradient(
                  circle at 50% 50%,
                  rgba(46,111,255,0.07),
                  transparent 45%
                ),
                radial-gradient(
                  circle at 80% 20%,
                  rgba(0,220,255,0.04),
                  transparent 30%
                )
              `,
            }}
          />

          {/* Blueprint grid */}

          <div
            className="
              absolute
              inset-0
              pointer-events-none
              opacity-[0.035]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Fine grid */}

          <div
            className="
              absolute
              inset-0
              pointer-events-none
              opacity-[0.018]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '12px 12px',
            }}
          />

          {/* =====================================================
              TOP HEADER
          ====================================================== */}

          <motion.header
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              absolute
              left-0
              right-0
              top-0
              z-40
              flex
              items-center
              justify-between
              px-6
              py-6
              sm:px-10
              lg:px-14
            "
          >

            {/* Logo name */}

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-signal/20
                  bg-signal/[0.04]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-signal
                    shadow-[0_0_12px_rgba(46,111,255,0.9)]
                  "
                />
              </div>

              <div className="flex flex-col">

                <span
                  className="
                    font-display
                    text-xs
                    font-bold
                    tracking-[0.18em]
                    text-white/70
                  "
                >
                  DESFLYER
                </span>

                <span
                  className="
                    font-mono
                    text-[6px]
                    uppercase
                    tracking-[0.28em]
                    text-white/20
                  "
                >
                  Digital Engineering
                </span>

              </div>

            </div>

            {/* System information */}

            <div className="flex items-center gap-4">

              <span
                className="
                  hidden
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.25em]
                  text-white/20
                  md:block
                "
              >
                Initializing Interface
              </span>

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-signal
                  shadow-[0_0_10px_rgba(46,111,255,0.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  tracking-[0.2em]
                  text-signal/50
                "
              >
                2026
              </span>

            </div>

          </motion.header>

          {/* =====================================================
              CORNER BLUEPRINT MARKERS
          ====================================================== */}

          <div
            className="
              absolute
              left-6
              top-24
              h-8
              w-8
              border-l
              border-t
              border-signal/20
              sm:left-10
            "
          />

          <div
            className="
              absolute
              right-6
              top-24
              h-8
              w-8
              border-r
              border-t
              border-signal/20
              sm:right-10
            "
          />

          <div
            className="
              absolute
              bottom-20
              left-6
              h-8
              w-8
              border-b
              border-l
              border-signal/20
              sm:left-10
            "
          />

          <div
            className="
              absolute
              bottom-20
              right-6
              h-8
              w-8
              border-b
              border-r
              border-signal/20
              sm:right-10
            "
          />

          {/* =====================================================
              MAIN BLUEPRINT
          ====================================================== */}

          <main
            className="
              relative
              z-10
              flex
              min-h-screen
              items-center
              justify-center
              px-6
              py-28
            "
          >

            <div
              className="
                relative
                w-full
                max-w-6xl
              "
            >

              {/* Blueprint center line */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  left-0
                  right-0
                  top-1/2
                  h-px
                  origin-left
                  bg-gradient-to-r
                  from-transparent
                  via-signal/20
                  to-transparent
                "
              />

              {/* Vertical center line */}

              <motion.div
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  top-0
                  w-px
                  origin-top
                  bg-gradient-to-b
                  from-transparent
                  via-signal/15
                  to-transparent
                "
              />

              {/* =================================================
                  LEFT INFORMATION
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="
                  absolute
                  left-0
                  top-1/2
                  hidden
                  w-44
                  -translate-y-1/2
                  lg:block
                "
              >

                <div
                  className="
                    border-l
                    border-signal/20
                    pl-5
                  "
                >

                  <span
                    className="
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.25em]
                      text-signal/60
                    "
                  >
                    Project Architecture
                  </span>

                  <p
                    className="
                      mt-3
                      font-mono
                      text-[8px]
                      leading-5
                      text-white/20
                    "
                  >
                    Designing digital systems
                    with structure,
                    performance and purpose.
                  </p>

                </div>

              </motion.div>

              {/* =================================================
                  RIGHT INFORMATION
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.8,
                }}
                className="
                  absolute
                  right-0
                  top-1/2
                  hidden
                  w-44
                  -translate-y-1/2
                  lg:block
                "
              >

                <div
                  className="
                    border-r
                    border-signal/20
                    pr-5
                    text-right
                  "
                >

                  <span
                    className="
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.25em]
                      text-signal/60
                    "
                  >
                    System Status
                  </span>

                  <div className="mt-3 space-y-2">

                    {[
                      'CORE ONLINE',
                      'MODULES READY',
                      'INTERFACE READY',
                    ].map((status) => (
                      <div
                        key={status}
                        className="
                          flex
                          items-center
                          justify-end
                          gap-2
                        "
                      >

                        <span
                          className="
                            font-mono
                            text-[7px]
                            text-white/20
                          "
                        >
                          {status}
                        </span>

                        <span
                          className="
                            h-1
                            w-1
                            rounded-full
                            bg-signal/60
                          "
                        />

                      </div>
                    ))}

                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  CENTER LOGO
              ================================================== */}

              <div
                className="
                  relative
                  mx-auto
                  flex
                  h-[330px]
                  w-[330px]
                  items-center
                  justify-center
                  sm:h-[420px]
                  sm:w-[420px]
                "
              >

                {/* Outer blueprint square */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    absolute
                    inset-4
                    border
                    border-signal/[0.12]
                  "
                />

                {/* Inner square */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    absolute
                    inset-12
                    border
                    border-white/[0.06]
                  "
                />

                {/* Technical cross */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-8
                    w-px
                    -translate-x-1/2
                    bg-signal/30
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-8
                    w-px
                    -translate-x-1/2
                    bg-signal/30
                  "
                />

                <div
                  className="
                    absolute
                    left-0
                    top-1/2
                    h-px
                    w-8
                    -translate-y-1/2
                    bg-signal/30
                  "
                />

                <div
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-px
                    w-8
                    -translate-y-1/2
                    bg-signal/30
                  "
                />

                {/* Corner measurements */}

                <span
                  className="
                    absolute
                    left-1
                    top-1
                    font-mono
                    text-[6px]
                    text-signal/30
                  "
                >
                  00.01
                </span>

                <span
                  className="
                    absolute
                    right-1
                    top-1
                    font-mono
                    text-[6px]
                    text-signal/30
                  "
                >
                  X:240
                </span>

                <span
                  className="
                    absolute
                    bottom-1
                    left-1
                    font-mono
                    text-[6px]
                    text-signal/30
                  "
                >
                  Y:180
                </span>

                <span
                  className="
                    absolute
                    bottom-1
                    right-1
                    font-mono
                    text-[6px]
                    text-signal/30
                  "
                >
                  100%
                </span>

                {/* Logo container */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.65,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    relative
                    z-20
                    flex
                    h-52
                    w-52
                    items-center
                    justify-center
                    sm:h-64
                    sm:w-64
                  "
                >

                  {/* Logo glow */}

                  <motion.div
                    animate={{
                      opacity: [0.12, 0.28, 0.12],
                      scale: [0.9, 1.08, 0.9],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      inset-6
                      rounded-full
                      bg-signal/10
                      blur-3xl
                    "
                  />

                  {/* Glass */}

                  <div
                    className="
                      absolute
                      inset-5
                      rounded-2xl
                      border
                      border-signal/15
                      bg-white/[0.015]
                      backdrop-blur-md
                    "
                  />

                  {/* Logo */}

                  <motion.img
                    src="/images/portfolio/logo.png"
                    alt="DESFlyer"
                    className="
                      relative
                      z-10
                      h-40
                      w-40
                      object-contain
                      sm:h-48
                      sm:w-48
                    "
                    animate={{
                      y: [-4, 4, -4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      filter: `
                        drop-shadow(
                          0 0 25px
                          rgba(46,111,255,0.65)
                        )
                        drop-shadow(
                          0 0 55px
                          rgba(0,200,255,0.22)
                        )
                      `,
                    }}
                  />

                </motion.div>

                {/* Blueprint scanning line */}

                <motion.div
                  initial={{
                    top: '8%',
                    opacity: 0,
                  }}
                  animate={{
                    top: ['8%', '92%', '8%'],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    absolute
                    left-12
                    right-12
                    z-30
                    h-px
                    bg-signal
                    shadow-[0_0_14px_rgba(46,111,255,0.9)]
                  "
                />

              </div>

              {/* =================================================
                  MOBILE PROJECT LABEL
              ================================================== */}

              <div
                className="
                  mt-8
                  flex
                  justify-center
                  lg:hidden
                "
              >

                <span
                  className="
                    border-l
                    border-signal/20
                    pl-3
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  Digital Engineering System
                </span>

              </div>

            </div>

          </main>

          {/* =====================================================
              SERVICE STRIP
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              absolute
              bottom-8
              left-1/2
              z-40
              w-full
              max-w-5xl
              -translate-x-1/2
              px-6
            "
          >

            <div
              className="
                grid
                grid-cols-2
                border-y
                border-white/[0.06]
                sm:grid-cols-4
              "
            >

              {SERVICES.map((service, serviceIndex) => {

                const Icon = service.icon

                return (
                  <div
                    key={service.label}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      border-white/[0.05]
                      px-3
                      py-3
                      sm:border-r
                      sm:px-5
                      last:border-r-0
                    "
                  >

                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-signal/10
                        text-signal/60
                      "
                    >
                      <Icon size={12} />
                    </div>

                    <div className="min-w-0">

                      <div
                        className="
                          font-mono
                          text-[6px]
                          tracking-[0.2em]
                          text-signal/40
                        "
                      >
                        {service.code}
                      </div>

                      <div
                        className="
                          mt-0.5
                          truncate
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-[0.08em]
                          text-white/25
                        "
                      >
                        {service.label}
                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

          </motion.div>

          {/* =====================================================
              LOADING PROGRESS
          ====================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-50
              h-px
              bg-white/[0.05]
            "
          >

            <motion.div
              className="
                h-full
                bg-signal
                shadow-[0_0_15px_rgba(46,111,255,0.9)]
              "
              animate={{
                width: `${((index + 1) / WORDS.length) * 100}%`,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

          </div>

          {/* =====================================================
              WORD SEQUENCE
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-16
              right-6
              z-40
              hidden
              lg:block
            "
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={WORDS[index]}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-signal/40
                "
              >
                {WORDS[index]}
              </motion.div>

            </AnimatePresence>

          </div>

          {/* =====================================================
              CINEMATIC EXIT
          ====================================================== */}

          <AnimatePresence>

            {exiting && (
              <>
                {/* Left panel */}

                <motion.div
                  initial={{
                    x: '-100%',
                  }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="
                    fixed
                    inset-y-0
                    left-0
                    z-[100]
                    w-1/2
                    bg-ink
                  "
                />

                {/* Right panel */}

                <motion.div
                  initial={{
                    x: '100%',
                  }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="
                    fixed
                    inset-y-0
                    right-0
                    z-[100]
                    w-1/2
                    bg-ink
                  "
                />

                {/* Center reveal line */}

                <motion.div
                  initial={{
                    scaleY: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scaleY: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.65,
                  }}
                  className="
                    fixed
                    left-1/2
                    top-0
                    z-[110]
                    h-full
                    w-px
                    origin-center
                    -translate-x-1/2
                    bg-signal
                    shadow-[0_0_25px_rgba(46,111,255,0.9)]
                  "
                />

              </>
            )}

          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  )
}














// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const LOADING_TIME = 3000

// export default function LoadingScreen({ onComplete }) {
//   const [progress, setProgress] = useState(0)
//   const [exiting, setExiting] = useState(false)

//   useEffect(() => {
//     const reduceMotion = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches

//     if (reduceMotion) {
//       onComplete()
//       return
//     }

//     const startTime = Date.now()

//     const interval = setInterval(() => {
//       const elapsed = Date.now() - startTime
//       const value = Math.min(
//         Math.round((elapsed / LOADING_TIME) * 100),
//         100
//       )

//       setProgress(value)

//       if (value >= 100) {
//         clearInterval(interval)

//         setTimeout(() => {
//           setExiting(true)
//         }, 250)
//       }
//     }, 30)

//     return () => clearInterval(interval)
//   }, [onComplete])

//   useEffect(() => {
//     if (!exiting) return

//     const timer = setTimeout(() => {
//       onComplete()
//     }, 700)

//     return () => clearTimeout(timer)
//   }, [exiting, onComplete])

//   return (
//     <AnimatePresence>
//       {!exiting && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{
//             opacity: 0,
//             scale: 1.02,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="
//             fixed
//             inset-0
//             z-[9999]
//             flex
//             items-center
//             justify-center
//             overflow-hidden
//             bg-ink
//           "
//         >

//           {/* =====================================================
//               VERY SUBTLE BACKGROUND
//           ====================================================== */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//             "
//             style={{
//               background: `
//                 radial-gradient(
//                   circle at 50% 45%,
//                   rgba(46,111,255,0.08),
//                   transparent 38%
//                 )
//               `,
//             }}
//           />

//           {/* =====================================================
//               SMALL GRID
//           ====================================================== */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               opacity-[0.018]
//             "
//             style={{
//               backgroundImage: `
//                 linear-gradient(
//                   to right,
//                   #ffffff 1px,
//                   transparent 1px
//                 ),
//                 linear-gradient(
//                   to bottom,
//                   #ffffff 1px,
//                   transparent 1px
//                 )
//               `,
//               backgroundSize: '60px 60px',
//             }}
//           />

//           {/* =====================================================
//               TOP LEFT BRAND
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -12,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.6,
//             }}
//             className="
//               absolute
//               left-6
//               top-6
//               sm:left-10
//               sm:top-8
//             "
//           >
//             <span
//               className="
//                 font-mono
//                 text-[8px]
//                 font-medium
//                 uppercase
//                 tracking-[0.3em]
//                 text-white/30
//               "
//             >
//               DESFLYER
//             </span>
//           </motion.div>

//           {/* =====================================================
//               TOP RIGHT STATUS
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -12,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.1,
//             }}
//             className="
//               absolute
//               right-6
//               top-6
//               flex
//               items-center
//               gap-2
//               sm:right-10
//               sm:top-8
//             "
//           >
//             <span
//               className="
//                 h-1.5
//                 w-1.5
//                 rounded-full
//                 bg-signal
//                 shadow-[0_0_10px_rgba(46,111,255,0.8)]
//               "
//             />

//             <span
//               className="
//                 font-mono
//                 text-[7px]
//                 uppercase
//                 tracking-[0.2em]
//                 text-white/25
//               "
//             >
//               Initializing
//             </span>
//           </motion.div>

//           {/* =====================================================
//               CENTER CONTENT
//           ====================================================== */}

//           <div
//             className="
//               relative
//               z-10
//               flex
//               w-full
//               max-w-md
//               flex-col
//               items-center
//               px-6
//             "
//           >

//             {/* =================================================
//                 LOGO
//             ================================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.88,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 0.8,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="
//                 relative
//                 flex
//                 h-36
//                 w-36
//                 items-center
//                 justify-center
//                 sm:h-44
//                 sm:w-44
//               "
//             >

//               {/* Very subtle glow */}

//               <motion.div
//                 animate={{
//                   opacity: [0.15, 0.3, 0.15],
//                 }}
//                 transition={{
//                   duration: 2.8,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 className="
//                   absolute
//                   inset-8
//                   rounded-full
//                   bg-signal/10
//                   blur-2xl
//                 "
//               />

//               <motion.img
//                 src="/images/portfolio/logo.png"
//                 alt="DESFlyer"
//                 className="
//                   relative
//                   z-10
//                   h-32
//                   w-32
//                   object-contain
//                   sm:h-40
//                   sm:w-40
//                 "
//                 animate={{
//                   y: [-2, 2, -2],
//                 }}
//                 transition={{
//                   duration: 3.5,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 style={{
//                   filter:
//                     'drop-shadow(0 0 25px rgba(46,111,255,0.35))',
//                 }}
//               />

//             </motion.div>

//             {/* =================================================
//                 BRAND NAME
//             ================================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 10,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.35,
//                 duration: 0.6,
//               }}
//               className="
//                 mt-5
//                 text-center
//               "
//             >
//               <h1
//                 className="
//                   font-display
//                   text-xl
//                   font-bold
//                   tracking-[0.22em]
//                   text-white/85
//                   sm:text-2xl
//                 "
//               >
//                 DESFLYER
//               </h1>

//               <p
//                 className="
//                   mt-2
//                   font-mono
//                   text-[7px]
//                   uppercase
//                   tracking-[0.35em]
//                   text-white/25
//                 "
//               >
//                 Software & Product Engineering
//               </p>
//             </motion.div>

//             {/* =================================================
//                 PROGRESS AREA
//             ================================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 12,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.55,
//                 duration: 0.6,
//               }}
//               className="
//                 mt-12
//                 w-full
//                 max-w-xs
//               "
//             >

//               {/* Status + Percentage */}

//               <div
//                 className="
//                   mb-3
//                   flex
//                   items-center
//                   justify-between
//                 "
//               >

//                 <span
//                   className="
//                     font-mono
//                     text-[7px]
//                     uppercase
//                     tracking-[0.2em]
//                     text-white/25
//                   "
//                 >
//                   Loading experience
//                 </span>

//                 <motion.span
//                   className="
//                     font-mono
//                     text-[8px]
//                     tabular-nums
//                     tracking-[0.15em]
//                     text-signal/70
//                   "
//                 >
//                   {String(progress).padStart(3, '0')}%
//                 </motion.span>

//               </div>

//               {/* Progress background */}

//               <div
//                 className="
//                   relative
//                   h-px
//                   w-full
//                   overflow-hidden
//                   bg-white/[0.08]
//                 "
//               >

//                 {/* Progress */}

//                 <motion.div
//                   className="
//                     absolute
//                     inset-y-0
//                     left-0
//                     bg-signal
//                     shadow-[0_0_12px_rgba(46,111,255,0.7)]
//                   "
//                   animate={{
//                     width: `${progress}%`,
//                   }}
//                   transition={{
//                     duration: 0.1,
//                     ease: 'linear',
//                   }}
//                 />

//               </div>

//               {/* Bottom metadata */}

//               <div
//                 className="
//                   mt-3
//                   flex
//                   items-center
//                   justify-between
//                 "
//               >

//                 <span
//                   className="
//                     font-mono
//                     text-[6px]
//                     uppercase
//                     tracking-[0.18em]
//                     text-white/15
//                   "
//                 >
//                   Building digital experiences
//                 </span>

//                 <span
//                   className="
//                     font-mono
//                     text-[6px]
//                     tracking-[0.15em]
//                     text-white/15
//                   "
//                 >
//                   v2026
//                 </span>

//               </div>

//             </motion.div>

//           </div>

//           {/* =====================================================
//               BOTTOM LEFT
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               delay: 0.8,
//             }}
//             className="
//               absolute
//               bottom-6
//               left-6
//               sm:bottom-8
//               sm:left-10
//             "
//           >
//             <span
//               className="
//                 font-mono
//                 text-[6px]
//                 uppercase
//                 tracking-[0.2em]
//                 text-white/15
//               "
//             >
//               Software • Web • App • Database
//             </span>
//           </motion.div>

//           {/* =====================================================
//               BOTTOM RIGHT
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               delay: 0.9,
//             }}
//             className="
//               absolute
//               bottom-6
//               right-6
//               sm:bottom-8
//               sm:right-10
//             "
//           >
//             <span
//               className="
//                 font-mono
//                 text-[6px]
//                 uppercase
//                 tracking-[0.2em]
//                 text-white/15
//               "
//             >
//               Chennai / India
//             </span>
//           </motion.div>

//           {/* =====================================================
//               EXIT FLASH
//           ====================================================== */}

//           <AnimatePresence>
//             {exiting && (
//               <motion.div
//                 initial={{
//                   scaleY: 0,
//                   opacity: 0,
//                 }}
//                 animate={{
//                   scaleY: 1,
//                   opacity: [0, 1, 0],
//                 }}
//                 transition={{
//                   duration: 0.65,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 className="
//                   absolute
//                   left-1/2
//                   top-0
//                   z-50
//                   h-full
//                   w-px
//                   origin-center
//                   -translate-x-1/2
//                   bg-signal
//                   shadow-[0_0_30px_rgba(46,111,255,0.9)]
//                 "
//               />
//             )}
//           </AnimatePresence>

//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }












// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const LOADING_TIME = 3500

// const SERVICES = [
//   'SOFTWARE DEVELOPMENT',
//   'WEB DEVELOPMENT',
//   'APP DEVELOPMENT',
//   'DATABASE MANAGEMENT',
// ]

// export default function LoadingScreen({ onComplete }) {
//   const [progress, setProgress] = useState(0)
//   const [serviceIndex, setServiceIndex] = useState(0)
//   const [exiting, setExiting] = useState(false)

//   /* =========================================================
//      PROGRESS
//   ========================================================== */

//   useEffect(() => {
//     const reduceMotion = window.matchMedia(
//       '(prefers-reduced-motion: reduce)'
//     ).matches

//     if (reduceMotion) {
//       onComplete()
//       return
//     }

//     const startTime = Date.now()

//     const timer = setInterval(() => {
//       const elapsed = Date.now() - startTime

//       const value = Math.min(
//         Math.round((elapsed / LOADING_TIME) * 100),
//         100
//       )

//       setProgress(value)

//       if (value >= 100) {
//         clearInterval(timer)

//         setTimeout(() => {
//           setExiting(true)
//         }, 250)
//       }
//     }, 30)

//     return () => clearInterval(timer)
//   }, [onComplete])

//   /* =========================================================
//      SERVICE TEXT
//   ========================================================== */

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setServiceIndex((current) => {
//         if (current >= SERVICES.length - 1) {
//           return current
//         }

//         return current + 1
//       })
//     }, 700)

//     return () => clearInterval(timer)
//   }, [])

//   /* =========================================================
//      COMPLETE
//   ========================================================== */

//   useEffect(() => {
//     if (!exiting) return

//     const timer = setTimeout(() => {
//       onComplete()
//     }, 900)

//     return () => clearTimeout(timer)
//   }, [exiting, onComplete])

//   return (
//     <AnimatePresence>
//       {!exiting && (
//         <motion.div
//           initial={{
//             opacity: 1,
//           }}
//           exit={{
//             opacity: 0,
//           }}
//           transition={{
//             duration: 0.9,
//             ease: [0.76, 0, 0.24, 1],
//           }}
//           className="
//             fixed
//             inset-0
//             z-[9999]
//             overflow-hidden
//             bg-ink
//             text-white
//           "
//         >

//           {/* =====================================================
//               BACKGROUND
//           ====================================================== */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//             "
//             style={{
//               background: `
//                 radial-gradient(
//                   circle at 50% 48%,
//                   rgba(46,111,255,0.12),
//                   transparent 32%
//                 ),
//                 radial-gradient(
//                   circle at 15% 85%,
//                   rgba(46,111,255,0.05),
//                   transparent 30%
//                 )
//               `,
//             }}
//           />

//           {/* =====================================================
//               ARCHITECTURAL GRID
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 0.025,
//             }}
//             transition={{
//               duration: 1.5,
//             }}
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//             "
//             style={{
//               backgroundImage: `
//                 linear-gradient(
//                   to right,
//                   #ffffff 1px,
//                   transparent 1px
//                 ),
//                 linear-gradient(
//                   to bottom,
//                   #ffffff 1px,
//                   transparent 1px
//                 )
//               `,
//               backgroundSize: '100px 100px',
//             }}
//           />

//           {/* =====================================================
//               LARGE BACKGROUND TYPOGRAPHY
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -80,
//             }}
//             animate={{
//               opacity: 0.035,
//               x: 0,
//             }}
//             transition={{
//               duration: 1.5,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="
//               pointer-events-none
//               absolute
//               left-[-4vw]
//               top-1/2
//               -translate-y-1/2
//               whitespace-nowrap
//               font-display
//               text-[18vw]
//               font-bold
//               uppercase
//               tracking-[-0.08em]
//             "
//           >
//             DESFLYER
//           </motion.div>

//           {/* =====================================================
//               TOP BRAND
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//             }}
//             className="
//               absolute
//               left-7
//               top-7
//               z-30
//               sm:left-12
//               sm:top-10
//             "
//           >
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-3
//               "
//             >
//               <span
//                 className="
//                   h-px
//                   w-8
//                   bg-signal
//                 "
//               />

//               <span
//                 className="
//                   font-mono
//                   text-[8px]
//                   uppercase
//                   tracking-[0.35em]
//                   text-white/40
//                 "
//               >
//                 DESFLYER
//               </span>
//             </div>
//           </motion.div>

//           {/* =====================================================
//               TOP RIGHT
//           ====================================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               delay: 0.4,
//             }}
//             className="
//               absolute
//               right-7
//               top-7
//               z-30
//               sm:right-12
//               sm:top-10
//             "
//           >
//             <span
//               className="
//                 font-mono
//                 text-[8px]
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/25
//               "
//             >
//               EST. 2026
//             </span>
//           </motion.div>

//           {/* =====================================================
//               MAIN CONTENT
//           ====================================================== */}

//           <div
//             className="
//               relative
//               z-20
//               flex
//               h-full
//               w-full
//               items-center
//               justify-center
//             "
//           >

//             <div
//               className="
//                 flex
//                 w-full
//                 max-w-5xl
//                 flex-col
//                 items-center
//                 px-6
//               "
//             >

//               {/* =================================================
//                   SMALL LABEL
//               ================================================== */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.35,
//                 }}
//                 className="
//                   mb-8
//                   flex
//                   items-center
//                   gap-3
//                 "
//               >
//                 <span
//                   className="
//                     h-1.5
//                     w-1.5
//                     rounded-full
//                     bg-signal
//                     shadow-[0_0_15px_rgba(46,111,255,0.9)]
//                   "
//                 />

//                 <span
//                   className="
//                     font-mono
//                     text-[8px]
//                     uppercase
//                     tracking-[0.4em]
//                     text-white/35
//                   "
//                 >
//                   Digital Product Studio
//                 </span>
//               </motion.div>

//               {/* =================================================
//                   LOGO
//               ================================================== */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.65,
//                   rotateY: -25,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                   rotateY: 0,
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   delay: 0.45,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 className="
//                   relative
//                   flex
//                   h-52
//                   w-52
//                   items-center
//                   justify-center
//                   sm:h-64
//                   sm:w-64
//                 "
//                 style={{
//                   perspective: '1000px',
//                 }}
//               >

//                 {/* Outer glow */}

//                 <motion.div
//                   animate={{
//                     scale: [0.9, 1.08, 0.9],
//                     opacity: [0.12, 0.3, 0.12],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: 'easeInOut',
//                   }}
//                   className="
//                     absolute
//                     inset-10
//                     rounded-full
//                     bg-signal/10
//                     blur-[60px]
//                   "
//                 />

//                 {/* Large ring */}

//                 <motion.div
//                   animate={{
//                     rotate: 360,
//                   }}
//                   transition={{
//                     duration: 12,
//                     repeat: Infinity,
//                     ease: 'linear',
//                   }}
//                   className="
//                     absolute
//                     inset-2
//                     rounded-full
//                     border
//                     border-signal/[0.12]
//                     border-t-signal/70
//                   "
//                 />

//                 {/* Second ring */}

//                 <motion.div
//                   animate={{
//                     rotate: -360,
//                   }}
//                   transition={{
//                     duration: 18,
//                     repeat: Infinity,
//                     ease: 'linear',
//                   }}
//                   className="
//                     absolute
//                     inset-7
//                     rounded-full
//                     border
//                     border-white/[0.06]
//                     border-r-signal/40
//                   "
//                 />

//                 {/* Logo */}

//                 <motion.img
//                   src="/images/portfolio/logo.png"
//                   alt="DESFlyer"
//                   className="
//                     relative
//                     z-10
//                     h-40
//                     w-40
//                     object-contain
//                     sm:h-48
//                     sm:w-48
//                   "
//                   animate={{
//                     y: [-4, 4, -4],
//                     rotateY: [-3, 3, -3],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: 'easeInOut',
//                   }}
//                   style={{
//                     transformStyle: 'preserve-3d',
//                     filter: `
//                       drop-shadow(
//                         0 0 30px
//                         rgba(46,111,255,0.45)
//                       )
//                       drop-shadow(
//                         0 0 70px
//                         rgba(46,111,255,0.18)
//                       )
//                     `,
//                   }}
//                 />

//               </motion.div>

//               {/* =================================================
//                   GRAND TITLE
//               ================================================== */}

//               <div
//                 className="
//                   mt-6
//                   overflow-hidden
//                   text-center
//                 "
//               >
//                 <motion.h1
//                   initial={{
//                     y: '100%',
//                   }}
//                   animate={{
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.9,
//                     delay: 0.8,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="
//                     font-display
//                     text-3xl
//                     font-bold
//                     uppercase
//                     tracking-[0.12em]
//                     text-white/90
//                     sm:text-5xl
//                   "
//                 >
//                   Building
//                   <span className="text-signal">
//                     {' '}Digital
//                   </span>
//                 </motion.h1>
//               </div>

//               {/* =================================================
//                   SERVICE SWITCHER
//               ================================================== */}

//               <div
//                 className="
//                   relative
//                   mt-5
//                   h-6
//                   overflow-hidden
//                 "
//               >
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={serviceIndex}
//                     initial={{
//                       opacity: 0,
//                       y: 20,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     exit={{
//                       opacity: 0,
//                       y: -20,
//                     }}
//                     transition={{
//                       duration: 0.35,
//                     }}
//                     className="
//                       font-mono
//                       text-[8px]
//                       uppercase
//                       tracking-[0.35em]
//                       text-white/30
//                       sm:text-[9px]
//                     "
//                   >
//                     {SERVICES[serviceIndex]}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//               {/* =================================================
//                   PROGRESS
//               ================================================== */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 1,
//                 }}
//                 className="
//                   mt-10
//                   w-full
//                   max-w-md
//                 "
//               >

//                 <div
//                   className="
//                     mb-3
//                     flex
//                     items-end
//                     justify-between
//                   "
//                 >

//                   <div className="flex items-center gap-3">

//                     <span
//                       className="
//                         font-mono
//                         text-[7px]
//                         uppercase
//                         tracking-[0.25em]
//                         text-white/25
//                       "
//                     >
//                       Initializing experience
//                     </span>

//                     <span
//                       className="
//                         h-px
//                         w-5
//                         bg-white/10
//                       "
//                     />

//                   </div>

//                   <span
//                     className="
//                       font-mono
//                       text-[9px]
//                       tabular-nums
//                       tracking-[0.15em]
//                       text-signal/80
//                     "
//                   >
//                     {String(progress).padStart(3, '0')}
//                   </span>

//                 </div>

//                 {/* Progress rail */}

//                 <div
//                   className="
//                     relative
//                     h-[2px]
//                     w-full
//                     overflow-visible
//                     bg-white/[0.07]
//                   "
//                 >

//                   <motion.div
//                     animate={{
//                       width: `${progress}%`,
//                     }}
//                     transition={{
//                       duration: 0.1,
//                       ease: 'linear',
//                     }}
//                     className="
//                       absolute
//                       left-0
//                       top-0
//                       h-full
//                       bg-signal
//                       shadow-[0_0_15px_rgba(46,111,255,0.8)]
//                     "
//                   />

//                   {/* Moving point */}

//                   <motion.div
//                     animate={{
//                       left: `${progress}%`,
//                     }}
//                     transition={{
//                       duration: 0.1,
//                       ease: 'linear',
//                     }}
//                     className="
//                       absolute
//                       top-1/2
//                       h-2
//                       w-2
//                       -translate-x-1/2
//                       -translate-y-1/2
//                       rounded-full
//                       bg-signal
//                       shadow-[0_0_15px_rgba(46,111,255,0.9)]
//                     "
//                   />

//                 </div>

//               </motion.div>

//             </div>
//           </div>

//           {/* =====================================================
//               SERVICE LABELS
//           ====================================================== */}

//           <div
//             className="
//               absolute
//               bottom-10
//               left-7
//               z-20
//               sm:left-12
//             "
//           >
//             <span
//               className="
//                 font-mono
//                 text-[6px]
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/15
//               "
//             >
//               Software
//             </span>

//             <span className="mx-2 text-white/10">
//               /
//             </span>

//             <span
//               className="
//                 font-mono
//                 text-[6px]
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/15
//               "
//             >
//               Web
//             </span>

//             <span className="mx-2 text-white/10">
//               /
//             </span>

//             <span
//               className="
//                 font-mono
//                 text-[6px]
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/15
//               "
//             >
//               App
//             </span>

//             <span className="mx-2 text-white/10">
//               /
//             </span>

//             <span
//               className="
//                 font-mono
//                 text-[6px]
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/15
//               "
//             >
//               Database
//             </span>
//           </div>

//           {/* =====================================================
//               BOTTOM RIGHT
//           ====================================================== */}

//           <div
//             className="
//               absolute
//               bottom-10
//               right-7
//               z-20
//               sm:right-12
//             "
//           >
//             <span
//               className="
//                 font-mono
//                 text-[6px]
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/15
//               "
//             >
//               Digital Experiences
//             </span>
//           </div>

//           {/* =====================================================
//               CINEMATIC LIGHT SWEEP
//           ====================================================== */}

//           <motion.div
//             initial={{
//               x: '-120%',
//             }}
//             animate={{
//               x: '120%',
//             }}
//             transition={{
//               duration: 2.8,
//               repeat: Infinity,
//               repeatDelay: 1.2,
//               ease: 'easeInOut',
//             }}
//             className="
//               pointer-events-none
//               absolute
//               inset-y-0
//               z-40
//               w-[15vw]
//               min-w-[100px]
//               bg-gradient-to-r
//               from-transparent
//               via-signal/[0.035]
//               to-transparent
//               blur-xl
//             "
//           />

//           {/* =====================================================
//               EXIT REVEAL
//           ====================================================== */}

//           <AnimatePresence>
//             {/* EXIT REVEAL */}

// {exiting && (
//   <div className="absolute inset-0 z-50 pointer-events-none">

//     <motion.div
//       initial={{ scaleY: 0 }}
//       animate={{ scaleY: 1 }}
//       transition={{
//         duration: 0.8,
//         ease: [0.76, 0, 0.24, 1],
//       }}
//       className="absolute inset-0 origin-bottom bg-signal"
//     />

//     <motion.div
//       initial={{ scaleY: 0 }}
//       animate={{ scaleY: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.12,
//         ease: [0.76, 0, 0.24, 1],
//       }}
//       className="absolute inset-0 origin-bottom bg-ink"
//     />

//   </div>
// )}
//           </AnimatePresence>

//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }
