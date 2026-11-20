import React, { useState, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  X, 
  PanelLeftClose, 
  PanelLeftOpen, 
  Play, 
  Target, 
  HelpCircle, 
  Users, 
  ArrowRight,
  Clock,
  LogOut
} from 'lucide-react';
import { useAuth, useSidebar } from '../../hooks';
import { NAVIGATION_CONFIG } from '../../config';
import { UserRole } from '../../types';
import { useAppSelector } from '../../store';
import { HelpCommunityModal } from './HelpCommunityModal';

interface SidebarProps {
  type?: UserRole;
}

export const Sidebar: React.FC<SidebarProps> = ({ type }) => {
  const navigate = useNavigate();
  const { role, logout } = useAuth();
  const { isMinimized, isMobileOpen, toggleMinimized, setMobileOpen } = useSidebar();

  const courses = useAppSelector((state) => state.courses.courses);
  const enrollments = useAppSelector((state) => state.learning.enrollments);

  // Track real-time last played video updates
  const [lastPlayedTimestamp, setLastPlayedTimestamp] = useState<number>(() => Date.now());

  React.useEffect(() => {
    const handleUpdate = () => {
      setLastPlayedTimestamp(Date.now());
    };
    window.addEventListener('edupulse:last_played_updated', handleUpdate);
    return () => window.removeEventListener('edupulse:last_played_updated', handleUpdate);
  }, []);

  // Modal state for Help Center & Student Community
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [helpTab, setHelpTab] = useState<'help' | 'community'>('help');

  const openHelpModal = (tab: 'help' | 'community') => {
    setHelpTab(tab);
    setIsHelpOpen(true);
    setMobileOpen(false);
  };

  const handleResumeLesson = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!activeCourseData?.course?.id) return;
    if (isMobileOpen) setMobileOpen(false);
    navigate(`/learning/${activeCourseData.course.id}`);
  };

  // Find active / most recently played course & lesson for "Continue Learning"
  const activeCourseData = useMemo(() => {
    if (!courses || courses.length === 0) return null;

    // 1. Check if there is an explicit last played course recorded
    try {
      const raw = localStorage.getItem('edupulse_last_played');
      if (raw) {
        const record = JSON.parse(raw);
        if (record?.courseId) {
          const matched = courses.find((c) => c.id === record.courseId);
          if (matched) {
            const enr = enrollments.find((e) => e.courseId === matched.id);
            let lessonTitle = record.lessonTitle;
            if (!lessonTitle && record.lessonId && matched.chapters) {
              for (const ch of matched.chapters) {
                const l = ch.lessons.find((les) => les.id === record.lessonId);
                if (l) {
                  lessonTitle = l.title;
                  break;
                }
              }
            }
            return {
              course: matched,
              progress: enr?.progressPercentage || 60,
              lessonId: record.lessonId,
              lessonTitle,
            };
          }
        }
      }
    } catch {}

    // 2. Otherwise sort enrollments by most recently accessed
    if (enrollments && enrollments.length > 0) {
      const sorted = [...enrollments].sort((a, b) => {
        const timeA = a.lastAccessedAt ? new Date(a.lastAccessedAt).getTime() : 0;
        const timeB = b.lastAccessedAt ? new Date(b.lastAccessedAt).getTime() : 0;
        return timeB - timeA;
      });
      const recent = sorted.find((e) => !e.isCompleted) || sorted[0];
      const matchedCourse = courses.find((c) => c.id === recent.courseId);
      if (matchedCourse) {
        let lessonTitle: string | undefined;
        if (recent.lastAccessedLessonId && matchedCourse.chapters) {
          for (const ch of matchedCourse.chapters) {
            const l = ch.lessons.find((les) => les.id === recent.lastAccessedLessonId);
            if (l) {
              lessonTitle = l.title;
              break;
            }
          }
        }
        return {
          course: matchedCourse,
          progress: recent.progressPercentage || 60,
          lessonId: recent.lastAccessedLessonId,
          lessonTitle,
        };
      }
    }

    // 3. Fallback to first catalog course
    const fallbackCourse = courses[0];
    return {
      course: fallbackCourse,
      progress: 0,
      lessonId: undefined,
      lessonTitle: undefined,
    };
  }, [courses, enrollments, lastPlayedTimestamp]);

  // Role-based access: Sidebar matches current user role
  const effectiveType = type || role;
  const currentNav = NAVIGATION_CONFIG[effectiveType] || NAVIGATION_CONFIG.student;
  const { title: typeTitle, items: links } = currentNav;

  // Desktop sidebar content
  const desktopSidebarContent = (
    <aside 
      className={`${
        isMinimized ? 'w-20' : 'w-64'
      } bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full flex flex-col px-2.5 py-2 transition-[width] duration-300 ease-in-out relative select-none overflow-y-auto overflow-x-hidden sidebar-no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
    >
      {/* Header with Title and Minimize Option */}
      <div className={`flex items-center ${isMinimized ? 'justify-center' : 'justify-between px-2'} mb-2 pt-0.5 flex-shrink-0`}>
        {!isMinimized && (
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
            {typeTitle}
          </span>
        )}
        <button
          onClick={toggleMinimized}
          className={`p-1.5 rounded-xl text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 transition-colors ${
            isMinimized ? 'w-10 h-10 flex items-center justify-center' : ''
          }`}
          title={isMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
          aria-label={isMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
        >
          {isMinimized ? (
            <PanelLeftOpen className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
          ) : (
            <PanelLeftClose className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Nav List */}
      <nav className="space-y-0.5 py-0.5 flex-shrink-0">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.to} className="relative group">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center ${
                    isMinimized ? 'justify-center h-9 w-full px-0' : 'gap-2.5 px-3 py-2'
                  } rounded-xl text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'bg-slate-100/90 dark:bg-slate-800/80 text-emerald-700 dark:text-emerald-400 font-bold before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-1 before:rounded-r-full before:bg-emerald-600 dark:before:bg-emerald-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/50'
                  }`
                }
              >
                <Icon className={`${isMinimized ? 'w-5 h-5' : 'w-4 h-4'} flex-shrink-0`} />
                {!isMinimized && <span className="truncate">{link.label}</span>}
              </NavLink>

              {/* Floating Tooltip when Minimized */}
              {isMinimized && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap flex items-center gap-1.5 border border-slate-700">
                  <span>{link.label}</span>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Middle/Bottom Sections: Only visible or iconified */}
      <div className="mt-auto space-y-2 pt-2 flex-shrink-0">
        
        {/* 1. "Continue Learning" Sleek Linear Micro-Bar with Circular Ring */}
        {activeCourseData && (
          <div className="relative group">
            {isMinimized ? (
              <button
                onClick={handleResumeLesson}
                className="w-full h-10 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-2xs relative cursor-pointer group"
                title={`Resume: ${activeCourseData.course.title} (${activeCourseData.progress}%)`}
              >
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <svg className="w-7 h-7 -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      className="text-slate-200 dark:text-slate-700 stroke-current"
                      strokeWidth="3.5"
                      fill="none"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      className="text-emerald-500 stroke-current"
                      strokeWidth="3.5"
                      strokeDasharray="88"
                      strokeDashoffset={88 - (88 * (activeCourseData.progress || 0)) / 100}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <Play className="w-2.5 h-2.5 fill-current absolute ml-0.5" />
                </div>
              </button>
            ) : (
              <div 
                onClick={handleResumeLesson}
                className="rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-2 hover:border-emerald-400/80 dark:hover:border-emerald-500/60 hover:bg-slate-100/80 dark:hover:bg-slate-800/90 transition-all cursor-pointer group shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={activeCourseData.course.thumbnail}
                    alt={activeCourseData.course.title}
                    className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 font-medium leading-none mb-1">
                      <span className="uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">Now Playing</span>
                      <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{activeCourseData.progress}%</span>
                    </div>
                    <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {activeCourseData.course.title}
                    </h5>
                    {activeCourseData.lessonTitle && (
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {activeCourseData.lessonTitle}
                      </p>
                    )}
                  </div>
                  
                  {/* Circular Radial Gauge Play Trigger */}
                  <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        className="text-slate-200 dark:text-slate-700 stroke-current"
                        strokeWidth="3.5"
                        fill="none"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="14"
                        className="text-emerald-500 stroke-current transition-all duration-500"
                        strokeWidth="3.5"
                        strokeDasharray="88"
                        strokeDashoffset={88 - (88 * (activeCourseData.progress || 0)) / 100}
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center absolute group-hover:scale-110 transition-transform shadow-xs">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2. Weekly Study Goal / Progress Widget (Linear Sleek Card) */}
        {isMinimized ? (
          <div className="relative group">
            <div 
              className="w-full h-9 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 cursor-help"
            >
              <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-slate-700">
              <span>Weekly Goal: 3.5 / 5.0h (70%)</span>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 p-2.5 space-y-1.5 transition-colors">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 text-[11px]">
                <Target className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Weekly Goal
              </span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-[11px]">
                3.5 / 5.0h
              </span>
            </div>

            <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" 
                style={{ width: '70%' }} 
              />
            </div>

            <div className="flex items-center justify-between text-[9px] text-slate-500 dark:text-slate-400 font-medium">
              <span>70% achieved</span>
              <span className="flex items-center gap-0.5 font-mono">
                <Clock className="w-2.5 h-2.5" /> 1.5h left
              </span>
            </div>
          </div>
        )}

        {/* 3. Help Center, Community & Sign Out */}
        <div className={`space-y-0.5 ${isMinimized ? 'flex flex-col items-center' : ''}`}>
          <div className="relative group w-full">
            <button
              type="button"
              onClick={() => openHelpModal('help')}
              className={`w-full flex items-center ${
                isMinimized ? 'justify-center h-9 px-0' : 'justify-between px-2.5 py-1.5'
              } rounded-xl text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors`}
              title="Help Center & Documentation"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                {!isMinimized && <span>Help & FAQs</span>}
              </div>
              {!isMinimized && <span className="text-[10px] text-slate-400 font-mono">Ctrl+K</span>}
            </button>
            {isMinimized && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-slate-700">
                <span>Help & FAQs</span>
              </div>
            )}
          </div>

          <div className="relative group w-full">
            <button
              type="button"
              onClick={() => openHelpModal('community')}
              className={`w-full flex items-center ${
                isMinimized ? 'justify-center h-9 px-0' : 'justify-between px-2.5 py-1.5'
              } rounded-xl text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60 transition-colors`}
              title="Student Community Lounge"
            >
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                {!isMinimized && <span>Community Lounge</span>}
              </div>
              {!isMinimized && (
                <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              )}
            </button>
            {isMinimized && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-slate-700">
                <span>Student Community (Live)</span>
              </div>
            )}
          </div>

          {/* Sign Out Button */}
          <div className="relative group w-full pt-1 border-t border-slate-100 dark:border-slate-800/80">
            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className={`w-full flex items-center ${
                isMinimized ? 'justify-center h-9 px-0' : 'justify-start gap-2 px-2.5 py-1.5'
              } rounded-xl text-[11px] font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 hover:bg-rose-50/70 dark:hover:bg-rose-950/30 transition-colors cursor-pointer`}
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400 flex-shrink-0" />
              {!isMinimized && <span>Sign Out</span>}
            </button>
            {isMinimized && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-rose-950 text-rose-200 text-xs font-semibold rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-rose-800">
                <span>Sign Out</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );

  // Mobile drawer content
  const mobileDrawerContent = (
    <aside className="w-72 bg-white dark:bg-slate-900 min-h-full flex flex-col p-4 shadow-2xl overflow-y-auto sidebar-no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
        <span className="font-extrabold text-slate-800 dark:text-white text-sm tracking-tight">{typeTitle}</span>
        <button
          onClick={() => setMobileOpen(false)}
          className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="space-y-1 py-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all relative ${
                  isActive
                    ? 'bg-slate-100/90 dark:bg-slate-800/80 text-emerald-700 dark:text-emerald-400 font-bold before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:rounded-r-full before:bg-emerald-600 dark:before:bg-emerald-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Mobile Widgets */}
      <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
        {/* Continue Learning - Linear Micro Bar */}
        {activeCourseData && (
          <div 
            onClick={() => {
              setMobileOpen(false);
              handleResumeLesson();
            }}
            className="rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-2.5 cursor-pointer shadow-2xs hover:border-emerald-500/50"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={activeCourseData.course.thumbnail}
                alt={activeCourseData.course.title}
                className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-slate-200 dark:border-slate-700"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 font-medium leading-none mb-1">
                  <span className="uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">Now Playing</span>
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{activeCourseData.progress}%</span>
                </div>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {activeCourseData.course.title}
                </h5>
                {activeCourseData.lessonTitle && (
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {activeCourseData.lessonTitle}
                  </p>
                )}
              </div>
              <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    className="text-slate-200 dark:text-slate-700 stroke-current"
                    strokeWidth="3.5"
                    fill="none"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    className="text-emerald-500 stroke-current"
                    strokeWidth="3.5"
                    strokeDasharray="88"
                    strokeDashoffset={88 - (88 * (activeCourseData.progress || 0)) / 100}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center absolute shadow-xs">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Weekly Study Goal */}
        <div className="rounded-xl bg-slate-50/80 dark:bg-slate-800/50 p-2.5 space-y-1.5 border border-slate-200 dark:border-slate-700/60">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5 text-[11px]">
              <Target className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Weekly Goal
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[11px]">3.5 / 5.0h</span>
          </div>
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: '70%' }} />
          </div>
          <div className="flex items-center justify-between text-[9px] text-slate-500 dark:text-slate-400 font-medium">
            <span>70% achieved</span>
            <span className="font-mono">1.5h left</span>
          </div>
        </div>

        {/* Help & Community Links */}
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => openHelpModal('help')}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-left"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>Help Center & FAQs</span>
          </button>
          <button
            type="button"
            onClick={() => openHelpModal('community')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-left"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-400" />
              <span>Student Community</span>
            </div>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-emerald-100 text-emerald-700 font-extrabold">
              Live
            </span>
          </button>

          {/* Sign Out Button */}
          <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                logout();
                navigate('/login');
              }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors text-left cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-rose-500" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop Sidebar (Persistent) */}
      <div className="hidden md:block h-full flex-shrink-0">
        {desktopSidebarContent}
      </div>

      {/* Mobile Drawer (Slide-over overlay) */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div 
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 animate-in slide-in-from-left duration-200">
            {mobileDrawerContent}
          </div>
        </div>
      )}

      {/* Help & Community Modal */}
      <HelpCommunityModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        initialTab={helpTab}
      />
    </>
  );
};
