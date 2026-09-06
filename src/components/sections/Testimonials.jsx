import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiStar,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Eyebrow from "../ui/Eyebrow";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const items = testimonials?.slice(0, 3) || [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  const active = items[activeIndex];

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevCard = () => {
    setActiveIndex(
      (prev) => (prev - 1 + items.length) % items.length
    );
  };

  /* =========================================================
     SECTION ENTRANCE
     LEFT SIDE COMES FROM LEFT
     RIGHT SIDE COMES FROM RIGHT
  ========================================================= */

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.05,
      },
    },
  };

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -140,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.05,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 160,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const backgroundLeftVariants = {
    hidden: {
      opacity: 0,
      x: -180,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const backgroundRightVariants = {
    hidden: {
      opacity: 0,
      x: 180,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={sectionVariants}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >

      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* =====================================================
            LEFT ATMOSPHERIC LIGHT
        ===================================================== */}

        <motion.div
          variants={backgroundLeftVariants}
          className="absolute -left-40 top-[18%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.045] blur-[140px]"
          animate={{
            x: [0, 45, 0],
            y: [0, 25, 0],
            scale: [1, 1.12, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            RIGHT ATMOSPHERIC LIGHT
        ===================================================== */}

        <motion.div
          variants={backgroundRightVariants}
          className="absolute -right-36 bottom-[10%] h-[480px] w-[480px] rounded-full bg-cyan-500/[0.035] blur-[140px]"
          animate={{
            x: [0, -45, 0],
            y: [0, -25, 0],
            scale: [1, 1.14, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            CENTER GLOW
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.4,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[150px]"
        />

        {/* =====================================================
            TECHNICAL GRID
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.15,
          }}
          whileInView={{
            opacity: 0.13,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.10) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 75%)",
          }}
        />

        {/* =====================================================
            MOVING GRID LIGHT
        ===================================================== */}

        <motion.div
          className="absolute left-[-20%] top-0 h-full w-[35%] bg-gradient-to-r from-transparent via-blue-400/[0.025] to-transparent blur-2xl"
          animate={{
            x: ["0%", "350%", "0%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =====================================================
            HORIZONTAL LIGHT BEAM
        ===================================================== */}

        {/* <motion.div
          initial={{
            opacity: 0,
            x: "-30%",
          }}
          whileInView={{
            opacity: 1,
            x: "0%",
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.3,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute left-[-20%] top-[22%] h-px w-[140%] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        /> */}

        {/* <motion.div
          className="absolute left-[-20%] top-[22%] h-px w-[140%] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          animate={{
            x: ["-10%", "10%", "-10%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        /> */}

        {/* <motion.div
          className="absolute left-[-20%] top-[76%] h-px w-[140%] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          animate={{
            x: ["10%", "-10%", "10%"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        /> */}

        {/* =====================================================
            VERTICAL LIGHT BEAMS
        ===================================================== */}

        {/* <motion.div
          className="absolute left-[18%] top-[-20%] h-[140%] w-px bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"
          animate={{
            y: ["-10%", "10%", "-10%"],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        /> */}

        <motion.div
          className="absolute right-[20%] top-[-20%] h-[140%] w-px bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          animate={{
            y: ["10%", "-10%", "10%"],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            FLOATING PARTICLES
        ===================================================== */}

        {[...Array(28)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-blue-300/50"
            style={{
              width: index % 5 === 0 ? 4 : 2,
              height: index % 5 === 0 ? 4 : 2,
              left: `${(index * 17) % 97}%`,
              top: `${(index * 29) % 94}%`,
              boxShadow:
                "0 0 12px rgba(96,165,250,.55)",
            }}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -40 : 40,
            }}
            whileInView={{
              opacity: [0.08, 0.7, 0.15],
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            animate={{
              y: [0, -30, 15, 0],
              opacity: [0.08, 0.7, 0.15],
              scale: [0.7, 1.5, 0.7],
            }}
            transition={{
              duration: 5 + (index % 6),
              delay: index * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* =====================================================
            CORNER LIGHTS
        ===================================================== */}

        <motion.div
          className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-600/[0.045] blur-[130px]"
          animate={{
            x: [0, 70, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.035] blur-[130px]"
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* VIGNETTE */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,.13)_100%)]" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:gap-12 2xl:px-4">

        {/* =======================================================
            LEFT SIDE
        ======================================================= */}

        <motion.div
          variants={leftVariants}
          className="relative z-10 w-full max-w-[470px] lg:justify-self-start"
        >

          {/* LEFT DECORATIVE HUD */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mb-6 flex items-center gap-3"
          >

            {/* <motion.span
              animate={{
                width: ["28px", "55px", "28px"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px bg-blue-400"
            />

            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-blue-400/50">
              CLIENT / 003
            </span>

            <motion.span
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.8)]"
            /> */}

          </motion.div>

          <Eyebrow>Client Success</Eyebrow>

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-5 max-w-[450px] text-[42px] leading-[0.9] tracking-[-0.055em] sm:text-[52px] lg:text-[58px] xl:text-[60px]"
            style={{
              fontFamily:
                '"Chakra Petch", sans-serif',
            }}
          >

            {/* HEADING GLOW */}

            <motion.div
              animate={{
                opacity: [0.35, 0.75, 0.35],
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -left-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[60px]"
            />

            <motion.span
              className="relative mr-5 inline-block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: [
                  "0% center",
                  "100% center",
                  "0% center",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Experiences
            </motion.span>

            <motion.span
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
            >
              people
            </motion.span>

            <br />

            <motion.span
              className="inline-block bg-gradient-to-r from-white via-blue-300 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: [
                  "0% center",
                  "100% center",
                  "0% center",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              remember
            </motion.span>

            <motion.span
              className="ml-2 inline-block text-cyan-300"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              !
            </motion.span>

          </motion.h2>

          {/* DECORATIVE UNDERLINE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-6 flex items-center gap-2"
          >

            <motion.div
              animate={{
                width: ["20px", "80px", "20px"],
              }}
              transition={{
                duration: 4,
                // repeat: Infinity,
                // ease: "easeInOut",
              }}
              className="h-px bg-gradient-to-r from-blue-400 to-cyan-400"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[var(--fg)]/20">
              Human experience / digital systems
            </span>

          </motion.div>

          {/* DESCRIPTION */}

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
              delay: 0.6,
            }}
            className="mt-7 max-w-[410px] text-sm leading-6 text-[var(--fg)]/50 sm:text-[15px] sm:leading-7"
          >
            Great digital products are not only about how they
            look. They are about how people feel when they use
            them. These are some of the experiences created with
            our clients.
          </motion.p>

          {/* INFO METRICS */}

          <motion.div
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
              duration: 0.8,
              delay: 0.7,
            }}
            className="mt-8 grid max-w-[400px] grid-cols-3 gap-2"
          >

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-xl border border-blue-400/[0.08] bg-blue-500/[0.025] px-3 py-3"
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="font-mono text-lg text-blue-400">
                03
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.16em] text-[var(--fg)]/25">
                Reviews
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-xl border border-blue-400/[0.08] bg-blue-500/[0.025] px-3 py-3"
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="font-mono text-lg text-cyan-400">
                5.0
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.16em] text-[var(--fg)]/25">
                Rating
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-xl border border-blue-400/[0.08] bg-blue-500/[0.025] px-3 py-3"
            >
              <motion.div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="font-mono text-lg text-blue-300">
                100%
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.16em] text-[var(--fg)]/25">
                Verified
              </div>
            </motion.div>

          </motion.div>

          {/* FOOTER STATUS */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.85,
            }}
            className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[var(--fg)]/30"
          >

            <span className="relative flex h-2 w-2">

              <motion.span
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full bg-blue-400"
              />

              <span className="relative h-2 w-2 rounded-full bg-blue-400" />

            </span>

            Built through collaboration

          </motion.div>

        </motion.div>

        {/* =======================================================
            RIGHT SIDE
        ======================================================= */}

        <motion.div
          variants={rightVariants}
className="relative flex min-h-[500px] w-full items-center justify-center lg:min-h-[520px]"        >

          {/* RIGHT PANEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute inset-[2%] overflow-hidden rounded-[42px] border border-blue-400/[0.06] bg-blue-950/[0.018]"
          >

            {/* TOP LINE */}

            <div className="absolute left-8 right-8 top-7 flex items-center justify-between">

              <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-blue-400/30">
                EXPERIENCE_MATRIX
              </span>

              <div className="flex items-center gap-2">

                <motion.span
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-blue-400/60"
                />

                <span className="h-px w-12 bg-gradient-to-r from-blue-400/40 to-transparent" />

              </div>

            </div>

            {/* BOTTOM LINE */}

            <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between">

              <span className="font-mono text-[7px] tracking-[0.2em] text-[var(--fg)]/15">
                DES / HUMAN-CENTERED SYSTEMS
              </span>

              <motion.span
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="font-mono text-[7px] tracking-[0.2em] text-blue-400/30"
              >
                00{activeIndex + 1}
              </motion.span>

            </div>

          </motion.div>

          {/* =====================================================
              CENTRAL ENERGY
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2"
          >

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >

              {/* LARGE GLOW */}

              <motion.div
                animate={{
                  opacity: [0.25, 0.65, 0.25],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[100px]"
              />

              {/* TECH CIRCLE */}

              <div className="absolute inset-[25px] rounded-full border border-blue-400/[0.045]" />

              <div className="absolute inset-[65px] rounded-full border border-dashed border-cyan-400/[0.045]" />

              <div className="absolute inset-[110px] rounded-full border border-blue-400/[0.035]" />

            </motion.div>

          </motion.div>

          {/* =====================================================
              CENTER CORE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.4,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-36 w-36 items-center justify-center rounded-full border border-blue-400/[0.10] bg-blue-500/[0.018] shadow-[0_0_100px_rgba(59,130,246,.08)]"
            >

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-3 rounded-full border border-cyan-400/[0.06]"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-7 rounded-full border border-blue-400/[0.08]"
              />

              <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">

                <div className="text-center">

                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-xl font-semibold tracking-[-0.08em] text-blue-400"
                  >
                    DES
                  </motion.div>

                  <div className="mt-1 text-[6px] uppercase tracking-[0.25em] text-[var(--fg)]/30">
                    Reviews
                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* =====================================================
              SIDE DATA LABELS
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="pointer-events-none absolute left-[4%] top-[30%] hidden lg:block"
            animate={{
              y: [0, -8, 0],
            }}
          >
            <div className="flex items-center gap-2">

              <span className="h-px w-8 bg-blue-400/30" />

              <span className="font-mono text-[7px] tracking-[0.18em] text-blue-400/30">
                TRUST
              </span>

            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="pointer-events-none absolute right-[4%] top-[40%] hidden lg:block"
            animate={{
              y: [0, 8, 0],
            }}
          >
            <div className="flex items-center gap-2">

              <span className="font-mono text-[7px] tracking-[0.18em] text-cyan-400/30">
                IMPACT
              </span>

              <span className="h-px w-8 bg-cyan-400/30" />

            </div>
          </motion.div>

          {/* =====================================================
              DESKTOP CARDS
              CARD FUNCTIONALITY PRESERVED
          ===================================================== */}

          <div className="relative hidden h-[600px] w-full lg:block">

            {/* CONNECTION LINES */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[1px] w-[500px] -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-blue-400/[0.10] to-transparent"
            />

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[1px] w-[500px] -translate-x-1/2 -rotate-[18deg] bg-gradient-to-r from-transparent via-cyan-400/[0.08] to-transparent"
            />

            {items.map((item, index) => {

              const isActive =
                activeIndex === index;

              const positions = [
                {
                  x: -180,
                  y: -190,
                  rotate: 0,
                },
                {
                  x: -360,
                  y: -140,
                  rotate: -5,
                },
                {
                  x: -30,
                  y: -140,
                  rotate: 5,
                },
              ];

              const position =
                positions[index] ||
                positions[0];

              return (
                <motion.button
                  key={index}
                  type="button"
                  onMouseEnter={() =>
                    setActiveIndex(index)
                  }
                  onFocus={() =>
                    setActiveIndex(index)
                  }
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  initial={{
                    opacity: 0,
                    x:
                      position.x +
                      (index === 1
                        ? -160
                        : index === 2
                        ? 160
                        : 100),
                    y:
                      position.y +
                      60,
                    scale: 0.8,
                    rotate:
                      position.rotate +
                      (index === 1
                        ? -8
                        : index === 2
                        ? 8
                        : 0),
                  }}
                  whileInView={{
                    opacity: 1,
                    x: isActive
                      ? position.x
                      : position.x * 0.95,
                    y: isActive
                      ? position.y
                      : position.y * 0.95,
                    scale: isActive
                      ? 1
                      : 0.9,
                    rotate: position.rotate,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  animate={{
                    x: isActive
                      ? position.x
                      : position.x * 0.95,

                    y: isActive
                      ? position.y
                      : position.y * 0.95,

                    scale: isActive
                      ? 1
                      : 0.9,

                    rotate: position.rotate,

                    opacity: 1,

                    zIndex: isActive
                      ? 30
                      : 10 - index,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                  }}
                  className="absolute left-1/2 top-1/2 w-[390px] -translate-x-1/2 -translate-y-1/2 cursor-pointer text-left outline-none"
                >

                  {/* CARD SPOTLIGHT */}

                  <motion.div
                    animate={{
                      opacity: isActive
                        ? 1
                        : 0,
                      scale: isActive
                        ? 1
                        : 0.8,
                    }}
                    className="pointer-events-none absolute -inset-5 -z-10 rounded-[40px] bg-blue-500/[0.08] blur-[35px]"
                  />

                  <TestimonialCard
                    item={item}
                    index={index}
                    isActive={isActive}
                  />

                </motion.button>
              );
            })}

          </div>

          {/* =====================================================
              MOBILE
          ===================================================== */}

          <div className="relative flex w-full flex-col items-center lg:hidden">

            <div className="w-full max-w-[420px] overflow-hidden">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -40,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >

                  <TestimonialCard
                    item={active}
                    index={activeIndex}
                    isActive
                  />

                </motion.div>

              </AnimatePresence>

            </div>

            {/* MOBILE CONTROLS */}

            <div className="mt-5 flex items-center gap-3">

              <button
                type="button"
                onClick={prevCard}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)]/50 transition hover:border-blue-400/30 hover:text-blue-400"
              >
                <FiChevronLeft size={15} />
              </button>

              <div className="flex items-center gap-1.5">

                {items.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-7 bg-blue-400"
                        : "w-1.5 bg-[var(--fg)]/15"
                    }`}
                  />
                ))}

              </div>

              <button
                type="button"
                onClick={nextCard}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)]/50 transition hover:border-blue-400/30 hover:text-blue-400"
              >
                <FiChevronRight size={15} />
              </button>

            </div>

          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   TESTIMONIAL CARD
   CARD DESIGN / FUNCTIONALITY PRESERVED
============================================================ */

function TestimonialCard({
  item,
  index,
  isActive,
}) {

  const cardNumber =
    ["01", "02", "03"][index] ||
    String(index + 1).padStart(2, "0");

  return (
    <div
      className={`relative min-h-[350px] overflow-hidden rounded-[30px] border border-blue-400/20 bg-[#0D192B] p-5 shadow-[0_25px_70px_rgba(0,0,0,.35)] transition-all duration-500 ${
        isActive
          ? "border-blue-400/40 shadow-[0_30px_90px_rgba(37,99,235,.22)]"
          : ""
      }`}
    >

      {/* GLOW */}

      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.08] blur-3xl transition-opacity duration-500 ${
          isActive
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      {/* TOP */}

      <div className="relative flex items-center justify-between">

        <div className="flex items-center gap-3">

          {/* CARD NUMBER */}

          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl border text-[10px] font-semibold transition-colors ${
              isActive
                ? "border-blue-400/20 bg-blue-500/10 text-blue-400"
                : "border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]/30"
            }`}
          >
            {cardNumber}
          </div>

          {/* STARS */}

          <div className="flex gap-1">

            {Array.from({
              length: 5,
            }).map((_, star) => (
              <FiStar
                key={star}
                size={11}
                className="fill-current text-yellow-400"
              />
            ))}

          </div>

        </div>

        {/* ARROW */}

        <motion.span
          animate={{
            rotate: isActive ? 45 : 0,
          }}
          className={`flex h-10 w-10 items-center justify-center rounded-full border ${
            isActive
              ? "border-blue-400/20 text-blue-400"
              : "border-[var(--border)] text-[var(--fg)]/25"
          }`}
        >
          <FiArrowUpRight size={15} />
        </motion.span>

      </div>

      {/* QUOTE */}

      <div className="relative mt-7">

        <span className="absolute -left-1 -top-7 font-serif text-7xl leading-none text-blue-400/20">
          “
        </span>

 <p
  className={`relative mt-16 pl-4 leading-7 transition-all duration-300 ${
            isActive
              ? "text-[16px] text-[var(--fg)]/75"
              : "line-clamp-3 text-sm text-[var(--fg)]/45"
          }`}
        >
          {item.quote}
        </p>

      </div>

      {/* CLIENT */}

      <div className="relative mt-7 border-t border-[var(--border)] pt-5">

        <div className="flex items-center justify-between gap-3">

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold text-[var(--fg)]">
              {item.name ||
                item.client ||
                "Client"}
            </p>

            <p className="mt-1 truncate text-[9px] uppercase tracking-[0.16em] text-[var(--fg)]/30">
              {item.role ||
                item.company ||
                "Client"}
            </p>

          </div>

          {/* VERIFIED */}

          {isActive && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/10 bg-emerald-400/[0.05] px-2.5 py-1.5"
            >

              <FiCheck
                size={9}
                className="text-emerald-400"
              />

              <span className="text-[7px] uppercase tracking-[0.12em] text-emerald-400/70">
                Verified
              </span>

            </motion.div>
          )}

        </div>

      </div>

    </div>
  );
}