import { useState, useEffect, useRef } from 'react';

const ScrollReveal = ({ 
  children, 
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 700,
  className = "",
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    
    switch (direction) {
      case 'up':
        return `translate(0, ${distance}px)`;
      case 'down':
        return `translate(0, -${distance}px)`;
      case 'left':
        return `translate(${distance}px, 0)`;
      case 'right':
        return `translate(-${distance}px, 0)`;
      default:
        return `translate(0, ${distance}px)`;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 