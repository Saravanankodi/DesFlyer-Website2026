import {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

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
   CARD POSITIONS
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

  return (
    positions[String(offset)] || {
      x: offset < 0 ? -650 : 650,
      y: -250,
      scale: 0.4,
      rotateY: offset < 0 ? 45 : -45,
      rotateZ: offset < 0 ? -10 : 10,
      opacity: 0,
      blur: 8,
      z: 0,
    }
  );
}

/* =========================================================
   DNA RUNG
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
        opacity={
          opacity * (0.08 + Math.sin(t * Math.PI) * 0.18)
        }
      />
    );
  }

  return rungs;
}

/* =========================================================
   DNA HELIX
========================================================= */

function DNAHelix({ progress }) {
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
    <div className="pointer-events-none absolute inset-0">
      <svg
        viewBox="-500 -300 1000 600"
        className="
          absolute left-1/2 top-1/2
          h-[560px] w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
        "
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="dnaGradientA"
            x1="0"
            x2="1"
          >
            <stop
              offset="0%"
              stopColor="#5EEAD4"
              stopOpacity="0"
            />

            <stop
              offset="50%"
              stopColor="#5EEAD4"
              stopOpacity="0.7"
            />

            <stop
              offset="100%"
              stopColor="#60A5FA"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="dnaGradientB"
            x1="1"
            x2="0"
          >
            <stop
              offset="0%"
              stopColor="#8B5CF6"
              stopOpacity="0"
            />

            <stop
              offset="50%"
              stopColor="#8B5CF6"
              stopOpacity="0.7"
            />

            <stop
              offset="100%"
              stopColor="#60A5FA"
              stopOpacity="0"
            />
          </linearGradient>

          <filter id="dnaGlow">
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
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

        <path
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

        {dnaRungs(0.8)}
      </svg>

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
              point.id % 2 === 0
                ? "#5EEAD4"
                : "#8B5CF6",
            boxShadow:
              "0 0 12px rgba(94,234,212,.6)",
          }}
        />
      ))}

      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[2px] w-[260px]
          -translate-x-1/2
        "
        animate={{
          scaleX: 0.7 + progress * 0.3,
          opacity: 0.3 + progress * 0.5,
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, #5EEAD4, transparent)",
          boxShadow:
            "0 0 30px rgba(94,234,212,.7)",
        }}
      />
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const wheelLock = useRef(false);
  const touchStart = useRef(null);

  /*
   * Controls whether the Process section currently owns
   * the page scroll.
   */
  const processLockedRef = useRef(false);

  /*
   * Prevent duplicate release events.
   */
  const releaseLockRef = useRef(false);

  /*
   * Gives the browser time to naturally move away from
   * the process section after releasing control.
   */
  const releaseCooldownUntilRef = useRef(0);

  const RELEASE_COOLDOWN_MS = 700;

  const prefersReducedMotion = useReducedMotion();

  const particles = useParticles();

  const total = process.length;

  const [active, setActive] = useState(0);

  const [processLocked, setProcessLocked] =
    useState(false);

  /* =======================================================
     PROGRESS
  ======================================================= */

  const progress =
    total > 1
      ? active / (total - 1)
      : 0;

  /* =======================================================
     CHECK PROCESS CENTER POSITION
  ======================================================= */

  const checkProcessPosition = useCallback(() => {
    const stage = stageRef.current;

    if (!stage) {
      return false;
    }

    const rect =
      stage.getBoundingClientRect();

    const viewportCenter =
      window.innerHeight / 2;

    const stageCenter =
      rect.top + rect.height / 2;

    const centerTolerance = 70;

    const stageReachedCenter =
      Math.abs(
        stageCenter - viewportCenter
      ) <= centerTolerance;

    const stageVisible =
      rect.bottom > 0 &&
      rect.top < window.innerHeight;

    let shouldLock =
      stageReachedCenter &&
      stageVisible;

    if (
      Date.now() <
      releaseCooldownUntilRef.current
    ) {
      shouldLock = false;
    }

    if (
      processLockedRef.current !==
      shouldLock
    ) {
      processLockedRef.current =
        shouldLock;

      setProcessLocked(shouldLock);
    }

    return shouldLock;
  }, []);

  /* =======================================================
     SCROLL POSITION WATCHER
  ======================================================= */

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(() => {
        checkProcessPosition();
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener(
      "scroll",
      update,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      update
    );

    update();

    return () => {
      window.removeEventListener(
        "scroll",
        update
      );

      window.removeEventListener(
        "resize",
        update
      );
    };
  }, [checkProcessPosition]);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const goTo = useCallback(
    (nextIndex) => {
      if (total === 0) {
        return;
      }

      const safeIndex = Math.max(
        0,
        Math.min(
          total - 1,
          nextIndex
        )
      );

      setActive(safeIndex);
    },
    [total]
  );

  const next = useCallback(() => {
    if (active < total - 1) {
      goTo(active + 1);
      return true;
    }

    return false;
  }, [
    active,
    total,
    goTo,
  ]);

  const prev = useCallback(() => {
    if (active > 0) {
      goTo(active - 1);
      return true;
    }

    return false;
  }, [
    active,
    total,
    goTo,
  ]);

  /* =======================================================
     RELEASE PROCESS CONTROL
  ======================================================= */

  const releaseProcess = useCallback(
    () => {
      processLockedRef.current = false;

      setProcessLocked(false);

      releaseLockRef.current = true;

      releaseCooldownUntilRef.current =
        Date.now() + RELEASE_COOLDOWN_MS;

      window.requestAnimationFrame(() => {
        releaseLockRef.current = false;
      });
    },
    []
  );

  /* =======================================================
     WHEEL CONTROL
  ======================================================= */

  useEffect(() => {
    const onWheel = (e) => {
      if (!processLockedRef.current) {
        return;
      }

      if (releaseLockRef.current) {
        return;
      }

      if (wheelLock.current) {
        e.preventDefault();
        return;
      }

      /* ===================================================
         SCROLL DOWN
      =================================================== */

      if (e.deltaY > 0) {
        if (active < total - 1) {
          e.preventDefault();

          wheelLock.current = true;

          next();

          window.setTimeout(() => {
            wheelLock.current = false;
          }, 650);

          return;
        }

        releaseProcess();

        return;
      }

      /* ===================================================
         SCROLL UP
      =================================================== */

      if (e.deltaY < 0) {
        if (active > 0) {
          e.preventDefault();

          wheelLock.current = true;

          prev();

          window.setTimeout(() => {
            wheelLock.current = false;
          }, 650);

          return;
        }

        releaseProcess();

        return;
      }
    };

    window.addEventListener(
      "wheel",
      onWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        onWheel
      );
    };
  }, [
    active,
    total,
    next,
    prev,
    releaseProcess,
  ]);

  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!processLockedRef.current) {
        return;
      }

      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowRight"
      ) {
        if (active < total - 1) {
          e.preventDefault();

          if (!wheelLock.current) {
            wheelLock.current = true;

            next();

            window.setTimeout(() => {
              wheelLock.current = false;
            }, 650);
          }
        }
      }

      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowLeft"
      ) {
        if (active > 0) {
          e.preventDefault();

          if (!wheelLock.current) {
            wheelLock.current = true;

            prev();

            window.setTimeout(() => {
              wheelLock.current = false;
            }, 650);
          }
        }
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
    active,
    total,
    next,
    prev,
  ]);

  /* =======================================================
     TOUCH
  ======================================================= */

  const onTouchStart = (e) => {
    if (!e.touches?.length) {
      return;
    }

    touchStart.current =
      e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (
      touchStart.current === null
    ) {
      return;
    }

    const end =
      e.changedTouches?.[0]?.clientY;

    if (
      typeof end !== "number"
    ) {
      touchStart.current = null;
      return;
    }

    const difference =
      touchStart.current - end;

    touchStart.current = null;

    if (
      Math.abs(difference) < 55
    ) {
      return;
    }

    if (!processLockedRef.current) {
      return;
    }

    if (wheelLock.current) {
      return;
    }

    /* ===================================================
       SWIPE UP
    =================================================== */

    if (
      difference > 0 &&
      active < total - 1
    ) {
      wheelLock.current = true;

      next();

      window.setTimeout(() => {
        wheelLock.current = false;
      }, 650);

      return;
    }

    /* ===================================================
       SWIPE DOWN
    =================================================== */

    if (
      difference < 0 &&
      active > 0
    ) {
      wheelLock.current = true;

      prev();

      window.setTimeout(() => {
        wheelLock.current = false;
      }, 650);

      return;
    }

    /* ===================================================
       LAST CARD
    =================================================== */

    if (
      difference > 0 &&
      active >= total - 1
    ) {
      releaseProcess();

      return;
    }

    /* ===================================================
       FIRST CARD
    =================================================== */

    if (
      difference < 0 &&
      active <= 0
    ) {
      releaseProcess();
    }
  };

  /* =======================================================
     MOUSE PARALLAX
  ======================================================= */

  const mouseX =
    useMotionValue(0.5);

  const mouseY =
    useMotionValue(0.5);

  const smoothMouseX =
    useSpring(mouseX, {
      stiffness: 120,
      damping: 20,
      mass: 0.5,
    });

  const smoothMouseY =
    useSpring(mouseY, {
      stiffness: 120,
      damping: 20,
      mass: 0.5,
    });

  const rotateX =
    useTransform(
      smoothMouseY,
      [0, 1],
      [5, -5]
    );

  const rotateY =
    useTransform(
      smoothMouseX,
      [0, 1],
      [-5, 5]
    );

  function handleMouseMove(e) {
    if (prefersReducedMotion) {
      return;
    }

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

  if (!item) {
    return null;
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
   <section
  ref={sectionRef}
  onTouchStart={onTouchStart}
  onTouchEnd={onTouchEnd}
  className="
    relative
    min-h-0
    overflow-hidden
    bg-[#03070D]
    pt-5 pb-0
    text-white
    sm:min-h-screen
    sm:py-8
    lg:py-10
  "
  style={{ perspective: "1800px" }}
>
      {/* ===================================================
          AMBIENT BACKGROUND
      =================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
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
          GRID
      =================================================== */}

      <div
        className="
          pointer-events-none absolute inset-0
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
          PARTICLES
      =================================================== */}

      <div
        className="
          pointer-events-none absolute inset-0
        "
      >
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full"
            animate={{
              y: [0, -25, 0],
              x: [
                0,
                particle.id % 2
                  ? 8
                  : -8,
                0,
              ],
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
              duration:
                particle.duration,
              delay:
                particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width:
                particle.size,
              height:
                particle.size,
              background:
                particle.color,
              boxShadow: `
                0 0 ${particle.size * 5
                }px ${particle.color}
              `,
            }}
          />
        ))}
      </div>

      {/* ===================================================
          HEADER
      =================================================== */}

      <div
        className="
          relative z-30
          px-6 text-center
        "
      >
        <Eyebrow>
          OUR PROCESS
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
            duration: 0.7,
          }}
          className="
            mt-2
            font-display
            text-4xl
            font-bold
            tracking-tight
            md:mt-5
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
            mt-2
            max-w-xl
            text-sm
            leading-6
            text-white/40
            md:mt-4
            md:leading-7
          "
        >
          Scroll through our process and watch
          each stage move through the digital DNA.
        </motion.p>
      </div>

      {/* ===================================================
          PROCESS STAGE
      =================================================== */}

      <div
        ref={stageRef}
        className="
          relative z-20
          mx-auto
          mt-4
          flex
          h-[470px]
          w-full
          max-w-[1500px]
          items-center
          justify-center
          overflow-hidden
          sm:mt-8
          sm:h-[540px]
          lg:mt-10
          lg:h-[590px]
        "
        style={{
          perspective: "1800px",
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMouse}
      >
        {/* =================================================
            CONTROL INDICATOR
        ================================================= */}

        <motion.div
          animate={{
            opacity:
              processLocked
                ? 1
                : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
top-2 
        z-50
            -translate-x-1/2
            rounded-full
            border
            border-teal-300/10
            bg-teal-300/[0.04]
            px-4
            py-1.5
            sm:mb-5
            backdrop-blur-md
          "
        >
          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[.3em]
              text-teal-300/50
            "
          >
            {active === 0
              ? "PROCESS CONTROL"
              : active === total - 1
                ? "FINAL PHASE"
                : "PROCESS CONTROL"}
          </span>
        </motion.div>

        {/* =================================================
            DNA
        ================================================= */}

        <DNAHelix
          progress={progress}
        />

        {/* =================================================
            3D AREA
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
          {/* ===============================================
              PROCESS CARDS
          =============================================== */}

          <AnimatePresence
            initial={false}
          >
            {process.map(
              (
                processItem,
                index
              ) => {
                const offset =
                  index - active;

                if (
                  Math.abs(offset) >
                  3
                ) {
                  return null;
                }

                const position =
                  getCardPosition(
                    offset
                  );

                const ProcessIcon =
                  icons[
                  processItem.icon
                  ];

                const isActive =
                  offset === 0;

                return (
                  <motion.div
                    key={
                      processItem.step
                    }
                    className="
                      absolute
                      w-[300px]
                      sm:w-[350px]
                      lg:w-[430px]
                    "
                    animate={{
                      x: position.x,
                      y: position.y,
                      scale:
                        position.scale,
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
                      stiffness: 90,
                      damping: 24,
                      mass: 0.9,
                    }}
                    style={{
                      zIndex:
                        position.z,
                      transformStyle:
                        "preserve-3d",
                      pointerEvents:
                        isActive
                          ? "auto"
                          : "none",
                    }}
                  >
                    {/* =====================================
                        CARD
                    ===================================== */}

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

                        borderColor:
                          isActive
                            ? "rgba(94,234,212,.48)"
                            : "rgba(255,255,255,.10)",

                        boxShadow:
                          isActive
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
                      {/* CARD GRADIENT */}

                      <div
                        className="
                          pointer-events-none
                          absolute inset-0
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

                      {/* MOVING SHINE */}

                      {isActive && (
                        <motion.div
                          className="
                            pointer-events-none
                            absolute
                            -left-[40%]
                            top-0
                            h-full
                            w-[35%]
                            rotate-[18deg]
                          "
                          animate={{
                            left: [
                              "-40%",
                              "130%",
                            ],
                          }}
                          transition={{
                            duration: 4,
                            repeat:
                              Infinity,
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

                      {/* CARD TOP */}

                      <div
                        className="
                          relative z-10
                          flex
                          items-start
                          justify-between
                        "
                      >
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
                            ).padStart(
                              2,
                              "0"
                            )}
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
                            repeat:
                              Infinity,
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

                            color:
                              "#5EEAD4",

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

                      {/* CONTENT */}

                      <div
                        className="
                          relative z-10
                          mt-12
                        "
                      >
                        <motion.div
                          animate={{
                            width:
                              isActive
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
                          {
                            processItem.title
                          }
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
                          {
                            processItem.body
                          }
                        </p>
                      </div>

                      {/* CARD BOTTOM */}

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
                              repeat:
                                Infinity,
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

                      {/* BOTTOM NEON LINE */}

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
                          repeat:
                            Infinity,
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
              }
            )}
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
          MOBILE PROGRESS
      =================================================== */}

     <div
  className="
    relative z-40
    mx-auto
    mt-0
    mb-0
    flex
    max-w-md
    items-center
    justify-center
    gap-2
    px-6
    lg:hidden
  "
>
        {process.map(
          (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() =>
                goTo(index)
              }
              aria-label={`Go to process step ${index + 1
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
          )
        )}
      </div>
    </section>
  );
}







