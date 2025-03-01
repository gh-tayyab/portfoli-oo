'use client';

import { useEffect, useRef, ElementType } from 'react';

// Add types for props
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export default function AnimatedSection({ children, className, delay = 0, as: Component = 'div' }: AnimatedSectionProps) {
  // Type the ref
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            section.classList.add('animate-in');
          }, delay);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    );
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay]);
  
  return (
    <Component
      ref={sectionRef}
      className={`opacity-0 translate-y-12 transition-all duration-700 ${className}`}
    >
      {children}
    </Component>
  );
}