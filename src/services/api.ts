import axios from 'axios';
import { Course, Enrollment, Certificate, NotificationItem, User, Review } from '../types';
import { 
  mockCourses, 
  mockUsers, 
  mockEnrollments, 
  mockCertificates, 
  mockNotifications, 
  mockReviews,
  mockPlatformAnalytics 
} from '../data/mockData';

// Storage keys
const STORAGE_KEYS = {
  USER: 'edupulse_current_user',
  COURSES: 'edupulse_courses',
  ENROLLMENTS: 'edupulse_enrollments',
  WISHLIST: 'edupulse_wishlist',
  CERTIFICATES: 'edupulse_certificates',
  NOTIFICATIONS: 'edupulse_notifications',
  REVIEWS: 'edupulse_reviews',
};

// Initialize localStorage with defaults
export const initializeLocalStorage = () => {
  const version = localStorage.getItem('edupulse_version');
  if (version !== 'adeptify_v6_letter_avatars') {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(mockUsers.student));
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(mockCourses));
    localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(mockEnrollments));
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(['course-3']));
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(mockCertificates));
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(mockNotifications));
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(mockReviews));
    localStorage.setItem('edupulse_version', 'adeptify_v6_letter_avatars');
    return;
  }

  // Migrate legacy stock photos to initial letter avatar if not a custom upload
  try {
    const rawUser = localStorage.getItem(STORAGE_KEYS.USER);
    if (rawUser) {
      const parsedUser = JSON.parse(rawUser);
      if (
        parsedUser.avatar &&
        (parsedUser.avatar.includes('photo-1534528741775-53994a69daeb') ||
          parsedUser.avatar.includes('photo-1573496359142-b8d87734a5a2') ||
          parsedUser.avatar.includes('photo-1507003211169-0a1dd7228f2d'))
      ) {
        parsedUser.avatar = '';
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(parsedUser));
      }
    }
  } catch {
    // Ignore migration parse errors
  }

  if (!localStorage.getItem(STORAGE_KEYS.USER)) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(mockUsers.student));
  }
  if (!localStorage.getItem(STORAGE_KEYS.COURSES)) {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(mockCourses));
  }
  if (!localStorage.getItem(STORAGE_KEYS.ENROLLMENTS)) {
    localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(mockEnrollments));
  }
  if (!localStorage.getItem(STORAGE_KEYS.WISHLIST)) {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(['course-3']));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CERTIFICATES)) {
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(mockCertificates));
  }
  if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(mockNotifications));
  }
  if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(mockReviews));
  }
};

