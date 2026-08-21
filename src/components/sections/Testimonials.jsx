import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiStar,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Eyebrow from "../ui/Eyebrow";
import { testimonials } from "../../data/testimonials";
// import "./index.css";

export default function Testimonials() {
  const items = testimonials?.slice(0, 3) || [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  const active = items[activeIndex];

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevCard = () => {
    setActiveIndex(
      (prev) => (prev - 1 + items.length) % items.length
    );
  };

  /* =========================================================
     SECTION ENTRANCE ANIMATION
  ========================================================= */

  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 120,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={sectionVariants}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* =========================================================
          3D ANIMATED BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* 3D PERSPECTIVE GRID */}

        <motion.div
          className="
            absolute
            left-1/2
            top-[45%]
            h-[900px]
            w-[1400px]
            -translate-x-1/2
            -translate-y-1/2
            opacity-[0.12]
          "
          animate={{
            rotateZ: [0, 1, 0, -1, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transform: "perspective(900px) rotateX(62deg)",
            backgroundImage: `
              linear-gradient(
                rgba(59,130,246,0.28) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(59,130,246,0.28) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />

        {/* =====================================================
            3D CENTRAL ENERGY CORE
        ===================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
          "
          style={{
            perspective: "1000px",
          }}
        >

          {/* OUTER ORBIT */}

          <motion.div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-blue-400/[0.10]
            "
            animate={{
              rotateX: [65, 72, 65],
              rotateY: [0, 360],
            }}
            transition={{
              rotateX: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateY: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />

          {/* SECOND ORBIT */}

          <motion.div
            className="
              absolute
              inset-[45px]
              rounded-full
              border
              border-cyan-400/[0.09]
            "
            animate={{
              rotateX: [65, 55, 65],
              rotateZ: [0, -360],
            }}
            transition={{
              rotateX: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateZ: {
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />

          {/* THIRD ORBIT */}

          <motion.div
            className="
              absolute
              inset-[90px]
              rounded-full
              border-dashed
              border
              border-blue-300/[0.08]
            "
            animate={{
              rotateY: [0, 360],
              rotateX: [20, -20, 20],
            }}
            transition={{
              rotateY: {
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              },
              rotateX: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />

          {/* CENTRAL GLOW */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/[0.10]
              blur-[70px]
            "
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* CORE */}

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-16
              w-16
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-blue-300/20
              bg-blue-400/[0.05]
              shadow-[0_0_70px_rgba(59,130,246,0.18)]
            "
            animate={{
              scale: [1, 1.12, 1],
              rotateY: [0, 180, 360],
            }}
            transition={{
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotateY: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          />

          {/* ORBIT PARTICLE 1 */}

          <motion.span
            className="
              absolute
              left-1/2
              top-0
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-blue-300
              shadow-[0_0_20px_rgba(96,165,250,0.9)]
            "
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "0 210px",
            }}
          />

          {/* ORBIT PARTICLE 2 */}

          <motion.span
            className="
              absolute
              bottom-0
              left-1/2
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-cyan-300
              shadow-[0_0_18px_rgba(34,211,238,0.9)]
            "
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "0 -210px",
            }}
          />
        </div>

        {/* =====================================================
            FLOATING 3D PARTICLES
        ===================================================== */}

        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            className="
              absolute
              rounded-full
              bg-blue-300/40
              shadow-[0_0_12px_rgba(96,165,250,0.5)]
            "
            style={{
              width: index % 3 === 0 ? "4px" : "2px",
              height: index % 3 === 0 ? "4px" : "2px",
              left: `${5 + ((index * 19) % 90)}%`,
              top: `${5 + ((index * 31) % 88)}%`,
            }}
            animate={{
              x: [0, index % 2 ? 25 : -25, 0],
              y: [0, -35, 10, 0],
              z: [0, 30, 0],
              opacity: [0.1, 0.7, 0.15],
              scale: [0.7, 1.5, 0.7],
            }}
            transition={{
              duration: 5 + (index % 5),
              delay: index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* MOVING LIGHT BEAM 1 */}

        <motion.div
          className="
            absolute
            -left-[30%]
            top-[25%]
            h-px
            w-[160%]
            bg-gradient-to-r
            from-transparent
            via-blue-400/20
            to-transparent
            blur-[1px]
          "
          animate={{
            x: ["-15%", "15%", "-15%"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* MOVING LIGHT BEAM 2 */}

        <motion.div
          className="
            absolute
            -left-[30%]
            top-[70%]
            h-px
            w-[160%]
            bg-gradient-to-r
            from-transparent
            via-cyan-400/15
            to-transparent
            blur-[1px]
          "
          animate={{
            x: ["15%", "-15%", "15%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* CORNER LIGHT 1 */}

        <motion.div
          className="
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-blue-500/[0.06]
            blur-[120px]
          "
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* CORNER LIGHT 2 */}

        <motion.div
          className="
            absolute
            -right-32
            bottom-0
            h-72
            w-72
            rounded-full
            bg-cyan-400/[0.05]
            blur-[120px]
          "
          animate={{
            x: [0, -45, 0],
            y: [0, -30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* VIGNETTE */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.08)_100%)]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1400px]
          items-center
          gap-12
          px-5
          sm:px-8
          lg:grid-cols-[0.78fr_1.22fr]
          lg:gap-8
          xl:grid-cols-[0.72fr_1.28fr]
          xl:gap-12
          2xl:px-4
        "
      >

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <motion.div
          variants={leftVariants}
          className="
            relative
            z-10
            w-full
            max-w-[470px]
            lg:justify-self-start
          "
        >
          <Eyebrow>Client Success</Eyebrow>

          <h2
            className="
              mt-5
              max-w-[450px]
              text-[42px]
              leading-[0.9]
              tracking-[-0.055em]
              sm:text-[52px]
              lg:text-[58px]
              xl:text-[60px]
            "
            style={{
              fontFamily: "Iceberg, sans-serif",
            }}
          >
            <span className="pr-5">
              Experiences
            </span>

            people
            <br />
            remember !
          </h2>

          <p
            className="
              mt-7
              max-w-[410px]
              text-sm
              leading-6
              text-[var(--fg)]/50
              sm:text-[15px]
              sm:leading-7
            "
          >
            Great digital products are not only about how they
            look. They are about how people feel when they use
            them. These are some of the experiences created with
            our clients.
          </p>

          <div
            className="
              mt-8
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[var(--fg)]/30
            "
          >
            <span className="h-px w-10 bg-blue-400" />
            Built through collaboration
          </div>
        </motion.div>

        {/* =======================================================
            RIGHT SIDE — TESTIMONIAL CARDS
        ======================================================= */}

        <motion.div
          variants={rightVariants}
          className="
            relative
            flex
            min-h-[600px]
            w-full
            items-center
            justify-center
            lg:min-h-[620px]
          "
        >

          {/* RIGHT FRAME */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[3%]
              rounded-[40px]
              border
              border-[var(--fg)]/[0.035]
            "
          />

          {/* OUTER ROTATING CIRCLE */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-blue-400/[0.07]
              lg:block
            "
          />

          {/* INNER CIRCLE */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              hidden
              h-[350px]
              w-[350px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-blue-400/[0.035]
              lg:block
            "
          />

          {/* CENTER LOGO */}

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              hidden
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-blue-400/10
              bg-blue-500/[0.025]
              shadow-[0_0_100px_rgba(59,130,246,.08)]
              lg:flex
            "
          >
            <div
              className="
                flex
                h-[82px]
                w-[82px]
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--surface)]
              "
            >
              <div className="text-center">

                <div className="text-xl font-semibold tracking-[-0.08em] text-blue-400">
                  DES
                </div>

                <div className="mt-1 text-[6px] uppercase tracking-[0.25em] text-[var(--fg)]/30">
                  Reviews
                </div>

              </div>
            </div>
          </motion.div>

          {/* =====================================================
              DESKTOP CARDS
              
              DEFAULT:
              CARD 1 = CENTER
              CARD 2 = LEFT
              CARD 3 = RIGHT
          ===================================================== */}

          <div
            className="
              relative
              hidden
              h-[600px]
              w-full
              lg:block
            "
          >
            {items.map((item, index) => {

              const isActive = activeIndex === index;

              /* ===============================================
                 CARD POSITIONS
                 
                 01 = CENTER
                 02 = LEFT
                 03 = RIGHT
              =============================================== */

              const positions = [
                {
                  x: -180,
                  y: -170,
                  rotate: 0,
                },
                {
                  x: -380,
                  y: -100,
                  rotate: -5,
                },
                {
                  x: -50,
                  y: -100,
                  rotate: 5,
                },
              ];

              const position =
                positions[index] || positions[0];

              return (
                <motion.button
                  key={index}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    x: isActive
                      ? position.x
                      : position.x * 0.95,

                    y: isActive
                      ? position.y
                      : position.y * 0.95,

                    scale: isActive ? 1 : 0.9,

                    rotate: position.rotate,

                    opacity: isActive ? 1 : 0.55,

                    zIndex: isActive
                      ? 30
                      : 10 - index,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    w-[390px]
                    -translate-x-1/2
                    -translate-y-1/2
                    cursor-pointer
                    text-left
                    outline-none
                  "
                >
                  <TestimonialCard
                    item={item}
                    index={index}
                    isActive={isActive}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* =====================================================
              MOBILE / TABLET
          ===================================================== */}

          <div
            className="
              relative
              flex
              w-full
              flex-col
              items-center
              lg:hidden
            "
          >

            <div className="w-full max-w-[420px] overflow-hidden">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -40,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <TestimonialCard
                    item={active}
                    index={activeIndex}
                    isActive
                  />
                </motion.div>

              </AnimatePresence>

            </div>

            {/* MOBILE CONTROLS */}

            <div className="mt-5 flex items-center gap-3">

              <button
                type="button"
                onClick={prevCard}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  text-[var(--fg)]/50
                  transition
                  hover:border-blue-400/30
                  hover:text-blue-400
                "
              >
                <FiChevronLeft size={15} />
              </button>

              <div className="flex items-center gap-1.5">

                {items.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        activeIndex === index
                          ? "w-7 bg-blue-400"
                          : "w-1.5 bg-[var(--fg)]/15"
                      }
                    `}
                  />
                ))}

              </div>

              <button
                type="button"
                onClick={nextCard}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  text-[var(--fg)]/50
                  transition
                  hover:border-blue-400/30
                  hover:text-blue-400
                "
              >
                <FiChevronRight size={15} />
              </button>

            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}

