import React, { useState, useEffect } from 'react';
import { HERO_FEATURES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_FEATURES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + HERO_FEATURES.length) % HERO_FEATURES.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % HERO_FEATURES.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentFeature = HERO_FEATURES[activeIndex];
  const showTextOverlay = !currentFeature.hideTextOverlay;

  const handleBannerClick = (link?: string) => {
    if (link && link !== '#') {
      navigate(link);
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] mb-12 group overflow-hidden bg-gray-900 text-white">
      {/* Background Image Layer */}
      {HERO_FEATURES.map((feature, index) => (
        <div 
          key={feature.id}
          onClick={() => index === activeIndex && handleBannerClick(feature.link)}
          className={`absolute inset-0 bg-cover bg-no-repeat bg-center transition-opacity duration-700 ease-in-out
            ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
            ${feature.link && feature.link !== '#' ? 'cursor-pointer' : ''}
          `}
          style={{ backgroundImage: `url('${feature.image}')` }}
        >
           {/* Dark Overlay Gradient - Only show if we need to make text readable */}
           <div className={`absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent transition-opacity duration-300 ${!feature.hideTextOverlay ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      ))}

      {/* Content Layer */}
      {showTextOverlay && (
        <div className="relative z-20 container mx-auto px-4 md:px-12 max-w-[1200px] h-full flex flex-col justify-center pb-24 pointer-events-none">
          <div className="max-w-xl animate-in fade-in slide-in-from-left-4 duration-700 key={activeIndex} pointer-events-auto">
            <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-4 leading-tight tracking-wide text-white drop-shadow-md">
              {currentFeature.title}
            </h2>
            <p className="text-base md:text-lg text-gray-100 mb-8 font-medium leading-relaxed max-w-lg drop-shadow-sm">
              {currentFeature.subtitle}
            </p>
            <button 
              onClick={() => handleBannerClick(currentFeature.link)}
              className="bg-[#b39556] text-black px-10 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#cbb075] transition-colors shadow-lg"
            >
              {currentFeature.buttonText || 'Shop Now'}
            </button>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/30 text-white/70 hover:bg-black/20 hover:text-white transition-all z-30 hidden md:block"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/30 text-white/70 hover:bg-black/20 hover:text-white transition-all z-30 hidden md:block"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom Navigation Tabs */}
      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            {HERO_FEATURES.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => handleDotClick(index)}
                className={`text-left px-6 py-5 transition-colors relative h-full flex flex-col justify-center group outline-none
                  ${index === activeIndex ? 'bg-white/10' : 'hover:bg-white/5'}
                `}
              >
                {/* Top Active Line */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] transition-colors duration-300 ${index === activeIndex ? 'bg-[#b39556]' : 'bg-transparent'}`} />
                
                <div className="flex flex-col h-full justify-center">
                  <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 transition-colors ${index === activeIndex ? 'text-[#b39556]' : 'text-gray-400'}`}>
                    {String(index + 1).padStart(2, '0')}. FEATURE
                  </div>
                  <div className="font-serif-display font-bold text-sm md:text-base leading-tight text-white line-clamp-1 mb-1">
                    {feature.title}
                  </div>
                   <div className="text-xs text-gray-400 line-clamp-1 opacity-70 group-hover:opacity-100 transition-opacity hidden lg:block">
                     {feature.subtitle}
                   </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;