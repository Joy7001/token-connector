
import { Clock, Star, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SkillCardProps {
  skill: {
    id: string;
    title: string;
    description: string;
    image?: string;
    category: string;
    tokenPrice: number;
    instructor: {
      name: string;
      avatar?: string;
    };
    rating: number;
    duration: string;
  };
  className?: string;
}

export const SkillCard = ({ skill, className }: SkillCardProps) => {
  return (
    <div className={`skill-card group ${className}`}>
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
        {skill.image ? (
          <img 
            src={skill.image} 
            alt={skill.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-slate-100 flex items-center justify-center">
            <span className="text-slate-400">No image</span>
          </div>
        )}
        <Badge className="absolute top-2 left-2 bg-white/80 text-primary backdrop-blur-sm">
          {skill.category}
        </Badge>
      </div>
      
      {/* Content */}
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold leading-tight">{skill.title}</h3>
          <Badge variant="outline" className="token-badge flex-shrink-0 ml-2">
            {skill.tokenPrice} Tokens
          </Badge>
        </div>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{skill.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              {skill.instructor.avatar ? (
                <AvatarImage src={skill.instructor.avatar} alt={skill.instructor.name} />
              ) : (
                <AvatarFallback>
                  <User className="h-3 w-3" />
                </AvatarFallback>
              )}
            </Avatar>
            <span className="text-sm text-slate-600">{skill.instructor.name}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <div className="flex items-center space-x-1 text-amber-500">
              <Star className="h-4 w-4 fill-amber-500" />
              <span>{skill.rating}</span>
            </div>
            <div className="flex items-center space-x-1 text-slate-500">
              <Clock className="h-4 w-4" />
              <span>{skill.duration}</span>
            </div>
          </div>
        </div>
        
        <Button className="w-full mt-4" variant="outline">Learn This Skill</Button>
      </div>
    </div>
  );
};
