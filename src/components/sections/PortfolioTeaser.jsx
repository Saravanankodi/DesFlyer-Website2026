// // // // import { useMemo, useRef, useState } from 'react'
// // // // import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
// // // // import {
// // // //   FiArrowUpRight,
// // // //   FiChevronLeft,
// // // //   FiChevronRight,
// // // // } from "react-icons/fi";
// // // // /* ------------------------------------------------------------------
// // // //    DESIGN CONCEPT — "Night Gallery"
// // // //    A 3D coverflow: projects sit in a perspective stack, the centered
// // // //    card tilts toward the cursor like you're holding a print up to a
// // // //    spotlight, side cards recede in depth and blur. Details for the
// // // //    active piece live in a synced panel below. Swap SAMPLE_PROJECTS
// // // //    for your real data — shape is unchanged from the last version.
// // // // ------------------------------------------------------------------- */

// // // // const categories = ['All', 'Web', 'App', 'UI/UX', 'Branding']

// // // // const SAMPLE_PROJECTS = [
// // // //   { slug: 'north-freight', client: 'North Freight Co.', date: '2025', category: 'Web', title: 'Logistics dashboard rebuild', body: 'A route-planning console rebuilt for dispatchers who live in it ten hours a day — dense data, zero friction.', technologies: ['React', 'D3', 'Node'] },
// // // //   { slug: 'hearth', client: 'Hearth', date: '2025', category: 'App', title: 'Home-services booking app', body: 'On-demand repair booking with live technician tracking, rebuilt from a legacy hybrid app to native.', technologies: ['Swift', 'Kotlin', 'Figma'] },
// // // //   { slug: 'ledger-club', client: 'Ledger Club', date: '2024', category: 'UI/UX', title: 'Personal finance onboarding', body: 'A six-screen onboarding flow that cut signup drop-off by reframing budgeting as a single honest number.', technologies: ['Figma', 'Framer'] },
// // // //   { slug: 'monarch-post', client: 'Monarch & Post', date: '2024', category: 'Branding', title: 'Identity for a print revival', body: 'Wordmark, stationery and a type system for a letterpress studio reopening after twelve years.', technologies: ['Illustrator', 'Type design'] },
// // // //   { slug: 'fieldnote', client: 'Fieldnote', date: '2024', category: 'Web', title: 'Marketing site + docs', body: 'A documentation-first marketing site for a developer tool, with search fast enough to feel local.', technologies: ['Next.js', 'Algolia'] },
// // // //   { slug: 'saltwater', client: 'Saltwater Supply', date: '2023', category: 'UI/UX', title: 'Inventory system redesign', body: 'Warehouse-floor software redesigned for gloved hands and bright light — big targets, few decisions.', technologies: ['React', 'Tauri'] },
// // // // ]

// // // // function initials(name) {
// // // //   return name.split(' ').map((w) => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase()
// // // // }

// // // // export default function Portfolio3DShowcase({ projects = SAMPLE_PROJECTS } = {}) {
// // // //   const [category, setCategory] = useState('All')
// // // //   const [index, setIndex] = useState(0)
// // // //   const prefersReducedMotion = useReducedMotion()
// // // //   const sectionRef = useRef(null)

// // // //   const filtered = useMemo(
// // // //     () => (category === 'All' ? projects : projects.filter((p) => p.category === category)),
// // // //     [category, projects]
// // // //   )
// // // //   const safeIndex = Math.min(index, Math.max(filtered.length - 1, 0))
// // // //   const active = filtered[safeIndex]

// // // //   const changeCategory = (cat) => {
// // // //     setCategory(cat)
// // // //     setIndex(0)
// // // //   }
// // // //   const go = (dir) => {
// // // //     setIndex((i) => Math.min(Math.max(i + dir, 0), filtered.length - 1))
// // // //   }

// // // //   // cursor tilt physics for the active card
// // // //   const mvX = useMotionValue(0.5)
// // // //   const mvY = useMotionValue(0.5)
// // // //   const springCfg = { stiffness: 150, damping: 18, mass: 0.4 }
// // // //   const tiltX = useSpring(useTransform(mvY, [0, 1], [10, -10]), springCfg)
// // // //   const tiltY = useSpring(useTransform(mvX, [0, 1], [-12, 12]), springCfg)
// // // //   const sheenX = useTransform(mvX, [0, 1], ['20%', '80%'])

// // // //   const onCardMove = (e) => {
// // // //     if (prefersReducedMotion) return
// // // //     const rect = e.currentTarget.getBoundingClientRect()
// // // //     mvX.set((e.clientX - rect.left) / rect.width)
// // // //     mvY.set((e.clientY - rect.top) / rect.height)
// // // //   }
// // // //   const onCardLeave = () => {
// // // //     mvX.set(0.5)
// // // //     mvY.set(0.5)
// // // //   }

// // // //   // ambient spotlight following cursor across the section
// // // //   const spotX = useMotionValue(50)
// // // //   const spotY = useMotionValue(30)
// // // //   const onSectionMove = (e) => {
// // // //     if (prefersReducedMotion) return
// // // //     const rect = sectionRef.current.getBoundingClientRect()
// // // //     spotX.set(((e.clientX - rect.left) / rect.width) * 100)
// // // //     spotY.set(((e.clientY - rect.top) / rect.height) * 100)
// // // //   }
// // // //   const spotBackground = useTransform([spotX, spotY], ([x, y]) =>
// // // //     `radial-gradient(600px circle at ${x}% ${y}%, rgba(232,184,75,0.08), transparent 65%)`
// // // //   )

// // // //   const onKeyDown = (e) => {
// // // //     if (e.key === 'ArrowRight') go(1)
// // // //     if (e.key === 'ArrowLeft') go(-1)
// // // //   }

// // // //   return (
// // // //     <section
// // // //       ref={sectionRef}
// // // //       onMouseMove={onSectionMove}
// // // //       style={{ background: 'var(--ng-bg)', color: 'var(--ng-ink)', fontFamily: 'var(--ng-body)', position: 'relative', overflow: 'hidden' }}
// // // //       className="py-20 lg:py-28 px-5 lg:px-10"
// // // //     >
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');
// // // //         :root {
// // // //           --ng-bg: #120E1A;
// // // //           --ng-panel: #1C1626;
// // // //           --ng-ink: #F5EFE6;
// // // //           --ng-muted: #A79BC0;
// // // //           --ng-accent: #E8B84B;
// // // //           --ng-accent-soft: rgba(232,184,75,0.14);
// // // //           --ng-line: #2E2740;
// // // //           --ng-display: 'Fraunces', serif;
// // // //           --ng-mono: 'IBM Plex Mono', monospace;
// // // //           --ng-body: 'Inter', sans-serif;
// // // //         }
// // // //         .ng-focus:focus-visible { outline: 2px solid var(--ng-accent); outline-offset: 3px; }
// // // //         .ng-tab { transition: color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease; }
// // // //         .ng-arrow { transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease; }
// // // //         .ng-arrow:hover:not(:disabled) { transform: translateY(-2px); border-color: var(--ng-accent); }
// // // //         .ng-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
// // // //       `}</style>

// // // //       <motion.div
// // // //         aria-hidden
// // // //         style={{ position: 'absolute', inset: 0, background: spotBackground, pointerEvents: 'none' }}
// // // //       />

// // // //       <div className="max-w-6xl mx-auto relative">
// // // //         {/* Header */}
// // // //         <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
// // // //           <div>
// // // //             <div
// // // //               className="flex items-center gap-2 mb-3"
// // // //               style={{ fontFamily: 'var(--ng-mono)', fontSize: 12, letterSpacing: '0.14em', color: 'var(--ng-accent)' }}
// // // //             >
// // // //               <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ng-accent)', display: 'inline-block' }} />
// // // //               SELECTED WORK
// // // //             </div>
// // // //             <h2 style={{ fontFamily: 'var(--ng-display)', fontWeight: 600 }} className="text-[2rem] sm:text-[2.6rem] leading-[1.05]">
// // // //               Projects we&rsquo;ve shipped
// // // //             </h2>
// // // //           </div>

