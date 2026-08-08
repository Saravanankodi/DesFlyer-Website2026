// // import { motion } from 'framer-motion'
// // import { FiClock } from 'react-icons/fi'
// // import Seo from '../lib/Seo'
// // import Eyebrow from '../components/ui/Eyebrow'
// // import CTABand from '../components/sections/CTABand'
// // import { projects } from '../data/projects'

// // const upcomingProducts = ['Product Slot 01', 'Product Slot 02', 'Product Slot 03']

// // export default function Portfolio() {
// //   return (
// //     <>
// //       <Seo
// //         title="Portfolio"
// //         description="Explore DesFlyer's featured projects — from invoicing software to booking platforms — built for real clients."
// //         path="/portfolio"
// //       />
// //       <section className="pt-40 pb-20 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">
// //           <Eyebrow>Selected Work</Eyebrow>
// //           <h1 className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl">
// //             Highlighted Projects
// //           </h1>
// //           <p className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed">
// //             Explore our featured projects that demonstrate our expertise in delivering innovative software
// //             solutions tailored to client needs.
// //           </p>
// //         </div>
// //       </section>

// //       <section className="pb-20 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto flex flex-col gap-5">
// //           {projects.map((p, i) => (
// //             <motion.article
// //               key={p.slug}
// //               initial={{ opacity: 0, y: 24 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true, margin: '-60px' }}
// //               transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
// //               className="border border-[var(--border)] rounded-2xl p-8 lg:p-10 hover:border-signal/50 transition-colors duration-300 grid sm:grid-cols-[1fr_auto] gap-8 items-center"
// //             >
// //               <div>
// //                 <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--fg)]/50">
// //                   <span>Client: {p.client}</span>
// //                   <span>Date: {p.date}</span>
// //                 </div>
// //                 <h2 className="font-display font-semibold text-2xl mt-4 text-[var(--fg)]">{p.title}</h2>
// //                 <p className="mt-3 text-[var(--fg)]/65 leading-relaxed max-w-2xl">{p.body}</p>
// //                 <div className="flex flex-wrap gap-2 mt-6">
// //                   {p.technologies.map((t) => (
// //                     <span
// //                       key={t}
// //                       className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--fg)]/60"
// //                     >
// //                       {t}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //               {p.image && (
// //                 <div className="w-full sm:w-44 h-32 rounded-xl bg-white flex items-center justify-center p-4 shrink-0">
// //                   <img src={p.image} alt={`${p.title} logo`} className="max-w-full max-h-full object-contain" loading="lazy" />
// //                 </div>
// //               )}
// //             </motion.article>
// //           ))}
// //         </div>
// //       </section>

// //       <section className="pb-28 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">
// //           <Eyebrow>Coming Soon</Eyebrow>
// //           <h2 className="font-display font-bold text-2xl text-[var(--fg)] mb-8">More products on the way</h2>
// //           <div className="grid sm:grid-cols-3 gap-5">
// //             {upcomingProducts.map((label) => (
// //               <div
// //                 key={label}
// //                 className="border border-dashed border-[var(--border)] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 text-[var(--fg)]/40"
// //               >
// //                 <FiClock size={22} />
// //                 <span className="font-mono text-xs uppercase tracking-[0.15em]">{label}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <CTABand />
// //     </>
// //   )
// // }


// // import { useMemo, useState } from 'react'
// // import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
// // import { FiClock, FiX } from 'react-icons/fi'
// // import Seo from '../lib/Seo'
// // import Eyebrow from '../components/ui/Eyebrow'
// // import CTABand from '../components/sections/CTABand'
// // import { projects } from '../data/projects'

// // const upcomingProducts = ['Product Slot 01', 'Product Slot 02', 'Product Slot 03']

// // // ---------------------------------------------------------------------------
// // // Word-by-word heading reveal — matches the About page's opening move.
// // // ---------------------------------------------------------------------------
// // function RevealHeading({ text, className }) {
// //   const words = useMemo(() => text.split(' '), [text])
// //   return (
// //     <h1 className={className} aria-label={text}>
// //       {words.map((word, i) => (
// //         <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em]">
// //           <motion.span
// //             className="inline-block"
// //             initial={{ y: '110%' }}
// //             animate={{ y: '0%' }}
// //             transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
// //           >
// //             {word}
// //           </motion.span>
// //         </span>
// //       ))}
// //     </h1>
// //   )
// // }

// // export default function Portfolio() {
// //   const reduceMotion = useReducedMotion()
// //   const [activeTech, setActiveTech] = useState(null)

// //   const techs = useMemo(() => {
// //     const set = new Set()
// //     projects.forEach((p) => p.technologies.forEach((t) => set.add(t)))
// //     return Array.from(set).sort()
// //   }, [])

// //   const visible = activeTech
// //     ? projects.filter((p) => p.technologies.includes(activeTech))
// //     : projects

// //   return (
// //     <>
// //       <Seo
// //         title="Portfolio"
// //         description="Explore DesFlyer's featured projects — from invoicing software to booking platforms — built for real clients."
// //         path="/portfolio"
// //       />

// //       <section className="pt-40 pb-16 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">
// //           <Eyebrow>Selected Work</Eyebrow>
// //           <RevealHeading
// //             text="Highlighted Projects"
// //             className="font-display font-bold text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--fg)] max-w-2xl leading-[1.05]"
// //           />
// //           <motion.p
// //             initial={{ opacity: 0, y: 12 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //             className="mt-6 text-lg text-[var(--fg)]/65 max-w-2xl leading-relaxed"
// //           >
// //             Explore our featured projects that demonstrate our expertise in delivering innovative software
// //             solutions tailored to client needs.
// //           </motion.p>
// //         </div>
// //       </section>

// //       {/* FILTER BAR — browse the work the way a client would: by what it's built with */}
// //       <section className="pb-6 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">
// //           <div className="flex flex-wrap items-center gap-2">
// //             <button
// //               type="button"
// //               onClick={() => setActiveTech(null)}
// //               className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors duration-200 ${
// //                 activeTech === null
// //                   ? 'bg-signal border-signal text-white'
// //                   : 'border-[var(--border)] text-[var(--fg)]/60 hover:border-signal/50 hover:text-signal'
// //               }`}
// //             >
// //               All work
// //             </button>
// //             {techs.map((t) => (
// //               <button
// //                 key={t}
// //                 type="button"
// //                 onClick={() => setActiveTech(t === activeTech ? null : t)}
// //                 aria-pressed={activeTech === t}
// //                 className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors duration-200 ${
// //                   activeTech === t
// //                     ? 'bg-signal border-signal text-white'
// //                     : 'border-[var(--border)] text-[var(--fg)]/60 hover:border-signal/50 hover:text-signal'
// //                 }`}
// //               >
// //                 {t}
// //               </button>
// //             ))}
// //           </div>

// //           <div className="mt-4 flex items-center gap-3 font-mono text-xs text-[var(--fg)]/40">
// //             <span>
// //               Showing {visible.length} of {projects.length}
// //             </span>
// //             {activeTech && (
// //               <button
// //                 type="button"
// //                 onClick={() => setActiveTech(null)}
// //                 className="inline-flex items-center gap-1 text-signal hover:underline"
// //               >
// //                 <FiX size={12} /> clear filter
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </section>

// //       {/* PROJECT LIST */}
// //       <section className="pb-20 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto flex flex-col gap-5">
// //           <AnimatePresence mode="popLayout">
// //             {visible.map((p, i) => (
// //               <motion.article
// //                 key={p.slug}
// //                 layout={!reduceMotion}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -12 }}
// //                 transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
// //                 className="group relative border border-[var(--border)] rounded-2xl p-8 lg:p-10 hover:border-signal/50 transition-colors duration-300 grid sm:grid-cols-[auto_1fr_auto] gap-8 items-center"
// //               >
// //                 <span className="hidden sm:block font-mono text-xs text-[var(--fg)]/30 group-hover:text-signal transition-colors duration-300 self-start pt-1">
// //                   {String(i + 1).padStart(2, '0')}
// //                 </span>

