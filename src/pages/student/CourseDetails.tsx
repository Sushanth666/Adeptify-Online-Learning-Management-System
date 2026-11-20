import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  BookOpen, 
  Users, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  PlayCircle, 
  Play,
  X,
  Heart, 
  Share2, 
  ArrowLeft,
  Calendar,
  Globe,
  Sparkles,
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourseById, toggleWishlist } from '../../store/slices/courseSlice';
import { enrollInCourse, fetchEnrollments } from '../../store/slices/learningSlice';
import { showToast } from '../../store/slices/uiSlice';
import { RatingStars } from '../../components/common/RatingStars';
import { CurriculumAccordion } from '../../components/learning/CurriculumAccordion';
import { ReviewSection } from '../../components/course/ReviewSection';
import { VideoPlayer } from '../../components/learning/VideoPlayer';
import { Lesson } from '../../types';

export const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const course = useAppSelector((state) => state.courses.selectedCourse);
  const loading = useAppSelector((state) => state.courses.loading);
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const wishlist = useAppSelector((state) => state.courses.wishlist);
  const enrollments = useAppSelector((state) => state.learning.enrollments);

  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');
  const [previewLesson, setPreviewLesson] = useState<Lesson | null>(null);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [isPlayingInlineVideo, setIsPlayingInlineVideo] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseById(id));
      dispatch(fetchEnrollments());
      window.scrollTo(0, 0);
    }
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-600 text-sm font-medium">Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Course Not Found</h2>
        <p className="text-slate-500 text-sm">We couldn't locate this course in the Adeptify catalog.</p>
        <Link to="/courses" className="inline-block px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors">
          Browse Course Catalog
        </Link>
      </div>
    );
  }

  const enrollment = enrollments.find((e) => e.courseId === course.id);
  const isEnrolled = !!enrollment;
  const isWishlisted = wishlist.includes(course.id);

  const handleEnroll = async () => {
    if (isEnrolled) {
      navigate(`/learning/${course.id}`);
      return;
    }

    setIsEnrolling(true);
    await dispatch(enrollInCourse({ courseId: course.id, studentId: currentUser.id }));
    setIsEnrolling(false);

    dispatch(showToast({
      message: `Successfully enrolled in "${course.title}"! Happy learning! 🚀`,
      type: 'success'
    }));
    navigate(`/learning/${course.id}`);
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(course.id));
    dispatch(showToast({
      message: isWishlisted ? 'Removed from saved courses' : 'Saved to wishlist!',
      type: isWishlisted ? 'info' : 'success'
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Top Breadcrumb & Hero */}
      <div className="bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Courses Catalogue
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Hero Details */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold">
                  {course.level}
                </span>
                {course.featured && (
                  <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" /> Featured Course
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {course.title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {course.subtitle}
              </p>

              {/* Rating & Stats */}
              <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                  <RatingStars rating={course.rating} reviewsCount={course.reviewsCount} />
                </div>
                <div className="flex items-center gap-1 text-slate-300">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>{course.totalStudents.toLocaleString()} enrolled</span>
                </div>
                <div className="flex items-center gap-1 text-slate-300">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Last updated {course.updatedAt}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-300">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>{course.language}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 pt-3">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/40"
                />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Created by</div>
                  <div className="text-sm font-bold text-white">
                    {course.instructor.name}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Sticky Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl text-slate-900 dark:text-white sticky top-20 transition-colors">
                {/* Video / Thumbnail preview with animated play button */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-950 group">
                  {isPlayingInlineVideo ? (
                    <div className="relative w-full h-full bg-black">
                      <iframe
                        src={`${course.previewVideoUrl || 'https://www.youtube.com/embed/wm5gMKuwSYk?enablejsapi=1&rel=0'}${
                          (course.previewVideoUrl || '').includes('?') ? '&' : '?'
                        }autoplay=1&enablejsapi=1&rel=0`}
                        title={course.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      <button
                        type="button"
                        onClick={() => setIsPlayingInlineVideo(false)}
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white backdrop-blur-md transition-colors z-20"
                        title="Close video"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center cursor-pointer group-hover:bg-black/50 transition-colors"
                        onClick={() => setIsPlayingInlineVideo(true)}
                      >
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-14 h-14 rounded-full bg-white/95 text-emerald-600 flex items-center justify-center shadow-lg pl-0.5"
                        >
                          <Play className="w-7 h-7 fill-emerald-600 text-emerald-600 translate-x-0.5" />
                        </motion.div>
                        <span className="mt-2 text-xs font-bold uppercase tracking-wider text-white drop-shadow">
                          Play Video Preview
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Price in Indian Rupees */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-baseline gap-3">
                    {course.isFree ? (
                      <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">Free</span>
                    ) : (
                      <>
                        <span className="text-3xl font-black text-slate-900 dark:text-white">
                          ₹{course.price.toLocaleString('en-IN')}
                        </span>
                        {course.originalPrice > course.price && (
                          <>
                            <span className="text-base text-slate-400 dark:text-slate-500 line-through">
                              ₹{course.originalPrice.toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/60">
                              Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
                            </span>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Includes 18% GST • UPI (GPay, PhonePe, Paytm), Cards & NetBanking accepted
                  </div>
                </div>

                {/* Enrollment Button */}
                <div className="space-y-3 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleEnroll}
                    disabled={isEnrolling}
                    className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 ${
                      isEnrolled
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30'
                    }`}
                  >
                    {isEnrolled ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Go to Classroom
                      </>
                    ) : (
                      <>
                        {isEnrolling ? 'Enrolling...' : course.isFree ? 'Enroll for Free' : 'Buy Now & Start Learning'}
                      </>
                    )}
                  </motion.button>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={handleToggleWishlist}
                      className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                        isWishlisted
                          ? 'border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        dispatch(showToast({ message: 'Course link copied!', type: 'info' }));
                      }}
                      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      title="Share Course"
                    >
                      <Share2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Guarantees & Features */}
                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-5">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{course.durationHours} hours on-demand video</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{course.totalLessons} lectures with coding resources</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Official Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Full lifetime access on mobile and desktop</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tabs Header */}
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-1">
              {(['overview', 'curriculum', 'instructor', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-sm font-bold capitalize transition-colors relative ${
                    activeTab === tab
                      ? 'text-emerald-700 dark:text-emerald-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.span
                      layoutId="tabUnderline"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-600 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab: Overview */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* What you'll learn */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    What You Will Master in This Course
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.whatYouWillLearn.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Course Description */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-3 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Course Description
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {course.description}
                  </p>
                </div>

                {/* Prerequisites */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-3 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Requirements & Prerequisites
                  </h3>
                  <ul className="space-y-2">
                    {course.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Tab: Curriculum */}
            {activeTab === 'curriculum' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Course Curriculum
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {course.chapters.length} Sections • {course.totalLessons} Lectures
                  </span>
                </div>
                <CurriculumAccordion
                  chapters={course.chapters}
                  isEnrolled={isEnrolled}
                  completedLessonIds={enrollment?.completedLessonIds || []}
                  onSelectLesson={(lesson) => {
                    if (isEnrolled) {
                      navigate(`/learning/${course.id}`);
                    } else if (lesson.isFreePreview) {
                      setPreviewLesson(lesson);
                    } else {
                      dispatch(showToast({
                        message: 'Please enroll in this course to unlock this lecture!',
                        type: 'info'
                      }));
                    }
                  }}
                />
              </motion.div>
            )}

            {/* Tab: Instructor */}
            {activeTab === 'instructor' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-2xl object-cover ring-4 ring-emerald-50 dark:ring-emerald-950"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{course.instructor.name}</h3>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">{course.instructor.title}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>★ {course.instructor.rating} Instructor Rating</span>
                      <span>•</span>
                      <span>{course.instructor.studentsCount.toLocaleString()} Students</span>
                      <span>•</span>
                      <span>{course.instructor.coursesCount} Courses</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {course.instructor.bio || 'Veteran technology lead, software architect, and educator passionate about building real-world software.'}
                </p>
              </motion.div>
            )}

            {/* Tab: Reviews */}
            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ReviewSection
                  courseId={course.id}
                  courseRating={course.rating}
                  totalReviews={course.reviewsCount}
                />
              </motion.div>
            )}

          </div>
        </div>
      </div>

      {/* Free Preview Video Modal */}
      <AnimatePresence>
        {previewLesson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              <div className="p-4 flex items-center justify-between text-white border-b border-slate-800">
                <span className="text-sm font-bold flex items-center gap-2">
                  <PlayCircle className="w-4 h-4 text-emerald-400" /> Free Preview: {previewLesson.title}
                </span>
                <button
                  onClick={() => setPreviewLesson(null)}
                  className="text-slate-400 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>
              <VideoPlayer videoUrl={previewLesson.videoUrl} title={previewLesson.title} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
