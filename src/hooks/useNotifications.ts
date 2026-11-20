import { useAppDispatch, useAppSelector } from '../store';
import { 
  toggleNotifications, 
  setNotificationsOpen, 
  markNotificationAsRead, 
  markAllNotificationsAsRead 
} from '../store/slices/uiSlice';

export const useNotifications = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isNotificationsOpen);
  const notifications = useAppSelector((state) => state.ui.notifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  return {
    isOpen,
    notifications,
    unreadCount,
    toggle: () => dispatch(toggleNotifications()),
    setOpen: (open: boolean) => dispatch(setNotificationsOpen(open)),
    markAsRead: (id: string) => dispatch(markNotificationAsRead(id)),
    markAllAsRead: () => dispatch(markAllNotificationsAsRead()),
  };
};

