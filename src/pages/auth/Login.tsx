import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Sparkles, Check } from 'lucide-react';
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

        {/* 1-Click Demo Accounts Selector */}
        <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant 1-Click Demo Login</span>
            </div>
            {selectedRole && (
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100/90 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Check className="w-3 h-3" /> Details filled below
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleSelectRole('student')}
              className={`py-2 px-2 rounded-xl text-[11px] font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                selectedRole === 'student'
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-500 shadow-sm shadow-emerald-600/30'
                  : 'bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-emerald-200 text-emerald-800'
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
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-500 shadow-sm shadow-emerald-600/30'
                  : 'bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-emerald-200 text-emerald-800'
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
                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-500 shadow-sm shadow-emerald-600/30'
                  : 'bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-emerald-200 text-emerald-800'
              }`}
            >
              <span>🛡️</span>
              <span>Admin</span>
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
                  placeholder="e.g. name@adeptify.in or select an option above"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSelectedRole(null);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
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
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
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
export default Login;
