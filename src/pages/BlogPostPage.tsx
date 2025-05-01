
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, Github, Twitter, Linkedin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

// Define Blog Post interface
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorImage?: string;
  category: string;
  tags?: string[];
  image?: string;
  readingTime: number;
}

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // In a real app, this would be an API call to fetch the specific blog post
    // For this example, we'll simulate fetching data
    
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      // Mock blog post data
      const blogPost: BlogPost = {
        id: Number(id),
        title: "How to Build a React App with TypeScript",
        excerpt: "A comprehensive guide to setting up and developing a React application with TypeScript for type-safe development.",
        content: `
          <h2>Introduction to React with TypeScript</h2>
          <p>React and TypeScript make a powerful combination for building robust web applications. TypeScript adds static type checking to JavaScript, helping catch errors early and improve the development experience.</p>
          
          <h2>Setting Up Your Development Environment</h2>
          <p>To get started with a React TypeScript project, you can use Create React App with the TypeScript template:</p>
          <pre><code>npx create-react-app my-app --template typescript</code></pre>
          
          <h2>Basic TypeScript Concepts for React</h2>
          <p>When working with React and TypeScript, you'll need to understand a few key concepts:</p>
          <ul>
            <li>Type definitions for props</li>
            <li>State typing</li>
            <li>Event handling with proper types</li>
            <li>Working with refs</li>
          </ul>
          
          <h2>Defining Component Props</h2>
          <p>TypeScript allows you to define the shape of your component props:</p>
          <pre><code>
          interface ButtonProps {
            text: string;
            onClick: () => void;
            disabled?: boolean;
          }
          
          const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
            return (
              <button onClick={onClick} disabled={disabled}>
                {text}
              </button>
            );
          };
          </code></pre>
          
          <h2>Managing State with TypeScript</h2>
          <p>TypeScript also helps with state management by ensuring type safety:</p>
          <pre><code>
          interface User {
            id: number;
            name: string;
            email: string;
          }
          
          const UserProfile: React.FC = () => {
            const [user, setUser] = useState<User | null>(null);
            const [loading, setLoading] = useState<boolean>(true);
            
            useEffect(() => {
              // Fetch user data
              // ...
            }, []);
            
            return (
              // JSX for user profile
            );
          };
          </code></pre>
          
          <h2>Conclusion</h2>
          <p>Using TypeScript with React provides numerous benefits, including better code quality, improved developer experience, and fewer runtime errors. While there's a learning curve, the long-term advantages make it worth the investment.</p>
        `,
        date: "May 10, 2023",
        author: "John Doe",
        authorImage: "https://images.unsplash.com/photo-1580518324401-8cueee64da10?q=80&w=400&auto=format&fit=crop",
        category: "Development",
        tags: ["React", "TypeScript", "Web Development", "JavaScript"],
        image: "https://images.unsplash.com/photo-1649972919867-ab246d00abff?q=80&w=2000&auto=format&fit=crop",
        readingTime: 8
      };
      
      setPost(blogPost);
      setLoading(false);
    }, 500); // Simulate network delay
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-muted rounded mb-4"></div>
          <div className="h-4 w-40 bg-muted rounded"></div>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-muted-foreground mb-6">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <>
      {/* Hero Section with Blog Post Header */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link to="/blog" className="inline-flex items-center text-neonBlue hover:text-skyBlue mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            {/* Post Meta */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-neonBlue/10 text-neonBlue rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-sm flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </span>
                <span className="text-muted-foreground text-sm flex items-center">
                  <Clock size={14} className="mr-1" />
                  {post.readingTime} min read
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-2">
                <img 
                  src={post.authorImage || "https://images.unsplash.com/placeholder-avatars/extra-large.jpg"} 
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Image */}
      {post.image && (
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Blog Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Grid for content and sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8 prose prose-headings:font-bold prose-a:text-neonBlue dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  {/* Tags */}
                  <div className="bg-card rounded-lg p-6 border border-border mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Tag size={16} className="mr-2" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Share */}
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="text-lg font-semibold mb-4">Share This Post</h3>
                    <div className="flex gap-4">
                      <a 
                        href="#" 
                        className="p-2 bg-muted-foreground/10 rounded-full hover:bg-neonBlue/20 transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <Twitter size={20} className="text-foreground hover:text-neonBlue" />
                      </a>
                      <a 
                        href="#" 
                        className="p-2 bg-muted-foreground/10 rounded-full hover:bg-neonBlue/20 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin size={20} className="text-foreground hover:text-neonBlue" />
                      </a>
                      <a 
                        href="#" 
                        className="p-2 bg-muted-foreground/10 rounded-full hover:bg-neonBlue/20 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} className="text-foreground hover:text-neonBlue" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-16">
              <Separator className="mb-8" />
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <img 
                    src={post.authorImage || "https://images.unsplash.com/placeholder-avatars/extra-large.jpg"} 
                    alt={post.author}
                    className="w-24 h-24 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
                    <p className="text-muted-foreground mb-4">
                      John is a full-stack developer with over 5 years of experience in web development.
                      He specializes in React, TypeScript, and modern JavaScript frameworks.
                    </p>
                    <div className="flex gap-4">
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neonBlue hover:text-skyBlue"
                      >
                        GitHub
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neonBlue hover:text-skyBlue"
                      >
                        Twitter
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neonBlue hover:text-skyBlue"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts - You would typically fetch these based on category or tags */}
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">You might also like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((relatedId) => (
              <Link 
                key={relatedId} 
                to={`/blog/${relatedId}`}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-neonBlue transition-all duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-neonBlue transition-colors">
                    Related Article Title {relatedId}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">May {relatedId}, 2023</p>
                  <div className="flex items-center text-neonBlue text-sm">
                    <span>Read more</span>
                    <ArrowLeft className="ml-1 h-3 w-3 rotate-180 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
