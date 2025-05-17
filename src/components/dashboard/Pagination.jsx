import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ 
  totalItems, 
  itemsPerPage, 
  setItemsPerPage, 
  currentPage, 
  setCurrentPage 
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  return (
    <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
      <div className="text-sm text-gray-700">
        Total {totalItems} Article Titles | Show
        <select 
          className="mx-2 border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        entries per page
      </div>
      
      {totalPages > 1 && (
        <div className="flex items-center space-x-2">
          <button 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-1 rounded ${currentPage === 1 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <span className="text-sm text-gray-700">{currentPage} / {totalPages}</span>
          
          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-1 rounded ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
      
      {totalPages <= 1 && (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">1 / 1</span>
        </div>
      )}
    </div>
  );
};

export default Pagination;