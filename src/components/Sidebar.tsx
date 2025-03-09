
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, User, ShoppingBag, Home, BookOpen, MessageSquare, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Explore', href: '/explore', icon: Compass },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
];

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Close sidebar on route change for mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Set sidebar to open by default on desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <>
      {/* Sidebar Trigger for Mobile */}
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar-trigger"
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for Mobile */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 transform border-r bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <span className="text-xl font-semibold neon-text">SkillSwap</span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "group flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary dark:bg-primary/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-primary"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                        isActive ? "text-primary" : "text-gray-400 dark:text-gray-500 group-hover:text-primary"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* User */}
          <div className="flex items-center px-4 py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">125 Tokens</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto purple-hover">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