// Axios instance ready for live backend integration
export const apiClient = axios.create({
  baseURL: (import.meta as any).env?.VITE_API_BASE_URL || '/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('edupulse_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Mock / Async Service Layer
export const api = {
  // Auth API
  auth: {
    login: async (email: string, role: 'student' | 'instructor' | 'admin' = 'student'): Promise<User> => {
      await new Promise((r) => setTimeout(r, 400));
      const user = mockUsers[role] || { ...mockUsers.student, email };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      localStorage.setItem('edupulse_token', 'mock_jwt_token_' + user.id);
      return user;
    },
    register: async (userData: Partial<User>): Promise<User> => {
      await new Promise((r) => setTimeout(r, 500));
      const newUser: User = {
        id: 'usr_' + Date.now(),
        name: userData.name || 'New Learner',
        email: userData.email || 'learner@example.com',
        role: userData.role || 'student',
        avatar: userData.avatar || '',
        joinedDate: 'Just now',
        skills: [],
      };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
      return newUser;
    },
    getCurrentUser: (): User => {
      const data = localStorage.getItem(STORAGE_KEYS.USER);
      return data ? JSON.parse(data) : mockUsers.student;
    },
    updateProfile: async (updates: Partial<User>): Promise<User> => {
      await new Promise((r) => setTimeout(r, 400));
      const current = api.auth.getCurrentUser();
      const updated = { ...current, ...updates };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated));
      return updated;
    },
    switchRole: (role: 'student' | 'instructor' | 'admin'): User => {
      const user = mockUsers[role];
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      return user;
    }
  },

  // Courses API
  courses: {
    getAll: async (): Promise<Course[]> => {
      await new Promise((r) => setTimeout(r, 300));
      const raw = localStorage.getItem(STORAGE_KEYS.COURSES);
      return raw ? JSON.parse(raw) : mockCourses;
    },
    getById: async (id: string): Promise<Course | undefined> => {
      await new Promise((r) => setTimeout(r, 200));
      const courses = await api.courses.getAll();
      return courses.find((c) => c.id === id || c.slug === id);
    },
    create: async (courseData: Partial<Course>): Promise<Course> => {
      await new Promise((r) => setTimeout(r, 500));
      const courses = await api.courses.getAll();
      const newCourse: Course = {
        id: 'course-' + Date.now(),
        title: courseData.title || 'Untitled Course',
        slug: (courseData.title || 'untitled').toLowerCase().replace(/\s+/g, '-'),
        subtitle: courseData.subtitle || '',
        description: courseData.description || '',
        category: courseData.category || 'Development',
        level: courseData.level || 'Beginner',
        language: courseData.language || 'English',
        thumbnail: courseData.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
        previewVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        price: Number(courseData.price) || 0,
        originalPrice: Number(courseData.originalPrice) || Number(courseData.price) || 0,
        isFree: Number(courseData.price) === 0,
        rating: 5.0,
        reviewsCount: 0,
        totalStudents: 0,
        durationHours: courseData.durationHours || 10,
        totalLessons: courseData.chapters?.reduce((acc, ch) => acc + (ch.lessons?.length || 0), 0) || 5,
        updatedAt: 'Just now',
        status: courseData.status || 'published',
        instructor: {
          id: mockUsers.instructor.id,
          name: mockUsers.instructor.name,
          avatar: mockUsers.instructor.avatar,
          title: mockUsers.instructor.headline || 'Lead Instructor',
          rating: 4.9,
          studentsCount: 120,
          coursesCount: 3,
        },
        chapters: courseData.chapters || [],
        tags: courseData.tags || ['Course'],
        whatYouWillLearn: courseData.whatYouWillLearn || ['Course Mastery'],
        requirements: courseData.requirements || ['Computer & Internet'],
      };
      const updated = [newCourse, ...courses];
      localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(updated));
      return newCourse;
    },
    update: async (id: string, updates: Partial<Course>): Promise<Course> => {
      const courses = await api.courses.getAll();
      const index = courses.findIndex(c => c.id === id);
      if (index === -1) throw new Error('Course not found');
      courses[index] = { ...courses[index], ...updates };
      localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
      return courses[index];
    },
    delete: async (id: string): Promise<boolean> => {
      const courses = await api.courses.getAll();
      const filtered = courses.filter(c => c.id !== id);
      localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(filtered));
      return true;
    }
  },

  // Enrollments API
  enrollments: {
    getAll: async (): Promise<Enrollment[]> => {
      await new Promise((r) => setTimeout(r, 200));
      const raw = localStorage.getItem(STORAGE_KEYS.ENROLLMENTS);
      return raw ? JSON.parse(raw) : mockEnrollments;
    },
    enroll: async (courseId: string, studentId: string): Promise<Enrollment> => {
      await new Promise((r) => setTimeout(r, 400));
      const enrollments = await api.enrollments.getAll();
      const existing = enrollments.find(e => e.courseId === courseId && e.studentId === studentId);
      if (existing) return existing;

      const newEnrollment: Enrollment = {
        id: 'enr-' + Date.now(),
        courseId,
        studentId,
        enrolledAt: new Date().toISOString().split('T')[0],
        progressPercentage: 0,
        completedLessonIds: [],
        isCompleted: false,
      };
      const updated = [...enrollments, newEnrollment];
      localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(updated));
      return newEnrollment;
    },
    updateProgress: async (courseId: string, lessonId: string): Promise<Enrollment> => {
      const enrollments = await api.enrollments.getAll();
      const index = enrollments.findIndex(e => e.courseId === courseId);
      if (index === -1) throw new Error('Enrollment not found');

      const enrollment = enrollments[index];
      const completed = new Set(enrollment.completedLessonIds);
      completed.add(lessonId);

      const course = (await api.courses.getAll()).find(c => c.id === courseId);
      const totalLessons = course?.chapters.reduce((sum, ch) => sum + ch.lessons.length, 0) || 5;
      const progress = Math.min(100, Math.round((completed.size / totalLessons) * 100));

      let certificateId = enrollment.certificateId;
      let isCompleted = enrollment.isCompleted;
      let completedAt = enrollment.completedAt;

      // If finished 100%, generate certificate
      if (progress >= 100 && !isCompleted) {
        isCompleted = true;
        completedAt = new Date().toISOString().split('T')[0];
        certificateId = 'cert-' + Math.random().toString(36).substring(2, 9);
        
        // Save certificate
        const user = api.auth.getCurrentUser();
        const certs = await api.certificates.getAll();
        const newCert: Certificate = {
          id: certificateId,
          certificateNumber: `EP-${new Date().getFullYear()}-${certificateId.toUpperCase()}`,
          courseId,
          courseTitle: course?.title || 'Completed Course',
          studentName: user.name,
          studentId: user.id,
          issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          instructorName: course?.instructor.name || 'Adeptify Lead Faculty',
          grade: 'Distinction (98%)',
          verificationUrl: `https://adeptify.in/verify/${certificateId}`
        };
        localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify([newCert, ...certs]));

        // Add congratulatory notification
        const notifs = await api.notifications.getAll();
        const newNotif: NotificationItem = {
          id: 'notif-' + Date.now(),
          title: 'Course Completed & Certificate Earned! 🎓',
          message: `Congratulations! You have completed "${course?.title}". Your verified certificate is ready.`,
          type: 'achievement',
          timestamp: 'Just now',
          read: false,
          link: '/certificates'
        };
        localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify([newNotif, ...notifs]));
      }

      enrollments[index] = {
        ...enrollment,
        completedLessonIds: Array.from(completed),
        progressPercentage: progress,
        lastAccessedLessonId: lessonId,
        isCompleted,
        completedAt,
        certificateId
      };

      localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(enrollments));
      return enrollments[index];
    }
  },

  // Certificates API
  certificates: {
    getAll: async (): Promise<Certificate[]> => {
      const raw = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
      return raw ? JSON.parse(raw) : mockCertificates;
    },
    getById: async (id: string): Promise<Certificate | undefined> => {
      const certs = await api.certificates.getAll();
      return certs.find(c => c.id === id);
    }
  },

  // Wishlist API
  wishlist: {
    getAll: (): string[] => {
      const raw = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      if (!raw) return [];
      try {
        const parsed: string[] = JSON.parse(raw);
        // Automatically sanitize and discard any obsolete/unmatched IDs
        const validIds = new Set(mockCourses.map((c) => c.id));
        const sanitized = parsed.filter((id) => validIds.has(id));
        if (sanitized.length !== parsed.length) {
          localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(sanitized));
        }
        return sanitized;
      } catch {
        return [];
      }
    },
    toggle: (courseId: string): string[] => {
      const list = api.wishlist.getAll();
      const updated = list.includes(courseId)
        ? list.filter((id) => id !== courseId)
        : [...list, courseId];
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(updated));
      return updated;
    },
  },

  // Reviews API
  reviews: {
    getByCourseId: async (courseId: string): Promise<Review[]> => {
      const raw = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      const all: Record<string, Review[]> = raw ? JSON.parse(raw) : mockReviews;
      return all[courseId] || [];
    },
    addReview: async (courseId: string, rating: number, comment: string): Promise<Review> => {
      const user = api.auth.getCurrentUser();
      const raw = localStorage.getItem(STORAGE_KEYS.REVIEWS);
      const all: Record<string, Review[]> = raw ? JSON.parse(raw) : mockReviews;
      
      const newReview: Review = {
        id: 'rev-' + Date.now(),
        courseId,
        userId: user.id,
        userName: user.name,
        userAvatar: user.avatar,
        rating,
        comment,
        date: 'Just now',
        helpfulCount: 0
      };

      all[courseId] = [newReview, ...(all[courseId] || [])];
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(all));
      return newReview;
    }
  },

  // Notifications API
  notifications: {
    getAll: async (): Promise<NotificationItem[]> => {
      const raw = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      return raw ? JSON.parse(raw) : mockNotifications;
    },
    markAsRead: async (id: string): Promise<NotificationItem[]> => {
      const notifs = await api.notifications.getAll();
      const updated = notifs.map(n => n.id === id ? { ...n, read: true } : n);
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(updated));
      return updated;
    },
    markAllAsRead: async (): Promise<NotificationItem[]> => {
      const notifs = await api.notifications.getAll();
      const updated = notifs.map(n => ({ ...n, read: true }));
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(updated));
      return updated;
    }
  },

  // Analytics API
  analytics: {
    getPlatformStats: async () => {
      await new Promise(r => setTimeout(r, 200));
      return mockPlatformAnalytics;
    }
  }
};
