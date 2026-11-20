import React, { useState } from 'react';
import { 
  X, 
  HelpCircle, 
  MessageSquare, 
  ExternalLink, 
  ChevronRight, 
  Search, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Keyboard, 
  Mail, 
  Users
} from 'lucide-react';

interface HelpCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'help' | 'community';
}

export const HelpCommunityModal: React.FC<HelpCommunityModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'help',
}) => {
  const [activeTab, setActiveTab] = useState<'help' | 'community'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'How do I earn and verify my completion certificate?',
      a: 'Complete 100% of the course lectures and assignments. Your accredited certificate is automatically minted and accessible in the Certificates tab with a verifiable URL.',
    },
    {
      q: 'How does daily streak and study tracking work?',
      a: 'Completing at least 1 lesson per day keeps your flame streak active and awards +150 XP. Weekly study hours track your active video learning time.',
    },
    {
      q: 'Can I switch between Student, Instructor, and Admin views?',
      a: 'Yes! Open your profile menu in the top right navbar to test the LMS experience across Student Hub, Instructor Studio, and Admin Control views.',
    },
    {
      q: 'How do I download lecture notes and code repositories?',
      a: 'Inside the classroom player, look for the "Resources & Downloads" tab to access source code, slide decks, and offline cheat sheets.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-850/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              {activeTab === 'help' ? <HelpCircle className="w-4 h-4" /> : <Users className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                {activeTab === 'help' ? 'Help Center & Documentation' : 'Student Community & Lounge'}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Adeptify Skill Acceleration Platform Support
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 bg-white dark:bg-slate-900">
          <button
            onClick={() => setActiveTab('help')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'help'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Help & FAQs</span>
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'community'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Community Discord & Forum</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-extrabold">
              1,400+ Online
            </span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'help' ? (
            <div className="space-y-6">
              {/* FAQ Search */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search questions or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800 dark:text-slate-200"
                />
              </div>

              {/* FAQ List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Frequently Asked Questions</h4>
                {filteredFaqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5"
                  >
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {faq.q}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 pl-3.5 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* Keyboard Shortcuts cheat sheet */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/70 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-100 dark:border-emerald-800/40">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-300 mb-2">
                  <Keyboard className="w-4 h-4 text-emerald-600" />
                  <span>Productivity Keyboard Shortcuts</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/70 dark:bg-slate-900/50">
                    <span>Search Catalog</span>
                    <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-bold">Ctrl K</kbd>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded-lg bg-white/70 dark:bg-slate-900/50">
                    <span>Close Windows</span>
                    <kbd className="px-1.5 py-0.5 font-mono text-[10px] bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 font-bold">Esc</kbd>
                  </div>
                </div>
              </div>

              {/* Direct Support Contact */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 text-xs">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Need dedicated faculty assistance?</span>
                </div>
                <a
                  href="mailto:support@adeptify.in"
                  className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  support@adeptify.in
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Community Banner */}
              <div className="p-6 rounded-3xl bg-gradient-to-tr from-emerald-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden shadow-lg">
                <span className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
                <div className="relative z-10 space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-amber-300" /> Official Learner Lounge
                  </span>
                  <h4 className="text-lg sm:text-xl font-extrabold">Join 18,500+ Adeptify Engineers</h4>
                  <p className="text-xs text-emerald-100 leading-relaxed max-w-md">
                    Connect directly with peers, ask instructors architectural questions, participate in weekly coding hackathons, and share project portfolios.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-emerald-800 text-xs font-bold hover:bg-emerald-50 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Join Discord Server</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Channels Preview */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Popular Discussion Channels</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    { name: '#fullstack-webdev', count: '4,210 members', desc: 'React 19, Next.js, Node.js architecture' },
                    { name: '#ai-machine-learning', count: '3,890 members', desc: 'LLM fine-tuning, RAG pipelines, PyTorch' },
                    { name: '#system-design-maang', count: '2,940 members', desc: 'High-scale concurrency & interview prep' },
                    { name: '#career-and-referrals', count: '5,120 members', desc: 'Job postings & resume reviews' },
                  ].map((ch, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 space-y-0.5"
                    >
                      <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                        <span>{ch.name}</span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{ch.count}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{ch.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
