// import { motion } from "framer-motion"
// import Eyebrow from "../ui/Eyebrow"
// import { testimonials } from "../../data/testimonials"

// const positions = [
//   "top-0 left-1/2 -translate-x-1/2",
//   "left-0 top-1/2 -translate-y-1/2",
//   "right-0 top-1/2 -translate-y-1/2",
//   "bottom-0 left-1/2 -translate-x-1/2"
// ]

// const messages = [
//   {
//     side: "developer",
//     text: "Let's build something meaningful."
//   },
//   {
//     side: "client",
//     text: "This feels exactly like our vision."
//   },
//   {
//     side: "developer",
//     text: "Designed around your users."
//   }
// ]

// export default function Testimonials() {
//   return (
//     <section
//       className="
//         py-28
//         lg:py-36
//         px-6
//         lg:px-10
//         bg-[var(--surface-2)]
//         overflow-hidden
//       "
//     >
//       <div className="max-w-shell mx-auto">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* =====================================================
//               LEFT CONTENT
//               ===================================================== */}

//           <div>

//             <Eyebrow>
//               Client Success
//             </Eyebrow>

//             <h2
//               className="
//                 mt-5
//                 font-display
//                 font-bold
//                 text-[clamp(2rem,4vw,3rem)]
//                 leading-tight
//                 text-[var(--fg)]
//               "
//             >
//               Discover how DesFlyer has transformed businesses
//             </h2>

//             <p
//               className="
//                 mt-6
//                 max-w-md
//                 text-[var(--fg)]/60
//                 leading-7
//               "
//             >
//               Building digital products through innovation,
//               technology and engineering excellence.
//             </p>

//           </div>


//           {/* =====================================================
//               RIGHT — DEVELOPER / CLIENT CONVERSATION
//               ===================================================== */}

//           <div
//             className="
//               relative
//               h-[550px]
//               flex
//               items-center
//               justify-center
//             "
//           >

//             {/* =================================================
//                 BACKGROUND GRID
//                 ================================================= */}

//             <div
//               className="
//                 absolute
//                 inset-8
//                 opacity-[0.035]
//                 pointer-events-none
//               "
//               style={{
//                 backgroundImage: `
//                   linear-gradient(
//                     to right,
//                     currentColor 1px,
//                     transparent 1px
//                   ),
//                   linear-gradient(
//                     to bottom,
//                     currentColor 1px,
//                     transparent 1px
//                   )
//                 `,
//                 backgroundSize: "32px 32px"
//               }}
//             />


//             {/* =================================================
//                 TOP STATUS BAR
//                 ================================================= */}

//             <div
//               className="
//                 absolute
//                 top-[18px]
//                 left-1/2
//                 -translate-x-1/2
//                 flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-cyan-400/10
//                 bg-[var(--surface-2)]
//                 px-3
//                 py-1.5
//               "
//             >

//               <motion.span
//                 animate={{
//                   opacity: [0.35, 1, 0.35]
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity
//                 }}
//                 className="
//                   h-1.5
//                   w-1.5
//                   rounded-full
//                   bg-cyan-400
//                 "
//               />

//               <span
//                 className="
//                   font-mono
//                   text-[8px]
//                   tracking-[0.22em]
//                   text-[var(--fg)]/40
//                 "
//               >
//                 LIVE COLLABORATION
//               </span>

//             </div>


//             {/* =================================================
//                 CONNECTION LINE
//                 ================================================= */}

//             <div
//               className="
//                 absolute
//                 left-1/2
//                 top-1/2
//                 h-px
//                 w-[270px]
//                 -translate-x-1/2
//                 bg-cyan-400/10
//               "
//             />

//             <motion.div
//               animate={{
//                 x: [-125, 125]
//               }}
//               transition={{
//                 duration: 2.6,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="
//                 absolute
//                 left-1/2
//                 top-1/2
//                 h-1
//                 w-1
//                 -translate-x-1/2
//                 rounded-full
//                 bg-cyan-300
//                 shadow-[0_0_12px_#00e5ff]
//               "
//             />


//             {/* =================================================
//                 DEVELOPER PANEL
//                 ================================================= */}

//             <motion.div
//               animate={{
//                 y: [0, -3, 0]
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="
//                 absolute
//                 left-[8%]
//                 top-1/2
//                 z-20
//                 w-[205px]
//                 -translate-y-1/2
//               "
//             >

//               <div
//                 className="
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-cyan-400/15
//                   bg-[#071115]/95
//                   shadow-[0_20px_60px_rgba(0,0,0,.2)]
//                 "
//               >

//                 {/* Window header */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                     border-b
//                     border-white/[0.05]
//                     px-4
//                     py-3
//                   "
//                 >

//                   <div className="flex items-center gap-2">

//                     <span
//                       className="
//                         h-6
//                         w-6
//                         rounded-lg
//                         border
//                         border-cyan-400/20
//                         bg-cyan-400/[0.04]
//                         flex
//                         items-center
//                         justify-center
//                         font-mono
//                         text-[8px]
//                         text-cyan-300
//                       "
//                     >
//                       D
//                     </span>

//                     <div>

//                       <div
//                         className="
//                           text-[10px]
//                           font-medium
//                           text-[var(--fg)]
//                         "
//                       >
//                         DesFlyer
//                       </div>

//                       <div
//                         className="
//                           mt-0.5
//                           font-mono
//                           text-[7px]
//                           text-cyan-400/50
//                         "
//                       >
//                         DEVELOPER
//                       </div>

//                     </div>

//                   </div>

//                   <span
//                     className="
//                       h-1.5
//                       w-1.5
//                       rounded-full
//                       bg-emerald-400
//                     "
//                   />

//                 </div>


//                 {/* Code area */}

//                 <div
//                   className="
//                     px-4
//                     py-4
//                     font-mono
//                     text-[8px]
//                     leading-5
//                     text-[var(--fg)]/30
//                   "
//                 >

//                   <div>
//                     <span className="text-cyan-400/60">const</span>{" "}
//                     experience =
//                   </div>

//                   <div className="pl-3">
//                     build<span className="text-cyan-400/50">()</span>
//                   </div>

//                   <div className="mt-2 text-[var(--fg)]/20">
//                     // strategy
//                   </div>

//                   <div className="text-cyan-300/40">
//                     userFirst: true
//                   </div>

//                   <div className="text-cyan-300/40">
//                     scalable: true
//                   </div>

//                 </div>


//                 {/* Developer message */}

//                 <motion.div
//                   animate={{
//                     opacity: [0.65, 1, 0.65]
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity
//                   }}
//                   className="
//                     mx-4
//                     mb-4
//                     rounded-xl
//                     rounded-bl-sm
//                     bg-cyan-400/[0.06]
//                     px-3
//                     py-2.5
//                   "
//                 >

//                   <p
//                     className="
//                       text-[9px]
//                       leading-4
//                       text-cyan-100/65
//                     "
//                   >
//                     {messages[0].text}
//                   </p>

