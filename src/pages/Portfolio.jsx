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












// import {
//   useMemo,
//   useRef,
//   useState,
//   useEffect,
// } from "react";

// import {
//   motion,
//   useMotionValue,
//   useReducedMotion,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// import { FiArrowUpRight } from "react-icons/fi";

// const categories = [
//   "All",
//   "Web",
//   "App",
//   "UI/UX",
//   "Branding",
// ];

// const SAMPLE_PROJECTS = [
//   {
//     slug: 'tamil-printer',
//     title: 'Tamil Printer \u2013 Invoice Application',
//     body: 'Tamil Printer \u2013 Invoice Application is a simple and efficient billing app that helps businesses create, manage, and print professional invoices quickly. Designed for speed and accuracy, it streamlines daily billing operations and keeps your financial records organized with ease.',
//     client: 'Tamilarasi K',
//     date: 'Feb 2026',
//     technologies: ['React', 'Electron JS', 'MySQL'],
//     image: '/images/portfolio/tamil-printer.png',
//     isPlaceholder: false,
//   },
//   {
//     slug: 'kings-mechanical-symposium',
//     title: 'Kings-Mechanical Symposium 2k25',
//     body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
//     client: 'Mech Dept - Kings',
//     date: 'Apr 2025',
//     technologies: ['React', 'Node.js', 'MongoDB'],
//     image: '/images/portfolio/mechancientz.png',
//     isPlaceholder: true,
//     placeholderNote: 'Description copy-pasted incorrectly on live site (mentions "Retail Corp" / payment gateways for what is a technical symposium event). Client asked to leave as-is for now.',
//   },
//   {
//     slug: 'sm-manpower-service',
//     title: 'SM Manpower Service',
//     body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
//     client: 'Abi Shek',
//     date: 'Apr 2026',
//     technologies: ['React', 'MongoDB', 'Firebase'],
//     image: '/images/portfolio/sm-manpower.png',
//     isPlaceholder: true,
//     placeholderNote: 'Same copy-paste bug as above. Client asked to leave as-is for now.',
//   },
//   {
//     slug: 'kings-hall-booking-software',
//     title: 'Kings Hall Booking Software',
//     body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
//     client: 'Kings College',
//     date: 'Dec 2024',
//     technologies: ['React', 'Node.js', 'MongoDB'],
//     image: '/images/portfolio/kings-hall.png',
//     isPlaceholder: true,
//     placeholderNote: 'Same copy-paste bug as above. Client asked to leave as-is for now.',
//   },
// ]

// const CARD_W = 800;
// const CARD_H = 530;

// const CENTER_X = CARD_W / 2;
// const CENTER_Y = 250;

// const BIG_SIZE = 950;

// const LOGO_SIZE = 130;
// const LOGO_POS = 50;

// function initials(name) {
//   return name
//     .split(" ")
//     .map((word) => word[0])
//     .join("")
//     .substring(0, 2)
//     .toUpperCase();
// }

// export default function PortfolioTeaser({
//   projects = SAMPLE_PROJECTS,
// }) {
//   const prefersReducedMotion = useReducedMotion();

//   const sectionRef = useRef(null);

//   const [category, setCategory] = useState("All");
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   /* =====================================================
//      FILTER PROJECTS
//   ===================================================== */

//   const filtered = useMemo(() => {
//     if (category === "All") return projects;

//     return projects.filter(
//       (project) => project.category === category
//     );
//   }, [projects, category]);

//   const displayProjects =
//     filtered.length > 1
//       ? [...filtered, ...filtered, ...filtered]
//       : filtered;

//   const centerIndex =
//     filtered.length + index;

//   const safeIndex =
//     filtered.length > 0
//       ? index % filtered.length
//       : 0;

//   /* =====================================================
//      CATEGORY
//   ===================================================== */

//   function changeCategory(cat) {
//     setCategory(cat);
//     setIndex(0);
//   }

//   /* =====================================================
//      PREVIOUS / NEXT
//   ===================================================== */

//   function go(direction) {
//     setIndex((prev) => {
//       if (filtered.length === 0) return 0;

//       return (
//         (prev + direction + filtered.length) %
//         filtered.length
//       );
//     });
//   }

//   /* =====================================================
//      AUTO SLIDE
//   ===================================================== */

//   useEffect(() => {
//     if (paused) return;
//     if (filtered.length <= 1) return;

//     const timer = setInterval(() => {
//       setIndex(
//         (prev) =>
//           (prev + 1) % filtered.length
//       );
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [paused, filtered.length]);

//   /* =====================================================
//      CARD MOUSE EFFECT
//   ===================================================== */

//   const mouseX = useMotionValue(0.5);
//   const mouseY = useMotionValue(0.5);

//   const rotateX = useSpring(
//     useTransform(
//       mouseY,
//       [0, 1],
//       [12, -12]
//     ),
//     {
//       stiffness: 180,
//       damping: 18,
//     }
//   );

//   const rotateY = useSpring(
//     useTransform(
//       mouseX,
//       [0, 1],
//       [-14, 14]
//     ),
//     {
//       stiffness: 180,
//       damping: 18,
//     }
//   );

//   const sheenX = useTransform(
//     mouseX,
//     [0, 1],
//     ["20%", "80%"]
//   );

//   function onCardMove(e) {
//     if (prefersReducedMotion) return;

//     const rect =
//       e.currentTarget.getBoundingClientRect();

//     mouseX.set(
//       (e.clientX - rect.left) /
//         rect.width
//     );

//     mouseY.set(
//       (e.clientY - rect.top) /
//         rect.height
//     );
//   }

//   function onCardLeave() {
//     mouseX.set(0.5);
//     mouseY.set(0.5);
//   }

//   /* =====================================================
//      SECTION SPOTLIGHT
//   ===================================================== */

//   const spotX = useMotionValue(50);
//   const spotY = useMotionValue(50);

//   function onSectionMove(e) {
//     if (prefersReducedMotion) return;

//     const rect =
//       sectionRef.current.getBoundingClientRect();

//     spotX.set(
//       ((e.clientX - rect.left) /
//         rect.width) *
//         100
//     );

//     spotY.set(
//       ((e.clientY - rect.top) /
//         rect.height) *
//         100
//     );
//   }

//   const spotlight = useTransform(
//     [spotX, spotY],
//     ([x, y]) =>
//       `radial-gradient(
//         700px circle at ${x}% ${y}%,
//         rgba(37,99,235,.15),
//         transparent 70%
//       )`
//   );

//   /* =====================================================
//      KEYBOARD
//   ===================================================== */

//   function onKeyDown(e) {
//     if (e.key === "ArrowLeft") {
//       go(-1);
//     }

//     if (e.key === "ArrowRight") {
//       go(1);
//     }
//   }

//   /* =====================================================
//      VIEW PROJECT
//      NOW LINKS TO SERVICES PAGE
//   ===================================================== */

//   function goToServices() {
//     window.location.href = "/services";
//   }

//   return (
//     <section
//       ref={sectionRef}
//       onMouseMove={onSectionMove}
//       className="
//         relative
//         overflow-hidden
//         py-20
//         lg:py-28
//         px-6

//       "
//       style={{
//         background: "#081120",
//         color: "#FFFFFF",
//       }}
//     >
//       {/* =================================================
//           BACKGROUND
//       ================================================= */}

//       <motion.div
//         className="
//           absolute
//           inset-0
//           pointer-events-none
//         "
//         style={{
//           background: spotlight,
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto">

//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <div
//           className="
//             flex
//             flex-wrap
//             justify-between
//             items-end
//             gap-18
//             mb-14

//           "
//         >
//           <div>
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-2
//                 text-xs
//                 tracking-[.25em]
//                 text-blue-400
//                 mb-3

//               "
//               style={{
//                 fontFamily:
//                   "'IBM Plex Mono', monospace",
//               }}
//             >
//               <span
//                 className="
//                   w-2
//                   h-2
//                   rounded-full
//                   bg-blue-500
//                 "
//               />

//               SELECTED WORK
//             </div>

//             <h2
//               className="
//                 text-5xl
//                 lg:text-6xl
//                 font-semibold
//                 leading-none
//               "
//               style={{
//                 fontFamily:
//                   "'Fraunces', serif",
//               }}
//             >
//               Featured Projects
//             </h2>
//           </div>

//           <a
//             href="/portfolio"
//             className="
//               flex
//               items-center
//               gap-2
//               border-b
//               border-blue-500
//               pb-1
//               text-blue-300
//               hover:text-blue-400
//               transition
//             "
//             style={{
//               fontFamily:
//                 "'IBM Plex Mono', monospace",
//             }}
//           >
//             View Portfolio

//             <FiArrowUpRight />
//           </a>
//         </div>

//         {/* =================================================
//             FILTERS
//         ================================================= */}

//         <div
//           className="
//             flex
//             flex-wrap
//             gap-4
//             mb-16
//           "
//         >
//           {categories.map((cat) => {
//             const activeTab =
//               cat === category;

//             return (
//               <button
//                 key={cat}
//                 type="button"
//                 onClick={() =>
//                   changeCategory(cat)
//                 }
//                 className="
//                   rounded-full
//                   px-6
//                   py-3
//                   text-sm
//                   transition-all
//                   duration-300
//                 "
//                 style={{
//                   fontFamily:
//                     "'IBM Plex Mono', monospace",

//                   background: activeTab
//                     ? "rgba(37,99,235,.18)"
//                     : "transparent",

//                   border: `1px solid ${
//                     activeTab
//                       ? "#3B82F6"
//                       : "rgba(255,255,255,.08)"
//                   }`,

//                   color: activeTab
//                     ? "#60A5FA"
//                     : "#94A3B8",
//                 }}
//               >
//                 {cat}
//               </button>
//             );
//           })}
//         </div>

//         {/* =================================================
//             COVERFLOW
//         ================================================= */}

//         <div
//           tabIndex={0}
//           onKeyDown={onKeyDown}
//           onMouseEnter={() =>
//             setPaused(true)
//           }
//           onMouseLeave={() =>
//             setPaused(false)
//           }
//           className="
//             relative
//             flex
//             items-center
//             justify-center
//             outline-none
//             mb-16
//           "
//           style={{
//             perspective: 1800,
//             height: 560,
//           }}
//         >
//           {displayProjects.map(
//             (project, i) => {
//               const offset =
//                 i - centerIndex;

//               const distance =
//                 Math.abs(offset);

//               const isActive =
//                 offset === 0;

//               if (distance > 2)
//                 return null;

//               const animation =
//                 prefersReducedMotion
//                   ? {
//                       x: offset * 450,
//                       scale: isActive
//                         ? 1
//                         : 0.9,
//                       opacity: 1,
//                     }
//                   : {
//                       x: offset * 180,
//                       rotateY: 0,
//                       scale: isActive
//                         ? 1
//                         : 0.9,
//                       opacity: isActive
//                         ? 1
//                         : 0.75,
//                       filter: isActive
//                         ? "blur(0px)"
//                         : "blur(5px)",
//                     };

