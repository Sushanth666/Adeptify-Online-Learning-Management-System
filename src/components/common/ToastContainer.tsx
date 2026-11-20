import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { removeToast } from '../../store/slices/uiSlice';

interface ToastItemProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

const ToastItem: React.FC<ToastItemProps> = ({ id, message, type }) => {
  const dispatch = useAppDispatch();

  // Exactly 2 seconds auto-dismiss
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast(id));
    }, 2000);

    return () => clearTimeout(timer);
  }, [id, dispatch]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden pointer-events-auto flex items-start p-3.5 sm:p-4 rounded-2xl shadow-xl border backdrop-blur-md ${
        type === 'success'
          ? 'bg-emerald-50/95 border-emerald-200 text-emerald-950 shadow-emerald-900/10'
          : type === 'error'
          ? 'bg-rose-50/95 border-rose-200 text-rose-950 shadow-rose-900/10'
          : 'bg-emerald-50/95 border-emerald-200 text-emerald-950 shadow-emerald-900/10'
      }`}
    >
      <div className="mr-3 mt-0.5 flex-shrink-0">
        {type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
        {type === 'error' && <AlertCircle className="w-5 h-5 text-rose-600" />}
        {type === 'info' && <Info className="w-5 h-5 text-emerald-600" />}
      </div>

      <div className="flex-1 text-xs sm:text-sm font-semibold leading-snug pr-2">
        {message}
      </div>

      <button
        onClick={() => dispatch(removeToast(id))}
        className="ml-1 -mt-0.5 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-black/5 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>

      {/* 2-Second Linear Progress Bar */}
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 2, ease: 'linear' }}
        className={`absolute bottom-0 left-0 h-1 ${
          type === 'success'
            ? 'bg-emerald-500'
            : type === 'error'
            ? 'bg-rose-500'
            : 'bg-emerald-500'
        }`}
      />
    </motion.div>
  );
};

export const ToastContainer: React.FC = () => {
  const toasts = useAppSelector((state) => state.ui.toasts);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