//                 </motion.div>

//               </div>

//             </motion.div>


//             {/* =================================================
//                 CLIENT PANEL
//                 ================================================= */}

//             <motion.div
//               animate={{
//                 y: [0, 3, 0]
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 0.5
//               }}
//               className="
//                 absolute
//                 right-[8%]
//                 top-1/2
//                 z-20
//                 w-[205px]
//                 -translate-y-1/2
//               "
//             >

//               <div
//                 className="
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-white/[0.08]
//                   bg-white/[0.025]
//                   backdrop-blur-xl
//                   shadow-[0_20px_60px_rgba(0,0,0,.18)]
//                 "
//               >

//                 {/* Client header */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                     border-b
//                     border-white/[0.05]
//                     px-4
//                     py-3
//                   "
//                 >

//                   <div className="flex items-center gap-2">

//                     <span
//                       className="
//                         h-6
//                         w-6
//                         rounded-lg
//                         border
//                         border-white/10
//                         bg-white/[0.04]
//                         flex
//                         items-center
//                         justify-center
//                         font-mono
//                         text-[8px]
//                         text-[var(--fg)]/60
//                       "
//                     >
//                       C
//                     </span>

//                     <div>

//                       <div
//                         className="
//                           text-[10px]
//                           font-medium
//                           text-[var(--fg)]
//                         "
//                       >
//                         Client
//                       </div>

//                       <div
//                         className="
//                           mt-0.5
//                           font-mono
//                           text-[7px]
//                           text-[var(--fg)]/30
//                         "
//                       >
//                         PARTNER
//                       </div>

//                     </div>

//                   </div>

//                   <span
//                     className="
//                       h-1.5
//                       w-1.5
//                       rounded-full
//                       bg-cyan-400
//                     "
//                   />

//                 </div>


//                 {/* Client conversation */}

//                 <div className="px-4 py-4">

//                   <div
//                     className="
//                       rounded-xl
//                       rounded-br-sm
//                       bg-white/[0.045]
//                       px-3
//                       py-2.5
//                     "
//                   >

//                     <p
//                       className="
//                         text-[9px]
//                         leading-4
//                         text-[var(--fg)]/60
//                       "
//                     >
//                       {testimonials[0]?.quote ||
//                         "The final experience exceeded our expectations."}
//                     </p>

//                   </div>


//                   {/* Typing indicator */}

//                   <div
//                     className="
//                       mt-3
//                       flex
//                       items-center
//                       gap-1.5
//                     "
//                   >

//                     <span
//                       className="
//                         font-mono
//                         text-[7px]
//                         text-[var(--fg)]/25
//                       "
//                     >
//                       typing
//                     </span>

//                     {[0, 1, 2].map((i) => (

//                       <motion.span
//                         key={i}
//                         animate={{
//                           y: [0, -3, 0],
//                           opacity: [0.2, 0.8, 0.2]
//                         }}
//                         transition={{
//                           duration: 1,
//                           repeat: Infinity,
//                           delay: i * 0.15
//                         }}
//                         className="
//                           h-1
//                           w-1
//                           rounded-full
//                           bg-cyan-400
//                         "
//                       />

//                     ))}

//                   </div>

//                 </div>

//               </div>

//             </motion.div>


//             {/* =================================================
//                 CENTER COLLABORATION BADGE
//                 ================================================= */}

//             <motion.div
//               animate={{
//                 scale: [1, 1.05, 1]
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="
//                 absolute
//                 left-1/2
//                 top-1/2
//                 z-30
//                 flex
//                 h-[76px]
//                 w-[76px]
//                 -translate-x-1/2
//                 -translate-y-1/2
//                 items-center
//                 justify-center
//                 rounded-2xl
//                 border
//                 border-cyan-400/20
//                 bg-[#071216]/95
//                 shadow-[0_0_35px_rgba(0,229,255,.08)]
//               "
//             >

//               <div className="text-center">

//                 <div
//                   className="
//                     font-mono
//                     text-[8px]
//                     tracking-[0.18em]
//                     text-cyan-400/80
//                   "
//                 >
//                   BUILD
//                 </div>

//                 <div
//                   className="
//                     mt-1
//                     text-[7px]
//                     tracking-[0.08em]
//                     text-[var(--fg)]/30
//                   "
//                 >
//                   TOGETHER
//                 </div>

//               </div>

//             </motion.div>


//             {/* =================================================
//                 FLOATING QUOTE MARK
//                 ================================================= */}

//             <motion.div
//               animate={{
//                 y: [0, -5, 0],
//                 opacity: [0.4, 0.8, 0.4]
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="
//                 absolute
//                 top-[90px]
//                 left-1/2
//                 z-30
//                 -translate-x-1/2
//                 font-serif
//                 text-4xl
//                 text-cyan-400/25
//               "
//             >
//               “
//             </motion.div>


//             {/* =================================================
//                 FOUR TESTIMONIAL SIGNAL CARDS
//                 ================================================= */}

//             {testimonials.slice(0, 4).map((t, i) => (

//               <motion.div
//                 key={i}
//                 initial={{
//                   opacity: 0,
//                   scale: 0.94
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1
//                 }}
//                 viewport={{
//                   once: true
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: i * 0.12
//                 }}
//                 whileHover={{
//                   y: -4,
//                   zIndex: 50
//                 }}
//                 className={`
//                   absolute
//                   ${positions[i]}
//                   z-40
//                   w-56
//                 `}
//               >

//                 <div
//                   className="
//                     rounded-xl
//                     border
//                     border-white/[0.07]
//                     bg-[var(--surface-2)]/90
//                     p-4
//                     backdrop-blur-xl
//                     transition-all
//                     duration-300
//                     hover:border-cyan-400/30
//                     hover:shadow-[0_16px_40px_rgba(0,0,0,.18)]
//                   "
//                 >

//                   <div
//                     className="
//                       mb-2.5
//                       flex
//                       items-center
//                       justify-between
//                     "
//                   >

//                     <span
//                       className="
//                         font-mono
//                         text-[8px]
//                         tracking-[0.18em]
//                         text-cyan-400/60
//                       "
//                     >
//                       VOICE_{String(i + 1).padStart(2, "0")}
//                     </span>

//                     <span
//                       className="
//                         h-1
//                         w-1
//                         rounded-full
//                         bg-cyan-400/60
//                       "
//                     />

//                   </div>

//                   <p
//                     className="
//                       line-clamp-3
//                       text-[10px]
//                       leading-[1.55]
//                       text-[var(--fg)]/55
//                     "
//                   >
//                     "{t.quote}"
//                   </p>

//                 </div>

//               </motion.div>

//             ))}


//             {/* =================================================
//                 BOTTOM LABEL
//                 ================================================= */}