// //                 <div>
// //                   <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-[var(--fg)]/50">
// //                     <span className="sm:hidden">{String(i + 1).padStart(2, '0')} ·</span>
// //                     <span>Client: {p.client}</span>
// //                     <span>Date: {p.date}</span>
// //                   </div>
// //                   <h2 className="font-display font-semibold text-2xl mt-4 text-[var(--fg)]">{p.title}</h2>
// //                   <p className="mt-3 text-[var(--fg)]/65 leading-relaxed max-w-2xl">{p.body}</p>
// //                   <div className="flex flex-wrap gap-2 mt-6">
// //                     {p.technologies.map((t) => (
// //                       <button
// //                         key={t}
// //                         type="button"
// //                         onClick={() => setActiveTech(t === activeTech ? null : t)}
// //                         className={`font-mono text-[11px] px-2.5 py-1 rounded-full border transition-colors duration-200 ${
// //                           activeTech === t
// //                             ? 'border-signal text-signal bg-signal/10'
// //                             : 'border-[var(--border)] text-[var(--fg)]/60 hover:border-signal/50 hover:text-signal'
// //                         }`}
// //                       >
// //                         {t}
// //                       </button>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {p.image && (
// //                   <div className="w-full sm:w-44 h-32 rounded-xl bg-white flex items-center justify-center p-4 shrink-0 overflow-hidden">
// //                     <motion.img
// //                       src={p.image}
// //                       alt={`${p.title} logo`}
// //                       loading="lazy"
// //                       className="max-w-full max-h-full object-contain"
// //                       whileHover={reduceMotion ? undefined : { scale: 1.08 }}
// //                       transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
// //                     />
// //                   </div>
// //                 )}
// //               </motion.article>
// //             ))}
// //           </AnimatePresence>

// //           {visible.length === 0 && (
// //             <div className="border border-dashed border-[var(--border)] rounded-2xl p-12 text-center text-[var(--fg)]/50">
// //               Nothing built with <span className="text-signal">{activeTech}</span> yet — check back soon, or{' '}
// //               <button type="button" onClick={() => setActiveTech(null)} className="text-signal hover:underline">
// //                 view all work
// //               </button>
// //               .
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       <section className="pb-28 px-6 lg:px-10">
// //         <div className="max-w-shell mx-auto">
// //           <Eyebrow>Coming Soon</Eyebrow>
// //           <h2 className="font-display font-bold text-2xl text-[var(--fg)] mb-8">More products on the way</h2>
// //           <div className="grid sm:grid-cols-3 gap-5">
// //             {upcomingProducts.map((label) => (
// //               <motion.div
// //                 key={label}
// //                 whileHover={reduceMotion ? undefined : { y: -4 }}
// //                 transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
// //                 className="border border-dashed border-[var(--border)] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 text-[var(--fg)]/40 hover:border-signal/40 hover:text-signal/70 transition-colors duration-300"
// //               >
// //                 <motion.span
// //                   whileHover={reduceMotion ? undefined : { rotate: 360 }}
// //                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
// //                 >
// //                   <FiClock size={22} />
// //                 </motion.span>
// //                 <span className="font-mono text-xs uppercase tracking-[0.15em]">{label}</span>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <CTABand />
// //     </>
// //   )
// // }





// // import {
// //   useMemo,
// //   useRef,
// //   useState,
// //   useEffect,
// // } from "react";

// // import {
// //   motion,
// //   useMotionValue,
// //   useReducedMotion,
// //   useSpring,
// //   useTransform,
// // } from "framer-motion";

// // import { FiArrowUpRight } from "react-icons/fi";

// // const categories = [
// //   "All",
// //   "Web",
// //   "App",
// //   "UI/UX",
// //   "Branding",
// // ];

// // const SAMPLE_PROJECTS = [
// //   {
// //     slug: "north-freight",
// //     client: "North Freight Co.",
// //     date: "2025",
// //     category: "Web",
// //     title: "Logistics Dashboard",
// //     body:
// //       "A modern logistics platform for managing deliveries, routes and real-time fleet tracking with analytics.",
// //     technologies: ["React", "Node", "MongoDB"],
// //     image:
// //       "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
// //   },
// //   {
// //     slug: "hearth",
// //     client: "Hearth",
// //     date: "2025",
// //     category: "App",
// //     title: "Booking Application",
// //     body:
// //       "Mobile booking platform with technician tracking, secure payments and notifications.",
// //     technologies: ["Flutter", "Firebase", "Figma"],
// //     image:
// //       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
// //   },
// //   {
// //     slug: "ledger-club",
// //     client: "Ledger Club",
// //     date: "2024",
// //     category: "UI/UX",
// //     title: "Finance Dashboard",
// //     body:
// //       "Dashboard redesign focused on usability, accessibility and simplified financial insights.",
// //     technologies: ["Figma", "Framer"],
// //     image:
// //       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
// //   },
// //   {
// //     slug: "monarch-post",
// //     client: "Monarch & Post",
// //     date: "2024",
// //     category: "Branding",
// //     title: "Brand Identity",
// //     body:
// //       "Complete branding system including logo, typography and visual identity.",
// //     technologies: ["Illustrator", "Photoshop"],
// //     image:
// //       "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
// //   },
// //   {
// //     slug: "fieldnote",
// //     client: "Fieldnote",
// //     date: "2024",
// //     category: "Web",
// //     title: "Developer Platform",
// //     body:
// //       "Documentation-first website with high performance search and responsive design.",
// //     technologies: ["Next.js", "Tailwind"],
// //     image:
// //       "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
// //   },
// //   {
// //     slug: "saltwater",
// //     client: "Saltwater Supply",
// //     date: "2023",
// //     category: "UI/UX",
// //     title: "Inventory System",
// //     body:
// //       "Enterprise inventory management interface optimized for industrial workflows.",
// //     technologies: ["React", "Tauri"],
// //     image:
// //       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
// //   },
// // ];

// // const CARD_W = 950;
// // const CARD_H = 530;

// // const CENTER_X = CARD_W / 2;
// // const CENTER_Y = 250;

// // const BIG_SIZE = 950;

// // const LOGO_SIZE = 100;
// // const LOGO_POS = 40;

// // function initials(name) {
// //   return name
// //     .split(" ")
// //     .map((word) => word[0])
// //     .join("")
// //     .substring(0, 2)
// //     .toUpperCase();
// // }

// // export default function PortfolioTeaser({
// //   projects = SAMPLE_PROJECTS,
// // }) {
// //   const prefersReducedMotion = useReducedMotion();

// //   const sectionRef = useRef(null);

// //   const [category, setCategory] = useState("All");
// //   const [index, setIndex] = useState(0);
// //   const [paused, setPaused] = useState(false);

// //   /* =====================================================
// //      FILTER PROJECTS
// //   ===================================================== */

// //   const filtered = useMemo(() => {
// //     if (category === "All") return projects;

// //     return projects.filter(
// //       (project) => project.category === category
// //     );
// //   }, [projects, category]);

// //   const displayProjects =
// //     filtered.length > 1
// //       ? [...filtered, ...filtered, ...filtered]
// //       : filtered;

// //   const centerIndex =
// //     filtered.length + index;

// //   const safeIndex =
// //     filtered.length > 0
// //       ? index % filtered.length
// //       : 0;

// //   /* =====================================================
// //      CATEGORY
// //   ===================================================== */

// //   function changeCategory(cat) {
// //     setCategory(cat);
// //     setIndex(0);
// //   }

// //   /* =====================================================
// //      PREVIOUS / NEXT
// //   ===================================================== */

// //   function go(direction) {
// //     setIndex((prev) => {
// //       if (filtered.length === 0) return 0;

// //       return (
// //         (prev + direction + filtered.length) %
// //         filtered.length
// //       );
// //     });
// //   }

// //   /* =====================================================
// //      AUTO SLIDE
// //   ===================================================== */

// //   useEffect(() => {
// //     if (paused) return;
// //     if (filtered.length <= 1) return;

// //     const timer = setInterval(() => {
// //       setIndex(
// //         (prev) =>
// //           (prev + 1) % filtered.length
// //       );
// //     }, 2500);

// //     return () => clearInterval(timer);
// //   }, [paused, filtered.length]);

// //   /* =====================================================
// //      CARD MOUSE EFFECT
// //   ===================================================== */

// //   const mouseX = useMotionValue(0.5);
// //   const mouseY = useMotionValue(0.5);

// //   const rotateX = useSpring(
// //     useTransform(
// //       mouseY,
// //       [0, 1],
// //       [12, -12]
// //     ),
// //     {
// //       stiffness: 180,
// //       damping: 18,
// //     }
// //   );

// //   const rotateY = useSpring(
// //     useTransform(
// //       mouseX,
// //       [0, 1],
// //       [-14, 14]
// //     ),
// //     {
// //       stiffness: 180,
// //       damping: 18,
// //     }
// //   );

// //   const sheenX = useTransform(
// //     mouseX,
// //     [0, 1],
// //     ["20%", "80%"]
// //   );

// //   function onCardMove(e) {
// //     if (prefersReducedMotion) return;

// //     const rect =
// //       e.currentTarget.getBoundingClientRect();

