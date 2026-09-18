import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiAperture,
  FiCode,
  FiCpu,
  FiLayers,
  FiPlus,
} from "react-icons/fi";

import Button from "../ui/Button";
import { siteConfig } from "../../data/siteConfig";
import { useTheme } from "../../hooks/useTheme";

const INTRO_DURATION_MS = 1600;
const FIRST_CLIP_DURATION = 3000;

// =====================================================
// HERO INTRO — REFRESH ONLY
// =====================================================
//
// IMPORTANT:
//
// We determine whether this browser document was actually
// reloaded BEFORE the Hero component mounts.
//
// React Router navigation does NOT create a new document,
// so it will not trigger the intro again.
//
// =====================================================

const getShouldShowIntro = () => {
  if (typeof window === "undefined") return false;

  const navigationEntry =
    performance.getEntriesByType("navigation")[0];

  const isReload =
    navigationEntry?.type === "reload";

  // ---------------------------------------------------
  // If this is a real browser reload, allow the intro.
  // ---------------------------------------------------

  if (isReload) {
    // Remove the previous completed state so the intro
    // can play after this refresh.
    sessionStorage.removeItem(
      "desflyer-hero-intro-completed"
    );

    return true;
  }

  // ---------------------------------------------------
  // First browser visit
  // ---------------------------------------------------

  const introCompleted =
    sessionStorage.getItem(
      "desflyer-hero-intro-completed"
    ) === "true";

  if (!introCompleted) {
    return true;
  }

  // ---------------------------------------------------
  // React Router navigation
  // ---------------------------------------------------

  return false;
};

// =====================================================
// HERO CONTENT REVEAL
// =====================================================

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const rise = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.88,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const heroHeading = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.7,
    filter: "blur(10px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// =====================================================
