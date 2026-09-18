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
  FiMail,
  FiLinkedin,
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
   LEADERSHIP DATA
========================================================================== */

const leadership = [
  {
    id: 'founder',
    reportsTo: null,
    name: 'Saravanan',
    title: 'Founder & CEO',
    clearance: 'L0',
    bio: 'One or two sentences on what they started the company to do, and what they still stay close to today.',
    stat: {
      label: 'Years leading',
      value: '10',
    },
    image: '/images/team/founder.jpg',
    email: 'founder@example.com',
    linkedin: '#',
  },

  {
    id: 'cfo',
    reportsTo: 'founder',
    name: 'Swetha',
    title: 'Chief Financial Officer',
    clearance: 'L1',
    bio: 'What financial function and planning they oversee.',
    stat: {
      label: 'Years in finance',
      value: '15',
    },
    image: '/images/portfolio/swetha.jpeg',
    email: 'cfo@example.com',
    linkedin: '#',
  },

  {
    id: 'coo',
    reportsTo: 'founder',
    name: 'Akash',
    title: 'Chief Operating Officer',
    clearance: 'L1',
    bio: 'What operational systems and teams they are responsible for.',
    stat: {
      label: 'Team members',
      value: '40+',
    },
    image: '/images/portfolio/akash.jpeg',
    email: 'coo@example.com',
    linkedin: '#',
  },

  {
    id: 'md',
    reportsTo: 'founder',
    name: 'Hari Haran',
    title: 'Managing Director',
    clearance: 'L1',
    bio: 'What they run day-to-day and what they own across the business.',
    stat: {
      label: 'Client accounts',
      value: '30+',
    },
    image: '/images/portfolio/hariharan.jpeg',
    email: 'md@example.com',
    linkedin: '#',
  },
]

const founderLead = leadership.find(
  (person) => !person.reportsTo
)

const directReports = leadership.filter(
  (person) => person.reportsTo
)

/* ==========================================================================
   INTERNS DATA
========================================================================== */

const interns = [
  {
    id: 'intern-01',
    name: 'Intern Name 01',
    title: 'Software Development Intern',
    bio: 'Working with the team to build practical digital products and gain hands-on experience in modern product development.',
    image: '/images/portfolio/tamil.jpeg',
    stat: {
      label: 'Focus',
      value: 'Dev',
    },
    email: 'intern1@example.com',
    linkedin: '#',
  },
  {
    id: 'intern-02',
    name: 'Intern Name 02',
    title: 'UI/UX Design Intern',
    bio: 'Exploring user experience, interface design and creative problem-solving while contributing to real-world projects.',
    image: '/images/portfolio/atchu.jpeg',
    stat: {
      label: 'Focus',
      value: 'Design',
    },
    email: 'intern2@example.com',
    linkedin: '#',
  },
]

/* ==========================================================================
   RESPONSIVE HELPERS
========================================================================== */

function getResponsiveCoreSize() {
  if (typeof window === 'undefined') {
    return 330
  }

  const width = window.innerWidth

  if (width < 360) {
    return 270
  }

  if (width < 480) {
    return 300
  }

  if (width < 640) {
    return 320
  }

  if (width < 768) {
    return 350
  }

  if (width < 1024) {
    return 390
  }

  if (width < 1280) {
    return 420
  }

  return 440
}

function useResponsiveCoreSize() {
  const [size, setSize] = useState(
    getResponsiveCoreSize
  )

  useEffect(() => {
    const handleResize = () => {
      setSize(getResponsiveCoreSize())
    }

    handleResize()

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )
    }
  }, [])

  return size
}

/* ==========================================================================
   COUNTER
========================================================================== */