// // // //           <a
// // // //             href="/portfolio"
// // // //             className="ng-focus flex items-center gap-1.5 text-sm font-medium pb-1"
// // // //             style={{ borderBottom: '1px solid var(--ng-ink)', fontFamily: 'var(--ng-mono)', color: 'var(--ng-ink)' }}
// // // //           >
// // // //             FULL PORTFOLIO <FiArrowUpRight size={15} />
// // // //           </a>
// // // //         </div>

// // // //         {/* Filter tabs — glass pills */}
// // // //         <div className="flex flex-wrap gap-2 mb-14">
// // // //           {categories.map((cat) => {
// // // //             const isActive = category === cat
// // // //             return (
// // // //               <button
// // // //                 key={cat}
// // // //                 onClick={() => changeCategory(cat)}
// // // //                 className="ng-tab ng-focus px-4 py-2 rounded-full text-sm"
// // // //                 style={{
// // // //                   fontFamily: 'var(--ng-mono)',
// // // //                   border: `1px solid ${isActive ? 'var(--ng-accent)' : 'var(--ng-line)'}`,
// // // //                   background: isActive ? 'var(--ng-accent-soft)' : 'transparent',
// // // //                   color: isActive ? 'var(--ng-accent)' : 'var(--ng-muted)',
// // // //                   boxShadow: isActive ? '0 0 24px -8px var(--ng-accent)' : 'none',
// // // //                 }}
// // // //               >
// // // //                 {cat}
// // // //               </button>
// // // //             )
// // // //           })}
// // // //         </div>

// // // //         {/* 3D coverflow stack */}
// // // //         <div
// // // //           role="group"
// // // //           aria-label="Project showcase, use arrow keys to navigate"
// // // //           tabIndex={0}
// // // //           onKeyDown={onKeyDown}
// // // //           className="ng-focus relative flex items-center justify-center mb-10"
// // // //           style={{ perspective: 1400, height: 320 }}
// // // //         >
// // // //           {filtered.map((p, i) => {
// // // //             const offset = i - safeIndex
// // // //             const abs = Math.abs(offset)
// // // //             const isActive = offset === 0
// // // //             if (abs > 3) return null

// // // //             const baseStyle = prefersReducedMotion
// // // //               ? { x: offset * 40, opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.9 }
// // // //               : {
// // // //                   x: offset * 150,
// // // //                   rotateY: offset * -32,
// // // //                   scale: 1 - abs * 0.14,
// // // //                   opacity: Math.max(1 - abs * 0.32, 0),
// // // //                   filter: `blur(${abs * 1.5}px)`,
// // // //                 }

// // // //             return (
// // // //               <motion.button
// // // //                 key={p.slug}
// // // //                 onClick={() => setIndex(i)}
// // // //                 onMouseMove={isActive ? onCardMove : undefined}
// // // //                 onMouseLeave={isActive ? onCardLeave : undefined}
// // // //                 animate={baseStyle}
// // // //                 transition={{ type: 'spring', stiffness: 260, damping: 30 }}
// // // //                 style={{
// // // //                   position: 'absolute',
// // // //                   width: 210,
// // // //                   height: 280,
// // // //                   borderRadius: 14,
// // // //                   background: `linear-gradient(155deg, var(--ng-panel), #150F20)`,
// // // //                   border: `1px solid ${isActive ? 'var(--ng-accent)' : 'var(--ng-line)'}`,
// // // //                   transformStyle: 'preserve-3d',
// // // //                   cursor: isActive ? 'default' : 'pointer',
// // // //                   zIndex: 10 - abs,
// // // //                   rotateX: isActive ? tiltX : 0,
// // // //                   ...(isActive ? { rotateY: tiltY } : {}),
// // // //                   boxShadow: isActive ? '0 30px 60px -20px rgba(0,0,0,0.6)' : '0 10px 30px -15px rgba(0,0,0,0.5)',
// // // //                 }}
// // // //                 className="flex flex-col items-center justify-center px-6"
// // // //               >
// // // //                 {isActive && !prefersReducedMotion && (
// // // //                   <motion.div
// // // //                     aria-hidden
// // // //                     style={{
// // // //                       position: 'absolute',
// // // //                       inset: 0,
// // // //                       borderRadius: 14,
// // // //                       background: useTransform(sheenX, (x) => `linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.06) ${x}, transparent 70%)`),
// // // //                       pointerEvents: 'none',
// // // //                     }}
// // // //                   />
// // // //                 )}
// // // //                 <span
// // // //                   style={{
// // // //                     fontFamily: 'var(--ng-display)',
// // // //                     fontSize: 34,
// // // //                     fontWeight: 600,
// // // //                     color: isActive ? 'var(--ng-accent)' : 'var(--ng-muted)',
// // // //                   }}
// // // //                 >
// // // //                   {initials(p.client)}
// // // //                 </span>
// // // //                 <span
// // // //                   className="mt-4 text-center text-xs leading-snug"
// // // //                   style={{ fontFamily: 'var(--ng-mono)', color: 'var(--ng-muted)' }}
// // // //                 >
// // // //                   {p.client}
// // // //                 </span>
// // // //               </motion.button>
// // // //             )
// // // //           })}
// // // //         </div>

// // // //         {/* nav arrows */}
// // // //         <div className="flex items-center justify-center gap-4 mb-14">
// // // //           <button
// // // //             aria-label="Previous project"
// // // //             onClick={() => go(-1)}
// // // //             disabled={safeIndex === 0}
// // // //             className="ng-arrow ng-focus w-10 h-10 rounded-full flex items-center justify-center"
// // // //             style={{ border: '1px solid var(--ng-line)', color: 'var(--ng-ink)' }}
// // // //           >
// // // //             <FiChevronRight size={18} />
// // // //           </button>
// // // //           <span style={{ fontFamily: 'var(--ng-mono)', fontSize: 12, color: 'var(--ng-muted)' }}>
// // // //             {String(safeIndex + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
// // // //           </span>
// // // //           <button
// // // //             aria-label="Next project"
// // // //             onClick={() => go(1)}
// // // //             disabled={safeIndex === filtered.length - 1}
// // // //             className="ng-arrow ng-focus w-10 h-10 rounded-full flex items-center justify-center"
// // // //             style={{ border: '1px solid var(--ng-line)', color: 'var(--ng-ink)' }}
// // // //           >
// // // //             <FiChevronLeft size={18} />
// // // //           </button>
// // // //         </div>

// // // //         {/* synced details panel */}
// // // //         <div className="max-w-2xl mx-auto text-center">
// // // //           <AnimatePresence mode="wait">
// // // //             {active && (
// // // //               <motion.div
// // // //                 key={active.slug}
// // // //                 initial={{ opacity: 0, y: 14 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 exit={{ opacity: 0, y: -10 }}
// // // //                 transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
// // // //               >
// // // //                 <div
// // // //                   className="flex items-center justify-center gap-3 mb-4"
// // // //                   style={{ fontFamily: 'var(--ng-mono)', fontSize: 12, color: 'var(--ng-muted)' }}
// // // //                 >
// // // //                   <span>{active.date}</span>
// // // //                   <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--ng-muted)' }} />
// // // //                   <span style={{ color: 'var(--ng-accent)' }}>{active.category}</span>
// // // //                 </div>

// // // //                 <h3 style={{ fontFamily: 'var(--ng-display)', fontWeight: 600 }} className="text-2xl sm:text-3xl mb-4">
// // // //                   {active.title}
// // // //                 </h3>

// // // //                 <p className="text-[15px] leading-relaxed mb-6" style={{ color: 'var(--ng-muted)' }}>
// // // //                   {active.body}
// // // //                 </p>

