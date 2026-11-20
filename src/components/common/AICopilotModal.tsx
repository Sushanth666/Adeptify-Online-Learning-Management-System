import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Bot, 
  Send, 
  X, 
  Copy, 
  Check, 
  RotateCcw, 
  Code2, 
  Lightbulb, 
  BookOpen, 
  User 
} from 'lucide-react';
import { useAuth } from '../../hooks';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  codeSnippet?: string;
  codeLanguage?: string;
  timestamp: string;
}

interface AICopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeCourseTitle?: string;
  activeLessonTitle?: string;
}

const DEFAULT_SUGGESTIONS = [
  { label: 'Explain Server Actions in Next.js', query: 'Can you explain how Server Actions work in Next.js with a clean example?' },
  { label: 'Debug React useEffect loop', query: 'Why is my React useEffect causing an infinite re-render loop?' },
  { label: 'Generate practice quiz', query: 'Generate 3 quick practice quiz questions to test my understanding of modern web architecture.' },
  { label: 'Explain CRDTs simply', query: 'What are CRDTs (Conflict-free Replicated Data Types) and why are they used in collaborative editors?' },
];

export const AICopilotModal: React.FC<AICopilotModalProps> = ({
  isOpen,
  onClose,
  activeCourseTitle,
  activeLessonTitle,
}) => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello ${currentUser?.name ? currentUser.name.split(' ')[0] : 'there'}! I'm your Adeptify AI Study Copilot. Whether you need code debugging, step-by-step explanations, or practice quiz questions for your courses, I'm here 24/7 to help you master every concept.`,
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Handle ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Realistic intelligent response synthesis
    setTimeout(() => {
      let replyText = '';
      let snippet: string | undefined;
      let language: string | undefined;

      const lower = query.toLowerCase();

      if (lower.includes('server action') || lower.includes('next.js') || lower.includes('nextjs')) {
        replyText = `**Next.js Server Actions** are asynchronous server-side functions that you can invoke directly from your React components without writing boilerplate API route handlers.\n\n### Key Benefits:\n1. **Zero Client Bundle**: The action logic stays entirely on the server.\n2. **Type-Safe Invocations**: Seamless TypeScript inference between frontend form and backend logic.\n3. **Progressive Enhancement**: Works even when JavaScript is disabled or loading.\n\nHere is a production-ready example with validation:`;
        snippet = `'use server';\nimport { revalidatePath } from 'next/cache';\n\nexport async function updateProgressAction(courseId: string, lessonId: string) {\n  // 1. Verify user session\n  const session = await getSession();\n  if (!session) throw new Error('Unauthorized');\n\n  // 2. Persist progress to database\n  await db.enrollments.update({\n    where: { userId: session.userId, courseId },\n    data: { lastAccessedLessonId: lessonId, updatedAt: new Date() }\n  });\n\n  // 3. Revalidate cache on client\n  revalidatePath('/dashboard');\n  return { success: true };\n}`;
        language = 'typescript';
      } else if (lower.includes('useeffect') || lower.includes('loop') || lower.includes('render')) {
        replyText = `Infinite loops in \`useEffect\` almost always happen because of **unstable dependency references** (such as objects or arrays recreated every render) or updating state that the effect depends upon.\n\n### How to Fix:\n- **Primitive values**: Depend on IDs or strings rather than entire object references.\n- **useCallback & useMemo**: Memoize callbacks or derived objects passed in dependencies.\n- **Functional updates**: Use \`setState(prev => prev + 1)\` instead of referencing the current state directly.`;
        snippet = `// ❌ Broken: creates a new object every render, causing infinite loop\nconst options = { filter: activeTab };\nuseEffect(() => {\n  fetchData(options);\n}, [options]);\n\n// ✅ Correct: memoize or depend on primitive\nconst options = useMemo(() => ({ filter: activeTab }), [activeTab]);\nuseEffect(() => {\n  fetchData(options);\n}, [options]);`;
        language = 'tsx';
      } else if (lower.includes('crdt') || lower.includes('collaborative')) {
        replyText = `**CRDTs (Conflict-free Replicated Data Types)** are data structures that can be replicated across multiple nodes over a network, updated independently in parallel without central coordination, and automatically converge to the exact same state without merge conflicts.\n\nThey power live collaborative editors like **Figma, Google Docs, and Adeptify Collaborative Studios**.`;
        snippet = `// Yjs CRDT Text Document Synchronization Example\nimport * as Y from 'yjs';\nimport { WebrtcProvider } from 'y-webrtc';\n\nconst doc = new Y.Doc();\nconst provider = new WebrtcProvider('adeptify-live-room-1', doc);\nconst yText = doc.getText('lecture-notes');\n\nyText.observe(event => {\n  console.log('Real-time sync event:', event.changes.delta);\n});`;
        language = 'typescript';
      } else if (lower.includes('quiz') || lower.includes('test') || lower.includes('question')) {
        replyText = `Here are 3 high-yield practice questions based on your active coursework:\n\n1. **React 19 Hooks**: What is the primary advantage of the new \`useActionState\` hook over traditional \`useState\` when handling form submissions?\n2. **Cloud Architecture**: Why are stateless microservices preferred when orchestrating horizontally autoscaled Kubernetes pods?\n3. **Database Indexing**: In high-throughput PostgreSQL tables, what is the trade-off between write speed and index creation on B-Tree columns?`;
      } else {
        replyText = `Great question! Here is a breakdown of how this applies to **${activeCourseTitle || 'Modern Web Engineering'}**:\n\n1. **Core Principle**: In modern production environments, always optimize for readability, maintainability, and predictable state synchronization.\n2. **Best Practice**: Keep client components focused on interactive UI, and leverage backend services or server components for heavy data transformation.\n3. **Next Step**: Try applying this directly in your hands-on coding lab. Feel free to paste any snippet here if you'd like me to review or debug it!`;
        snippet = `// Example Clean Implementation\nexport function applyArchitecturePattern(input: string) {\n  try {\n    return { status: 'success', data: processData(input) };\n  } catch (error) {\n    console.error('Handled error gracefully:', error);\n    return { status: 'error', message: (error as Error).message };\n  }\n}`;
        language = 'typescript';
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        codeSnippet: snippet,
        codeLanguage: language,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'ai',
        text: `Chat reset! I'm ready for your next question or code snippet. What are you studying today?`,
        timestamp: 'Just now',
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/75 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-[85vh] max-h-[750px] transition-colors"
        >
          {/* Header */}
          <div className="px-6 py-4.5 sm:py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900 flex-shrink-0">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/25 flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                    Adeptify AI Study Copilot
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live 24/7
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Instant Doubt Solving & Interactive Code Explanations</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleReset}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                title="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Context Banner if studying a course */}
          {(activeCourseTitle || activeLessonTitle) && (
            <div className="px-6 py-2 bg-emerald-50/70 dark:bg-emerald-950/25 border-b border-emerald-100 dark:border-emerald-800/40 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300 flex-shrink-0">
              <div className="flex items-center gap-2 truncate">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="truncate">
                  Active Context: <strong>{activeCourseTitle}</strong> {activeLessonTitle ? `— ${activeLessonTitle}` : ''}
                </span>
              </div>
            </div>
          )}

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 min-h-0 bg-slate-50/50 dark:bg-slate-950/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white font-medium rounded-tr-xs'
                        : 'bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-xs'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>

                    {msg.codeSnippet && (
                      <div className="mt-3 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 text-slate-100 font-mono text-xs">
                        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950/80 border-b border-slate-800 text-[10px] text-slate-400">
                          <span className="flex items-center gap-1.5 uppercase font-bold text-emerald-400">
                            <Code2 className="w-3 h-3" />
                            {msg.codeLanguage || 'Code'}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(msg.id, msg.codeSnippet!)}
                            className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-3 overflow-x-auto text-[11px] leading-relaxed text-emerald-300">
                          <code>{msg.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>

                  <span className={`text-[10px] text-slate-400 block px-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                    <User className="w-4 h-4 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts (Chips) */}
          <div className="px-5 py-2.5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none flex-shrink-0">
            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 flex-shrink-0">
              <Lightbulb className="w-3 h-3 text-amber-500" /> Ideas:
            </span>
            {DEFAULT_SUGGESTIONS.map((sug, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(sug.query)}
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer"
              >
                {sug.label}
              </button>
            ))}
          </div>

          {/* Message Input Footer */}
          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask your doubt, debug code, or request an explanation..."
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Ask</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