//               return (
//                 <motion.div
//                   key={`${project.slug}-${i}`}
//                   animate={animation}
//                   transition={{
//                     type: "tween",
//                     stiffness: 240,
//                     damping: 28,
//                   }}
//                   onClick={() =>
//                     setIndex(
//                       i %
//                         Math.max(
//                           filtered.length,
//                           1
//                         )
//                     )
//                   }
//                   onMouseMove={
//                     isActive
//                       ? onCardMove
//                       : undefined
//                   }
//                   onMouseLeave={
//                     isActive
//                       ? onCardLeave
//                       : undefined
//                   }
//                   className="
//                     absolute
//                     cursor-pointer
//                   "
//                   style={{
//                     width: CARD_W,
//                     height: CARD_H,

//                     background:
//                       "linear-gradient(160deg,#0F172A,#1E293B)",

//                     rotateX: isActive
//                       ? rotateX
//                       : 0,

//                     ...(isActive
//                       ? { rotateY }
//                       : {}),

//                     transformStyle:
//                       "preserve-3d",

//                     zIndex: isActive
//                       ? 20
//                       : 10,
//                   }}
//                 >
//                   {/* =================================================
//                       CARD
//                   ================================================= */}

//                   <div
//                     className="
//                       relative
//                       overflow-hidden
//                       rounded-[28px]
//                       w-full
//                       h-full
//                       p-8
//                     "
//                     style={{
//                       background:
//                         "rgba(18,32,61,.72)",

//                       backdropFilter:
//                         "blur(16px)",

//                       border:
//                         "1px solid rgba(59,130,246,.18)",

//                       boxShadow:
//                         "0 0 20px rgba(59,130,246,.20), 0 20px 60px rgba(0,0,0,.35)",
//                     }}
//                   >
//                     {/* =================================================
//                         SHEEN
//                     ================================================= */}

//                     {isActive && (
//                       <motion.div
//                         className="
//                           absolute
//                           inset-0
//                           pointer-events-none
//                         "
//                         style={{
//                           background:
//                             useTransform(
//                               sheenX,
//                               (x) =>
//                                 `linear-gradient(
//                                   120deg,
//                                   transparent 20%,
//                                   rgba(255,255,255,.10) ${x},
//                                   transparent 80%
//                                 )`
//                             ),
//                         }}
//                       />
//                     )}

//                     {/* =================================================
//                         PROJECT IMAGE
//                     ================================================= */}

//                     {isActive ? (
//                       <motion.img
//                         key={`hero-${project.slug}-${i}`}
//                         src={project.image}
//                         alt={project.client}
//                         initial={{
//                           top: CENTER_Y,
//                           left:
//                             CARD_W + 120,
//                           width: BIG_SIZE,
//                           height: BIG_SIZE,
//                           borderRadius: 24,
//                           opacity: 0,
//                         }}
//                         animate={{
//                           top: [
//                             CENTER_Y,
//                             CENTER_Y,
//                             LOGO_POS +
//                               LOGO_SIZE / 2,
//                           ],

//                           left: [
//                             CARD_W + 120,
//                             CENTER_X,
//                             LOGO_POS +
//                               LOGO_SIZE / 2,
//                           ],

//                           width: [
//                             BIG_SIZE,
//                             BIG_SIZE,
//                             LOGO_SIZE,
//                           ],

//                           height: [
//                             BIG_SIZE,
//                             BIG_SIZE,
//                             LOGO_SIZE,
//                           ],

//                           borderRadius: [
//                             24,
//                             24,
//                             14,
//                           ],

//                           opacity: [0, 1, 1],
//                         }}
//                         transition={{
//                           duration: 2,
//                           times: [
//                             0,
//                             0.45,
//                             1,
//                           ],
//                           ease: [
//                             "easeOut",
//                             "easeInOut",
//                           ],
//                         }}
//                         className="
//                           absolute
//                           object-cover
//                           shadow-xl
//                           z-20
//                         "
//                         style={{
//                           transform:
//                             "translate(-50%,-50%)",
//                         }}
//                       />
//                     ) : (
//                       <img
//                         src={project.image}
//                         alt={project.client}
//                         className="
//                           absolute
//                           object-cover
//                           shadow-lg
//                           z-20
//                         "
//                         style={{
//                           top:
//                             LOGO_POS +
//                             LOGO_SIZE / 2,

//                           left:
//                             LOGO_POS +
//                             LOGO_SIZE / 2,

//                           width: LOGO_SIZE,
//                           height: LOGO_SIZE,

//                           borderRadius: 14,

//                           transform:
//                             "translate(-50%,-50%)",
//                         }}
//                       />
//                     )}

//                     {/* =================================================
//                         TEXT
//                     ================================================= */}

//                     <motion.div
//                       key={
//                         isActive
//                           ? `text-active-${project.slug}-${i}`
//                           : `text-static-${project.slug}-${i}`
//                       }
//                       className="
//                         relative
//                         z-10
//                         flex
//                         flex-col
//                         h-full
//                       "
//                       initial={
//                         isActive
//                           ? {
//                               opacity: 0,
//                               y: 16,
//                             }
//                           : false
//                       }
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       transition={
//                         isActive
//                           ? {
//                               delay: 2,
//                               duration: 0.5,
//                               ease: "easeOut",
//                             }
//                           : {
//                               duration: 0,
//                             }
//                       }
//                     >
//                       {/* TOP */}

//                       <div
//                         className="
//                           flex
//                           items-start
//                           justify-between
//                         "
//                       >
//                         <div
//                           style={{
//                             marginLeft:
//                               LOGO_SIZE + 20,
//                           }}
//                         >
//                           <p
//                             className="
//                               text-blue-200
//                               xl:text-[15px]
//                               uppercase
//                               tracking-[0.25em]
//                               mt-[60px]
//                               pl-12
//                             "
//                             style={{
//                               fontFamily:
//                                 "'IBM Plex Mono', monospace",
//                             }}
//                           >
//                             {project.client}
//                           </p>
//                         </div>

//                         <div className="text-right">
//                           <div
//                             className="
//                               text-xs
//                               text-slate-400
//                             "
//                             style={{
//                               fontFamily:
//                                 "'IBM Plex Mono', monospace",
//                             }}
//                           >
//                             {project.date}
//                           </div>

//                           <div
//                             className="
//                               mt-2
//                               inline-flex
//                               rounded-full
//                               bg-blue-500/20
//                               border
//                               border-blue-500/40
//                               px-3
//                               py-1
//                               text-[11px]
//                               text-blue-300
//                             "
//                           >
//                             {project.category}
//                           </div>
//                         </div>
//                       </div>

//                       {/* CONTENT */}

//                       <div
//                         className="
//                           mt-28
//                           flex-1
//                           flex
//                           flex-col
//                         "
//                       >
//                         <h3
//                           className="
//                             text-4xl
//                             leading-tight
//                             font-semibold
//                             text-white
//                           "
//                           style={{
//                             fontFamily:
//                               "'Fraunces', serif",
//                           }}
//                         >
//                           {project.title}
//                         </h3>

//                         <p
//                           className="
//                             mt-5
//                             text-[15px]
//                             leading-7
//                             text-slate-300
//                           "
//                           style={{
//                             fontFamily:
//                               "'Inter', sans-serif",
//                           }}
//                         >
//                           {project.body}
//                         </p>

//                         {/* TECHNOLOGIES */}

//                         <div
//                           className="
//                             flex
//                             flex-wrap
//                             gap-3
//                             mt-8
//                           "
//                         >
//                           {project.technologies.map(
//                             (tech) => (
//                               <span
//                                 key={tech}
//                                 className="
//                                   px-4
//                                   py-2
//                                   rounded-full
//                                   text-[11px]
//                                   bg-blue-500/10
//                                   border
//                                   border-blue-500/30
//                                   text-blue-200
//                                 "
//                                 style={{
//                                   fontFamily:
//                                     "'IBM Plex Mono', monospace",
//                                 }}
//                               >
//                                 {tech}
//                               </span>
//                             )
//                           )}
//                         </div>

//                         {/* =================================================
//                             VIEW PROJECT -> SERVICES
//                         ================================================= */}

//                         <div className="mt-auto pt-10">
//                           <button
//                             type="button"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               goToServices();
//                             }}
//                             className="
//                               group
//                               flex
//                               items-center
//                               gap-3
//                               rounded-full
//                               bg-blue-600
//                               hover:bg-blue-500
//                               px-7
//                               py-3
//                               text-white
//                               font-medium
//                               transition-all
//                               duration-300
//                               hover:scale-105
//                             "
//                           >
//                             <span>
//                               View Project
//                             </span>

//                             <FiArrowUpRight
//                               className="
//                                 transition-transform
//                                 duration-300
//                                 group-hover:translate-x-1
//                                 group-hover:-translate-y-1
//                               "
//                             />
//                           </button>
//                         </div>
//                       </div>
//                     </motion.div>

//                     {/* =================================================
//                         CARD BORDER GLOW
//                     ================================================= */}

//                     <motion.div
//                       className="
//                         absolute
//                         inset-0
//                         rounded-[28px]
//                         pointer-events-none
//                       "
//                       animate={
//                         isActive
//                           ? {
//                               opacity: [
//                                 0.2,
//                                 0.55,
//                                 0.2,
//                               ],
//                             }
//                           : {
//                               opacity: 0,
//                             }
//                       }
//                       transition={{
//                         duration: 2.5,
//                         repeat:
//                           isActive
//                             ? Infinity
//                             : 0,
//                         ease: "easeInOut",
//                       }}
//                       style={{
//                         boxShadow:
//                           "inset 0 0 40px rgba(59,130,246,.10)",
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               );
//             }
//           )}
//         </div>
//       </div>

//       {/* =================================================
//           GOOGLE FONT IMPORT
//       ================================================= */}

//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');
//         `}
//       </style>
//     </section>
//   );
// }

















// import { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiArrowUpRight,
//   FiChevronLeft,
//   FiChevronRight,
//   FiExternalLink,
//   FiLayers,
//   FiCalendar,
//   FiUser,
//   FiGrid,
// } from "react-icons/fi";

// const categories = [
//   "All",
//   "Web",
//   "App",
//   "UI/UX",
//   "Branding",
// ];

