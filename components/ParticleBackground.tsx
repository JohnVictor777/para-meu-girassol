
import React from 'react';

const Particle: React.FC<{ delay: number; startX: number; endX: number; color?: string; size: number }> = ({ delay, startX, endX, color = 'bg-yellow-300', size }) => {
  const style: React.CSSProperties = {
    '--rand-x': startX,
    '--rand-x-end': endX,
    animationDelay: `${delay}s`,
    width: `${size}px`,
    height: `${size}px`,
  } as React.CSSProperties;

  return (
    <div
      className={`particle absolute rounded-full opacity-0 shadow-[0_0_7px_rgba(255,255,255,0.8)] z-0 ${color}`}
      style={style}
    >
      <style>{`
        @keyframes float {
            0% { transform: translateY(100vh) translateX(calc(var(--rand-x) * 100vw)); opacity: 0; }
            20% { opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translateY(-20vh) translateX(calc(var(--rand-x-end) * 100vw)); opacity: 0; }
        }
        .particle {
            animation: float 15s infinite ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

const ParticleBackground: React.FC = () => {
  const particles = [
    { delay: 0, startX: 0.1, endX: 0.9, size: 3 },
    { delay: 2, startX: 0.3, endX: 0.7, size: 2, color: 'bg-blue-300' },
    { delay: 4, startX: 0.5, endX: 0.5, size: 4 },
    { delay: 6, startX: 0.7, endX: 0.3, size: 3, color: 'bg-purple-300' },
    { delay: 8, startX: 0.9, endX: 0.1, size: 2 },
    { delay: 1, startX: 0.2, endX: 0.8, size: 3, color: 'bg-blue-300' },
    { delay: 3, startX: 0.4, endX: 0.6, size: 4 },
    { delay: 5, startX: 0.6, endX: 0.4, size: 2, color: 'bg-purple-300' },
    { delay: 7, startX: 0.8, endX: 0.2, size: 3 },
    { delay: 9, startX: 0.05, endX: 0.95, size: 2, color: 'bg-blue-300' },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}
    </>
  );
};

export default ParticleBackground;
