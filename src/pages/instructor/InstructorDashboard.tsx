import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  BookOpen, 
  Users, 
  IndianRupee, 
  Star, 
  Trash2, 
  Eye, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCourses, deleteCourse } from '../../store/slices/courseSlice';
import { showToast } from '../../store/slices/uiSlice';
import { mockPlatformAnalytics } from '../../data/mockData';

export const InstructorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => state.courses.courses);
  const currentUser = useAppSelector((state) => state.auth.currentUser);

  const [activeTab, setActiveTab] = useState<'courses' | 'students' | 'analytics'>('courses');
  const [studentSearch, setStudentSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to remove course "${title}"?`)) {
      dispatch(deleteCourse(id));
      dispatch(showToast({ message: `Course "${title}" removed`, type: 'info' }));
    }
  };

  const studentsList = mockPlatformAnalytics.recentStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.enrolledCourse.toLowerCase().includes(studentSearch.toLowerCase())
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
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
              Instructor Studio
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Course Management & Performance
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Publish rich interactive lectures, track student completion, and view revenue analytics.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/instructor/create-course"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm shadow-emerald-600/30"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Create New Course</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Row with Staggered Entrance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Monthly Revenue', value: '₹14,89,200', icon: IndianRupee, color: 'emerald' },
            { label: 'Total Indian Learners', value: '88,400', icon: Users, color: 'teal' },
            { label: 'Active Courses', value: courses.length, icon: BookOpen, color: 'forest' },
            { label: 'Instructor Rating', value: '4.92', icon: Star, color: 'amber' },
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
                  <Icon className={`w-6 h-6 ${item.color === 'amber' ? 'fill-amber-400' : ''}`} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{item.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tab Controls */}
        <div className="border-b border-slate-200 flex items-center gap-4 text-sm font-bold">
          <button
            onClick={() => setActiveTab('courses')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'courses' ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            My Courses Studio ({courses.length})
            {activeTab === 'courses' && (
              <motion.span layoutId="instTab" className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'students' ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Enrolled Students ({studentsList.length})
            {activeTab === 'students' && (
              <motion.span layoutId="instTab" className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'analytics' ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Earnings & Analytics
            {activeTab === 'analytics' && (
              <motion.span layoutId="instTab" className="absolute bottom-0 inset-x-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </button>
        </div>

        {/* Tab 1: Course Management Table */}
        {activeTab === 'courses' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs"
          >
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Course Catalog Management</h3>
              <span className="text-xs text-slate-500 font-medium">
                Active certified courses live on LMS
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/70 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-100">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Course</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Price</th>
                    <th className="py-3.5 px-4">Enrolled Students</th>
                    <th className="py-3.5 px-4">Rating</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-12 h-8 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="font-bold text-slate-900 line-clamp-1">
                              {course.title}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              {course.totalLessons} lessons • {course.durationHours} hrs
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap text-slate-600">
                        {course.category}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap font-bold text-slate-900">
                        {course.isFree ? 'Free' : `₹${course.price.toLocaleString('en-IN')}`}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        {course.totalStudents.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="flex items-center gap-1 font-bold text-slate-900">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          {course.rating.toFixed(1)}
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                          <CheckCircle2 className="w-3 h-3" /> Published
                        </span>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => navigate(`/courses/${course.id}`)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                          title="Preview Course"
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDelete(course.id, course.title)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete Course"
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

        {/* Tab 2: Enrolled Students Management */}
        {activeTab === 'students' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs space-y-4 p-5"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm">Active Students Directory</h3>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter student name or course..."
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase font-semibold">
                  <tr>
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Enrolled Course</th>
                    <th className="py-3 px-4">Joined Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {studentsList.map((st) => (
                    <tr key={st.id} className="hover:bg-slate-50 transition-colors">
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
                      <td className="py-3.5 px-4 font-medium text-slate-700">
                        {st.enrolledCourse}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500">
                        {st.date}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                          {st.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => dispatch(showToast({ message: `Message sent to ${st.name}`, type: 'info' }))}
                          className="px-3 py-1 bg-slate-100 hover:bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold"
                        >
                          Send Message
                        </motion.button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Performance Charts with Recharts */}
        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Monthly Revenue Overview</h3>
                  <p className="text-xs text-slate-500">Gross instructor payouts for the last 6 months</p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  +18.4% vs last period
                </span>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockPlatformAnalytics.monthlySalesData}>
                    <defs>
                      <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#059669" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(val) => `₹${(val / 100000).toFixed(1)}L`} />
                    <Tooltip formatter={(value: any) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Monthly Payout']} />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#059669"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#revenueGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4 shadow-2xs">
              <h3 className="font-bold text-slate-900 text-sm">Monthly New Enrollments</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockPlatformAnalytics.monthlySalesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip formatter={(val: any) => [val, 'Students Enrolled']} />
                    <Bar dataKey="enrollments" fill="#10b981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}
      </main>
  );
};
