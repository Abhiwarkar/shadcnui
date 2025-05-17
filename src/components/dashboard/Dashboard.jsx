// components/dashboard/Dashboard.jsx - Fixed infinite loop issue
import React, { useState, useEffect, useMemo } from 'react';
import { Search, ArrowUp, ArrowDown, Eye } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('generated');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'words', direction: 'desc' });
  
  // Sample articles data - define this outside the component or use useMemo
  // to prevent it from being recreated on every render
  const articles = useMemo(() => [
    { id: 1, title: "How to Improve Your Skills in League of Legends", keyword: "league of legends [2240000]", words: 4575 },
    { id: 2, title: "How to Master Last Hitting in League of Legends", keyword: "league of legends [2240000]", words: 3480 },
    { id: 3, title: "7 Tips for Better Teamplay in League of Legends", keyword: "league of legends [2240000]", words: 2676 },
    { id: 4, title: "Top Virtual Executive Assistant Services (2024)", keyword: "virtual executive assistant [2900]", words: 2408 },
    { id: 5, title: "Unlimited Graphics Design Solutions", keyword: "unlimited graphic design services [390]", words: 1793 },
  ], []); // Empty dependency array means this will only be created once
  
  const tabs = useMemo(() => [
    { id: 'generated', label: 'Generated Articles' },
    { id: 'published', label: 'Published Articles' },
    { id: 'scheduled', label: 'Scheduled Articles' },
    { id: 'archived', label: 'Archived Articles' },
  ], []); // Empty dependency array means this will only be created once

  // Initialize filtered articles on first render only
  useEffect(() => {
    setFilteredArticles(articles);
    // No dependency on articles to avoid re-running this on every render
  }, []);  

  // Search functionality - only run when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredArticles(articles);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = articles.filter(article => 
        article.title.toLowerCase().includes(lowercasedQuery) || 
        article.keyword.toLowerCase().includes(lowercasedQuery)
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

  // Apply sorting - use useMemo to avoid recalculating this on every render
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

  // Get sort icon - use a regular function, not inside the render path
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' 
        ? <ArrowUp className="ml-1 h-3.5 w-3.5" /> 
        : <ArrowDown className="ml-1 h-3.5 w-3.5" />;
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold mb-1">Articles</h1>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-[hsl(var(--border))]">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Search */}
      <div>
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search for Title & Keywords..."
            className="input pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
        </div>
      </div>
      
      {/* Table */}
      <div className="table-container">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-12 table-header">
                <input type="checkbox" className="checkbox" />
              </th>
              <th 
                className="table-header text-left cursor-pointer"
                onClick={() => requestSort('title')}
              >
                <div className="flex items-center">
                  Article Title
                  {getSortIcon('title')}
                </div>
              </th>
              <th 
                className="table-header text-left cursor-pointer"
                onClick={() => requestSort('keyword')}
              >
                <div className="flex items-center">
                  Keyword [Traffic]
                  {getSortIcon('keyword')}
                </div>
              </th>
              <th 
                className="table-header text-left cursor-pointer"
                onClick={() => requestSort('words')}
              >
                <div className="flex items-center">
                  Words
                  {getSortIcon('words')}
                </div>
              </th>
              <th className="table-header text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedArticles.length > 0 ? (
              sortedArticles.map((article) => (
                <tr key={article.id} className="table-row">
                  <td className="table-cell">
                    <input type="checkbox" className="checkbox" />
                  </td>
                  <td className="table-cell font-medium">{article.title}</td>
                  <td className="table-cell text-[hsl(var(--muted-foreground))]">{article.keyword}</td>
                  <td className="table-cell">{article.words}</td>
                  <td className="table-cell text-right">
                    <button className="btn-outline py-1.5 px-3 text-xs">
                      <span className="flex items-center">
                        <Eye className="h-3.5 w-3.5 mr-1.5" />
                        View
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="table-cell text-center py-8 text-[hsl(var(--muted-foreground))]">
                  No articles found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-[hsl(var(--border))]">
          <div className="text-sm text-[hsl(var(--muted-foreground))]">
            Showing {sortedArticles.length} of {articles.length} articles
          </div>
          <div className="flex items-center space-x-2">
            <button className="btn-outline py-1 px-2 text-sm">Previous</button>
            <button className="btn-primary py-1 px-2 text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;