// import { useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
// import { FiCompass, FiPenTool, FiCode, FiSend, FiLifeBuoy } from 'react-icons/fi'
// import Eyebrow from '../ui/Eyebrow'
// import { process } from '../../data/process'

// const icons = { FiCompass, FiPenTool, FiCode, FiSend, FiLifeBuoy }

// function StackCard({ item, index, total, progress }) {
//   const Icon = icons[item.icon]

//   // each card owns a slice of the overall scroll progress
//   const start = index / total
//   const end = (index + 1) / total

//   const y = useTransform(progress, [start, end], ['28vh', '0vh'])
//   const scale = useTransform(
//     progress,
//     [start, end, 1],
//     [0.9, 1, 1 - (total - 1 - index) * 0.015]
//   )
//   const opacity = useTransform(progress, [start, start + 0.05], [0, 1])
//   const rotate = useTransform(progress, [start, end], [index % 2 === 0 ? 3 : -3, 0])

//   return (
//     <motion.div
//       style={{
//         y,
//         scale,
//         opacity,
//         rotate,
//         zIndex: index,
//         top: `${6 + index * 1.6}vh`
//       }}
//       className="
// absolute
// inset-x-0
// mx-auto
// w-full
// max-w-2xl
// glass
// rounded-3xl
// p-8
// md:p-10
// shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]
// "
//     >
//       <div className="flex items-start justify-between">
//         <span className="
// w-12
// h-12
// rounded-xl
// bg-signal/10
// text-signal
// flex
// items-center
// justify-center
// shadow-[0_0_20px_2px_rgba(46,111,255,0.25)]
// ">
//           <Icon size={20} />
//         </span>

//         <span className="font-display font-bold text-5xl text-signal/20">
//           {item.step}
//         </span>
//       </div>

//       <h3 className="font-display font-semibold text-2xl mt-6 text-[var(--fg)]">
//         {item.title}
//       </h3>

//       <p className="mt-3 text-sm md:text-base text-[var(--fg)]/65 leading-relaxed max-w-md">
//         {item.body}
//       </p>

//       <div className="mt-6 flex gap-1.5">
//         {Array.from({ length: total }).map((_, i) => (
//           <span
//             key={i}
//             className={`
// h-1
// rounded-full
// transition-all
// ${i === index ? 'w-6 bg-signal' : 'w-1.5 bg-[var(--border)]'}
// `}
//           />
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// export default function ProcessTimeline() {
//   const ref = useRef(null)
//   const total = process.length

//   // section is tall (total * 100vh) so each card gets a full viewport of scroll
//   // to itself while the deck stays pinned via sticky positioning
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

//   return (
//     <section className="relative py-28 lg:py-36 px-6 lg:px-10">
//       <div className="max-w-shell mx-auto">
//         <div className="text-center mb-16">
//           <div className="flex justify-center">
//             <Eyebrow>How We Work</Eyebrow>
//           </div>
//           <h2 className="font-display font-bold text-[clamp(1.9rem,3.5vw,3rem)] text-[var(--fg)] max-w-xl mx-auto">
//             A journey built for clarity, start to finish
//           </h2>
//         </div>
//       </div>

//       <div ref={ref} style={{ height: `${total * 100}vh` }} className="relative">
//         <div className="sticky top-0 h-screen flex items-center overflow-hidden">
//           <div className="relative w-full h-[70vh]">
//             {process.map((item, i) => (
//               <StackCard
//                 key={item.step}
//                 item={item}
//                 index={i}
//                 total={total}
//                 progress={scrollYProgress}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }























// import { useState, useEffect, useRef, useMemo } from "react";
// import { motion } from "framer-motion";
// import Eyebrow from "../ui/Eyebrow";
// import { process } from "../../data/process";
// import {
//   FiCompass,
//   FiPenTool,
//   FiCode,
//   FiSend,
//   FiLifeBuoy,
// } from "react-icons/fi";

// const icons = {
//   FiCompass,
//   FiPenTool,
//   FiCode,
//   FiSend,
//   FiLifeBuoy,
// };

// function useParticles(count = 36) {
//   return useMemo(
//     () =>
//       Array.from({ length: count }).map((_, i) => ({
//         id: i,
//         top: Math.random() * 100,
//         left: Math.random() * 100,
//         size: 1 + Math.random() * 3,
//         delay: Math.random() * 6,
//         duration: 6 + Math.random() * 8,
//         hue: Math.random() > 0.5 ? "#5EEAD4" : "#C4B5FD",
//       })),
//     [count]
//   );
// }

// export default function ProcessTimeline() {
//   const [active, setActive] = useState(0);
//   const wheelLock = useRef(false);
//   const touchStart = useRef(0);
//   const particles = useParticles();

//   const total = process.length;

//   const next = () => setActive((prev) => (prev + 1) % total);
//   const prev = () => setActive((prev) => (prev === 0 ? total - 1 : prev - 1));

//   useEffect(() => {
//     const onWheel = (e) => {
//       if (wheelLock.current) return;
//       wheelLock.current = true;
//       e.deltaY > 0 ? next() : prev();
//       setTimeout(() => (wheelLock.current = false), 600);
//     };
//     window.addEventListener("wheel", onWheel, { passive: true });
//     return () => window.removeEventListener("wheel", onWheel);
//   }, []);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const onTouchStart = (e) => (touchStart.current = e.touches[0].clientX);
//   const onTouchEnd = (e) => {
//     const end = e.changedTouches[0].clientX;
//     if (touchStart.current - end > 60) next();
//     if (end - touchStart.current > 60) prev();
//   };

//   const activeItem = process[active];

//   return (
//     <section
//       onTouchStart={onTouchStart}
//       onTouchEnd={onTouchEnd}
//       className="relative min-h-screen overflow-hidden bg-[#05070A] text-white"
//     >
//       {/* Ambient glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-[160px]" />
//         <div className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-violet-500/10 blur-[160px]" />
//       </div>

//       {/* Particles */}
//       <div className="pointer-events-none absolute inset-0">
//         {particles.map((p) => (
//           <motion.span
//             key={p.id}
//             animate={{ y: [0, -18, 0], opacity: [0.15, 0.7, 0.15] }}
//             transition={{
//               duration: p.duration,
//               delay: p.delay,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute rounded-full"
//             style={{
//               top: `${p.top}%`,
//               left: `${p.left}%`,
//               width: p.size,
//               height: p.size,
//               background: p.hue,
//             }}
//           />
//         ))}
//       </div>

//       {/* Top nav pill */}
//       <div className="relative z-30 flex justify-end px-10 pt-8">
//         <div className="flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs uppercase tracking-[3px] text-white/70 backdrop-blur-md">
//           <span>Process</span>
//           <span className="h-3 w-px bg-white/20" />
//           <span>Contact</span>
//         </div>
//       </div>