// const SAMPLE_PROJECTS = [
//   {
//     slug: "tamil-printer",
//     title: "Tamil Printer – Invoice Application",
//     body: "Tamil Printer – Invoice Application is a simple and efficient billing app that helps businesses create, manage, and print professional invoices quickly. Designed for speed and accuracy, it streamlines daily billing operations and keeps your financial records organized with ease.",
//     client: "Tamilarasi K",
//     date: "Feb 2026",
//     category: "App",
//     technologies: ["React", "Electron JS", "MySQL"],
//     image: "/images/portfolio/tamil-printer.png",
//   },
//   {
//     slug: "kings-mechanical-symposium",
//     title: "Kings-Mechanical Symposium 2k25",
//     body: "Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.",
//     client: "Mech Dept - Kings",
//     date: "Apr 2025",
//     category: "Web",
//     technologies: ["React", "Node.js", "MongoDB"],
//     image: "/images/portfolio/mechancientz.png",
//   },
//   {
//     slug: "sm-manpower-service",
//     title: "SM Manpower Service",
//     body: "Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.",
//     client: "Abi Shek",
//     date: "Apr 2026",
//     category: "Web",
//     technologies: ["React", "MongoDB", "Firebase"],
//     image: "/images/portfolio/sm-manpower.png",
//   },
//   {
//     slug: "kings-hall-booking-software",
//     title: "Kings Hall Booking Software",
//     body: "Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.",
//     client: "Kings College",
//     date: "Dec 2024",
//     category: "App",
//     technologies: ["React", "Node.js", "MongoDB"],
//     image: "/images/portfolio/kings-hall.png",
//   },
// ];

// export default function PortfolioTeaser({
//   projects = SAMPLE_PROJECTS,
// }) {
//   const [category, setCategory] = useState("All");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hovered, setHovered] = useState(false);

//   const filteredProjects = useMemo(() => {
//     if (category === "All") return projects;

//     return projects.filter(
//       (project) => project.category === category
//     );
//   }, [projects, category]);

//   const safeIndex =
//     filteredProjects.length > 0
//       ? Math.min(activeIndex, filteredProjects.length - 1)
//       : 0;

//   const activeProject = filteredProjects[safeIndex];

//   function changeCategory(nextCategory) {
//     setCategory(nextCategory);
//     setActiveIndex(0);
//   }

//   function previousProject() {
//     if (!filteredProjects.length) return;

//     setActiveIndex((current) =>
//       current === 0
//         ? filteredProjects.length - 1
//         : current - 1
//     );
//   }

//   function nextProject() {
//     if (!filteredProjects.length) return;

//     setActiveIndex(
//       (current) =>
//         (current + 1) % filteredProjects.length
//     );
//   }

//   function openProject() {
//     window.location.href = "/portfolio";
//   }

//   if (!activeProject) {
//     return null;
//   }

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#050A14]
//         px-5
//         py-20
//         text-white
//         sm:px-8
//         lg:px-10
//         lg:py-28
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute
//             left-1/2
//             top-[10%]
//             h-[500px]
//             w-[500px]
//             -translate-x-1/2
//             rounded-full
//             bg-blue-600/10
//             blur-[140px]
//           "
//         />

//         <div
//           className="
//             absolute
//             -right-32
//             bottom-0
//             h-[420px]
//             w-[420px]
//             rounded-full
//             bg-cyan-500/5
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.035]
//           "
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
//             backgroundSize: "70px 70px",
//           }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl">

//         {/* =====================================================
//             HEADER
//         ===================================================== */}

//         <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

//           <div className="max-w-3xl">

//             <div
//               className="
//                 mb-5
//                 inline-flex
//                 items-center
//                 gap-3
//                 rounded-full
//                 border
//                 border-white/10
//                 bg-white/[0.03]
//                 px-4
//                 py-2
//                 text-[10px]
//                 font-medium
//                 uppercase
//                 tracking-[0.28em]
//                 text-blue-300
//               "
//             >
//               <span className="relative flex h-2 w-2">
//                 <span
//                   className="
//                     absolute
//                     inline-flex
//                     h-full
//                     w-full
//                     animate-ping
//                     rounded-full
//                     bg-blue-400
//                     opacity-50
//                   "
//                 />
//                 <span
//                   className="
//                     relative
//                     inline-flex
//                     h-2
//                     w-2
//                     rounded-full
//                     bg-blue-400
//                   "
//                 />
//               </span>

//               Selected Work
//             </div>

//             <h2
//               className="
//                 max-w-2xl
//                 text-4xl
//                 font-semibold
//                 leading-[0.95]
//                 tracking-[-0.04em]
//                 sm:text-5xl
//                 lg:text-7xl
//               "
//               style={{
//                 fontFamily: "'Fraunces', serif",
//               }}
//             >
//               Products built
//               <br />
//               <span className="text-slate-500">
//                 for real people.
//               </span>
//             </h2>

//           </div>

//           <a
//             href="/portfolio"
//             className="
//               group
//               inline-flex
//               w-fit
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-white/10
//               bg-white/[0.03]
//               px-5
//               py-3
//               text-sm
//               text-slate-300
//               transition-all
//               duration-300
//               hover:border-blue-400/40
//               hover:bg-blue-500/10
//               hover:text-white
//             "
//           >
//             Explore portfolio

//             <span
//               className="
//                 flex
//                 h-7
//                 w-7
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-white/10
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-1
//                 group-hover:-translate-y-1
//               "
//             >
//               <FiArrowUpRight size={14} />
//             </span>
//           </a>
//         </div>

//         {/* =====================================================
//             CATEGORY NAVIGATION
//         ===================================================== */}

//         <div className="mb-8 flex items-center justify-between gap-5">

//           <div className="flex max-w-full gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {categories.map((item) => {
//               const active = category === item;

//               return (
//                 <button
//                   key={item}
//                   type="button"
//                   onClick={() => changeCategory(item)}
//                   className="
//                     relative
//                     shrink-0
//                     rounded-full
//                     px-5
//                     py-2.5
//                     text-xs
//                     font-medium
//                     transition-all
//                     duration-300
//                   "
//                 >
//                   {active && (
//                     <motion.span
//                       layoutId="portfolio-category"
//                       className="
//                         absolute
//                         inset-0
//                         rounded-full
//                         bg-white
//                       "
//                       transition={{
//                         type: "spring",
//                         stiffness: 400,
//                         damping: 30,
//                       }}
//                     />
//                   )}

//                   <span
//                     className={`
//                       relative z-10
//                       ${
//                         active
//                           ? "text-[#050A14]"
//                           : "text-slate-500 hover:text-slate-200"
//                       }
//                     `}
//                   >
//                     {item}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>

//           <div className="hidden shrink-0 items-center gap-2 text-xs text-slate-500 sm:flex">
//             <FiGrid size={13} />

//             <span>
//               {String(safeIndex + 1).padStart(2, "0")}
//             </span>

//             <span className="text-slate-700">
//               /
//             </span>

//             <span>
//               {String(filteredProjects.length).padStart(2, "0")}
//             </span>
//           </div>

//         </div>

//         {/* =====================================================
//             MAIN PRODUCT SHOWCASE
//         ===================================================== */}

//         <div
//           className="
//             relative
//             overflow-hidden
//             rounded-[30px]
//             border
//             border-white/[0.08]
//             bg-[#0A1220]
//             shadow-[0_30px_100px_rgba(0,0,0,.35)]
//             lg:rounded-[40px]
//           "
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//         >

//           {/* TOP BAR */}

//           <div
//             className="
//               flex
//               items-center
//               justify-between
//               border-b
//               border-white/[0.07]
//               px-5
//               py-4
//               sm:px-7
//             "
//           >

//             <div className="flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
//               <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
//               <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
//             </div>

//             <div
//               className="
//                 hidden
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-white/[0.06]
//                 bg-black/20
//                 px-4
//                 py-1.5
//                 text-[10px]
//                 uppercase
//                 tracking-[0.2em]
//                 text-slate-500
//                 sm:flex
//               "
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//               Live showcase
//             </div>

//             <div className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
//               DES / 2026
//             </div>

//           </div>

//           {/* CONTENT */}

//           <div className="grid lg:grid-cols-[1.35fr_.65fr]">

//             {/* =================================================
//                 VISUAL PANEL
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 min-h-[360px]
//                 overflow-hidden
//                 border-b
//                 border-white/[0.07]
//                 bg-[#07101D]
//                 sm:min-h-[500px]
//                 lg:min-h-[620px]
//                 lg:border-b-0
//                 lg:border-r
//               "
//             >

//               {/* image glow */}

//               <motion.div
//                 key={`glow-${activeProject.slug}`}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   left-1/2
//                   top-1/2
//                   h-[55%]
//                   w-[65%]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   rounded-full
//                   bg-blue-500/20
//                   blur-[100px]
//                 "
//               />

//               {/* floating number */}

//               <div
//                 className="
//                   absolute
//                   left-6
//                   top-6
//                   z-20
//                   text-[10px]
//                   font-medium
//                   uppercase
//                   tracking-[0.25em]
//                   text-slate-500
//                   sm:left-8
//                   sm:top-8
//                 "
//               >
//                 PROJECT
//                 <span className="ml-2 text-blue-400">
//                   {String(safeIndex + 1).padStart(2, "0")}
//                 </span>
//               </div>

//               {/* image */}

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeProject.slug}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.94,
//                     x: 30,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: hovered ? 1.025 : 1,
//                     x: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.96,
//                     x: -30,
//                   }}
//                   transition={{
//                     duration: 0.65,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="
//                     absolute
//                     inset-[12%]
//                     sm:inset-[13%]
//                     lg:inset-[12%]
//                   "
//                 >

//                   <div
//                     className="
//                       relative
//                       h-full
//                       w-full
//                       overflow-hidden
//                       rounded-[22px]
//                       border
//                       border-white/10
//                       bg-slate-900
//                       shadow-[0_25px_80px_rgba(0,0,0,.5)]
//                       sm:rounded-[30px]
//                     "
//                   >

//                     <img
//                       src={activeProject.image}
//                       alt={activeProject.title}
//                       className="
//                         h-full
//                         w-full
//                         object-cover
//                       "
//                     />

//                     {/* image overlay */}

//                     <div
//                       className="
//                         pointer-events-none
//                         absolute
//                         inset-0
//                         bg-gradient-to-t
//                         from-black/40
//                         via-transparent
//                         to-white/5
//                       "
//                     />

//                     {/* corner label */}

//                     <div
//                       className="
//                         absolute
//                         bottom-4
//                         left-4
//                         rounded-full
//                         border
//                         border-white/10
//                         bg-black/40
//                         px-3
//                         py-1.5
//                         text-[9px]
//                         uppercase
//                         tracking-[0.18em]
//                         text-white/70
//                         backdrop-blur-md
//                       "
//                     >
//                       {activeProject.category || "Project"}
//                     </div>

//                   </div>

//                 </motion.div>
//               </AnimatePresence>

//               {/* decorative line */}

//               <div
//                 className="
//                   absolute
//                   bottom-8
//                   left-6
//                   right-6
//                   flex
//                   items-center
//                   gap-3
//                   sm:left-8
//                   sm:right-8
//                 "
//               >
//                 <div className="h-px flex-1 bg-white/[0.08]" />

//                 <div className="flex gap-1.5">
//                   {filteredProjects.map((project, index) => (
//                     <button
//                       key={project.slug}
//                       type="button"
//                       aria-label={`Open project ${index + 1}`}
//                       onClick={() => setActiveIndex(index)}
//                       className={`
//                         h-1
//                         rounded-full
//                         transition-all
//                         duration-500
//                         ${
//                           index === safeIndex
//                             ? "w-8 bg-blue-400"
//                             : "w-2 bg-white/20 hover:bg-white/40"
//                         }
//                       `}
//                     />
//                   ))}
//                 </div>

