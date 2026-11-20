import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Base Multi-Stop Nordic Emerald & Slate Canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/40 to-teal-50/30" />

      {/* 2. Top-Right Nordic Emerald Aurora Orb */}
      <motion.div
        animate={{
          x: [0, 45, -30, 0],
          y: [0, -35, 30, 0],
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -right-20 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br from-emerald-400/50 via-emerald-600/40 to-teal-500/30 blur-[100px]"
      />

      {/* 3. Bottom-Left Mint & Deep Forest Nebula Wave */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.3, 1.05, 1],
          opacity: [0.22, 0.42, 0.22],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-teal-400/50 via-emerald-500/40 to-emerald-300/35 blur-[110px]"
      />

      {/* 4. Center Subtle Emerald Ambient Radiance */}
      <motion.div
        animate={{
          scale: [0.85, 1.2, 0.85],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-emerald-400/25 blur-[130px]"
      />

      {/* 5. Floating Micro Aurora Light Beam */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [-20, 20, -20],
          rotate: [0, 15, -15, 0],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-[30rem] h-[20rem] rounded-full bg-gradient-to-r from-teal-300/30 to-emerald-500/30 blur-[90px]"
      />

      {/* 6. Fine Technical Engineering Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(#059669 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 7. Smooth Peripheral Radial Vignette Mask */}
      <div className="absolute inset-0 bg-radial from-transparent via-slate-50/15 to-slate-50/50" />
    </div>
  );
};

export default AnimatedBackground;
