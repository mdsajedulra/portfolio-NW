import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
  category: "web" | "mobile" | "design" | "other" | "Backend";
}

const Projects = () => {
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Book Shop App",
      description:
        "A full-stack web application for browsing, purchasing, and managing books with secure login and payment",
      technologies: [
        "React",
        "Redux",
   
        "Node.js",
        "Express",

        "Mongoose",
      ],
      image: "https://i.ibb.co.com/2Ymgy97L/Screenshot-2025-05-01-113957.png",
      github: "https://github.com/mdsajedulra/Book-shop-frontend",
      demo: "https://tutor-client-amber.vercel.app/",
      category: "web",
      featured: true,
      longDescription: `
        <h2>Project Overview</h2>
<p><strong>Book Shop</strong> is a full-stack e-commerce application that allows users to browse, search, and purchase books online. It includes role-based access, secure payments, and admin product management features.</p>

<h3>Key Features</h3>
<ul>
<li>User authentication with secure login/register</li>
<li>Role-based access (Admin/User)</li>
<li>Add to cart, checkout, and order history</li>
<li>Payment integration using SurjoPay</li>
<li>Admin panel for managing books, orders, and users</li>
</ul>

<h3>Technologies Used</h3>
<ul>
<li>Frontend: React, Redux Toolkit, Tailwind CSS</li>
<li>Backend: Node.js, Express</li>
<li>Database: MongoDB with Mongoose</li>
<li>Payment: SurjoPay</li>
</ul>

        
        `,
    },
    {
      id: 2,
      title: "Tutor Booking System",
      description:
        "A platform where students can book tutors, view booking status, and make payments if accepted.",
      longDescription: `
       

   
<p><strong>Tutor Link</strong> is an online tutor booking platform where students can easily find qualified tutors based on subject, location, and availability. It ensures secure communication and seamless scheduling between students and tutors.</p>

<h3>Key Features</h3>
<ul>
<li>Student registration and tutor profile creation</li>
<li>Booking system with status tracking (pending, accepted, rejected)</li>
<li>Real-time messaging between student and tutor</li>
<li>Payment gateway integration for accepted bookings</li>
<li>Admin dashboard for user and booking management</li>
</ul>



       
       
       
       `,
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      image: "https://i.ibb.co.com/W4v0qyrR/Screenshot-2025-05-01-162407.png",
      github: "https://github.com/mdsajedulra/tutor_client",
      demo: "https://book-shop-client-ashy.vercel.app/",
      category: "web",
      featured: true,
    },
    {
      id: 3,
      title: "Blog Backend",
      description:
        "A personal portfolio website to showcase projects, skills, and contact details with a responsive layout.",
      longDescription: `
        
         <h2>📰 Blog Backend Project</h2>

<p>
This is a fully functional backend for a blogging platform, built using Node.js, Express, and MongoDB. The application is designed to handle user authentication, secure blog post management, and RESTful API communication with any frontend client. It uses industry-standard practices like JWT for authentication and bcrypt for password encryption. The backend supports multiple user roles (e.g., admin, author) and enables secure and scalable blog management.
</p>

<h3> Key Features</h3>
<ul>
<li> <strong>JWT Authentication:</strong> Secure login system using access tokens.</li>
<li> <strong>User Management:</strong> Supports role-based users like admin and author.</li>
<li> <strong>Blog CRUD:</strong> Authors can create, update, delete, and view blog posts.</li>
<li> <strong>Hashed Passwords:</strong> User passwords are encrypted using bcrypt.</li>
<li> <strong>CORS Enabled:</strong> Allows cross-origin frontend integration.</li>
<li> <strong>Environment Variables:</strong> Secure configuration using dotenv.</li>
</ul>

<h3>🔌 API Endpoints</h3>

<h4>Auth Routes</h4>
<ul>
<li><code>POST /api/register</code> - Register a new user.</li>
<li><code>POST /api/login</code> - Authenticate and receive JWT token.</li>
</ul>

<h4>Blog Routes</h4>
<ul>
<li><code>GET /api/posts</code> - Retrieve all blog posts.</li>
<li><code>GET /api/posts/:id</code> - Retrieve a single post by ID.</li>
<li><code>POST /api/posts</code> - Create a new blog post (requires auth).</li>
<li><code>PUT /api/posts/:id</code> - Update an existing post (auth + owner only).</li>
<li><code>DELETE /api/posts/:id</code> - Delete a post (auth + owner only).</li>
</ul>


<h3>📌 Project Highlights</h3>
<ul>
<li>Production-ready backend with clean folder structure.</li>
<li>Scalable API design for future features like comments, likes, categories.</li>
<li>Frontend-friendly JSON responses for smooth integration.</li>
</ul>

              
  `,
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://i.ibb.co.com/Q7x73Bxx/backend.jpg",
      github: "https://github.com/mdsajedulra/Blog_Server",
      demo: "https://assignment-03-blog-webiste-backend.vercel.app/",
      category: "Backend",
      featured: true,
    },
  ];

  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Filter projects based on category
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A collection of my recent work, personal projects, and
              contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "web", "mobile", "design", "other"].map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
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
                    src={
                      project.image ||
                      "https://images.unsplash.com/photo-1550000000000-abcdefabcdef?q=80&w=800&auto=format&fit=crop"
                    }
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
                      <p className="text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-xs rounded-md"
                      >
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
                  <Button className=" my-5 w-full">
                    <Link to={`${project?.id}`}>View Project Details</Link>{" "}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
