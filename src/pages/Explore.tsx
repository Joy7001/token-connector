
import { useState } from 'react';
import { Search, Filter, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SkillCard } from '@/components/SkillCard';
import { Sidebar } from '@/components/Sidebar';
import { skillsData } from '@/data/skillsData';

const categories = ["Programming", "Design", "Marketing", "Business", "Music", "Photography", "Cooking"];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Filter skills based on search query and selected categories
  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch = searchQuery === "" || 
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(skill.category);
      
    return matchesSearch && matchesCategory;
  });
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };
  
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 pt-16 sm:pt-0 sm:pl-64 transition-all duration-300">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-2">Explore Skills</h1>
          <p className="text-slate-600 mb-8">Discover skills from experts around the world</p>
          
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search for skills..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={clearFilters}
                  disabled={searchQuery === "" && selectedCategories.length === 0}
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  {(searchQuery !== "" || selectedCategories.length > 0) && (
                    <Badge className="ml-1 bg-primary text-white">
                      {searchQuery !== "" && selectedCategories.length > 0 
                        ? (1 + selectedCategories.length) 
                        : (searchQuery !== "" ? 1 : selectedCategories.length)}
                    </Badge>
                  )}
                </Button>
                
                {(searchQuery !== "" || selectedCategories.length > 0) && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={clearFilters}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <XCircle className="h-4 w-4 mr-1" />
                    Clear all
                  </Button>
                )}
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedCategories.includes(category) 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : "hover:bg-primary/10"
                  }`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Results */}
          {filteredSkills.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl font-medium text-slate-700 mb-2">No skills found</p>
              <p className="text-slate-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <>
              <p className="text-slate-600 mb-6">{filteredSkills.length} skills found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
