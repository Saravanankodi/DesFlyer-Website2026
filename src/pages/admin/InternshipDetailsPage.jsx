import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiMapPin,
  FiClock,
  FiUsers,
} from 'react-icons/fi'

import Button from '../../components/ui/Button'
import OpeningFormModal from '../../components/admin/OpeningFormModal'

import {
  useInternshipOpenings,
  addApplication,
  updateApplication,
  deleteApplication,
} from '../../store/openingsStore'

import { internshipOpeningFields } from '../../data/openingFormFields'

export default function InternshipDetailsPage() {
  const openings = useInternshipOpenings()

  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)

  function openCreate() {
    setEditing(null)
    setModalOpen(true)
  }

  function openEdit(item) {
    setEditing(item)
    setModalOpen(true)
  }

  async function handleSave(values) {
    try {
      setSaving(true)

      const data = {
        ...values,
        type: 'internship',
      }

      if (editing) {
        await updateApplication(editing.id, data)
      } else {
        await addApplication(data)
      }

      setModalOpen(false)
      setEditing(null)
    } catch (error) {
      console.error('Failed to save internship:', error)
      alert('Failed to save internship. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      'Delete this internship opening? This will remove it from the website immediately.'
    )

    if (!confirmed) return

    try {
      await deleteApplication(id)
    } catch (error) {
      console.error('Failed to delete internship:', error)
      alert('Failed to delete internship. Please try again.')
    }
  }

  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)]">
          Internship Details
        </h1>

        <Button
          onClick={openCreate}
          className="px-5 py-2.5"
          disabled={saving}
        >
          <FiPlus /> Add Internship
        </Button>
      </div>

      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Changes here sync live to the public Internship page.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {openings.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="border border-[var(--border)] rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display font-semibold text-lg text-[var(--fg)]">
                  {item.title}
                </h3>

                <span
                  className={`text-[10px] font-mono uppercase px-2 py-1 rounded-full shrink-0 ${
                    item.status === 'Open'
                      ? 'bg-signal/15 text-signal'
                      : 'bg-[var(--fg)]/10 text-[var(--fg)]/50'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-[var(--fg)]/50 mt-1">
                {item.department}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4 text-xs font-mono text-[var(--fg)]/50">
                <span className="flex items-center gap-1.5">
                  <FiClock size={12} />
                  {item.duration}
                </span>

                <span className="flex items-center gap-1.5">
                  <FiMapPin size={12} />
                  {item.location}
                </span>

                <span className="flex items-center gap-1.5">
                  <FiUsers size={12} />
                  {item.openings} openings
                </span>
              </div>

              <p className="text-xs text-[var(--fg)]/35 mt-2 font-mono">
                Last Date: {item.lastDateToApply || '-'}
              </p>

              <p className="text-xs text-[var(--fg)]/35 mt-1 font-mono">
                Created {item.dateCreated || '-'}
              </p>

              <div className="flex gap-2 mt-5 pt-5 border-t border-[var(--border)]">
                <button
                  onClick={() => openEdit(item)}
                  disabled={saving}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--fg)]/70 hover:border-signal hover:text-signal transition-colors disabled:opacity-50"
                >
                  <FiEdit2 size={13} />
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  disabled={saving}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--fg)]/70 hover:border-red-400 hover:text-red-400 transition-colors disabled:opacity-50"
                >
                  <FiTrash2 size={13} />
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {openings.length === 0 && (
        <div className="text-center py-16 text-sm text-[var(--fg)]/40">
          No internship openings found.
        </div>
      )}

      {modalOpen && (
        <OpeningFormModal
          title={editing ? 'Edit Internship' : 'Add Internship'}
          fields={internshipOpeningFields}
          initialValues={editing}
          onSave={handleSave}
          onClose={() => {
            if (!saving) {
              setModalOpen(false)
              setEditing(null)
            }
          }}
        />
      )}
    </div>
  )
}
