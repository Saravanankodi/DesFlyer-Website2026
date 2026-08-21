  import { useEffect, useState } from 'react'
  import { AnimatePresence, motion } from 'framer-motion'
  import { Link } from 'react-router-dom'

  import {
    FiArrowUpRight,
    FiCode,
    FiGlobe,
    FiSmartphone,
    FiPenTool,
    FiCpu,
    FiCloud,
    FiSettings,
    FiServer,
    FiShoppingCart,
    FiLayers,
    FiUsers,
    FiShield,
    FiBarChart2,
    FiZap,
    FiBox,
    FiBriefcase,
    FiDatabase,
    FiTrendingUp,
  } from 'react-icons/fi'

  import NeuralHero from '../three/NeuralHero'
  import Button from '../ui/Button'
  import { siteConfig } from '../../data/siteConfig'
  import { useTheme } from '../../hooks/useTheme'

  /* =========================================================
    ANIMATION VARIANTS
  ========================================================= */

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 28,
    },

    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  /* =========================================================
    SERVICES
  ========================================================= */

  const services = [
    {
      title: 'Software',
      subtitle: 'Development',
      icon: FiCode,
      slug: 'software',
    },
    {
      title: 'Web',
      subtitle: 'Development',
      icon: FiGlobe,
      slug: 'web',
    },
    {
      title: 'Mobile',
      subtitle: 'Applications',
      icon: FiSmartphone,
      slug: 'mobile',
    },
    {
      title: 'UI / UX',
      subtitle: 'Design',
      icon: FiPenTool,
      slug: 'ui-ux',
    },
    {
      title: 'AI',
      subtitle: 'Solutions',
      icon: FiCpu,
      slug: 'ai',
    },
    {
      title: 'Cloud',
      subtitle: 'Solutions',
      icon: FiCloud,
      slug: 'cloud',
    },
    {
      title: 'DevOps',
      subtitle: 'Engineering',
      icon: FiSettings,
      slug: 'devops',
    },
    {
      title: 'API',
      subtitle: 'Development',
      icon: FiServer,
      slug: 'api',
    },
    {
      title: 'E-Commerce',
      subtitle: 'Solutions',
      icon: FiShoppingCart,
      slug: 'e-commerce',
    },
    {
      title: 'ERP',
      subtitle: 'Solutions',
      icon: FiLayers,
      slug: 'erp',
    },
    {
      title: 'CRM',
      subtitle: 'Solutions',
      icon: FiUsers,
      slug: 'crm',
    },
    {
      title: 'Security',
      subtitle: 'Solutions',
      icon: FiShield,
      slug: 'security',
    },
    {
      title: 'Analytics',
      subtitle: 'Solutions',
      icon: FiBarChart2,
      slug: 'analytics',
    },
    {
      title: 'Automation',
      subtitle: 'Solutions',
      icon: FiZap,
      slug: 'automation',
    },
    {
      title: 'SaaS',
      subtitle: 'Products',
      icon: FiBox,
      slug: 'saas',
    },
    {
      title: 'IT',
      subtitle: 'Consulting',
      icon: FiBriefcase,
      slug: 'it-consulting',
    },
    {
      title: 'Database',
      subtitle: 'Solutions',
      icon: FiDatabase,
      slug: 'database',
    },
    {
      title: 'Digital',
      subtitle: 'Marketing',
      icon: FiTrendingUp,
      slug: 'digital-marketing',
    },
  ]

  /* =========================================================
    BACKGROUND PARTICLES
  ========================================================= */

  const particles = [
    { left: '8%', top: '18%', delay: 0 },
    { left: '24%', top: '32%', delay: 0.7 },
    { left: '42%', top: '12%', delay: 1.2 },
    { left: '61%', top: '26%', delay: 0.5 },
    { left: '78%', top: '15%', delay: 1.6 },
    { left: '91%', top: '38%', delay: 0.9 },
    { left: '15%', top: '72%', delay: 1.4 },
    { left: '36%', top: '82%', delay: 0.3 },
    { left: '57%', top: '68%', delay: 1.8 },
    { left: '82%', top: '78%', delay: 0.6 },
  ]

  /* =========================================================
    INTRO
  ========================================================= */

  const INTRO_DURATION_MS = 2600

  /* =========================================================
    ORBIT CONFIG
  ========================================================= */

  const ORBIT_SPEED = 32

  function getOrbitRadius() {
    if (typeof window === 'undefined') {
      return 250
    }

    if (window.innerWidth < 1024) {
      return 205
    }

    if (window.innerWidth < 1280) {
      return 235
    }

    return 270
  }

  /* =========================================================
    HERO
  ========================================================= */

  export default function Hero() {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    /* =========================================================
      LOADING STATE

      First visit:
      -> show loading

      Browser refresh:
      -> show loading

      React Router navigation:
      -> don't show loading
    ========================================================= */

    const [isLoading, setIsLoading] = useState(() => {
      if (typeof window === 'undefined') {
        return true
      }

      const navigationEntry =
        performance.getEntriesByType('navigation')[0]

      const navigationType =
        navigationEntry?.type

      const isReload =
        navigationType === 'reload'

      const hasShownIntro =
        sessionStorage.getItem(
          'hero-intro-shown'
        ) === 'true'

      /*
        First visit in this browser tab/session
      */
      if (!hasShownIntro) {
        return true
      }

      /*
        Browser refresh
      */
      if (isReload) {
        return true
      }

      /*
        React Router navigation back to Home
      */
      return false
    })

    const [orbitRadius, setOrbitRadius] =
      useState(getOrbitRadius())

    /* =========================================================
      RESPONSIVE ORBIT
    ========================================================= */

    useEffect(() => {
      const updateRadius = () => {
        setOrbitRadius(getOrbitRadius())
      }

      updateRadius()

      window.addEventListener(
        'resize',
        updateRadius
      )

      return () => {
        window.removeEventListener(
          'resize',
          updateRadius
        )
      }
    }, [])

    /* =========================================================
      INTRO LOADING TIMER
    ========================================================= */

    useEffect(() => {
      if (!isLoading) return

      const timer = setTimeout(() => {
        setIsLoading(false)

        /*
          Remember that the intro has played.
          This prevents the loading screen from
          appearing when using React Router.
        */
        sessionStorage.setItem(
          'hero-intro-shown',
          'true'
        )
      }, INTRO_DURATION_MS)

      return () => {
        clearTimeout(timer)
      }
    }, [isLoading])

    /* =========================================================
      BUSINESS TYPING
    ========================================================= */

    const [typedBusiness, setTypedBusiness] =
      useState('')

    useEffect(() => {
      if (isLoading) return

      const word = 'Business'

      let currentIndex = 0
      let deleting = false
      let timer

      const animateTyping = () => {
        if (!deleting) {
          currentIndex += 1

          setTypedBusiness(
            word.substring(
              0,
              currentIndex
            )
          )

          if (
            currentIndex ===
            word.length
          ) {
            timer = setTimeout(() => {
              deleting = true
              animateTyping()
            }, 1800)

            return
          }

          timer = setTimeout(
            animateTyping,
            110
          )
        } else {
          currentIndex -= 1

          setTypedBusiness(
            word.substring(
              0,
              currentIndex
            )
          )

          if (currentIndex === 0) {
            deleting = false

            timer = setTimeout(
              animateTyping,
              500
            )

            return
          }

          timer = setTimeout(
            animateTyping,
            70
          )
        }
      }

      timer = setTimeout(
        animateTyping,
        350
      )

      return () => {
        clearTimeout(timer)
      }
    }, [isLoading])

    return (
      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[var(--bg)]
        "
      >

        {/* =====================================================
            HERO BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Main gradient */}

          <div
            className="
              absolute
              inset-0
              opacity-80
            "
            style={{
              background: isDark
                ? `
                  linear-gradient(
                    135deg,
                    rgba(2,6,15,1) 0%,
                    rgba(3,10,24,1) 45%,
                    rgba(1,5,13,1) 100%
                  )
                `
                : `
                  linear-gradient(
                    135deg,
                    rgba(248,250,252,1) 0%,
                    rgba(239,248,255,1) 45%,
                    rgba(248,250,252,1) 100%
                  )
                `,
            }}
          />

          {/* Angular light */}

          <motion.div
            animate={{
              x: [
                '-10%',
                '15%',
                '-10%',
              ],
              opacity: [
                0.15,
                0.3,
                0.15,
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              left-[-20%]
              top-[15%]
              h-[45%]
              w-[75%]
              rotate-[-12deg]
              bg-gradient-to-r
              from-signal/10
              via-signal/5
              to-transparent
              blur-3xl
            "
          />

          {/* Bottom blue glow */}

          <motion.div
            animate={{
              x: [
                '20%',
                '-10%',
                '20%',
              ],
              opacity: [
                0.08,
                0.2,
                0.08,
              ],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              bottom-[-20%]
              right-[-10%]
              h-[60%]
              w-[65%]
              rotate-[8deg]
              bg-gradient-to-tl
              from-blue-500/10
              via-cyan-400/5
              to-transparent
              blur-3xl
            "
          />

          {/* Technical grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  currentColor 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  currentColor 1px,
                  transparent 1px
                )
              `,
              backgroundSize:
                '70px 70px',
            }}
          />

          {/* Diagonal lines */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
            "
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  120deg,
                  currentColor 0px,
                  currentColor 1px,
                  transparent 1px,
                  transparent 80px
                )
              `,
            }}
          />

        </div>

        {/* =====================================================
            NEURAL BACKGROUND
        ====================================================== */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-[0.28]
          "
        >
          <NeuralHero isDark={isDark} />
        </div>

        {/* =====================================================
            FLOATING DATA PARTICLES
        ====================================================== */}

        {!isLoading &&
          particles.map(
            (particle, index) => (
              <motion.span
                key={index}
                className="
                  absolute
                  z-[2]
                  h-1
                  w-1
                  rounded-full
                  bg-signal
                  pointer-events-none
                "
                style={{
                  left: particle.left,
                  top: particle.top,
                }}
                animate={{
                  opacity: [
                    0.15,
                    0.8,
                    0.15,
                  ],
                  y: [
                    -15,
                    15,
                    -15,
                  ],
                  scale: [
                    0.7,
                    1.3,
                    0.7,
                  ],
                }}
                transition={{
                  duration:
                    3.5 +
                    index * 0.25,
                  repeat: Infinity,
                  delay:
                    particle.delay,
                  ease: 'easeInOut',
                }}
              />
            )
          )}

        {/* =====================================================
            LOADING SCREEN
        ====================================================== */}

        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="
                fixed
                inset-0
                z-[100]
                overflow-hidden
                bg-[var(--bg)]
              "

              /*
                Start normally
              */
              initial={{
                x: 0,
                opacity: 1,
              }}

              /*
                IMPORTANT:
                Immediately slide to the RIGHT
                when loading is finished.
              */
              exit={{
                x: '100%',
                opacity: 0,
                transition: {
                  duration: 0.7,
                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                },
              }}
            >

              {/* =================================================
                  LOADING BACKGROUND
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.06]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      45deg,
                      currentColor 1px,
                      transparent 1px
                    ),
                    linear-gradient(
                      -45deg,
                      currentColor 1px,
                      transparent 1px
                    )
                  `,
                  backgroundSize:
                    '100px 100px',
                }}
              />

              {/* Animated vertical light */}

              <motion.div
                animate={{
                  x: [
                    '-20vw',
                    '120vw',
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  absolute
                  top-0
                  h-full
                  w-[1px]
                  bg-gradient-to-b
                  from-transparent
                  via-signal/50
                  to-transparent
                  opacity-40
                "
              />

              {/* =================================================
                  CENTER AREA
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >

                {/* =================================================
                    ROTATING ICON ORBIT
                ================================================== */}

                <motion.div
                  className="
                    relative
                    h-[460px]
                    w-[460px]
                    sm:h-[520px]
                    sm:w-[520px]
                  "
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration:
                      ORBIT_SPEED,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >

                  {services.map(
                    (
                      service,
                      index
                    ) => {
                      const Icon =
                        service.icon

                      const angle =
                        (360 /
                          services.length) *
                        index

                      const loadingRadius =
                        window.innerWidth <
                        640
                          ? 180
                          : 220

                      const x =
                        Math.cos(
                          (angle *
                            Math.PI) /
                            180
                        ) *
                        loadingRadius

                      const y =
                        Math.sin(
                          (angle *
                            Math.PI) /
                            180
                        ) *
                        loadingRadius

                      return (
                        <motion.div
                          key={
                            service.title
                          }
                          className="
                            absolute
                            left-1/2
                            top-1/2
                          "
                          style={{
                            marginLeft:
                              x,
                            marginTop:
                              y,
                          }}
                          animate={{
                            rotate:
                              -360,
                          }}
                          transition={{
                            duration:
                              ORBIT_SPEED,
                            repeat:
                              Infinity,
                            ease:
                              'linear',
                          }}
                        >

                          {/* ICON */}

                          <div
                            className="
                              flex
                              h-11
                              w-11
                              -translate-x-1/2
                              -translate-y-1/2
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-signal/20
                              bg-[var(--bg)]/90
                              text-signal
                              shadow-[0_0_25px_rgba(0,220,255,0.08)]
                              backdrop-blur-xl
                            "
                          >
                            <Icon
                              size={17}
                            />
                          </div>

                        </motion.div>
                      )
                    }
                  )}

                </motion.div>

                {/* =================================================
                    CENTER LOGO
                ================================================== */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: [
                      0.16,
                      1,
                      0.3,
                      1,
                    ],
                  }}
                  className="
                    absolute
                    z-20
                    flex
                    h-[155px]
                    w-[155px]
                    items-center
                    justify-center
                  "
                >

                  {/* Angular frame */}

                  <motion.div
                    animate={{
                      rotate: [
                        0,
                        90,
                        180,
                        270,
                        360,
                      ],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="
                      absolute
                      h-[145px]
                      w-[145px]
                      rotate-45
                      border
                      border-signal/20
                      bg-signal/[0.015]
                    "
                  />

                  {/* Logo glow */}

                  <motion.div
                    animate={{
                      opacity: [
                        0.25,
                        0.6,
                        0.25,
                      ],
                      scale: [
                        0.9,
                        1.05,
                        0.9,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      h-[120px]
                      w-[120px]
                      bg-signal/10
                      blur-3xl
                    "
                  />

                  {/* LOGO */}

                  <motion.img
                    src="/images/portfolio/logo.png"
                    alt={siteConfig.name}
                    className="
                      relative
                      z-10
                      h-[105px]
                      w-[105px]
                      object-contain
                    "
                    animate={{
                      y: [
                        -4,
                        4,
                        -4,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      filter:
                        'drop-shadow(0 0 25px rgba(0,255,255,0.65)) drop-shadow(0 0 55px rgba(0,180,255,0.3))',
                    }}
                  />

                </motion.div>

              </div>

              {/* =================================================
                  LOADING TEXT
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="
                  absolute
                  bottom-[9%]
                  left-1/2
                  -translate-x-1/2
                  text-center
                "
              >

                <div
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-[var(--fg)]/40
                  "
                >
                  Initializing experience
                </div>

                <motion.div
                  animate={{
                    width: [
                      '0%',
                      '100%',
                    ],
                  }}
                  transition={{
                    duration:
                      INTRO_DURATION_MS /
                      1000,
                    ease: 'linear',
                  }}
                  className="
                    mt-3
                    h-px
                    bg-signal
                  "
                />

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            MAIN HERO
        ====================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          animate={
            isLoading
              ? 'hidden'
              : 'show'
          }
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1500px]
            px-6
            lg:px-10
            xl:px-14
          "
        >

          <div
            className="
              grid
              min-h-[calc(100vh-5rem)]
              items-center
              gap-8
              py-16
              lg:grid-cols-[0.92fr_1.08fr]
              lg:gap-2
              xl:gap-6
            "
          >

            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div
              className="
                relative
                z-20
                max-w-[650px]
              "
            >

              {/* STATUS */}

              <motion.div
                variants={item}
                className="
                  mb-6
                  inline-flex
                  items-center
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-signal/20
                    bg-signal/[0.04]
                    px-4
                    py-2
                    backdrop-blur-md
                  "
                >

                  <span
                    className="
                      relative
                      flex
                      h-2
                      w-2
                    "
                  >

                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-signal
                        opacity-60
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2
                        w-2
                        rounded-full
                        bg-signal
                      "
                    />

                  </span>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.24em]
                      text-signal
                    "
                  >
                    Available for new projects
                  </span>

                </div>

              </motion.div>

              {/* EYEBROW */}

              <motion.div
                variants={item}
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-[var(--fg)]/45
                "
              >

                <span
                  className="
                    h-px
                    w-9
                    bg-signal/60
                  "
                />

                <span>
                  Software &amp; Product Engineering
                </span>

              </motion.div>

              {/* HEADING */}

              <motion.h1
                variants={item}
                className="
                  font-display
                  font-bold
                  text-[clamp(2.5rem,4.8vw,5rem)]
                  leading-[0.96]
                  tracking-[-0.045em]
                  text-[var(--fg)]
                "
              >

                Innovative Software
                <br />

                Solutions for Your{' '}

                <span
                  className="
                    relative
                    inline-block
                    text-signal
                  "
                >

                  <span className="relative z-10">
                    {typedBusiness}
                  </span>

                  {/* Cursor */}

                  <motion.span
                    animate={{
                      opacity: [
                        1,
                        0,
                        1,
                      ],
                    }}
                    transition={{
                      duration: 0.65,
                      repeat:
                        Infinity,
                      ease:
                        'easeInOut',
                    }}
                    className="
                      ml-1
                      inline-block
                      h-[0.8em]
                      w-[3px]
                      translate-y-[0.08em]
                      rounded-full
                      bg-signal
                      align-middle
                      shadow-[0_0_15px_rgba(0,255,255,0.9)]
                    "
                  />

                </span>

              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                variants={item}
                className="
                  mt-7
                  max-w-xl
                  text-sm
                  leading-7
                  text-[var(--fg)]/65
                  sm:text-base
                  sm:leading-7
                "
              >
                {siteConfig.description}
              </motion.p>

              {/* BUTTONS */}

              <motion.div
                variants={item}
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >

                <Button to="/services">
                  Our Services
                  <FiArrowUpRight />
                </Button>

                <Button
                  to="/portfolio"
                  variant="outline"
                >
                  View Portfolio
                </Button>

              </motion.div>

            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
                scale: 0.94,
              }}
              animate={
                isLoading
                  ? {
                      opacity: 0,
                      x: 40,
                      scale: 0.94,
                    }
                  : {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }
              }
              transition={{
                duration: 1,
                delay: isLoading
                  ? 0
                  : 0.15,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                relative
                hidden
                h-[680px]
                min-w-0
                items-center
                justify-center
                lg:flex
              "
            >

              {/* =================================================
                  TECHNICAL BACKGROUND
              ================================================== */}

              <div
                className="
                  absolute
                  inset-[8%]
                  overflow-hidden
                  opacity-40
                "
              >

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-signal/[0.035]
                    via-transparent
                    to-blue-500/[0.035]
                  "
                />

                <div
                  className="
                    absolute
                    left-[10%]
                    top-[20%]
                    h-px
                    w-[80%]
                    bg-gradient-to-r
                    from-transparent
                    via-signal/20
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    left-[20%]
                    top-[70%]
                    h-px
                    w-[70%]
                    rotate-[-18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-signal/15
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    left-[50%]
                    top-[5%]
                    h-[90%]
                    w-px
                    bg-gradient-to-b
                    from-transparent
                    via-signal/10
                    to-transparent
                  "
                />

              </div>

              {/* =================================================
                  ROTATING SERVICE SYSTEM
              ================================================== */}

              <motion.div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                "
                style={{
                  width:
                    orbitRadius * 2,
                  height:
                    orbitRadius * 2,
                  marginLeft:
                    -orbitRadius,
                  marginTop:
                    -orbitRadius,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration:
                    ORBIT_SPEED,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >

                {services.map(
                  (
                    service,
                    index
                  ) => {
                    const Icon =
                      service.icon

                    const angle =
                      (360 /
                        services.length) *
                      index

                    const x =
                      Math.cos(
                        (angle *
                          Math.PI) /
                          180
                      ) *
                      orbitRadius

                    const y =
                      Math.sin(
                        (angle *
                          Math.PI) /
                          180
                      ) *
                      orbitRadius

                    return (
                      <div
                        key={
                          service.title
                        }
                        className="
                          absolute
                          left-1/2
                          top-1/2
                        "
                        style={{
                          transform: `
                            translate(-50%, -50%)
                            translate(${x}px, ${y}px)
                          `,
                        }}
                      >

                        {/* COUNTER ROTATION */}

                        <motion.div
                          animate={{
                            rotate:
                              -360,
                          }}
                          transition={{
                            duration:
                              ORBIT_SPEED,
                            repeat:
                              Infinity,
                            ease:
                              'linear',
                          }}
                        >

                          <Link
                            to={`/services/${service.slug}`}
                            className="
                              group
                              flex
                              w-[108px]
                              items-center
                              gap-2
                              rounded-xl
                              border
                              border-signal/15
                              bg-[var(--bg)]/85
                              px-2
                              py-2
                              backdrop-blur-xl
                              shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                              transition-all
                              duration-300
                              hover:border-signal/45
                              hover:bg-signal/[0.07]
                              hover:shadow-[0_0_30px_rgba(0,220,255,0.12)]
                            "
                          >

                            {/* ICON */}

                            <span
                              className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-signal/15
                                bg-signal/[0.06]
                                text-signal
                                transition-all
                                duration-300
                                group-hover:border-signal/40
                                group-hover:bg-signal/10
                              "
                            >

                              <Icon
                                size={13}
                              />

                            </span>

                            {/* TEXT */}

                            <span
                              className="
                                flex
                                min-w-0
                                flex-col
                              "
                            >

                              <span
                                className="
                                  truncate
                                  font-mono
                                  text-[8px]
                                  uppercase
                                  tracking-[0.1em]
                                  text-[var(--fg)]/70
                                "
                              >
                                {
                                  service.title
                                }
                              </span>

                              <span
                                className="
                                  mt-0.5
                                  truncate
                                  font-mono
                                  text-[6px]
                                  uppercase
                                  tracking-[0.08em]
                                  text-signal/55
                                "
                              >
                                {
                                  service.subtitle
                                }
                              </span>

                            </span>

                          </Link>

                        </motion.div>

                      </div>
                    )
                  }
                )}

              </motion.div>

              {/* =================================================
                  CENTER LOGO
              ================================================== */}

              <motion.div
                animate={{
                  y: [
                    -6,
                    6,
                    -6,
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  relative
                  z-30
                  flex
                  h-[235px]
                  w-[235px]
                  items-center
                  justify-center
                "
              >

                {/* Angular frame */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    h-[250px]
                    w-[250px]
                    rotate-45
                    border
                    border-signal/10
                  "
                />

                {/* Inner frame */}

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="
                    absolute
                    h-[215px]
                    w-[215px]
                    border
                    border-dashed
                    border-signal/10
                  "
                />

                {/* Logo panel */}

                <div
                  className="
                    relative
                    flex
                    h-[205px]
                    w-[205px]
                    items-center
                    justify-center
                    overflow-hidden
                    border
                    border-signal/20
                    bg-[var(--bg)]/75
                    backdrop-blur-xl
                    shadow-[0_0_80px_rgba(0,220,255,0.12)]
                  "
                >

                  {/* Moving highlight */}

                  <motion.div
                    animate={{
                      x: [
                        '-100%',
                        '100%',
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="
                      absolute
                      top-0
                      h-full
                      w-[25%]
                      rotate-[15deg]
                      bg-gradient-to-r
                      from-transparent
                      via-signal/10
                      to-transparent
                      blur-xl
                    "
                  />

                  {/* Logo glow */}

                  <motion.div
                    animate={{
                      opacity: [
                        0.15,
                        0.4,
                        0.15,
                      ],
                      scale: [
                        0.9,
                        1.1,
                        0.9,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                      absolute
                      h-32
                      w-32
                      bg-signal/10
                      blur-3xl
                    "
                  />

                  {/* LOGO */}

                  <motion.img
                    src="/images/portfolio/logo.png"
                    alt={siteConfig.name}
                    className="
                      relative
                      z-10
                      h-[160px]
                      w-[160px]
                      object-contain
                    "
                    animate={{
                      rotateY: [
                        0,
                        5,
                        0,
                        -5,
                        0,
                      ],
                      rotateX: [
                        0,
                        3,
                        0,
                        -3,
                        0,
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      transformStyle:
                        'preserve-3d',
                      filter:
                        'drop-shadow(0 0 25px rgba(0,255,255,0.65)) drop-shadow(0 0 55px rgba(0,180,255,0.3))',
                    }}
                  />

                </div>

              </motion.div>

              {/* =================================================
                  CENTER DATA LABEL
              ================================================== */}

              <motion.div
                animate={{
                  opacity: [
                    0.3,
                    0.8,
                    0.3,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  bottom-[7%]
                  left-1/2
                  z-20
                  -translate-x-1/2
                  whitespace-nowrap
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-signal/40
                "
              >
                DIGITAL PRODUCT SYSTEM
              </motion.div>

            </motion.div>

          </div>

        </motion.div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={
            isLoading
              ? {
                  opacity: 0,
                  y: 10,
                }
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            delay: 1.8,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-7
            left-1/2
            z-30
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            md:flex
          "
        >

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-[var(--fg)]/30
            "
          >
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [
                0,
                6,
                0,
              ],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              flex
              h-8
              w-5
              items-center
              justify-center
              rounded-full
              border
              border-[var(--fg)]/15
            "
          >

            <span
              className="
                h-2
                w-2
                rotate-45
                border-r
                border-b
                border-signal/70
              "
            />

          </motion.div>

        </motion.div>

        {/* =====================================================
            BOTTOM FADE
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            z-20
            h-24
            bg-gradient-to-t
            from-[var(--bg)]
            to-transparent
          "
        />

      </section>
    )
  }




