// HERO
// =====================================================

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [showAI, setShowAI] = useState(false);

  // =====================================================
  // INTRO SCREEN
  // =====================================================

  const [isLoading, setIsLoading] = useState(() => {
    return getShouldShowIntro();
  });

  // =====================================================
  // FIRST VIDEO → AI VIDEO
  // =====================================================

  useEffect(() => {
    if (showAI) return;

    const timer = window.setTimeout(() => {
      setShowAI(true);
    }, FIRST_CLIP_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [showAI]);

  // =====================================================
  // INTRO TIMER
  // =====================================================

  useEffect(() => {
    if (!isLoading) return;

    const timer = window.setTimeout(() => {
      setIsLoading(false);

      sessionStorage.setItem(
        "desflyer-hero-intro-completed",
        "true"
      );
    }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[var(--bg)]
        text-[var(--fg)]
      "
    >
      {/* =====================================================
          VIDEO BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* FIRST VIDEO */}

        <motion.video
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          animate={{
            opacity: showAI ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        >
          <source
            src="/videos/hero-bg.mp4"
            type="video/mp4"
          />
        </motion.video>

        {/* AI VIDEO */}

        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          animate={{
            opacity: showAI ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        >
          <source
            src="/videos/bg.mp4"
            type="video/mp4"
          />
        </motion.video>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/48" />

        {/* BLUE ATMOSPHERE */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-950/30
            via-transparent
            to-cyan-950/20
          "
        />

        {/* CENTER RADIAL */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.38)_100%)]
          "
        />

        {/* SIDE DARKNESS */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/45
            via-transparent
            to-black/40
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.07]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.2) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.2) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* GRAIN */}

        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            opacity: isDark ? 0.045 : 0.025,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* BOTTOM FADE */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-28
            bg-gradient-to-t
            from-[var(--bg)]
            via-[var(--bg)]/40
            to-transparent
          "
        />

        {/* TOP FADE */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-24
            bg-gradient-to-b
            from-black/30
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          AMBIENT TECHNICAL ELEMENTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[2]">

        {/* TOP LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            x: 0,
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
            absolute
            left-5
            top-24
            hidden
            font-mono
            text-[9px]
            tracking-[0.25em]
            text-white/35
            sm:block
            lg:left-10
          "
        >
          DESFLYER / CORE
        </motion.div>

        {/* TOP RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            x: 0,
          }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="
            absolute
            right-5
            top-24
            hidden
            items-center
            gap-2
            font-mono
            text-[9px]
            tracking-[0.2em]
            text-white/35
            sm:flex
            lg:right-10
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(46,111,255,0.9)]" />
          SYSTEM ONLINE
        </motion.div>

        {/* LEFT CENTER DATA */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            x: 0,
          }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="
            absolute
            left-5
            top-1/2
            hidden
            -translate-y-1/2
            sm:block
            lg:left-10
          "
        >
          <div className="flex items-center gap-3">
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-blue-400/70 to-transparent" />

            <div className="space-y-2">
              <div className="font-mono text-[8px] tracking-[0.25em] text-blue-400/70">
                01
              </div>

              <div className="font-mono text-[8px] tracking-[0.18em] text-white/35">
                IDEATE
              </div>

              <div className="h-px w-10 bg-white/15" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT CENTER DATA */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            x: 0,
          }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="
            absolute
            right-5
            top-1/2
            hidden
            -translate-y-1/2
            sm:block
            lg:right-10
          "
        >
          <div className="flex items-center gap-3 text-right">
            <div className="space-y-2">
              <div className="font-mono text-[8px] tracking-[0.25em] text-blue-400/70">
                03
              </div>

              <div className="font-mono text-[8px] tracking-[0.18em] text-white/35">
                IMPACT
              </div>

              <div className="ml-auto h-px w-10 bg-white/15" />
            </div>

            <div className="h-16 w-px bg-gradient-to-b from-transparent via-blue-400/70 to-transparent" />
          </div>
        </motion.div>

        {/* BOTTOM LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            y: 0,
          }}
          transition={{ duration: 0.8, delay: 1 }}
          className="
            absolute
            bottom-8
            left-5
            hidden
            font-mono
            text-[8px]
            tracking-[0.2em]
            text-white/25
            sm:block
            lg:left-10
          "
        >
          DIGITAL / DESIGN / TECHNOLOGY
        </motion.div>

        {/* BOTTOM RIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            y: 0,
          }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="
            absolute
            bottom-8
            right-5
            hidden
            font-mono
            text-[8px]
            tracking-[0.2em]
            text-white/25
            sm:block
            lg:right-10
          "
        >
          2026 / DF
        </motion.div>

        {/* CORNER MARKERS */}

        <div className="absolute left-5 top-16 hidden h-5 w-5 border-l border-t border-blue-400/30 sm:block lg:left-10" />

        <div className="absolute right-5 top-16 hidden h-5 w-5 border-r border-t border-blue-400/30 sm:block lg:right-10" />

        <div className="absolute bottom-16 left-5 hidden h-5 w-5 border-b border-l border-blue-400/30 sm:block lg:left-10" />

        <div className="absolute bottom-16 right-5 hidden h-5 w-5 border-b border-r border-blue-400/30 sm:block lg:right-10" />
      </div>

      {/* =====================================================
          ANIMATED HORIZONTAL SIGNAL
      ===================================================== */}

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isLoading ? 0 : 1,
          opacity: isLoading ? 0 : 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.7,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-1/2
          z-[2]
          h-px
          origin-center
          bg-gradient-to-r
          from-transparent
          via-blue-400/20
          to-transparent
        "
      />

      {/* =====================================================
          INTRO SCREEN
      ===================================================== */}

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.5,
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
              bg-[var(--bg)]
            "
          >
            {/* GLOW */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.4,
              }}
              animate={{
                opacity: 0.45,
                scale: 1.2,
              }}
              transition={{
                duration: 1.1,
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

            {/* LOGO */}

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
                duration: 0.6,
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
                  h-16
                  w-16
                  object-contain
                  sm:h-20
                  sm:w-20
                "
                animate={{
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div
                className="
                  mt-4
                  text-xs
                  font-medium
                  tracking-wide
                  text-[var(--muted)]
                "
              >
                Desflyer
              </div>
            </motion.div>

            {/* LOADING LINE */}

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
                w-24
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
          MAIN HERO CONTENT
      ===================================================== */}

      <motion.div
  variants={container}
  initial="hidden"
  animate={isLoading ? "hidden" : "show"}
  className="
    relative
    z-10
    mx-auto
    mt-10
    flex
    w-full
    max-w-6xl
    flex-col
    items-center
    justify-center
    px-3
    py-20
    text-center

    sm:mt-0
    sm:px-10
    sm:py-28

    lg:px-16
    lg:py-24
  "
>
  {/* TOP MINI LABEL */}

  <motion.div
    variants={rise}
    className="
      mb-5
      flex
      items-center
      gap-3
      font-mono
      text-[9px]
      uppercase
      tracking-[0.28em]
      text-white/45
      sm:text-[10px]
    "
  >
    <span className="h-px w-8 bg-blue-400/60" />

    <span>
      Creative Technology Studio
    </span>

    <span className="h-px w-8 bg-blue-400/60" />
  </motion.div>

  {/* MAIN HEADING */}

  <motion.h1
    variants={heroHeading}
    className="
      flex
      w-full
      flex-row
      items-center
      justify-center
      whitespace-nowrap
      text-center
      text-[clamp(1.35rem,8vw,6.5rem)]
      font-semibold
      leading-[0.95]
      tracking-[-0.045em]
      text-white
    "
  >
    {/* INNOVATE → IDEA */}

    <motion.span
      className="
        relative
        inline-block
        cursor-pointer
        whitespace-nowrap
      "
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        variants={{
          initial: {
            opacity: 1,
            y: 0,
          },
          hover: {
            opacity: 0,
            y: -20,
          },
        }}
        transition={{
          duration: 0.24,
          ease: "easeInOut",
        }}
        className="inline-block"
      >
        <span className="text-blue-400">
          I
        </span>
        novate
      </motion.span>

      <motion.span
        variants={{
          initial: {
            opacity: 0,
            y: 20,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          inline-block
          text-blue-400
        "
      >
        Idea
      </motion.span>
    </motion.span>

    <span className="mx-1.5 sm:mx-5" />

    {/* CREATE → BUILD */}

    <motion.span
      className="
        relative
        inline-block
        cursor-pointer
        whitespace-nowrap
      "
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        variants={{
          initial: {
            opacity: 1,
            y: 0,
          },
          hover: {
            opacity: 0,
            y: -20,
          },
        }}
        transition={{
          duration: 0.24,
          ease: "easeInOut",
        }}
        className="inline-block"
      >
        <span className="text-blue-400">
          C
        </span>
        reate
      </motion.span>

      <motion.span
        variants={{
          initial: {
            opacity: 0,
            y: 20,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          inline-block
          text-blue-400
        "
      >
        Build
      </motion.span>
    </motion.span>

    <span className="mx-1.5 sm:mx-5" />

    {/* EMPOWER → IMPACT */}

    <motion.span
      className="
        relative
        inline-block
        cursor-pointer
        whitespace-nowrap
      "
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        variants={{
          initial: {
            opacity: 1,
            y: 0,
          },
          hover: {
            opacity: 0,
            y: -20,
          },
        }}
        transition={{
          duration: 0.24,
          ease: "easeInOut",
        }}
        className="inline-block"
      >
        <span className="text-blue-400">
          E
        </span>
        mpower
      </motion.span>

      <motion.span
        variants={{
          initial: {
            opacity: 0,
            y: 20,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          inline-block
          text-blue-400
        "
      >
        Impact
      </motion.span>
    </motion.span>
  </motion.h1>

  {/* UNDERLINE SIGNAL */}

  <motion.div
    variants={rise}
    className="
      mt-7
      flex
      items-center
      gap-3
    "
  >
    <span className="h-px w-10 bg-blue-400/30" />

    <motion.span
      animate={{
        scaleX: [0.5, 1, 0.5],
        opacity: [0.35, 0.8, 0.35],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        h-px
        w-24
        origin-center
        bg-gradient-to-r
        from-blue-500
        via-cyan-300
        to-blue-500
      "
    />

    <span className="h-px w-10 bg-blue-400/30" />
  </motion.div>

  {/* DESCRIPTION */}

  <motion.p
    variants={rise}
    className="
      mx-auto
      mt-7
      max-w-2xl
      text-sm
      leading-relaxed
      text-white/60
      sm:text-base
      lg:text-lg
    "
  >
    We design and build meaningful digital
    experiences that turn ideas into products,
    brands and experiences people remember.
  </motion.p>

  {/* CTA BUTTONS */}

  <motion.div
    variants={rise}
    className="
      mt-8
      flex
      flex-col
      items-center
      justify-center
      gap-3
      sm:flex-row
    "
  >
    <Button
      to="/portfolio"
      className="
        group
        min-h-12
        px-7
      "
    >
      <span>
        Explore our work
      </span>

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
        px-7
      "
    >
      What we do
    </Button>
  </motion.div>

  {/* STATS PANEL */}

  <motion.div
    variants={rise}
    className="
      mt-10
      flex
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-black/15
      px-6
      py-4
      backdrop-blur-sm
      sm:mt-12
      sm:px-10
      sm:py-5
    "
  >
    <div className="min-w-[70px]">
      <div className="text-lg font-semibold text-white sm:text-xl">
        50+
      </div>

      <div className="mt-1 text-[10px] text-white/45 sm:text-xs">
        Projects
      </div>
    </div>

    <div className="mx-5 h-8 w-px bg-white/10 sm:mx-8" />

    <div className="min-w-[70px]">
      <div className="text-lg font-semibold text-white sm:text-xl">
        30+
      </div>

      <div className="mt-1 text-[10px] text-white/45 sm:text-xs">
        Clients
      </div>
    </div>

    <div className="mx-5 h-8 w-px bg-white/10 sm:mx-8" />

    <div className="min-w-[70px]">
      <div className="text-lg font-semibold text-white sm:text-xl">
        5+
      </div>

      <div className="mt-1 text-[10px] text-white/45 sm:text-xs">
        Industries
      </div>
    </div>
  </motion.div>

  {/* MOBILE TECH LABEL */}

  <motion.div
    variants={rise}
    className="
      mt-8
      flex
      items-center
      gap-2
      font-mono
      text-[8px]
      tracking-[0.2em]
      text-white/25
      sm:hidden
    "
  >
    <FiCpu size={11} />

    <span>
      DIGITAL SYSTEM / 2026
    </span>
  </motion.div>

  {/* SCROLL INDICATOR */}

  {/* <motion.div
    variants={rise}
    className="
      mt-9
      flex
      flex-col
      items-center
      gap-2
      text-white/40
    "
  >
    <span className="text-[10px] tracking-wide">
      Scroll to explore
    </span>

    <motion.span
      animate={{
        y: [0, 5, 0],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <FiArrowDown size={14} />
    </motion.span>
  </motion.div> */}
</motion.div>

      {/* =====================================================
          FLOATING TECH ICONS
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoading ? 0 : 1,
        }}
        transition={{ duration: 1, delay: 1.2 }}
        className="
          pointer-events-none
          absolute
          bottom-28
          left-[14%]
          hidden
          sm:block
        "
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-blue-400/20
            bg-black/20
            text-blue-400/60
            backdrop-blur-md
          "
        >
          <FiCode size={16} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoading ? 0 : 1,
        }}
        transition={{ duration: 1, delay: 1.35 }}
        className="
          pointer-events-none
          absolute
          right-[14%]
          bottom-28
          hidden
          sm:block
        "
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-300/20
            bg-black/20
            text-cyan-300/60
            backdrop-blur-md
          "
        >
          <FiLayers size={16} />
        </motion.div>
      </motion.div>

      {/* =====================================================
          SMALL PLUS MARKS
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="
          pointer-events-none
          absolute
          left-[22%]
          top-[32%]
          hidden
          text-blue-400
          sm:block
        "
      >
        <FiPlus size={14} />
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.8,
        }}
        className="
          pointer-events-none
          absolute
          right-[22%]
          top-[38%]
          hidden
          text-cyan-300
          sm:block
        "
      >
        <FiPlus size={12} />
      </motion.div>

      {/* =====================================================
          CENTER MICRO ORBIT
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoading ? 0 : 0.25,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-[1]
          h-[460px]
          w-[460px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-400/10
          sm:h-[600px]
          sm:w-[600px]
        "
      >
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
            absolute
            inset-0
            rounded-full
            border
            border-dashed
            border-blue-400/10
          "
        />
      </motion.div>
    </section>
  );
}
