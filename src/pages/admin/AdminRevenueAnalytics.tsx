import React, { useState } from 'react';
import { 
  IndianRupee, 
  TrendingUp, 
  Download, 
  CreditCard, 
  ArrowUpRight, 
  CheckCircle2, 
  Calendar,
  Filter,
  FileText,
  Building2,
  PieChart as PieChartIcon
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

const platformRevenueHistory = [
  { month: 'Jun', gross: 5800000, facultyPayout: 4930000, netPlatform: 870000 },
  { month: 'Jul', gross: 6900000, facultyPayout: 5865000, netPlatform: 1035000 },
  { month: 'Aug', gross: 7800000, facultyPayout: 6630000, netPlatform: 1170000 },
  { month: 'Sep', gross: 7500000, facultyPayout: 6375000, netPlatform: 1125000 },
  { month: 'Oct', gross: 8200000, facultyPayout: 6970000, netPlatform: 1230000 },
  { month: 'Nov', gross: 8459200, facultyPayout: 7190320, netPlatform: 1268880 }
];

const paymentMethodDistribution = [
  { name: 'UPI (GPay / PhonePe / Paytm)', value: 68, color: '#059669' },
  { name: 'Credit / Debit Cards (Visa/Mastercard/RuPay)', value: 20, color: '#0d9488' },
  { name: 'Net Banking (HDFC, ICICI, SBI)', value: 9, color: '#10b981' },
  { name: 'EMI & Corporate Sponsorships', value: 3, color: '#f59e0b' }
];

interface Transaction {
  id: string;
  studentName: string;
  courseTitle: string;
  method: string;
  date: string;
  amount: number;
  platformFee: number;
  instructorCut: number;
  status: 'succeeded' | 'refunded';
}

const recentTransactions: Transaction[] = [
  {
    id: 'TXN-IND-902148',
    studentName: 'Aarav Sharma',
    courseTitle: 'React 19 & Next.js 15: Production SaaS',
    method: 'UPI (Google Pay)',
    date: '17 Nov 2024, 09:12 AM',
    amount: 2999,
    platformFee: 450,
    instructorCut: 2549,
    status: 'succeeded'
  },
  {
    id: 'TXN-IND-902147',
    studentName: 'Devika Menon',
    courseTitle: 'Complete Generative AI & Autonomous Agents',
    method: 'Credit Card (HDFC)',
    date: '17 Nov 2024, 08:45 AM',
    amount: 3499,
    platformFee: 525,
    instructorCut: 2974,
    status: 'succeeded'
  },
  {
    id: 'TXN-IND-902146',
    studentName: 'Rohan Deshmukh',
    courseTitle: 'Docker & Kubernetes Cloud Architecture',
    method: 'UPI (PhonePe)',
    date: '16 Nov 2024, 11:30 PM',
    amount: 2499,
    platformFee: 375,
    instructorCut: 2124,
    status: 'succeeded'
  },
  {
    id: 'TXN-IND-902145',
    studentName: 'Pooja Bhatt',
    courseTitle: 'System Design Interview & Scalability Mastery',
    method: 'Net Banking (SBI)',
    date: '16 Nov 2024, 07:15 PM',
    amount: 3999,
    platformFee: 600,
    instructorCut: 3399,
    status: 'succeeded'
  },
  {
    id: 'TXN-IND-902144',
    studentName: 'Karthik Rao',
    courseTitle: 'Golang Microservices & Distributed Architecture',
    method: 'UPI (Paytm)',
    date: '16 Nov 2024, 04:20 PM',
    amount: 2999,
    platformFee: 450,
    instructorCut: 2549,
    status: 'succeeded'
  }
];

export const AdminRevenueAnalytics: React.FC = () => {
  const dispatch = useAppDispatch();
  const [timeRange, setTimeRange] = useState<'30days' | '6months' | 'year'>('6months');

  const handleExportAudit = () => {
    const headers = 'TransactionID,Date,Student,Course,PaymentMethod,GrossAmount,PlatformFee,InstructorCut,Status\n';
    const rows = recentTransactions.map(t => 
      `"${t.id}","${t.date}","${t.studentName}","${t.courseTitle}","${t.method}",₹${t.amount},₹${t.platformFee},₹${t.instructorCut},"${t.status}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Adeptify_Platform_Financial_Audit_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    dispatch(showToast({
      message: 'Financial Audit Report exported successfully!',
      type: 'success'
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1">
            <IndianRupee className="w-4 h-4" />
            <span>Administrator Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Revenue Analytics & Financial Ledger
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Real-time gross transaction volumes, faculty commission disbursements, and platform net revenue telemetry.
          </p>
        </div>

        <button
          onClick={handleExportAudit}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm shadow-emerald-600/30"
        >
          <Download className="w-4 h-4" />
          <span>Export Financial Audit CSV</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Gross Platform Revenue (YTD)</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">₹84.59 Lakhs</div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+22.4% vs FY 23-24</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Net Platform Commission (15%)</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">₹12.68 Lakhs</div>
          <span className="text-[11px] text-teal-600 font-bold mt-1 inline-block">Platform Gross Margin</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Faculty Disbursals (85%)</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">₹71.91 Lakhs</div>
          <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold mt-1 inline-block">Paid to 64 Instructors</span>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Average Order Value (AOV)</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">₹2,840</div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1 inline-block">UPI Dominant (68%)</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Gross Revenue vs Faculty Payouts Area Chart */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Monthly Platform Gross vs Faculty Disbursals (₹ INR)</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Audited monthly breakdown across Razorpay / Cashfree pipelines</p>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Gross Revenue
              </span>
              <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                Faculty Payout
              </span>
            </div>
          </div>

          <div className="h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={platformRevenueHistory}>
                <defs>
                  <linearGradient id="colorGross" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorFaculty" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={11} 
                  tickLine={false} 
                  tickFormatter={(val) => `₹${(val / 100000).toFixed(0)}L`} 
                />
                <Tooltip 
                  formatter={(val: any, name: string) => [
                    `₹${Number(val).toLocaleString('en-IN')}`, 
                    name === 'gross' ? 'Gross Platform Revenue' : 'Faculty Disbursal'
                  ]}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="gross" stroke="#059669" strokeWidth={2.5} fillOpacity={1} fill="url(#colorGross)" />
                <Area type="monotone" dataKey="facultyPayout" stroke="#2dd4bf" strokeWidth={2} fillOpacity={1} fill="url(#colorFaculty)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Methods Distribution */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Payment Gateway Distribution</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Student transaction methods across India</p>
          </div>

          <div className="space-y-3 pt-2">
            {paymentMethodDistribution.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span className="truncate max-w-[200px]">{item.name}</span>
                  <span className="text-slate-900 dark:text-white font-extrabold">{item.value}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 mt-4">
            <span className="font-bold text-slate-800 dark:text-slate-100 block mb-0.5">Instant UPI Settlements:</span>
            Over 68% of all learner transactions in Bengaluru, Hyderabad, and Pune settle instantly via NPCI UPI rails.
          </div>
        </div>

      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Recent Student Transactions</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Direct ledger of course enrollments and payment confirmations</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
                <th className="py-3.5 px-4">Transaction ID</th>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Course Enrolled</th>
                <th className="py-3.5 px-4">Payment Method</th>
                <th className="py-3.5 px-4">Gross Paid (₹)</th>
                <th className="py-3.5 px-4">Platform Fee (15%)</th>
                <th className="py-3.5 px-4">Faculty Cut (85%)</th>
                <th className="py-3.5 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60 dark:bg-slate-800/70 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-800 dark:text-slate-100">{tx.id}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white">{tx.studentName}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700 dark:text-slate-300 max-w-xs truncate">{tx.courseTitle}</td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{tx.method}</td>
                  <td className="py-3.5 px-4 font-black text-slate-900 dark:text-white">₹{tx.amount.toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-4 font-semibold text-teal-700">₹{tx.platformFee}</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-800 dark:text-emerald-300">₹{tx.instructorCut}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Settled</span>
                    </span>
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