// // // //                 <div className="flex flex-wrap justify-center gap-2 mb-8">
// // // //                   {active.technologies.map((t) => (
// // // //                     <span
// // // //                       key={t}
// // // //                       className="text-[11px] px-2.5 py-1 rounded-full"
// // // //                       style={{ fontFamily: 'var(--ng-mono)', border: '1px solid var(--ng-line)', color: 'var(--ng-muted)' }}
// // // //                     >
// // // //                       {t}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>

// // // //                 <a
// // // //                   href={`/portfolio/${active.slug}`}
// // // //                   className="ng-focus inline-flex items-center gap-1.5 text-sm font-medium"
// // // //                   style={{ color: 'var(--ng-accent)', borderBottom: '1px solid var(--ng-accent)', paddingBottom: 2 }}
// // // //                 >
// // // //                   View case study <FiArrowUpRight size={15} />
// // // //                 </a>
// // // //               </motion.div>
// // // //             )}
// // // //           </AnimatePresence>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }



// // // // import {
// // // //   useMemo,
// // // //   useRef,
// // // //   useState,
// // // //   useEffect,
// // // // } from "react";

// // // // import {
// // // //   AnimatePresence,
// // // //   motion,
// // // //   useMotionValue,
// // // //   useReducedMotion,
// // // //   useSpring,
// // // //   useTransform,
// // // // } from "framer-motion";

// // // // import {
// // // //   FiArrowUpRight,
// // // //   FiChevronLeft,
// // // //   FiChevronRight,
// // // // } from "react-icons/fi";

// // // // const categories = [
// // // //   "All",
// // // //   "Web",
// // // //   "App",
// // // //   "UI/UX",
// // // //   "Branding",
// // // // ];

// // // // const SAMPLE_PROJECTS = [
// // // //   {
// // // //     slug: "north-freight",
// // // //     client: "North Freight Co.",
// // // //     date: "2025",
// // // //     category: "Web",
// // // //     title: "Logistics dashboard rebuild",
// // // //     body:
// // // //       "A route-planning console rebuilt for dispatchers who live in it ten hours a day.",
// // // //     technologies: ["React", "D3", "Node"],
// // // //   },

// // // //   {
// // // //     slug: "hearth",
// // // //     client: "Hearth",
// // // //     date: "2025",
// // // //     category: "App",
// // // //     title: "Home-services booking app",
// // // //     body:
// // // //       "On-demand repair booking with live technician tracking.",
// // // //     technologies: ["Swift", "Kotlin", "Figma"],
// // // //   },

// // // //   {
// // // //     slug: "ledger-club",
// // // //     client: "Ledger Club",
// // // //     date: "2024",
// // // //     category: "UI/UX",
// // // //     title: "Finance onboarding",
// // // //     body:
// // // //       "A cleaner onboarding experience with higher conversions.",
// // // //     technologies: ["Figma", "Framer"],
// // // //   },

// // // //   {
// // // //     slug: "monarch-post",
// // // //     client: "Monarch & Post",
// // // //     date: "2024",
// // // //     category: "Branding",
// // // //     title: "Identity redesign",
// // // //     body:
// // // //       "Brand identity, typography and stationery system.",
// // // //     technologies: ["Illustrator", "Type Design"],
// // // //   },

// // // //   {
// // // //     slug: "fieldnote",
// // // //     client: "Fieldnote",
// // // //     date: "2024",
// // // //     category: "Web",
// // // //     title: "Marketing website",
// // // //     body:
// // // //       "Documentation-first website for developers.",
// // // //     technologies: ["Next.js", "Algolia"],
// // // //   },

// // // //   {
// // // //     slug: "saltwater",
// // // //     client: "Saltwater Supply",
// // // //     date: "2023",
// // // //     category: "UI/UX",
// // // //     title: "Inventory redesign",
// // // //     body:
// // // //       "Warehouse software redesigned for industrial environments.",
// // // //     technologies: ["React", "Tauri"],
// // // //   },
// // // // ];

// // // // function initials(name) {
// // // //   return name
// // // //     .split(" ")
// // // //     .map((w) => w[0])
// // // //     .join("")
// // // //     .slice(0, 2)
// // // //     .toUpperCase();
// // // // }

// // // // export default function PortfolioTeaser({
// // // //   projects = SAMPLE_PROJECTS,
// // // // }) {
// // // //   const prefersReducedMotion = useReducedMotion();

// // // //   const sectionRef = useRef(null);

// // // //   const [category, setCategory] = useState("All");
// // // //   const [index, setIndex] = useState(0);
// // // //   const [paused, setPaused] = useState(false);

// // // //   const filtered = useMemo(() => {
// // // //     if (category === "All") return projects;

// // // //     return projects.filter(
// // // //       (project) => project.category === category
// // // //     );
// // // //   }, [projects, category]);

// // // //   const safeIndex = Math.min(
// // // //     index,
// // // //     Math.max(filtered.length - 1, 0)
// // // //   );

// // // //   const active = filtered[safeIndex];

// // // //   function changeCategory(cat) {
// // // //     setCategory(cat);
// // // //     setIndex(0);
// // // //   }

// // // //   function go(direction) {
// // // //     setIndex((prev) => {
// // // //       const next = prev + direction;

// // // //       if (next < 0) return filtered.length - 1;

// // // //       if (next >= filtered.length) return 0;

// // // //       return next;
// // // //     });
// // // //   }

// // // //   useEffect(() => {
// // // //     if (paused) return;

// // // //     if (filtered.length <= 1) return;

// // // //     const timer = setInterval(() => {
// // // //       setIndex((prev) =>
// // // //         prev >= filtered.length - 1 ? 0 : prev + 1
// // // //       );
// // // //     }, 2500);

// // // //     return () => clearInterval(timer);
// // // //   }, [paused, filtered.length]);

// // // //   // -----------------------------
// // // //   // Mouse Tilt
// // // //   // -----------------------------

// // // //   const mouseX = useMotionValue(0.5);
// // // //   const mouseY = useMotionValue(0.5);

// // // //   const spring = {
// // // //     stiffness: 180,
// // // //     damping: 18,
// // // //     mass: 0.4,
// // // //   };

// // // //   const rotateX = useSpring(
// // // //     useTransform(mouseY, [0, 1], [10, -10]),
// // // //     spring
// // // //   );

// // // //   const rotateY = useSpring(
// // // //     useTransform(mouseX, [0, 1], [-12, 12]),
// // // //     spring
// // // //   );

// // // //   const sheenX = useTransform(
// // // //     mouseX,
// // // //     [0, 1],
// // // //     ["20%", "80%"]
// // // //   );

// // // //   function onCardMove(e) {
// // // //     if (prefersReducedMotion) return;

// // // //     const rect =
// // // //       e.currentTarget.getBoundingClientRect();

// // // //     mouseX.set(
// // // //       (e.clientX - rect.left) / rect.width
// // // //     );

// // // //     mouseY.set(
// // // //       (e.clientY - rect.top) / rect.height
// // // //     );
// // // //   }

// // // //   function onCardLeave() {
// // // //     mouseX.set(0.5);
// // // //     mouseY.set(0.5);
// // // //   }

// // // //   // -----------------------------
// // // //   // Spotlight
// // // //   // -----------------------------

// // // //   const spotX = useMotionValue(50);
// // // //   const spotY = useMotionValue(50);

// // // //   function onSectionMove(e) {
// // // //     if (prefersReducedMotion) return;

// // // //     const rect =
// // // //       sectionRef.current.getBoundingClientRect();

// // // //     spotX.set(
// // // //       ((e.clientX - rect.left) / rect.width) *
// // // //         100
// // // //     );

// // // //     spotY.set(
// // // //       ((e.clientY - rect.top) / rect.height) *
// // // //         100
// // // //     );
// // // //   }

// // // //   const spotBackground = useTransform(
// // // //     [spotX, spotY],
// // // //     ([x, y]) =>
// // // //       `radial-gradient(
// // // //         650px circle at ${x}% ${y}%,
// // // //         rgba(232,184,75,.08),
// // // //         transparent 70%
// // // //       )`
// // // //   );

