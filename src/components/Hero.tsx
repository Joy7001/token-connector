
import { useState, useEffect } from 'react';
import { ArrowRight, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container relative z-10 px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-12">
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="animate-pulse mr-1.5 relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Launching new skills marketplace</span>
          </div>
          
          {/* Main Heading */}
          <h1 
            className={`hero-heading mx-auto max-w-4xl transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Share your expertise.<br />
            <span className="text-primary">Earn tokens.</span> Learn anything.
          </h1>
          
          {/* Description */}
          <p 
            className={`mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            The platform where knowledge has value. Teach what you know, earn tokens, and use them to learn from others.
          </p>
          
          {/* Stats */}
          <div 
            className={`flex flex-wrap justify-center gap-x-8 gap-y-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center space-x-2 text-slate-700">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">10k+ Users</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-700">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">5k+ Skills</span>
            </div>
          </div>
          
          {/* CTA */}
          <div 
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button className="py-6 px-8 rounded-xl text-base" size="lg">
              Explore Skills <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="py-6 px-8 rounded-xl text-base" size="lg">
              Share Your Expertise
            </Button>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 right-8 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-50 animate-float hidden md:block"></div>
          <div className="absolute bottom-1/4 left-8 w-16 h-16 bg-teal-200 rounded-full blur-xl opacity-40 animate-float hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};
