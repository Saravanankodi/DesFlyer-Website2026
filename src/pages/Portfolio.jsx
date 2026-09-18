import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUp,
  FiArrowUpRight,
  FiLayers,
  FiUser,
  FiCalendar,
  FiExternalLink,
  FiHeart,
  FiMessageCircle,
  FiX,
  FiSend,
  FiCheck,
} from "react-icons/fi";

/* =========================================================
   THEME
========================================================= */

const BLUE = "#2E6FFF";
const BLUE_SOFT = "#5C8CFF";

const ANIMATION_DURATION = 0.68;

const LAYER_TOP = 18;
const LAYER_LEFT = 15;
const LAYER_RIGHT = 15;

const MOBILE_BREAKPOINT = 768;
const SWIPE_THRESHOLD = 45;
const WHEEL_THRESHOLD = 8;

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    index: "01",
    category: "APP",
    title: "Tamil Printer – Invoice Application",
    description:
      "Tamil Printer – Invoice Application is a simple and efficient billing app that helps businesses create, manage, and print professional invoices quickly. Designed for speed and accuracy, it streamlines daily billing operations and keeps your financial records organized with ease.",
    technologies: ["React", "Electron JS", "MySQL"],
    client: "Tamilarasi K",
    date: "Feb 2026",
    image: "/images/portfolio/tamil-printer.png",
    githubUrl: "#",
  },

  {
    id: 2,
    index: "02",
    category: "WEB",
    title: "Kings-Mechanical Symposium 2k25",
    description:
      "A modern event platform created for Kings Mechanical Symposium with an interactive experience for students, participants, and organizers.",
    technologies: ["React", "Node.js", "MongoDB"],
    client: "Mech Dept - Kings",
    date: "Apr 2025",
    image: "/images/portfolio/mechancientz.png",
    githubUrl: "#",
  },

  {
    id: 3,
    index: "03",
    category: "WEB",
    title: "SM Manpower Service",
    description:
      "A professional manpower service platform designed to present services, connect clients, and provide a clean digital experience.",
    technologies: ["React", "MongoDB", "Firebase"],
    client: "Abi Shek",
    date: "Apr 2026",
    image: "/images/portfolio/sm-manpower.png",
    githubUrl: "#",
  },

  {
    id: 4,
    index: "04",
    category: "APP",
    title: "Kings Hall Booking Software",
    description:
      "A dedicated booking platform designed to simplify hall reservations and manage booking information through a structured digital workflow.",
    technologies: ["React", "Node.js", "MongoDB"],
    client: "Kings College",
    date: "Dec 2024",
    image: "/images/portfolio/kings-hall.png",
    githubUrl: "#",
  },

  {
    id: 5,
    index: "05",
    category: "UI/UX",
    title: "Digital Product Experience",
    description:
      "A modern digital product experience focused on intuitive interfaces, structured interactions and a clean user journey across multiple screens.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    client: "DES",
    date: "2026",
    image: "/images/portfolio/product.png",
    githubUrl: "#",
  },
];

/* =========================================================
   PROJECT DETAILS / COMMENT POPUP
========================================================= */

