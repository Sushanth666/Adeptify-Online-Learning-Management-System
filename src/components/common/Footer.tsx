import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { AdeptifyLogo } from './AdeptifyLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 text-sm mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-800 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-700/30 group-hover:scale-105 transition-transform"
              >
                <AdeptifyLogo size={24} className="w-6 h-6" />
              </motion.div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                Adeptify
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Empowering global learners and instructors with high-velocity, interactive education. Master in-demand programming, design, cloud architectures, and data science skills.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Learn Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">Browse Courses</Link></li>
              <li><Link to="/courses?category=Development" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/courses?category=Design" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/courses?category=Cloud%20%26%20DevOps" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/courses?category=Data%20Science%20%26%20AI" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">AI & Data Science</Link></li>
            </ul>
          </div>

          {/* Quick Portals Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Portals</h4>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">Student Dashboard</Link></li>
              <li><Link to="/my-learning" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">My Enrolled Courses</Link></li>
              <li><Link to="/instructor" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">Instructor Hub</Link></li>
              <li><Link to="/admin" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">Admin Dashboard</Link></li>
              <li><Link to="/certificates" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors">Verify Certificate</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Weekly Digest</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Get handpicked tutorials, free tech cheat sheets, and course vouchers every Thursday.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="name@work-email.com"
                className="w-full px-3.5 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="button"
                className="w-full py-2 px-3 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors shadow"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Adeptify Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> ISO 27001 Certified Security
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> WCAG 2.1 Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
