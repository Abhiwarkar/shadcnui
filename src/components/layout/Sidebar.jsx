import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileText,
  Plus,
  ChevronRight,
  Settings,
  User,
  Book,
  Link2,
  ExternalLink,
  Puzzle,
  CreditCard,
  DollarSign,
  HelpCircle,
  Bell,
  MessageCircle
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Format time as 12-hour
  const timeString = currentTime.toLocaleTimeString([], { 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  });

  // Check if path is active
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="sidebar">
      {/* Logo and brand */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="relative">
              {/* Glow effect on the logo */}
              <div className="absolute inset-0 bg-[hsl(var(--primary))] blur-md opacity-30 rounded-xl"></div>
              <div className="relative h-10 w-10 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center text-[hsl(var(--primary-foreground))] font-bold text-xl">
                a
              </div>
            </div>
            <span className="ml-3 text-[hsl(var(--sidebar-foreground))] text-xl font-bold gradient-text">Apple</span>
          </div>
          <div className="text-xs text-[hsl(var(--sidebar-muted))]">{timeString}</div>
        </div>
      </div>
      
      {/* Workspace selector */}
      <div className="mx-3 mb-5">
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-[hsl(var(--accent))] blur-md opacity-10 rounded-lg"></div>
          <button className="relative w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-background))]/80 backdrop-blur-sm hover:bg-[hsl(var(--sidebar-item-hover))] transition-all">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--accent))] mr-2.5"></div>
              <span className="text-sm font-medium text-[hsl(var(--sidebar-foreground))]">Creatiwise.com</span>
            </div>
            <ChevronRight className="h-4 w-4 text-[hsl(var(--sidebar-muted))]" />
          </button>
        </div>
      </div>
      
      {/* Create New Article button with glow effect */}
      <div className="mx-3 mb-6">
        <Link 
          to="/articles/create"
          className="relative group flex items-center justify-center w-full px-4 py-2.5 rounded-lg overflow-hidden"
        >
          {/* Background and glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] opacity-80 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Content */}
          <div className="relative flex items-center z-10">
            <Plus className="h-4 w-4 mr-2.5 text-[hsl(var(--primary-foreground))]" />
            <span className="text-sm font-medium text-[hsl(var(--primary-foreground))]">Create New Article</span>
          </div>
        </Link>
      </div>
      
      {/* Divider with gradient */}
      <div className="relative h-px mx-4 mb-5">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/50 via-[hsl(var(--accent))]/50 to-transparent"></div>
      </div>
      
      {/* Navigation items */}
      <div className="flex-1 overflow-y-auto px-2">
        <nav className="space-y-1">
          {/* Generated Articles - Single link instead of dropdown */}
          <Link
            to="/"
            className={`sidebar-item ${isActive('/') && !location.pathname.includes('/articles/create') ? 'active' : ''}`}
          >
            <FileText className="h-5 w-5 icon" />
            <span>Generated Articles</span>
          </Link>
          
          {/* Other menu items */}
          <Link to="/auto-blog" className="sidebar-item">
            <Book className="h-5 w-5 icon" />
            <span>Auto Blog</span>
          </Link>
          
          <Link to="/internal-links" className="sidebar-item">
            <Link2 className="h-5 w-5 icon" />
            <span>Internal Links</span>
          </Link>
          
          <Link to="/free-backlinks" className="sidebar-item">
            <ExternalLink className="h-5 w-5 icon" />
            <span>Free Backlinks</span>
          </Link>
          
          <Link to="/integrations" className="sidebar-item">
            <Puzzle className="h-5 w-5 icon" />
            <span>Integrations</span>
          </Link>
          
          <Link to="/subscription" className="sidebar-item">
            <CreditCard className="h-5 w-5 icon" />
            <span>Subscription</span>
          </Link>
          
          <Link to="/affiliate-program" className="sidebar-item">
            <DollarSign className="h-5 w-5 icon" />
            <span>Affiliate Program</span>
          </Link>
          
          <Link to="/help-center" className="sidebar-item">
            <HelpCircle className="h-5 w-5 icon" />
            <span>Help Center</span>
          </Link>
          
          <Link to="/updates" className="sidebar-item">
            <Bell className="h-5 w-5 icon" />
            <span>Updates</span>
          </Link>
          
          <Link to="/live-chat-support" className="sidebar-item">
            <MessageCircle className="h-5 w-5 icon" />
            <span>Live Chat Support</span>
          </Link>
          
          <Link
            to="/settings"
            className={`sidebar-item ${isActive('/settings') ? 'active' : ''}`}
          >
            <Settings className="h-5 w-5 icon" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
      
      {/* Profile section */}
      <div className="mt-auto p-3 border-t border-[hsl(var(--sidebar-border))]">
        <Link to="/profile" className="flex items-center p-2.5 rounded-lg hover:bg-[hsl(var(--sidebar-item-hover))] transition-colors">
          <div className="relative">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-[hsl(var(--primary))] blur-sm opacity-30 rounded-full"></div>
            <div className="relative h-9 w-9 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-[hsl(var(--primary-foreground))] text-lg font-bold">
              A
            </div>
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium text-[hsl(var(--sidebar-foreground))]">Profile</div>
            <div className="text-xs text-[hsl(var(--sidebar-muted))]">v2.4.1</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;