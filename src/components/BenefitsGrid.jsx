// import { useRef, useState } from 'react'
// import { motion } from 'framer-motion'
// import Eyebrow from './ui/Eyebrow'

// function BenefitCard({ benefit, index }) {
//   const cardRef = useRef(null)

//   const [rotation, setRotation] = useState({
//     x: 0,
//     y: 0,
//   })

//   const [mouse, setMouse] = useState({
//     x: 50,
//     y: 50,
//   })

//   const [hovered, setHovered] = useState(false)

//   const handleMouseMove = (event) => {
//     if (!cardRef.current) return

//     const rect = cardRef.current.getBoundingClientRect()

//     const x = event.clientX - rect.left
//     const y = event.clientY - rect.top

//     const centerX = rect.width / 2
//     const centerY = rect.height / 2

//     const rotateY = ((x - centerX) / centerX) * 8
//     const rotateX = ((centerY - y) / centerY) * 8

//     setRotation({
//       x: rotateX,
//       y: rotateY,
//     })

//     setMouse({
//       x: (x / rect.width) * 100,
//       y: (y / rect.height) * 100,
//     })
//   }

//   const handleMouseLeave = () => {
//     setHovered(false)

//     setRotation({
//       x: 0,
//       y: 0,
//     })

//     setMouse({
//       x: 50,
//       y: 50,
//     })
//   }

//   const Icon = benefit.icon

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 35,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         margin: '-60px',
//       }}
//       transition={{
//         duration: 0.65,
//         delay: index * 0.08,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//       className="h-full"
//     >
//       <motion.article
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={handleMouseLeave}
//         animate={{
//           rotateX: rotation.x,
//           rotateY: rotation.y,
//           y: hovered ? -8 : 0,
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 180,
//           damping: 20,
//         }}
//         style={{
//           perspective: 1200,
//           transformStyle: 'preserve-3d',
//         }}
//         className="
//           group
//           relative
//           h-full
//           min-h-[255px]
//           overflow-hidden
//           rounded-[28px]
//           border
//           border-[var(--border)]
//           bg-[var(--bg)]
//           p-6
//           shadow-[0_20px_60px_-35px_rgba(46,111,255,0.35)]
//           transition-colors
//           duration-500
//           hover:border-signal/40
//         "
//       >
//         {/* =====================================================
//             MOUSE FOLLOWING GLOW
//         ===================================================== */}

//         <motion.div
//           animate={{
//             left: `${mouse.x}%`,
//             top: `${mouse.y}%`,
//           }}
//           transition={{
//             type: 'spring',
//             stiffness: 90,
//             damping: 25,
//           }}
//           className="
//             pointer-events-none
//             absolute
//             h-48
//             w-48
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             bg-signal/15
//             blur-[65px]
//           "
//         />

//         {/* =====================================================
//             GRID BACKGROUND
//         ===================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             opacity-[0.035]
//             bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)]
//             bg-[size:25px_25px]
//           "
//         />

//         {/* =====================================================
//             ROTATING ORBIT
//         ===================================================== */}

//         <motion.div
//           animate={{
//             rotate: 360,
//           }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="
//             pointer-events-none
//             absolute
//             -right-16
//             -top-16
//             h-32
//             w-32
//             rounded-full
//             border
//             border-signal/10
//           "
//         />

//         <motion.div
//           animate={{
//             rotate: -360,
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: 'linear',
//           }}
//           className="
//             pointer-events-none
//             absolute
//             -right-7
//             -top-7
//             h-16
//             w-16
//             rounded-full
//             border
//             border-signal/15
//           "
//         />

//         {/* =====================================================
//             TOP
//         ===================================================== */}

//         <div
//           className="
//             relative
//             z-10
//             flex
//             items-start
//             justify-between
//           "
//           style={{
//             transform: 'translateZ(30px)',
//           }}
//         >
//           {/* ICON */}

