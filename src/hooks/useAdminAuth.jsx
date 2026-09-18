import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase'



const AdminAuthContext = createContext(null)

export function AdminAuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = useCallback(async (email, password) => {
    setLoading(true)
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      return true
    } catch (err) {
      console.error('Firebase login error:', err)

      let message = 'Unable to sign in.'

      switch (err.code) {
        case 'auth/invalid-credential':
          message = 'Invalid email or password.'
          break

        case 'auth/user-not-found':
          message = 'No account found with this email.'
          break

        case 'auth/wrong-password':
          message = 'Incorrect password.'
          break

        case 'auth/invalid-email':
          message = 'Please enter a valid email address.'
          break

        case 'auth/too-many-requests':
          message = 'Too many login attempts. Please try again later.'
          break

        default:
          message = err.message || message
      }

      setError(message)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    setError(null)

    try {
      await signOut(auth)
    } catch (err) {
      console.error('Firebase logout error:', err)
      setError('Unable to sign out.')
    }
  }, [])

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        isAuthed: !!user,
        login,
        logout,
        error,
        loading,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext)

  if (!ctx) {
    throw new Error(
      'useAdminAuth must be used within AdminAuthProvider'
    )
  }

  return ctx
}