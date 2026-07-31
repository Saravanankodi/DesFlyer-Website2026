// In-memory mock data for the admin dashboard. Resets on page reload since there's no
// backend/database yet. Every number here is sample/demo data for UI purposes only —
// NOT real analytics. Replace with real API calls once a backend exists.

export let contactMessages = [
  { id: 'MSG-1001', name: 'Ravi Kumar', email: 'ravi.k@example.com', phone: '+91 98765 43210', subject: 'Website quote', message: 'Hi, I need a quote for an e-commerce website for my retail business.', date: '2026-07-20', status: 'Unread' },
  { id: 'MSG-1002', name: 'Priya Sharma', email: 'priya.s@example.com', phone: '+91 91234 56789', subject: 'Mobile app inquiry', message: 'Looking to build an Android app for my delivery service.', date: '2026-07-18', status: 'Read' },
  { id: 'MSG-1003', name: 'Karthik M', email: 'karthik.m@example.com', phone: '+91 99887 66554', subject: 'Portfolio question', message: 'Interested in a project similar to your Kings Hall Booking Software.', date: '2026-07-15', status: 'Unread' },
]

export let internshipApplications = [
  { id: 'INT-2001', name: 'Arun K', email: 'arun.k@example.com', phone: '+91 90000 11122', college: 'Anna University', internshipApplied: 'Frontend Development Intern', date: '2026-07-19', status: 'Pending', resumeFileName: 'arun_resume.pdf' },
  { id: 'INT-2002', name: 'Divya S', email: 'divya.s@example.com', phone: '+91 90000 22233', college: 'SASTRA University', internshipApplied: 'UI/UX Design Intern', date: '2026-07-16', status: 'Shortlisted', resumeFileName: 'divya_resume.pdf' },
  { id: 'INT-2003', name: 'Manoj R', email: 'manoj.r@example.com', phone: '+91 90000 33344', college: 'Bharathidasan University', internshipApplied: 'Digital Marketing Intern', date: '2026-07-12', status: 'Reviewed', resumeFileName: 'manoj_resume.docx' },
]

export let jobApplications = [
  { id: 'JOB-3001', name: 'Priya R', email: 'priya.r@example.com', phone: '+91 90000 44455', positionApplied: 'Frontend Developer', experience: '1-2 years', date: '2026-07-18', status: 'Pending', resumeFileName: 'priya_resume.pdf' },
  { id: 'JOB-3002', name: 'Sneha M', email: 'sneha.m@example.com', phone: '+91 90000 55566', positionApplied: 'Backend Developer', experience: '3-5 years', date: '2026-07-12', status: 'Reviewed', resumeFileName: 'sneha_resume.pdf' },
  { id: 'JOB-3003', name: 'Vignesh T', email: 'vignesh.t@example.com', phone: '+91 90000 66677', positionApplied: 'UI/UX Designer', experience: '0 (Fresher)', date: '2026-07-09', status: 'Rejected', resumeFileName: 'vignesh_resume.docx' },
]

export const teamMembers = [
  { id: 'TM-01', name: 'Admin User', role: 'Administrator', email: 'admin@desflyer.in', access: 'Full Access' },
]

// Sample-only analytics data — clearly demo, for layout/UI purposes.
export const analyticsDemoData = {
  dailyVisitors: [
    { day: 'Mon', visitors: 142 }, { day: 'Tue', visitors: 168 }, { day: 'Wed', visitors: 155 },
    { day: 'Thu', visitors: 190 }, { day: 'Fri', visitors: 210 }, { day: 'Sat', visitors: 130 }, { day: 'Sun', visitors: 98 },
  ],
  monthlyVisitors: [
    { month: 'Feb', visitors: 2400 }, { month: 'Mar', visitors: 2800 }, { month: 'Apr', visitors: 3100 },
    { month: 'May', visitors: 3600 }, { month: 'Jun', visitors: 4200 }, { month: 'Jul', visitors: 4750 },
  ],
  trafficSources: [
    { name: 'Organic Search', value: 42 }, { name: 'Direct', value: 28 }, { name: 'Social', value: 18 }, { name: 'Referral', value: 12 },
  ],
  deviceTypes: [
    { name: 'Mobile', value: 58 }, { name: 'Desktop', value: 36 }, { name: 'Tablet', value: 6 },
  ],
  mostViewedPages: [
    { page: 'Home', views: 3200 }, { page: 'Services', views: 1850 }, { page: 'Portfolio', views: 1420 },
    { page: 'Jobs', views: 980 }, { page: 'Contact', views: 760 },
  ],
  summary: {
    totalVisitors: 18420,
    contactEnquiries: contactMessages.length,
    internshipApplications: internshipApplications.length,
    jobApplications: jobApplications.length,
    portfolioEnquiries: 34,
    aiChatConversations: 212,
    dailyVisitorsToday: 210,
    monthlyVisitorsThisMonth: 4750,
    contactConversionRate: '4.2%',
  },
}