// //     mouseX.set(
// //       (e.clientX - rect.left) /
// //         rect.width
// //     );

// //     mouseY.set(
// //       (e.clientY - rect.top) /
// //         rect.height
// //     );
// //   }

// //   function onCardLeave() {
// //     mouseX.set(0.5);
// //     mouseY.set(0.5);
// //   }

// //   /* =====================================================
// //      SECTION SPOTLIGHT
// //   ===================================================== */

// //   const spotX = useMotionValue(50);
// //   const spotY = useMotionValue(50);

// //   function onSectionMove(e) {
// //     if (prefersReducedMotion) return;

// //     const rect =
// //       sectionRef.current.getBoundingClientRect();

// //     spotX.set(
// //       ((e.clientX - rect.left) /
// //         rect.width) *
// //         100
// //     );

// //     spotY.set(
// //       ((e.clientY - rect.top) /
// //         rect.height) *
// //         100
// //     );
// //   }

// //   const spotlight = useTransform(
// //     [spotX, spotY],
// //     ([x, y]) =>
// //       `radial-gradient(
// //         700px circle at ${x}% ${y}%,
// //         rgba(37,99,235,.15),
// //         transparent 70%
// //       )`
// //   );

// //   /* =====================================================
// //      KEYBOARD
// //   ===================================================== */

// //   function onKeyDown(e) {
// //     if (e.key === "ArrowLeft") {
// //       go(-1);
// //     }

// //     if (e.key === "ArrowRight") {
// //       go(1);
// //     }
// //   }

// //   /* =====================================================
// //      VIEW PROJECT
// //      NOW LINKS TO SERVICES PAGE
// //   ===================================================== */

// //   function goToServices() {
// //     window.location.href = "/services";
// //   }

// //   return (
// //     <section
// //       ref={sectionRef}
// //       onMouseMove={onSectionMove}
// //       className="
// //         relative
// //         overflow-hidden
// //         py-20
// //         lg:py-28
// //         px-6
// //       "
// //       style={{
// //         background: "#081120",
// //         color: "#FFFFFF",
// //       }}
// //     >
// //       {/* =================================================
// //           BACKGROUND
// //       ================================================= */}

// //       <motion.div
// //         className="
// //           absolute
// //           inset-0
// //           pointer-events-none
// //         "
// //         style={{
// //           background: spotlight,
// //         }}
// //       />

// //       <div className="relative max-w-7xl mx-auto">

// //         {/* =================================================
// //             HEADER
// //         ================================================= */}

// //         <div
// //           className="
// //             flex
// //             flex-wrap
// //             justify-between
// //             items-end
// //             gap-8
// //             mb-14
// //           "
// //         >
// //           <div>
// //             <div
// //               className="
// //                 flex
// //                 items-center
// //                 gap-2
// //                 text-xs
// //                 tracking-[.25em]
// //                 text-blue-400
// //                 mb-3
// //               "
// //               style={{
// //                 fontFamily:
// //                   "'IBM Plex Mono', monospace",
// //               }}
// //             >
// //               <span
// //                 className="
// //                   w-2
// //                   h-2
// //                   rounded-full
// //                   bg-blue-500
// //                 "
// //               />

// //               SELECTED WORK
// //             </div>

// //             <h2
// //               className="
// //                 text-5xl
// //                 lg:text-6xl
// //                 font-semibold
// //                 leading-none
// //               "
// //               style={{
// //                 fontFamily:
// //                   "'Fraunces', serif",
// //               }}
// //             >
// //               Featured Projects
// //             </h2>
// //           </div>

// //           <a
// //             href="/portfolio"
// //             className="
// //               flex
// //               items-center
// //               gap-2
// //               border-b
// //               border-blue-500
// //               pb-1
// //               text-blue-300
// //               hover:text-blue-400
// //               transition
// //             "
// //             style={{
// //               fontFamily:
// //                 "'IBM Plex Mono', monospace",
// //             }}
// //           >
// //             View Portfolio

// //             <FiArrowUpRight />
// //           </a>
// //         </div>

// //         {/* =================================================
// //             FILTERS
// //         ================================================= */}

// //         <div
// //           className="
// //             flex
// //             flex-wrap
// //             gap-4
// //             mb-16
// //           "
// //         >
// //           {categories.map((cat) => {
// //             const activeTab =
// //               cat === category;

// //             return (
// //               <button
// //                 key={cat}
// //                 type="button"
// //                 onClick={() =>
// //                   changeCategory(cat)
// //                 }
// //                 className="
// //                   rounded-full
// //                   px-6
// //                   py-3
// //                   text-sm
// //                   transition-all
// //                   duration-300
// //                 "
// //                 style={{
// //                   fontFamily:
// //                     "'IBM Plex Mono', monospace",

// //                   background: activeTab
// //                     ? "rgba(37,99,235,.18)"
// //                     : "transparent",

// //                   border: `1px solid ${
// //                     activeTab
// //                       ? "#3B82F6"
// //                       : "rgba(255,255,255,.08)"
// //                   }`,

// //                   color: activeTab
// //                     ? "#60A5FA"
// //                     : "#94A3B8",
// //                 }}
// //               >
// //                 {cat}
// //               </button>
// //             );
// //           })}
// //         </div>

// //         {/* =================================================
// //             COVERFLOW
// //         ================================================= */}

// //         <div
// //           tabIndex={0}
// //           onKeyDown={onKeyDown}
// //           onMouseEnter={() =>
// //             setPaused(true)
// //           }
// //           onMouseLeave={() =>
// //             setPaused(false)
// //           }
// //           className="
// //             relative
// //             flex
// //             items-center
// //             justify-center
// //             outline-none
// //             mb-16
// //           "
// //           style={{
// //             perspective: 1800,
// //             height: 560,
// //           }}
// //         >
// //           {displayProjects.map(
// //             (project, i) => {
// //               const offset =
// //                 i - centerIndex;

// //               const distance =
// //                 Math.abs(offset);

// //               const isActive =
// //                 offset === 0;

// //               if (distance > 2)
// //                 return null;

// //               const animation =
// //                 prefersReducedMotion
// //                   ? {
// //                       x: offset * 450,
// //                       scale: isActive
// //                         ? 1
// //                         : 0.9,
// //                       opacity: 1,
// //                     }
// //                   : {
// //                       x: offset * 180,
// //                       rotateY: 0,
// //                       scale: isActive
// //                         ? 1
// //                         : 0.9,
// //                       opacity: isActive
// //                         ? 1
// //                         : 0.75,
// //                       filter: isActive
// //                         ? "blur(0px)"
// //                         : "blur(5px)",
// //                     };

// //               return (
// //                 <motion.div
// //                   key={`${project.slug}-${i}`}
// //                   animate={animation}
// //                   transition={{
// //                     type: "tween",
// //                     stiffness: 240,
// //                     damping: 28,
// //                   }}
// //                   onClick={() =>
// //                     setIndex(
// //                       i %
// //                         Math.max(
// //                           filtered.length,
// //                           1
// //                         )
// //                     )
// //                   }
// //                   onMouseMove={
// //                     isActive
// //                       ? onCardMove
// //                       : undefined
// //                   }
// //                   onMouseLeave={
// //                     isActive
// //                       ? onCardLeave
// //                       : undefined
// //                   }
// //                   className="
// //                     absolute
// //                     cursor-pointer
// //                   "
// //                   style={{
// //                     width: CARD_W,
// //                     height: CARD_H,

// //                     background:
// //                       "linear-gradient(160deg,#0F172A,#1E293B)",

// //                     rotateX: isActive
// //                       ? rotateX
// //                       : 0,

// //                     ...(isActive
// //                       ? { rotateY }
// //                       : {}),

// //                     transformStyle:
// //                       "preserve-3d",

// //                     zIndex: isActive
// //                       ? 20
// //                       : 10,
// //                   }}
// //                 >
// //                   {/* =================================================
// //                       CARD
// //                   ================================================= */}

// //                   <div
// //                     className="
// //                       relative
// //                       overflow-hidden
// //                       rounded-[28px]
// //                       w-full
// //                       h-full
// //                       p-8
// //                     "
// //                     style={{
// //                       background:
// //                         "rgba(18,32,61,.72)",

// //                       backdropFilter:
// //                         "blur(16px)",

// //                       border:
// //                         "1px solid rgba(59,130,246,.18)",

// //                       boxShadow:
// //                         "0 0 20px rgba(59,130,246,.20), 0 20px 60px rgba(0,0,0,.35)",
// //                     }}
// //                   >
// //                     {/* =================================================
// //                         SHEEN
// //                     ================================================= */}

