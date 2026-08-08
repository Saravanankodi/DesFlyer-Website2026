// import { useState, useEffect, useRef, useMemo } from 'react'
// import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
// import { FiArrowUpRight } from 'react-icons/fi'
// import Eyebrow from '../ui/Eyebrow'
// import Button from '../ui/Button'
// import { services } from '../../data/services'

// const AUTO_ADVANCE_MS = 4500

// // ---- pure CSS 3D background, no libraries ----
// function CSS3DField({ activeIndex, count = 26 }) {
//   const wrapRef = useRef(null)
//   const px = useMotionValue(0)
//   const py = useMotionValue(0)
//   const springX = useSpring(px, { stiffness: 60, damping: 20 })
//   const springY = useSpring(py, { stiffness: 60, damping: 20 })

//   const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14])
//   const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])

//   function handleMove(e) {
//     const rect = wrapRef.current.getBoundingClientRect()
//     px.set((e.clientX - rect.left) / rect.width - 0.5)
//     py.set((e.clientY - rect.top) / rect.height - 0.5)
//   }

//   function handleLeave() {
//     px.set(0)
//     py.set(0)
//   }

//   const particles = useMemo(() => {
//     return Array.from({ length: count }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       z: Math.random() * 300 - 150, // depth range
//       size: 2 + Math.random() * 4,
//       duration: 6 + Math.random() * 6,
//       delay: Math.random() * 4,
//     }))
//   }, [count])

//   return (
//     <div
//       ref={wrapRef}
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       className="absolute inset-0 overflow-hidden"
//       style={{ perspective: 700 }}
//     >

//       <motion.div
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: 'preserve-3d',
//           width: '100%',
//           height: '100%',
//           position: 'relative',
//         }}
//       >
//         {particles.map((p) => {
//           // particles closer to camera (higher z) are bigger + brighter
//           const depthT = (p.z + 150) / 300 // 0..1
//           const scale = 0.5 + depthT * 1.1
//           const opacity = 0.15 + depthT * 0.55

//           return (
//             <motion.span
//               key={p.id}
//               animate={{
//                 y: [`${p.y}%`, `${p.y - 6}%`, `${p.y}%`],
//               }}
//               transition={{
//                 duration: p.duration,
//                 delay: p.delay,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//               style={{
//                 position: 'absolute',
//                 left: `${p.x}%`,
//                 top: `${p.y}%`,
//                 width: p.size,
//                 height: p.size,
//                 borderRadius: '50%',
//                 background: '#2E6FFF',
//                 opacity,
//                 transform: `translateZ(${p.z}px) scale(${scale})`,
//                 boxShadow: depthT > 0.7 ? '0 0 6px 1px rgba(46,111,255,0.5)' : 'none',
//               }}
//             />
//           )
//         })}

//         {/* a couple of larger, slower "orbs" for depth anchoring */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
//           style={{
//             position: 'absolute',
//             left: '20%',
//             top: '25%',
//             width: 90,
//             height: 90,
//             borderRadius: '50%',
//             border: '1px solid rgba(46,111,255,0.25)',
//             transform: `translateZ(-60px) rotateX(70deg)`,
//           }}
//         />
//         <motion.div
//           animate={{ rotate: -360 }}
//           transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
//           style={{
//             position: 'absolute',
//             right: '15%',
//             bottom: '20%',
//             width: 60,
//             height: 60,
//             borderRadius: '50%',
//             border: '1px solid rgba(46,111,255,0.18)',
//             transform: `translateZ(-30px) rotateX(60deg)`,
//           }}
//         />
//       </motion.div>

//       {/* subtle glow that shifts with the active service, sits above the 3D layer */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         animate={{
//           background: `radial-gradient(70% 60% at ${20 + activeIndex * 18}% ${30 + activeIndex * 10}%, rgba(46,111,255,0.14), transparent 70%)`,
//         }}
//         transition={{ duration: 0.7 }}
//       />
//     </div>
//   )
// }

// // ---- rows (unchanged) ----
// function ServiceRow({ s, i, active, onActivate }) {
//   const rowRef = useRef(null)
//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   const glow = useTransform(
//     [mouseX, mouseY],
//     ([x, y]) =>
//       `radial-gradient(220px circle at ${x}px ${y}px, rgba(46,111,255,0.12), transparent 70%)`
//   )

//   function handleMove(e) {
//     const rect = rowRef.current.getBoundingClientRect()
//     mouseX.set(e.clientX - rect.left)
//     mouseY.set(e.clientY - rect.top)
//   }

//   return (
//     <button
//       ref={rowRef}
//       onMouseEnter={() => onActivate(i)}
//       onFocus={() => onActivate(i)}
//       onClick={() => onActivate(i)}
//       onMouseMove={handleMove}
//       className="relative w-full text-left py-6 px-1 flex items-center gap-5 overflow-hidden focus:outline-none"
//     >
//       {active && (
//         <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />
//       )}

//       {active && (
//         <motion.div
//           layoutId="service-active-bar"
//           className="absolute left-0 top-0 bottom-0 w-[3px] bg-signal rounded-full"
//           transition={{ type: 'spring', stiffness: 400, damping: 38 }}
//         />
//       )}

//       <span className={`relative font-mono text-xs shrink-0 transition-colors ${active ? 'text-signal' : 'text-[var(--fg)]/35'}`}>
//         0{i + 1}
//       </span>

//       <motion.h3
//         animate={{ x: active ? 6 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="relative font-display font-semibold text-xl md:text-2xl text-[var(--fg)]"
//       >
//         {s.title}
//       </motion.h3>

//       <motion.span
//         animate={{ opacity: active ? 1 : 0, x: active ? 0 : -8 }}
//         transition={{ duration: 0.3 }}
//         className="relative ml-auto text-signal shrink-0"
//       >
//         <FiArrowUpRight size={20} />
//       </motion.span>
//     </button>
//   )
// }

// export default function ServicesTeaser() {
//   const [category, setCategory] = useState('All')

//   const featured = services.slice(0, 4)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [paused, setPaused] = useState(false)
//   const active = featured[activeIndex] || featured[0]

//   useEffect(() => {
//     if (paused || featured.length === 0) return
//     const id = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % featured.length)
//     }, AUTO_ADVANCE_MS)
//     return () => clearInterval(id)
//   }, [paused, featured.length])

//   function activate(i) {
//     setActiveIndex(i)
//     setPaused(true)
//   }

//   if (!active) return null

//   return (
//     <section className="py-28 lg:py-36 px-6 lg:px-10">
//       <div className="max-w-shell mx-auto">
//         <Eyebrow>What We Do</Eyebrow>

//         <h2 className="mt-4 font-display font-bold text-[clamp(1.9rem,3.5vw,3rem)] text-[var(--fg)]">
//           Engineering built around your goals
//         </h2>

//         <div
//           className="grid lg:grid-cols-[1fr,1.1fr] gap-4 lg:gap-10 mt-14 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 lg:p-6"
//           onMouseLeave={() => setPaused(false)}
//         >
//           {/* LEFT */}
//           <div className="divide-y divide-[var(--border)]">
//             {featured.map((s, i) => (
//               <ServiceRow key={s.slug} s={s} i={i} active={i === activeIndex} onActivate={activate} />
//             ))}
//           </div>

//           {/* RIGHT */}
//           <div className="relative rounded-2xl overflow-hidden min-h-[320px] bg-[var(--surface-2)]">
//             <CSS3DField activeIndex={activeIndex} />

