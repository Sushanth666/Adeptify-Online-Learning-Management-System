import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { useAuth, useSidebar } from '../../hooks';
import { NAVIGATION_CONFIG } from '../../config';
import { UserRole } from '../../types';

interface SidebarProps {
  type?: UserRole;
}

export const Sidebar: React.FC<SidebarProps> = ({ type }) => {
  const { role } = useAuth();
  const { isMinimized, isMobileOpen, toggleMinimized, setMobileOpen } = useSidebar();

  // Role-based access: Sidebar matches current user role
  // Instructor sees Image 1 (Instructor Portal), Admin sees Image 2 (Admin Control)
  const effectiveType = type || role;
  const currentNav = NAVIGATION_CONFIG[effectiveType] || NAVIGATION_CONFIG.student;
  const { title: typeTitle, items: links } = currentNav;

  // Desktop sidebar content
  const desktopSidebarContent = (
    <aside 
      className={`${
        isMinimized ? 'w-20' : 'w-64'
      } bg-white border-r border-slate-200 h-full flex flex-col p-3 transition-[width] duration-300 ease-in-out relative select-none overflow-y-auto overflow-x-hidden`}
    >
      {/* Header with Title and Minimize Option */}
      <div className={`flex items-center ${isMinimized ? 'justify-center' : 'justify-between px-2'} mb-4 pt-1`}>
        {!isMinimized && (
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
            {typeTitle}
          </span>
        )}
        <button
          onClick={toggleMinimized}
          className={`p-1.5 rounded-xl text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors ${
            isMinimized ? 'w-10 h-10 flex items-center justify-center' : ''
          }`}
          title={isMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
          aria-label={isMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
        >
          {isMinimized ? (
            <PanelLeftOpen className="w-5 h-5 text-emerald-700" />
          ) : (
            <PanelLeftClose className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Nav List */}
      <nav className="space-y-1.5 flex-1 overflow-y-auto py-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.to} className="relative group">
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center ${
                    isMinimized ? 'justify-center h-11 w-full px-0' : 'gap-3 px-3.5 py-2.5'
                  } rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                <Icon className={`${isMinimized ? 'w-5 h-5' : 'w-4 h-4'} flex-shrink-0`} />
                {!isMinimized && <span className="truncate">{link.label}</span>}
              </NavLink>

              {/* Floating Tooltip when Minimized */}
              {isMinimized && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap flex items-center gap-1.5">
                  <span>{link.label}</span>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* System Status / Helpful Banner */}
      <div 
        className={`mt-auto rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/60 border border-emerald-100 ${
          isMinimized ? 'p-2 flex flex-col items-center justify-center' : 'p-3.5'
        }`}
      >
        <div className={`flex items-center ${isMinimized ? 'justify-center' : 'gap-2 mb-1'}`}>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          {!isMinimized && (
            <span className="text-xs font-bold text-emerald-950">System Live</span>
          )}
        </div>
        {!isMinimized && (
          <p className="text-[11px] text-slate-600 leading-snug">
            Adeptify platform is active with real-time progress syncing.
          </p>
        )}
      </div>
    </aside>
  );

  // Mobile drawer content (always expanded for touch usability)
  const mobileDrawerContent = (
    <aside className="w-72 bg-white min-h-full flex flex-col p-4 shadow-2xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-3">
        <span className="font-extrabold text-slate-800 text-sm tracking-tight">{typeTitle}</span>
        <button
          onClick={() => setMobileOpen(false)}
          className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="space-y-1.5 flex-1 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-950">Adeptify Active</span>
        </div>
        <p className="text-[11px] text-slate-600 leading-snug">
          Logged in with {effectiveType.toUpperCase()} role access.
        </p>
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
    </>
  );
};
