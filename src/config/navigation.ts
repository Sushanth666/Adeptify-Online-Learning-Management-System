import { 
  LayoutDashboard, 
  Compass, 
  BookOpen, 
  Award, 
  Heart, 
  User as UserIcon, 
  PlusCircle, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  FileCheck, 
  IndianRupee,
  LucideIcon 
} from 'lucide-react';
import { UserRole } from '../types';

export interface NavigationItem {
  label: string;
  to: string;
  icon: LucideIcon;
  end?: boolean;
}

export interface NavigationGroup {
  role: UserRole;
  title: string;
  items: NavigationItem[];
}

export const STUDENT_NAVIGATION: NavigationItem[] = [
  { label: 'Overview', to: '/dashboard', icon: LayoutDashboard, end: true },
  { label: 'Explore Courses', to: '/courses', icon: Compass },
  { label: 'My Learning', to: '/my-learning', icon: BookOpen },
  { label: 'Certificates', to: '/certificates', icon: Award },
  { label: 'Wishlist', to: '/wishlist', icon: Heart },
  { label: 'My Profile', to: '/profile', icon: UserIcon },
];

export const INSTRUCTOR_NAVIGATION: NavigationItem[] = [
  { label: 'Instructor Dashboard', to: '/instructor', icon: LayoutDashboard, end: true },
  { label: 'Create New Course', to: '/instructor/create-course', icon: PlusCircle },
  { label: 'Manage Courses', to: '/instructor/manage-courses', icon: BookOpen },
  { label: 'Enrolled Students', to: '/instructor/students', icon: Users },
  { label: 'Course Performance', to: '/instructor/analytics', icon: BarChart3 },
  { label: 'Student View', to: '/dashboard', icon: Compass },
];

export const ADMIN_NAVIGATION: NavigationItem[] = [
  { label: 'Admin Overview', to: '/admin', icon: LayoutDashboard, end: true },
  { label: 'Students Directory', to: '/admin/students', icon: Users },
  { label: 'Instructors Directory', to: '/admin/instructors', icon: ShieldCheck },
  { label: 'Course Catalog & Approvals', to: '/admin/courses', icon: FileCheck },
  { label: 'Revenue Analytics', to: '/admin/revenue', icon: IndianRupee },
  { label: 'Browse LMS as Student', to: '/courses', icon: Compass },
];

export const NAVIGATION_CONFIG: Record<UserRole, NavigationGroup> = {
  student: {
    role: 'student',
    title: 'Student Hub',
    items: STUDENT_NAVIGATION,
  },
  instructor: {
    role: 'instructor',
    title: 'Instructor Portal',
    items: INSTRUCTOR_NAVIGATION,
  },
  admin: {
    role: 'admin',
    title: 'Admin Control',
    items: ADMIN_NAVIGATION,
  },
};

