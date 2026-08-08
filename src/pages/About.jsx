import { useRef, useState, useEffect, useMemo } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useReducedMotion,
  animate,
} from 'framer-motion'

import {
  FiCompass,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'

import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import CTABand from '../components/sections/CTABand'
import { aboutContent, siteConfig } from '../data/siteConfig'

const cards = [
  {
    icon: FiCompass,
    key: 'vision',
    ...aboutContent.vision,
  },
  {
    icon: FiTarget,
    key: 'mission',
    ...aboutContent.mission,
  },
  {
    icon: FiUsers,
    key: 'team',
    ...aboutContent.team,
  },
]

/* -------------------------------------------------------------------------- */
/* Counter                                                                     */
/* -------------------------------------------------------------------------- */

function Counter({ to, suffix = '', reduceMotion }) {
  const [value, setValue] = useState(reduceMotion ? to : 0)

  useEffect(() => {
    if (reduceMotion) {
      setValue(to)
      return
    }

    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })

    return () => controls.stop()
  }, [to, reduceMotion])

  return (
    <>
      {value}
      {suffix}
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* Heading                                                                     */
/* -------------------------------------------------------------------------- */

function RevealHeading({ text, className }) {
  const words = useMemo(() => text.split(' '), [text])

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden mr-[0.25em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

/* -------------------------------------------------------------------------- */
/* Cursor light                                                                */
/* -------------------------------------------------------------------------- */

function CursorLight({ containerRef, reduceMotion }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (reduceMotion) return

    const node = containerRef.current
    if (!node) return

    const move = (e) => {
      const rect = node.getBoundingClientRect()

      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    }

    node.addEventListener('mousemove', move)

    return () => {
      node.removeEventListener('mousemove', move)
    }
  }, [containerRef, reduceMotion, x, y])

  if (reduceMotion) return null

  return (
    <motion.div
      style={{ x, y }}
      className="
        pointer-events-none
        absolute
        z-0
        w-80
        h-80
        rounded-full
        bg-signal/10
        blur-[100px]
        -translate-x-1/2
        -translate-y-1/2
      "
    />
  )
}

/* -------------------------------------------------------------------------- */
/* Compass Dial                                                                */
/*                                                                            */
/* IMPORTANT:                                                                  */
/* One complete sweep = Vision -> Mission -> Team -> Vision                   */
/*                                                                            */
/* The needle does NOT jump between cards.                                    */
/* It continuously travels around the dial.                                   */
/*                                                                            */
/* Content changes only when the needle reaches the next point.               */
/*                                                                            */
/* Hovering the dial pauses the exact current angle.                          */
/* -------------------------------------------------------------------------- */

function CompassDial({
  active,
  setActive,
  reduceMotion,
}) {
  const [hovered, setHovered] = useState(false)

  /*
   * 0°   = Vision
   * 120° = Mission
   * 240° = Team
   *
   * We keep the needle moving through these exact positions.
   */

  const points = [
    {
      angle: 0,
      label: 'Vision',
      icon: FiCompass,
    },
    {
      angle: 120,
      label: 'Mission',
      icon: FiTarget,
    },
    {
      angle: 240,
      label: 'Team',
      icon: FiUsers,
    },
  ]

  /*
   * The visual rotation is controlled with one long repeating animation.
   *
   * 0 -> 360
   *
   * Each 120° section represents one card.
   *
   * The duration is intentionally slow so the movement feels like
   * a professional clock / instrument sweep.
   */

  const needleRotation = useMotionValue(0)

  useEffect(() => {
    if (reduceMotion) {
      needleRotation.set(points[active].angle)
      return
    }

    const controls = animate(
      needleRotation,
      360,
      {
        duration: 18,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }
    )

    return () => controls.stop()
  }, [reduceMotion, needleRotation])

  /*
   * Detect which 120° section the needle is currently inside.
   *
   * This is separate from the visual animation.
   *
   * Therefore:
   *
   * Vision content:
   * 0° -> before 120°
   *
   * Mission content:
   * 120° -> before 240°
   *
   * Team content:
   * 240° -> before 360°
   */

  useEffect(() => {
    if (reduceMotion) return

    let frame

    const checkAngle = () => {
      const raw = needleRotation.get()

      const angle = ((raw % 360) + 360) % 360

      let nextIndex = 0

      if (angle >= 120 && angle < 240) {
        nextIndex = 1
      } else if (angle >= 240) {
        nextIndex = 2
      }

      setActive((current) => {
        if (current !== nextIndex) {
          return nextIndex
        }

        return current
      })

      frame = requestAnimationFrame(checkAngle)
    }

    frame = requestAnimationFrame(checkAngle)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [needleRotation, reduceMotion, setActive])

  /*
   * Pause / resume the same animation.
   */

  useEffect(() => {
    if (reduceMotion) return

    /*
     * We cannot simply restart the animation because that would
     * make the needle jump.
     *
     * Instead, Framer Motion's motion value continues from its
     * current location when the animation is recreated.
     */

    return undefined
  }, [hovered, reduceMotion])

  /*
   * Better pause control:
   *
   * We use a local animation controller stored in a ref.
   */

  const animationRef = useRef(null)

  useEffect(() => {
    if (reduceMotion) return

    animationRef.current?.stop()

    if (hovered) return

    animationRef.current = animate(
      needleRotation,
      360,
      {
        duration: 18,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }
    )

    return () => {
      animationRef.current?.stop()
    }
  }, [hovered, reduceMotion, needleRotation])

  /*
   * Position of each icon.
   *
   * 50% / 50% is the center.
   */

  const getPointPosition = (angle, radius = 38) => {
    const radians = (angle - 90) * (Math.PI / 180)

    return {
      left: `${50 + Math.cos(radians) * radius}%`,
      top: `${50 + Math.sin(radians) * radius}%`,
    }
  }

  return (
    <div
      className="
        relative
        w-[260px]
        h-[260px]
        lg:w-[280px]
        lg:h-[280px]
        mx-auto
        select-none
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ---------------------------------------------------------------- */}
      {/* Outer glow                                                        */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        animate={{
          opacity: hovered ? 0.32 : 0.16,
          scale: hovered ? 1.03 : 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          absolute
          inset-[-20px]
          rounded-full
          bg-signal/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* Main dial                                                         */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          absolute
          inset-0
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--bg)]
          shadow-[0_0_60px_rgba(46,111,255,0.08)]
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* Inner rings                                                       */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          absolute
          inset-[14px]
          rounded-full
          border
          border-[var(--border)]
        "
      />

      <div
        className="
          absolute
          inset-[32px]
          rounded-full
          border
          border-[var(--border)]
        "
      />

      {/* ---------------------------------------------------------------- */}
      {/* Tick marks                                                        */}
      {/* ---------------------------------------------------------------- */}

      <svg
        viewBox="0 0 200 200"
        className="
          absolute
          inset-[20px]
          w-[calc(100%-40px)]
          h-[calc(100%-40px)]
          pointer-events-none
        "
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180

          const inner = i % 3 === 0 ? 73 : 77
          const outer = 82

          const x1 = 100 + inner * Math.cos(angle)
          const y1 = 100 + inner * Math.sin(angle)

          const x2 = 100 + outer * Math.cos(angle)
          const y2 = 100 + outer * Math.sin(angle)

          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--fg)"
              strokeOpacity={i % 3 === 0 ? 0.28 : 0.1}
              strokeWidth={i % 3 === 0 ? 1.5 : 1}
            />
          )
        })}
      </svg>

      {/* ---------------------------------------------------------------- */}
      {/* 3 directional markers                                            */}
      {/* ---------------------------------------------------------------- */}

      {points.map((point, index) => {
        const Icon = point.icon
        const position = getPointPosition(point.angle)

        const isActive = active === index

        return (
          <button
            key={point.label}
            type="button"
            onClick={() => {
              /*
               * Clicking changes content immediately.
               *
               * The automatic needle continues its own sweep.
               */
              setActive(index)
            }}
            aria-label={point.label}
            aria-pressed={isActive}
            style={{
              left: position.left,
              top: position.top,
            }}
            className="
              absolute
              -translate-x-1/2
              -translate-y-1/2
              z-20
              focus:outline-none
            "
          >
            <motion.div
              animate={{
                scale: isActive ? 1.12 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="
                relative
                flex
                flex-col
                items-center
                gap-1.5
              "
            >
              <span
                className={`
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  border
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? 'bg-signal border-signal text-white shadow-[0_0_24px_rgba(46,111,255,0.35)]'
                      : 'bg-[var(--bg)] border-[var(--border)] text-[var(--fg)]/50'
                  }
                `}
              >
                <Icon size={18} />
              </span>

              <span
                className={`
                  text-[10px]
                  font-mono
                  uppercase
                  tracking-wider
                  whitespace-nowrap
                  ${
                    isActive
                      ? 'text-signal'
                      : 'text-[var(--fg)]/35'
                  }
                `}
              >
                {point.label}
              </span>
            </motion.div>
          </button>
        )
      })}

      {/* ---------------------------------------------------------------- */}
      {/* Needle                                                            */}
      {/* ---------------------------------------------------------------- */}

      <motion.div
        style={{
          rotate: needleRotation,
        }}
        className="
          absolute
          inset-0
          z-10
          pointer-events-none
        "
      >
        {/* needle shaft */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[2px]
            h-[82px]
            -translate-x-1/2
            -translate-y-full
            rounded-full
            bg-signal
            shadow-[0_0_14px_rgba(46,111,255,0.65)]
            origin-bottom
          "
        />

        {/* needle tip */}

        <div
          className="
            absolute
            left-1/2
            top-[calc(50%-82px)]
            -translate-x-1/2
            -translate-y-1/2
            w-2
            h-2
            rounded-full
            bg-signal
            shadow-[0_0_12px_rgba(46,111,255,0.8)]
          "
        />
      </motion.div>

      {/* ---------------------------------------------------------------- */}
      {/* CENTER DESFLYER LOGO                                             */}
      {/* ---------------------------------------------------------------- */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-30
          w-16
          h-16
          rounded-full
          bg-[var(--bg)]
          border
          border-[var(--border)]
          flex
          items-center
          justify-center
          shadow-[0_0_25px_rgba(0,0,0,0.15)]
        "
      >
        <img
          src="/images/portfolio/logo.png"
          className="
            w-10
            h-10
            object-contain
          "
        />
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Hover pause indicator                                             */}
      {/* ---------------------------------------------------------------- */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 5,
            }}
            className="
              absolute
              -bottom-8
              left-1/2
              -translate-x-1/2
              text-[9px]
              font-mono
              uppercase
              tracking-[0.18em]
              text-[var(--fg)]/40
              whitespace-nowrap
            "
          >
            Paused
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* ABOUT PAGE                                                                  */
/* -------------------------------------------------------------------------- */

export default function About() {
  const heroRef = useRef(null)

  const reduceMotion = useReducedMotion()

  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 100]
  )

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  )

  const years =
    new Date().getFullYear() -
    Number(siteConfig.founded)

  const activeCard = cards[active]

  return (
    <>
      <Seo
        title="About"
        description={aboutContent.intro}
      />

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          pt-32
          pb-24
          px-6
          lg:px-10
          overflow-hidden
        "
      >
        <CursorLight
          containerRef={heroRef}
          reduceMotion={reduceMotion}
        />

        <motion.div
          style={{
            y: heroY,
          }}
          className="
            pointer-events-none
            absolute
            -top-24
            -left-24
            w-96
            h-96
            rounded-full
            bg-signal/20
            blur-[110px]
            -z-10
          "
        />

        <motion.div
          style={{
            y: useTransform(
              scrollYProgress,
              [0, 1],
              [0, reduceMotion ? 0 : -70]
            ),
          }}
          className="
            pointer-events-none
            absolute
            top-40
            right-0
            w-72
            h-72
            rounded-full
            bg-signal/10
            blur-[110px]
            -z-10
          "
        />

        <motion.div
          style={{
            opacity: heroOpacity,
          }}
          className="
            relative
            max-w-shell
            mx-auto
          "
        >
          <motion.div
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
            }}
          >
            <Eyebrow>
              {aboutContent.eyebrow}
            </Eyebrow>
          </motion.div>

          <RevealHeading
            text={aboutContent.heading}
            className="
              mt-5
              font-display
              font-bold
              text-[clamp(2.2rem,5vw,3.75rem)]
              text-[var(--fg)]
              max-w-3xl
              leading-[1.05]
            "
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-6
              text-base
              lg:text-lg
              text-[var(--fg)]/65
              max-w-2xl
              leading-relaxed
            "
          >
            {aboutContent.intro}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="
              mt-8
              flex
              items-center
              gap-3
              font-mono
              text-xs
              text-[var(--fg)]/50
            "
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-signal
                animate-pulse
              "
            />

            Founded {siteConfig.founded}
            {' · '}
            {siteConfig.location}
          </motion.div>

          {/* ============================================================ */}
          {/* STATS                                                        */}
          {/* ============================================================ */}

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
              margin: '-60px',
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mt-14
              grid
              grid-cols-3
              gap-6
              max-w-xl
              border-t
              border-[var(--border)]
              pt-8
            "
          >
            <div>
              <p
                className="
                  font-display
                  font-bold
                  text-3xl
                  text-[var(--fg)]
                  tabular-nums
                "
              >
                <Counter
                  to={years}
                  suffix="+"
                  reduceMotion={reduceMotion}
                />
              </p>

              <p
                className="
                  text-xs
                  text-[var(--fg)]/50
                  mt-1
                "
              >
                Years active
              </p>
            </div>

            <div>
              <p
                className="
                  font-display
                  font-bold
                  text-3xl
                  text-[var(--fg)]
                  tabular-nums
                "
              >
                <Counter
                  to={40}
                  suffix="+"
                  reduceMotion={reduceMotion}
                />
              </p>

              <p
                className="
                  text-xs
                  text-[var(--fg)]/50
                  mt-1
                "
              >
                Projects shipped
              </p>
            </div>

            <div>
              <p
                className="
                  font-display
                  font-bold
                  text-3xl
                  text-[var(--fg)]
                  tabular-nums
                "
              >
                <Counter
                  to={98}
                  suffix="%"
                  reduceMotion={reduceMotion}
                />
              </p>

              <p
                className="
                  text-xs
                  text-[var(--fg)]/50
                  mt-1
                "
              >
                Client retention
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================================================================== */}
      {/* COMPASS                                                            */}
      {/* ================================================================== */}

      <section
        className="
          pb-28
          px-6
          lg:px-10
        "
      >
        <div
          className="
            max-w-shell
            mx-auto
            grid
            lg:grid-cols-[280px_1fr]
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* CLOCK / COMPASS */}

          <CompassDial
            active={active}
            setActive={setActive}
            reduceMotion={reduceMotion}
          />

          {/* ============================================================ */}
          {/* CONTENT                                                       */}
          {/* ============================================================ */}

          <div
            className="
              relative
              min-h-[220px]
            "
          >
            <p
              className="
                font-mono
                text-xs
                text-[var(--fg)]/40
                mb-3
              "
            >
              {String(active + 1).padStart(2, '0')}
              {' / '}
              {String(cards.length).padStart(2, '0')}
              {' · '}
              {activeCard.title}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard.key}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : -14,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* ACTIVE ICON */}

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-signal/10
                    flex
                    items-center
                    justify-center
                    text-signal
                  "
                >
                  <activeCard.icon size={20} />
                </div>

                <h2
                  className="
                    mt-5
                    font-display
                    font-semibold
                    text-2xl
                    lg:text-3xl
                    text-[var(--fg)]
                  "
                >
                  {activeCard.title}
                </h2>

                <p
                  className="
                    mt-4
                    text-base
                    text-[var(--fg)]/65
                    leading-relaxed
                    max-w-xl
                  "
                >
                  {activeCard.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* ========================================================== */}
            {/* PROGRESS                                                     */}
            {/* ========================================================== */}

            <div
              className="
                mt-8
                flex
                gap-2
              "
            >
              {cards.map((c, i) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${c.title}`}
                  className="
                    h-[3px]
                    flex-1
                    rounded-full
                    bg-[var(--border)]
                    overflow-hidden
                  "
                >
                  <motion.span
                    className="
                      block
                      h-full
                      bg-signal
                    "
                    initial={false}
                    animate={{
                      width:
                        active === i
                          ? '100%'
                          : '0%',
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}






























// import { useRef, useState, useEffect, useMemo } from 'react'
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
//   useMotionValue,
//   useSpring,
//   useReducedMotion,
//   animate,
// } from 'framer-motion'

// import {
//   FiCompass,
//   FiTarget,
//   FiUsers,
//   FiArrowRight,
// } from 'react-icons/fi'

// import Seo from '../lib/Seo'
// import Eyebrow from '../components/ui/Eyebrow'
// import CTABand from '../components/sections/CTABand'
// import { aboutContent, siteConfig } from '../data/siteConfig'

// const cards = [
//   {
//     icon: FiCompass,
//     key: 'vision',
//     ...aboutContent.vision,
//   },
//   {
//     icon: FiTarget,
//     key: 'mission',
//     ...aboutContent.mission,
//   },
//   {
//     icon: FiUsers,
//     key: 'team',
//     ...aboutContent.team,
//   },
// ]

// // ------------------------------------------------------------
// // COUNTER
// // ------------------------------------------------------------

// function Counter({ to, suffix = '', reduceMotion }) {
//   const [value, setValue] = useState(reduceMotion ? to : 0)

//   useEffect(() => {
//     if (reduceMotion) {
//       setValue(to)
//       return
//     }

//     const controls = animate(0, to, {
//       duration: 1.4,
//       ease: [0.16, 1, 0.3, 1],
//       onUpdate: (v) => setValue(Math.round(v)),
//     })

//     return () => controls.stop()
//   }, [to, reduceMotion])

//   return (
//     <>
//       {value}
//       {suffix}
//     </>
//   )
// }

// // ------------------------------------------------------------
// // HERO HEADING
// // ------------------------------------------------------------

// function RevealHeading({ text, className }) {
//   const words = useMemo(() => text.split(' '), [text])

//   return (
//     <motion.h1 className={className}>
//       {words.map((word, i) => (
//         <span
//           key={`${word}-${i}`}
//           className="inline-block overflow-hidden mr-[0.25em]"
//         >
//           <motion.span
//             className="inline-block"
//             initial={{ y: '110%', opacity: 0 }}
//             animate={{ y: '0%', opacity: 1 }}
//             transition={{
//               duration: 0.7,
//               delay: 0.15 + i * 0.05,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//           >
//             {word}
//           </motion.span>
//         </span>
//       ))}
//     </motion.h1>
//   )
// }

// // ------------------------------------------------------------
// // CURSOR LIGHT
// // ------------------------------------------------------------

// function CursorLight({ containerRef, reduceMotion }) {
//   const x = useMotionValue(0)
//   const y = useMotionValue(0)

//   useEffect(() => {
//     if (reduceMotion) return

//     const node = containerRef.current
//     if (!node) return

//     const move = (e) => {
//       const rect = node.getBoundingClientRect()

//       x.set(e.clientX - rect.left)
//       y.set(e.clientY - rect.top)
//     }

//     node.addEventListener('mousemove', move)

//     return () => {
//       node.removeEventListener('mousemove', move)
//     }
//   }, [containerRef, reduceMotion, x, y])

//   if (reduceMotion) return null

//   return (
//     <motion.div
//       style={{ x, y }}
//       className="
//         pointer-events-none
//         absolute
//         z-0
//         w-96
//         h-96
//         rounded-full
//         bg-signal/10
//         blur-[120px]
//         -translate-x-1/2
//         -translate-y-1/2
//       "
//     />
//   )
// }

// // ------------------------------------------------------------
// // DESFLYER SIGNAL VISUAL
// //
// // NOT A CLOCK.
// //
// // The needle follows one continuous horizontal wave.
// // 0%  -> Vision
// // 50% -> Mission
// // 100% -> Team
// //
// // Content changes only when the needle reaches each node.
// // ------------------------------------------------------------

// function DirectionSignal({
//   active,
//   setActive,
//   reduceMotion,
// }) {
//   const [progress, setProgress] = useState(0)
//   const [hovered, setHovered] = useState(false)

//   const progressRef = useRef(0)
//   const pausedRef = useRef(false)
//   const frameRef = useRef(null)
//   const lastTimeRef = useRef(null)

//   const points = [
//     {
//       x: 10,
//       y: 66,
//       label: 'VISION',
//       number: '01',
//       icon: FiCompass,
//     },
//     {
//       x: 50,
//       y: 28,
//       label: 'MISSION',
//       number: '02',
//       icon: FiTarget,
//     },
//     {
//       x: 90,
//       y: 66,
//       label: 'TEAM',
//       number: '03',
//       icon: FiUsers,
//     },
//   ]

//   // ----------------------------------------------------------
//   // Continuous wave movement
//   // ----------------------------------------------------------

//   useEffect(() => {
//     if (reduceMotion) {
//       setProgress(0)
//       return
//     }

//     let mounted = true

//     const speed = 0.055

//     const loop = (time) => {
//       if (!mounted) return

//       if (lastTimeRef.current === null) {
//         lastTimeRef.current = time
//       }

//       const delta = (time - lastTimeRef.current) / 1000
//       lastTimeRef.current = time

//       if (!pausedRef.current) {
//         progressRef.current += delta * speed

//         if (progressRef.current >= 1) {
//           progressRef.current = 0
//         }

//         setProgress(progressRef.current)

//         const p = progressRef.current

//         // Vision: 0 -> 0.5
//         // Mission: 0.5 -> 1
//         //
//         // The active state changes exactly at the node.
//         if (p < 0.5) {
//           setActive(0)
//         } else {
//           setActive(1)
//         }

//         // Create a third phase when returning
//         // through the complete wave.
//         if (p >= 0.66) {
//           setActive(2)
//         }
//       }

//       frameRef.current = requestAnimationFrame(loop)
//     }

//     frameRef.current = requestAnimationFrame(loop)

//     return () => {
//       mounted = false

//       if (frameRef.current) {
//         cancelAnimationFrame(frameRef.current)
//       }
//     }
//   }, [reduceMotion, setActive])

//   // ----------------------------------------------------------
//   // Correct phase mapping
//   //
//   // Vision     = 0 -> 0.333
//   // Mission    = 0.333 -> 0.666
//   // Team       = 0.666 -> 1
//   // ----------------------------------------------------------

//   useEffect(() => {
//     if (reduceMotion) return

//     if (progress < 1 / 3) {
//       if (active !== 0) setActive(0)
//     } else if (progress < 2 / 3) {
//       if (active !== 1) setActive(1)
//     } else {
//       if (active !== 2) setActive(2)
//     }
//   }, [progress, active, reduceMotion, setActive])

//   useEffect(() => {
//     pausedRef.current = hovered
//   }, [hovered])

//   // ----------------------------------------------------------
//   // Wave geometry
//   // ----------------------------------------------------------

//   const wavePath = `
//     M 10 66
//     C 22 66, 28 38, 38 38
//     C 44 38, 46 28, 50 28
//     C 54 28, 56 38, 62 38
//     C 72 38, 78 66, 90 66
//   `

//   // Convert progress into approximate point on the wave.
//   // This is deliberately smooth and continuous.
//   const getWavePosition = (p) => {
//     if (p <= 0.333) {
//       const local = p / 0.333

//       return {
//         x: 10 + local * 40,
//         y:
//           66 -
//           Math.sin(local * Math.PI) * 38,
//       }
//     }

//     if (p <= 0.666) {
//       const local = (p - 0.333) / 0.333

//       return {
//         x: 50 + local * 40,
//         y:
//           28 +
//           Math.sin(local * Math.PI) * 38,
//       }
//     }

//     const local = (p - 0.666) / 0.334

//     return {
//       x: 90 - local * 80,
//       y:
//         66 -
//         Math.sin(local * Math.PI) * 38,
//     }
//   }

//   const needle = getWavePosition(progress)

//   return (
//     <div
//       className="
//         relative
//         w-full
//         min-h-[420px]
//         lg:min-h-[500px]
//         flex
//         items-center
//         justify-center
//       "
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* ----------------------------------------------------
//           Ambient background field
//       ---------------------------------------------------- */}

//       <div
//         className="
//           absolute
//           inset-8
//           rounded-[40px]
//           bg-signal/[0.025]
//           blur-2xl
//         "
//       />

//       {/* ----------------------------------------------------
//           Decorative corner brackets
//       ---------------------------------------------------- */}

//       <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-[var(--border)]" />

//       <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-[var(--border)]" />

//       <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-[var(--border)]" />

//       <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-[var(--border)]" />

//       {/* ----------------------------------------------------
//           Small technical labels
//       ---------------------------------------------------- */}

//       <div className="absolute top-10 left-10 font-mono text-[9px] tracking-[0.22em] text-[var(--fg)]/30">
//         DESFLYER / DIRECTION
//       </div>

//       <div className="absolute top-10 right-10 font-mono text-[9px] tracking-[0.22em] text-[var(--fg)]/30">
//         {String(Math.round(progress * 100)).padStart(2, '0')}%
//       </div>

//       {/* ----------------------------------------------------
//           Main SVG wave
//       ---------------------------------------------------- */}

//       <svg
//         viewBox="0 0 100 100"
//         className="
//           absolute
//           inset-8
//           w-[calc(100%-4rem)]
//           h-[calc(100%-4rem)]
//           overflow-visible
//         "
//         preserveAspectRatio="none"
//       >
//         {/* soft guide line */}
//         <path
//           d={wavePath}
//           fill="none"
//           stroke="var(--fg)"
//           strokeOpacity="0.06"
//           strokeWidth="0.45"
//           vectorEffect="non-scaling-stroke"
//         />

//         {/* active signal line */}
//         <motion.path
//           d={wavePath}
//           fill="none"
//           stroke="var(--signal)"
//           strokeOpacity="0.35"
//           strokeWidth="1.2"
//           vectorEffect="non-scaling-stroke"
//           strokeLinecap="round"
//           strokeDasharray="5 7"
//           animate={{
//             strokeDashoffset: hovered ? 0 : -80,
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         />

//         {/* horizontal baseline */}
//         <path
//           d="M 10 66 L 90 66"
//           fill="none"
//           stroke="var(--fg)"
//           strokeOpacity="0.05"
//           strokeWidth="0.5"
//           vectorEffect="non-scaling-stroke"
//         />
//       </svg>

//       {/* ----------------------------------------------------
//           Center DESFLYER logo
//           Replace the src if your logo path differs.
//       ---------------------------------------------------- */}

//       <motion.div
//         animate={{
//           scale: hovered ? 1.04 : 1,
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 180,
//           damping: 18,
//         }}
//         className="
//           absolute
//           left-1/2
//           top-[49%]
//           -translate-x-1/2
//           -translate-y-1/2
//           z-20
//           w-28
//           h-28
//           lg:w-36
//           lg:h-36
//           rounded-full
//           flex
//           items-center
//           justify-center
//           border
//           border-[var(--border)]
//           bg-[var(--bg)]
//           shadow-[0_20px_70px_rgba(0,0,0,0.18)]
//         "
//       >
//         <div
//           className="
//             absolute
//             inset-3
//             rounded-full
//             border
//             border-signal/20
//           "
//         />

//         <img
//           src="/images/portfolio/nlogo.png"
//           alt="DESFlyer"
//           className="
//             relative
//             z-10
//             w-16
//             h-16
//             lg:w-20
//             lg:h-20
//             object-contain
//           "
//         />

//         {/* subtle signal pulse */}
//         <motion.div
//           className="
//             absolute
//             inset-0
//             rounded-full
//             border
//             border-signal/20
//           "
//           animate={{
//             scale: [1, 1.16, 1],
//             opacity: [0.4, 0, 0.4],
//           }}
//           transition={{
//             duration: 2.8,
//             repeat: Infinity,
//             ease: 'easeOut',
//           }}
//         />
//       </motion.div>

//       {/* ----------------------------------------------------
//           Three ICON NODES
//       ---------------------------------------------------- */}

//       {points.map((point, index) => {
//         const Icon = point.icon
//         const isActive = active === index

//         return (
//           <button
//             key={point.label}
//             type="button"
//             onClick={() => {
//               setActive(index)

//               // Move the animation near that phase.
//               if (index === 0) {
//                 progressRef.current = 0.02
//               }

//               if (index === 1) {
//                 progressRef.current = 0.335
//               }

//               if (index === 2) {
//                 progressRef.current = 0.67
//               }
//             }}
//             className="
//               absolute
//               z-30
//               -translate-x-1/2
//               -translate-y-1/2
//               flex
//               flex-col
//               items-center
//               gap-3
//               focus:outline-none
//             "
//             style={{
//               left: `${8 + point.x * 0.84}%`,
//               top: `${10 + point.y * 0.8}%`,
//             }}
//           >
//             {/* node */}
//             <motion.div
//               animate={{
//                 scale: isActive ? 1.15 : 1,
//                 y: isActive ? -3 : 0,
//               }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 260,
//                 damping: 18,
//               }}
//               className={`
//                 relative
//                 w-14
//                 h-14
//                 lg:w-16
//                 lg:h-16
//                 rounded-2xl
//                 flex
//                 items-center
//                 justify-center
//                 border
//                 transition-colors
//                 duration-300
//                 ${
//                   isActive
//                     ? 'bg-signal text-white border-signal shadow-[0_0_35px_rgba(46,111,255,0.28)]'
//                     : 'bg-[var(--bg)] text-[var(--fg)]/50 border-[var(--border)]'
//                 }
//               `}
//             >
//               <Icon size={22} />

//               {isActive && (
//                 <motion.span
//                   className="
//                     absolute
//                     inset-[-7px]
//                     rounded-[22px]
//                     border
//                     border-signal/30
//                   "
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{
//                     opacity: [0.4, 0],
//                     scale: [0.9, 1.25],
//                   }}
//                   transition={{
//                     duration: 1.8,
//                     repeat: Infinity,
//                   }}
//                 />
//               )}
//             </motion.div>

//             <div className="text-center">
//               <span
//                 className={`
//                   block
//                   font-mono
//                   text-[9px]
//                   tracking-[0.22em]
//                   ${
//                     isActive
//                       ? 'text-signal'
//                       : 'text-[var(--fg)]/35'
//                   }
//                 `}
//               >
//                 {point.number}
//               </span>

//               <span
//                 className={`
//                   block
//                   mt-1
//                   text-[10px]
//                   font-medium
//                   tracking-[0.16em]
//                   ${
//                     isActive
//                       ? 'text-[var(--fg)]'
//                       : 'text-[var(--fg)]/40'
//                   }
//                 `}
//               >
//                 {point.label}
//               </span>
//             </div>
//           </button>
//         )
//       })}

//       {/* ----------------------------------------------------
//           THE SWEEPING NEEDLE
//       ---------------------------------------------------- */}

//       <motion.div
//         className="
//           absolute
//           z-40
//           pointer-events-none
//           -translate-x-1/2
//           -translate-y-1/2
//         "
//         style={{
//           left: `${8 + needle.x * 0.84}%`,
//           top: `${10 + needle.y * 0.8}%`,
//         }}
//       >
//         {/* glow */}
//         <div
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             -translate-x-1/2
//             -translate-y-1/2
//             w-16
//             h-16
//             rounded-full
//             bg-signal/20
//             blur-xl
//           "
//         />

//         {/* signal core */}
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//           }}
//           transition={{
//             duration: 1.2,
//             repeat: Infinity,
//           }}
//           className="
//             relative
//             w-4
//             h-4
//             rounded-full
//             bg-signal
//             border-2
//             border-[var(--bg)]
//             shadow-[0_0_20px_rgba(46,111,255,0.8)]
//           "
//         />
//       </motion.div>

//       {/* ----------------------------------------------------
//           BOTTOM STATUS
//       ---------------------------------------------------- */}

//       <div className="absolute bottom-9 left-1/2 -translate-x-1/2">
//         <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-[var(--fg)]/30 whitespace-nowrap">
//           <span
//             className={`
//               w-1.5
//               h-1.5
//               rounded-full
//               ${
//                 hovered
//                   ? 'bg-[var(--fg)]/30'
//                   : 'bg-signal animate-pulse'
//               }
//             `}
//           />

//           {hovered ? 'SIGNAL PAUSED' : 'SIGNAL IN MOTION'}

//           <FiArrowRight size={10} />
//         </div>
//       </div>
//     </div>
//   )
// }

// // ------------------------------------------------------------
// // ABOUT PAGE
// // ------------------------------------------------------------

// export default function About() {
//   const heroRef = useRef(null)

//   const reduceMotion = useReducedMotion()

//   const [active, setActive] = useState(0)

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ['start start', 'end start'],
//   })

//   const heroY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, reduceMotion ? 0 : 100]
//   )

//   const heroOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.8],
//     [1, 0]
//   )

//   const years =
//     new Date().getFullYear() -
//     Number(siteConfig.founded)

//   const activeCard = cards[active]

//   return (
//     <>
//       <Seo />

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section
//         ref={heroRef}
//         className="
//           relative
//           pt-32
//           pb-24
//           px-6
//           lg:px-10
//           overflow-hidden
//         "
//       >
//         <CursorLight
//           containerRef={heroRef}
//           reduceMotion={reduceMotion}
//         />

//         <motion.div
//           style={{ y: heroY }}
//           className="
//             pointer-events-none
//             absolute
//             -top-24
//             -left-24
//             w-96
//             h-96
//             rounded-full
//             bg-signal/20
//             blur-[110px]
//             -z-10
//           "
//         />

//         <motion.div
//           style={{
//             y: useTransform(
//               scrollYProgress,
//               [0, 1],
//               [0, reduceMotion ? 0 : -70]
//             ),
//           }}
//           className="
//             pointer-events-none
//             absolute
//             top-40
//             right-0
//             w-72
//             h-72
//             rounded-full
//             bg-signal/10
//             blur-[110px]
//             -z-10
//           "
//         />

//         <motion.div
//           style={{ opacity: heroOpacity }}
//           className="
//             relative
//             max-w-shell
//             mx-auto
//           "
//         >
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 10,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//           >
//             <Eyebrow>
//               {aboutContent.eyebrow}
//             </Eyebrow>
//           </motion.div>

//           <RevealHeading
//             text={aboutContent.heading}
//             className="
//               mt-5
//               font-display
//               font-bold
//               text-[clamp(2.2rem,5vw,3.75rem)]
//               text-[var(--fg)]
//               max-w-3xl
//               leading-[1.05]
//             "
//           />

//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 16,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.45,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="
//               mt-6
//               text-base
//               lg:text-lg
//               text-[var(--fg)]/65
//               max-w-2xl
//               leading-relaxed
//             "
//           >
//             {aboutContent.intro}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{
//               delay: 0.6,
//               duration: 0.6,
//             }}
//             className="
//               mt-8
//               flex
//               items-center
//               gap-3
//               font-mono
//               text-xs
//               text-[var(--fg)]/50
//             "
//           >
//             <span
//               className="
//                 w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-signal
//                 animate-pulse
//               "
//             />

//             Founded {siteConfig.founded} · {siteConfig.location}
//           </motion.div>

//           {/* =================================================
//               STATS
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               margin: '-60px',
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.2,
//             }}
//             className="
//               mt-14
//               grid
//               grid-cols-3
//               gap-6
//               max-w-xl
//               border-t
//               border-[var(--border)]
//               pt-8
//             "
//           >
//             <div>
//               <p
//                 className="
//                   font-display
//                   font-bold
//                   text-3xl
//                   text-[var(--fg)]
//                   tabular-nums
//                 "
//               >
//                 <Counter
//                   to={years}
//                   suffix="+"
//                   reduceMotion={reduceMotion}
//                 />
//               </p>

//               <p className="text-xs text-[var(--fg)]/50 mt-1">
//                 Years active
//               </p>
//             </div>

//             <div>
//               <p
//                 className="
//                   font-display
//                   font-bold
//                   text-3xl
//                   text-[var(--fg)]
//                   tabular-nums
//                 "
//               >
//                 <Counter
//                   to={40}
//                   suffix="+"
//                   reduceMotion={reduceMotion}
//                 />
//               </p>

//               <p className="text-xs text-[var(--fg)]/50 mt-1">
//                 Projects shipped
//               </p>
//             </div>

//             <div>
//               <p
//                 className="
//                   font-display
//                   font-bold
//                   text-3xl
//                   text-[var(--fg)]
//                   tabular-nums
//                 "
//               >
//                 <Counter
//                   to={98}
//                   suffix="%"
//                   reduceMotion={reduceMotion}
//                 />
//               </p>

//               <p className="text-xs text-[var(--fg)]/50 mt-1">
//                 Client retention
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* =====================================================
//           DIRECTION / VISION / MISSION / TEAM
//       ===================================================== */}

//       <section className="pb-28 px-6 lg:px-10">
//         <div
//           className="
//             max-w-shell
//             mx-auto
//             grid
//             lg:grid-cols-[0.8fr_1.2fr]
//             gap-10
//             lg:gap-20
//             items-center
//           "
//         >
//           {/* LEFT CONTENT */}

//           <div className="relative min-h-[300px] lg:min-h-[420px]">
//             <p
//               className="
//                 font-mono
//                 text-xs
//                 text-[var(--fg)]/40
//                 mb-5
//               "
//             >
//               {String(active + 1).padStart(2, '0')}
//               {' '}
//               /
//               {' '}
//               {String(cards.length).padStart(2, '0')}
//               {' '}
//               ·
//               {' '}
//               DIRECTION
//             </p>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCard.key}
//                 initial={{
//                   opacity: 0,
//                   y: reduceMotion ? 0 : 18,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: reduceMotion ? 0 : -18,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//               >
//                 <div
//                   className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-signal/10
//                     flex
//                     items-center
//                     justify-center
//                     text-signal
//                     border
//                     border-signal/10
//                   "
//                 >
//                   <activeCard.icon size={24} />
//                 </div>

//                 <h2
//                   className="
//                     mt-6
//                     font-display
//                     font-semibold
//                     text-3xl
//                     lg:text-4xl
//                     text-[var(--fg)]
//                   "
//                 >
//                   {activeCard.title}
//                 </h2>

//                 <p
//                   className="
//                     mt-5
//                     text-base
//                     text-[var(--fg)]/65
//                     leading-relaxed
//                     max-w-xl
//                   "
//                 >
//                   {activeCard.body}
//                 </p>
//               </motion.div>
//             </AnimatePresence>

//             {/* progress */}
//             <div className="mt-10 flex gap-2 max-w-md">
//               {cards.map((c, i) => (
//                 <button
//                   key={c.key}
//                   type="button"
//                   onClick={() => setActive(i)}
//                   aria-label={`Show ${c.title}`}
//                   className="
//                     relative
//                     h-[3px]
//                     flex-1
//                     rounded-full
//                     bg-[var(--border)]
//                     overflow-hidden
//                   "
//                 >
//                   <motion.span
//                     className="absolute inset-y-0 left-0 bg-signal"
//                     animate={{
//                       width:
//                         active === i
//                           ? '100%'
//                           : '0%',
//                     }}
//                     transition={{
//                       duration: 0.35,
//                     }}
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT VISUAL */}

//           <DirectionSignal
//             active={active}
//             setActive={setActive}
//             reduceMotion={reduceMotion}
//           />
//         </div>
//       </section>

//       <CTABand />
//     </>
//   )
// }





























// import { useRef, useState, useEffect, useMemo } from 'react'
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
//   useMotionValue,
//   useSpring,
//   useReducedMotion,
//   animate,
// } from 'framer-motion'

// import {
//   FiCompass,
//   FiTarget,
//   FiUsers,
//   FiArrowRight,
//   FiGitMerge,
//   FiRefreshCw,
// } from 'react-icons/fi'

// import Seo from '../lib/Seo'
// import Eyebrow from '../components/ui/Eyebrow'
// import CTABand from '../components/sections/CTABand'
// import { aboutContent, siteConfig } from '../data/siteConfig'

// const cards = [
//   {
//     icon: FiCompass,
//     key: 'vision',
//     ...aboutContent.vision,
//   },
//   {
//     icon: FiTarget,
//     key: 'mission',
//     ...aboutContent.mission,
//   },
//   {
//     icon: FiUsers,
//     key: 'team',
//     ...aboutContent.team,
//   },
// ]

// // -----------------------------------------------------------------------------
// // Counter
// // -----------------------------------------------------------------------------

// function Counter({ to, suffix = '', reduceMotion }) {
//   const [value, setValue] = useState(reduceMotion ? to : 0)

//   useEffect(() => {
//     if (reduceMotion) {
//       setValue(to)
//       return
//     }

//     const controls = animate(0, to, {
//       duration: 1.4,
//       ease: [0.16, 1, 0.3, 1],
//       onUpdate: (v) => setValue(Math.round(v)),
//     })

//     return () => controls.stop()
//   }, [to, reduceMotion])

//   return (
//     <>
//       {value}
//       {suffix}
//     </>
//   )
// }

// // -----------------------------------------------------------------------------
// // Heading
// // -----------------------------------------------------------------------------

// function RevealHeading({ text, className }) {
//   const words = useMemo(() => text.split(' '), [text])

//   return (
//     <motion.h1 className={className}>
//       {words.map((word, i) => (
//         <span
//           key={`${word}-${i}`}
//           className="inline-block overflow-hidden mr-[0.25em]"
//         >
//           <motion.span
//             className="inline-block"
//             initial={{ y: '110%' }}
//             animate={{ y: '0%' }}
//             transition={{
//               duration: 0.7,
//               delay: 0.15 + i * 0.05,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//           >
//             {word}
//           </motion.span>
//         </span>
//       ))}
//     </motion.h1>
//   )
// }

// // -----------------------------------------------------------------------------
// // Cursor glow
// // -----------------------------------------------------------------------------

// function CursorLight({ containerRef, reduceMotion }) {
//   const x = useMotionValue(0)
//   const y = useMotionValue(0)

//   useEffect(() => {
//     if (reduceMotion) return

//     const node = containerRef.current
//     if (!node) return

//     const move = (e) => {
//       const rect = node.getBoundingClientRect()

//       x.set(e.clientX - rect.left)
//       y.set(e.clientY - rect.top)
//     }

//     node.addEventListener('mousemove', move)

//     return () => {
//       node.removeEventListener('mousemove', move)
//     }
//   }, [containerRef, reduceMotion, x, y])

//   if (reduceMotion) return null

//   return (
//     <motion.div
//       style={{ x, y }}
//       className="
//         pointer-events-none
//         absolute
//         z-0
//         w-96
//         h-96
//         rounded-full
//         bg-signal/10
//         blur-[120px]
//         -translate-x-1/2
//         -translate-y-1/2
//       "
//     />
//   )
// }

// // -----------------------------------------------------------------------------
// // Transition icons
// //
// // Vision -> Mission = Arrow
// // Mission -> Team   = Merge / collaboration
// // Team -> Vision    = Refresh / cycle
// // -----------------------------------------------------------------------------

// const transitions = [
//   {
//     from: 0,
//     to: 1,
//     icon: FiArrowRight,
//     label: 'Vision to Mission',
//   },
//   {
//     from: 1,
//     to: 2,
//     icon: FiGitMerge,
//     label: 'Mission to Team',
//   },
//   {
//     from: 2,
//     to: 0,
//     icon: FiRefreshCw,
//     label: 'Team to Vision',
//   },
// ]

// // -----------------------------------------------------------------------------
// // Main visual
// // -----------------------------------------------------------------------------

// function DirectionSystem({
//   active,
//   setActive,
//   reduceMotion,
// }) {
//   const [paused, setPaused] = useState(false)

//   /*
//    * The moving signal progresses through:
//    *
//    * 0.00 -> Vision
//    * 0.33 -> Mission
//    * 0.66 -> Team
//    * 1.00 -> Vision
//    *
//    * Content changes exactly when the signal reaches a stage.
//    */

//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     if (reduceMotion) {
//       setProgress(0)
//       setActive(0)
//       return
//     }

//     let controls

//     const run = () => {
//       controls = animate(0, 1, {
//         duration: 9,
//         ease: 'linear',

//         onUpdate: (value) => {
//           if (paused) return

//           setProgress(value)

//           /*
//            * Divide the journey into three equal sections.
//            *
//            * 0% - 33%   Vision
//            * 33% - 66%  Mission
//            * 66% - 100% Team
//            */

//           if (value < 1 / 3) {
//             setActive(0)
//           } else if (value < 2 / 3) {
//             setActive(1)
//           } else {
//             setActive(2)
//           }
//         },

//         onComplete: () => {
//           if (!paused) {
//             setProgress(0)
//             setActive(0)
//             run()
//           }
//         },
//       })
//     }

//     run()

//     return () => {
//       controls?.stop()
//     }
//   }, [reduceMotion, paused, setActive])

//   /*
//    * Coordinates of the three stages.
//    *
//    * Vision  = top
//    * Mission = bottom-right
//    * Team    = bottom-left
//    *
//    * This creates a triangular flow instead of a clock.
//    */

//   const points = [
//     { x: 50, y: 15 },
//     { x: 82, y: 72 },
//     { x: 18, y: 72 },
//   ]

//   const getPointOnPath = (p) => {
//     if (p < 1 / 3) {
//       const local = p * 3

//       return {
//         x:
//           points[0].x +
//           (points[1].x - points[0].x) * local,

//         y:
//           points[0].y +
//           (points[1].y - points[0].y) * local,
//       }
//     }

//     if (p < 2 / 3) {
//       const local = (p - 1 / 3) * 3

//       return {
//         x:
//           points[1].x +
//           (points[2].x - points[1].x) * local,

//         y:
//           points[1].y +
//           (points[2].y - points[1].y) * local,
//       }
//     }

//     const local = (p - 2 / 3) * 3

//     return {
//       x:
//         points[2].x +
//         (points[0].x - points[2].x) * local,

//       y:
//         points[2].y +
//         (points[0].y - points[2].y) * local,
//     }
//   }

//   const signalPoint = getPointOnPath(progress)

//   return (
//     <div
//       className="
//         relative
//         w-full
//         max-w-[620px]
//         mx-auto
//         aspect-square
//         select-none
//       "
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* ---------------------------------------------------------------- */}
//       {/* Background atmosphere */}
//       {/* ---------------------------------------------------------------- */}

//       <div
//         className="
//           absolute
//           inset-[12%]
//           rounded-[35%]
//           bg-signal/[0.025]
//           blur-2xl
//         "
//       />

//       {/* ---------------------------------------------------------------- */}
//       {/* Main triangular connection */}
//       {/* ---------------------------------------------------------------- */}

//       <svg
//         viewBox="0 0 100 100"
//         className="absolute inset-0 w-full h-full overflow-visible"
//       >
//         {/* outer soft shape */}

//         <path
//           d="M50 15 L82 72 L18 72 Z"
//           fill="none"
//           stroke="var(--fg)"
//           strokeOpacity="0.04"
//           strokeWidth="3"
//         />

//         {/* base path */}

//         <path
//           d="M50 15 L82 72 L18 72 Z"
//           fill="none"
//           stroke="var(--fg)"
//           strokeOpacity="0.12"
//           strokeWidth="0.35"
//           strokeDasharray="1.5 2"
//         />

//         {/* Vision -> Mission */}

//         <path
//           d="M50 15 L82 72"
//           fill="none"
//           stroke="var(--fg)"
//           strokeOpacity="0.12"
//           strokeWidth="0.5"
//         />

//         {/* Mission -> Team */}

//         <path
//           d="M82 72 L18 72"
//           fill="none"
//           stroke="var(--fg)"
//           strokeOpacity="0.12"
//           strokeWidth="0.5"
//         />

//         {/* Team -> Vision */}

//         <path
//           d="M18 72 L50 15"
//           fill="none"
//           stroke="var(--fg)"
//           strokeOpacity="0.12"
//           strokeWidth="0.5"
//         />

//         {/* flowing active path */}

//         <motion.path
//           d="M50 15 L82 72 L18 72 Z"
//           fill="none"
//           stroke="var(--signal)"
//           strokeOpacity="0.22"
//           strokeWidth="1"
//           strokeDasharray="2 4"
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   strokeDashoffset: [0, -20],
//                 }
//           }
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//         />
//       </svg>

//       {/* ---------------------------------------------------------------- */}
//       {/* Moving signal */}
//       {/* ---------------------------------------------------------------- */}

//       {!reduceMotion && (
//         <>
//           <motion.div
//             className="
//               absolute
//               z-30
//               w-7
//               h-7
//               rounded-full
//               bg-signal/10
//               blur-md
//               pointer-events-none
//             "
//             style={{
//               left: `${signalPoint.x}%`,
//               top: `${signalPoint.y}%`,
//               transform: 'translate(-50%, -50%)',
//             }}
//           />

//           <motion.div
//             className="
//               absolute
//               z-40
//               w-2.5
//               h-2.5
//               rounded-full
//               bg-signal
//               shadow-[0_0_20px_var(--signal)]
//               pointer-events-none
//             "
//             style={{
//               left: `${signalPoint.x}%`,
//               top: `${signalPoint.y}%`,
//               transform: 'translate(-50%, -50%)',
//             }}
//           />
//         </>
//       )}

//       {/* ---------------------------------------------------------------- */}
//       {/* Center logo */}
//       {/* ---------------------------------------------------------------- */}

//       <div
//         className="
//           absolute
//           left-1/2
//           top-[46%]
//           -translate-x-1/2
//           -translate-y-1/2
//           z-20
//           w-32
//           h-32
//           lg:w-40
//           lg:h-40
//           rounded-full
//           flex
//           items-center
//           justify-center
//         "
//       >
//         {/* subtle ring */}

//         <motion.div
//           animate={
//             reduceMotion
//               ? {}
//               : {
//                   rotate: 360,
//                 }
//           }
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="
//             absolute
//             inset-0
//             rounded-full
//             border
//             border-[var(--border)]
//             border-dashed
//           "
//         />

//         {/* inner glow */}

//         <div
//           className="
//             absolute
//             inset-3
//             rounded-full
//             bg-[var(--bg)]
//             border
//             border-[var(--border)]
//             shadow-[0_0_50px_rgba(0,0,0,0.08)]
//           "
//         />

//         {/* logo */}

//      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">

//   {/* Logo glow */}
//   <div className="
//     absolute
//     inset-[-18px]
//     rounded-full
//     bg-signal/20
//     blur-2xl
//   " />

//   {/* Logo background */}
//   <div className="
//     relative
//     w-24
//     h-24
//     rounded-full
//     flex
//     items-center
//     justify-center
//     bg-[#f4f4f4]
//     border
//     border-white/10
//     shadow-[0_0_40px_rgba(46,111,255,0.18)]
//   ">

//     <img
//       src="/images/portfolio/logo.png"
//       alt="DESFlyer"
//       className="
//         w-16
//         h-16
//         object-contain
//         relative
//         z-10
//       "
//     />

//   </div>

// </div>
//       </div>

//       {/* ---------------------------------------------------------------- */}
//       {/* Vision stage */}
//       {/* ---------------------------------------------------------------- */}

//       <button
//         type="button"
//         onClick={() => setActive(0)}
//         className="
//           absolute
//           left-1/2
//           top-[2%]
//           -translate-x-1/2
//           z-20
//           flex
//           flex-col
//           items-center
//           gap-2
//           group
//         "
//       >
//         <motion.div
//           animate={{
//             scale: active === 0 ? 1.12 : 1,
//           }}
//           className={`
//             w-14
//             h-14
//             rounded-2xl
//             flex
//             items-center
//             justify-center
//             border
//             transition-all
//             duration-300
//             ${
//               active === 0
//                 ? 'bg-signal/10 border-signal text-signal'
//                 : 'bg-[var(--bg)] border-[var(--border)] text-[var(--fg)]/40'
//             }
//           `}
//         >
//           <FiCompass size={22} />
//         </motion.div>

//         <span
//           className={`
//             text-[10px]
//             font-mono
//             uppercase
//             tracking-[0.2em]
//             ${
//               active === 0
//                 ? 'text-signal'
//                 : 'text-[var(--fg)]/40'
//             }
//           `}
//         >
//           Vision
//         </span>
//       </button>

//       {/* ---------------------------------------------------------------- */}
//       {/* Mission stage */}
//       {/* ---------------------------------------------------------------- */}

//       <button
//         type="button"
//         onClick={() => setActive(1)}
//         className="
//           absolute
//           right-[2%]
//           bottom-[17%]
//           z-20
//           flex
//           flex-col
//           items-center
//           gap-2
//           group
//         "
//       >
//         <motion.div
//           animate={{
//             scale: active === 1 ? 1.12 : 1,
//           }}
//           className={`
//             w-14
//             h-14
//             rounded-2xl
//             flex
//             items-center
//             justify-center
//             border
//             transition-all
//             duration-300
//             ${
//               active === 1
//                 ? 'bg-signal/10 border-signal text-signal'
//                 : 'bg-[var(--bg)] border-[var(--border)] text-[var(--fg)]/40'
//             }
//           `}
//         >
//           <FiTarget size={22} />
//         </motion.div>

//         <span
//           className={`
//             text-[10px]
//             font-mono
//             uppercase
//             tracking-[0.2em]
//             ${
//               active === 1
//                 ? 'text-signal'
//                 : 'text-[var(--fg)]/40'
//             }
//           `}
//         >
//           Mission
//         </span>
//       </button>

//       {/* ---------------------------------------------------------------- */}
//       {/* Team stage */}
//       {/* ---------------------------------------------------------------- */}

//       <button
//         type="button"
//         onClick={() => setActive(2)}
//         className="
//           absolute
//           left-[2%]
//           bottom-[17%]
//           z-20
//           flex
//           flex-col
//           items-center
//           gap-2
//           group
//         "
//       >
//         <motion.div
//           animate={{
//             scale: active === 2 ? 1.12 : 1,
//           }}
//           className={`
//             w-14
//             h-14
//             rounded-2xl
//             flex
//             items-center
//             justify-center
//             border
//             transition-all
//             duration-300
//             ${
//               active === 2
//                 ? 'bg-signal/10 border-signal text-signal'
//                 : 'bg-[var(--bg)] border-[var(--border)] text-[var(--fg)]/40'
//             }
//           `}
//         >
//           <FiUsers size={22} />
//         </motion.div>

//         <span
//           className={`
//             text-[10px]
//             font-mono
//             uppercase
//             tracking-[0.2em]
//             ${
//               active === 2
//                 ? 'text-signal'
//                 : 'text-[var(--fg)]/40'
//             }
//           `}
//         >
//           Team
//         </span>
//       </button>

//       {/* ---------------------------------------------------------------- */}
//       {/* Transition icon: Vision -> Mission */}
//       {/* ---------------------------------------------------------------- */}

//       <motion.div
//         animate={{
//           opacity: active === 0 ? 1 : 0.35,
//           scale: active === 0 ? 1.08 : 1,
//         }}
//         className="
//           absolute
//           left-[70%]
//           top-[40%]
//           z-10
//           w-9
//           h-9
//           rounded-full
//           flex
//           items-center
//           justify-center
//           border
//           border-[var(--border)]
//           bg-[var(--bg)]
//           text-[var(--fg)]/50
//         "
//         title="Vision to Mission"
//       >
//         <FiArrowRight size={15} />
//       </motion.div>

//       {/* ---------------------------------------------------------------- */}
//       {/* Transition icon: Mission -> Team */}
//       {/* ---------------------------------------------------------------- */}

//       <motion.div
//         animate={{
//           opacity: active === 1 ? 1 : 0.35,
//           scale: active === 1 ? 1.08 : 1,
//         }}
//         className="
//           absolute
//           left-1/2
//           bottom-[18%]
//           -translate-x-1/2
//           z-10
//           w-9
//           h-9
//           rounded-full
//           flex
//           items-center
//           justify-center
//           border
//           border-[var(--border)]
//           bg-[var(--bg)]
//           text-[var(--fg)]/50
//         "
//         title="Mission to Team"
//       >
//         <FiGitMerge size={15} />
//       </motion.div>

//       {/* ---------------------------------------------------------------- */}
//       {/* Transition icon: Team -> Vision */}
//       {/* ---------------------------------------------------------------- */}

//       <motion.div
//         animate={{
//           opacity: active === 2 ? 1 : 0.35,
//           scale: active === 2 ? 1.08 : 1,
//         }}
//         className="
//           absolute
//           left-[30%]
//           top-[40%]
//           z-10
//           w-9
//           h-9
//           rounded-full
//           flex
//           items-center
//           justify-center
//           border
//           border-[var(--border)]
//           bg-[var(--bg)]
//           text-[var(--fg)]/50
//         "
//         title="Team to Vision"
//       >
//         <FiRefreshCw size={15} />
//       </motion.div>

//       {/* ---------------------------------------------------------------- */}
//       {/* Pause indicator */}
//       {/* ---------------------------------------------------------------- */}

//       <AnimatePresence>
//         {paused && !reduceMotion && (
//           <motion.div
//             initial={{ opacity: 0, y: 6 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 6 }}
//             className="
//               absolute
//               left-1/2
//               bottom-[2%]
//               -translate-x-1/2
//               font-mono
//               text-[9px]
//               uppercase
//               tracking-[0.2em]
//               text-[var(--fg)]/40
//             "
//           >
//             Paused
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// // -----------------------------------------------------------------------------
// // About
// // -----------------------------------------------------------------------------

// export default function About() {
//   const heroRef = useRef(null)

//   const reduceMotion = useReducedMotion()

//   const [active, setActive] = useState(0)

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ['start start', 'end start'],
//   })

//   const heroY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, reduceMotion ? 0 : 100]
//   )

//   const heroOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.8],
//     [1, 0]
//   )

//   const years =
//     new Date().getFullYear() -
//     Number(siteConfig.founded)

//   const activeCard = cards[active]

//   return (
//     <>
//       <Seo
//         title="About"
//         description={aboutContent.intro}
//       />

//       {/* ================================================================= */}
//       {/* HERO */}
//       {/* ================================================================= */}

//       <section
//         ref={heroRef}
//         className="
//           relative
//           pt-32
//           pb-24
//           px-6
//           lg:px-10
//           overflow-hidden
//         "
//       >
//         <CursorLight
//           containerRef={heroRef}
//           reduceMotion={reduceMotion}
//         />

//         <motion.div
//           style={{ y: heroY }}
//           className="
//             pointer-events-none
//             absolute
//             -top-24
//             -left-24
//             w-96
//             h-96
//             rounded-full
//             bg-signal/20
//             blur-[110px]
//             -z-10
//           "
//         />

//         <motion.div
//           style={{
//             y: useTransform(
//               scrollYProgress,
//               [0, 1],
//               [0, reduceMotion ? 0 : -70]
//             ),
//           }}
//           className="
//             pointer-events-none
//             absolute
//             top-40
//             right-0
//             w-72
//             h-72
//             rounded-full
//             bg-signal/10
//             blur-[110px]
//             -z-10
//           "
//         />

//         <motion.div
//           style={{ opacity: heroOpacity }}
//           className="
//             relative
//             max-w-shell
//             mx-auto
//           "
//         >
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 10,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//           >
//             <Eyebrow>
//               {aboutContent.eyebrow}
//             </Eyebrow>
//           </motion.div>

//           <RevealHeading
//             text={aboutContent.heading}
//             className="
//               mt-5
//               font-display
//               font-bold
//               text-[clamp(2.2rem,5vw,3.75rem)]
//               text-[var(--fg)]
//               max-w-3xl
//               leading-[1.05]
//             "
//           />

//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 16,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.45,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//             className="
//               mt-6
//               text-base
//               lg:text-lg
//               text-[var(--fg)]/65
//               max-w-2xl
//               leading-relaxed
//             "
//           >
//             {aboutContent.intro}
//           </motion.p>

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               delay: 0.6,
//               duration: 0.6,
//             }}
//             className="
//               mt-8
//               flex
//               items-center
//               gap-3
//               font-mono
//               text-xs
//               text-[var(--fg)]/50
//             "
//           >
//             <span
//               className="
//                 w-1.5
//                 h-1.5
//                 rounded-full
//                 bg-signal
//                 animate-pulse
//               "
//             />

//             Founded {siteConfig.founded} ·{' '}
//             {siteConfig.location}
//           </motion.div>

//           {/* ------------------------------------------------------------- */}
//           {/* Stats */}
//           {/* ------------------------------------------------------------- */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               margin: '-60px',
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.2,
//             }}
//             className="
//               mt-14
//               grid
//               grid-cols-3
//               gap-6
//               max-w-xl
//               border-t
//               border-[var(--border)]
//               pt-8
//             "
//           >
//             <div>
//               <p
//                 className="
//                   font-display
//                   font-bold
//                   text-3xl
//                   text-[var(--fg)]
//                   tabular-nums
//                 "
//               >
//                 <Counter
//                   to={years}
//                   suffix="+"
//                   reduceMotion={reduceMotion}
//                 />
//               </p>

//               <p className="text-xs text-[var(--fg)]/50 mt-1">
//                 Years active
//               </p>
//             </div>

//             <div>
//               <p
//                 className="
//                   font-display
//                   font-bold
//                   text-3xl
//                   text-[var(--fg)]
//                   tabular-nums
//                 "
//               >
//                 <Counter
//                   to={40}
//                   suffix="+"
//                   reduceMotion={reduceMotion}
//                 />
//               </p>

//               <p className="text-xs text-[var(--fg)]/50 mt-1">
//                 Projects shipped
//               </p>
//             </div>

//             <div>
//               <p
//                 className="
//                   font-display
//                   font-bold
//                   text-3xl
//                   text-[var(--fg)]
//                   tabular-nums
//                 "
//               >
//                 <Counter
//                   to={98}
//                   suffix="%"
//                   reduceMotion={reduceMotion}
//                 />
//               </p>

//               <p className="text-xs text-[var(--fg)]/50 mt-1">
//                 Client retention
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ================================================================= */}
//       {/* DIRECTION SYSTEM + CONTENT */}
//       {/* ================================================================= */}

