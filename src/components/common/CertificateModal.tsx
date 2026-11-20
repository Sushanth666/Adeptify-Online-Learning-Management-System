import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Share2, Award, ShieldCheck, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Certificate } from '../../types';
import { useAppDispatch } from '../../store';
import { showToast } from '../../store/slices/uiSlice';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const dispatch = useAppDispatch();
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (certificate) {
      // Confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#059669', '#f59e0b', '#10b981', '#166534'],
      });
    }
  }, [certificate]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    dispatch(showToast({
      message: `Certificate ${certificate.certificateNumber} downloaded successfully!`,
      type: 'success'
    }));
  };

  const handleShare = () => {
    navigator.clipboard.writeText(certificate.verificationUrl);
    dispatch(showToast({
      message: 'Certificate verification link copied to clipboard!',
      type: 'info'
    }));
  };

  return createPortal(
    <AnimatePresence>
      {/* Full screen backdrop with natural scroll alignment so content is never cut off */}
      <div 
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/85 backdrop-blur-md p-3 sm:p-6"
      >
        <div className="min-h-full flex items-center justify-center py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
          >
            {/* Prominent High-Visibility Floating Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/90 dark:bg-slate-800 hover:bg-rose-600 dark:hover:bg-rose-600 text-white flex items-center justify-center shadow-lg border border-white/20 dark:border-slate-700 transition-all hover:scale-110 active:scale-95"
              title="Close Certificate (Esc)"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 bg-slate-900 dark:bg-slate-950 text-white pr-16 sm:pr-20 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-xs sm:text-sm tracking-wide">
                  Official Certificate of Completion
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                  title="Share Certificate"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                  title="Print Certificate"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md shadow-emerald-600/30 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Printable Certificate Frame */}
            <div className="p-4 sm:p-8 md:p-10 bg-gradient-to-br from-amber-50/40 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
              <div
                ref={certRef}
                className="relative p-6 sm:p-10 md:p-12 border-4 sm:border-8 border-double border-amber-600/60 rounded-2xl bg-white dark:bg-slate-900 shadow-inner"
              >
                {/* Corner Ornaments */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-amber-600" />
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-amber-600" />
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-amber-600" />
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-amber-600" />

                {/* Watermark Logo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
                  <span className="text-7xl sm:text-9xl font-black tracking-widest text-emerald-950 dark:text-emerald-100 uppercase">
                    ADEPTIFY
                  </span>
                </div>

                {/* Content Header */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />
                    Adeptify Institute of Engineering & Technology • Bengaluru, India 🇮🇳
                  </div>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
                    Certificate of Achievement
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 font-sans">
                    This acknowledges and certifies that
                  </p>
                </div>

                {/* Recipient Name */}
                <div className="my-4 sm:my-6 text-center">
                  <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-serif border-b-2 border-slate-300 dark:border-slate-700 inline-block px-6 sm:px-10 pb-1 sm:pb-2">
                    {certificate.studentName}
                  </div>
                </div>

                {/* Course Title and Achievement description */}
                <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    has successfully mastered all lectures, coding workshops, and evaluation criteria for the professional course
                  </p>
                  <div className="text-base sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 font-sans px-2">
                    {certificate.courseTitle}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Grade Achieved: {certificate.grade}
                  </div>
                </div>

                {/* Certificate Footer: Signatures & Gold Seal */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center">
                  {/* Instructor Sign */}
                  <div className="space-y-1">
                    <div className="font-serif italic text-base sm:text-lg text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-400 dark:border-slate-600 max-w-[180px] sm:max-w-[200px] mx-auto pb-1">
                      {certificate.instructorName}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      Lead Instructor
                    </div>
                  </div>

                  {/* Golden Seal */}
                  <div className="flex flex-col items-center justify-center my-2 sm:my-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 p-1 shadow-lg flex items-center justify-center">
                      <div className="w-full h-full rounded-full border-2 border-dashed border-amber-900/30 flex flex-col items-center justify-center text-white">
                        <Award className="w-6 h-6 sm:w-7 sm:h-7 text-amber-900" />
                      </div>
                    </div>
                    <span className="mt-1 text-[9px] sm:text-[10px] font-extrabold text-amber-900 dark:text-amber-300 uppercase tracking-widest">
                      Verified Seal
                    </span>
                  </div>

                  {/* Director Sign & Date */}
                  <div className="space-y-1">
                    <div className="font-sans text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 border-b border-slate-400 dark:border-slate-600 max-w-[180px] sm:max-w-[200px] mx-auto pb-1">
                      Prof. K. S. Ramanathan
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                      Registrar • Bengaluru, IND
                    </div>
                  </div>
                </div>

                {/* ID & Verification */}
                <div className="mt-6 sm:mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800 gap-2">
                  <span>Certificate ID: <strong className="text-slate-600 dark:text-slate-300">{certificate.certificateNumber}</strong></span>
                  <span>Verification: <a href={certificate.verificationUrl} target="_blank" rel="noreferrer" className="text-emerald-700 dark:text-emerald-400 font-semibold underline">{certificate.verificationUrl}</a></span>
                </div>
              </div>

              {/* Bottom Action / Close Bar */}
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-2xs border border-transparent dark:border-slate-700"
                >
                  <X className="w-4 h-4" />
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>,
    document.body
  );
};


