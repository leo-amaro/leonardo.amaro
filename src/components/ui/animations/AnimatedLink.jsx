import { useRef, useState } from 'react';

const AnimatedLink = ({ 
  children, 
  href,
  className = "",
  target = "_blank",
  rel = "noreferrer noopener",
  ariaLabel,
  strength = 0.3
}) => {
  const linkRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!linkRef.current || window.innerWidth < 768) return; // Only apply magnetic effect on desktop

    const rect = linkRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = Math.max(rect.width, rect.height);
    
    if (distance < maxDistance) {
      setPosition({
        x: deltaX * strength,
        y: deltaY * strength
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <a
      ref={linkRef}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`
        relative inline-block font-medium text-teal-300
        transition-all duration-300 ease-out
        hover:text-teal-200 active:text-teal-400
        focus-visible:text-teal-200 focus-visible:outline-none
        group cursor-pointer
        active:scale-95 md:active:scale-100
        ${className}
      `}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background glow effect */}
      <span 
        className={`
          absolute inset-0 rounded-md bg-teal-400/20 blur-sm 
          transition-all duration-300 -z-10
          ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
          md:bg-teal-400/10
        `}
      />
      
      {/* Underline animation */}
      <span className="relative">
        {children}
        <span 
          className={`
            absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400
            transition-all duration-300 ease-out
            ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-70'}
            md:h-0.5 h-[1px]
          `}
        />
      </span>
      
      {/* External link icon */}
      <svg 
        className={`
          inline-block w-3 h-3 ml-1 transition-all duration-300
          ${isHovered ? 'translate-x-0.5 -translate-y-0.5 opacity-100' : 'opacity-70'}
        `}
        fill="currentColor" 
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path 
          fillRule="evenodd" 
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" 
          clipRule="evenodd" 
        />
      </svg>
    </a>
  );
};

export default AnimatedLink; 