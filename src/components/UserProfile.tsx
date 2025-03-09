
import { User, Clock, Star, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface UserProfileProps {
  user: {
    id: string;
    name: string;
    avatar?: string;
    skills: string[];
    tokens: number;
    rating: number;
    memberSince: string;
    topInstructor?: boolean;
  };
  className?: string;
}

export const UserProfile = ({ user, className }: UserProfileProps) => {
  return (
    <Card className={`overflow-hidden transition-shadow hover:shadow-md ${className}`}>
      <CardHeader className="p-0">
        <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/5"></div>
      </CardHeader>
      <CardContent className="pt-0 relative">
        <div className="flex flex-col items-center -mt-12">
          <Avatar className="h-24 w-24 border-4 border-white bg-white shadow-md">
            {user.avatar ? (
              <AvatarImage src={user.avatar} alt={user.name} />
            ) : (
              <AvatarFallback>
                <User className="h-12 w-12 text-primary/40" />
              </AvatarFallback>
            )}
          </Avatar>
          
          <h3 className="mt-4 text-xl font-medium">{user.name}</h3>
          
          {user.topInstructor && (
            <Badge className="mt-1 bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors">
              <Award className="mr-1 h-3 w-3" /> Top Instructor
            </Badge>
          )}
          
          <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Member since {user.memberSince}</span>
          </div>
          
          <div className="mt-2 flex items-center justify-center space-x-2">
            <div className="flex items-center space-x-1 text-amber-500">
              <Star className="h-4 w-4 fill-amber-500" />
              <span className="font-medium">{user.rating}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="text-primary font-medium">{user.tokens} Tokens</div>
          </div>
          
          <div className="mt-6 w-full">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
