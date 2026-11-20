import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { NotificationItem } from '../../types';
import { api } from '../../services/api';

interface ToastInfo {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface UiState {
  isNotificationsOpen: boolean;
  notifications: NotificationItem[];
  toasts: ToastInfo[];
  isMobileSidebarOpen: boolean;
  isSidebarMinimized: boolean;
}

const getInitialSidebarMinimized = (): boolean => {
  try {
    return localStorage.getItem('edupulse_sidebar_minimized') === 'true';
  } catch {
    return false;
  }
};

const initialState: UiState = {
  isNotificationsOpen: false,
  notifications: [],
  toasts: [],
  isMobileSidebarOpen: false,
  isSidebarMinimized: getInitialSidebarMinimized(),
};

export const fetchNotifications = createAsyncThunk('ui/fetchNotifications', async () => {
  return await api.notifications.getAll();
});

export const markNotificationAsRead = createAsyncThunk(
  'ui/markNotificationAsRead',
  async (id: string) => {
    return await api.notifications.markAsRead(id);
  }
);

export const markAllNotificationsAsRead = createAsyncThunk(
  'ui/markAllNotificationsAsRead',
  async () => {
    return await api.notifications.markAllAsRead();
  }
);

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleNotifications: (state) => {
      state.isNotificationsOpen = !state.isNotificationsOpen;
    },
    setNotificationsOpen: (state, action: PayloadAction<boolean>) => {
      state.isNotificationsOpen = action.payload;
    },
    toggleMobileSidebar: (state) => {
      state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
    },
    setMobileSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isMobileSidebarOpen = action.payload;
    },
    toggleSidebarMinimized: (state) => {
      state.isSidebarMinimized = !state.isSidebarMinimized;
      try {
        localStorage.setItem('edupulse_sidebar_minimized', String(state.isSidebarMinimized));
      } catch {}
    },
    setSidebarMinimized: (state, action: PayloadAction<boolean>) => {
      state.isSidebarMinimized = action.payload;
      try {
        localStorage.setItem('edupulse_sidebar_minimized', String(action.payload));
      } catch {}
    },
    showToast: (state, action: PayloadAction<{ message: string; type: 'success' | 'error' | 'info' }>) => {
      state.toasts.push({
        id: 'toast-' + Date.now(),
        message: action.payload.message,
        type: action.payload.type,
      });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.notifications = action.payload;
      })
      .addCase(markAllNotificationsAsRead.fulfilled, (state, action) => {
        state.notifications = action.payload;
      });
  },
});

export const {
  toggleNotifications,
  setNotificationsOpen,
  toggleMobileSidebar,
  setMobileSidebarOpen,
  toggleSidebarMinimized,
  setSidebarMinimized,
  showToast,
  removeToast,
} = uiSlice.actions;

export default uiSlice.reducer;

