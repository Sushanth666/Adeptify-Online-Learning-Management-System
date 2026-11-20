import React, { useState } from 'react';
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{quiz.title}</h3>
                <span className="text-xs text-slate-500">
                  Passing Score: {quiz.passingScore}%
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/50"
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
                  <div className="flex justify-between text-xs text-slate-500 font-medium">
                    <span>Question {currentIdx + 1} of {totalQuestions}</span>
                    <span>{Math.round(((currentIdx + 1) / totalQuestions) * 100)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 transition-all duration-300"
                      style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question Prompt */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-4">
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
                              ? 'border-emerald-600 bg-emerald-50/60 text-emerald-950 shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
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
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    disabled={currentIdx === 0}
                    onClick={() => setCurrentIdx((i) => i - 1)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-40 transition-colors"
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
                    hasPassed ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                  }`}
                >
                  {hasPassed ? <CheckCircle className="w-10 h-10" /> : <AlertCircle className="w-10 h-10" />}
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900">
                    {hasPassed ? 'Congratulations! You Passed! 🎉' : 'Keep Trying!'}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {hasPassed
                      ? 'You have demonstrated mastery in this section.'
                      : `You scored below the passing threshold of ${quiz.passingScore}%.`}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 max-w-xs mx-auto">
                  <div className="text-3xl font-extrabold text-slate-900">{score}%</div>
                  <span className="text-xs text-slate-500 font-medium">Final Evaluation Score</span>
                </div>

                {/* Question Review Accordion */}
                <div className="text-left space-y-4 pt-2">
                  <h4 className="text-sm font-bold text-slate-800">Answers & Explanations:</h4>
                  {questions.map((q, idx) => {
                    const isCorrect = selectedAnswers[idx] === q.correctAnswerIndex;
                    return (
                      <div
                        key={q.id}
                        className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                          isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'
                        }`}
                      >
                        <div className="font-semibold text-slate-900 flex items-center justify-between">
                          <span>Q{idx + 1}: {q.question}</span>
                          <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                            {isCorrect ? 'Correct ✓' : 'Incorrect ✗'}
                          </span>
                        </div>
                        <p className="text-slate-600">
                          <strong>Correct:</strong> {q.options[q.correctAnswerIndex]}
                        </p>
                        <p className="text-slate-500 italic">
                          💡 {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={handleRetake}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
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
    </AnimatePresence>
  );
};

