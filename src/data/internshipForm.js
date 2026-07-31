export const internshipFormSections = [
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
      { name: 'tpoName', label: 'TPO Name', type: 'text', required: false },
      { name: 'tpoEmail', label: 'TPO Email', type: 'email', required: false },
      { name: 'tpoContact', label: 'TPO Contact Number', type: 'tel', required: false },
    ],
  },
  {
    title: 'Internship Details',
    fields: [
      {
        name: 'domain',
        label: 'Domain',
        type: 'select',
        required: true,
        options: ['Frontend Development', 'Backend Development', 'UI/UX Design', 'Digital Marketing', 'Other'],
      },
      {
        name: 'contactMethod',
        label: 'Preferred Contact Method',
        type: 'radio',
        required: true,
        options: ['Email', 'Phone', 'WhatsApp'],
      },
      { name: 'resume', label: 'Resume Upload', type: 'file', required: true, fullWidth: true },
      {
        name: 'duration',
        label: 'Duration',
        type: 'select',
        required: true,
        options: ['1 month', '2 months', '3 months', '6 months'],
      },
      {
        name: 'referralSource',
        label: 'Where did you hear about us?',
        type: 'select',
        required: false,
        options: ['LinkedIn', 'Instagram', 'College/TPO', 'Friend/Referral', 'Google Search', 'Other'],
      },
      {
        name: 'priorExperience',
        label: 'Previous Internship Experience',
        type: 'textarea',
        required: false,
        fullWidth: true,
        rows: 3,
        placeholder: 'Briefly describe any previous internships (optional)',
      },
    ],
  },
]
