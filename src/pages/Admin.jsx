import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiLock } from 'react-icons/fi'
import Seo from '../lib/Seo'
import Button from '../components/ui/Button'
import AdminSidebar from '../components/admin/AdminSidebar'
import { AdminAuthProvider, useAdminAuth } from '../hooks/useAdminAuth'
import DashboardHome from './admin/DashboardHome'
import AnalyticsPage from './admin/AnalyticsPage'
import ContactMessagesPage from './admin/ContactMessagesPage'
import InternshipDetailsPage from './admin/InternshipDetailsPage'
import InternshipApplicationsPage from './admin/InternshipApplicationsPage'
import JobDetailsPage from './admin/JobDetailsPage'
import JobApplicationsPage from './admin/JobApplicationsPage'
import TeamManagementPage from './admin/TeamManagementPage'
import SettingsPage from './admin/SettingsPage'

function LoginForm() {
  const { login, error, loading } = useAdminAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[var(--bg)]">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full max-w-sm border border-[var(--border)] rounded-2xl p-8"
      >
        <div className="w-12 h-12 rounded-full bg-signal/10 text-signal flex items-center justify-center">
          <FiLock size={18} />
        </div>
        <h1 className="font-display font-semibold text-2xl mt-5 text-[var(--fg)]">Admin Login</h1>
        <p className="text-sm text-[var(--fg)]/50 mt-1">Mock auth — swap in api.js once a backend exists.</p>

        <div className="mt-6 flex flex-col gap-5">
          <div>
            <label htmlFor="admin-email" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@desflyer.in"
              className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none"
            />
          </div>
          <div>
            <label htmlFor="admin-password" className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg)]/60">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full bg-transparent border-b border-[var(--border)] py-2.5 text-[var(--fg)] focus:border-signal outline-none"
            />
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        <Button type="submit" disabled={loading} className="mt-7 w-full">
          {loading ? 'Signing in…' : 'Sign In'}
        </Button>

        <p className="mt-5 text-xs text-[var(--fg)]/35 font-mono">
          Demo: admin@desflyer.in / desflyer2026
        </p>
      </motion.form>
    </div>
  )
}

function AdminShell() {
  const { isAuthed } = useAdminAuth()

  if (!isAuthed) return <LoginForm />

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[var(--bg)]">
      <AdminSidebar />
      <div className="flex-1 min-w-0">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="messages" element={<ContactMessagesPage />} />
          <Route path="internships/details" element={<InternshipDetailsPage />} />
          <Route path="internships/applications" element={<InternshipApplicationsPage />} />
          <Route path="jobs/details" element={<JobDetailsPage />} />
          <Route path="jobs/applications" element={<JobApplicationsPage />} />
          <Route path="team" element={<TeamManagementPage />} />
          <Route path="settings" element={<SettingsPage />} />
          {/* Legacy shortcuts redirect to the new split pages */}
          <Route path="internships" element={<Navigate to="/admin/internships/details" replace />} />
          <Route path="jobs" element={<Navigate to="/admin/jobs/details" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default function Admin() {
  return (
    <>
      <Seo title="Admin" description="DesFlyer admin panel." path="/admin" />
      <AdminAuthProvider>
        <AdminShell />
      </AdminAuthProvider>
    </>
  )
}
