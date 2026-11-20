import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  CheckCircle2, 
  Award, 
  FileText, 
  HelpCircle, 
  Download, 
  Menu, 
  X,
  MessageSquare,
  Search,
  Play,
  ExternalLink,
  Film,
  Sparkles,
  RotateCcw,
  Video
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourseById } from '../../store/slices/courseSlice';
import { markLessonComplete, fetchEnrollments } from '../../store/slices/learningSlice';
import { showToast } from '../../store/slices/uiSlice';
import { VideoPlayer } from '../../components/learning/VideoPlayer';
import { CurriculumAccordion } from '../../components/learning/CurriculumAccordion';
import { LessonQuizModal } from '../../components/learning/LessonQuizModal';
import { LessonAssignmentModal } from '../../components/learning/LessonAssignmentModal';
import { ResourcesList } from '../../components/learning/ResourcesList';
import { CertificateModal } from '../../components/common/CertificateModal';
import { Lesson, Certificate } from '../../types';
import { api } from '../../services/api';

export const LessonPlayer: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedCourse = useAppSelector((state) => state.courses.selectedCourse);
  const allCourses = useAppSelector((state) => state.courses.courses);
  const loading = useAppSelector((state) => state.courses.loading);
  const enrollments = useAppSelector((state) => state.learning.enrollments);
  const certificates = useAppSelector((state) => state.learning.certificates);

  // Instantly resolve course from store without waiting for network
  const course = useMemo(() => {
    if (selectedCourse && selectedCourse.id === courseId) return selectedCourse;
    return allCourses.find((c) => c.id === courseId) || null;
  }, [selectedCourse, allCourses, courseId]);

  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'resources' | 'notes' | 'videos'>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeQuiz, setActiveQuiz] = useState<Lesson | null>(null);
  const [activeAssignment, setActiveAssignment] = useState<Lesson | null>(null);
  const [earnedCertificate, setEarnedCertificate] = useState<Certificate | null>(null);
  const [personalNotes, setPersonalNotes] = useState('');

  // Course Video Search & Alternate Lecture Player
  const [customPlayingVideo, setCustomPlayingVideo] = useState<{
    id: string;
    title: string;
    channel?: string;
    embedUrl: string;
  } | null>(null);
  const [videoSearchQuery, setVideoSearchQuery] = useState('');
  const [videoFilter, setVideoFilter] = useState<'all' | 'curriculum' | 'related'>('all');

  useEffect(() => {
    if (courseId) {
      dispatch(fetchCourseById(courseId));
      dispatch(fetchEnrollments());
    }
  }, [courseId, dispatch]);

  const enrollment = enrollments.find((e) => e.courseId === courseId);
  const completedLessonIds = enrollment?.completedLessonIds || [];

  // Reset active state when courseId changes
  useEffect(() => {
    setActiveLesson(null);
    setCustomPlayingVideo(null);
  }, [courseId]);

  // Set active lesson when the matching course data and enrollment are loaded
  useEffect(() => {
    if (!course || course.id !== courseId || !course.chapters || course.chapters.length === 0) {
      return;
    }

    const allCourseLessons = course.chapters.flatMap((ch) => ch.lessons);
    const isCurrentLessonValid = activeLesson && allCourseLessons.some((l) => l.id === activeLesson.id);

    if (!isCurrentLessonValid) {
      let targetLesson: Lesson | undefined;
      // 1. Try last accessed lesson
      if (enrollment?.lastAccessedLessonId) {
        targetLesson = allCourseLessons.find((l) => l.id === enrollment.lastAccessedLessonId);
      }
      // 2. Try first uncompleted lesson
      if (!targetLesson && enrollment) {
        targetLesson = allCourseLessons.find((l) => !completedLessonIds.includes(l.id));
      }
      // 3. Fallback to first lesson
      if (!targetLesson) {
        targetLesson = allCourseLessons[0];
      }
      if (targetLesson) {
        setActiveLesson(targetLesson);
      }
    }
  }, [course, courseId, enrollment, completedLessonIds, activeLesson]);

  if (loading && !course) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white gap-3">
        <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-slate-300">Loading classroom lessons...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-6 space-y-4 text-center">
        <h2 className="text-2xl font-bold">Course Not Found</h2>
        <p className="text-slate-400 text-sm max-w-md">The course you are looking for does not exist or may have been updated.</p>
        <Link to="/courses" className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors">
          Browse All Courses
        </Link>
      </div>
    );
  }

  // Flatten all lessons to enable Prev/Next navigation
  const allLessons: Lesson[] = course.chapters.flatMap((ch) => ch.lessons);
  const currentIdx = activeLesson ? allLessons.findIndex((l) => l.id === activeLesson.id) : 0;
  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  const isCurrentCompleted = activeLesson ? completedLessonIds.includes(activeLesson.id) : false;

  const handleMarkComplete = async () => {
    if (!activeLesson || !courseId) return;

    const res = await dispatch(markLessonComplete({ courseId, lessonId: activeLesson.id })).unwrap();
    
    dispatch(showToast({
      message: `Lesson "${activeLesson.title}" marked as completed!`,
      type: 'success'
    }));

    // If 100% completed, show certificate
    if (res.enrollment.isCompleted && res.enrollment.certificateId) {
      const cert = res.certificates.find((c) => c.id === res.enrollment.certificateId);
      if (cert) {
        setEarnedCertificate(cert);
      }
    }
  };

  // Search and filter course videos
  const courseVideos = useMemo(() => {
    if (!course) return [];
    
    // 1. All curriculum lectures
    const curriculumVideos = course.chapters.flatMap((ch) =>
      ch.lessons.map((les) => ({
        id: les.id,
        title: les.title,
        subtitle: ch.title,
        channel: course.instructor?.name || 'Adeptify Lead Instructor',
        duration: `${les.durationMinutes} mins`,
        embedUrl: les.videoUrl,
        thumbnailUrl: course.thumbnail,
        type: 'curriculum' as const,
        isCompleted: completedLessonIds.includes(les.id),
        lessonRef: les,
      }))
    );

    // 2. Curated related videos & masterclasses
    const relatedVids = (course.relatedVideos || []).map((rv) => ({
      id: rv.id,
      title: rv.title,
      subtitle: `Recommended Masterclass for "${course.title}"`,
      channel: rv.channel,
      duration: rv.duration,
      embedUrl: rv.embedUrl,
      thumbnailUrl: rv.thumbnailUrl,
      type: 'related' as const,
      isCompleted: false,
      lessonRef: null as Lesson | null,
    }));

    const combined = [...curriculumVideos, ...relatedVids];

    return combined.filter((v) => {
      const matchesType = 
        videoFilter === 'all' 
          ? true 
          : videoFilter === 'curriculum' 
          ? v.type === 'curriculum' 
          : v.type === 'related';

      if (!matchesType) return false;

      if (!videoSearchQuery.trim()) return true;

      const q = videoSearchQuery.toLowerCase();
      return (
        v.title.toLowerCase().includes(q) ||
        v.subtitle.toLowerCase().includes(q) ||
        v.channel.toLowerCase().includes(q)
      );
    });
  }, [course, completedLessonIds, videoFilter, videoSearchQuery]);

  const handlePlaySelectedVideo = (vid: {
    id: string;
    title: string;
    channel?: string;
    embedUrl: string;
    lessonRef: Lesson | null;
  }) => {
    if (vid.lessonRef) {
      setActiveLesson(vid.lessonRef);
      setCustomPlayingVideo(null);
    } else {
      setCustomPlayingVideo({
        id: vid.id,
        title: vid.title,
        channel: vid.channel,
        embedUrl: vid.embedUrl,
      });
    }
  };

  const handleSelectLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setCustomPlayingVideo(null);
    if (courseId) {
      api.enrollments.setLastAccessedLesson(courseId, lesson.id);
    }
  };

  const handleNextLesson = () => {
    if (nextLesson) {
      handleSelectLesson(nextLesson);
    }
  };

  const handlePrevLesson = () => {
    if (prevLesson) {
      handleSelectLesson(prevLesson);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col overflow-hidden">
      {/* Background Animated Emerald Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      >
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-emerald-500/12 blur-[130px]" />
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-teal-500/10 blur-[130px]" />
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(#10b981 1.2px, transparent 1.2px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Top Bar */}
      <header className="h-14 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 flex items-center justify-between z-30 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link
            to={`/courses/${course.id}`}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Back to Course Overview"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="min-w-0">
            <h1 className="text-xs sm:text-sm font-bold text-white truncate max-w-xs sm:max-w-md">
              {course.title}
            </h1>
            <span className="text-[11px] text-slate-400 hidden sm:block">
              {activeLesson?.title || 'Classroom'}
            </span>
          </div>
        </div>

        {/* Progress & Sidebar Toggle */}
        <div className="flex items-center gap-4">
          {/* Progress bar */}
          <div className="hidden md:flex items-center gap-2">
            <div className="text-xs font-semibold text-slate-300">
              {enrollment?.progressPercentage || 0}% Complete
            </div>
            <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${enrollment?.progressPercentage || 0}%` }}
              />
            </div>
          </div>

          {/* Certificate Badge if completed */}
          {enrollment?.isCompleted && (
            <button
              onClick={() => {
                const cert = certificates.find((c) => c.courseId === course.id);
                if (cert) setEarnedCertificate(cert);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold hover:bg-amber-500/30 transition-colors"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certificate</span>
            </button>
          )}

          {/* Mark Complete CTA */}
          <button
            onClick={handleMarkComplete}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
              isCurrentCompleted
                ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{isCurrentCompleted ? 'Completed ✓' : 'Mark Complete'}</span>
          </button>

          {/* Toggle Curriculum Sidebar */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Toggle Curriculum Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Classroom Layout */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left / Center: Video and Lesson Tabs */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Video Player */}
          {activeLesson ? (
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Custom playing video alert banner */}
              {customPlayingVideo && (
                <div className="flex items-center justify-between p-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/40 text-xs shadow-lg">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Film className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                        Playing Selected Course Video
                      </span>
                      <p className="font-semibold text-white truncate max-w-sm sm:max-w-md">
                        {customPlayingVideo.title}
                        {customPlayingVideo.channel && (
                          <span className="text-slate-400 font-normal ml-1">({customPlayingVideo.channel})</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setCustomPlayingVideo(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex-shrink-0 transition-colors shadow-sm ml-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Back to Lesson:</span>
                    <span className="max-w-[100px] truncate">{activeLesson.title}</span>
                  </button>
                </div>
              )}

              <VideoPlayer
                videoUrl={customPlayingVideo ? customPlayingVideo.embedUrl : activeLesson.videoUrl}
                title={customPlayingVideo ? customPlayingVideo.title : activeLesson.title}
                isCompleted={isCurrentCompleted}
                onEnded={handleMarkComplete}
              />

              {/* Lesson Controls Bar (Prev / Next & Quick Video Search trigger) */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 gap-2">
                <button
                  disabled={!prevLesson}
                  onClick={handlePrevLesson}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white disabled:opacity-30 transition-colors flex-shrink-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous:</span>
                  <span className="truncate max-w-[100px] sm:max-w-xs">{prevLesson?.title || 'None'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('videos')}
                  className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-emerald-950/60 hover:text-emerald-300 text-slate-300 border border-slate-700/60 hover:border-emerald-500/30 text-xs font-semibold transition-all"
                >
                  <Search className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Search All Course Videos</span>
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px]">
                    {(course.relatedVideos?.length || 0) + allLessons.length}
                  </span>
                </button>

                <button
                  disabled={!nextLesson}
                  onClick={handleNextLesson}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 transition-colors flex-shrink-0"
                >
                  <span className="truncate max-w-[100px] sm:max-w-xs">{nextLesson?.title || 'Next Lesson'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Lesson Tabs */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-1 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 text-xs font-bold transition-colors relative whitespace-nowrap ${
                      activeTab === 'overview' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Lecture Notes
                    {activeTab === 'overview' && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-500 rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('videos')}
                    className={`px-4 py-2 text-xs font-bold transition-colors relative whitespace-nowrap flex items-center gap-1.5 ${
                      activeTab === 'videos' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Film className="w-3.5 h-3.5" />
                    <span>Search Course Videos</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      {(course.relatedVideos?.length || 0) + allLessons.length}
                    </span>
                    {activeTab === 'videos' && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-500 rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('resources')}
                    className={`px-4 py-2 text-xs font-bold transition-colors relative whitespace-nowrap ${
                      activeTab === 'resources' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Study Materials ({activeLesson.resources?.length || 0})
                    {activeTab === 'resources' && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-500 rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('notes')}
                    className={`px-4 py-2 text-xs font-bold transition-colors relative whitespace-nowrap ${
                      activeTab === 'notes' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    My Notebook
                    {activeTab === 'notes' && (
                      <span className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-500 rounded-full" />
                    )}
                  </button>
                </div>

                {/* Tab content */}
                <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-sm">
                  {/* Tab 1: Lecture Notes */}
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">{activeLesson.title}</h2>
                        <span className="text-xs text-slate-400 font-mono">
                          Duration: {activeLesson.durationMinutes} mins
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {activeLesson.description}
                      </p>

                      {/* Attached Quiz / Assignment Callouts */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                        {activeLesson.quiz && (
                          <button
                            onClick={() => setActiveQuiz(activeLesson)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-400/30 text-xs font-bold transition-colors"
                          >
                            <HelpCircle className="w-4 h-4" />
                            <span>Take Interactive Quiz</span>
                          </button>
                        )}

                        {activeLesson.assignment && (
                          <button
                            onClick={() => setActiveAssignment(activeLesson)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700/20 text-emerald-300 hover:bg-emerald-700/30 border border-emerald-600/30 text-xs font-bold transition-colors"
                          >
                            <FileText className="w-4 h-4" />
                            <span>View Course Project Assignment</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Course Video Search & Related Lecture Finder */}
                  {activeTab === 'videos' && (
                    <div className="space-y-5">
                      {/* Search & Header Toolbar */}
                      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between pb-4 border-b border-slate-800">
                        <div className="relative flex-1">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            type="text"
                            value={videoSearchQuery}
                            onChange={(e) => setVideoSearchQuery(e.target.value)}
                            placeholder={`Search "${course.title}" lectures & tutorials...`}
                            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-500"
                          />
                          {videoSearchQuery && (
                            <button
                              onClick={() => setVideoSearchQuery('')}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                            >
                              ✕
                            </button>
                          )}
                        </div>

                        {/* Search on YouTube ↗ Direct Button */}
                        <a
                          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(course.title + ' tutorial full course')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600/15 hover:bg-rose-600/25 text-rose-400 border border-rose-500/30 text-xs font-bold transition-colors flex-shrink-0"
                          title="Open YouTube search in new tab"
                        >
                          <Video className="w-4 h-4" />
                          <span>Search YouTube ↗</span>
                        </a>
                      </div>

                      {/* Category Filter Pills */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          onClick={() => setVideoFilter('all')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                            videoFilter === 'all'
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          All Course Videos ({(course.relatedVideos?.length || 0) + allLessons.length})
                        </button>
                        <button
                          onClick={() => setVideoFilter('curriculum')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                            videoFilter === 'curriculum'
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          Curriculum Lectures ({allLessons.length})
                        </button>
                        <button
                          onClick={() => setVideoFilter('related')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                            videoFilter === 'related'
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          Curated Deep Dives ({course.relatedVideos?.length || 0})
                        </button>
                      </div>

                      {/* Video Cards Grid */}
                      {courseVideos.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                          {courseVideos.map((vid) => {
                            const isCurrentlyPlaying = 
                              (customPlayingVideo && customPlayingVideo.id === vid.id) ||
                              (!customPlayingVideo && activeLesson?.id === vid.id);

                            return (
                              <div
                                key={vid.id}
                                className={`p-3 rounded-xl border transition-all flex gap-3 group ${
                                  isCurrentlyPlaying
                                    ? 'bg-emerald-950/40 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                                    : 'bg-slate-950/60 border-slate-800/90 hover:border-slate-700'
                                }`}
                              >
                                {/* Thumbnail */}
                                <div className="relative w-28 sm:w-32 aspect-video rounded-lg overflow-hidden bg-slate-900 flex-shrink-0 group-hover:scale-102 transition-transform">
                                  <img
                                    src={vid.thumbnailUrl}
                                    alt={vid.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      // Fallback image if external image fails
                                      (e.target as HTMLImageElement).src = course.thumbnail;
                                    }}
                                  />
                                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                                    </div>
                                  </div>
                                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                                    {vid.duration}
                                  </span>
                                </div>

                                {/* Video Info */}
                                <div className="flex-1 min-w-0 flex flex-col justify-between">
                                  <div>
                                    <div className="flex items-center gap-1.5 mb-1">
                                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                        vid.type === 'curriculum'
                                          ? 'bg-emerald-500/20 text-emerald-300'
                                          : 'bg-teal-500/20 text-teal-300'
                                      }`}>
                                        {vid.type === 'curriculum' ? 'Lecture' : 'Tutorial'}
                                      </span>
                                      {vid.isCompleted && (
                                        <span className="text-[10px] text-emerald-400 font-semibold">✓ Completed</span>
                                      )}
                                      {isCurrentlyPlaying && (
                                        <span className="text-[10px] font-bold text-amber-400 animate-pulse">Now Playing</span>
                                      )}
                                    </div>
                                    <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 group-hover:text-emerald-300 transition-colors">
                                      {vid.title}
                                    </h4>
                                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                                      {vid.channel}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/80">
                                    <button
                                      onClick={() => handlePlaySelectedVideo(vid)}
                                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                                        isCurrentlyPlaying
                                          ? 'bg-emerald-600 text-white'
                                          : 'bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600 hover:text-white'
                                      }`}
                                    >
                                      <Play className="w-3 h-3 fill-current" />
                                      <span>{isCurrentlyPlaying ? 'Playing' : 'Play Video'}</span>
                                    </button>

                                    <a
                                      href={vid.embedUrl.replace('/embed/', '/watch?v=').split('?')[0]}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-1 rounded text-slate-500 hover:text-slate-300"
                                      title="Open in YouTube"
                                    >
                                      <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="py-12 text-center space-y-3 bg-slate-950/40 rounded-xl border border-dashed border-slate-800 p-6">
                          <Film className="w-8 h-8 text-slate-600 mx-auto" />
                          <p className="text-slate-400 text-xs">
                            No course videos found matching &ldquo;{videoSearchQuery}&rdquo;
                          </p>
                          <a
                            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(course.title + ' ' + videoSearchQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                          >
                            <Search className="w-3.5 h-3.5" />
                            <span>Search &ldquo;{videoSearchQuery}&rdquo; on YouTube ↗</span>
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tab 3: Study Materials */}
                  {activeTab === 'resources' && (
                    <ResourcesList resources={activeLesson.resources} />
                  )}

                  {/* Tab 4: My Notebook */}
                  {activeTab === 'notes' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Save personal timestamped notes for this lecture:</span>
                        <span>Auto-saved locally</span>
                      </div>
                      <textarea
                        rows={6}
                        placeholder="Key takeaways, formulas, code snippets..."
                        value={personalNotes}
                        onChange={(e) => setPersonalNotes(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 font-mono leading-relaxed"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center text-slate-500">
              No lesson selected. Choose a lecture from the curriculum sidebar.
            </div>
          )}
        </main>

        {/* Right Sidebar: Curriculum Drawer */}
        {isSidebarOpen && (
          <aside className="w-80 sm:w-96 bg-slate-900 border-l border-slate-800 flex flex-col h-full overflow-hidden flex-shrink-0 z-20">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-sm">Course Curriculum</h3>
                <span className="text-[11px] text-slate-400">
                  {completedLessonIds.length} of {allLessons.length} lectures completed
                </span>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
              <CurriculumAccordion
                chapters={course.chapters}
                currentLessonId={activeLesson?.id}
                completedLessonIds={completedLessonIds}
                isEnrolled={true}
                onSelectLesson={handleSelectLesson}
                onOpenQuiz={(lesson) => setActiveQuiz(lesson)}
                onOpenAssignment={(lesson) => setActiveAssignment(lesson)}
              />
            </div>
          </aside>
        )}
      </div>

      {/* Quiz Modal */}
      {activeQuiz?.quiz && (
        <LessonQuizModal
          quiz={activeQuiz.quiz}
          onClose={() => setActiveQuiz(null)}
          onPass={() => {
            handleMarkComplete();
          }}
        />
      )}

      {/* Assignment Modal */}
      {activeAssignment?.assignment && (
        <LessonAssignmentModal
          assignment={activeAssignment.assignment}
          onClose={() => setActiveAssignment(null)}
        />
      )}

      {/* Certificate Modal */}
      {earnedCertificate && (
        <CertificateModal
          certificate={earnedCertificate}
          onClose={() => setEarnedCertificate(null)}
        />
      )}
    </div>
  );
};

