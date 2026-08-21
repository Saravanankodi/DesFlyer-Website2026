import { FiUpload, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import {
  ALLOWED_RESUME_TYPES,
  MAX_RESUME_MB,
} from '../../lib/formValidation'

export default function Field({
  field,
  value,
  error,
  touched,
  onChange,
  onBlur,
}) {
  const showError = touched && error
  const inputId = `field-${field.name}`

  // Common styling for all text-based form fields
  const baseInputClasses = `
    mt-2
    w-full
    rounded-xl
    border
    px-4
    py-3
    text-[var(--fg)]
    bg-[var(--card)]
    outline-none
    transition-all
    duration-300
    placeholder:text-[var(--fg)]/30
    ${
      showError
        ? 'border-red-400 focus:border-red-400'
        : 'border-[var(--border)] focus:border-signal focus:ring-1 focus:ring-signal/20'
    }
  `

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
            aria-describedby={
              showError ? `${inputId}-error` : undefined
            }
          />
        )

      case 'select':
        return (
          <select
            id={inputId}
            value={value || ''}
            onChange={(e) => onChange(field.name, e.target.value)}
            onBlur={() => onBlur(field.name)}
            className={`${baseInputClasses} cursor-pointer appearance-none`}
            aria-invalid={!!showError}
            aria-describedby={
              showError ? `${inputId}-error` : undefined
            }
          >
            <option value="" disabled>
              {field.placeholder || 'Select an option'}
            </option>

            {field.options.map((opt) => (
              <option
                key={opt}
                value={opt}
                className="bg-[var(--bg)]"
              >
                {opt}
              </option>
            ))}
          </select>
        )

      case 'radio':
        return (
          <div
            className="mt-3 flex flex-wrap gap-3"
            role="radiogroup"
            aria-labelledby={`${inputId}-label`}
          >
            {field.options.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => {
                  onChange(field.name, opt)
                  onBlur(field.name)
                }}
                className={`
                  rounded-xl
                  border
                  px-4
                  py-2.5
                  text-sm
                  transition-all
                  duration-300
                  ${
                    value === opt
                      ? 'border-signal bg-signal text-white'
                      : 'border-[var(--border)] text-[var(--fg)]/70 hover:border-signal/50 hover:text-signal'
                  }
                `}
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
              className={`
                flex
                min-h-[54px]
                w-full
                cursor-pointer
                items-center
                gap-3
                rounded-xl
                border
                border-dashed
                px-4
                py-3.5
                transition-all
                duration-300
                ${
                  showError
                    ? 'border-red-400'
                    : 'border-[var(--border)] hover:border-signal/60 hover:bg-signal/[0.03]'
                }
              `}
            >
              {file ? (
                <FiCheckCircle
                  className="shrink-0 text-signal"
                  size={18}
                />
              ) : (
                <FiUpload
                  className="shrink-0 text-[var(--fg)]/40"
                  size={18}
                />
              )}

              <span className="truncate text-sm text-[var(--fg)]/70">
                {file
                  ? file.name
                  : `Upload resume (${ALLOWED_RESUME_TYPES.join(
                      ', ',
                    ).toUpperCase()}, max ${MAX_RESUME_MB}MB)`}
              </span>

              <input
                id={inputId}
                type="file"
                accept=".pdf,.doc,.docx"
                className="sr-only"
                onChange={(e) => {
                  const f = e.target.files?.[0]

                  if (f) {
                    onChange(field.name, f)
                  }
                }}
                onBlur={() => onBlur(field.name)}
                aria-invalid={!!showError}
                aria-describedby={
                  showError ? `${inputId}-error` : undefined
                }
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
            onChange={(e) =>
              onChange(field.name, e.target.value)
            }
            onBlur={() => onBlur(field.name)}
            className={baseInputClasses}
            aria-invalid={!!showError}
            aria-describedby={
              showError ? `${inputId}-error` : undefined
            }
          />
        )

      default:
        return (
          <input
            id={inputId}
            type={
              field.type === 'tel' || field.type === 'pincode'
                ? 'text'
                : field.type || 'text'
            }
            value={value || ''}
            onChange={(e) =>
              onChange(field.name, e.target.value)
            }
            onBlur={() => onBlur(field.name)}
            placeholder={field.placeholder}
            className={baseInputClasses}
            aria-invalid={!!showError}
            aria-describedby={
              showError ? `${inputId}-error` : undefined
            }
          />
        )
    }
  }

  return (
    <div className={field.fullWidth ? 'sm:col-span-2' : ''}>
      <label
        id={`${inputId}-label`}
        htmlFor={inputId}
        className="
          font-mono
          text-xs
          uppercase
          tracking-[0.1em]
          text-[var(--fg)]/60
        "
      >
        {field.label}

        {field.required && (
          <span className="ml-1 text-signal">*</span>
        )}
      </label>

      {renderInput()}

      {showError && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="
            mt-1.5
            flex
            items-center
            gap-1.5
            text-xs
            text-red-400
          "
        >
          <FiAlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  )
}