function Counter({
  to,
  suffix = '',
  reduceMotion,
}) {
  const [value, setValue] = useState(
    reduceMotion ? to : 0
  )

  useEffect(() => {
    if (reduceMotion) {
      setValue(to)
      return
    }

    const controls = animate(
      0,
      to,
      {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          setValue(Math.round(v))
        },
      }
    )

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

function RevealHeading({
  text,
  className,
}) {
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
            initial={{
              y: '110%',
            }}
            animate={{
              y: '0%',
            }}
            transition={{
              duration: 0.7,
              delay:
                0.12 +
                index * 0.055,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
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

    const node =
      containerRef.current

    if (!node) return

    const move = (event) => {
      const rect =
        node.getBoundingClientRect()

      x.set(
        event.clientX -
          rect.left
      )

      y.set(
        event.clientY -
          rect.top
      )
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
      style={{
        x,
        y,
      }}
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

  const coreSize =
    useResponsiveCoreSize()

  const needleLength =
    Math.round(coreSize * 0.375)

  const points = useMemo(
    () => [
      {
        x: 50,
        y: 15,
        label: 'Vision',
        short: '01',
        icon: FiCompass,
      },
      {
        x: 80,
        y: 65,
        label: 'Mission',
        short: '02',
        icon: FiTarget,
      },
      {
        x: 20,
        y: 65,
        label: 'Team',
        short: '03',
        icon: FiUsers,
      },
    ],
    []
  )

  const rotation =
    useMotionValue(0)

  const automaticAnimationRef =
    useRef(null)

  const hoveredRef =
    useRef(false)

  const activeRef =
    useRef(0)

  const ROTATION_DURATION = 25

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    hoveredRef.current = hovered
  }, [hovered])

  const normalizeAngle =
    useCallback((angle) => {
      return (
        ((angle % 360) + 360) %
        360
      )
    }, [])

  const getTargetAngle =
    useCallback(
      (point) => {
        const dx =
          point.x - 50

        const dy =
          point.y - 50

        const angle =
          (Math.atan2(
            dx,
            -dy
          ) *
            180) /
          Math.PI

        return normalizeAngle(
          angle
        )
      },
      [normalizeAngle]
    )

  const targetAngles = useMemo(
    () =>
      points.map((point) =>
        getTargetAngle(point)
      ),
    [points, getTargetAngle]
  )

  const stopClock =
    useCallback(() => {
      if (
        automaticAnimationRef.current
      ) {
        automaticAnimationRef.current.stop()

        automaticAnimationRef.current =
          null
      }
    }, [])

  const startClock =
    useCallback(() => {
      if (reduceMotion) return

      if (hoveredRef.current)
        return

      stopClock()

      const currentRotation =
        rotation.get()

      automaticAnimationRef.current =
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
      rotation,
      stopClock,
    ])

  const selectPoint =
    useCallback(
      (index) => {
        if (
          index < 0 ||
          index >= points.length
        ) {
          return
        }

        stopClock()

        activeRef.current =
          index

        setActive(index)

        const target =
          targetAngles[index]

        const current =
          rotation.get()

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

        const finalRotation =
          current + delta

        rotation.set(
          finalRotation
        )

        activeRef.current =
          index

        setActive(index)

        if (reduceMotion) {
          return
        }

        if (
          !hoveredRef.current
        ) {
          requestAnimationFrame(
            () => {
              startClock()
            }
          )
        }
      },
      [
        points.length,
        targetAngles,
        rotation,
        normalizeAngle,
        setActive,
        stopClock,
        reduceMotion,
        startClock,
      ]
    )

  useEffect(() => {
    if (onSelect) {
      onSelect.current =
        selectPoint
    }

    return () => {
      if (onSelect) {
        onSelect.current =
          null
      }
    }
  }, [
    onSelect,
    selectPoint,
  ])

  useEffect(() => {
    const firstTarget =
      targetAngles[0]

    rotation.set(
      firstTarget
    )

    activeRef.current = 0

    setActive(0)

    if (reduceMotion) {
      return
    }

    const timer =
      setTimeout(() => {
        if (
          !hoveredRef.current
        ) {
          startClock()
        }
      }, 500)

    return () => {
      clearTimeout(timer)
      stopClock()
    }
  }, [
    reduceMotion,
    rotation,
    targetAngles,
    setActive,
    startClock,
    stopClock,
  ])

  useEffect(() => {
    if (reduceMotion) return

    let frame

    const checkNeedlePosition =
      () => {
        const current =
          normalizeAngle(
            rotation.get()
          )

        let closestIndex = -1

        let closestDistance =
          Infinity

        targetAngles.forEach(
          (
            target,
            index
          ) => {
            const targetNormalized =
              normalizeAngle(
                target
              )

            let difference =
              Math.abs(
                current -
                  targetNormalized
              )

            if (
              difference > 180
            ) {
              difference =
                360 -
                difference
            }

            if (
              difference < 3 &&
              difference <
                closestDistance
            ) {
              closestDistance =
                difference

              closestIndex =
                index
            }
          }
        )

        if (
          closestIndex !== -1 &&
          activeRef.current !==
            closestIndex
        ) {
          activeRef.current =
            closestIndex

          setActive(
            closestIndex
          )
        }

        frame =
          requestAnimationFrame(
            checkNeedlePosition
          )
      }

    frame =
      requestAnimationFrame(
        checkNeedlePosition
      )

    return () => {
      cancelAnimationFrame(
        frame
      )
    }
  }, [
    rotation,
    targetAngles,
    normalizeAngle,
    setActive,
    reduceMotion,
  ])

  const handleMouseEnter =
    useCallback(() => {
      hoveredRef.current =
        true

      setHovered(true)

      stopClock()
    }, [stopClock])

  const handleMouseLeave =
    useCallback(() => {
      hoveredRef.current =
        false

      setHovered(false)

      if (!reduceMotion) {
        requestAnimationFrame(
          () => {
            startClock()
          }
        )
      }
    }, [
      reduceMotion,
      startClock,
    ])

  return (
    <div
      className="
        relative
        mx-auto
        max-w-full
        select-none
      "
      style={{
        width: `${coreSize}px`,
        height: `${coreSize}px`,
      }}
      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
    >
      {/* ATMOSPHERE */}

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
            : [
                0.92,
                1.06,
                0.92,
              ],

          opacity: hovered
            ? 0.3
            : [
                0.1,
                0.22,
                0.1,
              ],
        }}
        transition={{
          duration: 5,
          repeat: hovered
            ? 0
            : Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* OUTER ORBIT */}

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

      {/* DASHED ORBIT */}

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

      {/* MAIN ORBIT */}

      <div
        className="
          absolute
          inset-[17%]
          rounded-full
          border
          border-[var(--border)]
        "
      />

      {/* INNER ORBIT */}

      <motion.div
        className="
          absolute
          inset-[26%]
          rounded-full
          border
          border-signal/15
        "
        animate={{
          scale: [
            1,
            1.04,
            1,
          ],
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

      {/* ORBIT DOTS */}

      {Array.from({
        length: 36,
      }).map(
        (_, index) => {
          const angle =
            index * 10

          const radians =
            (angle *
              Math.PI) /
            180

          const left =
            50 +
            Math.cos(
              radians
            ) *
              43

          const top =
            50 +
            Math.sin(
              radians
            ) *
              43

          const major =
            index % 3 === 0

          return (
            <motion.span
              key={index}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal ${
                major
                  ? 'h-1.5 w-1.5'
                  : 'h-1 w-1'
              }`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
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
        }
      )}

      {/* ENERGY RING */}

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

      {/* NEEDLE */}

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
        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[7px]
            -translate-x-1/2
            -translate-y-full
            rounded-full
            bg-signal/10
            blur-md
            origin-bottom
          "
          style={{
            height: `${needleLength}px`,
          }}
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            w-[2px]
            -translate-x-1/2
            -translate-y-full
            rounded-full
            bg-signal
            shadow-[0_0_20px_rgba(46,111,255,0.9)]
            origin-bottom
          "
          style={{
            height: `${needleLength}px`,
          }}
        />

        <div
          className="
            absolute
            left-1/2
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
          style={{
            top: `calc(50% - ${needleLength}px)`,
          }}
        />
      </motion.div>

      {/* VISION / MISSION / TEAM */}

      {points.map(
        (
          point,
          index
        ) => {
          const Icon =
            point.icon

          const isActive =
            active === index

          return (
            <button
              key={
                point.label
              }
              type="button"
              onClick={() =>
                selectPoint(
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
                left: `${point.x}%`,
                top: `${point.y}%`,
              }}
              aria-label={`Show ${point.label}`}
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
                  min-w-[82px]
                  flex-col
                  items-center
                  gap-2
                  sm:min-w-[100px]
                "
              >
                <div
                  className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 sm:h-12 sm:w-12 sm:rounded-2xl ${
                    isActive
                      ? 'border-signal bg-signal text-white shadow-[0_0_30px_rgba(46,111,255,0.45)]'
                      : 'border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]/40'
                  }`}
                >
                  <Icon
                    size={16}
                    className="sm:h-[18px] sm:w-[18px]"
                  />
                </div>

                <div className="text-center">
                  <p
                    className={`font-mono text-[8px] uppercase tracking-[0.16em] sm:text-[9px] sm:tracking-[0.2em] ${
                      isActive
                        ? 'text-signal'
                        : 'text-[var(--fg)]/30'
                    }`}
                  >
                    {point.short}
                  </p>

                  <p
                    className={`mt-0.5 text-[9px] font-medium sm:text-[10px] ${
                      isActive
                        ? 'text-[var(--fg)]'
                        : 'text-[var(--fg)]/30'
                    }`}
                  >
                    {point.label}
                  </p>
                </div>
              </motion.div>
            </button>
          )
        }
      )}

      {/* CENTER LOGO */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-40
          flex
          h-[90px]
          w-[90px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-signal/20
          bg-[var(--bg)]
          shadow-[0_0_70px_rgba(46,111,255,0.18)]
          sm:h-[115px]
          sm:w-[115px]
          md:h-[130px]
          md:w-[130px]
          lg:h-[145px]
          lg:w-[145px]
        "
      >
        <motion.div
          className="
            absolute
            inset-2
            rounded-full
            border
            border-signal/10
            sm:inset-3
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
            h-16
            w-16
            rounded-full
            bg-signal/10
            blur-2xl
            sm:h-20
            sm:w-20
            md:h-24
            md:w-24
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

        <div className="relative flex items-center justify-center">
          <div
            className="
              absolute
              h-14
              w-14
              rounded-full
              bg-blue-500/70
              blur-2xl
              sm:h-20
              sm:w-20
              md:h-24
              md:w-24
            "
          />

          <img
            src="/images/portfolio/logo.png"
            alt="DESFLYER"
            className="
              relative
              z-10
              h-11
              w-11
              object-contain
              drop-shadow-[0_0_25px_rgba(0,120,255,1)]
              sm:h-14
              sm:w-14
              md:h-16
              md:w-16
            "
          />
        </div>
      </div>

      {/* STATUS */}

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
          px-2.5
          py-1.5
          font-mono
          text-[7px]
          uppercase
          tracking-[0.14em]
          text-[var(--fg)]/35
          backdrop-blur-md
          sm:px-3
          sm:text-[8px]
          sm:tracking-[0.18em]
        "
      >
        <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal sm:mr-2" />

        {hovered
          ? 'System paused'
          : 'Auto navigation active'}
      </div>
    </div>
  )
}

/* ==========================================================================
   LEADERSHIP AVATAR
========================================================================== */

function LeadershipPhoto({
  person,
  size = 'md',
}) {
  const [errored, setErrored] =
    useState(false)

  const initials =
    person.name
      .split(' ')
      .map(
        (part) =>
          part[0]
      )
      .join('')
      .slice(0, 2)
      .toUpperCase()

  const dimensions =
    size === 'lg'
      ? 'h-20 w-20 text-xl'
      : 'h-14 w-14 text-base'

  if (errored) {
    return (
      <div
        className={`relative flex shrink-0 items-center justify-center rounded-2xl border border-signal bg-signal font-display font-semibold text-white shadow-[0_0_28px_rgba(46,111,255,0.35)] ${dimensions}`}
      >
        {initials}
      </div>
    )
  }

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border border-signal/30 shadow-[0_0_28px_rgba(46,111,255,0.2)] ${dimensions}`}
    >
      <img
        src={person.image}
        alt={person.name}
        onError={() =>
          setErrored(true)
        }
        className="h-full w-full object-cover"
      />
    </div>
  )
}

/* ==========================================================================
   ABOUT PAGE
========================================================================== */

export default function About() {
  const heroRef = useRef(null)

  const orbitSelectRef = useRef(null)

  const reduceMotion = useReducedMotion()

  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 80]
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

      {/* ================================================================
          ABOUT HERO
      ================================================================= */}

      <section
  ref={heroRef}
  className="
    relative
    min-h-[680px]
    overflow-hidden
    px-4
    pb-12
    pt-[88px]
    sm:min-h-[700px]
    sm:px-6
    sm:pb-20
    sm:pt-[100px]
    md:px-8
    lg:min-h-[760px]
    lg:px-10
    lg:pt-[112px]
    xl:px-12
  "
>
  <CursorLight
    containerRef={heroRef}
    reduceMotion={reduceMotion}
  />

  {/* HERO IMAGE */}

  <motion.div
    initial={{
      scale: 1.18,
      opacity: 0.9,
    }}
    animate={{
      scale: 1,
      opacity: 1,
    }}
    transition={{
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    }}
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
        object-[50%_50%]
        sm:object-center
      "
    />

    <div className="absolute inset-0 bg-black/20" />

    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
  </motion.div>

  {/* HERO CONTENT */}

  <motion.div
    style={{
      opacity: heroOpacity,
    }}
    className="
      relative
      z-10
      mx-auto
      flex
      min-h-[590px]
      w-full
      max-w-shell
      items-center
      justify-center
      sm:min-h-[610px]
      lg:justify-start
    "
  >
    <div
      className="
        w-full
        max-w-3xl
        text-center
        lg:text-left
      "
    >

      {/* EYEBROW */}

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
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          mb-5
          flex
          justify-center
          sm:mb-6
          lg:justify-start
        "
      >
        <Eyebrow>
          {aboutContent.eyebrow}
        </Eyebrow>
      </motion.div>

      {/* HEADING */}

      <RevealHeading
        text={aboutContent.heading}
        className="
          mx-auto
          max-w-4xl
          font-display
          text-[42px]
          font-black
          leading-[0.92]
          text-white
          drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          sm:text-[50px]
          md:text-[58px]
          lg:mx-0
          lg:text-[64px]
          xl:text-[70px]
        "
      />

      {/* SIGNAL LINE */}

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
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          mx-auto
          mt-6
          h-[2px]
          rounded-full
          bg-signal
          shadow-[0_0_15px_rgba(46,111,255,0.8)]
          sm:mt-8
          lg:mx-0
        "
      />

      {/* INTRO */}

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
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-sm
          leading-6
          text-white/80
          drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]
          sm:mt-7
          sm:text-base
          sm:leading-7
          lg:mx-0
          lg:text-lg
          lg:leading-8
        "
      >
        {aboutContent.intro}
      </motion.p>

      {/* FOUNDED / LOCATION */}

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
          mt-6
          flex
          flex-wrap
          items-center
          justify-center
          gap-2
          font-mono
          text-[8px]
          uppercase
          tracking-[0.14em]
          text-white/65
          sm:mt-7
          sm:gap-3
          sm:text-[9px]
          sm:tracking-[0.16em]
          lg:justify-start
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

        Founded {siteConfig.founded}

        <span className="text-white/30">
          /
        </span>

        {siteConfig.location}
      </motion.div>

      {/* TAGS */}

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
          mt-6
          flex
          flex-wrap
          justify-center
          gap-2
          sm:mt-7
          lg:justify-start
        "
      >
        {[
          'Digital systems',
          'Product engineering',
          'Creative technology',
        ].map((item, index) => (
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
              px-2.5
              py-1.5
              backdrop-blur-sm
              sm:px-3
              sm:py-2
            "
          >
            <span
              className="
                font-mono
                text-[7px]
                text-blue-300
                sm:text-[8px]
              "
            >
              0{index + 1}
            </span>

            <span
              className="
                text-[8px]
                text-white/70
                sm:text-[9px]
              "
            >
              {item}
            </span>
          </div>
        ))}
      </motion.div>

      {/* STATS */}

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
          mx-auto
          mt-8
          grid
          max-w-xl
          grid-cols-3
          border-y
          border-white/15
          py-4
          text-center
          sm:mt-9
          sm:py-5
          lg:mx-0
          lg:text-left
        "
      >

        {/* YEARS */}

        <div className="text-center lg:text-left">
          <p
            className="
              font-display
              text-xl
              font-bold
              tabular-nums
              text-white
              sm:text-2xl
              md:text-3xl
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
              mt-1
              text-[8px]
              uppercase
              tracking-wider
              text-white/50
              sm:text-[9px]
            "
          >
            Years active
          </p>
        </div>

        {/* PROJECTS */}

        <div
          className="
            border-l
            border-white/15
            pl-3
            text-center
            sm:pl-4
            lg:text-left
          "
        >
          <p
            className="
              font-display
              text-xl
              font-bold
              tabular-nums
              text-white
              sm:text-2xl
              md:text-3xl
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
              mt-1
              text-[8px]
              uppercase
              tracking-wider
              text-white/50
              sm:text-[9px]
            "
          >
            Projects
          </p>
        </div>

        {/* RETENTION */}

        <div
          className="
            border-l
            border-white/15
            pl-3
            text-center
            sm:pl-4
            lg:text-left
          "
        >
          <p
            className="
              font-display
              text-xl
              font-bold
              tabular-nums
              text-white
              sm:text-2xl
              md:text-3xl
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
              mt-1
              text-[8px]
              uppercase
              tracking-wider
              text-white/50
              sm:text-[9px]
            "
          >
            Retention
          </p>
        </div>

      </motion.div>

    </div>
  </motion.div>

  {/* DESKTOP SCROLL LABEL */}

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

    <span className="h-px w-10 bg-gradient-to-r from-signal to-transparent" />
  </motion.div>
</section>

      {/* ================================================================
          CORE SYSTEM
      ================================================================= */}

      <section
        className="
          relative
          overflow-hidden
          px-4
          pb-12
          pt-12
          sm:px-6
          sm:pb-28
          sm:pt-24
          md:px-8
          lg:px-10
          lg:pb-32
          xl:px-12
        "
      >
        {/* BACKGROUND SYSTEM */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="
              absolute
              left-1/2
              top-[52%]
              h-[320px]
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-signal/[0.035]
              blur-[90px]
              sm:h-[500px]
              sm:w-[500px]
              sm:blur-[100px]
              lg:h-[650px]
              lg:w-[650px]
              lg:blur-[120px]
            "
            animate={{
              scale: [0.9, 1.08, 0.9],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="
              absolute
              left-[5%]
              top-[35%]
              h-40
              w-40
              rounded-full
              bg-signal/[0.025]
              blur-[70px]
              sm:left-[18%]
              sm:h-72
              sm:w-72
              sm:blur-[100px]
            "
            animate={{
              x: [0, 70, 0],
              y: [0, -35, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="
              absolute
              bottom-[15%]
              right-[3%]
              h-44
              w-44
              rounded-full
              bg-signal/[0.025]
              blur-[75px]
              sm:right-[12%]
              sm:h-80
              sm:w-80
              sm:blur-[110px]
            "
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* GRID */}

          <motion.div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--fg) 1px, transparent 1px),
                linear-gradient(to bottom, var(--fg) 1px, transparent 1px)
              `,
              backgroundSize: '55px 55px',
            }}
            animate={{
              backgroundPosition: [
                '0px 0px',
                '55px 55px',
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* CENTER LINE */}

          <motion.div
            className="
              absolute
              left-1/2
              top-0
              h-[260px]
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-signal/20
              to-transparent
              sm:h-[420px]
            "
            animate={{
              opacity: [0.15, 0.55, 0.15],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* HORIZONTAL LINE */}

          <motion.div
            className="
              absolute
              left-0
              right-0
              top-[52%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-signal/20
              to-transparent
            "
            animate={{
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* MOVING SIGNAL */}

          <motion.div
            className="
              absolute
              top-[calc(52%-1px)]
              h-[2px]
              w-20
              bg-gradient-to-r
              from-transparent
              via-signal/60
              to-transparent
              blur-[1px]
              sm:w-40
            "
            animate={{
              left: ['-10%', '110%'],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* PARTICLES */}

          {Array.from({ length: 28 }).map(
            (_, index) => (
              <motion.span
                key={`drive-particle-${index}`}
                className="
                  absolute
                  h-[2px]
                  w-[2px]
                  rounded-full
                  bg-signal
                "
                style={{
                  left: `${
                    5 +
                    ((index * 37) % 90)
                  }%`,
                  top: `${
                    8 +
                    ((index * 23) % 82)
                  }%`,
                }}
                animate={{
                  y: [0, -18, 0],
                  x: [
                    0,
                    index % 2 === 0
                      ? 8
                      : -8,
                    0,
                  ],
                  opacity: [0.08, 0.45, 0.08],
                  scale: [0.7, 1.5, 0.7],
                }}
                transition={{
                  duration: 3.5 + (index % 5),
                  delay: index * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          )}

          {/* OUTER FRAME */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-[520px]
              w-[94%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[25px]
              border
              border-signal/[0.045]
              sm:h-[680px]
              sm:w-[92%]
              sm:rounded-[40px]
              lg:max-w-[1250px]
            "
            animate={{
              opacity: [0.3, 0.65, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* INNER FRAME */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-[460px]
              w-[88%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[22px]
              border
              border-signal/[0.025]
              sm:h-[610px]
              sm:w-[85%]
              sm:rounded-[35px]
              lg:max-w-[1150px]
            "
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 7,
              delay: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-shell">

          {/* SECTION HEADING */}

          <div className="mb-7 flex flex-col items-center text-center sm:mb-12">
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
                mb-2
                flex
                items-center
                gap-2
                font-mono
                text-[8px]
                uppercase
                tracking-[0.18em]
                text-[var(--fg)]/35
                sm:mb-3
                sm:text-[9px]
                sm:tracking-[0.22em]
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FiZap
                  className="text-signal"
                  size={11}
                />
              </motion.span>

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
                relative
                font-display
                text-2xl
                font-semibold
                tracking-tight
                text-[var(--fg)]
                sm:text-3xl
                md:text-4xl
              "
            >
              <motion.span
                className="
                  absolute
                  -inset-x-8
                  top-1/2
                  h-8
                  -translate-y-1/2
                  bg-signal/10
                  blur-2xl
                "
                animate={{
                  opacity: [0.15, 0.4, 0.15],
                  scaleX: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <span className="relative">
                What drives us
              </span>
            </motion.h2>
          </div>

          <div className="relative">

            {/* MOBILE GLOW */}

            <motion.div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-0
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-signal/[0.025]
                blur-[70px]
                sm:h-[500px]
                sm:w-[500px]
                sm:blur-[90px]
              "
              animate={{
                scale: [0.9, 1.1, 0.9],
                opacity: [0.3, 0.65, 0.3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <div
  className="
    relative
    z-10
    grid
    items-start
    gap-5
    sm:gap-7
    lg:items-center
    lg:grid-cols-[minmax(0,1fr)_440px_minmax(0,1fr)]
    lg:gap-6
    xl:grid-cols-[minmax(0,1fr)_500px_minmax(0,1fr)]
    xl:gap-8
  "
>
  {/* ==========================================================
      DESCRIPTION
      MOBILE: FIRST
      DESKTOP: CENTER
  =========================================================== */}

  <div
    className="
      order-1
      lg:order-2
    "
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCard.key}
        initial={{
          opacity: 0,
          x: -20,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          x: 20,
          scale: 0.97,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          relative
          mx-auto
          w-full
          max-w-sm
          px-1
          sm:px-0
        "
      >
        <motion.div
          className="
            pointer-events-none
            absolute
            -inset-10
            rounded-[40px]
            bg-signal/[0.035]
            blur-[60px]
          "
          animate={{
            opacity: [0.25, 0.55, 0.25],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative">
          <div className="mb-3 flex items-center gap-3 sm:mb-5">
            <motion.span
              className="h-px bg-signal"
              animate={{
                width: [30, 55, 30],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal sm:text-[9px]">
              0{active + 1} / 03
            </span>
          </div>

          <h3
            className="
              font-display
              text-2xl
              font-semibold
              tracking-tight
              text-[var(--fg)]
              sm:text-3xl
              md:text-4xl
            "
          >
            {activeCard.title}
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-[var(--fg)]/55
              sm:mt-5
              sm:leading-7
            "
          >
            {activeCard.body}
          </p>

          <div className="mt-5 flex items-center gap-3 sm:mt-8">
            <div className="flex gap-1">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="h-1 w-1 rounded-full bg-signal"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.7, 1.3, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: dot * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--fg)]/25 sm:text-[8px]">
              Active direction
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* ==========================================================
      CARDS
      MOBILE: SECOND
      DESKTOP: LEFT
  =========================================================== */}

  <motion.div
    initial={{
      opacity: 0,
      x: -35,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{
      once: true,
      margin: "-80px",
    }}
    transition={{
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      order-2
      lg:order-1
    "
  >
    <div
      className="
        mx-auto
        w-full
        max-w-sm
        space-y-2
        sm:space-y-3
        lg:mr-auto
      "
    >
      {cards.map((card, index) => {
        const Icon = card.icon
        const isActive = active === index

        return (
          <motion.button
            key={card.key}
            type="button"
            onClick={() => {
              orbitSelectRef.current?.(index)
            }}
            whileHover={{
              x: 6,
            }}
            whileTap={{
              scale: 0.985,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              group
              relative
              flex
              w-full
              items-center
              gap-3
              overflow-hidden
              rounded-2xl
              border
              p-2.5
              text-left
              transition-all
              duration-300
              sm:gap-4
              sm:p-4
            "
            style={{
              borderColor: isActive
                ? "rgba(46,111,255,0.35)"
                : "var(--border)",
              background: isActive
                ? "rgba(46,111,255,0.07)"
                : "transparent",
            }}
          >
            {isActive && (
              <motion.div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-20
                  bg-gradient-to-r
                  from-signal/10
                  to-transparent
                "
                animate={{
                  x: ["-100%", "500%"],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              />
            )}

            <motion.span
              className="
                absolute
                left-0
                top-1/2
                h-8
                w-[2px]
                -translate-y-1/2
                rounded-full
                bg-signal
              "
              animate={{
                opacity: isActive
                  ? [0.4, 1, 0.4]
                  : 0,
                scaleY: isActive
                  ? [0.7, 1, 0.7]
                  : 0,
              }}
              transition={{
                duration: 2,
                repeat: isActive
                  ? Infinity
                  : 0,
                ease: "easeInOut",
              }}
            />

            <span
              className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all sm:h-10 sm:w-10 ${
                isActive
                  ? "border-signal bg-signal text-white shadow-[0_0_25px_rgba(46,111,255,0.35)]"
                  : "border-[var(--border)] text-[var(--fg)]/35 group-hover:border-signal/30 group-hover:text-signal"
              }`}
            >
              <Icon size={15} />
            </span>

            <span className="relative z-10 min-w-0 flex-1">
              <span
                className={`block text-sm font-medium ${
                  isActive
                    ? "text-[var(--fg)]"
                    : "text-[var(--fg)]/45"
                }`}
              >
                {card.title}
              </span>

              <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--fg)]/25 sm:text-[8px]">
                0{index + 1} / Direction
              </span>
            </span>

            <motion.span
              animate={{
                x: isActive ? 0 : -3,
                y: isActive ? 0 : 3,
              }}
            >
              <FiArrowUpRight
                size={15}
                className={
                  isActive
                    ? "text-signal"
                    : "text-[var(--fg)]/15 group-hover:text-signal"
                }
              />
            </motion.span>
          </motion.button>
        )
      })}
    </div>
  </motion.div>

  {/* ==========================================================
      ORBITAL CLOCK
      MOBILE: HIDDEN
      DESKTOP: RIGHT
  =========================================================== */}

  <motion.div
    initial={{
      opacity: 0,
      x: 35,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      scale: 1,
    }}
    viewport={{
      once: true,
      margin: "-80px",
    }}
    transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      order-3
      hidden
      justify-center
      lg:order-3
      lg:flex
    "
  >
    <div className="relative max-w-full">

      {/* OUTER GLOW */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[460px]
          w-[460px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-signal/[0.035]
          blur-[60px]
        "
        animate={{
          scale: [0.9, 1.08, 0.9],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ORBIT */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[470px]
          w-[470px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-transparent
          border-t-signal/15
        "
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <OrbitalCore
        active={active}
        setActive={setActive}
        reduceMotion={reduceMotion}
        onSelect={orbitSelectRef}
      />
    </div>
  </motion.div>
</div>

            {/* EMPTY SIGNAL REMOVED */}
          </div>
        </div>
      </section>

      {/* ================================================================
          LEADERSHIP
      ================================================================= */}

      <section
        className="
          relative
          overflow-hidden
          px-4
          py-16
          sm:px-6
          sm:py-24
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              left-1/2
              top-24
              h-[300px]
              w-[300px]
              -translate-x-1/2
              rounded-full
              bg-signal/[0.055]
              blur-[110px]
              sm:h-[420px]
              sm:w-[420px]
              sm:blur-[130px]
            "
          />

          <div className="absolute left-[5%] top-[55%] h-48 w-48 rounded-full bg-signal/[0.025] blur-[90px] sm:left-[10%] sm:h-56 sm:w-56 sm:blur-[100px]" />

          <div className="absolute right-[5%] top-[55%] h-48 w-48 rounded-full bg-signal/[0.025] blur-[90px] sm:right-[10%] sm:h-56 sm:w-56 sm:blur-[100px]" />

          <div className="absolute left-1/2 top-[48%] h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-signal/10 to-transparent sm:w-[75%]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* LEADERSHIP HEADING */}

          <div className="mb-10 text-center sm:mb-16">
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
              -mt-5
                mb-4
                flex
                items-center
                justify-center
                gap-2
                sm:gap-3
              "
            >
              <span className="h-px w-7 bg-signal sm:w-10" />

              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.22em] text-signal sm:text-[9px] sm:tracking-[0.28em]">
                Our Leadership
              </span>

              <span className="h-px w-7 bg-signal sm:w-10" />
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.65,
                delay: 0.05,
              }}
              className="
                font-display
                text-3xl
                font-semibold
                tracking-tight
                text-[var(--fg)]
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Meet Our{' '}
              <span className="text-signal">
                Leaders
              </span>
            </motion.h2>

            <motion.p
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
              transition={{
                duration: 0.6,
                delay: 0.12,
              }}
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-[var(--fg)]/50
                sm:leading-7
              "
            >
              Together, they shape
              the future — one
              decision at a time.
            </motion.p>
          </div>

          {/* DESKTOP CONNECTOR */}

          <div
            className="
              relative
              mx-auto
              mt-10
              hidden
              h-20
              max-w-5xl
              lg:block
            "
          >
            <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-signal/50 to-signal/15" />

            <div className="absolute left-[16.66%] right-[16.66%] top-10 h-px bg-gradient-to-r from-transparent via-signal/20 to-transparent" />

            <span className="absolute left-[16.66%] top-[37px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-signal shadow-[0_0_18px_rgba(46,111,255,0.7)]" />

            <span className="absolute left-1/2 top-[37px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-signal shadow-[0_0_18px_rgba(46,111,255,0.7)]" />

            <span className="absolute left-[83.33%] top-[37px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-signal shadow-[0_0_18px_rgba(46,111,255,0.7)]" />
          </div>

          {/* THREE LEADERS */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-10
              sm:mt-14
              sm:grid-cols-2
              sm:gap-14
              lg:mt-0
              lg:grid-cols-3
              lg:gap-10
              xl:gap-12
            "
          >
            {directReports.map(
              (person, index) => (
                <motion.div
                  key={person.id}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: '-70px',
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >
                  <div className="relative">

                    <div className="pointer-events-none absolute inset-0 rounded-full bg-signal/15 blur-[50px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.045,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        relative
                        h-40
                        w-40
                        overflow-hidden
                        rounded-full
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]
                        shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                        sm:h-48
                        sm:w-48
                        md:h-52
                        md:w-52
                      "
                    >
                      <img
                        src={person.image}
                        alt={person.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                        onError={(event) => {
                          event.currentTarget.style.display =
                            'none'
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-signal/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </motion.div>

                    <span className="absolute bottom-2 right-3 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-[var(--bg)] bg-signal opacity-0 shadow-[0_0_18px_rgba(46,111,255,0.55)] transition-all duration-300 group-hover:opacity-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-signal transition-transform duration-300 group-hover:-translate-y-1 sm:mt-7 sm:text-2xl">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[var(--fg)]">
                    {person.title}
                  </p>

                  <p className="mt-3 max-w-xs text-[11px] leading-6 text-[var(--fg)]/40 sm:text-[12px]">
                    {person.bio}
                  </p>

                  <div className="mt-5 flex items-center justify-center gap-3 sm:gap-4">
                    <div className="text-left">
                      <span className="block font-display text-lg font-bold text-[var(--fg)]">
                        {person.stat.value}
                      </span>

                      <span className="mt-0.5 block font-mono text-[7px] uppercase tracking-[0.15em] text-[var(--fg)]/30">
                        {person.stat.label}
                      </span>
                    </div>

                    <div className="h-8 w-px bg-[var(--border)]" />

                    <div className="flex gap-2">
                      <a
                        href={`mailto:${person.email}`}
                        aria-label={`Email ${person.name}`}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[var(--border)]
                          text-[var(--fg)]/35
                          transition-all
                          duration-300
                          hover:border-signal/40
                          hover:bg-signal/10
                          hover:text-signal
                        "
                      >
                        <FiMail size={12} />
                      </a>

                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`LinkedIn ${person.name}`}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[var(--border)]
                          text-[var(--fg)]/35
                          transition-all
                          duration-300
                          hover:border-signal/40
                          hover:bg-signal/10
                          hover:text-signal
                        "
                      >
                        <FiLinkedin size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* ==============================================================
              INTERNS
          =============================================================== */}

          <div className="relative mt-20 sm:mt-32">

            <div className="mb-10 text-center sm:mb-14">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  mb-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  sm:gap-3
                "
              >
                <span className="h-px w-7 bg-signal/60 sm:w-10" />

                <span className="font-mono text-[8px] font-medium uppercase tracking-[0.22em] text-signal sm:text-[9px] sm:tracking-[0.28em]">
                  Early Talent
                </span>

                <span className="h-px w-7 bg-signal/60 sm:w-10" />
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.05,
                }}
                className="
                  font-display
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-[var(--fg)]
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Meet Our{' '}
                <span className="text-signal">
                  Interns
                </span>
              </motion.h2>

              <motion.p
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
                transition={{
                  duration: 0.6,
                  delay: 0.12,
                }}
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-[var(--fg)]/45
                  sm:leading-7
                "
              >
                The next generation
                of builders,
                designers and
                problem-solvers
                growing with us.
              </motion.p>
            </div>

            {/* INTERN CONNECTOR */}

            <div className="relative mx-auto mb-10 hidden h-12 max-w-2xl sm:block">
              <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-signal/35 to-signal/10" />

              <div className="absolute left-[25%] right-[25%] top-6 h-px bg-gradient-to-r from-transparent via-signal/15 to-transparent" />

              <span className="absolute left-[25%] top-[21px] h-2 w-2 -translate-x-1/2 rounded-full bg-signal/80 shadow-[0_0_12px_rgba(46,111,255,0.5)]" />

              <span className="absolute left-[75%] top-[21px] h-2 w-2 -translate-x-1/2 rounded-full bg-signal/80 shadow-[0_0_12px_rgba(46,111,255,0.5)]" />
            </div>

            {/* INTERN CARDS */}

            <div
              className="
                mx-auto
                grid
                max-w-4xl
                grid-cols-1
                gap-10
                sm:grid-cols-2
                sm:gap-10
                lg:gap-16
              "
            >
              {interns.map(
                (person, index) => (
                  <motion.div
                    key={person.id}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: '-70px',
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.14,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      group
                      flex
                      flex-col
                      items-center
                      text-center
                    "
                  >
                    {/* IMAGE */}

                    <div className="relative">
                      <div className="pointer-events-none absolute inset-[-12px] rounded-full bg-signal/10 blur-[35px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                      <motion.div
                        whileHover={{
                          y: -7,
                          scale: 1.04,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                          relative
                          h-32
                          w-32
                          overflow-hidden
                          rounded-full
                          border
                          border-signal/20
                          bg-[var(--bg)]
                          shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                          sm:h-40
                          sm:w-40
                          md:h-44
                          md:w-44
                        "
                      >
                        <img
                          src={person.image}
                          alt={person.name}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                          onError={(event) => {
                            event.currentTarget.style.display =
                              'none'
                          }}
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-signal/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </motion.div>

                      {/* STATUS */}

                      <span className="absolute bottom-1 right-2 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-[var(--bg)] bg-signal shadow-[0_0_16px_rgba(46,111,255,0.5)]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                      </span>
                    </div>

                    {/* NUMBER */}

                    <span className="mt-5 font-mono text-[7px] uppercase tracking-[0.2em] text-signal/55">
                      Intern / 0{index + 1}
                    </span>

                    {/* NAME */}

                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-[var(--fg)] transition-colors duration-300 group-hover:text-signal sm:text-2xl">
                      {person.name}
                    </h3>

                    {/* ROLE */}

                    <p className="mt-1.5 text-sm font-medium text-signal">
                      {person.title}
                    </p>

                    {/* BIO */}

                    <p className="mt-3 max-w-sm text-[11px] leading-6 text-[var(--fg)]/40 sm:text-[12px]">
                      {person.bio}
                    </p>

                    {/* META */}

                    <div className="mt-5 flex items-center gap-3 sm:gap-4">
                      <div className="text-left">
                        <span className="block font-display text-sm font-bold text-[var(--fg)] sm:text-base">
                          {person.stat.value}
                        </span>

                        <span className="mt-0.5 block font-mono text-[7px] uppercase tracking-[0.15em] text-[var(--fg)]/25">
                          {person.stat.label}
                        </span>
                      </div>

                      <div className="h-7 w-px bg-[var(--border)]" />

                      <div className="flex gap-2">
                        <a
                          href={`mailto:${person.email}`}
                          aria-label={`Email ${person.name}`}
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[var(--border)]
                            text-[var(--fg)]/30
                            transition-all
                            duration-300
                            hover:border-signal/40
                            hover:bg-signal/10
                            hover:text-signal
                          "
                        >
                          <FiMail size={12} />
                        </a>

                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`LinkedIn ${person.name}`}
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[var(--border)]
                            text-[var(--fg)]/30
                            transition-all
                            duration-300
                            hover:border-signal/40
                            hover:bg-signal/10
                            hover:text-signal
                          "
                        >
                          <FiLinkedin size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>

            {/* INTERN BOTTOM SIGNAL */}

            {/* <motion.div
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
                duration: 0.9,
                delay: 0.2,
              }}
              className="
                mx-auto
                mt-12
                h-px
                max-w-3xl
                origin-center
                bg-gradient-to-r
                from-transparent
                via-signal/15
                to-transparent
                sm:mt-16
              "
            /> */}
          </div>

          {/* BOTTOM ACCENT */}

          {/* <motion.div
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
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-12
              h-px
              max-w-4xl
              origin-center
              bg-gradient-to-r
              from-transparent
              via-signal/20
              to-transparent
              sm:mt-20
            "
          /> */}
        </div>
      </section>

      {/* ================================================================
          CTA
      ================================================================= */}

      <CTABand />
    </>
  )
}