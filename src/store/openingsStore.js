import { useSyncExternalStore } from 'react'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'

import { db } from '../firebase'

const applicationsCollection = collection(db, 'Application')

let applicationsState = []

const listeners = new Set()

// --------------------------------------------------
// Firestore realtime listener
// --------------------------------------------------

onSnapshot(
  query(
    applicationsCollection,
    orderBy('createdAt', 'desc')
  ),
  (snapshot) => {
    applicationsState = snapshot.docs.map((item) => {
      const data = item.data()

      return {
        id: item.id,
        ...data,

        dateCreated: data.createdAt?.toDate
          ? data.createdAt.toDate().toISOString().slice(0, 10)
          : '',
      }
    })

    listeners.forEach((listener) => listener())
  },
  (error) => {
    console.error('Failed to load applications:', error)
  }
)

// --------------------------------------------------
// All applications
// --------------------------------------------------

export function useApplications() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)

      return () => {
        listeners.delete(listener)
      }
    },
    () => applicationsState,
    () => applicationsState
  )
}

// --------------------------------------------------
// Internship
// --------------------------------------------------

export function useInternshipOpenings() {
  const applications = useApplications()

  return applications.filter(
    (item) => item.type === 'internship'
  )
}

// --------------------------------------------------
// Jobs
// --------------------------------------------------

export function useJobOpenings() {
  const applications = useApplications()

  return applications.filter(
    (item) => item.type === 'job'
  )
}

// --------------------------------------------------
// Create
// --------------------------------------------------

export async function addApplication(data) {
  const ref = await addDoc(applicationsCollection, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

  return ref.id
}

// --------------------------------------------------
// Update
// --------------------------------------------------

export async function updateApplication(id, data) {
  const applicationRef = doc(
    db,
    'Application',
    id
  )

  await updateDoc(applicationRef, {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

// --------------------------------------------------
// Delete
// --------------------------------------------------

export async function deleteApplication(id) {
  const applicationRef = doc(
    db,
    'Application',
    id
  )

  await deleteDoc(applicationRef)
}
