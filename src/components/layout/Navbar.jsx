import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiHome,
  FiInfo,
  FiLayers,
  FiGrid,
  FiBox,
  FiBriefcase,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "../../data/nav";
import Button from "../ui/Button";

/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

function DesktopDropdown({ link }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const location = useLocation();

  const isActive = link.dropdown?.some(
    (item) => location.pathname === item.to
  );

  const show = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };

  const hide = () => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`
          group
          relative
          flex
          items-center
          gap-1.5
          text-sm
          font-medium
          transition-all
          duration-300
          ${
            isActive
              ? "text-blue-400"
              : "text-white/80 hover:text-blue-300"
          }
        `}
      >
        <span
          className="
            pointer-events-none
            absolute
            -inset-x-3
            -inset-y-2
            rounded-lg
            bg-blue-500/10
            opacity-0
            blur-md
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        <span className="relative z-10">{link.label}</span>

        <motion.span
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="relative z-10 flex items-center"
        >
          <FiChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 6,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              left-1/2
              top-full
              z-[100]
              w-80
              -translate-x-1/2
              pt-4
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.12]
                bg-[#07111c]/95
                p-2
                shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                backdrop-blur-2xl
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-5
                  right-5
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                "
              />

              {link.dropdown?.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive: itemActive }) =>
                    `
                    group
                    relative
                    block
                    overflow-hidden
                    rounded-xl
                    px-4
                    py-3
                    transition-all
                    duration-200
                    ${
                      itemActive
                        ? "bg-blue-500/10 text-blue-300"
                        : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                    }
                  `
                  }
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-0
                      w-[2px]
                      -translate-y-1/2
                      rounded-full
                      bg-blue-400
                      transition-all
                      duration-300
                      group-hover:h-7
                    "
                  />

                  <p className="text-sm font-medium">{item.label}</p>

                  {item.desc && (
                    <p className="mt-1 text-xs text-white/35">
                      {item.desc}
                    </p>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   MOBILE ACCORDION
========================================================= */

function MobileAccordionItem({ link, onNavigate }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const hasDropdown =
    Array.isArray(link.dropdown) && link.dropdown.length > 0;

  const isActive = hasDropdown
    ? link.dropdown.some(
        (item) => location.pathname === item.to
      )
    : false;

  useEffect(() => {
    if (isActive) {
      setOpen(true);
    }
  }, [isActive]);

  return (
    <div className="relative z-[80] w-full">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`
          group
          relative
          flex
          w-full
          items-center
          justify-between
          overflow-hidden
          rounded-2xl
          border
          px-4
          py-3
          text-left
          transition-all
          duration-300
          ${
            open || isActive
              ? "border-blue-400/20 bg-blue-500/[0.08] text-blue-300"
              : "border-transparent text-white/70 hover:border-white/[0.10] hover:bg-white/[0.055] hover:text-white"
          }
        `}
      >
        <span className="flex items-center gap-4">
          <span
            className={`
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              transition-all
              duration-300
              ${
                open || isActive
                  ? "border-blue-400/30 bg-blue-400/[0.12] text-blue-300"
                  : "border-white/[0.09] bg-white/[0.045] text-blue-300/80"
              }
            `}
          >
            <FiBriefcase size={16} />
          </span>

          <span className="text-[16px] font-medium">
            {link.label}
          </span>
        </span>

        <motion.span
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className={`
            shrink-0
            ${open ? "text-blue-300" : "text-white/35"}
          `}
        >
          <FiChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && hasDropdown && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              },
              opacity: {
                duration: 0.2,
              },
            }}
            className="
              relative
              z-[90]
              overflow-hidden
            "
          >
            <div
              className="
                ml-5
                mt-2
                flex
                flex-col
                gap-1.5
                border-l
                border-blue-400/30
                pl-4
                pb-2
              "
            >
              {link.dropdown.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.22,
                  }}
                >
                  <NavLink
                    to={item.to}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `
                      group
                      relative
                      flex
                      min-h-[44px]
                      w-full
                      items-center
                      overflow-hidden
                      rounded-xl
                      border
                      px-4
                      py-2.5
                      text-sm
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-blue-400/20 bg-blue-500/20 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.08)]"
                          : "border-transparent text-white/55 hover:border-white/[0.08] hover:bg-white/[0.05] hover:text-white"
                      }
                    `
                    }
                  >
                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-0
                        w-[2px]
                        -translate-y-1/2
                        rounded-full
                        bg-blue-400
                        transition-all
                        duration-300
                        group-hover:h-6
                      "
                    />

                    <span className="relative z-10">
                      {item.label}
                    </span>

                    <FiArrowUpRight
                      size={14}
                      className="
                        ml-auto
                        text-white/20
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-blue-300
                      "
                    />
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   MOBILE ICON
========================================================= */

