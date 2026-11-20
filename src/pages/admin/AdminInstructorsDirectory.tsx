import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  Users, 
  BookOpen, 
  IndianRupee, 
  Star, 
  CheckCircle2, 
  Clock, 
  Download, 
  Award, 
  BadgeCheck,
  AlertCircle,
  Check
} from 'lucide-react';
import { useAppDispatch } from '../../store';
import { showToast } from '../../store/slices/uiSlice';

interface PlatformInstructor {
  id: string;
  name: string;
  email: string;
  avatar: string;
  title: string;
  location: string;
  coursesCount: number;
  studentsCount: number;
  rating: number;
  isVerifiedFaculty: boolean;
  totalEarnings: number;
  pendingPayout: number;
}

const mockInstructorsList: PlatformInstructor[] = [
  {
    id: 'inst-1',
    name: 'Dr. Priya Patel',
    email: 'priya.patel@adeptify.in',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    title: 'Principal Cloud Architect & Lead Tech Instructor',
    location: 'Hyderabad, Telangana',
    coursesCount: 8,
    studentsCount: 38400,
    rating: 4.95,
    isVerifiedFaculty: true,
    totalEarnings: 4860000,
    pendingPayout: 340000
  },
  {
    id: 'inst-2',
    name: 'Ananya Iyer',
    email: 'ananya.iyer@adeptify.in',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    title: 'Staff Product Designer & Design Systems Lead',
    location: 'Bengaluru, Karnataka',
    coursesCount: 5,
    studentsCount: 28400,
    rating: 4.88,
    isVerifiedFaculty: true,
    totalEarnings: 2680000,
    pendingPayout: 180000
  },
  {
    id: 'inst-3',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@adeptify.in',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    title: 'Senior Staff AI Scientist & MLOps Lead',
    location: 'Bengaluru, Karnataka',
    coursesCount: 6,
    studentsCount: 74200,
    rating: 4.91,
    isVerifiedFaculty: true,
    totalEarnings: 6240000,
    pendingPayout: 520000
  },
  {
    id: 'inst-4',
    name: 'Aditya Kulkarni',
    email: 'aditya.k@adeptify.in',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    title: 'Director of Security Engineering',
    location: 'Pune, Maharashtra',
    coursesCount: 4,
    studentsCount: 16800,
    rating: 4.86,
    isVerifiedFaculty: false,
    totalEarnings: 1480000,
    pendingPayout: 110000
  },
  {
    id: 'inst-5',
    name: 'Karthik Ramanathan',
    email: 'karthik.r@adeptify.in',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    title: 'Principal Distributed Systems Architect',
    location: 'Chennai, Tamil Nadu',
    coursesCount: 7,
    studentsCount: 41200,
    rating: 4.93,
    isVerifiedFaculty: true,
    totalEarnings: 3950000,
    pendingPayout: 270000
  }
];

export const AdminInstructorsDirectory: React.FC = () => {
  const dispatch = useAppDispatch();
  const [instructors, setInstructors] = useState<PlatformInstructor[]>(mockInstructorsList);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'verified' | 'pending'>('all');

  const filtered = instructors.filter((inst) => {
    const matchesSearch = 
      inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = 
      filterType === 'all' 
        ? true 
        : filterType === 'verified' 
        ? inst.isVerifiedFaculty 
        : !inst.isVerifiedFaculty;

    return matchesSearch && matchesFilter;
  });

  const handleToggleVerification = (id: string, current: boolean) => {
    setInstructors(prev => 
      prev.map(i => i.id === id ? { ...i, isVerifiedFaculty: !current } : i)
    );
    dispatch(showToast({
      message: `Instructor verification status updated!`,
      type: 'success'
    }));
  };

  const handleApprovePayout = (id: string, name: string, amount: number) => {
    if (amount <= 0) return;

    setInstructors((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              totalEarnings: i.totalEarnings + amount,
              pendingPayout: 0,
            }
          : i
      )
    );

    dispatch(
      showToast({
        message: `Payout of ₹${amount.toLocaleString('en-IN')} approved for ${name}! Wire transfer initiated.`,
        type: 'success',
      })
    );
  };

  const totalLifetimePaid = useMemo(() => {
    return instructors.reduce((sum, inst) => sum + inst.totalEarnings, 0);
  }, [instructors]);

  const totalPendingPayout = useMemo(() => {
    return instructors.reduce((sum, inst) => sum + inst.pendingPayout, 0);
  }, [instructors]);

  const pendingSettlementsCount = useMemo(() => {
    return instructors.filter((inst) => inst.pendingPayout > 0).length;
  }, [instructors]);

  const handleExportFacultyCSV = () => {
    const headers = 'InstructorID,Name,Email,Title,Location,CoursesCount,TotalStudents,Rating,Verified,TotalEarnings,PendingPayout\n';
    const rows = instructors.map((i) =>
      `"${i.id}","${i.name}","${i.email}","${i.title}","${i.location}",${i.coursesCount},${i.studentsCount},${i.rating},"${i.isVerifiedFaculty ? 'Yes' : 'No'}",₹${i.totalEarnings},₹${i.pendingPayout}`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Adeptify_Faculty_Directory_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    dispatch(showToast({ message: 'Instructor Master Directory exported successfully!', type: 'success' }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Administrator Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Instructors & Faculty Directory
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Verify academic credentials, inspect course catalogs, and approve faculty revenue payouts.
          </p>
        </div>

        <button
          onClick={handleExportFacultyCSV}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 text-slate-700 hover:text-emerald-800 font-bold text-xs transition-colors shadow-2xs cursor-pointer"
        >
          <Download className="w-4 h-4 text-emerald-600" />
          <span>Export Faculty CSV</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Active Faculty & Instructors</span>
          <div className="text-2xl font-black text-slate-900 mt-1">{instructors.length}</div>
          <span className="text-[11px] text-emerald-600 font-bold mt-1 inline-block">Top MAANG & Academic Leaders</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Total Lifetime Payouts</span>
          <div className="text-2xl font-black text-slate-900 mt-1">
            ₹{(totalLifetimePaid / 100000).toFixed(2)} Lakhs
          </div>
          <span className="text-[11px] text-teal-600 font-bold mt-1 inline-block">85% Revenue Share Disbursed</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Pending Payout Queue</span>
          <div className="text-2xl font-black text-amber-600 mt-1">
            ₹{(totalPendingPayout / 100000).toFixed(2)} Lakhs
          </div>
          <span className="text-[11px] text-amber-700 font-bold mt-1 inline-block">
            {pendingSettlementsCount} Settlements Awaiting Review
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Faculty Average Rating</span>
          <div className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-1.5">
            <span>4.91</span>
            <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
          </div>
          <span className="text-[11px] text-slate-500 font-medium mt-1 inline-block">Rigorous Quality Gate</span>
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
            placeholder="Search faculty by name, specialization, city..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              filterType === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Faculty ({instructors.length})
          </button>
          <button
            onClick={() => setFilterType('verified')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              filterType === 'verified'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Verified Only
          </button>
          <button
            onClick={() => setFilterType('pending')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              filterType === 'pending'
                ? 'bg-amber-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Pending Verification
          </button>
        </div>
      </div>

      {/* Directory Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <th className="py-3.5 px-4">Instructor Profile</th>
                <th className="py-3.5 px-4">Courses & Learners</th>
                <th className="py-3.5 px-4">Rating</th>
                <th className="py-3.5 px-4">Accreditation</th>
                <th className="py-3.5 px-4">Lifetime Earnings</th>
                <th className="py-3.5 px-4">Pending Payout</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map((inst) => (
                <tr key={inst.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={inst.avatar}
                        alt={inst.name}
                        className="w-11 h-11 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 font-bold text-slate-900">
                          <span>{inst.name}</span>
                          {inst.isVerifiedFaculty && (
                            <BadgeCheck className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 max-w-xs truncate">{inst.title}</div>
                        <div className="text-[10px] text-slate-400">{inst.location}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-900 block">{inst.coursesCount} Published Courses</span>
                    <span className="text-[11px] text-slate-500">{inst.studentsCount.toLocaleString('en-IN')} students</span>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1 font-bold text-slate-900">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>{inst.rating}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => handleToggleVerification(inst.id, inst.isVerifiedFaculty)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors ${
                        inst.isVerifiedFaculty
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                          : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'
                      }`}
                    >
                      {inst.isVerifiedFaculty ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Verified Faculty</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-amber-600" />
                          <span>Click to Verify</span>
                        </>
                      )}
                    </button>
                  </td>

                  <td className="py-3.5 px-4 font-black text-slate-900">
                    ₹{(inst.totalEarnings / 100000).toFixed(2)} Lakhs
                  </td>

                  <td className="py-3.5 px-4">
                    <span className={`font-extrabold block ${inst.pendingPayout > 0 ? 'text-amber-800' : 'text-slate-400'}`}>
                      ₹{inst.pendingPayout.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-[10px] font-semibold ${inst.pendingPayout > 0 ? 'text-amber-700' : 'text-emerald-700'}`}>
                      {inst.pendingPayout > 0 ? 'Ready for release' : 'Settled to Bank ✓'}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    {inst.pendingPayout > 0 ? (
                      <button
                        onClick={() => handleApprovePayout(inst.id, inst.name, inst.pendingPayout)}
                        className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs transition-all shadow-2xs cursor-pointer hover:shadow-emerald-600/30"
                      >
                        Approve Payout
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Paid</span>
                      </span>
                    )}
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

