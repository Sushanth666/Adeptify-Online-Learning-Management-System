import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  Sparkles,
  Sun,
  Moon,
  Flame,
  ArrowRight,
  Star,
  Check,
  Tag
} from 'lucide-react';
import { useAppSelector } from '../../store';
import { UserRole } from '../../types';
import { useAuth, useSidebar, useNotifications, useTheme } from '../../hooks';
import { APP_CONFIG } from '../../config';
import { NotificationsDrawer } from './NotificationsDrawer';
import { AdeptifyLogo } from './AdeptifyLogo';
import { UserAvatar } from './UserAvatar';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentUser, switchRole, logout: handleLogout } = useAuth();
  const { isMinimized: isSidebarMinimized, toggleMobile } = useSidebar();
  const { unreadCount: unreadNotifs, toggle: toggleNotifs } = useNotifications();
  const { theme, isDark, toggleTheme } = useTheme();

  const courses = useAppSelector((state) => state.courses.courses);
  const wishlist = useAppSelector((state) => state.courses.wishlist);

  // Synchronized wishlist badge count: counts only courses that actually exist in catalog
  const wishlistCount = useMemo(() => {
    if (!courses || courses.length === 0) return wishlist.length;
    const validCourseIds = new Set(courses.map((c) => c.id));
    return wishlist.filter((id) => validCourseIds.has(id)).length;
  }, [courses, wishlist]);

  // Dropdown states
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStreakOpen, setIsStreakOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Refs for click outside and keyboard shortcuts
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const streakContainerRef = useRef<HTMLDivElement>(null);

  // Global Ctrl + K / Cmd + K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsStreakOpen(false);
        setIsProfileMenuOpen(false);
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside listener for search and streak popovers
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      if (
        streakContainerRef.current &&
        !streakContainerRef.current.contains(e.target as Node)
      ) {
        setIsStreakOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Live matching courses for autocomplete
  const matchingCourses = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return courses
      .filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.instructor.name.toLowerCase().includes(q)
      )
      .slice(0, 4);
  }, [courses, searchQuery]);

  // Live matching categories
  const matchingCategories = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const categories = [
      'Development',
      'Design',
      'Business',
      'AI & Data Science',
      'Cloud & DevOps',
      'Marketing',
    ];
    return categories.filter((cat) => cat.toLowerCase().includes(q)).slice(0, 3);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCourseSelect = (courseId: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/courses/${courseId}`);
  };

  const handleCategorySelect = (category: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/courses?category=${encodeURIComponent(category)}`);
  };

  const handleRoleChange = (role: UserRole) => {
    switchRole(role);
    setIsProfileMenuOpen(false);
    if (role === 'admin') navigate('/admin');
    else if (role === 'instructor') navigate('/instructor');
    else navigate('/dashboard');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors w-full flex-shrink-0 h-16">
      <div className="flex items-center h-full w-full">
        
        {/* Left: Brand section - equal width and border alignment as sidebar */}
        <div 
          className={`${
            isSidebarMinimized ? 'md:w-20 px-2 justify-center' : 'md:w-64 px-4 justify-between'
          } h-full md:border-r border-slate-200 dark:border-slate-800 flex items-center transition-[width] duration-300 ease-in-out flex-shrink-0 bg-white dark:bg-slate-900`}
        >
          {/* Mobile menu trigger */}
          <button
            onClick={toggleMobile}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
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
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight truncate">
                  Adeptify
                </span>
                <span className="text-[9px] text-emerald-700 dark:text-emerald-400 font-bold tracking-wider uppercase truncate">
                  Skill Acceleration
                </span>
              </div>
            )}
          </Link>

          {/* Spacer on mobile to balance menu button */}
          <div className="w-6 md:hidden" />
        </div>

        {/* Right / Center Content */}
        <div className="flex-1 flex items-center justify-between h-full px-3 sm:px-6 lg:px-8 gap-2 sm:gap-4 min-w-0">
          
          {/* Center: Live Search Autocomplete with Ctrl+K support */}
          <div className="flex items-center flex-1 justify-center max-w-xl mx-1 sm:mx-4 relative" ref={searchContainerRef}>
            <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
              <div className="relative w-full h-10">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search courses, skills, instructors..."
                  value={searchQuery}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!isSearchOpen) setIsSearchOpen(true);
                  }}
                  className="w-full h-10 pl-10 pr-16 text-xs sm:text-sm bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border border-slate-200/80 dark:border-slate-700 focus:border-emerald-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                />

                {/* Right badge: Clear button or Ctrl+K shortcut hint */}
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        searchInputRef.current?.focus();
                      }}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-400 bg-white/90 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md shadow-2xs pointer-events-none">
                      Ctrl K
                    </kbd>
                  )}
                </div>
              </div>
            </form>

            {/* Live Autocomplete Dropdown */}
            <AnimatePresence>
              {isSearchOpen && searchQuery.trim().length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-12 left-0 right-0 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50 divide-y divide-slate-100 dark:divide-slate-700/60 max-h-[75vh] flex flex-col"
                >
                  {/* Matching Categories section */}
                  {matchingCategories.length > 0 && (
                    <div className="p-3 bg-slate-50/70 dark:bg-slate-800/50">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 px-1 flex items-center gap-1">
                        <Tag className="w-3 h-3 text-emerald-500" />
                        <span>Categories</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {matchingCategories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => handleCategorySelect(cat)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
                          >
                            <span>{cat}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Courses */}
                  <div className="p-2 overflow-y-auto flex-1 divide-y divide-slate-50 dark:divide-slate-700/40">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-2 pt-1 flex items-center justify-between">
                      <span>Courses ({matchingCourses.length})</span>
                      <span className="text-[9px] text-slate-400 normal-case">Instant Results</span>
                    </div>

                    {matchingCourses.length > 0 ? (
                      matchingCourses.map((c) => (
                        <div
                          key={c.id}
                          onClick={() => handleCourseSelect(c.id)}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50/60 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group"
                        >
                          <img
                            src={c.thumbnail}
                            alt={c.title}
                            className="w-11 h-11 rounded-lg object-cover flex-shrink-0 shadow-xs border border-slate-200 dark:border-slate-700"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {c.title}
                            </h4>
                            <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{c.category}</span>
                              <span>•</span>
                              <span className="truncate">{c.instructor.name}</span>
                              <span>•</span>
                              <span className="inline-flex items-center text-amber-500 font-bold gap-0.5">
                                <Star className="w-2.5 h-2.5 fill-current" />
                                {c.rating}
                              </span>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                              ₹{c.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-slate-500 dark:text-slate-400 text-xs">
                        No courses found for &quot;<span className="font-semibold text-slate-700 dark:text-slate-200">{searchQuery}</span>&quot;.
                      </div>
                    )}
                  </div>

                  {/* Dropdown footer with Enter to search */}
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <button
                      type="button"
                      onClick={handleSearchSubmit}
                      className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>See all results for &quot;{searchQuery}&quot;</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">Press Enter ↵</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            
            {/* Daily Learning Streak Badge (🔥 5 Days) */}
            <div className="relative" ref={streakContainerRef}>
              <button
                onClick={() => setIsStreakOpen(!isStreakOpen)}
                className="h-10 px-2 sm:px-3 rounded-xl flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/40 dark:hover:to-orange-900/40 border border-amber-200/80 dark:border-amber-700/40 text-amber-900 dark:text-amber-200 transition-all shadow-2xs group"
                title="Daily Study Streak: 5 Days Active"
              >
                <span className="text-base sm:text-lg animate-bounce group-hover:scale-125 transition-transform">🔥</span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-black text-amber-900 dark:text-amber-200 leading-none">5 Days</span>
                  <span className="text-[8px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-tighter leading-none hidden sm:block">
                    Streak
                  </span>
                </div>
              </button>

              {/* Streak Flyout Popover */}
              <AnimatePresence>
                {isStreakOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-12 mt-2 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 z-50"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🔥</span>
                        <div>
                          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">5-Day Study Streak!</h4>
                          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Today&apos;s goal completed ✓</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold">
                        +150 XP
                      </span>
                    </div>

                    {/* 7-Day Week Tracker */}
                    <div className="py-3">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">This Week&apos;s Activity</div>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {[
                          { day: 'M', active: true, today: false },
                          { day: 'T', active: true, today: false },
                          { day: 'W', active: true, today: false },
                          { day: 'T', active: true, today: false },
                          { day: 'F', active: true, today: true },
                          { day: 'S', active: false, today: false },
                          { day: 'S', active: false, today: false },
                        ].map((d, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <span className="text-[10px] font-bold text-slate-400">{d.day}</span>
                            <div
                              className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold transition-transform ${
                                d.today
                                  ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30 scale-105'
                                  : d.active
                                  ? 'bg-emerald-600 text-white shadow-xs'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              {d.active ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : '•'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 text-[11px]">Best streak: </span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">12 Days</span>
                      </div>
                      <Link
                        to="/dashboard"
                        onClick={() => setIsStreakOpen(false)}
                        className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                      >
                        View Dashboard →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark / light theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
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
                className="h-10 w-10 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
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
                className="h-10 flex items-center gap-2 p-1 pl-1 pr-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-slate-300 transition-all"
                title={`${currentUser.name} (${currentUser.role})`}
              >
                <UserAvatar
                  name={currentUser.name}
                  avatar={currentUser.avatar}
                  size="sm"
                  shape="square"
                  className="ring-1 ring-emerald-500/30"
                />
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 hidden sm:block" />
              </button>

              {isProfileMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsProfileMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-12 mt-2 w-64 z-40 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                      <UserAvatar
                        name={currentUser.name}
                        avatar={currentUser.avatar}
                        size="md"
                        shape="rounded"
                        className="ring-2 ring-emerald-500/20 flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-slate-900 dark:text-white truncate">
                          {currentUser.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {currentUser.email}
                        </div>
                        <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-[10px] font-semibold capitalize">
                          <Sparkles className="w-3 h-3" />
                          Role: {currentUser.role}
                        </div>
                      </div>
                    </div>

                    <div className="py-1 text-sm text-slate-700 dark:text-slate-300">
                      <Link
                        to="/profile"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <UserIcon className="w-4 h-4 text-slate-400" />
                        Profile Settings
                      </Link>
                      <Link
                        to="/dashboard"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4 text-slate-400" />
                        Student Dashboard
                      </Link>
                      <Link
                        to="/instructor"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <BookOpen className="w-4 h-4 text-emerald-500" />
                        Instructor Studio
                      </Link>
                      <Link
                        to="/admin"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Admin Dashboard
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                      <div className="px-4 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Switch View
                      </div>
                      <button
                        onClick={() => handleRoleChange('student')}
                        className={`w-full text-left px-4 py-1.5 text-xs flex items-center justify-between ${
                          currentUser.role === 'student' ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/40' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span>Student View</span>
                        {currentUser.role === 'student' && <span>✓</span>}
                      </button>
                      <button
                        onClick={() => handleRoleChange('instructor')}
                        className={`w-full text-left px-4 py-1.5 text-xs flex items-center justify-between ${
                          currentUser.role === 'instructor' ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/40' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span>Instructor View</span>
                        {currentUser.role === 'instructor' && <span>✓</span>}
                      </button>
                      <button
                        onClick={() => handleRoleChange('admin')}
                        className={`w-full text-left px-4 py-1.5 text-xs flex items-center justify-between ${
                          currentUser.role === 'admin' ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50/50 dark:bg-emerald-950/40' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span>Admin View</span>
                        {currentUser.role === 'admin' && <span>✓</span>}
                      </button>
                    </div>

                    <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          handleLogout();
                          navigate('/login');
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-sm transition-colors text-left"
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
