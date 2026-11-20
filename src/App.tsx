import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
import { initializeLocalStorage } from './services/api';
import { fetchCourses } from './store/slices/courseSlice';
import { fetchNotifications } from './store/slices/uiSlice';
import { fetchEnrollments } from './store/slices/learningSlice';
import { startTabAnimation } from './utils';
import { Navbar, Sidebar, Footer, ToastContainer, AnimatedBackground } from './components';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    initializeLocalStorage();
    dispatch(fetchCourses());
    dispatch(fetchEnrollments());
    dispatch(fetchNotifications());
    const cleanupTabAnim = startTabAnimation();
    return () => {
      if (cleanupTabAnim) cleanupTabAnim();
    };
  }, [dispatch]);

  // Only show header/sidebar/footer if user is authenticated and not in classroom or auth pages
  const isClassroom = location.pathname.startsWith('/learning/');
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const showChrome = isAuthenticated && !isClassroom && !isAuthPage;

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white overflow-hidden relative">
      {/* Toast Notification Stack (2-sec auto-dismiss) */}
      <ToastContainer />

      {/* Dynamic Animated Ambient Background Canvas for all pages */}
      {showChrome && <AnimatedBackground />}

      {/* Primary Global Navigation (Frozen at Top) */}
      {showChrome && <Navbar />}

      {/* Main Content Layout with Persistent Frozen Sidebar and Independent Scrollable Page Content */}
      <div className="flex-1 flex overflow-hidden relative z-10">
        {showChrome && <Sidebar />}
        
        {/* Scrollable Page Body (Only this area scrolls) */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto relative bg-transparent">
          <div className="flex-1 relative z-10">
            <AppRoutes />
          </div>

          {/* Primary Global Footer (Inside scrollable page container) */}
          {showChrome && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default App;
