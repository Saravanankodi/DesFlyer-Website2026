import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { FiArrowUpRight, FiSend } from 'react-icons/fi'

const CAPABILITIES = [
  'Web Development',
  'Mobile Apps',
  'Product Design',
  'Branding',
  'Enterprise Software',
  'UI / UX',
]

const PARTICLES = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  x: (i * 37) % 100,
  y: (i * 61) % 100,
  size: 1 + (i % 3),
  delay: (i % 8) * 0.35,
  duration: 4 + (i % 5),
}))

/* =========================================================
   PARTICLE FIELD
========================================================= */

function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[#65D9FF]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: '0 0 12px rgba(101,217,255,0.7)',
          }}
          animate={{
            opacity: [0.08, 0.8, 0.08],
            y: [0, -18, 0],
            x: [
              0,
              particle.id % 2 === 0 ? 10 : -10,
              0,
            ],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* =========================================================
   FLOATING ENERGY SYSTEM
========================================================= */

function OrbitalSystem() {
  const particles = Array.from({ length: 28 }, (_, i) => i)

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((i) => {
        const left = (i * 37) % 100
        const top = (i * 61) % 100

        const size =
          i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1

        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background:
                i % 4 === 0 ? '#A855F7' : '#65D9FF',
              boxShadow:
                i % 4 === 0
                  ? '0 0 14px rgba(168,85,247,.8)'
                  : '0 0 14px rgba(101,217,255,.8)',
            }}
            animate={{
              x: [
                0,
                (i % 2 === 0 ? 1 : -1) *
                  (15 + (i % 4) * 10),
                0,
              ],
              y: [
                0,
                -(20 + (i % 5) * 8),
                0,
              ],
              opacity: [0.05, 0.8, 0.05],
              scale: [0.6, 1.5, 0.6],
            }}
            transition={{
              duration: 4 + (i % 6),
              delay: i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      })}

      {/* LEFT GLOW */}
      <motion.div
        className="absolute left-[12%] top-[35%] h-2 w-2 rounded-full bg-[#65D9FF]"
        animate={{
          x: [0, 35, 0, -20, 0],
          y: [0, -25, 15, 5, 0],
          scale: [0.6, 1.4, 0.8, 1.2, 0.6],
          opacity: [0.2, 1, 0.3, 0.8, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow:
            '0 0 15px #65D9FF, 0 0 35px rgba(101,217,255,.6)',
        }}
      />

      {/* RIGHT GLOW */}
      <motion.div
        className="absolute right-[13%] top-[28%] h-2 w-2 rounded-full bg-[#A855F7]"
        animate={{
          x: [0, -30, 0, 20, 0],
          y: [0, 25, -15, 5, 0],
          scale: [0.5, 1.5, 0.7, 1.3, 0.5],
          opacity: [0.2, 1, 0.3, 0.8, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          boxShadow:
            '0 0 15px #A855F7, 0 0 35px rgba(168,85,247,.6)',
        }}
      />

      {/* CENTER AURA */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[220px] w-[220px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [0.04, 0.15, 0.04],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(101,217,255,.25), rgba(168,85,247,.08), transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* RIPPLE */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[120px] w-[120px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-[#65D9FF]/20
        "
        animate={{
          scale: [0.7, 2.8],
          opacity: [0.45, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />

      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[120px] w-[120px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-[#A855F7]/15
        "
        animate={{
          scale: [0.7, 3.5],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 2,
        }}
      />

      {/* CENTER CORE */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-3 w-3
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#65D9FF]
        "
        animate={{
          scale: [0.7, 1.5, 0.7],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow:
            '0 0 15px #65D9FF, 0 0 45px rgba(101,217,255,.7)',
        }}
      />
    </div>
  )
}

/* =========================================================
   BACKGROUND GRID
========================================================= */

function BackgroundGrid() {
  return (
    <>
      <motion.div
        className="
          pointer-events-none absolute inset-[-60px]
          opacity-[0.07]
        "
        animate={{
          x: [0, 55, 0],
          y: [0, 55, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage:
            'linear-gradient(rgba(101,217,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(101,217,255,.5) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
          maskImage:
            'radial-gradient(circle at center, black, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black, transparent 72%)',
        }}
      />

      <motion.div
        className="
          pointer-events-none absolute
          -left-[15%] -top-[25%]
          h-[520px] w-[520px]
          rounded-full
        "
        animate={{
          x: [0, 100, -40, 0],
          y: [0, 70, 120, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.18, 0.3, 0.2, 0.18],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(37,169,255,.32), rgba(37,169,255,.08), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        className="
          pointer-events-none absolute
          -bottom-[25%] -right-[15%]
          h-[520px] w-[520px]
          rounded-full
        "
        animate={{
          x: [0, -100, 40, 0],
          y: [0, -60, -120, 0],
          scale: [1, 0.85, 1.15, 1],
          opacity: [0.14, 0.25, 0.18, 0.14],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,.30), rgba(168,85,247,.07), transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <motion.div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-[420px] w-[720px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
        animate={{
          rotate: [0, 8, -8, 0],
          scale: [1, 1.08, 0.94, 1],
          opacity: [0.12, 0.2, 0.14, 0.12],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(ellipse, rgba(101,217,255,.16), rgba(168,85,247,.08), transparent 68%)',
          filter: 'blur(55px)',
        }}
      />

      <motion.div
        className="
          pointer-events-none absolute
          bottom-0 top-0 w-px
        "
        animate={{
          left: ['5%', '95%', '5%'],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(101,217,255,.45), transparent)',
          boxShadow: '0 0 18px rgba(101,217,255,.3)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, transparent 20%, rgba(6,11,18,.25) 70%, rgba(6,11,18,.75) 100%)',
        }}
      />
    </>
  )
}

/* =========================================================
   FLOATING CHIP
========================================================= */

/* =========================================================
   FLOATING SIGNAL LABEL
========================================================= */

function FloatingChip({
  children,
  className = '',
  delay = 0,
  index = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 14,
        scale: 0.92,
        filter: 'blur(5px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      animate={{
        y: [0, index % 2 === 0 ? -7 : 7, 0],
        x: [0, index % 2 === 0 ? 4 : -4, 0],
      }}
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      className={`
        absolute
        hidden
        sm:flex
        items-center
        gap-2.5
        rounded-xl
        border
        border-white/[0.10]
        bg-[#07111B]/75
        px-3
        py-2
        backdrop-blur-xl
        shadow-[0_12px_40px_rgba(0,0,0,.28)]
        ${className}
      `}
    >
      {/* SIGNAL NODE */}

      <span className="relative flex h-4 w-4 items-center justify-center">
        <motion.span
          className="
            absolute
            h-2
            w-2
            rounded-full
            bg-[#65D9FF]
          "
          animate={{
            scale: [0.7, 1.3, 0.7],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: delay * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow:
              '0 0 8px #65D9FF, 0 0 18px rgba(101,217,255,.6)',
          }}
        />

        <motion.span
          className="
            absolute
            h-4
            w-4
            rounded-full
            border
            border-[#65D9FF]/20
          "
          animate={{
            scale: [0.8, 1.7],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      </span>

      {/* LABEL */}

      <span className="
        whitespace-nowrap
        font-mono
        text-[8px]
        font-medium
        uppercase
        tracking-[0.18em]
        text-white/55
      ">
        {children}
      </span>

      {/* SMALL STATUS LINE */}

      <span className="h-px w-3 bg-gradient-to-r from-[#65D9FF]/60 to-transparent" />

      <span className="font-mono text-[6px] text-[#65D9FF]/50">
        0{index + 1}
      </span>
    </motion.div>
  )
}

/* =========================================================
   CAPABILITY STRIP
========================================================= */

function CapabilityStrip() {
  return (
    <div className="relative mt-5 overflow-hidden border-y border-white/[0.07] py-2.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#060B12] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#060B12] to-transparent" />

      <motion.div
        className="flex w-max gap-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...CAPABILITIES, ...CAPABILITIES].map(
          (item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <span className="h-1 w-1 rounded-full bg-[#65D9FF]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/40">
                {item}
              </span>
            </div>
          )
        )}
      </motion.div>
    </div>
  )
}

/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  inputMode,
  required = true,
}) {
  return (
    <div className="group">
      <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-white">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode={inputMode}
        required={required}
        className="
          w-full rounded-xl
          border border-white/10
          bg-white/[0.035]
          px-4 py-3
          text-sm text-white
          outline-none
          placeholder:text-white/20
          transition-all duration-300
          focus:border-[#65D9FF]/50
          focus:bg-[#65D9FF]/[0.04]
          focus:shadow-[0_0_30px_rgba(101,217,255,.07)]
        "
      />
    </div>
  )
}

/* =========================================================
   CONTACT FORM
========================================================= */

function ContactForm() {
  const initialForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    details: '',
  }

  const [form, setForm] = useState(initialForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    let cleanValue = value

    if (name === 'name') {
      cleanValue = value.replace(/[^a-zA-Z\s]/g, '')
    }

    if (name === 'phone') {
      cleanValue = value.replace(/\D/g, '')
    }

    setForm((previous) => ({
      ...previous,
      [name]: cleanValue,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSending(true)
    setSent(false)

    const submittedDetails = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      details: form.details.trim(),
    }

    console.log('PROJECT INQUIRY:', submittedDetails)

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      )

      setForm(initialForm)

      setSent(true)

      setTimeout(() => {
        setSent(false)
      }, 3000)
    } catch (error) {
      console.error('Failed to send inquiry:', error)
    } finally {
      setSending(false)
    }
  }

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
        margin: '-80px',
      }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative h-full
        overflow-hidden
        rounded-[1.75rem]
        border border-white/[0.08]
        bg-[#060B12]/90
        p-5
        shadow-[0_30px_100px_rgba(0,0,0,.35)]
        backdrop-blur-xl
        sm:p-6
        lg:p-7
      "
    >
      <div
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-64 w-64
          rounded-full
        "
        style={{
          background:
            'radial-gradient(circle, rgba(101,217,255,.13), transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex h-full flex-col"
      >
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#65D9FF] shadow-[0_0_12px_#65D9FF]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#65D9FF]/70">
              Start a conversation
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[28px]">
            Tell us about
            <span className="ml-2 bg-gradient-to-r from-[#65D9FF] to-[#3d49f7] bg-clip-text text-transparent">
              your project.
            </span>
          </h3>

          <p className="mt-2 max-w-md text-xs leading-5 text-white/40">
            Have an idea in mind? Send us the details and
            we’ll get back to you.
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-between space-y-3.5">
          <div className="grid gap-3.5 sm:grid-cols-2">
            <InputField
              name="name"
              label="Your Name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />

            <InputField
              name="email"
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <InputField
              name="phone"
              label="Phone Number"
              type="tel"
              inputMode="numeric"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
            />

            <InputField
              name="company"
              label="Company / Organization"
              placeholder="Your company"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Project Details
            </label>

            <textarea
              name="details"
              rows={3}
              value={form.details}
              onChange={handleChange}
              required
              placeholder="Tell us what you're building..."
              className="
                w-full resize-none rounded-xl
                border border-white/10
                bg-white/[0.035]
                px-4 py-3
                text-sm text-white
                outline-none
                placeholder:text-white/20
                transition-all duration-300
                focus:border-[#65D9FF]/50
                focus:bg-[#65D9FF]/[0.04]
                focus:shadow-[0_0_30px_rgba(101,217,255,.07)]
              "
            />
          </div>

          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{
              scale: sending ? 1 : 1.02,
            }}
            whileTap={{
              scale: sending ? 1 : 0.97,
            }}
            className="
              group relative flex w-full
              items-center justify-center gap-3
              overflow-hidden rounded-xl
              border border-[#06b9f4]/50
              bg-[#3063da]/20
              px-5 py-3
              text-xs font-semibold
              text-[#f9fbfc]
              shadow-[0_0_30px_rgba(101,217,255,.12)]
              transition-all duration-300
              hover:shadow-[0_0_45px_rgba(101,217,255,.3)]
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            <span className="relative z-10">
              {sending
                ? 'Sending...'
                : sent
                  ? 'Project inquiry sent'
                  : 'Send project inquiry'}
            </span>

            <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#041018]/10">
              {sending ? '...' : <FiSend />}
            </span>

            <span className="absolute inset-0 w-full -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
          </motion.button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full shadow-[0_0_10px_rgba(74,222,128,.7)] ${
              sent ? 'bg-blue-400' : 'bg-blue-400'
            }`}
          />

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
            {sent
              ? 'Your inquiry has been received'
              : 'Your information stays private'}
          </span>
        </div>
      </form>
    </motion.div>
  )
}

/* =========================================================
   CTA BAND
========================================================= */

export default function CTABand() {
  const sectionRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  })

  const glowX = useTransform(
    smoothX,
    [-1, 1],
    ['35%', '65%']
  )

  const glowY = useTransform(
    smoothY,
    [-1, 1],
    ['35%', '65%']
  )

  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      const rect =
        sectionRef.current?.getBoundingClientRect()

      if (!rect) return

      const x =
        (event.clientX - rect.left) / rect.width

      const y =
        (event.clientY - rect.top) / rect.height

      mouseX.set((x - 0.5) * 2)
      mouseY.set((y - 0.5) * 2)
    }

    const element = sectionRef.current

    element?.addEventListener(
      'mousemove',
      handleMove
    )

    return () => {
      element?.removeEventListener(
        'mousemove',
        handleMove
      )
    }
  }, [mouseX, mouseY])

  return (
    <section
      className="
        px-3 py-2
        sm:px-5 sm:py-4
        lg:h-[calc(100vh-80px)]
        lg:min-h-[680px]
        lg:px-8 lg:py-5
        mb-10
      "
    >
      <div
        className="
          mx-auto grid h-full max-w-[1500px]
          items-stretch
          gap-3
          lg:grid-cols-[1fr_0.85fr]
          lg:gap-5
        "
      >
        {/* =================================================
            LEFT — CTA CARD
        ================================================= */}

        <motion.div
          ref={sectionRef}
          initial={{
            opacity: 0,
            x: -40,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
         className="
  group relative
  min-h-[380px]
  overflow-hidden
  rounded-[1.5rem]
  border border-white/[0.08]
  bg-[#060B12]
  px-4 pt-5
  shadow-[0_30px_120px_rgba(0,0,0,.45)]
  sm:min-h-[500px]
  sm:rounded-[1.75rem]
  sm:px-7 sm:pt-8
  lg:min-h-0
  lg:px-9 lg:pt-8
"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* MOUSE GLOW */}
          <motion.div
            className="
              pointer-events-none absolute
              h-[300px] w-[300px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              blur-[80px]
              sm:h-[400px] sm:w-[400px]
              sm:blur-[100px]
            "
            style={{
              left: glowX,
              top: glowY,
              background:
                'radial-gradient(circle, rgba(37,169,255,.18), rgba(111,64,255,.08), transparent 65%)',
            }}
          />

          <BackgroundGrid />
          <ParticleField />
          <OrbitalSystem />

          {/* CONTENT */}
          <div
            className="
              relative z-20
              mx-auto max-w-2xl
              text-center
            "
          >
            {/* EYEBROW */}

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
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mx-auto
                mb-2
                inline-flex
                items-center gap-2
                rounded-full
                border border-[#65D9FF]/20
                bg-[#65D9FF]/[0.05]
                px-2.5 py-1
                backdrop-blur-md
                sm:mb-4
                sm:px-3 sm:py-1.5
              "
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[#65D9FF]"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                style={{
                  boxShadow: '0 0 15px #65D9FF',
                }}
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-[#65D9FF]/70
                  sm:text-[8px]
                  sm:tracking-[0.25em]
                "
              >
                Let's build something remarkable
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-2
                text-[clamp(2.6rem,13vw,4rem)]
                font-semibold
                leading-[0.84]
                tracking-[-0.06em]
                text-white
                sm:mt-6
                sm:text-[clamp(2rem,9vw,3.5rem)]
                sm:leading-[0.92]
              "
            >
              Your idea.
              <br />

              <motion.span
                className="
                  relative inline-block
                  bg-gradient-to-r
                  from-[#1e03eb]
                  via-white
                  to-[#0059ff]
                  bg-clip-text
                  text-transparent
                "
                animate={{
                  backgroundPosition: [
                    '0% 50%',
                    '100% 50%',
                    '0% 50%',
                  ],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Our craft.
              </motion.span>
            </motion.h2>

            {/* DESCRIPTION */}

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
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-3
                max-w-lg
                text-[11px]
                leading-[1.35rem]
                text-white/45
                sm:mt-8
                sm:text-sm
                sm:leading-5
              "
            >
              Bring the idea, the problem or the rough concept.
              <br className="hidden sm:block" />
              We turn it into a digital experience built to move forward.
            </motion.p>

            {/* CTA */}

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
                delay: 0.55,
                duration: 0.7,
              }}
              className="
                mt-4
                flex justify-center
                sm:mt-10
              "
            >
              <motion.div
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="relative"
              >
                <motion.div
                  className="
                    absolute
                    -inset-2
                    rounded-full
                    bg-[#65D9FF]/20
                    blur-xl
                    sm:-inset-3
                    sm:blur-2xl
                  "
                  animate={{
                    opacity: hovering
                      ? [0.3, 0.7, 0.3]
                      : 0.2,
                    scale: hovering
                      ? [0.9, 1.1, 0.9]
                      : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div
                  className="
                    group relative
                    flex items-center
                    gap-2
                    overflow-hidden
                    rounded-lg
                    border border-[#65D9FF]/60
                    bg-[#3471eb]/20
                    px-4 py-2
                    text-[10px]
                    font-semibold
                    text-[#f2f4f5]
                    shadow-[0_0_25px_rgba(101,217,255,.18)]
                    sm:rounded-xl
                    sm:px-6 sm:py-3
                    sm:text-xs
                    sm:shadow-[0_0_35px_rgba(101,217,255,.2)]
                  "
                >
                  {/* SPARKLE */}

                  <motion.span
                    className="
                      pointer-events-none
                      absolute
                      left-[-35%]
                      top-[-40%]
                      h-[180%]
                      w-[2px]
                      rotate-[25deg]
                      bg-white/90
                      blur-[0.5px]
                      shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_18px_rgba(101,217,255,0.8)]
                    "
                    animate={{
                      left: ['-35%', '135%'],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 2,
                      repeat: Infinity,
                      repeatDelay: 1.35,
                      ease: 'easeInOut',
                    }}
                  />

                  <motion.span
                    className="
                      pointer-events-none
                      absolute
                      left-[-45%]
                      top-[-60%]
                      h-[220%]
                      w-[18px]
                      rotate-[25deg]
                      bg-white/20
                      blur-md
                    "
                    animate={{
                      left: ['-45%', '145%'],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 2,
                      repeat: Infinity,
                      repeatDelay: 1.35,
                      ease: 'easeInOut',
                    }}
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    Start a project
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* FLOATING CHIPS */}

          <FloatingChip
            className="left-[7%] top-[27%] rotate-[-5deg]"
            delay={0.4}
          >
            Digital Products
          </FloatingChip>

          <FloatingChip
            className="right-[7%] top-[31%] rotate-[5deg]"
            delay={0.55}
          >
            Creative Systems
          </FloatingChip>

          <FloatingChip
            className="left-[9%] top-[60%] rotate-[4deg]"
            delay={0.7}
          >
            Scalable Tech
          </FloatingChip>

          <FloatingChip
            className="right-[6%] top-[60%] rotate-[-4deg]"
            delay={0.85}
          >
            Human Experience
          </FloatingChip>

          <FloatingChip
            className="right-[39%] top-[70%] rotate-[-4deg]"
            delay={0.85}
          >
            Trustable Products
          </FloatingChip>

          {/* CAPABILITIES */}

          <motion.div
            className="
              absolute
              bottom-2
              left-3 right-3
              z-20
              mx-auto
              max-w-4xl
              sm:bottom-5
              sm:left-7 sm:right-7
              lg:left-9 lg:right-9
            "
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
              delay: 0.7,
              duration: 0.7,
            }}
          >
            <div className="flex items-center justify-center gap-2 pb-0.5 sm:gap-3 sm:pb-1">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#65D9FF]/40 sm:w-10" />

              <span className="font-mono text-[6px] uppercase tracking-[0.25em] text-white/25 sm:text-[7px] sm:tracking-[0.3em]">
                Capabilities
              </span>

              <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#65D9FF]/40 sm:w-10" />
            </div>

            <div className="scale-[0.9] sm:scale-100">
              <CapabilityStrip />
            </div>
          </motion.div>

          <div
            className="
              pointer-events-none
              absolute bottom-0 left-0 right-0
              h-16
              bg-gradient-to-t
              from-[#060B12]
              via-[#060B12]/70
              to-transparent
              sm:h-24
            "
          />
        </motion.div>

        {/* =================================================
            RIGHT — CONTACT FORM
        ================================================= */}

        <ContactForm />
      </div>
    </section>
  )
}