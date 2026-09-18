export const jobFormSections = [
  {
    title: 'Personal Details',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile Number', type: 'tel', required: true, placeholder: '+91 XXXXX XXXXX' },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'gender', label: 'Gender', type: 'radio', required: true, options: ['Male', 'Female', 'Other', 'Prefer not to say'] },
    ],
  },
  {
    title: 'Address Details',
    fields: [
      { name: 'state', label: 'State', type: 'text', required: true },
      { name: 'city', label: 'City', type: 'text', required: true },
      { name: 'address', label: 'Full Address', type: 'textarea', required: true, fullWidth: true, rows: 3 },
      { name: 'pincode', label: 'Pin Code', type: 'pincode', required: true, placeholder: '6-digit pin code' },
    ],
  },
  {
    title: 'Educational Details',
    fields: [
      { name: 'college', label: 'College / University', type: 'text', required: true },
      { name: 'course', label: 'Course Name', type: 'text', required: true },
      {
        name: 'educationLevel',
        label: 'Education Level',
        type: 'select',
        required: true,
        options: ['Diploma', 'Undergraduate', 'Postgraduate', 'Other'],
      },
    ],
  },
  {
    title: 'Job Details',
    fields: [
      {
        name: 'position',
        label: 'Position Applied For',
        type: 'select',
        required: true,
        options: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Other'],
      },
      { name: 'experience', label: 'Years of Experience', type: 'select', required: true, options: ['0 (Fresher)', '1-2 years', '3-5 years', '5+ years'] },
      { name: 'skills', label: 'Skills', type: 'text', required: true, fullWidth: true, placeholder: 'e.g. React, Node.js, Figma' },
      { name: 'currentCompany', label: 'Current Company', type: 'text', required: false },
      { name: 'expectedSalary', label: 'Expected Salary', type: 'text', required: false, placeholder: 'Annual, in \u20b9' },
      { name: 'portfolioUrl', label: 'Portfolio URL', type: 'text', required: false },
      { name: 'linkedin', label: 'LinkedIn Profile', type: 'text', required: false },
      { name: 'github', label: 'GitHub Profile', type: 'text', required: false },
      {
        name: 'noticePeriod',
        label: 'Notice Period',
        type: 'select',
        required: false,
        options: ['Immediate', '15 days', '30 days', '60 days', '90 days'],
      },
      {name: 'resumeLink',label: 'Resume Google Drive Link',type: 'url',placeholder: 'https://drive.google.com/...',required: true,},
      {
        name: 'coverLetter',
        label: 'Cover Letter',
        type: 'textarea',
        required: false,
        fullWidth: true,
        rows: 4,
        placeholder: 'Tell us why you\u2019re a good fit (optional)',
      },
    ],
  },
]
