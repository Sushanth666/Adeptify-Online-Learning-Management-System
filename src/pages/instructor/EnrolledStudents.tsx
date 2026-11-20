import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Mail, 
  Award, 
  CheckCircle2, 
  Clock, 
  Download, 
  MessageSquare, 
  GraduationCap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Send
} from 'lucide-react';
import { showToast } from '../../store/slices/uiSlice';
import { useAppDispatch } from '../../store';

interface StudentRecord {
  id: string;
  name: string;
  email: string;
  avatar: string;
  courseTitle: string;
  enrolledDate: string;
  lastActive: string;
  progressPercentage: number;
  completedLessons: number;
  totalLessons: number;
  hasCertificate: boolean;
  location: string;
}

const mockStudentDirectory: StudentRecord[] = [
  {
    id: 'st-01',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@adeptify.in',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    courseTitle: 'React 19 & Next.js 15: Production SaaS & Server Actions',
    enrolledDate: '15 Sep 2024',
    lastActive: '10 mins ago',
    progressPercentage: 88,
    completedLessons: 73,
    totalLessons: 83,
    hasCertificate: false,
    location: 'Bengaluru, Karnataka'
  },
  {
    id: 'st-02',
    name: 'Tanvi Kulkarni',
    email: 'tanvi.k@accenture.com',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    courseTitle: 'React 19 & Next.js 15: Production SaaS & Server Actions',
    enrolledDate: '02 Oct 2024',
    lastActive: '2 hours ago',
    progressPercentage: 100,
    completedLessons: 83,
    totalLessons: 83,
    hasCertificate: true,
    location: 'Pune, Maharashtra'
  },
  {
    id: 'st-03',
    name: 'Rohan Deshmukh',
    email: 'rohan.deshmukh@tcs.in',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    courseTitle: 'Complete Generative AI & Autonomous Agent Architecture',
    enrolledDate: '18 Oct 2024',
    lastActive: 'Yesterday',
    progressPercentage: 62,
    completedLessons: 31,
    totalLessons: 50,
    hasCertificate: false,
    location: 'Hyderabad, Telangana'
  },
  {
    id: 'st-04',
    name: 'Aditi Sundaram',
    email: 'aditi.sundaram@infosys.com',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80',
    courseTitle: 'Docker & Kubernetes: Production Cloud Microservices',
    enrolledDate: '01 Nov 2024',
    lastActive: '3 hours ago',
    progressPercentage: 100,
    completedLessons: 42,
    totalLessons: 42,
    hasCertificate: true,
    location: 'Chennai, Tamil Nadu'
  },
  {
    id: 'st-05',
    name: 'Nikhil Verma',
    email: 'nikhil.v@wipro.com',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    courseTitle: 'Golang Microservices & Distributed Architecture',
    enrolledDate: '22 Oct 2024',
    lastActive: '2 days ago',
    progressPercentage: 45,
    completedLessons: 18,
    totalLessons: 40,
    hasCertificate: false,
    location: 'Noida, NCR'
  },
  {
    id: 'st-06',
    name: 'Kavya Nair',
    email: 'kavya.nair@swiggy.in',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    courseTitle: 'Data Structures & Algorithms in C++ & Java',
    enrolledDate: '05 Nov 2024',
    lastActive: 'Today, 8:40 AM',
    progressPercentage: 92,
    completedLessons: 55,
    totalLessons: 60,
    hasCertificate: false,
    location: 'Kochi, Kerala'
  },
  {
    id: 'st-07',
    name: 'Harsh Vardhan',
    email: 'harsh.v@iitb.ac.in',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    courseTitle: 'System Design Interview & Scalability Mastery',
    enrolledDate: '28 Oct 2024',
    lastActive: 'Just now',
    progressPercentage: 100,
    completedLessons: 36,
    totalLessons: 36,
    hasCertificate: true,
    location: 'Mumbai, Maharashtra'
  }
];