//                 <div className="h-px flex-1 bg-white/[0.08]" />
//               </div>

//             </div>

//             {/* =================================================
//                 INFORMATION PANEL
//             ================================================= */}

//             <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-10">

//               <AnimatePresence mode="wait">

//                 <motion.div
//                   key={activeProject.slug}
//                   initial={{
//                     opacity: 0,
//                     y: 18,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -12,
//                   }}
//                   transition={{
//                     duration: 0.45,
//                   }}
//                   className="flex h-full flex-col"
//                 >

//                   {/* project metadata */}

//                   <div className="mb-10 grid grid-cols-2 gap-3">

//                     <div
//                       className="
//                         rounded-2xl
//                         border
//                         border-white/[0.07]
//                         bg-white/[0.025]
//                         p-4
//                       "
//                     >
//                       <div className="mb-3 text-slate-600">
//                         <FiUser size={15} />
//                       </div>

//                       <p className="mb-1 text-[9px] uppercase tracking-[0.18em] text-slate-600">
//                         Client
//                       </p>

//                       <p className="truncate text-xs font-medium text-slate-300">
//                         {activeProject.client}
//                       </p>
//                     </div>

//                     <div
//                       className="
//                         rounded-2xl
//                         border
//                         border-white/[0.07]
//                         bg-white/[0.025]
//                         p-4
//                       "
//                     >
//                       <div className="mb-3 text-slate-600">
//                         <FiCalendar size={15} />
//                       </div>

//                       <p className="mb-1 text-[9px] uppercase tracking-[0.18em] text-slate-600">
//                         Delivered
//                       </p>

//                       <p className="text-xs font-medium text-slate-300">
//                         {activeProject.date}
//                       </p>
//                     </div>

//                   </div>

//                   {/* title */}

//                   <div>

//                     <div className="mb-4 flex items-center gap-2">
//                       <span className="h-px w-7 bg-blue-400" />

//                       <span className="text-[10px] uppercase tracking-[0.22em] text-blue-400">
//                         {activeProject.category || "Featured"}
//                       </span>
//                     </div>

//                     <h3
//                       className="
//                         max-w-xl
//                         text-3xl
//                         font-semibold
//                         leading-[1.05]
//                         tracking-[-0.03em]
//                         sm:text-4xl
//                         lg:text-[44px]
//                       "
//                       style={{
//                         fontFamily: "'Fraunces', serif",
//                       }}
//                     >
//                       {activeProject.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-6
//                         max-w-xl
//                         text-sm
//                         leading-7
//                         text-slate-400
//                       "
//                     >
//                       {activeProject.body}
//                     </p>

//                   </div>

//                   {/* technology */}

//                   <div className="mt-9">

//                     <div className="mb-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-slate-600">
//                       <FiLayers size={13} />
//                       Technology stack
//                     </div>

//                     <div className="flex flex-wrap gap-2">

//                       {activeProject.technologies?.map(
//                         (technology) => (
//                           <span
//                             key={technology}
//                             className="
//                               rounded-full
//                               border
//                               border-white/[0.08]
//                               bg-white/[0.035]
//                               px-3
//                               py-2
//                               text-[10px]
//                               text-slate-400
//                               transition-colors
//                               hover:border-blue-400/30
//                               hover:text-blue-300
//                             "
//                           >
//                             {technology}
//                           </span>
//                         )
//                       )}

//                     </div>

//                   </div>

//                   {/* bottom controls */}

//                   <div className="mt-auto pt-12">

//                     <div className="mb-5 h-px bg-white/[0.07]" />

//                     <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

//                       <button
//                         type="button"
//                         onClick={openProject}
//                         className="
//                           group
//                           inline-flex
//                           w-fit
//                           items-center
//                           gap-3
//                           text-sm
//                           font-medium
//                           text-white
//                         "
//                       >
//                         <span
//                           className="
//                             flex
//                             h-11
//                             w-11
//                             items-center
//                             justify-center
//                             rounded-full
//                             bg-white
//                             text-[#050A14]
//                             transition-transform
//                             duration-300
//                             group-hover:rotate-45
//                           "
//                         >
//                           <FiExternalLink size={16} />
//                         </span>

//                         Explore project
//                       </button>

//                       {/* arrows */}

//                       <div className="flex items-center gap-2">

//                         <button
//                           type="button"
//                           onClick={previousProject}
//                           aria-label="Previous project"
//                           className="
//                             flex
//                             h-11
//                             w-11
//                             items-center
//                             justify-center
//                             rounded-full
//                             border
//                             border-white/10
//                             bg-white/[0.03]
//                             text-slate-400
//                             transition-all
//                             hover:border-white/20
//                             hover:bg-white/[0.07]
//                             hover:text-white
//                           "
//                         >
//                           <FiChevronLeft />
//                         </button>

//                         <button
//                           type="button"
//                           onClick={nextProject}
//                           aria-label="Next project"
//                           className="
//                             flex
//                             h-11
//                             w-11
//                             items-center
//                             justify-center
//                             rounded-full
//                             border
//                             border-white/10
//                             bg-white/[0.03]
//                             text-slate-400
//                             transition-all
//                             hover:border-blue-400/40
//                             hover:bg-blue-500/10
//                             hover:text-white
//                           "
//                         >
//                           <FiChevronRight />
//                         </button>

//                       </div>

//                     </div>

//                   </div>

//                 </motion.div>

//               </AnimatePresence>

//             </div>

//           </div>

//           {/* =====================================================
//               BOTTOM STATUS BAR
//           ===================================================== */}

//           <div
//             className="
//               flex
//               flex-col
//               gap-3
//               border-t
//               border-white/[0.07]
//               px-5
//               py-4
//               text-[9px]
//               uppercase
//               tracking-[0.18em]
//               text-slate-600
//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//               sm:px-7
//             "
//           >

//             <div className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//               Selected project
//             </div>

//             <div className="flex items-center gap-4">
//               <span>
//                 {activeProject.technologies?.length || 0} technologies
//               </span>

//               <span className="text-slate-800">•</span>

//               <span>
//                 {activeProject.date}
//               </span>
//             </div>

//           </div>

//         </div>

//         {/* =====================================================
//             PROJECT QUICK SELECTOR
//         ===================================================== */}

//         <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

//           {filteredProjects.map((project, index) => {
//             const active = index === safeIndex;

//             return (
//               <button
//                 key={project.slug}
//                 type="button"
//                 onClick={() => setActiveIndex(index)}
//                 className={`
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   p-4
//                   text-left
//                   transition-all
//                   duration-300
//                   ${
//                     active
//                       ? "border-blue-400/30 bg-blue-500/[0.08]"
//                       : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
//                   }
//                 `}
//               >

//                 <div className="flex items-center gap-3">

//                   <div
//                     className="
//                       relative
//                       h-12
//                       w-12
//                       shrink-0
//                       overflow-hidden
//                       rounded-xl
//                       bg-slate-900
//                     "
//                   >
//                     <img
//                       src={project.image}
//                       alt=""
//                       className="
//                         h-full
//                         w-full
//                         object-cover
//                         opacity-70
//                         transition-transform
//                         duration-500
//                         group-hover:scale-110
//                       "
//                     />

//                     <div className="absolute inset-0 bg-black/20" />
//                   </div>

//                   <div className="min-w-0 flex-1">

//                     <div className="mb-1 flex items-center gap-2">

//                       <span
//                         className={`
//                           text-[9px]
//                           ${
//                             active
//                               ? "text-blue-400"
//                               : "text-slate-600"
//                           }
//                         `}
//                       >
//                         {String(index + 1).padStart(2, "0")}
//                       </span>

//                       <span className="h-px w-4 bg-white/10" />

//                       <span className="text-[8px] uppercase tracking-[0.16em] text-slate-600">
//                         {project.category || "Work"}
//                       </span>

//                     </div>

//                     <p
//                       className={`
//                         truncate
//                         text-xs
//                         font-medium
//                         ${
//                           active
//                             ? "text-white"
//                             : "text-slate-500"
//                         }
//                       `}
//                     >
//                       {project.title}
//                     </p>

//                   </div>

//                   <FiArrowUpRight
//                     className={`
//                       shrink-0
//                       transition-all
//                       duration-300
//                       ${
//                         active
//                           ? "text-blue-400"
//                           : "text-slate-700 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-400"
//                       }
//                     `}
//                     size={14}
//                   />

//                 </div>

//               </button>
//             );
//           })}

//         </div>

//       </div>

//       {/* =====================================================
//           FONT IMPORT
//       ===================================================== */}

//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Inter:wght@400;500;600&display=swap');

//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }

//           .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//         `}
//       </style>
//     </section>
//   );
// }




























// import { useEffect, useMemo, useRef, useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// import {
//   FiArrowUpRight,
//   FiChevronLeft,
//   FiChevronRight,
//   FiExternalLink,
//   FiLayers,
//   FiCalendar,
//   FiUser,
//   FiGrid,
// } from "react-icons/fi";

// const categories = [
//   "All",
//   "Web",
//   "App",
//   "UI/UX",
//   "Branding",
// ];

// const SAMPLE_PROJECTS = [
//   {
//     slug: "tamil-printer",
//     title: "Tamil Printer – Invoice Application",
//     body:
//       "Tamil Printer – Invoice Application is a simple and efficient billing app that helps businesses create, manage, and print professional invoices quickly. Designed for speed and accuracy, it streamlines daily billing operations and keeps your financial records organized with ease.",
//     client: "Tamilarasi K",
//     date: "Feb 2026",
//     technologies: ["React", "Electron JS", "MySQL"],
//     image: "/images/portfolio/tamil-printer.png",
//     category: "App",
//   },

//   {
//     slug: "kings-mechanical-symposium",
//     title: "Kings-Mechanical Symposium 2k25",
//     body:
//       "A modern event platform created for Kings Mechanical Symposium with an interactive experience for students, participants, and organizers.",
//     client: "Mech Dept - Kings",
//     date: "Apr 2025",
//     technologies: ["React", "Node.js", "MongoDB"],
//     image: "/images/portfolio/mechancientz.png",
//     category: "Web",
//   },

//   {
//     slug: "sm-manpower-service",
//     title: "SM Manpower Service",
//     body:
//       "A professional manpower service platform designed to present services, connect clients, and provide a clean digital experience.",
//     client: "Abi Shek",
//     date: "Apr 2026",
//     technologies: ["React", "MongoDB", "Firebase"],
//     image: "/images/portfolio/sm-manpower.png",
//     category: "Web",
//   },

//   {
//     slug: "kings-hall-booking-software",
//     title: "Kings Hall Booking Software",
//     body:
//       "A dedicated booking platform designed to simplify hall reservations and manage booking information through a structured digital workflow.",
//     client: "Kings College",
//     date: "Dec 2024",
//     technologies: ["React", "Node.js", "MongoDB"],
//     image: "/images/portfolio/kings-hall.png",
//     category: "App",
//   },
// ];

