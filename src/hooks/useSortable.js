// hooks/useSortable.js - Custom hook for sortable tables
import { useState, useMemo } from 'react';

export function useSortable(items, config = { key: null, direction: 'asc' }) {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
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
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

// hooks/useFilter.js - Custom hook for filtering data
import { useState, useEffect } from 'react';

export function useFilter(items, initialFilterValue = '') {
  const [filterValue, setFilterValue] = useState(initialFilterValue);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (!filterValue.trim()) {
      setFilteredItems(items);
      return;
    }

    const lowercasedFilter = filterValue.toLowerCase();
    const filtered = items.filter(item => {
      return Object.keys(item).some(key => {
        // Skip filtering on certain object properties if needed
        if (typeof item[key] !== 'string') return false;
        return item[key].toLowerCase().includes(lowercasedFilter);
      });
    });

    setFilteredItems(filtered);
  }, [items, filterValue]);

  return { filteredItems, filterValue, setFilterValue };
};