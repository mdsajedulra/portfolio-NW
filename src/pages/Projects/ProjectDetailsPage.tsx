import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

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

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sample projects data (in a real app, this would be fetched from an API)
    const projects: Project[] = [
      {
        id: 1,
        title: "Book Shop App",
        description:
          "A full-stack web application for browsing, purchasing, and managing books with secure login and payment via SurjoPay.",
        technologies: [
          "React",
          "Redux Toolkit",
          "RTK Query",
          "Node.js",
          "Express",
          "MongoDB",
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
        technologies: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
        ],
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
        image: "https://i.ibb.co.com/W4v0qyrR/Screenshot-2025-05-01-162407.png",
        github: "https://github.com/username/portfolio-site",
        demo: "https://book-store-client-livid.vercel.app/",
        category: "Backend",
        featured: true,
      },
    ];

    // Find the project with the matching id
    const projectId = parseInt(id || "0", 10);
    const foundProject = projects.find((p) => p.id === projectId);

    // Simulate loading
    setTimeout(() => {
      setProject(foundProject || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-pulse text-xl">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8">
          Sorry, we couldn't find the project you're looking for.
        </p>
        <Button asChild>
          <Link to="/projects">
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section with Project Image */}
      <section className="relative">
        <div className="w-full h-[40vh] md:h-[50vh] bg-muted overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-70 dark:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4">
          <div className="absolute top-4 left-4 md:top-8 md:left-8">
            <Button
              variant="outline"
              asChild
              className="bg-background/80 backdrop-blur-sm"
            >
              <Link to="/projects">
                <ArrowLeft className="mr-2" size={16} />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-col gap-3 min-w-40">
                <Button asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Project Description */}
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                {project.longDescription.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                    className="mb-4 text-muted-foreground"
                  >
                    {/* {paragraph} */}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Screenshots or Additional Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Project Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 bg-muted/50 flex items-center justify-center">
                <img
                  src={`https://images.unsplash.com/photo-1460925895917-afddc27a96fe?q=80&w=2000&auto=format&fit=crop`}
                  alt="Screenshot 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">Main Dashboard</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-muted/50 flex items-center justify-center">
                <img
                  src={`https://images.unsplash.com/photo-1481887328591-3e277f9473dc?q=80&w=2000&auto=format&fit=crop`}
                  alt="Screenshot 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">User Interface</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsPage;
