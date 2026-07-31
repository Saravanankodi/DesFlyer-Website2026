import { useSyncExternalStore } from 'react'
import { createStore } from './createStore'
import { seedInternshipOpenings, seedJobOpenings } from '../data/openingsSeed'

const internshipStore = createStore(seedInternshipOpenings)
const jobStore = createStore(seedJobOpenings)

function nextId(prefix, list) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}

// --- Hooks: subscribe components to live store state (real sync, same session) ---
export function useInternshipOpenings() {
  return useSyncExternalStore(internshipStore.subscribe, internshipStore.getState)
}

export function useJobOpenings() {
  return useSyncExternalStore(jobStore.subscribe, jobStore.getState)
}

// Plain (non-hook) snapshot getters, for use outside React components (e.g. api.js).
export function getInternshipOpeningsSnapshot() {
  return internshipStore.getState()
}
export function getJobOpeningsSnapshot() {
  return jobStore.getState()
}

// --- Mutations: single source of truth, used by Admin CRUD screens ---
export const openingsApi = {
  addInternship(data) {
    const entry = { ...data, id: nextId('int-op'), dateCreated: new Date().toISOString().slice(0, 10) }
    internshipStore.setState((list) => [entry, ...list])
    return entry
  },
  updateInternship(id, patch) {
    internshipStore.setState((list) => list.map((item) => (item.id === id ? { ...item, ...patch } : item)))
  },
  deleteInternship(id) {
    internshipStore.setState((list) => list.filter((item) => item.id !== id))
  },

  addJob(data) {
    const entry = { ...data, id: nextId('job-op'), dateCreated: new Date().toISOString().slice(0, 10) }
    jobStore.setState((list) => [entry, ...list])
    return entry
  },
  updateJob(id, patch) {
    jobStore.setState((list) => list.map((item) => (item.id === id ? { ...item, ...patch } : item)))
  },
  deleteJob(id) {
    jobStore.setState((list) => list.filter((item) => item.id !== id))
  },
}
