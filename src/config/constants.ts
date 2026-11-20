export const APP_CONFIG = {
  name: 'Adeptify',
  tagline: 'Skill Acceleration for Engineers',
  shortTagline: 'Skill Acceleration',
  currency: '₹',
  currencyLocale: 'en-IN',
  supportEmail: 'support@adeptify.in',
  copyrightYear: 2026,
  storageKeys: {
    SIDEBAR_MINIMIZED: 'adeptify_sidebar_minimized',
    COURSES_CACHE: 'adeptify_v5_playable_youtube_videos',
    AUTH_USER: 'adeptify_current_user',
    AUTH_ACTIVE: 'adeptify_auth_active',
    ENROLLMENTS: 'adeptify_enrollments',
    WISHLIST: 'adeptify_wishlist',
    NOTIFICATIONS: 'adeptify_notifications',
    REVIEWS: 'adeptify_reviews'
  }
} as const;

export const ROLE_LABELS = {
  student: 'Student View',
  instructor: 'Instructor View',
  admin: 'Administrator View'
} as const;