// // // //   function onKeyDown(e) {
// // // //     if (e.key === "ArrowRight") go(1);

// // // //     if (e.key === "ArrowLeft") go(-1);
// // // //   }

// // // //   return (
// // // //         <section
// // // //       ref={sectionRef}
// // // //       onMouseMove={onSectionMove}
// // // //       className="relative overflow-hidden py-20 lg:py-28 px-5 lg:px-10"
// // // //       style={{
// // // //         background: "#120E1A",
// // // //         color: "#F5EFE6",
// // // //       }}
// // // //     >
// // // //       <style>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');

// // // //         :root{
// // // //           --ng-panel:#1C1626;
// // // //           --ng-line:#2E2740;
// // // //           --ng-accent:#E8B84B;
// // // //           --ng-muted:#A79BC0;
// // // //         }

// // // //         .display{
// // // //           font-family:'Fraunces',serif;
// // // //         }

// // // //         .mono{
// // // //           font-family:'IBM Plex Mono',monospace;
// // // //         }

// // // //         .body{
// // // //           font-family:'Inter',sans-serif;
// // // //         }
// // // //       `}</style>

// // // //       <motion.div
// // // //         aria-hidden
// // // //         className="absolute inset-0 pointer-events-none"
// // // //         style={{
// // // //           background: spotBackground,
// // // //         }}
// // // //       />

// // // //       <div className="relative max-w-6xl mx-auto">

// // // //         {/* HEADER */}

// // // //         <div className="flex flex-wrap items-end justify-between gap-6 mb-14">

// // // //           <div>

// // // //             <div className="mono flex items-center gap-2 text-xs tracking-[0.18em] text-[#E8B84B] mb-3">

// // // //               <span className="w-2 h-2 rounded-full bg-[#E8B84B]" />

// // // //               SELECTED WORK

// // // //             </div>

// // // //             <h2 className="display text-5xl leading-none font-semibold">

// // // //               Projects we've shipped

// // // //             </h2>

// // // //           </div>

// // // //           <a
// // // //             href="/portfolio"
// // // //             className="mono inline-flex items-center gap-2 border-b border-white pb-1 text-sm hover:text-[#E8B84B] transition"
// // // //           >
// // // //             Full Portfolio

// // // //             <FiArrowUpRight />
// // // //           </a>

// // // //         </div>

// // // //         {/* FILTERS */}

// // // //         <div className="flex flex-wrap gap-3 mb-16">

// // // //           {categories.map((cat) => {

// // // //             const activeTab = cat === category;

// // // //             return (

// // // //               <button
// // // //                 key={cat}
// // // //                 onClick={() => changeCategory(cat)}
// // // //                 className="mono rounded-full px-5 py-2 text-sm transition-all duration-300"
// // // //                 style={{
// // // //                   border: `1px solid ${
// // // //                     activeTab
// // // //                       ? "#E8B84B"
// // // //                       : "#2E2740"
// // // //                   }`,
// // // //                   background: activeTab
// // // //                     ? "rgba(232,184,75,.12)"
// // // //                     : "transparent",
// // // //                   color: activeTab
// // // //                     ? "#E8B84B"
// // // //                     : "#A79BC0",
// // // //                 }}
// // // //               >

// // // //                 {cat}

// // // //               </button>

// // // //             );

// // // //           })}

// // // //         </div>

// // // //         {/* COVERFLOW */}

// // // //         <div
// // // //           tabIndex={0}
// // // //           onKeyDown={onKeyDown}
// // // //           onMouseEnter={() => setPaused(true)}
// // // //           onMouseLeave={() => setPaused(false)}
// // // //           className="relative flex items-center justify-center mb-14 outline-none"
// // // //           style={{
// // // //             perspective: 1400,
// // // //             height: 340,
// // // //           }}
// // // //         >

// // // //           {filtered.map((project, i) => {

// // // //             const offset = i - safeIndex;

// // // //             const distance = Math.abs(offset);

// // // //             const isActive = offset === 0;

// // // //             if (distance > 3) return null;

// // // //             const animation = prefersReducedMotion
// // // //               ? {
// // // //                   x: offset * 50,
// // // //                   opacity: isActive ? 1 : 0,
// // // //                   scale: isActive ? 1 : .9,
// // // //                 }
// // // //               : {
// // // //                   x: offset * 160,
// // // //                   rotateY: offset * -32,
// // // //                   scale: 1 - distance * .14,
// // // //                   opacity: 1 - distance * .30,
// // // //                   filter: `blur(${distance * 1.5}px)`,
// // // //                 };

// // // //             return (

// // // //               <motion.button
// // // //                 key={project.slug}
// // // //                 animate={animation}
// // // //                 transition={{
// // // //                   type: "spring",
// // // //                   stiffness: 260,
// // // //                   damping: 30,
// // // //                 }}
// // // //                 onClick={() => setIndex(i)}
// // // //                 onMouseMove={
// // // //                   isActive
// // // //                     ? onCardMove
// // // //                     : undefined
// // // //                 }
// // // //                 onMouseLeave={
// // // //                   isActive
// // // //                     ? onCardLeave
// // // //                     : undefined
// // // //                 }
// // // //                 className="absolute flex flex-col items-center justify-center px-6"
// // // //                 style={{
// // // //                   width: 220,
// // // //                   height: 290,
// // // //                   borderRadius: 18,
// // // //                   background:
// // // //                     "linear-gradient(160deg,#1C1626,#120E1A)",
// // // //                   border: `1px solid ${
// // // //                     isActive
// // // //                       ? "#E8B84B"
// // // //                       : "#2E2740"
// // // //                   }`,
// // // //                   transformStyle: "preserve-3d",
// // // //                   zIndex: 20 - distance,
// // // //                   rotateX: isActive
// // // //                     ? rotateX
// // // //                     : 0,
// // // //                   ...(isActive
// // // //                     ? { rotateY }
// // // //                     : {}),
// // // //                   boxShadow: isActive
// // // //                     ? "0 35px 60px rgba(0,0,0,.55)"
// // // //                     : "0 12px 28px rgba(0,0,0,.35)",
// // // //                 }}
// // // //               >

// // // //                 {isActive && (

// // // //                   <motion.div
// // // //                     className="absolute inset-0 rounded-[18px]"
// // // //                     style={{
// // // //                       background: useTransform(
// // // //                         sheenX,
// // // //                         (x) =>
// // // //                           `linear-gradient(115deg,
// // // //                           transparent 35%,
// // // //                           rgba(255,255,255,.07) ${x},
// // // //                           transparent 75%)`
// // // //                       ),
// // // //                     }}
// // // //                   />

// // // //                 )}

// // // //                 <div className="display text-5xl text-[#E8B84B] font-semibold">

// // // //                   {initials(project.client)}

// // // //                 </div>

// // // //                 <div className="mono mt-5 text-xs text-center text-[#A79BC0]">

// // // //                   {project.client}

// // // //                 </div>

// // // //               </motion.button>

// // // //             );

// // // //           })}

// // // //         </div>
// // // //                 {/* Navigation */}

// // // //         <div className="flex items-center justify-center gap-5 mb-14">

// // // //           <button
// // // //             onClick={() => go(-1)}
// // // //             className="w-11 h-11 rounded-full border border-[#2E2740] flex items-center justify-center hover:border-[#E8B84B] hover:text-[#E8B84B] transition"
// // // //           >
// // // //             <FiChevronLeft size={18} />
// // // //           </button>

// // // //           <span className="mono text-xs text-[#A79BC0] tracking-[0.18em]">
// // // //             {String(safeIndex + 1).padStart(2, "0")}
// // // //             {" / "}
// // // //             {String(filtered.length).padStart(2, "0")}
// // // //           </span>

// // // //           <button
// // // //             onClick={() => go(1)}
// // // //             className="w-11 h-11 rounded-full border border-[#2E2740] flex items-center justify-center hover:border-[#E8B84B] hover:text-[#E8B84B] transition"
// // // //           >
// // // //             <FiChevronRight size={18} />
// // // //           </button>