// export default function PortfolioTeaser({
//   projects = SAMPLE_PROJECTS,
// }) {
//   const sectionRef = useRef(null);

//   const [category, setCategory] = useState("All");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isHoveringImage, setIsHoveringImage] = useState(false);

//   /* =========================================================
//      FILTER
//   ========================================================= */

//   const filteredProjects = useMemo(() => {
//     if (!projects || projects.length === 0) {
//       return [];
//     }

//     if (category === "All") {
//       return projects;
//     }

//     return projects.filter(
//       (project) => project.category === category
//     );
//   }, [projects, category]);

//   /* =========================================================
//      KEEP INDEX SAFE
//   ========================================================= */

//   useEffect(() => {
//     if (activeIndex >= filteredProjects.length) {
//       setActiveIndex(0);
//     }
//   }, [filteredProjects.length, activeIndex]);

//   const activeProject =
//     filteredProjects.length > 0
//       ? filteredProjects[activeIndex]
//       : null;

//   /* =========================================================
//      AUTO SLIDE
//   ========================================================= */

//   useEffect(() => {
//     if (filteredProjects.length <= 1) {
//       return;
//     }

//     if (isPaused) {
//       return;
//     }

//     const timer = setInterval(() => {
//       setActiveIndex((current) => {
//         return (current + 1) % filteredProjects.length;
//       });
//     }, 2500);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [filteredProjects.length, isPaused]);

//   /* =========================================================
//      MOUSE PARALLAX
//   ========================================================= */

//   const mouseX = useMotionValue(0.5);
//   const mouseY = useMotionValue(0.5);

//   const imageX = useSpring(
//     useTransform(mouseX, [0, 1], [-10, 10]),
//     {
//       stiffness: 120,
//       damping: 20,
//     }
//   );

//   const imageY = useSpring(
//     useTransform(mouseY, [0, 1], [-10, 10]),
//     {
//       stiffness: 120,
//       damping: 20,
//     }
//   );

//   const imageRotateX = useSpring(
//     useTransform(mouseY, [0, 1], [2, -2]),
//     {
//       stiffness: 120,
//       damping: 20,
//     }
//   );

//   const imageRotateY = useSpring(
//     useTransform(mouseX, [0, 1], [-2, 2]),
//     {
//       stiffness: 120,
//       damping: 20,
//     }
//   );

//   function handleImageMove(event) {
//     const rect =
//       event.currentTarget.getBoundingClientRect();

//     const x =
//       (event.clientX - rect.left) / rect.width;

//     const y =
//       (event.clientY - rect.top) / rect.height;

//     mouseX.set(x);
//     mouseY.set(y);
//   }

//   function handleImageLeave() {
//     mouseX.set(0.5);
//     mouseY.set(0.5);
//     setIsHoveringImage(false);
//   }

//   /* =========================================================
//      NAVIGATION
//   ========================================================= */

//   function nextProject() {
//     if (filteredProjects.length <= 1) {
//       return;
//     }

//     setActiveIndex(
//       (current) =>
//         (current + 1) % filteredProjects.length
//     );
//   }

//   function previousProject() {
//     if (filteredProjects.length <= 1) {
//       return;
//     }

//     setActiveIndex((current) =>
//       current === 0
//         ? filteredProjects.length - 1
//         : current - 1
//     );
//   }

//   function selectProject(index) {
//     setActiveIndex(index);
//   }

//   function changeCategory(nextCategory) {
//     setCategory(nextCategory);
//     setActiveIndex(0);
//   }

//   function openPortfolio() {
//     window.location.href = "/portfolio";
//   }

//   if (!activeProject) {
//     return null;
//   }

//   const progress =
//     ((activeIndex + 1) / filteredProjects.length) * 100;

//   return (
//     <section
//       ref={sectionRef}
//      className="
//   relative
//   overflow-hidden
//   bg-[#050912]
//   px-4
//   py-10
//   pt-30
//   text-white
//   sm:px-6
//   sm:pt-28
//   sm:pb-12
//   lg:px-8
//   lg:pt-14
//   lg:pb-14
//   xl:py-16
// "

//     >

//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div className="pointer-events-none absolute inset-0">

//         <motion.div
//           animate={{
//             scale: [1, 1.12, 1],
//             opacity: [0.22, 0.35, 0.22],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             absolute
//             left-[15%]
//             top-[10%]
//             h-[300px]
//             w-[300px]
//             rounded-full
//             bg-blue-600/20
//             blur-[110px]
//             sm:h-[400px]
//             sm:w-[400px]
//           "
//         />

//         <motion.div
//           animate={{
//             x: [0, 40, 0],
//             y: [0, -30, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             absolute
//             bottom-[-100px]
//             right-[-80px]
//             h-[350px]
//             w-[350px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.025]
//           "
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />

//       </div>

//       {/* =====================================================
//           MAIN CONTAINER
//       ===================================================== */}

//       <div
//         className="
//           relative
//           mx-auto
//           flex
//           min-h-[680px]
//           max-w-7xl
//           flex-col
//           justify-center
//         "
//       >

//         {/* ===================================================
//             HEADER
//         =================================================== */}

//         <div
//           className="
//             mb-6
//             flex
//             flex-col
//             gap-5
//             sm:mb-7
//             lg:mb-8
//             lg:flex-row
//             lg:items-end
//             lg:justify-between
//           "
//         >

//           <div>

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 10,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               className="
//                 mb-3
//                 flex
//                 items-center
//                 gap-2
//                 text-[9px]
//                 font-medium
//                 uppercase
//                 tracking-[0.3em]
//                 text-blue-400
//                 sm:text-[10px]
//               "
//             >
//               <motion.span
//                 animate={{
//                   scale: [1, 1.5, 1],
//                   opacity: [1, 0.5, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                 }}
//                 className="
//                   h-1.5
//                   w-1.5
//                   rounded-full
//                   bg-blue-400
//                 "
//               />

//               Selected Work
//             </motion.div>

//             <motion.h2
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 delay: 0.1,
//                 duration: 0.6,
//               }}
//               className="
//                 text-3xl
//                 font-semibold
//                 leading-[0.95]
//                 tracking-[-0.04em]
//                 sm:text-4xl
//                 lg:text-5xl
//                 xl:text-6xl
//               "
//               style={{
//                 fontFamily:
//                   "'Fraunces', serif",
//               }}
//             >
//               Digital products
//               <br />

//               <span className="text-slate-600">
//                 made with purpose.
//               </span>
//             </motion.h2>

//           </div>

//           <motion.a
//             initial={{
//               opacity: 0,
//               x: 15,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//             }}
//             href="/portfolio"
//             className="
//               group
//               flex
//               w-fit
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-white/10
//               bg-white/[0.03]
//               px-4
//               py-2.5
//               text-xs
//               text-slate-400
//               transition-all
//               duration-300
//               hover:border-blue-400/30
//               hover:bg-blue-500/10
//               hover:text-white
//             "
//           >
//             View all projects

//             <span
//               className="
//                 flex
//                 h-6
//                 w-6
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-white/10
//                 transition-transform
//                 duration-300
//                 group-hover:rotate-45
//               "
//             >
//               <FiArrowUpRight size={12} />
//             </span>
//           </motion.a>

//         </div>

//         {/* ===================================================
//             CATEGORY NAVIGATION
//         =================================================== */}

//         <div
//           className="
//             mb-5
//             flex
//             items-center
//             justify-between
//             gap-4
//           "
//         >

//           <div
//             className="
//               flex
//               max-w-full
//               gap-1
//               overflow-x-auto
//               pb-1
//               scrollbar-hide
//             "
//           >
//             {categories.map((item) => {
//               const active = category === item;

//               return (
//                 <button
//                   key={item}
//                   type="button"
//                   onClick={() =>
//                     changeCategory(item)
//                   }
//                   className="
//                     relative
//                     shrink-0
//                     rounded-full
//                     px-4
//                     py-2
//                     text-[10px]
//                     font-medium
//                     transition-colors
//                     duration-300
//                     sm:px-5
//                     sm:text-xs
//                   "
//                 >
//                   {active && (
//                     <motion.span
//                       layoutId="activePortfolioCategory"
//                       className="
//                         absolute
//                         inset-0
//                         rounded-full
//                         bg-white
//                       "
//                       transition={{
//                         type: "spring",
//                         stiffness: 350,
//                         damping: 30,
//                       }}
//                     />
//                   )}

//                   <span
//                     className={`
//                       relative
//                       z-10
//                       ${active
//                         ? "text-[#050912]"
//                         : "text-slate-500 hover:text-white"
//                       }
//                     `}
//                   >
//                     {item}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>

//           <div
//             className="
//               hidden
//               shrink-0
//               items-center
//               gap-2
//               text-[9px]
//               uppercase
//               tracking-[0.2em]
//               text-slate-600
//               sm:flex
//             "
//           >
//             <FiGrid size={12} />

//             {String(activeIndex + 1).padStart(2, "0")}

//             <span className="text-slate-800">
//               /
//             </span>

//             {String(filteredProjects.length).padStart(
//               2,
//               "0"
//             )}
//           </div>

//         </div>

//         {/* ===================================================
//             PRODUCT WINDOW
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           className="
//     relative
//     overflow-hidden
//     rounded-[24px]
//     border
//     border-white/[0.08]
//     bg-[#09111E]
//     shadow-[0_30px_100px_rgba(0,0,0,.45)]
//     sm:rounded-[30px]
//     lg:rounded-[34px]
//   "
//         >

//           {/* =================================================
//               WINDOW TOP BAR
//           ================================================= */}

//           <div
//             className="
//               flex
//               h-11
//               items-center
//               justify-between
//               border-b
//               border-white/[0.06]
//               bg-white/[0.015]
//               px-4
//               sm:h-12
//               sm:px-5
//             "
//           >

//             <div className="flex items-center gap-1.5">

//               <span className="h-2 w-2 rounded-full bg-red-400/70" />
//               <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
//               <span className="h-2 w-2 rounded-full bg-green-400/70" />

//             </div>

//             <div
//               className="
//                 hidden
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-white/[0.06]
//                 bg-black/20
//                 px-3
//                 py-1
//                 text-[8px]
//                 uppercase
//                 tracking-[0.2em]
//                 text-slate-600
//                 sm:flex
//               "
//             >
//               <motion.span
//                 animate={{
//                   opacity: [0.4, 1, 0.4],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                 }}
//                 className="
//                   h-1.5
//                   w-1.5
//                   rounded-full
//                   bg-emerald-400
//                 "
//               />

//               Auto showcase
//             </div>

//             <span
//               className="
//                 text-[8px]
//                 uppercase
//                 tracking-[0.2em]
//                 text-slate-700
//               "
//             >
//               DES / 2026
//             </span>

//           </div>

//           {/* =================================================
//               MAIN CONTENT
//           ================================================= */}

//           <div
//             className="
//               grid
//               lg:grid-cols-[1.3fr_.7fr]
//             "
//           >

//             {/* ===============================================
//                 IMAGE
//             =============================================== */}

