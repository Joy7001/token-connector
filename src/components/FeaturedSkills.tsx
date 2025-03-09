
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SkillCard } from './SkillCard';
import { skillsData } from '@/data/skillsData';

export const FeaturedSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { current: container } = containerRef;
      const scrollAmount = container.clientWidth * 0.8;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { current: container } = containerRef;
      
      // Check if we can scroll left
      setShowLeftArrow(container.scrollLeft > 0);
      
      // Check if we can scroll right
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setShowRightArrow(container.scrollLeft < maxScrollLeft - 10); // 10px threshold for rounding errors
    }
  };

  // Initial check and listen for scroll events
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      
      // Also check on window resize
      window.addEventListener('resize', checkScrollButtons);
      
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  return (
    <div className="py-12">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Skills</h2>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full ${!showLeftArrow ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full ${!showRightArrow ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {skillsData.map((skill) => (
            <div 
              key={skill.id} 
              className="min-w-[300px] max-w-[300px] snap-start"
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
