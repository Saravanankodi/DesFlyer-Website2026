// Mock service layer. Every function here simulates a network call.
// When a real backend exists, replace the internals of these functions
// (keep the same function names/signatures) — no component changes needed.
//
// Data mutated by admin actions (status updates, deletes) lives in
// src/data/adminMock.js as in-memory arrays — it resets on page reload since
// there's no database yet. Analytics numbers are clearly-labeled sample data.

import {
  contactMessages,
  internshipApplications,
  jobApplications,
  teamMembers,
  analyticsDemoData,
} from '../data/adminMock'
import { getInternshipOpeningsSnapshot, getJobOpeningsSnapshot } from '../store/openingsStore'

const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms))

export const api = {
  // --- Public site ---
  async submitApplication(payload) {
    await delay(700)
    console.info('[mock submitApplication]', payload)
    return { success: true, id: `APP-${Date.now()}` }
  },

  async submitContact(payload) {
    await delay(500)
    console.info('[mock submitContact]', payload)
    return { success: true }
  },

  // --- Admin auth ---
  async adminLogin({ email, password }) {
    await delay(400)
    // Mock-only credentials for demo/dev purposes. Replace with real JWT auth on a backend.
    if (email === 'admin@desflyer.in' && password === 'desflyer2026') {
      return { success: true, token: 'mock-token', role: 'Administrator' }
    }
    return { success: false, error: 'Invalid email or password' }
  },

  // --- Admin: dashboard summary + analytics (sample data, clearly demo) ---
  async getDashboardSummary() {
    await delay(400)
    const internshipOpenings = getInternshipOpeningsSnapshot()
    const jobOpenings = getJobOpeningsSnapshot()
    return {
      ...analyticsDemoData.summary,
      contactEnquiries: contactMessages.length,
      internshipApplications: internshipApplications.length,
      jobApplications: jobApplications.length,
      totalInternshipOpenings: internshipOpenings.length,
      activeInternshipOpenings: internshipOpenings.filter((o) => o.status === 'Open').length,
      closedInternshipOpenings: internshipOpenings.filter((o) => o.status === 'Closed').length,
      totalJobOpenings: jobOpenings.length,
      activeJobOpenings: jobOpenings.filter((o) => o.status === 'Open').length,
      closedJobOpenings: jobOpenings.filter((o) => o.status === 'Closed').length,
    }
  },

  async getAnalytics() {
    await delay(500)
    return analyticsDemoData
  },

  // --- Admin: contact messages ---
  async getContactMessages() {
    await delay(400)
    return [...contactMessages]
  },

  async updateContactMessageStatus(id, status) {
    await delay(250)
    const msg = contactMessages.find((m) => m.id === id)
    if (msg) msg.status = status
    return { success: true }
  },

  async deleteContactMessage(id) {
    await delay(250)
    const idx = contactMessages.findIndex((m) => m.id === id)
    if (idx > -1) contactMessages.splice(idx, 1)
    return { success: true }
  },

  // --- Admin: internship applications ---
  async getInternshipApplications() {
    await delay(400)
    return [...internshipApplications]
  },

  async updateInternshipStatus(id, status) {
    await delay(250)
    const app = internshipApplications.find((a) => a.id === id)
    if (app) app.status = status
    return { success: true }
  },

  // --- Admin: job applications ---
  async getJobApplications() {
    await delay(400)
    return [...jobApplications]
  },

  async updateJobStatus(id, status) {
    await delay(250)
    const app = jobApplications.find((a) => a.id === id)
    if (app) app.status = status
    return { success: true }
  },

  // --- Admin: team ---
  async getTeamMembers() {
    await delay(300)
    return [...teamMembers]
  },
}
