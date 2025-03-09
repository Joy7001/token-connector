
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sidebar } from '@/components/Sidebar';
import { TokenDisplay } from '@/components/TokenDisplay';
import { ArrowUp, ArrowDown, Clock, Zap, Gift, Award, Shield, BookOpen } from 'lucide-react';
import { transactionsData } from '@/data/transactionsData';

const Marketplace = () => {
  // Token packs available for purchase
  const tokenPacks = [
    { id: 1, name: "Basic Pack", tokens: 50, price: "$9.99", popular: false },
    { id: 2, name: "Premium Pack", tokens: 150, price: "$24.99", popular: true },
    { id: 3, name: "Pro Pack", tokens: 500, price: "$79.99", popular: false },
  ];
  
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 pt-16 sm:pt-0 sm:pl-64 transition-all duration-300">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-2">Token Marketplace</h1>
          <p className="text-slate-600 mb-8">Buy and earn tokens to learn new skills</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar with token info */}
            <div className="space-y-6">
              {/* Current balance */}
              <TokenDisplay balance={125} transactions={transactionsData} />
              
              {/* How tokens work */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How Tokens Work</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1">
                      <ArrowUp className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Earn Tokens</h4>
                      <p className="text-sm text-slate-600">Share your skills with others and earn tokens when they learn from you.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Spend Tokens</h4>
                      <p className="text-sm text-slate-600">Use your tokens to learn skills from other users on the platform.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full text-purple-600 mt-1">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium">Buy Tokens</h4>
                      <p className="text-sm text-slate-600">Purchase token packs directly if you want to learn more skills quickly.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content with tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="buy">
                <TabsList className="w-full mb-6">
                  <TabsTrigger value="buy" className="flex-1">Buy Tokens</TabsTrigger>
                  <TabsTrigger value="earn" className="flex-1">Earn Tokens</TabsTrigger>
                </TabsList>
                
                <TabsContent value="buy" className="space-y-6">
                  <h3 className="text-xl font-semibold">Purchase Token Packs</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {tokenPacks.map((pack) => (
                      <Card key={pack.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-md ${pack.popular ? 'border-primary' : ''}`}>
                        {pack.popular && (
                          <div className="absolute top-0 right-0">
                            <Badge className="rounded-tl-none rounded-br-none bg-primary">Popular</Badge>
                          </div>
                        )}
                        <CardHeader className="pb-2">
                          <CardTitle>{pack.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-end mb-4">
                            <span className="text-3xl font-bold">{pack.tokens}</span>
                            <span className="text-slate-500 ml-2 mb-1">tokens</span>
                          </div>
                          <p className="text-2xl font-semibold text-slate-800">{pack.price}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Buy Now</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  
                  <Card className="bg-slate-50 border-dashed">
                    <CardContent className="flex flex-col sm:flex-row items-center justify-between p-6">
                      <div className="flex items-center mb-4 sm:mb-0">
                        <Gift className="h-10 w-10 text-primary mr-4" />
                        <div>
                          <h3 className="font-semibold text-lg">Gift Tokens</h3>
                          <p className="text-slate-600">Send tokens as a gift to friends or colleagues</p>
                        </div>
                      </div>
                      <Button variant="outline">Send Gift</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="earn" className="space-y-6">
                  <h3 className="text-xl font-semibold">Ways to Earn Tokens</h3>
                  
                  <div className="space-y-6">
                    <Card className="overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 flex items-center">
                        <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-5">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl">Teach a Skill</h3>
                          <p className="text-slate-600">Create and share your expertise with others</p>
                        </div>
                        <Button className="ml-auto">Create Skill</Button>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-50 p-4 rounded-lg mb-4">
                          <div className="mb-2 sm:mb-0">
                            <p className="font-medium">Each time someone learns from you</p>
                            <p className="text-sm text-slate-600">Earn tokens when users access your skill</p>
                          </div>
                          <Badge variant="outline" className="token-badge w-fit">+5-15 Tokens</Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-50 p-4 rounded-lg">
                          <div className="mb-2 sm:mb-0">
                            <p className="font-medium">High-rated skills bonus</p>
                            <p className="text-sm text-slate-600">Extra tokens for 4.5+ star rated skills</p>
                          </div>
                          <Badge variant="outline" className="token-badge w-fit">+10 Tokens/month</Badge>
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
                          <p className="text-slate-600 mb-4">Participate in weekly skill challenges and earn tokens.</p>
                          <Badge variant="outline" className="token-badge">+20-50 Tokens</Badge>
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
                          <p className="text-slate-600 mb-4">Invite friends to join SkillSwap and earn tokens.</p>
                          <Badge variant="outline" className="token-badge">+15 Tokens per friend</Badge>
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
