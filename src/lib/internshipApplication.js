import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'


export const submitInternshipApplication = async (form) => {
  const applicationData = {
    type: 'internship',

    fullName: form.fullName.trim(),
    mobile: form.mobile.trim(),
    email: form.email.trim(),
    dateOfBirth: form.dateOfBirth,
    gender: form.gender,

    college: form.college.trim(),
    degree: form.degree.trim(),
    department: form.department.trim(),
    graduationYear: form.graduationYear,
    experience: form.experience,

    skills: form.skills.trim(),
    portfolio: form.portfolio.trim(),
    linkedin: form.linkedin.trim(),

    resumeLink: form.resumeLink.trim(),

    coverLetter: form.coverLetter.trim(),

    status: 'New',
    submittedAt: serverTimestamp(),
  }

  const docRef = await addDoc(
    collection(db, 'internshipApplications'),
    applicationData
  )

  return docRef.id
}