
// import { useEffect, useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import {
//   FiArrowUpRight,
//   FiBox,
//   FiCalendar,
//   FiDroplet,
//   FiEdit3,
// } from "react-icons/fi";

// import NeuralHero from "../three/NeuralHero";
// import Button from "../ui/Button";
// import { siteConfig } from "../../data/siteConfig";
// import { products } from "../../data/products";
// import { useTheme } from "../../hooks/useTheme";

// /* =========================================================
//    ANIMATION VARIANTS
// ========================================================= */

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.1,
//     },
//   },
// };

// const item = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },

//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// /* =========================================================
//    EXTRA PRODUCTS
// ========================================================= */

// const extraProducts = [
//   {
//     name: "Timetable",
//     slug: "timetable",
//     category: "Scheduling",
//     description: "Smart timetable management platform",
//     image: "",
//     technologies: [],
//   },

//   {
//     name: "Finding Blood",
//     slug: "finding-blood",
//     category: "Healthcare",
//     description: "Blood donor and blood availability platform",
//     image: "",
//     technologies: [],
//   },

//   {
//     name: "Smart Editor",
//     slug: "smart-editor",
//     category: "AI Platform",
//     description: "AI-powered smart editing platform",
//     image: "",
//     technologies: [],
//   },
// ];

// /* =========================================================
//    COMBINE ALL PRODUCTS
// ========================================================= */

// const heroProducts = [
//   ...products,
//   ...extraProducts,
// ].filter(
//   (product, index, array) =>
//     array.findIndex(
//       (item) =>
//         item.slug?.toLowerCase() ===
//         product.slug?.toLowerCase()
//     ) === index
// );

// /* =========================================================
//    PARTICLES
// ========================================================= */

// const particles = [
//   { left: "8%", top: "18%", delay: 0 },
//   { left: "24%", top: "32%", delay: 0.7 },
//   { left: "42%", top: "12%", delay: 1.2 },
//   { left: "61%", top: "26%", delay: 0.5 },
//   { left: "78%", top: "15%", delay: 1.6 },
//   { left: "91%", top: "38%", delay: 0.9 },
//   { left: "15%", top: "72%", delay: 1.4 },
//   { left: "36%", top: "82%", delay: 0.3 },
//   { left: "57%", top: "68%", delay: 1.8 },
//   { left: "82%", top: "78%", delay: 0.6 },
// ];

// /* =========================================================
//    INTRO
// ========================================================= */

// const INTRO_DURATION_MS = 2600;

// /* =========================================================
//    ROTATION SPEED
// ========================================================= */

// const ORBIT_SPEED = 32;

// /* =========================================================
//    RESPONSIVE RADIUS
// ========================================================= */

// function getOrbitRadius() {
//   if (typeof window === "undefined") {
//     return 250;
//   }

//   if (window.innerWidth < 1024) {
//     return 205;
//   }

//   if (window.innerWidth < 1280) {
//     return 235;
//   }

//   return 250;
// }

// /* =========================================================
//    PRODUCT ICON
// ========================================================= */

// function ProductFallbackIcon({ product }) {
//   const name = product.name?.toLowerCase() || "";

//   if (name.includes("timetable")) {
//     return <FiCalendar size={14} />;
//   }

//   if (
//     name.includes("blood") ||
//     name.includes("finding")
//   ) {
//     return <FiDroplet size={14} />;
//   }

//   if (
//     name.includes("editor") ||
//     name.includes("smart")
//   ) {
//     return <FiEdit3 size={14} />;
//   }

//   return <FiBox size={14} />;
// }

// /* =========================================================
//    PRODUCT LINK
// ========================================================= */

// function ProductLink({ product, children, className }) {
//   return (
//     <Link
//       to="/products"
//       className={className}
//       aria-label={`View ${product.name}`}
//     >
//       {children}
//     </Link>
//   );
// }

// /* =========================================================
//    HERO
// ========================================================= */

// export default function Hero() {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   /* =======================================================
//      LOADING STATE

//      IMPORTANT:

//      Loader appears:
//      - First visit
//      - Real browser refresh / F5 / Ctrl + R

//      Loader DOES NOT appear:
//      - Home -> Contact -> Home
//      - Home -> Services -> Home
//      - Home -> Portfolio -> Home
//      - Any React Router navigation
//   ======================================================= */

//   const [isLoading, setIsLoading] = useState(() => {
//     if (typeof window === "undefined") {
//       return false;
//     }

//     const navigationEntry =
//       performance.getEntriesByType("navigation")[0];

//     const navigationType =
//       navigationEntry?.type;

//     /*
//      * Check whether the intro has already completed
//      * during this browser session.
//      */
//     const introAlreadyShown =
//       sessionStorage.getItem(
//         "desflyer-hero-intro-completed"
//       ) === "true";

//     /*
//      * REAL BROWSER REFRESH
//      *
//      * F5
//      * Ctrl + R
//      * Browser refresh button
//      *
//      * Reset the session flag and show loader.
//      */
//     if (navigationType === "reload") {
//       sessionStorage.removeItem(
//         "desflyer-hero-intro-completed"
//       );

//       return true;
//     }

//     /*
//      * React Router navigation.
//      *
//      * If the intro has already completed,
//      * immediately show the Hero.
//      */
//     if (introAlreadyShown) {
//       return false;
//     }

//     /*
//      * First visit.
//      */
//     return true;
//   });

//   /* =======================================================
//      ORBIT RADIUS
//   ======================================================= */

//   const [orbitRadius, setOrbitRadius] =
//     useState(getOrbitRadius());

//   /* =======================================================
//      RESPONSIVE ORBIT
//   ======================================================= */

//   useEffect(() => {
//     const updateRadius = () => {
//       setOrbitRadius(getOrbitRadius());
//     };

//     updateRadius();

//     window.addEventListener(
//       "resize",
//       updateRadius
//     );

//     return () => {
//       window.removeEventListener(
//         "resize",
//         updateRadius
//       );
//     };
//   }, []);

//   /* =======================================================
//      INTRO TIMER
//   ======================================================= */

//   useEffect(() => {
//     if (!isLoading) return;

//     const timer = window.setTimeout(() => {
//       setIsLoading(false);

//       /*
//        * Mark the intro as completed.
//        *
//        * This is what prevents:
//        *
//        * Home -> Contact -> Home
//        *
//        * from showing the loader again.
//        */
//       sessionStorage.setItem(
//         "desflyer-hero-intro-completed",
//         "true"
//       );
//     }, INTRO_DURATION_MS);

//     return () => {
//       window.clearTimeout(timer);
//     };
//   }, [isLoading]);

//   /* =======================================================
//      BUSINESS TYPING
//   ======================================================= */

//   const [typedBusiness, setTypedBusiness] =
//     useState("");

//   useEffect(() => {
//     if (isLoading) return;

//     const word = "Business";

//     let currentIndex = 0;
//     let deleting = false;
//     let timer;

//     const animateTyping = () => {
//       if (!deleting) {
//         currentIndex += 1;

//         setTypedBusiness(
//           word.substring(
//             0,
//             currentIndex
//           )
//         );

//         if (
//           currentIndex ===
//           word.length
//         ) {
//           timer = setTimeout(() => {
//             deleting = true;
//             animateTyping();
//           }, 1800);

//           return;
//         }

//         timer = setTimeout(
//           animateTyping,
//           110
//         );
//       } else {
//         currentIndex -= 1;

//         setTypedBusiness(
//           word.substring(
//             0,
//             currentIndex
//           )
//         );

