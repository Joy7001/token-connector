
import { User, Clock, Star, Award, BookOpen, MessageSquare, UserCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface UserProfileProps {
  user: {
    id: string;
    name: string;
    avatar?: string;
    skills: string[];
    rating: number;
    memberSince: string;
    topInstructor?: boolean;
    skillsTaught?: number;
    studentsHelped?: number;
  };
  className?: string;
  detailed?: boolean;
}

export const UserProfile = ({ user, className, detailed = false }: UserProfileProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`overflow-hidden transition-all hover:border-primary/40 ${className}`}>
        <CardHeader className="p-0">
          <div className="h-24 bg-gradient-to-r from-primary/20 via-purple-300/10 to-primary/5"></div>
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
            </div>
            
            {detailed && (
              <div className="mt-3 grid grid-cols-2 w-full gap-2 text-center">
                {user.skillsTaught && (
                  <div className="bg-slate-50 p-2 rounded-md">
                    <div className="flex items-center justify-center mb-1">
                      <BookOpen className="h-4 w-4 text-primary/60 mr-1" />
                      <span className="text-xs text-slate-500">Teaching</span>
                    </div>
                    <p className="font-medium">{user.skillsTaught}</p>
                  </div>
                )}
                {user.studentsHelped && (
                  <div className="bg-slate-50 p-2 rounded-md">
                    <div className="flex items-center justify-center mb-1">
                      <UserCheck className="h-4 w-4 text-primary/60 mr-1" />
                      <span className="text-xs text-slate-500">Helped</span>
                    </div>
                    <p className="font-medium">{user.studentsHelped}</p>
                  </div>
                )}
              </div>
            )}
            
            <div className="mt-6 w-full">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-100 hover:bg-slate-200 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Button className="mt-4 w-full" variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Connect
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