/* ============================================================
   TESTIMONIAL CARD
============================================================ */

function TestimonialCard({ item, index, isActive }) {
  /* ============================================================
     FIXED CARD NUMBERS

     CARD 1 = 01
     CARD 2 = 02
     CARD 3 = 03
  ============================================================ */

  const cardNumber =
    ["01", "02", "03"][index] ||
    String(index + 1).padStart(2, "0");

  return (
    <div
      className={`
        relative
        min-h-[350px]
        overflow-hidden
        rounded-[30px]
        border
        bg-[var(--surface)]
        p-5
        shadow-[0_25px_70px_rgba(0,0,0,.18)]
        transition-all
        duration-500
        ${
          isActive
            ? "border-blue-400/25 shadow-[0_30px_90px_rgba(37,99,235,.12)]"
            : "border-[var(--border)]"
        }
      `}
    >

      {/* GLOW */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-blue-500/[0.08]
          blur-3xl
          transition-opacity
          duration-500
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* TOP */}

      <div className="relative flex items-center justify-between">

        <div className="flex items-center gap-3">

          {/* CARD NUMBER */}

          <div
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              text-[10px]
              font-semibold
              transition-colors
              ${
                isActive
                  ? "border-blue-400/20 bg-blue-500/10 text-blue-400"
                  : "border-[var(--border)] bg-[var(--bg)] text-[var(--fg)]/30"
              }
            `}
          >
            {cardNumber}
          </div>

          {/* STARS */}

          <div className="flex gap-1">

            {Array.from({ length: 5 }).map((_, star) => (
              <FiStar
                key={star}
                size={11}
                className="fill-current text-yellow-400"
              />
            ))}

          </div>

        </div>

        {/* ARROW */}

        <motion.span
          animate={{
            rotate: isActive ? 45 : 0,
          }}
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            ${
              isActive
                ? "border-blue-400/20 text-blue-400"
                : "border-[var(--border)] text-[var(--fg)]/25"
            }
          `}
        >
          <FiArrowUpRight size={15} />
        </motion.span>

      </div>

      {/* QUOTE */}

      <div className="relative mt-7">

        <span
          className="
            absolute
            -left-1
            -top-7
            font-serif
            text-7xl
            leading-none
            text-blue-400/20
          "
        >
          “
        </span>

        <p
          className={`
            relative
            pl-4
            leading-7
            transition-all
            duration-300
            ${
              isActive
                ? "text-[16px] text-[var(--fg)]/75"
                : "line-clamp-3 text-sm text-[var(--fg)]/45"
            }
          `}
        >
          {item.quote}
        </p>

      </div>

      {/* CLIENT */}

      <div className="relative mt-7 border-t border-[var(--border)] pt-5">

        <div className="flex items-center justify-between gap-3">

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold text-[var(--fg)]">
              {item.name || item.client || "Client"}
            </p>

            <p className="mt-1 truncate text-[9px] uppercase tracking-[0.16em] text-[var(--fg)]/30">
              {item.role || item.company || "Client"}
            </p>

          </div>

          {/* VERIFIED */}

          {isActive && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
                flex
                shrink-0
                items-center
                gap-1.5
                rounded-full
                border
                border-emerald-400/10
                bg-emerald-400/[0.05]
                px-2.5
                py-1.5
              "
            >
              <FiCheck
                size={9}
                className="text-emerald-400"
              />

              <span className="text-[7px] uppercase tracking-[0.12em] text-emerald-400/70">
                Verified
              </span>
            </motion.div>
          )}

        </div>

      </div>

    </div>
  );
}