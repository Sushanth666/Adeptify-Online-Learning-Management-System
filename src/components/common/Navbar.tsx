import React, { useState, useMemo } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Search, 
  Heart, 
  Bell, 
  User as UserIcon, 
  BookOpen, 
  Award, 
  LayoutDashboard, 
  ShieldCheck, 
  LogOut, 
  Menu, 
  X,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useAppSelector } from '../../store';
import { UserRole } from '../../types';
import { useAuth, useSidebar, useNotifications } from '../../hooks';
import { APP_CONFIG } from '../../config';
import { NotificationsDrawer } from './NotificationsDrawer';
import { AdeptifyLogo } from './AdeptifyLogo';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser, switchRole, logout: handleLogout } = useAuth();
  const { isMinimized: isSidebarMinimized, toggleMobile } = useSidebar();
  const { unreadCount: unreadNotifs, toggle: toggleNotifs } = useNotifications();
  const courses = useAppSelector((state) => state.courses.courses);
  const wishlist = useAppSelector((state) => state.courses.wishlist);

  // Synchronized wishlist badge count: counts only courses that actually exist in catalog
  const wishlistCount = useMemo(() => {
    if (!courses || courses.length === 0) return wishlist.length;
    const validCourseIds = new Set(courses.map((c) => c.id));
    return wishlist.filter((id) => validCourseIds.has(id)).length;
  }, [courses, wishlist]);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleRoleChange = (role: UserRole) => {
    switchRole(role);
    setIsProfileMenuOpen(false);
    if (role === 'admin') navigate('/admin');
    else if (role === 'instructor') navigate('/instructor');
    else navigate('/dashboard');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all w-full flex-shrink-0 h-16">
      <div className="flex items-center h-full w-full">
        
        {/* Left: Brand section - EXACT equal width and border alignment as sidebar! */}
        <div 
          className={`${
            isSidebarMinimized ? 'md:w-20 px-2 justify-center' : 'md:w-64 px-4 justify-between'
          } h-full md:border-r border-slate-200 flex items-center transition-[width] duration-300 ease-in-out flex-shrink-0 bg-white`}
        >
          {/* Mobile menu trigger */}
          <button
            onClick={toggleMobile}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className={`flex items-center ${isSidebarMinimized ? 'justify-center' : 'gap-2.5'} min-w-0 group`}>
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
              whileTap={{ scale: 0.95 }}
              className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/25 transition-shadow group-hover:shadow-lg group-hover:shadow-emerald-600/35 flex-shrink-0"
            >
              {/* Glowing pulse ring */}
              <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-300 opacity-40 blur-xs animate-pulse" />

              {/* Adeptify Ascending Diamond Prism Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <AdeptifyLogo size={20} className="w-5 h-5 drop-shadow-sm" />
              </motion.div>
            </motion.div>

            {!isSidebarMinimized && (
              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 leading-tight truncate">
                  Adeptify
                </span>
                <span className="text-[9px] text-emerald-700 font-bold tracking-wider uppercase truncate">
                  Skill Acceleration
                </span>
              </div>
            )}
          </Link>

          {/* Spacer on mobile to balance menu button */}
          <div className="w-6 md:hidden" />
        </div>

        {/* Right / Center Content (Aligned with main scrollable page content) */}
        <div className="flex-1 flex items-center justify-between h-full px-4 sm:px-6 lg:px-8 gap-3 sm:gap-6 min-w-0">
          
          {/* Center: Search Bar (Expanded and Centered) */}
          <div className="flex items-center flex-1 justify-center max-w-xl mx-2 sm:mx-4">
            <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
              <div className="relative w-full h-10">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search courses, skills, technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 text-xs sm:text-sm bg-slate-100/90 hover:bg-slate-100 focus:bg-white border border-slate-200/80 focus:border-emerald-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-slate-800 placeholder-slate-400"
                />
              </div>
            </form>
          </div>

          {/* Right: Action cluster with matching h-10 (40px) */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors relative"
              title="Saved Courses"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Notifications Toggle */}
            <div className="relative">
              <button
                onClick={toggleNotifs}
                className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors relative"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadNotifs > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                    {unreadNotifs}
                  </span>
                )}
              </button>
              <NotificationsDrawer />
            </div>

            {/* Profile Menu Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="h-10 flex items-center gap-2 p-1 pl-1 pr-2.5 rounded-xl hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 transition-all"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-lg object-cover ring-1 ring-emerald-500/30"
                />
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
              </button>

              {isProfileMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsProfileMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-12 mt-2 w-64 z-40 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <div className="font-semibold text-slate-900 truncate">
                        {currentUser.name}
                      </div>
                      <div className="text-xs text-slate-500 truncate">
                        {currentUser.email}
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold capitalize">
                        <Sparkles className="w-3 h-3" />
                        Role: {currentUser.role}
                      </div>
                    </div>

                    <div className="py-1 text-sm text-slate-700">
                      <Link
                        to="/profile"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 transition-colors"
                      >
                        <UserIcon className="w-4 h-4 text-slate-400" />
                        Profile Settings
                      </Link>
                      <Link
                        to="/dashboard"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4 text-slate-400" />
                        Student Dashboard
                      </Link>
                      <Link
                        to="/instructor"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 transition-colors"
                      >
                        <BookOpen className="w-4 h-4 text-emerald-500" />
                        Instructor Studio
                      </Link>
                      <Link
                        to="/admin"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 transition-colors"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Admin Dashboard
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-slate-100">
                      <div className="px-4 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Switch View
                      </div>
                      <button
                        onClick={() => handleRoleChange('student')}
                        className={`w-full text-left px-4 py-1.5 text-xs flex items-center justify-between ${
                          currentUser.role === 'student' ? 'text-emerald-600 font-bold bg-emerald-50/50' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>Student View</span>
                        {currentUser.role === 'student' && <span>✓</span>}
                      </button>
                      <button
                        onClick={() => handleRoleChange('instructor')}
                        className={`w-full text-left px-4 py-1.5 text-xs flex items-center justify-between ${
                          currentUser.role === 'instructor' ? 'text-emerald-600 font-bold bg-emerald-50/50' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>Instructor View</span>
                        {currentUser.role === 'instructor' && <span>✓</span>}
                      </button>
                      <button
                        onClick={() => handleRoleChange('admin')}
                        className={`w-full text-left px-4 py-1.5 text-xs flex items-center justify-between ${
                          currentUser.role === 'admin' ? 'text-emerald-600 font-bold bg-emerald-50/50' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>Admin View</span>
                        {currentUser.role === 'admin' && <span>✓</span>}
                      </button>
                    </div>

                    <div className="pt-1 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          handleLogout();
                          navigate('/login');
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-rose-600 hover:bg-rose-50 text-sm transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

