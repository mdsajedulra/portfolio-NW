import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const HomePage = () => {
  // Set up animation on scroll effect with proper cleanup
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;
        
        if (isInViewport) {
          el.classList.add('animated');
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">John Doe</span>
                <br />
                <span className="text-3xl md:text-5xl">Full-Stack Developer</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                I build modern, responsive web applications with clean code and cutting-edge technologies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button className="btn-primary group custom-cta-button">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="btn-secondary custom-cta-button">
                    Contact Me
                  </Button>
                </Link>
              </div>
              
              <div className="pt-8 hidden md:block">
                <a 
                  href="#featured-projects" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-neonBlue transition-colors"
                >
                  <span>Scroll Down</span>
                  <ArrowDown className="h-4 w-4 animate-bounce" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-neonBlue/20 blur-[120px]"></div>
              <div className="relative z-10 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-neonBlue/50 p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1580518324401-8cueee64da10?q=80&w=2000&auto=format&fit=crop" 
                    alt="Portfolio Owner" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section id="featured-projects" className="bg-background dark:bg-darkBlue py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent work that showcases my skills and passion for development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div 
                key={project} 
                className="bg-card rounded-lg overflow-hidden border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-neonBlue/20 animate-on-scroll project-card"
                style={{ transitionDelay: `${project * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1550000000000 + project}?q=80&w=800&auto=format&fit=crop`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover transform transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the technologies used to create it.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-muted text-xs rounded-md">React</span>
                    <span className="px-2 py-1 bg-muted text-xs rounded-md">TypeScript</span>
                    <span className="px-2 py-1 bg-muted text-xs rounded-md">Tailwind CSS</span>
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neonBlue hover:text-skyBlue transition-colors text-sm"
                    >
                      GitHub Repository
                    </a>
                    <a 
                      href="#" 
                      className="text-neonBlue hover:text-skyBlue transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" className="btn-secondary">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Overview */}
      <section className="bg-muted/30 dark:bg-muted/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the technologies and tools I specialize in.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'AWS'].map((skill, index) => (
              <div 
                key={skill}
                className="bg-card rounded-lg p-4 text-center border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-neonBlue animate-on-scroll"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="bg-muted/50 dark:bg-muted w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                  {/* Icon would go here */}
                </div>
                <h3 className="text-sm font-medium">{skill}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/skills">
              <Button variant="outline" className="btn-secondary">
                All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neonBlue/10 to-skyBlue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently available for freelance work and collaborations. 
              If you have a project in mind, I'd love to hear about it!
            </p>
            <Link to="/contact">
              <Button className="btn-primary">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="bg-background dark:bg-darkBlue py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read my thoughts on development, design, and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((blog) => (
              <Link 
                to={`/blog/${blog}`} 
                key={blog}
                className="bg-card rounded-lg overflow-hidden border border-border shadow-md transition-all duration-300 hover:shadow-neonBlue/20 animate-on-scroll blog-card"
                style={{ transitionDelay: `${blog * 100}ms` }}
              >
                <div className="p-6">
                  <div className="text-xs text-muted-foreground mb-2">May {blog}, 2023</div>
                  <h3 className="text-xl font-semibold mb-2">How to Build a React App with TypeScript</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    Learn how to set up and develop a React application with TypeScript for type-safe development. 
                    This comprehensive guide covers everything from initial setup to advanced patterns.
                  </p>
                  <div className="flex items-center text-neonBlue">
                    <span>Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" className="btn-secondary">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
