import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Award, 
  Clock, 
  PlayCircle, 
  CheckCircle2, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourses } from '../../store/slices/courseSlice';
import { fetchEnrollments, fetchCertificates } from '../../store/slices/learningSlice';
import { CourseCard } from '../../components/course/CourseCard';

export const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const courses = useAppSelector((state) => state.courses.courses);
  const enrollments = useAppSelector((state) => state.learning.enrollments);
  const certificates = useAppSelector((state) => state.learning.certificates);

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchEnrollments());
    dispatch(fetchCertificates());
  }, [dispatch]);

  const enrolledCourseIds = useMemo(() => new Set(enrollments.map((e) => e.courseId)), [enrollments]);

  const myEnrolledCourses = useMemo(() => {
    return courses.filter((c) => enrolledCourseIds.has(c.id));
  }, [courses, enrolledCourseIds]);

  const completedCount = useMemo(() => {
    return enrollments.filter((e) => e.isCompleted || e.progressPercentage === 100).length;
  }, [enrollments]);

  // Find most recently accessed in-progress course
  const activeCourseData = useMemo(() => {
    const inProgress = enrollments.find((e) => !e.isCompleted && e.progressPercentage < 100);
    if (!inProgress) return null;
    const course = courses.find((c) => c.id === inProgress.courseId);
    return { course, enrollment: inProgress };
  }, [enrollments, courses]);

  const recommendedCourses = useMemo(() => {
    return courses.filter((c) => !enrolledCourseIds.has(c.id)).slice(0, 3);
  }, [courses, enrolledCourseIds]);

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-2 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Welcome Back, {currentUser.name.split(' ')[0]}!
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              My Learning Space
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Track your milestones, attendance, video lectures, and certificates.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm shadow-emerald-600/20"
            >
              <Compass className="w-4 h-4" />
              <span>Explore New Courses</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Metric Cards Row with Staggered Motion */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Courses Enrolled', value: myEnrolledCourses.length, icon: BookOpen, color: 'emerald' },
            { label: 'Courses Completed', value: completedCount, icon: CheckCircle2, color: 'teal' },
            { label: 'Certificates Earned', value: certificates.length, icon: Award, color: 'amber' },
            { label: 'Hours Learned', value: '42.5', icon: Clock, color: 'forest' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-200 flex items-center gap-4 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  item.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                  item.color === 'amber' ? 'bg-amber-50 text-amber-600' : 'bg-forest-50 text-forest-700'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continue Learning Featured Banner with Subtle Pulse Glow */}
        {activeCourseData?.course && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl relative overflow-hidden border border-emerald-900/40"
          >
            <motion.div
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                  <PlayCircle className="w-3.5 h-3.5 animate-pulse" /> Continue Your Lesson
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeCourseData.course.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeCourseData.course.subtitle}
                </p>

                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-semibold text-emerald-200">
                    <span>Overall Progress</span>
                    <span>{activeCourseData.enrollment.progressPercentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activeCourseData.enrollment.progressPercentage}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/learning/${activeCourseData.course?.id}`)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/40 transition-all flex-shrink-0"
              >
                <span>Resume Lecture</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* My In-Progress Courses Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Enrolled Courses ({myEnrolledCourses.length})
            </h2>
            <Link
              to="/my-learning"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900"
            >
              View All Courses →
            </Link>
          </div>

          {myEnrolledCourses.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-3">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-bold text-slate-700">You haven't enrolled in any courses yet</h4>
              <p className="text-xs text-slate-400">
                Explore our catalog to start building your tech skills today!
              </p>
              <Link
                to="/courses"
                className="inline-block px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
              >
                Explore Courses
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myEnrolledCourses.map((course) => {
                const enr = enrollments.find((e) => e.courseId === course.id);
                return (
                  <CourseCard
                    key={course.id}
                    course={course}
                    enrollment={enr}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Recommended for You */}
        {recommendedCourses.length > 0 && (
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Recommended for You
                </h2>
                <p className="text-xs text-slate-500">Based on your interests and trending curriculum</p>
              </div>
              <Link
                to="/courses"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-900"
              >
                Browse All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
          </div>
        )}
      </main>
  );
};