//             <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-end">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={active.slug}
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -12 }}
//                 >
//                   <h3 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)]">
//                     {active.title}
//                   </h3>

//                   <p className="mt-4 text-sm lg:text-base text-[var(--fg)]/65 leading-relaxed max-w-md">
//                     {active.body}
//                   </p>


//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             <div className="absolute top-6 left-8 right-8 flex gap-2 z-10">
//               {featured.map((_, i) => (
//                 <div key={i} className="relative h-[2px] flex-1 bg-[var(--fg)]/10 overflow-hidden">
//                   {i === activeIndex && !paused && (
//                     <motion.span
//                       className="absolute inset-y-0 left-0 bg-signal"
//                       initial={{ width: '0%' }}
//                       animate={{ width: '100%' }}
//                       transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }






















// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiArrowUpRight } from 'react-icons/fi'
// import Eyebrow from '../ui/Eyebrow'
// import { services } from '../../data/services'

// // ---------------------------------------------------------
// // Service Card
// // Default  : Image in top half + title in bottom half
// // Hover    : Full card shows description
// // ---------------------------------------------------------

// function ServiceCard({ s, i }) {
//   const [hovered, setHovered] = useState(false)

//   return (
//     <motion.div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onFocus={() => setHovered(true)}
//       onBlur={() => setHovered(false)}
//       tabIndex={0}
//       className="
//         group relative w-full aspect-[4/5]
//         rounded-3xl overflow-hidden
//         border border-[var(--border)]
//         bg-[var(--surface)]
//         focus:outline-none
//         focus-visible:ring-2
//         focus-visible:ring-signal
//         cursor-pointer
//       "
//     >
//       {/* =====================================================
//           INDEX
//       ===================================================== */}
//       <div className="absolute z-50 top-4 left-5 text-xs font-mono text-[var(--fg)]/50">
//         0{i + 1}
//       </div>

//       {/* =====================================================
//           IMAGE
//           Visible normally
//           Completely disappears on hover
//       ===================================================== */}
//       <motion.div
//         className="absolute inset-0 z-10 overflow-hidden"
//         initial={false}
//         animate={{
//           opacity: hovered ? 0 : 1,
//           scale: hovered ? 1.05 : 1,
//         }}
//         transition={{
//           opacity: {
//             duration: 0.35,
//             delay: hovered ? 0.45 : 0,
//           },
//           scale: {
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           },
//         }}
//       >
//         {s.image ? (
//           <motion.img
//             src={s.image}
//             alt={s.title}
//             className="absolute inset-0 h-full w-full object-cover"
//             animate={{
//               scale: hovered ? 1.08 : 1.05,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           />
//         ) : (
//           <div className="absolute inset-0 bg-[var(--surface-2)]" />
//         )}

//         {/* Image gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//       </motion.div>

//       {/* =====================================================
//           TITLE PANEL
//           Bottom -> Top
//           Then disappears
//       ===================================================== */}
//       <motion.div
//         className="
//           absolute left-0 right-0
//           z-30
//           h-1/2
//           flex items-center
//           px-6 lg:px-8
//           bg-[var(--surface)]
//         "
//         initial={false}
//         animate={{
//           top: hovered ? 0 : '50%',
//           opacity: hovered ? 0 : 1,
//         }}
//         transition={{
//           top: {
//             duration: 0.65,
//             ease: [0.22, 1, 0.36, 1],
//           },
//           opacity: {
//             duration: 0.18,
//             delay: hovered ? 0.0 : 0,
//           },
//         }}
//       >
//         <div className="w-full flex items-center justify-between gap-4">
//           <h3
//             className="
//               font-display font-semibold
//               text-xl lg:text-2xl
//               text-[var(--fg)]
//               leading-snug
//             "
//           >
//             {s.title}
//           </h3>

//           <motion.div
//             animate={{
//               rotate: hovered ? 90 : 0,
//               x: hovered ? 4 : 0,
//               y: hovered ? -4 : 0,
//             }}
//             transition={{
//               duration: 0.4,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <FiArrowUpRight
//               size={21}
//               className="text-[var(--fg)]/40"
//             />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* =====================================================
//           HOVER CONTENT
//           Clean surface background
//           NO IMAGE
//       ===================================================== */}
//       <motion.div
//         className="
//           absolute inset-0
//           z-20
//           flex flex-col justify-end
//           p-6 lg:p-8
//           bg-[var(--surface)]
//         "
//         initial={false}
//         animate={{
//           opacity: hovered ? 1 : 0,
//           y: hovered ? 0 : 25,
//         }}
//         transition={{
//           opacity: {
//             duration: 0.35,
//             delay: hovered ? 0.52 : 0,
//           },
//           y: {
//             duration: 0.45,
//             delay: hovered ? 0.48 : 0,
//             ease: [0.22, 1, 0.36, 1],
//           },
//         }}
//       >
//         <div className="relative">
//           {/* Small number */}
//           <div className="mb-5 text-xs font-mono text-signal/60">
//             0{i + 1}
//           </div>

//           {/* Title */}
//           <h3
//             className="
//               font-display font-semibold
//               text-xl lg:text-2xl
//               text-signal
//               leading-snug
//               mb-4
//             "
//           >
//             {s.title}
//           </h3>

//           {/* Description */}
//           <p
//           className='xl:text-[10px]'
//           >
//             {s.body}
//           </p>

//           {/* Bottom action */}
//           <div className="mt-7 flex items-center gap-2">
//             <span
//               className="
//                 text-[10px]
//                 uppercase
//                 tracking-[0.2em]
//                 text-[var(--fg)]/40
//               "
//             >
//               Explore service
//             </span>

//             <FiArrowUpRight
//               size={14}
//               className="text-signal"
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* =====================================================
//           HOVER BORDER
//       ===================================================== */}
//       <motion.div
//         className="
//           absolute inset-0
//           z-50
//           pointer-events-none
//           rounded-3xl
//           border
//         "
//         animate={{
//           borderColor: hovered
//             ? 'var(--signal)'
//             : 'var(--border)',
//           boxShadow: hovered
//             ? '0 0 0 1px var(--signal), 0 20px 50px rgba(0,0,0,0.18)'
//             : '0 0 0 rgba(0,0,0,0)',
//         }}
//         transition={{ duration: 0.4 }}
//       />
//     </motion.div>
//   )
// }


// // ---------------------------------------------------------
// // Services Teaser
// // ---------------------------------------------------------
// export default function ServicesTeaser() {
//   const featured = services.slice(0, 4)

//   return (
//     <section className="relative py-20 lg:py-28">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <Eyebrow>What We Do</Eyebrow>

//         <h2
//           className="
//             mt-4
//             font-display font-bold
//             text-[clamp(1.9rem,3.5vw,3rem)]
//             text-[var(--fg)]
//           "
//         >
//           Engineering built around your goals
//         </h2>

//         <div
//           className="
//             grid
//             sm:grid-cols-2
//             lg:grid-cols-4
//             gap-4 lg:gap-6
//             mt-14
//           "
//         >
//           {featured.map((s, i) => (
//             <ServiceCard
//               key={s.slug}
//               s={s}
//               i={i}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }











// import { useState, useRef } from 'react'
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useTransform,
//   useSpring,
// } from 'framer-motion'
// import { FiArrowUpRight } from 'react-icons/fi'
// import Eyebrow from '../ui/Eyebrow'
// import { services } from '../../data/services'

// /* =========================================================
//    COLORS
// ========================================================= */

// const INK = '#050912'
// const PANEL = '#0B1220'
// const PANEL_LIGHT = '#101A2D'

