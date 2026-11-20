import React from 'react';

interface AdeptifyLogoProps {
  className?: string;
  size?: number;
}

export const AdeptifyLogo: React.FC<AdeptifyLogoProps> = ({ className = "w-6 h-6", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Left Emerald Prism Facet */}
        <linearGradient id="adeptFacetLeft" x1="14" y1="2" x2="3" y2="17" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="60%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        {/* Right Deep Forest Prism Facet */}
        <linearGradient id="adeptFacetRight" x1="14" y1="2" x2="25" y2="17" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#047857" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>

        {/* Dynamic Ascending Velocity Arrow */}
        <linearGradient id="adeptAscendingArrow" x1="14" y1="5" x2="14" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d1fae5" />
        </linearGradient>

        {/* Core Jewel Glow Filter */}
        <filter id="adeptGlow" x="-2" y="-2" width="32" height="32" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#047857" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#adeptGlow)">
        {/* Left Geometric Facet */}
        <path
          d="M14 2L3 10L6.5 21L14 26V2Z"
          fill="url(#adeptFacetLeft)"
        />

        {/* Right Geometric Facet */}
        <path
          d="M14 2L25 10L21.5 21L14 26V2Z"
          fill="url(#adeptFacetRight)"
        />

        {/* Central Facet Division Highlight Line */}
        <path
          d="M14 2V26"
          stroke="#a7f3d0"
          strokeWidth="0.75"
          strokeOpacity="0.4"
        />

        {/* Ascending Velocity Arrow / Engineering Spark */}
        <path
          d="M14 5.5L19 12.5H15.8V19H12.2V12.5H9L14 5.5Z"
          fill="url(#adeptAscendingArrow)"
        />
      </g>
    </svg>
  );
};

