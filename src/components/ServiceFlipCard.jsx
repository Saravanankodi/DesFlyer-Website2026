import { useState } from 'react'
import { motion } from 'framer-motion'
import * as FiIcons from 'react-icons/fi'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ServiceFlipCard({ service, index }) {
  const [flipped, setFlipped] = useState(false)

  const Icon = FiIcons[service.icon] || FiIcons.FiBox

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      id={service.slug}
      className="scroll-mt-28 [perspective:1200px] h-64"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
          y: flipped ? -4 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* ================= FRONT ================= */}
        <div
          className="absolute inset-0 rounded-2xl border border-[var(--border)] p-7 overflow-hidden flex flex-col justify-between transition-all duration-300 bg-[var(--bg)]"
          style={{
            backfaceVisibility: 'hidden',
            boxShadow: flipped
              ? 'none'
              : '0 4px 20px -8px rgba(0,0,0,0.15)',
          }}
        >

          {/* Number */}
          <div className="flex items-start justify-between relative z-20">
            <span className="font-display font-bold text-sm text-[var(--fg)]/30 tracking-widest">
              {String(index + 1).padStart(2, '0')}
            </span>

            <span className="text-xs text-[var(--fg)]/35">
              0{index + 1}
            </span>
          </div>

          {/* Visual */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            {/* Outer glow */}
            <div
              className="absolute w-32 h-32 rounded-full bg-cyan-400/10 blur-3xl"
            />

            {/* Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-32 h-32 rounded-full border border-cyan-400/20 border-dashed"
            />

            {/* Inner ring */}
            <div
              className="absolute w-24 h-24 rounded-full border border-cyan-400/10"
            />

            {/* Icon */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 shadow-[0_0_35px_rgba(0,229,255,0.12)]"
            >
              <Icon
                size={38}
                className="text-cyan-400"
              />
            </motion.div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-20 mt-auto">

            <h3
              className="font-display font-semibold text-xl text-[var(--fg)]"
            >
              {service.title}
            </h3>

            <div className="flex items-center gap-2 mt-3">

              <span
                className="h-[2px] w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
              />

              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--fg)]/40">
                Hover to explore
              </span>

            </div>
          </div>

          {/* Decorative glow */}
          <div
            className="absolute -right-16 -bottom-16 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl"
          />

        </div>


        {/* ================= BACK ================= */}
        <div
          className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-between bg-deep text-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: flipped
              ? '0 20px 50px -12px rgba(46,111,255,0.45)'
              : 'none',
            border: '1px solid rgba(46,111,255,0.35)',
          }}
        >

          <div>

            <div className="flex items-center gap-3">

              <div
                className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center"
              >
                <Icon
                  size={18}
                  className="text-cyan-400"
                />
              </div>

              <h3 className="font-display font-semibold text-base">
                {service.title}
              </h3>

            </div>

            <p className="mt-4 text-xs text-white/70 leading-relaxed line-clamp-4">
              {service.body}
            </p>

            <ul className="mt-3 flex flex-col gap-1.5">

              {service.benefits?.slice(0, 3).map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-1.5 text-xs text-white/80"
                >
                  <FiCheck
                    className="text-signal shrink-0 mt-0.5"
                    size={12}
                  />
                  {b}
                </li>
              ))}

            </ul>

          </div>

          <Link
            to="/contact"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:gap-2.5 transition-all duration-200"
          >
            Learn More
            <FiArrowRight size={14} />
          </Link>

        </div>

      </motion.div>
    </motion.div>
  )
}
