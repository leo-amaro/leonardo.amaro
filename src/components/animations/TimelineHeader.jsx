import { useState, useEffect, useRef } from 'react';

const TimelineHeader = ({ title, subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={headerRef}
      className="mb-12 text-center"
    >
      <h2 
        className={`text-2xl font-bold text-slate-200 mb-2 transition-all duration-700 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-slate-400 transition-all duration-700 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          {subtitle}
        </p>
      )}
      
      {/* Decorative line */}
      <div className="flex justify-center mt-6">
        <div 
          className={`h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent transition-all duration-1000 delay-500 ${
            isVisible ? 'w-24 opacity-100' : 'w-0 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};

export default TimelineHeader; 