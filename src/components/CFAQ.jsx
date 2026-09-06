import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "./ui/Eyebrow";
import { faqs as defaultFaqs } from "../data/faqs";

/* =========================================================
   TYPING TEXT
========================================================= */

function TypingText({ text }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplay("");

    if (!text) return;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplay((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [text]);

  return <>{display}</>;
}

/* =========================================================
   FAQ
========================================================= */

export default function FAQ({
  items = defaultFaqs,
  title = "Common questions",
  eyebrow = "FAQ",
}) {
  const [active, setActive] = useState(0);

  if (!items || items.length === 0) {
    return null;
  }

  const current = items[active];

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-24 lg:px-10">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,111,255,0.15),transparent_40%)]" /> */}

      <div className="absolute inset-0 bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.08]" />

      {/* AMBIENT GLOW */}

      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 25, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]"
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1400px] -mt-10">
        {/* =================================================
            HEADER
        ================================================= */}

        <Eyebrow>{eyebrow}</Eyebrow>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-5 font-display text-center text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--fg)]"
        >
          {title}
        </motion.h2>

        <motion.p
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-4  text-sm text-center text-[var(--fg)] opacity-60 sm:text-base"
        >
          Great digital experiences start with the right questions. Find the
          answers you need and see how we turn complex ideas into simple
          solutions.
        </motion.p>

        {/* =================================================
            DESFLYER AI CORE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-black/40 shadow-2xl backdrop-blur-xl"
        >
          {/* =================================================
              GLOW
          ================================================= */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

          {/* =================================================
              TERMINAL HEADER
          ================================================= */}

          <div className="relative z-20 flex items-center gap-2 border-b border-white/10 px-5 py-3">
            {/* RED */}

            <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.4)]" />

            {/* YELLOW */}

            <span className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.35)]" />

            {/* GREEN */}

            <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.4)]" />

            {/* CORE NAME */}

            <p className="ml-3 font-mono text-[10px] tracking-[0.05em] text-white/50">
              DESFLYER_AI_CORE
            </p>

            {/* ONLINE */}

            <div className="ml-auto flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-green-400/60">
                Online
              </span>
            </div>
          </div>

          {/* =================================================
              CARD BODY
              LEFT = TERMINAL
              RIGHT = QUESTIONS
          ================================================= */}

          <div className="relative z-10 grid min-h-[400px] lg:grid-cols-[1.35fr_0.75fr]">            {/* =================================================
                LEFT TERMINAL
            ================================================= */}

            <div className="relative p-5 font-mono sm:p-6 lg:p-7">
              {/* SYSTEM */}

              <p className="mb-4 text-sm text-signal">SYSTEM ONLINE ●</p>

              {/* USER QUERY */}

              <div className="text-xs uppercase tracking-[0.15em] text-white/40">
                USER_QUERY:
              </div>

              <AnimatePresence mode="wait">
                <motion.h3
                  key={active}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="mt-3 max-w-2xl text-lg leading-relaxed text-white sm:text-xl lg:text-2xl"
                >
                  &gt; {current.q}
                </motion.h3>
              </AnimatePresence>

              {/* DIVIDER */}

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

              {/* AI RESPONSE */}

              <div className="text-xs uppercase tracking-[0.15em] text-white/40">
                AI_RESPONSE:
              </div>

              <div className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                <TypingText text={current.a} />

                <span className="ml-0.5 animate-pulse text-signal">▋</span>
              </div>

              {/* BOTTOM STATUS */}

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/[0.06] pt-3 sm:left-6 sm:right-6 lg:left-7 lg:right-7">
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                  RESPONSE_GENERATED
                </span>

                <span className="font-mono text-[8px] text-green-400/50">
                  200 OK
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT QUESTIONS
            ================================================= */}

            <div className="relative border-t border-blue-400/[0.08] bg-blue-500/[0.025] lg:border-l lg:border-t-0">
              {/* RIGHT HEADER */}

              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-blue-300/60">
                    AVAILABLE_QUERIES
                  </p>

                  <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
                    SELECT COMMAND
                  </p>
                </div>

                <span className="font-mono text-[8px] text-white/20">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>

              {/* =================================================
                  SCROLLABLE QUESTIONS
              ================================================= */}

              <div className="faq-scroll h-[300px] overflow-y-auto px-4 py-3">
                <div className="space-y-2">
                  {items.map((item, index) => {
                    const isActive = active === index;

                    return (
                      <motion.button
                        key={item.q || index}
                        type="button"
                        onClick={() => setActive(index)}
                        whileHover={{
                          x: -3,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className={`group relative w-full overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 ${isActive
                          ? "border-blue-400/70 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3),inset_0_0_15px_rgba(59,130,246,0.08)]"
                          : "border-blue-400/25 bg-white/[0.02] shadow-[0_0_10px_rgba(59,130,246,0.08)] hover:border-blue-400/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                          }`}
                      >
                        {/* ACTIVE GLOW */}

                        {isActive && (
                          <motion.div
                            layoutId="faq-active-glow"
                            className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.09] to-transparent"
                          />
                        )}

                        {/* CONTENT */}

                        <div className="relative z-10">
                          <div className="flex items-center justify-between">
                            <span
                              className={`font-mono text-[9px] tracking-[0.15em] ${isActive
                                ? "text-signal"
                                : "text-white/20"
                                }`}
                            >
                              CMD_{String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                              className={`font-mono text-[8px] uppercase tracking-[0.1em] ${isActive
                                ? "text-blue-300"
                                : "text-white/20"
                                }`}
                            >
                              {isActive ? "ACTIVE" : "OPEN"}
                            </span>
                          </div>

                          <p
                            className={`mt-2 text-md leading-5 transition-all duration-300 ${isActive
                              ? "text-white drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                              : "text-white/75 drop-shadow-[0_0_5px_rgba(96,165,250,0.25)] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]"
                              }`}
                          >
                            {item.q}
                          </p>
                        </div>

                        {/* ACTIVE LINE */}

                        {isActive && (
                          <motion.div
                            layoutId="active-faq-line"
                            className="absolute bottom-0 left-0 top-0 w-[2px] bg-signal"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* BOTTOM FADE */}

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#050b16] to-transparent" />

              {/* SCROLL LABEL */}

              {items.length > 5 && (
                <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-blue-400/10 bg-black/50 px-3 py-1 backdrop-blur-md">
                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-blue-300/40">
                    Scroll questions
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          CUSTOM SCROLLBAR
      ===================================================== */}

      <style>{`
        .faq-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.4) transparent;
        }

        .faq-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .faq-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .faq-scroll::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.4);
          border-radius: 999px;
        }

        .faq-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </section>
  );
}