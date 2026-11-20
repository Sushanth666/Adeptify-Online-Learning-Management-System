import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  ShieldCheck, 
  ShieldAlert, 
  Download, 
  MoreVertical, 
  CheckCircle2, 
  XCircle, 
  Mail, 
  KeyRound,
  GraduationCap,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { useAppDispatch } from '../../store';
import { showToast } from '../../store/slices/uiSlice';

interface PlatformStudent {
  id: string;
  name: string;
  email: string;
  avatar: string;
  collegeOrCompany: string;
  location: string;
  enrolledCoursesCount: number;
  totalSpent: number;
  status: 'active' | 'suspended';
  joinedDate: string;
  lastLogin: string;
}

const mockAllStudents: PlatformStudent[] = [
  {
    id: 'usr_st_101',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@adeptify.in',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    collegeOrCompany: 'RV College of Engineering',
    location: 'Bengaluru, Karnataka',
    enrolledCoursesCount: 5,
    totalSpent: 14995,
    status: 'active',
    joinedDate: 'Jan 2024',
    lastLogin: 'Today, 9:15 AM'
  },
  {
    id: 'usr_st_102',
    name: 'Tanvi Kulkarni',
    email: 'tanvi.k@accenture.com',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    collegeOrCompany: 'Accenture India',
    location: 'Pune, Maharashtra',
    enrolledCoursesCount: 3,
    totalSpent: 8997,
    status: 'active',
    joinedDate: 'Mar 2024',
    lastLogin: 'Yesterday'
  },
  {
    id: 'usr_st_103',
    name: 'Rohan Deshmukh',
    email: 'rohan.deshmukh@tcs.in',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    collegeOrCompany: 'Tata Consultancy Services',
    location: 'Hyderabad, Telangana',
    enrolledCoursesCount: 4,
    totalSpent: 11996,
    status: 'active',
    joinedDate: 'Feb 2024',
    lastLogin: '3 days ago'
  },
  {
    id: 'usr_st_104',
    name: 'Devika Menon',
    email: 'devika.menon@nitc.ac.in',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    collegeOrCompany: 'NIT Calicut',
    location: 'Kozhikode, Kerala',
    enrolledCoursesCount: 2,
    totalSpent: 5998,
    status: 'active',
    joinedDate: 'Apr 2024',
    lastLogin: 'Today, 7:30 AM'
  },
  {
    id: 'usr_st_105',
    name: 'Sameer Khan',
    email: 'sameer.k@spammer-domain.xyz',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    collegeOrCompany: 'Unverified Entity',
    location: 'Unknown',
    enrolledCoursesCount: 0,
    totalSpent: 0,
    status: 'suspended',
    joinedDate: 'May 2024',
    lastLogin: '10 days ago'
  },
  {
    id: 'usr_st_106',
    name: 'Pooja Bhatt',
    email: 'pooja.bhatt@iitd.ac.in',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    collegeOrCompany: 'IIT Delhi',
    location: 'New Delhi, NCR',
    enrolledCoursesCount: 6,
    totalSpent: 17994,
    status: 'active',
    joinedDate: 'Jan 2024',
    lastLogin: '5 mins ago'
  }
];

export const AdminStudentsDirectory: React.FC = () => {
  const dispatch = useAppDispatch();
  const [studentsList, setStudentsList] = useState<PlatformStudent[]>(mockAllStudents);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'suspended'>('all');

  const filteredStudents = studentsList.filter((st) => {
    const matchesSearch = 
      st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.collegeOrCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = 
      statusFilter === 'all' 
        ? true 
        : st.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const toggleStudentStatus = (studentId: string, currentStatus: 'active' | 'suspended') => {
    const newStatus = currentStatus === 'active' ? 'suspended' : 'active';
    setStudentsList(prev => 
      prev.map(s => s.id === studentId ? { ...s, status: newStatus } : s)
    );

    dispatch(showToast({
      message: `Student account marked as ${newStatus.toUpperCase()}`,
      type: newStatus === 'active' ? 'success' : 'info'
    }));
  };

  const handleResetPassword = (name: string, email: string) => {
    dispatch(showToast({
      message: `Password reset instructions sent to ${name} (${email})`,
      type: 'success'
    }));
  };

  const handleExportCSV = () => {
    const headers = 'ID,Name,Email,Affiliation,Location,Courses,TotalSpent,Status\n';
    const rows = filteredStudents.map(s => 
      `"${s.id}","${s.name}","${s.email}","${s.collegeOrCompany}","${s.location}",${s.enrolledCoursesCount},₹${s.totalSpent},"${s.status}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Adeptify_Master_Students_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    dispatch(showToast({
      message: 'Master Student Directory CSV exported!',
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
            <span>Administrator Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Students Directory
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Manage enterprise student records, monitor active enrollment health, and control account security.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs transition-colors shadow-2xs"
        >
          <Download className="w-4 h-4 text-emerald-600" />
          <span>Export Master CSV</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Total Registered Learners</span>
          <div className="text-2xl font-black text-slate-900 mt-1">1,84,500</div>
          <span className="text-[11px] text-emerald-600 font-bold mt-1 inline-block">+18.6% Annual Growth</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Active Learners Today</span>
          <div className="text-2xl font-black text-slate-900 mt-1">43,200</div>
          <span className="text-[11px] text-teal-600 font-bold mt-1 inline-block">Real-time Telemetry</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Total Verified Certificates</span>
          <div className="text-2xl font-black text-slate-900 mt-1">54,320</div>
          <span className="text-[11px] text-amber-600 font-bold mt-1 inline-block">Govt & Industry Recognized</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Suspended / Flagged Accounts</span>
          <div className="text-2xl font-black text-slate-900 mt-1">14</div>
          <span className="text-[11px] text-slate-400 font-medium mt-1 inline-block">&lt;0.01% of total base</span>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search students by name, email, college, city..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              statusFilter === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({studentsList.length})
          </button>
          <button
            onClick={() => setStatusFilter('active')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              statusFilter === 'active'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Active Only
          </button>
          <button
            onClick={() => setStatusFilter('suspended')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              statusFilter === 'suspended'
                ? 'bg-rose-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Suspended ({studentsList.filter(s => s.status === 'suspended').length})
          </button>
        </div>
      </div>

      {/* Directory Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3.5 px-4">Student Name & Email</th>
                <th className="py-3.5 px-4">College / Organization</th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4">Enrolled Courses</th>
                <th className="py-3.5 px-4">Total Paid (₹)</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Admin Controls</th>
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
                        <div className="text-[10px] text-slate-400">Joined {st.joinedDate} • {st.lastLogin}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    {st.collegeOrCompany}
                  </td>

                  <td className="py-3.5 px-4 text-slate-600">
                    {st.location}
                  </td>

                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    {st.enrolledCoursesCount} Courses
                  </td>

                  <td className="py-3.5 px-4 font-extrabold text-slate-900">
                    ₹{st.totalSpent.toLocaleString('en-IN')}
                  </td>

                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      st.status === 'active'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {st.status === 'active' ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Active</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3 text-rose-600" />
                          <span>Suspended</span>
                        </>
                      )}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleResetPassword(st.name, st.email)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                        title="Send Password Reset"
                      >
                        <KeyRound className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => toggleStudentStatus(st.id, st.status)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                          st.status === 'active'
                            ? 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                            : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                        }`}
                      >
                        {st.status === 'active' ? 'Suspend' : 'Reactivate'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

