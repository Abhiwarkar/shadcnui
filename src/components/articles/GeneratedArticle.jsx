// components/articles/GeneratedArticles.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Search, ArrowUp, ArrowDown, Eye } from 'lucide-react';

const GeneratedArticles = () => {
  const [activeTab, setActiveTab] = useState('generated');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'words', direction: 'desc' });
  const [selectedArticles, setSelectedArticles] = useState([]);
  
  // Expanded sample articles data with more entries
  const articles = useMemo(() => [
    { id: 1, title: "How to Improve Your Skills in League of Legends", keyword: "league of legends", traffic: 2240000, words: 4575 },
    { id: 2, title: "How to Master Last Hitting in League of Legends", keyword: "league of legends", traffic: 2240000, words: 3480 },
    { id: 3, title: "7 Tips for Better Teamplay in League of Legends", keyword: "league of legends", traffic: 2240000, words: 2676 },
    { id: 4, title: "Top Virtual Executive Assistant Services (2024)", keyword: "virtual executive assistant", traffic: 2900, words: 2408 },
    { id: 5, title: "Unlimited Graphics Design Solutions", keyword: "unlimited graphic design services", traffic: 390, words: 1793 },
    { id: 6, title: "Best Gaming Keyboards for FPS Games", keyword: "best gaming keyboards", traffic: 18000, words: 3200 },
    { id: 7, title: "How to Build a Custom PC in 2024", keyword: "custom pc build guide", traffic: 74000, words: 5120 },
    { id: 8, title: "Beginners Guide to Content Marketing", keyword: "content marketing beginners", traffic: 12000, words: 2850 },
    { id: 9, title: "Top 10 SEO Strategies for Small Businesses", keyword: "seo for small business", traffic: 33000, words: 3750 },
    { id: 10, title: "The Complete Guide to YouTube Growth", keyword: "youtube growth strategy", traffic: 8900, words: 4200 },
    { id: 11, title: "Mastering React Hooks for Frontend Development", keyword: "react hooks tutorial", traffic: 5400, words: 3320 },
    { id: 12, title: "Advanced JavaScript Techniques for Web Developers", keyword: "advanced javascript", traffic: 9200, words: 4860 }
  ], []);
  
  const tabs = useMemo(() => [
    { id: 'generated', label: 'Generated Articles' },
    { id: 'published', label: 'Published Articles' },
    { id: 'scheduled', label: 'Scheduled Articles' },
    { id: 'archived', label: 'Archived Articles' },
  ], []);

  // Initialize filtered articles with all articles on first render
  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);  

  // Improved search functionality that works with both title and keyword
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredArticles(articles);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = articles.filter(article => 
        article.title.toLowerCase().includes(lowercasedQuery) || 
        article.keyword.toLowerCase().includes(lowercasedQuery) ||
        article.traffic.toString().includes(lowercasedQuery)
      );
      setFilteredArticles(filtered);
    }
  }, [searchQuery, articles]);

  // Sorting functionality
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Apply sorting to filtered articles
  const sortedArticles = useMemo(() => {
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

  // Get sort icon for columns
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' 
        ? <ArrowUp className="ml-1 h-3.5 w-3.5" /> 
        : <ArrowDown className="ml-1 h-3.5 w-3.5" />;
    }
    return null;
  };
  
  // Toggle all articles selection
  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      // If checked, select all visible filtered articles
      const allArticleIds = sortedArticles.map(article => article.id);
      setSelectedArticles(allArticleIds);
    } else {
      // If unchecked, clear selection
      setSelectedArticles([]);
    }
  };
  
  // Toggle individual article selection
  const toggleSelectArticle = (articleId) => {
    setSelectedArticles(prev => {
      if (prev.includes(articleId)) {
        return prev.filter(id => id !== articleId);
      } else {
        return [...prev, articleId];
      }
    });
  };
  
  // Check if all filtered articles are selected
  const areAllSelected = sortedArticles.length > 0 && 
    sortedArticles.every(article => selectedArticles.includes(article.id));

  return (
    <div className="min-h-screen bg-[#0F111A] text-white p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">Articles</h1>
      
      {/* Tabs */}
      <div className="flex justify-center space-x-8 border-b border-gray-800 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === tab.id ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Search */}
      <div className="mt-6 mb-6 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for Title & Keywords..."
            className="w-full bg-[#1A1D2A] border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        </div>
      </div>
      
      {/* Table */}
      <div className="mt-4 bg-[#1A1D2A] rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-[#1F2334] py-4 px-6">
          <div className="col-span-1">
            <input 
              type="checkbox" 
              className="h-5 w-5 rounded bg-gray-700 border-gray-600" 
              checked={areAllSelected}
              onChange={toggleSelectAll}
            />
          </div>
          <div 
            className="col-span-5 font-medium flex items-center cursor-pointer"
            onClick={() => requestSort('title')}
          >
            Article Title {getSortIcon('title')}
          </div>
          <div 
            className="col-span-3 font-medium flex items-center cursor-pointer"
            onClick={() => requestSort('keyword')}
          >
            Keyword [Traffic] {getSortIcon('keyword')}
          </div>
          <div 
            className="col-span-2 font-medium flex items-center cursor-pointer"
            onClick={() => requestSort('words')}
          >
            Words {getSortIcon('words')}
          </div>
          <div className="col-span-1 font-medium text-right">Action</div>
        </div>
        
        {/* Table Body */}
        {sortedArticles.length > 0 ? (
          sortedArticles.map((article) => (
            <div key={article.id} className="grid grid-cols-12 border-t border-gray-800 py-4 px-6 items-center hover:bg-[#232738]">
              <div className="col-span-1">
                <input 
                  type="checkbox" 
                  className="h-5 w-5 rounded bg-gray-700 border-gray-600" 
                  checked={selectedArticles.includes(article.id)}
                  onChange={() => toggleSelectArticle(article.id)}
                />
              </div>
              <div className="col-span-5 font-medium text-white">{article.title}</div>
              <div className="col-span-3 text-gray-400">
                {article.keyword} [{article.traffic}]
              </div>
              <div className="col-span-2 text-white">{article.words}</div>
              <div className="col-span-1 text-right">
                <button className="text-gray-400 hover:text-white flex items-center justify-end w-full">
                  <Eye className="h-5 w-5 mr-1" /> View
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-gray-400">
            No articles found matching your search.
          </div>
        )}
      </div>
      
      {/* Pagination - simple version */}
      <div className="mt-4 flex justify-between items-center text-gray-400 px-2">
        <div>Showing {sortedArticles.length} of {articles.length} articles</div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-700 rounded hover:bg-gray-800">Previous</button>
          <button className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">Next</button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedArticles;