
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from 'lucide-react';

// Define Blog Post interface
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  readingTime: number;
}

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React and Redux Toolkit",
      excerpt: "Learn how to efficiently manage state in React apps using Redux Toolkit with modern best practices.",
      content: "Full content of the blog post...",
      date: "May 5, 2025",
      author: "Md Sajedul Islam",
      category: "Development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      readingTime: 6
    },
    {
      id: 2,
      title: "Form Handling in React with React Hook Form",
      excerpt: "Discover how React Hook Form simplifies form validation and management in React applications.",
      content: "Full content of the blog post...",
      date: "April 28, 2025",
      author: "Md Sajedul Islam",
      category: "Frontend",
      image: "https://react-hook-form.com/images/logo.png",
      readingTime: 5
    },
    {
      id: 3,
      title: "Build a REST API with Node.js, Express, and MongoDB",
      excerpt: "Step-by-step tutorial to create a full-featured REST API using Express and MongoDB.",
      content: "Full content of the blog post...",
      date: "March 20, 2025",
      author: "Md Sajedul Islam",
      category: "Backend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      readingTime: 7
    },
    {
      id: 4,
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt: "Understand the basics of TypeScript and how it enhances your JavaScript coding experience.",
      content: "Full content of the blog post...",
      date: "February 10, 2025",
      author: "Md Sajedul Islam",
      category: "Development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      readingTime: 4
    },
    {
      id: 5,
      title: "Create Beautiful Websites Fast with Tailwind CSS",
      excerpt: "Explore how Tailwind CSS makes frontend styling more flexible and faster to implement.",
      content: "Full content of the blog post...",
      date: "January 30, 2025",
      author: "Md Sajedul Islam",
      category: "Design",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      readingTime: 3
    },
    {
      id: 6,
      title: "WordPress Customization: Tips for Developers",
      excerpt: "Learn how to customize WordPress themes and plugins to build powerful and unique websites.",
      content: "Full content of the blog post...",
      date: "January 12, 2025",
      author: "Md Sajedul Islam",
      category: "WordPress",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      readingTime: 6
    }
  ];
  
  
  
  // State for search and category filter
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter blog posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, insights, and tips on web development, design, and technology.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search & Filter Section */}
      <section className="py-8 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={categoryFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoryFilter(category)}
                  className={categoryFilter === category 
                    ? "bg-neonBlue hover:bg-neonBlue/90" 
                    : "border-border hover:border-neonBlue"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('All');
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-neonBlue transition-all duration-300 shadow-sm group card-hover"
                >
                  {/* Post Image */}
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  
                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs px-2 py-1 bg-neonBlue/10 text-neonBlue rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readingTime} min read
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-neonBlue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                      <div className="flex items-center text-neonBlue">
                        <span className="text-sm">Read more</span>
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-neonBlue/10 to-skyBlue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to My Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get notified when I publish new articles and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow"
              />
              <Button className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              I respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
