import { useEffect, useState } from 'react'
import AdminDataTable from '../../components/admin/AdminDataTable'
import { api } from '../../lib/api'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'subject', label: 'Subject' },
  { key: 'date', label: 'Date' },
  { key: 'status', label: 'Status' },
]

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getContactMessages().then((data) => {
      setMessages(data)
      setLoading(false)
    })
  }, [])

  async function handleStatusChange(id, status) {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)))
    await api.updateContactMessageStatus(id, status)
  }

  async function handleDelete(id) {
    if (!confirm('Delete this message?')) return
    setMessages((prev) => prev.filter((m) => m.id !== id))
    await api.deleteContactMessage(id)
  }

  return (
    <div className="p-6 lg:p-10">
      <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)] mb-2">Contact Messages</h1>
      <p className="text-sm text-[var(--fg)]/50 mb-8">Messages submitted through the site contact form.</p>

      {loading ? (
        <div className="h-64 rounded-2xl border border-[var(--border)] animate-pulse bg-[var(--surface-2)]" />
      ) : (
        <AdminDataTable
          rows={messages}
          columns={columns}
          searchKeys={['name', 'email', 'subject', 'message']}
          statusOptions={['Unread', 'Read']}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
          exportFilename="contact-messages"
        />
      )}
    </div>
  )
}
