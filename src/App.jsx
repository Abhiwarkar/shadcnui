// App.jsx - Updated with proper routing and components
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
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
          {/* Dashboard as home page */}
          <Route index element={<Dashboard />} />
          
          {/* Article routes */}
          <Route path="articles/create" element={<CreateArticle />} />
          
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