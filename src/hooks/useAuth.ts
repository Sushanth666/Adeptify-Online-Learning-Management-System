import { useAppDispatch, useAppSelector } from '../store';
import { setRole, logout } from '../store/slices/authSlice';
import { showToast } from '../store/slices/uiSlice';
import { UserRole } from '../types';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const isStudent = currentUser.role === 'student';
  const isInstructor = currentUser.role === 'instructor';
  const isAdmin = currentUser.role === 'admin';

  const switchRole = (newRole: UserRole) => {
    dispatch(setRole(newRole));
    dispatch(showToast({
      message: `Switched view to ${newRole.toUpperCase()}`,
      type: 'success'
    }));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(showToast({
      message: 'Logged out successfully',
      type: 'info'
    }));
  };

  return {
    currentUser,
    isAuthenticated,
    role: currentUser.role,
    isStudent,
    isInstructor,
    isAdmin,
    switchRole,
    logout: handleLogout
  };
};

