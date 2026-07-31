import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="relative w-11 h-11 rounded-full border border-line-light dark:border-line-dark flex items-center justify-center text-[var(--fg)] hover:border-signal transition-colors duration-300"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}
