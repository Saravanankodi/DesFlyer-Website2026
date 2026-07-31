import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import NeuralHero from '../three/NeuralHero'
import Button from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'
import { useTheme } from '../../hooks/useTheme'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <NeuralHero isDark={theme === 'dark'} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, #0A0C10 85%)'
              : 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, #FAFAFA 85%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-shell mx-auto px-6 lg:px-10 w-full"
      >
        <div className="max-w-3xl">
          <motion.div variants={item} className="node-divider mb-8 max-w-xs">
            <span className="node-dot animate-pulse-node" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal whitespace-nowrap">
              Software &amp; Product Engineering
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-bold text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.05] text-[var(--fg)]"
          >
            Innovative Software
            <br />
            Solutions for Your{' '}
            <span className="text-signal">Business</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 text-lg text-[var(--fg)]/70 leading-relaxed max-w-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button to="/services">
              Our Services <FiArrowUpRight />
            </Button>
            <Button to="/portfolio" variant="outline">
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--fg)]/40"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-current" />
      </motion.div>
    </section>
  )
}
