import { Course, Review, Enrollment, Certificate, NotificationItem, User } from '../types';
import { allMockCourses } from './coursesData';

export const mockUsers: Record<string, User> = {
  student: {
    id: 'usr_student_1',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@adeptify.in',
    role: 'student',
    avatar: '',
    headline: 'Aspiring Full Stack Engineer | React & Next.js Enthusiast',
    bio: 'Computer Science student from Bengaluru passionate about scalable web architecture, high-throughput microservices, and modern UI engineering.',
    phone: '+91 98765 43210',
    location: 'Bengaluru, Karnataka',
    joinedDate: 'Jan 2024',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'SQL', 'System Design'],
    website: 'https://aaravsharma.dev',
    github: 'https://github.com/aaravsharma',
    linkedin: 'https://linkedin.com/in/aaravsharma'
  },
  instructor: {
    id: 'usr_inst_1',
    name: 'Dr. Priya Patel',
    email: 'priya.patel@adeptify.in',
    role: 'instructor',
    avatar: '',
    headline: 'Principal Cloud Architect & Lead Tech Instructor',
    bio: '14+ years building high-concurrency payment gateways and cloud architectures across top Indian tech companies. Ex-Amazon IDC & Swiggy Architect.',
    phone: '+91 98112 34567',
    location: 'Hyderabad, Telangana',
    joinedDate: 'Aug 2022',
    skills: ['React', 'TypeScript', 'System Design', 'Docker', 'AWS', 'Kubernetes', 'Microservices'],
    website: 'https://priyapatel.tech',
    github: 'https://github.com/priyapatel',
    linkedin: 'https://linkedin.com/in/priyapatel'
  },
  admin: {
    id: 'usr_admin_1',
    name: 'Vikramaditya Rao',
    email: 'vikram.rao@adeptify.in',
    role: 'admin',
    avatar: '',
    headline: 'Adeptify India Operations Director & Academic Dean',
    bio: 'Overseeing Indian higher education accreditations, skill council compliances, faculty standards, and national campus hiring pipelines.',
    joinedDate: 'Jan 2022',
    location: 'New Delhi, NCR'
  }
};

export const mockCourses: Course[] = allMockCourses;

export const mockCategories = [
  { id: 'cat-all', name: 'All Courses', icon: 'BookOpen', count: 73 },
  { id: 'cat-dev', name: 'Development', icon: 'Code', count: 24 },
  { id: 'cat-design', name: 'Design', icon: 'Layout', count: 12 },
  { id: 'cat-cloud', name: 'Cloud & DevOps', icon: 'Cloud', count: 8 },
  { id: 'cat-data', name: 'Data Science & AI', icon: 'Cpu', count: 14 },
  { id: 'cat-security', name: 'Cybersecurity', icon: 'Shield', count: 6 },
  { id: 'cat-business', name: 'Business & Management', icon: 'TrendingUp', count: 9 }
];

export const mockReviews: Record<string, Review[]> = {
  'course-1': [
    {
      id: 'rev-1',
      courseId: 'course-1',
      userId: 'usr_rev_1',
      userName: 'Sneha Reddy',
      userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Hands down the most practical Next.js 14 course in India. The Server Actions and PostgreSQL optimizations helped me crack the frontend interview at Swiggy!',
      date: '2 days ago',
      helpfulCount: 68
    },
    {
      id: 'rev-2',
      courseId: 'course-1',
      userId: 'usr_rev_2',
      userName: 'Arjun Nair',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Dr. Priya Patel explains complex topics like streaming SSR and Suspense with effortless clarity. The real-world production projects are benchmark quality.',
      date: '1 week ago',
      helpfulCount: 45
    },
    {
      id: 'rev-3',
      courseId: 'course-1',
      userId: 'usr_rev_3',
      userName: 'Kavita Menon',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      comment: 'Paced perfectly for working software engineers in Bengaluru and Pune. Highly recommended!',
      date: '2 weeks ago',
      helpfulCount: 27
    }
  ]
};

export const mockEnrollments: Enrollment[] = [
  {
    id: 'enr-1',
    courseId: 'course-1',
    studentId: 'usr_student_1',
    enrolledAt: '2024-09-15',
    progressPercentage: 60,
    completedLessonIds: ['course-1-les-1', 'course-1-les-2', 'course-1-les-3'],
    lastAccessedLessonId: 'course-1-les-4',
    isCompleted: false
  },
  {
    id: 'enr-2',
    courseId: 'course-2',
    studentId: 'usr_student_1',
    enrolledAt: '2024-08-10',
    progressPercentage: 100,
    completedLessonIds: ['course-2-les-1', 'course-2-les-2', 'course-2-les-3', 'course-2-les-4', 'course-2-les-5'],
    lastAccessedLessonId: 'course-2-les-5',
    isCompleted: true,
    completedAt: '2024-10-02',
    certificateId: 'cert-uiux-9981'
  },
  {
    id: 'enr-3',
    courseId: 'course-4',
    studentId: 'usr_student_1',
    enrolledAt: '2024-10-20',
    progressPercentage: 20,
    completedLessonIds: ['course-4-les-1'],
    lastAccessedLessonId: 'course-4-les-2',
    isCompleted: false
  }
];

