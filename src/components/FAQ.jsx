import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'
import { faqs as defaultFaqs } from '../data/faqs'

function TypingText({ text }) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let index = 0
    setDisplay('')

    if (!text) return

    const timer = setInterval(() => {
      setDisplay((prev) => prev + text[index])
      index++

      if (index >= text.length) {
        clearInterval(timer)
      }
    }, 8)

    return () => clearInterval(timer)
  }, [text])

  return <>{display}</>
}

export default function FAQ({
  items = defaultFaqs,
  title = 'Common questions',
  eyebrow = 'FAQ',
}) {
  const [active, setActive] = useState(0)

  if (!items || items.length === 0) {
    return null
  }

  const current = items[active]

  /*
   * Split questions between left and right.
   * One card is removed from the bottom of each side.
   */
  const leftItems = items.filter((_, index) => index % 2 === 0)
  const rightItems = items.filter((_, index) => index % 2 !== 0)

  const visibleLeftItems = leftItems.slice(0, -1)
  const visibleRightItems = rightItems.slice(0, -1)

  return (
    <section
      className="relative overflow-hidden px-6 pb-32 pt-32 lg:px-10"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,111,255,0.15),transparent_40%)]"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.05]"
      />

      {/* Ambient blue glow */}

      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 25, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]"
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1500px] -mt-20 -mb-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <Eyebrow>{eyebrow}</Eyebrow>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
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
          className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--fg)] text-center"
        >
          {title}
        </motion.h2>

        {/* Description */}

        <motion.p
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-4 w-full text-center text-sm leading-relaxed text-[var(--fg)] opacity-60 sm:text-base"
        >
          Great digital experiences start with the right questions.
          Find the answers you need and see how we turn complex ideas into
          simple solutions.
        </motion.p>

        {/* =================================================
            QUESTIONS + ANSWER
        ================================================= */}

        <div
          className="mt-12 grid items-center gap-5 lg:grid-cols-[0.72fr_1.8fr_0.72fr]"
        >

          {/* =================================================
              LEFT QUESTIONS
          ================================================= */}

          <div className="flex flex-col gap-4">
            {visibleLeftItems.map((item) => {
              const index = items.indexOf(item)

              return (
                <QuestionCard
                  key={item.q}
                  item={item}
                  index={index}
                  active={active === index}
                  onClick={() => setActive(index)}
                  side="left"
                />
              )
            })}
          </div>

          {/* =================================================
              CENTRAL ANSWER CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-black/40 shadow-2xl backdrop-blur-xl"
          >

            {/* =================================================
                TERMINAL HEADER
            ================================================= */}

            <div
              className="flex items-center gap-2 border-b border-white/10 px-5 py-4"
            >

              <span
                className="h-3 w-3 rounded-full bg-red-400"
              />

              <span
                className="h-3 w-3 rounded-full bg-yellow-400"
              />

              <span
                className="h-3 w-3 rounded-full bg-green-400"
              />

              <p
                className="ml-3 font-mono text-[10px] text-white/50"
              >
                DESFLYER_AI_CORE
              </p>

              <div className="ml-auto flex items-center gap-2">

                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"
                />

                <span
                  className="font-mono text-[8px] uppercase tracking-[0.15em] text-green-400/60"
                >
                  Online
                </span>

              </div>

            </div>

            {/* =================================================
                TERMINAL CONTENT
            ================================================= */}

            <div
              className="min-h-[360px] p-6 font-mono sm:p-8"
            >

              {/* System */}

              <p
                className="mb-6 text-sm text-signal"
              >
                SYSTEM ONLINE ●
              </p>

              {/* User query */}

              <div
                className="text-xs uppercase tracking-[0.15em] text-white/40"
              >
                USER_QUERY:
              </div>

              <motion.h3
                key={current.q}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="mt-3 text-base leading-relaxed text-white sm:text-xl"
              >
                &gt; {current.q}
              </motion.h3>

              {/* Divider */}

              <div
                className="my-7 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
              />

              {/* AI response */}

              <div
                className="text-xs uppercase tracking-[0.15em] text-white/40"
              >
                AI_RESPONSE:
              </div>

              <p
                className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80"
              >
                <TypingText text={current.a} />

                <span
                  className="animate-pulse text-signal"
                >
                  ▋
                </span>
              </p>

              {/* Bottom status */}

              <div
                className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4"
              >

                <span
                  className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25"
                >
                  RESPONSE_GENERATED
                </span>

                <span
                  className="font-mono text-[8px] text-green-400/50"
                >
                  200 OK
                </span>

              </div>

            </div>

          </motion.div>

          {/* =================================================
              RIGHT QUESTIONS
          ================================================= */}

          <div className="flex flex-col gap-4">
            {visibleRightItems.map((item) => {
              const index = items.indexOf(item)

              return (
                <QuestionCard
                  key={item.q}
                  item={item}
                  index={index}
                  active={active === index}
                  onClick={() => setActive(index)}
                  side="right"
                />
              )
            })}
          </div>

        </div>

      </div>

    </section>
  )
}

/* =========================================================
   QUESTION CARD
========================================================= */

function QuestionCard({
  item,
  index,
  active,
  onClick,
  side,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{
        x: side === 'left' ? 6 : -6,
        y: -3,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
        active
          ? 'border-signal bg-signal/10 shadow-[0_0_30px_rgba(46,111,255,0.12)]'
          : 'border-[var(--border)] bg-black/20 hover:border-blue-400/30 hover:bg-white/[0.06]'
      }`}
    >

      {/* Active glow */}

      {active && (
        <motion.div
          layoutId="faq-active-glow"
          className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] to-transparent"
        />
      )}

      <div className="relative z-10">

        {/* Command number */}

        <div className="flex items-center justify-between">

          <span
            className="font-mono text-[9px] tracking-[0.15em] text-signal"
          >
            CMD_0{index + 1}
          </span>

          <span
            className={`font-mono text-[9px] transition-colors ${
              active
                ? 'text-blue-300'
                : 'text-white/20 group-hover:text-white/40'
            }`}
          >
            {active ? 'ACTIVE' : 'OPEN'}
          </span>

        </div>

        {/* Question */}

        <p
          className={`mt-3 text-sm leading-5 transition-colors ${
            active
              ? 'text-white'
              : 'text-[var(--fg)]/70 group-hover:text-white'
          }`}
        >
          {item.q}
        </p>

      </div>

      {/* Active line */}

      {active && (
        <motion.div
          layoutId="active-faq-line"
          className={`absolute ${
            side === 'left'
              ? 'right-0'
              : 'left-0'
          } bottom-0 h-[2px] w-full bg-signal`}
        />
      )}

    </motion.button>
  )
}