//       {/* Step counter pill */}
//       <div className="relative z-30 mt-4 flex justify-end px-10">
//         <div className="flex items-center gap-4 rounded-full border border-white/15 bg-white/5 px-5 py-2 font-mono text-xs text-white/60 backdrop-blur-md">
//           <button
//             onClick={prev}
//             className="transition hover:text-teal-300"
//             aria-label="Previous step"
//           >
//             &lt;&lt;
//           </button>
//           <span className="text-white/80">{activeItem.title}</span>
//           <span className="text-white/30">
//             {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
//           </span>
//           <button
//             onClick={next}
//             className="transition hover:text-teal-300"
//             aria-label="Next step"
//           >
//             &gt;&gt;
//           </button>
//         </div>
//       </div>

//       {/* Header */}
//       <div className="relative z-20 mt-10 text-center">
//         <Eyebrow>PROCESS</Eyebrow>
//         <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
//           How We Work
//         </h2>
//       </div>

//       {/* Stage */}
//       <div
//         className="relative z-20 mt-16 flex h-[520px] items-center justify-center"
//         style={{ perspective: "1600px" }}
//       >
//         {process.map((item, index) => {
//           const offset = index - active;
//           const isActive = offset === 0;
//           const Icon = icons[item.icon];

//           // only render the active card plus one neighbour on each side
//           if (Math.abs(offset) > 1) return null;

//           return (
//             <motion.div
//               key={item.step}
//               animate={{
//                 x: offset * 420,
//                 rotateY: offset * -32,
//                 scale: isActive ? 1 : 0.82,
//                 opacity: isActive ? 1 : 0.35,
//                 zIndex: isActive ? 10 : 1,
//               }}
//               transition={{ type: "spring", stiffness: 120, damping: 20 }}
//               onClick={() => !isActive && setActive(index)}
//               className="absolute h-[440px] w-[380px] cursor-pointer"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               <div
//                 className="
//                   relative h-full w-full overflow-hidden rounded-3xl
//                   border border-white/15 bg-white/[0.04] backdrop-blur-xl
//                   shadow-[0_40px_100px_rgba(0,0,0,.6)]
//                 "
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

//                 <div className="relative flex h-full flex-col items-center justify-center gap-6 px-8 text-center">
//                   <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-teal-300/30 bg-teal-300/10">
//                     {Icon && <Icon size={36} className="text-teal-300" />}
//                   </div>

//                   <div className="font-mono text-xs uppercase tracking-[4px] text-white/40">
//                     Step {item.step}
//                   </div>

//                   <h3 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-bold leading-tight text-transparent">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm leading-relaxed text-white/50">
//                     {item.body}
//                   </p>
//                 </div>

//                 {/* scanline sheen */}
//                 <motion.div
//                   animate={{ x: ["-140%", "180%"] }}
//                   transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
//                   className="absolute top-0 left-0 h-full w-16 rotate-12 bg-white/10 blur-xl"
//                 />
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Bottom-left menu list */}
//       <div className="relative z-20 mt-10 px-10 pb-16">
//         <p className="font-mono text-xs uppercase tracking-[3px] text-white/40">
//           What happens next?
//         </p>
//         <div className="mt-4 flex flex-col gap-2">
//           {process.map((item, index) => (
//             <button
//               key={item.step}
//               onClick={() => setActive(index)}
//               className={`
//                 w-fit font-mono text-sm uppercase tracking-wide transition
//                 ${
//                   index === active
//                     ? "text-teal-300"
//                     : "text-violet-300/60 hover:text-violet-200"
//                 }
//               `}
//             >
//               -&gt; {item.title}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Progress dots */}
//       <div className="relative z-20 flex justify-center gap-3 pb-14">
//         {process.map((item, index) => (
//           <button
//             key={item.step}
//             onClick={() => setActive(index)}
//             aria-label={`Go to step ${item.step}`}
//           >
//             <motion.span
//               animate={{
//                 width: active === index ? 28 : 8,
//                 backgroundColor: active === index ? "#5EEAD4" : "#ffffff33",
//               }}
//               className="block h-2 rounded-full"
//             />
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// }







import { useMemo, useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Eyebrow from "../ui/Eyebrow";
import { process } from "../../data/process";

import {
  FiCompass,
  FiPenTool,
  FiCode,
  FiSend,
  FiLifeBuoy,
  FiArrowDown,
  FiArrowUp,
} from "react-icons/fi";

/* =========================================================
   ICONS
========================================================= */

const icons = {
  FiCompass,
  FiPenTool,
  FiCode,
  FiSend,
  FiLifeBuoy,
};

/* =========================================================
   PARTICLES
========================================================= */

function useParticles(count = 70) {
  return useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 5 + Math.random() * 8,
        delay: Math.random() * 5,
        opacity: 0.15 + Math.random() * 0.5,
        color:
          i % 3 === 0
            ? "#5EEAD4"
            : i % 3 === 1
              ? "#8B5CF6"
              : "#60A5FA",
      })),
    [count]
  );
}

/* =========================================================
   DNA CARD POSITIONS

   offset 0 = active
   offset -1 / +1 = first DNA pair
   offset -2 / +2 = second DNA pair
========================================================= */

function getCardPosition(offset) {
  const positions = {
    "-3": {
      x: -520,
      y: -210,
      scale: 0.55,
      rotateY: 38,
      rotateZ: -8,
      opacity: 0.12,
      blur: 5,
      z: 1,
    },

    "-2": {
      x: -370,
      y: -145,
      scale: 0.68,
      rotateY: 30,
      rotateZ: -7,
      opacity: 0.3,
      blur: 3,
      z: 3,
    },

    "-1": {
      x: -235,
      y: 35,
      scale: 0.82,
      rotateY: 18,
      rotateZ: -4,
      opacity: 0.62,
      blur: 1,
      z: 10,
    },

    "0": {
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      rotateZ: 0,
      opacity: 1,
      blur: 0,
      z: 30,
    },

    "1": {
      x: 235,
      y: 35,
      scale: 0.82,
      rotateY: -18,
      rotateZ: 4,
      opacity: 0.62,
      blur: 1,
      z: 10,
    },

    "2": {
      x: 370,
      y: -145,
      scale: 0.68,
      rotateY: -30,
      rotateZ: 7,
      opacity: 0.3,
      blur: 3,
      z: 3,
    },

    "3": {
      x: 520,
      y: -210,
      scale: 0.55,
      rotateY: -38,
      rotateZ: 8,
      opacity: 0.12,
      blur: 5,
      z: 1,
    },
  };

  return positions[String(offset)] || {
    x: offset < 0 ? -650 : 650,
    y: -250,
    scale: 0.4,
    rotateY: offset < 0 ? 45 : -45,
    rotateZ: offset < 0 ? -10 : 10,
    opacity: 0,
    blur: 8,
    z: 0,
  };
}

/* =========================================================
   DNA HELIX BACKGROUND
========================================================= */