// //                     {isActive && (
// //                       <motion.div
// //                         className="
// //                           absolute
// //                           inset-0
// //                           pointer-events-none
// //                         "
// //                         style={{
// //                           background:
// //                             useTransform(
// //                               sheenX,
// //                               (x) =>
// //                                 `linear-gradient(
// //                                   120deg,
// //                                   transparent 20%,
// //                                   rgba(255,255,255,.10) ${x},
// //                                   transparent 80%
// //                                 )`
// //                             ),
// //                         }}
// //                       />
// //                     )}

// //                     {/* =================================================
// //                         PROJECT IMAGE
// //                     ================================================= */}

// //                     {isActive ? (
// //                       <motion.img
// //                         key={`hero-${project.slug}-${i}`}
// //                         src={project.image}
// //                         alt={project.client}
// //                         initial={{
// //                           top: CENTER_Y,
// //                           left:
// //                             CARD_W + 120,
// //                           width: BIG_SIZE,
// //                           height: BIG_SIZE,
// //                           borderRadius: 24,
// //                           opacity: 0,
// //                         }}
// //                         animate={{
// //                           top: [
// //                             CENTER_Y,
// //                             CENTER_Y,
// //                             LOGO_POS +
// //                               LOGO_SIZE / 2,
// //                           ],

// //                           left: [
// //                             CARD_W + 120,
// //                             CENTER_X,
// //                             LOGO_POS +
// //                               LOGO_SIZE / 2,
// //                           ],

// //                           width: [
// //                             BIG_SIZE,
// //                             BIG_SIZE,
// //                             LOGO_SIZE,
// //                           ],

// //                           height: [
// //                             BIG_SIZE,
// //                             BIG_SIZE,
// //                             LOGO_SIZE,
// //                           ],

// //                           borderRadius: [
// //                             24,
// //                             24,
// //                             14,
// //                           ],

// //                           opacity: [0, 1, 1],
// //                         }}
// //                         transition={{
// //                           duration: 2,
// //                           times: [
// //                             0,
// //                             0.45,
// //                             1,
// //                           ],
// //                           ease: [
// //                             "easeOut",
// //                             "easeInOut",
// //                           ],
// //                         }}
// //                         className="
// //                           absolute
// //                           object-cover
// //                           shadow-xl
// //                           z-20
// //                         "
// //                         style={{
// //                           transform:
// //                             "translate(-50%,-50%)",
// //                         }}
// //                       />
// //                     ) : (
// //                       <img
// //                         src={project.image}
// //                         alt={project.client}
// //                         className="
// //                           absolute
// //                           object-cover
// //                           shadow-lg
// //                           z-20
// //                         "
// //                         style={{
// //                           top:
// //                             LOGO_POS +
// //                             LOGO_SIZE / 2,

// //                           left:
// //                             LOGO_POS +
// //                             LOGO_SIZE / 2,

// //                           width: LOGO_SIZE,
// //                           height: LOGO_SIZE,

// //                           borderRadius: 14,

// //                           transform:
// //                             "translate(-50%,-50%)",
// //                         }}
// //                       />
// //                     )}

// //                     {/* =================================================
// //                         TEXT
// //                     ================================================= */}

// //                     <motion.div
// //                       key={
// //                         isActive
// //                           ? `text-active-${project.slug}-${i}`
// //                           : `text-static-${project.slug}-${i}`
// //                       }
// //                       className="
// //                         relative
// //                         z-10
// //                         flex
// //                         flex-col
// //                         h-full
// //                       "
// //                       initial={
// //                         isActive
// //                           ? {
// //                               opacity: 0,
// //                               y: 16,
// //                             }
// //                           : false
// //                       }
// //                       animate={{
// //                         opacity: 1,
// //                         y: 0,
// //                       }}
// //                       transition={
// //                         isActive
// //                           ? {
// //                               delay: 1.05,
// //                               duration: 0.5,
// //                               ease: "easeOut",
// //                             }
// //                           : {
// //                               duration: 0,
// //                             }
// //                       }
// //                     >
// //                       {/* TOP */}

// //                       <div
// //                         className="
// //                           flex
// //                           items-start
// //                           justify-between
// //                         "
// //                       >
// //                         <div
// //                           style={{
// //                             marginLeft:
// //                               LOGO_SIZE + 20,
// //                           }}
// //                         >
// //                           <p
// //                             className="
// //                               text-blue-200
// //                               text-xs
// //                               uppercase
// //                               tracking-[0.25em]
// //                             "
// //                             style={{
// //                               fontFamily:
// //                                 "'IBM Plex Mono', monospace",
// //                             }}
// //                           >
// //                             {project.client}
// //                           </p>
// //                         </div>

// //                         <div className="text-right">
// //                           <div
// //                             className="
// //                               text-xs
// //                               text-slate-400
// //                             "
// //                             style={{
// //                               fontFamily:
// //                                 "'IBM Plex Mono', monospace",
// //                             }}
// //                           >
// //                             {project.date}
// //                           </div>

// //                           <div
// //                             className="
// //                               mt-2
// //                               inline-flex
// //                               rounded-full
// //                               bg-blue-500/20
// //                               border
// //                               border-blue-500/40
// //                               px-3
// //                               py-1
// //                               text-[11px]
// //                               text-blue-300
// //                             "
// //                           >
// //                             {project.category}
// //                           </div>
// //                         </div>
// //                       </div>

// //                       {/* CONTENT */}

// //                       <div
// //                         className="
// //                           mt-10
// //                           flex-1
// //                           flex
// //                           flex-col
// //                         "
// //                       >
// //                         <h3
// //                           className="
// //                             text-4xl
// //                             leading-tight
// //                             font-semibold
// //                             text-white
// //                           "
// //                           style={{
// //                             fontFamily:
// //                               "'Fraunces', serif",
// //                           }}
// //                         >
// //                           {project.title}
// //                         </h3>

// //                         <p
// //                           className="
// //                             mt-5
// //                             text-[15px]
// //                             leading-7
// //                             text-slate-300
// //                           "
// //                           style={{
// //                             fontFamily:
// //                               "'Inter', sans-serif",
// //                           }}
// //                         >
// //                           {project.body}
// //                         </p>

// //                         {/* TECHNOLOGIES */}

// //                         <div
// //                           className="
// //                             flex
// //                             flex-wrap
// //                             gap-3
// //                             mt-8
// //                           "
// //                         >
// //                           {project.technologies.map(
// //                             (tech) => (
// //                               <span
// //                                 key={tech}
// //                                 className="
// //                                   px-4
// //                                   py-2
// //                                   rounded-full
// //                                   text-[11px]
// //                                   bg-blue-500/10
// //                                   border
// //                                   border-blue-500/30
// //                                   text-blue-200
// //                                 "
// //                                 style={{
// //                                   fontFamily:
// //                                     "'IBM Plex Mono', monospace",
// //                                 }}
// //                               >
// //                                 {tech}
// //                               </span>
// //                             )
// //                           )}
// //                         </div>

// //                         {/* =================================================
// //                             VIEW PROJECT -> SERVICES
// //                         ================================================= */}

// //                         <div className="mt-auto pt-10">
// //                           <button
// //                             type="button"
// //                             onClick={(e) => {
// //                               e.stopPropagation();
// //                               goToServices();
// //                             }}
// //                             className="
// //                               group
// //                               flex
// //                               items-center
// //                               gap-3
// //                               rounded-full
// //                               bg-blue-600
// //                               hover:bg-blue-500
// //                               px-7
// //                               py-3
// //                               text-white
// //                               font-medium
// //                               transition-all
// //                               duration-300
// //                               hover:scale-105
// //                             "
// //                           >
// //                             <span>
// //                               View Project
// //                             </span>

// //                             <FiArrowUpRight
// //                               className="
// //                                 transition-transform
// //                                 duration-300
// //                                 group-hover:translate-x-1
// //                                 group-hover:-translate-y-1
// //                               "
// //                             />
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </motion.div>

// //                     {/* =================================================
// //                         CARD BORDER GLOW
// //                     ================================================= */}

// //                     <motion.div
// //                       className="
// //                         absolute
// //                         inset-0
// //                         rounded-[28px]
// //                         pointer-events-none
// //                       "
// //                       animate={
// //                         isActive
// //                           ? {
// //                               opacity: [
// //                                 0.2,
// //                                 0.55,
// //                                 0.2,
// //                               ],
// //                             }
// //                           : {
// //                               opacity: 0,
// //                             }
// //                       }
// //                       transition={{
// //                         duration: 2.5,
// //                         repeat:
// //                           isActive
// //                             ? Infinity
// //                             : 0,
// //                         ease: "easeInOut",
// //                       }}
// //                       style={{
// //                         boxShadow:
// //                           "inset 0 0 40px rgba(59,130,246,.10)",
// //                       }}
// //                     />
// //                   </div>
// //                 </motion.div>
// //               );
// //             }
// //           )}
// //         </div>
// //       </div>