//         if (currentIndex === 0) {
//           deleting = false;

//           timer = setTimeout(
//             animateTyping,
//             500
//           );

//           return;
//         }

//         timer = setTimeout(
//           animateTyping,
//           70
//         );
//       }
//     };

//     timer = setTimeout(
//       animateTyping,
//       350
//     );

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [isLoading]);

//   /* =======================================================
//      MEMOIZED PRODUCTS
//   ======================================================= */

//   const rotatingProducts = useMemo(
//     () => heroProducts,
//     []
//   );

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[var(--bg)]">

//       {/* ===================================================
//           BACKGROUND
//       =================================================== */}

//       <div className="absolute inset-0 pointer-events-none overflow-hidden">

//         {/* MAIN GRADIENT */}

//         <div
//           className="absolute inset-0 opacity-80"
//           style={{
//             background: isDark
//               ? `
//                 linear-gradient(
//                   135deg,
//                   rgba(2,6,15,1) 0%,
//                   rgba(3,10,24,1) 45%,
//                   rgba(1,5,13,1) 100%
//                 )
//               `
//               : `
//                 linear-gradient(
//                   135deg,
//                   rgba(248,250,252,1) 0%,
//                   rgba(239,248,255,1) 45%,
//                   rgba(248,250,252,1) 100%
//                 )
//               `,
//           }}
//         />

//         {/* ANGULAR LIGHT */}

//         <motion.div
//           animate={{
//             x: [
//               "-10%",
//               "15%",
//               "-10%",
//             ],
//             opacity: [
//               0.15,
//               0.3,
//               0.15,
//             ],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute left-[-20%] top-[15%] h-[45%] w-[75%] rotate-[-12deg] bg-gradient-to-r from-signal/10 via-signal/5 to-transparent blur-3xl"
//         />

//         {/* BOTTOM BLUE GLOW */}

//         <motion.div
//           animate={{
//             x: [
//               "20%",
//               "-10%",
//               "20%",
//             ],
//             opacity: [
//               0.08,
//               0.2,
//               0.08,
//             ],
//           }}
//           transition={{
//             duration: 14,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-[-20%] right-[-10%] h-[60%] w-[65%] rotate-[8deg] bg-gradient-to-tl from-blue-500/10 via-cyan-400/5 to-transparent blur-3xl"
//         />

//         {/* GRID */}

//         <div
//           className="absolute inset-0 opacity-[0.035]"
//           style={{
//             backgroundImage: `
//               linear-gradient(
//                 to right,
//                 currentColor 1px,
//                 transparent 1px
//               ),
//               linear-gradient(
//                 to bottom,
//                 currentColor 1px,
//                 transparent 1px
//               )
//             `,
//             backgroundSize: "70px 70px",
//           }}
//         />

//         {/* DIAGONAL LINES */}

//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage: `
//               repeating-linear-gradient(
//                 120deg,
//                 currentColor 0px,
//                 currentColor 1px,
//                 transparent 1px,
//                 transparent 80px
//               )
//             `,
//           }}
//         />

//       </div>

//       {/* ===================================================
//           NEURAL BACKGROUND
//       =================================================== */}

//       <div className="absolute inset-0 pointer-events-none opacity-[0.28]">
//         <NeuralHero isDark={isDark} />
//       </div>

//       {/* ===================================================
//           PARTICLES
//       =================================================== */}

//       {!isLoading &&
//         particles.map(
//           (particle, index) => (
//             <motion.span
//               key={index}
//               className="absolute z-[2] h-1 w-1 rounded-full bg-signal pointer-events-none"
//               style={{
//                 left: particle.left,
//                 top: particle.top,
//               }}
//               animate={{
//                 opacity: [
//                   0.15,
//                   0.8,
//                   0.15,
//                 ],
//                 y: [
//                   -15,
//                   15,
//                   -15,
//                 ],
//                 scale: [
//                   0.7,
//                   1.3,
//                   0.7,
//                 ],
//               }}
//               transition={{
//                 duration:
//                   3.5 +
//                   index * 0.25,
//                 repeat: Infinity,
//                 delay:
//                   particle.delay,
//                 ease: "easeInOut",
//               }}
//             />
//           )
//         )}

//       {/* ===================================================
//           LOADING SCREEN
//       =================================================== */}

//       <AnimatePresence>
//         {isLoading && (
//           <motion.div
//             className="fixed inset-0 z-[100] overflow-hidden bg-[var(--bg)]"
//             initial={{
//               x: 0,
//               opacity: 1,
//             }}
//             exit={{
//               x: "100%",
//               opacity: 0,
//               transition: {
//                 duration: 0.7,
//                 ease: [
//                   0.76,
//                   0,
//                   0.24,
//                   1,
//                 ],
//               },
//             }}
//           >

//             {/* LOADING GRID */}

//             <div
//               className="absolute inset-0 opacity-[0.06]"
//               style={{
//                 backgroundImage: `
//                   linear-gradient(
//                     45deg,
//                     currentColor 1px,
//                     transparent 1px
//                   ),
//                   linear-gradient(
//                     -45deg,
//                     currentColor 1px,
//                     transparent 1px
//                   )
//                 `,
//                 backgroundSize:
//                   "100px 100px",
//               }}
//             />

//             {/* MOVING LIGHT */}

//             <motion.div
//               animate={{
//                 x: [
//                   "-20vw",
//                   "120vw",
//                 ],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-signal/50 to-transparent opacity-40"
//             />

//             {/* CENTER */}

//             <div className="absolute inset-0 flex items-center justify-center">

//               {/* PRODUCT ROTATION */}

//               <motion.div
//                 className="relative h-[460px] w-[460px] sm:h-[520px] sm:w-[520px]"
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration:
//                     ORBIT_SPEED,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               >

//                 {rotatingProducts.map(
//                   (
//                     product,
//                     index
//                   ) => {
//                     const angle =
//                       (360 /
//                         rotatingProducts.length) *
//                       index;

//                     const loadingRadius =
//                       typeof window !==
//                         "undefined" &&
//                         window.innerWidth < 640
//                         ? 180
//                         : 220;

//                     const x =
//                       Math.cos(
//                         (angle *
//                           Math.PI) /
//                         180
//                       ) *
//                       loadingRadius;

//                     const y =
//                       Math.sin(
//                         (angle *
//                           Math.PI) /
//                         180
//                       ) *
//                       loadingRadius;

//                     return (
//                       <motion.div
//                         key={
//                           product.slug ||
//                           product.name
//                         }
//                         className="absolute left-1/2 top-1/2"
//                         style={{
//                           marginLeft: x,
//                           marginTop: y,
//                         }}
//                         animate={{
//                           rotate:
//                             -360,
//                         }}
//                         transition={{
//                           duration:
//                             ORBIT_SPEED,
//                           repeat:
//                             Infinity,
//                           ease: "linear",
//                         }}
//                       >

//                         <ProductLink
//                           product={product}
//                           className="group flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-signal/20 bg-[var(--bg)]/90 text-signal shadow-[0_0_25px_rgba(0,220,255,0.08)] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-signal/60 hover:bg-signal/10 hover:scale-110"
//                         >

//                           {product.image ? (
//                             <img
//                               src={
//                                 product.image
//                               }
//                               alt={
//                                 product.name
//                               }
//                               className="h-6 w-6 object-contain"
//                             />
//                           ) : (
//                             <ProductFallbackIcon
//                               product={
//                                 product
//                               }
//                             />
//                           )}

//                         </ProductLink>

//                       </motion.div>
//                     );
//                   }
//                 )}

