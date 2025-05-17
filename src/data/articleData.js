// data/articleData.js
export const articles = [
  { 
    id: 1, 
    title: "How to Improve Your Skills in League of Legends", 
    keyword: "league of legends [2240000]", 
    words: 4575, 
    created: "20 hours ago", 
    status: "view" 
  },
  { 
    id: 2, 
    title: "How to Master Last Hitting in League of Legends", 
    keyword: "league of legends [2240000]", 
    words: 3480, 
    created: "21 hours ago", 
    status: "view" 
  },
  { 
    id: 3, 
    title: "7 Tips for Better Teamplay in League of Legends", 
    keyword: "league of legends [2240000]", 
    words: 2676, 
    created: "a day ago", 
    status: "view" 
  },
  { 
    id: 4, 
    title: "Top Virtual Executive Assistant Services (2024)", 
    keyword: "virtual executive assistant [2900]", 
    words: 2408, 
    created: "1 Oct, 24", 
    status: "view" 
  },
  { 
    id: 5, 
    title: "Unlimited Graphics Design Solutions", 
    keyword: "unlimited graphic design services [390]", 
    words: 1793, 
    created: "—", 
    status: "view" 
  },
  { 
    id: 6, 
    title: "Top Amazon Payment Methods for Quick Access to Funds", 
    keyword: "amazon payment methods [3600]", 
    words: 2647, 
    created: "—", 
    status: "view" 
  },
  { 
    id: 7, 
    title: "Backlinks 101: What are backlinks and why they're important [Free template]", 
    keyword: "backlinks [8100]", 
    words: 2261, 
    created: "—", 
    status: "view" 
  },
  { 
    id: 8, 
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)", 
    keyword: "ai seo software [880]", 
    words: 1543, 
    created: "—", 
    status: "view" 
  },
  { 
    id: 9, 
    title: "Unlimited Graphic Design Services You Can Rely On", 
    keyword: "unlimited graphic design services [390]", 
    words: 1974, 
    created: "—", 
    status: "view" 
  },
];

export const tabs = [
  { id: 'generated', label: 'Generated Articles' },
  { id: 'published', label: 'Published Articles' },
  { id: 'scheduled', label: 'Scheduled Articles' },
  { id: 'archived', label: 'Archived Articles' },
];

// Add this export that Sidebar.jsx is trying to import
export const sidebarItems = [
  {
    id: 'articles',
    label: 'Articles',
    icon: 'FileText',
    path: '/',
    hasChildren: true,
    children: [
      { id: 'create-article', label: 'Create Article', path: '/articles/create' },
      { id: 'generated-articles', label: 'Generated Articles', path: '/' },
      { id: 'keyword-projects', label: 'Keyword Projects', path: '/keyword-projects' },
      { id: 'ai-keyword', label: 'AI Keyword to Article', path: '/ai-keyword' },
      { id: 'steal-competitor', label: 'Steal Competitor Keyword', path: '/steal-competitor' },
      { id: 'import-keyword', label: 'Import Keyword from GSC', path: '/import-keyword' },
      { id: 'manual-keyword', label: 'Manual Keyword to Article', path: '/manual-keyword' },
      { id: 'bulk-keyword', label: 'Bulk Keyword to Article', path: '/bulk-keyword' },
      { id: 'longtail-keyword', label: 'Longtail Keyword to Article', path: '/longtail-keyword' },
      { id: 'article-settings', label: 'Article Settings', path: '/article-settings' },
    ]
  },
  { id: 'auto-blog', label: 'Auto Blog', icon: 'GitBranch', path: '/auto-blog' },
  { id: 'internal-links', label: 'Internal Links', icon: 'Link', path: '/internal-links' },
  { id: 'free-backlinks', label: 'Free Backlinks', icon: 'Link', path: '/free-backlinks' },
  { id: 'integrations', label: 'Integrations', icon: 'Check', path: '/integrations' },
  { id: 'subscription', label: 'Subscription', icon: 'FileText', path: '/subscription' },
  { id: 'affiliate', label: 'Affiliate Program', icon: 'Globe', path: '/affiliate' },
  { id: 'help-center', label: 'Help Center', icon: 'Info', path: '/help' },
  { id: 'updates', label: 'Updates', icon: 'Package', path: '/updates' },
  { id: 'live-chat', label: 'Live Chat Support', icon: 'MessageSquare', path: '/chat' },
  { id: 'profile', label: 'Profile', icon: 'User', path: '/profile' },
  { id: 'settings', label: 'Settings', icon: 'Settings', path: '/settings' },
];