function getMobileIcon(label) {
  const value = label.toLowerCase();

  if (value.includes("home")) return FiHome;
  if (value.includes("about")) return FiInfo;
  if (value.includes("service")) return FiLayers;
  if (value.includes("portfolio")) return FiGrid;
  if (value.includes("product")) return FiBox;
  if (value.includes("opportunit")) return FiBriefcase;
  if (value.includes("contact")) return FiMail;

  return FiArrowUpRight;
}

/* =========================================================
   MOBILE 3D ORBIT MENU
========================================================= */

function MobileOrbitMenu({ open, onNavigate }) {
  const [active, setActive] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const current = navLinks.find((link) => {
      if (link.to === location.pathname) {
        return true;
      }

      if (link.dropdown) {
        return link.dropdown.some(
          (item) => item.to === location.pathname
        );
      }

      return false;
    });

    if (current) {
      setActive(current.label);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            rotateX: 8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.96,
            rotateX: -5,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            fixed
            inset-3
            z-[60]
            overflow-hidden
            rounded-[32px]
            border
            border-white/[0.14]
            bg-[#07111c]/[0.94]
            shadow-[0_30px_120px_rgba(0,0,0,0.65)]
            backdrop-blur-3xl
            backdrop-saturate-150
            lg:hidden
          "
          style={{
            perspective: 1200,
          }}
        >
          {/* ROTATING BACKGROUND */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -inset-[55%]
              z-0
              opacity-50
            "
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: `
                conic-gradient(
                  from 0deg,
                  transparent 0deg,
                  rgba(59,130,246,.13) 70deg,
                  transparent 125deg,
                  rgba(34,211,238,.08) 210deg,
                  transparent 280deg
                )
              `,
            }}
          />

          {/* GRID */}

          <motion.div
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              opacity-[0.055]
            "
            animate={{
              backgroundPosition: [
                "0px 0px",
                "38px 38px",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,.45) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,.45) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "38px 38px",
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, transparent 72%)",
            }}
          />

          {/* AMBIENT ORBS */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -left-28
              top-24
              z-0
              h-72
              w-72
              rounded-full
              bg-blue-500/[0.12]
              blur-[100px]
            "
            animate={{
              x: [0, 35, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              pointer-events-none
              absolute
              -right-28
              bottom-10
              z-0
              h-72
              w-72
              rounded-full
              bg-cyan-400/[0.08]
              blur-[100px]
            "
            animate={{
              x: [0, -30, 0],
              y: [0, -25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* HEADER */}

          <div
            className="
              relative
              z-[100]
              flex
              h-[76px]
              shrink-0
              items-center
              justify-between
              border-b
              border-white/[0.08]
              px-5
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.45,
              }}
              className="relative"
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-4
                  rounded-full
                  bg-blue-400/[0.08]
                  blur-2xl
                "
              />

              <img
                src="/images/portfolio/desflyer nlogo.png"
                alt="DesFlyer"
                className="
                  relative
                  z-10
                  h-10
                  w-auto
                  object-contain
                  drop-shadow-[0_0_18px_rgba(59,130,246,0.22)]
                "
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
              }}
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-white/25
              "
            >
              Navigation
            </motion.div>
          </div>

          {/* CENTRAL 3D CORE */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[36%]
              z-[10]
              h-44
              w-44
              -translate-x-1/2
              -translate-y-1/2
            "
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-blue-400/[0.18]
              "
              animate={{
                rotate: 360,
                scale: [1, 1.04, 1],
              }}
              transition={{
                rotate: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />

            <motion.div
              className="
                absolute
                inset-5
                rounded-full
                border
                border-cyan-300/[0.13]
              "
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="
                absolute
                inset-9
                rounded-full
                border
                border-dashed
                border-white/[0.10]
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            />

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
                shadow-[0_0_18px_rgba(96,165,250,.9)]
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "0 88px",
              }}
            />

            <motion.span
              className="
                absolute
                bottom-2
                left-1/2
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_15px_rgba(34,211,238,.9)]
              "
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "0 -78px",
              }}
            />

            <motion.div
              className="
                absolute
                left-1/2
                top-1/2
                h-28
                w-28
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/[0.12]
                blur-3xl
              "
              animate={{
                scale: [0.9, 1.2, 0.9],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              animate={{
                rotateY: [0, 10, -10, 0],
                rotateX: [0, -6, 6, 0],
                y: [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-[76px]
                w-[76px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-[24px]
                border
                border-white/[0.16]
                bg-white/[0.065]
                shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_0_45px_rgba(59,130,246,.16)]
                backdrop-blur-2xl
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="/images/portfolio/desflyer nlogo.png"
                alt=""
                className="
                  h-11
                  w-auto
                  object-contain
                  opacity-90
                "
              />
            </motion.div>
          </div>

          {/* NAVIGATION */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              top-[76px]
              z-[100]
              flex
              flex-col
              overflow-hidden
              px-5
              pb-5
              pt-4
            "
          >
            <div
              className="
                min-h-0
                flex-1
                overflow-y-auto
                overscroll-contain
                pr-1
                pb-4
                scrollbar-thin
                scrollbar-track-transparent
                scrollbar-thumb-white/10
              "
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const Icon = getMobileIcon(link.label);

                  return (
                    <motion.div
                      key={
                        link.label ||
                        link.to ||
                        index
                      }
                      initial={{
                        opacity: 0,
                        x:
                          index % 2 === 0
                            ? -30
                            : 30,
                        rotateY:
                          index % 2 === 0
                            ? -10
                            : 10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                      }}
                      transition={{
                        delay:
                          0.1 +
                          index * 0.055,
                        duration: 0.45,
                        ease: [
                          0.16,
                          1,
                          0.3,
                          1,
                        ],
                      }}
                      style={{
                        perspective: 800,
                      }}
                      className="relative z-[100]"
                    >
                      {link.dropdown &&
                      link.dropdown.length > 0 ? (
                        <MobileAccordionItem
                          link={link}
                          onNavigate={onNavigate}
                        />
                      ) : (
                        <NavLink
                          to={link.to}
                          onClick={onNavigate}
                          className={({ isActive }) =>
                            `
                            group
                            relative
                            flex
                            items-center
                            justify-between
                            overflow-hidden
                            rounded-2xl
                            border
                            px-3
                            py-2.5
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "border-blue-400/20 bg-blue-500/[0.08]"
                                : "border-transparent hover:border-white/[0.10] hover:bg-white/[0.055]"
                            }
                          `
                          }
                        >
                          <span className="relative flex items-center gap-3.5">
                            <span
                              className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/[0.09]
                                bg-white/[0.045]
                                text-blue-300/80
                              "
                            >
                              <Icon size={15} />
                            </span>

                            <span
                              className="
                                text-[15px]
                                font-medium
                                text-white/70
                                transition-colors
                                duration-300
                                group-hover:text-white
                              "
                            >
                              {link.label}
                            </span>
                          </span>

                          <FiArrowUpRight
                            size={17}
                            className="
                              relative
                              text-white/20
                              transition-all
                              duration-300
                              group-hover:translate-x-1
                              group-hover:text-blue-300
                            "
                          />
                        </NavLink>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.55,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative shrink-0"
            >
              <NavLink
                to="/contact"
                onClick={onNavigate}
                className="
                  group
                  relative
                  flex
                  h-12
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-blue-400/30
                  bg-gradient-to-r
                  from-white/[0.055]
                  via-blue-500/[0.09]
                  to-cyan-400/[0.055]
                  text-sm
                  font-semibold
                  text-white/85
                  shadow-[inset_0_1px_0_rgba(255,255,255,.10),0_0_30px_rgba(59,130,246,.08)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-400/50
                  hover:text-white
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  Let's Talk

                  <FiArrowUpRight
                    size={17}
                    className="text-blue-300"
                  />
                </span>
              </NavLink>
            </motion.div>
          </div>

          {/* TOP REFLECTION */}

          <div
            className="
              pointer-events-none
              absolute
              left-8
              right-8
              top-0
              z-[200]
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
            "
          />

          {/* MOVING GLASS LIGHT */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -inset-[40%]
              z-[20]
              opacity-[0.035]
              blur-2xl
            "
            animate={{
              x: ["-25%", "25%", "-25%"],
              rotate: [8, 0, 8],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background:
                "linear-gradient(115deg, transparent 35%, white 50%, transparent 65%)",
            }}
          />

          {/* CORNER LIGHTS */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-[10]
              h-32
              w-32
              rounded-full
              bg-blue-400/[0.08]
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              z-[10]
              h-28
              w-28
              rounded-full
              bg-cyan-400/[0.05]
              blur-3xl
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /* =======================================================
     SCROLL DIRECTION

     DOWN -> HIDE
     UP   -> SHOW
  ======================================================= */

  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        /* Always show at the very top */

        if (currentScrollY <= 20) {
          setShowNavbar(true);
        }

        /* SCROLL DOWN -> HIDE */

        else if (currentScrollY > previousScrollY) {
          setShowNavbar(false);
        }

        /* SCROLL UP -> SHOW */

        else if (currentScrollY < previousScrollY) {
          setShowNavbar(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          left-1/2
          z-50
          w-[calc(100%-1.5rem)]
          -translate-x-1/2
          overflow-visible
          rounded-2xl
          border
          border-white/[0.10]

          /* LIGHT GRAY STARTING GRADIENT */
          bg-gradient-to-r
          from-gray-200/[0.18]
          via-white/[0.065]
          to-blue-500/[0.045]

          shadow-[0_20px_70px_rgba(0,0,0,0.20)]
          backdrop-blur-2xl

          sm:w-[calc(100%-2rem)]
          lg:max-w-[93%]

          transition-all
          duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${
            showNavbar
              ? "top-3 translate-y-0 opacity-100 sm:top-4 lg:top-5"
              : "-translate-y-[130%] opacity-0"
          }
        `}
      >
        {/* ===================================================
            MOVING GLASS BACKGROUND
        =================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            rounded-2xl

            bg-[linear-gradient(110deg,rgba(220,220,220,0.20),rgba(255,255,255,0.07),rgba(59,130,246,0.06),rgba(34,211,238,0.04),rgba(255,255,255,0.05))]

            bg-[length:300%_300%]
            opacity-70
          "
          animate={{
            backgroundPosition: [
              "0% 50%",
              "100% 50%",
              "0% 50%",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* TOP REFLECTION */}

        <div
          className="
            pointer-events-none
            absolute
            left-[8%]
            right-[8%]
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
          "
        />

        {/* AMBIENT LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            -top-24
            h-44
            w-44
            rounded-full
            bg-gray-200/[0.08]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-44
            w-44
            rounded-full
            bg-cyan-400/[0.025]
            blur-3xl
          "
        />

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <nav
          className="
            relative
            flex
            h-16
            items-center
            justify-between
            px-4
            sm:h-[68px]
            sm:px-6
            lg:px-7
          "
        >
          {/* LOGO */}

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center"
          >
            <motion.div
              whileHover={{
                scale: 1.035,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative flex items-center"
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-4
                  rounded-full
                  bg-blue-400/10
                  opacity-0
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <img
                src="/images/portfolio/desflyer nlogo.png"
                alt="DesFlyer"
                className="
                  relative
                  z-10
                  h-10
                  w-auto
                  max-w-[150px]
                  object-contain
                  drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                "
              />
            </motion.div>
          </NavLink>

          {/* =================================================
              DESKTOP LINKS
          ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-8
              lg:flex
              xl:gap-9
            "
          >
            {navLinks.map((link) =>
              link.dropdown &&
              link.dropdown.length > 0 ? (
                <DesktopDropdown
                  key={link.label}
                  link={link}
                />
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `
                    group
                    relative
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-blue-400"
                        : "text-white/75 hover:text-blue-300"
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className="
                          pointer-events-none
                          absolute
                          -inset-x-3
                          -inset-y-2
                          rounded-lg
                          bg-blue-500/10
                          opacity-0
                          blur-md
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      />

                      <span className="relative z-10">
                        {link.label}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="navbarActive"
                          className="
                            absolute
                            -bottom-2
                            left-0
                            right-0
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-blue-400
                            to-transparent
                            shadow-[0_0_8px_rgba(96,165,250,0.8)]
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div className="hidden items-center lg:flex">
            <Button
              to="/contact"
              variant="outline"
              className="
                group
                relative
                overflow-hidden
                border
                border-blue-400/25
                bg-white/[0.035]
                px-5
                py-2.5
                text-white/85
                shadow-[inset_0_1px_0_rgba(255,255,255,.08)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-400/50
                hover:bg-blue-500/10
                hover:text-blue-300
                hover:shadow-[0_0_25px_rgba(59,130,246,.12)]
              "
            >
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.06]
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">
                Let's Talk
              </span>
            </Button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() =>
                setOpen((value) => !value)
              }
              aria-label={
                open
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={open}
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-white/[0.14]
                bg-white/[0.055]
                text-white/80
                shadow-[inset_0_1px_0_rgba(255,255,255,.10),0_0_25px_rgba(59,130,246,.08)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-400/30
                hover:bg-blue-500/[0.08]
              "
            >
              <motion.span
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-blue-400/20
                "
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [
                    0.5,
                    0.15,
                    0.5,
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <AnimatePresence mode="wait">
                {open ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.5,
                    }}
                    className="relative z-10"
                  >
                    <FiX size={21} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    className="relative z-10"
                  >
                    <FiMenu size={21} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE 3D MENU */}

      <MobileOrbitMenu
        open={open}
        onNavigate={() => setOpen(false)}
      />
    </>
  );
}