export const EnrolledStudents: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterProgress, setFilterProgress] = useState<'all' | 'completed' | 'in_progress'>('all');
  const [messagingStudent, setMessagingStudent] = useState<StudentRecord | null>(null);
  const [messageText, setMessageText] = useState('');

  const filteredStudents = mockStudentDirectory.filter((st) => {
    const matchesSearch = 
      st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesProgress = 
      filterProgress === 'all'
        ? true
        : filterProgress === 'completed'
        ? st.progressPercentage === 100
        : st.progressPercentage < 100;

    return matchesSearch && matchesProgress;
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messagingStudent || !messageText.trim()) return;

    dispatch(showToast({
      message: `Message dispatched directly to ${messagingStudent.name} (${messagingStudent.email})!`,
      type: 'success'
    }));

    setMessagingStudent(null);
    setMessageText('');
  };

  const handleExportCSV = () => {
    const headers = 'ID,Name,Email,Course,Location,Progress,Status\n';
    const rows = filteredStudents.map(s => 
      `"${s.id}","${s.name}","${s.email}","${s.courseTitle}","${s.location}","${s.progressPercentage}%","${s.hasCertificate ? 'Certified' : 'In Progress'}"`
    ).join('\n');
    
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Adeptify_Enrolled_Students_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    dispatch(showToast({
      message: 'Student Directory exported successfully!',
      type: 'success'
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>Faculty Learner Operations</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Enrolled Students
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Track student lecture completion, view verified credentials, and send personalized feedback.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs transition-colors shadow-2xs"
        >
          <Download className="w-4 h-4 text-emerald-600" />
          <span>Export Students CSV</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Active Learners</span>
          <div className="text-2xl font-black text-slate-900 mt-1">88,400</div>
          <span className="text-[11px] text-emerald-600 font-bold mt-1 inline-block">+14.2% this month</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Average Completion Rate</span>
          <div className="text-2xl font-black text-slate-900 mt-1">74.8%</div>
          <span className="text-[11px] text-teal-600 font-bold mt-1 inline-block">Industry Benchmark 48%</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Certificates Awarded</span>
          <div className="text-2xl font-black text-slate-900 mt-1">12,650</div>
          <span className="text-[11px] text-amber-600 font-bold mt-1 inline-block">QR Code Verified</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Student Satisfaction</span>
          <div className="text-2xl font-black text-slate-900 mt-1">4.92 / 5.0</div>
          <span className="text-[11px] text-emerald-700 font-bold mt-1 inline-block">Based on 14,200 reviews</span>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search student by name, email, city, course..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterProgress('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              filterProgress === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({mockStudentDirectory.length})
          </button>
          <button
            onClick={() => setFilterProgress('in_progress')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              filterProgress === 'in_progress'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilterProgress('completed')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              filterProgress === 'completed'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Completed & Certified
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Enrolled Course</th>
                <th className="py-3.5 px-4">Progress</th>
                <th className="py-3.5 px-4">Activity</th>
                <th className="py-3.5 px-4">Credential</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredStudents.map((st) => (
                <tr key={st.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={st.avatar}
                        alt={st.name}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                      />
                      <div>
                        <div className="font-bold text-slate-900">{st.name}</div>
                        <div className="text-[11px] text-slate-400">{st.email}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{st.location}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 max-w-xs">
                    <span className="font-semibold text-slate-800 line-clamp-1">{st.courseTitle}</span>
                    <span className="text-[10px] text-slate-400">Enrolled: {st.enrolledDate}</span>
                  </td>

                  <td className="py-3.5 px-4 min-w-[140px]">
                    <div className="flex items-center justify-between text-[11px] mb-1 font-bold">
                      <span className="text-slate-900">{st.progressPercentage}%</span>
                      <span className="text-slate-400 font-normal">{st.completedLessons}/{st.totalLessons}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          st.progressPercentage === 100 ? 'bg-emerald-500' : 'bg-emerald-600'
                        }`}
                        style={{ width: `${st.progressPercentage}%` }}
                      />
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {st.lastActive}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    {st.hasCertificate ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        <Award className="w-3 h-3 text-amber-600" />
                        Certified
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400 font-medium">In Progress</span>
                    )}
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setMessagingStudent(st)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-bold transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Message</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message Student Modal */}
      {messagingStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={messagingStudent.avatar}
                  alt={messagingStudent.name}
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{messagingStudent.name}</h3>
                  <span className="text-xs text-slate-400">{messagingStudent.courseTitle}</span>
                </div>
              </div>
              <button
                onClick={() => setMessagingStudent(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Instructor Note / Assignment Feedback:
                </label>
                <textarea
                  rows={4}
                  required
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Share advice, feedback on their coding exercises, or milestone congratulations..."
                  className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setMessagingStudent(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm shadow-emerald-600/30"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

