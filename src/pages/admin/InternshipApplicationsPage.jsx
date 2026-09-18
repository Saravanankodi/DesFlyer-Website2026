import { useEffect, useState } from 'react'

import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
} from 'firebase/firestore'

import AdminDataTable from '../../components/admin/AdminDataTable'
import ViewApplicationModal from '../../components/admin/ViewApplicationModal'
import { db } from '../../firebase'

const columns = [
  { key: 'name', label: 'Applicant Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'college', label: 'College' },
  { key: 'internshipApplied', label: 'Internship Applied' },
  { key: 'date', label: 'Applied Date' },
  { key: 'status', label: 'Status' },
]

const viewFields = [
  { key: 'name', label: 'Applicant Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'college', label: 'College' },
  { key: 'internshipApplied', label: 'Internship Applied' },
  { key: 'date', label: 'Applied Date' },
  { key: 'status', label: 'Status' },
  { key: 'resumeLink', label: 'Resume' },
]

const statusOptions = [
  'Pending',
  'Reviewed',
  'Shortlisted',
  'Interview Scheduled',
  'Selected',
  'Rejected',
]

export default function InternshipApplicationsPage() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewing, setViewing] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('Fetching internship applications...')

    const applicationsRef = collection(
      db,
      'internshipApplications'
    )

    const unsubscribe = onSnapshot(
      applicationsRef,
      (snapshot) => {
        console.log(
          'Number of applications:',
          snapshot.size
        )

        const data = snapshot.docs.map((document) => {
          const item = document.data()

          console.log(
            'Application:',
            document.id,
            item
          )

          // Convert Firestore timestamp if available
          let appliedDate = ''

          if (item.submittedAt) {
            if (
              typeof item.submittedAt.toDate ===
              'function'
            ) {
              appliedDate =
                item.submittedAt
                  .toDate()
                  .toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })
            } else {
              appliedDate = String(
                item.submittedAt
              )
            }
          }

          return {
            id: document.id,

            // Firestore -> Table field mapping
            name: item.fullName || '',
            email: item.email || '',
            phone: item.mobile || '',
            college: item.college || '',

            internshipApplied:
              item.internshipApplied ||
              item.internship ||
              'Internship',

            date: appliedDate,

            status: item.status || 'Pending',

            // Resume Google Drive URL
            resumeLink:
              item.resumeLink || '',

            // Keep all original Firestore fields
            ...item,

            // Re-apply table fields because ...item
            // may contain different field names
            name: item.fullName || '',
            phone: item.mobile || '',
            internshipApplied:
              item.internshipApplied ||
              item.internship ||
              'Internship',
            date: appliedDate,
            status: item.status || 'Pending',
            resumeLink:
              item.resumeLink || '',
          }
        })

        setRows(data)
        setLoading(false)
        setError(null)
      },
      (error) => {
        console.error(
          'Firestore fetch error:',
          error
        )

        setError(
          `Failed to load internship applications: ${
            error.message || 'Unknown error'
          }`
        )

        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  async function handleStatusChange(id, status) {
    console.log(
      'Updating status:',
      id,
      status
    )

    // Optimistic update
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? { ...row, status }
          : row
      )
    )

    try {
      const applicationRef = doc(
        db,
        'internshipApplications',
        id
      )

      await updateDoc(applicationRef, {
        status,
      })

      console.log(
        'Status updated successfully'
      )
    } catch (error) {
      console.error(
        'Failed to update application status:',
        error
      )

      alert(
        'Failed to update application status. Please try again.'
      )
    }
  }

  return (
    <div className="p-6 lg:p-10">

      <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)] mb-2">
        Internship Applications
      </h1>

      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Internship applications submitted by applicants.
      </p>

      {error && (
        <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      {loading ? (
        <div className="h-64 rounded-2xl border border-[var(--border)] animate-pulse bg-[var(--surface-2)]" />
      ) : (
        <AdminDataTable
          rows={rows}
          columns={columns}
          searchKeys={[
            'name',
            'email',
            'phone',
            'college',
            'internshipApplied',
          ]}
          statusOptions={statusOptions}
          onStatusChange={handleStatusChange}
          onView={setViewing}
          resumeKey="resumeLink"
          exportFilename="internship-applications"
        />
      )}

      {viewing && (
        <ViewApplicationModal
          data={viewing}
          fields={viewFields}
          onClose={() =>
            setViewing(null)
          }
        />
      )}

    </div>
  )
}