// const FG = '#F5F8FF'
// const FG_MUTED = '#9BAAC2'

// const BLUE = '#2F7BFF'
// const BLUE_BRIGHT = '#5EA2FF'
// const BLUE_LIGHT = '#8CC7FF'

// const DEFAULT_SERVICE_IMAGE =
//   'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'

// /* =========================================================
//    BLUEPRINT GRID
// ========================================================= */

// function Blueprint({ active = false }) {
//   return (
//     <>
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           opacity: active ? 0.12 : 0.07,
//           backgroundImage: `
//             linear-gradient(
//               rgba(94,162,255,0.16) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(94,162,255,0.16) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: '48px 48px',
//         }}
//       />

//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           opacity: active ? 0.08 : 0.04,
//           backgroundImage: `
//             radial-gradient(
//               circle at center,
//               rgba(94,162,255,0.5) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: '22px 22px',
//         }}
//       />
//     </>
//   )
// }

// /* =========================================================
//    CORNER BRACKETS
// ========================================================= */

// function CornerBrackets({ active = false }) {
//   const corners = [
//     {
//       className: 'top-3 left-3',
//       rotate: 0,
//     },
//     {
//       className: 'top-3 right-3',
//       rotate: 90,
//     },
//     {
//       className: 'bottom-3 right-3',
//       rotate: 180,
//     },
//     {
//       className: 'bottom-3 left-3',
//       rotate: 270,
//     },
//   ]

//   return (
//     <>
//       {corners.map((corner, index) => (
//         <motion.div
//           key={index}
//           className={`absolute ${corner.className} w-4 h-4 pointer-events-none z-40`}
//           animate={{
//             opacity: active ? 1 : 0.35,
//             scale: active ? 1 : 0.85,
//           }}
//           transition={{
//             duration: 0.25,
//           }}
//           style={{
//             transform: `rotate(${corner.rotate}deg)`,
//           }}
//         >
//           <div
//             className="absolute top-0 left-0 w-4 h-px"
//             style={{
//               background: BLUE_BRIGHT,
//               boxShadow: '0 0 8px rgba(94,162,255,0.8)',
//             }}
//           />

//           <div
//             className="absolute top-0 left-0 w-px h-4"
//             style={{
//               background: BLUE_BRIGHT,
//               boxShadow: '0 0 8px rgba(94,162,255,0.8)',
//             }}
//           />
//         </motion.div>
//       ))}
//     </>
//   )
// }

// /* =========================================================
//    NORMAL SERVICE CARD
// ========================================================= */

// function ServiceCard({
//   s,
//   i,
//   hoveredCard,
//   setHoveredCard,
// }) {
//   const ref = useRef(null)

//   const isHovered = hoveredCard === i
//   const isOther =
//     hoveredCard !== null &&
//     hoveredCard !== i

//   const image =
//     s.image || DEFAULT_SERVICE_IMAGE

//   /* -------------------------------------------------------
//      Mouse values
//   ------------------------------------------------------- */

//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   const rotateY = useSpring(
//     useTransform(
//       mouseX,
//       [-1, 1],
//       [-5, 5]
//     ),
//     {
//       stiffness: 180,
//       damping: 22,
//     }
//   )

//   const rotateX = useSpring(
//     useTransform(
//       mouseY,
//       [-1, 1],
//       [4, -4]
//     ),
//     {
//       stiffness: 180,
//       damping: 22,
//     }
//   )

//   const imageX = useTransform(
//     mouseX,
//     [-1, 1],
//     [-8, 8]
//   )

//   const imageY = useTransform(
//     mouseY,
//     [-1, 1],
//     [-6, 6]
//   )

//   function handleMove(e) {
//     if (!ref.current) return

//     const rect =
//       ref.current.getBoundingClientRect()

//     const x =
//       ((e.clientX - rect.left) /
//         rect.width -
//         0.5) *
//       2

//     const y =
//       ((e.clientY - rect.top) /
//         rect.height -
//         0.5) *
//       2

//     mouseX.set(x)
//     mouseY.set(y)
//   }

//   function resetMove() {
//     mouseX.set(0)
//     mouseY.set(0)
//   }

//   function handleEnter() {
//     setHoveredCard(i)
//   }

//   return (
//     <motion.button
//       ref={ref}
//       type="button"
//       onMouseEnter={handleEnter}
//       onMouseMove={handleMove}
//       onMouseLeave={resetMove}
//       onFocus={handleEnter}
//       animate={{
//         opacity: isOther ? 0.08 : 1,
//         scale: isOther ? 0.94 : 1,
//         filter: isOther
//           ? 'blur(4px)'
//           : 'blur(0px)',
//       }}
//       transition={{
//         duration: 0.45,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="
//         group
//         relative
//         w-[100%]
//         h-[70%]
//         rounded-2xl
//         overflow-hidden
//         text-left
//         cursor-pointer
//         outline-none
//       "
//       style={{
//         background: PANEL,
//         border:
//           '1px solid rgba(94,162,255,0.14)',
//         perspective: 1000,
//       }}
//     >
//       {/* ===================================================
//           OUTER BLUE GLOW
//       =================================================== */}

//       <motion.div
//         className="absolute -inset-[1px] rounded-2xl pointer-events-none"
//         animate={{
//           opacity: isHovered ? 1 : 0,
//         }}
//         style={{
//           background: `
//             linear-gradient(
//               135deg,
//               rgba(94,162,255,0.8),
//               transparent 30%,
//               transparent 70%,
//               rgba(47,123,255,0.7)
//             )
//           `,
//           filter: 'blur(1px)',
//         }}
//       />

//       {/* ===================================================
//           MAIN CARD
//       =================================================== */}

//       <motion.div
//         className="
//           absolute
//           inset-[1px]
//           rounded-2xl
//           overflow-hidden
//         "
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: 'preserve-3d',
//           background: `
//             linear-gradient(
//               145deg,
//               ${PANEL_LIGHT},
//               ${PANEL}
//             )
//           `,
//         }}
//       >
//         {/* =================================================
//             IMAGE
//         ================================================= */}

//         <motion.div
//           className="
//             absolute
//             top-0
//             left-0
//             right-0
//             h-[57%]
//             overflow-hidden
//           "
//           animate={{
//             opacity: isHovered ? 0 : 1,
//             scale: isHovered ? 1.08 : 1,
//             y: isHovered ? -20 : 0,
//           }}
//           transition={{
//             duration: 0.45,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           style={{
//             transform: 'translateZ(30px)',
//           }}
//         >
//           <motion.img
//             src={image}
//             alt={s.title}
//             className="
//               absolute
//               inset-0
//               w-full
//               h-full
//               object-cover
//             "
//             style={{
//               x: imageX,
//               y: imageY,
//               scale: 1.08,
//             }}
//           />

//           {/* Dark image overlay */}

//           <div
//             className="absolute inset-0"
//             style={{
//               background: `
//                 linear-gradient(
//                   180deg,
//                   rgba(5,9,18,0.05) 0%,
//                   rgba(5,9,18,0.15) 35%,
//                   rgba(5,9,18,0.96) 100%
//                 )
//               `,
//             }}
//           />

//           {/* Blue tint */}

//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 'linear-gradient(135deg, rgba(47,123,255,0.15), transparent 60%)',
//             }}
//           />

//         </motion.div>

//         {/* =================================================
//             MOVING IMAGE LIGHT
//         ================================================= */}

