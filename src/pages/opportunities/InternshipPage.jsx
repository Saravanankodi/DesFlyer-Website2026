import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiUser,
  FiBookOpen,
  FiFileText,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiUpload,
  FiClock,
  FiUsers,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiZap,
  FiShield,
  FiX,
  FiTrendingUp,
} from 'react-icons/fi'

import Eyebrow from '../../components/ui/Eyebrow'
import FAQ from '../../components/FAQ'
import { internshipFaqs } from '../../data/opportunitiesContent'
import { api } from '../../lib/api'
import { useInternshipOpenings } from '../../store/openingsStore'
import CTABand from '../../components/sections/CTABand'

/* ============================================================
   STEP DATA
============================================================ */

const steps = [
  {
    id: 1,
    title: 'Personal',
    subtitle: 'Tell us about yourself',
    icon: FiUser,
  },
  {
    id: 2,
    title: 'Education',
    subtitle: 'Share your background',
    icon: FiBookOpen,
  },
  {
    id: 3,
    title: 'Resume',
    subtitle: 'Complete your application',
    icon: FiFileText,
  },
]

/* ============================================================
   INPUT COMPONENT
============================================================ */

function Field({
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
        className="mb-2 block text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/55"
      >
        {label}
        {required && <span className="ml-1 text-signal">*</span>}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={15}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-signal/50 transition-colors duration-300 group-focus-within:text-signal sm:left-4"
          />
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`h-11 w-full min-w-0 rounded-xl border border-signal/40 bg-transparent ${
            Icon ? 'pl-10 sm:pl-11' : 'pl-3.5 sm:pl-4'
          } pr-3.5 sm:pr-4 text-[13px] sm:text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg)]/25 transition-all duration-300 hover:border-signal/60 focus:border-signal focus:ring-2 focus:ring-signal/10`}
        />
      </div>
    </div>
  )
}

/* ============================================================
   SELECT
============================================================ */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-2 block text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/55"
      >
        {label}
        {required && <span className="ml-1 text-signal">*</span>}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-11 w-full min-w-0 rounded-xl border border-signal/40 bg-transparent px-3.5 sm:px-4 text-[13px] sm:text-sm text-[var(--fg)] outline-none transition-all duration-300 hover:border-signal/60 focus:border-signal focus:ring-2 focus:ring-signal/10"
      >
        <option
          value=""
          className="bg-[var(--card)] text-[var(--fg)]"
        >
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[var(--card)] text-[var(--fg)]"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

/* ============================================================
   TEXTAREA
============================================================ */

function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-2 block text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/55"
      >
        {label}
        {required && <span className="ml-1 text-signal">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="min-h-[120px] w-full resize-none rounded-xl border border-signal/40 bg-transparent px-3.5 py-3 text-[13px] sm:text-sm leading-6 text-[var(--fg)] outline-none placeholder:text-[var(--fg)]/25 transition-all duration-300 hover:border-signal/60 focus:border-signal focus:ring-2 focus:ring-signal/10 sm:min-h-0"
      />
    </div>
  )
}

/* ============================================================
   INTERNSHIP CARD
============================================================ */

