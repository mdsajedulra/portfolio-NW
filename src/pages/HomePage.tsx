import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import "../styles/HomePageStyles.css";
import Skills from "@/components/module/Skills";
import Projects from "@/components/module/Projects";

const HomePage = () => {
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

  const projects: Project[] = [
    {
      id: 1,
      title: "Book Shop App",
      description:
        "A full-stack web application for browsing, purchasing, and managing books with secure login and payment",
      technologies: ["React", "Redux", "Node.js", "Express", "Mongoose"],
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

  // Set up animation on scroll effect with proper cleanup
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll");

      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.8;

        if (isInViewport) {
          el.classList.add("animated");
        }
      });
    };

    // Initial check
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
                Hi, I'm <span className="text-gradient">Md Sajedul Islam</span>
                <br />
                <span className="text-3xl md:text-5xl">
                  Full-Stack Developer
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                I build modern, responsive web applications with clean code and
                cutting-edge technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button className="btn-primary group custom-cta-button">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="btn-secondary custom-cta-button"
                  >
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
                    src="https://i.ibb.co.com/8RMbqZ5/profile-picture.jpg"
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
      <section
        id="featured-projects"
        className="bg-background dark:bg-darkBlue py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent work that showcases my skills and
              passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-neonBlue/20 animate-on-scroll project-card"
                style={{ transitionDelay: `${1 * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project?.image}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover transform transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project?.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neonBlue hover:text-skyBlue transition-colors text-sm"
                    >
                      GitHub Repository
                    </a>
                    <a
                      href={project?.demo}
                      target="_blank"
                      className="text-neonBlue hover:text-skyBlue transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                  <Button className=" my-5 w-full">
                    <Link to={`projects/${project?.id}`}>
                      View Project Details
                    </Link>{" "}
                  </Button>
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
      <Skills />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neonBlue/10 to-skyBlue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently available for freelance work and collaborations. If
              you have a project in mind, I'd love to hear about it!
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Articles
            </h2>
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
                  <div className="text-xs text-muted-foreground mb-2">
                    May {blog}, 2023
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    How to Build a React App with TypeScript
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    Learn how to set up and develop a React application with
                    TypeScript for type-safe development. This comprehensive
                    guide covers everything from initial setup to advanced
                    patterns.
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
