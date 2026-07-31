import { useEffect, useState } from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { api } from '../../lib/api'
import Button from '../../components/ui/Button'

export default function TeamManagementPage() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    api.getTeamMembers().then(setTeam)
  }, [])

  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)]">Team Management</h1>
        <Button className="px-5 py-2.5" disabled title="Connect a backend to add real admin users">
          <FiUserPlus /> Add Member
        </Button>
      </div>
      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Role-based access control needs a real backend to enforce — this view shows the intended structure.
      </p>

      <div className="border border-[var(--border)] rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)]/50 px-5 py-4">Name</th>
              <th className="text-left font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)]/50 px-5 py-4">Role</th>
              <th className="text-left font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)]/50 px-5 py-4">Email</th>
              <th className="text-left font-mono text-xs uppercase tracking-[0.08em] text-[var(--fg)]/50 px-5 py-4">Access Level</th>
            </tr>
          </thead>
          <tbody>
            {team.map((m) => (
              <tr key={m.id} className="border-b border-[var(--border)] last:border-0">
                <td className="px-5 py-4 text-[var(--fg)]/80">{m.name}</td>
                <td className="px-5 py-4 text-[var(--fg)]/80">{m.role}</td>
                <td className="px-5 py-4 text-[var(--fg)]/80">{m.email}</td>
                <td className="px-5 py-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-signal/15 text-signal">{m.access}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
