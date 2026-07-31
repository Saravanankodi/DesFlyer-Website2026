import { createContext, useContext, useState, useCallback } from 'react'
import { api } from '../lib/api'

const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (email, password) => {
    setLoading(true)
    setError(null)
    const result = await api.adminLogin({ email, password })
    setLoading(false)
    if (result.success) {
      setToken(result.token)
    } else {
      setError(result.error)
    }
    return result.success
  }, [])

  const logout = useCallback(() => setToken(null), [])

  return (
    <AdminAuthContext.Provider value={{ isAuthed: !!token, login, logout, error, loading }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider')
  return ctx
}
