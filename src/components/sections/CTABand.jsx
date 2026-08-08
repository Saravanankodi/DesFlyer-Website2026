import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Button from '../ui/Button'

/* =========================================================
   AURORA BEAM BACKGROUND
========================================================= */

function AuroraBeam({ className, gradient, width, rotate, duration, delay = 0, xRange }) {
  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 origin-center blur-[60px]  ${className}`}
      style={{
        width,
        height: '140%',
        background: gradient,
        rotate,
        translateY: '-50%',
        
      }}
      animate={{
        x: xRange,
        opacity: [0.35, 0.6, 0.35],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

function AssemblyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl bg-[#050508]">

      {/* BASE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#0d0f1e_0%,#07080f_55%,#050508_100%)]" />

      {/* BEAMS */}
      <div className="absolute inset-0 -translate-x-1/2">
        <AuroraBeam
          className="left-1/2"
          gradient="linear-gradient(180deg, transparent 0%, rgba(108,77,255,0.55) 30%, rgba(77,163,255,0.35) 55%, transparent 85%)"
          width="340px"
          rotate="-18deg"
          duration={14}
          xRange={['-10%', '8%', '-10%']}
        />

        <AuroraBeam
          className="left-1/2"
          gradient="linear-gradient(180deg, transparent 0%, rgba(77,217,255,0.4) 35%, rgba(108,77,255,0.25) 60%, transparent 85%)"
          width="220px"
          rotate="12deg"
          duration={18}
          delay={2}
          xRange={['20%', '5%', '20%']}
        />

        <AuroraBeam
          className="left-1/2"
          gradient="linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.12) 40%, transparent 80%)"
          width="120px"
          rotate="-4deg"
          duration={11}
          delay={1}
          xRange={['-30%', '-15%', '-30%']}
        />
      </div>

      {/* CENTER GLOW */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5E8CFF]/[0.08] blur-[100px]"
        animate={{
          scale: [0.85, 1.1, 0.85],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* FINE GRAIN */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* VIGNETTE */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, transparent 25%, rgba(3,4,8,0.4) 65%, rgba(3,4,8,0.9) 100%)',
        }}
      />

      {/* TOP / BOTTOM DEPTH */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,4,8,0.5), transparent 25%, transparent 75%, rgba(3,4,8,0.6))',
        }}
      />

      {/* FRAME */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.08]" />

    </div>
  )
}

/* =========================================================
   CTA BAND
========================================================= */

export default function CTABand() {
  return (
    <section className="px-4 sm:px-6 lg:px-8    pt-20">

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="
          relative
          mx-auto
          max-w-shell
          overflow-hidden
          rounded-3xl
          px-6
       
          py-16
          text-center
          sm:px-10
          lg:px-20
          lg:py-24
        "
      >

        <AssemblyBackground />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.09]
              bg-white/[0.035]
              px-3.5
              py-1.5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-white/45
              backdrop-blur-md
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#7EA5FF]
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#9CB8FF]
                "
              />
            </span>

            From idea to product
          </motion.div>

          <h2
            className="
              font-display
              text-[clamp(1.8rem,4vw,3rem)]
              font-bold
              leading-[1.08]
              text-white
            "
          >
            Have something
            <span className="block text-white/55">
              worth building?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-lg
              text-sm
              leading-relaxed
              text-white/55
              sm:text-[15px]
            "
          >
            Bring the idea, the problem or
            the rough concept. We&rsquo;ll turn
            the pieces into a thoughtful product.
          </p>

          <motion.div
            className="mt-9"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              to="/contact"
              className="px-8 py-3.5"
            >
              Start a project
              <FiArrowUpRight />
            </Button>
          </motion.div>

        </div>

      </motion.div>

    </section>
  )
}