export const mockCertificates: Certificate[] = [
  {
    id: 'cert-uiux-9981',
    certificateNumber: 'EP-IND-2024-UIUX-9981',
    courseId: 'course-2',
    courseTitle: 'Complete UI/UX Design Masterclass: Wireframe to Figma Prototype',
    studentName: 'Aarav Sharma',
    studentId: 'usr_student_1',
    issueDate: 'October 2, 2024',
    instructorName: 'Ananya Iyer',
    grade: 'First Class Distinction (96%)',
    verificationUrl: 'https://adeptify.in/verify/EP-IND-2024-UIUX-9981'
  }
];

export const mockNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Assignment Evaluated by Faculty 🎯',
    message: 'Dr. Priya Patel reviewed your Next.js Cache & Revalidation code submission: 96/100!',
    type: 'achievement',
    timestamp: '25 minutes ago',
    read: false,
    link: '/learning/course-1'
  },
  {
    id: 'notif-2',
    title: 'Govt & Industry Recognized Certificate Issued! 🎓',
    message: 'Congratulations Aarav! Your verified certificate for UI/UX Design Masterclass is ready to view & download.',
    type: 'success',
    timestamp: 'Yesterday',
    read: false,
    link: '/certificates'
  },
  {
    id: 'notif-3',
    title: 'Upcoming Bengaluru Live Q&A Session 🇮🇳',
    message: 'Live Docker & Kubernetes cluster debugging session starts this Friday at 6:30 PM IST.',
    type: 'info',
    timestamp: '3 days ago',
    read: true,
    link: '/courses/course-3'
  }
];

export const mockPlatformAnalytics = {
  totalRevenue: 8459200, // ₹84.59 Lakhs
  monthlyRevenue: 1489200, // ₹14.89 Lakhs
  revenueGrowth: '+22.4%',
  totalStudents: 184500,
  studentsGrowth: '+18.6%',
  totalCourses: 148,
  activeInstructors: 64,
  courseCompletionRate: '82.4%',
  monthlySalesData: [
    { month: 'Jun', revenue: 950000, enrollments: 3200, activeUsers: 24000 },
    { month: 'Jul', revenue: 1120000, enrollments: 3800, activeUsers: 28500 },
    { month: 'Aug', revenue: 1280000, enrollments: 4400, activeUsers: 33000 },
    { month: 'Sep', revenue: 1240000, enrollments: 4100, activeUsers: 34500 },
    { month: 'Oct', revenue: 1390000, enrollments: 4800, activeUsers: 39000 },
    { month: 'Nov', revenue: 1489200, enrollments: 5240, activeUsers: 43200 }
  ],
  categoryDistribution: [
    { name: 'Development', value: 45, color: '#059669' },
    { name: 'Data Science & AI', value: 25, color: '#0d9488' },
    { name: 'UI/UX Design', value: 15, color: '#10b981' },
    { name: 'Cloud & DevOps', value: 10, color: '#34d399' },
    { name: 'Cybersecurity', value: 5, color: '#f59e0b' }
  ],
  topCourses: [
    { id: 'course-1', title: 'Modern Full-Stack React & Next.js 14', instructor: 'Dr. Priya Patel', students: 42500, revenue: 4860000, rating: 4.9 },
    { id: 'course-2', title: 'Complete UI/UX Design Masterclass', instructor: 'Ananya Iyer', students: 28400, revenue: 2680000, rating: 4.85 },
    { id: 'course-3', title: 'Cloud Native DevOps: Docker & K8s', instructor: 'Dr. Priya Patel', students: 22100, revenue: 2840000, rating: 4.95 },
    { id: 'course-4', title: 'Python for Data Science & AI', instructor: 'Rohan Mehta', students: 74200, revenue: 1420000, rating: 4.88 }
  ],
  recentStudents: [
    { id: 'st-1', name: 'Tanvi Kulkarni', email: 'tanvi.k@example.com', enrolledCourse: 'Modern Full-Stack React', date: 'Today, 10:15 AM IST', status: 'Active', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80' },
    { id: 'st-2', name: 'Rohan Deshmukh', email: 'rohan.d@example.com', enrolledCourse: 'UI/UX Design Masterclass', date: 'Yesterday', status: 'Active', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80' },
    { id: 'st-3', name: 'Aditi Sundaram', email: 'aditi.s@example.com', enrolledCourse: 'Cloud Native DevOps', date: 'Nov 12', status: 'Completed', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80' },
    { id: 'st-4', name: 'Nikhil Verma', email: 'nikhil.v@example.com', enrolledCourse: 'Python for Data Science', date: 'Nov 10', status: 'Active', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80' }
  ]
};
