import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Clock, 
  BookOpen, 
  Users, 
  Play, 
  PlayCircle, 
  CheckCircle, 
  Cpu, 
  Code, 
  Layout, 
  Cloud, 
  Shield, 
  TrendingUp, 
  Sparkles,
  X
} from 'lucide-react';
import { Course, Enrollment } from '../../types';
import { RatingStars } from '../common/RatingStars';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleWishlist } from '../../store/slices/courseSlice';
import { showToast } from '../../store/slices/uiSlice';

interface CourseCardProps {
  course: Course;
  enrollment?: Enrollment;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, enrollment }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.courses.wishlist);
  const isWishlisted = wishlist.includes(course.id);
  const [imageError, setImageError] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const previewVideoSrc = useMemo(() => {
    let url = course.previewVideoUrl || course.chapters?.[0]?.lessons?.[0]?.videoUrl || 'https://www.youtube.com/embed/wm5gMKuwSYk?enablejsapi=1&rel=0';
    if (!url.includes('autoplay=')) {
      const sep = url.includes('?') ? '&' : '?';
      url = `${url}${sep}autoplay=1&enablejsapi=1&rel=0`;
    }
    return url;
  }, [course]);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Data Science & AI':
        return {
          bg: 'bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950',
          icon: Cpu,
          accent: 'text-emerald-400'
        };
      case 'Development':
        return {
          bg: 'bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950',
          icon: Code,
          accent: 'text-emerald-400'
        };
      case 'Design':
        return {
          bg: 'bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950',
          icon: Layout,
          accent: 'text-emerald-400'
        };
      case 'Cloud & DevOps':
        return {
          bg: 'bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950',
          icon: Cloud,
          accent: 'text-teal-400'
        };
      case 'Cybersecurity':
        return {
          bg: 'bg-gradient-to-br from-red-950 via-slate-900 to-slate-950',
          icon: Shield,
          accent: 'text-rose-400'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950',
          icon: TrendingUp,
          accent: 'text-emerald-400'
        };
    }
  };

  const theme = getCategoryTheme(course.category);
  const CategoryIcon = theme.icon;

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(course.id));
    dispatch(showToast({
      message: isWishlisted ? `Removed "${course.title}" from wishlist` : `Saved "${course.title}" to wishlist!`,
      type: isWishlisted ? 'info' : 'success'
    }));
  };

  const isEnrolled = !!enrollment;
  const progress = enrollment?.progressPercentage || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-300 flex flex-col overflow-hidden group"
    >
      {/* Thumbnail Header OR Live Video Player */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        {isPlayingVideo ? (
          <div className="relative w-full h-full bg-black">
            <iframe
              src={previewVideoSrc}
              title={`${course.title} Video Preview`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Close Video button in top-right */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsPlayingVideo(false);
              }}
              className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white backdrop-blur-md transition-colors shadow-lg z-20 cursor-pointer"
              title="Close video preview"
              aria-label="Close video preview"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Now Playing live indicator in bottom-left */}
            <div className="absolute bottom-2.5 left-2.5 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md text-[10px] font-bold text-emerald-400 border border-emerald-500/30 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Playing Video
              </span>
            </div>
          </div>
        ) : (
          <>
            {!imageError ? (
              <motion.img
                src={course.thumbnail}
                alt={course.title}
                onError={() => setImageError(true)}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className={`w-full h-full ${theme.bg} flex flex-col items-center justify-center p-6 text-center relative overflow-hidden select-none`}>
                {/* Ambient Background Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
                
                <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-2 shadow-inner border border-white/10 ${theme.accent}`}>
                  <CategoryIcon className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold text-white line-clamp-2 px-4 leading-tight">
                  {course.title}
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Category & Level Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
              <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white/95 backdrop-blur-md text-slate-800 shadow-xs">
                {course.category}
              </span>
              <span className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-emerald-600/90 backdrop-blur-md text-white shadow-xs">
                {course.level}
              </span>
            </div>

            {/* Wishlist Button with Heart Pop Animation */}
            <motion.button
              onClick={handleWishlistClick}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.85 }}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all z-10 ${
                isWishlisted
                  ? 'bg-rose-50 text-rose-600 shadow-md scale-105'
                  : 'bg-white/80 text-slate-600 hover:bg-white hover:text-rose-500 shadow-xs'
              }`}
            >
              <motion.div
                animate={isWishlisted ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
              </motion.div>
            </motion.button>

            {/* Play video arrow/button overlay: Click to play video */}
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-10 group/play"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsPlayingVideo(true);
              }}
              title="Click to play video"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.92 }}
                className="w-13 h-13 rounded-full bg-slate-950/70 group-hover/play:bg-emerald-600 text-white flex items-center justify-center shadow-2xl backdrop-blur-xs transition-all duration-300 ring-4 ring-white/25 pl-0.5"
                aria-label={`Play preview video for ${course.title}`}
              >
                <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
              </motion.button>

              <span className="mt-2 text-[10px] font-extrabold uppercase tracking-wider text-white drop-shadow-md bg-slate-950/75 px-2.5 py-0.5 rounded-full opacity-0 group-hover/play:opacity-100 transition-opacity duration-200">
                Play Video
              </span>
            </div>
          </>
        )}
      </div>

      {/* Course Body */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Instructor */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-5 h-5 rounded-full object-cover ring-1 ring-emerald-500/30"
          />
          <span className="text-xs text-slate-500 font-medium truncate">
            {course.instructor.name}
          </span>
        </div>

        {/* Course Title */}
        <Link to={`/courses/${course.id}`} className="block group-hover:text-emerald-700 transition-colors">
          <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 mb-2">
            {course.title}
          </h3>
        </Link>

        {/* Rating & Reviews */}
        <div className="mb-3">
          <RatingStars rating={course.rating} reviewsCount={course.reviewsCount} />
        </div>

        {/* Meta details: duration & lessons */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            {course.durationHours} hrs
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            {course.totalLessons} lectures
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            {course.totalStudents.toLocaleString()}
          </span>
        </div>

        {/* Enrolled Progress OR Pricing & CTA */}
        <div className="mt-auto">
          {isEnrolled ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700 flex items-center gap-1">
                  {progress === 100 ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Course Completed</span>
                    </>
                  ) : (
                    `Progress: ${progress}%`
                  )}
                </span>
                <span className="text-slate-400 font-medium">
                  {enrollment?.completedLessonIds.length || 0} of {course.totalLessons} lessons
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`h-full rounded-full ${
                    progress === 100 ? 'bg-emerald-500' : 'bg-emerald-600'
                  }`}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/learning/${course.id}`)}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm shadow-emerald-600/20"
              >
                {progress === 100 ? 'Review Lectures' : 'Continue Learning'}
              </motion.button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div>
                {course.isFree ? (
                  <span className="text-lg font-extrabold text-emerald-600">Free</span>
                ) : (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold text-slate-900">
                      ₹{course.price.toLocaleString('en-IN')}
                    </span>
                    {course.originalPrice > course.price && (
                      <span className="text-xs text-slate-400 line-through">
                        ₹{course.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={`/courses/${course.id}`}
                  className="py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-xs block"
                >
                  View Course
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
