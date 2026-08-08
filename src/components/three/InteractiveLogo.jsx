import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function InteractiveLogo() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [18, -18]))
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-18, 18]))

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()

    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  function leave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={leave}
      className="relative w-[520px] h-[520px] flex items-center justify-center"
      style={{ perspective: 1200 }}
    >
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute w-96 h-96 rounded-full bg-signal/30 blur-[90px]"
      />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute w-[420px] h-[420px] rounded-full border border-signal/30"
      />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "linear",
        }}
        className="absolute w-[340px] h-[340px] rounded-full border border-cyan-400/40"
      />

      {/* Orbit */}
      {[0, 90, 180, 270].map((deg) => (
        <motion.div
          key={deg}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="absolute w-[320px] h-[320px]"
          style={{ rotate: `${deg}deg` }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-signal shadow-[0_0_25px_#4F8CFF]" />
        </motion.div>
      ))}

      {/* Interactive Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          relative
          w-72
          h-72
          rounded-[40px]
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          flex
          items-center
          justify-center
          shadow-[0_0_80px_rgba(79,140,255,.35)]
        "
      >
        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          src="/images/portfolio/logo.png"
          className="w-48 h-48 object-contain"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute inset-0 rounded-[40px] border border-signal/20"
        />
      </motion.div>
    </div>
  )
}