import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiLoader } from 'react-icons/fi'
import Field from './Field'
import Button from '../ui/Button'
import { validateField, validateSections } from '../../lib/formValidation'

export default function DynamicForm({ sections, onSubmit, submitLabel = 'Submit Application' }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | done | failed

  function handleChange(name, value) {
    setValues((v) => ({ ...v, [name]: value }))
  }

  function handleBlur(name) {
    setTouched((t) => ({ ...t, [name]: true }))
    const field = sections.flatMap((s) => s.fields).find((f) => f.name === name)
    const err = validateField(field, values[name])
    setErrors((e) => ({ ...e, [name]: err }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const allErrors = validateSections(sections, values)
    setErrors(allErrors)
    setTouched(
      Object.fromEntries(sections.flatMap((s) => s.fields).map((f) => [f.name, true])),
    )

    if (Object.values(allErrors).some(Boolean)) {
      const firstErrorField = sections.flatMap((s) => s.fields).find((f) => allErrors[f.name])
      if (firstErrorField) {
        document.getElementById(`field-${firstErrorField.name}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setStatus('submitting')
    try {
      await onSubmit(values)
      setStatus('done')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'done') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 border border-[var(--border)] rounded-2xl"
      >
        <FiCheckCircle className="text-signal mx-auto" size={44} />
        <h3 className="font-display font-semibold text-2xl mt-5 text-[var(--fg)]">Application received</h3>
        <p className="mt-2 text-[var(--fg)]/60 max-w-sm mx-auto">
          Thanks for applying — we&rsquo;ll review your details and be in touch soon.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-14">
      {sections.map((section, si) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: si * 0.05 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-signal border border-signal/30 rounded-full w-7 h-7 flex items-center justify-center shrink-0">
              {si + 1}
            </span>
            <h3 className="font-display font-semibold text-lg text-[var(--fg)]">{section.title}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
            {section.fields.map((field) => (
              <Field
                key={field.name}
                field={field}
                value={values[field.name]}
                error={errors[field.name]}
                touched={touched[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {status === 'failed' && (
        <p className="text-sm text-red-400">Something went wrong submitting your application. Please try again.</p>
      )}

      <Button type="submit" disabled={status === 'submitting'} className="self-start px-8">
        {status === 'submitting' ? (
          <>
            <FiLoader className="animate-spin" /> Submitting…
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  )
}