//             <div
//               className="
//                 relative
//                 h-[280px]
//                 overflow-hidden
//                 border-b
//                 border-white/[0.06]
//                 bg-[#060D18]
//                 sm:h-[390px]
//                 md:h-[450px]
//                 lg:h-[500px]
//                 lg:border-b-0
//                 lg:border-r
//                 xl:h-[520px]
//               "
//               onMouseEnter={() => {
//                 setIsHoveringImage(true);
//               }}
//               onMouseLeave={handleImageLeave}
//             >

//               {/* glow */}

//               <motion.div
//                 animate={{
//                   scale: isHoveringImage
//                     ? 1.2
//                     : 1,
//                   opacity: isHoveringImage
//                     ? 0.4
//                     : 0.22,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                 }}
//                 className="
//                   absolute
//                   left-1/2
//                   top-1/2
//                   h-[55%]
//                   w-[55%]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   rounded-full
//                   bg-blue-500/30
//                   blur-[100px]
//                 "
//               />

//               {/* decorative circles */}

//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   left-1/2
//                   top-1/2
//                   h-[85%]
//                   w-[70%]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   rounded-full
//                   border
//                   border-dashed
//                   border-white/[0.04]
//                 "
//               />

//               <motion.div
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 45,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   left-1/2
//                   top-1/2
//                   h-[65%]
//                   w-[55%]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   rounded-full
//                   border
//                   border-white/[0.035]
//                 "
//               />

//               {/* project counter */}

//               <div
//                 className="
//                   absolute
//                   left-5
//                   top-5
//                   z-30
//                   flex
//                   items-center
//                   gap-2
//                   text-[8px]
//                   uppercase
//                   tracking-[0.25em]
//                   text-slate-500
//                   sm:left-7
//                   sm:top-7
//                 "
//               >
//                 <span className="text-blue-400">
//                   {String(
//                     activeIndex + 1
//                   ).padStart(2, "0")}
//                 </span>

//                 <span className="h-px w-5 bg-white/10" />

//                 PROJECT
//               </div>

//               {/* image */}

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeProject.slug}
//                   initial={{
//                     opacity: 0,
//                     x: 80,
//                     scale: 0.9,
//                     rotate: 1,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                     scale: 1,
//                     rotate: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     x: -80,
//                     scale: 0.92,
//                     rotate: -1,
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="
//                     absolute
//                     inset-[10%]
//                     sm:inset-[11%]
//                   "
//                   style={{
//                     x: imageX,
//                     y: imageY,
//                     rotateX: imageRotateX,
//                     rotateY: imageRotateY,
//                     transformPerspective: 1200,
//                   }}
//                 >

//                   <motion.div
//                     animate={{
//                       boxShadow: isHoveringImage
//                         ? "0 30px 90px rgba(37,99,235,.30)"
//                         : "0 25px 70px rgba(0,0,0,.45)",
//                     }}
//                     className="
//                       relative
//                       h-full
//                       w-full
//                       overflow-hidden
//                       rounded-[18px]
//                       border
//                       border-white/10
//                       bg-slate-900
//                       sm:rounded-[24px]
//                     "
//                   >

//                     <motion.img
//                       src={activeProject.image}
//                       alt={activeProject.title}
//                       className="
//                         h-full
//                         w-full
//                         object-cover
//                       "
//                       animate={{
//                         scale: isHoveringImage
//                           ? 1.06
//                           : 1,
//                       }}
//                       transition={{
//                         duration: 0.7,
//                       }}
//                     />

//                     <div
//                       className="
//                         absolute
//                         inset-0
//                         bg-gradient-to-t
//                         from-black/50
//                         via-transparent
//                         to-white/[0.04]
//                       "
//                     />

//                     {/* floating category */}

//                     <div
//                       className="
//                         absolute
//                         bottom-4
//                         left-4
//                         rounded-full
//                         border
//                         border-white/10
//                         bg-black/40
//                         px-3
//                         py-1.5
//                         text-[8px]
//                         uppercase
//                         tracking-[0.18em]
//                         text-white/70
//                         backdrop-blur-xl
//                         sm:bottom-5
//                         sm:left-5
//                       "
//                     >
//                       {activeProject.category ||
//                         "Project"}
//                     </div>

//                     {/* image number */}

//                     <motion.div
//                       animate={{
//                         y: [0, -5, 0],
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="
//                         absolute
//                         right-4
//                         top-4
//                         flex
//                         h-8
//                         w-8
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         border-white/10
//                         bg-black/30
//                         text-[9px]
//                         text-white/70
//                         backdrop-blur-xl
//                         sm:right-5
//                         sm:top-5
//                       "
//                     >
//                       {String(
//                         activeIndex + 1
//                       ).padStart(2, "0")}
//                     </motion.div>

//                   </motion.div>

//                 </motion.div>
//               </AnimatePresence>

//               {/* bottom progress */}

//               <div
//                 className="
//                   absolute
//                   bottom-5
//                   left-5
//                   right-5
//                   z-30
//                   sm:bottom-6
//                   sm:left-7
//                   sm:right-7
//                 "
//               >

//                 <div className="mb-2 flex items-center justify-between text-[8px] uppercase tracking-[0.18em] text-slate-600">
//                   <span>
//                     {isPaused
//                       ? "Paused"
//                       : "Auto playing"}
//                   </span>

//                   <span>
//                     04 SEC
//                   </span>
//                 </div>

//                 <div className="h-[2px] overflow-hidden rounded-full bg-white/[0.08]">

//                   <motion.div
//                     key={activeProject.slug}
//                     initial={{
//                       width: "0%",
//                     }}
//                     animate={{
//                       width: isPaused
//                         ? `${progress}%`
//                         : "100%",
//                     }}
//                     transition={{
//                       duration: isPaused
//                         ? 0
//                         : 4,
//                       ease: "linear",
//                     }}
//                     className="
//                       h-full
//                       rounded-full
//                       bg-blue-400
//                     "
//                   />

//                 </div>

//               </div>

//             </div>

//             {/* ===============================================
//                 INFORMATION
//             =============================================== */}

//             <div
//               className="
//                 flex
//                 min-h-[390px]
//                 flex-col
//                 p-5
//                 sm:min-h-[430px]
//                 sm:p-7
//                 lg:min-h-0
//                 lg:p-8
//                 xl:p-9
//               "
//             >

//               <AnimatePresence
//                 mode="wait"
//               >
//                 <motion.div
//                   key={activeProject.slug}
//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -15,
//                   }}
//                   transition={{
//                     duration: 0.45,
//                   }}
//                   className="
//                     flex
//                     h-full
//                     flex-col
//                   "
//                 >

//                   {/* metadata */}

//                   <div
//                     className="
//                       mb-7
//                       grid
//                       grid-cols-2
//                       gap-2
//                     "
//                   >

//                     <div
//                       className="
//                         rounded-xl
//                         border
//                         border-white/[0.06]
//                         bg-white/[0.025]
//                         p-3
//                       "
//                     >
//                       <FiUser
//                         size={13}
//                         className="mb-2 text-slate-600"
//                       />

//                       <p
//                         className="
//                           mb-1
//                           text-[7px]
//                           uppercase
//                           tracking-[0.18em]
//                           text-slate-600
//                         "
//                       >
//                         Client
//                       </p>

//                       <p
//                         className="
//                           truncate
//                           text-[10px]
//                           text-slate-300
//                         "
//                       >
//                         {activeProject.client}
//                       </p>
//                     </div>

//                     <div
//                       className="
//                         rounded-xl
//                         border
//                         border-white/[0.06]
//                         bg-white/[0.025]
//                         p-3
//                       "
//                     >
//                       <FiCalendar
//                         size={13}
//                         className="mb-2 text-slate-600"
//                       />

//                       <p
//                         className="
//                           mb-1
//                           text-[7px]
//                           uppercase
//                           tracking-[0.18em]
//                           text-slate-600
//                         "
//                       >
//                         Delivered
//                       </p>

//                       <p
//                         className="
//                           text-[10px]
//                           text-slate-300
//                         "
//                       >
//                         {activeProject.date}
//                       </p>
//                     </div>

//                   </div>

//                   {/* title */}

//                   <div>

//                     <div
//                       className="
//                         mb-3
//                         flex
//                         items-center
//                         gap-2
//                       "
//                     >
//                       <span className="h-px w-5 bg-blue-400" />

//                       <span
//                         className="
//                           text-[8px]
//                           uppercase
//                           tracking-[0.22em]
//                           text-blue-400
//                         "
//                       >
//                         {activeProject.category ||
//                           "Featured"}
//                       </span>
//                     </div>

//                     <h3
//                       className="
//                         text-2xl
//                         font-semibold
//                         leading-[1.05]
//                         tracking-[-0.035em]
//                         sm:text-3xl
//                         xl:text-[38px]
//                       "
//                       style={{
//                         fontFamily:
//                           "'Fraunces', serif",
//                       }}
//                     >
//                       {activeProject.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-4
//                         text-[11px]
//                         leading-6
//                         text-slate-400
//                         sm:text-xs
//                         sm:leading-6
//                       "
//                     >
//                       {activeProject.body}
//                     </p>

//                   </div>

//                   {/* technologies */}

//                   <div className="mt-6">

//                     <div
//                       className="
//                         mb-3
//                         flex
//                         items-center
//                         gap-2
//                         text-[8px]
//                         uppercase
//                         tracking-[0.2em]
//                         text-slate-600
//                       "
//                     >
//                       <FiLayers size={11} />

//                       Technology
//                     </div>

//                     <div className="flex flex-wrap gap-1.5">

//                       {activeProject.technologies?.map(
//                         (technology, index) => (
//                           <motion.span
//                             key={technology}
//                             initial={{
//                               opacity: 0,
//                               scale: 0.8,
//                             }}
//                             animate={{
//                               opacity: 1,
//                               scale: 1,
//                             }}
//                             transition={{
//                               delay:
//                                 index * 0.06,
//                             }}
//                             whileHover={{
//                               y: -3,
//                               scale: 1.04,
//                             }}
//                             className="
//                               cursor-default
//                               rounded-full
//                               border
//                               border-white/[0.07]
//                               bg-white/[0.025]
//                               px-2.5
//                               py-1.5
//                               text-[8px]
//                               text-slate-400
//                               transition-colors
//                               hover:border-blue-400/30
//                               hover:text-blue-300
//                             "
//                           >
//                             {technology}
//                           </motion.span>
//                         )
//                       )}

//                     </div>

//                   </div>

//                   {/* bottom controls */}

//                   <div
//                     className="
//                       mt-auto
//                       pt-6
//                     "
//                   >

//                     <div className="mb-5 h-px bg-white/[0.06]" />

//                     <div
//                       className="
//                         flex
//                         items-center
//                         justify-between
//                         gap-3
//                       "
//                     >

