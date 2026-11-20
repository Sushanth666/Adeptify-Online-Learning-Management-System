import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store';
import { ProtectedRoute } from '../components/common/ProtectedRoute';

// Import all pages cleanly from the pages barrel
import {
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
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      {/* Root Path: Redirects to /login if unauthenticated, or /dashboard once logged in */}
      <Route
        path="/"
        element={
          <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
        }
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />
      <Route
        path="/register"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />
        }
      />

      {/* Student Hub & Learning Area (Protected) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <CourseCatalog />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses/:id"
        element={
          <ProtectedRoute>
            <CourseDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/learning/:courseId"
        element={
          <ProtectedRoute>
            <LessonPlayer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-learning"
        element={
          <ProtectedRoute>
            <MyLearning />
          </ProtectedRoute>
        }
      />
      <Route
        path="/certificates"
        element={
          <ProtectedRoute>
            <CertificatesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <StudentProfile />
          </ProtectedRoute>
        }
      />

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

      {/* 404 Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
