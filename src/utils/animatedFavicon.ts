/**
 * Animates the browser tab favicon and tab title dynamically with:
 * 1. A swinging graduation cap, swaying tassel, and pulsing glow in the favicon
 * 2. Continuous marquee scrolling ticker in the tab title bar (so the tab text visibly moves continuously)
 * 3. Chrome/Edge/Firefox cache-busting DOM replacement to ensure tab icons actively repaint
 */

export function startTabAnimation() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let frame = 0;
  let intervalId: number;

  // Marquee text that smoothly scrolls across the browser tab title
  const marqueeText = " 💎 Adeptify • ⚡ Skill Acceleration for Engineers • 🚀 Learn • Build • Certify • 🇮🇳 India's #1 Tech Academy • ";
  let marqueeIndex = 0;
  const titleWindowSize = 38;

  // Function to force modern Chromium browsers (Chrome, Edge, Brave) to repaint the tab icon
  const updateTabFavicon = (dataUri: string) => {
    // Chrome caches existing link tags; remove existing and append new link tag
    const existingIcons = document.querySelectorAll("link[rel*='icon']");
    existingIcons.forEach(el => el.remove());

    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.type = 'image/png';
    newLink.href = dataUri;
    document.head.appendChild(newLink);
  };

  const renderFrame = () => {
    frame++;
    ctx.clearRect(0, 0, 32, 32);

    // Dynamic physics-like swinging angle and bobbing bounce
    const swing = Math.sin(frame * 0.25) * 0.22; // ~12 degrees swing
    const bounceY = Math.sin(frame * 0.3) * 1.8; // vertical floating bob
    const pulseScale = 1 + Math.sin(frame * 0.2) * 0.08;

    ctx.save();
    // Center transformation point
    ctx.translate(16, 16 + bounceY);
    ctx.scale(pulseScale, pulseScale);

    // 1. Glowing Background Badge (Pure Nordic Emerald & Mint Gradient)
    const bgGrad = ctx.createLinearGradient(-14, -14, 14, 14);
    bgGrad.addColorStop(0, '#047857'); // Deep Emerald
    bgGrad.addColorStop(0.5, '#059669'); // Nordic Emerald
    bgGrad.addColorStop(1, '#10b981'); // Vibrant Mint Emerald

    ctx.beginPath();
    ctx.roundRect(-14, -14, 28, 28, 7);
    ctx.fillStyle = bgGrad;
    ctx.shadowColor = 'rgba(5, 150, 105, 0.6)';
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Apply cap swing rotation
    ctx.rotate(swing);

    // 2. Adeptify Faceted Diamond Prism
    // Left Facet
    ctx.beginPath();
    ctx.moveTo(0, -11);
    ctx.lineTo(-10, -3);
    ctx.lineTo(-7, 8);
    ctx.lineTo(0, 12);
    ctx.closePath();
    ctx.fillStyle = '#34d399';
    ctx.fill();

    // Right Facet
    ctx.beginPath();
    ctx.moveTo(0, -11);
    ctx.lineTo(10, -3);
    ctx.lineTo(7, 8);
    ctx.lineTo(0, 12);
    ctx.closePath();
    ctx.fillStyle = '#047857';
    ctx.fill();

    // Central Highlight Division
    ctx.beginPath();
    ctx.moveTo(0, -11);
    ctx.lineTo(0, 12);
    ctx.strokeStyle = '#a7f3d0';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 3. Ascending Velocity Arrow Core
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, -1);
    ctx.lineTo(2.2, -1);
    ctx.lineTo(2.2, 5);
    ctx.lineTo(-2.2, 5);
    ctx.lineTo(-2.2, -1);
    ctx.lineTo(-5, -1);
    ctx.closePath();
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowBlur = 4;
    ctx.fill();
    ctx.shadowBlur = 0;

    // 4. Sparkle Star in top right corner (flashes every few frames)
    if (frame % 4 < 2) {
      ctx.beginPath();
      ctx.arc(8, -8, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = '#fef08a';
      ctx.fill();
    }

    ctx.restore();

    // Update Favicon via Data URL
    try {
      const dataUri = canvas.toDataURL('image/png');
      updateTabFavicon(dataUri);
    } catch {
      // Fallback safe
    }

    // Update Scrolling Title Marquee every 2 frames (~240ms) for smooth reading speed
    if (frame % 2 === 0) {
      marqueeIndex = (marqueeIndex + 1) % marqueeText.length;
      const scrolled = marqueeText.slice(marqueeIndex) + marqueeText.slice(0, marqueeIndex);
      document.title = scrolled.slice(0, titleWindowSize);
    }
  };

  // Run at ~8 FPS (120ms): very smooth, highly responsive, zero lag
  intervalId = window.setInterval(renderFrame, 120);

  return () => {
    clearInterval(intervalId);
  };
}


