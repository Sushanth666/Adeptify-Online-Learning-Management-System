import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  TrendingUp,
  Compass,
  CheckCircle2,
  Play
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchCourses } from '../store/slices/courseSlice';
import { fetchEnrollments } from '../store/slices/learningSlice';
import { CourseCard } from '../components/course/CourseCard';
import { mockCategories } from '../data/mockData';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses.courses);
  const enrollments = useAppSelector((state) => state.learning.enrollments);

  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchEnrollments());
  }, [dispatch]);

  const featuredCourses = useMemo(() => courses.slice(0, 3), [courses]);

  const enrollmentMap = useMemo(() => {
    const map = new Map();
    enrollments.forEach((e) => map.set(e.courseId, e));
    return map;
  }, [enrollments]);

  return (
    <div className="space-y-16 pb-16 overflow-hidden">
      {/* Hero Section with Floating Ambient Orbs */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 via-white to-slate-50 pt-16 pb-20 lg:pt-24 lg:pb-32">
        {/* Floating Ambient Mesh Glows */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 left-1/4 w-[500px] h-[300px] bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-20 right-1/4 w-[450px] h-[320px] bg-teal-400/15 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/80 text-emerald-800 text-xs font-bold shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Adeptify India 🇮🇳 | Premier Engineering & Tech Academy</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]"
          >
            Master In-Demand Tech Skills for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
              India's Top Tech Companies & Unicorns
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Curated by India's lead software architects from Bengaluru & Hyderabad. Attend interactive video lessons, practice hands-on coding labs, solve quizzes, and earn verifiable industry certificates.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/courses"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Indian Tech Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/dashboard"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Student Dashboard</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Live Browser Tab Animation Showcase (Matching User's Screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 max-w-xl mx-auto"
          >
            <div className="p-1 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 shadow-xl shadow-emerald-600/10">
              <div className="bg-slate-900 rounded-xl p-3 text-left border border-slate-800 flex items-center justify-between gap-3 shadow-inner">
                {/* Browser Tab Pill */}
                <div className="flex items-center gap-3 bg-[#202124] hover:bg-[#292a2d] transition-colors px-3.5 py-2 rounded-lg border border-slate-700/60 shadow-sm flex-1 max-w-md overflow-hidden">
                  {/* Animated Graduation Cap Favicon */}
                  <motion.div
                    animate={{
                      rotate: [-8, 8, -8],
                      y: [0, -2, 0],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-400 p-0.5 flex items-center justify-center shadow-md shadow-emerald-500/30"
                  >
                    <span className="text-white text-xs">🎓</span>
                  </motion.div>

                  {/* Scrolling / Animated Marquee Title */}
                  <div className="overflow-hidden whitespace-nowrap text-xs font-semibold text-slate-200 tracking-wide flex-1">
                    <motion.div
                      animate={{
                        x: ['0%', '-50%'],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="inline-block"
                    >
                      <span className="mr-8">Adeptify | Skill Acceleration for Engineers 🇮🇳</span>
                      <span className="mr-8 text-emerald-400">• Learn • Build • Excel</span>
                      <span className="mr-8">Adeptify | Skill Acceleration for Engineers 🇮🇳</span>
                      <span className="mr-8 text-teal-400">• India's #1 Tech Academy</span>
                    </motion.div>
                  </div>

                  {/* Tab Close X Icon */}
                  <div className="w-4 h-4 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/60 cursor-pointer text-[10px]">
                    ✕
                  </div>
                </div>

                {/* Live Indicator Pill */}
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Tab Live</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 font-medium">
              ⬆ Look directly at your browser tab above! The graduation cap is swinging and the title marquee is continuously scrolling in your browser tab.
            </p>
          </motion.div>

          {/* Social Proof Stats with Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-10 text-slate-800 border-t border-slate-200/80"
          >
            {[
              { label: 'Learners Across India', value: '1,84,000+' },
              { label: 'Accredited Programs', value: '140+' },
              { label: 'Career Transition Rate', value: '98.4%' },
              { label: 'Certificates Verified', value: '45,000+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-2 rounded-xl transition-all"
              >
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Indian Tech Ecosystem Hiring Partners */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-8 flex flex-col items-center gap-3"
          >
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Alumni Hired Across India's Leading Tech Hubs
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-500">
              <span className="hover:text-emerald-700 transition-colors">Google India</span>
              <span>•</span>
              <span className="hover:text-emerald-700 transition-colors">Microsoft IDC</span>
              <span>•</span>
              <span className="hover:text-emerald-700 transition-colors">Flipkart</span>
              <span>•</span>
              <span className="hover:text-emerald-700 transition-colors">Swiggy</span>
              <span>•</span>
              <span className="hover:text-emerald-700 transition-colors">Zomato</span>
              <span>•</span>
              <span className="hover:text-emerald-700 transition-colors">Razorpay</span>
              <span>•</span>
              <span className="hover:text-emerald-700 transition-colors">Infosys</span>
              <span>•</span>
              <span className="hover:text-emerald-700 transition-colors">TCS Digital</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
              Top Trending Programs
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Tech Masterclasses
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Handcrafted curricula with coding labs, interactive quizzes, and instructor support.
            </p>
          </div>
          <Link
            to="/courses"
            className="text-sm font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 group"
          >
            Browse All Courses{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              enrollment={enrollmentMap.get(course.id)}
            />
          ))}
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Top Categories to Explore
          </h2>
          <p className="text-sm text-slate-500">
            Tailor your learning roadmap according to your career objectives.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockCategories.filter((c) => c.id !== 'cat-all').map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={`/courses?category=${encodeURIComponent(cat.name)}`}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 text-center transition-all group flex flex-col items-center justify-center space-y-2 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xs text-slate-800 group-hover:text-emerald-700 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-slate-400 font-medium">
                  {cat.count} Courses
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3 Pillars: Student, Instructor, Admin Features Showcase */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              End-to-End LMS Ecosystem
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Built for Students, Instructors, and Administrators
            </h2>
            <p className="text-slate-400 text-sm">
              Explore the dedicated portals crafted for every participant in the educational process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Pillar */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-slate-800/70 border border-slate-700/80 hover:border-emerald-500/50 space-y-4 flex flex-col justify-between transition-colors shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Student Experience</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Interactive video lecture player</li>
                  <li className="flex items-center gap-2">✓ Instant quizzes & coding assignments</li>
                  <li className="flex items-center gap-2">✓ Downloadable study sheets & starter repos</li>
                  <li className="flex items-center gap-2">✓ Verifiable certificate upon completion</li>
                </ul>
              </div>
              <Link
                to="/dashboard"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                Go to Student Hub <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Instructor Pillar */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-slate-800/70 border border-slate-700/80 hover:border-emerald-500/50 space-y-4 flex flex-col justify-between transition-colors shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Instructor Studio</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Curriculum builder & lecture uploader</li>
                  <li className="flex items-center gap-2">✓ Student enrollment directory</li>
                  <li className="flex items-center gap-2">✓ Course earnings & review analytics</li>
                  <li className="flex items-center gap-2">✓ Assignment review & feedback</li>
                </ul>
              </div>
              <Link
                to="/instructor"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-teal-400 hover:text-teal-300"
              >
                Go to Instructor Studio <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Admin Pillar */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-slate-800/70 border border-slate-700/80 hover:border-emerald-500/50 space-y-4 flex flex-col justify-between transition-colors shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Admin Dashboard</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Platform gross revenue charts</li>
                  <li className="flex items-center gap-2">✓ Course accreditation & approvals</li>
                  <li className="flex items-center gap-2">✓ Global student & instructor records</li>
                  <li className="flex items-center gap-2">✓ Export audit logs & analytics CSV</li>
                </ul>
              </div>
              <Link
                to="/admin"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                Go to Admin Dashboard <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
