import {
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  "All",
  "Web",
  "App",
  "UI/UX",
  "Branding",
];

const SAMPLE_PROJECTS = [
  {
    slug: 'tamil-printer',
    title: 'Tamil Printer \u2013 Invoice Application',
    body: 'Tamil Printer \u2013 Invoice Application is a simple and efficient billing app that helps businesses create, manage, and print professional invoices quickly. Designed for speed and accuracy, it streamlines daily billing operations and keeps your financial records organized with ease.',
    client: 'Tamilarasi K',
    date: 'Feb 2026',
    technologies: ['React', 'Electron JS', 'MySQL'],
    image: '/images/portfolio/tamil-printer.png',
    isPlaceholder: false,
  },
  {
    slug: 'kings-mechanical-symposium',
    title: 'Kings-Mechanical Symposium 2k25',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Mech Dept - Kings',
    date: 'Apr 2025',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/mechancientz.png',
    isPlaceholder: true,
    placeholderNote: 'Description copy-pasted incorrectly on live site (mentions "Retail Corp" / payment gateways for what is a technical symposium event). Client asked to leave as-is for now.',
  },
  {
    slug: 'sm-manpower-service',
    title: 'SM Manpower Service',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Abi Shek',
    date: 'Apr 2026',
    technologies: ['React', 'MongoDB', 'Firebase'],
    image: '/images/portfolio/sm-manpower.png',
    isPlaceholder: true,
    placeholderNote: 'Same copy-paste bug as above. Client asked to leave as-is for now.',
  },
  {
    slug: 'kings-hall-booking-software',
    title: 'Kings Hall Booking Software',
    body: 'Developed for Retail Corp, this platform supports multiple payment gateways, ensuring a seamless shopping experience for users.',
    client: 'Kings College',
    date: 'Dec 2024',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/portfolio/kings-hall.png',
    isPlaceholder: true,
    placeholderNote: 'Same copy-paste bug as above. Client asked to leave as-is for now.',
  },
]

const CARD_W = 800;
const CARD_H = 530;

const CENTER_X = CARD_W / 2;
const CENTER_Y = 250;

const BIG_SIZE = 950;

const LOGO_SIZE = 130;
const LOGO_POS = 50;

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

