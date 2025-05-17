// App.jsx - Updated with proper routing and components
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GeneratedArticle from './components/articles/GeneratedArticle';
import CreateArticle from './components/articles/CreateArticle';
import Settings from './components/settings/Settings';
import Profile from './components/profile/Profile';

// 404 page component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
    <h1 className="text-6xl font-bold text-[hsl(var(--primary))]">404</h1>
    <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
    <p className="text-[hsl(var(--muted-foreground))] max-w-md mx-auto">
      The page you're looking for doesn't exist or has been moved.
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Generated Articles as home page */}
          <Route index element={<GeneratedArticle />} />
          
          {/* Article routes */}
          <Route path="articles/create" element={<CreateArticle />} />
          
          {/* Simplified routes */}
          <Route path="auto-blog" element={<NotFound />} />
          <Route path="internal-links" element={<NotFound />} />
          <Route path="free-backlinks" element={<NotFound />} />
          <Route path="integrations" element={<NotFound />} />
          <Route path="subscription" element={<NotFound />} />
          <Route path="affiliate-program" element={<NotFound />} />
          <Route path="help-center" element={<NotFound />} />
          <Route path="updates" element={<NotFound />} />
          <Route path="live-chat-support" element={<NotFound />} />
          
          {/* Settings page */}
          <Route path="settings" element={<Settings />} />
          
          {/* Profile page */}
          <Route path="profile" element={<Profile />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;