//           <motion.div
//             animate={{
//               y: hovered ? -4 : [0, -3, 0],
//               rotate: hovered ? 5 : 0,
//               scale: hovered ? 1.08 : 1,
//             }}
//             transition={{
//               duration: hovered ? 0.25 : 3,
//               repeat: hovered ? 0 : Infinity,
//               ease: 'easeInOut',
//             }}
//             className="
//               relative
//               flex
//               h-14
//               w-14
//               items-center
//               justify-center
//               rounded-2xl
//               border
//               border-signal/25
//               bg-signal/10
//               text-signal
//               shadow-[0_10px_30px_rgba(46,111,255,0.12)]
//             "
//           >
//             <Icon size={23} />

//             {/* Icon ring */}

//             <motion.span
//               animate={{
//                 scale: hovered ? 1.18 : 1,
//                 opacity: hovered ? 0.8 : 0.3,
//               }}
//               transition={{
//                 duration: 0.4,
//               }}
//               className="
//                 absolute
//                 -inset-1
//                 rounded-2xl
//                 border
//                 border-signal/20
//               "
//             />
//           </motion.div>

//           {/* NUMBER */}

//           <div
//             className="
//               font-mono
//               text-[42px]
//               font-bold
//               leading-none
//               text-[var(--fg)]/[0.035]
//             "
//           >
//             {String(index + 1).padStart(2, '0')}
//           </div>
//         </div>

//         {/* =====================================================
//             CONTENT
//         ===================================================== */}

//         <div
//           className="
//             relative
//             z-10
//             mt-7
//           "
//           style={{
//             transform: 'translateZ(35px)',
//           }}
//         >
//           <motion.h3
//             animate={{
//               x: hovered ? 4 : 0,
//             }}
//             transition={{
//               duration: 0.3,
//             }}
//             className="
//               font-display
//               text-lg
//               font-semibold
//               leading-tight
//               text-[var(--fg)]
//               transition-colors
//               duration-300
//               group-hover:text-signal
//             "
//           >
//             {benefit.title}
//           </motion.h3>

//           <p
//             className="
//               mt-3
//               text-sm
//               leading-6
//               text-[var(--fg)]/50
//             "
//           >
//             {benefit.body}
//           </p>
//         </div>

//         {/* =====================================================
//             BOTTOM STATUS
//         ===================================================== */}

//         <div
//           className="
//             absolute
//             bottom-5
//             left-6
//             right-6
//             z-10
//             flex
//             items-center
//             justify-between
//           "
//         >
//           <span
//             className="
//               font-mono
//               text-[8px]
//               uppercase
//               tracking-[0.18em]
//               text-[var(--fg)]/25
//             "
//           >
//             DesFlyer / Benefit
//           </span>

//           <motion.span
//             animate={{
//               width: hovered ? 30 : 10,
//               opacity: hovered ? 1 : 0.35,
//             }}
//             transition={{
//               duration: 0.3,
//             }}
//             className="
//               h-[2px]
//               rounded-full
//               bg-signal
//               shadow-[0_0_12px_rgba(46,111,255,0.7)]
//             "
//           />
//         </div>

//         {/* =====================================================
//             BOTTOM GLOW LINE
//         ===================================================== */}

//         <motion.div
//           animate={{
//             opacity: hovered ? 1 : 0,
//             scaleX: hovered ? 1 : 0,
//           }}
//           transition={{
//             duration: 0.35,
//           }}
//           className="
//             absolute
//             bottom-0
//             left-7
//             right-7
//             h-[2px]
//             origin-center
//             bg-signal
//             shadow-[0_0_18px_rgba(46,111,255,0.8)]
//           "
//         />

//         {/* =====================================================
//             CORNER ACCENTS
//         ===================================================== */}

//         <motion.span
//           animate={{
//             opacity: hovered ? 1 : 0.25,
//           }}
//           className="
//             pointer-events-none
//             absolute
//             left-0
//             top-0
//             h-14
//             w-14
//             rounded-tl-[28px]
//             border-l
//             border-t
//             border-signal/30
//           "
//         />

