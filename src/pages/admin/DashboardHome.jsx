import { useEffect, useState } from 'react'
import {
  FiEye,
  FiMail,
  FiUsers,
  FiBriefcase,
  FiUserCheck,
  FiUserX,
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi'

import {
  collection,
  getDocs,
} from 'firebase/firestore'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

import { db } from '../../firebase'
import StatCard from '../../components/admin/StatCard'

export default function DashboardHome() {
  const [summary, setSummary] = useState(null)
  const [analytics, setAnalytics] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true)
        setError(null)

        // Fetch the three collections separately.
        // This makes it easier to identify which
        // collection has a permission problem.

        const applicationSnapshot = await getDocs(
          collection(db, 'Application')
        )

        const internshipApplicationSnapshot = await getDocs(
          collection(db, 'internshipApplications')
        )

        const jobApplicationSnapshot = await getDocs(
          collection(db, 'jobApplications')
        )

        const applications =
          applicationSnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))

        const internshipApplications =
          internshipApplicationSnapshot.docs

        const jobApplications =
          jobApplicationSnapshot.docs


        // --------------------------------
        // INTERNSHIP OPENINGS
        // --------------------------------

        const internshipOpenings =
          applications.filter(
            (item) => item.type === 'internship'
          )

        const activeInternshipOpenings =
          internshipOpenings.filter(
            (item) => item.status === 'Open'
          )

        const closedInternshipOpenings =
          internshipOpenings.filter(
            (item) => item.status !== 'Open'
          )


        // --------------------------------
        // JOB OPENINGS
        // --------------------------------

        const jobOpenings =
          applications.filter(
            (item) => item.type === 'job'
          )

        const activeJobOpenings =
          jobOpenings.filter(
            (item) => item.status === 'Open'
          )

        const closedJobOpenings =
          jobOpenings.filter(
            (item) => item.status !== 'Open'
          )


        // --------------------------------
        // SUMMARY
        // --------------------------------

        setSummary({
          totalInternshipOpenings:
            internshipOpenings.length,

          activeInternshipOpenings:
            activeInternshipOpenings.length,

          closedInternshipOpenings:
            closedInternshipOpenings.length,

          internshipApplications:
            internshipApplications.length,

          totalJobOpenings:
            jobOpenings.length,

          activeJobOpenings:
            activeJobOpenings.length,

          closedJobOpenings:
            closedJobOpenings.length,

          jobApplications:
            jobApplications.length,

          // Contact messages are not queried because
          // that collection is currently blocked by
          // your Firestore rules.
          contactEnquiries: 0,

          // Analytics will be connected separately.
          totalVisitors: 0,
        })


        setAnalytics({
          dailyVisitors: [],
          monthlyVisitors: [],
        })

      } catch (err) {
        console.error(
          'Dashboard loading error:',
          err
        )

        setError(
          'Unable to load dashboard data. Check Firestore permissions.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])


  const stats = summary && [
    {
      icon: FiUsers,
      label: 'Total Internship Openings',
      value: summary.totalInternshipOpenings,
      demo: false,
    },

    {
      icon: FiCheckCircle,
      label: 'Active Internship Openings',
      value: summary.activeInternshipOpenings,
      demo: false,
    },

    {
      icon: FiXCircle,
      label: 'Closed Internship Openings',
      value: summary.closedInternshipOpenings,
      demo: false,
    },

    {
      icon: FiUserCheck,
      label: 'Internship Applications',
      value: summary.internshipApplications,
      demo: false,
    },

    {
      icon: FiBriefcase,
      label: 'Total Job Openings',
      value: summary.totalJobOpenings,
      demo: false,
    },

    {
      icon: FiCheckCircle,
      label: 'Active Job Openings',
      value: summary.activeJobOpenings,
      demo: false,
    },

    {
      icon: FiXCircle,
      label: 'Closed Job Openings',
      value: summary.closedJobOpenings,
      demo: false,
    },

    {
      icon: FiUserX,
      label: 'Job Applications',
      value: summary.jobApplications,
      demo: false,
    },

    {
      icon: FiEye,
      label: 'Website Visitors',
      value: summary.totalVisitors,
      demo: true,
    },

    {
      icon: FiMail,
      label: 'Contact Enquiries',
      value: summary.contactEnquiries,
      demo: false,
    },
  ]


  return (
    <div className="p-6 lg:p-10">

      <div className="flex items-center justify-between mb-2">
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)]">
          Dashboard
        </h1>
      </div>

      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Openings and applications counts are loaded
        from Firebase Firestore.
      </p>


      {error && (
        <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-sm">
          {error}
        </div>
      )}


      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

        {loading &&
          Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-32 rounded-2xl border border-[var(--border)] animate-pulse bg-[var(--surface-2)]"
            />
          ))}

        {stats?.map((s) => (
          <StatCard
            key={s.label}
            {...s}
          />
        ))}

      </div>


      {analytics && (
        <div className="grid lg:grid-cols-2 gap-5">

          <div className="border border-[var(--border)] rounded-2xl p-6">

            <h2 className="font-display font-semibold text-base text-[var(--fg)] mb-5">
              Daily Visitors (This Week)
            </h2>

            <div className="h-[240px] flex items-center justify-center text-sm text-[var(--fg)]/40">
              No visitor analytics available yet.
            </div>

          </div>


          <div className="border border-[var(--border)] rounded-2xl p-6">

            <h2 className="font-display font-semibold text-base text-[var(--fg)] mb-5">
              Monthly Visitors
            </h2>

            <div className="h-[240px] flex items-center justify-center text-sm text-[var(--fg)]/40">
              No visitor analytics available yet.
            </div>

          </div>

        </div>
      )}

    </div>
  )
}
