import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiCheck,
  FiZap,
  FiArrowRight,
} from 'react-icons/fi'

import Seo from '../lib/Seo'
import Eyebrow from '../components/ui/Eyebrow'
import FAQ from '../components/FAQ'
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

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          px-5
          py-20
          sm:px-6
          lg:px-10
          lg:py-24
          xl:py-20
        "
      >
        {/* =====================================================
            BLUE MOVING BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Left blue orb */}

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
            className="
              absolute
              -left-40
              top-10
              h-[30rem]
              w-[30rem]
              rounded-full
              bg-blue-500/[0.10]
              blur-[100px]
            "
          />

          {/* Right blue orb */}

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
            className="
              absolute
              -right-48
              top-1/4
              h-[34rem]
              w-[34rem]
              rounded-full
              bg-cyan-500/[0.07]
              blur-[110px]
            "
          />

          {/* Center rotating glow */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[600px]
              w-[600px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_65%)]
            "
          />

          {/* Blue grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(rgba(59,130,246,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.8)_1px,transparent_1px)]
              [background-size:75px_75px]
            "
          />

          {/* Subtle top glow */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-96
              w-[700px]
              -translate-x-1/2
              rounded-full
              bg-blue-600/[0.07]
              blur-[120px]
            "
          />
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-shell
            flex-col
            justify-center
          "
        >
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
            className="
              max-w-5xl
              mt-8
            "
          >
            <Eyebrow>Get In Touch</Eyebrow>

            <h1
              className="
                mt-2
                font-display
                text-[clamp(2.2rem,4.5vw,4.5rem)]
                font-bold
                leading-[0.92]
                tracking-tight
                text-[var(--fg)]
                whitespace-nowrap
              "
            >
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
                className="
                  bg-gradient-to-r
                  from-blue-300
                  via-blue-500
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
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
              className="
                mt-3
                mb-4
                max-w-3xl
                text-xs
                leading-5
                text-[var(--fg)]/55
                sm:text-sm
                lg:text-base
              "
            >
              Have an idea, product, website, or digital experience in mind?
              Tell us what you are working on and let&rsquo;s turn it into
              something real.
            </motion.p>
          </motion.div>

          {/* =====================================================
              MAIN CONTACT AREA
          ===================================================== */}

          <div
            className="
              grid
              items-stretch
              gap-4
              lg:grid-cols-[0.78fr_1.65fr]
            "
          >
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
              className="
                relative
                min-h-[400px]
                overflow-hidden
                rounded-[30px]
                border
                border-blue-400/[0.10]
                bg-gradient-to-br
                from-blue-500/[0.13]
                via-blue-900/[0.12]
                to-blue-950/[0.22]
                p-5
                shadow-[0_30px_100px_rgba(0,20,80,0.35)]
                backdrop-blur-2xl
                sm:p-6
                lg:p-6
              "
            >
              {/* Blue border glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[30px]
                  bg-[linear-gradient(135deg,rgba(59,130,246,0.15),transparent_35%,transparent_65%,rgba(6,182,212,0.08))]
                "
              />

              {/* Floating orb */}

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
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-blue-500/[0.13]
                  blur-3xl
                "
              />

              {/* Rotating blue ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-28
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-[conic-gradient(from_0deg,transparent,rgba(59,130,246,0.25),transparent,rgba(6,182,212,0.18),transparent)]
                  blur-sm
                "
              />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  {/* Availability */}

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-blue-400/[0.10]
                      bg-blue-400/[0.07]
                      px-3
                      py-1.5
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
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-blue-400
                        shadow-[0_0_12px_rgba(59,130,246,0.9)]
                      "
                    />

                    <span
                      className="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-blue-300
                      "
                    >
                      Available to connect
                    </span>
                  </div>

                  <h2
                    className="
                      mt-4
                      max-w-sm
                      font-display
                      text-xl
                      font-semibold
                      leading-tight
                      text-[var(--fg)]
                      lg:text-2xl
                    "
                  >
                    Your idea starts with a conversation.
                  </h2>

                  <p
                    className="
                      mt-2
                      max-w-sm
                      text-[11px]
                      leading-5
                      text-[var(--fg)]/45
                      lg:text-xs
                    "
                  >
                    Give us the context. We&rsquo;ll bring the strategy,
                    design, engineering, and execution.
                  </p>
                </div>

                {/* CONTACT DETAILS */}

                <div className="mt-6 space-y-3">
                  <ContactItem
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
                RIGHT FORM
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
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-blue-400/[0.10]
                bg-gradient-to-br
                from-blue-500/[0.12]
                via-blue-900/[0.10]
                to-blue-950/[0.20]
                p-1
                shadow-[0_30px_100px_rgba(0,20,80,0.4)]
              "
            >
              {/* Moving blue light */}

              <motion.div
                animate={{
                  x: ['-120%', '220%'],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  pointer-events-none
                  absolute
                  -top-20
                  h-[150%]
                  w-24
                  rotate-[20deg]
                  bg-gradient-to-b
                  from-transparent
                  via-blue-400/[0.20]
                  to-transparent
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-[27px]
                  border
                  border-blue-400/[0.08]
                  bg-[#020817]/95
                  px-5
                  py-5
                  sm:px-6
                  sm:py-6
                  lg:px-7
                  lg:py-6
                "
              >
                {/* Background blue orb */}

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
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-72
                    w-72
                    rounded-full
                    bg-blue-500/[0.10]
                    blur-3xl
                  "
                />

                <div className="relative z-10">
                  {/* FORM HEADING */}

                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-blue-400
                            shadow-[0_0_15px_rgba(59,130,246,0.8)]
                          "
                        />

                        <span
                          className="
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-blue-300
                          "
                        >
                          Start a conversation
                        </span>
                      </div>

                      <h2
                        className="
                          mt-2
                          font-display
                          text-lg
                          font-semibold
                          text-white
                          lg:text-xl
                        "
                      >
                        Tell us about your project.
                      </h2>

                      <p
                        className="
                          mt-1
                          max-w-md
                          text-[10px]
                          leading-5
                          text-blue-100/40
                          lg:text-xs
                        "
                      >
                        Share the essentials. We&rsquo;ll take it from there.
                      </p>
                    </div>

                    <div
                      className="
                        hidden
                        rounded-full
                        border
                        border-blue-400/[0.08]
                        bg-blue-400/[0.05]
                        px-3
                        py-1.5
                        font-mono
                        text-[8px]
                        text-blue-300/50
                        sm:block
                      "
                    >

                    </div>
                  </div>

                  {/* INPUTS */}

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 ">
                    <AnimatedInput
                      id="name"
                      label="Your name"
                      placeholder="Enter your name"
                      
                      value={form.name}
                      onChange={handleChange}
                      active={activeField === 'name'}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                    />

                    <AnimatedInput
                      id="email"
                      label="Email address"
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
                      className="
                        mb-1.5
                        flex
                        items-center
                        justify-between
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-blue-300/50
                      "
                    >
                      <span>Project details</span>
                      {/* <span className="text-blue-300/60">03</span> */}
                    </label>

                    <div className="relative">
                      <motion.div
                        animate={{
                          opacity: activeField === 'message' ? 1 : 0,
                        }}
                        className="
                          pointer-events-none
                          absolute
                          -inset-2
                          rounded-3xl
                          bg-blue-500/[0.10]
                          blur-xl
                        "
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
                        className="
                          relative
                          w-full
                          resize-none
                          rounded-2xl
                          border
                          border-blue-400/[0.07]
                          bg-blue-400/[0.045]
                          px-4
                          py-3
                          text-xs
                          leading-5
                          text-white
                          outline-none
                          placeholder:text-blue-100/20
                          transition-all
                          duration-300
                          focus:border-blue-400/[0.18]
                          focus:bg-blue-400/[0.075]
                        "
                      />

                      <motion.span
                        animate={{
                          scaleX: activeField === 'message' ? 1 : 0,
                        }}
                        className="
                          absolute
                          bottom-0
                          left-4
                          right-4
                          h-[2px]
                          origin-left
                          rounded-full
                          bg-gradient-to-r
                          from-blue-500
                          to-cyan-400
                        "
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute
                          bottom-3
                          right-4
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-[0.15em]
                          text-blue-300/20
                        "
                      >
                        Brief
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div
                    className="
                      mt-4
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-blue-400/[0.10]
                          bg-blue-400/[0.08]
                          text-blue-300
                        "
                      >
                        <FiCheck size={13} />
                      </div>

                      <div>
                        <p className="text-[10px] text-blue-100/80">
                          Your information
                        </p>

                        <p className="mt-0.5 text-[9px] text-blue-100/30">
                          Stays private &amp; secure
                        </p>
                      </div>
                    </div>

                    {/* BLUE CTA */}

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
                      className="
                        group
                        mt-1
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-300/30
                        bg-gradient-to-r
                        from-blue-300
                        via-blue-500
                        to-cyan-500
                        px-5
                        py-2.5
                        text-xs
                        font-semibold
                        text-white
                        shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                        transition-all
                        duration-300
                        hover:from-blue-200
                        hover:via-blue-400
                        hover:to-cyan-400
                        hover:shadow-[0_18px_50px_rgba(37,99,235,0.5)]
                      "
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
                            className="
                              ml-2
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
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
                        className="
                          mt-3
                          overflow-hidden
                          rounded-xl
                          border
                          border-blue-400/[0.10]
                          bg-blue-500/[0.07]
                          p-3
                        "
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              bg-gradient-to-br
                              from-blue-300
                              to-blue-600
                              text-white
                              shadow-[0_0_20px_rgba(37,99,235,0.35)]
                            "
                          >
                            <FiCheck size={13} />
                          </div>

                          <div>
                            <p className="text-xs font-medium text-blue-100">
                              Project brief received.
                            </p>

                            <p className="mt-0.5 text-[10px] text-blue-100/35">
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
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <FAQ />
    </>
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
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-blue-400/[0.08]
          bg-blue-500/[0.07]
          text-blue-300
          shadow-[0_0_20px_rgba(37,99,235,0.08)]
        "
      >
        {icon}
      </motion.div>

      <span className="min-w-0 flex-1">
        <span
          className="
            block
            font-mono
            text-[7px]
            uppercase
            tracking-[0.15em]
            text-blue-300/35
          "
        >
          {label}
        </span>

        <span
          className="
            mt-0.5
            block
            truncate
            text-xs
            text-blue-100/75
            transition-colors
            group-hover:text-blue-200
          "
        >
          {value}
        </span>
      </span>

      {href && (
        <FiArrowUpRight
          size={14}
          className="
            text-blue-400/30
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-cyan-300
          "
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
        className="
          group
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-blue-400/[0.05]
          bg-blue-500/[0.035]
          p-3
          transition-all
          duration-300
          hover:border-blue-400/[0.12]
          hover:bg-blue-500/[0.075]
          hover:shadow-[0_10px_30px_rgba(37,99,235,0.08)]
        "
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
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-blue-400/[0.05]
        bg-blue-500/[0.035]
        p-3
        transition-all
        duration-300
        hover:border-blue-400/[0.12]
        hover:bg-blue-500/[0.075]
      "
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
  number,
  type = 'text',
  placeholder,
  value,
  onChange,
  active,
  onFocus,
  onBlur,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-1.5
          flex
          items-center
          justify-between
          font-mono
          text-[8px]
          uppercase
          tracking-[0.16em]
          text-blue-300/45
        "
      >
        <span>{label}</span>
        <span className="text-blue-300/60">{number}</span>
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
          className="
            pointer-events-none
            absolute
            -inset-2
            rounded-3xl
            bg-blue-500/[0.10]
            blur-xl
          "
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
          className="
            relative
            w-full
            rounded-xl
            border
            border-blue-400/[0.08]
            bg-blue-400/[0.045]
            px-4
            py-2.5
            text-xs
            text-blue-50
            outline-none
            placeholder:text-blue-100/20
            transition-all
            duration-300
            focus:border-blue-400/[0.22]
            focus:bg-blue-400/[0.08]
            focus:shadow-[0_0_30px_rgba(37,99,235,0.08)]
          "
        />

        <motion.span
          animate={{
            scaleX: active ? 1 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            bottom-0
            left-4
            right-4
            h-[2px]
            origin-left
            rounded-full
            bg-gradient-to-r
            from-blue-500
            via-blue-400
            to-cyan-400
          "
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
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-blue-300
          "
        >
          <FiArrowRight size={13} />
        </motion.div>
      </div>
    </div>
  )
}