import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home as HomeIcon } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 text-center transition-colors duration-200">
      <div className="max-w-md space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-100 dark:border-emerald-800/40">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">404 - Page Not Found</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          The educational resource or page you are looking for does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return to Adeptify Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
