import { useState, useEffect } from 'react';

const BlurText = ({ 
  text, 
  delay = 0,
  animateBy = "words", // "words" or "chars"
  direction = "top", // "top", "bottom", "left", "right"
  onAnimationComplete = () => {},
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Call completion callback after animation finishes
      setTimeout(() => {
        onAnimationComplete();
      }, 1000); // Adjust based on animation duration
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, onAnimationComplete]);

  // Split text based on animateBy prop
  const textArray = animateBy === "words" ? text.split(' ') : text.split('');

  const getTransform = (index) => {
    if (isVisible) return 'translate(0, 0)';
    
    const distance = 20;
    switch (direction) {
      case 'bottom':
        return `translate(0, -${distance}px)`;
      case 'left':
        return `translate(${distance}px, 0)`;
      case 'right':
        return `translate(-${distance}px, 0)`;
      default: // 'top'
        return `translate(0, ${distance}px)`;
    }
  };

  return (
    <span className={className}>
      {textArray.map((item, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            filter: isVisible ? 'blur(0px)' : 'blur(8px)',
            opacity: isVisible ? 1 : 0,
            transform: getTransform(index),
            transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
            transitionDelay: `${index * 50}ms`
          }}
        >
          {item}
          {animateBy === "words" && index < textArray.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
};

export default BlurText;