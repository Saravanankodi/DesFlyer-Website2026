import { useEffect, useState } from 'react'

import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore'

import AdminDataTable from '../../components/admin/AdminDataTable'
import { db } from '../../firebase'

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
    fetchContactMessages()
  }, [])

  async function fetchContactMessages() {
    try {
      setLoading(true)

      const messagesQuery = query(
        collection(db, 'contactMessage'),
        orderBy('createdAt', 'desc')
      )

      const snapshot = await getDocs(messagesQuery)

      const data = snapshot.docs.map((document) => {
        const item = document.data()

        return {
          id: document.id,
          name: item.name || '—',
          email: item.email || '—',
          phone: item.phone || '—',
          subject: item.subject || '—',
          message: item.message || '',
          date: item.createdAt?.toDate
            ? item.createdAt.toDate().toLocaleString('en-IN')
            : '—',
          status: item.status || 'Unread',
        }
      })

      setMessages(data)
    } catch (error) {
      console.error('Error fetching contact messages:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleStatusChange(id, status) {
    try {
      // Update UI immediately
      setMessages((prev) =>
        prev.map((message) =>
          message.id === id
            ? { ...message, status }
            : message
        )
      )

      // Update Firebase
      await updateDoc(doc(db, 'contactMessage', id), {
        status,
      })
    } catch (error) {
      console.error('Error updating message status:', error)

      // Reload data if Firebase update fails
      fetchContactMessages()
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this message?')) return

    try {
      await deleteDoc(doc(db, 'contactMessage', id))

      setMessages((prev) =>
        prev.filter((message) => message.id !== id)
      )
    } catch (error) {
      console.error('Error deleting contact message:', error)
    }
  }

  return (
    <div className="p-6 lg:p-10">
      <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)] mb-2">
        Contact Messages
      </h1>

      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Messages submitted through the site contact form.
      </p>

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