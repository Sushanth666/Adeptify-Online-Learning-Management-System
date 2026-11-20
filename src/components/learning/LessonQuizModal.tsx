import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Quiz } from '../../types';

interface LessonQuizModalProps {
  quiz: Quiz;
  onClose: () => void;
  onPass?: () => void;
}

export const LessonQuizModal: React.FC<LessonQuizModalProps> = ({ quiz, onClose, onPass }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = quiz.questions || [];
  const totalQuestions = questions.length;
  const currentQ = questions[currentIdx];

  const handleSelectOption = (optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        correct++;
      }
    });
    return Math.round((correct / totalQuestions) * 100);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    if (score >= quiz.passingScore) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
      if (onPass) onPass();
    }
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setIsSubmitted(false);
  };

  const score = isSubmitted ? calculateScore() : 0;
  const hasPassed = score >= quiz.passingScore;

  return createPortal(
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/75 backdrop-blur-sm p-4 sm:p-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="min-h-full flex items-center justify-center py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto transition-colors duration-200"
          >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">{quiz.title}</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Passing Score: {quiz.passingScore}%
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {!isSubmitted ? (
              <div className="space-y-6">
                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>Question {currentIdx + 1} of {totalQuestions}</span>
                    <span>{Math.round(((currentIdx + 1) / totalQuestions) * 100)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 dark:bg-emerald-500 transition-all duration-300"
                      style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question Prompt */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                    {currentQ.question}
                  </h4>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQ.options.map((option, optIdx) => {
                      const isSelected = selectedAnswers[currentIdx] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`w-full p-4 rounded-xl text-left text-sm font-medium border-2 transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'border-emerald-600 dark:border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-300 shadow-sm'
                              : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300 dark:border-slate-600'
                            }`}
                          >
                            {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    disabled={currentIdx === 0}
                    onClick={() => setCurrentIdx((i) => i - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors"
                  >
                    Previous
                  </button>

                  {currentIdx < totalQuestions - 1 ? (
                    <button
                      disabled={selectedAnswers[currentIdx] === undefined}
                      onClick={() => setCurrentIdx((i) => i + 1)}
                      className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors disabled:opacity-50"
                    >
                      Next Question
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      disabled={Object.keys(selectedAnswers).length < totalQuestions}
                      onClick={handleSubmit}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors disabled:opacity-50 shadow-sm"
                    >
                      Submit Quiz
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Results Screen */
              <div className="text-center py-6 space-y-6">
                <div
                  className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
                    hasPassed ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400' : 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400'
                  }`}
                >
                  {hasPassed ? <CheckCircle className="w-10 h-10" /> : <AlertCircle className="w-10 h-10" />}
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {hasPassed ? 'Congratulations! You Passed! 🎉' : 'Keep Trying!'}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {hasPassed
                      ? 'You have demonstrated mastery in this section.'
                      : `You scored below the passing threshold of ${quiz.passingScore}%.`}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 max-w-xs mx-auto">
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{score}%</div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Final Evaluation Score</span>
                </div>

                {/* Question Review Accordion */}
                <div className="text-left space-y-4 pt-2">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">Answers & Explanations:</h4>
                  {questions.map((q, idx) => {
                    const isCorrect = selectedAnswers[idx] === q.correctAnswerIndex;
                    return (
                      <div
                        key={q.id}
                        className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                          isCorrect ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60' : 'bg-rose-50/50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/60'
                        }`}
                      >
                        <div className="font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                          <span>Q{idx + 1}: {q.question}</span>
                          <span className={isCorrect ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-rose-700 dark:text-rose-400 font-bold'}>
                            {isCorrect ? 'Correct ✓' : 'Incorrect ✗'}
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">
                          <strong>Correct:</strong> {q.options[q.correctAnswerIndex]}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 italic">
                          💡 {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={handleRetake}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retake Quiz
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    Continue Course
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        </div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
