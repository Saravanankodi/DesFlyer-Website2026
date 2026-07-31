import { NavLink } from 'react-router-dom'
import {
  FiGrid, FiBarChart2, FiMail, FiUsers, FiBriefcase, FiUserCheck, FiSettings, FiLogOut, FiFileText,
} from 'react-icons/fi'
import { useAdminAuth } from '../../hooks/useAdminAuth'

const items = [
  { to: '/admin', label: 'Dashboard', icon: FiGrid, end: true },
  { to: '/admin/analytics', label: 'Website Analytics', icon: FiBarChart2 },
  { to: '/admin/messages', label: 'Contact Messages', icon: FiMail },
  { to: '/admin/internships/details', label: 'Internship Details', icon: FiUsers },
  { to: '/admin/internships/applications', label: 'Internship Applications', icon: FiFileText },
  { to: '/admin/jobs/details', label: 'Job Details', icon: FiBriefcase },
  { to: '/admin/jobs/applications', label: 'Job Applications', icon: FiFileText },
  { to: '/admin/team', label: 'Team Management', icon: FiUserCheck },
  { to: '/admin/settings', label: 'Settings', icon: FiSettings },
]

export default function AdminSidebar() {
  const { logout } = useAdminAuth()

  return (
    <aside className="w-full lg:w-64 shrink-0 lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-[var(--border)] flex lg:flex-col">
      <div className="px-6 py-6 hidden lg:block">
        <span className="font-display font-bold text-xl text-[var(--fg)]">
          DES<span className="text-signal">Flyer</span>
        </span>
        <p className="text-xs text-[var(--fg)]/40 mt-1 font-mono">Admin Panel</p>
      </div>

      <nav className="flex lg:flex-col gap-1 px-3 py-3 lg:py-0 overflow-x-auto lg:overflow-visible flex-1">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm whitespace-nowrap transition-colors ${
                isActive ? 'bg-signal/10 text-signal' : 'text-[var(--fg)]/65 hover:bg-[var(--surface-2)]'
              }`
            }
          >
            <item.icon size={16} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-3 lg:mb-4">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-[var(--fg)]/65 hover:bg-[var(--surface-2)] hover:text-red-400 transition-colors"
        >
          <FiLogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  )
}
