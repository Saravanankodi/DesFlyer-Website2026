import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiCheck,
  FiMessageCircle,
  FiUser,
  FiCpu,
  FiArrowRight,
} from 'react-icons/fi'

import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import CFAQ from '../components/CFAQ'
import { siteConfig } from '../data/siteConfig'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [activeField, setActiveField] = useState(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(e) {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    setStatus('sending')

    setTimeout(() => {
      setStatus('sent')
    }, 900)
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with DesFlyer — email, call, or send us a message about your project."
        path="/contact"
      />

      {/* =========================================================
          CONTACT HERO
      ========================================================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-20 sm:px-6 lg:px-10 lg:py-24 xl:py-20">

        {/* =====================================================
            BLUE MOVING BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <motion.div
            animate={{
              x: [0, 90, -40, 0],
              y: [0, -60, 30, 0],
              scale: [1, 1.15, 0.92, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.10] blur-[100px]"
          />

          <motion.div
            animate={{
              x: [0, -80, 35, 0],
              y: [0, 45, -35, 0],
              scale: [1, 0.9, 1.12, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-48 top-1/4 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.07] blur-[110px]"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_65%)]"
          />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(59,130,246,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.8)_1px,transparent_1px)] [background-size:75px_75px]" />

          <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[120px]" />
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="relative z-10 mx-auto flex w-full max-w-shell flex-col justify-center">

          {/* =====================================================
              HEADER
          ===================================================== */}

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
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 max-w-5xl"
          >
            <Eyebrow>Get In Touch</Eyebrow>

            <h1 className="mt-2 whitespace-nowrap font-display text-[clamp(2.2rem,4.5vw,4.5rem)] font-bold leading-[0.92] tracking-tight text-[var(--fg)]">
              Let&rsquo;s build{' '}

              <motion.span
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                className="bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
              >
                something remarkable.
              </motion.span>
            </h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="mb-4 mt-3 max-w-3xl text-xs leading-5 text-[var(--fg)]/55 sm:text-sm lg:text-base"
            >
              Have an idea, product, website, or digital experience in mind?
              Tell us what you are working on and let&rsquo;s turn it into
              something real.
            </motion.p>
          </motion.div>

          {/* =====================================================
              MAIN CONTACT AREA
          ===================================================== */}

          <div className="grid items-stretch gap-4 lg:grid-cols-[0.78fr_1.65fr_0.78fr]">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="order-2 relative min-h-[400px] overflow-hidden rounded-[30px] border border-blue-400/[0.10] bg-gradient-to-br from-blue-500/[0.13] via-blue-900/[0.12] to-blue-950/[0.22] p-5 shadow-[0_30px_100px_rgba(0,20,80,0.35)] backdrop-blur-2xl sm:p-6 lg:order-1 lg:p-6"            >

              <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(59,130,246,0.15),transparent_35%,transparent_65%,rgba(6,182,212,0.08))]" />

              <motion.div
                animate={{
                  x: [0, 30, -15, 0],
                  y: [0, -30, 20, 0],
                  scale: [1, 1.12, 0.95, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/[0.13] blur-3xl"
              />

              {/* <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.25),transparent,rgba(6,182,212,0.18),transparent)] blur-sm"
              /> */}

              <div className="relative flex h-full flex-col justify-between">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/[0.10] bg-blue-400/[0.07] px-3 py-1.5">

                    {/* <motion.span
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
                    /> */}

                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-blue-300">
                      Available to connect
                    </span>

                  </div>

                  <h2 className="mt-4 max-w-sm font-display text-xl font-semibold leading-tight text-[var(--fg)] lg:text-2xl">
                    Your idea starts with a conversation.
                  </h2>

                  <p className="mt-2 max-w-sm text-[11px] leading-5 text-[var(--fg)]/45 lg:text-xs">
                    Give us the context. We&rsquo;ll bring the strategy,
                    design, engineering, and execution.
                  </p>

                </div>

                <div className="mt-6 space-y-3 ">

                  <ContactItem className=""
                    icon={<FiMail size={15} />}
                    label="Email"
                    value={siteConfig.email}
                    href={`mailto:${siteConfig.email}`}
                  />

                  <ContactItem
                    icon={<FiPhone size={15} />}
                    label="Phone"
                    value={siteConfig.phone}
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  />

                  <ContactItem
                    icon={<FiMapPin size={15} />}
                    label="Location"
                    value={siteConfig.location}
                  />

                </div>

              </div>
            </motion.div>

            {/* =================================================
                CENTER FORM
            ================================================= */}

            <motion.form
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onSubmit={handleSubmit}
              className="order-1 relative overflow-hidden rounded-[30px] border border-blue-400/[0.18] bg-gradient-to-br from-blue-500/[0.16] via-blue-900/[0.12] to-cyan-950/[0.22] p-1 shadow-[0_30px_100px_rgba(0,40,120,0.45)] lg:order-2"            >

              {/* MOVING BLUE LIGHT */}

              <motion.div
                animate={{
                  x: ['-120%', '220%'],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="pointer-events-none absolute -top-20 h-[150%] w-24 rotate-[20deg] bg-gradient-to-b from-transparent via-cyan-400/[0.20] to-transparent blur-2xl"
              />

              {/* INNER BLUE GLASS */}

              <div className="relative h-full overflow-hidden rounded-[27px] border border-blue-400/[0.14] bg-gradient-to-br from-[#071a35] via-[#0a2142] to-[#06152f] px-5 py-5 shadow-[inset_0_1px_0_rgba(96,165,250,0.14),0_20px_60px_rgba(0,30,100,0.4)] sm:px-6 sm:py-6 lg:px-7 lg:py-6">

                <motion.div
                  animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -20, 25, 0],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/[0.13] blur-3xl"
                />

                <div className="relative z-10">

                  {/* FORM HEADING */}

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <div className="flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-blue-300">
                          Start a conversation
                        </span>

                      </div>

                      <h2 className="mt-2 font-display text-lg font-semibold text-white lg:text-xl">
                        Tell us about your project.
                      </h2>

                      <p className="mt-1 max-w-md text-[10px] leading-5 text-blue-100/50 lg:text-xs">
                        Share the essentials. We&rsquo;ll take it from there.
                      </p>

                    </div>

                    <div className="hidden rounded-full border border-blue-400/[0.12] bg-blue-400/[0.06] px-3 py-1.5 font-mono text-[8px] text-blue-300/50 sm:block" />

                  </div>

                  {/* INPUTS */}

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">

                    <AnimatedInput
                      id="name"
                      label="Your name"
                      labelClassName="!text-white !text-[10px]"
                      placeholder="Enter your name"
                      placeholderClassName="!text-white"
                      value={form.name}
                      onChange={handleChange}
                      active={activeField === 'name'}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                    />

                    <AnimatedInput
                      id="email"
                      label="Email address"
                      labelClassName="!text-white !text-[10px]"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      active={activeField === 'email'}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                    />

                  </div>

                  {/* MESSAGE */}

                  <div className="mt-4">

                    <label
                      htmlFor="message"
                      className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white"
                    >
                      <span>Project details</span>
                    </label>

                    <div className="relative">

                      <motion.div
                        animate={{
                          opacity: activeField === 'message' ? 1 : 0,
                        }}
                        className="pointer-events-none absolute -inset-2 rounded-3xl bg-blue-500/[0.12] blur-xl"
                      />

                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        placeholder="What are you building? Tell us about your goals, timeline, or anything else that matters..."
                        className="relative w-full resize-none rounded-2xl border border-blue-400/[0.10] bg-blue-400/[0.06] px-4 py-3 text-xs leading-5 text-white outline-none placeholder:text-blue-100/25 transition-all duration-300 focus:border-blue-400/[0.25] focus:bg-blue-400/[0.10]"
                      />

                      <motion.span
                        animate={{
                          scaleX: activeField === 'message' ? 1 : 0,
                        }}
                        className="absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      />

                      <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-[7px] uppercase tracking-[0.15em] text-blue-300/25">
                        Brief
                      </span>

                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-2.5">

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/[0.12] bg-blue-400/[0.08] text-blue-300">
                        <FiCheck size={13} />
                      </div>

                      <div>

                        <p className="text-[10px] text-white">
                          Your information
                        </p>

                        <p className="mt-0.5 text-[9px] text-gray-400">
                          Stays private &amp; secure
                        </p>

                      </div>

                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{
                        scale: 1.03,
                        x: 3,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="group mt-1 flex items-center justify-center rounded-full border border-blue-300/30 bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-500 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:from-blue-200 hover:via-blue-400 hover:to-cyan-400 hover:shadow-[0_18px_50px_rgba(37,99,235,0.5)]"
                    >

                      {status === 'sent' ? (
                        <>
                          Message Sent

                          <FiCheck
                            size={14}
                            className="ml-2"
                          />
                        </>
                      ) : status === 'sending' ? (
                        <>
                          Sending

                          <motion.span
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 0.7,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="ml-2"
                          >
                            <FiSend size={13} />
                          </motion.span>
                        </>
                      ) : (
                        <>
                          Send Project Brief

                          <FiArrowRight
                            size={14}
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </>
                      )}

                    </motion.button>

                  </div>

                  {/* SUCCESS */}

                  <AnimatePresence>

                    {status === 'sent' && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 8,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          height: 'auto',
                        }}
                        exit={{
                          opacity: 0,
                          y: 8,
                          height: 0,
                        }}
                        className="mt-3 overflow-hidden rounded-xl border border-blue-400/[0.12] bg-blue-500/[0.08] p-3"
                      >

                        <div className="flex items-center gap-2.5">

                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]">
                            <FiCheck size={13} />
                          </div>

                          <div>

                            <p className="text-xs font-medium text-blue-100">
                              Project brief received.
                            </p>

                            <p className="mt-0.5 text-[10px] text-blue-100/40">
                              We&rsquo;ll get back to you within one business
                              day.
                            </p>

                          </div>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>

              </div>

            </motion.form>

            {/* =================================================
                RIGHT VECTOR
            ================================================= */}

            <HumanCommunicationCard />

          </div>

        </div>

      </section>

      <CFAQ />
    </>
  )
}

/* =========================================================
   HUMAN COMMUNICATION VECTOR
========================================================= */

function HumanCommunicationCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="order-3 relative min-h-[400px] overflow-hidden rounded-[30px] border border-blue-400/[0.10] bg-gradient-to-br from-blue-500/[0.08] via-[#06152f] to-cyan-950/[0.12] shadow-[0_30px_100px_rgba(0,20,80,0.35)] lg:min-h-[400px]"    >

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]"
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 500 520"
        preserveAspectRatio="none"
      >
        <path
          d="M70 310 C150 180 340 180 430 310"
          stroke="#3B82F6"
          strokeWidth="1"
          strokeDasharray="4 8"
          fill="none"
        />

        <path
          d="M70 330 C150 430 340 430 430 330"
          stroke="#22D3EE"
          strokeWidth="1"
          strokeDasharray="4 8"
          fill="none"
        />
      </svg>

      <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center px-4 py-6">

        <div className="mb-5 rounded-full border border-blue-400/[0.12] bg-blue-500/[0.06] px-3 py-1.5">
          <span className="font-mono text-[7px] uppercase tracking-[0.20em] text-blue-300">
            Human Communication
          </span>
        </div>

        <div className="relative flex w-full max-w-[280px] items-center justify-between">

          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex flex-col items-center"
          >

            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-blue-300/20 bg-[#07152E] shadow-[0_0_40px_rgba(37,99,235,0.15)]">

              <FiUser
                size={28}
                strokeWidth={1.3}
                className="text-blue-300"
              />

              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full border border-blue-400/30"
              />

            </div>

            <span className="mt-2 font-mono text-[7px] uppercase tracking-[0.2em] text-blue-300/60">
              You
            </span>

          </motion.div>

          <div className="relative flex flex-1 items-center justify-center px-2">

            <motion.div
              animate={{
                x: [0, 25],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-1/4 h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_15px_rgba(96,165,250,0.9)]"
            />

            <div className="h-px w-full bg-gradient-to-r from-blue-400/30 via-blue-400/70 to-cyan-400/30" />

            <FiMessageCircle
              size={15}
              className="absolute text-cyan-300"
            />

          </div>

          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              delay: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex flex-col items-center"
          >

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/25 bg-[#07152E] shadow-[0_0_45px_rgba(34,211,238,0.16)]">

              <FiCpu
                size={28}
                strokeWidth={1.2}
                className="text-cyan-300"
              />

              <motion.div
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -inset-2 rounded-2xl border border-cyan-400/15"
              />

            </div>

            <span className="mt-2 font-mono text-[7px] uppercase tracking-[0.2em] text-cyan-300/70">
              Us
            </span>

          </motion.div>

        </div>

        <div className="mt-5 flex items-center gap-2">

          <div className="rounded-2xl rounded-br-md border border-blue-400/15 bg-blue-500/[0.07] px-3 py-2">
            <p className="font-display text-[10px] font-medium text-blue-100/80">
              “I have an idea...”
            </p>
          </div>

          <motion.div
            animate={{
              x: [0, 5, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="flex gap-1"
          >
            <span className="h-1 w-1 rounded-full bg-blue-400" />
            <span className="h-1 w-1 rounded-full bg-blue-400" />
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
          </motion.div>

        </div>

        <motion.div
          animate={{
            opacity: [0.45, 1, 0.45],
            y: [3, 0, 3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mt-3 rounded-2xl rounded-bl-md border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-2"
        >
          <p className="font-display text-[10px] font-medium text-cyan-100/75">
            “Let&rsquo;s build it together.”
          </p>
        </motion.div>

        <div className="mt-5 text-center">

          <p className="font-display text-xs font-semibold text-white/80">
            Human ideas.
          </p>

          <p className="mt-1 font-display text-xs font-semibold text-cyan-300">
            Meaningful digital conversations.
          </p>

          <p className="mt-2 max-w-[230px] text-[8px] leading-4 text-blue-100/35">
            No complicated process. Just talk to us,
            share your idea, and let&rsquo;s create something useful.
          </p>

        </div>

      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-400/[0.08] bg-blue-500/[0.06] px-2.5 py-1 backdrop-blur-md">
        <span className="font-mono text-[6px] uppercase tracking-[0.15em] text-blue-300/60">
          You speak • We listen • We create
        </span>
      </div>

    </motion.div>
  )
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon,
  label,
  value,
  href,
}) {
  const content = (
    <>
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/[0.08] bg-blue-500/[0.07] text-blue-300 shadow-[0_0_20px_rgba(37,99,235,0.08)]"
      >
        {icon}
      </motion.div>

      <span className="min-w-0 flex-1">

        <span className="block font-mono text-[7px] uppercase tracking-[0.15em] text-blue-300/35">
          {label}
        </span>

        <span className="mt-0.5 block truncate text-xs text-blue-100/75 transition-colors group-hover:text-blue-200">
          {value}
        </span>

      </span>

      {href && (
        <FiArrowUpRight
          size={14}
          className="text-blue-400/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
        />
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{
          x: 4,
        }}
        className="group flex items-center gap-3 rounded-xl border border-blue-400/[0.05] bg-blue-500/[0.035] p-3 transition-all duration-300 hover:border-blue-400/[0.12] hover:bg-blue-500/[0.075] hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)]"
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      className="group flex items-center gap-3 rounded-xl border border-blue-400/[0.05] bg-blue-500/[0.035] p-3 transition-all duration-300 hover:border-blue-400/[0.12] hover:bg-blue-500/[0.075]"
    >
      {content}
    </motion.div>
  )
}

/* =========================================================
   ANIMATED INPUT
========================================================= */

function AnimatedInput({
  id,
  label,
  labelClassName = '',
  number,
  type = 'text',
  placeholder,
  value,
  onChange,
  active,
  onFocus,
  className = '',
  onBlur,
}) {
  return (
    <div>

      <label
        htmlFor={id}
        className={`mb-1.5 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-blue-300/45 ${labelClassName}`}
      >
        <span>{label}</span>

        <span className="text-blue-300/60">
          {number}
        </span>
      </label>

      <div className="relative">

        <motion.div
          animate={{
            opacity: active ? 1 : 0,
            scale: active ? 1 : 0.96,
          }}
          transition={{
            duration: 0.25,
          }}
          className="pointer-events-none absolute -inset-2 rounded-3xl bg-blue-500/[0.10] blur-xl"
        />

        <input
          id={id}
          name={id}
          type={type}
          required
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`relative w-full rounded-xl border border-blue-400/[0.10] bg-blue-400/[0.06] px-4 py-2.5 text-xs text-blue-50 outline-none placeholder:text-blue-100/25 transition-all duration-300 focus:border-blue-400/[0.25] focus:bg-blue-400/[0.10] focus:shadow-[0_0_30px_rgba(37,99,235,0.10)] ${className}`}
        />

        <motion.span
          animate={{
            scaleX: active ? 1 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400"
        />

        <motion.div
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: active ? 1 : 0,
            x: active ? 0 : -10,
          }}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-300"
        >
          <FiArrowRight size={13} />
        </motion.div>

      </div>
    </div>
  )
}