//         <motion.div
//           className="
//             absolute
//             top-0
//             bottom-0
//             w-20
//             pointer-events-none
//             z-10
//           "
//           animate={{
//             left: [
//               '-30%',
//               '120%',
//             ],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             repeatDelay: 1.5,
//             ease: 'linear',
//           }}
//           style={{
//             opacity: isHovered ? 0 : 0.28,
//             background: `
//               linear-gradient(
//                 90deg,
//                 transparent,
//                 rgba(255,255,255,0.2),
//                 transparent
//               )
//             `,
//             transform:
//               'skewX(-20deg)',
//             filter: 'blur(3px)',
//           }}
//         />

//         {/* =================================================
//             GRID
//         ================================================= */}

//         <Blueprint active={isHovered} />

//         {/* =================================================
//             CORNERS
//         ================================================= */}

//         <CornerBrackets active={isHovered} />

//         {/* =================================================
//             SERVICE NUMBER
//         ================================================= */}

//         <div
//           className="
//             absolute
//             top-5
//             left-5
//             right-5
//             z-30
//             flex
//             items-start
//             justify-between
//           "
//           style={{
//             transform:
//               'translateZ(50px)',
//           }}
//         >
//           <span
//             className="
//               px-2
//               py-1
//               rounded
//               font-mono
//               text-[10px]
//               tracking-[0.2em]
//             "
//             style={{
//               color: BLUE_LIGHT,
//               background:
//                 'rgba(5,9,18,0.55)',
//               border:
//                 '1px solid rgba(94,162,255,0.18)',
//               backdropFilter:
//                 'blur(8px)',
//             }}
//           >
//             SVC.0{i + 1}
//           </span>

//           <motion.span
//             animate={{
//               rotate: isHovered ? 45 : 0,
//               scale: isHovered ? 1.1 : 1,
//             }}
//             transition={{
//               duration: 0.35,
//             }}
//             style={{
//               color: BLUE_BRIGHT,
//             }}
//           >
//             <FiArrowUpRight size={20} />
//           </motion.span>
//         </div>

//         {/* =================================================
//             TITLE
//         ================================================= */}

//         <motion.div
//           className="
//             absolute
//             left-6
//             right-6
//             bottom-6
//             z-30
//           "
//           animate={{
//             y: isHovered ? -8 : 0,
//           }}
//           style={{
//             transform:
//               'translateZ(55px)',
//           }}
//         >
//           <motion.h3
//             animate={{
//               color: isHovered
//                 ? BLUE_LIGHT
//                 : FG,
//             }}
//             className="
//               font-display
//               font-semibold
//               text-xl
//               md:text-2xl
//               leading-tight
//             "
//           >
//             {s.title}
//           </motion.h3>

//           <motion.div
//             className="mt-3 h-[2px] rounded-full"
//             animate={{
//               width: isHovered ? 95 : 35,
//             }}
//             transition={{
//               duration: 0.35,
//             }}
//             style={{
//               background: `
//                 linear-gradient(
//                   90deg,
//                   ${BLUE},
//                   ${BLUE_BRIGHT},
//                   transparent
//                 )
//               `,
//               boxShadow:
//                 '0 0 12px rgba(47,123,255,0.55)',
//             }}
//           />
//         </motion.div>

//         {/* =================================================
//             BOTTOM LINE
//         ================================================= */}

//         <motion.div
//           className="
//             absolute
//             bottom-0
//             left-0
//             right-0
//             h-[2px]
//             z-40
//           "
//           animate={{
//             opacity: isHovered ? 1 : 0.3,
//           }}
//           style={{
//             background: `
//               linear-gradient(
//                 90deg,
//                 transparent,
//                 ${BLUE},
//                 ${BLUE_BRIGHT},
//                 transparent
//               )
//             `,
//             boxShadow:
//               '0 0 18px rgba(47,123,255,0.7)',
//           }}
//         />
//       </motion.div>
//     </motion.button>
//   )
// }

// /* =========================================================
//    CENTER EXPANDED CARD
// ========================================================= */

// function ExpandedServiceCard({
//   s,
//   i,
// }) {
//   const ref = useRef(null)

//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   const rotateY = useSpring(
//     useTransform(
//       mouseX,
//       [-1, 1],
//       [-6, 6]
//     ),
//     {
//       stiffness: 160,
//       damping: 20,
//     }
//   )

//   const rotateX = useSpring(
//     useTransform(
//       mouseY,
//       [-1, 1],
//       [6, -6]
//     ),
//     {
//       stiffness: 160,
//       damping: 20,
//     }
//   )

//   const contentX = useTransform(
//     mouseX,
//     [-1, 1],
//     [-8, 8]
//   )

//   const contentY = useTransform(
//     mouseY,
//     [-1, 1],
//     [-6, 6]
//   )

//   function handleMove(e) {
//     if (!ref.current) return

//     const rect =
//       ref.current.getBoundingClientRect()

//     const x =
//       ((e.clientX - rect.left) /
//         rect.width -
//         0.5) *
//       2

//     const y =
//       ((e.clientY - rect.top) /
//         rect.height -
//         0.5) *
//       2

//     mouseX.set(x)
//     mouseY.set(y)
//   }

//   function resetMove() {
//     mouseX.set(0)
//     mouseY.set(0)
//   }

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMove}
//       onMouseLeave={resetMove}
//       className="
//         relative
//         w-full
//         h-full
//         rounded-3xl
//       "
//       style={{
//         perspective: 1400,
//       }}
//     >
//       <motion.div
//         className="
//           absolute
//           inset-0
//           rounded-3xl
//           overflow-hidden
//         "
//         style={{
//           rotateX,
//           rotateY,
//           transformStyle: 'preserve-3d',

//           background: `
//             linear-gradient(
//               135deg,
//               #101D35 0%,
//               #091321 45%,
//               #040914 100%
//             )
//           `,

//           border:
//             '1px solid rgba(94,162,255,0.65)',

//           boxShadow: `
//             0 50px 100px rgba(0,0,0,0.72),
//             0 0 70px rgba(47,123,255,0.2),
//             inset 0 1px 0 rgba(255,255,255,0.08)
//           `,
//         }}
//       >
//         {/* =================================================
//             GRID
//         ================================================= */}

//         <Blueprint active />

//         <CornerBrackets active />

//         {/* =================================================
//             BACKGROUND GLOW
//         ================================================= */}

//         <motion.div
//           className="
//             absolute
//             w-[480px]
//             h-[480px]
//             rounded-full
//             pointer-events-none
//           "
//           animate={{
//             scale: [1, 1.15, 1],
//             opacity: [0.1, 0.22, 0.1],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           style={{
//             right: '-20%',
//             top: '-35%',
//             background:
//               'radial-gradient(circle, rgba(47,123,255,0.4), transparent 70%)',
//             filter: 'blur(12px)',
//           }}
//         />

//         <motion.div
//           className="
//             absolute
//             w-[300px]
//             h-[300px]
//             rounded-full
//             pointer-events-none
//           "
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.06, 0.15, 0.06],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: 'easeInOut',
//           }}
//           style={{
//             left: '-15%',
//             bottom: '-30%',
//             background:
//               'radial-gradient(circle, rgba(47,123,255,0.3), transparent 70%)',
//             filter: 'blur(18px)',
//           }}
//         />

//         {/* =================================================
//             SCANNING LINE
//         ================================================= */}

