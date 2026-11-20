import React from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, UserCheck, Lock } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setRole } from '../../store/slices/authSlice';
import { showToast } from '../../store/slices/uiSlice';
import { UserRole } from '../../types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { currentUser, isAuthenticated } = useAppSelector((state) => state.auth);

  // If user is not authenticated, redirect directly to /login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If role restrictions apply
  const isAuthorized = !allowedRoles || allowedRoles.length === 0 || allowedRoles.includes(currentUser.role);

  if (isAuthorized) {
    return <>{children}</>;
  }

  // Target role needed for this path
  const requiredRole: UserRole = location.pathname.startsWith('/admin')
    ? 'admin'
    : 'instructor';

  const handleSwitchRole = () => {
    dispatch(setRole(requiredRole));
    dispatch(showToast({
      message: `Switched view to ${requiredRole.toUpperCase()} — Access Granted!`,
      type: 'success'
    }));
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 transition-colors duration-200">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Lock Icon */}
        <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto shadow-inner">
          <Lock className="w-8 h-8" />
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" />
            Access Restricted
          </span>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            {requiredRole === 'admin' ? 'Admin Portal Access Only' : 'Instructor Studio Access Only'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            This page requires <strong>{requiredRole.toUpperCase()}</strong> permissions. You are currently logged in with the <strong>{currentUser.role.toUpperCase()}</strong> role.
          </p>
        </div>

        {/* Role Quick Switcher for Testing/Demo */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-left space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <span>Current Role:</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 capitalize font-bold">
              {currentUser.role}
            </span>
          </div>

          <button
            onClick={handleSwitchRole}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm shadow-emerald-600/30"
          >
            <UserCheck className="w-4 h-4" />
            <span>Switch to {requiredRole === 'admin' ? 'Administrator' : 'Instructor'} View</span>
          </button>
        </div>

        {/* Return Button */}
        <div>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Student Dashboard</span>
          </button>
        </div>

      </div>
    </div>
  );
};