function DNAHelix({ progress, total }) {
  const strands = useMemo(() => {
    const points = [];
    const count = 42;

    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const y = -230 + t * 460;

      const angle = t * Math.PI * 3.2;

      const x1 = Math.sin(angle) * 235;
      const x2 = Math.sin(angle + Math.PI) * 235;

      points.push({
        id: i,
        y,
        x1,
        x2,
        size: 3 + Math.sin(t * Math.PI) * 2,
      });
    }

    return points;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Main glowing helix lines */}
      <svg
        className="absolute left-1/2 top-1/2 w-[720px] h-[620px] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        viewBox="-360 -310 720 620"
      >
        <defs>
          <linearGradient id="dnaGradientA" x1="0" x2="1">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0" />
            <stop offset="50%" stopColor="#5EEAD4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="dnaGradientB" x1="1" x2="0">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>

          <filter id="dnaGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="
            M -230 250
            C -40 170, -40 90, -230 0
            C -420 -90, -420 -170, -230 -250
          "
          fill="none"
          stroke="url(#dnaGradientA)"
          strokeWidth="2"
          filter="url(#dnaGlow)"
          opacity="0.55"
        />

        <motion.path
          d="
            M 230 250
            C 40 170, 40 90, 230 0
            C 420 -90, 420 -170, 230 -250
          "
          fill="none"
          stroke="url(#dnaGradientB)"
          strokeWidth="2"
          filter="url(#dnaGlow)"
          opacity="0.55"
        />

        {/* DNA rungs */}
        {dnaRungs(0.8)}
      </svg>

      {/* DNA particles */}
      {strands.map((point) => (
        <motion.span
          key={point.id}
          className="absolute left-1/2 top-1/2 rounded-full"
          animate={{
            x: [point.x1, point.x2, point.x1],
            y: point.y,
            opacity: [0.2, 0.8, 0.2],
            scale: [0.7, 1.25, 0.7],
          }}
          transition={{
            duration: 5 + (point.id % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: point.id * 0.05,
          }}
          style={{
            width: point.size,
            height: point.size,
            background:
              point.id % 2 === 0 ? "#5EEAD4" : "#8B5CF6",
            boxShadow:
              "0 0 12px rgba(94,234,212,.6)",
          }}
        />
      ))}

      {/* Progress energy */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[2px] w-[260px] -translate-x-1/2"
        animate={{
          scaleX: 0.7 + progress * 0.3,
          opacity: 0.3 + progress * 0.5,
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, #5EEAD4, transparent)",
          boxShadow: "0 0 30px rgba(94,234,212,.7)",
        }}
      />
    </div>
  );
}

/* =========================================================
   DNA RUNG SVG
========================================================= */

function dnaRungs(opacity = 1) {
  const rungs = [];

  for (let i = 0; i < 13; i++) {
    const t = i / 12;
    const y = -250 + t * 500;
    const angle = t * Math.PI * 3.2;

    const x1 = Math.sin(angle) * 230;
    const x2 = Math.sin(angle + Math.PI) * 230;

    rungs.push(
      <line
        key={i}
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        stroke="#60A5FA"
        strokeWidth="1"
        opacity={opacity * (0.08 + Math.sin(t * Math.PI) * 0.18)}
      />
    );
  }

  return rungs;
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const wheelLock = useRef(false);
  const touchStart = useRef(null);

  const prefersReducedMotion = useReducedMotion();

  const particles = useParticles();

  const total = process.length;

  const [active, setActive] = useState(0);
  const [isInside, setIsInside] = useState(false);

  /* =======================================================
     PROGRESS
  ======================================================= */

  const progress =
    total > 1 ? active / (total - 1) : 0;

  /* =======================================================
     NAVIGATION

     IMPORTANT:
     No looping.
     First stays first.
     Last stays last.
  ======================================================= */

  const goTo = useCallback(
    (nextIndex) => {
      if (total === 0) return;

      const nextIndexSafe = Math.max(
        0,
        Math.min(total - 1, nextIndex)
      );

      setActive(nextIndexSafe);
    },
    [total]
  );

  const next = useCallback(() => {
    if (active < total - 1) {
      goTo(active + 1);
    }
  }, [active, total, goTo]);

  const prev = useCallback(() => {
    if (active > 0) {
      goTo(active - 1);
    }
  }, [active, goTo]);

  /* =======================================================
     WHEEL CONTROL

     Scroll down = next process step
     Scroll up = previous process step

     At first/last:
     page scroll is allowed normally.
  ======================================================= */

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const onWheel = (e) => {
      if (!isInside) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      const canMoveForward =
        direction > 0 && active < total - 1;

      const canMoveBackward =
        direction < 0 && active > 0;

      if (
        !canMoveForward &&
        !canMoveBackward
      ) {
        return;
      }

      e.preventDefault();

      if (wheelLock.current) return;

      wheelLock.current = true;

      if (direction > 0) {
        next();
      } else {
        prev();
      }

      window.setTimeout(() => {
        wheelLock.current = false;
      }, 700);
    };

    node.addEventListener(
      "wheel",
      onWheel,
      { passive: false }
    );

    return () => {
      node.removeEventListener(
        "wheel",
        onWheel
      );
    };
  }, [
    active,
    total,
    next,
    prev,
    isInside,
  ]);

  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isInside) return;

      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowRight"
      ) {
        e.preventDefault();
        next();
      }

      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft"
      ) {
        e.preventDefault();
        prev();
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        onKeyDown
      );
    };
  }, [
    isInside,
    next,
    prev,
  ]);

  /* =======================================================
     TOUCH
  ======================================================= */

  const onTouchStart = (e) => {
    touchStart.current =
      e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;

    const end =
      e.changedTouches[0].clientY;

    const difference =
      touchStart.current - end;

    if (Math.abs(difference) < 55) {
      touchStart.current = null;
      return;
    }

    if (difference > 0) {
      next();
    } else {
      prev();
    }

    touchStart.current = null;
  };

  /* =======================================================
     MOUSE PARALLAX
  ======================================================= */

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothMouseX = useSpring(
    mouseX,
    {
      stiffness: 120,
      damping: 20,
      mass: 0.5,
    }
  );

  const smoothMouseY = useSpring(
    mouseY,
    {
      stiffness: 120,
      damping: 20,
      mass: 0.5,
    }
  );

  const rotateX = useTransform(
    smoothMouseY,
    [0, 1],
    [5, -5]
  );

  const rotateY = useTransform(
    smoothMouseX,
    [0, 1],
    [-5, 5]
  );

  function handleMouseMove(e) {
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

  function resetMouse() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  /* =======================================================
     ACTIVE ITEM
  ======================================================= */

  const item = process[active];

  if (!item) return null;

  const Icon = icons[item.icon];

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => {
        setIsInside(false);
        resetMouse();
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="
        relative
        min-h-[900px]
        overflow-hidden
        bg-[#03070D]
        py-24
        text-white
      "
      style={{
        perspective: "1800px",
      }}
    >
      {/* ===================================================
          AMBIENT BACKGROUND
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              circle at 50% 42%,
              rgba(14,116,144,.18),
              transparent 28%
            ),
            radial-gradient(
              circle at 15% 70%,
              rgba(124,58,237,.10),
              transparent 32%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(37,99,235,.10),
              transparent 32%
            )
          `,
        }}
      />

      {/* ===================================================
          NOISE / GRID
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.18]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.025) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />

      {/* ===================================================
          FLOATING PARTICLES
      =================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full"
            animate={{
              y: [0, -25, 0],
              x: [0, particle.id % 2 ? 8 : -8, 0],
              opacity: [
                particle.opacity * 0.35,
                particle.opacity,
                particle.opacity * 0.35,
              ],
              scale: [
                0.8,
                1.25,
                0.8,
              ],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              boxShadow: `0 0 ${
                particle.size * 5
              }px ${particle.color}`,
            }}
          />
        ))}
      </div>

      {/* ===================================================
          TOP NAV
      =================================================== */}

      <div className="relative z-50 flex justify-end px-6 lg:px-12">
        <div
          className="
            flex
            items-center
            gap-5
            rounded-full
            border
            border-white/10
            bg-white/[0.035]
            px-6
            py-3
            backdrop-blur-xl
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[.3em]
              text-white/50
            "
          >
            PROCESS
          </span>

          <span className="h-3 w-px bg-white/15" />

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[.3em]
              text-teal-300/80
            "
          >
            {String(active + 1).padStart(2, "0")}{" "}
            /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="relative z-30 mt-8 text-center px-6">
        <Eyebrow>OUR PROCESS</Eyebrow>

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
            duration: 0.7,
          }}
          className="
            mt-5
            font-display
            text-4xl
            font-bold
            tracking-tight
            md:text-5xl
            lg:text-6xl
          "
        >
          How We Build
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-5
            max-w-xl
            text-sm
            leading-7
            text-white/40
          "
        >
          Scroll through our process and watch each
          stage move through the digital DNA.
        </motion.p>
      </div>

      {/* ===================================================
          DNA STAGE
      =================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          mt-10
          flex
          h-[590px]
          w-full
          max-w-[1500px]
          items-center
          justify-center
          overflow-hidden
        "
        style={{
          perspective: "1800px",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* DNA structure */}

        <DNAHelix
          progress={progress}
          total={total}
        />

        {/* =================================================
            CENTER 3D AREA
        ================================================= */}

        <motion.div
          className="
            relative
            flex
            h-full
            w-full
            items-center
            justify-center
          "
          style={{
            rotateX,
            rotateY,
            transformStyle:
              "preserve-3d",
          }}
        >
          {/* =================================================
              PROCESS CARDS
          ================================================= */}

          <AnimatePresence initial={false}>
            {process.map((processItem, index) => {
              const offset =
                index - active;

              if (Math.abs(offset) > 3) {
                return null;
              }

              const position =
                getCardPosition(offset);

              const ProcessIcon =
                icons[processItem.icon];

              const isActive =
                offset === 0;

              return (
                <motion.div
                  key={processItem.step}
                  className="
                    absolute
                    w-[300px]
                    sm:w-[350px]
                    lg:w-[430px]
                  "
                  animate={{
                    x: position.x,
                    y: position.y,
                    scale: position.scale,
                    rotateY:
                      position.rotateY,
                    rotateZ:
                      position.rotateZ,
                    opacity:
                      position.opacity,
                    filter: `blur(${position.blur}px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 115,
                    damping: 22,
                    mass: 0.8,
                  }}
                  style={{
                    zIndex: position.z,
                    transformStyle:
                      "preserve-3d",
                    pointerEvents:
                      isActive
                        ? "auto"
                        : "none",
                  }}
                >
                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="
                      relative
                      h-[360px]
                      overflow-hidden
                      rounded-[30px]
                      border
                      p-7
                      lg:h-[390px]
                      lg:p-9
                    "
                    style={{
                      background: `
                        linear-gradient(
                          145deg,
                          rgba(15,29,45,.96),
                          rgba(4,9,16,.98)
                        )
                      `,
                      borderColor: isActive
                        ? "rgba(94,234,212,.48)"
                        : "rgba(255,255,255,.10)",
                      boxShadow: isActive
                        ? `
                          0 40px 100px rgba(0,0,0,.7),
                          0 0 60px rgba(45,212,191,.12),
                          inset 0 1px 0 rgba(255,255,255,.08)
                        `
                        : `
                          0 25px 70px rgba(0,0,0,.55)
                        `,
                      transformStyle:
                        "preserve-3d",
                    }}
                  >
                    {/* Card gradient */}

                    <div
                      className="
                        absolute
                        inset-0
                        pointer-events-none
                      "
                      style={{
                        background: `
                          radial-gradient(
                            circle at 80% 10%,
                            rgba(45,212,191,.12),
                            transparent 35%
                          ),
                          linear-gradient(
                            135deg,
                            rgba(255,255,255,.06),
                            transparent 35%
                          )
                        `,
                      }}
                    />

                    {/* Moving shine */}

                    {isActive && (
                      <motion.div
                        className="
                          absolute
                          -left-[40%]
                          top-0
                          h-full
                          w-[35%]
                          rotate-[18deg]
                          pointer-events-none
                        "
                        animate={{
                          left: [
                            "-40%",
                            "130%",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "linear",
                        }}
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,.09), transparent)",
                          filter:
                            "blur(8px)",
                        }}
                      />
                    )}

                    {/* =================================================
                        CARD TOP
                    ================================================= */}

                    <div className="relative z-10 flex items-start justify-between">
                      <div>
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[.3em]
                            text-teal-300/70
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-teal-300
                            "
                            style={{
                              boxShadow:
                                "0 0 10px rgba(94,234,212,.9)",
                            }}
                          />

                          PHASE
                        </div>

                        <div
                          className="
                            mt-2
                            font-mono
                            text-xs
                            tracking-[.25em]
                            text-white/30
                          "
                        >
                          {String(
                            processItem.step
                          ).padStart(2, "0")}
                        </div>
                      </div>

                      <motion.div
                        animate={
                          isActive
                            ? {
                                rotate: [
                                  0,
                                  8,
                                  0,
                                ],
                                y: [
                                  0,
                                  -3,
                                  0,
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          border
                        "
                        style={{
                          borderColor:
                            "rgba(94,234,212,.25)",
                          background:
                            "rgba(45,212,191,.07)",
                          color: "#5EEAD4",
                          boxShadow:
                            isActive
                              ? "0 0 25px rgba(45,212,191,.12)"
                              : "none",
                        }}
                      >
                        {ProcessIcon && (
                          <ProcessIcon
                            size={22}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* =================================================
                        CARD CONTENT
                    ================================================= */}

                    <div
                      className="
                        relative
                        z-10
                        mt-12
                      "
                    >
                      <motion.div
                        animate={{
                          width: isActive
                            ? 72
                            : 40,
                        }}
                        className="
                          h-[2px]
                          rounded-full
                        "
                        style={{
                          background:
                            "linear-gradient(90deg,#5EEAD4,transparent)",
                          boxShadow:
                            "0 0 14px rgba(94,234,212,.55)",
                        }}
                      />

                      <h3
                        className="
                          mt-6
                          font-display
                          text-3xl
                          font-semibold
                          leading-tight
                          text-white
                          lg:text-4xl
                        "
                      >
                        {processItem.title}
                      </h3>

                      <p
                        className="
                          mt-5
                          text-sm
                          leading-7
                          text-white/45
                          lg:text-[15px]
                        "
                      >
                        {processItem.body}
                      </p>
                    </div>

                    {/* =================================================
                        CARD BOTTOM
                    ================================================= */}

                    <div
                      className="
                        absolute
                        bottom-6
                        left-7
                        right-7
                        z-10
                        flex
                        items-center
                        justify-between
                        lg:bottom-7
                        lg:left-9
                        lg:right-9
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[9px]
                          uppercase
                          tracking-[.3em]
                          text-white/25
                        "
                      >
                        DESFLYER
                      </span>

                      {isActive && (
                        <motion.span
                          animate={{
                            opacity: [
                              0.35,
                              1,
                              0.35,
                            ],
                          }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                          }}
                          className="
                            flex
                            items-center
                            gap-2
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[.25em]
                            text-teal-300/70
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-teal-300
                            "
                          />

                          ACTIVE
                        </motion.span>
                      )}
                    </div>

                    {/* Bottom neon line */}

                    <motion.div
                      className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        h-[2px]
                      "
                      animate={
                        isActive
                          ? {
                              opacity: [
                                0.35,
                                1,
                                0.35,
                              ],
                            }
                          : {
                              opacity: 0.15,
                            }
                      }
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}
                      style={{
                        background:
                          "linear-gradient(90deg,transparent,#5EEAD4,#60A5FA,transparent)",
                        boxShadow:
                          "0 0 22px rgba(94,234,212,.7)",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* =================================================
            CENTER GLOW
        ================================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[330px]
            w-[330px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
          "
          animate={{
            scale: [
              0.95,
              1.08,
              0.95,
            ],
            opacity: [
              0.12,
              0.24,
              0.12,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle,rgba(45,212,191,.22),transparent 68%)",
            filter: "blur(25px)",
          }}
        />
      </div>

      {/* ===================================================
          LEFT INFORMATION
      =================================================== */}

      <div
        className="
          absolute
          bottom-24
          left-6
          z-40
          hidden
          lg:block
          xl:left-12
        "
      >
        <div
          className="
            font-mono
            text-[10px]
            uppercase
            tracking-[.28em]
            text-white/35
          "
        >
          CURRENT PHASE
        </div>

        <div
          className="
            mt-3
            text-xs
            uppercase
            tracking-[.18em]
            text-teal-300/70
          "
        >
          {item.title}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous process step"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white/60
              transition
              hover:border-teal-300/40
              hover:text-teal-300
              disabled:cursor-not-allowed
              disabled:opacity-25
            "
          >
            <FiArrowUp />
          </button>

          <button
            type="button"
            onClick={next}
            disabled={active === total - 1}
            aria-label="Next process step"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white/60
              transition
              hover:border-teal-300/40
              hover:text-teal-300
              disabled:cursor-not-allowed
              disabled:opacity-25
            "
          >
            <FiArrowDown />
          </button>
        </div>
      </div>

      {/* ===================================================
          RIGHT PROGRESS
      =================================================== */}

      <div
        className="
          absolute
          bottom-24
          right-6
          z-40
          hidden
          lg:block
          xl:right-12
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-[1px]
              w-20
              overflow-hidden
              bg-white/10
            "
          >
            <motion.div
              className="h-full bg-teal-300"
              animate={{
                width: `${Math.max(
                  8,
                  progress * 100
                )}%`,
              }}
            />
          </div>

          <span
            className="
              font-mono
              text-[10px]
              tracking-[.25em]
              text-white/35
            "
          >
            {String(active + 1).padStart(
              2,
              "0"
            )}
          </span>
        </div>
      </div>

      {/* ===================================================
          MOBILE PROGRESS
      =================================================== */}

      <div
        className="
          relative
          z-40
          mx-auto
          mt-2
          flex
          max-w-md
          items-center
          justify-center
          gap-2
          px-6
          lg:hidden
        "
      >
        {process.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to process step ${
              index + 1
            }`}
            className="
              h-2
              rounded-full
              transition-all
              duration-300
            "
            style={{
              width:
                index === active
                  ? 32
                  : 8,
              background:
                index === active
                  ? "#5EEAD4"
                  : "rgba(255,255,255,.12)",
              boxShadow:
                index === active
                  ? "0 0 12px rgba(94,234,212,.5)"
                  : "none",
            }}
          />
        ))}
      </div>

      {/* ===================================================
          SCROLL INDICATOR
      =================================================== */}

      <motion.div
        className="
          relative
          z-30
          mt-10
          flex
          flex-col
          items-center
          gap-3
        "
        animate={{
          opacity:
            active === total - 1
              ? 0.25
              : 0.7,
        }}
      >
        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[.35em]
            text-white/35
          "
        >
          {active === total - 1
            ? "END OF PROCESS"
            : "SCROLL TO EXPLORE"}
        </span>

        {active !== total - 1 && (
          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-teal-300/60"
          >
            <FiArrowDown size={16} />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}








// import { useState, useRef, useEffect, useMemo } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useReducedMotion,
// } from "framer-motion";
// import Eyebrow from "../ui/Eyebrow";
// import { process } from "../../data/process";

// import {
//   FiCompass,
//   FiPenTool,
//   FiCode,
//   FiSend,
//   FiLifeBuoy,
// } from "react-icons/fi";

// /* =========================================================
//    ICONS
// ========================================================= */

// const icons = {
//   FiCompass,
//   FiPenTool,
//   FiCode,
//   FiSend,
//   FiLifeBuoy,
// };

// /* =========================================================
//    COLORS
// ========================================================= */

// const BG = "#030712";
// const TEAL = "#5EEAD4";
// const PURPLE = "#C4B5FD";
// const BLUE = "#60A5FA";

// /* =========================================================
//    PARTICLES
// ========================================================= */

// function useParticles(count = 55) {
//   return useMemo(
//     () =>
//       Array.from({ length: count }).map((_, i) => ({
//         id: i,
//         top: Math.random() * 100,
//         left: Math.random() * 100,
//         size: 1 + Math.random() * 3,
//         delay: Math.random() * 5,
//         duration: 5 + Math.random() * 8,
//         color: Math.random() > 0.5 ? TEAL : PURPLE,
//       })),
//     [count]
//   );
// }

// /* =========================================================
//    VERTICAL DNA CARD VARIANTS
// ========================================================= */

// const cardVariants = {
//   enter: (direction) => ({
//     y: direction > 0 ? 300 : -300,
//     x: direction > 0 ? 110 : -110,
//     rotateZ: direction > 0 ? 7 : -7,
//     rotateY: direction > 0 ? -18 : 18,
//     scale: 0.72,
//     opacity: 0,
//     filter: "blur(10px)",
//   }),

//   center: {
//     y: 0,
//     x: 0,
//     rotateZ: 0,
//     rotateY: 0,
//     scale: 1,
//     opacity: 1,
//     filter: "blur(0px)",
//   },

//   exit: (direction) => ({
//     y: direction > 0 ? -300 : 300,
//     x: direction > 0 ? -110 : 110,
//     rotateZ: direction > 0 ? -7 : 7,
//     rotateY: direction > 0 ? 18 : -18,
//     scale: 0.72,
//     opacity: 0,
//     filter: "blur(10px)",
//   }),
// };

// /* =========================================================
//    DNA SIDE CARD
// ========================================================= */

// function DNAOrb({
//   position,
//   active,
// }) {
//   return (
//     <motion.div
//       animate={{
//         scale: active ? 1.25 : 1,
//         opacity: active ? 1 : 0.4,
//       }}
//       transition={{
//         duration: 0.5,
//       }}
//       className="absolute left-1/2 -translate-x-1/2 rounded-full"
//       style={{
//         top: position,
//         width: active ? 18 : 10,
//         height: active ? 18 : 10,
//         background: active
//           ? TEAL
//           : "rgba(255,255,255,.25)",
//         boxShadow: active
//           ? "0 0 25px rgba(94,234,212,.9)"
//           : "0 0 10px rgba(255,255,255,.15)",
//       }}
//     />
//   );
// }

// /* =========================================================
//    MAIN
// ========================================================= */

// export default function ProcessTimeline() {
//   const prefersReducedMotion = useReducedMotion();

//   const sectionRef = useRef(null);
//   const wheelLock = useRef(false);
//   const touchStart = useRef(null);

//   const particles = useParticles();

//   const total = process.length;

//   const [[active, direction], setActive] = useState([
//     0,
//     1,
//   ]);

//   /* =======================================================
//      CHANGE ACTIVE CARD
//   ======================================================= */

//   const goTo = (nextIndex, dir) => {
//     if (nextIndex < 0) {
//       setActive([0, -1]);
//       return;
//     }

//     if (nextIndex >= total) {
//       setActive([total - 1, 1]);
//       return;
//     }

//     setActive([nextIndex, dir]);
//   };

//   const next = () => {
//     if (active < total - 1) {
//       goTo(active + 1, 1);
//     }
//   };

//   const prev = () => {
//     if (active > 0) {
//       goTo(active - 1, -1);
//     }
//   };

//   /* =======================================================
//      WHEEL CONTROL
     
//      Scroll down = next
//      Scroll up   = previous
     
//      Once first/last card is reached, normal page scroll
//      continues.
//   ======================================================= */

//   useEffect(() => {
//     const node = sectionRef.current;

//     if (!node) return;

//     const onWheel = (e) => {
//       const rect = node.getBoundingClientRect();

//       const sectionVisible =
//         rect.top < window.innerHeight * 0.65 &&
//         rect.bottom > window.innerHeight * 0.35;

//       if (!sectionVisible) return;

//       /*
//         At the beginning, allow normal upward page scroll.
//       */

//       if (
//         e.deltaY < 0 &&
//         active === 0
//       ) {
//         return;
//       }

//       /*
//         At the end, allow normal downward page scroll.
//       */

//       if (
//         e.deltaY > 0 &&
//         active === total - 1
//       ) {
//         return;
//       }

//       /*
//         We are controlling the process timeline.
//       */

//       e.preventDefault();

//       if (wheelLock.current) return;

//       wheelLock.current = true;

//       if (e.deltaY > 0) {
//         next();
//       } else {
//         prev();
//       }

//       setTimeout(() => {
//         wheelLock.current = false;
//       }, 700);
//     };

//     node.addEventListener(
//       "wheel",
//       onWheel,
//       { passive: false }
//     );

//     return () => {
//       node.removeEventListener(
//         "wheel",
//         onWheel
//       );
//     };
//   }, [active, total]);

//   /* =======================================================
//      KEYBOARD
//   ======================================================= */

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowDown") {
//         e.preventDefault();
//         next();
//       }

//       if (e.key === "ArrowUp") {
//         e.preventDefault();
//         prev();
//       }
//     };

//     window.addEventListener(
//       "keydown",
//       onKey
//     );

//     return () => {
//       window.removeEventListener(
//         "keydown",
//         onKey
//       );
//     };
//   }, [active]);

//   /* =======================================================
//      TOUCH
//   ======================================================= */

//   const onTouchStart = (e) => {
//     touchStart.current =
//       e.touches[0].clientY;
//   };

//   const onTouchEnd = (e) => {
//     if (touchStart.current === null)
//       return;

//     const end =
//       e.changedTouches[0].clientY;

//     const distance =
//       touchStart.current - end;

//     if (distance > 60) {
//       next();
//     }

//     if (distance < -60) {
//       prev();
//     }

//     touchStart.current = null;
//   };

//   /* =======================================================
//      ACTIVE ITEM
//   ======================================================= */

//   const item = process[active];

//   const Icon =
//     icons[item?.icon];

//   if (!item) return null;

//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <section
//       ref={sectionRef}
//       onTouchStart={onTouchStart}
//       onTouchEnd={onTouchEnd}
//       className="
//         relative
//         min-h-screen
//         overflow-hidden
//         py-24
//         lg:py-32
//         px-6
//         select-none
//       "
//       style={{
//         background: BG,
//         color: "#fff",
//       }}
//     >
//       {/* =================================================
//           AMBIENT BACKGROUND
//       ================================================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           pointer-events-none
//         "
//         style={{
//           background: `
//             radial-gradient(
//               circle at 50% 50%,
//               rgba(94,234,212,.07),
//               transparent 38%
//             ),
//             radial-gradient(
//               circle at 20% 20%,
//               rgba(196,181,253,.05),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 80% 80%,
//               rgba(96,165,250,.04),
//               transparent 30%
//             )
//           `,
//         }}
//       />

//       {/* =================================================
//           PARTICLES
//       ================================================= */}

//       <div
//         className="
//           absolute
//           inset-0
//           pointer-events-none
//         "
//       >
//         {particles.map((p) => (
//           <motion.span
//             key={p.id}
//             animate={
//               prefersReducedMotion
//                 ? {}
//                 : {
//                     y: [
//                       0,
//                       -20,
//                       0,
//                     ],
//                     x: [
//                       0,
//                       8,
//                       0,
//                     ],
//                     opacity: [
//                       0.1,
//                       0.65,
//                       0.1,
//                     ],
//                   }
//             }
//             transition={{
//               duration: p.duration,
//               delay: p.delay,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               rounded-full
//             "
//             style={{
//               top: `${p.top}%`,
//               left: `${p.left}%`,
//               width: p.size,
//               height: p.size,
//               background: p.color,
//               boxShadow: `0 0 10px ${p.color}`,
//             }}
//           />
//         ))}
//       </div>

//       {/* =================================================
//           HEADER
//       ================================================= */}

//       <div
//         className="
//           relative
//           z-20
//           mx-auto
//           max-w-4xl
//           text-center
//         "
//       >
//         <Eyebrow>
//           PROCESS
//         </Eyebrow>

//         <motion.h2
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="
//             mt-5
//             font-display
//             text-4xl
//             md:text-5xl
//             lg:text-6xl
//             font-bold
//             text-white
//           "
//         >
//           How We Work
//         </motion.h2>

//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 15,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             delay: 0.15,
//             duration: 0.6,
//           }}
//           className="
//             mx-auto
//             mt-5
//             max-w-lg
//             text-sm
//             md:text-base
//             leading-relaxed
//             text-white/40
//           "
//         >
//           Scroll up or down to move through
//           our process.
//         </motion.p>
//       </div>

//       {/* =================================================
//           DNA STAGE
//       ================================================= */}

//       <div
//         className="
//           relative
//           z-20
//           mx-auto
//           mt-12
//           h-[600px]
//           max-w-[1100px]
//         "
//         style={{
//           perspective: "1600px",
//         }}
//       >
//         {/* ===============================================
//             LEFT DNA STRAND
//         =============================================== */}

//         <motion.div
//           className="
//             absolute
//             left-1/2
//             top-0
//             h-full
//             w-[180px]
//             -translate-x-1/2
//             pointer-events-none
//           "
//           animate={{
//             x:
//               active % 2 === 0
//                 ? -100
//                 : 100,
//           }}
//           transition={{
//             duration: 1,
//             ease: [
//               0.22,
//               1,
//               0.36,
//               1,
//             ],
//           }}
//         >
//           <div
//             className="
//               absolute
//               left-1/2
//               top-0
//               h-full
//               w-px
//             "
//             style={{
//               background: `
//                 linear-gradient(
//                   180deg,
//                   transparent,
//                   rgba(94,234,212,.5),
//                   rgba(196,181,253,.35),
//                   rgba(94,234,212,.5),
//                   transparent
//                 )
//               `,
//               boxShadow:
//                 "0 0 18px rgba(94,234,212,.3)",
//             }}
//           />

//           {/* DNA nodes */}

//           {Array.from({
//             length: 9,
//           }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="
//                 absolute
//                 left-1/2
//                 -translate-x-1/2
//                 rounded-full
//               "
//               animate={{
//                 y: [
//                   i * 75,
//                   i * 75 - 12,
//                   i * 75,
//                 ],
//                 x: [
//                   Math.sin(i) * 65,
//                   Math.sin(i + 0.8) * 65,
//                   Math.sin(i) * 65,
//                 ],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.1,
//               }}
//               style={{
//                 top: 0,
//                 width: 5,
//                 height: 5,
//                 background:
//                   i % 2 === 0
//                     ? TEAL
//                     : PURPLE,
//                 boxShadow:
//                   i % 2 === 0
//                     ? "0 0 12px rgba(94,234,212,.8)"
//                     : "0 0 12px rgba(196,181,253,.8)",
//               }}
//             />
//           ))}
//         </motion.div>

//         {/* ===============================================
//             RIGHT DNA STRAND
//         =============================================== */}

//         <motion.div
//           className="
//             absolute
//             left-1/2
//             top-0
//             h-full
//             w-[180px]
//             -translate-x-1/2
//             pointer-events-none
//           "
//           animate={{
//             x:
//               active % 2 === 0
//                 ? 100
//                 : -100,
//           }}
//           transition={{
//             duration: 1,
//             ease: [
//               0.22,
//               1,
//               0.36,
//               1,
//             ],
//           }}
//         >
//           <div
//             className="
//               absolute
//               left-1/2
//               top-0
//               h-full
//               w-px
//             "
//             style={{
//               background: `
//                 linear-gradient(
//                   180deg,
//                   transparent,
//                   rgba(196,181,253,.45),
//                   rgba(94,234,212,.35),
//                   rgba(196,181,253,.45),
//                   transparent
//                 )
//               `,
//               boxShadow:
//                 "0 0 18px rgba(196,181,253,.25)",
//             }}
//           />

//           {Array.from({
//             length: 9,
//           }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="
//                 absolute
//                 left-1/2
//                 -translate-x-1/2
//                 rounded-full
//               "
//               animate={{
//                 y: [
//                   i * 75,
//                   i * 75 - 12,
//                   i * 75,
//                 ],
//                 x: [
//                   Math.sin(i + Math.PI) *
//                     65,
//                   Math.sin(
//                     i +
//                       0.8 +
//                       Math.PI
//                   ) * 65,
//                   Math.sin(
//                     i + Math.PI
//                   ) * 65,
//                 ],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.1,
//               }}
//               style={{
//                 top: 0,
//                 width: 5,
//                 height: 5,
//                 background:
//                   i % 2 === 0
//                     ? PURPLE
//                     : TEAL,
//                 boxShadow:
//                   i % 2 === 0
//                     ? "0 0 12px rgba(196,181,253,.8)"
//                     : "0 0 12px rgba(94,234,212,.8)",
//               }}
//             />
//           ))}
//         </motion.div>

//         {/* ===============================================
//             DNA HORIZONTAL CONNECTORS
//         =============================================== */}

//         <div
//           className="
//             absolute
//             left-1/2
//             top-0
//             h-full
//             w-[260px]
//             -translate-x-1/2
//             pointer-events-none
//           "
//         >
//           {Array.from({
//             length: 8,
//           }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="
//                 absolute
//                 left-1/2
//                 h-px
//                 -translate-x-1/2
//                 origin-center
//               "
//               animate={{
//                 width: [
//                   90,
//                   230,
//                   90,
//                 ],
//                 rotate: [
//                   i % 2 === 0
//                     ? 12
//                     : -12,
//                   i % 2 === 0
//                     ? -12
//                     : 12,
//                   i % 2 === 0
//                     ? 12
//                     : -12,
//                 ],
//                 opacity: [
//                   0.2,
//                   0.55,
//                   0.2,
//                 ],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 delay: i * 0.2,
//                 ease: "easeInOut",
//               }}
//               style={{
//                 top: `${60 + i * 70}px`,
//                 background:
//                   i % 2 === 0
//                     ? TEAL
//                     : PURPLE,
//                 boxShadow:
//                   "0 0 12px rgba(94,234,212,.45)",
//               }}
//             />
//           ))}
//         </div>

//         {/* ===============================================
//             ACTIVE CARD
//         =============================================== */}

//         <AnimatePresence
//           mode="wait"
//           custom={direction}
//         >
//           <motion.div
//             key={item.step}
//             custom={direction}
//             variants={cardVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={
//               prefersReducedMotion
//                 ? {
//                     duration: 0,
//                   }
//                 : {
//                     type: "spring",
//                     stiffness: 125,
//                     damping: 20,
//                     mass: 0.8,
//                   }
//             }
//             className="
//               absolute
//               left-1/2
//               top-1/2
//               z-30
//               w-[min(430px,calc(100vw-48px))]
//               -translate-x-1/2
//               -translate-y-1/2
//             "
//             style={{
//               transformStyle:
//                 "preserve-3d",
//             }}
//           >
//             {/* CARD GLOW */}

//             <motion.div
//               animate={{
//                 opacity: [
//                   0.35,
//                   0.7,
//                   0.35,
//                 ],
//                 scale: [
//                   0.98,
//                   1.04,
//                   0.98,
//                 ],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//                 absolute
//                 -inset-5
//                 rounded-[40px]
//                 pointer-events-none
//               "
//               style={{
//                 background: `
//                   radial-gradient(
//                     circle,
//                     rgba(94,234,212,.2),
//                     transparent 65%
//                   )
//                 `,
//                 filter: "blur(20px)",
//               }}
//             />

//             {/* CARD */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[30px]
//                 border
//                 border-white/15
//                 bg-white/[0.055]
//                 p-8
//                 md:p-10
//                 backdrop-blur-2xl
//               "
//               style={{
//                 boxShadow: `
//                   0 40px 100px rgba(0,0,0,.7),
//                   0 0 60px rgba(94,234,212,.08),
//                   inset 0 1px 0 rgba(255,255,255,.08)
//                 `,
//               }}
//             >
//               {/* TOP LIGHT */}

//               <div
//                 className="
//                   absolute
//                   left-0
//                   right-0
//                   top-0
//                   h-px
//                 "
//                 style={{
//                   background: `
//                     linear-gradient(
//                       90deg,
//                       transparent,
//                       ${TEAL},
//                       ${PURPLE},
//                       transparent
//                     )
//                   `,
//                   boxShadow:
//                     "0 0 18px rgba(94,234,212,.8)",
//                 }}
//               />

//               {/* CARD NUMBER */}

//               <div
//                 className="
//                   absolute
//                   right-7
//                   top-7
//                   font-mono
//                   text-[10px]
//                   tracking-[3px]
//                   text-white/30
//                 "
//               >
//                 0{item.step}
//               </div>

//               {/* ICON */}

//               <motion.div
//                 animate={{
//                   y: [
//                     0,
//                     -5,
//                     0,
//                   ],
//                   rotate: [
//                     0,
//                     3,
//                     0,
//                   ],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="
//                   relative
//                   mx-auto
//                   flex
//                   h-20
//                   w-20
//                   items-center
//                   justify-center
//                   rounded-[24px]
//                   border
//                   border-teal-300/25
//                   bg-teal-300/[0.08]
//                 "
//                 style={{
//                   boxShadow:
//                     "0 0 35px rgba(94,234,212,.12)",
//                 }}
//               >
//                 {Icon && (
//                   <Icon
//                     size={34}
//                     className="text-teal-300"
//                   />
//                 )}

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     rounded-[24px]
//                   "
//                   style={{
//                     boxShadow:
//                       "inset 0 0 25px rgba(94,234,212,.08)",
//                   }}
//                 />
//               </motion.div>

//               {/* STEP */}

//               <div
//                 className="
//                   mt-7
//                   text-center
//                   font-mono
//                   text-[10px]
//                   uppercase
//                   tracking-[4px]
//                   text-teal-300/60
//                 "
//               >
//                 Process / Step {item.step}
//               </div>

//               {/* TITLE */}

//               <motion.h3
//                 key={`title-${item.step}`}
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.15,
//                   duration: 0.45,
//                 }}
//                 className="
//                   mt-4
//                   text-center
//                   font-display
//                   text-3xl
//                   md:text-4xl
//                   font-bold
//                   text-white
//                 "
//               >
//                 {item.title}
//               </motion.h3>

//               {/* LINE */}

//               <motion.div
//                 initial={{
//                   width: 0,
//                 }}
//                 animate={{
//                   width: 80,
//                 }}
//                 transition={{
//                   delay: 0.2,
//                   duration: 0.5,
//                 }}
//                 className="
//                   mx-auto
//                   mt-5
//                   h-px
//                 "
//                 style={{
//                   background: `
//                     linear-gradient(
//                       90deg,
//                       ${TEAL},
//                       ${PURPLE}
//                     )
//                   `,
//                   boxShadow:
//                     "0 0 12px rgba(94,234,212,.6)",
//                 }}
//               />

//               {/* DESCRIPTION */}

//               <motion.p
//                 key={`body-${item.step}`}
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.28,
//                   duration: 0.5,
//                 }}
//                 className="
//                   mt-6
//                   text-center
//                   text-sm
//                   md:text-[15px]
//                   leading-7
//                   text-white/50
//                 "
//               >
//                 {item.body}
//               </motion.p>

//               {/* BOTTOM */}

//               <div
//                 className="
//                   mt-8
//                   flex
//                   items-center
//                   justify-center
//                   gap-3
//                 "
//               >
//                 <span
//                   className="
//                     h-1.5
//                     w-1.5
//                     rounded-full
//                     bg-teal-300
//                   "
//                   style={{
//                     boxShadow:
//                       "0 0 10px rgba(94,234,212,.9)",
//                   }}
//                 />

//                 <span
//                   className="
//                     font-mono
//                     text-[9px]
//                     uppercase
//                     tracking-[3px]
//                     text-white/25
//                   "
//                 >
//                   Scroll to continue
//                 </span>

//                 <span
//                   className="
//                     h-1.5
//                     w-1.5
//                     rounded-full
//                     bg-purple-300
//                   "
//                   style={{
//                     boxShadow:
//                       "0 0 10px rgba(196,181,253,.9)",
//                   }}
//                 />
//               </div>

//               {/* MOVING LIGHT */}

//               <motion.div
//                 animate={{
//                   x: [
//                     "-150%",
//                     "180%",
//                   ],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   left-0
//                   top-0
//                   h-full
//                   w-20
//                   rotate-12
//                   bg-white/10
//                   blur-2xl
//                 "
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* ===============================================
//             TOP / BOTTOM POSITION INDICATORS
//         =============================================== */}

//         <div
//           className="
//             absolute
//             left-1/2
//             top-[22%]
//             -translate-x-1/2
//             pointer-events-none
//           "
//         >
//           <DNAOrb
//             position="0px"
//             active={active === 0}
//           />
//         </div>

//         <div
//           className="
//             absolute
//             bottom-[22%]
//             left-1/2
//             -translate-x-1/2
//             pointer-events-none
//           "
//         >
//           <DNAOrb
//             position="0px"
//             active={active === total - 1}
//           />
//         </div>
//       </div>

//       {/* =================================================
//           PROGRESS
//       ================================================= */}

//       <div
//         className="
//           relative
//           z-30
//           mt-2
//           flex
//           justify-center
//           gap-3
//         "
//       >
//         {process.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             onClick={() =>
//               goTo(
//                 index,
//                 index > active
//                   ? 1
//                   : -1
//               )
//             }
//             aria-label={`Go to process step ${
//               index + 1
//             }`}
//             className="
//               group
//               p-1
//               outline-none
//             "
//           >
//             <motion.span
//               animate={{
//                 width:
//                   active === index
//                     ? 34
//                     : 8,
//                 opacity:
//                   active === index
//                     ? 1
//                     : 0.3,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="
//                 block
//                 h-1.5
//                 rounded-full
//               "
//               style={{
//                 background:
//                   active === index
//                     ? TEAL
//                     : "#ffffff",
//                 boxShadow:
//                   active === index
//                     ? "0 0 12px rgba(94,234,212,.8)"
//                     : "none",
//               }}
//             />
//           </button>
//         ))}
//       </div>

//       {/* =================================================
//           SCROLL INDICATOR
//       ================================================= */}

//       <motion.div
//         animate={{
//           y: [0, 7, 0],
//           opacity: [
//             0.35,
//             0.8,
//             0.35,
//           ],
//         }}
//         transition={{
//           duration: 1.8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           relative
//           z-20
//           mt-10
//           flex
//           flex-col
//           items-center
//           gap-2
//           text-white/25
//         "
//       >
//         <span
//           className="
//             font-mono
//             text-[9px]
//             uppercase
//             tracking-[3px]
//           "
//         >
//           Scroll
//         </span>

//         <div
//           className="
//             h-8
//             w-px
//           "
//           style={{
//             background: `
//               linear-gradient(
//                 180deg,
//                 ${TEAL},
//                 transparent
//               )
//             `,
//           }}
//         />
//       </motion.div>
//     </section>
//   );
// }