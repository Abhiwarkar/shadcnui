// components/layout/Header.jsx
import React from 'react';
import { Bell, User, Menu } from 'lucide-react';

const Header = ({ pageTitle, onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        {/* Mobile menu button */}
        <button 
          className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <h1 className="text-2xl font-bold ml-2 lg:ml-0">{pageTitle}</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-1.5 rounded-full hover:bg-gray-100 relative">
          <Bell className="h-5 w-5 text-gray-500" />
          {/* Notification badge */}
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="p-1.5 rounded-full hover:bg-gray-100">
          <User className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;