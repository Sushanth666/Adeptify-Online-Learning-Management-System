import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Shield, Code2, Award, Zap } from 'lucide-react';
import { AdeptifyLogo } from '../../components/common/AdeptifyLogo';
import { useAppDispatch } from '../../store';
import { loginUser } from '../../store/slices/authSlice';
import { showToast } from '../../store/slices/uiSlice';
import { UserRole } from '../../types';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsLoading(true);
    await dispatch(loginUser({ email, role })).unwrap();
    setIsLoading(false);

    dispatch(showToast({
      message: `Account created successfully! Welcome to Adeptify, ${name}!`,
      type: 'success'
    }));

    if (role === 'instructor') navigate('/instructor');
    else navigate('/dashboard');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-[#052317] to-slate-900 flex items-center justify-center p-4 sm:p-6 overflow-hidden selection:bg-emerald-500 selection:text-white">
      {/* ======================================================== */}
      {/* 1. DYNAMIC ANIMATED BACKGROUND ORBS & AURORA GLOWS       */}
      {/* ======================================================== */}
      
      {/* Emerald Aurora Orb (Top Left) */}
      <motion.div
        animate={{
          x: [-30, 40, -20, -30],
          y: [-20, 30, -10, -20],
          scale: [1, 1.25, 0.95, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-36 -left-36 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 blur-[110px] pointer-events-none"
      />

      {/* Mint Cyan Nebula Orb (Bottom Right) */}
      <motion.div
        animate={{
          x: [30, -40, 20, 30],
          y: [20, -30, 10, 20],
          scale: [1, 1.3, 1.05, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-36 -right-36 w-[34rem] h-[34rem] rounded-full bg-gradient-to-bl from-teal-400 via-emerald-600 to-[#022c22] blur-[120px] pointer-events-none"
      />

      {/* Deep Forest Center Pulse Orb */}
      <motion.div
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-emerald-500/20 blur-[140px] pointer-events-none"
      />

      {/* Subtle Engineering Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-slate-950/30 to-slate-950/80 pointer-events-none" />

      {/* Floating Peripheral Tech Badges */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 absolute top-20 left-16 pointer-events-none"
      >
        <Code2 className="w-4 h-4 text-emerald-400" />
        <span>73+ Production Tracks</span>
      </motion.div>

      <motion.div
        animate={{ y: [-10, 6, -10], rotate: [1, -2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 absolute top-24 right-16 pointer-events-none"
      >
        <Award className="w-4 h-4 text-emerald-400" />
        <span>Accredited Faculty</span>
      </motion.div>

      {/* Main Container */}
      <div className="relative w-full max-w-md space-y-6 z-10 animate-in fade-in zoom-in-95 duration-500">
        {/* Brand */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 group-hover:scale-105 transition-all p-1"
            >
              <span className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-300 opacity-40 blur-sm group-hover:opacity-75 transition-opacity" />
              <div className="relative z-10 w-full h-full rounded-xl bg-slate-950/40 flex items-center justify-center backdrop-blur-xs">
                <AdeptifyLogo size={30} className="w-7 h-7 drop-shadow-md" />
              </div>
            </motion.div>
            <div className="text-left">
              <span className="block font-black text-2xl tracking-tight text-white drop-shadow-sm">
                Adeptify
              </span>
              <span className="block text-[10px] text-emerald-400 font-bold uppercase tracking-widest -mt-0.5">
                Skill Acceleration
              </span>
            </div>
          </Link>
          <h2 className="text-lg font-bold text-slate-100 mt-2">Create Free Account</h2>
          <p className="text-xs text-slate-400">Join thousands of students and instructors worldwide</p>
        </div>

        {/* Form Card */}
        <div className="relative rounded-3xl p-6 sm:p-8 bg-white/95 backdrop-blur-2xl border border-white/40 shadow-2xl shadow-emerald-950/80 space-y-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sneha Reddy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Create Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                I am joining as:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    role === 'student'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  🎓 Student Learner
                </button>
                <button
                  type="button"
                  onClick={() => setRole('instructor')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    role === 'instructor'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  👨‍🏫 Instructor / Faculty
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/45 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
            >
              <span>{isLoading ? 'Creating Account...' : 'Get Started Free'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-emerald-600 hover:underline">
              Sign In
            </Link>
          </div>
        </div>

        {/* Footer Security Badges */}
        <div className="text-center">
          <p className="text-[11px] text-slate-400/90 font-medium">
            🔒 Enterprise End-to-End Encryption • 256-Bit SSL Secured
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