// // // //         </div>

// // // //         {/* Details */}

// // // //         <div className="max-w-3xl mx-auto text-center">

// // // //           <AnimatePresence mode="wait">

// // // //             {active && (

// // // //               <motion.div
// // // //                 key={active.slug}
// // // //                 initial={{
// // // //                   opacity: 0,
// // // //                   y: 30,
// // // //                 }}
// // // //                 animate={{
// // // //                   opacity: 1,
// // // //                   y: 0,
// // // //                 }}
// // // //                 exit={{
// // // //                   opacity: 0,
// // // //                   y: -20,
// // // //                 }}
// // // //                 transition={{
// // // //                   duration: .45,
// // // //                 }}
// // // //               >

// // // //                 <div className="mono flex justify-center items-center gap-3 text-xs text-[#A79BC0] mb-5">

// // // //                   <span>{active.date}</span>

// // // //                   <span className="w-1 h-1 rounded-full bg-[#A79BC0]" />

// // // //                   <span className="text-[#E8B84B]">
// // // //                     {active.category}
// // // //                   </span>

// // // //                 </div>

// // // //                 <h3 className="display text-4xl font-semibold mb-5">

// // // //                   {active.title}

// // // //                 </h3>

// // // //                 <p className="body text-[#A79BC0] leading-8 max-w-2xl mx-auto mb-8">

// // // //                   {active.body}

// // // //                 </p>

// // // //                 <div className="flex flex-wrap justify-center gap-3 mb-10">

// // // //                   {active.technologies.map((tech) => (

// // // //                     <span
// // // //                       key={tech}
// // // //                       className="mono text-[11px] px-4 py-2 rounded-full border border-[#2E2740] text-[#A79BC0]"
// // // //                     >
// // // //                       {tech}
// // // //                     </span>

// // // //                   ))}

// // // //                 </div>

// // // //                 <a
// // // //                   href={`/portfolio/${active.slug}`}
// // // //                   className="
// // // //                     inline-flex
// // // //                     items-center
// // // //                     gap-2
// // // //                     px-7
// // // //                     py-3
// // // //                     rounded-full
// // // //                     bg-[#E8B84B]
// // // //                     text-black
// // // //                     font-medium
// // // //                     hover:scale-105
// // // //                     transition
// // // //                   "
// // // //                 >
// // // //                   View Case Study

// // // //                   <FiArrowUpRight />
// // // //                 </a>

// // // //               </motion.div>

// // // //             )}

// // // //           </AnimatePresence>

// // // //         </div>

// // // //       </div>
// // // //             {/* Navigation */}
// // // //       <div className="flex items-center justify-center gap-4 mb-14">
// // // //         <button
// // // //           aria-label="Previous project"
// // // //           onClick={() => go(-1)}
// // // //           disabled={safeIndex === 0}
// // // //           className="ng-arrow ng-focus w-10 h-10 rounded-full flex items-center justify-center"
// // // //           style={{
// // // //             border: '1px solid var(--ng-line)',
// // // //             color: 'var(--ng-ink)',
// // // //           }}
// // // //         >
// // // //           <FiChevronLeft size={18} />
// // // //         </button>

// // // //         <span
// // // //           style={{
// // // //             fontFamily: 'var(--ng-mono)',
// // // //             fontSize: 12,
// // // //             color: 'var(--ng-muted)',
// // // //           }}
// // // //         >
// // // //           {String(safeIndex + 1).padStart(2, '0')} /{' '}
// // // //           {String(filtered.length).padStart(2, '0')}
// // // //         </span>

// // // //         <button
// // // //           aria-label="Next project"
// // // //           onClick={() => go(1)}
// // // //           disabled={safeIndex === filtered.length - 1}
// // // //           className="ng-arrow ng-focus w-10 h-10 rounded-full flex items-center justify-center"
// // // //           style={{
// // // //             border: '1px solid var(--ng-line)',
// // // //             color: 'var(--ng-ink)',
// // // //           }}
// // // //         >
// // // //           <FiChevronRight size={18} />
// // // //         </button>
// // // //       </div>

// // // //       {/* Details */}
// // // //       <div className="max-w-2xl mx-auto text-center">
// // // //         <AnimatePresence mode="wait">
// // // //           {active && (
// // // //             <motion.div
// // // //               key={active.slug}
// // // //               initial={{ opacity: 0, y: 14 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               exit={{ opacity: 0, y: -10 }}
// // // //               transition={{
// // // //                 duration: 0.35,
// // // //                 ease: [0.16, 1, 0.3, 1],
// // // //               }}
// // // //             >
// // // //               <div
// // // //                 className="flex items-center justify-center gap-3 mb-4"
// // // //                 style={{
// // // //                   fontFamily: 'var(--ng-mono)',
// // // //                   fontSize: 12,
// // // //                   color: 'var(--ng-muted)',
// // // //                 }}
// // // //               >
// // // //                 <span>{active.date}</span>

// // // //                 <span
// // // //                   style={{
// // // //                     width: 3,
// // // //                     height: 3,
// // // //                     borderRadius: '50%',
// // // //                     background: 'var(--ng-muted)',
// // // //                   }}
// // // //                 />

// // // //                 <span
// // // //                   style={{
// // // //                     color: 'var(--ng-accent)',
// // // //                   }}
// // // //                 >
// // // //                   {active.category}
// // // //                 </span>
// // // //               </div>

// // // //               <h3
// // // //                 className="text-2xl sm:text-3xl mb-4"
// // // //                 style={{
// // // //                   fontFamily: 'var(--ng-display)',
// // // //                   fontWeight: 600,
// // // //                 }}
// // // //               >
// // // //                 {active.title}
// // // //               </h3>

// // // //               <p
// // // //                 className="text-[15px] leading-relaxed mb-6"
// // // //                 style={{
// // // //                   color: 'var(--ng-muted)',
// // // //                 }}
// // // //               >
// // // //                 {active.body}
// // // //               </p>

// // // //               <div className="flex flex-wrap justify-center gap-2 mb-8">
// // // //                 {active.technologies.map((tech) => (
// // // //                   <span
// // // //                     key={tech}
// // // //                     className="text-[11px] px-2.5 py-1 rounded-full"
// // // //                     style={{
// // // //                       fontFamily: 'var(--ng-mono)',
// // // //                       border: '1px solid var(--ng-line)',
// // // //                       color: 'var(--ng-muted)',
// // // //                     }}
// // // //                   >
// // // //                     {tech}
// // // //                   </span>
// // // //                 ))}
// // // //               </div>

// // // //               <a
// // // //                 href={`/portfolio/${active.slug}`}
// // // //                 className="ng-focus inline-flex items-center gap-1.5 text-sm font-medium"
// // // //                 style={{
// // // //                   color: 'var(--ng-accent)',
// // // //                   borderBottom: '1px solid var(--ng-accent)',
// // // //                   paddingBottom: 2,
// // // //                 }}
// // // //               >
// // // //                 View case study
// // // //                 <FiArrowUpRight size={15} />
// // // //               </a>
// // // //             </motion.div>
// // // //           )}
// // // //         </AnimatePresence>
// // // //       </div>
// // // //     {/* </div> */}
// // // //   // </section>
// // // // )
// // // // }












// import {
//   useMemo,
//   useRef,
//   useState,
//   useEffect,
// } from "react";

// import {
//   AnimatePresence,
//   motion,
//   useMotionValue,
//   useReducedMotion,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// import {
//   FiArrowUpRight,
//   FiChevronLeft,
//   FiChevronRight,
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
//     slug: "north-freight",
//     client: "North Freight Co.",
//     date: "2025",
//     category: "Web",
//     title: "Logistics Dashboard",
//     body:
//       "A modern logistics platform for managing deliveries, routes and real-time fleet tracking with analytics.",
//     technologies: ["React", "Node", "MongoDB"],
//   },

