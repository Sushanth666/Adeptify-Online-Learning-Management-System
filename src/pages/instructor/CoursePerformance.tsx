import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  IndianRupee, 
  Users, 
  Star, 
  Download, 
  Calendar, 
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
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
  BarChart, 
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { useAppDispatch } from '../../store';
import { showToast } from '../../store/slices/uiSlice';

const monthlyEarningsData = [
  { month: 'Jun', revenue: 780000, enrollments: 2400 },
  { month: 'Jul', revenue: 950000, enrollments: 3100 },
  { month: 'Aug', revenue: 1120000, enrollments: 3600 },
  { month: 'Sep', revenue: 1080000, enrollments: 3400 },
  { month: 'Oct', revenue: 1320000, enrollments: 4100 },
  { month: 'Nov', revenue: 1489200, enrollments: 4850 }
];

const courseBreakdownData = [
  { id: '1', title: 'React 19 & Next.js 15: Production SaaS', category: 'Development', students: 42500, revenue: 5840000, rating: 4.92, completionRate: 78 },
  { id: '2', title: 'Generative AI & Autonomous Agent Architecture', category: 'AI & Data Science', students: 28400, revenue: 4120000, rating: 4.89, completionRate: 82 },
  { id: '3', title: 'Docker, Kubernetes & Microservices Architecture', category: 'Cloud & DevOps', students: 22100, revenue: 3260000, rating: 4.95, completionRate: 85 },
  { id: '4', title: 'High-Concurrency Golang & Distributed Systems', category: 'Backend', students: 16800, revenue: 2450000, rating: 4.88, completionRate: 74 },
  { id: '5', title: 'System Design Interview Primer: Real-Time Telemetry', category: 'Architecture', students: 34200, revenue: 4980000, rating: 4.94, completionRate: 88 }
];

const ratingBreakdown = [
  { stars: '5 Stars', percent: 84, count: 11928 },
  { stars: '4 Stars', percent: 12, count: 1704 },
  { stars: '3 Stars', percent: 3, count: 426 },
  { stars: '2 Stars', percent: 0.8, count: 114 },
  { stars: '1 Star', percent: 0.2, count: 28 }
];

export const CoursePerformance: React.FC = () => {
  const dispatch = useAppDispatch();
  const [timeRange, setTimeRange] = useState<'30days' | '6months' | 'all'>('6months');

  const totalGross = courseBreakdownData.reduce((acc, c) => acc + c.revenue, 0);
  const totalLearners = courseBreakdownData.reduce((acc, c) => acc + c.students, 0);

  const handleExportReport = () => {
    dispatch(showToast({
      message: 'Financial & Performance Audit Report downloaded!',
      type: 'success'
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" />
            <span>Instructor Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Course Performance & Analytics
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Analyze gross revenue trends, learner retention, rating distributions, and course-by-course metrics.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-1 shadow-2xs">
            <button
              onClick={() => setTimeRange('30days')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                timeRange === '30days' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900 dark:text-white'
              }`}
            >
              30 Days
            </button>
            <button
              onClick={() => setTimeRange('6months')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                timeRange === '6months' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900 dark:text-white'
              }`}
            >
              6 Months
            </button>
            <button
              onClick={() => setTimeRange('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                timeRange === 'all' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900 dark:text-white'
              }`}
            >
              All Time
            </button>
          </div>

          <button
            onClick={handleExportReport}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300 font-bold text-xs shadow-2xs"
          >
            <Download className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">Export Audit</span>
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Monthly Faculty Revenue</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">₹14,89,200</div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+24.6% vs previous cycle</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Cumulative Instructor Earnings</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">₹{(totalGross / 100000).toFixed(2)} L</div>
          <span className="text-[11px] text-teal-600 font-bold mt-1 inline-block">Direct Bank Deposit Verified</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Enrolled Learners</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{totalLearners.toLocaleString('en-IN')}</div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1 inline-block">Across 28 Indian States</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Overall Course Rating</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1 flex items-center gap-1.5">
            <span>4.92</span>
            <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
          </div>
          <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold mt-1 inline-block">98% Positive Feedback</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Trend Area Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Monthly Revenue Trend (₹ INR)</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Includes direct faculty commission distributions</p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
              +₹3.6L Growth
            </span>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyEarningsData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={11} 
                  tickLine={false} 
                  tickFormatter={(val) => `₹${(val / 100000).toFixed(1)}L`} 
                />
                <Tooltip 
                  formatter={(val: any) => [`₹${Number(val).toLocaleString('en-IN')}`, 'Faculty Revenue']}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#059669" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#colorRev)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rating Breakdown Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Student Ratings Distribution</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Based on 14,200 verified course evaluations</p>
          </div>

          <div className="space-y-3 pt-2">
            {ratingBreakdown.map((r, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    {r.stars}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-normal">{r.percent}% ({r.count})</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${r.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Overall Score:</span>
            <span className="font-black text-slate-900 dark:text-white">4.92 Out of 5.0</span>
          </div>
        </div>

      </div>

      {/* Course Breakdown Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Course-by-Course Financial & Completion Breakdown</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Granular performance indicators for all active learning modules</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
                <th className="py-3.5 px-4">Course Title</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Total Students</th>
                <th className="py-3.5 px-4">Gross Revenue</th>
                <th className="py-3.5 px-4">Avg Rating</th>
                <th className="py-3.5 px-4">Completion %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {courseBreakdownData.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60 dark:bg-slate-800/70 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">{c.title}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-600 dark:text-slate-400">{c.category}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-800 dark:text-slate-100">{c.students.toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-4 font-extrabold text-emerald-800 dark:text-emerald-300">₹{(c.revenue / 100000).toFixed(2)} Lakhs</td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-slate-100">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>{c.rating}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">{c.completionRate}%</span>
                      <div className="w-16 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: `${c.completionRate}%` }}
                        />
                      </div>
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