//         <motion.div
//           className="
//             absolute
//             left-0
//             right-0
//             h-px
//             z-20
//             pointer-events-none
//           "
//           animate={{
//             top: [
//               '0%',
//               '100%',
//             ],
//             opacity: [
//               0,
//               0.9,
//               0,
//             ],
//           }}
//           transition={{
//             duration: 3.5,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           style={{
//             background: `
//               linear-gradient(
//                 90deg,
//                 transparent,
//                 ${BLUE_BRIGHT},
//                 transparent
//               )
//             `,
//             boxShadow:
//               '0 0 20px rgba(94,162,255,0.9)',
//           }}
//         />

//         {/* =================================================
//             CONTENT
//         ================================================= */}

//         <motion.div
//           className="
//             relative
//             z-30
//             h-full
//             p-7
//             md:p-10
//             lg:p-12
//             flex
//             flex-col
//           "
//           style={{
//             x: contentX,
//             y: contentY,
//             transform:
//               'translateZ(65px)',
//           }}
//         >
//           {/* TOP */}

//           <div className="flex justify-between items-start">
//             <div>
//               <span
//                 className="
//                   font-mono
//                   text-[10px]
//                   tracking-[0.3em]
//                 "
//                 style={{
//                   color: `${BLUE_LIGHT}99`,
//                 }}
//               >
//                 SELECTED SERVICE
//               </span>

//               <div
//                 className="
//                   mt-2
//                   w-24
//                   h-[2px]
//                 "
//                 style={{
//                   background:
//                     'linear-gradient(90deg, #2F7BFF, transparent)',
//                 }}
//               />
//             </div>

//             <motion.div
//               animate={{
//                 rotate: [0, 8, 0],
//                 y: [0, -4, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//               }}
//               className="
//                 w-12
//                 h-12
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//               "
//               style={{
//                 color: BLUE_BRIGHT,
//                 border:
//                   '1px solid rgba(94,162,255,0.35)',
//                 background:
//                   'rgba(47,123,255,0.08)',
//                 boxShadow:
//                   '0 0 30px rgba(47,123,255,0.16)',
//               }}
//             >
//               <FiArrowUpRight size={22} />
//             </motion.div>
//           </div>

//           {/* MAIN CONTENT */}

//           <div className="my-auto">
//             <motion.div
//               initial={{
//                 width: 0,
//               }}
//               animate={{
//                 width: 70,
//               }}
//               transition={{
//                 duration: 0.4,
//               }}
//               className="h-[2px] mb-5"
//               style={{
//                 background: BLUE_BRIGHT,
//                 boxShadow:
//                   '0 0 14px rgba(94,162,255,0.7)',
//               }}
//             />

//             <motion.h3
//               initial={{
//                 opacity: 0,
//                 y: 25,
//                 scale: 0.96,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 0.5,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 font-display
//                 font-bold
//                 text-3xl
//                 md:text-4xl
//                 lg:text-5xl
//                 leading-tight
//               "
//               style={{
//                 color: FG,
//                 textShadow:
//                   '0 0 35px rgba(94,162,255,0.22)',
//               }}
//             >
//               {s.title}
//             </motion.h3>

//             <motion.div
//               initial={{
//                 width: 0,
//               }}
//               animate={{
//                 width: 120,
//               }}
//               transition={{
//                 delay: 0.15,
//                 duration: 0.5,
//               }}
//               className="
//                 mt-5
//                 h-[2px]
//               "
//               style={{
//                 background:
//                   'linear-gradient(90deg, #2F7BFF, #5EA2FF, transparent)',
//               }}
//             />

//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 delay: 0.2,
//                 duration: 0.45,
//               }}
//               className="
//                 mt-6
//                 max-w-3xl
//                 text-sm
//                 md:text-base
//                 lg:text-lg
//                 leading-relaxed
//               "
//               style={{
//                 color: `${FG}A8`,
//               }}
//             >
//               {s.body}
//             </motion.p>

//             {/* BENEFITS */}

//             {s.benefits?.length > 0 && (
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.35,
//                   duration: 0.45,
//                 }}
//                 className="
//                   flex
//                   flex-wrap
//                   gap-2
//                   mt-7
//                 "
//               >
//                 {s.benefits.map(
//                   (benefit, index) => (
//                     <motion.span
//                       key={index}
//                       whileHover={{
//                         y: -2,
//                       }}
//                       className="
//                         px-3
//                         py-2
//                         rounded-full
//                         text-[10px]
//                         uppercase
//                         tracking-wider
//                       "
//                       style={{
//                         color: BLUE_LIGHT,
//                         background:
//                           'rgba(47,123,255,0.07)',
//                         border:
//                           '1px solid rgba(94,162,255,0.22)',
//                         boxShadow:
//                           'inset 0 0 15px rgba(47,123,255,0.04)',
//                       }}
//                     >
//                       {benefit}
//                     </motion.span>
//                   )
//                 )}
//               </motion.div>
//             )}
//           </div>

//           {/* BOTTOM */}

//           <div className="flex justify-between items-end">
//             <span
//               className="
//                 font-mono
//                 text-[9px]
//                 tracking-[0.25em]
//               "
//               style={{
//                 color: `${BLUE_LIGHT}66`,
//               }}
//             >
//               DESFLYER / 2026
//             </span>

//             <span
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 font-mono
//                 text-[9px]
//                 tracking-widest
//               "
//               style={{
//                 color: `${BLUE_LIGHT}88`,
//               }}
//             >
//               <motion.span
//                 className="
//                   w-1.5
//                   h-1.5
//                   rounded-full
//                 "
//                 animate={{
//                   scale: [
//                     0.8,
//                     1.2,
//                     0.8,
//                   ],
//                   opacity: [
//                     0.4,
//                     1,
//                     0.4,
//                   ],
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   repeat: Infinity,
//                 }}
//                 style={{
//                   background:
//                     BLUE_BRIGHT,
//                   boxShadow:
//                     '0 0 10px #5EA2FF',
//                 }}
//               />

//               ACTIVE
//             </span>
//           </div>
//         </motion.div>

//         {/* =================================================
//             NEON BOTTOM LINE
//         ================================================= */}

//         <motion.div
//           className="
//             absolute
//             bottom-0
//             left-0
//             right-0
//             h-[3px]
//             z-40
//           "
//           animate={{
//             opacity: [
//               0.4,
//               1,
//               0.4,
//             ],
//           }}
//           transition={{
//             duration: 1.7,
//             repeat: Infinity,
//           }}
//           style={{
//             background: `
//               linear-gradient(
//                 90deg,
//                 transparent,
//                 #2F7BFF,
//                 #8CC7FF,
//                 #2F7BFF,
//                 transparent
//               )
//             `,
//             boxShadow:
//               '0 0 25px rgba(47,123,255,0.85)',
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   )
// }

// /* =========================================================
//    MAIN SERVICES SECTION
// ========================================================= */

// export default function ServicesTeaser() {
//   const featured = services.slice(0, 4)

//   const [hoveredCard, setHoveredCard] =
//     useState(null)

//   if (featured.length === 0) {
//     return null
//   }

//   return (
//     <section
//       className="
//         relative
//         py-28
//         lg:py-36
//         px-6
//         lg:px-10
//         overflow-hidden
//       "
//       style={{
//         background: INK,
//       }}
//     >
//       {/* ===================================================
//           BACKGROUND RADIAL GLOW
//       =================================================== */}

//       <div
//         className="
//           absolute
//           inset-0
//           pointer-events-none
//         "
//         style={{
//           background: `
//             radial-gradient(
//               circle at 50% 40%,
//               rgba(47,123,255,0.055),
//               transparent 45%
//             )
//           `,
//         }}
//       />


//       {/* ===================================================
//           CONTENT
//       =================================================== */}

