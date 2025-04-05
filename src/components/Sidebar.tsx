
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, User, ShoppingBag, Home, MessageSquare, LayoutDashboard, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeToggle } from './ThemeToggle';
import { NavTitle } from './NavTitle';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Explore', href: '/explore', icon: Compass },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  { name: 'Chat', href: '/chat', icon: MessageSquare },
];

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Calculate sidebar width for smooth animations
  const sidebarWidth = "16rem"; // 64px or 16rem

  return (
    <>
      {/* Mobile menu trigger */}
      {isMobile && (
        <button 
          type="button"
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-slate-900 shadow-md backdrop-blur-md transition-all hover:bg-purple-50 dark:hover:bg-purple-900/30"
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Fixed header with brand logo and theme toggle */}
      <div className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between px-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center">
          <NavTitle />
        </div>
        <div className="flex items-center">
          {/* Brand logo in top right corner */}
          <div className="flex items-center mr-4">
            <div className="flex items-center justify-center h-10 w-10 bg-white dark:bg-slate-900 rounded-full shadow-md brand-glow">
              <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar container - Fixed position prevents selection flicker */}
      <div
        className={cn(
          "fixed top-16 left-0 z-40 h-[calc(100%-4rem)] border-r bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-all duration-300 ease-in-out",
          isMobile 
            ? (isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full")
            : (isOpen ? "translate-x-0 shadow-xl" : "-translate-x-[calc(100%-3rem)]"),
          className
        )}
        style={{ width: sidebarWidth }}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar content - Fixed height prevents content flicker */}
          <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
            <nav className={cn("space-y-1", !isOpen && !isMobile && "opacity-0")}>
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "group flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-primary/10 text-primary dark:bg-primary/20 neon-border"
                        : "text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-primary"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "mr-3 h-5 w-5 flex-shrink-0 transition-all duration-300",
                        isActive ? "text-primary scale-110" : "text-gray-400 dark:text-gray-500 group-hover:text-primary group-hover:scale-110"
                      )}
                      aria-hidden="true"
                    />
                    <span className={cn(isOpen ? "opacity-100" : "opacity-0", "transition-opacity duration-300")}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar footer */}
          <div className={cn(
            "flex items-center px-4 py-4 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}>
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center brand-glow">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Active Now</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto purple-hover">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Toggle button in the middle of the sidebar edge - Fixed absolute center positioning */}
      <div 
        className={cn(
          "fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300",
          isMobile ? "hidden" : "",
          isOpen ? `translate-x-[${sidebarWidth}]` : "translate-x-0"
        )}
        style={{ left: isOpen ? sidebarWidth : "0" }}
      >
        <button
          type="button"
          onClick={toggleSidebar}
          className="flex h-8 w-8 items-center justify-center rounded-r-md bg-purple-100 dark:bg-purple-900/50 text-primary hover:bg-purple-200 dark:hover:bg-purple-800/60 transition-colors duration-300 shadow-md"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>
    </>
  );
};
