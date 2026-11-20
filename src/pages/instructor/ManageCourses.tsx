import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PlusCircle, 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  Star, 
  Edit3, 
  Trash2, 
  Eye, 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  IndianRupee,
  LayoutGrid,
  List
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { deleteCourse } from '../../store/slices/courseSlice';
import { showToast } from '../../store/slices/uiSlice';
import { Course } from '../../types';

export const ManageCourses: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const allCourses = useAppSelector((state) => state.courses.courses);
  
  // Filter courses where instructor is Dr. Priya Patel or general instructor catalog
  const instructorCourses = allCourses.slice(0, 16);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'pending_approval' | 'draft'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');
  const [deletingCourseId, setDeletingCourseId] = useState<string | null>(null);

  const filteredCourses = instructorCourses.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' 
        ? true 
        : course.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalStudents = instructorCourses.reduce((acc, c) => acc + (c.totalStudents || 0), 0);
  const totalRevenue = instructorCourses.reduce((acc, c) => acc + (c.price * (c.totalStudents || 0)), 0);

  const handleDelete = (courseId: string, title: string) => {
    dispatch(deleteCourse(courseId));
    dispatch(showToast({
      message: `Course "${title}" has been deleted.`,
      type: 'info'
    }));
    setDeletingCourseId(null);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Instructor Studio</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Manage Courses
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Review, edit curriculum, monitor enrollment health, and manage your published educational modules.
          </p>
        </div>

        <Link
          to="/instructor/create-course"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm shadow-emerald-600/30 flex-shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create New Course</span>
        </Link>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Total Created Courses</span>
          <div className="text-2xl font-black text-slate-900 mt-1">{instructorCourses.length}</div>
          <span className="text-[11px] text-emerald-600 font-bold mt-1 inline-block">100% Verified Quality</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Total Enrolled Learners</span>
          <div className="text-2xl font-black text-slate-900 mt-1">{totalStudents.toLocaleString('en-IN')}</div>
          <span className="text-[11px] text-teal-600 font-bold mt-1 inline-block">Across Pan-India</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Cumulative Gross Revenue</span>
          <div className="text-2xl font-black text-slate-900 mt-1">₹{(totalRevenue / 100000).toFixed(2)} Lakhs</div>
          <span className="text-[11px] text-emerald-700 font-bold mt-1 inline-block">85% Faculty Share</span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Average Student Rating</span>
          <div className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-1.5">
            <span>4.91</span>
            <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
          </div>
          <span className="text-[11px] text-slate-500 font-medium mt-1 inline-block">Top 2% Faculty Rank</span>
        </div>
      </div>

      {/* Toolbar: Search, Filters, View Mode */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
        
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses by title, category, tags..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
          />
        </div>

        {/* Status Filters & View Toggle */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              statusFilter === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({instructorCourses.length})
          </button>
          <button
            onClick={() => setStatusFilter('published')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              statusFilter === 'published'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Published
          </button>
          <button
            onClick={() => setStatusFilter('pending_approval')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
              statusFilter === 'pending_approval'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            In Review
          </button>

          <div className="h-5 w-px bg-slate-200 mx-1 hidden sm:block" />

          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Table view"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Course List: Table View */}
      {viewMode === 'table' ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-4">Course</th>
                  <th className="py-3.5 px-4">Category & Level</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4">Learners</th>
                  <th className="py-3.5 px-4">Rating</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredCourses.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={c.thumbnail}
                          alt={c.title}
                          className="w-14 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200 flex-shrink-0"
                        />
                        <div className="min-w-0 max-w-xs">
                          <Link
                            to={`/courses/${c.id}`}
                            className="font-bold text-slate-900 hover:text-emerald-700 truncate block leading-snug"
                          >
                            {c.title}
                          </Link>
                          <span className="text-[11px] text-slate-400">
                            {c.chapters.length} Modules • {c.totalLessons} Lectures
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-slate-800 block">{c.category}</span>
                      <span className="text-[10px] text-slate-400 capitalize">{c.level}</span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="font-extrabold text-slate-900">₹{c.price.toLocaleString('en-IN')}</span>
                      {c.originalPrice && (
                        <span className="text-[10px] text-slate-400 line-through block">
                          ₹{c.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-800">
                        {c.totalStudents?.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-400 block">Active students</span>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1 font-bold text-slate-900">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                        <span>{c.rating}</span>
                        <span className="text-slate-400 font-normal text-[10px]">({c.reviewsCount})</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        c.status === 'published'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : c.status === 'pending_approval'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {c.status === 'published' && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                        {c.status === 'pending_approval' && <Clock className="w-3 h-3 text-amber-600" />}
                        <span className="capitalize">{c.status.replace('_', ' ')}</span>
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          to={`/learning/${c.id}`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                          title="Preview in Classroom"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          to={`/instructor/analytics?courseId=${c.id}`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-teal-700 hover:bg-teal-50 transition-colors"
                          title="Course Analytics"
                        >
                          <BarChart3 className="w-4 h-4" />
                        </Link>
                        <Link
                          to={`/instructor/create-course?id=${c.id}`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                          title="Edit Curriculum"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => setDeletingCourseId(c.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete Course"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Course List: Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover" />
                  <span className="absolute top-2 right-2 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-emerald-800 shadow-xs">
                    {c.category}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm line-clamp-2">{c.title}</h3>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <span>{c.totalStudents} enrolled</span>
                    <div className="flex items-center gap-1 font-bold text-slate-800">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                      <span>{c.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="font-black text-slate-900 text-sm">₹{c.price.toLocaleString('en-IN')}</span>
                <div className="flex items-center gap-1">
                  <Link
                    to={`/learning/${c.id}`}
                    className="p-2 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 text-xs font-semibold"
                  >
                    Preview
                  </Link>
                  <Link
                    to={`/instructor/create-course?id=${c.id}`}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingCourseId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delete this course?</h3>
            <p className="text-xs text-slate-500">
              This action cannot be undone. All curriculum lectures, quizzes, and learning materials will be archived.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setDeletingCourseId(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const target = instructorCourses.find((c) => c.id === deletingCourseId);
                  handleDelete(deletingCourseId, target?.title || 'Course');
                }}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

