
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/Sidebar';
import { SkillCard } from '@/components/SkillCard';
import { User, Edit, BookOpen, Award, Clock, UserCheck, Mail, MapPin, Briefcase, Share2, MessageSquare, Calendar } from 'lucide-react';
import { skillsData } from '@/data/skillsData';
import { motion } from 'framer-motion';
import { useUserProfile } from '@/hooks/useUserProfile';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { profile } = useUserProfile();
  
  // Skills taught by this user
  const taughtSkills = skillsData.filter((_, index) => index < 2);
  
  // Skills learned by this user
  const learnedSkills = skillsData.filter((_, index) => index >= 2 && index < 5);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 pt-16 sm:pt-0 sm:pl-64 transition-all duration-300">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          {/* Profile Header */}
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="space-y-8"
          >
            <motion.div variants={item}>
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-40 bg-gradient-to-r from-purple-500/30 to-blue-500/20"></div>
                </CardHeader>
                <CardContent className="p-6 relative">
                  <div className="flex flex-col sm:flex-row sm:items-center -mt-24 sm:-mt-20">
                    <Avatar className="h-32 w-32 border-4 border-white bg-white shadow-lg">
                      {profile.avatar ? (
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                      ) : (
                        <AvatarFallback>
                          <User className="h-16 w-16 text-primary/40" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    
                    <div className="mt-4 sm:mt-0 sm:ml-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                        <h1 className="text-3xl font-bold">{profile.name}</h1>
                        
                        {profile.topInstructor && (
                          <Badge className="mt-1 sm:mt-0 w-fit bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors">
                            <Award className="mr-1 h-3 w-3" /> Top Instructor
                          </Badge>
                        )}
                      </div>
                      
                      <div className="mt-2 flex flex-wrap items-center text-sm text-slate-600 gap-4">
                        {profile.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            <span>{profile.location}</span>
                          </div>
                        )}
                        {profile.occupation && (
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4 text-slate-400" />
                            <span>{profile.occupation}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4 text-slate-400" />
                          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">{profile.email}</a>
                        </div>
                      </div>
                      
                      <p className="mt-3 text-slate-600 max-w-2xl">{profile.bio}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-600">Member since {profile.memberSince}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-600">{profile.skillsTaught} skills taught</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <UserCheck className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-600">{profile.studentsHelped} students helped</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4 sm:mt-0 sm:ml-auto">
                      <Button variant="outline" size="sm" className="text-slate-600">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="text-slate-600">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-100 hover:bg-slate-200 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {profile.availableForMentoring && (
                    <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Available for mentoring</span>
                      <Button size="sm" variant="ghost" className="ml-auto text-green-700 hover:text-green-800 hover:bg-green-100">
                        Schedule a session
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Sidebar with stats */}
              <div className="space-y-6">
                {/* Stats */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Rating</span>
                        <div className="flex items-center">
                          <span className="font-medium">{profile.rating}</span>
                          <span className="text-amber-500 ml-1">★</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Skills Taught</span>
                        <span className="font-medium">{profile.skillsTaught}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Students Helped</span>
                        <span className="font-medium">{profile.studentsHelped}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Connections</span>
                        <span className="font-medium">{profile.connections}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Last Active</span>
                        <span className="font-medium">{profile.lastActive}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main content with tabs */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="teaching">
                  <TabsList className="w-full mb-6 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-lg">
                    <TabsTrigger value="teaching" className="flex-1 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">Teaching</TabsTrigger>
                    <TabsTrigger value="learning" className="flex-1 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">Learning</TabsTrigger>
                    <TabsTrigger value="activity" className="flex-1 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">Activity</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="teaching" className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold">Skills You Teach</h3>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Create New Skill
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {taughtSkills.map((skill) => (
                        <motion.div 
                          key={skill.id}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="transform transition-all"
                        >
                          <SkillCard skill={skill} />
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="learning" className="space-y-6">
                    <h3 className="text-xl font-semibold">Skills You're Learning</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {learnedSkills.map((skill) => (
                        <motion.div 
                          key={skill.id}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="transform transition-all"
                        >
                          <SkillCard skill={skill} />
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="activity" className="space-y-6">
                    <h3 className="text-xl font-semibold">Recent Activity</h3>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-6">
                          <p className="text-center text-slate-500 py-4">Your recent learning activity will appear here.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