//   {
//     slug: "hearth",
//     client: "Hearth",
//     date: "2025",
//     category: "App",
//     title: "Booking Application",
//     body:
//       "Mobile booking platform with technician tracking, secure payments and notifications.",
//     technologies: ["Flutter", "Firebase", "Figma"],
//   },

//   {
//     slug: "ledger-club",
//     client: "Ledger Club",
//     date: "2024",
//     category: "UI/UX",
//     title: "Finance Dashboard",
//     body:
//       "Dashboard redesign focused on usability, accessibility and simplified financial insights.",
//     technologies: ["Figma", "Framer"],
//   },

//   {
//     slug: "monarch-post",
//     client: "Monarch & Post",
//     date: "2024",
//     category: "Branding",
//     title: "Brand Identity",
//     body:
//       "Complete branding system including logo, typography and visual identity.",
//     technologies: ["Illustrator", "Photoshop"],
//   },

//   {
//     slug: "fieldnote",
//     client: "Fieldnote",
//     date: "2024",
//     category: "Web",
//     title: "Developer Platform",
//     body:
//       "Documentation-first website with high performance search and responsive design.",
//     technologies: ["Next.js", "Tailwind"],
//   },

//   {
//     slug: "saltwater",
//     client: "Saltwater Supply",
//     date: "2023",
//     category: "UI/UX",
//     title: "Inventory System",
//     body:
//       "Enterprise inventory management interface optimized for industrial workflows.",
//     technologies: ["React", "Tauri"],
//   },
// ];

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

//   // Filter projects
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

//   const centerIndex = filtered.length + index;
//   // Current active project
//   const safeIndex =
//     filtered.length > 0
//       ? index % filtered.length
//       : 0;

//   const active = filtered[safeIndex];

//   // Change category
//   function changeCategory(cat) {
//     setCategory(cat);
//     setIndex(0);
//   }

//   // Previous / Next
//   function go(direction) {
//     setIndex((prev) => {
//       if (filtered.length === 0) return 0;

//       return (
//         (prev + direction + filtered.length) %
//         filtered.length
//       );
//     });
//   }

//   // Auto Slide (Only ONE useEffect)
//   useEffect(() => {
//     if (paused) return;
//     if (filtered.length <= 1) return;

//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % filtered.length);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [paused, filtered.length]); const mouseX = useMotionValue(0.5);
//   const mouseY = useMotionValue(0.5);

//   const rotateX = useSpring(
//     useTransform(mouseY, [0, 1], [12, -12]),
//     {
//       stiffness: 180,
//       damping: 18,
//     }
//   );

//   const rotateY = useSpring(
//     useTransform(mouseX, [0, 1], [-14, 14]),
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
//       (e.clientX - rect.left) / rect.width
//     );

//     mouseY.set(
//       (e.clientY - rect.top) / rect.height
//     );

//   }

//   function onCardLeave() {
//     mouseX.set(0.5);
//     mouseY.set(0.5);
//   }

//   const spotX = useMotionValue(50);
//   const spotY = useMotionValue(50);

//   function onSectionMove(e) {

//     if (prefersReducedMotion) return;

//     const rect =
//       sectionRef.current.getBoundingClientRect();

//     spotX.set(
//       ((e.clientX - rect.left) / rect.width) * 100
//     );

//     spotY.set(
//       ((e.clientY - rect.top) / rect.height) * 100
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

//   function onKeyDown(e) {

//     if (e.key === "ArrowLeft") go(-1);

//     if (e.key === "ArrowRight") go(1);

//   }

//   return (
//     <section
//       ref={sectionRef}
//       onMouseMove={onSectionMove}
//       className="relative overflow-hidden py-20 lg:py-28 px-6"
//       style={{
//         background: "#081120",
//         color: "#FFFFFF",
//       }}
//     >
//       <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');

//     .display{
//       font-family:'Fraunces',serif;
//     }

//     .mono{
//       font-family:'IBM Plex Mono',monospace;
//     }

//     .body{
//       font-family:'Inter',sans-serif;
//     }

//     .glass{
//       background:rgba(18,32,61,.72);
//       backdrop-filter:blur(16px);
//       border:1px solid rgba(59,130,246,.18);
//     }

//     .blueGlow{
//       box-shadow:
//       0 0 20px rgba(59,130,246,.20),
//       0 20px 60px rgba(0,0,0,.35);
//     }

//   `}</style>

//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: spotlight,
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto">

//         {/* HEADER */}

//         <div className="flex flex-wrap justify-between items-end gap-8 mb-14">

//           <div>

//             <div className="mono flex items-center gap-2 text-xs tracking-[.25em] text-blue-400 mb-3">

//               <span className="w-2 h-2 rounded-full bg-blue-500" />

//               SELECTED WORK

//             </div>

//             <h2 className="display text-5xl lg:text-6xl font-semibold leading-none">

//               Featured Projects

//             </h2>

//           </div>

//           <a
//             href="/portfolio"
//             className="
//           mono
//           flex
//           items-center
//           gap-2
//           border-b
//           border-blue-500
//           pb-1
//           text-blue-300
//           hover:text-blue-400
//           transition
//         "
//           >

//             View Portfolio

//             <FiArrowUpRight />

//           </a>

//         </div>

//         {/* FILTERS */}

//         <div className="flex flex-wrap gap-4 mb-16">

//           {categories.map((cat) => {

//             const activeTab = cat === category;

//             return (

//               <button
//                 key={cat}
//                 onClick={() => changeCategory(cat)}
//                 className="
//               mono
//               rounded-full
//               px-6
//               py-3
//               text-sm
//               transition-all
//               duration-300
//             "
//                 style={{

//                   background: activeTab
//                     ? "rgba(37,99,235,.18)"
//                     : "transparent",

//                   border: `1px solid ${activeTab
//                     ? "#3B82F6"
//                     : "rgba(255,255,255,.08)"
//                     }`,

//                   color: activeTab
//                     ? "#60A5FA"
//                     : "#94A3B8"

//                 }}
//               >

//                 {cat}

//               </button>

//             );

//           })}

//         </div>

//         {/* COVERFLOW */}

//         <div
//           tabIndex={0}
//           onKeyDown={onKeyDown}
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//           className="
//         relative
//         flex
//         items-center
//         justify-center
//         outline-none
//         mb-16
//       "
//           style={{
//             perspective: 1800,
//             height: 560,
//           }}
//         >

//           {displayProjects.map((project, i) => {
//             const offset = i - centerIndex;

//             const distance = Math.abs(offset);

//             const isActive = offset === 0;

//             if (distance > 3) return null;

//             const animation = prefersReducedMotion
//               ? {
//                 x: offset * 300,
//                 opacity: isActive ? 1 : 0.9,
//                 scale: isActive ? 1 : 0.95,
//               }
//               : {
//                 x: offset * 280,
//                 rotateY: offset * -25,
//                 scale: 1 - distance * 0.08,
//                 opacity: Math.max(0.75, 1 - distance * 0.12),
//                 filter: `blur(${distance * 0.5}px)`,
//               };

//             return (

//               <motion.div
//                 key={project.slug}
//                 animate={animation}
//                 transition={{
//                   type: "spring",
//                   stiffness: 240,
//                   damping: 28,
//                 }}
//                 onClick={() => setIndex(i)}
//                 onMouseMove={
//                   isActive
//                     ? onCardMove
//                     : undefined
//                 }
//                 onMouseLeave={
//                   isActive
//                     ? onCardLeave
//                     : undefined
//                 }
//                 className="
//               absolute
//               cursor-pointer
//             "
//                 style={{

//                   width: 760,
//                   height: 500,
//                   background: "linear-gradient(160deg,#0F172A,#1E293B)",
//                   rotateX: isActive
//                     ? rotateX
//                     : 0,

//                   ...(isActive
//                     ? { rotateY }
//                     : {}),

//                   transformStyle: "preserve-3d",

//                   zIndex: 30 - distance,

