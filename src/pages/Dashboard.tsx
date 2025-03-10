
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sidebar } from "@/components/Sidebar";
import { BarChart, LineChart, Activity, Users, BookOpen, Award } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 pt-6 pl-[calc(16rem+2rem)] transition-all duration-300 sm:pl-8">
        <div className="flex flex-col space-y-8 pb-16">
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
            <p className="text-muted-foreground font-medium">
              Welcome back! Here's an overview of your skill exchange activities.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Cards with improved contrast and animations */}
            <Card className="subtle-card-border hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Total Tokens</CardTitle>
                <Award className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">125</div>
                <p className="text-xs text-muted-foreground font-medium">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            <Card className="subtle-card-border hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Skills Learned</CardTitle>
                <BookOpen className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">8</div>
                <p className="text-xs text-muted-foreground font-medium">
                  +2 new this month
                </p>
              </CardContent>
            </Card>
            <Card className="subtle-card-border hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Skills Shared</CardTitle>
                <Users className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">12</div>
                <p className="text-xs text-muted-foreground font-medium">
                  +3 new this month
                </p>
              </CardContent>
            </Card>
            <Card className="subtle-card-border hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">Active Exchanges</CardTitle>
                <Activity className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">3</div>
                <p className="text-xs text-muted-foreground font-medium">
                  2 sessions this week
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-card text-card-foreground">
              <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Overview</TabsTrigger>
              <TabsTrigger value="sessions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Sessions</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 subtle-card-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">Token Activity</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Your token earnings and usage over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[240px] flex items-center justify-center text-muted-foreground">
                      <LineChart className="h-16 w-16 text-purple-500/30" />
                      <span className="ml-2 font-medium">Chart visualization would appear here</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3 subtle-card-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">Skills Distribution</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Breakdown of skills learned and shared
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[240px] flex items-center justify-center text-muted-foreground">
                      <BarChart className="h-16 w-16 text-purple-500/30" />
                      <span className="ml-2 font-medium">Chart visualization would appear here</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="sessions" className="space-y-4">
              <Card className="subtle-card-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Upcoming Sessions</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Your scheduled skill exchange sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">You have no upcoming sessions scheduled.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card className="subtle-card-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Performance Analytics</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Detailed metrics about your skill exchanges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">Analytics data would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