//         <motion.span
//           animate={{
//             opacity: hovered ? 1 : 0.25,
//           }}
//           className="
//             pointer-events-none
//             absolute
//             bottom-0
//             right-0
//             h-14
//             w-14
//             rounded-br-[28px]
//             border-b
//             border-r
//             border-signal/30
//           "
//         />

//         {/* =====================================================
//             HOVER SHINE
//         ===================================================== */}

//         <motion.div
//           initial={{
//             x: '-120%',
//           }}
//           animate={{
//             x: hovered ? '120%' : '-120%',
//           }}
//           transition={{
//             duration: 0.8,
//             ease: 'easeInOut',
//           }}
//           className="
//             pointer-events-none
//             absolute
//             inset-y-0
//             w-20
//             skew-x-[-20deg]
//             bg-white/[0.035]
//           "
//         />
//       </motion.article>
//     </motion.div>
//   )
// }

// export default function BenefitsGrid({
//   benefits,
//   title = 'Why join us',
// }) {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[var(--surface-2)]
//         px-6
//         py-24
//         lg:px-10
//         lg:py-28
//       "
//     >
//       {/* Background glow */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-20
//           h-80
//           w-80
//           -translate-x-1/2
//           rounded-full
//           bg-signal/5
//           blur-[110px]
//         "
//       />

//       {/* Background grid */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.025]
//           bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)]
//           bg-[size:45px_45px]
//         "
//       />

//       <div className="relative mx-auto max-w-shell">
//         {/* HEADER */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//         >
//           <Eyebrow>Benefits</Eyebrow>

//           <div
//             className="
//               mt-4
//               flex
//               flex-col
//               gap-4
//               lg:flex-row
//               lg:items-end
//               lg:justify-between
//             "
//           >
//             <h2
//               className="
//                 max-w-3xl
//                 font-display
//                 text-[clamp(1.9rem,3.5vw,3rem)]
//                 font-bold
//                 leading-tight
//                 text-[var(--fg)]
//               "
//             >
//               {title}
//               <span className="text-signal">.</span>
//             </h2>

//             <div
//               className="
//                 hidden
//                 items-center
//                 gap-2
//                 font-mono
//                 text-[9px]
//                 uppercase
//                 tracking-[0.18em]
//                 text-[var(--fg)]/25
//                 lg:flex
//               "
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
//               What we offer
//             </div>
//           </div>
//         </motion.div>

//         {/* CARDS */}

//         <div
//           className="
//             mt-12
//             grid
//             gap-5
//             sm:grid-cols-2
//             lg:grid-cols-4
//           "
//         >
//           {benefits.map((benefit, index) => (
//             <BenefitCard
//               key={benefit.title}
//               benefit={benefit}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


















import { motion } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'

