import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, BookOpen } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourses } from '../../store/slices/courseSlice';
import { CourseCard } from '../../components/course/CourseCard';

export const WishlistPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses.courses);
  const wishlist = useAppSelector((state) => state.courses.wishlist);
  const enrollments = useAppSelector((state) => state.learning.enrollments);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const wishlistedCourses = useMemo(() => {
    return courses.filter((c) => wishlist.includes(c.id));
  }, [courses, wishlist]);

  const enrollmentMap = useMemo(() => {
    const map = new Map();
    enrollments.forEach((e) => map.set(e.courseId, e));
    return map;
  }, [enrollments]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <div className="flex items-center gap-2 text-rose-500 mb-1">
          <Heart className="w-5 h-5 fill-rose-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Saved Courses
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          My Wishlist ({wishlistedCourses.length})
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Courses bookmarked for upcoming learning journeys.
        </p>
      </div>

      {wishlistedCourses.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <Heart className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">Your wishlist is currently empty</h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            Browse our course catalogue and click the heart icon on any card to save it for later.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Discover Courses</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              enrollment={enrollmentMap.get(course.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

