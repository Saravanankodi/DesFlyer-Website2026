import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import {
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiStar,
} from 'react-icons/fi'

import { BsWhatsapp } from 'react-icons/bs'

import { siteConfig } from '../../data/siteConfig'
import { footerLinks } from '../../data/nav'

const socialIcons = {
  LinkedIn: FiLinkedin,
  WhatsApp: BsWhatsapp,
  Instagram: FiInstagram,
  Facebook: FiFacebook,
  X: FiTwitter,
}

/* =========================================================
   3D TILT CARD
========================================================= */

function TiltCard({ children, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(y, [-100, 100], [5, -5]),
    {
      stiffness: 180,
      damping: 20,
    }
  )

  const rotateY = useSpring(
    useTransform(x, [-100, 100], [-5, 5]),
    {
      stiffness: 180,
      damping: 20,
    }
  )

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]">

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top-right glow */}

        <motion.div
          animate={{
            x: [0, 35, -20, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -right-32
            -top-32
            h-96
            w-96
            rounded-full
            bg-signal/[0.06]
            blur-3xl
          "
        />

        {/* Bottom-left glow */}

        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 0.94, 1.06, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -bottom-40
            -left-32
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-signal/[0.035]
            blur-3xl
          "
        />

        {/* Perspective grid */}

        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[360px]
            w-[900px]
            -translate-x-1/2
            opacity-[0.035]
            [background-image:linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)]
            [background-size:45px_45px]
            [mask-image:linear-gradient(to_top,black,transparent)]
            [transform:perspective(500px)_rotateX(55deg)]
          "
        />

        {/* Floating particles */}

        {[...Array(12)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -25 - index * 2, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 3 + index * 0.35,
              repeat: Infinity,
              delay: index * 0.25,
              ease: 'easeInOut',
            }}
            className="
              absolute
              h-1
              w-1
              rounded-full
              bg-signal
            "
            style={{
              left: `${8 + ((index * 17) % 85)}%`,
              top: `${18 + ((index * 23) % 68)}%`,
            }}
          />
        ))}

      </div>

      {/* =====================================================
          FOOTER INNER
      ====================================================== */}

      <div className="relative mx-auto max-w-shell px-4 py-7 sm:px-6 sm:py-10 lg:px-10 lg:py-12">

        {/* =================================================
            TOP SYSTEM BAR
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-5 flex items-center gap-3 sm:mb-10 sm:gap-4"
        >

          <motion.span
            animate={{
              scaleX: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-px w-7 origin-left bg-signal sm:w-10"
          />

          <span className="
            font-mono
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-signal
            sm:text-[9px]
            sm:tracking-[0.25em]
          ">
            DesFlyer
          </span>

          <div
            className="
              relative
              h-px
              flex-1
              overflow-hidden
              bg-[var(--border)]/60
            "
          >
            <motion.span
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
                absolute
                inset-y-0
                w-24
                bg-gradient-to-r
                from-transparent
                via-signal/50
                to-transparent
                sm:w-32
              "
            />
          </div>

          <span
            className="
              hidden
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[var(--fg)]/25
              sm:block
            "
          >
            Digital Studio
          </span>

        </motion.div>

        {/* =================================================
            MAIN GRID

            MOBILE:
            1. CONTACT
            2. BRAND
            3. EXPLORE
            4. SERVICES

            DESKTOP:
            1. BRAND
            2. CONTACT
            3. EXPLORE
            4. SERVICES
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.9fr]
            lg:gap-7
          "
        >

          {/* =================================================
              CONTACT
              MOBILE FIRST
          ================================================== */}

          <motion.div
            className="order-1 lg:order-2"
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
              delay: 0.1,
              duration: 0.7,
            }}
          >

            <TiltCard
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]/60
                bg-[var(--fg)]/[0.012]
                p-4
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-signal/25
                hover:bg-signal/[0.018]
                sm:rounded-3xl
                sm:p-6
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-24
                  w-24
                  rounded-full
                  bg-signal/[0.05]
                  blur-2xl
                  sm:h-28
                  sm:w-28
                "
              />

              <div className="relative z-10">

                {/* Header */}

                <div className="mb-4 flex items-center gap-2 sm:mb-7">

                  <span className="h-px w-5 bg-signal" />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-signal
                      sm:text-[9px]
                      sm:tracking-[0.2em]
                    "
                  >
                    Contact
                  </span>

                </div>

                <div className="space-y-3 sm:space-y-5">

                  {/* Email */}

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group/item block"
                  >

                    <div className="mb-1 flex items-center gap-2 sm:mb-1.5">

                      <FiMail
                        size={11}
                        className="
                          text-[var(--fg)]/25
                          transition-all
                          duration-300
                          group-hover/item:scale-110
                          group-hover/item:text-signal
                          sm:h-3
                          sm:w-3
                        "
                      />

                      <span
                        className="
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-[0.1em]
                          text-[var(--fg)]/25
                          sm:text-[8px]
                          sm:tracking-[0.12em]
                        "
                      >
                        Email
                      </span>

                    </div>

                    <span
                      className="
                        block
                        break-all
                        text-[11px]
                        leading-4
                        text-[var(--fg)]/60
                        transition-colors
                        group-hover/item:text-signal
                        sm:text-xs
                        sm:leading-5
                      "
                    >
                      {siteConfig.email}
                    </span>

                  </a>

                  {/* Phone */}

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="group/item block"
                  >

                    <div className="mb-1 flex items-center gap-2 sm:mb-1.5">

                      <FiPhone
                        size={11}
                        className="
                          text-[var(--fg)]/25
                          transition-all
                          duration-300
                          group-hover/item:scale-110
                          group-hover/item:text-signal
                          sm:h-3
                          sm:w-3
                        "
                      />

                      <span
                        className="
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-[0.1em]
                          text-[var(--fg)]/25
                          sm:text-[8px]
                          sm:tracking-[0.12em]
                        "
                      >
                        Phone
                      </span>

                    </div>

                    <span
                      className="
                        text-[11px]
                        text-[var(--fg)]/60
                        transition-colors
                        group-hover/item:text-signal
                        sm:text-xs
                      "
                    >
                      {siteConfig.phone}
                    </span>

                  </a>

                  {/* Location */}

                  <div>

                    <div className="mb-1 flex items-center gap-2 sm:mb-1.5">

                      <FiMapPin
                        size={11}
                        className="text-signal/60 sm:h-3 sm:w-3"
                      />

                      <span
                        className="
                          font-mono
                          text-[7px]
                          uppercase
                          tracking-[0.1em]
                          text-[var(--fg)]/25
                          sm:text-[8px]
                          sm:tracking-[0.12em]
                        "
                      >
                        Location
                      </span>

                    </div>

                    <p
                      className="
                        text-[11px]
                        leading-4
                        text-[var(--fg)]/50
                        sm:text-xs
                        sm:leading-5
                      "
                    >
                      {siteConfig.location}
                    </p>

                  </div>

                </div>

              </div>

              <span
                className="
                  absolute
                  bottom-3
                  right-4
                  font-mono
                  text-[7px]
                  text-[var(--fg)]/10
                  sm:bottom-5
                  sm:right-5
                  sm:text-[8px]
                "
              >
                02
              </span>

            </TiltCard>

          </motion.div>

          {/* =================================================
              BRAND
              MOBILE SECOND
          ================================================== */}

          <motion.div
            className="order-2 lg:order-1"
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
              duration: 0.7,
            }}
          >

            <TiltCard
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]/70
                bg-[var(--fg)]/[0.018]
                p-4
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                transition-colors
                duration-500
                hover:border-signal/30
                sm:rounded-3xl
                sm:p-7
              "
            >

              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-36
                  w-36
                  rounded-full
                  bg-signal/[0.07]
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:bg-signal/[0.13]
                  sm:-right-20
                  sm:-top-20
                  sm:h-48
                  sm:w-48
                "
              />

              {/* Decorative rings */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  border
                  border-signal/10
                  sm:h-40
                  sm:w-40
                "
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-5
                  top-0
                  h-24
                  w-24
                  rounded-full
                  border
                  border-dashed
                  border-signal/10
                  sm:h-28
                  sm:w-28
                "
              />

              <div className="relative z-10">

                {/* Logo */}

                <Link
                  to="/"
                  className="group/logo inline-block"
                >

                  <motion.img
                    whileHover={{
                      scale: 1.04,
                      rotateY: 8,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 15,
                    }}
                    src="/images/portfolio/desflyer nlogo.png"
                    alt="DesFlyer"
                    className="
                      w-32
                      object-contain
                      drop-shadow-[0_12px_25px_rgba(0,0,0,0.15)]
                      sm:w-36
                    "
                  />

                </Link>

                {/* Description */}

                <p
                  className="
                    mt-3
                    max-w-sm
                    text-xs
                    leading-5
                    text-[var(--fg)]/45
                    sm:mt-5
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  Building thoughtful digital experiences,
                  interfaces and products that move brands
                  forward.
                </p>

                {/* Availability */}

                <motion.div
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-signal/15
                    bg-signal/[0.025]
                    px-2.5
                    py-1.5
                    shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    sm:mt-6
                    sm:gap-3
                    sm:px-3
                    sm:py-2
                  "
                >

                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">

                    <span
                      className="
                        absolute
                        inset-0
                        animate-ping
                        rounded-full
                        bg-signal
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-signal
                        shadow-[0_0_12px_var(--signal)]
                        sm:h-2
                        sm:w-2
                      "
                    />

                  </span>

                  <span
                    className="
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.12em]
                      text-[var(--fg)]/40
                      sm:text-[8px]
                      sm:tracking-[0.16em]
                    "
                  >
                    Available for projects
                  </span>

                </motion.div>

                {/* Follow Us */}

                <div className="mt-4 sm:mt-7">

                  <div className="mb-2 flex items-center gap-2 sm:mb-3">

                    <span className="h-px w-5 bg-signal" />

                    <span
                      className="
                        font-mono
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-signal
                        sm:text-[9px]
                        sm:tracking-[0.2em]
                      "
                    >
                      Follow Us
                    </span>

                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">

                    {siteConfig.socials.map((social) => {

                      const Icon = socialIcons[social.name]

                      if (!Icon || !social.href) return null

                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit DesFlyer on ${social.name}`}
                          whileHover={{
                            y: -5,
                            rotateX: 12,
                            rotateY: -12,
                            scale: 1.08,
                          }}
                          whileTap={{
                            scale: 0.94,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                          }}
                          className="
                            group
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-[var(--border)]
                            bg-[var(--fg)]/[0.015]
                            text-[var(--fg)]/40
                            shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                            transition-colors
                            duration-300
                            hover:border-signal/50
                            hover:bg-signal/[0.06]
                            hover:text-signal
                            sm:h-9
                            sm:w-9
                            sm:rounded-xl
                          "
                        >

                          <Icon
                            size={11}
                            className="
                              transition-transform
                              duration-300
                              group-hover:scale-110
                              sm:h-3.5
                              sm:w-3.5
                            "
                          />

                        </motion.a>
                      )
                    })}

                  </div>

                </div>

              </div>

              <div
                className="
                  absolute
                  bottom-3
                  right-4
                  font-mono
                  text-[7px]
                  tracking-[0.16em]
                  text-[var(--fg)]/10
                  sm:bottom-5
                  sm:right-6
                  sm:text-[8px]
                  sm:tracking-[0.2em]
                "
              >
                01 / STUDIO
              </div>

            </TiltCard>

          </motion.div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <motion.div
            className="order-3 lg:order-3"
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
              delay: 0.2,
              duration: 0.7,
            }}
          >

            <TiltCard
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]/60
                bg-[var(--fg)]/[0.012]
                p-4
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-signal/25
                sm:rounded-3xl
                sm:p-6
              "
            >

              <div className="relative z-10">

                <div className="mb-4 flex items-center gap-2 sm:mb-7">

                  <span className="h-px w-5 bg-signal" />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-signal
                      sm:text-[9px]
                      sm:tracking-[0.2em]
                    "
                  >
                    Explore
                  </span>

                </div>

                <div className="space-y-1 sm:space-y-2">

                  {footerLinks.company.map((link, index) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="
                        group/item
                        relative
                        flex
                        items-center
                        gap-2
                        overflow-hidden
                        rounded-lg
                        border
                        border-transparent
                        px-2
                        py-1.5
                        text-[11px]
                        text-[var(--fg)]/50
                        transition-all
                        duration-300
                        hover:border-signal/10
                        hover:bg-signal/[0.04]
                        hover:text-[var(--fg)]
                        sm:gap-3
                        sm:rounded-xl
                        sm:px-3
                        sm:py-2
                        sm:text-xs
                      "
                    >

                      <span
                        className="
                          font-mono
                          text-[7px]
                          text-[var(--fg)]/15
                          transition-colors
                          group-hover/item:text-signal
                          sm:text-[8px]
                        "
                      >
                        0{index + 1}
                      </span>

                      <span>
                        {link.label}
                      </span>

                      <FiArrowUpRight
                        size={10}
                        className="
                          ml-auto
                          -translate-x-2
                          opacity-0
                          text-signal
                          transition-all
                          duration-300
                          group-hover/item:translate-x-0
                          group-hover/item:opacity-100
                          sm:h-[11px]
                          sm:w-[11px]
                        "
                      />

                    </Link>
                  ))}

                </div>

              </div>

              <span
                className="
                  absolute
                  bottom-3
                  right-4
                  font-mono
                  text-[7px]
                  text-[var(--fg)]/10
                  sm:bottom-5
                  sm:right-5
                  sm:text-[8px]
                "
              >
                03
              </span>

            </TiltCard>

          </motion.div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <motion.div
            className="order-4 lg:order-4"
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
              delay: 0.3,
              duration: 0.7,
            }}
          >

            <TiltCard
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]/60
                bg-[var(--fg)]/[0.012]
                p-4
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-signal/25
                sm:rounded-3xl
                sm:p-6
              "
            >

              <div className="relative z-10">

                <div className="mb-4 flex items-center gap-2 sm:mb-7">

                  <span className="h-px w-5 bg-signal" />

                  <span
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-signal
                      sm:text-[9px]
                      sm:tracking-[0.2em]
                    "
                  >
                    Services
                  </span>

                </div>

                <div className="space-y-1 sm:space-y-2">

                  {footerLinks.services.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="
                        group/item
                        relative
                        flex
                        items-center
                        gap-2
                        overflow-hidden
                        rounded-lg
                        border
                        border-transparent
                        px-2
                        py-1.5
                        text-[11px]
                        text-[var(--fg)]/50
                        transition-all
                        duration-300
                        hover:border-signal/10
                        hover:bg-signal/[0.04]
                        hover:text-[var(--fg)]
                        sm:gap-3
                        sm:rounded-xl
                        sm:px-3
                        sm:py-2
                        sm:text-xs
                      "
                    >

                      <motion.span
                        whileHover={{
                          scale: 1.5,
                        }}
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[var(--fg)]/15
                          transition-colors
                          group-hover/item:bg-signal
                          group-hover/item:shadow-[0_0_10px_var(--signal)]
                        "
                      />

                      <span>
                        {link.label}
                      </span>

                      <FiArrowUpRight
                        size={10}
                        className="
                          ml-auto
                          -translate-x-2
                          opacity-0
                          text-signal
                          transition-all
                          duration-300
                          group-hover/item:translate-x-0
                          group-hover/item:opacity-100
                          sm:h-[11px]
                          sm:w-[11px]
                        "
                      />

                    </Link>
                  ))}

                </div>

              </div>

              <span
                className="
                  absolute
                  bottom-3
                  right-4
                  font-mono
                  text-[7px]
                  text-[var(--fg)]/10
                  sm:bottom-5
                  sm:right-5
                  sm:text-[8px]
                "
              >
                04
              </span>

            </TiltCard>

          </motion.div>

        </div>

        {/* =====================================================
            CTA / SIGNAL BAR
        ====================================================== */}

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
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="
            relative
            mt-3
            overflow-hidden
            rounded-xl
            border
            border-signal/15
            bg-signal/[0.025]
            px-3
            py-3
            sm:mt-6
            sm:rounded-2xl
            sm:px-5
            sm:py-4
          "
        >

          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              inset-y-0
              w-28
              bg-gradient-to-r
              from-transparent
              via-signal/[0.12]
              to-transparent
              sm:w-40
            "
          />

          <div className="relative flex items-center justify-between gap-3 sm:gap-4">

            <div className="flex items-center gap-2.5 sm:gap-3">

              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-signal/15
                  bg-signal/[0.04]
                  text-signal
                  sm:h-8
                  sm:w-8
                "
              >
                <FiStar size={12} className="sm:h-[13px] sm:w-[13px]" />
              </motion.div>

              <div>

                <p
                  className="
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.12em]
                    text-signal/70
                    sm:text-[8px]
                    sm:tracking-[0.16em]
                  "
                >
                  Digital experiences
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    text-[var(--fg)]/45
                    sm:text-xs
                  "
                >
                  Designed with intention.
                </p>

              </div>

            </div>

            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                hidden
                font-mono
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-[var(--fg)]/20
                sm:block
              "
            >
              DES / 2026
            </motion.div>

          </div>

        </motion.div>

        {/* =====================================================
            LOWER SECTION
        ====================================================== */}

        <div
          className="
            mt-4
            border-t
            border-[var(--border)]/60
            pt-4
            sm:mt-7
            sm:pt-6
          "
        >

          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-5
            "
          >

            {/* COPYRIGHT */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
                text-[8px]
                text-[var(--fg)]/25
                sm:gap-3
                sm:text-[9px]
              "
            >

              <span>
                © {new Date().getFullYear()} DesFlyer.
                All rights reserved.
              </span>

              <span
                className="
                  hidden
                  h-3
                  w-px
                  bg-[var(--border)]
                  sm:block
                "
              />

              <Link
                to="/"
                className="
                  inline-flex
                  items-center
                  gap-1
                  transition-colors
                  hover:text-signal
                "
              >
                Designed by DesFlyer
                <FiArrowUpRight size={9} className="sm:h-[10px] sm:w-[10px]" />
              </Link>

            </div>

            {/* STATUS */}

            <div
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[7px]
                uppercase
                tracking-[0.13em]
                text-[var(--fg)]/20
                sm:text-[8px]
                sm:tracking-[0.15em]
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-signal
                  shadow-[0_0_8px_var(--signal)]
                "
              />

              System online

            </div>

          </div>

        </div>

      </div>

    </footer>
  )
}




