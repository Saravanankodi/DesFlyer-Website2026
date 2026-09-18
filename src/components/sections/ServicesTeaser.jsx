import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Eyebrow from '../ui/Eyebrow'
import { services } from '../../data/services'

/* =========================================================
   COLORS
========================================================= */

const INK = '#050912'
const PANEL = '#0A1220'
const PANEL_LIGHT = '#111D31'

const FG = '#F5F8FF'

const BLUE = '#2F7BFF'
const BLUE_BRIGHT = '#5EA2FF'
const BLUE_LIGHT = '#8CC7FF'

const DEFAULT_SERVICE_IMAGE =
  'https://images.openai.com/static-rsc-4/jpHlYluJYSB07dErlBgSL8ANM9BmM6deijHFqnpd1d48WKuxHV5Ue01vrjRE4136o5KQk6wf0wN2HCJEUOXp8ihkEQ1zmqJPZKiaFvJWjB4J7Y71nQnbV7NoIFyM9uxQ6QxSwygaiqQnYx2IViIPyje3r-usCg-idcCvxCEZE0gFoXU8OKG1Qz5bkioE6ddE?purpose=fullsize'


/* =========================================================
   BLUEPRINT
========================================================= */

function Blueprint() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: 0.035,
        backgroundImage: `
          linear-gradient(
            rgba(94,162,255,0.18) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(94,162,255,0.18) 1px,
            transparent 1px
          )
        `,
        backgroundSize: '42px 42px',
      }}
    />
  )
}


/* =========================================================
   CORNER MARKS
========================================================= */

function CornerMarks() {
  const corners = [
    'top-3 left-3',
    'top-3 right-3 rotate-90',
    'bottom-3 right-3 rotate-180',
    'bottom-3 left-3 -rotate-90',
  ]

  return (
    <>
      {corners.map((position, index) => (
        <div
          key={index}
          className={`absolute ${position} w-4 h-4 pointer-events-none z-40`}
          style={{
            opacity: 0.25,
          }}
        >
          <div
            className="absolute top-0 left-0 w-4 h-px"
            style={{
              background: BLUE_BRIGHT,
              boxShadow:
                '0 0 8px rgba(94,162,255,0.7)',
            }}
          />

          <div
            className="absolute top-0 left-0 w-px h-4"
            style={{
              background: BLUE_BRIGHT,
              boxShadow:
                '0 0 8px rgba(94,162,255,0.7)',
            }}
          />
        </div>
      ))}
    </>
  )
}


/* =========================================================
   TYPING TEXT
========================================================= */