// //       {/* =================================================
// //           GOOGLE FONT IMPORT
// //       ================================================= */}

// //       <style>
// //         {`
// //           @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');
// //         `}
// //       </style>
// //     </section>
// //   );
// // }





// import { useMemo, useRef, useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useReducedMotion,
// } from "framer-motion";
// import { FiClock, FiX } from "react-icons/fi";

// import Seo from "../lib/Seo";
// import Eyebrow from "../components/ui/Eyebrow";
// import CTABand from "../components/sections/CTABand";
// import { projects } from "../data/projects";

// /* =========================================================
//    UPCOMING PRODUCTS
// ========================================================= */

// const upcomingProducts = [
//   "Product Slot 01",
//   "Product Slot 02",
//   "Product Slot 03",
// ];

// /* =========================================================
//    PIXEL CARD
// ========================================================= */

// class Pixel {
//   constructor(canvas, context, x, y, color, speed, delay) {
//     this.width = canvas.width;
//     this.height = canvas.height;
//     this.ctx = context;

//     this.x = x;
//     this.y = y;
//     this.color = color;

//     this.speed = this.random(0.1, 0.9) * speed;

//     this.size = 0;
//     this.sizeStep = Math.random() * 0.4;

//     this.minSize = 0.5;
//     this.maxSizeInteger = 2;

//     this.maxSize = this.random(
//       this.minSize,
//       this.maxSizeInteger
//     );

//     this.delay = delay;
//     this.counter = 0;

//     this.counterStep =
//       Math.random() * 4 +
//       (this.width + this.height) * 0.01;

//     this.isIdle = false;
//     this.isReverse = false;
//     this.isShimmer = false;
//   }

//   random(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   draw() {
//     const centerOffset =
//       this.maxSizeInteger * 0.5 -
//       this.size * 0.5;

//     this.ctx.fillStyle = this.color;

//     this.ctx.fillRect(
//       this.x + centerOffset,
//       this.y + centerOffset,
//       this.size,
//       this.size
//     );
//   }

//   appear() {
//     this.isIdle = false;

//     if (this.counter <= this.delay) {
//       this.counter += this.counterStep;
//       return;
//     }

//     if (this.size >= this.maxSize) {
//       this.isShimmer = true;
//     }

//     if (this.isShimmer) {
//       this.shimmer();
//     } else {
//       this.size += this.sizeStep;
//     }

//     this.draw();
//   }

//   disappear() {
//     this.isShimmer = false;
//     this.counter = 0;

//     if (this.size <= 0) {
//       this.isIdle = true;
//       return;
//     }

//     this.size -= 0.1;
//     this.draw();
//   }

//   shimmer() {
//     if (this.size >= this.maxSize) {
//       this.isReverse = true;
//     } else if (this.size <= this.minSize) {
//       this.isReverse = false;
//     }

//     if (this.isReverse) {
//       this.size -= this.speed;
//     } else {
//       this.size += this.speed;
//     }
//   }
// }

// /* =========================================================
//    PIXEL PROJECT CARD
// ========================================================= */

// function PixelProjectCard({
//   children,
//   className = "",
// }) {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const pixelsRef = useRef([]);
//   const animationRef = useRef(null);

//   const initializePixels = () => {
//     if (
//       !containerRef.current ||
//       !canvasRef.current
//     ) {
//       return;
//     }

//     const rect =
//       containerRef.current.getBoundingClientRect();

//     const width = Math.floor(rect.width);
//     const height = Math.floor(rect.height);

//     const canvas = canvasRef.current;

//     canvas.width = width;
//     canvas.height = height;

//     canvas.style.width = `${width}px`;
//     canvas.style.height = `${height}px`;

//     const ctx = canvas.getContext("2d");

//     if (!ctx) return;

//     const colors = [
//       "#60a5fa",
//       "#3b82f6",
//       "#93c5fd",
//       "#dbeafe",
//     ];

//     const gap = 7;

//     const pixels = [];

//     for (let x = 0; x < width; x += gap) {
//       for (let y = 0; y < height; y += gap) {
//         const color =
//           colors[
//             Math.floor(
//               Math.random() * colors.length
//             )
//           ];

//         const dx = x - width / 2;
//         const dy = y - height / 2;

//         const distance = Math.sqrt(
//           dx * dx + dy * dy
//         );

//         pixels.push(
//           new Pixel(
//             canvas,
//             ctx,
//             x,
//             y,
//             color,
//             0.45,
//             distance
//           )
//         );
//       }
//     }

//     pixelsRef.current = pixels;
//   };

//   const animate = (method) => {
//     cancelAnimationFrame(
//       animationRef.current
//     );

//     const loop = () => {
//       if (!canvasRef.current) return;

//       const ctx =
//         canvasRef.current.getContext("2d");

//       if (!ctx) return;

//       ctx.clearRect(
//         0,
//         0,
//         canvasRef.current.width,
//         canvasRef.current.height
//       );

//       let allIdle = true;

//       pixelsRef.current.forEach((pixel) => {
//         pixel[method]();

//         if (!pixel.isIdle) {
//           allIdle = false;
//         }
//       });

//       if (!allIdle) {
//         animationRef.current =
//           requestAnimationFrame(loop);
//       }
//     };

//     animationRef.current =
//       requestAnimationFrame(loop);
//   };

//   const handleEnter = () => {
//     animate("appear");
//   };

//   const handleLeave = () => {
//     animate("disappear");
//   };

//   useMemo(() => {
//     initializePixels();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={handleEnter}
//       onMouseLeave={handleLeave}
//       className={`relative overflow-hidden ${className}`}
//     >
//       <canvas
//         ref={canvasRef}
//         className="
//           absolute
//           inset-0
//           w-full
//           h-full
//           pointer-events-none
//           z-20
//         "
//       />

//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    HEADING REVEAL
// ========================================================= */

// function RevealHeading({
//   text,
//   className = "",
// }) {
//   const words = useMemo(
//     () => text.split(" "),
//     [text]
//   );

//   return (
//     <div className="overflow-hidden">
//       {words.map((word, index) => (
//         <motion.span
//           key={`${word}-${index}`}
//           className={`inline-block mr-[0.25em] ${className}`}
//           initial={{ y: "110%" }}
//           animate={{ y: "0%" }}
//           transition={{
//             duration: 0.6,
//             delay: 0.1 + index * 0.05,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//         >
//           {word}
//         </motion.span>
//       ))}
//     </div>
//   );
// }

// /* =========================================================
//    PORTFOLIO
// ========================================================= */

// export default function Portfolio() {
//   const reduceMotion = useReducedMotion();

//   const [activeTech, setActiveTech] =
//     useState(null);

//   /* =====================================================
//      TECHNOLOGIES
//   ===================================================== */

//   const techs = useMemo(() => {
//     const techSet = new Set();

//     projects.forEach((project) => {
//       project.technologies.forEach((technology) => {
//         techSet.add(technology);
//       });
//     });

//     return Array.from(techSet).sort();
//   }, []);

//   /* =====================================================
//      FILTER
//   ===================================================== */

//   const visible = activeTech
//     ? projects.filter((project) =>
//         project.technologies.includes(
//           activeTech
//         )
//       )
//     : projects;

//   return (
//     <>
//       <Seo
//         title="Portfolio"
//         description="Explore our selected software projects and digital experiences."
//       />

//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <section className="pt-40 pb-16 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto">
//           <Eyebrow>
//             Selected Work
//           </Eyebrow>

//           <RevealHeading
//             text="Highlighted Projects"
//             className="
//               font-display
//               font-bold
//               text-[clamp(2.2rem,5vw,3.75rem)]
//               text-[var(--fg)]
//               leading-[1.05]
//             "
//           />

//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 12,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: 0.4,
//             }}
//             className="
//               mt-6
//               text-lg
//               max-w-2xl
//               leading-relaxed
//               text-[var(--fg)]
//               opacity-65
//             "
//           >
//             Explore our featured projects that
//             demonstrate our expertise in
//             delivering innovative software
//             solutions tailored to client needs.
//           </motion.p>
//         </div>
//       </section>

//       {/* =====================================================
//           FILTER BAR
//       ===================================================== */}

//       <section className="pb-6 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto">
//           <div className="flex flex-wrap items-center gap-2">
//             {/* ALL */}

