import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'


export const submitJobApplication = async (formData) => {
  const applicationData = {
    type: 'job',

    jobId: formData.jobId || '',
    jobTitle: formData.jobTitle || '',

    fullName: formData.fullName?.trim() || '',
    mobile: formData.mobile?.trim() || '',
    email: formData.email?.trim() || '',

    dateOfBirth: formData.dateOfBirth || '',
    gender: formData.gender || '',

    college: formData.college?.trim() || '',
    degree: formData.degree?.trim() || '',
    department: formData.department?.trim() || '',
    graduationYear: formData.graduationYear || '',

    experience: formData.experience || '',
    skills: formData.skills?.trim() || '',

    portfolio: formData.portfolio?.trim() || '',
    linkedin: formData.linkedin?.trim() || '',

    resumeLink: formData.resumeLink?.trim() || '',
    coverLetter: formData.coverLetter?.trim() || '',

    status: 'New',
    submittedAt: serverTimestamp(),
  }

  const docRef = await addDoc(
    collection(db, 'jobApplications'),
    applicationData
  )

  return docRef.id
}