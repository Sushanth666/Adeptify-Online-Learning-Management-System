import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User, UserRole } from '../../types';
import { api } from '../../services/api';
import { APP_CONFIG } from '../../config/constants';

interface AuthState {
  currentUser: User;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const checkInitialAuth = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(APP_CONFIG.storageKeys.AUTH_ACTIVE) === 'true';
};

const initialUser = api.auth.getCurrentUser();

const initialState: AuthState = {
  currentUser: initialUser,
  isAuthenticated: checkInitialAuth(),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, role }: { email: string; role: UserRole }) => {
    return await api.auth.login(email, role);
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/updateProfile',
  async (updates: Partial<User>) => {
    return await api.auth.updateProfile(updates);
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<UserRole>) => {
      state.currentUser = api.auth.switchRole(action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      if (typeof window !== 'undefined') {
        localStorage.removeItem(APP_CONFIG.storageKeys.AUTH_ACTIVE);
        localStorage.removeItem('edupulse_token');
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
        if (typeof window !== 'undefined') {
          localStorage.setItem(APP_CONFIG.storageKeys.AUTH_ACTIVE, 'true');
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      });
  },
});

export const { setRole, logout } = authSlice.actions;
export default authSlice.reducer;