//               </motion.div>

//               {/* CENTER LOGO */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.7,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 1,
//                   ease: [
//                     0.16,
//                     1,
//                     0.3,
//                     1,
//                   ],
//                 }}
//                 className="absolute z-20 flex h-[180px] w-[180px] items-center justify-center"
//               >

//                 <motion.div
//                   animate={{
//                     opacity: [
//                       0.3,
//                       0.75,
//                       0.3,
//                     ],
//                     scale: [
//                       0.8,
//                       1.15,
//                       0.8,
//                     ],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute h-[170px] w-[170px] rounded-full bg-cyan-400/20 blur-[70px]"
//                 />

//                 <motion.div
//                   animate={{
//                     opacity: [
//                       0.2,
//                       0.55,
//                       0.2,
//                     ],
//                     scale: [
//                       0.9,
//                       1.2,
//                       0.9,
//                     ],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute h-[120px] w-[120px] rounded-full bg-blue-500/30 blur-[50px]"
//                 />

//                 <motion.img
//                   src="/images/portfolio/logo.png"
//                   alt={siteConfig.name}
//                   className="relative z-10 h-[105px] w-[105px] object-contain"
//                   animate={{
//                     y: [
//                       -4,
//                       4,
//                       -4,
//                     ],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   style={{
//                     filter:
//                       "drop-shadow(0 0 30px rgba(0,255,255,0.9)) drop-shadow(0 0 65px rgba(0,180,255,0.55))",
//                   }}
//                 />

//               </motion.div>

//             </div>

//             {/* LOADING TEXT */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 delay: 0.5,
//               }}
//               className="absolute bottom-[9%] left-1/2 -translate-x-1/2 text-center"
//             >

//               <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--fg)]/40">
//                 Welcome To DesFlyer
//               </div>

//               <motion.div
//                 animate={{
//                   width: [
//                     "0%",
//                     "100%",
//                   ],
//                 }}
//                 transition={{
//                   duration:
//                     INTRO_DURATION_MS /
//                     1000,
//                   ease: "linear",
//                 }}
//                 className="mt-3 h-px bg-signal"
//               />

//             </motion.div>

//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ===================================================
//           MAIN HERO
//       =================================================== */}

//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate={
//           isLoading
//             ? "hidden"
//             : "show"
//         }
//         className="relative z-10 mx-auto w-full max-w-[1500px] px-6 lg:px-10 xl:px-14"
//       >

//         <div className="grid min-h-[calc(100vh-5rem)] items-center gap-8 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-2 xl:gap-6">

//           {/* =================================================
//               LEFT — ADVANCED ANIMATED CONTENT
//           ================================================= */}

//           <div className="relative z-20 max-w-[650px]">

//             {/* LOCAL PARTICLES */}

//             <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">

//               {[
//                 { x: "4%", y: "8%", delay: 0 },
//                 { x: "92%", y: "12%", delay: 0.7 },
//                 { x: "18%", y: "35%", delay: 1.1 },
//                 { x: "82%", y: "42%", delay: 1.8 },
//                 { x: "6%", y: "72%", delay: 0.4 },
//                 { x: "74%", y: "76%", delay: 1.4 },
//                 { x: "42%", y: "88%", delay: 2 },
//                 { x: "96%", y: "65%", delay: 0.9 },
//               ].map((particle, index) => (
//                 <motion.span
//                   key={index}
//                   className="absolute h-[3px] w-[3px] rounded-full bg-signal"
//                   style={{
//                     left: particle.x,
//                     top: particle.y,
//                   }}
//                   animate={{
//                     opacity: [0, 0.8, 0],
//                     scale: [0.5, 1.5, 0.5],
//                     y: [-8, 8, -8],
//                     x: [-3, 3, -3],
//                   }}
//                   transition={{
//                     duration: 3 + index * 0.3,
//                     repeat: Infinity,
//                     delay: particle.delay,
//                     ease: "easeInOut",
//                   }}
//                 />
//               ))}

//               <motion.div
//                 animate={{
//                   opacity: [0.05, 0.16, 0.05],
//                   scale: [0.9, 1.08, 0.9],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-[-15%] top-[18%] h-[320px] w-[520px] rounded-full bg-signal/20 blur-[120px]"
//               />

//             </div>

//             {/* STATUS */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 20,
//                 filter: "blur(10px)",
//               }}
//               animate={
//                 isLoading
//                   ? {
//                     opacity: 0,
//                     y: 20,
//                     filter: "blur(10px)",
//                   }
//                   : {
//                     opacity: 1,
//                     y: 0,
//                     filter: "blur(0px)",
//                   }
//               }
//               transition={{
//                 duration: 0.8,
//                 delay: 0.1,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="relative mb-3 mt-3 inline-flex"
//             >

//               <div className="relative mt-7 flex items-center gap-3 overflow-hidden rounded-full border border-signal/20 bg-signal/[0.035] px-4 py-2 backdrop-blur-md">

//                 <span className="relative flex h-2 w-2">

//                   <motion.span
//                     animate={{
//                       scale: [1, 2.4, 1],
//                       opacity: [0.6, 0, 0.6],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       ease: "easeOut",
//                     }}
//                     className="absolute inset-0 rounded-full bg-signal"
//                   />

//                   <motion.span
//                     animate={{
//                       opacity: [0.6, 1, 0.6],
//                     }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                     }}
//                     className="relative h-2 w-2 rounded-full bg-signal shadow-[0_0_15px_rgba(0,220,255,1)]"
//                   />

//                 </span>

//                 <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-signal">
//                   Available for new projects
//                 </span>

//               </div>

//             </motion.div>

//             {/* MAIN HEADING */}

//             <motion.h1
//               initial="hidden"
//               animate={isLoading ? "hidden" : "show"}
//               className="relative  font-display  font-bold leading-[0.99]  text-[var(--fg)]"
//             >

//               {/* LINE 1 */}

//               <div className="relative overflow-hidden ">

//                 <motion.div
//                   variants={{
//                     hidden: {
//                       y: "110%",
//                       opacity: 0,
//                       rotateX: 70,
//                     },
//                     show: {
//                       y: "0%",
//                       opacity: 1,
//                       rotateX: 0,
//                       transition: {
//                         duration: 1,
//                         ease: [0.16, 1, 0.3, 1],
//                       },
//                     },
//                   }}
//                   style={{
//                     transformOrigin: "bottom",
//                   }}
//                   className="text-[clamp(2.8rem,5vw,5.4rem)]"
//                 >
//                   Innovative
//                 </motion.div>

//               </div>

//               {/* LINE 2 */}

//               <div className="relative mt-1 overflow-hidden">

//                 <motion.div
//                   variants={{
//                     hidden: {
//                       y: "110%",
//                       opacity: 0,
//                       rotateX: 70,
//                     },
//                     show: {
//                       y: "0%",
//                       opacity: 1,
//                       rotateX: 0,
//                       transition: {
//                         duration: 1,
//                         delay: 0.12,
//                         ease: [0.16, 1, 0.3, 1],
//                       },
//                     },
//                   }}
//                   style={{
//                     transformOrigin: "bottom",
//                   }}
//                   className="text-[clamp(2.8rem,5vw,5.4rem)]"
//                 >

//                   <span
//                     className="text-transparent"
//                     style={{
//                       WebkitTextStroke:
//                         "1px rgba(120,190,255,0.65)",
//                     }}
//                   >
//                     Software
//                   </span>

//                 </motion.div>

//               </div>

//               {/* LINE 3 */}