//             <div
//               className="
//                 absolute
//                 bottom-[12px]
//                 left-1/2
//                 -translate-x-1/2
//                 whitespace-nowrap
//                 font-mono
//                 text-[7px]
//                 tracking-[0.3em]
//                 text-[var(--fg)]/20
//               "
//             >
//               IDEAS → DIALOGUE → DIGITAL EXPERIENCE
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }






// // // import { motion } from "framer-motion";
// // // import Eyebrow from "../ui/Eyebrow";
// // // import { testimonials } from "../../data/testimonials";

// // // const orbitNodes = [
// // //   { angle: 0, radius: 230 },
// // //   { angle: 90, radius: 230 },
// // //   { angle: 180, radius: 230 },
// // //   { angle: 270, radius: 230 },
// // // ];

// // // export default function Testimonials() {
// // //   return (
// // //     <section
// // //       className="
// // //       relative
// // //       overflow-hidden
// // //       py-28
// // //       lg:py-36
// // //       px-6
// // //       lg:px-10
// // //       bg-[var(--surface-2)]
// // //     "
// // //     >
// // //       {/* Background Glow */}

// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">

// // //         <motion.div
// // //           animate={{
// // //             scale: [1, 1.25, 1],
// // //             opacity: [0.18, 0.35, 0.18],
// // //           }}
// // //           transition={{
// // //             duration: 8,
// // //             repeat: Infinity,
// // //             ease: "easeInOut",
// // //           }}
// // //           className="
// // //             absolute
// // //             left-1/2
// // //             top-1/2
// // //             -translate-x-1/2
// // //             -translate-y-1/2
// // //             h-[700px]
// // //             w-[700px]
// // //             rounded-full
// // //             blur-[140px]
// // //             bg-cyan-500/10
// // //           "
// // //         />

// // //       </div>

// // //       <div className="relative max-w-shell mx-auto">

// // //         <div className="grid lg:grid-cols-2 gap-20 items-center">

// // //           {/* LEFT */}

// // //           <div>

// // //             <Eyebrow>
// // //               Client Success
// // //             </Eyebrow>

// // //             <h2
// // //               className="
// // //                 mt-5
// // //                 font-display
// // //                 font-bold
// // //                 text-[clamp(2rem,4vw,3.3rem)]
// // //                 leading-tight
// // //                 text-[var(--fg)]
// // //               "
// // //             >
// // //               Trusted by ambitious
// // //               <br />
// // //               founders &
// // //               <span className="text-cyan-400">
// // //                 {" "}growing brands
// // //               </span>
// // //             </h2>

// // //             <p
// // //               className="
// // //                 mt-6
// // //                 max-w-lg
// // //                 leading-8
// // //                 text-[var(--fg)]/65
// // //               "
// // //             >
// // //               Every project is engineered with precision,
// // //               creativity and scalable technology.
// // //               Our clients become long-term partners—not
// // //               one-time customers.
// // //             </p>

// // //           </div>

// // //           {/* AI NETWORK */}

// // //           <div
// // //             className="
// // //               relative
// // //               flex
// // //               items-center
// // //               justify-center
// // //               h-[650px]
// // //             "
// // //           >

// // //             {/* OUTER ORBITS */}

// // //             {[360, 280, 190].map((size, i) => (

// // //               <motion.div
// // //                 key={size}
// // //                 animate={{
// // //                   rotate: i % 2 === 0 ? 360 : -360,
// // //                 }}
// // //                 transition={{
// // //                   duration: 25 + i * 8,
// // //                   repeat: Infinity,
// // //                   ease: "linear",
// // //                 }}
// // //                 className="
// // //                   absolute
// // //                   rounded-full
// // //                   border
// // //                   border-cyan-400/20
// // //                 "
// // //                 style={{
// // //                   width: size,
// // //                   height: size,
// // //                 }}
// // //               />

// // //             ))}

// // //             {/* PARTICLES */}

// // //             {Array.from({ length: 25 }).map((_, i) => (

// // //               <motion.span
// // //                 key={i}
// // //                 animate={{
// // //                   y: [-12, 12, -12],
// // //                   opacity: [0.3, 1, 0.3],
// // //                 }}
// // //                 transition={{
// // //                   duration: 2 + Math.random() * 3,
// // //                   repeat: Infinity,
// // //                   delay: Math.random() * 2,
// // //                 }}
// // //                 className="
// // //                   absolute
// // //                   rounded-full
// // //                   bg-cyan-300
// // //                   shadow-[0_0_12px_#22d3ee]
// // //                 "
// // //                 style={{
// // //                   width: 3,
// // //                   height: 3,
// // //                   left: `${15 + Math.random() * 70}%`,
// // //                   top: `${15 + Math.random() * 70}%`,
// // //                 }}
// // //               />

// // //             ))}

// // //             {/* CENTER AI CORE */}

// // //             <motion.div
// // //               animate={{
// // //                 rotate: 360,
// // //               }}
// // //               transition={{
// // //                 duration: 22,
// // //                 repeat: Infinity,
// // //                 ease: "linear",
// // //               }}
// // //               className="
// // //                 absolute
// // //                 h-56
// // //                 w-56
// // //                 rounded-full
// // //                 border
// // //                 border-cyan-400/30
// // //                 flex
// // //                 items-center
// // //                 justify-center
// // //               "
// // //             >

// // //               <div
// // //                 className="
// // //                   absolute
// // //                   inset-0
// // //                   rounded-full
// // //                   bg-cyan-500/10
// // //                   blur-3xl
// // //                 "
// // //               />

// // //               <svg
// // //                 viewBox="0 0 220 220"
// // //                 className="absolute inset-0 w-full h-full"
// // //               >
// // //                 <defs>
// // //                   <linearGradient
// // //                     id="ring"
// // //                     x1="0%"
// // //                     x2="100%"
// // //                   >
// // //                     <stop
// // //                       offset="0%"
// // //                       stopColor="#22d3ee"
// // //                     />
// // //                     <stop
// // //                       offset="100%"
// // //                       stopColor="#3b82f6"
// // //                     />
// // //                   </linearGradient>
// // //                 </defs>

// // //                 <circle
// // //                   cx="110"
// // //                   cy="110"
// // //                   r="90"
// // //                   stroke="url(#ring)"
// // //                   strokeWidth="2"
// // //                   fill="none"
// // //                   strokeOpacity=".35"
// // //                 />

// // //                 <circle
// // //                   cx="110"
// // //                   cy="110"
// // //                   r="68"
// // //                   stroke="#22d3ee"
// // //                   strokeWidth="1"
// // //                   fill="none"
// // //                   strokeOpacity=".2"
// // //                 />

// // //               </svg>

// // //               <motion.div
// // //                 animate={{
// // //                   scale: [1, 1.08, 1],
// // //                 }}
// // //                 transition={{
// // //                   duration: 2.5,
// // //                   repeat: Infinity,
// // //                 }}
// // //                 className="
// // //                   relative
// // //                   z-20
// // //                   h-32
// // //                   w-32
// // //                   rounded-full
// // //                   border
// // //                   border-cyan-400/40
// // //                   bg-slate-900/70
// // //                   backdrop-blur-xl
// // //                   flex
// // //                   flex-col
// // //                   items-center
// // //                   justify-center
// // //                   shadow-[0_0_50px_rgba(34,211,238,.35)]
// // //                 "
// // //               >

