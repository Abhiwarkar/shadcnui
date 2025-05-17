// components/dashboard/TableFilters.jsx
import React from 'react';
import { Search } from 'lucide-react';

const TableFilters = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mt-6 flex flex-col sm:flex-row justify-between">
      <div className="relative w-full sm:w-auto mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Search for Title & Keywords..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export default TableFilters;