//               <div className="relative mt-1 overflow-hidden ">

//                 <motion.div
//                   variants={{
//                     hidden: {
//                       y: "110%",
//                       opacity: 0,
//                     },
//                     show: {
//                       y: "0%",
//                       opacity: 1,
//                       transition: {
//                         duration: 1,
//                         delay: 0.24,
//                         ease: [0.16, 1, 0.3, 1],
//                       },
//                     },
//                   }}
//                   className="text-[clamp(2.8rem,5vw,5.4rem)]"
//                 >

//                   <span className="relative inline-block">

//                     <motion.span
//                       animate={{
//                         opacity: [0.1, 0.45, 0.1],
//                         scale: [0.95, 1.06, 0.95],
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="absolute inset-0 bg-signal/30 blur-2xl"
//                     />

//                     <span className="relative z-10 bg-gradient-to-r from-signal via-cyan-300 to-blue-500 bg-clip-text text-transparent">
//                       Solutions
//                     </span>

//                   </span>

//                 </motion.div>

//               </div>

//               {/* LINE 4 */}

//               <div className="relative mt-1 overflow-hidden ">

//                 <motion.div
//                   variants={{
//                     hidden: {
//                       y: "110%",
//                       opacity: 0,
//                       rotateX: 70,
//                     },
//                     show: {
//                       y: "0%",
//                       opacity: 1,
//                       rotateX: 0,
//                       transition: {
//                         duration: 1,
//                         delay: 0.36,
//                         ease: [0.16, 1, 0.3, 1],
//                       },
//                     },
//                   }}
//                   style={{
//                     transformOrigin: "bottom",
//                   }}
//                   className="mb-5 mt-2 text-[clamp(2rem,3.4vw,3.8rem)] xl:text-[50px]"
//                 >

//                   <span className="text-[var(--fg)]/80">
//                     for your{" "}
//                   </span>

//                   <span className="relative inline-block">

//                     <motion.span
//                       animate={{
//                         opacity: [0.1, 0.5, 0.1],
//                         scale: [0.95, 1.08, 0.95],
//                       }}
//                       transition={{
//                         duration: 3.5,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="absolute inset-0 bg-blue-500/30 blur-2xl"
//                     />

//                     <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-signal bg-clip-text text-transparent">
//                       Business
//                     </span>

//                   </span>

//                 </motion.div>

//               </div>

//               {/* TECHNICAL LINE */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   width: 0,
//                 }}
//                 animate={
//                   isLoading
//                     ? {
//                       opacity: 0,
//                       width: 0,
//                     }
//                     : {
//                       opacity: 1,
//                       width: 150,
//                     }
//                 }
//                 transition={{
//                   duration: 1,
//                   delay: 0.8,
//                 }}
//                 className="-mt-5 h-px bg-gradient-to-r from-signal via-signal/30 to-transparent"
//               />

//             </motion.h1>

//             {/* DESCRIPTION */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 25,
//                 filter: "blur(8px)",
//               }}
//               animate={
//                 isLoading
//                   ? {
//                     opacity: 0,
//                     y: 25,
//                     filter: "blur(8px)",
//                   }
//                   : {
//                     opacity: 1,
//                     y: 0,
//                     filter: "blur(0px)",
//                   }
//               }
//               transition={{
//                 duration: 0.9,
//                 delay: 0.7,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="relative mt-5 max-w-xl"
//             >

//               <motion.div
//                 animate={{
//                   opacity: [0.2, 0.8, 0.2],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                 }}
//                 className="absolute -left-4 top-1 h-14 w-px bg-gradient-to-b from-signal via-signal/30 to-transparent"
//               />

//               <p className="text-sm leading-7 text-[var(--fg)]/60 sm:text-base">
//                 From the first idea to the final experience, we combine{" "}
//                 <span className="text-[var(--fg)]">design,</span>{" "}
//                 <span className="text-signal">technology,</span>{" "}
//                 and{" "}
//                 <span className="text-[var(--fg)]">
//                   intelligent engineering
//                 </span>{" "}
//                 to create digital products built for what comes next.
//               </p>

//             </motion.div>

//             {/* STATS */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={
//                 isLoading
//                   ? {
//                     opacity: 0,
//                     y: 20,
//                   }
//                   : {
//                     opacity: 1,
//                     y: 0,
//                   }
//               }
//               transition={{
//                 duration: 0.8,
//                 delay: 0.9,
//               }}
//               className="mt-8 grid max-w-[560px] grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0"
//             >

//               {[
//                 {
//                   value: "50+",
//                   label: "Projects",
//                 },
//                 {
//                   value: "30+",
//                   label: "Clients",
//                 },
//                 {
//                   value: "5+",
//                   label: "Industries",
//                 },
//                 {
//                   value: "100%",
//                   label: "Commitment",
//                 },
//               ].map((stat, index) => (

//                 <motion.div
//                   key={stat.label}
//                   initial={{
//                     opacity: 0,
//                     y: 20,
//                   }}
//                   animate={
//                     isLoading
//                       ? {
//                         opacity: 0,
//                         y: 20,
//                       }
//                       : {
//                         opacity: 1,
//                         y: 0,
//                       }
//                   }
//                   transition={{
//                     duration: 0.6,
//                     delay: 1 + index * 0.12,
//                   }}
//                   whileHover={{
//                     y: -4,
//                   }}
//                   className={`relative ${index !== 0
//                     ? "sm:border-l sm:border-[var(--fg)]/10 sm:pl-5"
//                     : ""
//                     }`}
//                 >

//                   <div className="font-display text-2xl font-bold tracking-tight text-signal">
//                     {stat.value}
//                   </div>

//                   <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--fg)]/40">
//                     {stat.label}
//                   </div>

//                   <motion.div
//                     animate={{
//                       x: ["-100%", "100%"],
//                     }}
//                     transition={{
//                       duration: 2.5,
//                       repeat: Infinity,
//                       delay: index * 0.5,
//                       ease: "linear",
//                     }}
//                     className="absolute bottom-[-5px] left-0 h-px w-8 bg-gradient-to-r from-transparent via-signal to-transparent opacity-40"
//                   />

//                 </motion.div>

//               ))}

//             </motion.div>

//             {/* CTA BUTTONS */}


//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               animate={
//                 isLoading
//                   ? {
//                     opacity: 0,
//                     y: 25,
//                   }
//                   : {
//                     opacity: 1,
//                     y: 0,
//                   }
//               }
//               transition={{
//                 duration: 0.8,
//                 delay: 1.25,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="mt-8 flex flex-wrap items-center gap-3"
//             >
//               {/* ==================================================
//       EXPLORE SERVICES
//   ================================================== */}

//               <motion.div
//                 whileHover={{
//                   scale: 1.03,
//                   x: 4,
//                 }}
//                 whileTap={{
//                   scale: 0.97,
//                 }}
//               >
//                 <Button
//                   to="/services"
//                   className="
//   group
//   relative
//   overflow-hidden
//   rounded-xl
//   border
//   border-blue-500/30
//   bg-blue-500/[0.07]
//   px-5
//   py-2
//   backdrop-blur-md
//   transition-all
//   duration-500
//   hover:border-blue-400/70
//   hover:bg-blue-500/20
//   hover:shadow-[0_0_40px_rgba(37,99,235,0.18)]
//   sm:px-6
//   sm:py-2.5
// "
//                 >
//                   {/* LIGHT SWEEP */}

