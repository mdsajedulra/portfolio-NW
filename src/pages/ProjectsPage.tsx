import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';

// Define project interface
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
}

const ProjectsPage = () => {
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart functionality and payment processing.",
      longDescription: "Built a complete e-commerce solution with user authentication, product catalog, shopping cart, and Stripe payment integration. The admin dashboard allows for product and inventory management with sales analytics.",
      image: "https://images.unsplash.com/photo-1649972909742-burtibizabff?q=80&w=2000&auto=format&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "https://github.com/username/ecommerce",
      demo: "https://demo-ecommerce.example.com",
      featured: true,
      category: "web"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for organizing tasks with team collaboration features.",
      longDescription: "Developed a Kanban-style task manager with drag-and-drop functionality, task assignments, due dates, and real-time updates. Includes team workspaces and permission controls.",
      image: "https://images.unsplash.com/photo-1649972913853-cefbfwtuab4dda?q=80&w=2000&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/taskmanager",
      demo: "https://task-app.example.com",
      featured: true,
      category: "web"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather application with forecast predictions and location-based services.",
      longDescription: "Created a weather application that provides current conditions, 7-day forecasts, and historical weather data. Uses geolocation to automatically detect user location with custom map integration.",
      image: "https://images.unsplash.com/photo-1649972914356-afbderp8tyu5?q=80&w=2000&auto=format&fit=crop",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
      github: "https://github.com/username/weather-app",
      demo: "https://weather.example.com",
      featured: false,
      category: "web"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website to showcase projects and skills.",
      longDescription: "Designed and developed a responsive portfolio website with dark/light mode, animations, and a custom project showcase. Includes blog functionality and contact form.",
      image: "https://images.unsplash.com/photo-1649972953468-tv67aq34fda?q=80&w=2000&auto=format&fit=crop",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio.example.com",
      featured: true,
      category: "web"
    },
    {
      id: 5,
      title: "Recipe Finder Mobile App",
      description: "A cross-platform mobile application for discovering recipes based on available ingredients.",
      longDescription: "Built a mobile app that helps users find recipes based on ingredients they have at home. Features include recipe saving, meal planning, and dietary restriction filters.",
      image: "https://images.unsplash.com/photo-1649972945233-afwrpoiur43?q=80&w=2000&auto=format&fit=crop",
      technologies: ["React Native", "Firebase", "Expo", "Recipe API"],
      github: "https://github.com/username/recipe-finder",
      demo: "https://recipe-app.example.com",
      featured: false,
      category: "mobile"
    },
    {
      id: 6,
      title: "Admin Dashboard UI Design",
      description: "Modern and responsive admin interface design with multiple data visualization components.",
      longDescription: "Created a comprehensive admin dashboard UI kit with over 20 component designs, 5 page templates, and various data visualization elements. Includes both dark and light themes.",
      image: "https://images.unsplash.com/photo-1649972934568-af35poir643?q=80&w=2000&auto=format&fit=crop",
      technologies: ["Figma", "Adobe XD", "UI/UX", "Design System"],
      github: "https://github.com/username/admin-ui",
      demo: "https://ui-kit.example.com",
      featured: false,
      category: "design"
    }
  ];
  
  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Filter projects based on category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A collection of my recent work, personal projects, and contributions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'web', 'mobile', 'design', 'other'].map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category 
                  ? "bg-neonBlue hover:bg-neonBlue/90 text-white" 
                  : "border-border hover:border-neonBlue hover:text-neonBlue"
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-card rounded-lg overflow-hidden border border-border group hover:border-neonBlue transition-all duration-300 shadow-sm card-hover"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image || "https://images.unsplash.com/photo-1550000000000-abcdefabcdef?q=80&w=800&auto=format&fit=crop"}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-neonBlue text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  
                  {/* Project Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-neonBlue hover:text-skyBlue transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Repository</span>
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-neonBlue hover:text-skyBlue transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-neonBlue/20 text-neonBlue flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground">
                I begin with understanding project requirements, creating wireframes, and planning the architecture.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-skyBlue/20 text-skyBlue flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground">
                Next, I create high-fidelity designs with a focus on user experience and interface aesthetics.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purpleTint/20 text-purpleTint flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground">
                I implement the designs with clean, maintainable code following best practices and conventions.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-aquaGreen/20 text-aquaGreen flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-muted-foreground">
                Finally, I thoroughly test the application and deploy it with optimized performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collaboration CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Collaborating?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button size="lg" className="btn-primary">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
