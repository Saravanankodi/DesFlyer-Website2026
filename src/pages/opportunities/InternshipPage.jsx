import { useRef, useState } from 'react'
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
  FiPlay,
  FiCheck,
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
    <div className="group">
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
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-signal/50 transition-colors duration-300 group-focus-within:text-signal"
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
          className={`
            h-12 w-full rounded-xl border border-signal/40
            bg-transparent
            ${Icon ? 'pl-11' : 'pl-4'}
            pr-4 text-sm text-[var(--fg)]
            outline-none placeholder:text-[var(--fg)]/25
            transition-all duration-300
            hover:border-signal/60
            focus:border-signal
            focus:ring-2 focus:ring-signal/10
          `}
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
    <div>
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
        className="h-12 w-full rounded-xl border border-signal/40 bg-transparent px-4 text-sm text-[var(--fg)] outline-none transition-all duration-300 hover:border-signal/60 focus:border-signal focus:ring-2 focus:ring-signal/10"
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
    <div>
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
        className="w-full resize-none rounded-xl border border-signal/40 bg-transparent px-4 py-3 text-sm leading-6 text-[var(--fg)] outline-none placeholder:text-[var(--fg)]/25 transition-all duration-300 hover:border-signal/60 focus:border-signal focus:ring-2 focus:ring-signal/10"
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
      <div className="relative flex h-full min-h-[410px] flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_25px_70px_-45px_rgba(46,111,255,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-signal/30">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-signal/10 blur-[70px]" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/25 bg-signal/10 text-signal">
              <CardIcon size={23} />
            </div>

            <span className="flex items-center gap-2 rounded-full border border-signal/20 bg-signal/5 px-3 py-1.5 text-[9px] font-mono uppercase tracking-wider text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Open
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-mono uppercase tracking-wider text-[var(--fg)]/40">
            <span className="flex items-center gap-1.5">
              <FiBriefcase size={11} className="text-signal" />
              {role.department || 'Technology'}
            </span>

            <span className="flex items-center gap-1.5">
              <FiMapPin size={11} className="text-signal" />
              {role.location || 'Hybrid'}
            </span>
          </div>

          <div className="mt-5">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-signal">
              Internship Track
            </span>

            <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--fg)] group-hover:text-signal">
              {role.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--fg)]/55">
              {role.description}
            </p>
          </div>

          <div className="mt-auto pt-7">
            <div className="mb-5 h-px bg-[var(--border)]" />

            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-[8px] font-mono uppercase tracking-wider text-[var(--fg)]/30">
                  <FiClock size={10} className="text-signal" />
                  Duration
                </div>

                <p className="mt-2 text-xs text-[var(--fg)]/65">
                  {role.duration || 'Flexible'}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[8px] font-mono uppercase tracking-wider text-[var(--fg)]/30">
                  <FiUsers size={10} className="text-signal" />
                  Openings
                </div>

                <p className="mt-2 text-xs text-[var(--fg)]/65">
                  {role.openings || 'Multiple'}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[8px] font-mono uppercase tracking-wider text-[var(--fg)]/30">
                  <FiZap size={10} className="text-signal" />
                  Mode
                </div>

                <p className="mt-2 text-xs text-[var(--fg)]/65">
                  {role.location || 'Hybrid'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onApply}
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-signal px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Apply for Internship
              <FiArrowRight size={16} />
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
      className="
        group relative w-[145px] overflow-hidden
        rounded-xl border border-blue-400/45
        bg-[#071536]/80 px-4 py-3
        shadow-[0_0_30px_rgba(35,110,255,0.18)]
        backdrop-blur-xl
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-transparent" />

      <div className="relative z-10 flex items-center justify-between gap-3">
        <div>
          <div className="font-display text-2xl font-bold leading-none text-white">
            {value}
          </div>

          <div className="mt-2 whitespace-nowrap text-[8px] font-mono uppercase tracking-[0.08em] text-blue-100/65">
            {label}
          </div>
        </div>

        <Icon
          size={19}
          className="shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(50,130,255,1)]" />
    </motion.div>
  )
}

/* ============================================================
   FLOATING MINI CARD
============================================================ */

