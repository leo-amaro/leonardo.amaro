import { useState, useEffect } from 'react';

const Typewriter = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  showCursor = true,
  onComplete = () => {}
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span 
          className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
            isComplete ? 'animate-pulse' : 'animate-pulse'
          }`}
          style={{
            animation: isComplete 
              ? 'pulse 1s infinite' 
              : 'pulse 0.5s infinite'
          }}
        />
      )}
    </span>
  );
};

export default Typewriter; 