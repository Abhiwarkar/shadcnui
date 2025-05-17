import React, { useState } from 'react';
import { Save, RefreshCw } from 'lucide-react';

const Settings = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      weekly: true
    },
    apiKey: "ak_71f9d8c372b1a4f7e8b0d42a5c1b9e31",
    articleGeneration: {
      quality: "high",
      tone: "professional",
      length: "medium"
    }
  });

  const handleToggle = (section, setting) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: !prev[section][setting]
      }
    }));
  };

  const handleChange = (section, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [setting]: value
      }
    }));
  };

  const regenerateApiKey = () => {
    // Generate a random API key
    const newKey = 'ak_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setSettings(prev => ({
      ...prev,
      apiKey: newKey
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
        {/* Account Settings */}
        <div>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-[hsl(var(--border))]">Account Settings</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--foreground))]">
                Email Address
              </label>
              <input 
                type="email" 
                id="email"
                className="input w-full" 
                defaultValue="user@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-[hsl(var(--foreground))]">
                Password
              </label>
              <input 
                type="password" 
                id="password"
                className="input w-full" 
                defaultValue="••••••••••••"
              />
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                Last changed 3 months ago
              </p>
            </div>
          </div>
        </div>
        
        {/* Notification Settings */}
        <div>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-[hsl(var(--border))]">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[hsl(var(--foreground))]">Email Notifications</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Receive notifications via email</p>
              </div>
              <button 
                type="button"
                className={`relative inline-flex ${settings.notifications.email ? 'bg-[hsl(var(--primary))]' : 'bg-[hsl(var(--muted))]'} items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
                onClick={() => handleToggle('notifications', 'email')}
              >
                <span
                  className={`${
                    settings.notifications.email ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[hsl(var(--foreground))]">Push Notifications</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Receive notifications in browser</p>
              </div>
              <button 
                type="button"
                className={`relative inline-flex ${settings.notifications.push ? 'bg-[hsl(var(--primary))]' : 'bg-[hsl(var(--muted))]'} items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
                onClick={() => handleToggle('notifications', 'push')}
              >
                <span
                  className={`${
                    settings.notifications.push ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[hsl(var(--foreground))]">Weekly Reports</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Receive weekly performance reports</p>
              </div>
              <button 
                type="button"
                className={`relative inline-flex ${settings.notifications.weekly ? 'bg-[hsl(var(--primary))]' : 'bg-[hsl(var(--muted))]'} items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
                onClick={() => handleToggle('notifications', 'weekly')}
              >
                <span
                  className={`${
                    settings.notifications.weekly ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                />
              </button>
            </div>
          </div>
        </div>
        
        {/* API Settings */}
        <div>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-[hsl(var(--border))]">API Settings</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[hsl(var(--foreground))]">
                API Key
              </label>
              <div className="flex">
                <input 
                  type="text" 
                  className="input rounded-r-none flex-1 bg-[hsl(var(--secondary))]" 
                  value={settings.apiKey}
                  readOnly
                />
                <button 
                  type="button"
                  className="px-4 py-2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-r-md border border-l-0 border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))]/80 transition-colors flex items-center"
                  onClick={regenerateApiKey}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Regenerate
                </button>
              </div>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                Use this API key to authenticate your requests
              </p>
            </div>
          </div>
        </div>
        
        {/* Article Generation Settings */}
        <div>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-[hsl(var(--border))]">Article Generation</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[hsl(var(--foreground))]">
                Content Quality
              </label>
              <select 
                className="input w-full"
                value={settings.articleGeneration.quality}
                onChange={(e) => handleChange('articleGeneration', 'quality', e.target.value)}
              >
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="high">High</option>
                <option value="premium">Premium</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[hsl(var(--foreground))]">
                Content Tone
              </label>
              <select 
                className="input w-full"
                value={settings.articleGeneration.tone}
                onChange={(e) => handleChange('articleGeneration', 'tone', e.target.value)}
              >
                <option value="casual">Casual</option>
                <option value="friendly">Friendly</option>
                <option value="professional">Professional</option>
                <option value="academic">Academic</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[hsl(var(--foreground))]">
                Article Length
              </label>
              <select 
                className="input w-full"
                value={settings.articleGeneration.length}
                onChange={(e) => handleChange('articleGeneration', 'length', e.target.value)}
              >
                <option value="short">Short (500-800 words)</option>
                <option value="medium">Medium (1000-1500 words)</option>
                <option value="long">Long (2000-3000 words)</option>
                <option value="comprehensive">Comprehensive (4000+ words)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Submit button */}
        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className="btn-primary relative flex items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="opacity-0">Save Changes</span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;