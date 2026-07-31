import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import Button from '../ui/Button'

// Generic create/edit modal for both Internship and Job openings, driven by a field
// config so the Internship and Job admin pages can share this one component.
export default function OpeningFormModal({ title, fields, initialValues, onSave, onClose }) {
  const [values, setValues] = useState(initialValues || {})

  useEffect(() => {
    setValues(initialValues || {})
  }, [initialValues])

  function handleChange(name, value) {
    setValues((v) => ({ ...v, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSave(values)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl w-full max-w-2xl p-8 relative max-h-[85vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--fg)]/70 hover:text-signal hover:border-signal"
          >
            <FiX size={16} />
          </button>

          <h2 className="font-display font-semibold text-xl text-[var(--fg)] mb-6">{title}</h2>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
            {fields.map((field) => (
              <div key={field.name} className={field.fullWidth ? 'sm:col-span-2' : ''}>
                <label className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
                  {field.label}
                  {field.required && <span className="text-signal ml-1">*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    required={field.required}
                    rows={field.rows || 3}
                    value={values[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none resize-none"
                  />
                ) : field.type === 'select' ? (
                  <select
                    required={field.required}
                    value={values[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[var(--bg)]">
                      Select
                    </option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt} className="bg-[var(--bg)]">
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || 'text'}
                    required={field.required}
                    value={values[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none"
                  />
                )}
              </div>
            ))}

            <div className="sm:col-span-2 flex gap-3 mt-3">
              <Button type="submit">Save</Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