// // //                 <div
// // //                   className="
// // //                     h-3
// // //                     w-3
// // //                     rounded-full
// // //                     bg-cyan-400
// // //                     animate-pulse
// // //                     shadow-[0_0_20px_#22d3ee]
// // //                   "
// // //                 />

// // //                 <p className="mt-3 text-cyan-300 font-bold tracking-[0.35em] text-xs">
// // //                   DESFLYER
// // //                 </p>

// // //                 <p className="text-[10px] text-cyan-200/70 mt-1 tracking-[0.25em]">
// // //                   AI CORE
// // //                 </p>

// // //               </motion.div>

// // //             </motion.div>
// // //                         {/* CONNECTION LINES */}

// // //             <svg
// // //               className="absolute inset-0 w-full h-full pointer-events-none"
// // //               viewBox="0 0 650 650"
// // //             >
// // //               {orbitNodes.map((node, i) => {
// // //                 const angle = (node.angle * Math.PI) / 180;
// // //                 const x = 325 + Math.cos(angle) * node.radius;
// // //                 const y = 325 + Math.sin(angle) * node.radius;

// // //                 return (
// // //                   <g key={i}>
// // //                     <line
// // //                       x1="325"
// // //                       y1="325"
// // //                       x2={x}
// // //                       y2={y}
// // //                       stroke="#22d3ee"
// // //                       strokeOpacity=".18"
// // //                       strokeWidth="1.2"
// // //                     />

// // //                     <motion.circle
// // //                       cx={x}
// // //                       cy={y}
// // //                       r="3"
// // //                       fill="#22d3ee"
// // //                       animate={{
// // //                         opacity: [0.3, 1, 0.3],
// // //                         r: [3, 5, 3],
// // //                       }}
// // //                       transition={{
// // //                         duration: 2,
// // //                         repeat: Infinity,
// // //                         delay: i * 0.4,
// // //                       }}
// // //                     />
// // //                   </g>
// // //                 );
// // //               })}
// // //             </svg>

// // //             {/* FLOATING TESTIMONIAL NODES */}

// // //             {testimonials.slice(0, 4).map((item, i) => {

// // //               const node = orbitNodes[i];

// // //               const x =
// // //                 Math.cos((node.angle * Math.PI) / 180) *
// // //                 node.radius;

// // //               const y =
// // //                 Math.sin((node.angle * Math.PI) / 180) *
// // //                 node.radius;

// // //               return (

// // //                 <motion.div
// // //                   key={i}
// // //                   initial={{
// // //                     opacity: 0,
// // //                     scale: 0.7,
// // //                   }}
// // //                   whileInView={{
// // //                     opacity: 1,
// // //                     scale: 1,
// // //                   }}
// // //                   viewport={{
// // //                     once: true,
// // //                   }}
// // //                   transition={{
// // //                     delay: i * 0.15,
// // //                   }}
// // //                   animate={{
// // //                     y: [0, -10, 0],
// // //                   }}
// // //                   whileHover={{
// // //                     scale: 1.08,
// // //                     y: -12,
// // //                   }}
// // //                   style={{
// // //                     left: `calc(50% + ${x}px - 130px)`,
// // //                     top: `calc(50% + ${y}px - 90px)`,
// // //                   }}
// // //                   className="
// // //                     absolute
// // //                     w-[260px]
// // //                   "
// // //                 >

// // //                   <div
// // //                     className="
// // //                       relative
// // //                       rounded-3xl
// // //                       border
// // //                       border-cyan-400/20
// // //                       bg-slate-900/70
// // //                       backdrop-blur-2xl
// // //                       overflow-hidden
// // //                       p-6
// // //                       transition-all
// // //                       duration-500
// // //                       hover:border-cyan-400/60
// // //                       hover:shadow-[0_0_45px_rgba(34,211,238,.25)]
// // //                     "
// // //                   >

// // //                     {/* Animated Border */}

// // //                     <motion.div
// // //                       animate={{
// // //                         rotate: 360,
// // //                       }}
// // //                       transition={{
// // //                         duration: 10,
// // //                         repeat: Infinity,
// // //                         ease: "linear",
// // //                       }}
// // //                       className="
// // //                         absolute
// // //                         -inset-24
// // //                         opacity-30
// // //                       "
// // //                       style={{
// // //                         background:
// // //                           "conic-gradient(from 0deg, transparent, rgba(34,211,238,.4), transparent)",
// // //                       }}
// // //                     />

// // //                     {/* Header */}

// // //                     <div className="relative flex items-center gap-3 mb-5">

// // //                       <motion.span
// // //                         animate={{
// // //                           scale: [1, 1.4, 1],
// // //                         }}
// // //                         transition={{
// // //                           duration: 2,
// // //                           repeat: Infinity,
// // //                         }}
// // //                         className="
// // //                           h-3
// // //                           w-3
// // //                           rounded-full
// // //                           bg-cyan-400
// // //                           shadow-[0_0_20px_#22d3ee]
// // //                         "
// // //                       />

// // //                       <div>

// // //                         <p className="font-semibold text-white">
// // //                           {item.name}
// // //                         </p>

// // //                         <p className="text-xs text-cyan-300">
// // //                           {item.role}
// // //                         </p>

// // //                       </div>

// // //                     </div>

// // //                     {/* Quote */}

// // //                     <p
// // //                       className="
// // //                         relative
// // //                         text-sm
// // //                         leading-7
// // //                         text-slate-300
// // //                         line-clamp-5
// // //                       "
// // //                     >
// // //                       "{item.quote}"
// // //                     </p>

// // //                     {/* Rating */}

// // //                     <div className="flex gap-1 mt-6">

// // //                       {Array.from({ length: 5 }).map((_, index) => (

// // //                         <motion.span
// // //                           key={index}
// // //                           animate={{
// // //                             opacity: [0.5, 1, 0.5],
// // //                           }}
// // //                           transition={{
// // //                             duration: 2,
// // //                             repeat: Infinity,
// // //                             delay: index * 0.1,
// // //                           }}
// // //                           className="
// // //                             h-2
// // //                             w-2
// // //                             rounded-full
// // //                             bg-cyan-300
// // //                           "
// // //                         />

// // //                       ))}

// // //                     </div>

// // //                   </div>

// // //                 </motion.div>

// // //               );

// // //             })}
// // //                     {/* ================= BOTTOM METRICS ================= */}

// // //         <motion.div
// // //           initial={{ opacity: 0, y: 40 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: .6 }}
// // //           className="mt-28 grid md:grid-cols-4 gap-6"
// // //         >

