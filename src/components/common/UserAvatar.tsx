import React, { useState } from 'react';
import { getInitial, getGradientForName, isCustomAvatar } from '../../utils/avatarUtils';

export interface UserAvatarProps {
  name?: string;
  avatar?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'rounded' | 'circle' | 'square';
  className?: string;
  alt?: string;
}

const SIZE_CONFIG = {
  xs: { box: 'w-6 h-6', text: 'text-[10px]', rounded: 'rounded-md' },
  sm: { box: 'w-8 h-8', text: 'text-xs', rounded: 'rounded-lg' },
  md: { box: 'w-10 h-10', text: 'text-sm', rounded: 'rounded-xl' },
  lg: { box: 'w-14 h-14', text: 'text-lg', rounded: 'rounded-xl' },
  xl: { box: 'w-20 h-20', text: 'text-2xl', rounded: 'rounded-2xl' },
  '2xl': { box: 'w-24 h-24', text: 'text-3xl', rounded: 'rounded-2xl' },
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name = 'Learner',
  avatar,
  size = 'md',
  shape = 'rounded',
  className = '',
  alt,
}) => {
  const [imgError, setImgError] = useState(false);
  const sizeConfig = SIZE_CONFIG[size] || SIZE_CONFIG.md;

  const shapeClass =
    shape === 'circle'
      ? 'rounded-full'
      : shape === 'square'
      ? 'rounded-2xl'
      : sizeConfig.rounded;

  const initial = getInitial(name);
  const gradient = getGradientForName(name);
  const hasCustomPhoto = isCustomAvatar(avatar) && !imgError;

  if (hasCustomPhoto && avatar) {
    return (
      <img
        src={avatar}
        alt={alt || name}
        onError={() => setImgError(true)}
        className={`${sizeConfig.box} ${shapeClass} object-cover flex-shrink-0 shadow-xs ${className}`}
      />
    );
  }

  return (
    <div
      title={name}
      aria-label={name}
      className={`${sizeConfig.box} ${shapeClass} bg-gradient-to-tr ${gradient} flex items-center justify-center text-white font-black ${sizeConfig.text} select-none shadow-xs flex-shrink-0 tracking-wide relative overflow-hidden ring-1 ring-white/20 ${className}`}
    >
      {/* Subtle top-light sheen */}
      <span className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/10 pointer-events-none" />
      <span className="relative z-10 drop-shadow-sm">{initial}</span>
    </div>
  );
};