//       <section className="pb-28 px-6 lg:px-10">
//         <div
//           className="
//             max-w-shell
//             mx-auto
//             grid
//             lg:grid-cols-[1.05fr_0.95fr]
//             gap-12
//             lg:gap-20
//             items-center
//           "
//         >
//           {/* LEFT — visual */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -30,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               margin: '-100px',
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//           >
//             <DirectionSystem
//               active={active}
//               setActive={setActive}
//               reduceMotion={reduceMotion}
//             />
//           </motion.div>

//           {/* RIGHT — content */}

//           <div
//             className="
//               relative
//               min-h-[300px]
//               flex
//               items-center
//             "
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCard.key}
//                 initial={{
//                   opacity: 0,
//                   y: reduceMotion ? 0 : 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: reduceMotion ? 0 : -20,
//                 }}
//                 transition={{
//                   duration: 0.45,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 className="w-full"
//               >
//                 {/* stage number */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-4
//                     mb-6
//                   "
//                 >
//                   <span
//                     className="
//                       font-mono
//                       text-xs
//                       text-signal
//                     "
//                   >
//                     0{active + 1}
//                   </span>

//                   <span
//                     className="
//                       h-px
//                       w-12
//                       bg-[var(--border)]
//                     "
//                   />

//                   <span
//                     className="
//                       font-mono
//                       text-[10px]
//                       uppercase
//                       tracking-[0.2em]
//                       text-[var(--fg)]/35
//                     "
//                   >
//                     Direction
//                   </span>
//                 </div>

