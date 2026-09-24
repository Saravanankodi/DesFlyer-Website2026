import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiAperture,
  FiPlus,
} from "react-icons/fi";

import Button from "../ui/Button";
import { useTheme } from "../../hooks/useTheme";

/* =========================================================
   TIMING
========================================================= */

const INTRO_START_DELAY = 350;

const WORD_HOLD = 1300;
const WORD_TRANSITION = 600;

const DESFLYER_RISE_DURATION = 1200;
const DESFLYER_HOLD = 350;

const HERO_ENTER_DELAY = 250;

/* =========================================================
   CONTENT
========================================================= */

const introWords = ["Innovate", "Create", "Empower"];

const headlineLines = [
  "Innovate Software",
  "Solutions For Your",
  "Business.",
];

const capabilities = [
  "Web Applications",
  "Mobile Products",
  "Enterprise Systems",
  "UI / UX",
  "Automation & AI",
];

const stats = [
  {
    value: "50+",
    label: "Projects",
  },
  {
    value: "30+",
    label: "Clients",
  },
  {
    value: "5+",
    label: "Industries",
  },
];

/* =========================================================
   LETTER ANIMATION
========================================================= */

const letterContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.05,
    },
  },
};

const letterItem = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Hero() {
  const { theme } = useTheme();

  const [introPhase, setIntroPhase] = useState("words");
  const [activeIntroWord, setActiveIntroWord] = useState(0);

  const [introFinished, setIntroFinished] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  /* =======================================================
     THEME
  ======================================================= */

  const isDark = theme === "dark";

  const pageBg = isDark ? "#05070b" : "#f6f8fb";
  const primaryText = isDark ? "#ffffff" : "#0a0d12";
  const secondaryText = isDark
    ? "rgba(255,255,255,0.62)"
    : "rgba(10,13,18,0.62)";

  const borderColor = isDark
    ? "rgba(255,255,255,0.12)"
    : "rgba(10,13,18,0.12)";

  /* =======================================================
     INTRO FLOW

     EXACT FLOW:

     Innovate
        ↓
     Create
        ↓
     Empower
        ↓
     DESFLYER rises
        ↓
     Intro fades
        ↓
     Hero appears
  ======================================================= */

  useEffect(() => {
    let timers = [];

    const addTimer = (callback, delay) => {
      const timer = window.setTimeout(callback, delay);
      timers.push(timer);
      return timer;
    };

    setIntroPhase("words");
    setActiveIntroWord(0);
    setIntroFinished(false);
    setHeroVisible(false);

    /* -------------------------------------------------------
       Start word animation
    ------------------------------------------------------- */

    addTimer(() => {
      introWords.forEach((_, index) => {
        if (index === 0) return;

        addTimer(
          () => {
            setActiveIntroWord(index);
          },
          index * WORD_HOLD
        );
      });

      /* -----------------------------------------------------
         After all words → DESFLYER rise
      ----------------------------------------------------- */

      addTimer(
        () => {
          setIntroPhase("desflyer");
        },
        introWords.length * WORD_HOLD + WORD_TRANSITION
      );

      /* -----------------------------------------------------
         Finish intro after DESFLYER animation
      ----------------------------------------------------- */

      const desflyerFinishTime =
        introWords.length * WORD_HOLD +
        WORD_TRANSITION +
        DESFLYER_RISE_DURATION +
        DESFLYER_HOLD;

      addTimer(() => {
        setIntroFinished(true);
      }, desflyerFinishTime);

      /* -----------------------------------------------------
         Reveal actual hero content
      ----------------------------------------------------- */

      addTimer(() => {
        setHeroVisible(true);
      }, DESFLYER_RISE_DURATION + desflyerFinishTime + HERO_ENTER_DELAY);
    }, INTRO_START_DELAY);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  /* =======================================================
     ACTIONS
  ======================================================= */

  const scrollToPortfolio = () => {
    const section = document.getElementById("portfolio-projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    window.location.href = "/portfolio";
  };

  const openChat = () => {
    window.dispatchEvent(
      new CustomEvent("open-chat", {
        detail: {
          source: "hero",
        },
      })
    );
  };

  const goToServices = () => {
    const services = document.getElementById("services");

    if (services) {
      services.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    window.location.href = "/services";
  };

  /* =======================================================
     INTRO BACKGROUND TRANSITION

     The main hero video begins coming through during the
     DESFLYER stage so the transition feels continuous.
  ======================================================= */

  const mainHeroBackgroundVisible =
    introPhase === "desflyer" || introFinished;

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={{
        backgroundColor: pageBg,
        color: primaryText,
      }}
    >
      {/* =====================================================
          MAIN HERO BACKGROUND
      ===================================================== */}

      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: mainHeroBackgroundVisible ? 1 : 0,
          scale: mainHeroBackgroundVisible ? 1 : 1.04,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/nn.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        /> */}

        {/* Dark cinematic layer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,6,11,0.96) 0%, rgba(3,6,11,0.82) 34%, rgba(3,6,11,0.38) 67%, rgba(3,6,11,0.56) 100%)",
          }}
        />

        {/* Top darkness */}
        <div
          className="absolute inset-x-0 top-0 h-[32%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.72), transparent)",
          }}
        />

        {/* Bottom darkness */}
        <div
          className="absolute inset-x-0 bottom-0 h-[42%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92), transparent)",
          }}
        />

        {/* Blue atmosphere */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 76% 48%, rgba(46,111,255,0.24), transparent 28%), radial-gradient(circle at 58% 75%, rgba(0,157,255,0.08), transparent 30%)",
          }}
        />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.085]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </motion.div>

      {/* =====================================================
          OLD FULL-SCREEN INTRO

          No new circle.
          No first logo screen.
          No "Ideas → Design → Technology".
      ===================================================== */}

      <AnimatePresence>
        {!introFinished && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-hidden"
            style={{
              backgroundColor: "#05070b",
            }}
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              y: "-5%",
              scale: 1.015,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* -------------------------------------------------
                INTRO VIDEO
            ------------------------------------------------- */}

            <motion.div
              className="absolute inset-0"
              initial={{
                opacity: 0,
                scale: 1.05,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/ci.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </motion.div>

            {/* -------------------------------------------------
                DARK OVERLAY
            ------------------------------------------------- */}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(3,6,11,0.86), rgba(3,6,11,0.42) 50%, rgba(3,6,11,0.72))",
              }}
            />

            {/* -------------------------------------------------
                RADIAL BLUE ATMOSPHERE
            ------------------------------------------------- */}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(46,111,255,0.14), transparent 32%), radial-gradient(circle at 50% 100%, rgba(0,119,255,0.08), transparent 35%)",
              }}
            />

            {/* -------------------------------------------------
                HORIZONTAL LIGHT
            ------------------------------------------------- */}

            {/* <motion.div
              className="absolute left-0 right-0 top-1/2 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(46,111,255,0.45), transparent)",
              }}
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
            /> */}

            {/* -------------------------------------------------
                GRID
            ------------------------------------------------- */}

            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />

     

            {/* =================================================
                CENTER INTRO CONTENT
            ================================================= */}

            <div className="absolute inset-0 flex items-center justify-center px-5">
              <AnimatePresence mode="wait">
                {/* ------------------------------------------------
                    OLD WORD ANIMATION
                ------------------------------------------------ */}

                {introPhase === "words" && (
                  <motion.div
                    key="intro-words"
                    className="relative flex w-full items-center justify-center"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.04,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: WORD_TRANSITION / 1000,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={introWords[activeIntroWord]}
                        className="relative text-center"
                        initial={{
                          opacity: 0,
                          y: 80,
                          filter: "blur(18px)",
                          scale: 0.96,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: -80,
                          filter: "blur(18px)",
                          scale: 1.04,
                        }}
                        transition={{
                          duration: WORD_TRANSITION / 1000,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div
                          className="font-black uppercase leading-[0.82] tracking-[-0.075em] "
                          style={{
                            fontSize: "40px",
                            color: "#ffffff",
                            textShadow:
                              "0 0 60px rgba(46,111,255,0.14)",
                          }}
                        >
                          {introWords[activeIntroWord]}
                        </div>

                        {/* <motion.div
                          className="mx-auto mt-7 h-px w-24"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(46,111,255,0.9), transparent)",
                          }}
                          initial={{
                            opacity: 0,
                            scaleX: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scaleX: 1,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: 0.15,
                          }}
                        /> */}

                        {/* <motion.div
                          className="mt-4 text-[8px] uppercase tracking-[0.42em] text-white/40 sm:text-[9px]"
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2,
                          }}
                        >
                          {String(activeIntroWord + 1).padStart(2, "0")} /{" "}
                          {String(introWords.length).padStart(2, "0")}
                        </motion.div> */}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* =================================================
                    DESFLYER RISE

                    This replaces the old logo/letter stage.
                    It rises from below using the same intro screen.
                ================================================= */}

                {introPhase === "desflyer" && (
                  <motion.div
                    key="desflyer-rise"
                    className="relative flex w-full items-center justify-center overflow-hidden px-4"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="flex items-center justify-center whitespace-nowrap"
                      variants={letterContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {"DESFLYER".split("").map((letter, index) => (
                        <motion.span
                          key={`${letter}-${index}`}
                          variants={letterItem}
                          className="relative select-none font-black uppercase"
                          style={{
                            fontSize: "120px",
                            lineHeight: 0.8,
                            letterSpacing: "-0.09em",
                            color: "#ffffff",
                            textShadow:
                              "0 0 80px rgba(46,111,255,0.22)",
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Bottom scan line */}
                    {/* <motion.div
        className="absolute bottom-0 left-1/2 h-px w-[72%] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(46,111,255,0.95), transparent)",
        }}
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: [0, 1, 0.45],
          scaleX: [0, 1, 1],
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      /> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* -------------------------------------------------
                BOTTOM INTRO METADATA
            ------------------------------------------------- */}

            <motion.div
              className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:left-8 sm:right-8 sm:bottom-8 lg:left-12 lg:right-12"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            >
              <div>
                <div className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                  Ideas → Design → Technology
                </div>

                <div className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/20">
                  Digital systems for modern businesses
                </div>
              </div>

              {/* <div className="text-right">
                <div className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                  CHENNAI — INDIA
                </div>
              </div> */}
            </motion.div>

            {/* -------------------------------------------------
                INTRO EDGE MARKS
            ------------------------------------------------- */}

            <div className="pointer-events-none absolute left-5 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent sm:block" />

            <div className="pointer-events-none absolute right-5 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent sm:block" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <motion.div
        className="relative z-10 flex min-h-[100svh] flex-col"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: heroVisible ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >




        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div className="relative z-10 flex flex-1 items-end px-5 pb-24 pt-16 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
          <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-10">


            {/* =================================================
    LEFT CONTENT — KINETIC TYPOGRAPHY DESIGN
    RIGHT SIDE REMAINS COMPLETELY UNCHANGED
================================================= */}

            <motion.div
              className="relative max-w-[780px]"
              initial={{
                opacity: 0,
                x: -70,
              }}
              animate={{
                opacity: heroVisible ? 1 : 0,
                x: heroVisible ? 0 : -70,
              }}
              transition={{
                duration: 1.1,
                delay: heroVisible ? 0.15 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* =================================================
      CINEMATIC LIGHT FIELD
  ================================================= */}

              <div className="pointer-events-none absolute -inset-x-32 -inset-y-32 overflow-hidden">
                {/* Main atmospheric light */}
                <motion.div
                  className="absolute left-[15%] top-[22%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.09] blur-[120px]"
                  animate={{
                    x: [0, 45, -25, 0],
                    y: [0, -30, 25, 0],
                    scale: [1, 1.18, 0.92, 1],
                    opacity: [0.35, 0.7, 0.4, 0.35],
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Cyan secondary glow */}
                <motion.div
                  className="absolute left-[55%] top-[48%] h-[180px] w-[180px] rounded-full bg-cyan-400/[0.055] blur-[90px]"
                  animate={{
                    x: [-20, 30, -20],
                    y: [15, -20, 15],
                    opacity: [0.2, 0.6, 0.2],
                  }}  
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Soft radial light behind headline */}
                <div
                  className="absolute left-[-10%] top-[20%] h-[70%] w-[80%]"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(46,111,255,.10), transparent 65%)",
                  }}
                />

                {/* Moving cinematic beam */}
                <motion.div
                  className="absolute left-[-20%] top-[42%] h-px w-[120%]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(96,165,250,.65), rgba(255,255,255,.18), rgba(96,165,250,.4), transparent)",
                    boxShadow: "0 0 25px rgba(46,111,255,.35)",
                  }}
                  animate={{
                    x: ["-30%", "30%", "-30%"],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* =================================================
      TOP LABEL
  ================================================= */}

              <motion.div
                className="relative mb-8 mt-5 flex items-center gap-3"
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: heroVisible ? 1 : 0,
                  y: heroVisible ? 0 : 20,
                  filter: heroVisible ? "blur(0px)" : "blur(8px)",
                }}
                transition={{
                  duration: 0.7,
                  delay: heroVisible ? 0.25 : 0,
                }}
              >
                {/* Number */}
                {/* <motion.span
      className="font-mono text-[9px] tracking-[0.35em] text-blue-300/60"
      animate={{
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
      }}
    >
      01
    </motion.span> */}

                {/* Animated line */}
                {/* <motion.span
      className="relative h-px w-16 overflow-hidden bg-white/10"
      initial={{
        scaleX: 0,
        transformOrigin: "left",
      }}
      animate={{
        scaleX: heroVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.8,
        delay: heroVisible ? 0.45 : 0,
      }}
    >
      <motion.span
        className="absolute inset-y-0 left-0 w-1/2 bg-blue-400"
        animate={{
          x: ["-100%", "250%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.span> */}

                {/* <span className="text-[8px] uppercase tracking-[0.38em] text-white/35">
      Digital Technology Studio
    </span> */}
              </motion.div>

              {/* =================================================
      KINETIC HEADLINE
  ================================================= */}

              <h1
                className="relative max-w-[850px] font-black tracking-[-0.075em]"
                style={{
                  perspective: "1200px",
                }}
              >
                {headlineLines.map((line, index) => (
                  <span
                    key={line}
                    className="relative block overflow-hidden"
                    style={{
                      paddingBottom: index === headlineLines.length - 1 ? "8px" : "2px",
                    }}
                  >
                    {/* =================================================
            BLUE REVEAL BAR
        ================================================= */}

                    <motion.span
                      className="pointer-events-none absolute bottom-0 left-0 z-30 h-[2px] w-full origin-left"
                      style={{
                        background:
                          "linear-gradient(90deg, #60a5fa, rgba(46,111,255,.5), transparent)",
                        boxShadow: "0 0 18px rgba(46,111,255,.65)",
                      }}
                      initial={{
                        scaleX: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scaleX: heroVisible ? 1 : 0,
                        opacity: heroVisible ? [0, 1, 0] : 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: heroVisible ? 0.35 + index * 0.16 : 0,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />

                    {/* =================================================
            MAIN 3D TEXT
        ================================================= */}

                    <motion.span
                      className="relative z-10 block"
                      initial={{
                        opacity: 0,
                        y: 120,
                        rotateX: 70,
                        rotateY: -5,
                        scale: 0.92,
                        filter: "blur(18px)",
                      }}
                      animate={{
                        opacity: heroVisible ? 1 : 0,
                        y: heroVisible ? 0 : 120,
                        rotateX: heroVisible ? 0 : 70,
                        rotateY: heroVisible ? 0 : -5,
                        scale: heroVisible ? 1 : 0.92,
                        filter: heroVisible
                          ? "blur(0px)"
                          : "blur(18px)",
                      }}
                      transition={{
                        duration: 1.05,
                        delay: heroVisible ? 0.32 + index * 0.16 : 0,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        transformOrigin: "left bottom",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <motion.span
                        className={
                          index === 2
                            ? "relative inline-block text-white/45"
                            : "relative inline-block text-white"
                        }
                        style={{
                          fontSize: "clamp(48px, 6.2vw, 75px)",
                          lineHeight: 0.9,
                        }}
                        whileHover={{
                          x: 6,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                      >
                        {/* =================================================
                TEXT BACKLIGHT
            ================================================= */}

                        <motion.span
                          className="pointer-events-none absolute -inset-x-5 inset-y-3 -z-10 rounded-full bg-blue-500/[0.07] blur-3xl"
                          animate={{
                            opacity: heroVisible
                              ? [0.15, 0.45, 0.15]
                              : 0,
                            scale: heroVisible
                              ? [0.96, 1.04, 0.96]
                              : 0.96,
                          }}
                          transition={{
                            duration: 5 + index,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {line}

                        {/* =================================================
                MOVING LIGHT THROUGH TEXT
            ================================================= */}

                        <motion.span
                          className="pointer-events-none absolute inset-y-[-10%] left-[-35%] z-20 w-[15%] skew-x-[-22deg]"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent)",
                            filter: "blur(4px)",
                          }}
                          animate={{
                            left: ["-35%", "125%"],
                          }}
                          transition={{
                            duration: 3.5,
                            delay: 1.3 + index * 0.6,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: "easeInOut",
                          }}
                        />

                        {/* =================================================
                FINAL LINE ENERGY
            ================================================= */}

                        {index === 2 && (
                          <>
                            <motion.span
                              className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left"
                              style={{
                                background:
                                  "linear-gradient(90deg, #60a5fa, rgba(96,165,250,.25), transparent)",
                                boxShadow:
                                  "0 0 15px rgba(96,165,250,.6)",
                              }}
                              initial={{
                                scaleX: 0,
                                opacity: 0,
                              }}
                              animate={{
                                scaleX: heroVisible ? 1 : 0,
                                opacity: heroVisible ? 1 : 0,
                              }}
                              transition={{
                                duration: 1,
                                delay: heroVisible ? 0.95 : 0,
                              }}
                            />

                            {/* Tiny endpoint */}
                            <motion.span
                              className="absolute -bottom-[3px] left-0 h-1 w-1 rounded-full bg-blue-300"
                              animate={{
                                x: heroVisible
                                  ? [0, 300, 0]
                                  : 0,
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                boxShadow:
                                  "0 0 14px rgba(96,165,250,1)",
                              }}
                            />
                          </>
                        )}
                      </motion.span>
                    </motion.span>

                    {/* =================================================
            OUTLINE GHOST TEXT
        ================================================= */}

                    <motion.span
                      className="pointer-events-none absolute left-[2px] top-[5px] select-none font-black uppercase"
                      style={{
                        fontSize: "clamp(48px, 6.2vw, 75px)",
                        lineHeight: 0.9,
                        color: "transparent",
                        WebkitTextStroke:
                          "1px rgba(96,165,250,.10)",
                      }}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: heroVisible ? 1 : 0,
                        x: heroVisible ? 0 : -15,
                      }}
                      transition={{
                        duration: 1,
                        delay: heroVisible
                          ? 0.6 + index * 0.16
                          : 0,
                      }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* =================================================
      UNDERLINE DATA
  ================================================= */}

              <motion.div
                className="relative mt-7 flex items-center gap-3"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: heroVisible ? 1 : 0,
                  x: heroVisible ? 0 : -20,
                }}
                transition={{
                  duration: 0.7,
                  delay: heroVisible ? 0.9 : 0,
                }}
              >
                <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-blue-300/45">
                  Ideas into digital systems
                </span>

                <span className="h-px w-16 bg-gradient-to-r from-blue-400/40 to-transparent" />

                <motion.span
                  className="h-1 w-1 rounded-full bg-blue-400"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.5, 0.8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* =================================================
      DESCRIPTION CARD
  ================================================= */}

              <motion.div
                className="relative mt-8 max-w-[650px]"
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: heroVisible ? 1 : 0,
                  y: heroVisible ? 0 : 30,
                  filter: heroVisible
                    ? "blur(0px)"
                    : "blur(8px)",
                }}
                transition={{
                  duration: 0.85,
                  delay: heroVisible ? 0.75 : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Top animated line */}
                <motion.div
                  className="mb-4 h-px w-full origin-left"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(96,165,250,.5), rgba(96,165,250,.08), transparent)",
                  }}
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: heroVisible ? 1 : 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: heroVisible ? 0.9 : 0,
                  }}
                />

                <div className="flex gap-4">
                  {/* Vertical number */}
                  <div className="hidden flex-col items-center gap-2 sm:flex">
                    <span className="font-mono text-[7px] tracking-[0.2em] text-blue-300/40">
                      02
                    </span>

                    <motion.span
                      className="h-10 w-px bg-gradient-to-b from-blue-400/50 to-transparent"
                      animate={{
                        scaleY: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                    />
                  </div>

                  <div>
                    <div className="mb-2 font-mono text-[7px] uppercase tracking-[0.3em] text-blue-300/55">
                      DESFLYER / DIGITAL ENGINE
                    </div>

                    <p className="text-sm leading-6 text-white/55 sm:text-[15px]">
                      We design and build high-performance digital products,
                      software systems, and experiences that turn ambitious
                      ideas into meaningful business outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
      CAPABILITY CHIPS
  ================================================= */}

              <motion.div
                className="relative mt-6"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: heroVisible ? 1 : 0,
                  y: heroVisible ? 0 : 20,
                }}
                transition={{
                  duration: 0.7,
                  delay: heroVisible ? 1 : 0,
                }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/25">
                    Capabilities
                  </span>

                  <span className="h-px flex-1 bg-white/[0.08]" />

                  <span className="font-mono text-[7px] text-blue-300/30">
                    05
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {capabilities.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        y: 12,
                        scale: 0.94,
                      }}
                      animate={{
                        opacity: heroVisible ? 1 : 0,
                        y: heroVisible ? 0 : 12,
                        scale: heroVisible ? 1 : 0.94,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: heroVisible
                          ? 1.05 + index * 0.08
                          : 0,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className="group relative overflow-hidden rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-2 backdrop-blur-sm"
                    >
                      {/* Hover light */}
                      <motion.span
                        className="absolute inset-y-0 left-[-100%] w-[70%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                        whileHover={{
                          left: "140%",
                        }}
                        transition={{
                          duration: 0.7,
                        }}
                      />

                      <span className="relative flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,.8)]" />

                        <span className="text-[8px] uppercase tracking-[0.14em] text-white/40 transition-colors group-hover:text-white/75">
                          {item}
                        </span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* =================================================
      CTA AREA
  ================================================= */}

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-4"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: heroVisible ? 1 : 0,
                  y: heroVisible ? 0 : 20,
                }}
                transition={{
                  duration: 0.7,
                  delay: heroVisible ? 1.25 : 0,
                }}
              >
                {/* Main CTA */}
                <motion.button
                  type="button"
                  onClick={scrollToPortfolio}
                  whileHover={{
                    scale: 1.035,
                    x: 3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group relative overflow-hidden rounded-xl border border-blue-400/40 bg-blue-500/[0.08] px-5 py-3.5 backdrop-blur-md transition-all duration-500 hover:border-blue-300/80 hover:bg-blue-500/[0.14] hover:shadow-[0_0_50px_rgba(46,111,255,.18)]"
                >
                  {/* Moving beam */}
                  <motion.span
                    className="absolute inset-y-0 left-[-80%] w-[45%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      left: ["-80%", "150%"],
                    }}
                    transition={{
                      duration: 2.3,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-5">
                    <span className="flex flex-col items-start">
                      <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-blue-300/60">
                        Selected Work
                      </span>

                      <span
                        className="mt-0.5 text-sm font-semibold tracking-wide text-white"
                        style={{
                          fontFamily: '"Chakra Petch", sans-serif',
                        }}
                      >
                        Explore Our Works
                      </span>
                    </span>

                    <motion.span
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300"
                      animate={{
                        rotate: [0, 0, 45, 45, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <FiArrowUpRight size={15} />
                    </motion.span>
                  </span>
                </motion.button>

                {/* System status */}
                <div className="hidden items-center gap-3 sm:flex">
                  <span className="h-px w-8 bg-white/10" />

                  <div>
                    <div className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                      System status
                    </div>

                    <div className="mt-1 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-blue-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            "0 0 4px rgba(46,111,255,.3)",
                            "0 0 18px rgba(46,111,255,1)",
                            "0 0 4px rgba(46,111,255,.3)",
                          ],
                        }}
                        transition={{
                          duration: 1.7,
                          repeat: Infinity,
                        }}
                      />

                      Online / 2026
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
      BOTTOM DATA LINE
  ================================================= */}

              <motion.div
                className="mt-6 flex items-center gap-4 font-mono text-[7px] uppercase tracking-[0.22em] text-white/20"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: heroVisible ? 1 : 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: heroVisible ? 1.4 : 0,
                }}
              >
                <span>13.0827° N</span>

                <span className="relative h-px w-8 overflow-hidden bg-white/10">
                  <motion.span
                    className="absolute inset-y-0 left-0 w-1/2 bg-blue-400/70"
                    animate={{
                      x: ["-100%", "250%"],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </span>

                <span>80.2707° E</span>

                <span className="hidden sm:inline">
                  / CHENNAI
                </span>

                <motion.span
                  className="hidden sm:inline text-blue-300/30"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                >
                  SIGNAL ACTIVE
                </motion.span>
              </motion.div>

              {/* =================================================
      DECORATIVE CORNER
  ================================================= */}

              <motion.div
                className="pointer-events-none absolute -bottom-5 -left-5 hidden h-16 w-16 lg:block"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: heroVisible ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: heroVisible ? 1.2 : 0,
                }}
              >
                <span className="absolute bottom-0 left-0 h-8 w-px bg-gradient-to-t from-blue-400/50 to-transparent" />
                <span className="absolute bottom-0 left-0 h-px w-8 bg-gradient-to-r from-blue-400/50 to-transparent" />

                <motion.span
                  className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-blue-400"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(96,165,250,.4)",
                      "0 0 20px rgba(96,165,250,1)",
                      "0 0 5px rgba(96,165,250,.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <motion.div
              className="relative hidden min-h-[500px] lg:block mb-10"
              initial={{
                opacity: 0,
                x: 60,
                scale: 0.96,
              }}
              animate={{
                opacity: heroVisible ? 1 : 0,
                x: heroVisible ? 0 : 60,
                scale: heroVisible ? 1 : 0.96,
              }}
              transition={{
                duration: 1,
                delay: heroVisible ? 0.4 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Main visual frame */}
              <div className="absolute inset-0  overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-2xl shadow-black/30 backdrop-blur-sm">
                {/* Video */}
                <video
                  className="absolute inset-0 h-full w-full object-cover "
                  src="/videos/nn.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />

                {/* visual overlays */}
                <div className="absolute inset-0 bg-black/30" />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(46,111,255,0.18), transparent 40%, rgba(0,0,0,0.55))",
                  }}
                />

                <div
                  className="absolute inset-0 opacity-[0.13]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

                {/* Center logo */}
                <motion.div
                  className="absolute left-[150px] top-1/3 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.015, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Logo glow */}
                  <div className="absolute h-[420px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />

                  <img
                    src="/images/portfolio/wpng.png"
                    alt="DesFlyer"
                    className="
      relative
      z-10
      h-[260px]
      w-[460px]
      max-w-none
      object-contain
      opacity-95
      sm:h-[320px]
      sm:w-[680px]
      md:h-[380px]
      md:w-[800px]
      lg:h-[440px]
      lg:w-[900px]
      xl:h-[150px]
      xl:w-[450px]
    "
                  />
                </motion.div>

                {/* Top-left label */}
                <div className="absolute left-5 top-5">
                  <div className="flex items-center gap-2">
                    <FiAperture
                      size={13}
                      className="text-blue-400"
                    />

                    <span className="text-[8px] uppercase tracking-[0.28em] text-white/60">
                      Live Visual System
                    </span>
                  </div>
                </div>

                {/* Top-right */}
                <div className="absolute right-5 top-5 text-right">
                  {/* <div className="text-[8px] tracking-[0.28em] text-white/40">
                    001
                  </div> */}

                  <div className="mt-1 text-[7px] uppercase tracking-[0.25em] text-white/25">
                    DESFLYER / 2026
                  </div>
                </div>

                {/* Bottom-left */}
                <div className="absolute bottom-5 left-5">
                  <div className="text-[7px] uppercase tracking-[0.3em] text-white/30">
                    SYSTEM / DIGITAL
                  </div>

                  <div className="mt-2 text-[8px] uppercase tracking-[0.24em] text-white/55">
                    Innovate → Create → Empower
                  </div>
                </div>

                {/* Bottom-right */}
                <div className="absolute bottom-5 right-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[7px] uppercase tracking-[0.22em] text-white/30">
                      Signal
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(46,111,255,0.8)]" />
                  </div>
                </div>
              </div>

              {/* Technical corner markers */}
              <div className="pointer-events-none absolute -left-2 -top-2 h-8 w-8 border-l border-t border-blue-400/50" />
              <div className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 border-r border-t border-blue-400/50" />
              <div className="pointer-events-none absolute -bottom-2 -left-2 h-8 w-8 border-b border-l border-blue-400/50" />
              <div className="pointer-events-none absolute -bottom-2 -right-2 h-8 w-8 border-b border-r border-blue-400/50" />

              {/* Floating plus markers */}
              <motion.div
                className="absolute -right-4 top-[24%] text-blue-400/70"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                <FiPlus size={16} />
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-[24%] text-white/30"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <FiPlus size={14} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM DATA BAR
        =================================================== */}


      </motion.div>
    </section>
  );
}