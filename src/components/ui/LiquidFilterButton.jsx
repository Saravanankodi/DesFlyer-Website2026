import { motion } from "framer-motion";

export default function LiquidFilterButton({
  children,
  active,
  onClick,
}) {
  return (
    <>
      {/* SVG Goo Filter */}
      <svg
        width="0"
        height="0"
        style={{
          position: "absolute",
        }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="8"
              result="blur"
            />

            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 22 -10
              "
              result="goo"
            />

            <feBlend
              in="SourceGraphic"
              in2="goo"
            />
          </filter>
        </defs>
      </svg>

      <div
        style={{
          filter: "url(#goo)",
        }}
        className="relative inline-flex"
      >
        <motion.button
          onClick={onClick}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            relative
            px-5
            py-2.5
            rounded-full
            font-medium
            overflow-visible
            border
            transition-all
            duration-300
          "
        >
          {/* Liquid Background */}
          {active && (
            <motion.div
              layoutId="liquid"

              transition={{
                type: "spring",
                stiffness: 250,
                damping: 24,
              }}

              className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-sky-500
                to-cyan-400
                -z-10
              "
            />
          )}

          {/* Liquid Blob 1 */}
          {active && (
            <motion.div
              animate={{
                x: [0, 8, -6, 0],
                y: [0, -4, 5, 0],
                scale: [1, 1.15, 0.95, 1],
              }}

              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}

              className="
                absolute
                w-5
                h-5
                rounded-full
                bg-sky-400
                -top-2
                left-5
                -z-20
              "
            />
          )}

          {/* Liquid Blob 2 */}
          {active && (
            <motion.div
              animate={{
                x: [0, -10, 8, 0],
                y: [0, 6, -5, 0],
                scale: [1, 0.9, 1.2, 1],
              }}

              transition={{
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
              }}

              className="
                absolute
                w-6
                h-6
                rounded-full
                bg-blue-400
                bottom-0
                right-6
                -z-20
              "
            />

          )}

          <span
            className={`relative z-20 ${
              active
                ? "text-white"
                : "text-[var(--fg)]"
            }`}
          >
            {children}
          </span>
        </motion.button>
      </div>
    </>
  );
}