//                   <motion.span
//                     className="
//           absolute
//           inset-y-0
//           left-[-100%]
//           w-[60%]
//           skew-x-[-20deg]
//           bg-gradient-to-r
//           from-transparent
//           via-white/[0.14]
//           to-transparent
//         "
//                     animate={{
//                       left: [
//                         "-100%",
//                         "140%",
//                       ],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatDelay: 3,
//                     }}
//                   />

//                   {/* CONTENT */}

//                   <span
//                     className="
//           relative
//           z-10
//           flex
//           items-center
//           gap-6
//         "
//                   >
//                     <span className="flex flex-col items-start">

//                       {/* <span
//             className="
//               font-mono
//               text-[8px]
//               uppercase
//               tracking-[0.28em]
//               text-blue-400
//             "
//           >
//             Explore
//           </span> */}

//                       <span
//                         className="
//               mt-0.5
//               text-sm
//               font-semibold
//               tracking-wide
//               text-white
//             "
//                         style={{
//                           fontFamily:
//                             '"Chakra Petch", sans-serif',
//                         }}
//                       >
//                         View Services
//                       </span>

//                     </span>

//                     {/* ARROW */}
//                     <span
//                       className="
//     flex
//     h-8
//     w-8
//     items-center
//     justify-center
//     rounded-full
//     border
//     border-blue-400/30
//     bg-blue-500/10
//     text-blue-400
//   "
//                     >
//                       <FiArrowUpRight size={14} />
//                     </span>
//                   </span>
//                 </Button>
//               </motion.div>


//               {/* ==================================================
//       VIEW PORTFOLIO
//   ================================================== */}

//               <motion.div
//                 whileHover={{
//                   scale: 1.03,
//                   x: 4,
//                 }}
//                 whileTap={{
//                   scale: 0.97,
//                 }}
//               >
//                 <Button
//                   to="/portfolio"
//                   variant="outline"
//                   className="
//   group
//   relative
//   overflow-hidden
//   rounded-xl
//   border
//   border-blue-500/30
//   bg-blue-500/[0.07]
//   px-5
//   py-2
//   backdrop-blur-md
//   transition-all
//   duration-500
//   hover:border-blue-400/70
//   hover:bg-blue-500/20
//   hover:shadow-[0_0_40px_rgba(37,99,235,0.18)]
//   sm:px-6
//   sm:py-2.5
// "
//                 >
//                   {/* LIGHT SWEEP */}

//                   <motion.span
//                     className="
//           absolute
//           inset-y-0
//           left-[-100%]
//           w-[60%]
//           skew-x-[-20deg]
//           bg-gradient-to-r
//           from-transparent
//           via-white/[0.10]
//           to-transparent
//         "
//                     animate={{
//                       left: [
//                         "-100%",
//                         "140%",
//                       ],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatDelay: 4,
//                       delay: 1,
//                     }}
//                   />

//                   {/* CONTENT */}

//                   <span
//                     className="
//           relative
//           z-10
//           flex
//           items-center
//           gap-6
//         "
//                   >
//                     <span className="flex flex-col items-start">

//                       {/* <span
//             className="
//               font-mono
//               text-[8px]
//               uppercase
//               tracking-[0.28em]
//               text-blue-400/80
//             "
//           >
//             Discover
//           </span> */}

//                       <span
//                         className="
//               mt-0.5
//               text-sm
//               font-semibold
//               tracking-wide
//               text-white
//             "
//                         style={{
//                           fontFamily:
//                             '"Chakra Petch", sans-serif',
//                         }}
//                       >
//                         View Portfolio
//                       </span>

//                     </span>

//                     {/* ARROW */}

//                     <span
//                       className="
//     flex
//     h-8
//     w-8
//     items-center
//     justify-center
//     rounded-full
//     border
//     border-blue-400/30
//     bg-blue-500/10
//     text-blue-400
//   "
//                     >
//                       <FiArrowUpRight size={14} />
//                     </span>

//                   </span>
//                 </Button>
//               </motion.div>
//             </motion.div>

//             {/* BOTTOM TECHNICAL LABEL */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 10,
//               }}
//               animate={
//                 isLoading
//                   ? {
//                     opacity: 0,
//                     y: 10,
//                   }
//                   : {
//                     opacity: [0.25, 0.65, 0.25],
//                     y: 0,
//                   }
//               }
//               transition={{
//                 opacity: {
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//                 duration: 0.7,
//                 delay: 1.5,
//               }}
//               className="mt-8 flex items-center gap-3"
//             >

//               <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-[var(--fg)]/30">
//                 Engineered for the future
//               </span>

//               <span className="h-px w-12 bg-gradient-to-r from-signal/40 to-transparent" />

//               <motion.span
//                 animate={{
//                   opacity: [0.2, 1, 0.2],
//                 }}
//                 transition={{
//                   duration: 1.8,
//                   repeat: Infinity,
//                 }}
//                 className="h-1 w-1 rounded-full bg-signal"
//               />

//             </motion.div>

//           </div>

//           {/* =================================================
//               RIGHT PRODUCT ROTATION
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 40,
//               scale: 0.94,
//             }}
//             animate={
//               isLoading
//                 ? {
//                   opacity: 0,
//                   x: 40,
//                   scale: 0.94,
//                 }
//                 : {
//                   opacity: 1,
//                   x: 0,
//                   scale: 1,
//                 }
//             }
//             transition={{
//               duration: 1,
//               delay: isLoading
//                 ? 0
//                 : 0.15,
//               ease: [
//                 0.16,
//                 1,
//                 0.3,
//                 1,
//               ],
//             }}
//             className="relative hidden h-[680px] min-w-0 items-center justify-center lg:flex"
//           >

//             {/* TECHNICAL BACKGROUND */}

//             {/* =========================================================
//     RIGHT — ADVANCED TECHNICAL FIELD
// ========================================================= */}

//             <div className="absolute inset-0 pointer-events-none">

//               {/* LARGE ATMOSPHERIC GLOW */}
//               <motion.div
//                 animate={{
//                   opacity: [0.18, 0.32, 0.18],
//                   scale: [0.92, 1.05, 0.92],
//                 }}
//                 transition={{
//                   duration: 7,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-[120px]"
//               />

//               {/* LARGE SOFT BLUE FIELD */}
//               <motion.div
//                 animate={{
//                   x: [-30, 30, -30],
//                   y: [20, -20, 20],
//                   opacity: [0.08, 0.18, 0.08],
//                 }}
//                 transition={{
//                   duration: 11,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute right-[-5%] top-[8%] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[100px]"
//               />

//               {/* TECHNICAL GRID */}
//               <div
//                 className="absolute inset-[5%] opacity-[0.055]"
//                 style={{
//                   backgroundImage: `
//         linear-gradient(
//           to right,
//           currentColor 1px,
//           transparent 1px
//         ),
//         linear-gradient(
//           to bottom,
//           currentColor 1px,
//           transparent 1px
//         )
//       `,
//                   backgroundSize: "55px 55px",
//                   maskImage:
//                     "radial-gradient(circle at center, black 20%, transparent 78%)",
//                   WebkitMaskImage:
//                     "radial-gradient(circle at center, black 20%, transparent 78%)",
//                 }}
//               />

//               {/* DIAGONAL TECH LINES */}
//               <div
//                 className="absolute inset-0 opacity-[0.04]"
//                 style={{
//                   backgroundImage: `
//         repeating-linear-gradient(
//           135deg,
//           currentColor 0px,
//           currentColor 1px,
//           transparent 1px,
//           transparent 75px
//         )
//       `,
//                 }}
//               />

