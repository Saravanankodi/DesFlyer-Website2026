import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(target, inView, duration = 1200) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    const isNumber = typeof target === 'number'
    if (!isNumber) {
      setValue(target)
      return
    }
    const start = performance.now()
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, target, duration])

  return value
}

export default function StatCard({ icon: Icon, label, value, suffix = '', demo = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const animated = useCountUp(value, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="border border-[var(--border)] rounded-2xl p-6 relative overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <span className="w-10 h-10 rounded-xl bg-signal/10 text-signal flex items-center justify-center">
          <Icon size={18} />
        </span>
        {demo && (
          <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--fg)]/30 border border-[var(--border)] rounded-full px-2 py-0.5">
            Demo
          </span>
        )}
      </div>
      <p className="font-display font-bold text-3xl mt-5 text-[var(--fg)]">
        {typeof animated === 'number' ? animated.toLocaleString() : animated}
        {suffix}
      </p>
      <p className="text-sm text-[var(--fg)]/55 mt-1">{label}</p>
    </motion.div>
  )
}
