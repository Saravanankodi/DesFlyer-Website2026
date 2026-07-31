import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium text-sm px-6 py-3 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-signal disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary: 'bg-signal text-white hover:bg-signal-dim hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(46,111,255,0.55)]',
  outline:
    'border border-signal/50 text-[var(--fg)] hover:border-signal hover:bg-signal/10 hover:-translate-y-0.5',
  ghost: 'text-[var(--fg)] hover:text-signal',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
