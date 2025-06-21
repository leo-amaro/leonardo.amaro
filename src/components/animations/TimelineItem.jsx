import { useState, useEffect, useRef } from 'react';

const TimelineItem = ({ 
  children, 
  delay = 0,
  className = "",
  isLast = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className={`relative flex gap-6 ${className}`}
    >
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        {/* Timeline Dot */}
        <div 
          className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-700 ${
            isVisible 
              ? 'bg-teal-400 border-teal-400 shadow-lg shadow-teal-400/50' 
              : 'bg-slate-600 border-slate-600'
          }`}
        >
          {/* Pulse effect when visible */}
          {isVisible && (
            <div className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-30"></div>
          )}
        </div>
        
        {/* Timeline Line */}
        {!isLast && (
          <div 
            className={`w-0.5 flex-1 mt-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'bg-slate-600' : 'bg-slate-800'
            }`}
            style={{ minHeight: '100px' }}
          />
        )}
      </div>

      {/* Content */}
      <div 
        className={`flex-1 pb-8 transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

export default TimelineItem; 