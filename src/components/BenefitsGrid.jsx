import { motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'

function BenefitItem({ benefit, index, isLast }) {
  const Icon = benefit.icon

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
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
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative grid grid-cols-[1fr_58px_1fr] items-center ${ index % 2 === 0 ? '' : '' }`}
    >
      {/* LEFT CONTENT */}

      <div
        className={`${ index % 2 === 0 ? 'col-start-1 text-right' : 'col-start-1 text-right' }`}
      >
        {index % 2 === 0 ? (
          <motion.div
            whileHover={{
              x: -6,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 20,
            }}
            className="inline-block max-w-[300px] cursor-default rounded-2xl border border-[var(--border)] bg-[var(--bg)]/60 px-4 py-3 backdrop-blur-md transition-all duration-300 group-hover:border-signal/30 group-hover:bg-signal/[0.035]"
          >
            <div className="flex items-center justify-end gap-2">
              <span
                className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal"
              >
                Benefit {String(index + 1).padStart(2, '0')}
              </span>

              <Icon
                size={14}
                className="text-signal"
              />
            </div>

            <h3
              className="mt-1.5 font-display text-sm font-semibold text-[var(--fg)] transition-colors duration-300 group-hover:text-signal"
            >
              {benefit.title}
            </h3>

            <p
              className="mt-1 text-[10px] leading-4 text-[var(--fg)]/45"
            >
              {benefit.body}
            </p>
          </motion.div>
        ) : null}
      </div>

      {/* CENTER NODE */}

      <div className="relative col-start-2 flex justify-center">
        {!isLast && (
          <div
            className="absolute left-1/2 top-1/2 h-[calc(100%+32px)] w-px -translate-x-1/2 bg-gradient-to-b from-signal/40 via-signal/15 to-[var(--border)]"
          />
        )}

        <motion.div
          whileHover={{
            scale: 1.2,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-signal/40 bg-[var(--bg)] shadow-[0_0_25px_rgba(46,111,255,0.15)]"
        >
          {/* Outer ring */}

          <motion.span
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full border border-signal/40"
          />

          {/* Inner node */}

          <span
            className="h-2.5 w-2.5 rounded-full bg-signal shadow-[0_0_15px_rgba(46,111,255,0.9)]"
          />

          {/* Number */}

          <span
            className="absolute -bottom-5 font-mono text-[7px] text-[var(--fg)]/25"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>
      </div>

      {/* RIGHT CONTENT */}

      <div className="col-start-3">
        {index % 2 !== 0 ? (
          <motion.div
            whileHover={{
              x: 6,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 20,
            }}
            className="inline-block max-w-[300px] cursor-default rounded-2xl border border-[var(--border)] bg-[var(--bg)]/60 px-4 py-3 backdrop-blur-md transition-all duration-300 group-hover:border-signal/30 group-hover:bg-signal/[0.035]"
          >
            <div className="flex items-center gap-2">
              <Icon
                size={14}
                className="text-signal"
              />

              <span
                className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal"
              >
                Benefit {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3
              className="mt-1.5 font-display text-sm font-semibold text-[var(--fg)] transition-colors duration-300 group-hover:text-signal"
            >
              {benefit.title}
            </h3>

            <p
              className="mt-1 text-[10px] leading-4 text-[var(--fg)]/45"
            >
              {benefit.body}
            </p>
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  )
}

export default function BenefitsGrid({
  benefits = [],
  title = 'Why join us',
}) {
  const visibleBenefits = benefits.slice(0, 6)

  return (
    <section
      className="relative overflow-hidden bg-[var(--surface-2)] px-5 py-16 sm:px-6 lg:px-10 lg:py-20"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/5 blur-[110px]"
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

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
            duration: 0.55,
          }}
          className="text-center"
        >
          <Eyebrow>Benefits</Eyebrow>

          <h2
            className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight text-[var(--fg)]"
          >
            {title}
            <span className="text-signal">.</span>
          </h2>

          <p
            className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[var(--fg)]/45"
          >
            A work environment designed around people,
            creativity and meaningful growth.
          </p>
        </motion.div>

        {/* =====================================================
            MAGNETIC RAIL
        ===================================================== */}

        <div className="relative mt-10">
          {/* Main glowing rail */}

          <div
            className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-signal/30 to-transparent"
          />

          {/* Animated signal */}

          <motion.div
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 z-30 h-20 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-signal to-transparent shadow-[0_0_15px_rgba(46,111,255,0.8)]"
          />

          <div className="space-y-7">
            {visibleBenefits.map((benefit, index) => (
              <BenefitItem
                key={benefit.title}
                benefit={benefit}
                index={index}
                isLast={index === visibleBenefits.length - 1}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            FOOTER STATUS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--fg)]/30"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_rgba(46,111,255,0.8)]"
          />

          People first · Always
        </motion.div>
      </div>
    </section>
  )
}