// // //           {[
// // //             {
// // //               label: "Projects",
// // //               value: "120+",
// // //             },
// // //             {
// // //               label: "Clients",
// // //               value: "48",
// // //             },
// // //             {
// // //               label: "Countries",
// // //               value: "12",
// // //             },
// // //             {
// // //               label: "Satisfaction",
// // //               value: "99%",
// // //             },
// // //           ].map((item, i) => (

// // //             <motion.div
// // //               key={i}
// // //               whileHover={{
// // //                 y: -8,
// // //                 scale: 1.03,
// // //               }}
// // //               className="
// // //                 relative
// // //                 overflow-hidden
// // //                 rounded-3xl
// // //                 border
// // //                 border-cyan-400/20
// // //                 bg-white/[0.03]
// // //                 backdrop-blur-xl
// // //                 p-8
// // //               "
// // //             >

// // //               <motion.div
// // //                 animate={{
// // //                   opacity: [.2,.5,.2],
// // //                   scale: [1,1.2,1]
// // //                 }}
// // //                 transition={{
// // //                   duration:4,
// // //                   repeat:Infinity
// // //                 }}
// // //                 className="
// // //                   absolute
// // //                   -right-16
// // //                   -top-16
// // //                   w-40
// // //                   h-40
// // //                   rounded-full
// // //                   bg-cyan-500/10
// // //                   blur-3xl
// // //                 "
// // //               />

// // //               <div className="relative">

// // //                 <div className="
// // //                   text-5xl
// // //                   font-black
// // //                   text-cyan-300
// // //                 ">
// // //                   {item.value}
// // //                 </div>

// // //                 <div className="
// // //                   mt-2
// // //                   text-sm
// // //                   tracking-[.3em]
// // //                   uppercase
// // //                   text-slate-400
// // //                 ">
// // //                   {item.label}
// // //                 </div>

// // //               </div>

// // //             </motion.div>

// // //           ))}

// // //         </motion.div>

// // //       </div>

// // //       <style>{`
// // //         @keyframes spinSlow{
// // //           from{
// // //             transform:rotate(0deg);
// // //           }
// // //           to{
// // //             transform:rotate(360deg);
// // //           }
// // //         }

// // //         .spinSlow{
// // //           animation:spinSlow 28s linear infinite;
// // //         }

// // //         @keyframes pulseGrid{
// // //           0%{
// // //             opacity:.25;
// // //           }
// // //           50%{
// // //             opacity:.5;
// // //           }
// // //           100%{
// // //             opacity:.25;
// // //           }
// // //         }

// // //         .pulseGrid{
// // //           animation:pulseGrid 5s ease-in-out infinite;
// // //         }
// // //       `}</style>

// // //     </section>

// // //   );
// // // }


// import { motion } from "framer-motion";
// import Eyebrow from "../ui/Eyebrow";
// import { testimonials } from "../../data/testimonials";

// const orbitNodes = [
//     { angle: 0, radius: 230 },
//     { angle: 90, radius: 230 },
//     { angle: 180, radius: 230 },
//     { angle: 270, radius: 230 },
// ];

// export default function Testimonials() {
//     return (
//         <section
//             className="
//         relative
//         overflow-hidden
//         py-28
//         lg:py-36
//         px-6
//         lg:px-10
//         bg-[var(--surface-2)]
//       "
//         >
//             {/* Background Glow */}

//             <div className="absolute inset-0 overflow-hidden pointer-events-none">

//                 <motion.div
//                     animate={{
//                         scale: [1, 1.25, 1],
//                         opacity: [0.18, 0.35, 0.18],
//                     }}
//                     transition={{
//                         duration: 8,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                     }}
//                     className="
//             absolute
//             left-1/2
//             top-1/2
//             -translate-x-1/2
//             -translate-y-1/2
//             h-[700px]
//             w-[700px]
//             rounded-full
//             blur-[140px]
//             bg-cyan-500/10
//           "
//                 />

//             </div>

//             <div className="relative max-w-shell mx-auto">

//                 <div className="grid lg:grid-cols-2 gap-20 items-center">

//                     {/* LEFT CONTENT */}

//                     <div>

//                         <Eyebrow>
//                             Client Success
//                         </Eyebrow>

//                         <h2
//                             className="
//                 mt-5
//                 font-display
//                 font-bold
//                 text-[clamp(2rem,4vw,3.3rem)]
//                 leading-tight
//                 text-[var(--fg)]
//               "
//                         >
//                             Trusted by ambitious
//                             <br />
//                             founders &
//                             <span className="text-cyan-400">
//                                 {" "}growing brands
//                             </span>
//                         </h2>

//                         <p
//                             className="
//                 mt-6
//                 max-w-lg
//                 leading-8
//                 text-[var(--fg)]/65
//               "
//                         >
//                             Every project is engineered with precision,
//                             creativity and scalable technology.
//                             Our clients become long-term partners—
//                             not one-time customers.
//                         </p>

//                     </div>

//                     {/* RIGHT SIDE */}

//                     <div
//                         className="
//               relative
//               flex
//               items-center
//               justify-center
//               h-[650px]
//             "
//                     >

//                         {/* ORBIT RINGS */}

//                         {[360, 280, 190].map((size, i) => (

//                             <motion.div
//                                 key={size}
//                                 animate={{
//                                     rotate: i % 2 === 0 ? 360 : -360,
//                                 }}
//                                 transition={{
//                                     duration: 25 + i * 8,
//                                     repeat: Infinity,
//                                     ease: "linear",
//                                 }}
//                                 className="
//                   absolute
//                   rounded-full
//                   border
//                   border-cyan-400/20
//                 "
//                                 style={{
//                                     width: size,
//                                     height: size,
//                                 }}
//                             />

//                         ))}

//                         {/* Floating Particles */}

//                         {Array.from({ length: 25 }).map((_, i) => (

//                             <motion.span
//                                 key={i}
//                                 animate={{
//                                     y: [-12, 12, -12],
//                                     opacity: [0.3, 1, 0.3],
//                                 }}
//                                 transition={{
//                                     duration: 2 + Math.random() * 3,
//                                     repeat: Infinity,
//                                     delay: Math.random() * 2,
//                                 }}
//                                 className="
//                   absolute
//                   rounded-full
//                   bg-cyan-300
//                   shadow-[0_0_12px_#22d3ee]
//                 "
//                                 style={{
//                                     width: 3,
//                                     height: 3,
//                                     left: `${15 + Math.random() * 70}%`,
//                                     top: `${15 + Math.random() * 70}%`,
//                                 }}
//                             />

//                         ))}

//                         {/* CENTER AI CORE */}

//                         <motion.div
//                             animate={{
//                                 rotate: 360,
//                             }}
//                             transition={{
//                                 duration: 22,
//                                 repeat: Infinity,
//                                 ease: "linear",
//                             }}
//                             className="
//                 absolute
//                 h-56
//                 w-56
//                 rounded-full
//                 border
//                 border-cyan-400/30
//                 flex
//                 items-center
//                 justify-center
//               "
//                         >

