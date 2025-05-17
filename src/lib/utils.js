// lib/utils.js - Utility functions
// This file contains utility functions used throughout the application

/**
 * Combines multiple class names into a single string
 * This is a simplified version of the classnames package
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format large numbers with commas as thousands separators
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format date to relative time (e.g., "2 hours ago", "5 days ago")
 */
export function formatRelativeTime(dateString) {
  if (!dateString || dateString === '—') return '—';
  
  try {
    // Try to parse the date if it's in a standard format
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInSecs = Math.floor(diffInMs / 1000);
    const diffInMins = Math.floor(diffInSecs / 60);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    
    if (diffInSecs < 60) return 'just now';
    if (diffInMins < 60) return `${diffInMins} minute${diffInMins > 1 ? 's' : ''} ago`;
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    
    // If the date is already in a readable format, return it as is
    return dateString;
  } catch (e) {
    // If parsing fails, return the original string
    return dateString;
  }
}

/**
 * Extract traffic number from keyword string
 * Example: "keyword [1000]" -> 1000
 */
export function extractTrafficNumber(keywordString) {
  const match = keywordString.match(/\[(\d+)\]/);
  return match ? parseInt(match[1], 10) : 0;
}

/**
 * Debounce function to limit how often a function can be called
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}