'use client';

import { useEffect, useRef } from 'react';

// Add types for props
interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ children, className, delay = 0 }: AnimatedTextProps) {
  // Type the ref
  const textRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;
    
    // Add animation classes with delay
    setTimeout(() => {
      text.classList.add('animate-in');
    }, delay);
    
    return () => {
      if (text) text.classList.remove('animate-in');
    };
  }, [delay]);
  
  return (
    <div
      ref={textRef}
      className={`opacity-0 translate-y-8 transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
}