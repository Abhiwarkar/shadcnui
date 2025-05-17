// pages/Profile.jsx - Profile Page
import React, { useState } from 'react';
import { User, Mail, Calendar, Save, Upload } from 'lucide-react';

const Profile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Content Manager',
    bio: 'SEO specialist with 5 years of experience in content optimization and keyword research.',
    joined: 'January 15, 2023',
  });

  const handleChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
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
      <h1 className="text-2xl font-bold">Profile</h1>
      
      <div className="max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                {/* Avatar with glow effect */}
                <div className="absolute inset-0 rounded-full bg-[hsl(var(--primary))] blur-md opacity-30"></div>
                <div className="relative h-32 w-32 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-[hsl(var(--primary-foreground))] text-4xl font-bold">
                  {profile.name.charAt(0)}
                </div>
                
                {/* Upload button */}
                <button 
                  type="button"
                  className="absolute bottom-0 right-0 p-2 rounded-full bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]/80 transition-colors"
                >
                  <Upload className="h-4 w-4" />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-[hsl(var(--foreground))]">{profile.name}</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{profile.role}</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1 flex items-center justify-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Joined {profile.joined}
                </p>
              </div>
            </div>
            
            {/* Profile Details */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--foreground))]">
                  Full Name
                </label>
                <div className="relative">
                  <input 
                    type="text"
                    id="name"
                    className="input pl-10 w-full"
                    value={profile.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-[hsl(var(--muted-foreground))]" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--foreground))]">
                  Email Address
                </label>
                <div className="relative">
                  <input 
                    type="email"
                    id="email"
                    className="input pl-10 w-full"
                    value={profile.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-[hsl(var(--muted-foreground))]" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="role" className="block text-sm font-medium text-[hsl(var(--foreground))]">
                  Role
                </label>
                <select 
                  id="role"
                  className="input w-full"
                  value={profile.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                >
                  <option value="Content Writer">Content Writer</option>
                  <option value="Content Manager">Content Manager</option>
                  <option value="SEO Specialist">SEO Specialist</option>
                  <option value="Administrator">Administrator</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="bio" className="block text-sm font-medium text-[hsl(var(--foreground))]">
                  Bio
                </label>
                <textarea 
                  id="bio"
                  className="input w-full min-h-[100px] resize-y"
                  value={profile.bio}
                  onChange={(e) => handleChange('bio', e.target.value)}
                />
                <p className="text-xs text-[hsl(var(--muted-foreground))]">
                  Brief description about yourself and your expertise.
                </p>
              </div>
            </div>
          </div>
          
          {/* API key information */}
          <div className="glass rounded-xl p-6 space-y-4 mt-6">
            <h3 className="text-md font-semibold">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Account Type</p>
                <p className="font-medium">Professional</p>
              </div>
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Subscription</p>
                <p className="font-medium">Active (Renews on Dec 15, 2023)</p>
              </div>
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Usage</p>
                <p className="font-medium">124 / 150 articles generated</p>
              </div>
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Account ID</p>
                <p className="font-medium text-xs font-mono">uid_8e37d92c1b</p>
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
                  <span className="opacity-0">Save Profile</span>
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
                  Save Profile
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;