import React from 'react';
import { motion } from 'framer-motion';
import { Search, RotateCcw } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters, resetFilters } from '../../store/slices/courseSlice';
import { mockCategories } from '../../data/mockData';

export const CourseFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.courses.filters);
  const courses = useAppSelector((state) => state.courses.courses);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ search: e.target.value }));
  };

  const handleCategorySelect = (categoryName: string) => {
    dispatch(setFilters({ category: categoryName }));
  };

  const getCategoryCount = (categoryName: string, fallback: number) => {
    if (!courses || courses.length === 0) return fallback;
    if (categoryName === 'All Courses') return courses.length;
    const count = courses.filter((c) => c.category.toLowerCase() === categoryName.toLowerCase()).length;
    return count > 0 ? count : fallback;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-2xs space-y-5"
    >
      {/* Search and Quick Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by title, technology, keywords..."
            value={filters.search}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          {/* Level Filter */}
          <select
            value={filters.level}
            onChange={(e) => dispatch(setFilters({ level: e.target.value }))}
            className="px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
          >
            <option value="all">All Difficulty Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="All Levels">All Levels</option>
          </select>

          {/* Pricing Filter */}
          <select
            value={filters.priceType}
            onChange={(e) => dispatch(setFilters({ priceType: e.target.value as any }))}
            className="px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
          >
            <option value="all">All Pricing</option>
            <option value="paid">Paid Courses</option>
            <option value="free">Free Courses</option>
          </select>

          {/* Sort By */}
          <select
            value={filters.sortBy}
            onChange={(e) => dispatch(setFilters({ sortBy: e.target.value as any }))}
            className="px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Recently Updated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          {/* Reset button */}
          <motion.button
            whileHover={{ rotate: -90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => dispatch(resetFilters())}
            title="Reset Filters"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Category Horizontal Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {mockCategories.map((cat) => {
          const isSelected = filters.category === cat.name || (cat.name === 'All Courses' && filters.category === 'All Courses');
          return (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleCategorySelect(cat.name)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-200 text-slate-500'}`}>
                {getCategoryCount(cat.name, cat.count)}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};
