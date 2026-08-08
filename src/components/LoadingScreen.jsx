import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = ['Innovate', 'Create', 'Empower']
const WORD_DURATION = 1000 // ms per word, 3 words = 3s total

export default function LoadingScreen({ onComplete }) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      onComplete()
      return
    }

    if (index < WORDS.length - 1) {
      const t = setTimeout(() => setIndex((i) => i + 1), WORD_DURATION)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setExiting(true), WORD_DURATION)
    return () => clearTimeout(t)
  }, [index, onComplete])

  useEffect(() => {
    if (!exiting) return
    const t = setTimeout(onComplete, 550) // matches exit transition duration below
    return () => clearTimeout(t)
  }, [exiting, onComplete])

  // const progress = Math.min(((index + 1) / WORDS.length) * 100, 100)

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(16px)' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[999] bg-ink flex flex-col items-center justify-center overflow-hidden"
        >
          {/* ambient glow background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 45%, rgba(46,111,255,0.16), transparent 55%)',
            }}
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

          {/* animated logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-10"
          >
            <motion.div
            >
              <div className="font-display font-bold text-2xl text-signal">
                <img src="/images/portfolio/logo.png" alt="Logo" className="w-60 h-60" />
              </div>
            </motion.div>
          </motion.div>

          {/* word sequence */}
          <div className="relative h-16 flex items-center justify-center px-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={WORDS[index]}
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.08, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-4xl sm:text-5xl text-white tracking-wide"
                style={{ textShadow: '0 0 30px rgba(46,111,255,0.5)' }}
              >
                {WORDS[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* progress indicator */}
        <div className="absolute bottom-16 flex items-center gap-3">
  {[0, 1, 2].map((dot) => (
    <motion.div
      key={dot}
      className="w-2.5 h-2.5 rounded-full bg-signal"
      animate={{
        y: [0, -6, 0],
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
        delay: dot * 0.2,
        ease: "easeInOut",
      }}
    />
  ))}
</div>
          <p className="absolute bottom-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            DesFlyer
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
