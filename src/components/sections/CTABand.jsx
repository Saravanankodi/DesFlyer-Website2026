import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi'
import Button from '../ui/Button'

const CAPABILITIES = [
  'Web Development',
  'Mobile Apps',
  'Product Design',
  'Branding',
  'Enterprise Software',
  'UI / UX',
]

const PARTICLES = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  x: (i * 37) % 100,
  y: (i * 61) % 100,
  size: 1 + (i % 3),
  delay: (i % 8) * 0.35,
  duration: 4 + (i % 5),
}))

function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[#65D9FF]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: '0 0 12px rgba(101,217,255,0.7)',
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            y: [0, -18, 0],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function OrbitalSystem() {
  const trailParticles = Array.from({ length: 8 }, (_, i) => i)
  const swarmParticles = Array.from({ length: 18 }, (_, i) => i)

  return (
    <div className="pointer-events-none absolute left-1/2 top-[48%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 sm:h-[560px] sm:w-[560px]">

      {/* DEEP SPACE / CORE ATMOSPHERE */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [0.18, 0.42, 0.18],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(54,203,255,.22), rgba(105,80,255,.10), transparent 68%)',
          filter: 'blur(45px)',
        }}
      />

      {/* OUTER 3D ORBIT */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[320px] w-[530px] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transform: 'translate(-50%, -50%) rotate(22deg)',
          border: '1px solid rgba(101,217,255,.16)',
          boxShadow: '0 0 35px rgba(101,217,255,.03)',
        }}
      >
        <motion.span
          className="absolute left-[9%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#65D9FF]"
          animate={{
            scale: [0.7, 1.5, 0.7],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow:
              '0 0 10px #65D9FF, 0 0 30px rgba(101,217,255,.8)',
          }}
        />

        <motion.span
          className="absolute right-[12%] top-[12%] h-1.5 w-1.5 rounded-full bg-white"
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          style={{
            boxShadow: '0 0 15px white',
          }}
        />
      </motion.div>

      {/* SECOND CROSS ORBIT */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[275px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transform: 'translate(-50%, -50%) rotate(-28deg)',
          border: '1px solid rgba(168,85,247,.17)',
        }}
      >
        <motion.span
          className="absolute right-[8%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#A855F7]"
          animate={{
            scale: [0.6, 1.6, 0.6],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
          }}
          style={{
            boxShadow:
              '0 0 12px #A855F7, 0 0 30px rgba(168,85,247,.7)',
          }}
        />
      </motion.div>

      {/* INNER 3D ORBIT */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[185px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
        animate={{
          rotate: 360,
          scaleY: [1, 0.88, 1],
        }}
        transition={{
          rotate: {
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
          },
          scaleY: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        style={{
          transform: 'translate(-50%, -50%) rotate(55deg)',
          border: '1px solid rgba(255,255,255,.11)',
        }}
      >
        <motion.span
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#65D9FF]"
          animate={{
            scale: [0.6, 1.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            boxShadow: '0 0 20px #65D9FF',
          }}
        />
      </motion.div>

      {/* DOTTED MICRO ORBIT */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[130px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-[#65D9FF]/20"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transform: 'translate(-50%, -50%) rotate(-18deg)',
        }}
      >
        <span className="absolute left-[10%] top-1/2 h-1 w-1 rounded-full bg-[#65D9FF] shadow-[0_0_10px_#65D9FF]" />

        <span className="absolute right-[12%] top-1/2 h-1 w-1 rounded-full bg-[#A855F7] shadow-[0_0_10px_#A855F7]" />

        <span className="absolute left-1/2 top-[4%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_white]" />
      </motion.div>

      {/* ROTATING SCANNER BEAM */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[1px] w-[165px] origin-left"
          style={{
            background:
              'linear-gradient(90deg, rgba(101,217,255,.5), transparent)',
            boxShadow: '0 0 12px rgba(101,217,255,.4)',
          }}
        />

        <div
          className="absolute left-[48%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
          style={{
            background: '#65D9FF',
            boxShadow: '0 0 20px #65D9FF',
          }}
        />
      </motion.div>

      {/* RADIAL ENERGY RAYS */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <span
            key={angle}
            className="absolute left-1/2 top-1/2 h-px w-[175px] origin-left"
            style={{
              transform: `rotate(${angle}deg)`,
              background:
                'linear-gradient(90deg, rgba(101,217,255,.10), transparent)',
            }}
          />
        ))}
      </motion.div>

      {/* MOVING ENERGY TRAILS */}
      {trailParticles.map((i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full"
          style={{
            background: i % 2 === 0 ? '#65D9FF' : '#A855F7',
            boxShadow:
              i % 2 === 0
                ? '0 0 15px #65D9FF'
                : '0 0 15px #A855F7',
          }}
          animate={{
            x: [
              Math.cos((i / 8) * Math.PI * 2) * 100,
              Math.cos((i / 8) * Math.PI * 2 + Math.PI) * 220,
              Math.cos((i / 8) * Math.PI * 2) * 100,
            ],
            y: [
              Math.sin((i / 8) * Math.PI * 2) * 60,
              Math.sin((i / 8) * Math.PI * 2 + Math.PI) * 150,
              Math.sin((i / 8) * Math.PI * 2) * 60,
            ],
            opacity: [0, 1, 0],
            scale: [0.5, 1.8, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.35,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* PARTICLE SWARM */}
      {swarmParticles.map((i) => {
        const angle = (i / 18) * Math.PI * 2
        const radius = 120 + (i % 4) * 18

        return (
          <motion.span
            key={`swarm-${i}`}
            className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-white/60"
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle + 0.8) * (radius + 25),
                Math.cos(angle) * radius,
              ],
              y: [
                Math.sin(angle) * radius * 0.55,
                Math.sin(angle + 0.8) * (radius + 25) * 0.55,
                Math.sin(angle) * radius * 0.55,
              ],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 6 + (i % 5),
              delay: i * 0.18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )
      })}

      {/* ENERGY COLLISION FLASH */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={{
          scale: [0, 1.5, 0, 0],
          opacity: [0, 0.8, 0, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          times: [0, 0.08, 0.16, 1],
        }}
        style={{
          boxShadow:
            '0 0 20px white, 0 0 50px #65D9FF, 0 0 90px #A855F7',
        }}
      />

      {/* CENTRAL REACTOR */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-md"
        animate={{
          scale: [0.96, 1.04, 0.96],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow:
            '0 0 40px rgba(101,217,255,.08), inset 0 0 35px rgba(101,217,255,.06)',
        }}
      >
        <motion.div
          className="absolute inset-3 rounded-full border border-[#65D9FF]/25"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute inset-6 rounded-full border border-[#A855F7]/20 border-dashed"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#65D9FF]"
          animate={{
            scale: [0.6, 1.6, 0.6],
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            boxShadow:
              '0 0 15px #65D9FF, 0 0 40px rgba(101,217,255,.8), 0 0 90px rgba(101,217,255,.35)',
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#65D9FF]/40"
          animate={{
            scale: [0.7, 3],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      </motion.div>

      {/* FLOATING ENERGY NODES */}
      <motion.span
        className="absolute left-[16%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#65D9FF]"
        animate={{
          x: [-8, 8, -8],
          y: [8, -8, 8],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          boxShadow: '0 0 18px #65D9FF',
        }}
      />

      <motion.span
        className="absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#A855F7]"
        animate={{
          x: [8, -8, 8],
          y: [-8, 8, -8],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
        style={{
          boxShadow: '0 0 18px #A855F7',
        }}
      />

      <motion.span
        className="absolute bottom-[20%] left-[23%] h-1 w-1 rounded-full bg-white"
        animate={{
          scale: [0.4, 1.8, 0.4],
          opacity: [0.1, 0.9, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="absolute bottom-[17%] right-[23%] h-1.5 w-1.5 rounded-full bg-[#65D9FF]"
        animate={{
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          boxShadow: '0 0 18px #65D9FF',
        }}
      />
    </div>
  )
}

function BackgroundGrid() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(101,217,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(101,217,255,.45) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
          maskImage:
            'radial-gradient(circle at center, black, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black, transparent 75%)',
        }}
      />

      <motion.div
        className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#65D9FF]/20 to-transparent"
        animate={{
          opacity: [0.1, 0.5, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#65D9FF]/10 to-transparent"
        animate={{
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
    </>
  )
}

function FloatingChip({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 15,
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
        delay,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      className={`absolute hidden rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/55 shadow-[0_10px_40px_rgba(0,0,0,.25)] backdrop-blur-xl sm:block ${className}`}
    >
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#65D9FF] shadow-[0_0_10px_#65D9FF]" />
      {children}
    </motion.div>
  )
}

function CapabilityStrip() {
  return (
    <div className="relative mt-8 overflow-hidden border-y border-white/[0.07] py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#060B12] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#060B12] to-transparent" />

      <motion.div
        className="flex w-max gap-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...CAPABILITIES, ...CAPABILITIES].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <span className="h-1 w-1 rounded-full bg-[#65D9FF]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/40">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function CTABand() {
  const sectionRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  })

  const glowX = useTransform(
    smoothX,
    [-1, 1],
    ['35%', '65%']
  )

  const glowY = useTransform(
    smoothY,
    [-1, 1],
    ['35%', '65%']
  )

  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      const rect =
        sectionRef.current?.getBoundingClientRect()

      if (!rect) return

      const x =
        (event.clientX - rect.left) / rect.width

      const y =
        (event.clientY - rect.top) / rect.height

      mouseX.set((x - 0.5) * 2)
      mouseY.set((y - 0.5) * 2)
    }

    const element = sectionRef.current

    element?.addEventListener('mousemove', handleMove)

    return () => {
      element?.removeEventListener(
        'mousemove',
        handleMove
      )
    }
  }, [mouseX, mouseY])

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <motion.div
        ref={sectionRef}
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          margin: '-80px',
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative mx-auto max-w-shell overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#060B12] px-5 pb-0 pt-12 shadow-[0_30px_120px_rgba(0,0,0,.45)] sm:px-8 sm:pt-14 lg:px-14 lg:pt-16"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* MOUSE FOLLOWING GLOW */}
        <motion.div
          className="pointer-events-none absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
          style={{
            left: glowX,
            top: glowY,
            background:
              'radial-gradient(circle, rgba(37,169,255,.18), rgba(111,64,255,.08), transparent 65%)',
          }}
        />

        <BackgroundGrid />

        <ParticleField />

        {/* SAME BACKGROUND DESIGN */}
        <OrbitalSystem />

        {/* CORNER LABELS */}
        <motion.div
          className="absolute left-4 top-4 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/25 sm:block"
          animate={{
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          SYSTEM / 04
        </motion.div>

        <motion.div
          className="absolute right-4 top-4 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/25 sm:block"
          animate={{
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        >
          BUILD / 2026
        </motion.div>

        <div className="relative z-20 mx-auto max-w-2xl text-center">

          {/* EYEBROW */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#65D9FF]/20 bg-[#65D9FF]/[0.05] px-3 py-1.5 backdrop-blur-md"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#65D9FF]"
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              style={{
                boxShadow: '0 0 15px #65D9FF',
              }}
            />

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#65D9FF]/70">
              Let's build something remarkable
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
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
              delay: 0.25,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(2.2rem,6vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white"
          >
            Your idea.
            <br />

            <motion.span
              className="relative inline-block bg-gradient-to-r from-[#65D9FF] via-white to-[#A855F7] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: [
                  '0% 50%',
                  '100% 50%',
                  '0% 50%',
                ],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Our craft.
            </motion.span>
          </motion.h2>

          {/* SUBHEADING */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mx-auto mt-5 max-w-lg text-xs leading-6 text-white/45 sm:text-sm"
          >
            Bring the idea, the problem or the rough concept.
            <br className="hidden sm:block" />
            We turn it into a digital experience built to move forward.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.55,
              duration: 0.7,
            }}
            className="mt-7 flex justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="relative"
            >
              {/* BUTTON GLOW */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-[#65D9FF]/20 blur-2xl"
                animate={{
                  opacity: hovering
                    ? [0.3, 0.7, 0.3]
                    : 0.2,
                  scale: hovering
                    ? [0.9, 1.1, 0.9]
                    : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <Button
                to="/contact"
                className="group relative flex items-center gap-2.5 overflow-hidden rounded-full border border-[#65D9FF]/60 bg-[#65D9FF] px-6 py-3 text-xs font-semibold text-[#041018] shadow-[0_0_35px_rgba(101,217,255,.2)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(101,217,255,.4)]"
              >
                <span className="relative z-10">
                  Start a project
                </span>

                <motion.span
                  className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#041018]/10"
                  whileHover={{
                    rotate: 45,
                  }}
                >
                  <FiArrowUpRight />
                </motion.span>

                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
              </Button>
            </motion.div>
          </motion.div>

          {/* SMALL STATUS */}
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
              delay: 0.8,
              duration: 0.6,
            }}
            className="mt-4 flex items-center justify-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <motion.span
                className="absolute inset-0 rounded-full bg-[#65D9FF]"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              />

              <span className="relative h-1.5 w-1.5 rounded-full bg-[#65D9FF]" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
              Currently accepting new projects
            </span>
          </motion.div>
        </div>

        {/* FLOATING CHIPS */}
        <FloatingChip
          className="left-[7%] top-[27%] rotate-[-5deg]"
          delay={0.4}
        >
          Digital Products
        </FloatingChip>

        <FloatingChip
          className="right-[7%] top-[31%] rotate-[5deg]"
          delay={0.55}
        >
          Creative Systems
        </FloatingChip>

        <FloatingChip
          className="left-[10%] top-[64%] rotate-[4deg]"
          delay={0.7}
        >
          Scalable Tech
        </FloatingChip>

        <FloatingChip
          className="right-[10%] top-[67%] rotate-[-4deg]"
          delay={0.85}
        >
          Human Experience
        </FloatingChip>

        {/* BOTTOM SIGNAL */}
        <motion.div
          className="relative z-20 mx-auto mt-10 max-w-4xl"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
        >
          <div className="flex items-center justify-center gap-3 pb-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#65D9FF]/40" />

            <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/25">
              Capabilities
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#65D9FF]/40" />
          </div>

          <CapabilityStrip />
        </motion.div>

        {/* BOTTOM FADE */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060B12] via-[#060B12]/70 to-transparent" />
      </motion.div>

      {/* OUTSIDE LABEL */}
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
          delay: 1,
        }}
        className="mx-auto mt-3 flex max-w-shell items-center justify-between px-2 font-mono text-[7px] uppercase tracking-[0.2em] text-white/20"
      >
        <span>
          DESIGN / ENGINEERING / EXPERIENCE
        </span>

        <span className="hidden items-center gap-2 sm:flex">
          Explore
          <FiArrowRight />
        </span>
      </motion.div>
    </section>
  )
}