function TypingText({
  text = '',
  active = false,
}) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let timer = null

    if (!active) {
      setDisplayText('')
      return undefined
    }

    setDisplayText('')

    let index = 0

    timer = setInterval(() => {
      index += 1

      setDisplayText(
        text.slice(0, index)
      )

      if (index >= text.length) {
        clearInterval(timer)
      }
    }, 5)

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [text, active])

  return (
    <>
      {displayText}

      {active &&
        displayText.length < text.length && (
          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
            }}
            style={{
              color: BLUE_BRIGHT,
            }}
          >
            |
          </motion.span>
        )}
    </>
  )
}


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  s,
  i,
  isHovered,
  setHoveredCard,
}) {
  const image =
    s.image || DEFAULT_SERVICE_IMAGE

  const description =
    s.body ||
    s.description ||
    'We create thoughtful digital solutions designed around your goals.'

  function handleMouseEnter() {
    setHoveredCard(i)
  }

  function handleMouseLeave() {
    setHoveredCard(null)
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[300px] rounded-[22px] overflow-hidden outline-none"
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: i * 0.08,
        ease: 'easeOut',
      }}
      style={{
        background: PANEL,
        border:
          '1px solid rgba(94,162,255,0.16)',
      }}
    >

      {/* =================================================
          CARD BORDER
      ================================================= */}

      <div
        className="absolute -inset-[1px] rounded-[22px] pointer-events-none z-10"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(94,162,255,0.55),
              transparent 35%,
              transparent 65%,
              rgba(47,123,255,0.5)
            )
          `,
          filter: 'blur(1px)',
          opacity: 0.55,
        }}
      />


      {/* =================================================
          MAIN PANEL
      ================================================= */}

      <div
        className="absolute inset-[1px] rounded-[21px] overflow-hidden"
        style={{
          background: `
            linear-gradient(
              145deg,
              ${PANEL_LIGHT},
              ${PANEL}
            )
          `,
        }}
      >

        {/* =================================================
            IMAGE
        ================================================= */}

        <div className="absolute inset-0 overflow-hidden">

          <motion.img
            src={image}
            alt={
              s.title ||
              `Service ${i + 1}`
            }
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.12 : 1.06,
              filter: isHovered
                ? 'blur(5px)'
                : 'blur(0px)',
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          />

          {/* DARK OVERLAY */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  rgba(5,9,18,0.08) 0%,
                  rgba(5,9,18,0.25) 40%,
                  rgba(5,9,18,0.94) 100%
                )
              `,
            }}
          />

          {/* BLUE OVERLAY */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  135deg,
                  rgba(47,123,255,0.14),
                  transparent 55%
                )
              `,
            }}
          />

        </div>


        {/* BLUEPRINT */}

        <Blueprint />


        {/* CORNER MARKS */}

        <CornerMarks />


        {/* =================================================
            NORMAL HEADING
        ================================================= */}

        <AnimatePresence mode="wait">
          {!isHovered && (
            <motion.div
              key="normal-content"
              className="absolute left-6 right-6 bottom-6 z-30"
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <h3
                className="font-display font-semibold text-xl md:text-[22px] leading-tight m-0"
                style={{
                  color: FG,
                }}
              >
                {s.title}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>


        {/* =================================================
            HOVER CONTENT
        ================================================= */}

        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="hover-content"
              className="absolute left-6 right-6 top-[28px] bottom-6 z-30 flex flex-col overflow-hidden"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
            >

              {/* HEADING */}

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 30,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display font-bold text-xl md:text-[23px] leading-tight m-0 pr-4"
                style={{
                  color: BLUE_LIGHT,
                  textShadow:
                    '0 0 25px rgba(94,162,255,0.3)',
                }}
              >
                {s.title}
              </motion.h3>


              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 30,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-1 m-0 text-[12px] md:text-[13px] leading-[1.65] max-w-[96%]"
                style={{
                  color:
                    'rgba(245,248,255,0.88)',
                }}
              >
                <TypingText
                  text={description}
                  active={isHovered}
                />
              </motion.p>

            </motion.div>
          )}
        </AnimatePresence>


        {/* =================================================
            BOTTOM LINE
        ================================================= */}

        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-40"
          style={{
            opacity: 0.85,
            background: `
              linear-gradient(
                90deg,
                transparent,
                ${BLUE},
                ${BLUE_BRIGHT},
                transparent
              )
            `,
            boxShadow:
              '0 0 18px rgba(47,123,255,0.7)',
          }}
        />

      </div>
    </motion.div>
  )
}


/* =========================================================
   FUTURISTIC VIEW MORE RAIL
========================================================= */

function ServiceRail() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative hidden lg:flex items-center justify-end min-h-[180px]"
    >

      {/* AMBIENT GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute right-4 h-40 w-80 rounded-full bg-blue-500/20 blur-[80px]"
      />

      {/* MAIN BUTTON */}

      <motion.a
        href="/services"
        initial="rest"
        whileHover="hover"
        whileTap={{
          scale: 0.97,
        }}
        className="group relative flex min-w-[285px] items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.035] px-5 py-4 backdrop-blur-2xl transition-all duration-500 hover:border-blue-400/40 hover:bg-blue-400/[0.055] hover:shadow-[0_20px_70px_rgba(47,123,255,0.16)]"
      >

        {/* SCANNING LIGHT */}

        <motion.div
          variants={{
            rest: {
              x: '-120%',
              opacity: 0,
            },
            hover: {
              x: '220%',
              opacity: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute inset-y-0 -left-20 w-20 skew-x-[-20deg] bg-gradient-to-r from-transparent via-blue-300/20 to-transparent"
        />

        {/* LEFT CONTENT */}

        <div className="relative z-10 flex items-center gap-4">

          <div
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.06]"
          >

            <motion.div
              variants={{
                rest: {
                  rotate: 0,
                },
                hover: {
                  rotate: 180,
                },
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="absolute inset-1 rounded-lg border border-dashed border-blue-400/25"
            />

            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(94,162,255,0.9)]"
            />

          </div>

          <div>
            <span
              className="block font-mono text-[8px] uppercase tracking-[0.35em] text-blue-300/50"
            >
              Explore
            </span>

            <span
              className="mt-1 block font-display text-[15px] font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-blue-200"
            >
              All Services
            </span>
          </div>

        </div>

        {/* ARROW */}

        <motion.div
          variants={{
            rest: {
              x: 0,
              rotate: -45,
            },
            hover: {
              x: 4,
              rotate: 0,
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.05] text-blue-300 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-400/10 group-hover:text-blue-200"
        >
          <span className="text-lg">
            ↗
          </span>
        </motion.div>

        {/* TOP TECHNICAL LINE */}

        <motion.div
          variants={{
            rest: {
              width: '20%',
              opacity: 0.25,
            },
            hover: {
              width: '65%',
              opacity: 0.8,
            },
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="absolute left-6 top-0 h-px bg-gradient-to-r from-blue-400 via-blue-300 to-transparent"
        />

        {/* BOTTOM TECHNICAL LINE */}

        <motion.div
          variants={{
            rest: {
              width: '15%',
              opacity: 0.25,
            },
            hover: {
              width: '55%',
              opacity: 0.8,
            },
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="absolute right-6 bottom-0 h-px bg-gradient-to-l from-blue-400 via-blue-300 to-transparent"
        />

      </motion.a>

      {/* FLOATING LABEL */}

      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -top-1 right-8 rounded-full border border-blue-400/10 bg-blue-400/[0.04] px-3 py-1 backdrop-blur-md"
      >
        <span
          className="font-mono text-[7px] uppercase tracking-[0.25em] text-blue-300/50"
        >
          Digital Solutions
        </span>
      </motion.div>

    </motion.div>
  )
}


/* =========================================================
   MAIN SERVICES SECTION
========================================================= */

export default function ServicesTeaser() {

  /* =========================================================
     SERVICE IMAGES
  ========================================================= */

  const serviceImages = [
    'https://images.openai.com/static-rsc-4/MnaLaX897QAJWt9_FQYg8ahmnFuEGM5pMZMADSR7uN3gCabAikQOFWiA5Gk3aYEKhMaG2cIkMYNZOb0lyInV_imXAXdJSJ9LnBGvTTreMWUHxRKkCQZ3J2ygzg8QJ5ear14MLvht7AlaUns1x3cc5e11wYBxCEvGo_bJ6JdOa5SVvRdG7ryjGyFMREvCwrAg?purpose=fullsize',

    'https://images.openai.com/static-rsc-4/0F3ctBmFXizmTuvEt3ssL7UXOt2tNyj_tRIZbeIwH7D4AwnYesuBVHjUK5L6-QCLaOqjz2PA9PiULbdfd1bsQh9zbCImlJZ_PLdKixaIy7t8kCiuWz0oyWywbLm3K79YyfmJT9RhA1AJcOJbXyovB3OwTXLlz2qnW2lVKDjJdlHqydkQA85Nko_2MJJczE2b?purpose=fullsize',

    'https://images.openai.com/static-rsc-4/jpHlYluJYSB07dErlBgSL8ANM9BmM6deijHFqnpd1d48WKuxHV5Ue01vrjRE4136o5KQk6wf0wN2HCJEUOXp8ihkEQ1zmqJPZKiaFvJWjB4J7Y71nQnbV7NoIFyM9uxQ6QxSwygaiqQnYx2IViIPyje3r-usCg-idcCvxCEZE0gFoXU8OKG1Qz5bkioE6ddE?purpose=fullsize',

    'https://images.openai.com/static-rsc-4/KpS03-lBTpaFU-ettUAgwE9xW_ijxVdjGe2YHpj9YRHemSA0_WOqPNsLaiMNPEvs3Q1wnLKleZux1FoNLlAScE5Vj0lRtT_U5xgUAzhWPiRAtTZtWCLv4c95CKkhVaNLiE_vkVcNWH8F2eceS-ARTf7iNAKVm3fDfFAISx7hUG1lM3mq-wHtgzOgkvIqr0zJ?purpose=fullsize',
  ]


  /* =========================================================
     FEATURED SERVICES
  ========================================================= */

  const featured = services
    .slice(0, 4)
    .map((service, index) => ({
      ...service,
      image:
        serviceImages[index] ||
        DEFAULT_SERVICE_IMAGE,
    }))


  /* =========================================================
     CARD HOVER
  ========================================================= */

  const [
    hoveredCard,
    setHoveredCard,
  ] = useState(null)


  /* =========================================================
     MOBILE SLIDER
  ========================================================= */

  const [mobileIndex, setMobileIndex] = useState(0)
const [isMobileCardHovered, setIsMobileCardHovered] = useState(false)

useEffect(() => {
  if (featured.length <= 1 || isMobileCardHovered) {
    return
  }

  const timer = setInterval(() => {
    setMobileIndex((previous) => {
      return (previous + 1) % featured.length
    })
  }, 4000)

  return () => {
    clearInterval(timer)
  }
}, [featured.length, isMobileCardHovered])

  /* =========================================================
     EMPTY STATE
  ========================================================= */

  if (!featured.length) {
    return null
  }


  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        pt-24
        pb-10
        lg:px-10
        lg:py-32
      "
      style={{
        background: INK,
      }}
    >

      {/* =================================================
          SECTION BACKGROUND
      ================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 18% 30%,
              rgba(47,123,255,0.07),
              transparent 30%
            ),
            radial-gradient(
              circle at 82% 70%,
              rgba(94,162,255,0.05),
              transparent 35%
            )
          `,
        }}
      />


      {/* =================================================
          TECHNICAL LINE 1
      ================================================= */}

      <div
        className="pointer-events-none absolute left-0 right-0 top-[22%] h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(94,162,255,0.08), transparent)',
        }}
      />


      {/* =================================================
          TECHNICAL LINE 2
      ================================================= */}

      <div
        className="pointer-events-none absolute left-0 right-0 bottom-[18%] h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(94,162,255,0.06), transparent)',
        }}
      />


      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="relative z-10 mx-auto max-w-shell"
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >

          {/* =================================================
              LEFT HEADING
          ================================================= */}

          <div className="-mt-32">

            <Eyebrow>
              What We Do
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
                duration: 0.8,
              }}
              className="mt-4 max-w-xl font-display text-[clamp(1.9rem,3.5vw,3rem)] font-bold leading-tight"
              style={{
                color: FG,
              }}
            >
              Engineering built around your goals
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
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="mt-4 mb-5 text-sm leading-6 text-white/40"
            >
              We combine technology, design, and
              strategy to create digital products
              that are scalable, practical, and built
              for real business needs.
            </motion.p>

          </div>


          {/* =================================================
              DESKTOP VIEW MORE
          ================================================= */}

          <ServiceRail />

        </div>


        {/* =================================================
            MOBILE SERVICE RAIL
        ================================================= */}

        <div className="lg:hidden">

          <motion.div
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
            }}
            className="flex items-center justify-between rounded-xl border border-blue-400/10 bg-blue-400/[0.03] px-4 py-3"
          >

            <div className="flex items-center gap-2">

              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(94,162,255,0.7)]"
              />

              <span
                className="font-mono text-[8px] uppercase tracking-[0.15em] text-blue-300/60"
              >
                Explore Services
              </span>

            </div>

            <a
              href="/services"
              className="rounded-lg border border-blue-400/20 bg-blue-400/[0.06] px-3 py-2 font-mono text-[8px] uppercase tracking-wider text-blue-300 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-200"
            >
              Explore →
            </a>

          </motion.div>

        </div>


        {/* =================================================
            MOBILE CARDS
            ONE CARD AT A TIME
        ================================================= */}

        <div className="mt-10 sm:hidden">

          <div
            className="relative w-full overflow-hidden"
          >

            <AnimatePresence mode="wait">

              {featured.map((s, i) => {

                if (i !== mobileIndex) {
                  return null
                }

                return (
                  <motion.div
                    key={
                      s.slug ||
                      s.id ||
                      i
                    }
                    initial={{
                      opacity: 0,
                      x: 45,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: -45,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [
                        0.16,
                        1,
                        0.3,
                        1,
                      ],
                    }}
                    className="w-full"
                  >

                  <div
  onMouseEnter={() => setIsMobileCardHovered(true)}
  onMouseLeave={() => setIsMobileCardHovered(false)}
  onTouchStart={() => setIsMobileCardHovered(true)}
  onTouchEnd={() => setIsMobileCardHovered(false)}
>
  <ServiceCard 
    s={s} 
    i={i} 
    isHovered={hoveredCard === i} 
    setHoveredCard={setHoveredCard} 
  />
</div>

                  </motion.div>
                )
              })}

            </AnimatePresence>


            {/* MOBILE DOTS */}

            <div
              className="mt-5 flex items-center justify-center gap-2"
            >

              {featured.map((_, index) => (

                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setMobileIndex(index)
                  }
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      mobileIndex === index
                        ? 'w-7 bg-blue-400'
                        : 'w-1.5 bg-blue-400/25'
                    }
                  `}
                  aria-label={`Show service ${
                    index + 1
                  }`}
                />

              ))}

            </div>

          </div>

        </div>


        {/* =================================================
            TABLET + DESKTOP CARDS
        ================================================= */}

        <div
          className="
            mt-8
            hidden
            gap-5
            sm:grid
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {featured.map((s, i) => (

            <ServiceCard
              key={
                s.slug ||
                s.id ||
                i
              }
              s={s}
              i={i}
              isHovered={
                hoveredCard === i
              }
              setHoveredCard={
                setHoveredCard
              }
            />

          ))}

        </div>

      </div>

    </section>
  )
}