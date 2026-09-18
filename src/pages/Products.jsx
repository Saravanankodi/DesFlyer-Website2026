import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiX,
  FiSend,
} from "react-icons/fi";

import Seo from "../lib/Seo";
import Eyebrow from "../components/ui/Eyebrow";
import CTABand from "../components/sections/CTABand";

import {
  products,
  productCategories,
} from "../data/products";

/* =========================================================
   COMING SOON IMAGES
========================================================= */

const comingSoonImages = [
  "/images/portfolio/logo.png",
  "/images/portfolio/logo.png",
  "/images/portfolio/logo.png",
];

/* =========================================================
   SHIPPED PRODUCT CARD
========================================================= */

function ProductCard({ product, index }) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.97,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.012,
      }}
      className="
        group relative flex w-full min-w-0
        min-h-[420px] sm:min-h-[450px] lg:min-h-[470px]
        flex-col overflow-hidden
        rounded-[22px] sm:rounded-[26px] lg:rounded-[28px]
        border border-white/[0.08]
        bg-[#060B12]
        shadow-[0_25px_100px_rgba(0,0,0,0.22)]
        transition-shadow duration-500
        hover:border-cyan-400/25
        hover:shadow-[0_35px_120px_-25px_rgba(46,111,255,0.42)]
      "
    >
      {/* ===================================================
          AMBIENT BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/[0.06] blur-[100px]" />

        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-blue-600/[0.05] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(101,217,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(101,217,255,.7) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* ===================================================
          TOP PRODUCT STATUS
      =================================================== */}

      <div className="relative z-20 flex items-center justify-between px-4 pt-4 sm:px-5 sm:pt-5 lg:px-6">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_#65D9FF]" />

          <span className="truncate font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-400/60 sm:tracking-[0.25em]">
            Shipped Product
          </span>
        </div>

        <span className="shrink-0 font-mono text-[8px] tracking-[0.2em] text-white/20">
          0{index + 1}
        </span>
      </div>

      {/* ===================================================
          GRAND PRODUCT IMAGE
      =================================================== */}

      <div
        className="
          relative z-10 mx-4 mt-4
          flex h-[180px]
          items-center justify-center
          overflow-hidden rounded-[18px]
          border border-white/[0.06]
          bg-white/[0.025]
          sm:mx-5 sm:mt-5 sm:h-[200px] sm:rounded-[20px]
          lg:h-[210px] lg:rounded-[22px]
        "
      >
        {/* IMAGE GLOW */}

        <motion.div
          className="
            pointer-events-none absolute left-1/2 top-1/2
            h-32 w-32
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-cyan-400/10
            blur-[60px]
            sm:h-40 sm:w-40 sm:blur-[70px]
          "
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
        />

        {/* IMAGE SHINE */}

        <motion.div
          className="
            pointer-events-none absolute inset-y-0
            -left-[40%] w-[35%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
          "
          animate={{
            left: ["-40%", "130%"],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />

        {product.image && (
          <motion.img
            src={product.image}
            alt={`${product.name} logo`}
            loading="lazy"
            className="
              relative z-10
              max-h-[115px] max-w-[75%]
              object-contain
              drop-shadow-[0_0_35px_rgba(101,217,255,0.16)]
              transition-transform duration-700
              sm:max-h-[135px] sm:max-w-[78%]
              lg:max-h-[145px]
              group-hover:scale-[1.08]
            "
          />
        )}

        {/* IMAGE BOTTOM GRADIENT */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#060B12] to-transparent sm:h-20" />
      </div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          relative z-10
          flex min-w-0 flex-1 flex-col
          px-4 pb-4 pt-4
          sm:px-5 sm:pb-5 sm:pt-5
          lg:px-6 lg:pb-6
        "
      >
        {/* CATEGORY */}

        <div className="mb-2 flex min-w-0 items-center gap-2">
          <span className="h-px w-5 shrink-0 bg-cyan-400/50" />

          <span className="truncate font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-400/60 sm:tracking-[0.22em]">
            {product.category}
          </span>
        </div>

        {/* NAME */}

        <h3
          className="
            break-words
            font-display
            text-[21px]
            font-semibold
            leading-tight
            tracking-[-0.02em]
            text-white
            sm:text-[23px]
            lg:text-[25px]
          "
        >
          {product.name}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-2 flex-1
            break-words
            text-[13px]
            leading-5
            text-white/45
            sm:text-sm sm:leading-6
          "
        >
          {product.description}
        </p>

        {/* TECHNOLOGIES */}

        {product.technologies?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
            {product.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  max-w-full truncate
                  rounded-full
                  border border-white/[0.09]
                  bg-white/[0.025]
                  px-2 py-1
                  font-mono text-[8px]
                  text-white/40
                  transition-colors duration-300
                  sm:px-2.5 sm:text-[9px]
                  group-hover:border-cyan-400/20
                  group-hover:text-white/55
                "
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* VIEW DETAILS */}

        <a
          href={product.website}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-5
            inline-flex w-full
            items-center justify-between
            gap-3
            rounded-xl
            border border-cyan-400/15
            bg-cyan-400/[0.035]
            px-3.5 py-3
            text-[13px]
            font-medium
            text-cyan-400
            transition-all duration-300
            hover:border-cyan-400/35
            hover:bg-cyan-400/[0.08]
            sm:mt-6 sm:px-4 sm:text-sm
          "
        >
          <span className="truncate">View Details</span>

          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20">
            <FiArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </a>
      </div>

      {/* ===================================================
          CORNER ACCENTS
      =================================================== */}

      <span className="pointer-events-none absolute left-0 top-0 h-10 w-px bg-gradient-to-b from-cyan-400/70 to-transparent sm:h-12" />

      <span className="pointer-events-none absolute left-0 top-0 h-px w-10 bg-gradient-to-r from-cyan-400/70 to-transparent sm:w-12" />

      <span className="pointer-events-none absolute bottom-0 right-0 h-10 w-px bg-gradient-to-t from-cyan-400/40 to-transparent sm:h-12" />

      <span className="pointer-events-none absolute bottom-0 right-0 h-px w-10 bg-gradient-to-l from-cyan-400/40 to-transparent sm:w-12" />

      {/* HOVER BORDER */}

      <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-transparent transition-colors duration-500 sm:rounded-[26px] lg:rounded-[28px] group-hover:border-cyan-400/20" />
    </motion.div>
  );
}

/* =========================================================
   GUESS MODAL
========================================================= */

function GuessModal({ product, onClose }) {
  const [guess, setGuess] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!guess.trim()) return;

    const existingGuesses = JSON.parse(
      localStorage.getItem("desflyer_product_guesses") || "[]"
    );

    existingGuesses.push({
      product: product.slug,
      guess: guess.trim(),
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem(
      "desflyer_product_guesses",
      JSON.stringify(existingGuesses)
    );

    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-y-auto
        bg-black/75
        px-3 py-4
        backdrop-blur-md
        sm:px-5 sm:py-6
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative my-auto
          w-full max-w-md
          overflow-hidden
          rounded-2xl
          border border-white/10
          bg-[#060B12]
          p-5
          shadow-[0_30px_120px_rgba(0,0,0,.7)]
          sm:rounded-3xl sm:p-7
        "
      >
        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px]" />

        <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px]" />

        {/* CLOSE BUTTON */}

        <button
          type="button"
          aria-label="Close"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onClose();
          }}
          className="
            absolute right-3 top-3 z-[100]
            flex h-9 w-9
            cursor-pointer
            items-center justify-center
            rounded-full
            border border-white/10
            bg-white/[0.04]
            text-white/50
            transition-all duration-200
            hover:border-white/30
            hover:bg-white/[0.08]
            hover:text-white
            sm:right-4 sm:top-4
          "
        >
          <FiX size={17} strokeWidth={2} />
        </button>

        {/* CONTENT */}

        <div className="relative z-10 text-center">
          {!submitted ? (
            <>
              {/* LABEL */}

              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5">
                <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#65D9FF]" />

                <span className="truncate font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-400/70 sm:tracking-[0.25em]">
                  Mystery Product
                </span>
              </div>

              {/* LOGO */}

              {product.image && (
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center sm:mb-7 sm:h-28 sm:w-28">
                  <img
                    src={product.image}
                    alt="Mystery product"
                    className="max-h-full max-w-full object-contain drop-shadow-[0_0_25px_rgba(101,217,255,0.18)]"
                  />
                </div>
              )}

              {/* TITLE */}

              <h3 className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                Can you guess the product?
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-[13px] leading-6 text-white/45 sm:text-sm">
                We are keeping this one secret for now.
                Take a guess based only on the logo.
              </p>

              {/* INPUT */}

              <div className="mt-6 sm:mt-7">
                <div className="relative">
                  <input
                    type="text"
                    value={guess}
                    onChange={(event) => setGuess(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleSubmit();
                      }
                    }}
                    placeholder="What do you think it is?"
                    className="
                      w-full
                      rounded-xl
                      border border-white/10
                      bg-white/[0.04]
                      px-4 py-3.5 pr-12
                      text-sm text-white
                      outline-none
                      transition-all duration-300
                      placeholder:text-white/25
                      focus:border-cyan-400/40
                      focus:bg-white/[0.06]
                      focus:ring-1
                      focus:ring-cyan-400/20
                    "
                  />

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!guess.trim()}
                    className="
                      absolute right-2 top-1/2
                      flex h-9 w-9
                      -translate-y-1/2
                      items-center justify-center
                      rounded-lg
                      bg-cyan-400
                      text-[#041018]
                      transition-all duration-200
                      hover:scale-105
                      disabled:cursor-not-allowed
                      disabled:opacity-30
                    "
                  >
                    <FiSend size={14} />
                  </button>
                </div>
              </div>

              {/* NOTE */}

              <p className="mt-4 font-mono text-[7px] uppercase tracking-[0.14em] text-white/20 sm:text-[8px] sm:tracking-[0.18em]">
                Your guess helps shape what we build next
              </p>
            </>
          ) : (
            <>
              {/* SUCCESS */}

              <motion.div
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                className="
                  mx-auto mb-6
                  flex h-14 w-14
                  items-center justify-center
                  rounded-full
                  border border-cyan-400/30
                  bg-cyan-400/10
                "
              >
                <span className="text-xl text-cyan-400">
                  ✓
                </span>
              </motion.div>

              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                Guess received.
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-white/45 sm:text-sm">
                Interesting guess.
                <br />
                We’ll reveal the product when the time is right.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="
                  mt-6
                  rounded-full
                  border border-cyan-400/40
                  bg-cyan-400/10
                  px-5 py-2.5
                  font-mono text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-cyan-400
                  transition-all duration-300
                  hover:bg-cyan-400/20
                  sm:mt-7 sm:text-[10px]
                "
              >
                Continue exploring
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   COMING SOON CARD
========================================================= */

function ComingSoonCard({
  product,
  index,
  image,
  onGuess,
}) {
  return (
    <motion.button
      type="button"
      onClick={() =>
        onGuess({
          ...product,
          image,
        })
      }
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
        margin: "-50px",
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group relative
        min-h-[240px]
        w-full min-w-0
        overflow-hidden
        rounded-2xl
        border border-white/[0.08]
        bg-[#060B12]
        text-left
        shadow-[0_20px_70px_rgba(0,0,0,.25)]
        sm:min-h-[270px]
        lg:min-h-[280px]
      "
    >
      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(101,217,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(101,217,255,.7) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />

      {/* CENTER GLOW */}

      <motion.div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-32 w-32
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[60px]
          sm:h-40 sm:w-40 sm:blur-[70px]
        "
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      />

      {/* SCAN LINE */}

      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        animate={{
          top: ["10%", "90%", "10%"],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      />

      {/* MYSTERY LABEL */}

      <div className="absolute left-4 top-4 z-10 sm:left-5 sm:top-5">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.15em] text-white/30 sm:text-[8px] sm:tracking-[0.2em]">
          Coming Soon
        </span>
      </div>

      {/* NUMBER */}

      <div className="absolute right-4 top-4 z-10 font-mono text-[8px] tracking-[0.2em] text-white/15 sm:right-5 sm:top-5">
        0{index + 1}
      </div>

      {/* DIFFERENT IMAGE FOR EVERY CARD */}

      <div
        className="
          relative z-10
          flex h-full
          min-h-[240px]
          items-center justify-center
          p-6
          sm:min-h-[270px] sm:p-8
          lg:min-h-[280px] lg:p-10
        "
      >
        <motion.img
          src={image}
          alt={`Upcoming product ${index + 1}`}
          loading="lazy"
          className="
            max-h-20
            max-w-[65%]
            object-contain
            drop-shadow-[0_0_25px_rgba(101,217,255,0.12)]
            sm:max-h-24 sm:max-w-[70%]
            lg:max-h-28
          "
          animate={{
            scale: [1, 1.035, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
        />
      </div>

      {/* BOTTOM INTERACTION */}

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.06] bg-black/20 px-4 py-3 backdrop-blur-md sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <span className="truncate font-mono text-[7px] uppercase tracking-[0.15em] text-white/25 sm:text-[8px] sm:tracking-[0.2em]">
            Guess the product
          </span>

          <motion.span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30"
            whileHover={{
              x: 3,
              borderColor: "rgba(101,217,255,.5)",
              color: "#65D9FF",
            }}
          >
            <FiArrowRight size={12} />
          </motion.span>
        </div>
      </div>

      {/* HOVER BORDER */}

      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-cyan-400/25" />
    </motion.button>
  );
}

/* =========================================================
   PRODUCTS PAGE
========================================================= */

export default function Products() {
  const [category, setCategory] = useState("All");

  const [selectedMystery, setSelectedMystery] =
    useState(null);

  /* =======================================================
     SEPARATE SHIPPED PRODUCTS
  ======================================================= */

  const availableProducts = useMemo(() => {
    return products.filter(
      (product) => !product.comingSoon
    );
  }, []);

  /* =======================================================
     SEPARATE COMING SOON PRODUCTS
  ======================================================= */

  const comingSoonProducts = useMemo(() => {
    return products.filter(
      (product) => product.comingSoon
    );
  }, []);

  /* =======================================================
     FILTER SHIPPED PRODUCTS
  ======================================================= */

  const filteredProducts = useMemo(() => {
    if (category === "All") {
      return availableProducts;
    }

    return availableProducts.filter(
      (product) =>
        product.category === category
    );
  }, [
    category,
    availableProducts,
  ]);

  return (
    <>
      <Seo />



      {/* ========================= PRODUCT COMMAND CENTER HERO ========================= */}
      <section
  className="
    relative
    min-h-[100svh]
    overflow-hidden
    bg-[#020712]
    px-4
    pb-12
    pt-24
    text-white
    sm:px-6
    sm:pt-28
    lg:px-10
    lg:pb-16
    lg:pt-24
  "
>
  {/* ================= HERO IMAGE ================= */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <img
      src="/images/portfolio/pro.png"
      alt="DesFlyer Products"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-center

        sm:object-contain
        sm:object-center
      "
    />

    {/* Mobile image darkening */}
    <div
      className="
        absolute
        inset-0
        bg-[#020712]/35
        sm:bg-transparent
      "
    />

    {/* Bottom fade */}
    <div
      className="
        absolute
        inset-x-0
        bottom-0
        h-44
        bg-gradient-to-t
        from-[#05070c]
        to-transparent
      "
    />

    {/* Moving diagonal light */}
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
        x: ["-10%", "100%", "-10%"],
        opacity: [0.1, 0.8, 0.1],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>

  {/* ================= MAIN DARK GRADIENT ================= */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-r
      from-[#131313]/50
      via-[#111111]/30
      sm:via-[#02050A]/88
      md:via-[#02050A]/72
      lg:via-[#02050A]/58
    "
  />

  {/* ================= TECH GRID ================= */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.035]
      sm:opacity-[0.05]
    "
    style={{
      backgroundImage: `
        linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "45px 45px",
      maskImage:
        "linear-gradient(to right, black 0%, black 45%, transparent 85%)",
      WebkitMaskImage:
        "linear-gradient(to right, black 0%, black 45%, transparent 85%)",
    }}
  />

  {/* ================= LEFT GLOW ================= */}
  <motion.div
    animate={{
      x: [0, 25, 0],
      y: [0, -15, 0],
      opacity: [0.18, 0.32, 0.18],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      left-[-160px]
      top-[25%]
      h-[450px]
      w-[450px]
      rounded-full
      bg-cyan-400/[0.12]
      blur-[130px]
      lg:left-[5%]
    "
  />

  {/* ================= MAIN CONTENT ================= */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      min-h-[480px]
      w-full
      max-w-shell
      items-center
      justify-center
      text-center

      sm:min-h-[530px]
      sm:justify-start
      sm:text-left

      md:min-h-[560px]

      lg:min-h-[600px]

      xl:min-h-[640px]
    "
  >
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[760px]

        sm:mx-0

        lg:ml-8
        xl:ml-14
      "
    >
      {/* =====================================================
          LEFT VERTICAL PRODUCT INDEX
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          absolute
          -left-5
          top-0
          hidden
          -translate-x-full
          flex-col
          items-center
          gap-3
          sm:flex
          lg:-left-8
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            tracking-[0.3em]
            text-cyan-400/70
            [writing-mode:vertical-rl]
          "
        >
          DESFLYER LAB
        </span>

        <span
          className="
            h-20
            w-px
            bg-gradient-to-b
            from-cyan-400/70
            via-blue-400/40
            to-transparent
          "
        />

        <span
          className="
            font-mono
            text-[9px]
            tracking-wider
            text-white/25
          "
        >
          01
        </span>
      </motion.div>

      {/* =====================================================
          SMALL TOP LINE
      ====================================================== */}

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
          duration: 0.7,
          delay: 0.3,
        }}
        className="
          mb-4
          flex
          items-center
          justify-center
          gap-3

          sm:mb-5
          sm:justify-start
        "
      >
        <span
          className="
            h-px
            w-8
            bg-cyan-400/70
            sm:w-12
          "
        />

        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-cyan-300/70
            sm:text-[10px]
          "
        >
          Digital Products
        </span>

        <motion.span
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-cyan-400
            shadow-[0_0_12px_rgba(34,211,238,0.9)]
          "
        />
      </motion.div>

      {/* =====================================================
          EYEBROW
      ====================================================== */}

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
          duration: 0.7,
          delay: 0.4,
        }}
        className="
          flex
          justify-center
          sm:justify-start
        "
      >
        <Eyebrow>Our Products</Eyebrow>
      </motion.div>

      {/* =====================================================
          HEADING GLOW
      ====================================================== */}

      <motion.div
        animate={{
          scale: [0.9, 1.08, 0.9],
          opacity: [0.12, 0.3, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[42%]
          h-[190px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.08]
          blur-[90px]

          sm:h-[250px]
          sm:w-[600px]
          sm:blur-[120px]
        "
      />

      {/* =====================================================
          MAIN HEADING
      ====================================================== */}

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
          delay: 0.5,
          ease: "easeOut",
        }}
        className="
          relative
          mx-auto
          mt-4
          max-w-[760px]
          text-[2.35rem]
          font-semibold
          leading-[0.91]
          tracking-[-0.055em]
          text-white

          sm:mx-0
          sm:mt-5
          sm:text-5xl

          md:text-6xl

          lg:text-[4.6rem]

          xl:text-75px
        "
        style={{
          fontFamily: '"Chakra Petch", sans-serif',
        }}
      >
        <span className="block">
          Products built
        </span>

        <span className="relative inline-block">
          <span
            className="
              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-white
              bg-clip-text
              text-transparent
            "
          >
            for real-world impact.
          </span>

          {/* UNDERLINE */}

<motion.span
  initial={{
    width: 0,
  }}
  animate={{
    width: "42%",
  }}
  transition={{
    duration: 1,
    delay: 1.1,
    ease: "easeOut",
  }}
  className="
    absolute
    -bottom-2
    left-0
    h-[1.5px]
    bg-gradient-to-r
    from-cyan-400
    via-blue-400
    to-transparent

    sm:-bottom-3
    sm:h-[2px]
  "
/>

          {/* TEXT GLOW */}

          <motion.span
            animate={{
              opacity: [0.08, 0.28, 0.08],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              bg-cyan-400/25
              blur-2xl
            "
          />
        </span>
      </motion.h1>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

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
          delay: 0.75,
        }}
        className="
          mx-auto
          mt-5
          max-w-[540px]
          text-sm
          leading-6
          text-white/60

          sm:mx-0
          sm:mt-6
          sm:text-base
          sm:leading-7

          md:text-lg
        "
      >
        Real digital products designed and developed by DesFlyer —
        turning everyday problems into useful, scalable experiences.
      </motion.p>

      {/* =====================================================
          PRODUCT CATEGORIES
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.85,
        }}
        className="
          mt-6
          flex
          flex-wrap
          justify-center
          gap-2

          sm:mt-7
          sm:justify-start
        "
      >
        {[
          "Web",
          "Mobile",
          "AI",
          "Healthcare",
          "Business",
          "Tools",
        ].map((item, index) => (
          <motion.span
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
              duration: 0.4,
              delay: 0.9 + index * 0.06,
            }}
            whileHover={{
              y: -2,
            }}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.035]
              px-3
              py-1.5
              font-mono
              text-[9px]
              uppercase
              tracking-[0.14em]
              text-white/45
              backdrop-blur-md
              transition-all
              duration-300

              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.06]
              hover:text-cyan-300

              sm:px-3.5
              sm:text-[10px]
            "
          >
            {item}
          </motion.span>
        ))}
      </motion.div>

      {/* =====================================================
          SINGLE CTA
      ====================================================== */}

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
          delay: 1,
        }}
        className="
          mt-7
          flex
          justify-center

          sm:mt-8
          sm:justify-start
        "
      >
        <motion.a
          href="#pro"
          whileHover={{
            x: 5,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-lg
            border
            border-cyan-400/30
            bg-cyan-400/[0.08]
            px-5
            py-3
            text-xs
            font-medium
            text-cyan-300
            backdrop-blur-md
            transition-all
            duration-300

            hover:border-cyan-400/60
            hover:bg-cyan-400/[0.14]
            hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]

            sm:px-6
            sm:py-3.5
            sm:text-sm
          "
        >
          Explore Our Products

          <FiArrowRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </motion.a>
      </motion.div>

      {/* =====================================================
          PRODUCT DATA STRIP
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 1.15,
        }}
        className="
          mt-8
          flex
          items-center
          justify-center
          gap-0

          sm:mt-10
          sm:justify-start
        "
      >
        {/* PROJECT COUNT */}

        <div className="pr-5 sm:pr-7">
          <div
            className="
              font-mono
              text-lg
              font-medium
              text-white
              sm:text-xl
            "
          >
            18<span className="text-cyan-400">+</span>
          </div>

          <div
            className="
              mt-1
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/30
              sm:text-[9px]
            "
          >
            Products
          </div>
        </div>

        {/* DIVIDER */}

        <div className="h-9 w-px bg-white/10" />

        {/* STATUS */}

        <div className="px-5 sm:px-7">
          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-sm
              text-cyan-300
              sm:text-base
            "
          >
            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_10px_rgba(34,211,238,0.8)]
              "
            />

            ACTIVE
          </div>

          <div
            className="
              mt-1
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/30
              sm:text-[9px]
            "
          >
            Product Lab
          </div>
        </div>

        {/* DIVIDER */}

        <div
          className="
            hidden
            h-9
            w-px
            bg-white/10
            sm:block
          "
        />

        {/* TECHNOLOGY */}

        <div
          className="
            hidden
            pl-5
            sm:block
            sm:pl-7
          "
        >
          <div
            className="
              font-mono
              text-sm
              text-white/70
              sm:text-base
            "
          >
            WEB / APP / AI
          </div>

          <div
            className="
              mt-1
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white/30
            "
          >
            Built In-House
          </div>
        </div>
      </motion.div>
    </div>
  </div>

  {/* =====================================================
      RIGHT-SIDE FLOATING TECH LABELS
  ====================================================== */}

  {/* TOP LABEL */}

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
      duration: 0.8,
      delay: 1.2,
    }}
    className="
      pointer-events-none
      absolute
      right-[7%]
      top-[25%]
      hidden
      items-center
      gap-3
      lg:flex
    "
  >
    <div
      className="
        h-px
        w-20
        bg-gradient-to-r
        from-transparent
        to-cyan-400/60
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
          text-[9px]
          tracking-[0.15em]
          text-cyan-300
        "
      >
        PRODUCT_01
      </div>

      <div
        className="
          mt-1
          text-[8px]
          text-white/30
        "
      >
        DEPLOYED
      </div>
    </div>
  </motion.div>

  {/* MIDDLE LABEL */}

  <motion.div
    initial={{
      opacity: 0,
      x: 40,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      duration: 0.8,
      delay: 1.4,
    }}
    className="
      pointer-events-none
      absolute
      right-[5%]
      top-[48%]
      hidden
      items-center
      gap-3
      lg:flex
    "
  >
    <div
      className="
        h-px
        w-28
        bg-gradient-to-r
        from-transparent
        to-cyan-400/40
      "
    />

    <div
      className="
        rounded-md
        border
        border-cyan-400/15
        bg-cyan-400/[0.04]
        px-3
        py-2
        backdrop-blur-md
      "
    >
      <div
        className="
          font-mono
          text-[9px]
          tracking-[0.15em]
          text-white/60
        "
      >
        SYSTEM_READY
      </div>
    </div>
  </motion.div>

  {/* BOTTOM LABEL */}

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
      duration: 0.8,
      delay: 1.6,
    }}
    className="
      pointer-events-none
      absolute
      bottom-[25%]
      right-[9%]
      hidden
      items-center
      gap-3
      lg:flex
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
        text-[8px]
        tracking-[0.2em]
        text-white/25
      "
    >
      CONTINUOUS_INNOVATION
    </span>
  </motion.div>

  {/* =====================================================
      ANIMATED SCANNING LINE
  ====================================================== */}

  <motion.div
    animate={{
      y: ["0%", "100%"],
      opacity: [0, 0.5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      pointer-events-none
      absolute
      left-0
      right-0
      top-0
      h-px
      bg-gradient-to-r
      from-transparent
      via-cyan-400/40
      to-transparent
    "
  />

  {/* =====================================================
      FLOATING PARTICLES
  ====================================================== */}

  <motion.span
    animate={{
      y: [0, -25, 0],
      opacity: [0.1, 0.8, 0.1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      pointer-events-none
      absolute
      left-[18%]
      top-[22%]
      h-1
      w-1
      rounded-full
      bg-cyan-300
      shadow-[0_0_12px_rgba(34,211,238,0.9)]
    "
  />

  <motion.span
    animate={{
      y: [0, 30, 0],
      x: [0, 15, 0],
      opacity: [0.1, 0.7, 0.1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    }}
    className="
      pointer-events-none
      absolute
      left-[38%]
      top-[17%]
      h-1
      w-1
      rounded-full
      bg-cyan-200
      shadow-[0_0_12px_rgba(34,211,238,0.9)]
    "
  />

  <motion.span
    animate={{
      y: [0, -20, 0],
      opacity: [0.1, 0.6, 0.1],
    }}
    transition={{
      duration: 5.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    }}
    className="
      pointer-events-none
      absolute
      left-[32%]
      bottom-[24%]
      h-1.5
      w-1.5
      rounded-full
      bg-cyan-300
      shadow-[0_0_14px_rgba(34,211,238,0.8)]
    "
  />

  {/* =====================================================
      CORNER SYSTEM MARK
  ====================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-8
      left-5
      hidden
      items-center
      gap-3
      sm:flex
      lg:left-10
    "
  >
    <span
      className="
        h-1
        w-1
        rounded-full
        bg-cyan-400
      "
    />

    <span
      className="
        font-mono
        text-[8px]
        tracking-[0.2em]
        text-white/20
      "
    >
      DSFLYER / PRODUCTS / 2026
    </span>
  </div>
</section>

      {/* =====================================================
          AVAILABLE / SHIPPED PRODUCTS
      ===================================================== */}

      <section
        id="pro"
        className="
          px-4
          pb-20
          sm:px-6
          sm:pb-24
          lg:px-10
          lg:pb-28
          mt-10
        "
      >
        <div className="mx-auto w-full min-w-0 max-w-shell">

          {/* SECTION HEADER */}

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
            className="mb-7 sm:mb-8"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-cyan-400/50 sm:w-8" />

              <span className="truncate font-mono text-[8px] uppercase tracking-[0.18em] text-cyan-400/60 sm:text-[9px] sm:tracking-[0.25em]">
                Shipped Products
              </span>

              <span className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_#65D9FF]" />
            </div>

            <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--fg)] sm:text-3xl">
              Built. Tested. Shipped.
            </h2>

            <p
              className="mt-2 max-w-xl text-[13px] leading-6 sm:text-sm"
              style={{
                color: "var(--fg)",
                opacity: 0.45,
              }}
            >
              Explore the products we have actually
              built and shipped. These are the systems
              that represent our work.
            </p>
          </motion.div>

          {/* FILTER */}

<div
  className="
    mb-8
    flex
    w-full
    gap-2
    overflow-x-auto
    overflow-y-hidden
    pb-2
    sm:mb-10
    sm:flex-wrap
    sm:gap-3
    sm:overflow-visible
    sm:pb-0
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
>
  {productCategories.map((cat) => {
    const active = category === cat;

    return (
      <button
        key={cat}
        type="button"
        onClick={() => setCategory(cat)}
        className={`
          relative
          flex
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          border
          px-3
          py-2
          font-mono
          text-[9px]
          whitespace-nowrap
          transition-all
          duration-300

          sm:rounded-xl
          sm:px-5
          sm:py-2.5
          sm:text-sm

          ${
            active
              ? `
                border-cyan-400
                bg-black/40
                text-white
                shadow-[0_0_18px_rgba(0,255,255,0.35)]
              `
              : `
                border-[var(--border)]
                hover:border-cyan-400/50
              `
          }
        `}
        style={
          !active
            ? {
                color: "var(--fg)",
                opacity: 0.65,
              }
            : undefined
        }
      >
        {active && (
          <>
            <span className="absolute left-0 top-0 h-1.5 w-1.5 animate-pulse bg-cyan-400 sm:h-2 sm:w-2" />

            <span className="absolute bottom-0 right-0 h-1.5 w-1.5 animate-pulse bg-cyan-400 sm:h-2 sm:w-2" />

            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-transparent" />
          </>
        )}

        <span className="relative z-10">
          {cat}
        </span>
      </button>
    );
  })}
</div>

          {/* GRAND PRODUCT GRID */}

          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="
                grid
                min-w-0
                grid-cols-1
                gap-5
                sm:grid-cols-2
                sm:gap-6
                lg:grid-cols-3
                lg:gap-7
                xl:gap-8
              "
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map(
                  (product, index) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      index={index}
                    />
                  )
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[var(--border)] p-8 text-center sm:p-12">
              <p
                className="text-sm sm:text-base"
                style={{
                  color: "var(--fg)",
                  opacity: 0.5,
                }}
              >
                No products found in this
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          COMING SOON
      ===================================================== */}

      {comingSoonProducts.length > 0 && (
        <section
          id="com"
          className="
            relative
            overflow-hidden
            px-4
            pb-10
            sm:px-6
            sm:pb-24
            lg:px-10
            lg:pb-28
          "
        >
          {/* BACKGROUND */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[10%] top-[20%] h-48 w-48 rounded-full bg-cyan-400/[0.035] blur-[90px] sm:h-64 sm:w-64 sm:blur-[100px]" />

            <div className="absolute bottom-[10%] right-[10%] h-56 w-56 rounded-full bg-purple-500/[0.035] blur-[100px] sm:h-72 sm:w-72 sm:blur-[110px]" />
          </div>

          <div className="relative z-10 mx-auto w-full min-w-0 max-w-shell">

            {/* HEADER */}

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
              className="mb-8 sm:mb-10"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="h-px w-6 shrink-0 bg-purple-400/50 sm:w-8" />

                <span className="truncate font-mono text-[8px] uppercase tracking-[0.18em] text-purple-400/70 sm:text-[9px] sm:tracking-[0.25em]">
                  Classified
                </span>

                <span className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-purple-400" />
              </div>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  font-display
                  text-[clamp(1.8rem,6vw,3.2rem)]
                  font-semibold
                  leading-tight
                  text-[var(--fg)]
                "
              >
                Something new is{" "}

                <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                  loading.
                </span>
              </h2>

              <p
                className="mt-3 max-w-xl text-[13px] leading-6 sm:text-sm"
                style={{
                  color: "var(--fg)",
                  opacity: 0.5,
                }}
              >
                We are not revealing what these
                products are yet. Only the logos.
                Can you figure them out?
              </p>
            </motion.div>

            {/* MYSTERY LOGOS */}

            <div
              className="
                grid
                min-w-0
                grid-cols-1
                gap-5
                sm:grid-cols-2
                sm:gap-6
                lg:grid-cols-3
              "
            >
              {comingSoonProducts
                .slice(0, 3)
                .map((product, index) => (
                  <ComingSoonCard
                    key={product.slug}
                    product={product}
                    index={index}
                    image={comingSoonImages[index]}
                    onGuess={setSelectedMystery}
                  />
                ))}
            </div>

            {/* INTERACTION NOTE */}

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
                delay: 0.4,
              }}
              className="
                mt-7
                flex
                items-center
                justify-center
                gap-2
                sm:mt-8
                sm:gap-3
              "
            >
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-white/10 sm:w-12" />

              <span className="text-center font-mono text-[7px] uppercase tracking-[0.16em] text-white/20 sm:text-[8px] sm:tracking-[0.25em]">
                Click a logo to make your guess
              </span>

              <span className="h-px w-6 bg-gradient-to-l from-transparent to-white/10 sm:w-12" />
            </motion.div>
          </div>
        </section>
      )}

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTABand />

      {/* =====================================================
          GUESS MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedMystery && (
          <GuessModal
            product={selectedMystery}
            onClose={() =>
              setSelectedMystery(null)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}