//               {/* HORIZONTAL SCAN LINE */}
//               <motion.div
//                 animate={{
//                   y: ["-20%", "120%"],
//                   opacity: [0, 0.5, 0],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
//               />

//               {/* VERTICAL LIGHT BEAM */}
//               <motion.div
//                 animate={{
//                   x: ["-40%", "40%", "-40%"],
//                   opacity: [0, 0.3, 0],
//                 }}
//                 transition={{
//                   duration: 9,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute left-1/2 top-[5%] h-[90%] w-px bg-gradient-to-b from-transparent via-signal/30 to-transparent"
//               />

//               {/* TOP LEFT TECH CORNER */}
//               <div className="absolute left-[4%] top-[10%] h-14 w-14">
//                 <div className="absolute left-0 top-0 h-px w-14 bg-signal/30" />
//                 <div className="absolute left-0 top-0 h-14 w-px bg-signal/30" />

//                 <span className="absolute left-3 top-3 font-mono text-[6px] tracking-[0.2em] text-signal/40">
//                   SYS_01
//                 </span>
//               </div>

//               {/* TOP RIGHT TECH CORNER */}
//               <div className="absolute right-[4%] top-[10%] h-14 w-14">
//                 <div className="absolute right-0 top-0 h-px w-14 bg-signal/30" />
//                 <div className="absolute right-0 top-0 h-14 w-px bg-signal/30" />

//                 <span className="absolute right-3 top-3 font-mono text-[6px] tracking-[0.2em] text-signal/40">
//                   CORE
//                 </span>
//               </div>

//               {/* BOTTOM LEFT TECH CORNER */}
//               <div className="absolute bottom-[10%] left-[4%] h-14 w-14">
//                 <div className="absolute bottom-0 left-0 h-px w-14 bg-signal/20" />
//                 <div className="absolute bottom-0 left-0 h-14 w-px bg-signal/20" />
//               </div>

//               {/* BOTTOM RIGHT TECH CORNER */}
//               <div className="absolute bottom-[10%] right-[4%] h-14 w-14">
//                 <div className="absolute bottom-0 right-0 h-px w-14 bg-signal/20" />
//                 <div className="absolute bottom-0 right-0 h-14 w-px bg-signal/20" />
//               </div>

//               {/* LEFT DATA MARKERS */}
//               <div className="absolute left-[3%] top-[34%] space-y-3">
//                 {["01", "02", "03", "04"].map((item, index) => (
//                   <motion.div
//                     key={item}
//                     animate={{
//                       opacity: [0.2, 0.7, 0.2],
//                     }}
//                     transition={{
//                       duration: 2.5,
//                       delay: index * 0.4,
//                       repeat: Infinity,
//                     }}
//                     className="flex items-center gap-2"
//                   >
//                     <span className="h-px w-5 bg-signal/30" />

//                     <span className="font-mono text-[6px] tracking-[0.15em] text-signal/35">
//                       {item}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* RIGHT DATA MARKERS */}
//               <div className="absolute right-[3%] top-[40%] space-y-4 text-right">
//                 <div className="font-mono text-[6px] tracking-[0.18em] text-[var(--fg)]/20">
//                   DIGITAL
//                 </div>

//                 <div className="font-mono text-[6px] tracking-[0.18em] text-signal/35">
//                   SYSTEM
//                 </div>

//                 <div className="flex items-center justify-end gap-2">
//                   <span className="h-px w-8 bg-signal/25" />
//                   <span className="h-1 w-1 rounded-full bg-signal/50" />
//                 </div>
//               </div>

//               {/* BOTTOM STATUS BAR */}
//               <div className="absolute bottom-[5%] left-1/2 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap">

//                 <span className="font-mono text-[6px] uppercase tracking-[0.25em] text-[var(--fg)]/20">
//                   SYSTEM
//                 </span>

//                 <span className="h-px w-10 bg-signal/20" />

//                 <motion.span
//                   animate={{
//                     opacity: [0.25, 1, 0.25],
//                   }}
//                   transition={{
//                     duration: 1.8,
//                     repeat: Infinity,
//                   }}
//                   className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_12px_rgba(0,220,255,0.8)]"
//                 />

//                 <span className="font-mono text-[6px] uppercase tracking-[0.25em] text-signal/35">
//                   ONLINE
//                 </span>

//               </div>

//             </div>

//             {/* PRODUCT ROTATION */}

//             <motion.div
//               className="absolute left-1/2 top-1/2 z-10"
//               style={{
//                 width:
//                   orbitRadius * 2,
//                 height:
//                   orbitRadius * 2,
//                 marginLeft:
//                   -orbitRadius,
//                 marginTop:
//                   -orbitRadius,
//               }}
//               animate={{
//                 rotate: 360,
//               }}
//               transition={{
//                 duration:
//                   ORBIT_SPEED,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             >

//               {rotatingProducts.map(
//                 (
//                   product,
//                   index
//                 ) => {

//                   const angle =
//                     (360 /
//                       rotatingProducts.length) *
//                     index;

//                   const x =
//                     Math.cos(
//                       (angle *
//                         Math.PI) /
//                       180
//                     ) *
//                     orbitRadius;

//                   const y =
//                     Math.sin(
//                       (angle *
//                         Math.PI) /
//                       180
//                     ) *
//                     orbitRadius;

//                   return (
//                     <div
//                       key={
//                         product.slug ||
//                         product.name
//                       }
//                       className="absolute left-1/2 top-1/2"
//                       style={{
//                         transform: `
//                           translate(-50%, -50%)
//                           translate(${x}px, ${y}px)
//                         `,
//                       }}
//                     >

//                       <motion.div
//                         animate={{
//                           rotate:
//                             -360,
//                         }}
//                         transition={{
//                           duration:
//                             ORBIT_SPEED,
//                           repeat:
//                             Infinity,
//                           ease: "linear",
//                         }}
//                       >

//                         <ProductLink
//                           product={product}
//                           className="group flex w-[120px] items-center gap-2 rounded-xl border border-signal/15 bg-[var(--bg)]/85 px-2 py-2 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-signal/45 hover:bg-signal/[0.07] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,220,255,0.12)]"
//                         >

//                           <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-signal/15 bg-signal/[0.06] text-signal transition-all duration-300 group-hover:border-signal/40 group-hover:bg-signal/10">

//                             {product.image ? (
//                               <img
//                                 src={
//                                   product.image
//                                 }
//                                 alt={
//                                   product.name
//                                 }
//                                 className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
//                               />
//                             ) : (
//                               <ProductFallbackIcon
//                                 product={
//                                   product
//                                 }
//                               />
//                             )}

//                           </span>

//                           <span className="flex min-w-0 flex-col">

//                             <span className="truncate font-mono text-[8px] uppercase tracking-[0.08em] text-[var(--fg)]/75">
//                               {
//                                 product.name
//                               }
//                             </span>

//                             <span className="mt-0.5 truncate font-mono text-[6px] uppercase tracking-[0.06em] text-signal/55">
//                               {
//                                 product.category ||
//                                 "Product"
//                               }
//                             </span>

//                           </span>

//                         </ProductLink>

//                       </motion.div>

//                     </div>
//                   );
//                 }
//               )}

//             </motion.div>

//             {/* CENTER LOGO */}

//             <motion.div
//               animate={{
//                 y: [
//                   -6,
//                   6,
//                   -6,
//                 ],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative z-30 flex h-[235px] w-[235px] items-center justify-center"
//             >

//               {/* LARGE GLOW */}

