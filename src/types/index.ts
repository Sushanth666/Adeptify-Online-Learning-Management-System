export type UserRole = 'student' | 'instructor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  bio?: string;
  headline?: string;
  phone?: string;
  location?: string;
  joinedDate: string;
  skills?: string[];
  website?: string;
  github?: string;
  linkedin?: string;
}

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
export type CourseStatus = 'published' | 'draft' | 'pending_approval';

export interface Resource {
  id: string;
  title: string;
  fileType: 'pdf' | 'zip' | 'doc' | 'link';
  fileSize: string;
  downloadUrl: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  passingScore: number; // percentage, e.g. 80
  questions: QuizQuestion[];
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  maxScore: number;
  instructions: string[];
}

export interface Lesson {
  id: string;
  chapterId: string;
  title: string;
  durationMinutes: number;
  videoUrl: string;
  description: string;
  isFreePreview?: boolean;
  resources?: Resource[];
  quiz?: Quiz;
  assignment?: Assignment;
}

export interface Chapter {
  id: string;
  title: string;
  order: number;
  lessons: Lesson[];
}

export interface CourseInstructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  studentsCount: number;
  coursesCount: number;
  bio?: string;
}

export interface RelatedVideo {
  id: string;
  title: string;
  channel: string;
  duration: string;
  embedUrl: string;
  thumbnailUrl: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  category: string;
  level: CourseLevel;
  language: string;
  thumbnail: string;
  previewVideoUrl: string;
  price: number;
  originalPrice: number;
  isFree: boolean;
  rating: number;
  reviewsCount: number;
  totalStudents: number;
  durationHours: number;
  totalLessons: number;
  updatedAt: string;
  instructor: CourseInstructor;
  chapters: Chapter[];
  tags: string[];
  whatYouWillLearn: string[];
  requirements: string[];
  status: CourseStatus;
  featured?: boolean;
  relatedVideos?: RelatedVideo[];
}

export interface Review {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  helpfulCount: number;
}

export interface Enrollment {
  id: string;
  courseId: string;
  studentId: string;
  enrolledAt: string;
  progressPercentage: number;
  completedLessonIds: string[];
  lastAccessedLessonId?: string;
  isCompleted: boolean;
  completedAt?: string;
  certificateId?: string;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  courseId: string;
  courseTitle: string;
  studentName: string;
  studentId: string;
  issueDate: string;
  instructorName: string;
  grade: string;
  verificationUrl: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'achievement';
  timestamp: string;
  read: boolean;
  link?: string;
}

export interface FilterState {
  search: string;
  category: string;
  level: string;
  priceType: 'all' | 'free' | 'paid';
  rating: number;
  sortBy: 'popular' | 'newest' | 'rating' | 'price-low' | 'price-high';
}