//       <div className="max-w-shell mx-auto relative z-10">
//         <Eyebrow>
//           What We Do
//         </Eyebrow>

//         <motion.h2
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="
//             mt-4
//             font-display
//             font-bold
//             text-[clamp(1.9rem,3.5vw,3rem)]
//             max-w-xl
//           "
//           style={{
//             color: FG,
//           }}
//         >
//           Engineering built around your goals
//         </motion.h2>

//         {/* =================================================
//             CARD STAGE
//         ================================================= */}

//         <div
//           className="
//             relative
//             mt-14
//             w-full
//             min-h-[520px]
//             md:h-[540px]
//           "
//           onMouseLeave={() => {
//             setHoveredCard(null)
//           }}
//         >
//           {/* ===============================================
//               NORMAL 4 CARD GRID
//           =============================================== */}

//           <motion.div
//             className="
//     absolute
//     inset-0
//     grid
//     grid-cols-4
//     gap-6
//   "
//             animate={{
//               opacity:
//                 hoveredCard === null
//                   ? 1
//                   : 0.2,
//               scale:
//                 hoveredCard === null
//                   ? 1
//                   : 0.97,
//             }}
//             transition={{
//               duration: 0.4,
//               ease: [
//                 0.22,
//                 1,
//                 0.36,
//                 1,
//               ],
//             }}
//             style={{
//               pointerEvents:
//                 hoveredCard !== null
//                   ? 'none'
//                   : 'auto',
//             }}
//           >
//             {featured.map(
//               (s, i) => (
//                 <ServiceCard
//                   key={s.slug}
//                   s={s}
//                   i={i}
//                   hoveredCard={
//                     hoveredCard
//                   }
//                   setHoveredCard={
//                     setHoveredCard
//                   }
//                 />
//               )
//             )}
//           </motion.div>

//           {/* ===============================================
//               CENTERED EXPANDED CARD
//           =============================================== */}

//           <AnimatePresence>
//             {hoveredCard !== null && (
//               <motion.div
//                 key={`expanded-${hoveredCard}`}
//                 className="
//                   absolute
//                   inset-0
//                   z-50
//                   flex
//                   items-center
//                   justify-center
//                   pointer-events-none
//                 "
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                 }}
//                 transition={{
//                   duration: 0.25,
//                 }}
//               >
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     scale: 0.72,
//                     y: 35,
//                     rotateX: 12,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                     y: 0,
//                     rotateX: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.72,
//                     y: 30,
//                     rotateX: 10,
//                   }}
//                   transition={{
//                     duration: 0.55,
//                     ease: [
//                       0.16,
//                       1,
//                       0.3,
//                       1,
//                     ],
//                   }}
//                   className="
//                     relative
//                     pointer-events-auto
//                     w-[94%]
//                     md:w-[82%]
//                     lg:w-[76%]
//                     h-[390px]
//                     md:h-[410px]
//                     lg:h-[420px]
//                   "
//                 >
//                   <ExpandedServiceCard
//                     s={
//                       featured[
//                       hoveredCard
//                       ]
//                     }
//                     i={hoveredCard}
//                   />
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   )
// }







































import { useState, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion'
import { FiArrowUpRight, FiPlus } from 'react-icons/fi'
import Eyebrow from '../ui/Eyebrow'
import { services } from '../../data/services'

/* =========================================================
   COLORS
========================================================= */

const INK = '#050912'
const PANEL = '#0A1220'
const PANEL_LIGHT = '#111D31'

const FG = '#F5F8FF'
const FG_MUTED = '#9BAAC2'

const BLUE = '#2F7BFF'
const BLUE_BRIGHT = '#5EA2FF'
const BLUE_LIGHT = '#8CC7FF'

const DEFAULT_SERVICE_IMAGE =
  "https://images.openai.com/static-rsc-4/jpHlYluJYSB07dErlBgSL8ANM9BmM6deijHFqnpd1d48WKuxHV5Ue01vrjRE4136o5KQk6wf0wN2HCJEUOXp8ihkEQ1zmqJPZKiaFvJWjB4J7Y71nQnbV7NoIFyM9uxQ6QxSwygaiqQnYx2IViIPyje3r-usCg-idcCvxCEZE0gFoXU8OKG1Qz5bkioE6ddE?purpose=fullsize"
/* =========================================================
   BLUEPRINT
========================================================= */

function Blueprint({ active = false }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: active ? 0.1 : 0.045,
        backgroundImage: `
          linear-gradient(
            rgba(94,162,255,0.18) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(94,162,255,0.18) 1px,
            transparent 1px
          )
        `,
        backgroundSize: '42px 42px',
      }}
    />
  )
}

/* =========================================================
   CORNER MARKS
========================================================= */