//                             <div
//                                 className="
//                   absolute
//                   inset-0
//                   rounded-full
//                   bg-cyan-500/10
//                   blur-3xl
//                 "
//                             />

//                             <svg
//                                 viewBox="0 0 220 220"
//                                 className="absolute inset-0 w-full h-full"
//                             >
//                                 <defs>
//                                     <linearGradient id="ring" x1="0%" x2="100%">
//                                         <stop offset="0%" stopColor="#22d3ee" />
//                                         <stop offset="100%" stopColor="#3b82f6" />
//                                     </linearGradient>
//                                 </defs>

//                                 <circle
//                                     cx="110"
//                                     cy="110"
//                                     r="90"
//                                     stroke="url(#ring)"
//                                     strokeWidth="2"
//                                     fill="none"
//                                     strokeOpacity=".35"
//                                 />

//                                 <circle
//                                     cx="110"
//                                     cy="110"
//                                     r="68"
//                                     stroke="#22d3ee"
//                                     strokeWidth="1"
//                                     fill="none"
//                                     strokeOpacity=".2"
//                                 />
//                             </svg>

//                             <motion.div
//                                 animate={{
//                                     scale: [1, 1.08, 1],
//                                 }}
//                                 transition={{
//                                     duration: 2.5,
//                                     repeat: Infinity,
//                                 }}
//                                 className="
//                   relative
//                   z-20
//                   h-32
//                   w-32
//                   rounded-full
//                   border
//                   border-cyan-400/40
//                   bg-slate-900/70
//                   backdrop-blur-xl
//                   flex
//                   flex-col
//                   items-center
//                   justify-center
//                   shadow-[0_0_50px_rgba(34,211,238,.35)]
//                 "
//                             >

//                                 <div
//                                     className="
//                     h-3
//                     w-3
//                     rounded-full
//                     bg-cyan-400
//                     animate-pulse
//                     shadow-[0_0_20px_#22d3ee]
//                   "
//                                 />

//                                 <p className="mt-3 text-cyan-300 font-bold tracking-[0.35em] text-xs">
//                                     DESFLYER
//                                 </p>

//                                 <p className="text-[10px] text-cyan-200/70 mt-1 tracking-[0.25em]">
//                                     AI CORE
//                                 </p>

//                             </motion.div>

//                         </motion.div>
//                         {/* CONNECTION LINES */}

//                         <svg
//                             className="absolute inset-0 w-full h-full pointer-events-none"
//                             viewBox="0 0 650 650"
//                         >
//                             {orbitNodes.map((node, i) => {
//                                 const angle = (node.angle * Math.PI) / 180;

//                                 const x =
//                                     325 + Math.cos(angle) * node.radius;

//                                 const y =
//                                     325 + Math.sin(angle) * node.radius;

//                                 return (
//                                     <g key={i}>

//                                         <line
//                                             x1="325"
//                                             y1="325"
//                                             x2={x}
//                                             y2={y}
//                                             stroke="#22d3ee"
//                                             strokeOpacity=".18"
//                                             strokeWidth="1.2"
//                                         />

//                                         <motion.circle
//                                             cx={x}
//                                             cy={y}
//                                             r="3"
//                                             fill="#22d3ee"
//                                             animate={{
//                                                 opacity: [0.3, 1, 0.3],
//                                                 r: [3, 5, 3],
//                                             }}
//                                             transition={{
//                                                 duration: 2,
//                                                 repeat: Infinity,
//                                                 delay: i * 0.4,
//                                             }}
//                                         />

//                                     </g>
//                                 );
//                             })}
//                         </svg>

//                         {/* FLOATING TESTIMONIAL CARDS */}

//                         {testimonials.slice(0, 4).map((item, i) => {

//                             const node = orbitNodes[i];

//                             const x =
//                                 Math.cos((node.angle * Math.PI) / 180) *
//                                 node.radius;

//                             const y =
//                                 Math.sin((node.angle * Math.PI) / 180) *
//                                 node.radius;

//                             return (

//                                 <motion.div
//                                     key={i}
//                                     initial={{
//                                         opacity: 0,
//                                         scale: 0.75,
//                                     }}
//                                     whileInView={{
//                                         opacity: 1,
//                                         scale: 1,
//                                     }}
//                                     viewport={{
//                                         once: true,
//                                     }}
//                                     transition={{
//                                         delay: i * 0.15,
//                                     }}
//                                     animate={{
//                                         y: [0, -10, 0],
//                                     }}
//                                     whileHover={{
//                                         scale: 1.08,
//                                         y: -12,
//                                     }}
//                                     style={{
//                                         left: `calc(50% + ${x}px - 130px)`,
//                                         top: `calc(50% + ${y}px - 90px)`,
//                                     }}
//                                     className="
//                     absolute
//                     w-[260px]
//                   "
//                                 >

//                                     <div
//                                         className="
//                       relative
//                       overflow-hidden
//                       rounded-3xl
//                       border
//                       border-cyan-400/20
//                       bg-slate-900/70
//                       backdrop-blur-2xl
//                       p-6
//                       transition-all
//                       duration-500
//                       hover:border-cyan-400/60
//                       hover:shadow-[0_0_45px_rgba(34,211,238,.25)]
//                     "
//                                     >

//                                         {/* Rotating Glow */}

//                                         <motion.div
//                                             animate={{
//                                                 rotate: 360,
//                                             }}
//                                             transition={{
//                                                 duration: 10,
//                                                 repeat: Infinity,
//                                                 ease: "linear",
//                                             }}
//                                             className="
//                         absolute
//                         -inset-24
//                         opacity-30
//                       "
//                                             style={{
//                                                 background:
//                                                     "conic-gradient(from 0deg, transparent, rgba(34,211,238,.45), transparent)",
//                                             }}
//                                         />

//                                         {/* Header */}

//                                         <div className="relative flex items-center gap-4">

//                                             <motion.div
//                                                 animate={{
//                                                     scale: [1, 1.3, 1],
//                                                 }}
//                                                 transition={{
//                                                     duration: 2,
//                                                     repeat: Infinity,
//                                                 }}
//                                                 className="
//                           h-12
//                           w-12
//                           rounded-2xl
//                           flex
//                           items-center
//                           justify-center
//                           font-bold
//                           text-white
//                         "
//                                                 style={{
//                                                     background:
//                                                         "linear-gradient(135deg,#06B6D4,#3B82F6)",
//                                                 }}
//                                             >
//                                                 {item.name
//                                                     .split(" ")
//                                                     .map((n) => n[0])
//                                                     .join("")
//                                                     .substring(0, 2)}
//                                             </motion.div>

//                                             <div>

//                                                 <h4 className="text-white font-semibold">
//                                                     {item.name}
//                                                 </h4>

//                                                 <p className="text-cyan-300 text-sm">
//                                                     {item.role}
//                                                 </p>

//                                             </div>