//                       <motion.button
//                         type="button"
//                         onClick={openPortfolio}
//                         whileHover={{
//                           scale: 1.03,
//                         }}
//                         whileTap={{
//                           scale: 0.97,
//                         }}
//                         className="
//                           group
//                           flex
//                           items-center
//                           gap-2.5
//                           text-xs
//                           font-medium
//                           text-white
//                         "
//                       >

//                         <span
//                           className="
//                             flex
//                             h-9
//                             w-9
//                             items-center
//                             justify-center
//                             rounded-full
//                             bg-white
//                             text-[#050912]
//                             transition-transform
//                             duration-300
//                             group-hover:rotate-45
//                           "
//                         >
//                           <FiExternalLink
//                             size={13}
//                           />
//                         </span>

//                         Explore project
//                       </motion.button>

//                       <div className="flex gap-1.5">

//                         <motion.button
//                           type="button"
//                           onClick={previousProject}
//                           whileHover={{
//                             scale: 1.08,
//                           }}
//                           whileTap={{
//                             scale: 0.9,
//                           }}
//                           className="
//                             flex
//                             h-9
//                             w-9
//                             items-center
//                             justify-center
//                             rounded-full
//                             border
//                             border-white/10
//                             bg-white/[0.025]
//                             text-slate-400
//                             transition-colors
//                             hover:border-white/20
//                             hover:text-white
//                           "
//                           aria-label="Previous project"
//                         >
//                           <FiChevronLeft
//                             size={15}
//                           />
//                         </motion.button>

//                         <motion.button
//                           type="button"
//                           onClick={nextProject}
//                           whileHover={{
//                             scale: 1.08,
//                           }}
//                           whileTap={{
//                             scale: 0.9,
//                           }}
//                           className="
//                             flex
//                             h-9
//                             w-9
//                             items-center
//                             justify-center
//                             rounded-full
//                             border
//                             border-blue-400/20
//                             bg-blue-500/10
//                             text-blue-300
//                             transition-colors
//                             hover:border-blue-400/40
//                             hover:bg-blue-500/20
//                             hover:text-white
//                           "
//                           aria-label="Next project"
//                         >
//                           <FiChevronRight
//                             size={15}
//                           />
//                         </motion.button>

//                       </div>

//                     </div>

//                   </div>

//                 </motion.div>
//               </AnimatePresence>

//             </div>

//           </div>

//           {/* =================================================
//               PROJECT SELECTOR
//           ================================================= */}

//           <div
//             className="
//               grid
//               grid-cols-2
//               border-t
//               border-white/[0.06]
//               sm:grid-cols-4
//             "
//           >

//             {filteredProjects.map(
//               (project, index) => {
//                 const active =
//                   index === activeIndex;

//                 return (
//                   <button
//                     key={project.slug}
//                     type="button"
//                     onClick={() =>
//                       selectProject(index)
//                     }
//                     className={`
//                       group
//                       relative
//                       flex
//                       min-w-0
//                       items-center
//                       gap-2
//                       border-r
//                       border-white/[0.06]
//                       px-3
//                       py-3
//                       text-left
//                       transition-all
//                       duration-300
//                       last:border-r-0
//                       sm:px-4
//                       ${active
//                         ? "bg-blue-500/[0.07]"
//                         : "hover:bg-white/[0.025]"
//                       }
//                     `}
//                   >

//                     {active && (
//                       <motion.div
//                         layoutId="activeProjectLine"
//                         className="
//                           absolute
//                           left-0
//                           right-0
//                           top-0
//                           h-[2px]
//                           bg-blue-400
//                         "
//                       />
//                     )}

//                     <div
//                       className="
//                         relative
//                         h-8
//                         w-8
//                         shrink-0
//                         overflow-hidden
//                         rounded-lg
//                         bg-slate-900
//                         sm:h-9
//                         sm:w-9
//                       "
//                     >
//                       <img
//                         src={project.image}
//                         alt=""
//                         className="
//                           h-full
//                           w-full
//                           object-cover
//                           opacity-60
//                           transition-transform
//                           duration-500
//                           group-hover:scale-110
//                         "
//                       />
//                     </div>

//                     <div className="min-w-0">

//                       <div
//                         className="
//                           mb-0.5
//                           flex
//                           items-center
//                           gap-1.5
//                         "
//                       >
//                         <span
//                           className={`
//                             text-[7px]
//                             ${active
//                               ? "text-blue-400"
//                               : "text-slate-700"
//                             }
//                           `}
//                         >
//                           {String(
//                             index + 1
//                           ).padStart(2, "0")}
//                         </span>

//                         <span
//                           className="
//                             hidden
//                             text-[6px]
//                             uppercase
//                             tracking-[0.15em]
//                             text-slate-700
//                             sm:block
//                           "
//                         >
//                           {project.category}
//                         </span>
//                       </div>

//                       <p
//                         className={`
//                           truncate
//                           text-[8px]
//                           font-medium
//                           sm:text-[9px]
//                           ${active
//                             ? "text-white"
//                             : "text-slate-500"
//                           }
//                         `}
//                       >
//                         {project.title}
//                       </p>

//                     </div>

//                     <FiArrowUpRight
//                       size={11}
//                       className={`
//                         ml-auto
//                         hidden
//                         shrink-0
//                         transition-all
//                         duration-300
//                         sm:block
//                         ${active
//                           ? "text-blue-400"
//                           : "text-slate-700 group-hover:text-slate-400"
//                         }
//                       `}
//                     />

//                   </button>
//                 );
//               }
//             )}

//           </div>

//         </motion.div>

//         {/* ===================================================
//             AUTO SLIDE STATUS
//         =================================================== */}

//         <div
//           className="
//             mt-4
//             flex
//             items-center
//             justify-between
//             text-[8px]
//             uppercase
//             tracking-[0.2em]
//             text-slate-700
//           "
//         >

//           <div className="flex items-center gap-2">

//             <motion.span
//               animate={{
//                 opacity: isPaused
//                   ? 0.3
//                   : [0.3, 1, 0.3],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: isPaused
//                   ? 0
//                   : Infinity,
//               }}
//               className="
//                 h-1.5
//                 w-1.5
//                 rounded-full
//                 bg-blue-400
//               "
//             />

//             {isPaused
//               ? "Showcase paused"
//               : "Automatically rotating"}
//           </div>

//           <span>
//             {activeIndex + 1} /{" "}
//             {filteredProjects.length}
//           </span>

//         </div>

//       </div>

//       {/* =====================================================
//           FONT + SCROLLBAR
//       ===================================================== */}

//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Inter:wght@400;500;600&display=swap');

//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }

//           .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//         `}
//       </style>
//     </section>
//   );
// }


















import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiLayers,
  FiCalendar,
  FiUser,
  FiGrid,
} from "react-icons/fi";

const categories = ["All", "Web", "App", "UI/UX", "Branding"];

const SAMPLE_PROJECTS = [
  {
    slug: "tamil-printer",
    title: "Tamil Printer – Invoice Application",
    body:
      "Tamil Printer – Invoice Application is a simple and efficient billing app that helps businesses create, manage, and print professional invoices quickly. Designed for speed and accuracy, it streamlines daily billing operations and keeps your financial records organized with ease.",
    client: "Tamilarasi K",
    date: "Feb 2026",
    technologies: ["React", "Electron JS", "MySQL"],
    image: "/images/portfolio/tamil-printer.png",
    category: "App",
  },
  {
    slug: "kings-mechanical-symposium",
    title: "Kings-Mechanical Symposium 2k25",
    body:
      "A modern event platform created for Kings Mechanical Symposium with an interactive experience for students, participants, and organizers.",
    client: "Mech Dept - Kings",
    date: "Apr 2025",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/portfolio/mechancientz.png",
    category: "Web",
  },
  {
    slug: "sm-manpower-service",
    title: "SM Manpower Service",
    body:
      "A professional manpower service platform designed to present services, connect clients, and provide a clean digital experience.",
    client: "Abi Shek",
    date: "Apr 2026",
    technologies: ["React", "MongoDB", "Firebase"],
    image: "/images/portfolio/sm-manpower.png",
    category: "Web",
  },
  {
    slug: "kings-hall-booking-software",
    title: "Kings Hall Booking Software",
    body:
      "A dedicated booking platform designed to simplify hall reservations and manage booking information through a structured digital workflow.",
    client: "Kings College",
    date: "Dec 2024",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/portfolio/kings-hall.png",
    category: "App",
  },
];

