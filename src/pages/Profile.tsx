
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/Sidebar';
import { TokenDisplay } from '@/components/TokenDisplay';
import { SkillCard } from '@/components/SkillCard';
import { User, Edit, BookOpen, Award, Clock, UserCheck } from 'lucide-react';
import { skillsData } from '@/data/skillsData';
import { transactionsData } from '@/data/transactionsData';

const Profile = () => {
  // User data
  const user = {
    name: "John Doe",
    bio: "UX designer with a passion for creating intuitive digital experiences. I love sharing my knowledge about design principles and user research methodologies.",
    avatar: undefined, // No avatar for this user
    skills: ["UX Design", "UI Design", "User Research", "Prototyping", "Figma"],
    tokens: 125,
    rating: 4.8,
    memberSince: "Mar 2023",
    connections: 42,
    topInstructor: true,
    skillsTaught: 3,
    studentsHelped: 126,
  };
  
  // Skills taught by this user
  const taughtSkills = skillsData.filter((_, index) => index < 2);
  
  // Skills learned by this user
  const learnedSkills = skillsData.filter((_, index) => index >= 2 && index < 5);
  
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 pt-16 sm:pt-0 sm:pl-64 transition-all duration-300">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          {/* Profile Header */}
          <Card className="mb-8 overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5"></div>
            <CardContent className="p-6 relative">
              <div className="flex flex-col sm:flex-row sm:items-center -mt-16 sm:-mt-12">
                <Avatar className="h-32 w-32 border-4 border-white bg-white shadow-md">
                  <AvatarFallback>
                    <User className="h-16 w-16 text-primary/40" />
                  </AvatarFallback>
                </Avatar>
                
                <div className="mt-4 sm:mt-0 sm:ml-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    
                    {user.topInstructor && (
                      <Badge className="mt-1 sm:mt-0 w-fit bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors">
                        <Award className="mr-1 h-3 w-3" /> Top Instructor
                      </Badge>
                    )}
                  </div>
                  
                  <p className="mt-2 text-slate-600 max-w-2xl">{user.bio}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">Member since {user.memberSince}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{user.skillsTaught} skills taught</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <UserCheck className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{user.studentsHelped} students helped</span>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="mt-4 sm:mt-0 sm:ml-auto">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar with stats and tokens */}
            <div className="space-y-6">
              {/* Token Display */}
              <TokenDisplay balance={user.tokens} transactions={transactionsData} />
              
              {/* Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Rating</span>
                      <div className="flex items-center">
                        <span className="font-medium">{user.rating}</span>
                        <span className="text-amber-500 ml-1">★</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Skills Taught</span>
                      <span className="font-medium">{user.skillsTaught}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Students Helped</span>
                      <span className="font-medium">{user.studentsHelped}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Connections</span>
                      <span className="font-medium">{user.connections}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content with tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="teaching">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="teaching" className="flex-1">Teaching</TabsTrigger>
                  <TabsTrigger value="learning" className="flex-1">Learning</TabsTrigger>
                  <TabsTrigger value="activity" className="flex-1">Activity</TabsTrigger>
                </TabsList>
                
                <TabsContent value="teaching" className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Skills You Teach</h3>
                    <Button>Create New Skill</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {taughtSkills.map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="learning" className="space-y-6">
                  <h3 className="text-xl font-semibold">Skills You're Learning</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {learnedSkills.map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="activity" className="space-y-6">
                  <h3 className="text-xl font-semibold">Recent Activity</h3>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {transactionsData.map((transaction) => (
                          <div key={transaction.id} className="flex items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex-1">
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-sm text-slate-500">{transaction.timestamp}</p>
                            </div>
                            <div className={transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'}>
                              {transaction.type === 'earned' ? '+' : '-'}{transaction.amount} tokens
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
