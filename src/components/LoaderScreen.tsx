import React, { useState, useEffect } from 'react';

interface LoaderScreenProps {
  onComplete: () => void;
}

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoAnimated, setLogoAnimated] = useState(false);

  useEffect(() => {
    // Logo animation timing
    const logoTimer = setTimeout(() => {
      setLogoAnimated(true);
    }, 500);

    // Complete animation timing
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 2500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Brand */}
        <div className={`transition-all duration-1000 ease-out ${
          logoAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}>
          <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
            <span className="text-4xl font-bold text-white">YB</span>
          </div>
        </div>
        
        {/* Animated Text */}
        <div className={`transition-all duration-1000 delay-300 ease-out ${
          logoAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Hello. I'm Yoseph.
          </h1>
          <p className="text-lg text-muted-foreground">
            Creating digital experiences. One pixel at a time.
          </p>
        </div>
        
        {/* Loading indicator */}
        <div className={`mt-8 transition-all duration-500 delay-700 ${
          logoAnimated ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-16 h-1 bg-muted mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderScreen;