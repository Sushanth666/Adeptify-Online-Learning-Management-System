import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  BookOpen, 
  IndianRupee, 
  Search, 
  Trash2,
  Download,
  Award
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourses, deleteCourse } from '../../store/slices/courseSlice';
import { showToast } from '../../store/slices/uiSlice';
import { mockPlatformAnalytics } from '../../data/mockData';

export const AdminDashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses.courses);
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'courses'>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const stats = mockPlatformAnalytics;

  const handleApprove = (courseTitle: string) => {
    dispatch(showToast({
      message: `Course "${courseTitle}" approved and certified for public listing!`,
      type: 'success'
    }));
  };

  const handleRemoveCourse = (id: string, title: string) => {
    if (window.confirm(`Admin: Remove course "${title}" from platform?`)) {
      dispatch(deleteCourse(id));
      dispatch(showToast({ message: `Course "${title}" removed by Admin`, type: 'info' }));
    }
  };

  const handleExportAnalyticsCSV = () => {
    let csv = '=== ADEPTIFY LMS PLATFORM AUDIT & ANALYTICS ===\n';
    csv += `Generated On,"${new Date().toLocaleString('en-IN')}"\n`;
    csv += `Gross Platform Volume (YTD),₹${stats.totalRevenue.toLocaleString('en-IN')}\n`;
    csv += `Current Month Run-Rate,₹${stats.monthlyRevenue.toLocaleString('en-IN')}\n`;
    csv += `Total Registered Learners,${stats.totalStudents.toLocaleString('en-IN')}\n`;
    csv += `Active Faculty & Instructors,${stats.activeInstructors}\n`;
    csv += `Course Completion Rate,${stats.courseCompletionRate}\n\n`;

    csv += '--- MONTHLY PERFORMANCE & REVENUE RUN-RATE ---\n';
    csv += 'Month,Revenue (INR),New Enrollments,Active Learners\n';
    stats.monthlySalesData.forEach((row) => {
      csv += `"${row.month}",₹${row.revenue},${row.enrollments},${row.activeUsers}\n`;
    });
    csv += '\n';

    csv += '--- ENGINEERING DOMAIN MARKET SHARE ---\n';
    csv += 'Domain,Share Percentage\n';
    stats.categoryDistribution.forEach((cat) => {
      csv += `"${cat.name}",${cat.value}%\n`;
    });
    csv += '\n';

    csv += '--- TOP REVENUE GENERATING MASTERCLASSES ---\n';
    csv += 'CourseID,Title,LeadFaculty,EnrolledStudents,LifetimeRevenueINR,Rating\n';
    stats.topCourses.forEach((c) => {
      csv += `"${c.id}","${c.title.replace(/"/g, '""')}","${c.instructor}",${c.students},₹${c.revenue},${c.rating}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Adeptify_Platform_Analytics_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    dispatch(
      showToast({
        message: 'Platform Analytics CSV exported successfully!',
        type: 'success',
      })
    );
  };

  const filteredStudents = stats.recentStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.enrolledCourse.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-1 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Platform Administration
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              LMS Operations & Analytics
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Global overview of revenue flows, student enrollments, instructor accreditations, and course catalog approvals.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleExportAnalyticsCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Export Analytics CSV</span>
          </motion.button>
        </motion.div>

        {/* Global KPI Cards with Staggered Entrance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Total Gross Revenue', value: `₹${(stats.totalRevenue / 100000).toFixed(2)} L`, change: stats.revenueGrowth, icon: IndianRupee, color: 'emerald' },
            { label: 'Total Indian Learners', value: stats.totalStudents.toLocaleString('en-IN'), change: stats.studentsGrowth, icon: Users, color: 'teal' },
            { label: 'Courses Published', value: courses.length, icon: BookOpen, color: 'forest' },
            { label: 'Avg Completion Rate', value: stats.courseCompletionRate, icon: Award, color: 'amber' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-200 flex items-center gap-4 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  item.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                  item.color === 'forest' ? 'bg-forest-50 text-forest-700' : 'bg-amber-50 text-amber-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <span>{item.label}</span>
                    {item.change && (
                      <span className="text-emerald-700 font-bold">{item.change}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tab Selection */}
        <div className="border-b border-slate-200 flex items-center gap-4 text-sm font-bold overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 whitespace-nowrap transition-colors relative ${
              activeTab === 'overview' ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Analytics & Revenue
            {activeTab === 'overview' && (
              <motion.span layoutId="adminTab" className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`pb-3 whitespace-nowrap transition-colors relative ${
              activeTab === 'students' ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Student Directory
            {activeTab === 'students' && (
              <motion.span layoutId="adminTab" className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`pb-3 whitespace-nowrap transition-colors relative ${
              activeTab === 'courses' ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Course Catalog & Approvals ({courses.length})
            {activeTab === 'courses' && (
              <motion.span layoutId="adminTab" className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </button>
        </div>

        {/* TAB 1: Visual Analytics Overview (Recharts) */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Monthly Revenue Area Chart */}
              <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Platform Gross Revenue Trend</h3>
                    <p className="text-xs text-slate-500">6-Month recurring subscriptions & single sales</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    Real-Time Sync
                  </span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stats.monthlySalesData}>
                      <defs>
                        <linearGradient id="adminRevGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#059669" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(val) => `₹${(val / 100000).toFixed(1)}L`} />
                      <Tooltip formatter={(val: any) => [`₹${Number(val).toLocaleString('en-IN')}`, 'Gross Platform Revenue']} />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#059669"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#adminRevGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Category Breakdown Pie Chart */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4 flex flex-col justify-between shadow-2xs">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Course Category Share</h3>
                  <p className="text-xs text-slate-500">Distribution by curriculum topic</p>
                </div>

                <div className="h-60 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stats.categoryDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {stats.categoryDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(v: any) => [`${v}%`, 'Market Share']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                  {stats.categoryDistribution.map((cat) => (
                    <div key={cat.name} className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                      <span className="truncate">{cat.name} ({cat.value}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Earning Courses Table */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="p-5 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm">Top Performing Courses</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 font-semibold uppercase">
                    <tr>
                      <th className="py-3 px-5">Course Title</th>
                      <th className="py-3 px-4">Instructor</th>
                      <th className="py-3 px-4">Students</th>
                      <th className="py-3 px-4">Gross Revenue</th>
                      <th className="py-3 px-4 text-right">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {stats.topCourses.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50">
                        <td className="py-3.5 px-5 font-bold text-slate-900">{c.title}</td>
                        <td className="py-3.5 px-4 text-slate-500">{c.instructor}</td>
                        <td className="py-3.5 px-4">{c.students.toLocaleString()}</td>
                        <td className="py-3.5 px-4 font-bold text-emerald-700">₹{c.revenue.toLocaleString('en-IN')}</td>
                        <td className="py-3.5 px-4 text-right">★ {c.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Student Management */}
        {activeTab === 'students' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs space-y-4 p-5"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Global Student Roster</h3>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search student or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase font-semibold">
                  <tr>
                    <th className="py-3 px-4">Learner</th>
                    <th className="py-3 px-4">Course Enrolled</th>
                    <th className="py-3 px-4">Registration</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {filteredStudents.map((st) => (
                    <tr key={st.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={st.avatar}
                            alt={st.name}
                            className="w-8 h-8 rounded-full object-cover ring-1 ring-emerald-500/20"
                          />
                          <div>
                            <div className="font-bold text-slate-900">{st.name}</div>
                            <div className="text-[11px] text-slate-400">{st.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-800">{st.enrolledCourse}</td>
                      <td className="py-3.5 px-4 text-slate-500">{st.date}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                          {st.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => dispatch(showToast({ message: `Student ${st.name} activity profile verified`, type: 'info' }))}
                          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 text-xs font-semibold"
                        >
                          View Activity
                        </motion.button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Course Catalog & Approvals */}
        {activeTab === 'courses' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs"
          >
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Course Catalog & Accreditation</h3>
              <span className="text-xs text-slate-500">
                {courses.length} Courses currently live
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase font-semibold">
                  <tr>
                    <th className="py-3 px-5">Course</th>
                    <th className="py-3 px-4">Instructor</th>
                    <th className="py-3 px-4">Pricing</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-5 text-right">Admin Controls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-slate-50">
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-10 h-8 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-bold text-slate-900 line-clamp-1">{course.title}</div>
                            <div className="text-[11px] text-slate-400">{course.category} • {course.level}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-600">{course.instructor.name}</td>
                      <td className="py-4 px-4 font-bold text-slate-900">
                        {course.isFree ? 'Free' : `₹${course.price.toLocaleString('en-IN')}`}
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Approved & Active
                        </span>
                      </td>
                      <td className="py-4 px-5 text-right space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleApprove(course.title)}
                          className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold"
                          title="Re-verify Accreditation"
                        >
                          Approve ✓
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleRemoveCourse(course.id, course.title)}
                          className="p-1 rounded-lg text-rose-500 hover:bg-rose-50"
                          title="Delete from Catalog"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </main>
  );
};
