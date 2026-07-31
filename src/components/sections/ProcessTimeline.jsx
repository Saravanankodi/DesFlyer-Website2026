import { useRef, useMemo, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiCompass, FiPenTool, FiCode, FiSend, FiLifeBuoy } from 'react-icons/fi'
import Eyebrow from '../ui/Eyebrow'
import { process } from '../../data/process'

const icons = { FiCompass, FiPenTool, FiCode, FiSend, FiLifeBuoy }
const ROW_HEIGHT = 280 // px per step, used for both layout and the SVG curve math

function buildCurvePath(count) {
  // Generates a smooth S-curve (serpentine) through `count` points, alternating
  // left/right, in a 0-100 wide viewBox scaled to ROW_HEIGHT * count tall.
  const points = Array.from({ length: count }, (_, i) => ({
    x: i % 2 === 0 ? 28 : 72,
    y: i * ROW_HEIGHT + ROW_HEIGHT / 2,
  }))
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const midY = (prev.y + curr.y) / 2
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`
  }
  return { d, points }
}

function ProcessCard({ item, side }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })
  const Icon = icons[item.icon]
  const fromX = side === 'left' ? -48 : 48

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, y: 24 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.03 }}
      onMouseMove={handleMouseMove}
      className="relative glass rounded-2xl p-8 w-full max-w-md group overflow-hidden transition-shadow duration-500"
      style={{ boxShadow: '0 20px 60px -20px rgba(46,111,255,0.15)' }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-signal/50" />
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(360px circle at ${mouse.x}% ${mouse.y}%, rgba(46,111,255,0.16), transparent 60%)` }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-signal/0 group-hover:bg-signal/[0.03] transition-colors duration-500" />

      <div className="relative flex items-start justify-between">
        <span className="font-display font-bold text-4xl text-signal/25 group-hover:text-signal/45 transition-colors duration-500">
          {item.step}
        </span>
        <motion.span
          whileHover={{ rotate: 10, scale: 1.12 }}
          transition={{ duration: 0.3 }}
          className="w-11 h-11 rounded-xl bg-signal/10 text-signal flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_2px_rgba(46,111,255,0.35)] transition-shadow duration-500"
        >
          <Icon size={18} />
        </motion.span>
      </div>
      <h3 className="relative font-display font-semibold text-xl mt-5 text-[var(--fg)]">{item.title}</h3>
      <p className="relative mt-2.5 text-sm text-[var(--fg)]/65 leading-relaxed">{item.body}</p>
    </motion.div>
  )
}

export default function ProcessTimeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  const { d, points } = useMemo(() => buildCurvePath(process.length), [])
  const svgHeight = process.length * ROW_HEIGHT

  return (
    <section ref={ref} className="py-28 lg:py-36 px-6 lg:px-10 relative overflow-hidden">
      <div className="max-w-shell mx-auto">
        <div className="text-center mb-20">
          <div className="flex justify-center">
            <Eyebrow>How We Work</Eyebrow>
          </div>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.5vw,3rem)] text-[var(--fg)] max-w-xl mx-auto">
            A journey built for clarity, start to finish
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl" style={{ height: svgHeight }}>
          {/* curved connecting path - desktop */}
          <svg
            className="hidden md:block absolute inset-0 w-full h-full"
            viewBox={`0 0 100 ${svgHeight}`}
            preserveAspectRatio="none"
            fill="none"
          >
            <path d={d} stroke="var(--border)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            <motion.path
              d={d}
              stroke="#2E6FFF"
              strokeWidth="0.6"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength, filter: 'drop-shadow(0 0 4px rgba(46,111,255,0.7))' }}
              strokeLinecap="round"
            />
          </svg>

          {/* mobile straight line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-[var(--border)]">
            <motion.div style={{ height: useTransform(pathLength, (v) => `${v * 100}%`) }} className="w-full bg-signal shadow-[0_0_10px_2px_rgba(46,111,255,0.5)]" />
          </div>

          <div className="relative flex flex-col">
            {process.map((item, i) => {
              const side = i % 2 === 0 ? 'left' : 'right'
              const pt = points[i]
              return (
                <div key={item.step} className="relative" style={{ height: ROW_HEIGHT }}>
                  {/* node dot positioned on the curve */}
                  <div
                    className="hidden md:block absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${pt.x}%`, top: ROW_HEIGHT / 2 }}
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="block w-3.5 h-3.5 rounded-full bg-signal ring-4 ring-[var(--bg)] shadow-[0_0_14px_3px_rgba(46,111,255,0.6)]"
                    />
                  </div>
                  {/* mobile node dot */}
                  <div className="md:hidden absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="block w-3.5 h-3.5 rounded-full bg-signal ring-4 ring-[var(--bg)] shadow-[0_0_14px_3px_rgba(46,111,255,0.6)]" />
                  </div>

                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-full pl-16 md:pl-0 flex ${
                      side === 'left' ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <ProcessCard item={item} side={side} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
