'use client';

import { forwardRef, useRef, useEffect, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface Card3DProps extends Omit<HTMLMotionProps<'div'>, 'onMouseMove' | 'onMouseLeave' | 'onMouseEnter'> {
  children: React.ReactNode;
  className?: string;
  tiltFactor?: number;
  scaleFactor?: number;
  glowColor?: string;
  disableTilt?: boolean;
}

export const Card3D = forwardRef<HTMLDivElement, Card3DProps>(
  (
    {
      children,
      className = '',
      tiltFactor = 15,
      scaleFactor = 1.02,
      glowColor = '#8b5cf6',
      disableTilt = false,
      style,
      ...props
    },
    ref
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disableTilt) return;

      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      setTilt({
        x: -deltaY * tiltFactor,
        y: deltaX * tiltFactor,
      });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeaveFull = () => {
      setIsHovered(false);
      setTilt({ x: 0, y: 0 });
    };

    return (
      <motion.div
        ref={(el) => {
          cardRef.current = el;
          if (ref) {
            if (typeof ref === 'function') ref(el);
            else ref.current = el;
          }
        }}
        className={`relative group ${className}`}
        style={{
          ...style,
          transformStyle: 'preserve-3d',
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? scaleFactor : 1})`,
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeaveFull}
        onMouseEnter={handleMouseEnter}
        whileHover={{ scale: disableTilt ? scaleFactor : 1, zIndex: 10 }}
        {...props}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            boxShadow: `0 0 ${isHovered ? '60px' : '30px'} ${isHovered ? '20px' : '10px'} ${glowColor}40`,
            opacity: isHovered ? 1 : 0,
            filter: 'blur(20px)',
            borderRadius: 'inherit',
            zIndex: -1,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Glass overlay */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'inherit',
            zIndex: 1,
          }}
        />

        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </motion.div>
    );
  }
);

Card3D.displayName = 'Card3D';

interface Card3DInteractiveProps extends Card3DProps {
  onClick?: () => void;
}

export function Card3DInteractive({
  children,
  className = '',
  tiltFactor = 12,
  scaleFactor = 1.015,
  glowColor = '#8b5cf6',
  onClick,
  ...props
}: Card3DInteractiveProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Card3D
      className={`${className} cursor-pointer`}
      tiltFactor={tiltFactor}
      scaleFactor={scaleFactor}
      glowColor={glowColor}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      onClick={onClick}
      style={{
        ...props.style,
        transform: `perspective(1000px) rotateX(${0}deg) rotateY(${0}deg) scale(${isPressed ? 0.98 : 1})`,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </Card3D>
  );
}
