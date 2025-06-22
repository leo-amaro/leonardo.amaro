import { useState, useEffect } from 'react';

const StaggeredFadeIn = ({ 
  children, 
  delay = 0, 
  staggerDelay = 100,
  className = "",
  duration = 600
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Split text into words for staggered animation
  const words = typeof children === 'string' ? children.split(' ') : [children];

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
            transitionDuration: `${duration}ms`
          }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
};

export default StaggeredFadeIn; 