//                 }}
//               >       <div
//                 className="glass blueGlow relative overflow-hidden rounded-[28px] w-full h-full p-8 flex flex-col"
//               >
//                   {isActive && (
//                     <motion.div
//                       className="absolute inset-0"
//                       style={{
//                         background: useTransform(
//                           sheenX,
//                           (x) =>
//                             `linear-gradient(
//               120deg,
//               transparent 20%,
//               rgba(255,255,255,.10) ${x},
//               transparent 80%
//             )`
//                         ),
//                       }}
//                     />
//                   )}

//                   {/* TOP */}

//                   <div className="flex items-start justify-between relative z-10">

//                     <div>

//                       <div className="display text-6xl font-bold text-blue-400 mb-2">

//                         {initials(project.client)}

//                       </div>

//                       <p className="mono text-blue-200 text-xs uppercase tracking-[0.25em]">

//                         {project.client}

//                       </p>

//                     </div>

//                     <div className="text-right">

//                       <div className="mono text-xs text-slate-400">

//                         {project.date}

//                       </div>

//                       <div className="mt-2 inline-flex rounded-full bg-blue-500/20 border border-blue-500/40 px-3 py-1 text-[11px] text-blue-300">

//                         {project.category}

//                       </div>

//                     </div>

//                   </div>

//                   {/* CONTENT */}

//                   <div className="relative z-10 mt-10 flex-1 flex flex-col">

//                     <h3 className="display text-4xl leading-tight font-semibold text-white">

//                       {project.title}

//                     </h3>

//                     <p className="body mt-5 text-[15px] leading-7 text-slate-300">

//                       {project.body}

//                     </p>

//                     <div className="flex flex-wrap gap-3 mt-8">

//                       {project.technologies.map((tech) => (

//                         <span
//                           key={tech}
//                           className="
//                         mono
//                         px-4
//                         py-2
//                         rounded-full
//                         text-[11px]
//                         bg-blue-500/10
//                         border
//                         border-blue-500/30
//                         text-blue-200
//                       "
//                         >

//                           {tech}

//                         </span>

//                       ))}

//                     </div>

//                     <div className="mt-auto pt-10">

//                       <button
//                         className="
//                       flex
//                       items-center
//                       gap-3
//                       rounded-full
//                       bg-blue-600
//                       hover:bg-blue-500
//                       px-7
//                       py-3
//                       text-white
//                       font-medium
//                       transition-all
//                       duration-300
//                       hover:scale-105
//                     "
//                       >

//                         View Project

//                         <FiArrowUpRight />

//                       </button>

//                     </div>

//                   </div>

//                 </div>

//               </motion.div>

//             );

//           })}

//         </div>      {/* Navigation */}

//         {/* <div className="flex items-center justify-center gap-6 mb-16">

//           <button
//             onClick={() => go(-1)}
//             className="
//             w-12
//             h-12
//             rounded-full
//             border
//             border-blue-500/30
//             bg-[#0B1C38]
//             text-blue-300
//             hover:bg-blue-600
//             hover:text-white
//             transition-all
//             duration-300
//           "
//           >
//             <FiChevronLeft size={20} />
//           </button>

//           <span className="mono text-sm tracking-[0.2em] text-slate-400">

//             {String(safeIndex + 1).padStart(2, "0")}
//             {" / "}
//             {String(filtered.length).padStart(2, "0")}

//           </span>

//           <button
//             onClick={() => go(1)}
//             className="
//             w-12
//             h-12
//             rounded-full
//             border
//             border-blue-500/30
//             bg-[#0B1C38]
//             text-blue-300
//             hover:bg-blue-600
//             hover:text-white
//             transition-all
//             duration-300
//           "
//           >
//             <FiChevronRight size={20} />
//           </button>

//         </div> */}

//         {/* Progress Bar */}

//         {/* <div className="max-w-xl mx-auto mb-20">
//           <div className="h-1 rounded-full bg-slate-800 overflow-hidden">
//             <motion.div
//               animate={{
//                 width: `${((safeIndex + 1) / filtered.length) * 100}%`,
//               }}
//               transition={{
//                 duration: 0.4,
//               }}
//               className="h-full rounded-full bg-blue-500"
//             />
//           </div>
//         </div> */}

//       </div> {/* max-w-6xl */}

//     </section>
//   );
// }




// // import React from "react";

// // export default function HeroIntroAnimation({
// //   image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80",
// //   eyebrow = "Introducing",
// //   heading = "Built for the way you actually work",
// //   description = "A short supporting line that lands right after the mark settles into place — replace with your real copy.",
// // }) {
// //   return (
// //     <div style={styles.body}>
// //       <style>{css}</style>
// //       <div style={styles.stage}>
// //         <img className="hero-image" src={image} alt="Brand visual" style={styles.heroImage} />

// //         <div className="copy" style={styles.copy}>
// //           <div style={styles.eyebrow}>{eyebrow}</div>
// //           <h1 style={styles.heading}>{heading}</h1>
// //           <p style={styles.description}>{description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   body: {
// //     margin: 0,
// //     height: "100vh",
// //     width: "100%",
// //     background: "#0F0F10",
// //     color: "#F5F3EE",
// //     fontFamily: "'Helvetica Neue', Arial, sans-serif",
// //     overflow: "hidden",
// //   },
// //   stage: {
// //     position: "relative",
// //     height: "100vh",
// //     width: "100%",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   heroImage: {
// //     position: "absolute",
// //     width: 420,
// //     height: 420,
// //     borderRadius: 24,
// //     objectFit: "cover",
// //     boxShadow: "0 30px 60px rgba(0,0,0,.45)",
// //   },
// //   copy: {
// //     position: "relative",
// //     textAlign: "center",
// //     maxWidth: 640,
// //     padding: "0 24px",
// //     opacity: 0,
// //     transform: "translateY(16px)",
// //   },
// //   eyebrow: {
// //     letterSpacing: ".14em",
// //     textTransform: "uppercase",
// //     fontSize: 12,
// //     color: "#E4572E",
// //     marginBottom: 14,
// //   },
// //   heading: {
// //     fontSize: "clamp(28px,5vw,48px)",
// //     lineHeight: 1.1,
// //     margin: "0 0 16px",
// //     fontWeight: 600,
// //   },
// //   description: {
// //     fontSize: 16,
// //     lineHeight: 1.6,
// //     color: "#9C9890",
// //     margin: 0,
// //   },
// // };

// // /* Keyframes and animation assignments live in a plain <style> tag since
// //    inline styles can't express @keyframes. Class names below match the
// //    className props set on the elements above. */
// // const css = `
// // .hero-image{
// //   animation:
// //     slideIn        0.5s cubic-bezier(.22,.68,0,1.01) forwards,
// //     shrinkToLogo    0.6s cubic-bezier(.65,0,.35,1) 0.5s forwards;
// // }

// // @keyframes slideIn{
// //   from{
// //     transform: translateX(60vw) scale(1);
// //     opacity:0;
// //   }
// //   to{
// //     transform: translateX(0) scale(1);
// //     opacity:1;
// //   }
// // }

// // @keyframes shrinkToLogo{
// //   from{
// //     top:50%; left:50%;
// //     transform: translate(-50%,-50%) scale(1);
// //     border-radius:24px;
// //   }
// //   to{
// //     top:32px; left:32px;
// //     transform: translate(0,0) scale(0.1142857); /* 420px -> 48px */
// //     border-radius:12px;
// //   }
// // }

// // .copy{
// //   animation: revealText 0.5s ease-out 1.05s forwards;
// // }

// // @keyframes revealText{
// //   to{ opacity:1; transform:translateY(0); }
// // }

// // @media (prefers-reduced-motion: reduce){
// //   .hero-image, .copy{ animation:none !important; opacity:1 !important; transform:none !important; }
// //   .hero-image{ top:32px; left:32px; width:48px; height:48px; }
// // }
// // `;



// import React from "react";