//                                         </div>
//                                         {/* Quote */}

//                                         <p
//                                             className="
//                         relative
//                         mt-6
//                         text-sm
//                         leading-7
//                         text-slate-300
//                         line-clamp-5
//                       "
//                                         >
//                                             "{item.quote}"
//                                         </p>

//                                         {/* Rating */}

//                                         <div className="flex gap-1 mt-6">

//                                             {Array.from({ length: 5 }).map((_, index) => (

//                                                 <motion.span
//                                                     key={index}
//                                                     animate={{
//                                                         opacity: [0.4, 1, 0.4],
//                                                         scale: [1, 1.25, 1],
//                                                     }}
//                                                     transition={{
//                                                         duration: 2,
//                                                         repeat: Infinity,
//                                                         delay: index * 0.15,
//                                                     }}
//                                                     className="
//                             h-2.5
//                             w-2.5
//                             rounded-full
//                             bg-cyan-300
//                             shadow-[0_0_10px_#22d3ee]
//                           "
//                                                 />

//                                             ))}

//                                         </div>

//                                     </div>

//                                 </motion.div>

//                             );

//                         })}

//                     </div>

//                 </div>

//                 {/* =======================
//             METRICS SECTION
//         ======================== */}

//                 <motion.div
//                     initial={{
//                         opacity: 0,
//                         y: 40,
//                     }}
//                     whileInView={{
//                         opacity: 1,
//                         y: 0,
//                     }}
//                     viewport={{
//                         once: true,
//                     }}
//                     transition={{
//                         delay: 0.5,
//                     }}
//                     className="
//             mt-28
//             grid
//             gap-6
//             md:grid-cols-4
//           "
//                 >

//                     {[
//                         {
//                             label: "Projects",
//                             value: "120+",
//                         },
//                         {
//                             label: "Clients",
//                             value: "48",
//                         },
//                         {
//                             label: "Countries",
//                             value: "12",
//                         },
//                         {
//                             label: "Satisfaction",
//                             value: "99%",
//                         },
//                     ].map((item, i) => (

//                         <motion.div
//                             key={i}
//                             whileHover={{
//                                 y: -8,
//                                 scale: 1.03,
//                             }}
//                             className="
//                 relative
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-cyan-400/20
//                 bg-white/[0.03]
//                 backdrop-blur-xl
//                 p-8
//               "
//                         >

//                             <motion.div
//                                 animate={{
//                                     opacity: [0.2, 0.5, 0.2],
//                                     scale: [1, 1.2, 1],
//                                 }}
//                                 transition={{
//                                     duration: 4,
//                                     repeat: Infinity,
//                                 }}
//                                 className="
//                   absolute
//                   -right-16
//                   -top-16
//                   h-40
//                   w-40
//                   rounded-full
//                   bg-cyan-500/10
//                   blur-3xl
//                 "
//                             />

//                             <div className="relative">

//                                 <div
//                                     className="
//                     text-5xl
//                     font-black
//                     text-cyan-300
//                   "
//                                 >
//                                     {item.value}
//                                 </div>

//                                 <div
//                                     className="
//                     mt-2
//                     text-sm
//                     uppercase
//                     tracking-[.3em]
//                     text-slate-400
//                   "
//                                 >
//                                     {item.label}
//                                 </div>

//                             </div>

//                         </motion.div>

//                     ))}
//                     {/* FLOATING TESTIMONIAL NODES */}

//                     {testimonials.slice(0, 4).map((item, i) => {
//                         const node = orbitNodes[i];

//                         const x =
//                             Math.cos((node.angle * Math.PI) / 180) *
//                             node.radius;

//                         const y =
//                             Math.sin((node.angle * Math.PI) / 180) *
//                             node.radius;

//                         return (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, scale: 0.7 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.15 }}
//                                 animate={{ y: [0, -10, 0] }}
//                                 whileHover={{
//                                     scale: 1.08,
//                                     y: -12,
//                                 }}
//                                 style={{
//                                     left: `calc(50% + ${x}px - 130px)`,
//                                     top: `calc(50% + ${y}px - 90px)`,
//                                 }}
//                                 className="absolute w-[260px]"
//                             >
//                                 <div
//                                     className="
//                       relative
//                       rounded-3xl
//                       border
//                       border-cyan-400/20
//                       bg-slate-900/70
//                       backdrop-blur-2xl
//                       overflow-hidden
//                       p-6
//                       transition-all
//                       duration-500
//                       hover:border-cyan-400/60
//                       hover:shadow-[0_0_45px_rgba(34,211,238,.25)]
//                     "
//                                 >
//                                     <motion.div
//                                         animate={{ rotate: 360 }}
//                                         transition={{
//                                             duration: 10,
//                                             repeat: Infinity,
//                                             ease: "linear",
//                                         }}
//                                         className="absolute -inset-24 opacity-30"
//                                         style={{
//                                             background:
//                                                 "conic-gradient(from 0deg, transparent, rgba(34,211,238,.4), transparent)",
//                                         }}
//                                     />

//                                     <div className="relative flex items-center gap-3 mb-5">
//                                         <motion.span
//                                             animate={{ scale: [1, 1.4, 1] }}
//                                             transition={{
//                                                 duration: 2,
//                                                 repeat: Infinity,
//                                             }}
//                                             className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
//                                         />

//                                         <div>
//                                             <p className="font-semibold text-white">
//                                                 {item.name}
//                                             </p>

//                                             <p className="text-xs text-cyan-300">
//                                                 {item.role}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <p className="relative text-sm leading-7 text-slate-300 line-clamp-5">
//                                         "{item.quote}"
//                                     </p>

//                                     <div className="flex gap-1 mt-6">
//                                         {Array.from({ length: 5 }).map((_, index) => (
//                                             <motion.span
//                                                 key={index}
//                                                 animate={{
//                                                     opacity: [0.5, 1, 0.5],
//                                                 }}
//                                                 transition={{
//                                                     duration: 2,
//                                                     repeat: Infinity,
//                                                     delay: index * 0.1,
//                                                 }}
//                                                 className="h-2 w-2 rounded-full bg-cyan-300"
//                                             />
//                                         ))}
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         );
//                     })}

//             </div>

//         </div>

//         {/* ================= BOTTOM METRICS ================= */ }

//     <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.6 }}
//         className="mt-28 grid md:grid-cols-4 gap-6"
//     >
//         {[
//             { label: "Projects", value: "120+" },
//             { label: "Clients", value: "48" },
//             { label: "Countries", value: "12" },
//             { label: "Satisfaction", value: "99%" },
//         ].map((item, i) => (
//             <motion.div
//                 key={i}
//                 whileHover={{
//                     y: -8,
//                     scale: 1.03,
//                 }}
//                 className="
//                 relative
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-cyan-400/20
//                 bg-white/[0.03]
//                 backdrop-blur-xl
//                 p-8
//               "
//             >
//                 <motion.div
//                     animate={{
//                         opacity: [0.2, 0.5, 0.2],
//                         scale: [1, 1.2, 1],
//                     }}
//                     transition={{
//                         duration: 4,
//                         repeat: Infinity,
//                     }}
//                     className="
//                   absolute
//                   -right-16
//                   -top-16
//                   w-40
//                   h-40
//                   rounded-full
//                   bg-cyan-500/10
//                   blur-3xl
//                 "
//                 />

