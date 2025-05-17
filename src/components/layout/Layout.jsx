// components/layout/Layout.jsx - Updated with theme toggle
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell, User, Sun, Moon } from 'lucide-react';

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme class to html element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Save preference to localStorage
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  // Initialize theme from localStorage on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to dark theme
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="flex h-screen bg-[hsl(var(--background))]">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden main-content">
        {/* Header */}
        <header className="h-16 glass flex items-center justify-end px-6 border-b border-[hsl(var(--border))]">
          <div className="flex items-center space-x-4">
            <button className="relative p-1.5 rounded-full hover:bg-[hsl(var(--secondary))] transition-colors">
              <Bell className="h-5 w-5 text-[hsl(var(--foreground))]" />
              <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-[hsl(var(--destructive))]"></span>
            </button>
            
            {/* Theme toggle button */}
            <button 
              className="p-1.5 rounded-full hover:bg-[hsl(var(--secondary))] transition-colors"
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-[hsl(var(--foreground))]" />
              ) : (
                <Moon className="h-5 w-5 text-[hsl(var(--foreground))]" />
              )}
            </button>
            
            <button className="p-1.5 rounded-full hover:bg-[hsl(var(--secondary))] transition-colors">
              <User className="h-5 w-5 text-[hsl(var(--foreground))]" />
            </button>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;