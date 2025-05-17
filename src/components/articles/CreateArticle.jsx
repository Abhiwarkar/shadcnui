import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    keyword: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate back to dashboard
      navigate('/');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center">
        <button 
          onClick={() => navigate('/')}
          className="mr-4 p-2 rounded-full hover:bg-[hsl(var(--secondary))] transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5 text-[hsl(var(--foreground))]" />
        </button>
        <h1 className="text-2xl font-bold">Create New Article</h1>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-[hsl(var(--foreground))]">
            Article Title
          </label>
          <input 
            type="text"
            id="title"
            name="title"
            className="input w-full"
            placeholder="Enter a compelling title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="keyword" className="block text-sm font-medium text-[hsl(var(--foreground))]">
            Target Keyword
          </label>
          <input 
            type="text"
            id="keyword"
            name="keyword"
            className="input w-full"
            placeholder="Main keyword (e.g., league of legends guide)"
            value={formData.keyword}
            onChange={handleChange}
            required
          />
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            This keyword will be used for SEO optimization and traffic estimates
          </p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium text-[hsl(var(--foreground))]">
            Article Content
          </label>
          <textarea 
            id="content"
            name="content"
            className="input w-full min-h-[300px] resize-y"
            placeholder="Write your article content here..."
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="flex justify-end space-x-3 pt-4">
          <button 
            type="button" 
            className="btn-outline"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="btn-primary relative"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="opacity-0">Create Article</span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              </>
            ) : (
              'Create Article'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;