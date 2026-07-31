const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+\-\s()]{7,15}$/
const PINCODE_RE = /^[0-9]{6}$/
const ALLOWED_RESUME_TYPES = ['pdf', 'doc', 'docx']
const MAX_RESUME_MB = 10

export function validateField(field, value) {
  const isEmpty = value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)

  if (field.required && isEmpty) {
    return 'This field is required.'
  }
  if (isEmpty) return null // optional + empty is fine

  switch (field.type) {
    case 'email':
      return EMAIL_RE.test(value) ? null : 'Enter a valid email address.'
    case 'tel':
      return PHONE_RE.test(value) ? null : 'Enter a valid phone number.'
    case 'pincode':
      return PINCODE_RE.test(value) ? null : 'Enter a valid 6-digit pin code.'
    case 'date': {
      const d = new Date(value)
      return Number.isNaN(d.getTime()) ? 'Enter a valid date.' : null
    }
    case 'file': {
      const file = value
      const ext = file.name.split('.').pop().toLowerCase()
      if (!ALLOWED_RESUME_TYPES.includes(ext)) {
        return `Unsupported format. Use ${ALLOWED_RESUME_TYPES.join(', ').toUpperCase()}.`
      }
      if (file.size > MAX_RESUME_MB * 1024 * 1024) {
        return `File is too large. Max size is ${MAX_RESUME_MB}MB.`
      }
      return null
    }
    default:
      if (field.minLength && value.length < field.minLength) {
        return `Must be at least ${field.minLength} characters.`
      }
      return null
  }
}

export function validateSections(sections, values) {
  const errors = {}
  sections.forEach((section) => {
    section.fields.forEach((field) => {
      const err = validateField(field, values[field.name])
      if (err) errors[field.name] = err
    })
  })
  return errors
}

export { ALLOWED_RESUME_TYPES, MAX_RESUME_MB }
