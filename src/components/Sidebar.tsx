
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, User, ShoppingBag, Home, MessageSquare, LayoutDashboard, ChevronLeft, ChevronRight } from 'lucide-react';
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
    }
  }, [location.pathname, isMobile]);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <button 
          type="button"
          onClick={toggleSidebar}
          className="sidebar-trigger"
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full transform border-r bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0 shadow-xl" : (isMobile ? "-translate-x-full" : "-translate-x-[calc(100%-40px)]"),
          !isMobile && "w-64",
          className
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800">
            <div className={cn("transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")}>
              <NavTitle />
            </div>
            <div className="flex items-center">
              <ThemeToggle />
              <button
                type="button"
                onClick={toggleSidebar}
                className={cn(
                  "ml-2 flex h-8 w-8 items-center justify-center rounded-md bg-purple-50 dark:bg-purple-900/30 text-primary hover:bg-purple-100 dark:hover:bg-purple-800/40 transition-colors duration-300",
                  isMobile && "hidden"
                )}
                aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
              >
                {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            </div>
          </div>

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
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className={cn(
            "flex items-center px-4 py-4 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm",
            !isOpen && !isMobile && "opacity-0"
          )}>
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center brand-glow">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">125 Tokens</p>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto purple-hover">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {!isMobile && !isOpen && (
        <div className="fixed top-4 left-2 z-[60] transition-all duration-300">
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-100 dark:bg-purple-900/50 text-primary hover:bg-purple-200 dark:hover:bg-purple-800/60 transition-colors duration-300 shadow-md"
            aria-label="Expand sidebar"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </>
  );
};
