
import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { FeaturedSkills } from '@/components/FeaturedSkills';
import { UserProfile } from '@/components/UserProfile';
import { Sidebar } from '@/components/Sidebar';
import { usersData } from '@/data/usersData';

const Index = () => {
  // Featured instructors - get top 3
  const featuredInstructors = usersData.filter(user => user.topInstructor).slice(0, 3);
  
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
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Skills */}
        <FeaturedSkills />
        
        {/* Featured Instructors Section */}
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={container}
            className="space-y-8"
          >
            {/* Featured Instructors */}
            <motion.div variants={item}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Featured Instructors</h2>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View all instructors
                </motion.button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {featuredInstructors.map((user) => (
                  <UserProfile key={user.id} user={user} detailed={true} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
