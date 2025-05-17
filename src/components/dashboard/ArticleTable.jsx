// components/dashboard/ArticleTable.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { articles as initialArticles } from '../../data/articleData';
import { cn } from '../../lib/utils';

const ArticleTable = ({ searchQuery }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [filteredArticles, setFilteredArticles] = useState(initialArticles);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles based on search query
  useEffect(() => {
    if (!searchQuery || !searchQuery.trim()) {
      setFilteredArticles(articles);
      return;
    }

    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = articles.filter(article => 
      article.title.toLowerCase().includes(lowercasedQuery) || 
      article.keyword.toLowerCase().includes(lowercasedQuery)
    );
    
    setFilteredArticles(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [searchQuery, articles]);

  // Sort articles
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting to filtered articles
  const sortedArticles = React.useMemo(() => {
    let sortableItems = [...filteredArticles];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredArticles, sortConfig]);

  // Select all items
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(sortedArticles.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  // Select a single item
  const handleSelectItem = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  // Get correct sort icon
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' 
        ? <ChevronUp className="ml-1 h-4 w-4" /> 
        : <ChevronDown className="ml-1 h-4 w-4" />;
    }
    return null;
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);

  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="bg-white rounded-md shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="w-8 px-6 py-3 text-left">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 text-blue-600 rounded border-gray-300" 
                  onChange={handleSelectAll}
                  checked={selectedItems.length === currentItems.length && currentItems.length > 0}
                />
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('title')}
              >
                <div className="flex items-center">
                  Article Title
                  {getSortIcon('title')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('keyword')}
              >
                <div className="flex items-center">
                  Keyword [Traffic]
                  {getSortIcon('keyword')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('words')}
              >
                <div className="flex items-center">
                  Words
                  {getSortIcon('words')}
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('created')}
              >
                <div className="flex items-center">
                  Created On
                  {getSortIcon('created')}
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Publish
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    checked={selectedItems.includes(article.id)}
                    onChange={() => handleSelectItem(article.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {article.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article.keyword}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article.words}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article.created}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button className="inline-flex items-center px-3 py-1 border border-blue-600 text-xs text-blue-600 rounded">
                    <Eye className="mr-1 h-3 w-3" /> View
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <button className="text-blue-600">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                    </button>
                    <button className="ml-2">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-700">
          Total {filteredArticles.length} Article Titles | Show
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
        
        <div className="flex items-center space-x-2">
          {totalPages > 1 && (
            <>
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={cn(
                  "p-1 rounded",
                  currentPage === 1 ? "text-gray-300" : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <ChevronDown className="h-5 w-5 rotate-90" />
              </button>
              
              <span className="text-sm text-gray-700">{currentPage} / {totalPages}</span>
              
              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={cn(
                  "p-1 rounded",
                  currentPage === totalPages ? "text-gray-300" : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <ChevronDown className="h-5 w-5 -rotate-90" />
              </button>
            </>
          )}
          
          {totalPages <= 1 && (
            <span className="text-sm text-gray-700">1 / 1</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleTable