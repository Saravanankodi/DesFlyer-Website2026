import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiEdit2, FiTrash2, FiMapPin, FiBriefcase, FiUsers } from 'react-icons/fi'
import Button from '../../components/ui/Button'
import OpeningFormModal from '../../components/admin/OpeningFormModal'
import { useJobOpenings, openingsApi } from '../../store/openingsStore'
import { jobOpeningFields } from '../../data/openingFormFields'

export default function JobDetailsPage() {
  const openings = useJobOpenings()
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)

  function openCreate() {
    setEditing(null)
    setModalOpen(true)
  }
  function openEdit(item) {
    setEditing(item)
    setModalOpen(true)
  }
  function handleSave(values) {
    if (editing) {
      openingsApi.updateJob(editing.id, values)
    } else {
      openingsApi.addJob(values)
    }
    setModalOpen(false)
  }
  function handleDelete(id) {
    if (!confirm('Delete this job opening? This will remove it from the website immediately.')) return
    openingsApi.deleteJob(id)
  }

  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)]">Job Details</h1>
        <Button onClick={openCreate} className="px-5 py-2.5">
          <FiPlus /> Add Job
        </Button>
      </div>
      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Changes here sync live to the public Jobs page — this is a real shared store, not a mock.
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
                <h3 className="font-display font-semibold text-lg text-[var(--fg)]">{item.title}</h3>
                <span
                  className={`text-[10px] font-mono uppercase px-2 py-1 rounded-full shrink-0 ${
                    item.status === 'Open' ? 'bg-signal/15 text-signal' : 'bg-[var(--fg)]/10 text-[var(--fg)]/50'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-xs text-[var(--fg)]/50 mt-1">{item.department} &middot; {item.experience}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4 text-xs font-mono text-[var(--fg)]/50">
                <span className="flex items-center gap-1.5"><FiBriefcase size={12} /> {item.employmentType}</span>
                <span className="flex items-center gap-1.5"><FiMapPin size={12} /> {item.location}</span>
                <span className="flex items-center gap-1.5"><FiUsers size={12} /> {item.openings} openings</span>
              </div>
              {item.salary && <p className="text-xs text-[var(--fg)]/50 mt-2">{item.salary}</p>}
              <p className="text-xs text-[var(--fg)]/35 mt-2 font-mono">Created {item.dateCreated}</p>
              <div className="flex gap-2 mt-5 pt-5 border-t border-[var(--border)]">
                <button
                  onClick={() => openEdit(item)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--fg)]/70 hover:border-signal hover:text-signal transition-colors"
                >
                  <FiEdit2 size={13} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--fg)]/70 hover:border-red-400 hover:text-red-400 transition-colors"
                >
                  <FiTrash2 size={13} /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {modalOpen && (
        <OpeningFormModal
          title={editing ? 'Edit Job' : 'Add Job'}
          fields={jobOpeningFields}
          initialValues={editing}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}
