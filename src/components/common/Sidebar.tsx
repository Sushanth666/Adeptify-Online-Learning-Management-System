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
  Clock
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
  const { role } = useAuth();
  const { isMinimized, isMobileOpen, toggleMinimized, setMobileOpen } = useSidebar();

  const courses = useAppSelector((state) => state.courses.courses);
  const enrollments = useAppSelector((state) => state.learning.enrollments);

  // Modal state for Help Center & Student Community
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [helpTab, setHelpTab] = useState<'help' | 'community'>('help');

  const openHelpModal = (tab: 'help' | 'community') => {
    setHelpTab(tab);
    setIsHelpOpen(true);
    setMobileOpen(false);
  };

  // Find active / recently accessed enrolled course for "Continue Learning"
  const activeCourseData = useMemo(() => {
    if (!courses || courses.length === 0) return null;

    // Check enrollments for first in-progress course
    if (enrollments && enrollments.length > 0) {
      const inProgress = enrollments.find((e) => !e.isCompleted) || enrollments[0];
      const course = courses.find((c) => c.id === inProgress.courseId);
      if (course) {
        return {
          course,
          progress: inProgress.progressPercentage || 64,
        };
      }
    }

    // Default to first catalog course if no enrollment yet
    const fallbackCourse = courses[0];
    return {
      course: fallbackCourse,
      progress: 45,
    };
  }, [courses, enrollments]);

  // Role-based access: Sidebar matches current user role
  const effectiveType = type || role;
  const currentNav = NAVIGATION_CONFIG[effectiveType] || NAVIGATION_CONFIG.student;
  const { title: typeTitle, items: links } = currentNav;

  // Desktop sidebar content
  const desktopSidebarContent = (
    <aside 
      className={`${
        isMinimized ? 'w-20' : 'w-64'
      } bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full flex flex-col p-3 transition-[width] duration-300 ease-in-out relative select-none overflow-y-auto overflow-x-hidden`}
    >
      {/* Header with Title and Minimize Option */}
      <div className={`flex items-center ${isMinimized ? 'justify-center' : 'justify-between px-2'} mb-3 pt-1 flex-shrink-0`}>
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
      <nav className="space-y-1 py-1 flex-shrink-0">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.to} className="relative group">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center ${
                    isMinimized ? 'justify-center h-10 w-full px-0' : 'gap-3 px-3 py-2'
                  } rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
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
      <div className="mt-auto space-y-3 pt-3 flex-shrink-0">
        
        {/* 1. "Continue Learning" Mini-Card with 1-Click Resume */}
        {activeCourseData && (
          <div className="relative group">
            {isMinimized ? (
              <button
                onClick={() => navigate(`/learning/${activeCourseData.course.id}`)}
                className="w-full h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-2xs relative"
                title={`Resume: ${activeCourseData.course.title} (${activeCourseData.progress}%)`}
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </button>
            ) : (
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50/90 to-teal-50/60 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-200/80 dark:border-emerald-800/50 p-3 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3 fill-current" />
                    Continue Learning
                  </span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                    {activeCourseData.progress}%
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src={activeCourseData.course.thumbnail}
                    alt={activeCourseData.course.title}
                    className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-emerald-200 dark:border-emerald-800"
                  />
                  <div className="min-w-0 flex-1">
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {activeCourseData.course.title}
                    </h5>
                    <div className="w-full bg-emerald-200/60 dark:bg-emerald-900/40 h-1.5 rounded-full overflow-hidden mt-1">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${activeCourseData.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/learning/${activeCourseData.course.id}`)}
                  className="w-full py-1.5 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Resume Lesson</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. Weekly Study Goal / Progress Widget */}
        {isMinimized ? (
          <div className="relative group">
            <div 
              className="w-full h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 cursor-help"
            >
              <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap border border-slate-700">
              <span>Weekly Goal: 3.5 / 5.0 hrs (70%)</span>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-850/70 border border-slate-200/80 dark:border-slate-800 p-3 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Weekly Goal
              </span>
              <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-[11px]">
                3.5 / 5.0 hrs
              </span>
            </div>

            <div className="w-full h-2 bg-slate-200/80 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" 
                style={{ width: '70%' }} 
              />
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              <span>70% achieved</span>
              <span className="flex items-center gap-0.5">
                <Clock className="w-2.5 h-2.5" /> 1.5 hrs left
              </span>
            </div>
          </div>
        )}

        {/* 3. Help Center & Student Community Links */}
        <div className={`space-y-1 ${isMinimized ? 'flex flex-col items-center' : ''}`}>
          <div className="relative group w-full">
            <button
              type="button"
              onClick={() => openHelpModal('help')}
              className={`w-full flex items-center ${
                isMinimized ? 'justify-center h-10 px-0' : 'justify-between px-3 py-1.5'
              } rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
              title="Help Center & Documentation"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                {!isMinimized && <span>Help & FAQs</span>}
              </div>
              {!isMinimized && <span className="text-[10px] text-slate-400">Ctrl+K</span>}
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
                isMinimized ? 'justify-center h-10 px-0' : 'justify-between px-3 py-1.5'
              } rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
              title="Student Community Lounge"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                {!isMinimized && <span>Community Lounge</span>}
              </div>
              {!isMinimized && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-extrabold">
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
        </div>

        {/* 4. System Status / Helpful Banner */}
        <div 
          className={`rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/60 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-100 dark:border-emerald-800/40 ${
            isMinimized ? 'p-2 flex flex-col items-center justify-center' : 'p-3'
          }`}
        >
          <div className={`flex items-center ${isMinimized ? 'justify-center' : 'gap-2 mb-0.5'}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            {!isMinimized && (
              <span className="text-xs font-bold text-emerald-950 dark:text-emerald-300">System Live</span>
            )}
          </div>
          {!isMinimized && (
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
              Adeptify platform active with real-time progress syncing.
            </p>
          )}
        </div>
      </div>
    </aside>
  );

  // Mobile drawer content
  const mobileDrawerContent = (
    <aside className="w-72 bg-white dark:bg-slate-900 min-h-full flex flex-col p-4 shadow-2xl overflow-y-auto">
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
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold'
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
      <div className="mt-auto space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        {/* Continue Learning */}
        {activeCourseData && (
          <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-3 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <span className="flex items-center gap-1">
                <Play className="w-3 h-3 fill-current" /> Continue Learning
              </span>
              <span>{activeCourseData.progress}%</span>
            </div>
            <h5 className="text-xs font-bold text-slate-900 dark:text-white truncate">
              {activeCourseData.course.title}
            </h5>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                navigate(`/learning/${activeCourseData.course.id}`);
              }}
              className="w-full py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1"
            >
              Resume Lesson →
            </button>
          </div>
        )}

        {/* Weekly Study Goal */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-3 space-y-1.5 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-emerald-600" /> Weekly Goal
            </span>
            <span className="text-emerald-600 font-extrabold text-[11px]">3.5 / 5.0 hrs</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '70%' }} />
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
        </div>

        <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/40">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-emerald-950 dark:text-emerald-300">Adeptify Active</span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
            Role: {effectiveType.toUpperCase()}
          </p>
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
