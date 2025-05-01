
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted dark:bg-darkBlue border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Portfolio</h3>
            <p className="text-muted-foreground max-w-md">
              A showcase of my work, skills, and experience as a developer.
              Feel free to reach out if you'd like to collaborate on a project.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-muted-foreground hover:text-neonBlue transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-neonBlue transition-colors">
                About
              </Link>
              <Link to="/skills" className="text-muted-foreground hover:text-neonBlue transition-colors">
                Skills
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-neonBlue transition-colors">
                Projects
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-neonBlue transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-neonBlue transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted-foreground/10 rounded-full hover:bg-neonBlue/20 transition-colors"
              >
                <Github size={20} className="text-foreground hover:text-neonBlue" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted-foreground/10 rounded-full hover:bg-neonBlue/20 transition-colors"
              >
                <Linkedin size={20} className="text-foreground hover:text-neonBlue" />
              </a>
              <a 
                href="mailto:info@example.com" 
                className="p-2 bg-muted-foreground/10 rounded-full hover:bg-neonBlue/20 transition-colors"
              >
                <Mail size={20} className="text-foreground hover:text-neonBlue" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-neonBlue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-neonBlue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
