import { useEffect, useState } from 'react'
import AdminDataTable from '../../components/admin/AdminDataTable'
import ViewApplicationModal from '../../components/admin/ViewApplicationModal'
import { api } from '../../lib/api'

const columns = [
  { key: 'name', label: 'Applicant Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'positionApplied', label: 'Position Applied' },
  { key: 'experience', label: 'Experience' },
  { key: 'date', label: 'Applied Date' },
  { key: 'status', label: 'Status' },
]

const viewFields = [
  { key: 'name', label: 'Applicant Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'positionApplied', label: 'Position Applied' },
  { key: 'experience', label: 'Experience' },
  { key: 'date', label: 'Applied Date' },
  { key: 'status', label: 'Status' },
  { key: 'resumeFileName', label: 'Resume File' },
]

const statusOptions = ['Pending', 'Reviewed', 'Shortlisted', 'Interview', 'Selected', 'Rejected']

export default function JobApplicationsPage() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewing, setViewing] = useState(null)

  useEffect(() => {
    api.getJobApplications().then((data) => {
      setRows(data)
      setLoading(false)
    })
  }, [])

  async function handleStatusChange(id, status) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)))
    await api.updateJobStatus(id, status)
  }

  return (
    <div className="p-6 lg:p-10">
      <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)] mb-2">Job Applications</h1>
      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Resume download is disabled until file storage is connected — file names are shown for reference.
      </p>

      {loading ? (
        <div className="h-64 rounded-2xl border border-[var(--border)] animate-pulse bg-[var(--surface-2)]" />
      ) : (
        <AdminDataTable
          rows={rows}
          columns={columns}
          searchKeys={['name', 'email', 'phone', 'positionApplied']}
          statusOptions={statusOptions}
          onStatusChange={handleStatusChange}
          onView={setViewing}
          resumeKey="resumeFileName"
          exportFilename="job-applications"
        />
      )}

      {viewing && <ViewApplicationModal data={viewing} fields={viewFields} onClose={() => setViewing(null)} />}
    </div>
  )
}