function CornerMarks({ active = false }) {
  const corners = [
    'top-3 left-3',
    'top-3 right-3 rotate-90',
    'bottom-3 right-3 rotate-180',
    'bottom-3 left-3 -rotate-90',
  ]

  return (
    <>
      {corners.map((position, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} w-4 h-4 pointer-events-none z-30`}
          animate={{
            opacity: active ? 1 : 0.3,
            scale: active ? 1 : 0.8,
          }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute top-0 left-0 w-4 h-px"
            style={{
              background: BLUE_BRIGHT,
              boxShadow: '0 0 8px rgba(94,162,255,0.8)',
            }}
          />

          <div
            className="absolute top-0 left-0 w-px h-4"
            style={{
              background: BLUE_BRIGHT,
              boxShadow: '0 0 8px rgba(94,162,255,0.8)',
            }}
          />
        </motion.div>
      ))}
    </>
  )
}

/* =========================================================
   DEFAULT CARD
========================================================= */

function ServiceCard({
  s,
  i,
  hoveredCard,
  setHoveredCard,
  onOpen,
}) {
  const ref = useRef(null)

  const isHovered = hoveredCard === i
  const isOther = hoveredCard !== null && hoveredCard !== i

  const image = s.image || DEFAULT_SERVICE_IMAGE

  /* -------------------------------------------------------
     3D mouse values
  ------------------------------------------------------- */

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-6, 6]),
    {
      stiffness: 180,
      damping: 22,
    }
  )

  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [5, -5]),
    {
      stiffness: 180,
      damping: 22,
    }
  )

  const imageX = useTransform(mouseX, [-1, 1], [-10, 10])
  const imageY = useTransform(mouseY, [-1, 1], [-8, 8])

  function handleMove(e) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 2

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * 2

    mouseX.set(x)
    mouseY.set(y)
  }

  function resetMove() {
    mouseX.set(0)
    mouseY.set(0)
  }

  function handleMouseEnter() {
    setHoveredCard(i)
  }

  function handleDoubleClick(e) {
    e.preventDefault()
    onOpen(i)
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
      onDoubleClick={handleDoubleClick}
      className="
        relative
        w-full
        h-full
        min-h-[300px]
        rounded-[22px]
        overflow-hidden
        text-left
        cursor-pointer
        outline-none
        group
      "
      animate={{
        opacity: isOther ? 0.18 : 1,
        scale: isOther ? 0.96 : 1,
        filter: isOther ? 'blur(2px)' : 'blur(0px)',
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        background: PANEL,
        border: '1px solid rgba(94,162,255,0.16)',
        perspective: 1200,
      }}
    >
      {/* =================================================
          OUTER GLOW
      ================================================= */}

      <motion.div
        className="absolute -inset-[1px] rounded-[22px] pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(94,162,255,0.9),
              transparent 32%,
              transparent 68%,
              rgba(47,123,255,0.8)
            )
          `,
          filter: 'blur(1px)',
        }}
      />

      {/* =================================================
          MAIN 3D PANEL
      ================================================= */}

      <motion.div
        className="
          absolute
          inset-[1px]
          rounded-[21px]
          overflow-hidden
        "
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          background: `
            linear-gradient(
              145deg,
              ${PANEL_LIGHT},
              ${PANEL}
            )
          `,
        }}
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <motion.div
          className="
            absolute
            inset-0
            overflow-hidden
          "
          animate={{
            scale: isHovered ? 1.04 : 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transform: 'translateZ(25px)',
          }}
        >
          <motion.img
            src={image}
            alt={s.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
            style={{
              x: imageX,
              y: imageY,
              scale: 1.08,
            }}
          />

          {/* Image dark overlay */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  rgba(5,9,18,0.08) 0%,
                  rgba(5,9,18,0.18) 35%,
                  rgba(5,9,18,0.94) 100%
                )
              `,
            }}
          />

          {/* Blue overlay */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  135deg,
                  rgba(47,123,255,0.22),
                  transparent 55%
                )
              `,
            }}
          />
        </motion.div>

        {/* =================================================
            BLUEPRINT
        ================================================= */}

        <Blueprint active={isHovered} />

        {/* =================================================
            CORNER MARKS
        ================================================= */}

        <CornerMarks active={isHovered} />

        {/* =================================================
            TOP INFORMATION
        ================================================= */}

        <div
          className="
            absolute
            top-5
            left-5
            right-5
            z-30
            flex
            items-center
            justify-between
          "
          style={{
            transform: 'translateZ(55px)',
          }}
        >
          <span
            className="
              px-2.5
              py-1.5
              rounded-md
              font-mono
              text-[9px]
              tracking-[0.2em]
            "
            style={{
              color: BLUE_LIGHT,
              background: 'rgba(5,9,18,0.62)',
              border: '1px solid rgba(94,162,255,0.22)',
              backdropFilter: 'blur(10px)',
            }}
          >
            SVC.0{i + 1}
          </span>

          {/* Hover indicator */}

          <motion.span
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.7,
              rotate: isHovered ? 0 : -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              w-9
              h-9
              rounded-full
              flex
              items-center
              justify-center
            "
            style={{
              color: BLUE_LIGHT,
              background: 'rgba(47,123,255,0.12)',
              border: '1px solid rgba(94,162,255,0.35)',
              boxShadow: '0 0 20px rgba(47,123,255,0.2)',
            }}
          >
            <FiPlus size={17} />
          </motion.span>
        </div>

        {/* =================================================
            BOTTOM CONTENT
        ================================================= */}

        <motion.div
          className="
            absolute
            left-6
            right-6
            bottom-6
            z-30
          "
          style={{
            transform: 'translateZ(65px)',
          }}
          animate={{
            y: isHovered ? -4 : 0,
          }}
        >
          <motion.h3
            className="
              font-display
              font-semibold
              text-xl
              md:text-[22px]
              leading-tight
            "
            animate={{
              color: isHovered ? BLUE_LIGHT : FG,
            }}
          >
            {s.title}
          </motion.h3>

          <motion.div
            className="mt-3 h-[2px] rounded-full"
            animate={{
              width: isHovered ? 90 : 38,
            }}
            transition={{
              duration: 0.35,
            }}
            style={{
              background: `
                linear-gradient(
                  90deg,
                  ${BLUE},
                  ${BLUE_BRIGHT},
                  transparent
                )
              `,
              boxShadow:
                '0 0 12px rgba(47,123,255,0.55)',
            }}
          />

          {/* Small visual indicator only */}

          <motion.div
            className="mt-3 flex items-center gap-2"
            animate={{
              opacity: isHovered ? 1 : 0.55,
              x: isHovered ? 4 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: BLUE_BRIGHT,
                boxShadow:
                  '0 0 10px rgba(94,162,255,0.9)',
              }}
            />

            <span
              className="
                font-mono
                text-[8px]
                tracking-[0.22em]
                uppercase
              "
              style={{
                color: `${BLUE_LIGHT}88`,
              }}
            >
              Explore
            </span>
          </motion.div>
        </motion.div>

        {/* =================================================
            BOTTOM NEON BORDER
        ================================================= */}

        <motion.div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[2px]
            z-40
          "
          animate={{
            opacity: isHovered ? 1 : 0.35,
          }}
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent,
                ${BLUE},
                ${BLUE_BRIGHT},
                transparent
              )
            `,
            boxShadow:
              '0 0 18px rgba(47,123,255,0.7)',
          }}
        />
      </motion.div>
    </motion.button>
  )
}

/* =========================================================
   EXPANDED CENTER CARD
========================================================= */

function ExpandedServiceCard({ s, i, onClose }) {
  const ref = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-5, 5]),
    {
      stiffness: 150,
      damping: 20,
    }
  )

  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [5, -5]),
    {
      stiffness: 150,
      damping: 20,
    }
  )

  const contentX = useTransform(mouseX, [-1, 1], [-7, 7])
  const contentY = useTransform(mouseY, [-1, 1], [-5, 5])

  function handleMove(e) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 2

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * 2

    mouseX.set(x)
    mouseY.set(y)
  }

  function resetMove() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={resetMove}
      className="
        relative
        w-full
        h-full
        rounded-[26px]
      "
      style={{
        perspective: 1400,
      }}
    >
      <motion.div
        className="
          absolute
          inset-0
          rounded-[26px]
          overflow-hidden
        "
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',

          background: `
            linear-gradient(
              135deg,
              #142644 0%,
              #0B172A 45%,
              #040914 100%
            )
          `,

          border:
            '1px solid rgba(94,162,255,0.7)',

          boxShadow: `
            0 45px 100px rgba(0,0,0,0.72),
            0 0 70px rgba(47,123,255,0.22),
            inset 0 1px 0 rgba(255,255,255,0.09)
          `,
        }}
      >
        {/* =================================================
            GRID
        ================================================= */}

        <Blueprint active />

        <CornerMarks active />

        {/* =================================================
            GLOW
        ================================================= */}

        <motion.div
          className="
            absolute
            w-[450px]
            h-[450px]
            rounded-full
            pointer-events-none
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            right: '-15%',
            top: '-40%',
            background:
              'radial-gradient(circle, rgba(47,123,255,0.45), transparent 70%)',
            filter: 'blur(14px)',
          }}
        />

        {/* =================================================
            CONTENT
        ================================================= */}

        <motion.div
          className="
            relative
            z-30
            h-full
            p-7
            md:p-9
            lg:p-11
            flex
            flex-col
          "
          style={{
            x: contentX,
            y: contentY,
            transform: 'translateZ(65px)',
          }}
        >
          {/* TOP */}

          <div className="flex items-start justify-between">
            <div>
              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.3em]
                "
                style={{
                  color: `${BLUE_LIGHT}99`,
                }}
              >
                SELECTED SERVICE / 0{i + 1}
              </span>

              <div
                className="mt-2 w-24 h-[2px]"
                style={{
                  background:
                    'linear-gradient(90deg, #2F7BFF, transparent)',
                }}
              />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                cursor-pointer
              "
              style={{
                color: BLUE_BRIGHT,
                background:
                  'rgba(47,123,255,0.08)',
                border:
                  '1px solid rgba(94,162,255,0.3)',
              }}
              aria-label="Close service"
            >
              <FiArrowUpRight size={20} />
            </button>
          </div>

          {/* MAIN */}

          <div className="my-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.45 }}
              className="h-[2px] mb-5"
              style={{
                background: BLUE_BRIGHT,
                boxShadow:
                  '0 0 14px rgba(94,162,255,0.7)',
              }}
            />

            <motion.h3
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-display
                font-bold
                text-3xl
                md:text-4xl
                lg:text-5xl
                leading-tight
              "
              style={{
                color: FG,
                textShadow:
                  '0 0 35px rgba(94,162,255,0.2)',
              }}
            >
              {s.title}
            </motion.h3>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 130 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="mt-5 h-[2px]"
              style={{
                background:
                  'linear-gradient(90deg, #2F7BFF, #5EA2FF, transparent)',
              }}
            />

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.5,
              }}
              className="
                mt-6
                max-w-3xl
                text-sm
                md:text-base
                lg:text-lg
                leading-relaxed
              "
              style={{
                color: `${FG}A8`,
              }}
            >
              {s.body}
            </motion.p>

            {/* BENEFITS */}

            {s.benefits?.length > 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.45,
                }}
                className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                "
              >
                {s.benefits.map(
                  (benefit, index) => (
                    <motion.span
                      key={index}
                      whileHover={{
                        y: -2,
                      }}
                      className="
                        px-3
                        py-2
                        rounded-full
                        text-[9px]
                        uppercase
                        tracking-wider
                      "
                      style={{
                        color: BLUE_LIGHT,
                        background:
                          'rgba(47,123,255,0.07)',
                        border:
                          '1px solid rgba(94,162,255,0.22)',
                      }}
                    >
                      {benefit}
                    </motion.span>
                  )
                )}
              </motion.div>
            )}
          </div>

          {/* BOTTOM */}

          <div className="flex items-end justify-between">
            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.25em]
              "
              style={{
                color: `${BLUE_LIGHT}66`,
              }}
            >
              DESFLYER / 2026
            </span>

            <span
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[9px]
                tracking-widest
              "
              style={{
                color: `${BLUE_LIGHT}88`,
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
                style={{
                  background: BLUE_BRIGHT,
                  boxShadow:
                    '0 0 10px #5EA2FF',
                }}
              />

              ACTIVE
            </span>
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM NEON LINE
        ================================================= */}

        <motion.div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[3px]
            z-40
          "
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
          }}
          style={{
            background: `
              linear-gradient(
                90deg,
                transparent,
                #2F7BFF,
                #8CC7FF,
                #2F7BFF,
                transparent
              )
            `,
            boxShadow:
              '0 0 25px rgba(47,123,255,0.85)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

/* =========================================================
   MAIN SERVICES
========================================================= */

export default function ServicesTeaser() {
  const serviceImages = [
    'https://images.openai.com/static-rsc-4/jpHlYluJYSB07dErlBgSL8ANM9BmM6deijHFqnpd1d48WKuxHV5Ue01vrjRE4136o5KQk6wf0wN2HCJEUOXp8ihkEQ1zmqJPZKiaFvJWjB4J7Y71nQnbV7NoIFyM9uxQ6QxSwygaiqQnYx2IViIPyje3r-usCg-idcCvxCEZE0gFoXU8OKG1Qz5bkioE6ddE?purpose=fullsize',
    'https://images.openai.com/static-rsc-4/0F3ctBmFXizmTuvEt3ssL7UXOt2tNyj_tRIZbeIwH7D4AwnYesuBVHjUK5L6-QCLaOqjz2PA9PiULbdfd1bsQh9zbCImlJZ_PLdKixaIy7t8kCiuWz0oyWywbLm3K79YyfmJT9RhA1AJcOJbXyovB3OwTXLlz2qnW2lVKDjJdlHqydkQA85Nko_2MJJczE2b?purpose=fullsize',
    'https://images.openai.com/static-rsc-4/MnaLaX897QAJWt9_FQYg8ahmnFuEGM5pMZMADSR7uN3gCabAikQOFWiA5Gk3aYEKhMaG2cIkMYNZOb0lyInV_imXAXdJSJ9LnBGvTTreMWUHxRKkCQZ3J2ygzg8QJ5ear14MLvht7AlaUns1x3cc5e11wYBxCEvGo_bJ6JdOa5SVvRdG7ryjGyFMREvCwrAg?purpose=fullsize',
    'https://images.openai.com/static-rsc-4/KpS03-lBTpaFU-ettUAgwE9xW_ijxVdjGe2YHpj9YRHemSA0_WOqPNsLaiMNPEvs3Q1wnLKleZux1FoNLlAScE5Vj0lRtT_U5xgUAzhWPiRAtTZtWCLv4c95CKkhVaNLiE_vkVcNWH8F2eceS-ARTf7iNAKVm3fDfFAISx7hUG1lM3mq-wHtgzOgkvIqr0zJ?purpose=fullsize',
  ]

  const featured = services.slice(0, 4).map((service, index) => ({
    ...service,
    image: serviceImages[index],
  }))
  const [hoveredCard, setHoveredCard] = useState(null)
  const [openedCard, setOpenedCard] = useState(null)

  if (featured.length === 0) {
    return null
  }

  return (
    <section
      className="
        relative
        py-28
        lg:py-36
        px-6
        lg:px-10
        overflow-hidden
      "
      style={{
        background: INK,
      }}
    >
      {/* =================================================
          SECTION GLOW
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              circle at 50% 45%,
              rgba(47,123,255,0.06),
              transparent 48%
            )
          `,
        }}
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="max-w-shell mx-auto relative z-10">
        <Eyebrow>
          What We Do
        </Eyebrow>

        <motion.h2
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-4
            font-display
            font-bold
            text-[clamp(1.9rem,3.5vw,3rem)]
            max-w-xl
          "
          style={{
            color: FG,
          }}
        >
          Engineering built around your goals
        </motion.h2>

        {/* =================================================
            CARD AREA
        ================================================= */}

        <div
          className="
            relative
            mt-14
            w-full
            min-h-[320px]
            md:h-[340px]
          "
          onMouseLeave={() => {
            if (openedCard === null) {
              setHoveredCard(null)
            }
          }}
        >
          {/* =================================================
              FOUR CARDS IN ONE ROW
          ================================================= */}

          <motion.div
            className="
              absolute
              inset-0
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
            animate={{
              opacity:
                openedCard === null ? 1 : 0.12,
              scale:
                openedCard === null ? 1 : 0.97,
            }}
            transition={{
              duration: 0.4,
            }}
            style={{
              pointerEvents:
                openedCard !== null
                  ? 'none'
                  : 'auto',
            }}
          >
            {featured.map((s, i) => (
              <ServiceCard
                key={s.slug}
                s={s}
                i={i}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                onOpen={setOpenedCard}
              />
            ))}
          </motion.div>

          {/* =================================================
              CENTER EXPANDED CARD
          ================================================= */}

          <AnimatePresence>
            {openedCard !== null && (
              <motion.div
                key={`expanded-${openedCard}`}
                className="
                  absolute
                  inset-0
                  z-50
                  flex
                  items-center
                  justify-center
                "
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 35,
                    rotateX: 10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    y: 25,
                    rotateX: 8,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                  className="
                    relative
                    w-[92%]
                    md:w-[78%]
                    lg:w-[68%]
                    h-[300px]
                    md:h-[320px]
                    lg:h-[330px]
                  "
                >
                  <ExpandedServiceCard
                    s={featured[openedCard]}
                    i={openedCard}
                    onClose={() => {
                      setOpenedCard(null)
                      setHoveredCard(null)
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}