//                 {/* active icon */}

//                 <motion.div
//                   initial={{
//                     scale: 0.7,
//                     rotate: -15,
//                   }}
//                   animate={{
//                     scale: 1,
//                     rotate: 0,
//                   }}
//                   transition={{
//                     duration: 0.5,
//                     ease: [0.16, 1, 0.3, 1],
//                   }}
//                   className="
//                     w-14
//                     h-14
//                     rounded-2xl
//                     bg-signal/10
//                     border
//                     border-signal/20
//                     flex
//                     items-center
//                     justify-center
//                     text-signal
//                   "
//                 >
//                   <activeCard.icon size={25} />
//                 </motion.div>

//                 <h2
//                   className="
//                     mt-7
//                     font-display
//                     font-semibold
//                     text-3xl
//                     lg:text-4xl
//                     text-[var(--fg)]
//                   "
//                 >
//                   {activeCard.title}
//                 </h2>

//                 <p
//                   className="
//                     mt-5
//                     text-base
//                     lg:text-lg
//                     text-[var(--fg)]/60
//                     leading-relaxed
//                     max-w-xl
//                   "
//                 >
//                   {activeCard.body}
//                 </p>

//                 {/* progress */}

//                 <div className="mt-9 flex items-center gap-3">
//                   {cards.map((card, index) => (
//                     <button
//                       key={card.key}
//                       type="button"
//                       onClick={() => setActive(index)}
//                       aria-label={`Show ${card.title}`}
//                       className="
//                         relative
//                         h-1
//                         flex-1
//                         max-w-24
//                         rounded-full
//                         overflow-hidden
//                         bg-[var(--border)]
//                       "
//                     >
//                       <motion.span
//                         className="absolute inset-y-0 left-0 bg-signal"
//                         animate={{
//                           width:
//                             active === index
//                               ? '100%'
//                               : '0%',
//                         }}
//                         transition={{
//                           duration: 0.35,
//                           ease: [0.16, 1, 0.3, 1],
//                         }}
//                       />
//                     </button>
//                   ))}
//                 </div>

//                 <p
//                   className="
//                     mt-4
//                     font-mono
//                     text-[10px]
//                     uppercase
//                     tracking-[0.18em]
//                     text-[var(--fg)]/30
//                   "
//                 >
//                   Vision → Mission → Team → Vision
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </section>

//       {/* ================================================================= */}
//       {/* CTA */}
//       {/* ================================================================= */}

//       <CTABand />
//     </>
//   )
// }