//               <motion.div
//                 animate={{
//                   opacity: [
//                     0.25,
//                     0.7,
//                     0.25,
//                   ],
//                   scale: [
//                     0.8,
//                     1.15,
//                     0.8,
//                   ],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute h-[220px] w-[220px] rounded-full bg-cyan-400/15 blur-[85px]"
//               />

//               {/* SECOND GLOW */}

//               <motion.div
//                 animate={{
//                   opacity: [
//                     0.2,
//                     0.55,
//                     0.2,
//                   ],
//                   scale: [
//                     0.85,
//                     1.2,
//                     0.85,
//                   ],
//                 }}
//                 transition={{
//                   duration: 4.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute h-[170px] w-[170px] rounded-full bg-blue-500/20 blur-[65px]"
//               />

//               {/* INNER GLOW */}

//               <motion.div
//                 animate={{
//                   opacity: [
//                     0.2,
//                     0.5,
//                     0.2,
//                   ],
//                   scale: [
//                     0.9,
//                     1.1,
//                     0.9,
//                   ],
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute h-[120px] w-[120px] rounded-full bg-signal/15 blur-[40px]"
//               />

//               {/* LOGO */}

//               <motion.img
//                 src="/images/portfolio/llogo.png"
//                 alt={siteConfig.name}
//                 className="relative z-10 h-[500px] w-[500px] object-contain"
//                 animate={{
//                   rotateY: [
//                     0,
//                     5,
//                     0,
//                     -5,
//                     0,
//                   ],
//                   rotateX: [
//                     0,
//                     3,
//                     0,
//                     -3,
//                     0,
//                   ],
//                 }}
//                 transition={{
//                   duration: 8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 style={{
//                   transformStyle:
//                     "preserve-3d",
//                   filter:
//                     "drop-shadow(0 0 30px rgba(0,255,255,0.9)) drop-shadow(0 0 70px rgba(0,180,255,0.55)) drop-shadow(0 0 110px rgba(0,120,255,0.25))",
//                 }}
//               />

//             </motion.div>

//             {/* CENTER LABEL */}

//             <motion.div
//               animate={{
//                 opacity: [
//                   0.3,
//                   0.8,
//                   0.3,
//                 ],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-[7%] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.3em] text-signal/40"
//             >
//               DIGITAL PRODUCT SYSTEM
//             </motion.div>

//           </motion.div>

//         </div>

//       </motion.div>

//       {/* ===================================================
//           SCROLL INDICATOR
//       =================================================== */}

//       {/* <motion.div
//         initial={{
//           opacity: 0,
//           y: 10,
//         }}
//         animate={
//           isLoading
//             ? {
//                 opacity: 0,
//                 y: 10,
//               }
//             : {
//                 opacity: 1,
//                 y: 0,
//               }
//         }
//         transition={{
//           delay: 1.8,
//           duration: 0.8,
//         }}
//         className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
//       >

//         <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[var(--fg)]/30">
//           Scroll to explore
//         </span>

//         <motion.div
//           animate={{
//             y: [
//               0,
//               6,
//               0,
//             ],
//           }}
//           transition={{
//             duration: 1.6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="flex h-8 w-5 items-center justify-center rounded-full border border-[var(--fg)]/15"
//         >

//           <span className="h-2 w-2 rotate-45 border-r border-b border-signal/70" />

//         </motion.div>

//       </motion.div> */}

//       {/* ===================================================
//           BOTTOM FADE
//       =================================================== */}

//       <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-[var(--bg)] to-transparent" />

//     </section>
//   );
// }


















import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiPause,
  FiPlay,
  FiVolume2,
} from "react-icons/fi";

import Button from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";
import { useTheme } from "../../hooks/useTheme";

