import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../../data/nav'
import ThemeToggle from './ThemeToggle'
import Button from '../ui/Button'

function DesktopDropdown({ link }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)
  const location = useLocation()
  const isActive = link.dropdown.some((d) => location.pathname === d.to)

  function show() {
    clearTimeout(timer.current)
    setOpen(true)
  }
  function hide() {
    timer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
          isActive ? 'text-signal' : 'text-[var(--fg)]/80 hover:text-signal'
        }`}
      >
        {link.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FiChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72"
          >
            <div className="glass rounded-2xl p-2 shadow-xl">
              {link.dropdown.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive: itemActive }) =>
                    `block rounded-xl px-4 py-3 transition-colors duration-150 ${
                      itemActive ? 'bg-signal/10 text-signal' : 'hover:bg-[var(--surface-2)] text-[var(--fg)]'
                    }`
                  }
                >
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-[var(--fg)]/50 mt-0.5">{item.desc}</p>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileAccordionItem({ link, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between text-base font-medium text-[var(--fg)]"
      >
        {link.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FiChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3 pl-3 flex flex-col gap-3">
              {link.dropdown.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `text-sm ${isActive ? 'text-signal' : 'text-[var(--fg)]/70'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-[0_1px_0_0_var(--border)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-shell mx-auto px-6 lg:px-10 h-20 flex items-center justify-between" aria-label="Primary">
        <NavLink to="/" className="font-display font-bold text-xl tracking-tight text-[var(--fg)]" aria-label="DesFlyer home">
          DES<span className="text-signal">Flyer</span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DesktopDropdown key={link.label} link={link} />
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-signal' : 'text-[var(--fg)]/80 hover:text-signal'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button to="/contact" variant="outline" className="px-5 py-2.5">
            Let&rsquo;s Talk
          </Button>
          <Button to="/contact" className="px-5 py-2.5">
            Get Started
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="w-11 h-11 flex items-center justify-center text-[var(--fg)]"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <MobileAccordionItem key={link.label} link={link} onNavigate={() => setOpen(false)} />
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-medium ${isActive ? 'text-signal' : 'text-[var(--fg)]'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ),
              )}
              <Button to="/contact" onClick={() => setOpen(false)} className="mt-2 w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