//                 <div className="relative">
//                     <div className="text-5xl font-black text-cyan-300">
//                         {item.value}
//                     </div>

//                     <div className="mt-2 text-sm tracking-[.3em] uppercase text-slate-400">
//                         {item.label}
//                     </div>
//                 </div>
//             </motion.div>
//         ))}
//     </motion.div>

//       </div >

//         <style>{`
//         @keyframes spinSlow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .spinSlow {
//           animation: spinSlow 28s linear infinite;
//         }

//         @keyframes pulseGrid {
//           0% {
//             opacity: .25;
//           }
//           50% {
//             opacity: .5;
//           }
//           100% {
//             opacity: .25;
//           }
//         }

//         .pulseGrid {
//           animation: pulseGrid 5s ease-in-out infinite;
//         }
//       `}
//         </style>

//     </section >
//   );
// }











import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import Eyebrow from "../ui/Eyebrow"
import { testimonials } from "../../data/testimonials"

const positions = [
  "top-4 left-1/2 -translate-x-1/2",
  "bottom-8 left-0",
  "bottom-8 right-0",
]

export default function Testimonials() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--surface-2)]
        px-6
        py-28
        lg:px-10
        lg:py-36
      "
    >
      <div className="relative mx-auto max-w-shell">
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div>
            <Eyebrow>
              Client Success
            </Eyebrow>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                mt-5
                max-w-xl
                font-display
                font-bold
                text-[clamp(2rem,4vw,3.4rem)]
                leading-[1.05]
                tracking-[-0.035em]
                text-[var(--fg)]
              "
            >
              Discover how DesFlyer has transformed businesses
            </motion.h2>

            <motion.p
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
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                mt-6
                max-w-md
                text-[var(--fg)]/55
                leading-7
              "
            >
              Building digital products through innovation,
              technology and engineering excellence.
            </motion.p>

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
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  h-px
                  w-10
                  bg-cyan-400/40
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[var(--fg)]/30
                "
              >
                Ideas · People · Results
              </span>
            </motion.div>
          </div>


          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div
            className="
              relative
              mx-auto
              h-[570px]
              w-full
              max-w-[620px]
            "
          >

            {/* Background glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/[0.035]
                blur-[90px]
              "
            />


            {/* =================================================
                CONNECTION LINES
            ================================================= */}

            <svg
              viewBox="0 0 620 570"
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
              "
            >
              <motion.path
                d="M310 145 L125 410"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="5 8"
                className="text-cyan-400/20"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                }}
              />

              <motion.path
                d="M125 410 L495 410"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="5 8"
                className="text-cyan-400/20"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                }}
              />

              <motion.path
                d="M495 410 L310 145"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="5 8"
                className="text-cyan-400/20"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.9,
                }}
              />
            </svg>


            {/* =================================================
                MOVING SIGNAL
            ================================================= */}

            <motion.div
              animate={{
                x: [0, -185, -185, 0, 185, 185, 0],
                y: [0, 265, 265, 0, 265, 265, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[145px]
                z-10
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_14px_#00e5ff]
              "
            />


            {/* =================================================
                CENTER LOGO
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-30
                -translate-x-1/2
                -translate-y-1/2
              "
            >

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-8
                  rounded-full
                  border
                  border-dashed
                  border-cyan-400/15
                "
              />

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -inset-4
                  rounded-full
                  border
                  border-cyan-400/20
                "
              />

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  flex
                  h-36
                  w-36
                  items-center
                  justify-center
                  rounded-[30px]
                  border
                  border-white/[0.1]
                  bg-[#071216]
                  shadow-[0_25px_70px_rgba(0,0,0,.35)]
                "
              >
                <div
                  className="
                    absolute
                    inset-2
                    rounded-[24px]
                    border
                    border-cyan-400/10
                  "
                />

                <img
                  src="/images/portfolio/logo.png"
                  alt="DesFlyer logo"
                  className="
                    relative
                    z-10
                    h-20
                    w-20
                    object-contain
                  "
                />
              </motion.div>
            </div>


            {/* =================================================
                THREE CLIENT BOXES
            ================================================= */}

            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + i * 0.15,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className={`
                  absolute
                  ${positions[i]}
                  z-20
                  w-[185px]
                  sm:w-[205px]
                `}
              >
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-[#081114]/95
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-cyan-400/30
                    hover:shadow-[0_20px_60px_rgba(0,229,255,.08)]
                  "
                >

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-24
                      w-24
                      rounded-full
                      bg-cyan-400/[0.04]
                      blur-2xl
                      transition-all
                      duration-500
                      group-hover:bg-cyan-400/[0.1]
                    "
                  />

                  <div
                    className="
                      relative
                      mb-4
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-cyan-400
                          shadow-[0_0_10px_#00e5ff]
                        "
                      />

                      <span
                        className="
                          font-mono
                          text-[8px]
                          tracking-[0.18em]
                          text-cyan-400/60
                        "
                      >
                        CLIENT_{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <FiArrowUpRight
                      size={12}
                      className="
                        text-[var(--fg)]/20
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-cyan-400
                      "
                    />
                  </div>

                  <p
                    className="
                      relative
                      line-clamp-4
                      text-[10px]
                      leading-[1.65]
                      text-[var(--fg)]/55
                    "
                  >
                    “{t.quote}”
                  </p>

                  <div
                    className="
                      relative
                      mt-4
                      border-t
                      border-white/[0.06]
                      pt-3
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-[0.15em]
                          text-[var(--fg)]/20
                        "
                      >
                        Client story
                      </span>

                      <span
                        className="
                          text-[8px]
                          text-cyan-400/40
                        "
                      >
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}


            {/* =================================================
                CENTER LABEL
            ================================================= */}

            <motion.div
              animate={{
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                left-1/2
                top-[calc(50%+110px)]
                z-30
                -translate-x-1/2
                whitespace-nowrap
                font-mono
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-cyan-400/40
              "
            >
              DESFLYER / TRUST CORE
            </motion.div>


            {/* Labels */}

            <span
              className="
                absolute
                left-1/2
                top-[125px]
                -translate-x-1/2
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-[var(--fg)]/15
              "
            >
              VISION
            </span>

            <span
              className="
                absolute
                bottom-[105px]
                left-[7%]
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-[var(--fg)]/15
              "
            >
              DIALOGUE
            </span>

            <span
              className="
                absolute
                bottom-[105px]
                right-[7%]
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-[var(--fg)]/15
              "
            >
              RESULT
            </span>

          </div>
        </div>
      </div>
    </section>
  )
}