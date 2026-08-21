import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiLayers,
  FiMapPin,
  FiStar,
  FiUser,
  FiBookOpen,
  FiZap,
} from 'react-icons/fi'

import CTABand from '../../components/sections/CTABand'

import Seo from '../../lib/Seo'
import Eyebrow from '../../components/ui/Eyebrow'
import DynamicForm from '../../components/form/DynamicForm'
import BenefitsGrid from '../../components/BenefitsGrid'
import FAQ from '../../components/FAQ'

import { jobFormSections } from '../../data/jobForm'
import { jobBenefits, jobFaqs } from '../../data/opportunitiesContent'
import { api } from '../../lib/api'
import { useJobOpenings } from '../../store/openingsStore'

/* ============================================================
   ANIMATION
============================================================ */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ============================================================
   JOB CARD
============================================================ */

function JobCard({ job, index, active, onApply }) {
  const cardRef = useRef(null)

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  })

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  })

  const handleMouseMove = (event) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / centerX) * 5
    const rotateX = ((centerY - y) / centerY) * 5

    setRotation({
      x: rotateX,
      y: rotateY,
    })

    setMouse({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    })

    setMouse({
      x: 50,
      y: 50,
    })
  }

  return (
    <motion.article
      ref={cardRef}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
      className="h-full"
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 22,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`
          group
          relative
          h-full
          min-h-[360px]
          overflow-hidden
          rounded-[30px]
          border
          p-7
          lg:p-8
          transition-colors
          duration-500
          ${active
            ? 'border-signal/50 bg-[var(--card)]'
            : 'border-[var(--border)] bg-[var(--card)]/70'
          }
        `}
      >
        {/* CURSOR GLOW */}

        <motion.div
          animate={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
          }}
          className="
            pointer-events-none
            absolute
            h-56
            w-56
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-signal/10
            blur-[70px]
          "
        />

        {/* GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.045]
            bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)]
            bg-[size:32px_32px]
          "
        />

        {/* TOP RIGHT NUMBER */}

        <div
          className="
            absolute
            right-6
            top-6
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-signal/20
            bg-signal/5
            font-mono
            text-xs
            text-signal
          "
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* ICON */}

        <motion.div
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-signal/25
            bg-signal/10
            text-signal
          "
        >
          <FiLayers size={22} />

          <span
            className="
              absolute
              -inset-1
              rounded-2xl
              border
              border-signal/10
            "
          />
        </motion.div>

        {/* CONTENT */}

        <div className="relative z-10 mt-8">
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              font-mono
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-[var(--fg)]/40
            "
          >
            <span className="flex items-center gap-1.5">
              <FiBriefcase
                size={12}
                className="text-signal"
              />
              {job.department}
            </span>

            <span className="flex items-center gap-1.5">
              <FiMapPin
                size={12}
                className="text-signal"
              />
              {job.location}
            </span>
          </div>

          <h3
            className="
              mt-5
              max-w-lg
              font-display
              text-2xl
              font-bold
              leading-tight
              text-[var(--fg)]
              transition-colors
              duration-300
              group-hover:text-signal
              lg:text-3xl
            "
          >
            {job.title}
          </h3>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-[var(--fg)]/55
            "
          >
            {job.description}
          </p>
        </div>

        {/* BOTTOM */}

        <div
          className="
            relative
            z-10
            mt-auto
            pt-8
          "
        >
          <div
            className="
              mb-6
              h-px
              w-full
              bg-gradient-to-r
              from-signal/30
              via-[var(--border)]
              to-transparent
            "
          />

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--fg)]/30
                "
              >
                <FiClock size={12} />
                Employment
              </div>

              <div
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-[var(--fg)]/70
                "
              >
                {job.employmentType}
              </div>
            </div>

            {/* APPLY BUTTON */}

            <button
              type="button"
              onClick={() => onApply(job)}
              className="
                group/button
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-signal
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_12px_35px_rgba(46,111,255,0.25)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_18px_45px_rgba(46,111,255,0.35)]
              "
            >
              Apply

              <FiArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-0.5
                  group-hover/button:-translate-y-0.5
                "
              />
            </button>
          </div>
        </div>

        {/* ACTIVE INDICATOR */}

        <motion.div
          initial={false}
          animate={{
            opacity: active ? 1 : 0,
            scaleX: active ? 1 : 0,
          }}
          className="
            absolute
            bottom-0
            left-8
            right-8
            h-[2px]
            origin-left
            bg-signal
          "
        />
      </motion.div>
    </motion.article>
  )
}

