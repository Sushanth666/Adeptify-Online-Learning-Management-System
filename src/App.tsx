import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from './store';
import { initializeLocalStorage } from './services/api';
import { fetchNotifications } from './store/slices/uiSlice';
import { startTabAnimation } from './utils';
import { Navbar, Sidebar, Footer, ToastContainer } from './components';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    initializeLocalStorage();
    dispatch(fetchNotifications());
    const cleanupTabAnim = startTabAnimation();
    return () => {
      if (cleanupTabAnim) cleanupTabAnim();
    };
  }, [dispatch]);

  // Is this the focused classroom video player view or auth page?
  const isClassroom = location.pathname.startsWith('/learning/');
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white overflow-hidden">
      {/* Toast Notification Stack (2-sec auto-dismiss) */}
      <ToastContainer />

      {/* Primary Global Navigation (Frozen at Top) */}
      {!isClassroom && !isAuthPage && <Navbar />}

      {/* Main Content Layout with Persistent Frozen Sidebar and Independent Scrollable Page Content */}
      <div className="flex-1 flex overflow-hidden">
        {!isClassroom && !isAuthPage && <Sidebar />}
        
        {/* Scrollable Page Body (Only this area scrolls) */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-slate-50 relative">
          <div className="flex-1">
            <AppRoutes />
          </div>

          {/* Primary Global Footer (Inside scrollable page container) */}
          {!isClassroom && !isAuthPage && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default App;