function InternshipCard({ role, index, onApply }) {
  const icons = [FiCode, FiLayers, FiBriefcase]
  const CardIcon = icons[index % icons.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      className="group relative h-full w-full max-w-[520px]"
    >
      <div className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_25px_70px_-45px_rgba(46,111,255,0.5)] transition-all duration-300 sm:min-h-[410px] sm:rounded-[28px] sm:p-7 md:hover:-translate-y-2 md:hover:border-signal/30">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-signal/10 blur-[70px]" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-signal/25 bg-signal/10 text-signal sm:h-14 sm:w-14 sm:rounded-2xl">
              <CardIcon size={21} className="sm:h-[23px] sm:w-[23px]" />
            </div>

            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-signal/20 bg-signal/5 px-2.5 py-1.5 text-[8px] font-mono uppercase tracking-wider text-signal sm:gap-2 sm:px-3 sm:text-[9px]">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Open
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[8px] font-mono uppercase tracking-wider text-[var(--fg)]/40 sm:mt-7 sm:gap-x-4 sm:text-[9px]">
            <span className="flex items-center gap-1.5">
              <FiBriefcase size={11} className="shrink-0 text-signal" />
              <span className="truncate">
                {role.department || 'Technology'}
              </span>
            </span>

            <span className="flex items-center gap-1.5">
              <FiMapPin size={11} className="shrink-0 text-signal" />
              <span className="truncate">
                {role.location || 'Hybrid'}
              </span>
            </span>
          </div>

          <div className="mt-4 sm:mt-5">
            <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-signal sm:text-[9px]">
              Internship Track
            </span>

            <h3 className="mt-2 font-display text-xl font-bold leading-tight text-[var(--fg)] sm:mt-3 sm:text-2xl">
              {role.title}
            </h3>

            <p className="mt-3 text-[13px] leading-6 text-[var(--fg)]/55 sm:mt-4 sm:text-sm sm:leading-7">
              {role.description}
            </p>
          </div>

          <div className="mt-auto pt-6 sm:pt-7">
            <div className="mb-4 h-px bg-[var(--border)] sm:mb-5" />

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-[7px] font-mono uppercase tracking-wider text-[var(--fg)]/30 sm:gap-1.5 sm:text-[8px]">
                  <FiClock size={9} className="shrink-0 text-signal sm:h-[10px] sm:w-[10px]" />
                  <span className="truncate">Duration</span>
                </div>

                <p className="mt-1.5 truncate text-[10px] text-[var(--fg)]/65 sm:mt-2 sm:text-xs">
                  {role.duration || 'Flexible'}
                </p>
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1 text-[7px] font-mono uppercase tracking-wider text-[var(--fg)]/30 sm:gap-1.5 sm:text-[8px]">
                  <FiUsers size={9} className="shrink-0 text-signal sm:h-[10px] sm:w-[10px]" />
                  <span className="truncate">Openings</span>
                </div>

                <p className="mt-1.5 truncate text-[10px] text-[var(--fg)]/65 sm:mt-2 sm:text-xs">
                  {role.openings || 'Multiple'}
                </p>
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1 text-[7px] font-mono uppercase tracking-wider text-[var(--fg)]/30 sm:gap-1.5 sm:text-[8px]">
                  <FiZap size={9} className="shrink-0 text-signal sm:h-[10px] sm:w-[10px]" />
                  <span className="truncate">Mode</span>
                </div>

                <p className="mt-1.5 truncate text-[10px] text-[var(--fg)]/65 sm:mt-2 sm:text-xs">
                  {role.location || 'Hybrid'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onApply}
              className="mt-6 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-signal px-4 py-3 text-[11px] font-semibold text-white transition-all duration-300 active:scale-[0.98] sm:mt-7 sm:gap-3 sm:px-5 sm:py-3.5 sm:text-sm md:hover:scale-[1.02]"
            >
              Apply for Internship
              <FiArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

/* ============================================================
   HERO FLOATING STAT
============================================================ */

function HeroStat({
  value,
  label,
  icon: Icon,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 35,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        x: -6,
        scale: 1.025,
      }}
      className="group relative min-w-0 overflow-hidden rounded-xl border border-blue-400/45 bg-[#071536]/80 px-2.5 py-3 shadow-[0_0_30px_rgba(35,110,255,0.18)] backdrop-blur-xl sm:w-[145px] sm:px-4"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-transparent" />

      <div className="relative z-10 flex items-center justify-between gap-1.5 sm:gap-3">
        <div className="min-w-0">
          <div className="font-display text-xl font-bold leading-none text-white sm:text-2xl">
            {value}
          </div>

          <div className="mt-1.5 truncate text-[6.5px] font-mono uppercase tracking-[0.04em] text-blue-100/65 sm:mt-2 sm:text-[8px] sm:tracking-[0.08em]">
            {label}
          </div>
        </div>

        <Icon
          size={16}
          className="shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-110 sm:h-[19px] sm:w-[19px]"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(50,130,255,1)] sm:w-8" />
    </motion.div>
  )
}

/* ============================================================
   MAIN PAGE
============================================================ */