//             <button
//               type="button"
//               onClick={() =>
//                 setActiveTech(null)
//               }
//               className={`
//                 font-mono
//                 text-xs
//                 px-3.5
//                 py-1.5
//                 rounded-full
//                 border
//                 transition-colors
//                 duration-200
//                 ${
//                   activeTech === null
//                     ? "bg-signal border-signal text-white"
//                     : "border-[var(--border)] text-[var(--fg)] hover:border-signal/50 hover:text-signal"
//                 }
//               `}
//               style={{
//                 opacity:
//                   activeTech === null
//                     ? 1
//                     : 0.6,
//               }}
//             >
//               All work
//             </button>

//             {/* TECHNOLOGIES */}

//             {techs.map((technology) => (
//               <button
//                 key={technology}
//                 type="button"
//                 onClick={() =>
//                   setActiveTech(
//                     technology === activeTech
//                       ? null
//                       : technology
//                   )
//                 }
//                 aria-pressed={
//                   activeTech === technology
//                 }
//                 className={`
//                   font-mono
//                   text-xs
//                   px-3.5
//                   py-1.5
//                   rounded-full
//                   border
//                   transition-colors
//                   duration-200
//                   ${
//                     activeTech === technology
//                       ? "border-signal text-signal bg-signal/10"
//                       : "border-[var(--border)] text-[var(--fg)] hover:border-signal/50 hover:text-signal"
//                   }
//                 `}
//                 style={{
//                   opacity:
//                     activeTech === technology
//                       ? 1
//                       : 0.6,
//                 }}
//               >
//                 {technology}
//               </button>
//             ))}
//           </div>

//           {/* RESULT COUNT */}

//           <div
//             className="
//               mt-4
//               flex
//               items-center
//               gap-3
//               font-mono
//               text-xs
//               text-[var(--fg)]
//             "
//             style={{
//               opacity: 0.4,
//             }}
//           >
//             <span>
//               Showing {visible.length} of{" "}
//               {projects.length}
//             </span>

//             {activeTech && (
//               <button
//                 type="button"
//                 onClick={() =>
//                   setActiveTech(null)
//                 }
//                 className="
//                   inline-flex
//                   items-center
//                   gap-1
//                   text-signal
//                   hover:underline
//                 "
//               >
//                 <FiX size={12} />

//                 clear filter
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROJECT LIST
//       ===================================================== */}