const INTRO_DURATION_MS = 1800;
const HERO_VIDEO = "/videos/desflyer-hero.mp4";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const videoRef = useRef(null);

  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return false;

    const navigationEntry =
      performance.getEntriesByType("navigation")[0];

    const navigationType = navigationEntry?.type;

    const introAlreadyShown =
      sessionStorage.getItem(
        "desflyer-hero-intro-completed"
      ) === "true";

    if (navigationType === "reload") {
      sessionStorage.removeItem(
        "desflyer-hero-intro-completed"
      );

      return true;
    }

    if (introAlreadyShown) {
      return false;
    }

    return true;
  });

  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const timer = window.setTimeout(() => {
      setIsLoading(false);

      sessionStorage.setItem(
        "desflyer-hero-intro-completed",
        "true"
      );
    }, INTRO_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [isLoading]);

  const handleVideoPlayPause = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  const handleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setVideoMuted(video.muted);
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--bg)]
        text-[var(--fg)]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main gradient light */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: isDark ? 0.4 : 0.2,
            scale: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="
            absolute
            right-[-15%]
            top-[25%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/20
            blur-[140px]
          "
        />

        {/* Secondary cyan light */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-15%]
            top-[10%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-400/10
            blur-[120px]
          "
        />

        {/* Very subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(100,180,255,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(100,180,255,0.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Small ambient dots */}
        <motion.span
          animate={{
            opacity: [0.15, 0.6, 0.15],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[12%]
            top-[28%]
            h-1
            w-1
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_rgba(34,211,238,0.8)]
          "
        />

        <motion.span
          animate={{
            opacity: [0.2, 0.7, 0.2],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[9%]
            top-[20%]
            h-1
            w-1
            rounded-full
            bg-blue-400
            shadow-[0_0_12px_rgba(59,130,246,0.8)]
          "
        />

        <motion.span
          animate={{
            opacity: [0.15, 0.5, 0.15],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[22%]
            left-[45%]
            h-1
            w-1
            rounded-full
            bg-cyan-400
          "
        />
      </div>

      {/* =====================================================
          INTRO SCREEN
      ===================================================== */}

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.55,
                ease: "easeInOut",
              },
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              overflow-hidden
              bg-[var(--bg)]
            "
          >
            {/* Intro glow */}
            <motion.div
              initial={{
                scale: 0.4,
                opacity: 0,
              }}
              animate={{
                scale: 1.2,
                opacity: 0.45,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="
                absolute
                h-[320px]
                w-[320px]
                rounded-full
                bg-blue-500/20
                blur-[100px]
              "
            />

            {/* Logo */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                z-10
                flex
                flex-col
                items-center
              "
            >
              <motion.img
                src="/images/portfolio/llogo.png"
                alt={siteConfig.name || "DESFlyer"}
                className="
                  h-20
                  w-20
                  object-contain
                  sm:h-24
                  sm:w-24
                "
                animate={{
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div
                className="
                  mt-5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.45em]
                  text-blue-400
                "
              >
                DESFLYER
              </div>
            </motion.div>

            {/* Loading line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: INTRO_DURATION_MS / 1000,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-12
                left-1/2
                h-px
                w-28
                origin-left
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-blue-500
                to-transparent
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <motion.div
        initial="hidden"
        animate={isLoading ? "hidden" : "show"}
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          items-center
          px-5
          pb-20
          pt-28
          sm:px-8
          sm:pb-24
          sm:pt-32
          lg:px-12
          lg:pb-16
          lg:pt-24
          xl:px-16
        "
      >
        <div className="w-full">
          {/* =================================================
              TOP MINI LABEL
          ================================================= */}

          <motion.div
            variants={fadeIn}
            className="
              mb-10
              flex
              items-center
              justify-between
              lg:mb-8
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  h-px
                  w-8
                  bg-blue-500
                  sm:w-12
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[var(--muted)]
                  sm:text-[10px]
                "
              >
                Creative Technology Studio
              </span>
            </div>

            <div
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[var(--muted)]
                md:block
              "
            >
              01 / 01
            </div>
          </motion.div>

          {/* =================================================
              MAIN LAYOUT
          ================================================= */}

          <div
            className="
              grid
              items-center
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* =============================================
                LEFT TYPOGRAPHY
            ============================================= */}

            <div
              className="
                relative
                z-20
                max-w-4xl
                lg:-mr-20
                xl:-mr-28
              "
            >
              {/* Small eyebrow */}
              <motion.div
                variants={fadeUp}
                className="
                  mb-5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-blue-500
                  sm:text-xs
                "
              >
                Ideas → Design → Technology
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={fadeUp}
                className="
                text-[75px]
                  font-semibold
                  leading-[0.82]
                  tracking-[-0.065em]
                "
              >
                <span className="block">
                  We make
                </span>

                <span
                  className="
                    relative
                    z-30
                    block
                    bg-gradient-to-r
                    from-blue-500
                    via-cyan-400
                    to-blue-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  digital
                </span>

                <span className="block">
                  matter.
                </span>
              </motion.h1>

              {/* Creative underline */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: "clamp(120px, 18vw, 240px)",
                  opacity: 1,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className="
                  mt-5
                  h-[2px]
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-400
                  to-transparent
                "
              />

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="
                  mt-7
                  max-w-lg
                  text-sm
                  leading-7
                  text-[var(--muted)]
                  sm:mt-8
                  sm:text-base
                  sm:leading-8
                  lg:text-lg
                "
              >
                We design and build meaningful digital
                experiences that turn ideas into products,
                brands and experiences people remember.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:mt-9
                  sm:flex-row
                "
              >
                <Button
                  to="/portfolio"
                  className="
                    group
                    min-h-12
                    px-6
                  "
                >
                  <span>Explore Our Work</span>

                  <FiArrowUpRight
                    className="
                      ml-2
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Button>

                <Button
                  to="/services"
                  variant="outline"
                  className="
                    min-h-12
                    px-6
                  "
                >
                  What We Do
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-x-7
                  gap-y-4
                  sm:mt-11
                  sm:gap-x-9
                "
              >
                <div>
                  <div className="text-lg font-semibold">
                    50+
                  </div>

                  <div
                    className="
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-[var(--muted)]
                    "
                  >
                    Projects
                  </div>
                </div>

                <div className="h-7 w-px bg-[var(--border)]" />

                <div>
                  <div className="text-lg font-semibold">
                    30+
                  </div>

                  <div
                    className="
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-[var(--muted)]
                    "
                  >
                    Clients
                  </div>
                </div>

                <div className="h-7 w-px bg-[var(--border)]" />

                <div>
                  <div className="text-lg font-semibold">
                    5+
                  </div>

                  <div
                    className="
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-[var(--muted)]
                    "
                  >
                    Industries
                  </div>
                </div>
              </motion.div>
            </div>

            {/* =============================================
                RIGHT VIDEO
            ============================================= */}

            <motion.div
              variants={fadeIn}
              className="
                relative
                mt-14
                lg:mt-0
              "
            >
              {/* Video glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-5
                  rounded-[2rem]
                  bg-blue-500/10
                  blur-3xl
                "
              />

              {/* Video */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-black
                  shadow-2xl
                  sm:rounded-[2rem]
                  lg:-ml-2
                "
              >
                <video
                  ref={videoRef}
                  src={HERO_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onPlay={() => setVideoPlaying(true)}
                  onPause={() => setVideoPlaying(false)}
                  className="
                    aspect-[4/3]
                    w-full
                    object-cover
                    transition-transform
                    duration-[1400ms]
                    ease-out
                    group-hover:scale-[1.03]
                    sm:aspect-video
                  "
                />

                {/* Dark cinematic overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/10
                    to-black/5
                  "
                />

                {/* Blue edge glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[1.5rem]
                    ring-1
                    ring-inset
                    ring-blue-400/10
                    sm:rounded-[2rem]
                  "
                />

                {/* Moving light */}
                <motion.div
                  animate={{
                    x: ["-130%", "160%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    w-1/4
                    rotate-[12deg]
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300/10
                    to-transparent
                    blur-xl
                  "
                />

                {/* Video top label */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    px-3
                    py-2
                    backdrop-blur-md
                    sm:left-6
                    sm:top-6
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_8px_rgba(34,211,238,0.9)]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-white/80
                    "
                  >
                    DESFLYER
                  </span>
                </div>

                {/* Video bottom content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    flex
                    items-end
                    justify-between
                    gap-4
                    p-4
                    sm:p-6
                  "
                >
                  <div>
                    <div
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-cyan-300
                        sm:text-[9px]
                      "
                    >
                      Digital Experiences
                    </div>

                    <div
                      className="
                        mt-1
                        text-base
                        font-medium
                        text-white
                        sm:text-xl
                      "
                    >
                      Ideas made real.
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleVideoPlayPause}
                      aria-label={
                        videoPlaying
                          ? "Pause video"
                          : "Play video"
                      }
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-black/40
                        text-white
                        backdrop-blur-md
                        transition
                        duration-300
                        hover:bg-white/15
                        sm:h-10
                        sm:w-10
                      "
                    >
                      {videoPlaying ? (
                        <FiPause size={13} />
                      ) : (
                        <FiPlay
                          size={13}
                          className="ml-0.5"
                        />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleMute}
                      aria-label={
                        videoMuted
                          ? "Unmute video"
                          : "Mute video"
                      }
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-black/40
                        text-white
                        backdrop-blur-md
                        transition
                        duration-300
                        hover:bg-white/15
                        sm:h-10
                        sm:w-10
                      "
                    >
                      <FiVolume2
                        size={13}
                        className={
                          videoMuted
                            ? "opacity-50"
                            : "opacity-100"
                        }
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* =========================================
                  VIDEO SIDE LABEL
              ========================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.7,
                }}
                className="
                  absolute
                  -right-2
                  top-1/2
                  hidden
                  -translate-y-1/2
                  lg:block
                  xl:-right-10
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    [writing-mode:vertical-rl]
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-[var(--muted)]
                    "
                  >
                    Creative / Digital / Technology
                  </span>

                  <span
                    className="
                      h-12
                      w-px
                      bg-gradient-to-b
                      from-blue-500
                      to-transparent
                    "
                  />
                </div>
              </motion.div>

              {/* =========================================
                  SMALL BOTTOM LABEL
              ========================================= */}

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
                  delay: 1.3,
                  duration: 0.7,
                }}
                className="
                  absolute
                  -bottom-5
                  left-5
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--bg)]
                  px-4
                  py-3
                  shadow-xl
                  sm:left-8
                "
              >
                <div
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-[var(--muted)]
                  "
                >
                  Since day one
                </div>

                <div
                  className="
                    mt-1
                    text-xs
                    font-semibold
                  "
                >
                  Building with purpose.
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM INFORMATION
          ================================================= */}

          <motion.div
            variants={fadeIn}
            className="
              mt-16
              flex
              items-center
              justify-between
              border-t
              border-[var(--border)]
              pt-5
              sm:mt-20
              sm:pt-6
            "
          >
            <div
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-[var(--muted)]
                sm:text-[9px]
              "
            >
              Websites · Products · Experiences
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-[var(--muted)]
                sm:text-[9px]
              "
            >
              <span>Scroll</span>

              <motion.span
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FiArrowDown size={12} />
              </motion.span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-28
          bg-gradient-to-t
          from-[var(--bg)]
          to-transparent
        "
      />
    </section>
  );
}













