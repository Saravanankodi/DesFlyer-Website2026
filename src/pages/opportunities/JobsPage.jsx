import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import {
  FiArrowRight,
  FiArrowUpRight,
  FiArrowLeft,
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
  FiMail,
  FiPhone,
  FiCalendar,
  FiUpload,
  FiX,
  FiCode,
} from 'react-icons/fi'

import CTABand from '../../components/sections/CTABand'
import Seo from '../../lib/Seo'
import Eyebrow from '../../components/ui/Eyebrow'
import FAQ from '../../components/FAQ'

import { api } from '../../lib/api'
import { useJobOpenings } from '../../store/openingsStore'

/* ============================================================
   RESPONSIVE / DEVICE HELPERS
============================================================ */

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsTouch(
        window.matchMedia(
          '(hover: none), (pointer: coarse)'
        ).matches
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
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
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

    const rect =
      cardRef.current.getBoundingClientRect()

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
          rotateX: isTouchDevice
            ? 0
            : rotation.x,

          rotateY: isTouchDevice
            ? 0
            : rotation.y,
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
          flex
          h-full
          min-h-[330px]
          flex-col
          overflow-hidden
          rounded-[22px]
          border
          p-5
          transition-colors
          duration-500

          sm:min-h-[340px]
          sm:rounded-[26px]
          sm:p-6

          lg:min-h-[360px]
          lg:rounded-[30px]
          lg:p-8

          ${active
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
              pointer-events-none
              absolute
              h-40
              w-40
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-signal/10
              blur-[60px]

              sm:h-48
              sm:w-48

              lg:h-56
              lg:w-56
              lg:blur-[70px]
            "
          />
        )}

        {/* GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
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
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-signal/20
            bg-signal/5
            font-mono
            text-[10px]
            text-signal

            sm:right-5
            sm:top-5
            sm:h-10
            sm:w-10

            lg:right-6
            lg:top-6
            lg:h-11
            lg:w-11
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
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-signal/25
            bg-signal/10
            text-signal

            sm:h-14
            sm:w-14
            sm:rounded-2xl
          "
        >
          <FiLayers
            size={20}
            className="sm:h-[22px] sm:w-[22px]"
          />

          <span
            className="
              absolute
              -inset-1
              rounded-xl
              border
              border-signal/10

              sm:rounded-2xl
            "
          />
        </motion.div>

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            mt-6

            sm:mt-7

            lg:mt-8
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.12em]
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
              mt-4
              max-w-lg
              font-display
              text-xl
              font-bold
              leading-tight
              text-[var(--fg)]
              transition-colors
              duration-300
              group-hover:text-signal

              sm:mt-5
              sm:text-2xl

              lg:text-3xl
            "
          >
            {job.title}
          </h3>

          <p
            className="
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-[var(--fg)]/55

              sm:mt-4
              sm:leading-7
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
            pt-6

            sm:pt-8
          "
        >
          <div
            className="
              mb-5
              h-px
              w-full
              bg-gradient-to-r
              from-signal/30
              via-[var(--border)]
              to-transparent

              sm:mb-6
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
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-[var(--fg)]/30

                  sm:text-[9px]
                "
              >
                <FiClock size={11} />

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

            {/* APPLY */}

            <button
              type="button"
              onClick={() => onApply(job)}
              className="
                group/button
                inline-flex
                w-full
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
            absolute
            bottom-0
            left-5
            right-5
            h-[2px]
            origin-left
            bg-signal

            sm:left-6
            sm:right-6

            lg:left-8
            lg:right-8
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
   APPLICATION FORM INPUTS
============================================================ */

function JobField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  icon: Icon,
}) {
  return (
    <div className="group min-w-0">
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-[9px]
          font-mono
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[var(--fg)]/55
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-signal">*</span>
        )}
      </label>

      <div className="relative min-w-0">
        {Icon && (
          <Icon
            size={15}
            className="
              pointer-events-none
              absolute
              left-3.5
              top-1/2
              z-10
              -translate-y-1/2
              text-signal/50
              transition-colors
              duration-300
              group-focus-within:text-signal
              sm:left-4
            "
          />
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value || ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={
            name === 'fullName'
              ? 'name'
              : name === 'email'
                ? 'email'
                : name === 'mobile'
                  ? 'tel'
                  : 'off'
          }
          className={`
            box-border
            h-11
            w-full
            min-w-0
            max-w-full
            rounded-xl
            border
            border-signal/40
            bg-transparent
            ${Icon
              ? 'pl-10 sm:pl-11'
              : 'pl-3.5 sm:pl-4'
            }
            pr-3.5
            text-[13px]
            text-[var(--fg)]
            outline-none
            placeholder:text-[var(--fg)]/25
            transition-all
            duration-300
            hover:border-signal/60
            focus:border-signal
            focus:ring-2
            focus:ring-signal/10
            sm:pr-4
            sm:text-sm
          `}
        />
      </div>
    </div>
  )
}

function JobSelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-[9px]
          font-mono
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[var(--fg)]/55
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-signal">*</span>
        )}
      </label>

      <div className="relative min-w-0">
        <select
          id={name}
          name={name}
          value={value || ''}
          onChange={onChange}
          required={required}
          className="
            box-border
            h-12
            w-full
            min-w-0
            max-w-full
            appearance-none
            rounded-xl
            border
            border-signal/40
            bg-[var(--bg)]
            px-3.5
            pr-10
            text-[13px]
            text-[var(--fg)]
            outline-none
            transition-all
            duration-300
            hover:border-signal/60
            focus:border-signal
            focus:ring-2
            focus:ring-signal/10
            sm:px-4
            sm:text-sm
          "
        >
          <option value="" disabled>
            Select {label}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <span
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-signal/70
          "
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>
    </div>
  )
}

function JobTextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-[9px]
          font-mono
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[var(--fg)]/55
        "
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className="
          box-border
          min-h-[120px]
          w-full
          min-w-0
          max-w-full
          resize-none
          rounded-xl
          border
          border-signal/40
          bg-transparent
          px-3.5
          py-3
          text-[13px]
          leading-6
          text-[var(--fg)]
          outline-none
          placeholder:text-[var(--fg)]/25
          transition-all
          duration-300
          hover:border-signal/60
          focus:border-signal
          focus:ring-2
          focus:ring-signal/10
          sm:text-sm
        "
      />
    </div>
  )
}

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
  formData,
  setFormData,
}) {
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resumeFile, setResumeFile] = useState(
    formData?.resume || null
  )

  const fileInputRef = useRef(null)
  const formAreaRef = useRef(null)

  const progress = Math.round(
    (step / applicationSteps.length) * 100
  )

  const updateForm = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrorMessage('')
  }

  const goToStep = (nextStep) => {
    setStep(nextStep)
    setErrorMessage('')

    setTimeout(() => {
      if (window.innerWidth < 768) {
        formAreaRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      } else {
        applicationRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  const validateStep = () => {
    if (step === 1) {
      if (!String(formData?.fullName || '').trim()) {
        setErrorMessage('Please enter your full name.')
        return false
      }

      if (!String(formData?.mobile || '').trim()) {
        setErrorMessage('Please enter your mobile number.')
        return false
      }

      if (
        !/^[+]?[\d\s()-]{10,15}$/.test(
          String(formData?.mobile || '').trim()
        )
      ) {
        setErrorMessage('Please enter a valid mobile number.')
        return false
      }

      if (!String(formData?.email || '').trim()) {
        setErrorMessage('Please enter your email address.')
        return false
      }

      if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          String(formData?.email || '').trim()
        )
      ) {
        setErrorMessage('Please enter a valid email address.')
        return false
      }

      if (!formData?.dateOfBirth) {
        setErrorMessage('Please select your date of birth.')
        return false
      }

      if (!formData?.gender) {
        setErrorMessage('Please select your gender.')
        return false
      }
    }

    if (step === 2) {
      if (!String(formData?.state || '').trim()) {
        setErrorMessage('Please enter your state.')
        return false
      }

      if (!String(formData?.city || '').trim()) {
        setErrorMessage('Please enter your city.')
        return false
      }

      if (!String(formData?.fullAddress || '').trim()) {
        setErrorMessage('Please enter your full address.')
        return false
      }

      if (!String(formData?.pinCode || '').trim()) {
        setErrorMessage('Please enter your pin code.')
        return false
      }

      if (
        !/^\d{6}$/.test(
          String(formData?.pinCode || '').trim()
        )
      ) {
        setErrorMessage('Please enter a valid 6-digit pin code.')
        return false
      }
    }

    if (step === 3) {
      if (!String(formData?.college || '').trim()) {
        setErrorMessage(
          'Please enter your college or university.'
        )
        return false
      }

      if (!String(formData?.courseName || '').trim()) {
        setErrorMessage('Please enter your course name.')
        return false
      }

      if (!formData?.educationLevel) {
        setErrorMessage('Please select your education level.')
        return false
      }

      if (!formData?.positionAppliedFor) {
        setErrorMessage(
          'Please select the position you are applying for.'
        )
        return false
      }

      if (!formData?.yearsExperience) {
        setErrorMessage(
          'Please select your years of experience.'
        )
        return false
      }

      if (!String(formData?.skills || '').trim()) {
        setErrorMessage('Please enter your skills.')
        return false
      }

      if (!formData?.noticePeriod) {
        setErrorMessage('Please select your notice period.')
        return false
      }

      if (!resumeFile) {
        setErrorMessage('Please upload your resume.')
        return false
      }
    }

    setErrorMessage('')
    return true
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    const extension = file.name
      .split('.')
      .pop()
      ?.toLowerCase()

    if (
      !allowedTypes.includes(file.type) &&
      !['pdf', 'doc', 'docx'].includes(extension)
    ) {
      setErrorMessage(
        'Please upload a PDF, DOC or DOCX file.'
      )

      event.target.value = ''
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage(
        'Resume must be smaller than 10MB.'
      )

      event.target.value = ''
      return
    }

    setResumeFile(file)

    setFormData((previous) => ({
      ...previous,
      resume: file,
    }))

    setErrorMessage('')
  }

  const removeResume = () => {
    setResumeFile(null)

    setFormData((previous) => {
      const next = { ...previous }
      delete next.resume
      return next
    })

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleNext = () => {
    if (!validateStep()) return

    if (step < 3) {
      goToStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      goToStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    if (!validateStep()) return

    try {
      setIsSubmitting(true)

      await onSubmit({
        ...formData,
        resume: resumeFile,
      })
    } catch (error) {
      console.error(error)

      setErrorMessage(
        error?.message ||
        'Unable to submit your application right now. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    /* ========================================================
       STEP 01
    ======================================================== */

    if (step === 1) {
      return (
        <motion.div
          key="job-step-one"
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
            duration: 0.25,
          }}
        >
          <div className="mb-6 sm:mb-8">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal">
              Step 01
            </div>

            <div className="mt-2 flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold leading-tight text-[var(--fg)] sm:text-2xl">
                Personal Information
              </h3>

              <div className="hidden w-28 shrink-0 sm:block">
                <div className="mb-1 flex justify-between text-[8px] font-mono uppercase text-[var(--fg)]/35">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-[var(--border)]">
                  <motion.div
                    animate={{
                      width: `${progress}%`,
                    }}
                    className="h-full rounded-full bg-signal"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-6 sm:pt-7">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
                1
              </span>

              <span className="text-sm font-semibold text-[var(--fg)]">
                Personal Details
              </span>
            </div>

            <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
              <JobField
                label="Full Name"
                name="fullName"
                value={formData?.fullName}
                onChange={updateForm}
                placeholder="Your full name"
                required
                icon={FiUser}
              />

              <JobField
                label="Mobile Number"
                name="mobile"
                value={formData?.mobile}
                onChange={updateForm}
                placeholder="+91 XXXXX XXXXX"
                type="tel"
                required
                icon={FiPhone}
              />

              <JobField
                label="Email Address"
                name="email"
                value={formData?.email}
                onChange={updateForm}
                placeholder="you@example.com"
                type="email"
                required
                icon={FiMail}
              />

              <JobField
                label="Date of Birth"
                name="dateOfBirth"
                value={formData?.dateOfBirth}
                onChange={updateForm}
                type="date"
                required
                icon={FiCalendar}
              />
            </div>

            <div className="mt-5 min-w-0 sm:mt-6">
              <label className="mb-3 block text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/55">
                Gender
                <span className="ml-1 text-signal">*</span>
              </label>

              <div className="flex min-w-0 flex-wrap gap-2">
                {[
                  'Male',
                  'Female',
                  'Other',
                  'Prefer not to say',
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => {
                      setFormData((previous) => ({
                        ...previous,
                        gender: item,
                      }))

                      setErrorMessage('')
                    }}
                    className={`
                      min-h-10
                      max-w-full
                      rounded-full
                      border
                      px-3
                      py-2
                      text-[11px]
                      transition-all
                      duration-200
                      sm:px-4
                      sm:text-xs
                      ${formData?.gender === item
                        ? 'border-signal bg-signal text-white shadow-[0_8px_25px_rgba(46,111,255,0.2)]'
                        : 'border-signal/40 text-[var(--fg)]/65 hover:border-signal/70 hover:text-[var(--fg)]'
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )
    }

    /* ========================================================
       STEP 02
    ======================================================== */

    if (step === 2) {
      return (
        <motion.div
          key="job-step-two"
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
            duration: 0.25,
          }}
        >
          <div className="mb-6 sm:mb-8">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal">
              Step 02
            </div>

            <div className="mt-2 flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold leading-tight text-[var(--fg)] sm:text-2xl">
                Education & Background
              </h3>

              <span className="shrink-0 text-[8px] font-mono text-signal">
                {progress}%
              </span>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-6 sm:pt-7">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
                1
              </span>

              <span className="text-sm font-semibold text-[var(--fg)]">
                Address Details
              </span>
            </div>

            <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
              <JobField
                label="State"
                name="state"
                value={formData?.state}
                onChange={updateForm}
                placeholder="Your state"
                required
                icon={FiMapPin}
              />

              <JobField
                label="City"
                name="city"
                value={formData?.city}
                onChange={updateForm}
                placeholder="Your city"
                required
                icon={FiMapPin}
              />

              <JobField
                label="Full Address"
                name="fullAddress"
                value={formData?.fullAddress}
                onChange={updateForm}
                placeholder="House / Street / Area"
                required
                icon={FiMapPin}
              />

              <JobField
                label="Pin Code"
                name="pinCode"
                value={formData?.pinCode}
                onChange={updateForm}
                placeholder="6-digit pin code"
                type="text"
                inputMode="numeric"
                required
                icon={FiMapPin}
              />
            </div>
          </div>
        </motion.div>
      )
    }

    /* ========================================================
       STEP 03
    ======================================================== */

    return (
      <motion.div
        key="job-step-three"
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
          duration: 0.25,
        }}
      >
        <div className="mb-6 sm:mb-8">
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal">
            Step 03
          </div>

          <div className="mt-2 flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold leading-tight text-[var(--fg)] sm:text-2xl">
              Resume & Final Details
            </h3>

            <span className="shrink-0 text-[8px] font-mono text-signal">
              {progress}%
            </span>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 sm:pt-7">
          {/* EDUCATIONAL DETAILS */}

          <div className="mb-8">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
                1
              </span>

              <span className="text-sm font-semibold text-[var(--fg)]">
                Educational Details
              </span>
            </div>

            <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
              <JobField
                label="College / University"
                name="college"
                value={formData?.college}
                onChange={updateForm}
                placeholder="Your institution"
                required
                icon={FiBookOpen}
              />

              <JobField
                label="Course Name"
                name="courseName"
                value={formData?.courseName}
                onChange={updateForm}
                placeholder="B.Tech Computer Science"
                required
                icon={FiBookOpen}
              />

              <JobSelectField
                label="Education Level"
                name="educationLevel"
                value={formData?.educationLevel}
                onChange={updateForm}
                required
                options={[
                  'Diploma',
                  'Undergraduate',
                  'Postgraduate',
                  'Other',
                ]}
              />
            </div>
          </div>

          {/* JOB DETAILS */}

          <div className="border-t border-[var(--border)] pt-7">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
                2
              </span>

              <span className="text-sm font-semibold text-[var(--fg)]">
                Job Details
              </span>
            </div>

            <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
              <JobSelectField
                label="Position Applied For"
                name="positionAppliedFor"
                value={formData?.positionAppliedFor}
                onChange={updateForm}
                required
                options={[
                  'Frontend Developer',
                  'Backend Developer',
                  'UI/UX Designer',
                  'Other',
                ]}
              />

              <JobSelectField
                label="Years of Experience"
                name="yearsExperience"
                value={formData?.yearsExperience}
                onChange={updateForm}
                required
                options={[
                  '0 (Fresher)',
                  '1-2 years',
                  '3-5 years',
                  '5+ years',
                ]}
              />

              <JobField
                label="Skills"
                name="skills"
                value={formData?.skills}
                onChange={updateForm}
                placeholder="React, Python, UI/UX..."
                required
                icon={FiZap}
              />

              <JobField
                label="Current Company"
                name="currentCompany"
                value={formData?.currentCompany}
                onChange={updateForm}
                placeholder="Your current company"
                icon={FiBriefcase}
              />

              <JobField
                label="Expected Salary"
                name="expectedSalary"
                value={formData?.expectedSalary}
                onChange={updateForm}
                placeholder="Expected salary"
                icon={FiStar}
              />

              <JobField
                label="Portfolio URL"
                name="portfolio"
                value={formData?.portfolio}
                onChange={updateForm}
                placeholder="https://..."
                icon={FiCode}
              />

              <JobField
                label="LinkedIn Profile"
                name="linkedin"
                value={formData?.linkedin}
                onChange={updateForm}
                placeholder="https://linkedin.com/in/..."
                icon={FiUser}
              />

              <JobField
                label="GitHub Profile"
                name="github"
                value={formData?.github}
                onChange={updateForm}
                placeholder="https://github.com/..."
                icon={FiCode}
              />

              <JobSelectField
                label="Notice Period"
                name="noticePeriod"
                value={formData?.noticePeriod}
                onChange={updateForm}
                required
                options={[
                  'Immediate',
                  '15 days',
                  '30 days',
                  '60 days',
                  '90 days',
                ]}
              />
            </div>
          </div>

          {/* RESUME */}

          <div className="mt-8 border-t border-[var(--border)] pt-7">
            <label className="mb-3 block text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/55">
              Resume Upload
              <span className="ml-1 text-signal">*</span>
            </label>

            {!resumeFile ? (
              <button
                type="button"
                onClick={() =>
                  fileInputRef.current?.click()
                }
                className="
                  flex
                  min-h-[125px]
                  w-full
                  min-w-0
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-dashed
                  border-signal/40
                  px-4
                  text-center
                  transition-all
                  duration-300
                  hover:border-signal/70
                  hover:bg-signal/[0.03]
                  sm:min-h-[130px]
                  sm:px-6
                "
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal sm:h-12 sm:w-12">
                  <FiUpload size={19} />
                </span>

                <span className="mt-3 text-[13px] font-medium text-[var(--fg)]/70 sm:text-sm">
                  Upload resume
                </span>

                <span className="mt-1 text-[9px] text-[var(--fg)]/35 sm:text-[10px]">
                  PDF, DOC, DOCX · Maximum 10MB
                </span>
              </button>
            ) : (
              <div className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-signal/40 p-3 sm:gap-4 sm:p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal sm:h-11 sm:w-11">
                    <FiFileText size={18} />
                  </span>

                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-medium text-[var(--fg)] sm:text-sm">
                      {resumeFile.name}
                    </p>

                    <p className="mt-1 text-[9px] text-[var(--fg)]/35 sm:text-[10px]">
                      {(
                        resumeFile.size /
                        1024 /
                        1024
                      ).toFixed(2)}{' '}
                      MB
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={removeResume}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-signal/30
                    text-[var(--fg)]/45
                    transition
                    hover:border-red-400/40
                    hover:text-red-400
                  "
                  aria-label="Remove resume"
                >
                  <FiX size={15} />
                </button>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* COVER LETTER */}

          <div className="mt-5 min-w-0">
            <JobTextAreaField
              label="Cover Letter"
              name="coverLetter"
              value={formData?.coverLetter}
              onChange={updateForm}
              placeholder="Tell us briefly about yourself, your interests and what you want to build..."
            />
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.section
      ref={applicationRef}
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 25,
      }}
      transition={{
        duration: 0.55,
      }}
      className="
        scroll-mt-14
        w-full
        max-w-full
        overflow-x-hidden
        px-2.5
        pb-10
        sm:scroll-mt-16
        sm:px-6
        sm:pb-16
        lg:scroll-mt-20
        lg:px-10
        lg:pb-20
      "
    >
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <div
          className="
            mb-4
            text-center
            sm:mb-8
            lg:mb-10
          "
        >
          <Eyebrow>Application</Eyebrow>

          <h2
            className="
              mt-2
              font-display
              text-xl
              font-bold
              leading-tight
              text-[var(--fg)]
              sm:mt-3
              sm:text-3xl
              lg:mt-4
              lg:text-5xl
            "
          >
            Apply for{' '}
            {selectedJob?.title || 'a position'}
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-xl
              text-[11px]
              leading-5
              text-[var(--fg)]/55
              sm:mt-4
              sm:text-base
              sm:leading-7
            "
          >
            Complete your application and take the next
            step toward joining DesFlyer.
          </p>
        </div>

        <div
          className="
            w-full
            max-w-full
            overflow-hidden
            rounded-[16px]
            border
            border-signal/30
            bg-[var(--card)]
            shadow-[0_18px_50px_-35px_rgba(46,111,255,0.3)]
            sm:rounded-[28px]
            sm:shadow-[0_25px_70px_-40px_rgba(46,111,255,0.3)]
            lg:rounded-[32px]
          "
        >
          {selectedJob && (
            <div
              className="
                flex
                min-w-0
                flex-col
                gap-2
                border-b
                border-signal/20
                bg-signal/[0.04]
                p-3
                sm:gap-3
                sm:p-6
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div className="min-w-0">
                <div
                  className="
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.2em]
                    text-signal
                    sm:text-[9px]
                  "
                >
                  Applying For
                </div>

                <h3
                  className="
                    mt-1
                    break-words
                    font-display
                    text-sm
                    font-bold
                    leading-tight
                    text-[var(--fg)]
                    sm:mt-2
                    sm:text-xl
                  "
                >
                  {selectedJob.title}
                </h3>

                <div
                  className="
                    mt-1.5
                    flex
                    flex-wrap
                    gap-x-2.5
                    gap-y-1
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-wider
                    text-[var(--fg)]/40
                    sm:mt-2
                    sm:gap-x-4
                    sm:text-[10px]
                  "
                >
                  <span className="flex min-w-0 items-center gap-1">
                    <FiBriefcase
                      size={9}
                      className="shrink-0 text-signal"
                    />

                    <span className="truncate">
                      {selectedJob.department}
                    </span>
                  </span>

                  <span className="flex min-w-0 items-center gap-1">
                    <FiMapPin
                      size={9}
                      className="shrink-0 text-signal"
                    />

                    <span className="truncate">
                      {selectedJob.location}
                    </span>
                  </span>

                  <span className="flex min-w-0 items-center gap-1">
                    <FiClock
                      size={9}
                      className="shrink-0 text-signal"
                    />

                    <span className="truncate">
                      {selectedJob.employmentType}
                    </span>
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
                  px-2.5
                  py-1.5
                  text-[9px]
                  text-[var(--fg)]/50
                  transition
                  hover:border-signal/40
                  hover:text-signal
                  sm:px-3.5
                  sm:py-2
                  sm:text-[11px]
                  lg:self-center
                "
              >
                Change role
              </button>
            </div>
          )}

          <div className="grid min-w-0 lg:grid-cols-[260px_1fr]">
            <div
              className="
                relative
                min-w-0
                border-b
                border-[var(--border)]
                bg-gradient-to-br
                from-signal/10
                to-transparent
                p-2.5
                sm:p-6
                lg:border-b-0
                lg:border-r
                lg:p-7
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
                  border
                  border-signal/30
                  bg-signal
                  text-white
                  shadow-[0_8px_24px_rgba(46,111,255,0.25)]
                  sm:h-12
                  sm:w-12
                  sm:rounded-2xl
                  sm:shadow-[0_10px_30px_rgba(46,111,255,0.3)]
                "
              >
                <FiStar
                  size={15}
                  className="sm:h-[19px] sm:w-[19px]"
                />
              </div>

              <div className="mt-5 sm:mt-7">
                <span
                  className="
                    text-[7px]
                    font-mono
                    uppercase
                    tracking-[0.2em]
                    text-signal
                    sm:text-[8px]
                  "
                >
                  DESFLYER / CAREERS
                </span>

                <h3
                  className="
                    mt-2
                    font-display
                    text-lg
                    font-bold
                    leading-tight
                    text-[var(--fg)]
                    sm:mt-3
                    sm:text-xl
                  "
                >
                  Your next chapter starts here.
                </h3>
              </div>

              <div
                className="
                  mt-2.5
                  grid
                  min-w-0
                  grid-cols-3
                  gap-1.5
                  sm:mt-5
                  sm:gap-2
                  lg:mt-7
                  lg:block
                  lg:space-y-2
                "
              >
                {applicationSteps.map(
                  (item, index) => {
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
                          if (
                            completed ||
                            index + 1 === step
                          ) {
                            goToStep(index + 1)
                          }
                        }}
                        className={`
                          relative
                          flex
                          w-full
                          min-w-0
                          items-center
                          justify-center
                          gap-1.5
                          rounded-xl
                          border
                          p-1.5
                          text-left
                          transition-all
                          duration-300
                          sm:gap-3
                          sm:rounded-2xl
                          sm:p-3
                          lg:justify-start
                          ${active
                            ? 'border-signal/30 bg-signal/10'
                            : 'border-transparent'
                          }
                        `}
                      >
                        <span
                          className={`
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            border
                            sm:h-9
                            sm:w-9
                            sm:rounded-xl
                            ${active
                              ? 'border-signal bg-signal text-white'
                              : completed
                                ? 'border-signal/30 bg-signal/10 text-signal'
                                : 'border-[var(--border)] text-[var(--fg)]/30'
                            }
                          `}
                        >
                          {completed ? (
                            <FiCheckCircle
                              size={12}
                              className="sm:h-[15px] sm:w-[15px]"
                            />
                          ) : (
                            <Icon
                              size={12}
                              className="sm:h-[15px] sm:w-[15px]"
                            />
                          )}
                        </span>

                        <span className="min-w-0 overflow-hidden">
                          <span
                            className={`
                              block
                              truncate
                              text-[8px]
                              font-semibold
                              sm:text-[11px]
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
                              hidden
                              truncate
                              text-[7px]
                              text-[var(--fg)]/35
                              sm:block
                              sm:text-[9px]
                            "
                          >
                            {item.description}
                          </span>
                        </span>
                      </button>
                    )
                  }
                )}
              </div>

              <div
                className="
                  mt-6
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

            <div
              ref={formAreaRef}
              className="
                min-w-0
                w-full
                max-w-full
                overflow-hidden
                p-4
                pb-8
                sm:p-7
                md:p-8
                lg:p-9
              "
            >
              {/* MOBILE PROGRESS */}

              <div className="mb-6 lg:hidden">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="
                      text-[8px]
                      font-mono
                      uppercase
                      tracking-[0.18em]
                      text-[var(--fg)]/35
                    "
                  >
                    Step {step} of {applicationSteps.length}
                  </span>

                  <span className="text-[8px] font-mono text-signal">
                    {progress}%
                  </span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-[var(--border)]">
                  <motion.div
                    animate={{
                      width: `${progress}%`,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="h-full rounded-full bg-signal"
                  />
                </div>
              </div>

              {errorMessage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mb-5
                    flex
                    min-w-0
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/5
                    px-3.5
                    py-3
                    text-[11px]
                    leading-5
                    text-red-400
                    sm:mb-6
                    sm:px-4
                    sm:text-xs
                  "
                >
                  <FiX
                    size={15}
                    className="mt-0.5 shrink-0"
                  />

                  <span className="min-w-0 break-words">
                    {errorMessage}
                  </span>
                </motion.div>
              )}

              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-2
                  border-t
                  border-[var(--border)]
                  pt-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:gap-4
                  sm:pt-7
                "
              >
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={step === 1}
                  className="
                    flex
                    min-h-11
                    w-full
                    shrink-0
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    border
                    border-signal/30
                    px-3
                    py-2.5
                    text-[11px]
                    text-[var(--fg)]/60
                    transition-all
                    hover:border-signal/60
                    disabled:cursor-not-allowed
                    disabled:opacity-20
                    sm:w-auto
                    sm:gap-2
                    sm:px-4
                    sm:py-3
                    sm:text-xs
                  "
                >
                  <FiArrowLeft size={14} />
                  <span>Back</span>
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="
                      flex
                      min-h-11
                      w-full
                      min-w-0
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-signal
                      px-4
                      py-3
                      text-[10px]
                      font-semibold
                      text-white
                      shadow-[0_10px_30px_rgba(46,111,255,0.2)]
                      transition-all
                      hover:scale-[1.01]
                      sm:w-auto
                      sm:px-5
                      sm:text-xs
                    "
                  >
                    <span>
                      Continue to{' '}
                      {applicationSteps[step].title}
                    </span>

                    <FiArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="
                      flex
                      min-h-11
                      w-full
                      min-w-0
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-signal
                      px-4
                      py-3
                      text-[10px]
                      font-semibold
                      text-white
                      shadow-[0_10px_30px_rgba(46,111,255,0.2)]
                      transition-all
                      hover:scale-[1.01]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      sm:w-auto
                      sm:px-5
                      sm:text-xs
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="
                            h-4
                            w-4
                            animate-spin
                            rounded-full
                            border-2
                            border-white/30
                            border-t-white
                          "
                        />

                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <FiArrowRight size={14} />
                      </>
                    )}
                  </button>
                )}
              </div>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-3
                  border-t
                  border-[var(--border)]
                  pt-4
                "
              >
                <span
                  className="
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-wider
                    text-[var(--fg)]/25
                    sm:text-[8px]
                  "
                >
                  DESFLYER
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[8px]
                    text-[var(--fg)]/35
                    sm:text-[9px]
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

  const [selectedJob, setSelectedJob] =
    useState(null)

  const [showApplication, setShowApplication] =
    useState(false)

  const [step, setStep] = useState(1)

  const [formData, setFormData] =
    useState({})

  const applicationRef = useRef(null)

  /* ==========================================================
     APPLY
  ========================================================== */

  const handleApply = (job = null) => {
    if (job) {
      setSelectedJob(job)
    }

    setFormData({})
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
     SUBMIT APPLICATION
  ========================================================== */

  const handleSubmit = async (values) => {
    try {
      const application = {
        type: 'job',

        jobId: selectedJob?.id,

        jobTitle: selectedJob?.title,

        ...values,

        resumeFileName:
          values.resume?.name,
      }

      console.log(
        'Submitting job application:',
        application
      )

      await api.submitApplication(
        application
      )

      setFormData({})
      setStep(1)
      setShowApplication(false)
      setSelectedJob(null)
    } catch (error) {
      console.error(
        'Application submission failed:',
        error
      )

      throw error
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

  /* ==========================================================
     CLOSE APPLICATION
  ========================================================== */

  const closeApplication = () => {
    setShowApplication(false)
    setSelectedJob(null)
    setStep(1)
    setFormData({})
  }

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Seo
        title="Careers | DesFlyer"
        description="Explore career opportunities at DesFlyer and join our team building modern software, AI products and digital experiences."
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          min-h-[620px]
          overflow-hidden
          bg-[#020712]
          px-4
          pb-10
          pt-20
          text-white

          sm:min-h-[700px]
          sm:px-6
          sm:pb-12
          sm:pt-24

          lg:min-h-[100svh]
          lg:px-10
          lg:pb-16
          lg:pt-24
        "
      >
        {/* BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          <img
            src="/images/portfolio/job.png"
            alt="DesFlyer careers"
            className="
              absolute
              inset-0
              h-full
              w-full
              scale-[1.02]
              object-cover
              object-center
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#020712]/90
              via-[#020712]/58
              to-[#020712]/20

              lg:from-[#020712]/86
              lg:via-[#020712]/42
              lg:to-transparent
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[#020712]/15

              lg:hidden
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-[#020712]
              via-[#020712]/65
              to-transparent

              sm:h-40
            "
          />

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-24
              bg-gradient-to-b
              from-[#020712]/70
              to-transparent

              sm:h-32
            "
          />
        </div>

        {/* HERO CONTENT */}

        <div
          className="
    relative
    z-10
    mx-auto
    mt-12
    flex
    min-h-0
    w-full
    max-w-[1400px]
    items-center
    justify-center

    sm:mt-20

    lg:mt-0
    lg:min-h-[calc(100svh-9rem)]
    lg:justify-start
  "
        >
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
            "
          >
            {/* CAREER RAIL */}

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

            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
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
                  h-px
                  w-8
                  bg-blue-400/70
                "
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-blue-300/65

                  sm:text-[9px]
                "
              >
                Career Opportunities
              </span>
            </motion.div>

            {/* HEADING */}

            <div className="relative mt-5">
              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[180px]
                  w-[340px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/[0.09]
                  blur-[80px]

                  sm:h-[240px]
                  sm:w-[520px]
                  sm:blur-[110px]

                  lg:left-0
                  lg:translate-x-0
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
                  ease: 'easeInOut',
                }}
              />

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.8,
                }}
                className="
                  relative
                  mx-auto
                  max-w-[760px]
                  font-display
                  text-4xl
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.055em]

                  sm:text-5xl

                  md:text-6xl

                  lg:mx-0
                  lg:text-[4.8rem]

                  xl:text-75px
                "
                style={{
                  fontFamily:
                    '"Chakra Petch", sans-serif',
                }}
              >
                Start where

                <br />

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
                      '0% 50%',
                      '100% 50%',
                      '0% 50%',
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize:
                      '200% 200%',
                  }}
                >
                  your future
                </motion.span>

                <br />

                <span className="text-white/90">
                  begins.
                </span>
              </motion.h1>

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

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
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
              Join a passionate team creating modern
              software, AI products and digital
              experiences used by businesses around
              the world.
            </motion.p>

            {/* CAREER TAGS */}

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
                'Real Projects',
                'Mentorship',
                'Technology',
                'Team Work',
                'Growth',
                'Innovation',
              ].map(
                (item, index) => (
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
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-blue-400/15
                      bg-[#06152a]
                      px-3
                      py-1.5
                      shadow-[0_5px_20px_rgba(0,0,0,0.2)]
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

            {/* CAREER COUNT */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              className="
                mt-5
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-slate-500

                sm:text-[9px]
              "
            >
              <span className="text-blue-400">
                {jobs.length}
              </span>{' '}
              open positions / build your future
            </motion.div>

            {/* CTA */}

            <motion.button
              type="button"
              onClick={scrollToJobs}
              whileHover={{
                scale: 1.03,
                x: 4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
              }}
              className="
                group
                relative
                mx-auto
                mt-6
                overflow-hidden
                rounded-xl
                border
                border-blue-500/40
                bg-[#071536]
                px-4
                py-3
                shadow-[0_15px_45px_rgba(0,0,0,0.35)]
                transition-all
                duration-500

                hover:border-blue-400
                hover:bg-[#0a1d46]
                hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]

                sm:px-6
                sm:py-3.5

                lg:mx-0
              "
            >
              <motion.span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-[-100%]
                  w-[60%]
                  skew-x-[-20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.10]
                  to-transparent
                "
                animate={{
                  left: [
                    '-100%',
                    '140%',
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
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-blue-400
                  shadow-[0_0_12px_rgba(59,130,246,0.8)]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
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
                    All {jobs.length} Jobs
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
                    border-blue-400/40
                    bg-blue-500/10
                    text-blue-300
                    transition-all
                    duration-300

                    group-hover:border-blue-400/70
                    group-hover:bg-blue-500/20
                    group-hover:text-blue-200
                    group-hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]
                  "
                >
                  <FiArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </span>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-blue-400
                  shadow-[0_0_14px_rgba(59,130,246,0.8)]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          JOBS
      ===================================================== */}

      <section
        id="open-tracks"
        className="
          px-4
          pb-12
          pt-8

          sm:px-6
          sm:pb-16
          sm:pt-12

          lg:px-10
          lg:pb-20
          lg:pt-16
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-shell
          "
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              mb-8
              flex
              flex-col
              gap-4

              lg:mb-10
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

          {jobs.length === 0 ? (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              className="
                rounded-[22px]
                border
                border-dashed
                border-[var(--border)]
                bg-[var(--card)]/40
                px-5
                py-14
                text-center

                sm:rounded-[30px]
                sm:px-6
                sm:py-18
              "
            >
              <div
                className="
                  mx-auto
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

                  sm:h-16
                  sm:w-16
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

                  sm:mt-6
                  sm:text-2xl
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
            <div
              className="
                grid
                grid-cols-1
                gap-5

                sm:gap-6

                lg:grid-cols-2
              "
            >
              {jobs.map(
                (job, index) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    index={index}
                    active={
                      selectedJob?.id ===
                      job.id
                    }
                    onApply={handleApply}
                  />
                )
              )}
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
            applicationRef={
              applicationRef
            }
            selectedJob={selectedJob}
            formData={formData}
            setFormData={setFormData}
            onClose={
              closeApplication
            }
            onSubmit={
              handleSubmit
            }
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          px-4
          py-10

          sm:px-6
          sm:py-14

          lg:px-10
          lg:py-20
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











