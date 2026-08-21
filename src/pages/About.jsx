import {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react'

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
  FiArrowUpRight,
  FiZap,
} from 'react-icons/fi'

import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import CTABand from '../components/sections/CTABand'
import { aboutContent, siteConfig } from '../data/siteConfig'

/* ==========================================================================
   DATA
========================================================================== */

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

/* ==========================================================================
   COUNTER
========================================================================== */

function Counter({ to, suffix = '', reduceMotion }) {
  const [value, setValue] = useState(
    reduceMotion ? to : 0
  )

  useEffect(() => {
    if (reduceMotion) {
      setValue(to)
      return
    }

    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        setValue(Math.round(v))
      },
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

/* ==========================================================================
   REVEAL HEADING
========================================================================== */

function RevealHeading({ text, className }) {
  const words = useMemo(
    () => text.split(' '),
    [text]
  )

  return (
    <h1 className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="mr-[0.22em] inline-block overflow-hidden"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.7,
              delay: 0.12 + index * 0.055,
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

/* ==========================================================================
   CURSOR LIGHT
========================================================================== */

function CursorLight({
  containerRef,
  reduceMotion,
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    if (reduceMotion) return

    const node = containerRef.current

    if (!node) return

    const move = (event) => {
      const rect =
        node.getBoundingClientRect()

      x.set(event.clientX - rect.left)
      y.set(event.clientY - rect.top)
    }

    node.addEventListener(
      'mousemove',
      move
    )

    return () => {
      node.removeEventListener(
        'mousemove',
        move
      )
    }
  }, [
    containerRef,
    reduceMotion,
    x,
    y,
  ])

  if (reduceMotion) return null

  return (
    <motion.div
      style={{ x, y }}
      className="
        pointer-events-none
        absolute
        z-[2]
        h-96
        w-96
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-signal/10
        blur-[110px]
      "
    />
  )
}

/* ==========================================================================
   ORBITAL CORE
========================================================================== */

function OrbitalCore({
  active,
  setActive,
  reduceMotion,
  onSelect,
}) {
  const [hovered, setHovered] =
    useState(false)

  /* ========================================================================
     NEEDLE ROTATION
  ======================================================================== */

  /*
    IMPORTANT:

    The needle starts at Vision.

    Vision  = -90°
    Mission = 30°
    Team    = 150°
  */

  const TARGET_ANGLES = useMemo(
    () => [-90, 30, 150],
    []
  )

  const rotation =
    useMotionValue(-90)

  const animationRef =
    useRef(null)

  const clickAnimationRef =
    useRef(null)

  const isSelectingRef =
    useRef(false)

  const selectedIndexRef =
    useRef(active)

  useEffect(() => {
    selectedIndexRef.current =
      active
  }, [active])

  /* ========================================================================
     ROTATION SETTINGS
  ======================================================================== */

  /*
    Full 360° rotation = 18 seconds
  */

  const ROTATION_DURATION = 18

  const DEGREES_PER_SECOND =
    360 / ROTATION_DURATION

  /* ========================================================================
     ORBIT POINTS
  ======================================================================== */

  const points = [
    {
      angle: -90,
      label: 'Vision',
      short: '01',
      icon: FiCompass,
    },
    {
      angle: 30,
      label: 'Mission',
      short: '02',
      icon: FiTarget,
    },
    {
      angle: 150,
      label: 'Team',
      short: '03',
      icon: FiUsers,
    },
  ]

  /* ========================================================================
     NORMALIZE ANGLE
  ======================================================================== */

  const normalizeAngle =
    useCallback((angle) => {
      return (
        ((angle % 360) + 360) % 360
      )
    }, [])

  /* ========================================================================
     FORWARD DISTANCE
  ======================================================================== */

  const getForwardDistance =
    useCallback(
      (current, target) => {
        const currentNormalized =
          normalizeAngle(current)

        const targetNormalized =
          normalizeAngle(target)

        let delta =
          targetNormalized -
          currentNormalized

        if (delta < 0) {
          delta += 360
        }

        return delta
      },
      [normalizeAngle]
    )

  /* ========================================================================
     START AUTOMATIC ROTATION
  ======================================================================== */

  const startAutomaticRotation =
    useCallback(() => {
      if (reduceMotion) return

      if (hovered) return

      if (isSelectingRef.current) {
        return
      }

      animationRef.current?.stop()

      const currentRotation =
        rotation.get()

      animationRef.current =
        animate(
          rotation,
          currentRotation + 360,
          {
            duration:
              ROTATION_DURATION,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }
        )
    }, [
      reduceMotion,
      hovered,
      rotation,
    ])

  /* ========================================================================
     MOVE NEEDLE TO SELECTED HEAD
  ======================================================================== */

  const moveNeedleToContent =
    useCallback(
      (index) => {
        if (
          index < 0 ||
          index >=
            TARGET_ANGLES.length
        ) {
          return
        }

        /*
          ================================================================
          IMPORTANT FIX

          Update the card immediately.
          This means the card and needle always
          respond to the same click.
          ================================================================
        */

        selectedIndexRef.current =
          index

        setActive(index)

        /*
          Stop every previous animation.
        */

        animationRef.current?.stop()
        clickAnimationRef.current?.stop()

        /*
          ================================================================
          REDUCED MOTION
          ================================================================
        */

        if (reduceMotion) {
          rotation.set(
            TARGET_ANGLES[index]
          )

          isSelectingRef.current =
            false

          return
        }

        /*
          ================================================================
          MANUAL SELECTION
          ================================================================
        */

        isSelectingRef.current = true

        const currentRotation =
          rotation.get()

        const targetAngle =
          TARGET_ANGLES[index]

        /*
          ================================================================
          ALWAYS MOVE FORWARD

          This keeps the same direction as the
          automatic rotation.
          ================================================================
        */

        const delta =
          getForwardDistance(
            currentRotation,
            targetAngle
          )

        /*
          If the needle is already almost
          exactly at the selected head.
        */

        if (delta < 0.5) {
          rotation.set(
            currentRotation
          )

          /*
            Make absolutely sure the card
            stays synchronized.
          */

          setActive(index)

          isSelectingRef.current =
            false

          if (!hovered) {
            startAutomaticRotation()
          }

          return
        }

        /*
          ================================================================
          EXACT TARGET ROTATION
          ================================================================
        */

        const targetRotation =
          currentRotation + delta

        const duration =
          delta /
          DEGREES_PER_SECOND

        /*
          ================================================================
          MOVE NEEDLE

          The needle travels at the exact same
          speed as the automatic rotation.
          ================================================================
        */

        clickAnimationRef.current =
          animate(
            rotation,
            targetRotation,
            {
              duration,
              ease: 'linear',

              onUpdate: () => {
                /*
                  Do not change active card while
                  manually travelling.
                */
              },

              onComplete: () => {
                /*
                  ======================================================
                  CRITICAL FIX

                  Force the needle to the EXACT
                  target position.

                  This prevents tiny angle differences.
                  ======================================================
                */

                rotation.set(
                  targetRotation
                )

                /*
                  Keep card and needle synchronized.
                */

                selectedIndexRef.current =
                  index

                setActive(index)

                isSelectingRef.current =
                  false

                /*
                  Continue automatic rotation.
                */

                if (!hovered) {
                  startAutomaticRotation()
                }
              },
            }
          )
      },
      [
        TARGET_ANGLES,
        reduceMotion,
        rotation,
        setActive,
        getForwardDistance,
        hovered,
        startAutomaticRotation,
        DEGREES_PER_SECOND,
      ]
    )

  /* ========================================================================
     EXPOSE SELECTION FUNCTION TO PARENT
  ======================================================================== */

  useEffect(() => {
    if (onSelect) {
      onSelect.current =
        moveNeedleToContent
    }

    return () => {
      if (onSelect) {
        onSelect.current = null
      }
    }
  }, [
    onSelect,
    moveNeedleToContent,
  ])

  /* ========================================================================
     CLICK ORBIT HEAD
  ======================================================================== */

  const handlePointClick =
    useCallback(
      (index) => {
        moveNeedleToContent(index)
      },
      [moveNeedleToContent]
    )

  /* ========================================================================
     AUTOMATIC ROTATION
  ======================================================================== */

  useEffect(() => {
    if (reduceMotion) {
      animationRef.current?.stop()

      rotation.set(
        TARGET_ANGLES[active] ?? -90
      )

      return
    }

    animationRef.current?.stop()

    if (hovered) {
      return
    }

    if (isSelectingRef.current) {
      return
    }

    const currentRotation =
      rotation.get()

    animationRef.current =
      animate(
        rotation,
        currentRotation + 360,
        {
          duration:
            ROTATION_DURATION,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }
      )

    return () => {
      animationRef.current?.stop()
    }
  }, [
    hovered,
    reduceMotion,
    rotation,
    TARGET_ANGLES,
  ])

  /* ========================================================================
     SYNCHRONIZE CARD WITH NEEDLE
  ======================================================================== */

  useEffect(() => {
    if (reduceMotion) return

    let frame

    const updateActive =
      () => {
        /*
          ================================================================
          IMPORTANT

          While clicking a card, the needle is travelling
          toward that card.

          We DON'T change the card during that movement.

          This prevents:

          Card 1
             ↓
          Needle moving
             ↓
          Card 2 accidentally activates
          ================================================================
        */

        if (!isSelectingRef.current) {
          const raw =
            normalizeAngle(
              rotation.get()
            )

          const distances =
            TARGET_ANGLES.map(
              (angle) => {
                const target =
                  normalizeAngle(angle)

                let difference =
                  Math.abs(
                    raw - target
                  )

                if (
                  difference > 180
                ) {
                  difference =
                    360 - difference
                }

                return difference
              }
            )

          let next = 0

          distances.forEach(
            (distance, index) => {
              if (
                distance <
                distances[next]
              ) {
                next = index
              }
            }
          )

          selectedIndexRef.current =
            next

          setActive(
            (current) =>
              current === next
                ? current
                : next
          )
        }

        frame =
          requestAnimationFrame(
            updateActive
          )
      }

    frame =
      requestAnimationFrame(
        updateActive
      )

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [
    rotation,
    reduceMotion,
    setActive,
    normalizeAngle,
    TARGET_ANGLES,
  ])

  /* ========================================================================
     POSITION
  ======================================================================== */

  const getPosition = (
    angle,
    radius
  ) => {
    const radians =
      (angle * Math.PI) / 180

    return {
      left: `${
        50 +
        Math.cos(radians) *
          radius
      }%`,

      top: `${
        50 +
        Math.sin(radians) *
          radius
      }%`,
    }
  }

  /* ========================================================================
     RENDER
  ======================================================================== */

  return (
    <div
      className="
        relative
        mx-auto
        h-[330px]
        w-[330px]
        max-w-full
        select-none
        sm:h-[390px]
        sm:w-[390px]
        lg:h-[440px]
        lg:w-[440px]
      "
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
    >
      {/* ==================================================================
          ATMOSPHERE
      ================================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[5%]
          rounded-full
          bg-signal/10
          blur-[90px]
        "
        animate={{
          scale: hovered
            ? 1.12
            : [0.92, 1.06, 0.92],

          opacity: hovered
            ? 0.3
            : [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: hovered
            ? 0
            : Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ==================================================================
          OUTER ORBIT
      ================================================================== */}

      <motion.div
        className="
          absolute
          inset-[5%]
          rounded-full
          border
          border-signal/10
        "
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* ==================================================================
          DASHED ORBIT
      ================================================================== */}

      <motion.div
        className="
          absolute
          inset-[10%]
          rounded-full
          border
          border-dashed
          border-signal/20
        "
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* ==================================================================
          MAIN ORBIT
      ================================================================== */}

      <div
        className="
          absolute
          inset-[17%]
          rounded-full
          border
          border-[var(--border)]
        "
      />

      {/* ==================================================================
          INNER ORBIT
      ================================================================== */}

      <motion.div
        className="
          absolute
          inset-[26%]
          rounded-full
          border
          border-signal/15
        "
        animate={{
          scale: [1, 1.04, 1],
          opacity: [
            0.25,
            0.7,
            0.25,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* ==================================================================
          ORBIT DOTS
      ================================================================== */}

      {Array.from({
        length: 36,
      }).map((_, index) => {
        const angle =
          index * 10

        const position =
          getPosition(
            angle,
            43
          )

        const major =
          index % 3 === 0

        return (
          <motion.span
            key={index}
            className={`
              absolute
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-signal
              ${
                major
                  ? 'h-1.5 w-1.5'
                  : 'h-1 w-1'
              }
            `}
            style={{
              left:
                position.left,
              top:
                position.top,
            }}
            animate={{
              opacity: major
                ? [
                    0.2,
                    0.85,
                    0.2,
                  ]
                : [
                    0.06,
                    0.35,
                    0.06,
                  ],

              scale: major
                ? [
                    0.8,
                    1.3,
                    0.8,
                  ]
                : [
                    0.7,
                    1,
                    0.7,
                  ],
            }}
            transition={{
              duration:
                2 +
                (index % 4) *
                  0.35,

              delay:
                index * 0.08,

              repeat: Infinity,
            }}
          />
        )
      })}

      {/* ==================================================================
          ENERGY RING
      ================================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[11%]
          rounded-full
          border
          border-transparent
          border-t-signal/80
          border-r-signal/20
        "
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* ==================================================================
          NEEDLE
      ================================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
        "
        style={{
          rotate: rotation,
        }}
      >
        {/* Needle glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[165px]
            w-[7px]
            -translate-x-1/2
            -translate-y-full
            rounded-full
            bg-signal/10
            blur-md
            origin-bottom
          "
        />

        {/* Needle */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[165px]
            w-[2px]
            -translate-x-1/2
            -translate-y-full
            rounded-full
            bg-signal
            shadow-[0_0_20px_rgba(46,111,255,0.9)]
            origin-bottom
          "
        />

        {/* Needle point */}

        <div
          className="
            absolute
            left-1/2
            top-[calc(50%-165px)]
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-signal
            bg-[var(--bg)]
            shadow-[0_0_18px_rgba(46,111,255,0.9)]
          "
        />
      </motion.div>

      {/* ==================================================================
          DIRECTION POINTS / HEADS
      ================================================================== */}

      {points.map(
        (point, index) => {
          const Icon =
            point.icon

          const position =
            getPosition(
              point.angle,
              36
            )

          const isActive =
            active === index

          return (
            <button
              key={point.label}
              type="button"
              onClick={() =>
                handlePointClick(
                  index
                )
              }
              className="
                absolute
                z-50
                -translate-x-1/2
                -translate-y-1/2
                focus:outline-none
              "
              style={{
                left:
                  position.left,
                top:
                  position.top,
              }}
            >
              <motion.div
                animate={{
                  scale:
                    isActive
                      ? 1.08
                      : 1,

                  y:
                    isActive
                      ? -5
                      : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  flex
                  min-w-[100px]
                  flex-col
                  items-center
                  gap-2
                "
              >
                {/* Icon */}

                <div
                  className={`
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? 'border-signal bg-signal text-white shadow-[0_0_30px_rgba(46,111,255,0.45)]'
                        : 'border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]/40'
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                {/* Label */}

                <div className="text-center">
                  <p
                    className={`
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      ${
                        isActive
                          ? 'text-signal'
                          : 'text-[var(--fg)]/30'
                      }
                    `}
                  >
                    {point.short}
                  </p>

                  <p
                    className={`
                      mt-0.5
                      text-[10px]
                      font-medium
                      ${
                        isActive
                          ? 'text-[var(--fg)]'
                          : 'text-[var(--fg)]/30'
                      }
                    `}
                  >
                    {point.label}
                  </p>
                </div>
              </motion.div>
            </button>
          )
        }
      )}

      {/* ==================================================================
          CENTER
      ================================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-40
          flex
          h-[125px]
          w-[125px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-signal/20
          bg-[var(--bg)]
          shadow-[0_0_70px_rgba(46,111,255,0.18)]
          sm:h-[145px]
          sm:w-[145px]
        "
      >
        <motion.div
          className="
            absolute
            inset-3
            rounded-full
            border
            border-signal/10
          "
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="
            absolute
            h-20
            w-20
            rounded-full
            bg-signal/10
            blur-2xl
          "
          animate={{
            scale: [
              0.8,
              1.2,
              0.8,
            ],
            opacity: [
              0.25,
              0.6,
              0.25,
            ],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <img
          src="/images/portfolio/logo.png"
          alt="DESFLYER"
          className="
            relative
            z-10
            h-16
            w-16
            object-contain
            sm:h-20
            sm:w-20
          "
        />
      </div>

      {/* ==================================================================
          STATUS
      ================================================================== */}

      <div
        className="
          absolute
          bottom-[-8px]
          left-1/2
          z-50
          -translate-x-1/2
          whitespace-nowrap
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--bg)]/80
          px-3
          py-1.5
          font-mono
          text-[8px]
          uppercase
          tracking-[0.18em]
          text-[var(--fg)]/35
          backdrop-blur-md
        "
      >
        <span
          className="
            mr-2
            inline-block
            h-1.5
            w-1.5
            animate-pulse
            rounded-full
            bg-signal
          "
        />

        {hovered
          ? 'System paused'
          : 'Auto navigation active'}
      </div>
    </div>
  )
}

/* ==========================================================================
   ABOUT PAGE
========================================================================== */

export default function About() {
  const heroRef =
    useRef(null)

  /*
    Parent receives the SAME function that
    controls the needle and active card.
  */

  const orbitSelectRef =
    useRef(null)

  const reduceMotion =
    useReducedMotion()

  const [active, setActive] =
    useState(0)

  /* ========================================================================
     SCROLL
  ======================================================================== */

  const {
    scrollYProgress,
  } = useScroll({
    target: heroRef,
    offset: [
      'start start',
      'end start',
    ],
  })

  const imageY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [
        0,
        reduceMotion
          ? 0
          : 80,
      ]
    )

  const heroOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.8],
      [1, 0]
    )

  /* ========================================================================
     STATS
  ======================================================================== */

  const years =
    new Date().getFullYear() -
    Number(siteConfig.founded)

  const activeCard =
    cards[active]

  return (
    <>
      <Seo
        title="About"
        description={
          aboutContent.intro
        }
      />

      {/* ==================================================================
          ABOUT HERO
      ================================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          min-h-[720px]
          overflow-hidden
          px-5
          pb-20
          pt-[94px]
          sm:px-8
          sm:pt-[104px]
          lg:min-h-[760px]
          lg:px-10
          lg:pt-[112px]
        "
      >
        <CursorLight
          containerRef={heroRef}
          reduceMotion={
            reduceMotion
          }
        />

        {/* ==================================================================
            HERO IMAGE
        ================================================================== */}

        <motion.div
          style={{
            y: imageY,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
          "
        >
          <img
            src="/images/portfolio/about.png"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          <div className="absolute inset-0 bg-black/20" />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-40
              bg-gradient-to-t
              from-[var(--bg)]
              to-transparent
            "
          />
        </motion.div>

        {/* ==================================================================
            HERO CONTENT
        ================================================================== */}

        <motion.div
          style={{
            opacity:
              heroOpacity,
          }}
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[610px]
            max-w-shell
            items-center
          "
        >
          <div className="w-full max-w-3xl">

            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="mb-6"
            >
              <Eyebrow>
                {
                  aboutContent.eyebrow
                }
              </Eyebrow>
            </motion.div>

            {/* Heading */}

            <RevealHeading
              text={
                aboutContent.heading
              }
              className="
                xl:text-[75px]
                max-w-4xl
                font-display
                text-[clamp(3rem,7vw,6.5rem)]
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                text-white
                drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]
              "
            />

            {/* Accent */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 140,
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                mt-8
                h-[2px]
                rounded-full
                bg-signal
                shadow-[0_0_15px_rgba(46,111,255,0.8)]
              "
            />

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-white/80
                drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]
                sm:text-base
                lg:text-lg
                lg:leading-8
              "
            >
              {
                aboutContent.intro
              }
            </motion.p>

            {/* Founded */}

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
                delay: 0.7,
                duration: 0.6,
              }}
              className="
                mt-7
                flex
                items-center
                gap-3
                font-mono
                text-[9px]
                uppercase
                tracking-[0.16em]
                text-white/65
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-signal
                  shadow-[0_0_10px_rgba(46,111,255,0.8)]
                "
              />

              Founded{' '}
              {siteConfig.founded}

              <span className="text-white/30">
                /
              </span>

              {siteConfig.location}
            </motion.div>

            {/* Technology pills */}

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
                delay: 0.8,
                duration: 0.6,
              }}
              className="
                mt-7
                flex
                flex-wrap
                gap-2
              "
            >
              {[
                'Digital systems',
                'Product engineering',
                'Creative technology',
              ].map(
                (item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/15
                      bg-black/20
                      px-3
                      py-2
                      backdrop-blur-sm
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[8px]
                        text-blue-300
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-[9px]
                        text-white/70
                      "
                    >
                      {item}
                    </span>
                  </div>
                )
              )}
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="
                mt-9
                grid
                max-w-xl
                grid-cols-3
                border-y
                border-white/15
                py-5
              "
            >
              <div>
                <p
                  className="
                    font-display
                    text-2xl
                    font-bold
                    tabular-nums
                    text-white
                    sm:text-3xl
                  "
                >
                  <Counter
                    to={years}
                    suffix="+"
                    reduceMotion={
                      reduceMotion
                    }
                  />
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-wider
                    text-white/50
                  "
                >
                  Years active
                </p>
              </div>

              <div
                className="
                  border-l
                  border-white/15
                  pl-4
                "
              >
                <p
                  className="
                    font-display
                    text-2xl
                    font-bold
                    tabular-nums
                    text-white
                    sm:text-3xl
                  "
                >
                  <Counter
                    to={40}
                    suffix="+"
                    reduceMotion={
                      reduceMotion
                    }
                  />
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-wider
                    text-white/50
                  "
                >
                  Projects
                </p>
              </div>

              <div
                className="
                  border-l
                  border-white/15
                  pl-4
                "
              >
                <p
                  className="
                    font-display
                    text-2xl
                    font-bold
                    tabular-nums
                    text-white
                    sm:text-3xl
                  "
                >
                  <Counter
                    to={98}
                    suffix="%"
                    reduceMotion={
                      reduceMotion
                    }
                  />
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-wider
                    text-white/50
                  "
                >
                  Retention
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-3
            font-mono
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-white/40
            sm:flex
          "
        >
          <span>
            Scroll to explore
          </span>

          <span
            className="
              h-px
              w-10
              bg-gradient-to-r
              from-signal
              to-transparent
            "
          />
        </motion.div>
      </section>

      {/* ==================================================================
          CORE SYSTEM
      ================================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-6
          pb-32
          pt-24
          lg:px-10
        "
      >
        {/* Background */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-signal/[0.025]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[900px]
              w-[900px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-signal/[0.015]
            "
          />

          <div
            className="
              absolute
              left-0
              right-0
              top-1/2
              h-px
              bg-gradient-to-r
              from-transparent
              via-signal/[0.08]
              to-transparent
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-shell
          "
        >
          {/* ==================================================================
              CORE HEADING
          ================================================================== */}

          <div
            className="
              mb-10
              flex
              flex-col
              items-center
              text-center
            "
          >
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
                font-mono
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-[var(--fg)]/35
              "
            >
              <FiZap
                className="text-signal"
                size={11}
              />

              DESFLYER CORE SYSTEM
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                font-display
                text-2xl
                font-semibold
                tracking-tight
                text-[var(--fg)]
                sm:text-3xl
              "
            >
              What drives us
            </motion.h2>
          </div>

          {/* ==================================================================
              MAIN SYSTEM
          ================================================================== */}

          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[1fr_500px_1fr]
              lg:gap-8
            "
          >
            {/* ==================================================================
                LEFT CONTENT
            ================================================================== */}

            <div
              className="
                order-2
                lg:order-1
              "
            >
              <AnimatePresence
                mode="wait"
              >
                <motion.div
                  key={
                    activeCard.key
                  }
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    mx-auto
                    max-w-sm
                    lg:mx-0
                  "
                >
                  <div
                    className="
                      mb-5
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        h-px
                        w-10
                        bg-signal
                      "
                    />

                    <span
                      className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-signal
                      "
                    >
                      0{active + 1} / 03
                    </span>
                  </div>

                  <h3
                    className="
                      font-display
                      text-3xl
                      font-semibold
                      tracking-tight
                      text-[var(--fg)]
                      sm:text-4xl
                    "
                  >
                    {
                      activeCard.title
                    }
                  </h3>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-[var(--fg)]/55
                    "
                  >
                    {
                      activeCard.body
                    }
                  </p>

                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      gap-3
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-[var(--fg)]/30
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-signal
                      "
                    />

                    Active direction
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ==================================================================
                CENTER ORBIT
            ================================================================== */}

            <div
              className="
                order-1
                flex
                justify-center
                lg:order-2
              "
            >
              <OrbitalCore
                active={active}
                setActive={setActive}
                reduceMotion={
                  reduceMotion
                }
                onSelect={
                  orbitSelectRef
                }
              />
            </div>

            {/* ==================================================================
                RIGHT CARDS
            ================================================================== */}

            <div className="order-3">
              <div
                className="
                  mx-auto
                  max-w-sm
                  space-y-3
                  lg:ml-auto
                "
              >
                {cards.map(
                  (card, index) => {
                    const Icon =
                      card.icon

                    const isActive =
                      active === index

                    return (
                      <button
                        key={
                          card.key
                        }
                        type="button"
                        onClick={() => {
                          /*
                            IMPORTANT:

                            Card click calls the exact same
                            function that orbit head click uses.

                            So BOTH card + needle move together.
                          */

                          orbitSelectRef.current?.(
                            index
                          )
                        }}
                        className="
                          group
                          flex
                          w-full
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          p-4
                          text-left
                          transition-all
                          duration-300
                        "
                        style={{
                          borderColor:
                            isActive
                              ? 'rgba(46,111,255,0.35)'
                              : 'var(--border)',

                          background:
                            isActive
                              ? 'rgba(46,111,255,0.07)'
                              : 'transparent',
                        }}
                      >
                        <span
                          className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            transition-all
                            ${
                              isActive
                                ? 'border-signal bg-signal text-white'
                                : 'border-[var(--border)] text-[var(--fg)]/35 group-hover:border-signal/30 group-hover:text-signal'
                            }
                          `}
                        >
                          <Icon
                            size={16}
                          />
                        </span>

                        <span
                          className="
                            min-w-0
                            flex-1
                          "
                        >
                          <span
                            className={`
                              block
                              text-sm
                              font-medium
                              ${
                                isActive
                                  ? 'text-[var(--fg)]'
                                  : 'text-[var(--fg)]/45'
                              }
                            `}
                          >
                            {
                              card.title
                            }
                          </span>

                          <span
                            className="
                              mt-1
                              block
                              font-mono
                              text-[8px]
                              uppercase
                              tracking-[0.16em]
                              text-[var(--fg)]/25
                            "
                          >
                            0{index + 1}{' '}
                            / Direction
                          </span>
                        </span>

                        <FiArrowUpRight
                          size={15}
                          className={`
                            transition-all
                            ${
                              isActive
                                ? 'translate-x-0 translate-y-0 text-signal'
                                : 'translate-x-[-3px] translate-y-[3px] text-[var(--fg)]/15 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-signal'
                            }
                          `}
                        />
                      </button>
                    )
                  }
                )}
              </div>
            </div>
          </div>

          {/* ==================================================================
              ACTIVE STATE
          ================================================================== */}

          <motion.div
            layout
            className="
              mx-auto
              mt-12
              max-w-4xl
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--bg)]/60
              p-5
              backdrop-blur-xl
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-signal
                    shadow-[0_0_10px_rgba(46,111,255,0.8)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-[var(--fg)]/35
                  "
                >
                  Current system state
                </span>
              </div>

              {/* Bottom indicators */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                {cards.map(
                  (card, index) => (
                    <button
                      key={
                        card.key
                      }
                      type="button"
                      onClick={() => {
                        /*
                          Indicator also controls
                          both card + needle.
                        */

                        orbitSelectRef.current?.(
                          index
                        )
                      }}
                      className={`
                        h-1
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          active ===
                          index
                            ? 'w-12 bg-signal'
                            : 'w-5 bg-[var(--border)]'
                        }
                      `}
                      aria-label={`Show ${card.title}`}
                    />
                  )
                )}
              </div>

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[var(--fg)]/30
                "
              >
                {
                  activeCard.title
                }
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================
          CTA
      ================================================================== */}

      <CTABand />
    </>
  )
}