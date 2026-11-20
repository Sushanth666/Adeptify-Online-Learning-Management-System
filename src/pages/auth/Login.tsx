import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, ShieldCheck, User, Sparkles } from 'lucide-react';
import { AdeptifyLogo } from '../../components/common/AdeptifyLogo';
import { useAppDispatch } from '../../store';
import { loginUser } from '../../store/slices/authSlice';
import { showToast } from '../../store/slices/uiSlice';
import { UserRole } from '../../types';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('aarav.sharma@adeptify.in');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(loginUser({ email, role: 'student' })).unwrap();
      dispatch(showToast({ message: 'Welcome back to Adeptify India!', type: 'success' }));
      navigate('/dashboard');
    } catch {
      dispatch(showToast({ message: 'Login failed. Please check credentials.', type: 'error' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoLogin = async (role: UserRole) => {
    setIsLoading(true);
    const demoEmail = role === 'admin' 
      ? 'vikram.rao@adeptify.in' 
      : role === 'instructor' 
      ? 'priya.patel@adeptify.in' 
      : 'aarav.sharma@adeptify.in';

    await dispatch(loginUser({ email: demoEmail, role })).unwrap();
    dispatch(showToast({ message: `Logged in as ${role.toUpperCase()} (Demo Access)`, type: 'success' }));
    
    if (role === 'admin') navigate('/admin');
    else if (role === 'instructor') navigate('/instructor');
    else navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Brand */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-800 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-700/30 group-hover:scale-105 transition-transform"
            >
              <AdeptifyLogo size={28} className="w-7 h-7 drop-shadow-sm" />
            </motion.div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              Adeptify
            </span>
          </Link>
          <h2 className="text-xl font-bold text-slate-900">Welcome back</h2>
          <p className="text-xs text-slate-500">Sign in to your learning account to continue</p>
        </div>

        {/* 1-Click Demo Accounts Box */}
        <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant 1-Click Demo Login</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('student')}
              className="py-2 px-2 rounded-xl bg-white hover:bg-emerald-600 hover:text-white border border-emerald-200 text-[11px] font-bold text-emerald-700 transition-all shadow-xs"
            >
              🎓 Student
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('instructor')}
              className="py-2 px-2 rounded-xl bg-white hover:bg-emerald-600 hover:text-white border border-emerald-200 text-[11px] font-bold text-emerald-700 transition-all shadow-xs"
            >
              👨‍🏫 Instructor
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemoLogin('admin')}
              className="py-2 px-2 rounded-xl bg-white hover:bg-emerald-600 hover:text-white border border-emerald-200 text-[11px] font-bold text-emerald-700 transition-all shadow-xs"
            >
              🛡️ Admin
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to demo email!'); }} className="text-[11px] text-emerald-600 font-semibold hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2"
            >
              <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-bold text-emerald-600 hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