function FloatingMiniCard({
  icon: Icon,
  children,
  className = '',
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className={`
        absolute z-20 hidden rounded-xl
        border border-blue-400/40
        bg-[#061330]/75
        px-4 py-3
        shadow-[0_0_25px_rgba(20,100,255,0.22)]
        backdrop-blur-xl
        lg:block
        ${className}
      `}
    >
      <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-wider text-white/75">
        <Icon size={13} className="text-blue-400" />
        {children}
      </div>
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
          <div className="mb-8">
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-signal">
              Step 01
            </div>

            <div className="mt-2 flex items-center justify-between gap-5">
              <h3 className="font-display text-2xl font-semibold text-[var(--fg)]">
                Personal Information
              </h3>

              <div className="hidden w-28 sm:block">
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

          <div className="border-t border-[var(--border)] pt-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
                1
              </span>

              <span className="text-sm font-semibold text-[var(--fg)]">
                Personal Details
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
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

            <div className="mt-6">
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
                    className={`rounded-full border px-4 py-2.5 text-xs transition-all ${
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
          <div className="mb-8">
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-signal">
              Step 02
            </div>

            <div className="mt-2 flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold text-[var(--fg)]">
                Education
              </h3>

              <span className="text-[8px] font-mono text-signal">
                {progress}%
              </span>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
                2
              </span>

              <span className="text-sm font-semibold text-[var(--fg)]">
                Academic Background
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
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
        <div className="mb-8">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-signal">
            Step 03
          </div>

          <div className="mt-2 flex items-center justify-between">
            <h3 className="font-display text-2xl font-semibold text-[var(--fg)]">
              Resume & Application
            </h3>

            <span className="text-[8px] font-mono text-signal">
              {progress}%
            </span>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-7">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-signal/40 text-[10px] font-mono text-signal">
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
              className="flex min-h-[130px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-signal/40 px-6 text-center transition-all hover:border-signal/70"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <FiUpload size={20} />
              </span>

              <span className="mt-3 text-sm font-medium text-[var(--fg)]/70">
                Upload your resume
              </span>

              <span className="mt-1 text-[10px] text-[var(--fg)]/35">
                PDF, DOC or DOCX · Maximum 5MB
              </span>
            </button>
          ) : (
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-signal/40 p-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                  <FiFileText size={19} />
                </span>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[var(--fg)]">
                    {resumeFile.name}
                  </p>

                  <p className="mt-1 text-[10px] text-[var(--fg)]/35">
                    {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={removeResume}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-signal/30 text-[var(--fg)]/45 hover:text-red-400"
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

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
    <div className="overflow-hidden">

      {/* ========================================================
          EXACT-STYLE HERO
      ======================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#020918] px-5 pt-24 sm:px-8 lg:min-h-[700px] lg:px-10 lg:pt-28">

        {/* BACKGROUND ARTWORK */}

        <div className="absolute inset-0">
          <img
            src="/images/portfolio/bg.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* DARK CINEMATIC OVERLAY */}

        <div className="absolute inset-0 bg-[#020817]/35" />

        {/* LEFT GRADIENT */}

        <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-[#020817]/95 via-[#020817]/75 to-transparent" />

        {/* BOTTOM FADE */}

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-transparent" />

        {/* BLUE ATMOSPHERIC GLOW */}

        <div className="pointer-events-none absolute left-[45%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[150px]" />

        <div className="pointer-events-none absolute right-[5%] top-[15%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* HERO CONTENT */}

        <div className="relative mx-auto max-w-[1450px]">

          <div className="grid min-h-[560px] items-center lg:grid-cols-[1fr_0.9fr]">

            {/* ==================================================
                LEFT SIDE
            ================================================== */}

            <div className="relative z-30 max-w-[650px]">

              {/* EYEBROW */}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-5"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(50,140,255,1)]" />

                  <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.18em] text-blue-300">
                    Internships
                  </span>
                </div>
              </motion.div>

              {/* HEADING */}

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  max-w-[650px]
                  font-display
                  text-[clamp(3rem,6vw,5rem)]
                  font-bold
                  leading-[0.94]
                  tracking-[-0.045em]
                  text-white
                "
              >
                Learn by
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    via-[#7dd3fc]
                    to-[#2697ff]
                    bg-clip-text
                    text-transparent
                  "
                >
                  building real things.
                </span>
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.15,
                }}
                className="
                  mt-6
                  max-w-[560px]
                  text-sm
                  leading-7
                  text-blue-50/65
                  sm:text-base
                "
              >
                Work alongside our team on real products,
                real client projects and real technical
                challenges while building experience that
                actually matters.
              </motion.p>

              {/* BUTTONS */}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.25,
                }}
                className="mt-7 flex flex-wrap gap-3"
              >

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
                  Explore Internships

                  <FiArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                {/* <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById('open-tracks')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                      })
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-blue-300/25
                    bg-[#061330]/45
                    px-5
                    py-3
                    text-xs
                    font-medium
                    text-white/70
                    backdrop-blur-xl
                    transition-all
                    hover:border-blue-400/50
                    hover:bg-blue-500/10
                    hover:text-white
                  "
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-300/35">
                    <FiPlay size={8} fill="currentColor" />
                  </span>

                  Watch How It Works
                </button> */}

              </motion.div>
            </div>

            {/* ==================================================
                RIGHT SIDE
                FLOATING STAT CARDS
            ================================================== */}

            <div className="relative hidden h-[570px] lg:block">

              {/* CODE MINI CARD */}

              {/* <FloatingMiniCard
                icon={FiCheck}
                delay={0.35}
                className="right-[175px] top-[48px]"
              >
                Code
              </FloatingMiniCard>

              <FloatingMiniCard
                icon={FiCheck}
                delay={0.42}
                className="right-[155px] top-[83px]"
              >
                Learn
              </FloatingMiniCard>

              <FloatingMiniCard
                icon={FiCheck}
                delay={0.49}
                className="right-[138px] top-[118px]"
              >
                Build
              </FloatingMiniCard> */}

              {/* MAIN STAT STACK */}

              <div className="absolute right-[15px] top-[115px] z-30 flex flex-col gap-3">

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
                  label="Hands-on Learning"
                  icon={FiTrendingUp}
                  delay={0.5}
                />

              </div>

              {/* FLOATING CODE ICON */}

              {/* <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
                className="
                  absolute
                  left-[35%]
                  top-[145px]
                  z-20
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-400/45
                  bg-[#061431]/75
                  text-blue-400
                  shadow-[0_0_30px_rgba(30,120,255,0.3)]
                  backdrop-blur-xl
                "
              >
                <FiCode size={25} />
              </motion.div> */}

              {/* LIGHTBULB */}

              {/* <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  left-[24%]
                  top-[245px]
                  z-20
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-400/40
                  bg-[#061431]/75
                  text-blue-400
                  shadow-[0_0_30px_rgba(30,120,255,0.25)]
                  backdrop-blur-xl
                "
              >
                <FiZap size={24} />
              </motion.div> */}

              {/* FLOATING LINE */}

              {/* <motion.div
                animate={{
                  opacity: [0.25, 0.7, 0.25],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-[20%]
                  top-[320px]
                  h-px
                  w-[300px]
                  rotate-[-8deg]
                  bg-gradient-to-r
                  from-transparent
                  via-blue-400
                  to-transparent
                "
              /> */}

              {/* SMALL DATA NODE */}

              {/* <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  absolute
                  bottom-[90px]
                  left-[35%]
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-blue-400/30
                  bg-[#061431]/70
                  px-3
                  py-2
                  text-[8px]
                  font-mono
                  uppercase
                  tracking-wider
                  text-blue-200/70
                  backdrop-blur-xl
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Build / Learn / Grow
              </motion.div> */}

            </div>

          </div>
        </div>

        {/* TOP LIGHT GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.06]
            bg-[linear-gradient(rgba(100,160,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(100,160,255,0.5)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* MOBILE STATS */}

        <div className="relative z-30 mx-auto mt-2 grid max-w-xl grid-cols-3 gap-2 lg:hidden">

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
        className="px-6 pb-32 pt-20 lg:px-10"
      >
        <div className="mx-auto max-w-shell">

          <div className="mb-12">
            <Eyebrow>Open Tracks</Eyebrow>

            <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

              <div>
                <h2 className="font-display text-3xl font-bold text-[var(--fg)] lg:text-4xl">
                  Choose where you want to grow.
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[var(--fg)]/55">
                  Find an internship track that matches your
                  interests and start working on meaningful
                  projects with our team.
                </p>
              </div>

              <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-signal/30 bg-signal/5 px-4 py-2 text-xs font-mono text-signal lg:self-auto">
                <span className="h-2 w-2 rounded-full bg-signal" />

                {listings.length} OPEN TRACK
                {listings.length !== 1 ? 'S' : ''}
              </div>

            </div>
          </div>

          {listings.length === 0 ? (

            <div className="rounded-[30px] border border-dashed border-[var(--border)] bg-[var(--card)]/40 p-12 text-center">

              <FiClock
                size={30}
                className="mx-auto text-signal"
              />

              <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--fg)]">
                No Open Internships
              </h3>

              <p className="mx-auto mt-3 max-w-md leading-7 text-[var(--fg)]/50">
                We do not have any open internship tracks
                right now. Check back soon for new
                opportunities.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 items-stretch justify-items-center gap-8 md:grid-cols-2">

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
            className="scroll-mt-24 px-6 pb-32 lg:px-10"
          >

            <div className="mx-auto max-w-5xl">

              <div className="mb-12 text-center">
                <Eyebrow>Application</Eyebrow>

                <h2 className="mt-4 font-display text-3xl font-bold text-[var(--fg)] lg:text-4xl">
                  Ready to build the future?
                </h2>

                <p className="mt-3 text-sm text-[var(--fg)]/55">
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
                  className="mx-auto max-w-3xl rounded-[30px] border border-signal/20 bg-[var(--card)] p-12 text-center"
                >

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-signal text-white">
                    <FiCheckCircle size={36} />
                  </div>

                  <h3 className="mt-7 font-display text-3xl font-bold text-[var(--fg)]">
                    Application Submitted
                  </h3>

                  <p className="mx-auto mt-4 max-w-lg leading-7 text-[var(--fg)]/55">
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
                    className="mt-8 rounded-xl bg-signal px-6 py-3 text-sm font-semibold text-white"
                  >
                    Back to Internships
                  </button>

                </motion.div>

              ) : (

                <div className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--card)]">

                  <div className="grid lg:grid-cols-[200px_1fr]">

                    {/* LEFT STEPS */}

                    <aside className="border-b border-[var(--border)] bg-signal/[0.025] p-6 lg:border-b-0 lg:border-r lg:p-7">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal text-white">
                        <FiShield size={21} />
                      </div>

                      <div className="mt-7">
                        <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-signal">
                          DESFLYER / CAREERS
                        </span>

                        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-[var(--fg)]">
                          Your next chapter starts here.
                        </h3>
                      </div>

                      <div className="mt-8 space-y-2">

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
                              className={`flex w-full items-center gap-3 rounded-xl border p-2.5 text-left transition-all ${
                                active
                                  ? 'border-signal/40 bg-signal/10'
                                  : 'border-transparent'
                              }`}
                            >
                              <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                                  active || complete
                                    ? 'border-signal bg-signal text-white'
                                    : 'border-signal/30 text-[var(--fg)]/35'
                                }`}
                              >
                                {complete ? (
                                  <FiCheckCircle size={15} />
                                ) : (
                                  <StepIcon size={15} />
                                )}
                              </span>

                              <span>
                                <span className="block text-[9px] font-mono uppercase tracking-wider text-signal">
                                  0{step.id} / {step.title}
                                </span>

                                <span className="mt-0.5 block text-[8px] text-[var(--fg)]/40">
                                  {step.subtitle}
                                </span>
                              </span>
                            </button>
                          )
                        })}

                      </div>
                    </aside>

                    {/* FORM */}

                    <main className="min-w-0 p-6 sm:p-8 lg:p-9">

                      <div className="mb-7 lg:hidden">

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
                          className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs text-red-400"
                        >
                          <FiX size={15} />
                          {errorMessage}
                        </motion.div>
                      )}

                      <AnimatePresence mode="wait">
                        {renderStep()}
                      </AnimatePresence>

                      {/* NAVIGATION */}

                      <div className="mt-9 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-7">

                        <button
                          type="button"
                          onClick={handlePrevious}
                          disabled={currentStep === 1}
                          className="flex items-center gap-2 rounded-xl border border-signal/30 px-4 py-3 text-xs text-[var(--fg)]/60 transition-all hover:border-signal/60 disabled:cursor-not-allowed disabled:opacity-20"
                        >
                          <FiArrowLeft size={14} />
                          Back
                        </button>

                        {currentStep < 3 ? (

                          <button
                            type="button"
                            onClick={handleNext}
                            className="flex items-center gap-2 rounded-xl bg-signal px-5 py-3 text-xs font-semibold text-white transition-all hover:scale-[1.02]"
                          >
                            Continue to{' '}
                            {steps[currentStep].title}

                            <FiArrowRight size={14} />
                          </button>

                        ) : (

                          <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="flex items-center gap-2 rounded-xl bg-signal px-5 py-3 text-xs font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                Submit Application
                                <FiCheckCircle size={14} />
                              </>
                            )}
                          </button>

                        )}

                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-[8px] font-mono text-[var(--fg)]/25">
                          DESFLYER
                        </span>

                        <span className="flex items-center gap-2 text-[8px] font-mono text-[var(--fg)]/30">
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
          FAQ
      ======================================================== */}

      <FAQ
        items={internshipFaqs}
        eyebrow="Internship FAQ"
        title="Questions About Interning Here"
      />

      {/* ========================================================
          CTA
      ======================================================== */}

      <section>
        <CTABand />
      </section>

    </div>
  )
}