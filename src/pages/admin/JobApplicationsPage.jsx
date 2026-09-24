import { useEffect, useState } from 'react'

import {
  collection,
  onSnapshot,
  query,
  orderBy,
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
  { key: 'jobTitle', label: 'Job Applied' },
  { key: 'date', label: 'Applied Date' },
  { key: 'status', label: 'Status' },
]

const viewFields = [
  { key: 'name', label: 'Applicant Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'college', label: 'College' },
  { key: 'degree', label: 'Degree' },
  { key: 'department', label: 'Department' },
  { key: 'graduationYear', label: 'Graduation Year' },
  { key: 'experience', label: 'Experience' },
  { key: 'skills', label: 'Skills' },
  { key: 'jobTitle', label: 'Job Applied' },
  { key: 'date', label: 'Applied Date' },
  { key: 'status', label: 'Status' },
  { key: 'resumeLink', label: 'Resume' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'coverLetter', label: 'Cover Letter' },
]

const statusOptions = [
  'New',
  'Reviewed',
  'Shortlisted',
  'Interview Scheduled',
  'Selected',
  'Rejected',
]

export default function JobApplicationsPage() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewing, setViewing] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('Fetching job applications...')

    // IMPORTANT:
    // This exactly matches your Firestore collection.
    const applicationsRef = collection(
      db,
      'jobApplications'
    )

    // Your job application documents contain submittedAt.
    const q = query(
      applicationsRef,
      orderBy('submittedAt', 'desc')
    )

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log(
          'Number of job applications:',
          snapshot.size
        )

        const data = snapshot.docs.map((document) => {
          const item = document.data()

          console.log(
            'Job application:',
            document.id,
            item
          )

          let appliedDate = ''

          if (item.submittedAt) {
            if (
              typeof item.submittedAt.toDate ===
              'function'
            ) {
              appliedDate = item.submittedAt
                .toDate()
                .toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })
            }
          }

          return {
            id: document.id,

            // Firestore fields → table fields
            name: item.fullName || '',
            email: item.email || '',
            phone: item.mobile || '',
            college: item.college || '',

            jobTitle: item.jobTitle || '',
            jobId: item.jobId || '',

            date: appliedDate,

            status: item.status || 'New',

            resumeLink: item.resumeLink || '',

            // Other application fields
            degree: item.degree || '',
            department: item.department || '',
            graduationYear:
              item.graduationYear || '',
            experience: item.experience || '',
            skills: item.skills || '',
            linkedin: item.linkedin || '',
            portfolio: item.portfolio || '',
            coverLetter: item.coverLetter || '',
            dateOfBirth:
              item.dateOfBirth || '',
            gender: item.gender || '',
            type: item.type || 'job',
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
          `Failed to load job applications: ${
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
      'Updating job application status:',
      id,
      status
    )

    // Optimistic UI update
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
        'jobApplications',
        id
      )

      await updateDoc(applicationRef, {
        status,
      })

      console.log(
        'Job application status updated successfully'
      )
    } catch (error) {
      console.error(
        'Failed to update job application status:',
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
        Job Applications
      </h1>

      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Job applications submitted by applicants.
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
            'jobTitle',
          ]}
          statusOptions={statusOptions}
          onStatusChange={handleStatusChange}
          onView={setViewing}
          resumeKey="resumeLink"
          exportFilename="job-applications"
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