'use client';
import React, { useState, useEffect } from 'react';

const GradientCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        background: `
          radial-gradient(800px at ${position.x}px ${position.y}px, rgba(76, 230, 222, 0.07), transparent 70%),
          radial-gradient(600px at ${position.x}px ${position.y}px, rgba(9, 37, 55, 0.05), transparent 70%),
          radial-gradient(400px at ${position.x}px ${position.y}px, rgba(0, 48, 73, 0.03), transparent 70%)
        `,
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default GradientCursor;