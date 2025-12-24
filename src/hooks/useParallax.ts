import { useState, useEffect, useRef, RefObject } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

interface UseParallaxReturn {
  ref: RefObject<HTMLDivElement>;
  offset: number;
  style: React.CSSProperties;
}

export function useParallax({ 
  speed = 0.3, 
  direction = 'up' 
}: UseParallaxOptions = {}): UseParallaxReturn {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementVisible = windowHeight - elementTop;
      
      // Only apply parallax when element is in view
      if (elementTop < windowHeight && rect.bottom > 0) {
        const parallaxOffset = elementVisible * speed * (direction === 'up' ? -1 : 1);
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  const style: React.CSSProperties = {
    transform: `translateY(${offset}px)`,
    willChange: 'transform',
  };

  return { ref, offset, style };
}
