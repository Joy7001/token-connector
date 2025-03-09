
import { Hero } from '@/components/Hero';
import { FeaturedSkills } from '@/components/FeaturedSkills';
import { UserProfile } from '@/components/UserProfile';
import { Sidebar } from '@/components/Sidebar';
import { TokenDisplay } from '@/components/TokenDisplay';
import { usersData } from '@/data/usersData';
import { transactionsData } from '@/data/transactionsData';

const Index = () => {
  // Featured instructors - get top 3
  const featuredInstructors = usersData.filter(user => user.topInstructor).slice(0, 3);
  
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 pt-16 sm:pt-0 sm:pl-64 transition-all duration-300">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Skills */}
        <FeaturedSkills />
        
        {/* Featured Instructors & Tokens Section */}
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Token Display */}
            <TokenDisplay 
              balance={125}
              transactions={transactionsData}
              className="md:col-span-1"
            />
            
            {/* Featured Instructors */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Featured Instructors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {featuredInstructors.map((user) => (
                  <UserProfile key={user.id} user={user} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
