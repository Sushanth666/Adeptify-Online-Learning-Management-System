import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2, PlayCircle, Clock } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourses } from '../../store/slices/courseSlice';
import { fetchEnrollments, fetchCertificates } from '../../store/slices/learningSlice';
import { CertificateModal } from '../../components/common/CertificateModal';
import { Certificate, Course } from '../../types';

export const MyLearning: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const courses = useAppSelector((state) => state.courses.courses);
  const enrollments = useAppSelector((state) => state.learning.enrollments);
  const certificates = useAppSelector((state) => state.learning.certificates);

  const [activeTab, setActiveTab] = useState<'all' | 'in-progress' | 'completed'>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchEnrollments());
    dispatch(fetchCertificates());
  }, [dispatch]);

  const enrollmentMap = useMemo(() => {
    const map = new Map();
    enrollments.forEach((e) => map.set(e.courseId, e));
    return map;
  }, [enrollments]);

  const enrolledCourses = useMemo(() => {
    return courses.filter((c) => enrollmentMap.has(c.id));
  }, [courses, enrollmentMap]);

  const filteredCourses = useMemo(() => {
    return enrolledCourses.filter((course) => {
      const enr = enrollmentMap.get(course.id);
      if (!enr) return false;
      if (activeTab === 'in-progress') return !enr.isCompleted && enr.progressPercentage < 100;
      if (activeTab === 'completed') return enr.isCompleted || enr.progressPercentage === 100;
      return true;
    });
  }, [enrolledCourses, enrollmentMap, activeTab]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Enrolled Courses
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Pick up right where you left off and download completion credentials.
          </p>
        </div>

        {/* Tabs Filter */}
        <div className="inline-flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'all' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({enrolledCourses.length})
          </button>
          <button
            onClick={() => setActiveTab('in-progress')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'in-progress' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'completed' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Course Cards */}
      {filteredCourses.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800">No courses in this section</h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            {activeTab === 'completed'
              ? 'Complete all lectures in any course to unlock verified certificates!'
              : 'Browse our catalog and enroll in high-impact courses.'}
          </p>
          <Link
            to="/courses"
            className="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
          >
            Explore Catalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const enr = enrollmentMap.get(course.id);
            const isDone = enr?.isCompleted || enr?.progressPercentage === 100;
            const cert = certificates.find((c) => c.courseId === course.id);

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-video">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover"
                  />
                  {isDone && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                      {course.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Instructor: {course.instructor.name}
                    </p>
                  </div>

                  {/* Progress info */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>{isDone ? 'Completed 100%' : `${enr?.progressPercentage || 0}% Complete`}</span>
                      <span className="text-slate-400">
                        {enr?.completedLessonIds.length || 0}/{course.totalLessons} lectures
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isDone ? 'bg-emerald-500' : 'bg-emerald-600'
                        }`}
                        style={{ width: `${enr?.progressPercentage || 0}%` }}
                      />
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => navigate(`/learning/${course.id}`)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>{isDone ? 'Review Course' : 'Continue Lesson'}</span>
                    </button>

                    {cert && (
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="py-2.5 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition-colors flex items-center gap-1"
                        title="View Certificate"
                      >
                        <Award className="w-4 h-4 text-amber-600" />
                        <span className="hidden sm:inline">Certificate</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
};

