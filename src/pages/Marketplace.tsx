
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sidebar } from '@/components/Sidebar';
import { ArrowUp, ArrowDown, Clock, Zap, Gift, Award, Shield, BookOpen } from 'lucide-react';

const Marketplace = () => {
  // Featured skills categories
  const skillCategories = [
    { id: 1, name: "Design", count: 24, icon: "🎨" },
    { id: 2, name: "Development", count: 36, icon: "💻" },
    { id: 3, name: "Marketing", count: 18, icon: "📊" },
  ];
  
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 pt-16 sm:pt-0 sm:pl-64 transition-all duration-300">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-2">Skill Marketplace</h1>
          <p className="text-slate-600 mb-8">Discover and share skills with others</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar with info */}
            <div className="space-y-6">
              {/* How SkillShare works */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How SkillShare Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1">
                      <ArrowUp className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Share Your Skills</h4>
                      <p className="text-sm text-slate-600">Create courses and tutorials to share your expertise with others.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Learn New Skills</h4>
                      <p className="text-sm text-slate-600">Access courses and tutorials created by other skilled users.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full text-purple-600 mt-1">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Connect with Others</h4>
                      <p className="text-sm text-slate-600">Build relationships with other skilled professionals in your field.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content with tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="discover">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="discover" className="flex-1">Discover Skills</TabsTrigger>
                  <TabsTrigger value="teach" className="flex-1">Teach Skills</TabsTrigger>
                </TabsList>
                
                <TabsContent value="discover" className="space-y-6">
                  <h3 className="text-xl font-semibold">Popular Skill Categories</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {skillCategories.map((category) => (
                      <Card key={category.id} className="transition-all duration-300 hover:shadow-md">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center">
                            <span className="text-2xl mr-2">{category.icon}</span>
                            {category.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600">{category.count} skills available</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Browse Skills</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  
                  <Card className="bg-slate-50 border-dashed">
                    <CardContent className="flex flex-col sm:flex-row items-center justify-between p-6">
                      <div className="flex items-center mb-4 sm:mb-0">
                        <Gift className="h-10 w-10 text-primary mr-4" />
                        <div>
                          <h3 className="font-semibold text-lg">Recommend Skills</h3>
                          <p className="text-slate-600">Suggest skills to friends or colleagues</p>
                        </div>
                      </div>
                      <Button variant="outline">Share Now</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="teach" className="space-y-6">
                  <h3 className="text-xl font-semibold">Share Your Knowledge</h3>
                  
                  <div className="space-y-6">
                    <Card className="overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 flex items-center">
                        <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-5">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl">Create a New Skill</h3>
                          <p className="text-slate-600">Share your expertise with others</p>
                        </div>
                        <Button className="ml-auto">Create Skill</Button>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-50 p-4 rounded-lg mb-4">
                          <div className="mb-2 sm:mb-0">
                            <p className="font-medium">Help others learn and grow</p>
                            <p className="text-sm text-slate-600">Your knowledge can make a difference</p>
                          </div>
                          <Badge variant="outline" className="w-fit">High Demand</Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-50 p-4 rounded-lg">
                          <div className="mb-2 sm:mb-0">
                            <p className="font-medium">Gain recognition in your field</p>
                            <p className="text-sm text-slate-600">Build your professional reputation</p>
                          </div>
                          <Badge variant="outline" className="w-fit">Career Booster</Badge>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <div className="flex items-center">
                            <Award className="h-5 w-5 text-primary mr-2" />
                            <CardTitle>Complete Challenges</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 mb-4">Participate in weekly skill challenges to show off your expertise.</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">View Challenges</Button>
                        </CardFooter>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <div className="flex items-center">
                            <Shield className="h-5 w-5 text-primary mr-2" />
                            <CardTitle>Refer Friends</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 mb-4">Invite friends to join SkillShare and grow the community.</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">Invite Friends</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
