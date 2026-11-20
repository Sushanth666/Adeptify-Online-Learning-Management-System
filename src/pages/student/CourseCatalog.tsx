import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourses, setFilters } from '../../store/slices/courseSlice';
import { fetchEnrollments } from '../../store/slices/learningSlice';
import { CourseCard } from '../../components/course/CourseCard';
import { CourseFilters } from '../../components/course/CourseFilters';

export const CourseCatalog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const courses = useAppSelector((state) => state.courses.courses);
  const filters = useAppSelector((state) => state.courses.filters);
  const enrollments = useAppSelector((state) => state.learning.enrollments);
  const loading = useAppSelector((state) => state.courses.loading);

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchEnrollments());
  }, [dispatch]);

  // Sync query params if present
  useEffect(() => {
    const q = searchParams.get('search');
    const cat = searchParams.get('category');
    if (q) dispatch(setFilters({ search: q }));
    if (cat) dispatch(setFilters({ category: cat }));
  }, [searchParams, dispatch]);

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      // Search
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(query);
        const matchesSubtitle = c.subtitle.toLowerCase().includes(query);
        const matchesTags = c.tags?.some((t) => t.toLowerCase().includes(query));
        const matchesInst = c.instructor.name.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSubtitle && !matchesTags && !matchesInst) {
          return false;
        }
      }

      // Category
      if (filters.category && filters.category !== 'All Courses') {
        if (c.category.toLowerCase() !== filters.category.toLowerCase()) {
          return false;
        }
      }

      // Level
      if (filters.level && filters.level !== 'all') {
        if (c.level !== filters.level) {
          return false;
        }
      }

      // Price
      if (filters.priceType === 'free' && !c.isFree) return false;
      if (filters.priceType === 'paid' && c.isFree) return false;

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'popular') return b.totalStudents - a.totalStudents;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'price-low') return a.price - b.price;
      if (filters.sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [courses, filters]);

  const enrollmentMap = useMemo(() => {
    const map = new Map();
    enrollments.forEach((e) => map.set(e.courseId, e));
    return map;
  }, [enrollments]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Empower Your Future
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Discover In-Demand Tech Courses
          </h1>
          <p className="text-emerald-200 text-sm sm:text-base leading-relaxed">
            Gain job-ready skills with project-based courses taught by industry veterans. Learn React, Next.js, Cloud DevOps, AI, and UI/UX with verified certificates.
          </p>
        </div>
      </div>

      {/* Filter Component */}
      <CourseFilters />

      {/* Course Listing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 font-medium">
          <span>
            Showing <strong className="text-slate-900 dark:text-white">{filteredCourses.length}</strong> available courses
          </span>
          {filters.category !== 'All Courses' && (
            <span className="text-xs bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-lg font-semibold border border-emerald-200 dark:border-emerald-800">
              Category: {filters.category}
            </span>
          )}
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-400">Loading courses catalogue...</div>
        ) : filteredCourses.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3 transition-colors">
            <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">No matching courses found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              We couldn't find any courses matching your selected criteria. Try adjusting your search keywords or resetting filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                enrollment={enrollmentMap.get(course.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

