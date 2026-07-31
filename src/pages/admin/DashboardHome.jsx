import { useEffect, useState } from 'react'
import {
  FiEye, FiMail, FiUsers, FiBriefcase, FiUserCheck, FiUserX, FiCheckCircle, FiXCircle,
} from 'react-icons/fi'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import StatCard from '../../components/admin/StatCard'
import { api } from '../../lib/api'

export default function DashboardHome() {
  const [summary, setSummary] = useState(null)
  const [analytics, setAnalytics] = useState(null)

  useEffect(() => {
    api.getDashboardSummary().then(setSummary)
    api.getAnalytics().then(setAnalytics)
  }, [])

  const stats = summary && [
    { icon: FiUsers, label: 'Total Internship Openings', value: summary.totalInternshipOpenings, demo: false },
    { icon: FiCheckCircle, label: 'Active Internship Openings', value: summary.activeInternshipOpenings, demo: false },
    { icon: FiXCircle, label: 'Closed Internship Openings', value: summary.closedInternshipOpenings, demo: false },
    { icon: FiUserCheck, label: 'Internship Applications', value: summary.internshipApplications, demo: false },
    { icon: FiBriefcase, label: 'Total Job Openings', value: summary.totalJobOpenings, demo: false },
    { icon: FiCheckCircle, label: 'Active Job Openings', value: summary.activeJobOpenings, demo: false },
    { icon: FiXCircle, label: 'Closed Job Openings', value: summary.closedJobOpenings, demo: false },
    { icon: FiUserX, label: 'Job Applications', value: summary.jobApplications, demo: false },
    { icon: FiEye, label: 'Website Visitors', value: summary.totalVisitors, demo: true },
    { icon: FiMail, label: 'Contact Enquiries', value: summary.contactEnquiries, demo: false },
  ]

  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)]">Dashboard</h1>
      </div>
      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Openings and applications counts are real (from live admin data). Visitor stats are marked{' '}
        <span className="font-mono text-[10px] border border-[var(--border)] rounded-full px-2 py-0.5">Demo</span> until
        real analytics tracking is connected.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {!summary &&
          Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-32 rounded-2xl border border-[var(--border)] animate-pulse bg-[var(--surface-2)]" />
          ))}
        {stats?.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {analytics && (
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="border border-[var(--border)] rounded-2xl p-6">
            <h2 className="font-display font-semibold text-base text-[var(--fg)] mb-5">Daily Visitors (This Week)</h2>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={analytics.dailyVisitors}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} width={32} />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="visitors" stroke="#2E6FFF" strokeWidth={2.5} dot={{ r: 3, fill: '#2E6FFF' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="border border-[var(--border)] rounded-2xl p-6">
            <h2 className="font-display font-semibold text-base text-[var(--fg)] mb-5">Monthly Visitors</h2>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={analytics.monthlyVisitors}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} width={40} />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="visitors" fill="#2E6FFF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}
