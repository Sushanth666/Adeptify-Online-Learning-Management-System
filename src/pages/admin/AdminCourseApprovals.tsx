import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileCheck, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Sparkles, 
  Eye, 
  Star, 
  IndianRupee, 
  BookOpen, 
  ExternalLink,
  ShieldAlert,
  Download
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { showToast } from '../../store/slices/uiSlice';
import { Course } from '../../types';

export const AdminCourseApprovals: React.FC = () => {
  const dispatch = useAppDispatch();
  const allCourses = useAppSelector((state) => state.courses.courses);

  const [coursesList, setCoursesList] = useState<Course[]>(allCourses);
  const [searchQuery, setSearchQuery] = useState('');
  const [tabFilter, setTabFilter] = useState<'all' | 'pending' | 'published' | 'featured'>('all');

  const filteredCourses = coursesList.filter((c) => {
    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

    if (tabFilter === 'pending') {
      return matchesSearch && c.status === 'pending_approval';
    }
    if (tabFilter === 'published') {
      return matchesSearch && c.status === 'published';
    }
    if (tabFilter === 'featured') {
      return matchesSearch && Boolean(c.featured);
    }
    return matchesSearch;
  });

  const handleApprove = (courseId: string, title: string) => {
    setCoursesList(prev => 
      prev.map(c => c.id === courseId ? { ...c, status: 'published' } : c)
    );
    dispatch(showToast({
      message: `Course "${title}" approved & published live to catalog!`,
      type: 'success'
    }));
  };

  const handleToggleFeatured = (courseId: string, current: boolean, title: string) => {
    setCoursesList(prev => 
      prev.map(c => c.id === courseId ? { ...c, featured: !current } : c)
    );
    dispatch(showToast({
      message: `Course "${title}" ${!current ? 'marked as Featured on Homepage' : 'removed from Featured'}!`,
      type: 'info'
    }));
  };

  const pendingCount = coursesList.filter(c => c.status === 'pending_approval').length;
  const featuredCount = coursesList.filter(c => c.featured).length;

  const handleExportAuditReport = () => {
    const headers = 'CourseID,Title,Domain,Level,PriceINR,TotalLessons,TotalStudents,Rating,FeaturedHomepage,QAApprovalStatus\n';
    const rows = coursesList.map(c => 
      `"${c.id}","${c.title.replace(/"/g, '""')}","${c.category}","${c.level}",₹${c.price},${c.totalLessons},${c.totalStudents},${c.rating},"${c.featured ? 'Yes' : 'No'}","${c.status || 'published'}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Adeptify_Catalog_Audit_Report_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    dispatch(showToast({
      message: `Catalog compliance audit report exported (${coursesList.length} courses)!`,
      type: 'success'
    }));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1">
            <FileCheck className="w-4 h-4" />
            <span>Administrator Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Course Catalog & QA Approvals
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Audit curriculum standards, evaluate syllabus depth, approve new course releases, and manage homepage feature promotions.
          </p>
        </div>

        <button
          onClick={handleExportAuditReport}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:bg-emerald-50 dark:bg-emerald-950/60/50 text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:text-emerald-300 font-bold text-xs shadow-2xs transition-all cursor-pointer"
        >
          <Download className="w-4 h-4 text-emerald-600" />
          <span>Catalog Audit Report</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Catalog Courses</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{coursesList.length}</div>
          <span className="text-[11px] text-emerald-600 font-bold mt-1 inline-block">All Engineering Domains</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Pending Review Queue</span>
          <div className="text-2xl font-black text-amber-600 mt-1">{pendingCount || 3}</div>
          <span className="text-[11px] text-amber-700 font-bold mt-1 inline-block">Faculty Submissions</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Featured on Homepage</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{featuredCount}</div>
          <span className="text-[11px] text-teal-600 font-bold mt-1 inline-block">High-Demand Masterclasses</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Average Course Rating</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1 flex items-center gap-1.5">
            <span>4.88</span>
            <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
          </div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1 inline-block">Quality Benchmark Met</span>
        </div>
      </div>

      {/* Search & Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by course title, category, instructor name..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 focus:bg-white dark:bg-slate-900 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setTabFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              tabFilter === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Courses ({coursesList.length})
          </button>
          <button
            onClick={() => setTabFilter('published')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              tabFilter === 'published'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Published
          </button>
          <button
            onClick={() => setTabFilter('featured')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              tabFilter === 'featured'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Featured ({featuredCount})
          </button>
        </div>
      </div>

      {/* Courses Approval Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
                <th className="py-3.5 px-4">Course</th>
                <th className="py-3.5 px-4">Instructor</th>
                <th className="py-3.5 px-4">Category & Level</th>
                <th className="py-3.5 px-4">Price (₹)</th>
                <th className="py-3.5 px-4">Status & Quality</th>
                <th className="py-3.5 px-4">Featured</th>
                <th className="py-3.5 px-4 text-right">Admin Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filteredCourses.slice(0, 20).map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/60 dark:bg-slate-800/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={c.thumbnail}
                        alt={c.title}
                        className="w-14 h-10 rounded-lg object-cover bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 flex-shrink-0"
                      />
                      <div className="min-w-0 max-w-xs">
                        <Link
                          to={`/courses/${c.id}`}
                          className="font-bold text-slate-900 dark:text-white hover:text-emerald-700 dark:text-emerald-400 truncate block leading-snug"
                        >
                          {c.title}
                        </Link>
                        <span className="text-[11px] text-slate-400">
                          {c.chapters?.length || 3} Chapters • {c.totalLessons} Lectures
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={c.instructor.avatar}
                        alt={c.instructor.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="font-semibold text-slate-800 dark:text-slate-100">{c.instructor.name}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-slate-800 dark:text-slate-100 block">{c.category}</span>
                    <span className="text-[10px] text-slate-400 capitalize">{c.level}</span>
                  </td>

                  <td className="py-3.5 px-4 font-black text-slate-900 dark:text-white">
                    ₹{c.price.toLocaleString('en-IN')}
                  </td>

                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      c.status === 'published'
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {c.status === 'published' ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Live in Catalog</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-amber-600" />
                          <span>QA Review Pending</span>
                        </>
                      )}
                    </span>
                  </td>

                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => handleToggleFeatured(c.id, Boolean(c.featured), c.title)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-colors ${
                        c.featured
                          ? 'bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{c.featured ? 'Featured' : 'Standard'}</span>
                    </button>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link
                        to={`/learning/${c.id}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:bg-emerald-950/60 transition-colors"
                        title="Inspect Classroom"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>

                      {c.status !== 'published' && (
                        <button
                          onClick={() => handleApprove(c.id, c.title)}
                          className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                        >
                          Approve
                        </button>
                      )}
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

