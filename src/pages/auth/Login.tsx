import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Sparkles, Check, Shield, Code2, Award, Zap } from 'lucide-react';
import { AdeptifyLogo } from '../../components/common/AdeptifyLogo';
import { useAppDispatch } from '../../store';
import { loginUser } from '../../store/slices/authSlice';
import { showToast } from '../../store/slices/uiSlice';
import { UserRole } from '../../types';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Inputs are blank initially as requested
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // When clicking an option, autofill that particular option's credentials into the form below
  const handleSelectRole = (role: UserRole) => {
    setSelectedRole(role);
    if (role === 'admin') {
      setEmail('vikram.rao@adeptify.in');
      setPassword('password123');
    } else if (role === 'instructor') {
      setEmail('priya.patel@adeptify.in');
      setPassword('password123');
    } else {
      setEmail('aarav.sharma@adeptify.in');
      setPassword('password123');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      dispatch(showToast({ message: 'Please select an option above or enter credentials.', type: 'error' }));
      return;
    }

    setIsLoading(true);

    // Resolve role from selection or email hint
    let resolvedRole: UserRole = selectedRole || 'student';
    if (!selectedRole) {
      if (email.includes('admin') || email.includes('vikram')) {
        resolvedRole = 'admin';
      } else if (email.includes('instructor') || email.includes('priya')) {
        resolvedRole = 'instructor';
      } else {
        resolvedRole = 'student';
      }
    }

    try {
      await dispatch(loginUser({ email, role: resolvedRole })).unwrap();
      dispatch(showToast({ message: `Logged in as ${resolvedRole.toUpperCase()} successfully!`, type: 'success' }));
      
      if (resolvedRole === 'admin') {
        navigate('/admin');
      } else if (resolvedRole === 'instructor') {
        navigate('/instructor');
      } else {
        navigate('/dashboard');
      }
    } catch {
      dispatch(showToast({ message: 'Login failed. Please check credentials.', type: 'error' }));
    } finally {
      setIsLoading(false);
    }
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

      {/* ======================================================== */}
      {/* 2. FLOATING PERIPHERAL TECH BADGES (Desktop Experience)  */}
      {/* ======================================================== */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 absolute top-20 left-16 pointer-events-none"
      >
        <Code2 className="w-4 h-4 text-emerald-400" />
        <span>React 19 & Next.js 15 Labs</span>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-teal-500/25 text-teal-300 text-xs font-semibold shadow-lg shadow-teal-950/50 absolute bottom-24 left-20 pointer-events-none"
      >
        <Shield className="w-4 h-4 text-teal-400" />
        <span>CERT-In Cyber Defense</span>
      </motion.div>

      <motion.div
        animate={{ y: [-10, 6, -10], rotate: [1, -2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 absolute top-24 right-16 pointer-events-none"
      >
        <Award className="w-4 h-4 text-emerald-400" />
        <span>Verifiable Diplomas & Credits</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -10, 6], rotate: [-1, 2, -1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/25 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 absolute bottom-20 right-20 pointer-events-none"
      >
        <Zap className="w-4 h-4 text-emerald-400" />
        <span>₹ Indian UPI & FinTech LMS</span>
      </motion.div>

      {/* ======================================================== */}
      {/* 3. MAIN AUTH CARD CONTAINER                              */}
      {/* ======================================================== */}
      <div className="relative w-full max-w-md space-y-6 z-10 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Brand Header */}
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
          <h2 className="text-lg font-bold text-slate-100 mt-2">Welcome back to your workspace</h2>
          <p className="text-xs text-slate-400">Sign in to resume courses, quizzes & credentials</p>
        </div>

        {/* 1-Click Demo Accounts Selector */}
        <div className="relative overflow-hidden rounded-2xl p-4 space-y-2.5 bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 shadow-lg shadow-emerald-950/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant 1-Click Demo Login</span>
            </div>
            {selectedRole && (
              <span className="text-[10px] text-emerald-200 font-bold bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 animate-in fade-in duration-200">
                <Check className="w-3 h-3 text-emerald-400" /> Details filled below
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleSelectRole('student')}
              className={`py-2 px-2 rounded-xl text-[11px] font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                selectedRole === 'student'
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400 shadow-md shadow-emerald-600/40 scale-102'
                  : 'bg-slate-800/80 hover:bg-slate-700/80 hover:border-emerald-500/50 border border-slate-700 text-slate-200'
              }`}
            >
              <span>🎓</span>
              <span>Student</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectRole('instructor')}
              className={`py-2 px-2 rounded-xl text-[11px] font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                selectedRole === 'instructor'
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400 shadow-md shadow-emerald-600/40 scale-102'
                  : 'bg-slate-800/80 hover:bg-slate-700/80 hover:border-emerald-500/50 border border-slate-700 text-slate-200'
              }`}
            >
              <span>👨‍🏫</span>
              <span>Instructor</span>
            </button>
            <button
              type="button"
              onClick={() => handleSelectRole('admin')}
              className={`py-2 px-2 rounded-xl text-[11px] font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                selectedRole === 'admin'
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400 shadow-md shadow-emerald-600/40 scale-102'
                  : 'bg-slate-800/80 hover:bg-slate-700/80 hover:border-emerald-500/50 border border-slate-700 text-slate-200'
              }`}
            >
              <span>🛡️</span>
              <span>Admin</span>
            </button>
          </div>
        </div>

        {/* Form Card (Glassmorphic) */}
        <div className="relative rounded-3xl p-6 sm:p-8 bg-white/95 backdrop-blur-2xl border border-white/40 shadow-2xl shadow-emerald-950/80 space-y-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="e.g. name@adeptify.in or select an option above"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSelectedRole(null);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(showToast({ message: 'Password reset link sent to demo email!', type: 'info' }));
                  }}
                  className="text-[11px] text-emerald-600 font-semibold hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/45 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 group"
            >
              <span>{isLoading ? 'Signing In...' : 'Sign In to Workspace'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-bold text-emerald-600 hover:underline">
              Create an account
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
export default Login;
