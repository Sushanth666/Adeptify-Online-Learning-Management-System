/**
 * Avatar utilities for letter-based initials and compressed image uploading
 */

// Curated modern vibrant gradient palettes for letter avatars
const GRADIENTS = [
  'from-emerald-600 via-teal-600 to-cyan-600',
  'from-teal-600 via-cyan-600 to-blue-600',
  'from-blue-600 via-indigo-600 to-violet-600',
  'from-indigo-600 via-purple-600 to-pink-600',
  'from-violet-600 via-pink-600 to-rose-600',
  'from-rose-600 via-amber-600 to-orange-600',
  'from-amber-600 via-orange-600 to-emerald-600',
  'from-emerald-700 via-teal-700 to-emerald-600',
];

/**
 * Extracts the primary initial letter of a user's name
 * Strips formal prefixes like Dr., Mr., Prof.
 */
export const getInitial = (name?: string): string => {
  if (!name || !name.trim()) return 'A';
  const clean = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Prof\.)\s+/i, '').trim();
  const char = clean.charAt(0);
  return char && /[a-zA-Z0-9]/.test(char) ? char.toUpperCase() : 'A';
};

/**
 * Deterministically returns a consistent gradient for a given name
 */
export const getGradientForName = (name?: string): string => {
  if (!name) return GRADIENTS[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % GRADIENTS.length;
  return GRADIENTS[index];
};

/**
 * Checks if the avatar string is a user-uploaded custom photo (data URI or custom URL)
 * versus legacy Unsplash stock photos.
 */
export const isCustomAvatar = (avatar?: string | null): boolean => {
  if (!avatar || !avatar.trim()) return false;
  // Ignore legacy Unsplash stock photos
  if (
    avatar.includes('photo-1534528741775-53994a69daeb') ||
    avatar.includes('photo-1573496359142-b8d87734a5a2') ||
    avatar.includes('photo-1507003211169-0a1dd7228f2d') ||
    avatar.includes('photo-1580489944761') ||
    avatar.includes('photo-1500648767791')
  ) {
    return false;
  }
  return true;
};

/**
 * Reads a user-uploaded image file, resizes it to max 320x320,
 * and compresses it to a lightweight data URL (~25KB) for localStorage persistence.
 */
export const processAvatarFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Please select a valid image file (PNG, JPG, WebP)'));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to load image for processing'));
      img.onload = () => {
        const MAX_SIZE = 320;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_SIZE) {
            height = Math.round((height * MAX_SIZE) / width);
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width = Math.round((width * MAX_SIZE) / height);
            height = MAX_SIZE;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Export high-quality compressed JPEG (approx 20-30 KB)
        const compressed = canvas.toDataURL('image/jpeg', 0.88);
        resolve(compressed);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};
