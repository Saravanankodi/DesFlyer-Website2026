import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCode,
  FiGlobe,
  FiSmartphone,
  FiDatabase,
} from 'react-icons/fi'

const WORDS = ['Innovate', 'Create', 'Empower']
const WORD_DURATION = 1000

const SERVICES = [
  {
    icon: FiCode,
    label: 'Software Development',
    code: 'SW',
  },
  {
    icon: FiGlobe,
    label: 'Web Development',
    code: 'WEB',
  },
  {
    icon: FiSmartphone,
    label: 'App Development',
    code: 'APP',
  },
  {
    icon: FiDatabase,
    label: 'Database Management',
    code: 'DB',
  },
]

export default function LoadingScreen({ onComplete }) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      onComplete()
      return
    }

    if (index < WORDS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((current) => current + 1)
      }, WORD_DURATION)

      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setExiting(true)
    }, WORD_DURATION)

    return () => clearTimeout(timer)
  }, [index, onComplete])

  useEffect(() => {
    if (!exiting) return

    const timer = setTimeout(() => {
      onComplete()
    }, 1000)

    return () => clearTimeout(timer)
  }, [exiting, onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-ink"
        >

          {/* =====================================================
              BACKGROUND
          ====================================================== */}

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  circle at 50% 50%,
                  rgba(46,111,255,0.07),
                  transparent 45%
                ),
                radial-gradient(
                  circle at 80% 20%,
                  rgba(0,220,255,0.04),
                  transparent 30%
                )
              `,
            }}
          />

          {/* Blueprint grid */}

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Fine grid */}

          <div
            className="absolute inset-0 pointer-events-none opacity-[0.018]"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.8) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: '12px 12px',
            }}
          />

          {/* =====================================================
              TOP HEADER
          ====================================================== */}

          <motion.header
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14"
          >

            {/* Logo name */}

            <div className="flex items-center gap-3">

              <div
                className="flex h-7 w-7 items-center justify-center rounded-md border border-signal/20 bg-signal/[0.04]"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_12px_rgba(46,111,255,0.9)]"
                />
              </div>

              <div className="flex flex-col">

                <span
                  className="font-display text-xs font-bold tracking-[0.18em] text-white/70"
                >
                  DESFLYER
                </span>

                <span
                  className="font-mono text-[6px] uppercase tracking-[0.28em] text-white/20"
                >
                  Digital Engineering
                </span>

              </div>

            </div>

            {/* System information */}

            <div className="flex items-center gap-4">

              <span
                className="hidden font-mono text-[7px] uppercase tracking-[0.25em] text-white/20 md:block"
              >
                Initializing Interface
              </span>

              <span
                className="h-1 w-1 rounded-full bg-signal shadow-[0_0_10px_rgba(46,111,255,0.8)]"
              />

              <span
                className="font-mono text-[7px] tracking-[0.2em] text-signal/50"
              >
                2026
              </span>

            </div>

          </motion.header>

          {/* =====================================================
              CORNER BLUEPRINT MARKERS
          ====================================================== */}

          <div
            className="absolute left-6 top-24 h-8 w-8 border-l border-t border-signal/20 sm:left-10"
          />

          <div
            className="absolute right-6 top-24 h-8 w-8 border-r border-t border-signal/20 sm:right-10"
          />

          <div
            className="absolute bottom-20 left-6 h-8 w-8 border-b border-l border-signal/20 sm:left-10"
          />

          <div
            className="absolute bottom-20 right-6 h-8 w-8 border-b border-r border-signal/20 sm:right-10"
          />

          {/* =====================================================
              MAIN BLUEPRINT
          ====================================================== */}

          <main
            className="relative z-10 flex min-h-screen items-center justify-center px-6 py-28"
          >

            <div
              className="relative w-full max-w-6xl"
            >

              {/* Blueprint center line */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-signal/20 to-transparent"
              />

              {/* Vertical center line */}

              <motion.div
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute bottom-0 left-1/2 top-0 w-px origin-top bg-gradient-to-b from-transparent via-signal/15 to-transparent"
              />

              {/* =================================================
                  LEFT INFORMATION
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="absolute left-0 top-1/2 hidden w-44 -translate-y-1/2 lg:block"
              >

                <div
                  className="border-l border-signal/20 pl-5"
                >

                  <span
                    className="font-mono text-[7px] uppercase tracking-[0.25em] text-signal/60"
                  >
                    Project Architecture
                  </span>

                  <p
                    className="mt-3 font-mono text-[8px] leading-5 text-white/20"
                  >
                    Designing digital systems
                    with structure,
                    performance and purpose.
                  </p>

                </div>

              </motion.div>

              {/* =================================================
                  RIGHT INFORMATION
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.8,
                }}
                className="absolute right-0 top-1/2 hidden w-44 -translate-y-1/2 lg:block"
              >

                <div
                  className="border-r border-signal/20 pr-5 text-right"
                >

                  <span
                    className="font-mono text-[7px] uppercase tracking-[0.25em] text-signal/60"
                  >
                    System Status
                  </span>

                  <div className="mt-3 space-y-2">

                    {[
                      'CORE ONLINE',
                      'MODULES READY',
                      'INTERFACE READY',
                    ].map((status) => (
                      <div
                        key={status}
                        className="flex items-center justify-end gap-2"
                      >

                        <span
                          className="font-mono text-[7px] text-white/20"
                        >
                          {status}
                        </span>

                        <span
                          className="h-1 w-1 rounded-full bg-signal/60"
                        />

                      </div>
                    ))}

                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  CENTER LOGO
              ================================================== */}

              <div
                className="relative mx-auto flex h-[330px] w-[330px] items-center justify-center sm:h-[420px] sm:w-[420px]"
              >

                {/* Outer blueprint square */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-4 border border-signal/[0.12]"
                />

                {/* Inner square */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-12 border border-white/[0.06]"
                />

                {/* Technical cross */}

                <div
                  className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-signal/30"
                />

                <div
                  className="absolute bottom-0 left-1/2 h-8 w-px -translate-x-1/2 bg-signal/30"
                />

                <div
                  className="absolute left-0 top-1/2 h-px w-8 -translate-y-1/2 bg-signal/30"
                />

                <div
                  className="absolute right-0 top-1/2 h-px w-8 -translate-y-1/2 bg-signal/30"
                />

                {/* Corner measurements */}

                <span
                  className="absolute left-1 top-1 font-mono text-[6px] text-signal/30"
                >
                  00.01
                </span>

                <span
                  className="absolute right-1 top-1 font-mono text-[6px] text-signal/30"
                >
                  X:240
                </span>

                <span
                  className="absolute bottom-1 left-1 font-mono text-[6px] text-signal/30"
                >
                  Y:180
                </span>

                <span
                  className="absolute bottom-1 right-1 font-mono text-[6px] text-signal/30"
                >
                  100%
                </span>

                {/* Logo container */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.65,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative z-20 flex h-52 w-52 items-center justify-center sm:h-64 sm:w-64"
                >

                  {/* Logo glow */}

                  <motion.div
                    animate={{
                      opacity: [0.12, 0.28, 0.12],
                      scale: [0.9, 1.08, 0.9],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-6 rounded-full bg-signal/10 blur-3xl"
                  />

                  {/* Glass */}

                  <div
                    className="absolute inset-5 rounded-2xl border border-signal/15 bg-white/[0.015] backdrop-blur-md"
                  />

                  {/* Logo */}

                  <motion.img
                    src="/images/portfolio/logo.png"
                    alt="DESFlyer"
                    className="relative z-10 h-40 w-40 object-contain sm:h-48 sm:w-48"
                    animate={{
                      y: [-4, 4, -4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      filter: `
                        drop-shadow(
                          0 0 25px
                          rgba(46,111,255,0.65)
                        )
                        drop-shadow(
                          0 0 55px
                          rgba(0,200,255,0.22)
                        )
                      `,
                    }}
                  />

                </motion.div>

                {/* Blueprint scanning line */}

                <motion.div
                  initial={{
                    top: '8%',
                    opacity: 0,
                  }}
                  animate={{
                    top: ['8%', '92%', '8%'],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute left-12 right-12 z-30 h-px bg-signal shadow-[0_0_14px_rgba(46,111,255,0.9)]"
                />

              </div>

              {/* =================================================
                  MOBILE PROJECT LABEL
              ================================================== */}

              <div
                className="mt-8 flex justify-center lg:hidden"
              >

                <span
                  className="border-l border-signal/20 pl-3 font-mono text-[7px] uppercase tracking-[0.2em] text-white/25"
                >
                  Digital Engineering System
                </span>

              </div>

            </div>

          </main>

          {/* =====================================================
              SERVICE STRIP
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="absolute bottom-8 left-1/2 z-40 w-full max-w-5xl -translate-x-1/2 px-6"
          >

            <div
              className="grid grid-cols-2 border-y border-white/[0.06] sm:grid-cols-4"
            >

              {SERVICES.map((service, serviceIndex) => {

                const Icon = service.icon

                return (
                  <div
                    key={service.label}
                    className="group flex items-center gap-3 border-white/[0.05] px-3 py-3 sm:border-r sm:px-5 last:border-r-0"
                  >

                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center border border-signal/10 text-signal/60"
                    >
                      <Icon size={12} />
                    </div>

                    <div className="min-w-0">

                      <div
                        className="font-mono text-[6px] tracking-[0.2em] text-signal/40"
                      >
                        {service.code}
                      </div>

                      <div
                        className="mt-0.5 truncate font-mono text-[7px] uppercase tracking-[0.08em] text-white/25"
                      >
                        {service.label}
                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

          </motion.div>

          {/* =====================================================
              LOADING PROGRESS
          ====================================================== */}

          <div
            className="absolute bottom-0 left-0 right-0 z-50 h-px bg-white/[0.05]"
          >

            <motion.div
              className="h-full bg-signal shadow-[0_0_15px_rgba(46,111,255,0.9)]"
              animate={{
                width: `${((index + 1) / WORDS.length) * 100}%`,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

          </div>

          {/* =====================================================
              WORD SEQUENCE
          ====================================================== */}

          <div
            className="pointer-events-none absolute bottom-16 right-6 z-40 hidden lg:block"
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={WORDS[index]}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="font-mono text-[7px] uppercase tracking-[0.3em] text-signal/40"
              >
                {WORDS[index]}
              </motion.div>

            </AnimatePresence>

          </div>

          {/* =====================================================
              CINEMATIC EXIT
          ====================================================== */}

          <AnimatePresence>

            {exiting && (
              <>
                {/* Left panel */}

                <motion.div
                  initial={{
                    x: '-100%',
                  }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="fixed inset-y-0 left-0 z-[100] w-1/2 bg-ink"
                />

                {/* Right panel */}

                <motion.div
                  initial={{
                    x: '100%',
                  }}
                  animate={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="fixed inset-y-0 right-0 z-[100] w-1/2 bg-ink"
                />

                {/* Center reveal line */}

                <motion.div
                  initial={{
                    scaleY: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scaleY: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.65,
                  }}
                  className="fixed left-1/2 top-0 z-[110] h-full w-px origin-center -translate-x-1/2 bg-signal shadow-[0_0_25px_rgba(46,111,255,0.9)]"
                />

              </>
            )}

          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  )
}











