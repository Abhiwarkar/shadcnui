// lib/constants.js
/**
 * Application-wide constants
 */

// Pagination settings
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
  MAX_VISIBLE_PAGES: 5
};

// Table settings
export const TABLE = {
  DEFAULT_SORT_DIRECTION: 'asc',
  SORT_DIRECTIONS: {
    ASCENDING: 'asc',
    DESCENDING: 'desc'
  }
};

// Article status options
export const ARTICLE_STATUS = {
  GENERATED: 'generated',
  PUBLISHED: 'published',
  SCHEDULED: 'scheduled',
  ARCHIVED: 'archived'
};

// Tab definitions
export const TABS = [
  { id: ARTICLE_STATUS.GENERATED, label: 'Generated Articles' },
  { id: ARTICLE_STATUS.PUBLISHED, label: 'Published Articles' },
  { id: ARTICLE_STATUS.SCHEDULED, label: 'Scheduled Articles' },
  { id: ARTICLE_STATUS.ARCHIVED, label: 'Archived Articles' }
];

// UI Theme settings
export const THEME = {
  PRIMARY_COLOR: 'blue',
  SECONDARY_COLOR: 'gray',
  BORDER_RADIUS: 'md',
  TRANSITION_DURATION: '150ms'
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  API: 'yyyy-MM-dd',
  TIME: 'HH:mm'
};

// Routes
export const ROUTES = {
  DASHBOARD: '/',
  ARTICLES: '/articles',
  CREATE_ARTICLE: '/articles/create',
  EDIT_ARTICLE: '/articles/edit',
  SETTINGS: '/settings',
  PROFILE: '/profile'
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
};

// API endpoints (placeholder for real API integration)
export const API = {
  BASE_URL: '/api',
  ARTICLES: '/articles',
  USERS: '/users',
  KEYWORDS: '/keywords'
};

// Animation durations
export const ANIMATION = {
  FAST: 150,
  MEDIUM: 300,
  SLOW: 500
};

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.'
};

// Success messages
export const SUCCESS_MESSAGES = {
  ARTICLE_CREATED: 'Article created successfully.',
  ARTICLE_UPDATED: 'Article updated successfully.',
  ARTICLE_DELETED: 'Article deleted successfully.',
  SETTINGS_SAVED: 'Settings saved successfully.'
};

export default {
  PAGINATION,
  TABLE,
  ARTICLE_STATUS,
  TABS,
  THEME,
  DATE_FORMATS,
  ROUTES,
  BREAKPOINTS,
  API,
  ANIMATION,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES
};