import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../components/common/ProtectedRoute';

// Import all pages cleanly from the pages barrel
import {
  Home,
  NotFound,
  Login,
  Register,
  StudentDashboard,
  CourseCatalog,
  CourseDetails,
  LessonPlayer,
  MyLearning,
  CertificatesPage,
  WishlistPage,
  StudentProfile,
  InstructorDashboard,
  CourseEditor,
  ManageCourses,
  EnrolledStudents,
  CoursePerformance,
  AdminDashboard,
  AdminStudentsDirectory,
  AdminInstructorsDirectory,
  AdminCourseApprovals,
  AdminRevenueAnalytics,
} from '../pages';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CourseCatalog />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      
      {/* Classroom Player */}
      <Route path="/learning/:courseId" element={<LessonPlayer />} />

      {/* Student Hub */}
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/my-learning" element={<MyLearning />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/profile" element={<StudentProfile />} />

      {/* Instructor Studio (Protected: Instructor & Admin Access) */}
      <Route
        path="/instructor"
        element={
          <ProtectedRoute allowedRoles={['instructor', 'admin']}>
            <InstructorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/instructor/create-course"
        element={
          <ProtectedRoute allowedRoles={['instructor', 'admin']}>
            <CourseEditor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/instructor/manage-courses"
        element={
          <ProtectedRoute allowedRoles={['instructor', 'admin']}>
            <ManageCourses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/instructor/students"
        element={
          <ProtectedRoute allowedRoles={['instructor', 'admin']}>
            <EnrolledStudents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/instructor/analytics"
        element={
          <ProtectedRoute allowedRoles={['instructor', 'admin']}>
            <CoursePerformance />
          </ProtectedRoute>
        }
      />

      {/* Admin Control (Protected: Strictly Admin Only) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/students"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminStudentsDirectory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/instructors"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminInstructorsDirectory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/courses"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminCourseApprovals />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/revenue"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminRevenueAnalytics />
          </ProtectedRoute>
        }
      />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

