import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Course, FilterState } from '../../types';
import { api } from '../../services/api';

interface CourseState {
  courses: Course[];
  selectedCourse: Course | null;
  wishlist: string[];
  filters: FilterState;
  loading: boolean;
  error: string | null;
}

const initialFilters: FilterState = {
  search: '',
  category: 'All Courses',
  level: 'all',
  priceType: 'all',
  rating: 0,
  sortBy: 'popular',
};

const initialState: CourseState = {
  courses: [],
  selectedCourse: null,
  wishlist: api.wishlist.getAll(),
  filters: initialFilters,
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk('courses/fetchAll', async () => {
  return await api.courses.getAll();
});

export const fetchCourseById = createAsyncThunk('courses/fetchById', async (id: string) => {
  return await api.courses.getById(id);
});

export const createNewCourse = createAsyncThunk('courses/create', async (courseData: Partial<Course>) => {
  return await api.courses.create(courseData);
});

export const deleteCourse = createAsyncThunk('courses/delete', async (id: string) => {
  await api.courses.delete(id);
  return id;
});

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FilterState>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = initialFilters;
    },
    toggleWishlist: (state, action: PayloadAction<string>) => {
      state.wishlist = api.wishlist.toggle(action.payload);
    },
    setSelectedCourse: (state, action: PayloadAction<Course | null>) => {
      state.selectedCourse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
        // Synchronize wishlist: only retain IDs that correspond to actual courses
        const validIds = new Set(action.payload.map((c) => c.id));
        state.wishlist = state.wishlist.filter((id) => validIds.has(id));
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.selectedCourse = action.payload || null;
      })
      .addCase(createNewCourse.fulfilled, (state, action) => {
        state.courses.unshift(action.payload);
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(c => c.id !== action.payload);
      });
  },
});

export const { setFilters, resetFilters, toggleWishlist, setSelectedCourse } = courseSlice.actions;
export default courseSlice.reducer;