function ProjectDetailsPopup({ project, onClose }) {
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!project) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow =
      document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow =
        previousHtmlOverflow;
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!comment.trim()) return;

    setSubmitted(true);

    setTimeout(() => {
      setComment("");
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed
          inset-0
          z-[99999]
          flex
          items-center
          justify-center
          bg-black/75
          p-4
          backdrop-blur-md
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 20,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseDown={(event) => event.stopPropagation()}
          className="
            relative
            w-full
            max-w-md
            overflow-hidden
            rounded-[28px]
            border
            border-blue-400/20
            bg-[#080d17]
            px-6
            py-8
            text-center
            shadow-[0_30px_100px_rgba(0,0,0,0.7)]
            sm:px-10
            sm:py-10
          "
        >
          {/* BLUE GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-40
              w-64
              -translate-x-1/2
              rounded-full
              bg-blue-500/10
              blur-[80px]
            "
          />

          {/* GRID */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.025]
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />

          {/* CLOSE */}

          <button
            type="button"
            onClick={onClose}
            className="
              absolute
              right-4
              top-4
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white/40
              transition-all
              duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/10
              hover:text-white
            "
          >
            <FiX size={15} />
          </button>

          {/* CONTENT */}

          <div className="relative z-10">
            {/* LOGO */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                mx-auto
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-400/20
                bg-blue-500/[0.06]
                p-3
                shadow-[0_0_35px_rgba(46,111,255,0.12)]
              "
            >
              <img
                src="/images/portfolio/logo.png"
                alt="DESFlyer"
                className="h-full w-full object-contain"
              />
            </motion.div>

            {/* SMALL LABEL */}

            <div
              className="
                mb-3
                text-[8px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-blue-400
              "
            >
              YOUR FEEDBACK
            </div>

            {/* QUESTION */}

            <h3
              className="
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
              What do you think
              <span className="block text-white/35">
                about this web?
              </span>
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-xs
                text-[10px]
                leading-5
                text-white/30
              "
            >
              Your feedback helps us make
              the experience better.
            </p>

            {/* INPUT */}

            <form
              onSubmit={handleSubmit}
              className="mt-7"
            >
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  transition-all
                  duration-300
                  focus-within:border-blue-400/40
                  focus-within:bg-blue-500/[0.03]
                "
              >
                <textarea
                  value={comment}
                  onChange={(event) =>
                    setComment(event.target.value)
                  }
                  placeholder="Type your answer..."
                  rows={4}
                  autoFocus
                  className="
                    block
                    w-full
                    resize-none
                    bg-transparent
                    px-4
                    py-4
                    text-xs
                    leading-5
                    text-white
                    outline-none
                    placeholder:text-white/20
                  "
                />

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.06]
                    px-3
                    py-2.5
                  "
                >
                  <span
                    className="
                      text-[7px]
                      tracking-[0.15em]
                      text-white/20
                    "
                  >
                    YOUR THOUGHTS
                  </span>

                  <span
                    className="
                      text-[7px]
                      text-white/20
                    "
                  >
                    {comment.length}/500
                  </span>
                </div>
              </div>

              {/* SEND */}

              <button
                type="submit"
                disabled={!comment.trim() || submitted}
                className="
                  group
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-2xl
                  border
                  border-blue-400/30
                  bg-blue-500/10
                  px-5
                  py-3.5
                  text-[9px]
                  font-bold
                  tracking-[0.2em]
                  text-blue-300
                  transition-all
                  duration-300
                  hover:border-blue-400/60
                  hover:bg-blue-500/20
                  hover:text-white
                  disabled:pointer-events-none
                  disabled:opacity-30
                "
              >
                {submitted ? (
                  <>
                    <FiCheck size={14} />
                    THANK YOU
                  </>
                ) : (
                  <>
                    SEND FEEDBACK
                    <FiSend
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* TOP BLUE LINE */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-px
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(46,111,255,0.8), transparent)",
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  return (
    <article
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[22px]
        border
      "
      style={{
        borderColor: "rgba(46,111,255,0.55)",
        background:
          "linear-gradient(145deg, rgba(7,19,45,0.98) 0%, rgba(3,8,20,0.99) 100%)",
        boxShadow:
          "0 25px 80px rgba(0,0,0,0.65), 0 0 55px rgba(46,111,255,0.13)",
      }}
    >
      {/* BLUE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(46,111,255,0.20), transparent 68%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[350px]
          w-[350px]
          rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(92,140,255,0.09), transparent 68%)",
        }}
      />

      {/* GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* =====================================================
          MOBILE CARD
          ONLY VISIBLE BELOW 768px
      ===================================================== */}

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6 md:hidden">

        {/* =================================================
            TOP — IMAGE LOGO + TITLE
        ================================================= */}

        <div className="flex items-start gap-4">

          {/* PROJECT IMAGE AS LOGO */}

          <div
            className="
              relative
              h-[64px]
              w-[64px]
              shrink-0
              overflow-hidden
              rounded-2xl
              border
              border-blue-400/25
              bg-[#071326]
              shadow-[0_0_30px_rgba(46,111,255,0.15)]
            "
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              draggable="false"
              className="
                h-full
                w-full
                select-none
                object-cover
              "
            />

            {/* IMAGE OVERLAY */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-500/10
                via-transparent
                to-black/35
              "
            />

            {/* INDEX */}

            <span
              className="
                absolute
                bottom-1
                right-1
                rounded-md
                border
                border-white/10
                bg-black/60
                px-1.5
                py-0.5
                font-mono
                text-[6px]
                text-blue-300
                backdrop-blur-md
              "
            >
              {project.index}
            </span>
          </div>

          {/* TITLE AREA */}

          <div className="min-w-0 flex-1 pt-0.5">

            {/* CATEGORY LINE */}

            {/* <div className="mb-2 flex items-center gap-2">

              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_10px_rgba(46,111,255,0.9)]
                "
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-blue-400
                "
              >
                {project.category}
              </span>

            </div> */}

            {/* TITLE */}

            <h2
              className="
                text-[21px]
                leading-[0.98]
                tracking-tight
                text-[#F3F7FF]
              "
              style={{
                fontFamily: "'Anton', sans-serif",
              }}
            >
              {project.title}
            </h2>

          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-500/40 via-white/10 to-transparent" />

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <div className="mt-4">

          <div
            className="
              mb-2
              font-mono
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-white/25
            "
          >
            About Project
          </div>

          <p
            className="
          
              text-[12px]
              leading-[1.6]
              text-white/50
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {project.description}
          </p>

        </div>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <div className="mt-4">

          <div
            className="
              mb-2
              flex
              items-center
              gap-2
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
            <FiLayers
              size={12}
              className="text-blue-400"
            />

            Technology
          </div>

          <div className="flex flex-wrap gap-1.5">

            {project.technologies.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-blue-500/[0.035]
                  px-2.5
                  py-1.5
                  font-mono
                  text-[10px]
                  tracking-[0.08em]
                  text-white/55
                "
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* =================================================
            CATEGORY
        ================================================= */}

        <div className="mt-4">

          <div
            className="
              mb-2
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
            Category
          </div>

          <div
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/15
              bg-blue-500/[0.05]
              px-3
              py-1.5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-blue-300/80
              "
            >
              {project.category}
            </span>
          </div>

        </div>

        {/* =================================================
            CLIENT + DELIVERED
        ================================================= */}

        <div className="mt-4 grid grid-cols-2 gap-2">

          {/* CLIENT */}

          <div
            className="
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-3
            "
          >

            <FiUser
              size={12}
              className="mb-2 text-blue-400"
            />

            <p
              className="
                mb-1
                font-mono
                text-[6px]
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Client
            </p>

            <p className="truncate text-[8px] text-white/65">
              {project.client}
            </p>

          </div>

          {/* DELIVERED */}

          <div
            className="
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-3
            "
          >

            <FiCalendar
              size={12}
              className="mb-2 text-blue-400"
            />

            <p
              className="
                mb-1
                font-mono
                text-[6px]
                uppercase
                tracking-[0.18em]
                text-white/25
              "
            >
              Delivered
            </p>

            <p className="text-[8px] text-white/65">
              {project.date}
            </p>

          </div>

        </div>

        {/* =================================================
            VIEW PROJECT BUTTON
        ================================================= */}

        <div className="mt-auto pt-5">

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              border-blue-400/25
              bg-blue-500/[0.07]
              px-4
              py-3
              transition-all
              duration-300
              hover:border-blue-400/60
              hover:bg-blue-500/15
            "
          >

            <span className="flex items-center gap-3">

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#050912]
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <FiExternalLink size={12} />
              </span>

              <span className="flex flex-col items-start">

                <span
                  className="
                    font-mono
                    text-[6px]
                    uppercase
                    tracking-[0.22em]
                    text-blue-400
                  "
                >
                  Explore
                </span>

                <span
                  className="
                    mt-0.5
                    text-[10px]
                    font-semibold
                    tracking-wide
                    text-white
                  "
                  style={{
                    fontFamily:
                      '"Chakra Petch", sans-serif',
                  }}
                >
                  VIEW PROJECT
                </span>

              </span>

            </span>

            <FiArrowUpRight
              size={16}
              className="
                text-blue-400
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </a>

        </div>

      </div>

      {/* =====================================================
          DESKTOP / TABLET CARD
          ORIGINAL DESIGN — UNCHANGED
      ===================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          h-full
          grid-cols-1
          md:grid
          md:grid-cols-[1.15fr_0.85fr]
        "
      >

        {/* LEFT */}

        <div
          className="
            flex
            min-h-0
            flex-col
            p-4
            sm:p-6
            lg:p-7
          "
        >

          {/* CATEGORY */}

          <div className="mb-3 flex items-center gap-3 sm:mb-4">

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.25em]
              "
              style={{
                fontFamily:
                  "'JetBrains Mono', monospace",
                color: BLUE_SOFT,
              }}
            >
              {project.index}
            </span>

            <span
              className="h-px w-7"
              style={{
                background:
                  "rgba(46,111,255,0.4)",
              }}
            />

            <span
              className="
                truncate
                text-[8px]
                tracking-[0.16em]
                text-white/40
              "
              style={{
                fontFamily:
                  "'JetBrains Mono', monospace",
              }}
            >
              {project.category}
            </span>

          </div>

          {/* TITLE */}

          <h2
            className="
              mt-5
              max-w-2xl
              text-xl
              leading-[0.98]
              text-[#F3F7FF]
              sm:text-3xl
              lg:text-4xl
            "
            style={{
              fontFamily:
                "'Anton', sans-serif",
            }}
          >
            {project.title}
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              max-w-xl
              text-[10px]
              leading-5
              text-white/45
              sm:mt-4
              sm:text-xs
              sm:leading-6
            "
            style={{
              fontFamily:
                "'Inter', sans-serif",
            }}
          >
            {project.description}
          </p>

          {/* TECHNOLOGY */}

          <div className="mt-4 sm:mt-5">

            <div
              className="
                mb-2
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/30
              "
              style={{
                fontFamily:
                  "'JetBrains Mono', monospace",
              }}
            >
              <FiLayers size={11} />
              Technology
            </div>

            <div className="flex flex-wrap gap-1.5">

              {project.technologies.map(
                (tag) => (
                  <span
                    key={tag}
                    className="
                      mt-3
                      rounded-full
                      border
                      px-2
                      py-1
                      text-[7px]
                      font-medium
                      tracking-wider
                      text-white/55
                      sm:px-2.5
                      sm:py-1.5
                      sm:text-[8px]
                    "
                    style={{
                      fontFamily:
                        "'JetBrains Mono', monospace",
                      borderColor:
                        "rgba(255,255,255,0.10)",
                      background:
                        "rgba(46,111,255,0.025)",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}

            </div>

          </div>

          {/* CLIENT + DATE */}

          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5">

            <div
              className="
                mt-2
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-2.5
                sm:p-3
              "
            >

              <FiUser
                size={12}
                className="mb-1.5 text-blue-400 sm:mb-2"
              />

              <p
                className="
                  mb-1
                  text-[6px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                  sm:text-[7px]
                "
              >
                Client
              </p>

              <p className="truncate text-[8px] text-white/65 sm:text-[9px]">
                {project.client}
              </p>

            </div>

            <div
              className="
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.02]
                p-2.5
                sm:p-3
              "
            >

              <FiCalendar
                size={12}
                className="mb-1.5 text-blue-400 sm:mb-2"
              />

              <p
                className="
                  mb-1
                  text-[6px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                  sm:text-[7px]
                "
              >
                Delivered
              </p>

              <p className="text-[8px] text-white/65 sm:text-[9px]">
                {project.date}
              </p>

            </div>

          </div>

          {/* VIEW */}

          <div className="mt-auto pt-4 sm:pt-5">

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                group
                flex
                w-fit
                items-center
                gap-2
                text-[8px]
                font-medium
                tracking-[0.12em]
                text-white/75
                transition-all
                duration-300
                hover:text-white
                sm:gap-2.5
                sm:text-[10px]
              "
              style={{
                fontFamily:
                  "'JetBrains Mono', monospace",
              }}
            >

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#050912]
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                  sm:h-9
                  sm:w-9
                "
              >
                <FiExternalLink size={12} />
              </span>

              VIEW PROJECT

              <FiArrowUpRight
                size={12}
                className="
                  text-blue-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div
          className="
            relative
            min-h-[170px]
            overflow-hidden
            border-t
            border-white/[0.06]
            bg-[#060D18]
            sm:min-h-[220px]
            md:min-h-0
            md:border-l
            md:border-t-0
          "
        >

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[60%]
              w-[60%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/20
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              inset-3
              overflow-hidden
              rounded-[16px]
              border
              border-white/[0.08]
              bg-[#071326]
              sm:inset-5
              sm:rounded-[18px]
              md:inset-6
            "
          >

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              draggable="false"
              className="
                h-full
                w-full
                select-none
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.03]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#020611]/70
                via-transparent
                to-blue-500/[0.05]
              "
            />

            <div
              className="
                absolute
                right-3
                top-3
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                text-[8px]
                text-white/70
                backdrop-blur-xl
                sm:right-4
                sm:top-4
                sm:h-9
                sm:w-9
                sm:text-[9px]
              "
            >
              {project.index}
            </div>

            <div
              className="
                absolute
                bottom-3
                left-3
                rounded-full
                border
                border-white/10
                bg-black/35
                px-2.5
                py-1
                text-[6px]
                uppercase
                tracking-[0.18em]
                text-white/70
                backdrop-blur-xl
                sm:bottom-4
                sm:left-4
                sm:px-3
                sm:py-1.5
                sm:text-[7px]
              "
            >
              {project.category}
            </div>

          </div>

        </div>

      </div>

      {/* BLUE EDGE */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-30
          h-px
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(46,111,255,0.8), transparent)",
        }}
      />

    </article>
  );
}


/* =========================================================
   SIDE NAVIGATION
========================================================= */

function SideControls({
  activeCard,
  totalProjects,
  goToProject,
  onOpenDetails,
}) {
  const [liked, setLiked] = useState(false);

  const isFirst = activeCard === 0;
  const isLast = activeCard === totalProjects - 1;

  return (
    <>
      <div
        className="
          absolute
          right-0
          top-1/2
          z-[50]
          hidden
          translate-x-[calc(100%+14px)]
          -translate-y-1/2
          flex-col
          gap-2
          lg:flex
          xl:pl-16
        "
      >
        {/* PREVIOUS */}

        <button
          type="button"
          aria-label="Previous project"
          disabled={isFirst}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            if (!isFirst) {
              goToProject(activeCard - 1);
            }
          }}
          className="
            group
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#07111f]/95
            text-white/50
            shadow-[0_10px_30px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-400/60
            hover:bg-blue-500/10
            hover:text-blue-300
            disabled:pointer-events-none
            disabled:opacity-20
          "
        >
          <FiArrowUp
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-1
            "
          />
        </button>

        {/* LIKE */}

        <button
          type="button"
          aria-label={
            liked
              ? "Unlike project"
              : "Like project"
          }
          aria-pressed={liked}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            setLiked((value) => !value);
          }}
          className={`
            group
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            bg-[#07111f]/95
            shadow-[0_10px_30px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-all
            duration-300
            ${liked
              ? "border-blue-400/70 bg-blue-500/15 text-blue-300"
              : "border-white/10 text-white/50 hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-300"
            }
          `}
        >
          <FiHeart
            size={17}
            className={`
              transition-all
              duration-300
              ${liked
                ? "scale-110 fill-blue-400"
                : "group-hover:scale-110"
              }
            `}
          />
        </button>

        {/* COMMENT */}

        <button
          type="button"
          aria-label="View project details and comment"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            onOpenDetails();
          }}
          className="
            group
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#07111f]/95
            text-white/50
            shadow-[0_10px_30px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-400/60
            hover:bg-blue-500/10
            hover:text-blue-300
          "
        >
          <FiMessageCircle
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </button>

        {/* NEXT */}

        <button
          type="button"
          aria-label="Next project"
          disabled={isLast}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            if (!isLast) {
              goToProject(activeCard + 1);
            }
          }}
          className="
            group
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#07111f]/95
            text-white/50
            shadow-[0_10px_30px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-400/60
            hover:bg-blue-500/10
            hover:text-blue-300
            disabled:pointer-events-none
            disabled:opacity-20
          "
        >
          <FiArrowDown
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:translate-y-1
            "
          />
        </button>
      </div>
    </>
  );
}

/* =========================================================
   PROJECT STACK
========================================================= */

export default function ProjectStack() {
  const sectionRef = useRef(null);

  const activeRef = useRef(0);
  const animatingRef = useRef(false);

  const touchStartRef = useRef(null);
  const touchStartXRef = useRef(null);

  const unlockTimerRef = useRef(null);
  const wheelResetTimerRef = useRef(null);

  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [detailsProject, setDetailsProject] =
    useState(null);

  const prefersReducedMotion =
    useReducedMotion();

  /* =========================================================
     KEEP ACTIVE REF IN SYNC
  ========================================================= */

  useEffect(() => {
    activeRef.current = activeCard;
  }, [activeCard]);

  /* =========================================================
     DEVICE CHECK
  ========================================================= */

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.innerWidth <
        MOBILE_BREAKPOINT
      );
    };

    checkDevice();

    window.addEventListener(
      "resize",
      checkDevice
    );

    window.addEventListener(
      "orientationchange",
      checkDevice
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkDevice
      );

      window.removeEventListener(
        "orientationchange",
        checkDevice
      );
    };
  }, []);

  /* =========================================================
     OPEN DETAILS
  ========================================================= */

  const openDetails = useCallback(
    (project) => {
      setDetailsProject(project);
    },
    []
  );

  /* =========================================================
     CLOSE DETAILS
  ========================================================= */

  const closeDetails = useCallback(() => {
    setDetailsProject(null);
  }, []);

  /* =========================================================
     LOCK PAGE
  ========================================================= */

  const lockPage = useCallback(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow =
      "hidden";

    document.body.style.overscrollBehavior =
      "none";

    document.documentElement.style.overscrollBehavior =
      "none";
  }, []);

  /* =========================================================
     UNLOCK PAGE
  ========================================================= */

  const unlockPage = useCallback(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.body.style.overflow = "";
    document.documentElement.style.overflow =
      "";

    document.body.style.overscrollBehavior =
      "";

    document.documentElement.style.overscrollBehavior =
      "";
  }, []);

  /* =========================================================
     CHECK WHETHER STACK IS IN VIEW
  ========================================================= */

  const isStackInView = useCallback(() => {
    const section = sectionRef.current;

    if (!section) {
      return false;
    }

    const rect =
      section.getBoundingClientRect();

    const tolerance = isMobile ? 45 : 80;

    const topVisible =
      rect.top <= tolerance &&
      rect.top >= -tolerance;

    const bottomVisible =
      rect.bottom >=
      window.innerHeight - tolerance;

    return (
      topVisible &&
      bottomVisible
    );
  }, [isMobile]);

  /* =========================================================
     SNAP SECTION TO VIEWPORT
  ========================================================= */

  const snapToSection = useCallback(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const rect =
      section.getBoundingClientRect();

    if (
      rect.top > -100 &&
      rect.top < 100
    ) {
      window.scrollTo({
        top:
          window.scrollY +
          rect.top,

        behavior:
          prefersReducedMotion
            ? "auto"
            : "smooth",
      });
    }
  }, [prefersReducedMotion]);

  /* =========================================================
     CHANGE CARD
  ========================================================= */

  const changeCard = useCallback(
    (direction) => {
      if (animatingRef.current) {
        return false;
      }

      const current =
        activeRef.current;

      const next =
        direction > 0
          ? Math.min(
            current + 1,
            projects.length - 1
          )
          : Math.max(
            current - 1,
            0
          );

      if (next === current) {
        return false;
      }

      animatingRef.current = true;

      activeRef.current = next;

      setActiveCard(next);

      window.clearTimeout(
        unlockTimerRef.current
      );

      unlockTimerRef.current =
        window.setTimeout(
          () => {
            animatingRef.current =
              false;
          },
          prefersReducedMotion
            ? 150
            : 700
        );

      return true;
    },
    [prefersReducedMotion]
  );

  /* =========================================================
     HANDLE DIRECTION
  ========================================================= */

  const handleNavigation =
    useCallback(
      (direction, event = null) => {
        const current =
          activeRef.current;

        if (!isStackInView()) {
          return;
        }

        /* NEXT */

        if (
          direction > 0 &&
          current <
          projects.length - 1
        ) {
          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }

          lockPage();

          changeCard(1);

          return;
        }

        /* LAST CARD */

        if (
          direction > 0 &&
          current ===
          projects.length - 1
        ) {
          unlockPage();

          return;
        }

        /* PREVIOUS */

        if (
          direction < 0 &&
          current > 0
        ) {
          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }

          lockPage();

          changeCard(-1);

          return;
        }

        /* FIRST CARD */

        if (
          direction < 0 &&
          current === 0
        ) {
          unlockPage();
        }
      },
      [
        changeCard,
        isStackInView,
        lockPage,
        unlockPage,
      ]
    );

  /* =========================================================
     DESKTOP / TABLET WHEEL
  ========================================================= */

  useEffect(() => {
    const handleWheel = (event) => {
      if (
        Math.abs(event.deltaX) >
        Math.abs(event.deltaY)
      ) {
        return;
      }

      if (
        Math.abs(event.deltaY) <
        WHEEL_THRESHOLD
      ) {
        return;
      }

      if (!isStackInView()) {
        return;
      }

      if (animatingRef.current) {
        event.preventDefault();

        return;
      }

      const direction =
        event.deltaY > 0 ? 1 : -1;

      handleNavigation(
        direction,
        event
      );

      window.clearTimeout(
        wheelResetTimerRef.current
      );

      wheelResetTimerRef.current =
        window.setTimeout(
          () => {
            animatingRef.current =
              false;
          },
          prefersReducedMotion
            ? 100
            : 650
        );
    };

    window.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
    );

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel
      );

      window.clearTimeout(
        wheelResetTimerRef.current
      );

      unlockPage();
    };
  }, [
    handleNavigation,
    isStackInView,
    unlockPage,
    prefersReducedMotion,
  ]);

  /* =========================================================
     KEYBOARD NAVIGATION
  ========================================================= */

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (!isStackInView()) {
        return;
      }

      const tag =
        event.target?.tagName?.toLowerCase();

      if (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select"
      ) {
        return;
      }

      if (
        event.key === "ArrowDown" ||
        event.key === "PageDown"
      ) {
        handleNavigation(
          1,
          event
        );

        return;
      }

      if (
        event.key === "ArrowUp" ||
        event.key === "PageUp"
      ) {
        handleNavigation(
          -1,
          event
        );
      }

      /* HOME */

      if (event.key === "Home") {
        event.preventDefault();

        if (
          activeRef.current > 0
        ) {
          lockPage();

          activeRef.current = 0;

          setActiveCard(0);
        } else {
          unlockPage();
        }

        return;
      }

      /* END */

      if (event.key === "End") {
        event.preventDefault();

        if (
          activeRef.current <
          projects.length - 1
        ) {
          lockPage();

          activeRef.current =
            projects.length - 1;

          setActiveCard(
            projects.length - 1
          );
        } else {
          unlockPage();
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [
    handleNavigation,
    isStackInView,
    lockPage,
    unlockPage,
  ]);

  /* =========================================================
     MOBILE TOUCH START
  ========================================================= */

  const handleTouchStart = (
    event
  ) => {
    if (!isMobile) {
      return;
    }

    const touch =
      event.touches?.[0];

    if (!touch) {
      return;
    }

    touchStartRef.current =
      touch.clientY;

    touchStartXRef.current =
      touch.clientX;
  };

  /* =========================================================
     MOBILE TOUCH MOVE
  ========================================================= */

  const handleTouchMove = () => {
    if (!isMobile) {
      return;
    }

    /*
     * Keep native mobile scrolling.
     */
  };

  /* =========================================================
     MOBILE TOUCH END
  ========================================================= */

  const handleTouchEnd = (
    event
  ) => {
    if (!isMobile) {
      return;
    }

    if (
      touchStartRef.current ===
      null
    ) {
      return;
    }

    const touch =
      event.changedTouches?.[0];

    if (!touch) {
      touchStartRef.current =
        null;

      touchStartXRef.current =
        null;

      return;
    }

    const endY =
      touch.clientY;

    const endX =
      touch.clientX;

    const distanceY =
      touchStartRef.current -
      endY;

    const distanceX =
      touchStartXRef.current -
      endX;

    touchStartRef.current =
      null;

    touchStartXRef.current =
      null;

    if (
      Math.abs(distanceX) >
      Math.abs(distanceY)
    ) {
      return;
    }

    if (
      Math.abs(distanceY) <
      SWIPE_THRESHOLD
    ) {
      return;
    }

    if (!isStackInView()) {
      return;
    }

    /* SWIPE UP */

    if (distanceY > 0) {
      handleNavigation(1);
    }

    /* SWIPE DOWN */

    if (distanceY < 0) {
      handleNavigation(-1);
    }
  };

  /* =========================================================
     HERO SCROLL
  ========================================================= */

  const scrollToProjects =
    useCallback(() => {
      const section =
        sectionRef.current;

      if (!section) {
        return;
      }

      unlockPage();

      section.scrollIntoView({
        behavior:
          prefersReducedMotion
            ? "auto"
            : "smooth",

        block: "start",
      });

      window.setTimeout(
        () => {
          if (
            isStackInView() &&
            activeRef.current <
            projects.length - 1
          ) {
            lockPage();
          }
        },
        prefersReducedMotion
          ? 50
          : 800
      );
    },
      [
        isStackInView,
        lockPage,
        unlockPage,
        prefersReducedMotion,
      ]);

  /* =========================================================
     GO TO PROJECT
  ========================================================= */

  const goToProject =
    useCallback(
      (index) => {
        if (
          animatingRef.current ||
          index ===
          activeRef.current ||
          index < 0 ||
          index >= projects.length
        ) {
          return;
        }

        animatingRef.current =
          true;

        activeRef.current =
          index;

        setActiveCard(index);

        window.clearTimeout(
          unlockTimerRef.current
        );

        unlockTimerRef.current =
          window.setTimeout(
            () => {
              animatingRef.current =
                false;
            },
            prefersReducedMotion
              ? 150
              : 700
          );

        if (
          index <
          projects.length - 1
        ) {
          lockPage();
        } else {
          unlockPage();
        }
      },
      [
        lockPage,
        unlockPage,
        prefersReducedMotion,
      ]
    );

  /* =========================================================
     RELEASE LOCK WHEN USER LEAVES SECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      if (!isStackInView()) {
        unlockPage();
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [
    isStackInView,
    unlockPage,
  ]);

  /* =========================================================
     CLEANUP
  ========================================================= */

  useEffect(() => {
    return () => {
      unlockPage();

      window.clearTimeout(
        unlockTimerRef.current
      );

      window.clearTimeout(
        wheelResetTimerRef.current
      );
    };
  }, [unlockPage]);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#07080c] text-white">

      {/* =====================================================
          HERO / PORTFOLIO COMMAND CENTER
      ===================================================== */}

      <section
        className="
          relative
          min-h-[82svh]
          overflow-hidden
          bg-[#020712]
          px-4
          pb-8
          pt-20
          text-white
          sm:min-h-[100svh]
          sm:px-6
          sm:pb-12
          sm:pt-28
          lg:px-10
          lg:pb-16
          lg:pt-24
        "
      >

        {/* ===================================================
            PORTFOLIO BACKGROUND
        =================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* IMAGE — UNCHANGED */}

          <motion.img
            src="/images/portfolio/port.png"
            alt="DesFlyer Selected Projects"
            initial={{
              scale: 1.08,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* DESKTOP IMAGE SHADE */}

          <div
            className="
              absolute
              inset-0
              hidden
              lg:block
            "
            style={{
              background:
                "linear-gradient(90deg, rgba(2,7,18,0.94) 0%, rgba(2,7,18,0.80) 25%, rgba(2,7,18,0.48) 48%, rgba(2,7,18,0.12) 72%, rgba(2,7,18,0.30) 100%)",
            }}
          />

          {/* MOBILE IMAGE SHADE */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#020712]/90
              via-[#020712]/65
              to-[#020712]/95
              lg:hidden
            "
          />

          {/* TOP FADE */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-40
              bg-gradient-to-b
              from-[#020712]
              to-transparent
            "
          />

          {/* BOTTOM FADE */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-48
              bg-gradient-to-t
              from-[#020712]
              to-transparent
            "
          />

          {/* TECH GRID */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
              maskImage:
                "linear-gradient(to right, black 0%, black 52%, transparent 88%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 52%, transparent 88%)",
            }}
          />

          {/* AMBIENT LIGHT */}

          <motion.div
            animate={{
              x: [0, 45, 0],
              y: [0, -25, 0],
              opacity: [0.08, 0.2, 0.08],
              scale: [0.95, 1.08, 0.95],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[14%]
              top-[40%]
              h-[400px]
              w-[400px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/[0.12]
              blur-[140px]
            "
          />

          {/* MOVING SIGNAL LINE */}

          <motion.div
            animate={{
              x: ["-20%", "120%"],
              opacity: [0, 0.75, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              top-[25%]
              h-px
              w-[45%]
              bg-gradient-to-r
              from-transparent
              via-blue-400/70
              to-transparent
            "
          />

          {/* DIAGONAL SIGNAL */}

          <motion.div
            className="
              absolute
              left-[-10%]
              top-[15%]
              h-px
              w-[55%]
              rotate-[-12deg]
              bg-gradient-to-r
              from-transparent
              via-blue-400/50
              to-transparent
            "
            animate={{
              x: [
                "-10%",
                "100%",
                "-10%",
              ],
              opacity: [
                0.1,
                0.8,
                0.1,
              ],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* SCANNING LINE */}

          <motion.div
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0, 0.45, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-blue-400/45
              to-transparent
            "
          />

        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100svh-9rem)]
            max-w-[1400px]
            items-center
          "
        >

          {/* =================================================
              LEFT PORTFOLIO CONTENT

              MOBILE:
              centered

              DESKTOP:
              left aligned
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[760px]
              text-center
              lg:mx-0
              lg:ml-8
              lg:text-left
              xl:ml-14
            "
          >

            {/* LEFT VERTICAL SIGNAL */}

            <div
              className="
                absolute
                -left-8
                top-0
                hidden
                h-full
                w-px
                bg-gradient-to-b
                from-transparent
                via-blue-500/60
                to-transparent
                lg:block
              "
            />

            {/* =================================================
                PORTFOLIO EYEBROW
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                flex
                items-center
                justify-center
                gap-3
                lg:justify-start
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_12px_rgba(59,130,246,0.9)]
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-blue-400
                "
              >
                Selected Works
              </span>

              <span className="h-px w-8 bg-blue-400/30" />

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.2em]
                  text-white/25
                "
              >
                2026
              </span>

            </motion.div>

            {/* =================================================
                PORTFOLIO HEADING
            ================================================= */}

            <div className="relative mt-5">

              {/* GLOW */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[200px]
                  w-[430px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/[0.09]
                  blur-[90px]
                  sm:h-[280px]
                  sm:w-[620px]
                  sm:blur-[120px]
                "
                animate={{
                  scale: [
                    0.9,
                    1.08,
                    0.9,
                  ],
                  opacity: [
                    0.15,
                    0.35,
                    0.15,
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                  ],
                }}
                className="
                  relative
                  mx-auto
                  max-w-[760px]
                  text-4xl
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.055em]
                  sm:text-5xl
                  md:text-6xl
                  lg:mx-0
                  lg:text-[4.8rem]
                  xl:text-[5.2rem]
                "
                style={{
                  fontFamily:
                    '"Chakra Petch", sans-serif',
                }}
              >

                <span className="block">
                  Ideas
                </span>

                <span className="block">
                  Become
                </span>

                <motion.span
                  className="
                    inline-block
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-300
                    to-white
                    bg-clip-text
                    text-transparent
                  "
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize:
                      "200% 200%",
                  }}
                >
                  Experiences.
                </motion.span>

              </motion.h1>

              {/* TITLE LINE */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 160,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                }}
                className="
                  mx-auto
                  mt-5
                  h-px
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-300
                  to-transparent
                  lg:mx-0
                "
              />

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="
                mx-auto
                mt-6
                max-w-xl
                text-xs
                leading-6
                text-slate-400
                sm:text-sm
                sm:leading-7
                md:text-base
                lg:mx-0
              "
            >
              A showcase of digital experiences crafted through
              thoughtful design, purposeful technology, and ideas
              built to make an impact.
            </motion.p>

            {/* =================================================
                PORTFOLIO CATEGORIES
            ================================================= */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                justify-center
                gap-2
                lg:justify-start
              "
            >

              {[
                "Web",
                "Applications",
                "UI / UX",
                "Branding",
                "Digital",
              ].map(
                (
                  item,
                  index
                ) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        0.45 +
                        index * 0.08,
                    }}
                    whileHover={{
                      y: -3,
                      borderColor:
                        "rgba(96,165,250,0.45)",
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-blue-400/15
                      bg-[#06152a]/75
                      px-3
                      py-1.5
                      backdrop-blur-md
                      transition-colors
                    "
                  >

                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-blue-400
                        shadow-[0_0_8px_#3b82f6]
                      "
                    />

                    <span
                      className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.2em]
                        text-white/45
                      "
                    >
                      {item}
                    </span>

                  </motion.div>
                )
              )}

            </div>

            {/* =================================================
                PROJECT META
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.95,
              }}
              className="
                mt-5
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
                lg:justify-start
              "
            >

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                  sm:text-[9px]
                "
              >
                <span className="text-blue-400">
                  05
                </span>{" "}
                selected projects
              </span>

              <span className="h-3 w-px bg-white/10" />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                  sm:text-[9px]
                "
              >
                Web / App / Experience
              </span>

            </motion.div>

            {/* =================================================
                SINGLE CTA
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.15,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                mt-6
                flex
                justify-center
                lg:justify-start
              "
            >

              <motion.button
                type="button"
                onClick={() => {
                  const target =
                    document.getElementById(
                      "portfolio-projects"
                    );

                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                whileHover={{
                  scale: 1.03,
                  x: 4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-blue-500/30
                  bg-blue-500/[0.07]
                  px-4
                  py-3
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:border-blue-400/70
                  hover:bg-blue-500/20
                  hover:shadow-[0_0_40px_rgba(37,99,235,0.18)]
                  sm:px-6
                  sm:py-3.5
                "
              >

                {/* BUTTON SHINE */}

                <motion.span
                  className="
                    absolute
                    inset-y-0
                    left-[-100%]
                    w-[60%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.14]
                    to-transparent
                  "
                  animate={{
                    left: [
                      "-100%",
                      "140%",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />

                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-4
                    sm:gap-6
                  "
                >

                  <span className="flex flex-col items-start">

                    <span
                      className="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.28em]
                        text-blue-400
                      "
                    >
                      Explore
                    </span>

                    <span
                      className="
                        mt-0.5
                        text-sm
                        font-semibold
                        tracking-wide
                        text-white
                      "
                      style={{
                        fontFamily:
                          '"Chakra Petch", sans-serif',
                      }}
                    >
                      Selected Projects
                    </span>

                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-400/30
                      bg-blue-500/10
                      text-blue-400
                    "
                  >
                    <FiArrowUpRight
                      size={15}
                    />
                  </span>

                </span>

              </motion.button>

            </motion.div>

            {/* =================================================
                BOTTOM TECHNICAL LABEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [
                  0.25,
                  0.65,
                  0.25,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.4,
              }}
              className="
                mt-6
                text-center
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-white/20
                sm:text-[8px]
                lg:text-left
              "
            >
              DIGITAL EXPERIENCES / SELECTED WORK / DESFLYER
            </motion.div>

          </motion.div>

          {/* ===================================================
              RIGHT SIDE IMAGE INFORMATION
          =================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-[4%]
              top-[18%]
              hidden
              flex-col
              items-end
              gap-4
              lg:flex
              xl:right-[6%]
            "
          >

            {/* PROJECT NUMBER */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              className="
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  h-px
                  w-20
                  bg-gradient-to-r
                  from-transparent
                  to-blue-400/60
                "
              />

              <div
                className="
                  rounded-md
                  border
                  border-white/10
                  bg-black/30
                  px-3
                  py-2
                  backdrop-blur-md
                "
              >

                <div
                  className="
                    font-mono
                    text-[8px]
                    tracking-[0.16em]
                    text-blue-300
                  "
                >
                  PROJECT_01
                </div>

                <div
                  className="
                    mt-1
                    font-mono
                    text-[7px]
                    text-white/25
                  "
                >
                  SELECTED WORK
                </div>

              </div>

            </motion.div>

            {/* SECOND LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.2,
              }}
              className="
                mr-8
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  h-px
                  w-28
                  bg-gradient-to-r
                  from-transparent
                  to-blue-400/35
                "
              />

              <div
                className="
                  rounded-md
                  border
                  border-blue-400/15
                  bg-blue-400/[0.04]
                  px-3
                  py-2
                  backdrop-blur-md
                "
              >

                <div
                  className="
                    font-mono
                    text-[8px]
                    tracking-[0.16em]
                    text-white/55
                  "
                >
                  DIGITAL EXPERIENCE
                </div>

              </div>

            </motion.div>

            {/* ARCHIVE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.4,
              }}
              className="
                mt-16
                flex
                items-center
                gap-3
              "
            >

              <div
                className="
                  h-px
                  w-16
                  bg-gradient-to-r
                  from-transparent
                  to-white/20
                "
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  tracking-[0.2em]
                  text-white/20
                "
              >
                DIGITAL_ARCHIVE / 2026
              </span>

            </motion.div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM LEFT PAGE MARK
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-7
            left-4
            hidden
            items-center
            gap-3
            sm:flex
            lg:left-12
            xl:left-16
          "
        >

          <span
            className="
              h-1
              w-1
              rounded-full
              bg-blue-400
            "
          />

          <span
            className="
              font-mono
              text-[7px]
              tracking-[0.2em]
              text-white/20
            "
          >
            DSFLYER / PORTFOLIO / SELECTED WORKS
          </span>

        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.div
          animate={{
            y: [
              0,
              6,
              0,
            ],
            opacity: [
              0.25,
              0.65,
              0.25,
            ],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
          }}
          className="
            pointer-events-none
            absolute
            bottom-7
            right-6
            hidden
            items-center
            gap-2
            font-mono
            text-[7px]
            tracking-[0.22em]
            text-white/25
            sm:flex
            lg:right-12
            xl:right-16
          "
        >
          EXPLORE ↓
        </motion.div>

      </section>

      {/* =====================================================
          PROJECT STACK
      ===================================================== */}

      <section
  ref={sectionRef}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
  className="
    relative
    h-screen
    min-h-0
    w-full
    overflow-hidden
    bg-[#07080c]
    touch-pan-y
  "
>

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0">

          <motion.div
            animate={{
              scale: [
                1,
                1.08,
                1,
              ],
              opacity: [
                0.08,
                0.16,
                0.08,
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[380px]
              w-[380px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-600/[0.08]
              blur-[120px]
              sm:h-[550px]
              sm:w-[550px]
              sm:blur-[150px]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.04]
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize:
                "60px 60px",
            }}
          />

          <div
            className="
              absolute
              left-1/2
              top-0
              h-[250px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.035]
              blur-[100px]
              sm:h-[300px]
              sm:w-[700px]
              sm:blur-[120px]
            "
          />

        </div>

        {/* HEADER */}

        <div
          className="
            relative
            z-[500]
            mx-auto
            max-w-7xl
            px-5
            pt-5
            text-center
            sm:pt-12
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mb-2
              text-[8px]
              font-bold
              tracking-[0.35em]
              text-blue-400
              sm:text-[9px]
            "
          >
            SELECTED WORK
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              text-2xl
              font-black
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            PROJECT

            <span className="ml-2 text-white/25">
              ARCHIVE
            </span>
          </motion.h2>

        </div>


        {/* =====================================================
    CARD DECK
===================================================== */}

        <div
          className="
    absolute
    left-0
    right-0
    top-[53%]
    z-10
    mx-auto
    flex
    -translate-y-1/2
    items-center
    justify-center
    px-3
    sm:top-[60%]
    sm:px-6
    lg:px-10
  "
        >
          <div
            className="
      relative
      h-[min(520px,calc(100vh-170px))]
      w-full
      max-w-6xl
      sm:h-[min(450px,calc(100vh-210px))]
    "
          >

            {/* =================================================
        STACK CARDS
        SAME CARD CONTENT — NO CHANGES
    ================================================= */}

            {projects.map(
              (project, index) => {
                if (index > activeCard) {
                  return null;
                }

                const depth =
                  activeCard - index;

                const isActive =
                  depth === 0;

                const widthReduction =
                  depth *
                  (LAYER_LEFT + LAYER_RIGHT);

                const leftOffset =
                  depth * LAYER_LEFT;

                const targetY =
                  -(depth * LAYER_TOP);

                const isEntering =
                  index === activeCard;

                return (
                  <motion.div
                    key={project.id}
                    className="
              absolute
              left-0
              top-0
              h-full
            "
                    initial={
                      isEntering
                        ? {
                          y: "100%",
                          width: "100%",
                          left: 0,
                          opacity: 0,
                        }
                        : {
                          y: targetY,
                          width: `calc(100% - ${widthReduction}px)`,
                          left: `${leftOffset}px`,
                          opacity: 1,
                        }
                    }
                    animate={{
                      y: isActive
                        ? 0
                        : targetY,

                      width: isActive
                        ? "100%"
                        : `calc(100% - ${widthReduction}px)`,

                      left: isActive
                        ? 0
                        : `${leftOffset}px`,

                      opacity: 1,
                    }}
                    transition={{
                      duration:
                        prefersReducedMotion
                          ? 0.15
                          : ANIMATION_DURATION,

                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    style={{
                      zIndex:
                        isActive
                          ? 20
                          : 20 - depth,
                    }}
                  >

                    {/* ACTIVE CARD CONTROLS */}

                    {isActive && (
                      <SideControls
                        activeCard={activeCard}
                        totalProjects={
                          projects.length
                        }
                        goToProject={
                          goToProject
                        }
                        onOpenDetails={() =>
                          openDetails(project)
                        }
                      />
                    )}

                    {/* IMPORTANT:
                KEEP THE SAME ProjectCard.
                DO NOT REMOVE CONTENT.
            */}

                    <ProjectCard
                      project={project}
                    />

                  </motion.div>
                );
              }
            )}

            {/* STACK LABEL */}

            <div
              className="
        pointer-events-none
        absolute
        -bottom-7
        left-0
        z-[2000]
      "
            >
              <span
                className="
          text-[7px]
          tracking-[0.25em]
          text-white/25
          sm:text-[8px]
        "
                style={{
                  fontFamily:
                    '"Chakra Petch", sans-serif',
                }}
              >
                PROJECT STACK
              </span>
            </div>

            {/* COUNTER */}

            <div
              className="
        pointer-events-none
        absolute
        -bottom-7
        right-0
        z-[2000]
      "
            >
              <span
                className="
          text-[7px]
          tracking-[0.2em]
          text-white/25
          sm:text-[8px]
        "
                style={{
                  fontFamily:
                    "'JetBrains Mono', monospace",
                }}
              >
                {String(
                  activeCard + 1
                ).padStart(2, "0")}
                {" / "}
                {String(
                  projects.length
                ).padStart(2, "0")}
              </span>
            </div>

          </div>
        </div>

        {/* PROGRESS */}

        {/* <div
          className="
            absolute
            bottom-6
            left-1/2
            z-[3000]
            flex
            -translate-x-1/2
            items-center
            gap-1
            sm:bottom-7
            sm:gap-2
          "
        >
          {projects.map(
            (item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to project ${index + 1
                  }`}
                aria-current={
                  index === activeCard
                    ? "true"
                    : undefined
                }
                onClick={() =>
                  goToProject(index)
                }
                className="
                  flex
                  h-5
                  w-6
                  touch-manipulation
                  items-center
                  justify-center
                  outline-none
                "
              >
                <motion.div
                  animate={{
                    width:
                      index ===
                        activeCard
                        ? 30
                        : 5,

                    opacity:
                      index ===
                        activeCard
                        ? 1
                        : 0.25,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    h-1
                    rounded-xl
                    bg-blue-400
                  "
                />
              </button>
            )
          )}
        </div> */}

        {/* MOBILE SWIPE HINT */}

        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity:
              isMobile &&
                activeCard === 0
                ? [
                  0.2,
                  0.6,
                  0.2,
                ]
                : 0,
          }}
          transition={{
            duration: 2,
            repeat:
              isMobile &&
                activeCard === 0
                ? Infinity
                : 0,
          }}
          className="
            pointer-events-none
            absolute
            bottom-16
            left-1/2
            z-[3000]
            -translate-x-1/2
            whitespace-nowrap
            text-[7px]
            tracking-[0.22em]
            text-white/30
            sm:hidden
          "
        >
          SWIPE TO EXPLORE
        </motion.div> */}

        {/* DESKTOP SCROLL INDICATOR */}

        {/* <motion.div
          animate={{
            y: [0, 7, 0],
            opacity: [
              0.25,
              0.65,
              0.25,
            ],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-8
            right-6
            z-[3000]
            hidden
            text-[8px]
            tracking-[0.25em]
            text-white/25
            sm:block
          "
        >
          SCROLL ↓
        </motion.div> */}

        {/* PROJECT COUNTER */}

        {/* <div
          className="
            absolute
            bottom-8
            left-6
            z-[3000]
            hidden
            text-[8px]
            tracking-[0.2em]
            text-white/20
            sm:block
          "
        >
          {String(
            activeCard + 1
          ).padStart(2, "0")}
          {" / "}
          {String(
            projects.length
          ).padStart(2, "0")}
        </div> */}

        {/* KEYBOARD HINT */}

        {/* <div
          className="
            pointer-events-none
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            text-[7px]
            tracking-[0.2em]
            text-white/15
            lg:block
          "
        >
          ↑ ↓ &nbsp; NAVIGATE
        </div> */}

      </section>

      {/* =====================================================
          PROJECT DETAILS POPUP
      ===================================================== */}

      {detailsProject && (
        <ProjectDetailsPopup
          project={detailsProject}
          onClose={closeDetails}
        />
      )}

    </main>
  );
}