function BenefitItem({ benefit, index, isLast }) {
  const Icon = benefit.icon

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        grid
        grid-cols-[1fr_58px_1fr]
        items-center
        ${
          index % 2 === 0
            ? ''
            : ''
        }
      `}
    >
      {/* LEFT CONTENT */}

      <div
        className={`
          ${
            index % 2 === 0
              ? 'col-start-1 text-right'
              : 'col-start-1 text-right'
          }
        `}
      >
        {index % 2 === 0 ? (
          <motion.div
            whileHover={{
              x: -6,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 20,
            }}
            className="
              inline-block
              max-w-[300px]
              cursor-default
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--bg)]/60
              px-4
              py-3
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:border-signal/30
              group-hover:bg-signal/[0.035]
            "
          >
            <div className="flex items-center justify-end gap-2">
              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-signal
                "
              >
                Benefit {String(index + 1).padStart(2, '0')}
              </span>

              <Icon
                size={14}
                className="text-signal"
              />
            </div>

            <h3
              className="
                mt-1.5
                font-display
                text-sm
                font-semibold
                text-[var(--fg)]
                transition-colors
                duration-300
                group-hover:text-signal
              "
            >
              {benefit.title}
            </h3>

            <p
              className="
                mt-1
                text-[10px]
                leading-4
                text-[var(--fg)]/45
              "
            >
              {benefit.body}
            </p>
          </motion.div>
        ) : null}
      </div>

      {/* CENTER NODE */}

      <div className="relative col-start-2 flex justify-center">
        {!isLast && (
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[calc(100%+32px)]
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-signal/40
              via-signal/15
              to-[var(--border)]
            "
          />
        )}

        <motion.div
          whileHover={{
            scale: 1.2,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
          className="
            relative
            z-10
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-signal/40
            bg-[var(--bg)]
            shadow-[0_0_25px_rgba(46,111,255,0.15)]
          "
        >
          {/* Outer ring */}

          <motion.span
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0, 0.35],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: 'easeInOut',
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-signal/40
            "
          />

          {/* Inner node */}

          <span
            className="
              h-2.5
              w-2.5
              rounded-full
              bg-signal
              shadow-[0_0_15px_rgba(46,111,255,0.9)]
            "
          />

          {/* Number */}

          <span
            className="
              absolute
              -bottom-5
              font-mono
              text-[7px]
              text-[var(--fg)]/25
            "
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>
      </div>

      {/* RIGHT CONTENT */}

      <div className="col-start-3">
        {index % 2 !== 0 ? (
          <motion.div
            whileHover={{
              x: 6,
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 20,
            }}
            className="
              inline-block
              max-w-[300px]
              cursor-default
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--bg)]/60
              px-4
              py-3
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:border-signal/30
              group-hover:bg-signal/[0.035]
            "
          >
            <div className="flex items-center gap-2">
              <Icon
                size={14}
                className="text-signal"
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-signal
                "
              >
                Benefit {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3
              className="
                mt-1.5
                font-display
                text-sm
                font-semibold
                text-[var(--fg)]
                transition-colors
                duration-300
                group-hover:text-signal
              "
            >
              {benefit.title}
            </h3>

            <p
              className="
                mt-1
                text-[10px]
                leading-4
                text-[var(--fg)]/45
              "
            >
              {benefit.body}
            </p>
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  )
}

export default function BenefitsGrid({
  benefits = [],
  title = 'Why join us',
}) {
  const visibleBenefits = benefits.slice(0, 6)

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--surface-2)]
        px-5
        py-16
        sm:px-6
        lg:px-10
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-signal/5
          blur-[110px]
        "
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
          bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="relative mx-auto max-w-4xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
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
            duration: 0.55,
          }}
          className="text-center"
        >
          <Eyebrow>Benefits</Eyebrow>

          <h2
            className="
              mt-3
              font-display
              text-[clamp(1.8rem,3.5vw,2.8rem)]
              font-bold
              leading-tight
              text-[var(--fg)]
            "
          >
            {title}
            <span className="text-signal">.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-lg
              text-sm
              leading-6
              text-[var(--fg)]/45
            "
          >
            A work environment designed around people,
            creativity and meaningful growth.
          </p>
        </motion.div>

        {/* =====================================================
            MAGNETIC RAIL
        ===================================================== */}

        <div className="relative mt-10">
          {/* Main glowing rail */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-signal/30
              to-transparent
            "
          />

          {/* Animated signal */}

          <motion.div
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="
              absolute
              left-1/2
              z-30
              h-20
              w-[2px]
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-signal
              to-transparent
              shadow-[0_0_15px_rgba(46,111,255,0.8)]
            "
          />

          <div className="space-y-7">
            {visibleBenefits.map((benefit, index) => (
              <BenefitItem
                key={benefit.title}
                benefit={benefit}
                index={index}
                isLast={index === visibleBenefits.length - 1}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            FOOTER STATUS
        ===================================================== */}

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
            delay: 0.5,
          }}
          className="
            mx-auto
            mt-8
            flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--bg)]/50
            px-4
            py-2
            font-mono
            text-[8px]
            uppercase
            tracking-[0.16em]
            text-[var(--fg)]/30
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-signal
              shadow-[0_0_8px_rgba(46,111,255,0.8)]
            "
          />

          People first · Always
        </motion.div>
      </div>
    </section>
  )
}