export default function PortfolioTeaser({
  projects = SAMPLE_PROJECTS,
}) {
  const sectionRef = useRef(null);

  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const filteredProjects = useMemo(() => {
    if (!projects?.length) return [];

    if (category === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === category
    );
  }, [projects, category]);

  useEffect(() => {
    if (
      activeIndex >= filteredProjects.length &&
      filteredProjects.length > 0
    ) {
      setActiveIndex(0);
    }
  }, [filteredProjects.length, activeIndex]);

  const activeProject =
    filteredProjects.length > 0
      ? filteredProjects[activeIndex]
      : null;

  /*
   * =========================================================
   * AUTO ROTATION
   *
   * One project at a time.
   * No bounce.
   * No scale bounce.
   * No spring.
   * =========================================================
   */

  useEffect(() => {
    if (filteredProjects.length <= 1 || isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setDirection(1);

      setActiveIndex((current) => {
        return (current + 1) % filteredProjects.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [filteredProjects.length, isPaused]);

  function nextProject() {
    if (filteredProjects.length <= 1) return;

    setDirection(1);

    setActiveIndex(
      (current) =>
        (current + 1) % filteredProjects.length
    );
  }

  function previousProject() {
    if (filteredProjects.length <= 1) return;

    setDirection(-1);

    setActiveIndex((current) =>
      current === 0
        ? filteredProjects.length - 1
        : current - 1
    );
  }

  function selectProject(index) {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function changeCategory(nextCategory) {
    setCategory(nextCategory);
    setActiveIndex(0);
    setDirection(1);
  }

  function openPortfolio() {
    window.location.href = "/portfolio";
  }

  if (!activeProject) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#050912]
        px-4
        py-16
        text-white
        sm:px-6
        lg:px-8
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[10%]
            top-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-blue-600/20
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-100px]
            right-[-80px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            mb-8
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                mb-3
                flex
                items-center
                gap-2
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-blue-400
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-blue-400
                "
              />

              Selected Work
            </motion.div>

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
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                text-4xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                sm:text-5xl
                lg:text-6xl
              "
              style={{
                fontFamily: "'Fraunces', serif",
              }}
            >
              Digital products
              <br />

              <span className="text-slate-600">
                made with purpose.
              </span>
            </motion.h2>
          </div>

          <motion.a
            href="/portfolio"
            initial={{
              opacity: 0,
              x: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2.5
              text-xs
              text-slate-400
              transition-all
              duration-300
              hover:border-blue-400/30
              hover:bg-blue-500/10
              hover:text-white
            "
          >
            View all projects

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            >
              <FiArrowUpRight size={12} />
            </span>
          </motion.a>
        </div>

        {/* ===================================================
            CATEGORY
        =================================================== */}

        <div
          className="
            mb-6
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <div
            className="
              flex
              max-w-full
              gap-1
              overflow-x-auto
              pb-1
              scrollbar-hide
            "
          >
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    changeCategory(item)
                  }
                  className="
                    relative
                    shrink-0
                    rounded-full
                    px-4
                    py-2
                    text-xs
                  "
                >
                  {active && (
                    <motion.span
                      layoutId="portfolioCategory"
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-white
                      "
                      transition={{
                        duration: 0.3,
                      }}
                    />
                  )}

                  <span
                    className={`
                      relative
                      z-10
                      ${
                        active
                          ? "text-[#050912]"
                          : "text-slate-500 hover:text-white"
                      }
                    `}
                  >
                    {item}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className="
              hidden
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-slate-600
              sm:flex
            "
          >
            <FiGrid size={12} />

            {String(activeIndex + 1).padStart(2, "0")}

            <span className="text-slate-800">
              /
            </span>

            {String(filteredProjects.length).padStart(
              2,
              "0"
            )}
          </div>
        </div>

        {/* ===================================================
            MAIN PROJECT WINDOW
        =================================================== */}

        <motion.div
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.08]
            bg-[#09111E]
            shadow-[0_30px_100px_rgba(0,0,0,.45)]
          "
        >
          {/* TOP BAR */}

          <div
            className="
              flex
              h-12
              items-center
              justify-between
              border-b
              border-white/[0.06]
              bg-white/[0.015]
              px-5
            "
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-green-400/70" />
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.06]
                bg-black/20
                px-3
                py-1
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-slate-600
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                "
              />

              {isPaused
                ? "Paused"
                : "Auto showcase"}
            </div>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-slate-700
              "
            >
              DES / 2026
            </span>
          </div>

          {/* =================================================
              PROJECT CONTENT
          ================================================= */}

          <div
            className="
              grid
              lg:grid-cols-[1.25fr_.75fr]
            "
          >
            {/* =================================================
                IMAGE AREA
            ================================================= */}

            <div
              className="
                relative
                h-[300px]
                overflow-hidden
                border-b
                border-white/[0.06]
                bg-[#060D18]
                sm:h-[430px]
                lg:h-[540px]
                lg:border-b-0
                lg:border-r
              "
            >
              {/* Background glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[55%]
                  w-[55%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/20
                  blur-[100px]
                "
              />

              {/* Orbit */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[80%]
                  w-[65%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-dashed
                  border-white/[0.04]
                "
              />

              {/* PROJECT NUMBER */}

              <div
                className="
                  absolute
                  left-6
                  top-6
                  z-20
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-slate-500
                "
              >
                <span className="text-blue-400">
                  {String(activeIndex + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="h-px w-5 bg-white/10" />

                PROJECT
              </div>

              {/* =================================================
                  BOTTOM → TOP PROJECT TRANSITION
              ================================================= */}

              <AnimatePresence
                mode="wait"
                custom={direction}
              >
                <motion.div
                  key={activeProject.slug}
                  custom={direction}
                  variants={{
                    enter: (direction) => ({
                      opacity: 0,
                      y:
                        direction > 0
                          ? 120
                          : -120,
                    }),

                    center: {
                      opacity: 1,
                      y: 0,
                    },

                    exit: (direction) => ({
                      opacity: 0,
                      y:
                        direction > 0
                          ? -120
                          : 120,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-[9%]
                  "
                >
                  <div
                    className="
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-white/10
                      bg-slate-900
                      shadow-[0_30px_80px_rgba(0,0,0,.45)]
                    "
                  >
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-transparent
                        to-white/[0.04]
                      "
                    />

                    {/* Category */}

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-3
                        py-1.5
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-white/70
                        backdrop-blur-xl
                      "
                    >
                      {activeProject.category}
                    </div>

                    {/* Number */}

                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-black/30
                        text-[9px]
                        text-white/70
                        backdrop-blur-xl
                      "
                    >
                      {String(
                        activeIndex + 1
                      ).padStart(2, "0")}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom progress */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  z-30
                "
              >
                <div
                  className="
                    mb-2
                    flex
                    justify-between
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-slate-600
                  "
                >
                  <span>
                    {isPaused
                      ? "Paused"
                      : "Auto moving"}
                  </span>

                  <span>
                    {String(activeIndex + 1).padStart(
                      2,
                      "0"
                    )}
                    {" / "}
                    {String(
                      filteredProjects.length
                    ).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className="
                    h-[2px]
                    overflow-hidden
                    rounded-full
                    bg-white/[0.08]
                  "
                >
                  <motion.div
                    key={activeProject.slug}
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: isPaused
                        ? "30%"
                        : "100%",
                    }}
                    transition={{
                      duration: isPaused
                        ? 0
                        : 4.5,
                      ease: "linear",
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-blue-400
                    "
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                INFORMATION
            ================================================= */}

            <div
              className="
                flex
                min-h-[430px]
                flex-col
                p-6
                sm:p-8
                lg:min-h-0
                lg:p-9
              "
            >
              <AnimatePresence
                mode="wait"
                custom={direction}
              >
                <motion.div
                  key={activeProject.slug}
                  custom={direction}
                  variants={{
                    enter: (direction) => ({
                      opacity: 0,
                      y:
                        direction > 0
                          ? 60
                          : -60,
                    }),

                    center: {
                      opacity: 1,
                      y: 0,
                    },

                    exit: (direction) => ({
                      opacity: 0,
                      y:
                        direction > 0
                          ? -60
                          : 60,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    h-full
                    flex-col
                  "
                >
                  {/* METADATA */}

                  <div
                    className="
                      mb-8
                      grid
                      grid-cols-2
                      gap-2
                    "
                  >
                    <div
                      className="
                        rounded-xl
                        border
                        border-white/[0.06]
                        bg-white/[0.025]
                        p-3
                      "
                    >
                      <FiUser
                        size={13}
                        className="mb-2 text-slate-600"
                      />

                      <p
                        className="
                          mb-1
                          text-[7px]
                          uppercase
                          tracking-[0.18em]
                          text-slate-600
                        "
                      >
                        Client
                      </p>

                      <p className="truncate text-[10px] text-slate-300">
                        {activeProject.client}
                      </p>
                    </div>

                    <div
                      className="
                        rounded-xl
                        border
                        border-white/[0.06]
                        bg-white/[0.025]
                        p-3
                      "
                    >
                      <FiCalendar
                        size={13}
                        className="mb-2 text-slate-600"
                      />

                      <p
                        className="
                          mb-1
                          text-[7px]
                          uppercase
                          tracking-[0.18em]
                          text-slate-600
                        "
                      >
                        Delivered
                      </p>

                      <p className="text-[10px] text-slate-300">
                        {activeProject.date}
                      </p>
                    </div>
                  </div>

                  {/* CATEGORY */}

                  <div
                    className="
                      mb-3
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span className="h-px w-5 bg-blue-400" />

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.22em]
                        text-blue-400
                      "
                    >
                      {activeProject.category}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      text-3xl
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.035em]
                      sm:text-4xl
                    "
                    style={{
                      fontFamily:
                        "'Fraunces', serif",
                    }}
                  >
                    {activeProject.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-5
                      text-xs
                      leading-6
                      text-slate-400
                    "
                  >
                    {activeProject.body}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="mt-7">
                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        gap-2
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-slate-600
                      "
                    >
                      <FiLayers size={11} />

                      Technology
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies?.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-white/[0.07]
                              bg-white/[0.025]
                              px-3
                              py-1.5
                              text-[8px]
                              text-slate-400
                            "
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div className="mt-auto pt-8">
                    <div className="mb-5 h-px bg-white/[0.06]" />

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <button
                        type="button"
                        onClick={openPortfolio}
                        className="
                          group
                          flex
                          items-center
                          gap-2.5
                          text-xs
                          font-medium
                        "
                      >
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-[#050912]
                            transition-transform
                            duration-300
                            group-hover:rotate-45
                          "
                        >
                          <FiExternalLink size={13} />
                        </span>

                        Explore project
                      </button>

                      {/* CONTROLS */}

                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          onClick={previousProject}
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.025]
                            text-slate-400
                            transition
                            hover:border-white/20
                            hover:text-white
                          "
                          aria-label="Previous project"
                        >
                          <FiChevronLeft size={15} />
                        </button>

                        <button
                          type="button"
                          onClick={nextProject}
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-blue-400/20
                            bg-blue-500/10
                            text-blue-300
                            transition
                            hover:border-blue-400/40
                            hover:bg-blue-500/20
                            hover:text-white
                          "
                          aria-label="Next project"
                        >
                          <FiChevronRight size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =================================================
              PROJECT SELECTOR
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              border-t
              border-white/[0.06]
              sm:grid-cols-4
            "
          >
            {filteredProjects.map(
              (project, index) => {
                const active =
                  index === activeIndex;

                return (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() =>
                      selectProject(index)
                    }
                    className={`
                      group
                      relative
                      flex
                      min-w-0
                      items-center
                      gap-2
                      border-r
                      border-white/[0.06]
                      px-3
                      py-3
                      text-left
                      transition-all
                      duration-300
                      last:border-r-0
                      sm:px-4
                      ${
                        active
                          ? "bg-blue-500/[0.07]"
                          : "hover:bg-white/[0.025]"
                      }
                    `}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeProjectLine"
                        className="
                          absolute
                          left-0
                          right-0
                          top-0
                          h-[2px]
                          bg-blue-400
                        "
                        transition={{
                          duration: 0.3,
                        }}
                      />
                    )}

                    <div
                      className="
                        h-9
                        w-9
                        shrink-0
                        overflow-hidden
                        rounded-lg
                        bg-slate-900
                      "
                    >
                      <img
                        src={project.image}
                        alt=""
                        className="
                          h-full
                          w-full
                          object-cover
                          opacity-60
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-0.5 flex items-center gap-1.5">
                        <span
                          className={`
                            text-[7px]
                            ${
                              active
                                ? "text-blue-400"
                                : "text-slate-700"
                            }
                          `}
                        >
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="hidden text-[6px] uppercase tracking-[0.15em] text-slate-700 sm:block">
                          {project.category}
                        </span>
                      </div>

                      <p
                        className={`
                          truncate
                          text-[8px]
                          font-medium
                          sm:text-[9px]
                          ${
                            active
                              ? "text-white"
                              : "text-slate-500"
                          }
                        `}
                      >
                        {project.title}
                      </p>
                    </div>

                    <FiArrowUpRight
                      size={11}
                      className={`
                        ml-auto
                        hidden
                        shrink-0
                        sm:block
                        ${
                          active
                            ? "text-blue-400"
                            : "text-slate-700"
                        }
                      `}
                    />
                  </button>
                );
              }
            )}
          </div>
        </motion.div>

        {/* STATUS */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-slate-700
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-blue-400
              "
            />

            {isPaused
              ? "Showcase paused"
              : "Automatically rotating"}
          </div>

          <span>
            {activeIndex + 1} /{" "}
            {filteredProjects.length}
          </span>
        </div>
      </div>

      {/* FONT */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&display=swap');

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}