export default function PortfolioTeaser({
  projects = SAMPLE_PROJECTS,
}) {
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef(null);

  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  /* =====================================================
     FILTER PROJECTS
  ===================================================== */

  const filtered = useMemo(() => {
    if (category === "All") return projects;

    return projects.filter(
      (project) => project.category === category
    );
  }, [projects, category]);

  const displayProjects =
    filtered.length > 1
      ? [...filtered, ...filtered, ...filtered]
      : filtered;

  const centerIndex =
    filtered.length + index;

  const safeIndex =
    filtered.length > 0
      ? index % filtered.length
      : 0;

  /* =====================================================
     CATEGORY
  ===================================================== */

  function changeCategory(cat) {
    setCategory(cat);
    setIndex(0);
  }

  /* =====================================================
     PREVIOUS / NEXT
  ===================================================== */

  function go(direction) {
    setIndex((prev) => {
      if (filtered.length === 0) return 0;

      return (
        (prev + direction + filtered.length) %
        filtered.length
      );
    });
  }

  /* =====================================================
     AUTO SLIDE
  ===================================================== */

  useEffect(() => {
    if (paused) return;
    if (filtered.length <= 1) return;

    const timer = setInterval(() => {
      setIndex(
        (prev) =>
          (prev + 1) % filtered.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, filtered.length]);

  /* =====================================================
     CARD MOUSE EFFECT
  ===================================================== */

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(
      mouseY,
      [0, 1],
      [12, -12]
    ),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(
      mouseX,
      [0, 1],
      [-14, 14]
    ),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const sheenX = useTransform(
    mouseX,
    [0, 1],
    ["20%", "80%"]
  );

  function onCardMove(e) {
    if (prefersReducedMotion) return;

    const rect =
      e.currentTarget.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) /
        rect.width
    );

    mouseY.set(
      (e.clientY - rect.top) /
        rect.height
    );
  }

  function onCardLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  /* =====================================================
     SECTION SPOTLIGHT
  ===================================================== */

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  function onSectionMove(e) {
    if (prefersReducedMotion) return;

    const rect =
      sectionRef.current.getBoundingClientRect();

    spotX.set(
      ((e.clientX - rect.left) /
        rect.width) *
        100
    );

    spotY.set(
      ((e.clientY - rect.top) /
        rect.height) *
        100
    );
  }

  const spotlight = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(
        700px circle at ${x}% ${y}%,
        rgba(37,99,235,.15),
        transparent 70%
      )`
  );

  /* =====================================================
     KEYBOARD
  ===================================================== */

  function onKeyDown(e) {
    if (e.key === "ArrowLeft") {
      go(-1);
    }

    if (e.key === "ArrowRight") {
      go(1);
    }
  }

  /* =====================================================
     VIEW PROJECT
     NOW LINKS TO SERVICES PAGE
  ===================================================== */

  function goToServices() {
    window.location.href = "/services";
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={onSectionMove}
      className="relative overflow-hidden py-20 lg:py-28 px-6"
      style={{
        background: "#081120",
        color: "#FFFFFF",
      }}
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: spotlight,
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="flex flex-wrap justify-between items-end gap-18 mb-14"
        >
          <div>
            <div
              className="flex items-center gap-2 text-xs tracking-[.25em] text-blue-400 mb-3"
              style={{
                fontFamily:
                  "'IBM Plex Mono', monospace",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-blue-500"
              />

              SELECTED WORK
            </div>

            <h2
              className="text-5xl lg:text-6xl font-semibold leading-none"
              style={{
                fontFamily:
                  "'Fraunces', serif",
              }}
            >
              Featured Projects
            </h2>
          </div>

          <a
            href="/portfolio"
            className="flex items-center gap-2 border-b border-blue-500 pb-1 text-blue-300 hover:text-blue-400 transition"
            style={{
              fontFamily:
                "'IBM Plex Mono', monospace",
            }}
          >
            View Portfolio

            <FiArrowUpRight />
          </a>
        </div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <div
          className="flex flex-wrap gap-4 mb-16"
        >
          {categories.map((cat) => {
            const activeTab =
              cat === category;

            return (
              <button
                key={cat}
                type="button"
                onClick={() =>
                  changeCategory(cat)
                }
                className="rounded-full px-6 py-3 text-sm transition-all duration-300"
                style={{
                  fontFamily:
                    "'IBM Plex Mono', monospace",

                  background: activeTab
                    ? "rgba(37,99,235,.18)"
                    : "transparent",

                  border: `1px solid ${
                    activeTab
                      ? "#3B82F6"
                      : "rgba(255,255,255,.08)"
                  }`,

                  color: activeTab
                    ? "#60A5FA"
                    : "#94A3B8",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* =================================================
            COVERFLOW
        ================================================= */}

        <div
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() =>
            setPaused(true)
          }
          onMouseLeave={() =>
            setPaused(false)
          }
          className="relative flex items-center justify-center outline-none mb-16"
          style={{
            perspective: 1800,
            height: 560,
          }}
        >
          {displayProjects.map(
            (project, i) => {
              const offset =
                i - centerIndex;

              const distance =
                Math.abs(offset);

              const isActive =
                offset === 0;

              if (distance > 2)
                return null;

              const animation =
                prefersReducedMotion
                  ? {
                      x: offset * 450,
                      scale: isActive
                        ? 1
                        : 0.9,
                      opacity: 1,
                    }
                  : {
                      x: offset * 180,
                      rotateY: 0,
                      scale: isActive
                        ? 1
                        : 0.9,
                      opacity: isActive
                        ? 1
                        : 0.75,
                      filter: isActive
                        ? "blur(0px)"
                        : "blur(5px)",
                    };

              return (
                <motion.div
                  key={`${project.slug}-${i}`}
                  animate={animation}
                  transition={{
                    type: "tween",
                    stiffness: 240,
                    damping: 28,
                  }}
                  onClick={() =>
                    setIndex(
                      i %
                        Math.max(
                          filtered.length,
                          1
                        )
                    )
                  }
                  onMouseMove={
                    isActive
                      ? onCardMove
                      : undefined
                  }
                  onMouseLeave={
                    isActive
                      ? onCardLeave
                      : undefined
                  }
                  className="absolute cursor-pointer"
                  style={{
                    width: CARD_W,
                    height: CARD_H,

                    background:
                      "linear-gradient(160deg,#0F172A,#1E293B)",

                    rotateX: isActive
                      ? rotateX
                      : 0,

                    ...(isActive
                      ? { rotateY }
                      : {}),

                    transformStyle:
                      "preserve-3d",

                    zIndex: isActive
                      ? 20
                      : 10,
                  }}
                >
                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="relative overflow-hidden rounded-[28px] w-full h-full p-8"
                    style={{
                      background:
                        "rgba(18,32,61,.72)",

                      backdropFilter:
                        "blur(16px)",

                      border:
                        "1px solid rgba(59,130,246,.18)",

                      boxShadow:
                        "0 0 20px rgba(59,130,246,.20), 0 20px 60px rgba(0,0,0,.35)",
                    }}
                  >
                    {/* =================================================
                        SHEEN
                    ================================================= */}

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            useTransform(
                              sheenX,
                              (x) =>
                                `linear-gradient(
                                  120deg,
                                  transparent 20%,
                                  rgba(255,255,255,.10) ${x},
                                  transparent 80%
                                )`
                            ),
                        }}
                      />
                    )}

                    {/* =================================================
                        PROJECT IMAGE
                    ================================================= */}

                    {isActive ? (
                      <motion.img
                        key={`hero-${project.slug}-${i}`}
                        src={project.image}
                        alt={project.client}
                        initial={{
                          top: CENTER_Y,
                          left:
                            CARD_W + 120,
                          width: BIG_SIZE,
                          height: BIG_SIZE,
                          borderRadius: 24,
                          opacity: 0,
                        }}
                        animate={{
                          top: [
                            CENTER_Y,
                            CENTER_Y,
                            LOGO_POS +
                              LOGO_SIZE / 2,
                          ],

                          left: [
                            CARD_W + 120,
                            CENTER_X,
                            LOGO_POS +
                              LOGO_SIZE / 2,
                          ],

                          width: [
                            BIG_SIZE,
                            BIG_SIZE,
                            LOGO_SIZE,
                          ],

                          height: [
                            BIG_SIZE,
                            BIG_SIZE,
                            LOGO_SIZE,
                          ],

                          borderRadius: [
                            24,
                            24,
                            14,
                          ],

                          opacity: [0, 1, 1],
                        }}
                        transition={{
                          duration: 2,
                          times: [
                            0,
                            0.45,
                            1,
                          ],
                          ease: [
                            "easeOut",
                            "easeInOut",
                          ],
                        }}
                        className="absolute object-cover shadow-xl z-20"
                        style={{
                          transform:
                            "translate(-50%,-50%)",
                        }}
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.client}
                        className="absolute object-cover shadow-lg z-20"
                        style={{
                          top:
                            LOGO_POS +
                            LOGO_SIZE / 2,

                          left:
                            LOGO_POS +
                            LOGO_SIZE / 2,

                          width: LOGO_SIZE,
                          height: LOGO_SIZE,

                          borderRadius: 14,

                          transform:
                            "translate(-50%,-50%)",
                        }}
                      />
                    )}

                    {/* =================================================
                        TEXT
                    ================================================= */}

                    <motion.div
                      key={
                        isActive
                          ? `text-active-${project.slug}-${i}`
                          : `text-static-${project.slug}-${i}`
                      }
                      className="relative z-10 flex flex-col h-full"
                      initial={
                        isActive
                          ? {
                              opacity: 0,
                              y: 16,
                            }
                          : false
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={
                        isActive
                          ? {
                              delay: 2,
                              duration: 0.5,
                              ease: "easeOut",
                            }
                          : {
                              duration: 0,
                            }
                      }
                    >
                      {/* TOP */}

                      <div
                        className="flex items-start justify-between"
                      >
                        <div
                          style={{
                            marginLeft:
                              LOGO_SIZE + 20,
                          }}
                        >
                          <p
                            className="text-blue-200 xl:text-[15px] uppercase tracking-[0.25em] mt-[60px] pl-12"
                            style={{
                              fontFamily:
                                "'IBM Plex Mono', monospace",
                            }}
                          >
                            {project.client}
                          </p>
                        </div>

                        <div className="text-right">
                          <div
                            className="text-xs text-slate-400"
                            style={{
                              fontFamily:
                                "'IBM Plex Mono', monospace",
                            }}
                          >
                            {project.date}
                          </div>

                          <div
                            className="mt-2 inline-flex rounded-full bg-blue-500/20 border border-blue-500/40 px-3 py-1 text-[11px] text-blue-300"
                          >
                            {project.category}
                          </div>
                        </div>
                      </div>

                      {/* CONTENT */}

                      <div
                        className="mt-28 flex-1 flex flex-col"
                      >
                        <h3
                          className="text-4xl leading-tight font-semibold text-white"
                          style={{
                            fontFamily:
                              "'Fraunces', serif",
                          }}
                        >
                          {project.title}
                        </h3>

                        <p
                          className="mt-5 text-[15px] leading-7 text-slate-300"
                          style={{
                            fontFamily:
                              "'Inter', sans-serif",
                          }}
                        >
                          {project.body}
                        </p>

                        {/* TECHNOLOGIES */}

                        <div
                          className="flex flex-wrap gap-3 mt-8"
                        >
                          {project.technologies.map(
                            (tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 rounded-full text-[11px] bg-blue-500/10 border border-blue-500/30 text-blue-200"
                                style={{
                                  fontFamily:
                                    "'IBM Plex Mono', monospace",
                                }}
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>

                        {/* =================================================
                            VIEW PROJECT -> SERVICES
                        ================================================= */}

                        <div className="mt-auto pt-10">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              goToServices();
                            }}
                            className="group flex items-center gap-3 rounded-full bg-blue-600 hover:bg-blue-500 px-7 py-3 text-white font-medium transition-all duration-300 hover:scale-105"
                          >
                            <span>
                              View Project
                            </span>

                            <FiArrowUpRight
                              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>

                    {/* =================================================
                        CARD BORDER GLOW
                    ================================================= */}

                    <motion.div
                      className="absolute inset-0 rounded-[28px] pointer-events-none"
                      animate={
                        isActive
                          ? {
                              opacity: [
                                0.2,
                                0.55,
                                0.2,
                              ],
                            }
                          : {
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: 2.5,
                        repeat:
                          isActive
                            ? Infinity
                            : 0,
                        ease: "easeInOut",
                      }}
                      style={{
                        boxShadow:
                          "inset 0 0 40px rgba(59,130,246,.10)",
                      }}
                    />
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>

      {/* =================================================
          GOOGLE FONT IMPORT
      ================================================= */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');
        `}
      </style>
    </section>
  );
}