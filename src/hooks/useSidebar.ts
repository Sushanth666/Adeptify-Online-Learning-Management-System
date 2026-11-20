import { useAppDispatch, useAppSelector } from '../store';
import { 
  toggleSidebarMinimized, 
  setSidebarMinimized, 
  toggleMobileSidebar, 
  setMobileSidebarOpen 
} from '../store/slices/uiSlice';

export const useSidebar = () => {
  const dispatch = useAppDispatch();
  const isMinimized = useAppSelector((state) => state.ui.isSidebarMinimized);
  const isMobileOpen = useAppSelector((state) => state.ui.isMobileSidebarOpen);

  return {
    isMinimized,
    isMobileOpen,
    toggleMinimized: () => dispatch(toggleSidebarMinimized()),
    setMinimized: (min: boolean) => dispatch(setSidebarMinimized(min)),
    toggleMobile: () => dispatch(toggleMobileSidebar()),
    setMobileOpen: (open: boolean) => dispatch(setMobileSidebarOpen(open)),
  };
};