/* ============================================================
   APPLICATION STEPS
============================================================ */

const applicationSteps = [
  {
    number: '01',
    title: 'Personal',
    description: 'Tell us about yourself',
    icon: FiUser,
  },
  {
    number: '02',
    title: 'Education',
    description: 'Share your background',
    icon: FiBookOpen,
  },
  {
    number: '03',
    title: 'Resume',
    description: 'Complete your application',
    icon: FiFileText,
  },
]

/* ============================================================
   APPLICATION
============================================================ */

function ApplicationSection({
  step,
  setStep,
  applicationRef,
  onSubmit,
  selectedJob,
  onClose,
}) {
  const step1Sections = jobFormSections.slice(0, 1)
  const step2Sections = jobFormSections.slice(1, 2)
  const step3Sections = jobFormSections.slice(2)

  const currentSections =
    step === 1
      ? step1Sections
      : step === 2
        ? step2Sections
        : step3Sections

  const titles = {
    1: 'Personal Information',
    2: 'Education & Background',
    3: 'Resume & Final Details',
  }

  const labels = {
    1: 'Continue to Education',
    2: 'Continue to Resume',
    3: 'Submit Application',
  }

  const handleStepSubmit = async (values) => {
    if (step < 3) {
      setStep(step + 1)

      setTimeout(() => {
        applicationRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 80)

      return
    }

    await onSubmit(values)
  }

  return (
    <motion.section
      ref={applicationRef}
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 40,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        scroll-mt-24
        px-6
        pb-32
        lg:px-10
      "
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Eyebrow>Application</Eyebrow>

          <h2
            className="
              mt-4
              font-display
              text-3xl
              font-bold
              text-[var(--fg)]
              lg:text-5xl
            "
          >
            Apply for {selectedJob?.title || 'a position'}
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[var(--fg)]/55
              leading-7
            "
          >
            Complete your application and take the next
            step toward joining DesFlyer.
          </p>
        </div>

        <div
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-signal/30
            bg-[var(--card)]
            shadow-[0_30px_100px_-40px_rgba(46,111,255,0.3)]
          "
        >
          {selectedJob && (
            <div
              className="
                flex
                flex-col
                gap-4
                border-b
                border-signal/20
                bg-signal/[0.04]
                p-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <div
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-signal
                  "
                >
                  Applying For
                </div>

                <h3
                  className="
                    mt-2
                    font-display
                    text-xl
                    font-bold
                    text-[var(--fg)]
                  "
                >
                  {selectedJob.title}
                </h3>

                <div
                  className="
                    mt-2
                    flex
                    flex-wrap
                    gap-4
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-[var(--fg)]/40
                  "
                >
                  <span className="flex items-center gap-2">
                    <FiBriefcase
                      size={12}
                      className="text-signal"
                    />
                    {selectedJob.department}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiMapPin
                      size={12}
                      className="text-signal"
                    />
                    {selectedJob.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiClock
                      size={12}
                      className="text-signal"
                    />
                    {selectedJob.employmentType}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  self-start
                  rounded-full
                  border
                  border-[var(--border)]
                  px-4
                  py-2
                  text-xs
                  text-[var(--fg)]/50
                  transition
                  hover:border-signal/40
                  hover:text-signal
                  sm:self-center
                "
              >
                Change role
              </button>
            </div>
          )}

          <div className="grid lg:grid-cols-[280px_1fr]">
            <div
              className="
                relative
                border-b
                border-[var(--border)]
                bg-gradient-to-br
                from-signal/10
                to-transparent
                p-6
                lg:border-b-0
                lg:border-r
                lg:p-8
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-signal/30
                  bg-signal
                  text-white
                  shadow-[0_10px_35px_rgba(46,111,255,0.3)]
                "
              >
                <FiStar size={21} />
              </div>

              <div className="mt-7">
                <div
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-signal
                  "
                >
                  DESFLYER / CAREERS
                </div>

                <h3
                  className="
                    mt-3
                    font-display
                    text-2xl
                    font-bold
                    leading-tight
                    text-[var(--fg)]
                  "
                >
                  Your next
                  <span className="block text-signal">
                    chapter starts here.
                  </span>
                </h3>
              </div>

              <div className="mt-8 space-y-2">
                {applicationSteps.map((item, index) => {
                  const Icon = item.icon
                  const active = step === index + 1
                  const completed = step > index + 1

                  return (
                    <button
                      type="button"
                      key={item.number}
                      onClick={() => {
                        if (completed) {
                          setStep(index + 1)
                        }
                      }}
                      className={`
                        relative
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        p-3
                        text-left
                        transition-all
                        duration-300
                        ${active
                          ? 'border-signal/30 bg-signal/10'
                          : 'border-transparent'
                        }
                      `}
                    >
                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          ${active
                            ? 'border-signal bg-signal text-white'
                            : completed
                              ? 'border-signal/30 bg-signal/10 text-signal'
                              : 'border-[var(--border)] text-[var(--fg)]/30'
                          }
                        `}
                      >
                        {completed ? (
                          <FiCheckCircle size={16} />
                        ) : (
                          <Icon size={16} />
                        )}
                      </span>

                      <span>
                        <span
                          className={`
                            block
                            text-xs
                            font-semibold
                            ${active
                              ? 'text-signal'
                              : 'text-[var(--fg)]'
                            }
                          `}
                        >
                          {item.number} / {item.title}
                        </span>

                        <span
                          className="
                            mt-0.5
                            block
                            text-[10px]
                            text-[var(--fg)]/35
                          "
                        >
                          {item.description}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              <div
                className="
                  mt-8
                  hidden
                  rounded-2xl
                  border
                  border-signal/10
                  bg-[var(--bg)]/30
                  p-4
                  lg:block
                "
              >
                <FiZap
                  size={17}
                  className="text-signal"
                />

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-[var(--fg)]/40
                  "
                >
                  Great products are built by people who
                  care about the details.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  border-b
                  border-[var(--border)]
                  pb-7
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-signal
                    "
                  >
                    Step {String(step).padStart(2, '0')}
                  </span>

                  <h3
                    className="
                      mt-2
                      font-display
                      text-2xl
                      font-semibold
                      text-[var(--fg)]
                    "
                  >
                    {titles[step]}
                  </h3>
                </div>

                <div className="w-full sm:w-36">
                  <div
                    className="
                      flex
                      justify-between
                      font-mono
                      text-[9px]
                      uppercase
                      text-[var(--fg)]/30
                    "
                  >
                    <span>Progress</span>

                    <span className="text-signal">
                      {Math.round((step / 3) * 100)}%
                    </span>
                  </div>

                  <div
                    className="
                      mt-2
                      h-1
                      overflow-hidden
                      rounded-full
                      bg-[var(--border)]
                    "
                  >
                    <motion.div
                      animate={{
                        width: `${(step / 3) * 100}%`,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-signal
                      "
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      [&_input]:border
                      [&_input]:border-signal/30
                      [&_input]:bg-[var(--bg)]
                      [&_input]:outline-none
                      [&_input]:transition-all
                      [&_input]:duration-300
                      [&_input]:focus:border-signal
                      [&_input]:focus:ring-2
                      [&_input]:focus:ring-signal/10

                      [&_textarea]:border
                      [&_textarea]:border-signal/30
                      [&_textarea]:bg-[var(--bg)]
                      [&_textarea]:outline-none
                      [&_textarea]:transition-all
                      [&_textarea]:duration-300
                      [&_textarea]:focus:border-signal
                      [&_textarea]:focus:ring-2
                      [&_textarea]:focus:ring-signal/10

                      [&_select]:border
                      [&_select]:border-signal/30
                      [&_select]:bg-[var(--bg)]
                      [&_select]:outline-none
                      [&_select]:transition-all
                      [&_select]:duration-300
                      [&_select]:focus:border-signal
                      [&_select]:focus:ring-2
                      [&_select]:focus:ring-signal/10

                      [&_input[type=file]]:border
                      [&_input[type=file]]:border-signal/30
                      [&_input[type=file]]:border-dashed
                      [&_input[type=file]]:bg-[var(--bg)]
                      [&_input[type=file]]:cursor-pointer
                      [&_input[type=file]]:focus:border-signal

                      [&_label]:text-[var(--fg)]/70
                    "
                  >
                    <DynamicForm
                      sections={currentSections}
                      submitLabel={labels[step]}
                      onSubmit={handleStepSubmit}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[var(--border)]
                  pt-5
                "
              >
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-wider
                    text-[var(--fg)]/25
                  "
                >
                  DESFLYER
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    text-[var(--fg)]/35
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  Secure application
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

/* ============================================================
   MAIN PAGE
============================================================ */

export default function JobsPage() {
  const allOpenings = useJobOpenings()

  const jobs = allOpenings.filter(
    (opening) => opening.status === 'Open'
  )

  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplication, setShowApplication] = useState(false)
  const [step, setStep] = useState(1)

  const applicationRef = useRef(null)

  const handleApply = (job = null) => {
    if (job) {
      setSelectedJob(job)
    }

    setStep(1)
    setShowApplication(true)

    setTimeout(() => {
      applicationRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  const handleSubmit = async (values) => {
    await api.submitApplication({
      type: 'job',
      jobId: selectedJob?.id,
      jobTitle: selectedJob?.title,
      ...values,
      resumeFileName: values.resume?.name,
    })
  }

  return (
    <>
      <Seo
        title="Careers | DesFlyer"
        description="Explore career opportunities at DesFlyer and join our team building modern software, AI products and digital experiences."
      />

      {/* =====================================================
          HERO WITH JOB.PNG BACKGROUND
      ===================================================== */}

      {/* =====================================================
    HERO WITH SHARP JOB.PNG BACKGROUND
===================================================== */}

      <section
        className="
    relative
    isolate
    flex
    min-h-[620px]
    items-center
    overflow-hidden
    px-6
    py-28
    lg:min-h-[700px]
    lg:px-10
    lg:py-32
  "
      >
        {/* =================================================
      ORIGINAL HERO IMAGE
      NO BLUR / NO FILTER
  ================================================= */}

        <img
          src="/images/portfolio/job.png"
          alt="DesFlyer careers"
          className="
      absolute
      inset-0
      -z-20
      h-full
      w-full
      object-cover
      object-center
    "
        />

        {/* =================================================
      VERY LIGHT DARK OVERLAY
      Keeps text readable without hiding the image
  ================================================= */}

        <div
          className="
      pointer-events-none
      absolute
      inset-0
      -z-10
      bg-black/20
    "
        />

        {/* =================================================
      LEFT TEXT READABILITY
      Only darkens the LEFT side
  ================================================= */}

        <div
          className="
      pointer-events-none
      absolute
      inset-y-0
      left-0
      -z-10
      w-[65%]
      bg-gradient-to-r
      from-black/65
      via-black/30
      to-transparent
    "
        />

        {/* =================================================
      BOTTOM FADE
  ================================================= */}

        <div
          className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      -z-10
      h-32
      bg-gradient-to-t
      from-[var(--bg)]
      via-[var(--bg)]/30
      to-transparent
    "
        />

        {/* =================================================
      CONTENT
  ================================================= */}

        <div className="relative z-10 mx-auto w-full max-w-shell  -mt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <Eyebrow>Careers</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{
              delay: 0.1,
            }}
            className="
        mt-5
        max-w-5xl
        xl:text-[80px]
        font-display
        text-[clamp(3rem,8vw,7rem)]
        font-bold
        leading-[0.88]
        tracking-[-0.04em]
        text-white
      "
          >
            Build the

            <span className="block text-signal">
              future with us.
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{
              delay: 0.2,
            }}
            className="
        mt-10
      
        gap-8
        lg:flex-row
        lg:items-end
        lg:justify-between
      "
          >
            <p
              className="
          max-w-2xl
          text-base
          leading-8
          text-white/75
          lg:text-lg
        "
            >
              Join a passionate team creating modern software,
              AI products and digital experiences used by
              businesses around the world.
            </p>
            <div className='flex space-x-8'>
              <div
                className="
          flex
          mt-10
          w-fit
          items-center
          gap-3
          rounded-full
          border
          border-signal/40
          bg-black/20
          px-5
          py-3
          font-mono
          text-xs
          text-signal
        "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-signal
              opacity-60
            "
                  />

                  <span
                    className="
              relative
              inline-flex
              h-2
              w-2
              rounded-full
              bg-signal
            "
                  />
                </span>

                {jobs.length} OPEN ROLE
                {jobs.length !== 1 ? 'S' : ''}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById('open-tracks')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                      })
                  }}
                  className="
                    group
                    flex
                    items-center  
                    gap-3
                    rounded-xl
                    bg-[#1976ff]
                    px-5
                    py-3
                    
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_12px_35px_rgba(25,118,255,0.4)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:bg-[#2884ff]
                  "
                >
                  Explore Jobs

                  <FiArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          JOBS
      ===================================================== */}

      <section className="px-6 pb-28 pt-20 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-shell">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            className="
              mb-12
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <Eyebrow>Open Positions</Eyebrow>

              <h2
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-bold
                  text-[var(--fg)]
                  lg:text-5xl
                "
              >
                Find your next opportunity.
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  leading-7
                  text-[var(--fg)]/55
                "
              >
                Explore roles where your skills, ideas and
                creativity can make a real impact.
              </p>
            </div>

            <div
              className="
                hidden
                items-center
                gap-2
                font-mono
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-[var(--fg)]/30
                lg:flex
              "
            >
              Scroll to explore

              <FiArrowRight
                size={13}
                className="text-signal"
              />
            </div>
          </motion.div>

          {jobs.length === 0 ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="
                rounded-[30px]
                border
                border-dashed
                border-[var(--border)]
                bg-[var(--card)]/40
                px-6
                py-20
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-signal/25
                  bg-signal/10
                  text-signal
                "
              >
                <FiClock size={27} />
              </div>

              <h3
                className="
                  mt-6
                  font-display
                  text-2xl
                  font-semibold
                  text-[var(--fg)]
                "
              >
                No Open Roles
              </h3>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-md
                  leading-7
                  text-[var(--fg)]/50
                "
              >
                We are not hiring at the moment, but keep
                checking back for future opportunities.
              </p>
            </motion.div>
          ) : (
            <div
              className="
                grid
                gap-6
                lg:grid-cols-2
              "
            >
              {jobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index}
                  active={selectedJob?.id === job.id}
                  onApply={handleApply}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          APPLICATION
      ===================================================== */}

      <AnimatePresence>
        {showApplication && (
          <ApplicationSection
            step={step}
            setStep={setStep}
            applicationRef={applicationRef}
            selectedJob={selectedJob}
            onClose={() => {
              setShowApplication(false)
              setSelectedJob(null)
              setStep(1)
            }}
            onSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      {/* <BenefitsGrid
        benefits={jobBenefits}
        title="Why Work at DesFlyer"
      /> */}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div
          className="
            relative
            mx-auto
            max-w-shell
            overflow-hidden
            rounded-[32px]
            border
            border-signal/20
            bg-signal/[0.06]
            px-7
            py-14
            text-center
            sm:px-12
            lg:py-20
          "
        >
          <CTABand />
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <FAQ
        items={jobFaqs}
        eyebrow="Careers FAQ"
        title="Questions About Working Here"
      />
    </>
  )
}