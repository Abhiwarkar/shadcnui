// components/dashboard/ArticleTabs.jsx
import React from 'react';

// Make sure to use the cn utility if available, or provide it if not
const cn = (...classes) => classes.filter(Boolean).join(' ');

const ArticleTabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="border-b border-gray-200 overflow-x-auto">
      <div className="flex space-x-8 whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "pb-3 relative",
              activeTab === tab.id 
                ? "text-blue-600 border-b-2 border-blue-600 font-medium" 
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};


export default ArticleTabs;