import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Enrollment, Certificate, Lesson } from '../../types';
import { api } from '../../services/api';

interface LearningState {
  enrollments: Enrollment[];
  activeEnrollment: Enrollment | null;
  activeLesson: Lesson | null;
  certificates: Certificate[];
  selectedCertificate: Certificate | null;
  loading: boolean;
  error: string | null;
}

const initialState: LearningState = {
  enrollments: [],
  activeEnrollment: null,
  activeLesson: null,
  certificates: [],
  selectedCertificate: null,
  loading: false,
  error: null,
};

export const fetchEnrollments = createAsyncThunk('learning/fetchEnrollments', async () => {
  return await api.enrollments.getAll();
});

export const enrollInCourse = createAsyncThunk(
  'learning/enroll',
  async ({ courseId, studentId }: { courseId: string; studentId: string }) => {
    return await api.enrollments.enroll(courseId, studentId);
  }
);

export const markLessonComplete = createAsyncThunk(
  'learning/markLessonComplete',
  async ({ courseId, lessonId }: { courseId: string; lessonId: string }) => {
    const updated = await api.enrollments.updateProgress(courseId, lessonId);
    const certs = await api.certificates.getAll();
    return { enrollment: updated, certificates: certs };
  }
);

export const fetchCertificates = createAsyncThunk('learning/fetchCertificates', async () => {
  return await api.certificates.getAll();
});

const learningSlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    setActiveLesson: (state, action: PayloadAction<Lesson | null>) => {
      state.activeLesson = action.payload;
    },
    setSelectedCertificate: (state, action: PayloadAction<Certificate | null>) => {
      state.selectedCertificate = action.payload;
    },
    setActiveEnrollment: (state, action: PayloadAction<Enrollment | null>) => {
      state.activeEnrollment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnrollments.fulfilled, (state, action) => {
        state.enrollments = action.payload;
      })
      .addCase(enrollInCourse.fulfilled, (state, action) => {
        const exists = state.enrollments.some(e => e.id === action.payload.id);
        if (!exists) {
          state.enrollments.push(action.payload);
        }
      })
      .addCase(markLessonComplete.fulfilled, (state, action) => {
        const index = state.enrollments.findIndex(e => e.id === action.payload.enrollment.id);
        if (index !== -1) {
          state.enrollments[index] = action.payload.enrollment;
        }
        state.activeEnrollment = action.payload.enrollment;
        state.certificates = action.payload.certificates;
      })
      .addCase(fetchCertificates.fulfilled, (state, action) => {
        state.certificates = action.payload;
      });
  },
});

export const { setActiveLesson, setSelectedCertificate, setActiveEnrollment } = learningSlice.actions;
export default learningSlice.reducer;