//       <section className="pb-20 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto flex flex-col gap-5">
//           <AnimatePresence mode="popLayout">
//             {visible.map((project, index) => (
//               <motion.article
//                 key={project.slug}
//                 layout={!reduceMotion}
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -12,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                   ease: [
//                     0.16,
//                     1,
//                     0.3,
//                     1,
//                   ],
//                 }}
//                 className="
//                   group
//                   relative
//                   border
//                   border-[var(--border)]
//                   rounded-2xl
//                   overflow-hidden
//                   hover:border-signal/50
//                   transition-colors
//                   duration-300
//                   grid
//                   sm:grid-cols-[auto_1fr_auto]
//                   gap-8
//                   items-center
//                 "
//               >
//                 {/* PIXEL EFFECT */}

//                 <PixelProjectCard
//                   className="
//                     absolute
//                     inset-0
//                     pointer-events-none
//                   "
//                 >
//                   <div />
//                 </PixelProjectCard>

//                 {/* PROJECT NUMBER */}

//                 <span
//                   className="
//                     hidden
//                     sm:block
//                     font-mono
//                     text-xs
//                     self-start
//                     pt-9
//                     pl-8
//                     relative
//                     z-30
//                   "
//                   style={{
//                     color:
//                       "var(--fg)",
//                     opacity: 0.3,
//                   }}
//                 >
//                   {String(index + 1).padStart(
//                     2,
//                     "0"
//                   )}
//                 </span>

//                 {/* CONTENT */}

//                 <div
//                   className="
//                     relative
//                     z-30
//                     p-8
//                     lg:p-10
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       flex-wrap
//                       items-center
//                       gap-x-6
//                       gap-y-2
//                       font-mono
//                       text-xs
//                     "
//                     style={{
//                       color:
//                         "var(--fg)",
//                       opacity: 0.5,
//                     }}
//                   >
//                     <span className="sm:hidden">
//                       {String(index + 1).padStart(
//                         2,
//                         "0"
//                       )}{" "}
//                       ·
//                     </span>

//                     <span>
//                       Client:{" "}
//                       {project.client}
//                     </span>

//                     <span>
//                       Date: {project.date}
//                     </span>
//                   </div>

//                   <h2
//                     className="
//                       font-display
//                       font-semibold
//                       text-2xl
//                       mt-4
//                       text-[var(--fg)]
//                     "
//                   >
//                     {project.title}
//                   </h2>

//                   <p
//                     className="
//                       mt-3
//                       leading-relaxed
//                       max-w-2xl
//                       text-[var(--fg)]
//                     "
//                     style={{
//                       opacity: 0.65,
//                     }}
//                   >
//                     {project.body}
//                   </p>

//                   {/* TECHNOLOGIES */}

//                   <div className="flex flex-wrap gap-2 mt-6">
//                     {project.technologies.map(
//                       (technology) => (
//                         <button
//                           key={technology}
//                           type="button"
//                           onClick={() =>
//                             setActiveTech(
//                               technology ===
//                                 activeTech
//                                 ? null
//                                 : technology
//                             )
//                           }
//                           className={`
//                             font-mono
//                             text-[11px]
//                             px-2.5
//                             py-1
//                             rounded-full
//                             border
//                             transition-colors
//                             duration-200
//                             ${
//                               activeTech ===
//                               technology
//                                 ? "border-signal text-signal bg-signal/10"
//                                 : "border-[var(--border)] text-[var(--fg)] hover:border-signal/50 hover:text-signal"
//                             }
//                           `}
//                           style={{
//                             opacity:
//                               activeTech ===
//                               technology
//                                 ? 1
//                                 : 0.6,
//                           }}
//                         >
//                           {technology}
//                         </button>
//                       )
//                     )}
//                   </div>
//                 </div>

//                 {/* PROJECT IMAGE */}

//                 {project.image && (
//                   <div
//                     className="
//                       relative
//                       z-30
//                       w-full
//                       sm:w-44
//                       h-32
//                       mr-8
//                       mb-8
//                       sm:mb-0
//                       rounded-xl
//                       bg-white
//                       flex
//                       items-center
//                       justify-center
//                       p-4
//                       shrink-0
//                       overflow-hidden
//                     "
//                   >
//                     <motion.img
//                       src={project.image}
//                       alt={`${project.title} logo`}
//                       loading="lazy"
//                       className="
//                         max-w-full
//                         max-h-full
//                         object-contain
//                       "
//                       whileHover={
//                         reduceMotion
//                           ? undefined
//                           : {
//                               scale: 1.08,
//                             }
//                       }
//                       transition={{
//                         duration: 0.3,
//                         ease: [
//                           0.16,
//                           1,
//                           0.3,
//                           1,
//                         ],
//                       }}
//                     />
//                   </div>
//                 )}
//               </motion.article>
//             ))}
//           </AnimatePresence>

//           {/* EMPTY STATE */}

//           {visible.length === 0 && (
//             <div
//               className="
//                 border
//                 border-dashed
//                 border-[var(--border)]
//                 rounded-2xl
//                 p-12
//                 text-center
//               "
//               style={{
//                 color: "var(--fg)",
//                 opacity: 0.5,
//               }}
//             >
//               Nothing built with{" "}
//               <span className="text-signal">
//                 {activeTech}
//               </span>{" "}
//               yet — check back soon, or{" "}
//               <button
//                 type="button"
//                 onClick={() =>
//                   setActiveTech(null)
//                 }
//                 className="
//                   text-signal
//                   hover:underline
//                 "
//               >
//                 view all work
//               </button>
//               .
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =====================================================
//           COMING SOON
//       ===================================================== */}

//       <section className="pb-28 px-6 lg:px-10">
//         <div className="max-w-shell mx-auto">
//           <Eyebrow>
//             Coming Soon
//           </Eyebrow>

//           <h2
//             className="
//               font-display
//               font-bold
//               text-2xl
//               text-[var(--fg)]
//               mb-8
//             "
//           >
//             More products on the way
//           </h2>

//           <div className="grid sm:grid-cols-3 gap-5">
//             {upcomingProducts.map(
//               (label) => (
//                 <motion.div
//                   key={label}
//                   whileHover={
//                     reduceMotion
//                       ? undefined
//                       : {
//                           y: -4,
//                         }
//                   }
//                   transition={{
//                     duration: 0.25,
//                     ease: [
//                       0.16,
//                       1,
//                       0.3,
//                       1,
//                     ],
//                   }}
//                   className="
//                     border
//                     border-dashed
//                     border-[var(--border)]
//                     rounded-2xl
//                     p-8
//                     flex
//                     flex-col
//                     items-center
//                     justify-center
//                     text-center
//                     gap-3
//                     transition-colors
//                     duration-300
//                   "
//                   style={{
//                     color:
//                       "var(--fg)",
//                     opacity: 0.4,
//                   }}
//                 >
//                   <motion.span
//                     whileHover={
//                       reduceMotion
//                         ? undefined
//                         : {
//                             rotate: 360,
//                           }
//                     }
//                     transition={{
//                       duration: 0.6,
//                       ease: [
//                         0.16,
//                         1,
//                         0.3,
//                         1,
//                       ],
//                     }}
//                   >
//                     <FiClock size={22} />
//                   </motion.span>

//                   <span
//                     className="
//                       font-mono
//                       text-xs
//                       uppercase
//                       tracking-[0.15em]
//                     "
//                   >
//                     {label}
//                   </span>
//                 </motion.div>
//               )
//             )}
//           </div>
//         </div>
//       </section>

//       <CTABand />
//     </>
//   );
// }












import {
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  "All",
  "Web",
  "App",
  "UI/UX",
  "Branding",
];

const SAMPLE_PROJECTS = [
  {
    slug: 'tamil-printer',
    title: 'Tamil Printer \u2013 Invoice Application',
    body: 'Tamil Printer \u2013 Invoice Application is a simple and efficient billing app that helps businesses create, manage, and print professional invoices quickly. Designed for speed and accuracy, it streamlines daily billing operations and keeps your financial records organized with ease.',
    client: 'Tamilarasi K',
    date: 'Feb 2026',
    technologies: ['React', 'Electron JS', 'MySQL'],
    image: '/images/portfolio/tamil-printer.png',
    isPlaceholder: false,
  },
  {
    slug: 'kings-mechanical-symposium',
    title: 'Kings-Mechanical Symposium 2k25',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Mech Dept - Kings',
    date: 'Apr 2025',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/mechancientz.png',
    isPlaceholder: true,
    placeholderNote: 'Description copy-pasted incorrectly on live site (mentions "Retail Corp" / payment gateways for what is a technical symposium event). Client asked to leave as-is for now.',
  },
  {
    slug: 'sm-manpower-service',
    title: 'SM Manpower Service',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Abi Shek',
    date: 'Apr 2026',
    technologies: ['React', 'MongoDB', 'Firebase'],
    image: '/images/portfolio/sm-manpower.png',
    isPlaceholder: true,
    placeholderNote: 'Same copy-paste bug as above. Client asked to leave as-is for now.',
  },
  {
    slug: 'kings-hall-booking-software',
    title: 'Kings Hall Booking Software',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Kings College',
    date: 'Dec 2024',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/kings-hall.png',
    isPlaceholder: true,
    placeholderNote: 'Same copy-paste bug as above. Client asked to leave as-is for now.',
  },
]

const CARD_W = 800;
const CARD_H = 530;

const CENTER_X = CARD_W / 2;
const CENTER_Y = 250;

const BIG_SIZE = 950;

const LOGO_SIZE = 130;
const LOGO_POS = 50;

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

export default function PortfolioTeaser({
  projects = SAMPLE_PROJECTS,
}) {
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef(null);

  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  /* =====================================================
     FILTER PROJECTS
  ===================================================== */

  const filtered = useMemo(() => {
    if (category === "All") return projects;

    return projects.filter(
      (project) => project.category === category
    );
  }, [projects, category]);

  const displayProjects =
    filtered.length > 1
      ? [...filtered, ...filtered, ...filtered]
      : filtered;

  const centerIndex =
    filtered.length + index;

  const safeIndex =
    filtered.length > 0
      ? index % filtered.length
      : 0;

  /* =====================================================
     CATEGORY
  ===================================================== */

  function changeCategory(cat) {
    setCategory(cat);
    setIndex(0);
  }

  /* =====================================================
     PREVIOUS / NEXT
  ===================================================== */

  function go(direction) {
    setIndex((prev) => {
      if (filtered.length === 0) return 0;

      return (
        (prev + direction + filtered.length) %
        filtered.length
      );
    });
  }

  /* =====================================================
     AUTO SLIDE
  ===================================================== */

  useEffect(() => {
    if (paused) return;
    if (filtered.length <= 1) return;

    const timer = setInterval(() => {
      setIndex(
        (prev) =>
          (prev + 1) % filtered.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, filtered.length]);

  /* =====================================================
     CARD MOUSE EFFECT
  ===================================================== */

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(
      mouseY,
      [0, 1],
      [12, -12]
    ),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(
      mouseX,
      [0, 1],
      [-14, 14]
    ),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const sheenX = useTransform(
    mouseX,
    [0, 1],
    ["20%", "80%"]
  );

  function onCardMove(e) {
    if (prefersReducedMotion) return;

    const rect =
      e.currentTarget.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) /
        rect.width
    );

    mouseY.set(
      (e.clientY - rect.top) /
        rect.height
    );
  }

  function onCardLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  /* =====================================================
     SECTION SPOTLIGHT
  ===================================================== */

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  function onSectionMove(e) {
    if (prefersReducedMotion) return;

    const rect =
      sectionRef.current.getBoundingClientRect();

    spotX.set(
      ((e.clientX - rect.left) /
        rect.width) *
        100
    );

    spotY.set(
      ((e.clientY - rect.top) /
        rect.height) *
        100
    );
  }

  const spotlight = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(
        700px circle at ${x}% ${y}%,
        rgba(37,99,235,.15),
        transparent 70%
      )`
  );

  /* =====================================================
     KEYBOARD
  ===================================================== */

  function onKeyDown(e) {
    if (e.key === "ArrowLeft") {
      go(-1);
    }

    if (e.key === "ArrowRight") {
      go(1);
    }
  }

  /* =====================================================
     VIEW PROJECT
     NOW LINKS TO SERVICES PAGE
  ===================================================== */

  function goToServices() {
    window.location.href = "/services";
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={onSectionMove}
      className="
        relative
        overflow-hidden
        py-20
        lg:py-28
        px-6
        
      "
      style={{
        background: "#081120",
        color: "#FFFFFF",
      }}
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <motion.div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: spotlight,
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            flex
            flex-wrap
            justify-between
            items-end
            gap-18
            mb-14
          
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                tracking-[.25em]
                text-blue-400
                mb-3
                
              "
              style={{
                fontFamily:
                  "'IBM Plex Mono', monospace",
              }}
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-blue-500
                "
              />

              SELECTED WORK
            </div>

            <h2
              className="
                text-5xl
                lg:text-6xl
                font-semibold
                leading-none
              "
              style={{
                fontFamily:
                  "'Fraunces', serif",
              }}
            >
              Featured Projects
            </h2>
          </div>

          <a
            href="/portfolio"
            className="
              flex
              items-center
              gap-2
              border-b
              border-blue-500
              pb-1
              text-blue-300
              hover:text-blue-400
              transition
            "
            style={{
              fontFamily:
                "'IBM Plex Mono', monospace",
            }}
          >
            View Portfolio

            <FiArrowUpRight />
          </a>
        </div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <div
          className="
            flex
            flex-wrap
            gap-4
            mb-16
          "
        >
          {categories.map((cat) => {
            const activeTab =
              cat === category;

            return (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  changeCategory(cat)
                }
                className="
                  rounded-full
                  px-6
                  py-3
                  text-sm
                  transition-all
                  duration-300
                "
                style={{
                  fontFamily:
                    "'IBM Plex Mono', monospace",

                  background: activeTab
                    ? "rgba(37,99,235,.18)"
                    : "transparent",

                  border: `1px solid ${
                    activeTab
                      ? "#3B82F6"
                      : "rgba(255,255,255,.08)"
                  }`,

                  color: activeTab
                    ? "#60A5FA"
                    : "#94A3B8",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* =================================================
            COVERFLOW
        ================================================= */}

        <div
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() =>
            setPaused(true)
          }
          onMouseLeave={() =>
            setPaused(false)
          }
          className="
            relative
            flex
            items-center
            justify-center
            outline-none
            mb-16
          "
          style={{
            perspective: 1800,
            height: 560,
          }}
        >
          {displayProjects.map(
            (project, i) => {
              const offset =
                i - centerIndex;

              const distance =
                Math.abs(offset);

              const isActive =
                offset === 0;

              if (distance > 2)
                return null;

              const animation =
                prefersReducedMotion
                  ? {
                      x: offset * 450,
                      scale: isActive
                        ? 1
                        : 0.9,
                      opacity: 1,
                    }
                  : {
                      x: offset * 180,
                      rotateY: 0,
                      scale: isActive
                        ? 1
                        : 0.9,
                      opacity: isActive
                        ? 1
                        : 0.75,
                      filter: isActive
                        ? "blur(0px)"
                        : "blur(5px)",
                    };

              return (
                <motion.div
                  key={`${project.slug}-${i}`}
                  animate={animation}
                  transition={{
                    type: "tween",
                    stiffness: 240,
                    damping: 28,
                  }}
                  onClick={() =>
                    setIndex(
                      i %
                        Math.max(
                          filtered.length,
                          1
                        )
                    )
                  }
                  onMouseMove={
                    isActive
                      ? onCardMove
                      : undefined
                  }
                  onMouseLeave={
                    isActive
                      ? onCardLeave
                      : undefined
                  }
                  className="
                    absolute
                    cursor-pointer
                  "
                  style={{
                    width: CARD_W,
                    height: CARD_H,

                    background:
                      "linear-gradient(160deg,#0F172A,#1E293B)",

                    rotateX: isActive
                      ? rotateX
                      : 0,

                    ...(isActive
                      ? { rotateY }
                      : {}),

                    transformStyle:
                      "preserve-3d",

                    zIndex: isActive
                      ? 20
                      : 10,
                  }}
                >
                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[28px]
                      w-full
                      h-full
                      p-8
                    "
                    style={{
                      background:
                        "rgba(18,32,61,.72)",

                      backdropFilter:
                        "blur(16px)",

                      border:
                        "1px solid rgba(59,130,246,.18)",

                      boxShadow:
                        "0 0 20px rgba(59,130,246,.20), 0 20px 60px rgba(0,0,0,.35)",
                    }}
                  >
                    {/* =================================================
                        SHEEN
                    ================================================= */}

                    {isActive && (
                      <motion.div
                        className="
                          absolute
                          inset-0
                          pointer-events-none
                        "
                        style={{
                          background:
                            useTransform(
                              sheenX,
                              (x) =>
                                `linear-gradient(
                                  120deg,
                                  transparent 20%,
                                  rgba(255,255,255,.10) ${x},
                                  transparent 80%
                                )`
                            ),
                        }}
                      />
                    )}

                    {/* =================================================
                        PROJECT IMAGE
                    ================================================= */}

                    {isActive ? (
                      <motion.img
                        key={`hero-${project.slug}-${i}`}
                        src={project.image}
                        alt={project.client}
                        initial={{
                          top: CENTER_Y,
                          left:
                            CARD_W + 120,
                          width: BIG_SIZE,
                          height: BIG_SIZE,
                          borderRadius: 24,
                          opacity: 0,
                        }}
                        animate={{
                          top: [
                            CENTER_Y,
                            CENTER_Y,
                            LOGO_POS +
                              LOGO_SIZE / 2,
                          ],

                          left: [
                            CARD_W + 120,
                            CENTER_X,
                            LOGO_POS +
                              LOGO_SIZE / 2,
                          ],

                          width: [
                            BIG_SIZE,
                            BIG_SIZE,
                            LOGO_SIZE,
                          ],

                          height: [
                            BIG_SIZE,
                            BIG_SIZE,
                            LOGO_SIZE,
                          ],

                          borderRadius: [
                            24,
                            24,
                            14,
                          ],

                          opacity: [0, 1, 1],
                        }}
                        transition={{
                          duration: 2,
                          times: [
                            0,
                            0.45,
                            1,
                          ],
                          ease: [
                            "easeOut",
                            "easeInOut",
                          ],
                        }}
                        className="
                          absolute
                          object-cover
                          shadow-xl
                          z-20
                        "
                        style={{
                          transform:
                            "translate(-50%,-50%)",
                        }}
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.client}
                        className="
                          absolute
                          object-cover
                          shadow-lg
                          z-20
                        "
                        style={{
                          top:
                            LOGO_POS +
                            LOGO_SIZE / 2,

                          left:
                            LOGO_POS +
                            LOGO_SIZE / 2,

                          width: LOGO_SIZE,
                          height: LOGO_SIZE,

                          borderRadius: 14,

                          transform:
                            "translate(-50%,-50%)",
                        }}
                      />
                    )}

                    {/* =================================================
                        TEXT
                    ================================================= */}

                    <motion.div
                      key={
                        isActive
                          ? `text-active-${project.slug}-${i}`
                          : `text-static-${project.slug}-${i}`
                      }
                      className="
                        relative
                        z-10
                        flex
                        flex-col
                        h-full
                      "
                      initial={
                        isActive
                          ? {
                              opacity: 0,
                              y: 16,
                            }
                          : false
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={
                        isActive
                          ? {
                              delay: 2,
                              duration: 0.5,
                              ease: "easeOut",
                            }
                          : {
                              duration: 0,
                            }
                      }
                    >
                      {/* TOP */}

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                        "
                      >
                        <div
                          style={{
                            marginLeft:
                              LOGO_SIZE + 20,
                          }}
                        >
                          <p
                            className="
                              text-blue-200
                              xl:text-[15px]
                              uppercase
                              tracking-[0.25em]
                              mt-[60px]
                              pl-12
                            "
                            style={{
                              fontFamily:
                                "'IBM Plex Mono', monospace",
                            }}
                          >
                            {project.client}
                          </p>
                        </div>

                        <div className="text-right">
                          <div
                            className="
                              text-xs
                              text-slate-400
                            "
                            style={{
                              fontFamily:
                                "'IBM Plex Mono', monospace",
                            }}
                          >
                            {project.date}
                          </div>

                          <div
                            className="
                              mt-2
                              inline-flex
                              rounded-full
                              bg-blue-500/20
                              border
                              border-blue-500/40
                              px-3
                              py-1
                              text-[11px]
                              text-blue-300
                            "
                          >
                            {project.category}
                          </div>
                        </div>
                      </div>

                      {/* CONTENT */}

                      <div
                        className="
                          mt-28
                          flex-1
                          flex
                          flex-col
                        "
                      >
                        <h3
                          className="
                            text-4xl
                            leading-tight
                            font-semibold
                            text-white
                          "
                          style={{
                            fontFamily:
                              "'Fraunces', serif",
                          }}
                        >
                          {project.title}
                        </h3>

                        <p
                          className="
                            mt-5
                            text-[15px]
                            leading-7
                            text-slate-300
                          "
                          style={{
                            fontFamily:
                              "'Inter', sans-serif",
                          }}
                        >
                          {project.body}
                        </p>

                        {/* TECHNOLOGIES */}

                        <div
                          className="
                            flex
                            flex-wrap
                            gap-3
                            mt-8
                          "
                        >
                          {project.technologies.map(
                            (tech) => (
                              <span
                                key={tech}
                                className="
                                  px-4
                                  py-2
                                  rounded-full
                                  text-[11px]
                                  bg-blue-500/10
                                  border
                                  border-blue-500/30
                                  text-blue-200
                                "
                                style={{
                                  fontFamily:
                                    "'IBM Plex Mono', monospace",
                                }}
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>

                        {/* =================================================
                            VIEW PROJECT -> SERVICES
                        ================================================= */}

                        <div className="mt-auto pt-10">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              goToServices();
                            }}
                            className="
                              group
                              flex
                              items-center
                              gap-3
                              rounded-full
                              bg-blue-600
                              hover:bg-blue-500
                              px-7
                              py-3
                              text-white
                              font-medium
                              transition-all
                              duration-300
                              hover:scale-105
                            "
                          >
                            <span>
                              View Project
                            </span>

                            <FiArrowUpRight
                              className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                              "
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>

                    {/* =================================================
                        CARD BORDER GLOW
                    ================================================= */}

                    <motion.div
                      className="
                        absolute
                        inset-0
                        rounded-[28px]
                        pointer-events-none
                      "
                      animate={
                        isActive
                          ? {
                              opacity: [
                                0.2,
                                0.55,
                                0.2,
                              ],
                            }
                          : {
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: 2.5,
                        repeat:
                          isActive
                            ? Infinity
                            : 0,
                        ease: "easeInOut",
                      }}
                      style={{
                        boxShadow:
                          "inset 0 0 40px rgba(59,130,246,.10)",
                      }}
                    />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>

      {/* =================================================
          GOOGLE FONT IMPORT
      ================================================= */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');
        `}
      </style>
    </section>
  );
}