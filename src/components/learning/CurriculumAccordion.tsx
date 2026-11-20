import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  PlayCircle, 
  CheckCircle2, 
  Lock, 
  HelpCircle, 
  FileText, 
  Paperclip,
  Clock
} from 'lucide-react';
import { Chapter, Lesson } from '../../types';

interface CurriculumAccordionProps {
  chapters: Chapter[];
  currentLessonId?: string;
  completedLessonIds?: string[];
  isEnrolled: boolean;
  onSelectLesson: (lesson: Lesson) => void;
  onOpenQuiz?: (lesson: Lesson) => void;
  onOpenAssignment?: (lesson: Lesson) => void;
}

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({
  chapters,
  currentLessonId,
  completedLessonIds = [],
  isEnrolled,
  onSelectLesson,
  onOpenQuiz,
  onOpenAssignment,
}) => {
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>(() => {
    // Open first 2 chapters by default
    const map: Record<string, boolean> = {};
    chapters.forEach((ch, idx) => {
      map[ch.id] = idx < 2;
    });
    return map;
  });

  const toggleChapter = (id: string) => {
    setOpenChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-3">
      {chapters.map((chapter, chIdx) => {
        const isOpen = openChapters[chapter.id];
        const chapterLessons = chapter.lessons || [];
        const completedCount = chapterLessons.filter((l) =>
          completedLessonIds.includes(l.id)
        ).length;

        return (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: chIdx * 0.05 }}
            className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-emerald-200 transition-colors"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full flex items-center justify-between p-4 bg-slate-50/70 hover:bg-slate-100/70 transition-colors text-left"
            >
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-0.5">
                  Section {chIdx + 1}
                </span>
                <h4 className="font-bold text-slate-800 text-sm">
                  {chapter.title}
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                  {completedCount}/{chapterLessons.length} done
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-1 rounded-lg text-slate-400"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>
            </button>

            {/* Animated Lessons List with AnimatePresence */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="divide-y divide-slate-100 overflow-hidden"
                >
                  {chapterLessons.map((lesson) => {
                    const isActive = lesson.id === currentLessonId;
                    const isDone = completedLessonIds.includes(lesson.id);
                    const isLocked = !isEnrolled && !lesson.isFreePreview;

                    return (
                      <motion.div
                        key={lesson.id}
                        whileHover={!isLocked ? { backgroundColor: '#f8fafc' } : {}}
                        onClick={() => !isLocked && onSelectLesson(lesson)}
                        className={`flex items-center justify-between p-3.5 transition-colors ${
                          isLocked
                            ? 'opacity-60 cursor-not-allowed bg-slate-50/40'
                            : isActive
                            ? 'bg-emerald-50/80 border-l-4 border-emerald-600'
                            : 'cursor-pointer'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1 pr-3">
                          {/* Status Icon */}
                          <div className="flex-shrink-0">
                            {isDone ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                            ) : isLocked ? (
                              <Lock className="w-4 h-4 text-slate-400" />
                            ) : (
                              <PlayCircle
                                className={`w-5 h-5 ${
                                  isActive ? 'text-emerald-600 fill-emerald-100 animate-pulse' : 'text-slate-400'
                                }`}
                              />
                            )}
                          </div>

                          {/* Title and details */}
                          <div className="min-w-0">
                            <p
                              className={`text-xs font-semibold truncate ${
                                isActive ? 'text-emerald-950 font-bold' : 'text-slate-700'
                              }`}
                            >
                              {lesson.title}
                            </p>
                            <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {lesson.durationMinutes}m
                              </span>
                              {lesson.isFreePreview && !isEnrolled && (
                                <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">
                                  Free Preview
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Interactive Badges (Quiz, Assignment, Resources) */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {lesson.quiz && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenQuiz) onOpenQuiz(lesson);
                              }}
                              className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
                              title="Interactive Quiz"
                            >
                              <HelpCircle className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Quiz</span>
                            </motion.button>
                          )}

                          {lesson.assignment && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenAssignment) onOpenAssignment(lesson);
                              }}
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1 transition-colors shadow-2xs"
                              title="Course Assignment"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Project</span>
                            </motion.button>
                          )}

                          {lesson.resources && lesson.resources.length > 0 && (
                            <span
                              className="p-1.5 text-slate-400 hover:text-slate-600"
                              title={`${lesson.resources.length} study materials`}
                            >
                              <Paperclip className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
