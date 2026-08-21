import { useEffect, useMemo, useRef, useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import * as FiIcons from "react-icons/fi"; 
 
import { 
  FiArrowUpRight, 
  FiChevronLeft, 
  FiChevronRight, 
  FiLayers, 
  FiZap, 
  FiCheck, 
  FiGrid, 
  FiMousePointer, 
} from "react-icons/fi"; 
 
import Seo from "../lib/Seo"; 
import Eyebrow from "../components/ui/Eyebrow"; 
import CTABand from "../components/sections/CTABand"; 
import { services } from "../data/services"; 
 
const AUTO_ROTATE_TIME = 4000; 
 
export default function Services() { 
  const [activeIndex, setActiveIndex] = useState(0); 
  const [paused, setPaused] = useState(false); 
  const [direction, setDirection] = useState(1); 
 
  const timelineRef = useRef(null); 
 
  const allServices = useMemo(() => { 
    return services || []; 
  }, []); 
 
  const activeService = 
    allServices[activeIndex] || allServices[0]; 
 
  /* ============================================================ 
     CHANGE SERVICE 
  ============================================================ */ 
 
  const selectService = (index) => { 
    if (!allServices.length) return; 
 
    const nextIndex = 
      ((index % allServices.length) + 
        allServices.length) % 
      allServices.length; 
 
    if (nextIndex === activeIndex) return; 
 
    setDirection( 
      nextIndex > activeIndex ? 1 : -1 
    ); 
 
    setActiveIndex(nextIndex); 
  }; 
 
  /* ============================================================ 
     NEXT 
  ============================================================ */ 
 
  const nextService = () => { 
    if (!allServices.length) return; 
 
    setDirection(1); 
 
    setActiveIndex((current) => 
      current >= allServices.length - 1 
        ? 0 
        : current + 1 
    ); 
  }; 
 
  /* ============================================================ 
     PREVIOUS 
  ============================================================ */ 
 
  const previousService = () => { 
    if (!allServices.length) return; 
 
    setDirection(-1); 
 
    setActiveIndex((current) => 
      current === 0 
        ? allServices.length - 1 
        : current - 1 
    ); 
  }; 
 
  /* ============================================================ 
     AUTO ROTATION 
  ============================================================ */ 
 
  useEffect(() => { 
    if ( 
      paused || 
      allServices.length <= 1 
    ) { 
      return; 
    } 
 
    const timer = setInterval(() => { 
      setDirection(1); 
 
      setActiveIndex((current) => 
        current >= allServices.length - 1 
          ? 0 
          : current + 1 
      ); 
    }, AUTO_ROTATE_TIME); 
 
    return () => clearInterval(timer); 
  }, [paused, allServices.length]); 
 
  /* ============================================================ 
     KEYBOARD CONTROL 
  ============================================================ */ 
 
  useEffect(() => { 
    const handleKeyDown = (event) => { 
      if (event.key === "ArrowRight") { 
        nextService(); 
      } 
 
      if (event.key === "ArrowLeft") { 
        previousService(); 
      } 
    }; 
 
    window.addEventListener( 
      "keydown", 
      handleKeyDown 
    ); 
 
    return () => { 
      window.removeEventListener( 
        "keydown", 
        handleKeyDown 
      ); 
    }; 
  }); 
 
  /* ============================================================ 
     SCROLL ACTIVE TIMELINE ITEM INTO VIEW 
  ============================================================ */ 
 
  useEffect(() => { 
    if (!timelineRef.current) return; 
 
    const activeButton = 
      timelineRef.current.querySelector( 
        `[data-service-index="${activeIndex}"]` 
      ); 
 
    if (activeButton) { 
      activeButton.scrollIntoView({ 
        behavior: "smooth", 
        block: "nearest", 
        inline: "center", 
      }); 
    } 
  }, [activeIndex]); 
 
  if (!allServices.length) { 
    return null; 
  } 
 
  const ActiveIcon = 
    FiIcons[activeService?.icon] || 
    FiIcons.FiBox; 
 
  return ( 
    <> 
      <Seo 
        title="Services" 
        description="Custom software, web, mobile app development, enterprise solutions, UI/UX design, branding and more from DesFlyer." 
        path="/services" 
      /> 
 
      {/* ========================================================== 
          HERO 
      ========================================================== */} 
 
      <section 
        className=" 
          relative 
          min-h-[620px] 
          overflow-hidden 
          bg-[#050912] 
          px-4 
          pt-28 
          text-white 
          sm:px-6 
          lg:min-h-[700px] 
          lg:px-10 
          lg:pt-32 
        " 
      > 
        {/* HERO IMAGE */} 
 
        <div className="absolute inset-0"> 
          <img 
            src="/images/portfolio/service.png" 
            alt="Services" 
            className=" 
              h-full 
              w-full 
              object-cover 
              object-center 
            " 
          /> 
        </div> 
 
        {/* GRADIENT */} 
 
        <div 
          className=" 
            pointer-events-none 
            absolute 
            inset-0 
            bg-gradient-to-r 
            from-[#050912]/95 
            via-[#050912]/65 
            to-transparent 
          " 
        /> 
 
        <div 
          className=" 
            pointer-events-none 
            absolute 
            inset-0 
            bg-gradient-to-t 
            from-[#050912] 
            via-transparent 
            to-[#050912]/20 
          " 
        /> 
 
        {/* HERO CONTENT */} 
 
        <div 
          className=" 
            relative 
            z-10 
            mx-auto 
            flex 
            min-h-[560px] 
            max-w-7xl 
            items-center 
          " 
        > 
          <motion.div 
            initial={{ 
              opacity: 0, 
              y: 30, 
            }} 
            animate={{ 
              opacity: 1, 
              y: 0, 
            }} 
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1], 
            }} 
            className=" 
              max-w-3xl 
              pb-16 
            " 
          > 
            <Eyebrow> 
              What We Do 
            </Eyebrow> 
 
            <motion.h1 
              initial={{ 
                opacity: 0, 
                y: 25, 
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
                mt-5 
                max-w-3xl 
                text-5xl 
                font-semibold 
                leading-[0.92] 
                tracking-[-0.05em] 
                sm:text-6xl 
                lg:text-7xl 
              " 
              style={{ 
                fontFamily: 
                  "'Fraunces', serif", 
              }} 
            > 
              Services built to move 
              <br /> 
 
              <span className="text-slate-300"> 
                your business forward. 
              </span> 
            </motion.h1> 
 
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
                duration: 0.7, 
                delay: 0.2, 
              }} 
              className=" 
                mt-6 
                max-w-xl 
                text-sm 
                leading-7 
                text-slate-300 
                sm:text-base 
              " 
            > 
              From software development to digital 
              experiences, we build practical solutions 
              designed around your goals. 
            </motion.p> 
 
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
                duration: 0.6, 
                delay: 0.3, 
              }} 
              className=" 
                mt-8 
                flex 
                items-center 
                gap-3 
                text-[9px] 
                uppercase 
                tracking-[0.2em] 
                text-slate-400 
              " 
            > 
              <FiGrid size={12} /> 
 
              <span> 
                {allServices.length} services 
              </span> 
 
              <span className="text-slate-500"> 
                / 
              </span> 
 
              <span> 
                Interactive timeline 
              </span> 
            </motion.div> 
          </motion.div> 
        </div> 
 
        {/* HERO BOTTOM */} 
 
        <div 
          className=" 
            absolute 
            bottom-7 
            left-1/2 
            z-10 
            flex 
            -translate-x-1/2 
            items-center 
            gap-3 
            whitespace-nowrap 
            text-[8px] 
            uppercase 
            tracking-[0.25em] 
            text-slate-400 
          " 
        > 
          <span className="h-px w-8 bg-white/30" /> 
 
          Explore our services 
 
          <span className="h-px w-8 bg-white/30" /> 
        </div> 
      </section> 
 
      {/* ========================================================== 
          NEW SERVICES CONCEPT 
          HORIZONTAL TIMELINE 
      ========================================================== */} 
 
      <section 
        className=" 
          relative 
          overflow-hidden 
          bg-[#050912] 
          px-4 
          pb-24 
          pt-16 
          text-white 
          sm:px-6 
          lg:px-8 
          lg:pb-28 
          lg:pt-24 
        " 
      > 
        {/* BACKGROUND DETAILS */} 
 
        <div 
          className=" 
            pointer-events-none 
            absolute 
            left-1/2 
            top-[35%] 
            h-[600px] 
            w-[600px] 
            -translate-x-1/2 
            rounded-full 
            bg-blue-500/[0.035] 
            blur-[150px] 
          " 
        /> 
 
        <div 
          className=" 
            pointer-events-none 
            absolute 
            inset-0 
            opacity-[0.035] 
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] 
            [background-size:80px_80px] 
          " 
        /> 
 
        <div className="relative mx-auto max-w-[1500px]"> 
 
          {/* ====================================================== 
              SECTION HEADER 
          ====================================================== */} 
 
          <div 
            className=" 
              flex 
              flex-col 
              gap-7 
              lg:flex-row 
              lg:items-end 
              lg:justify-between 
            " 
          > 
            <div> 
              <Eyebrow> 
                Our Capabilities 
              </Eyebrow> 
 
              <motion.h2 
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
                  duration: 0.7, 
                }} 
                className=" 
                  mt-4 
                  max-w-4xl 
                  text-4xl 
                  font-semibold 
                  leading-[0.92] 
                  tracking-[-0.05em] 
                  sm:text-5xl 
                  lg:text-7xl 
                " 
                style={{ 
                  fontFamily: 
                    "'Fraunces', serif", 
                }} 
              > 
                One capability. 
                <br /> 
 
                <span className="text-slate-600"> 
                  Endless possibilities. 
                </span> 
              </motion.h2> 
            </div> 
 
            {/* RIGHT INFO */} 
 
            <div 
              className=" 
                flex 
                items-center 
                gap-3 
                text-[9px] 
                uppercase 
                tracking-[0.2em] 
                text-slate-600 
              " 
            > 
              <FiMousePointer 
                size={12} 
              /> 
 
              Select a service 
            </div> 
          </div> 
 
          {/* ====================================================== 
              MAIN SERVICE DISPLAY 
          ====================================================== */} 
 
          <motion.div 
            initial={{ 
              opacity: 0, 
              y: 35, 
            }} 
            whileInView={{ 
              opacity: 1, 
              y: 0, 
            }} 
            viewport={{ 
              once: true, 
              amount: 0.15, 
            }} 
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1], 
            }} 
            onMouseEnter={() => 
              setPaused(true) 
            } 
            onMouseLeave={() => 
              setPaused(false) 
            } 
            className=" 
              relative 
              mt-14 
              overflow-hidden 
              rounded-[32px] 
              border 
              border-white/[0.07] 
              bg-[#07101b] 
              shadow-[0_40px_120px_rgba(0,0,0,.45)] 
            " 
          > 
            {/* TOP BAR */} 
 
            <div 
              className=" 
                flex 
                h-12 
                items-center 
                justify-between 
                border-b 
                border-white/[0.06] 
                px-5 
                sm:px-7 
              " 
            > 
              {/* <div className="flex items-center gap-2"> 
                <span 
                  className=" 
                    h-2 
                    w-2 
                    rounded-full 
                    bg-red-400/70 
                  " 
                /> 
 
                <span 
                  className=" 
                    h-2 
                    w-2 
                    rounded-full 
                    bg-yellow-400/70 
                  " 
                /> 
 
                <span 
                  className=" 
                    h-2 
                    w-2 
                    rounded-full 
                    bg-green-400/70 
                  " 
                /> 
              </div> */} 
 
              <div 
                className=" 
                  flex 
                  items-center 
                  gap-2 
                  rounded-full 
                  border 
                  border-white/[0.06] 
                  bg-black/20 
                  px-3 
                  py-1.5 
                  text-[8px] 
                  uppercase 
                  tracking-[0.2em] 
                  text-slate-600 
                " 
              > 
                <span 
                  className={` 
                    h-1.5 
                    w-1.5 
                    rounded-full 
                    ${ 
                      paused 
                        ? "bg-yellow-400" 
                        : "bg-emerald-400" 
                    } 
                  `} 
                /> 
 
                {paused 
                  ? "Paused" 
                  : "Live showcase"} 
              </div> 
 
              <span 
                className=" 
                  font-mono 
                  text-[8px] 
                  uppercase 
                  tracking-[0.2em] 
                  text-slate-700 
                " 
              > 
                DES / 2026 
              </span> 
            </div> 
 
            {/* ==================================================== 
                SERVICE CONTENT 
            ==================================================== */} 
 
            <div 
              className=" 
                relative 
                min-h-[520px] 
                overflow-hidden 
                sm:min-h-[570px] 
                lg:min-h-[590px] 
              " 
            > 
              {/* DECORATIVE CIRCLES */} 
 
              <motion.div 
                animate={{ 
                  rotate: 360, 
                }} 
                transition={{ 
                  duration: 35, 
                  repeat: Infinity, 
                  ease: "linear", 
                }} 
                className=" 
                  pointer-events-none 
                  absolute 
                  left-1/2 
                  top-1/2 
                  h-[390px] 
                  w-[390px] 
                  -translate-x-1/2 
                  -translate-y-1/2 
                  rounded-full 
                  border 
                  border-dashed 
                  border-blue-400/[0.07] 
                  sm:h-[500px] 
                  sm:w-[500px] 
                " 
              /> 
 
              <motion.div 
                animate={{ 
                  rotate: -360, 
                }} 
                transition={{ 
                  duration: 28, 
                  repeat: Infinity, 
                  ease: "linear", 
                }} 
                className=" 
                  pointer-events-none 
                  absolute 
                  left-1/2 
                  top-1/2 
                  h-[270px] 
                  w-[270px] 
                  -translate-x-1/2 
                  -translate-y-1/2 
                  rounded-full 
                  border 
                  border-blue-400/[0.05] 
                  sm:h-[350px] 
                  sm:w-[350px] 
                " 
              /> 
 
              {/* GLOW */} 
 
              <div 
                className=" 
                  pointer-events-none 
                  absolute 
                  left-1/2 
                  top-1/2 
                  h-[350px] 
                  w-[350px] 
                  -translate-x-1/2 
                  -translate-y-1/2 
                  rounded-full 
                  bg-blue-500/[0.06] 
                  blur-[100px] 
                " 
              /> 
 
              {/* SERVICE */} 
 
              <AnimatePresence 
                mode="wait" 
                custom={direction} 
              > 
                <motion.div 
                  key={ 
                    activeService.slug || 
                    activeIndex 
                  } 
                  custom={direction} 
                  initial={{ 
                    opacity: 0, 
                    x: 
                      direction > 0 
                        ? 90 
                        : -90, 
                  }} 
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                  }} 
                  exit={{ 
                    opacity: 0, 
                    x: 
                      direction > 0 
                        ? -90 
                        : 90, 
                  }} 
                  transition={{ 
                    duration: 0.6, 
                    ease: [ 
                      0.22, 
                      1, 
                      0.36, 
                      1, 
                    ], 
                  }} 
                  className=" 
                    relative 
                    z-10 
                    mx-auto 
                    flex 
                    min-h-[508px] 
                    max-w-4xl 
                    flex-col 
                    items-center 
                    justify-center 
                    px-6 
                    py-14 
                    text-center 
                    sm:min-h-[558px] 
                  " 
                > 
                  {/* NUMBER */} 
 
                  <div 
                    className=" 
                      mb-5 
                      flex 
                      items-center 
                      gap-3 
                      text-[8px] 
                      uppercase 
                      tracking-[0.3em] 
                      text-slate-600 
                    " 
                  > 
                    <span className="h-px w-7 bg-white/10" /> 
 
                    SERVICE{" "} 
                    {String( 
                      activeIndex + 1 
                    ).padStart(2, "0")} 
 
                    <span className="h-px w-7 bg-white/10" /> 
                  </div> 
 
                  {/* ICON */} 
 
                  <motion.div 
                    initial={{ 
                      scale: 0.7, 
                      opacity: 0, 
                    }} 
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                    }} 
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.08, 
                    }} 
                    className=" 
                      relative 
                      mb-7 
                      flex 
                      h-24 
                      w-24 
                      items-center 
                      justify-center 
                      rounded-[28px] 
                      border 
                      border-blue-400/20 
                      bg-blue-500/[0.08] 
                      text-blue-400 
                      shadow-[0_0_80px_rgba(59,130,246,.14)] 
                      sm:h-28 
                      sm:w-28 
                    " 
                  > 
                    <div 
                      className=" 
                        absolute 
                        inset-0 
                        rounded-[28px] 
                        bg-blue-500/10 
                        blur-xl 
                      " 
                    /> 
 
                    <div className="relative"> 
                      <ActiveIcon 
                        size={34} 
                      /> 
                    </div> 
                  </motion.div> 
 
                  {/* CATEGORY */} 
 
                  <div 
                    className=" 
                      mb-3 
                      flex 
                      items-center 
                      gap-2 
                      text-[8px] 
                      uppercase 
                      tracking-[0.28em] 
                      text-blue-400 
                    " 
                  > 
                    <FiZap size={10} /> 
 
                    Digital capability 
                  </div> 
 
                  {/* TITLE */} 
 
                  <h3 
                    className=" 
                      max-w-4xl 
                      text-4xl 
                      font-semibold 
                      leading-[0.95] 
                      tracking-[-0.05em] 
                      text-white 
                      sm:text-5xl 
                      lg:text-6xl 
                    " 
                    style={{ 
                      fontFamily: 
                        "'Fraunces', serif", 
                    }} 
                  > 
                    {activeService.title} 
                  </h3> 
 
                  {/* DESCRIPTION */} 
 
                  <p 
                    className=" 
                      mt-6 
                      max-w-2xl 
                      text-sm 
                      leading-7 
                      text-slate-400 
                      sm:text-base 
                    " 
                  > 
                    {activeService.body} 
                  </p> 
 
                  {/* BENEFITS */} 
 
                  {activeService.benefits 
                    ?.length > 0 && ( 
                    <div 
                      className=" 
                        mt-7 
                        flex 
                        flex-wrap 
                        justify-center 
                        gap-2 
                      " 
                    > 
                      {activeService.benefits 
                        .slice(0, 4) 
                        .map((benefit) => ( 
                          <div 
                            key={benefit} 
                            className=" 
                              flex 
                              items-center 
                              gap-2 
                              rounded-full 
                              border 
                              border-white/[0.07] 
                              bg-white/[0.025] 
                              px-4 
                              py-2.5 
                            " 
                          > 
                            <FiCheck 
                              size={10} 
                              className="text-blue-400" 
                            /> 
 
                            <span 
                              className=" 
                                text-[9px] 
                                text-slate-400 
                              " 
                            > 
                              {benefit} 
                            </span> 
                          </div> 
                        ))} 
                    </div> 
                  )} 
                </motion.div> 
              </AnimatePresence> 
 
              {/* LEFT ARROW */} 
 
              <button 
                type="button" 
                onClick={previousService} 
                className=" 
                  absolute 
                  left-4 
                  top-1/2 
                  z-30 
                  flex 
                  h-11 
                  w-11 
                  -translate-y-1/2 
                  items-center 
                  justify-center 
                  rounded-full 
                  border 
                  border-white/10 
                  bg-black/20 
                  text-slate-400 
                  backdrop-blur-md 
                  transition 
                  hover:border-blue-400/30 
                  hover:bg-blue-500/10 
                  hover:text-white 
                  sm:left-6 
                " 
                aria-label="Previous service" 
              > 
                <FiChevronLeft 
                  size={17} 
                /> 
              </button> 
 
              {/* RIGHT ARROW */} 
 
              <button 
                type="button" 
                onClick={nextService} 
                className=" 
                  absolute 
                  right-4 
                  top-1/2 
                  z-30 
                  flex 
                  h-11 
                  w-11 
                  -translate-y-1/2 
                  items-center 
                  justify-center 
                  rounded-full 
                  border 
                  border-blue-400/20 
                  bg-blue-500/10 
                  text-blue-300 
                  backdrop-blur-md 
                  transition 
                  hover:border-blue-400/40 
                  hover:bg-blue-500/20 
                  hover:text-white 
                  sm:right-6 
                " 
                aria-label="Next service" 
              > 
                <FiChevronRight 
                  size={17} 
                /> 
              </button> 
 
              {/* BOTTOM INFO */} 
 
              <div 
                className=" 
                  absolute 
                  bottom-5 
                  left-5 
                  right-5 
                  flex 
                  items-center 
                  justify-between 
                  text-[8px] 
                  uppercase 
                  tracking-[0.18em] 
                  text-slate-700 
                  sm:left-7 
                  sm:right-7 
                " 
              > 
                <span> 
                  {paused 
                    ? "Timeline paused" 
                    : "Auto navigating"} 
                </span> 
 
                <span> 
                  {String( 
                    activeIndex + 1 
                  ).padStart(2, "0")} 
                  {" / "} 
                  {String( 
                    allServices.length 
                  ).padStart(2, "0")} 
                </span> 
              </div> 
            </div> 
 
            {/* ==================================================== 
                TIMELINE 
            ==================================================== */} 
 
            <div 
              ref={timelineRef} 
              className=" 
                relative 
                overflow-x-auto 
                border-t 
                border-white/[0.06] 
                scrollbar-hide 
              " 
            > 
              {/* LINE */} 
 
              <div 
                className=" 
                  pointer-events-none 
                  absolute 
                  left-8 
                  right-8 
                  top-[38px] 
                  h-px 
                  bg-white/[0.07] 
                " 
              /> 
 
              <motion.div 
                className=" 
                  pointer-events-none 
                  absolute 
                  left-8 
                  top-[38px] 
                  h-px 
                  bg-blue-400 
                  shadow-[0_0_12px_rgba(96,165,250,.7)] 
                " 
                animate={{ 
                  width: `calc(${ 
                    allServices.length > 1 
                      ? (activeIndex / 
                          (allServices.length - 
                            1)) * 
                        100 
                      : 100 
                  }% - 64px)`, 
                }} 
                transition={{ 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1], 
                }} 
              /> 
 
              <div 
                className=" 
                  relative 
                  flex 
                  min-w-max 
                  items-start 
                  px-8 
                " 
              > 
                {allServices.map( 
                  (service, index) => { 
                    const ServiceIcon = 
                      FiIcons[ 
                        service.icon 
                      ] || 
                      FiIcons.FiBox; 
 
                    const active = 
                      index === 
                      activeIndex; 
 
                    return ( 
                      <button 
                        key={ 
                          service.slug || 
                          index 
                        } 
                        data-service-index={ 
                          index 
                        } 
                        type="button" 
                        onClick={() => 
                          selectService( 
                            index 
                          ) 
                        } 
                        className=" 
                          group 
                          relative 
                          flex 
                          w-[88px] 
                          shrink-0 
                          flex-col 
                          items-center 
                          px-1 
                          pb-5 
                          pt-5 
                          text-center 
                        " 
                      > 
                        {/* DOT */} 
 
                        <motion.span 
                          animate={{ 
                            scale: active 
                              ? 1.25 
                              : 1, 
                          }} 
                          className={` 
                            relative 
                            z-10 
                            flex 
                            h-7 
                            w-7 
                            items-center 
                            justify-center 
                            rounded-full 
                            border 
                            ${ 
                              active 
                                ? "border-blue-400 bg-blue-400 text-[#050912]" 
                                : "border-white/10 bg-[#07101b] text-slate-700 group-hover:border-blue-400/30 group-hover:text-blue-400" 
                            } 
                          `} 
                        > 
                          <ServiceIcon 
                            size={ 
                              active 
                                ? 11 
                                : 10 
                            } 
                          /> 
                        </motion.span> 
 
                        {/* NUMBER */} 
 
                        <span 
                          className={` 
                            mt-3 
                            font-mono 
                            text-[8px] 
                            ${ 
                              active 
                                ? "text-blue-400" 
                                : "text-slate-700" 
                            } 
                          `} 
                        > 
                          {String( 
                            index + 1 
                          ).padStart( 
                            2, 
                            "0" 
                          )} 
                        </span> 
 
                        {/* TITLE */} 
 
                        <span 
                          className={` 
                            mt-1 
                            w-full 
                            truncate 
                            text-[8px] 
                            leading-4 
                            ${ 
                              active 
                                ? "font-medium text-slate-200" 
                                : "text-slate-600 group-hover:text-slate-400" 
                            } 
                          `} 
                        > 
                          {service.title} 
                        </span> 
                      </button> 
                    ); 
                  } 
                )} 
              </div> 
            </div> 
          </motion.div> 
 
          {/* ====================================================== 
              CURRENT SERVICE DETAIL STRIP 
          ====================================================== */} 
 
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
              duration: 0.6, 
              delay: 0.15, 
            }} 
            className=" 
              mt-5 
              flex 
              flex-col 
              gap-4 
              rounded-2xl 
              border 
              border-white/[0.06] 
              bg-white/[0.015] 
              px-5 
              py-4 
              sm:flex-row 
              sm:items-center 
              sm:justify-between 
              sm:px-6 
            " 
          > 
            <div 
              className=" 
                flex 
                items-center 
                gap-3 
              " 
            > 
              <div 
                className=" 
                  flex 
                  h-8 
                  w-8 
                  items-center 
                  justify-center 
                  rounded-lg 
                  bg-blue-500/[0.08] 
                  text-blue-400 
                " 
              > 
                <FiLayers 
                  size={13} 
                /> 
              </div> 
 
              <div> 
                <p 
                  className=" 
                    text-[8px] 
                    uppercase 
                    tracking-[0.2em] 
                    text-slate-700 
                  " 
                > 
                  Currently exploring 
                </p> 
 
                <p 
                  className=" 
                    mt-1 
                    text-xs 
                    font-medium 
                    text-slate-300 
                  " 
                > 
                  {activeService.title} 
                </p> 
              </div> 
            </div> 
 
            <div 
              className=" 
                flex 
                items-center 
                gap-3 
              " 
            > 
              <span 
                className=" 
                  font-mono 
                  text-[9px] 
                  text-blue-400 
                " 
              > 
                {String( 
                  activeIndex + 1 
                ).padStart(2, "0")} 
              </span> 
 
              <div 
                className=" 
                  h-px 
                  w-20 
                  overflow-hidden 
                  bg-white/[0.06] 
                  sm:w-32 
                " 
              > 
                {!paused && ( 
                  <motion.div 
                    key={activeIndex} 
                    initial={{ 
                      width: "0%", 
                    }} 
                    animate={{ 
                      width: "100%", 
                    }} 
                    transition={{ 
                      duration: 
                        AUTO_ROTATE_TIME / 
                        1000, 
                      ease: "linear", 
                    }} 
                    className=" 
                      h-full 
                      bg-blue-400 
                    " 
                  /> 
                )} 
              </div> 
 
              <span 
                className=" 
                  font-mono 
                  text-[9px] 
                  text-slate-700 
                " 
              > 
                {String( 
                  allServices.length 
                ).padStart(2, "0")} 
              </span> 
 
              <FiArrowUpRight 
                size={13} 
                className="text-slate-700" 
              /> 
            </div> 
          </motion.div> 
 
          {/* ====================================================== 
              MOBILE NAVIGATION 
          ====================================================== */} 
 
          <div 
            className=" 
              mt-5 
              flex 
              items-center 
              justify-between 
              lg:hidden 
            " 
          > 
            <button 
              type="button" 
              onClick={previousService} 
              className=" 
                flex 
                items-center 
                gap-2 
                rounded-full 
                border 
                border-white/10 
                px-4 
                py-2.5 
                text-[9px] 
                uppercase 
                tracking-[0.15em] 
                text-slate-500 
              " 
            > 
              <FiChevronLeft 
                size={12} 
              /> 
 
              Previous 
            </button> 
 
            <span 
              className=" 
                font-mono 
                text-[9px] 
                text-slate-700 
              " 
            > 
              Swipe / Select 
            </span> 
 
            <button 
              type="button" 
              onClick={nextService} 
              className=" 
                flex 
                items-center 
                gap-2 
                rounded-full 
                border 
                border-blue-400/20 
                bg-blue-500/[0.06] 
                px-4 
                py-2.5 
                text-[9px] 
                uppercase 
                tracking-[0.15em] 
                text-blue-400 
              " 
            > 
              Next 
 
              <FiChevronRight 
                size={12} 
              /> 
            </button> 
          </div> 
 
          {/* ====================================================== 
              FOOTER STATUS 
          ====================================================== */} 
 
          <div 
            className=" 
              mt-8 
              flex 
              items-center 
              justify-between 
              text-[8px] 
              uppercase 
              tracking-[0.2em] 
              text-slate-700 
            " 
          > 
            <div 
              className=" 
                flex 
                items-center 
                gap-2 
              " 
            > 
              <span 
                className=" 
                  h-1.5 
                  w-1.5 
                  rounded-full 
                  bg-blue-400 
                  shadow-[0_0_10px_rgba(96,165,250,.7)] 
                " 
              /> 
 
              {paused 
                ? "Showcase paused" 
                : "Automatically rotating"} 
            </div> 
 
            <span> 
              {allServices.length} capabilities 
            </span> 
          </div> 
        </div> 
      </section> 
 
      {/* ========================================================== 
          CTA 
      ========================================================== */} 
 
      <CTABand /> 
 
      {/* ========================================================== 
          FONT + SCROLLBAR 
      ========================================================== */} 
 
      <style> 
        {` 
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&display=swap'); 
 
          .scrollbar-hide::-webkit-scrollbar { 
            display: none; 
          } 
 
          .scrollbar-hide { 
            -ms-overflow-style: none; 
            scrollbar-width: none; 
          } 
        `} 
      </style> 
    </> 
  ); 
} 