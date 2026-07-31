import { FiUpload, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { ALLOWED_RESUME_TYPES, MAX_RESUME_MB } from '../../lib/formValidation'

export default function Field({ field, value, error, touched, onChange, onBlur }) {
  const showError = touched && error
  const inputId = `field-${field.name}`

  const baseInputClasses = `mt-2 w-full bg-transparent border-b py-2.5 text-[var(--fg)] outline-none transition-colors ${
    showError ? 'border-red-400' : 'border-[var(--border)] focus:border-signal'
  }`

  function renderInput() {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={inputId}
            rows={field.rows || 4}
            value={value || ''}
            onChange={(e) => onChange(field.name, e.target.value)}
            onBlur={() => onBlur(field.name)}
            placeholder={field.placeholder}
            className={`${baseInputClasses} resize-none`}
            aria-invalid={!!showError}
            aria-describedby={showError ? `${inputId}-error` : undefined}
          />
        )

      case 'select':
        return (
          <select
            id={inputId}
            value={value || ''}
            onChange={(e) => onChange(field.name, e.target.value)}
            onBlur={() => onBlur(field.name)}
            className={`${baseInputClasses} appearance-none cursor-pointer`}
            aria-invalid={!!showError}
            aria-describedby={showError ? `${inputId}-error` : undefined}
          >
            <option value="" disabled>
              {field.placeholder || 'Select an option'}
            </option>
            {field.options.map((opt) => (
              <option key={opt} value={opt} className="bg-[var(--bg)]">
                {opt}
              </option>
            ))}
          </select>
        )

      case 'radio':
        return (
          <div className="mt-3 flex flex-wrap gap-3" role="radiogroup" aria-labelledby={`${inputId}-label`}>
            {field.options.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => {
                  onChange(field.name, opt)
                  onBlur(field.name)
                }}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  value === opt
                    ? 'bg-signal text-white border-signal'
                    : 'border-[var(--border)] text-[var(--fg)]/70 hover:border-signal/50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )

      case 'file': {
        const file = value
        return (
          <div className="mt-2">
            <label
              htmlFor={inputId}
              className={`flex items-center gap-3 border border-dashed rounded-xl px-4 py-3.5 cursor-pointer transition-colors ${
                showError ? 'border-red-400' : 'border-[var(--border)] hover:border-signal/50'
              }`}
            >
              {file ? <FiCheckCircle className="text-signal shrink-0" size={18} /> : <FiUpload className="text-[var(--fg)]/40 shrink-0" size={18} />}
              <span className="text-sm text-[var(--fg)]/70 truncate">
                {file ? file.name : `Upload resume (${ALLOWED_RESUME_TYPES.join(', ').toUpperCase()}, max ${MAX_RESUME_MB}MB)`}
              </span>
              <input
                id={inputId}
                type="file"
                accept=".pdf,.doc,.docx"
                className="sr-only"
                onChange={(e) => {
                  const f = e.target.files?.[0]
                  if (f) onChange(field.name, f)
                }}
                onBlur={() => onBlur(field.name)}
                aria-invalid={!!showError}
                aria-describedby={showError ? `${inputId}-error` : undefined}
              />
            </label>
          </div>
        )
      }

      case 'date':
        return (
          <input
            id={inputId}
            type="date"
            value={value || ''}
            onChange={(e) => onChange(field.name, e.target.value)}
            onBlur={() => onBlur(field.name)}
            className={baseInputClasses}
            aria-invalid={!!showError}
            aria-describedby={showError ? `${inputId}-error` : undefined}
          />
        )

      default:
        return (
          <input
            id={inputId}
            type={field.type === 'tel' || field.type === 'pincode' ? 'text' : field.type || 'text'}
            value={value || ''}
            onChange={(e) => onChange(field.name, e.target.value)}
            onBlur={() => onBlur(field.name)}
            placeholder={field.placeholder}
            className={baseInputClasses}
            aria-invalid={!!showError}
            aria-describedby={showError ? `${inputId}-error` : undefined}
          />
        )
    }
  }

  return (
    <div className={field.fullWidth ? 'sm:col-span-2' : ''}>
      <label
        id={`${inputId}-label`}
        htmlFor={inputId}
        className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60"
      >
        {field.label}
        {field.required && <span className="text-signal ml-1">*</span>}
      </label>
      {renderInput()}
      {showError && (
        <p id={`${inputId}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
          <FiAlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  )
}
