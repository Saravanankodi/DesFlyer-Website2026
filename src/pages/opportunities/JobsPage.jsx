import { useEffect, useRef, useState } from 'react'
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
import FAQ from '../../components/FAQ'

import { jobFormSections } from '../../data/jobForm'
import { submitJobApplication } from '../../lib/jobApplication'
import { useJobOpenings } from '../../store/openingsStore'

/* ============================================================
   RESPONSIVE / DEVICE HELPERS
============================================================ */

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsTouch(
        window.matchMedia('(hover: none), (pointer: coarse)').matches
      )
    }

    checkDevice()

    window.addEventListener('resize', checkDevice)

    return () => {
      window.removeEventListener('resize', checkDevice)
    }
  }, [])

  return isTouch
}

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

function JobCard({
  job,
  index,
  active,
  onApply,
}) {
  const cardRef = useRef(null)

  const isTouchDevice = useIsTouchDevice()

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  })

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  })

  const handleMouseMove = (event) => {
    if (isTouchDevice) return
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY =
      ((x - centerX) / centerX) * 5

    const rotateX =
      ((centerY - y) / centerY) * 5

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
        amount: 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
      }}
      className="h-full w-full"
    >
      <motion.div
        animate={{
          rotateX: isTouchDevice ? 0 : rotation.x,
          rotateY: isTouchDevice ? 0 : rotation.y,
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
          group relative flex h-full min-h-[340px]
          flex-col overflow-hidden rounded-[24px]
          border p-5 sm:rounded-[28px] sm:p-6
          lg:min-h-[360px] lg:rounded-[30px] lg:p-8
          transition-colors duration-500
          ${
            active
              ? 'border-signal/50 bg-[var(--card)]'
              : 'border-[var(--border)] bg-[var(--card)]/70'
          }
        `}
      >
        {/* CURSOR GLOW */}

        {!isTouchDevice && (
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
              pointer-events-none absolute
              h-40 w-40 -translate-x-1/2
              -translate-y-1/2 rounded-full
              bg-signal/10 blur-[60px]
              sm:h-48 sm:w-48
              lg:h-56 lg:w-56 lg:blur-[70px]
            "
          />
        )}

        {/* GRID */}

        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)]
            bg-[size:28px_28px]
            opacity-[0.035]
            sm:bg-[size:32px_32px]
            sm:opacity-[0.045]
          "
        />

        {/* NUMBER */}

        <div
          className="
            absolute right-4 top-4
            flex h-9 w-9 items-center justify-center
            rounded-lg border border-signal/20
            bg-signal/5 font-mono text-[10px]
            text-signal
            sm:right-5 sm:top-5
            sm:h-10 sm:w-10
            lg:right-6 lg:top-6
            lg:h-11 lg:w-11
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
            relative flex h-12 w-12
            items-center justify-center
            rounded-xl border border-signal/25
            bg-signal/10 text-signal
            sm:h-14 sm:w-14
            sm:rounded-2xl
          "
        >
          <FiLayers
            size={20}
            className="sm:h-[22px] sm:w-[22px]"
          />

          <span
            className="
              absolute -inset-1
              rounded-xl border border-signal/10
              sm:rounded-2xl
            "
          />
        </motion.div>

        {/* CONTENT */}

        <div className="relative z-10 mt-6 sm:mt-7 lg:mt-8">
          <div
            className="
              flex flex-wrap items-center
              gap-x-3 gap-y-2
              font-mono text-[9px]
              uppercase tracking-[0.12em]
              text-[var(--fg)]/40
              sm:text-[10px]
              sm:tracking-[0.15em]
            "
          >
            <span className="flex items-center gap-1.5">
              <FiBriefcase
                size={11}
                className="text-signal sm:h-3 sm:w-3"
              />

              <span className="max-w-[130px] truncate sm:max-w-none">
                {job.department}
              </span>
            </span>

            <span className="flex items-center gap-1.5">
              <FiMapPin
                size={11}
                className="text-signal sm:h-3 sm:w-3"
              />

              <span className="max-w-[130px] truncate sm:max-w-none">
                {job.location}
              </span>
            </span>
          </div>

          <h3
            className="
              mt-4 max-w-lg
              font-display text-xl
              font-bold leading-tight
              text-[var(--fg)]
              transition-colors duration-300
              group-hover:text-signal
              sm:mt-5 sm:text-2xl
              lg:text-3xl
            "
          >
            {job.title}
          </h3>

          <p
            className="
              mt-3 max-w-xl
              text-sm leading-6
              text-[var(--fg)]/55
              sm:mt-4 sm:leading-7
            "
          >
            {job.description}
          </p>
        </div>

        {/* BOTTOM */}

        <div className="relative z-10 mt-auto pt-6 sm:pt-8">
          <div
            className="
              mb-5 h-px w-full
              bg-gradient-to-r
              from-signal/30
              via-[var(--border)]
              to-transparent
              sm:mb-6
            "
          />

          <div
            className="
              flex flex-col gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <div
                className="
                  flex items-center gap-2
                  font-mono text-[8px]
                  uppercase tracking-[0.15em]
                  text-[var(--fg)]/30
                  sm:text-[9px]
                "
              >
                <FiClock size={11} />
                Employment
              </div>

              <div
                className="
                  mt-1 text-sm
                  font-medium
                  text-[var(--fg)]/70
                "
              >
                {job.employmentType}
              </div>
            </div>

            {/* APPLY */}

            <button
              type="button"
              onClick={() => onApply(job)}
              className="
                group/button
                inline-flex w-full
                items-center justify-center
                gap-2.5 rounded-full
                bg-signal px-5 py-3
                text-sm font-semibold
                text-white
                shadow-[0_12px_35px_rgba(46,111,255,0.25)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_18px_45px_rgba(46,111,255,0.35)]
                sm:w-auto
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
            absolute bottom-0
            left-5 right-5
            h-[2px]
            origin-left
            bg-signal
            sm:left-6 sm:right-6
            lg:left-8 lg:right-8
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
   APPLICATION SECTION
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
        scroll-mt-20
        px-4 pb-20
        sm:px-6 sm:pb-24
        lg:scroll-mt-24
        lg:px-10 lg:pb-32
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* HEADING */}

        <div
          className="
            mb-8 text-center
            sm:mb-10
            lg:mb-12
          "
        >
          <Eyebrow>Application</Eyebrow>

          <h2
            className="
              mt-3 font-display
              text-2xl font-bold
              text-[var(--fg)]
              sm:text-3xl
              lg:mt-4 lg:text-5xl
            "
          >
            Apply for {selectedJob?.title || 'a position'}
          </h2>

          <p
            className="
              mx-auto mt-3
              max-w-xl
              text-sm leading-6
              text-[var(--fg)]/55
              sm:mt-4 sm:text-base
              sm:leading-7
            "
          >
            Complete your application and take the next
            step toward joining DesFlyer.
          </p>
        </div>

        {/* APPLICATION CARD */}

        <div
          className="
            overflow-hidden
            rounded-[24px]
            border border-signal/30
            bg-[var(--card)]
            shadow-[0_30px_100px_-40px_rgba(46,111,255,0.3)]
            sm:rounded-[28px]
            lg:rounded-[32px]
          "
        >
          {/* SELECTED JOB */}

          {selectedJob && (
            <div
              className="
                flex flex-col gap-4
                border-b border-signal/20
                bg-signal/[0.04]
                p-5
                sm:p-6
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div className="min-w-0">
                <div
                  className="
                    font-mono text-[8px]
                    uppercase tracking-[0.2em]
                    text-signal
                    sm:text-[9px]
                  "
                >
                  Applying For
                </div>

                <h3
                  className="
                    mt-2
                    break-words
                    font-display text-lg
                    font-bold
                    text-[var(--fg)]
                    sm:text-xl
                  "
                >
                  {selectedJob.title}
                </h3>

                <div
                  className="
                    mt-2 flex
                    flex-wrap gap-x-4
                    gap-y-2
                    font-mono text-[9px]
                    uppercase tracking-wider
                    text-[var(--fg)]/40
                    sm:text-[10px]
                  "
                >
                  <span className="flex items-center gap-2">
                    <FiBriefcase
                      size={11}
                      className="text-signal"
                    />
                    {selectedJob.department}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiMapPin
                      size={11}
                      className="text-signal"
                    />
                    {selectedJob.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiClock
                      size={11}
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
                  border border-[var(--border)]
                  px-4 py-2
                  text-xs
                  text-[var(--fg)]/50
                  transition
                  hover:border-signal/40
                  hover:text-signal
                  lg:self-center
                "
              >
                Change role
              </button>
            </div>
          )}

          {/* APPLICATION GRID */}

          <div
            className="
              grid
              lg:grid-cols-[280px_1fr]
            "
          >
            {/* LEFT STEPS */}

            <div
              className="
                relative
                border-b border-[var(--border)]
                bg-gradient-to-br
                from-signal/10
                to-transparent
                p-5
                sm:p-6
                lg:border-b-0
                lg:border-r
                lg:p-8
              "
            >
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-signal/30
                  bg-signal
                  text-white
                  shadow-[0_10px_35px_rgba(46,111,255,0.3)]
                  sm:h-12 sm:w-12
                  sm:rounded-2xl
                "
              >
                <FiStar size={20} />
              </div>

              <div className="mt-6 sm:mt-7">
                <div
                  className="
                    font-mono text-[8px]
                    uppercase tracking-[0.2em]
                    text-signal
                    sm:text-[9px]
                  "
                >
                  DESFLYER / CAREERS
                </div>

                <h3
                  className="
                    mt-3
                    font-display text-xl
                    font-bold leading-tight
                    text-[var(--fg)]
                    sm:text-2xl
                  "
                >
                  Your next

                  <span className="block text-signal">
                    chapter starts here.
                  </span>
                </h3>
              </div>

              {/* MOBILE/TABLET STEPS */}

              <div
                className="
                  mt-7
                  flex gap-2
                  overflow-x-auto
                  pb-1
                  lg:mt-8
                  lg:block
                  lg:space-y-2
                  lg:overflow-visible
                "
              >
                {applicationSteps.map((item, index) => {
                  const Icon = item.icon

                  const active =
                    step === index + 1

                  const completed =
                    step > index + 1

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
                        min-w-[175px]
                        shrink-0
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        p-3
                        text-left
                        transition-all
                        duration-300
                        lg:w-full
                        lg:min-w-0
                        ${
                          active
                            ? 'border-signal/30 bg-signal/10'
                            : 'border-transparent'
                        }
                      `}
                    >
                      <span
                        className={`
                          flex h-9 w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          sm:h-10 sm:w-10
                          ${
                            active
                              ? 'border-signal bg-signal text-white'
                              : completed
                                ? 'border-signal/30 bg-signal/10 text-signal'
                                : 'border-[var(--border)] text-[var(--fg)]/30'
                          }
                        `}
                      >
                        {completed ? (
                          <FiCheckCircle size={15} />
                        ) : (
                          <Icon size={15} />
                        )}
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`
                            block whitespace-nowrap
                            text-[11px]
                            font-semibold
                            sm:text-xs
                            ${
                              active
                                ? 'text-signal'
                                : 'text-[var(--fg)]'
                            }
                          `}
                        >
                          {item.number} / {item.title}
                        </span>

                        <span
                          className="
                            mt-0.5 block
                            whitespace-nowrap
                            text-[9px]
                            text-[var(--fg)]/35
                            sm:text-[10px]
                          "
                        >
                          {item.description}
                        </span>
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* INFO BOX */}

              <div
                className="
                  mt-7 hidden
                  rounded-2xl
                  border border-signal/10
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
                    text-xs leading-6
                    text-[var(--fg)]/40
                  "
                >
                  Great products are built by people who
                  care about the details.
                </p>
              </div>
            </div>

            {/* FORM AREA */}

            <div
              className="
                min-w-0
                p-5
                sm:p-7
                md:p-8
                lg:p-10
              "
            >
              {/* STEP HEADER */}

              <div
                className="
                  flex flex-col gap-5
                  border-b border-[var(--border)]
                  pb-6
                  sm:pb-7
                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >
                <div>
                  <span
                    className="
                      font-mono text-[8px]
                      uppercase tracking-[0.2em]
                      text-signal
                      sm:text-[9px]
                    "
                  >
                    Step {String(step).padStart(2, '0')}
                  </span>

                  <h3
                    className="
                      mt-2
                      font-display
                      text-xl font-semibold
                      text-[var(--fg)]
                      sm:text-2xl
                    "
                  >
                    {titles[step]}
                  </h3>
                </div>

                {/* PROGRESS */}

                <div className="w-full md:w-36">
                  <div
                    className="
                      flex justify-between
                      font-mono text-[8px]
                      uppercase
                      text-[var(--fg)]/30
                      sm:text-[9px]
                    "
                  >
                    <span>Progress</span>

                    <span className="text-signal">
                      {Math.round((step / 3) * 100)}%
                    </span>
                  </div>

                  <div
                    className="
                      mt-2 h-1
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

              {/* FORM */}

              <div className="mt-7 sm:mt-8">
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
                      min-w-0
                      [&_input]:w-full
                      [&_input]:border
                      [&_input]:border-signal/30
                      [&_input]:bg-[var(--bg)]
                      [&_input]:outline-none
                      [&_input]:transition-all
                      [&_input]:duration-300
                      [&_input]:focus:border-signal
                      [&_input]:focus:ring-2
                      [&_input]:focus:ring-signal/10

                      [&_textarea]:w-full
                      [&_textarea]:border
                      [&_textarea]:border-signal/30
                      [&_textarea]:bg-[var(--bg)]
                      [&_textarea]:outline-none
                      [&_textarea]:transition-all
                      [&_textarea]:duration-300
                      [&_textarea]:focus:border-signal
                      [&_textarea]:focus:ring-2
                      [&_textarea]:focus:ring-signal/10

                      [&_select]:w-full
                      [&_select]:border
                      [&_select]:border-signal/30
                      [&_select]:bg-[var(--bg)]
                      [&_select]:outline-none
                      [&_select]:transition-all
                      [&_select]:duration-300
                      [&_select]:focus:border-signal
                      [&_select]:focus:ring-2
                      [&_select]:focus:ring-signal/10

                      [&_input[type=file]]:cursor-pointer
                      [&_input[type=file]]:border
                      [&_input[type=file]]:border-dashed
                      [&_input[type=file]]:border-signal/30
                      [&_input[type=file]]:bg-[var(--bg)]
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

              {/* FOOTER */}

              <div
                className="
                  mt-6
                  flex flex-col
                  gap-3
                  border-t border-[var(--border)]
                  pt-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:gap-0
                "
              >
                <span
                  className="
                    font-mono text-[8px]
                    uppercase tracking-wider
                    text-[var(--fg)]/25
                    sm:text-[9px]
                  "
                >
                  DESFLYER
                </span>

                <span
                  className="
                    flex items-center gap-2
                    text-[9px]
                    text-[var(--fg)]/35
                    sm:text-[10px]
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5
                      rounded-full
                      bg-signal
                    "
                  />

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

  const [selectedJob, setSelectedJob] =
    useState(null)

  const [showApplication, setShowApplication] =
    useState(false)

  const [step, setStep] = useState(1)

  const applicationRef = useRef(null)

  /* ==========================================================
     APPLY
  ========================================================== */

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

  /* ==========================================================
     SUBMIT
  ========================================================== */

    const handleSubmit = async (values) => {
    try {
      const applicationData = {
        ...values,
        jobId: selectedJob?.id || '',
        jobTitle: selectedJob?.title || '',
      }

      console.log('Submitting job application:', applicationData)

      const docId = await submitJobApplication(applicationData)

      console.log('Job application saved successfully:', docId)

      setShowApplication(false)
      setSelectedJob(null)
      setStep(1)

      alert('Your application has been submitted successfully!')
    } catch (error) {
      console.error('Firestore job application error:', error)

      alert(
        error?.message ||
          'Something went wrong while submitting your application.'
      )
    }
  } 

  /* ==========================================================
     SCROLL TO JOBS
  ========================================================== */

  const scrollToJobs = () => {
    document
      .getElementById('open-tracks')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <>
      <Seo
        title="Careers | DesFlyer"
        description="Explore career opportunities at DesFlyer and join our team building modern software, AI products and digital experiences."
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative isolate
          flex min-h-[620px]
          items-center
          overflow-hidden
          px-4 py-24
          sm:min-h-[660px]
          sm:px-6 sm:py-28
          md:min-h-[680px]
          lg:min-h-[700px]
          lg:px-10 lg:py-32
          xl:min-h-[760px]
        "
      >
        {/* HERO IMAGE */}

        <img
          src="/images/portfolio/jobs.png"
          alt="DesFlyer careers"
          className="
            absolute inset-0
            -z-20
            h-full w-full
            object-cover
            object-center
            sm:object-center
          "
        />

        {/* OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            -z-10
            bg-black/30
            sm:bg-black/25
          "
        />

        {/* LEFT READABILITY */}

        <div
          className="
            pointer-events-none
            absolute inset-y-0 left-0
            -z-10
            w-full
            bg-gradient-to-r
            from-black/75
            via-black/45
            to-black/10
            sm:w-[85%]
            lg:w-[65%]
          "
        />

        {/* BOTTOM FADE */}

        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            -z-10 h-24
            bg-gradient-to-t
            from-[var(--bg)]
            via-[var(--bg)]/40
            to-transparent
            sm:h-32
          "
        />

        {/* CONTENT */}

        <div
          className="
            relative z-10
            mx-auto
            w-full max-w-shell
            -mt-4
            sm:-mt-6
            lg:-mt-10
          "
        >
          <div
            className="
              grid items-center
              gap-8
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-12
            "
          >
            {/* LEFT */}

            <div
              className="
                relative
                max-w-3xl
              "
            >
              {/* LABEL */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="
                  mb-6
                  flex items-center gap-3
                  sm:mb-8 sm:gap-4
                "
              >
                <div
                  className="
                    flex items-center gap-2
                    rounded-full
                    border border-white/15
                    bg-black/20
                    px-3 py-2
                    backdrop-blur-md
                    sm:px-4
                  "
                >
                  <span
                    className="
                      relative flex h-2 w-2
                    "
                  >
                    <span
                      className="
                        absolute inset-0
                        animate-ping
                        rounded-full
                        bg-signal
                        opacity-60
                      "
                    />

                    <span
                      className="
                        relative h-2 w-2
                        rounded-full
                        bg-signal
                      "
                    />
                  </span>

                  <span
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-white/60
                      sm:text-[9px]
                      sm:tracking-[0.22em]
                    "
                  >
                    DESFLYER / CAREERS
                  </span>
                </div>
              </motion.div>

              {/* HEADING */}

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 0.1,
                }}
                className="
                  max-w-5xl
                  font-display
                  text-[clamp(3.2rem,12vw,7rem)]
                  font-bold
                  leading-[0.88]
                  tracking-[-0.05em]
                  text-white
                  sm:text-[clamp(4rem,9vw,7rem)]
                  lg:text-[clamp(4rem,7vw,7rem)]
                  xl:text-[75px]
                "
              >
                Start where

                <span className="block text-signal">
                  your future
                </span>

                <span className="mt-2 block text-white/90">
                  begins.
                </span>
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 0.2,
                }}
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/70
                  sm:mt-8
                  sm:text-base
                  sm:leading-8
                  lg:text-lg
                "
              >
                Join a passionate team creating modern
                software, AI products and digital
                experiences used by businesses around
                the world.
              </motion.p>

              {/* ACTIONS */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 0.3,
                }}
                className="
                  mt-7
                  flex flex-col
                  items-stretch
                  gap-3
                  sm:mt-9
                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                  sm:gap-4
                "
              >
                {/* OPEN ROLES */}

                <div
                  className="
                    flex
                    items-center gap-3
                    rounded-xl
                    border border-signal/40
                    bg-black/25
                    px-4 py-3
                    backdrop-blur-md
                    sm:px-5 sm:py-4
                  "
                >
                  <span
                    className="
                      relative flex
                      h-2 w-2
                    "
                  >
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full w-full
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
                        h-2 w-2
                        rounded-xl
                        bg-signal
                      "
                    />
                  </span>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-white/70
                      sm:text-[10px]
                      sm:tracking-[0.15em]
                    "
                  >
                    {jobs.length} OPEN ROLE
                    {jobs.length !== 1 ? 'S' : ''}
                  </span>
                </div>

                {/* CTA */}

                <button
                  type="button"
                  onClick={scrollToJobs}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#1976ff]
                    px-6 py-3.5
                    text-xs
                    font-semibold
                    text-white
                    shadow-[0_12px_35px_rgba(25,118,255,0.4)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:scale-[1.02]
                    hover:bg-[#2884ff]
                    sm:w-auto
                  "
                >
                  Explore Jobs

                  <FiArrowRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </motion.div>

              {/* CAREER DATA */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 0.4,
                }}
                className="
                  mt-9
                  grid
                  max-w-2xl
                  grid-cols-3
                  border-y
                  border-white/10
                  sm:mt-12
                "
              >
                {/* STAT 1 */}

                <div
                  className="
                    border-r
                    border-white/10
                    py-4 pr-3
                    sm:py-5 sm:pr-5
                  "
                >
                  <div
                    className="
                      font-display
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    {jobs.length}
                  </div>

                  <div
                    className="
                      mt-1
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.12em]
                      text-white/35
                      sm:text-[8px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Open Roles
                  </div>
                </div>

                {/* STAT 2 */}

                <div
                  className="
                    border-r
                    border-white/10
                    px-3 py-4
                    sm:px-5 sm:py-5
                  "
                >
                  <div
                    className="
                      font-display
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    360°
                  </div>

                  <div
                    className="
                      mt-1
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.12em]
                      text-white/35
                      sm:text-[8px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Learning
                  </div>
                </div>

                {/* STAT 3 */}

                <div
                  className="
                    py-4 pl-3
                    sm:py-5 sm:pl-5
                  "
                >
                  <div
                    className="
                      font-display
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    01
                  </div>

                  <div
                    className="
                      mt-1
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.12em]
                      text-white/35
                      sm:text-[8px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Next Chapter
                  </div>
                </div>
              </motion.div>

              {/* CAREER SIGNAL */}

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
                  delay: 0.65,
                  duration: 0.6,
                }}
                className="
                  mt-6
                  flex items-center gap-3
                  sm:mt-7 sm:gap-4
                "
              >
                <div
                  className="
                    relative
                    h-8 w-px
                    shrink-0
                    overflow-hidden
                    bg-white/10
                  "
                >
                  <motion.span
                    animate={{
                      y: ['-100%', '400%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="
                      absolute left-0
                      top-0
                      h-1/2 w-full
                      bg-signal
                    "
                  />
                </div>

                <div className="min-w-0">
                  <div
                    className="
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.16em]
                      text-signal
                      sm:text-[8px]
                      sm:tracking-[0.2em]
                    "
                  >
                    BUILD / LEARN / CREATE
                  </div>

                  <div
                    className="
                      mt-1
                      text-[10px]
                      leading-5
                      text-white/35
                      sm:text-xs
                    "
                  >
                    Your ideas have room to become real
                    products.
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SPACE */}

            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* =====================================================
          JOBS
      ===================================================== */}

      <section
        id="open-tracks"
        className="
          px-4
          pb-20
          pt-14
          sm:px-6
          sm:pb-24
          sm:pt-20
          lg:px-10
          lg:pb-28
          lg:pt-24
        "
      >
        <div
          className="
            mx-auto
            mt-0
            w-full
            max-w-shell
            sm:mt-5
          "
        >
          {/* SECTION HEADER */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              mb-9
              flex flex-col
              gap-5
              lg:mb-12
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-3xl">
              <Eyebrow>
                Open Positions
              </Eyebrow>

              <h2
                className="
                  mt-3
                  font-display
                  text-2xl
                  font-bold
                  text-[var(--fg)]
                  sm:mt-4
                  sm:text-3xl
                  lg:text-5xl
                "
              >
                Find your next opportunity.
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-[var(--fg)]/55
                  sm:mt-4
                  sm:text-base
                  sm:leading-7
                "
              >
                Explore roles where your skills, ideas
                and creativity can make a real impact.
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

          {/* EMPTY */}

          {jobs.length === 0 ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="
                rounded-[24px]
                border border-dashed
                border-[var(--border)]
                bg-[var(--card)]/40
                px-5 py-16
                text-center
                sm:rounded-[30px]
                sm:px-6 sm:py-20
              "
            >
              <div
                className="
                  mx-auto
                  flex h-14 w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border border-signal/25
                  bg-signal/10
                  text-signal
                  sm:h-16 sm:w-16
                "
              >
                <FiClock
                  size={24}
                  className="sm:h-[27px] sm:w-[27px]"
                />
              </div>

              <h3
                className="
                  mt-5
                  font-display
                  text-xl
                  font-semibold
                  text-[var(--fg)]
                  sm:mt-6 sm:text-2xl
                "
              >
                No Open Roles
              </h3>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-md
                  text-sm
                  leading-6
                  text-[var(--fg)]/50
                  sm:leading-7
                "
              >
                We are not hiring at the moment, but keep
                checking back for future opportunities.
              </p>
            </motion.div>
          ) : (
            /* JOB GRID */

            <div
              className="
                grid
                grid-cols-1
                gap-5
                sm:gap-6
                lg:grid-cols-2
              "
            >
              {jobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index}
                  active={
                    selectedJob?.id === job.id
                  }
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
          FINAL CTA
      ===================================================== */}

      <section
        className="
          px-4
          py-16
          sm:px-6
          sm:py-20
          lg:px-10
          lg:py-32
        "
      >
        <CTABand />
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <FAQ />
    </>
  )
}