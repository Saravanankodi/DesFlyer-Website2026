import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import NeuralHero from '../three/NeuralHero'
import Button from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'
import { useTheme } from '../../hooks/useTheme'


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}


const item = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}



export default function Hero() {

  const { theme } = useTheme()


  return (

    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">


      {/* 3D Neural Background */}
      <NeuralHero isDark={theme === 'dark'} />



      {/* Gradient Overlay */}
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

        className="
        relative
        z-10
        max-w-shell
        mx-auto
        px-6
        lg:px-10
        w-full
        "

      >


        <div className="grid lg:grid-cols-2 items-center min-h-[80vh] gap-10">

          {/* Left Content */}
          <div className="max-w-3xl">

            <motion.div
              variants={item}
              className="node-divider mb-8 max-w-xs"
            >

              <span className="node-dot animate-pulse-node" />

              <span className="
            font-mono
            text-xs
            tracking-[0.2em]
            uppercase
            text-signal
            whitespace-nowrap
            "
              >
                Software &amp; Product Engineering
              </span>

            </motion.div>





            <motion.h1

              variants={item}

              className="
            font-display
            font-bold
            text-[clamp(2.5rem,6vw,4.75rem)]
            leading-[1.05]
            text-[var(--fg)]
            "

            >

              Innovative Software

              <br />

              Solutions for Your{' '}

              <span className="text-signal">
                Business
              </span>


            </motion.h1>






            <motion.p

              variants={item}

              className="
            mt-7
            text-lg
            text-[var(--fg)]/70
            leading-relaxed
            max-w-xl
            "

            >

              {siteConfig.description}


            </motion.p>






            <motion.div

              variants={item}

              className="
            mt-10
            flex
            flex-wrap
            gap-4
            "

            >


              <Button to="/services">

                Our Services <FiArrowUpRight />

              </Button>




              <Button
                to="/portfolio"
                variant="outline"
              >

                View Portfolio

              </Button>



            </motion.div>


          </div>

          {/* Right Side Logo */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center items-center"
          >

            {/* Floating Logo */}
            <motion.img
              src="/images/portfolio/logo.png"
              alt="Logo"
              animate={{
                y: [-12, 12, -12],
                rotateY: [0, 12, 0, -12, 0],
                rotateX: [0, 6, 0, -6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
    relative
    z-20
    w-[500px]
    h-[500px]
    object-contain
    drop-shadow-[0_0_80px_rgba(0,255,255,0.9)]
  "
              style={{
                transformStyle: "preserve-3d",
                filter:
                  "drop-shadow(0 0 40px rgba(0,255,255,.9)) drop-shadow(0 0 120px rgba(0,180,255,.8))",
              }}
            />

            {/* Floating Particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-cyan-400"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>


      </motion.div>





      {/* Scroll Indicator */}

      <motion.div

        initial={{
          opacity: 0
        }}

        animate={{
          opacity: 1
        }}

        transition={{
          delay: 1.2,
          duration: 0.8
        }}

        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-2
        text-[var(--fg)]/40
        "

      >






      </motion.div>


    </section>

  )

}