export default function InternshipPage() {
  const allOpenings = useInternshipOpenings()

  const listings = allOpenings.filter(
    (opening) => opening.status === 'Open'
  )

  const [currentStep, setCurrentStep] = useState(1)
  const [showApplication, setShowApplication] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [resumeFile, setResumeFile] = useState(null)

  /* ============================================================
     INTERNSHIP HIRING NOTIFICATION
  ============================================================ */

  const [showHiringPopup, setShowHiringPopup] = useState(false)
  const [notifyEmail, setNotifyEmail] = useState('')
  const [isNotifySubmitting, setIsNotifySubmitting] = useState(false)
  const [notifySubmitted, setNotifySubmitted] = useState(false)
  const [notifyError, setNotifyError] = useState('')

  const applicationRef = useRef(null)
  const fileInputRef = useRef(null)

  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    college: '',
    degree: '',
    department: '',
    graduationYear: '',
    experience: '',
    skills: '',
    portfolio: '',
    linkedin: '',
    coverLetter: '',
  })

  /* ============================================================
     AUTO OPEN HIRING NOTIFICATION POPUP
  ============================================================ */

  useEffect(() => {
    if (listings.length === 0) {
      const timer = setTimeout(() => {
        setShowHiringPopup(true)
      }, 900)

      return () => clearTimeout(timer)
    }
  }, [listings.length])

  /* ============================================================
     HIRING NOTIFICATION HANDLER
  ============================================================ */

  const handleNotifySubmit = async (event) => {
    event.preventDefault()

    const email = notifyEmail.trim()

    if (!email) {
      setNotifyError('Please enter your email address.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNotifyError('Please enter a valid email address.')
      return
    }

    try {
      setIsNotifySubmitting(true)
      setNotifyError('')

      await api.subscribeInternshipUpdates(email)

      setNotifySubmitted(true)
    } catch (error) {
      console.error(error)

      setNotifyError(
        error?.message ||
          'Unable to save your email right now. Please try again.'
      )
    } finally {
      setIsNotifySubmitting(false)
    }
  }

  /* ============================================================
     FORM HANDLERS
============================================================ */

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrorMessage('')
  }

  const handleApply = () => {
    setShowApplication(true)
    setCurrentStep(1)
    setSubmitted(false)
    setErrorMessage('')

    setTimeout(() => {
      applicationRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  const validateStep = () => {
    setErrorMessage('')

    if (currentStep === 1) {
      if (!form.fullName.trim()) {
        setErrorMessage('Please enter your full name.')
        return false
      }

      if (!form.mobile.trim()) {
        setErrorMessage('Please enter your mobile number.')
        return false
      }

      if (!form.email.trim()) {
        setErrorMessage('Please enter your email address.')
        return false
      }

      if (!form.dateOfBirth) {
        setErrorMessage('Please select your date of birth.')
        return false
      }

      if (!form.gender) {
        setErrorMessage('Please select your gender.')
        return false
      }
    }

    if (currentStep === 2) {
      if (!form.college.trim()) {
        setErrorMessage('Please enter your college or university.')
        return false
      }

      if (!form.degree.trim()) {
        setErrorMessage('Please enter your degree.')
        return false
      }

      if (!form.department.trim()) {
        setErrorMessage('Please enter your department.')
        return false
      }

      if (!form.graduationYear) {
        setErrorMessage('Please select your graduation year.')
        return false
      }
    }

    if (currentStep === 3) {
      if (!resumeFile) {
        setErrorMessage('Please upload your resume.')
        return false
      }

      if (!form.skills.trim()) {
        setErrorMessage('Please enter your skills.')
        return false
      }
    }

    return true
  }

  const handleNext = () => {
    if (!validateStep()) return

    if (currentStep < 3) {
      setCurrentStep((previous) => previous + 1)

      setTimeout(() => {
        applicationRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 100)
    }
  }

  const handlePrevious = () => {
    setErrorMessage('')

    if (currentStep > 1) {
      setCurrentStep((previous) => previous - 1)
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]

    if (!allowedTypes.includes(file.type)) {
      setErrorMessage('Please upload a PDF, DOC, or DOCX file.')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage('Resume must be smaller than 5MB.')
      return
    }

    setResumeFile(file)
    setErrorMessage('')
  }

  const removeResume = () => {
    setResumeFile(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async () => {
    if (!validateStep()) return

    try {
      setIsSubmitting(true)
      setErrorMessage('')

      await api.submitApplication({
        type: 'internship',
        ...form,
        resume: resumeFile,
        resumeFileName: resumeFile?.name || '',
      })

      setSubmitted(true)
    } catch (error) {
      console.error(error)

      setErrorMessage(
        error?.message ||
          'Something went wrong while submitting your application. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const progress = Math.round(
    (currentStep / steps.length) * 100
  )

  /* ============================================================
     APPLICATION STEP
============================================================ */

  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <motion.div
          key="step-one"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mb-6 sm:mb-8">
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-signal">
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
                    animate={{ width: `${progress}%` }}
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

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              <Field
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                required
                icon={FiUser}
              />

              <Field
                label="Mobile Number"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                icon={FiPhone}
              />

              <Field
                label="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                type="email"
                required
                icon={FiMail}
              />

              <Field
                label="Date of Birth"
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
                type="date"
                required
                icon={FiCalendar}
              />
            </div>

            <div className="mt-5 sm:mt-6">
              <label className="mb-3 block text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/55">
                Gender
                <span className="ml-1 text-signal">*</span>
              </label>

              <div className="flex flex-wrap gap-2">
                {[
                  'Male',
                  'Female',
                  'Other',
                  'Prefer not to say',
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() =>
                      setForm((previous) => ({
                        ...previous,
                        gender: item,
                      }))
                    }
                    className={`min-h-10 rounded-full border px-3 py-2 text-[11px] transition-all sm:px-4 sm:text-xs ${
                      form.gender === item
                        ? 'border-signal bg-signal text-white'
                        : 'border-signal/40 text-[var(--fg)]/65 hover:border-signal/70'
                    }`}
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

    if (currentStep === 2) {
      return (
        <motion.div
          key="step-two"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mb-6 sm:mb-8">
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-signal">
              Step 02
            </div>

            <div className="mt-2 flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold leading-tight text-[var(--fg)] sm:text-2xl">
                Education
              </h3>

              <span className="shrink-0 text-[8px] font-mono text-signal">
                {progress}%
              </span>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-6 sm:pt-7">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
                2
              </span>

              <span className="text-sm font-semibold text-[var(--fg)]">
                Academic Background
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              <Field
                label="College / University"
                name="college"
                value={form.college}
                onChange={handleChange}
                placeholder="Your institution"
                required
                icon={FiBookOpen}
              />

              <Field
                label="Degree"
                name="degree"
                value={form.degree}
                onChange={handleChange}
                placeholder="B.E / B.Tech / B.Sc..."
                required
              />

              <Field
                label="Department"
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="Computer Science..."
                required
                icon={FiLayers}
              />

              <SelectField
                label="Graduation Year"
                name="graduationYear"
                value={form.graduationYear}
                onChange={handleChange}
                required
                options={[
                  '2026',
                  '2027',
                  '2028',
                  '2029',
                  '2030',
                  'Other',
                ]}
              />

              <div className="sm:col-span-2">
                <SelectField
                  label="Previous Experience"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  options={[
                    'No previous experience',
                    'Less than 6 months',
                    '6 months - 1 year',
                    '1 - 2 years',
                    'More than 2 years',
                  ]}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )
    }

    return (
      <motion.div
        key="step-three"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.25 }}
      >
        <div className="mb-6 sm:mb-8">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-signal">
            Step 03
          </div>

          <div className="mt-2 flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold leading-tight text-[var(--fg)] sm:text-2xl">
              Resume & Application
            </h3>

            <span className="shrink-0 text-[8px] font-mono text-signal">
              {progress}%
            </span>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-6 sm:pt-7">
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
              3
            </span>

            <span className="text-sm font-semibold text-[var(--fg)]">
              Complete Your Application
            </span>
          </div>

          <label className="mb-3 block text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/55">
            Resume
            <span className="ml-1 text-signal">*</span>
          </label>

          {!resumeFile ? (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex min-h-[125px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-signal/40 px-4 text-center transition-all hover:border-signal/70 sm:min-h-[130px] sm:px-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-signal sm:h-12 sm:w-12">
                <FiUpload size={19} />
              </span>

              <span className="mt-3 text-[13px] font-medium text-[var(--fg)]/70 sm:text-sm">
                Upload your resume
              </span>

              <span className="mt-1 text-[9px] text-[var(--fg)]/35 sm:text-[10px]">
                PDF, DOC or DOCX · Maximum 5MB
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
                    {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={removeResume}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-signal/30 text-[var(--fg)]/45 hover:text-red-400"
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

          <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-6">
            <Field
              label="Skills"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="React, Python, UI/UX..."
              required
              icon={FiZap}
            />

            <Field
              label="Portfolio URL"
              name="portfolio"
              value={form.portfolio}
              onChange={handleChange}
              placeholder="https://..."
              icon={FiCode}
            />

            <div className="sm:col-span-2">
              <Field
                label="LinkedIn URL"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div className="sm:col-span-2">
              <TextAreaField
                label="Why do you want to join us?"
                name="coverLetter"
                value={form.coverLetter}
                onChange={handleChange}
                placeholder="Tell us briefly about yourself, your interests and what you want to build..."
              />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  /* ============================================================
     PAGE
============================================================ */

  return (
    <div className="w-full max-w-full overflow-x-hidden">

      {/* ========================================================
          HERO
      ======================================================== */}

<section
  className="
    relative
    min-h-[680px]
    overflow-hidden
    bg-[#020918]
    px-4
    pt-24
    sm:min-h-[700px]
    sm:px-6
    sm:pt-28
    md:px-8
    lg:min-h-[700px]
    lg:px-10
    lg:pt-28
  "
>
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 h-full w-full">
    <img
      src="/images/portfolio/intern.png"
      alt=""
      className="h-full w-full object-cover object-center"
    />
  </div>

  {/* RESPONSIVE DARK OVERLAY */}
  {/* 
  <div className="absolute inset-0 bg-[#020817]/25 sm:bg-[#020817]/20" />
  */}

  {/* LEFT GRADIENT */}
  {/*
  <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/85 via-[#020817]/60 to-[#020817]/25 sm:from-[#020817]/75 sm:via-[#020817]/50 sm:to-transparent" />
  */}

  {/* MOBILE BOTTOM GRADIENT */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      h-72
      bg-gradient-to-t
      from-[#020918]
      via-[#020918]/50
      to-transparent
      lg:hidden
    "
  />

  {/* HERO CONTENT */}
  <div className="relative z-20 mx-auto max-w-[1450px]">

    <div
      className="
        grid
        min-h-[500px]
        items-center
        lg:min-h-[560px]
        lg:grid-cols-[1fr_0.9fr]
      "
    >

      {/* LEFT */}
      <div className="relative z-30 max-w-[680px]">

        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="
            mb-6
            flex
            min-w-0
            items-center
            gap-3
            sm:mb-8
            sm:gap-4
          "
        >
          <div className="h-px w-7 shrink-0 bg-blue-400/50 sm:w-12" />

          <span
            className="
              truncate
              font-mono
              text-[7px]
              uppercase
              tracking-[0.13em]
              text-white/40
              sm:text-[9px]
              sm:tracking-[0.2em]
            "
          >
            Internship / Opportunity
          </span>

          <span
            className="
              ml-auto
              hidden
              shrink-0
              items-center
              gap-2
              font-mono
              text-[7px]
              uppercase
              tracking-wider
              text-blue-300/60
              xs:flex
              sm:text-[8px]
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
            System Online
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-white/30
              sm:text-[9px]
              sm:tracking-[0.25em]
            "
          >
            DESFLYER / CAREER PROGRAM
          </div>

          <h1
            className="
              mt-5
              font-display
              text-[42px]
              font-bold
              leading-[0.88]
              tracking-[-0.06em]
              text-white
              xs:text-[46px]
              sm:mt-8
              sm:text-[52px]
              md:text-[62px]
              lg:text-[clamp(4rem,6.5vw,6rem)]
              xl:mt-20
              xl:text-[75px]
            "
          >
            <span className="block">
              Where Your
            </span>

            <span className="mt-2 block leading-[0.95]">
              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-[#5d8cff]
                  to-[#0774f0]
                  bg-clip-text
                  text-transparent
                "
              >
                potential
              </span>

              <span className="text-white">
                {" "}becomes
              </span>
            </span>

            <span className="mt-2 block leading-[0.95]">
              <span
                className="
                  bg-gradient-to-r
                  from-[#6ea0ff]
                  via-[#295edb]
                  to-[#0774f0]
                  bg-clip-text
                  text-transparent
                "
              >
                experience.
              </span>
            </span>
          </h1>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-7 origin-left sm:mt-8"
        >
          <div className="flex items-center gap-2 sm:gap-3">

            <div className="h-px w-10 bg-blue-400 sm:w-20" />

            <div
              className="
                h-1.5
                w-1.5
                rotate-45
                border
                border-blue-400
              "
            />

            <div className="h-px max-w-[350px] flex-1 bg-white/10" />

          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.6,
          }}
          className="
            mt-5
            max-w-[490px]
            text-[12px]
            leading-6
            text-white/50
            sm:mt-6
            sm:text-[13px]
            sm:leading-7
            xl:text-[15px]
          "
        >
          Work alongside our team on real products,
          real client projects and real technical
          challenges while building experience that
          actually matters.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="
            mt-6
            flex
            flex-col
            items-start
            gap-3
            sm:mt-7
            sm:flex-row
            sm:items-center
            sm:gap-5
          "
        >
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("open-tracks")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }}
            className="
              group
              flex
              min-h-11
              w-full
              items-center
              justify-center
              gap-3
              rounded-lg
              bg-[#1976ff]
              px-4
              py-3
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-white
              shadow-[0_10px_35px_rgba(25,118,255,0.35)]
              transition-all
              duration-300
              sm:w-auto
              sm:gap-4
              sm:px-5
              sm:py-3.5
              sm:text-[11px]
              md:hover:scale-[1.03]
            "
          >
            Explore Internships

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-md
                bg-white/10
              "
            >
              <FiArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>
          </button>
        </motion.div>
      </div>

      {/* DESKTOP STATS */}
      <div className="relative hidden h-[570px] lg:block">

        <div
          className="
            absolute
            right-0
            top-[80px]
            z-30
            flex
            flex-col
            gap-3
            xl:right-[-20px]
          "
        >
          {[
            {
              value: listings.length,
              label: "Open Tracks",
              icon: FiUsers,
              delay: 0.3,
            },
            {
              value: "01",
              label: "Real Projects",
              icon: FiCode,
              delay: 0.4,
            },
            {
              value: "360°",
              label: "Hands-on Learning",
              icon: FiTrendingUp,
              delay: 0.5,
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: 40,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.7,
                  delay: item.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  x: -6,
                  scale: 1.025,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="
                  group
                  relative
                  w-[190px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#07111f]/75
                  px-4
                  py-4
                  shadow-[0_15px_50px_rgba(0,0,0,0.3)]
                  backdrop-blur-xl
                  xl:w-[210px]
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-signal/10
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-signal/20
                  "
                />

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-signal
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <div className="relative flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-signal/20
                      bg-signal/[0.08]
                      text-signal
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">

                    <div
                      className="
                        text-[24px]
                        font-semibold
                        leading-none
                        tracking-[-0.04em]
                        text-white
                      "
                      style={{
                        fontFamily:
                          '"Chakra Petch", sans-serif',
                      }}
                    >
                      {item.value}
                    </div>

                    <div
                      className="
                        mt-1
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-white/45
                        xl:text-[11px]
                      "
                    >
                      {item.label}
                    </div>

                  </div>
                </div>

                <div className="mt-4 h-px w-full bg-white/[0.06]" />

                <div className="mt-2 flex items-center justify-between">

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-white/25
                    "
                  >
                    DESFLYER
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-signal
                      shadow-[0_0_10px_rgba(0,180,255,0.8)]
                    "
                  />

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  </div>

  {/* GRID */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      z-10
      opacity-[0.045]
      bg-[linear-gradient(rgba(100,160,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(100,160,255,0.5)_1px,transparent_1px)]
      bg-[size:60px_60px]
      sm:bg-[size:80px_80px]
    "
  />

  {/* MOBILE STATS */}
  <div
    className="
      relative
      z-30
      mx-auto
      mt-8
      grid
      max-w-xl
      grid-cols-3
      gap-1.5
      pb-4
      sm:mt-10
      sm:gap-2
      lg:hidden
    "
  >
    <HeroStat
      value={listings.length}
      label="Open Tracks"
      icon={FiUsers}
      delay={0.3}
    />

    <HeroStat
      value="01"
      label="Real Projects"
      icon={FiCode}
      delay={0.4}
    />

    <HeroStat
      value="360°"
      label="Learning"
      icon={FiTrendingUp}
      delay={0.5}
    />
  </div>
</section>

      {/* ========================================================
          OPEN TRACKS
      ======================================================== */}

      <section
        id="open-tracks"
        className="px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-10 xl:pt-10"
      >
        <div className="mx-auto max-w-shell">

          <div className="mb-9 sm:mb-12">
            <Eyebrow>Open Tracks</Eyebrow>

            <div className="mt-4 flex flex-col gap-5 sm:mt-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">

              <div className="min-w-0">
                <h2 className="font-display text-2xl font-bold leading-tight text-[var(--fg)] sm:text-3xl lg:text-4xl">
                  Choose where you want to grow.
                </h2>

                <p className="mt-3 max-w-2xl text-[13px] leading-6 text-[var(--fg)]/55 sm:mt-4 sm:text-base sm:leading-7">
                  Find an internship track that matches your
                  interests and start working on meaningful
                  projects with our team.
                </p>
              </div>

              <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-3.5 py-2 text-[10px] font-mono text-signal sm:px-4 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-signal" />

                {listings.length} OPEN TRACK
                {listings.length !== 1 ? 'S' : ''}
              </div>
            </div>
          </div>

          {listings.length === 0 ? (
            <div className="rounded-[22px] border border-dashed border-[var(--border)] bg-[var(--card)]/40 p-7 text-center sm:rounded-[30px] sm:p-12">
              <FiClock
                size={28}
                className="mx-auto text-signal"
              />

              <h3 className="mt-5 font-display text-xl font-semibold text-[var(--fg)] sm:text-2xl">
                No Open Internships
              </h3>

              <p className="mx-auto mt-3 max-w-md text-[13px] leading-6 text-[var(--fg)]/50 sm:text-base sm:leading-7">
                We do not have any open internship tracks
                right now. Check back soon for new
                opportunities.
              </p>

              {/* ==================================================
                  ADDED NOTIFICATION BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={() => {
                  setNotifyError('')
                  setNotifySubmitted(false)
                  setShowHiringPopup(true)
                }}
                className="group mx-auto mt-6 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3 text-[11px] font-semibold text-white shadow-[0_10px_30px_rgba(25,118,255,0.22)] transition-all duration-300 hover:scale-[1.02] sm:text-xs"
              >
                <FiMail size={14} />

                Notify Me When Hiring Opens

                <FiArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-stretch justify-items-center gap-5 sm:gap-8 md:grid-cols-2">
              {listings.map((role, index) => (
                <InternshipCard
                  key={role.id}
                  role={role}
                  index={index}
                  onApply={handleApply}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          APPLICATION
      ======================================================== */}

      <AnimatePresence>
        {showApplication && (
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
              duration: 0.4,
            }}
            className="scroll-mt-20 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-10"
          >
            <div className="mx-auto max-w-5xl">

              <div className="mb-8 text-center sm:mb-12">
                <Eyebrow>Application</Eyebrow>

                <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-[var(--fg)] sm:text-3xl lg:text-4xl">
                  Ready to build the future?
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-[var(--fg)]/55 sm:text-sm">
                  Complete your application and take the
                  next step toward joining DesFlyer.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="mx-auto max-w-3xl rounded-[22px] border border-signal/20 bg-[var(--card)] p-7 text-center sm:rounded-[30px] sm:p-12"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-signal text-white sm:h-20 sm:w-20 sm:rounded-3xl">
                    <FiCheckCircle size={30} className="sm:h-9 sm:w-9" />
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-[var(--fg)] sm:mt-7 sm:text-3xl">
                    Application Submitted
                  </h3>

                  <p className="mx-auto mt-4 max-w-lg text-[13px] leading-6 text-[var(--fg)]/55 sm:text-base sm:leading-7">
                    Thank you for applying to DesFlyer.
                    Our team will review your application
                    and get back to you.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setShowApplication(false)
                      setSubmitted(false)
                    }}
                    className="mt-7 min-h-11 rounded-xl bg-signal px-5 py-3 text-[13px] font-semibold text-white sm:mt-8 sm:px-6 sm:text-sm"
                  >
                    Back to Internships
                  </button>
                </motion.div>
              ) : (
                <div className="overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] sm:rounded-[32px]">

                  <div className="grid lg:grid-cols-[200px_1fr]">

                    {/* LEFT STEPS */}

                    <aside className="border-b border-[var(--border)] bg-signal/[0.025] p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal text-white sm:h-12 sm:w-12">
                        <FiShield size={20} />
                      </div>

                      <div className="mt-5 sm:mt-7">
                        <span className="text-[7px] font-mono uppercase tracking-[0.2em] text-signal sm:text-[8px]">
                          DESFLYER / CAREERS
                        </span>

                        <h3 className="mt-2 font-display text-lg font-bold leading-tight text-[var(--fg)] sm:mt-3 sm:text-xl">
                          Your next chapter starts here.
                        </h3>
                      </div>

                      {/* MOBILE STEP NAVIGATION */}

                      <div className="mt-6 grid grid-cols-3 gap-2 lg:mt-8 lg:block lg:space-y-2">

                        {steps.map((step) => {
                          const StepIcon = step.icon
                          const active = currentStep === step.id
                          const complete = currentStep > step.id

                          return (
                            <button
                              key={step.id}
                              type="button"
                              onClick={() => {
                                if (step.id <= currentStep) {
                                  setErrorMessage('')
                                  setCurrentStep(step.id)
                                }
                              }}
                              className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border p-2 text-left transition-all sm:p-2.5 lg:justify-start lg:gap-3 ${
                                active
                                  ? 'border-signal/40 bg-signal/10'
                                  : 'border-transparent'
                              }`}
                            >
                              <span
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border sm:h-9 sm:w-9 ${
                                  active || complete
                                    ? 'border-signal bg-signal text-white'
                                    : 'border-signal/30 text-[var(--fg)]/35'
                                }`}
                              >
                                {complete ? (
                                  <FiCheckCircle size={14} />
                                ) : (
                                  <StepIcon size={14} />
                                )}
                              </span>

                              <span className="hidden min-w-0 lg:block">
                                <span className="block truncate text-[9px] font-mono uppercase tracking-wider text-signal">
                                  0{step.id} / {step.title}
                                </span>

                                <span className="mt-0.5 block truncate text-[8px] text-[var(--fg)]/40">
                                  {step.subtitle}
                                </span>
                              </span>

                              {/* MOBILE LABEL */}

                              <span className="block truncate text-[8px] font-mono uppercase text-signal sm:text-[9px] lg:hidden">
                                0{step.id}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </aside>

                    {/* FORM */}

                    <main className="min-w-0 p-4 sm:p-7 md:p-8 lg:p-9">

                      {/* MOBILE PROGRESS */}

                      <div className="mb-6 lg:hidden">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[8px] font-mono uppercase text-[var(--fg)]/35">
                            Step {currentStep} of {steps.length}
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
                            className="h-full rounded-full bg-signal"
                          />
                        </div>
                      </div>

                      {/* ERROR */}

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
                          className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-3.5 py-3 text-[11px] leading-5 text-red-400 sm:mb-6 sm:px-4 sm:text-xs"
                        >
                          <FiX size={15} className="mt-0.5 shrink-0" />
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}

                      <AnimatePresence mode="wait">
                        {renderStep()}
                      </AnimatePresence>

                      {/* NAVIGATION */}

                      <div className="mt-7 flex items-center justify-between gap-2 border-t border-[var(--border)] pt-6 sm:mt-9 sm:gap-4 sm:pt-7">

                        <button
                          type="button"
                          onClick={handlePrevious}
                          disabled={currentStep === 1}
                          className="flex min-h-10 shrink-0 items-center gap-1.5 rounded-xl border border-signal/30 px-3 py-2.5 text-[11px] text-[var(--fg)]/60 transition-all hover:border-signal/60 disabled:cursor-not-allowed disabled:opacity-20 sm:gap-2 sm:px-4 sm:py-3 sm:text-xs"
                        >
                          <FiArrowLeft size={14} />
                          <span>Back</span>
                        </button>

                        {currentStep < 3 ? (
                          <button
                            type="button"
                            onClick={handleNext}
                            className="flex min-h-10 min-w-0 items-center justify-center gap-1.5 rounded-xl bg-signal px-3 py-2.5 text-[10px] font-semibold text-white transition-all hover:scale-[1.02] sm:gap-2 sm:px-5 sm:py-3 sm:text-xs"
                          >
                            <span className="hidden xs:inline">
                              Continue to{' '}
                            </span>

                            {steps[currentStep].title}

                            <FiArrowRight size={14} />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="flex min-h-10 min-w-0 items-center justify-center gap-1.5 rounded-xl bg-signal px-3 py-2.5 text-[10px] font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60 sm:gap-2 sm:px-5 sm:py-3 sm:text-xs"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                <span>Submitting...</span>
                              </>
                            ) : (
                              <>
                                <span className="hidden xs:inline">
                                  Submit Application
                                </span>

                                <span className="xs:hidden">
                                  Submit
                                </span>

                                <FiCheckCircle size={14} />
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      <div className="mt-5 flex items-center justify-between sm:mt-6">
                        <span className="text-[7px] font-mono text-[var(--fg)]/25 sm:text-[8px]">
                          DESFLYER
                        </span>

                        <span className="flex items-center gap-2 text-[7px] font-mono text-[var(--fg)]/30 sm:text-[8px]">
                          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                          Secure Application
                        </span>
                      </div>
                    </main>
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ========================================================
          ADDED — INTERNSHIP HIRING NOTIFICATION POPUP
      ======================================================== */}

      <AnimatePresence>
        {showHiringPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020817]/75 px-4 py-6 backdrop-blur-md sm:px-6"
            onClick={() => {
              if (!isNotifySubmitting) {
                setShowHiringPopup(false)
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-[470px] overflow-hidden rounded-[24px] border border-signal/20 bg-[var(--card)] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.55)] sm:rounded-[30px] sm:p-7"
            >
              {/* TOP GLOW */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-signal/15 blur-[70px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-blue-500/10 blur-[70px]" />

              {/* GRID */}

              <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)] bg-[size:28px_28px]" />

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => {
                  if (!isNotifySubmitting) {
                    setShowHiringPopup(false)
                  }
                }}
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)]/80 text-[var(--fg)]/45 transition-all hover:border-signal/40 hover:text-[var(--fg)] sm:right-5 sm:top-5"
                aria-label="Close"
              >
                <FiX size={16} />
              </button>

              <div className="relative z-10">

                {!notifySubmitted ? (
                  <>
                    {/* ICON */}

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
                        delay: 0.1,
                        duration: 0.35,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/25 bg-signal/10 text-signal shadow-[0_0_35px_rgba(0,180,255,0.12)] sm:h-16 sm:w-16 sm:rounded-[20px]"
                    >
                      <FiMail size={24} className="sm:h-7 sm:w-7" />
                    </motion.div>

                    {/* LABEL */}

                    <div className="mt-6 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />

                      <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-signal">
                        Internship Updates
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-3 pr-8 font-display text-2xl font-bold leading-tight text-[var(--fg)] sm:text-3xl">
                      We are not hiring interns right now.
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-4 max-w-md text-[13px] leading-6 text-[var(--fg)]/55 sm:text-sm sm:leading-7">
                      Our internship tracks are currently closed.
                      Leave your email below and we will let you
                      know when new internship opportunities open.
                    </p>

                    {/* FORM */}

                    <form
                      onSubmit={handleNotifySubmit}
                      className="mt-6"
                    >
                      <label
                        htmlFor="internship-notify-email"
                        className="mb-2 block text-[8px] font-mono font-semibold uppercase tracking-[0.18em] text-[var(--fg)]/45"
                      >
                        Email Address
                      </label>

                      <div className="relative">
                        <FiMail
                          size={15}
                          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-signal/50"
                        />

                        <input
                          id="internship-notify-email"
                          type="email"
                          value={notifyEmail}
                          onChange={(event) => {
                            setNotifyEmail(event.target.value)
                            setNotifyError('')
                          }}
                          placeholder="you@example.com"
                          disabled={isNotifySubmitting}
                          autoComplete="email"
                          className="h-12 w-full rounded-xl border border-signal/30 bg-transparent pl-10 pr-4 text-[13px] text-[var(--fg)] outline-none placeholder:text-[var(--fg)]/25 transition-all duration-300 hover:border-signal/60 focus:border-signal focus:ring-2 focus:ring-signal/10 disabled:opacity-60 sm:text-sm"
                        />
                      </div>

                      {/* ERROR */}

                      {notifyError && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -5,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          className="mt-2 flex items-center gap-2 text-[10px] leading-5 text-red-400"
                        >
                          <FiX size={13} className="shrink-0" />
                          {notifyError}
                        </motion.div>
                      )}

                      {/* SUBMIT */}

                      <button
                        type="submit"
                        disabled={isNotifySubmitting}
                        className="group mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3 text-[11px] font-semibold text-white shadow-[0_10px_35px_rgba(25,118,255,0.25)] transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:text-xs"
                      >
                        {isNotifySubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Saving your email...
                          </>
                        ) : (
                          <>
                            Notify Me When Hiring Opens

                            <FiArrowRight
                              size={14}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </button>
                    </form>

                    <div className="mt-4 flex items-start gap-2">
                      <FiShield
                        size={12}
                        className="mt-0.5 shrink-0 text-signal/50"
                      />

                      <p className="text-[8px] leading-5 text-[var(--fg)]/30">
                        We will only use your email to send
                        internship hiring updates.
                      </p>
                    </div>
                  </>
                ) : (
                  /* ==================================================
                     SUCCESS STATE
                  ================================================== */

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="py-5 text-center sm:py-7"
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 220,
                        damping: 15,
                      }}
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-signal text-white shadow-[0_0_40px_rgba(0,180,255,0.25)] sm:h-20 sm:w-20 sm:rounded-3xl"
                    >
                      <FiCheckCircle
                        size={30}
                        className="sm:h-9 sm:w-9"
                      />
                    </motion.div>

                    <div className="mt-6 text-[8px] font-mono uppercase tracking-[0.2em] text-signal">
                      Notification Active
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold text-[var(--fg)] sm:text-3xl">
                      You're on the list.
                    </h3>

                    <p className="mx-auto mt-4 max-w-sm text-[13px] leading-6 text-[var(--fg)]/55 sm:text-sm sm:leading-7">
                      We have saved your email. We will
                      contact you when internship hiring opens.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setShowHiringPopup(false)
                      }}
                      className="mt-7 min-h-11 rounded-xl bg-signal px-6 py-3 text-[11px] font-semibold text-white transition-all hover:scale-[1.02] sm:text-xs"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          FAQ
      ======================================================== */}

      <FAQ />

      {/* ========================================================
          CTA
      ======================================================== */}

      <section className="w-full overflow-hidden">
        <CTABand />
      </section>

    </div>
  )
}