// export default function HeroIntroAnimation({
//   image = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80",
//   eyebrow = "Introducing",
//   heading = "Built for the way you actually work",
//   description = "A short supporting line that lands right after the mark settles into place — replace with your real copy.",
//   cards = [
//     { title: "Plan", text: "Lay out the work before you touch a single line — scope, sequence, and dependencies first." },
//     { title: "Design", text: "Give every screen a point of view. Decisions should trace back to the brief, not a default." },
//     { title: "Build", text: "Ship in small, reviewable pieces. Working software beats a perfect plan on paper." },
//     { title: "Test", text: "Break it on purpose before someone else does it by accident." },
//     { title: "Launch", text: "Ship, watch, and adjust. The first release is a starting point, not a finish line." },
//   ],
// }) {
//   return (
//     <div style={styles.body}>
//       <style>{css}</style>

//       <div style={styles.stage}>
//         <img className="hero-image" src={image} alt="Brand visual" style={styles.heroImage} />

//         <div className="copy" style={styles.copy}>
//           <div style={styles.eyebrow}>{eyebrow}</div>
//           <h1 style={styles.heading}>{heading}</h1>
//           <p style={styles.description}>{description}</p>
//         </div>
//       </div>

//       <div style={styles.carouselWrap}>
//         <div className="carousel" style={styles.carousel}>
//           <div style={styles.track}>
//             {cards.map((card, i) => (
//               <div className={`card card-${i + 1}`} style={styles.card} key={i}>
//                 <div style={styles.num}>{String(i + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</div>
//                 <h2 style={styles.cardTitle}>{card.title}</h2>
//                 <p style={styles.cardText}>{card.text}</p>
//               </div>
//             ))}
//           </div>
//           <div className="dots" style={styles.dots}>
//             {cards.map((_, i) => (
//               <span className={`dot dot-${i + 1}`} style={styles.dot} key={i} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   body: {
//     margin: 0,
//     minHeight: "100vh",
//     width: "100%",
//     background: "#0F0F10",
//     color: "#F5F3EE",
//     fontFamily: "'Helvetica Neue', Arial, sans-serif",
//     display: "flex",
//     flexDirection: "column",
//   },
//   stage: {
//     position: "relative",
//     height: "100vh",
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//   },
//   heroImage: {
//     position: "absolute",
//     width: 420,
//     height: 420,
//     borderRadius: 24,
//     objectFit: "cover",
//     boxShadow: "0 30px 60px rgba(0,0,0,.45)",
//   },
//   copy: {
//     position: "relative",
//     textAlign: "center",
//     maxWidth: 640,
//     padding: "0 24px",
//     opacity: 0,
//     transform: "translateY(16px)",
//   },
//   eyebrow: {
//     letterSpacing: ".14em",
//     textTransform: "uppercase",
//     fontSize: 12,
//     color: "#E4572E",
//     marginBottom: 14,
//   },
//   heading: {
//     fontSize: "clamp(28px,5vw,48px)",
//     lineHeight: 1.1,
//     margin: "0 0 16px",
//     fontWeight: 600,
//   },
//   description: {
//     fontSize: 16,
//     lineHeight: 1.6,
//     color: "#9C9890",
//     margin: 0,
//   },
//   carouselWrap: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "60px 24px 100px",
//   },
//   carousel: {
//     position: "relative",
//     width: "100%",
//     maxWidth: 340,
//     height: 420,
//   },
//   track: {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//   },
//   card: {
//     position: "absolute",
//     inset: 0,
//     background: "#17171A",
//     border: "1px solid rgba(255,255,255,.06)",
//     borderRadius: 20,
//     padding: "32px 28px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-end",
//     boxShadow: "0 30px 60px rgba(0,0,0,.5)",
//     opacity: 0,
//   },
//   num: {
//     fontSize: 13,
//     letterSpacing: ".14em",
//     textTransform: "uppercase",
//     color: "#E4572E",
//     marginBottom: 12,
//   },
//   cardTitle: {
//     fontSize: 22,
//     lineHeight: 1.25,
//     margin: "0 0 10px",
//     fontWeight: 600,
//   },
//   cardText: {
//     fontSize: 14,
//     lineHeight: 1.55,
//     color: "#9C9890",
//     margin: 0,
//   },
//   dots: {
//     position: "absolute",
//     bottom: -36,
//     left: 0,
//     right: 0,
//     display: "flex",
//     gap: 8,
//     justifyContent: "center",
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: "50%",
//     background: "rgba(255,255,255,.15)",
//   },
// };

// /* Keyframes and staggered animation-delays live in plain CSS since inline
//    styles can't express @keyframes or nth-child selectors. Card count is
//    driven by the `cards` prop, so this CSS is written generically for up
//    to 5 cards — add more .card-N / .dot-N rules below if you pass more. */
// const css = `
// .hero-image{
//   animation:
//     slideIn        0.5s cubic-bezier(.22,.68,0,1.01) forwards,
//     shrinkToLogo    0.6s cubic-bezier(.65,0,.35,1) 0.5s forwards;
// }

// @keyframes slideIn{
//   from{ transform: translateX(60vw) scale(1); opacity:0; }
//   to{ transform: translateX(0) scale(1); opacity:1; }
// }

// @keyframes shrinkToLogo{
//   from{
//     top:50%; left:50%;
//     transform: translate(-50%,-50%) scale(1);
//     border-radius:24px;
//   }
//   to{
//     top:32px; left:32px;
//     transform: translate(0,0) scale(0.1142857); /* 420px -> 48px */
//     border-radius:12px;
//   }
// }

// .copy{
//   animation: revealText 0.5s ease-out 1.05s forwards;
// }

// @keyframes revealText{
//   to{ opacity:1; transform:translateY(0); }
// }

// /* ---------- CARD CAROUSEL: 2s per card, loops forever ---------- */
// .card{
//   animation-duration: 10s; /* 5 cards x 2s */
//   animation-timing-function: ease;
//   animation-iteration-count: infinite;
//   animation-name: cardCycle;
// }
// .card-1{ animation-delay: 0s; }
// .card-2{ animation-delay: 2s; }
// .card-3{ animation-delay: 4s; }
// .card-4{ animation-delay: 6s; }
// .card-5{ animation-delay: 8s; }

// @keyframes cardCycle{
//   0%   { opacity:0; transform:translateX(60px) scale(.96); }
//   5%   { opacity:1; transform:translateX(0) scale(1); }
//   18%  { opacity:1; transform:translateX(0) scale(1); }
//   22%  { opacity:0; transform:translateX(-60px) scale(.96); }
//   100% { opacity:0; transform:translateX(-60px) scale(.96); }
// }

// .dot{
//   animation-duration: 10s;
//   animation-iteration-count: infinite;
//   animation-name: dotPulse;
// }
// .dot-1{ animation-delay: 0s; }
// .dot-2{ animation-delay: 2s; }
// .dot-3{ animation-delay: 4s; }
// .dot-4{ animation-delay: 6s; }
// .dot-5{ animation-delay: 8s; }

// @keyframes dotPulse{
//   0%   { background:rgba(255,255,255,.15); }
//   5%   { background:#E4572E; }
//   20%  { background:#E4572E; }
//   22%  { background:rgba(255,255,255,.15); }
//   100% { background:rgba(255,255,255,.15); }
// }

// @media (prefers-reduced-motion: reduce){
//   .hero-image, .copy{ animation:none !important; opacity:1 !important; transform:none !important; }
//   .hero-image{ top:32px; left:32px; width:48px; height:48px; }
//   .card{ animation:none !important; opacity:1 !important; transform:none !important; position:relative; margin-bottom:16px; }
//   .dots{ display:none; }
// }
// `;



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

// const CARD_W = 950;
// const CARD_H = 530;

// const CENTER_X = CARD_W / 2;
// const CENTER_Y = 250;

// const BIG_SIZE = 950;

// const LOGO_SIZE = 100;
// const LOGO_POS = 40;

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
//     }, 2500);

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
//             gap-8
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
//                               delay: 1.05,
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
//                               text-xs
//                               uppercase
//                               tracking-[0.25em]
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
//                           mt-10
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