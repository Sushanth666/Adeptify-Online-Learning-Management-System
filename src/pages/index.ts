// Public & General Pages
export { Home } from './Home';
export { NotFound } from './NotFound';

// Auth Pages
export { Login } from './auth/Login';
export { Register } from './auth/Register';

// Student Pages
export { StudentDashboard } from './student/StudentDashboard';
export { CourseCatalog } from './student/CourseCatalog';
export { CourseDetails } from './student/CourseDetails';
export { LessonPlayer } from './student/LessonPlayer';
export { MyLearning } from './student/MyLearning';
export { CertificatesPage } from './student/CertificatesPage';
export { WishlistPage } from './student/WishlistPage';
export { StudentProfile } from './student/StudentProfile';

// Instructor Pages (Protected)
export { InstructorDashboard } from './instructor/InstructorDashboard';
export { CourseEditor } from './instructor/CourseEditor';
export { ManageCourses } from './instructor/ManageCourses';
export { EnrolledStudents } from './instructor/EnrolledStudents';
export { CoursePerformance } from './instructor/CoursePerformance';

// Admin Pages (Protected: Admin Only)
export { AdminDashboard } from './admin/AdminDashboard';
export { AdminStudentsDirectory } from './admin/AdminStudentsDirectory';
export { AdminInstructorsDirectory } from './admin/AdminInstructorsDirectory';
export { AdminCourseApprovals } from './admin/AdminCourseApprovals';
export { AdminRevenueAnalytics } from './admin/AdminRevenueAnalytics';

