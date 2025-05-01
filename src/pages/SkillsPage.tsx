
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import '../styles/SkillsPageStyles.css';

// Skill type definition
interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'soft';
}

const Skills = () => {
  // Sample skills data
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML5', level: 5, category: 'frontend' },
    { name: 'CSS3', level: 5, category: 'frontend' },
    { name: 'JavaScript', level: 5, category: 'frontend' },
    { name: 'TypeScript', level: 4, category: 'frontend' },
    { name: 'React.js', level: 5, category: 'frontend' },
    { name: 'Next.js', level: 4, category: 'frontend' },
    { name: 'Tailwind CSS', level: 5, category: 'frontend' },
    { name: 'Redux', level: 4, category: 'frontend' },
    { name: 'SASS', level: 4, category: 'frontend' },
    { name: 'GraphQL (Client)', level: 3, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 4, category: 'backend' },
    { name: 'Express.js', level: 4, category: 'backend' },
    { name: 'REST API Design', level: 5, category: 'backend' },
    { name: 'GraphQL', level: 3, category: 'backend' },
    { name: 'Authentication', level: 4, category: 'backend' },
    { name: 'Python', level: 3, category: 'backend' },
    { name: 'Django', level: 2, category: 'backend' },
    
    // Database
    { name: 'MongoDB', level: 4, category: 'database' },
    { name: 'PostgreSQL', level: 3, category: 'database' },
    { name: 'MySQL', level: 3, category: 'database' },
    { name: 'Redis', level: 2, category: 'database' },
    { name: 'Firebase', level: 4, category: 'database' },
    
    // DevOps
    { name: 'Git', level: 5, category: 'devops' },
    { name: 'GitHub Actions', level: 3, category: 'devops' },
    { name: 'Docker', level: 3, category: 'devops' },
    { name: 'AWS', level: 3, category: 'devops' },
    { name: 'Vercel', level: 4, category: 'devops' },
    { name: 'Netlify', level: 4, category: 'devops' },
    
    // Tools
    { name: 'VS Code', level: 5, category: 'tools' },
    { name: 'Figma', level: 4, category: 'tools' },
    { name: 'Postman', level: 4, category: 'tools' },
    { name: 'Chrome DevTools', level: 5, category: 'tools' },
    { name: 'npm/yarn', level: 5, category: 'tools' },
    { name: 'Webpack', level: 3, category: 'tools' },
    
    // Soft Skills
    { name: 'Communication', level: 5, category: 'soft' },
    { name: 'Teamwork', level: 5, category: 'soft' },
    { name: 'Problem Solving', level: 5, category: 'soft' },
    { name: 'Time Management', level: 4, category: 'soft' },
    { name: 'Adaptability', level: 5, category: 'soft' },
    { name: 'Leadership', level: 4, category: 'soft' },
  ];
  
  // Function to filter skills by category
  const getSkillsByCategory = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">My Skills</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical and soft skills that I've developed throughout my career.
            </p>
          </div>
        </div>
      </section>
      
      {/* Technical Skills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Frontend */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <span className="bg-neonBlue/20 text-neonBlue w-10 h-10 flex items-center justify-center rounded-full mr-3">F</span>
              Frontend Development
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getSkillsByCategory('frontend').map((skill) => (
                <div key={skill.name} className="bg-card rounded-lg p-4 border border-border hover:border-neonBlue transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-xs px-2 py-1 bg-neonBlue/10 text-neonBlue rounded-full">
                      {skill.level}/5
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-neonBlue to-skyBlue h-full rounded-full"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <span className="bg-skyBlue/20 text-skyBlue w-10 h-10 flex items-center justify-center rounded-full mr-3">B</span>
              Backend Development
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getSkillsByCategory('backend').map((skill) => (
                <div key={skill.name} className="bg-card rounded-lg p-4 border border-border hover:border-skyBlue transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-xs px-2 py-1 bg-skyBlue/10 text-skyBlue rounded-full">
                      {skill.level}/5
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-skyBlue to-aquaGreen h-full rounded-full"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Database */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <span className="bg-aquaGreen/20 text-aquaGreen w-10 h-10 flex items-center justify-center rounded-full mr-3">D</span>
              Database & Storage
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getSkillsByCategory('database').map((skill) => (
                <div key={skill.name} className="bg-card rounded-lg p-4 border border-border hover:border-aquaGreen transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-xs px-2 py-1 bg-aquaGreen/10 text-aquaGreen rounded-full">
                      {skill.level}/5
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-aquaGreen to-skyBlue h-full rounded-full"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* DevOps */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <span className="bg-purpleTint/20 text-purpleTint w-10 h-10 flex items-center justify-center rounded-full mr-3">D</span>
              DevOps & Deployment
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getSkillsByCategory('devops').map((skill) => (
                <div key={skill.name} className="bg-card rounded-lg p-4 border border-border hover:border-purpleTint transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-xs px-2 py-1 bg-purpleTint/10 text-purpleTint rounded-full">
                      {skill.level}/5
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purpleTint to-neonBlue h-full rounded-full"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
              <span className="bg-neonBlue/20 text-neonBlue w-10 h-10 flex items-center justify-center rounded-full mr-3">T</span>
              Tools & Software
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getSkillsByCategory('tools').map((skill) => (
                <div key={skill.name} className="bg-card rounded-lg p-4 border border-border hover:border-neonBlue transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-xs px-2 py-1 bg-neonBlue/10 text-neonBlue rounded-full">
                      {skill.level}/5
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-neonBlue to-skyBlue h-full rounded-full"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Soft Skills */}
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Soft Skills</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {getSkillsByCategory('soft').map((skill) => (
              <div key={skill.name} className="bg-card rounded-lg p-6 border border-border hover:border-neonBlue transition-colors shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-neonBlue to-skyBlue h-full rounded-full"
                    style={{ width: `${skill.level * 20}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Learning In Progress */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Currently Learning</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border hover:border-neonBlue transition-colors shadow-sm">
              <h3 className="font-semibold mb-2">Flutter</h3>
              <p className="text-muted-foreground text-sm">
                Exploring cross-platform mobile app development with Flutter.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover:border-neonBlue transition-colors shadow-sm">
              <h3 className="font-semibold mb-2">AI/ML Integration</h3>
              <p className="text-muted-foreground text-sm">
                Learning to integrate AI/ML services into web applications.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover:border-neonBlue transition-colors shadow-sm">
              <h3 className="font-semibold mb-2">Blockchain Development</h3>
              <p className="text-muted-foreground text-sm">
                Understanding Web3 and smart contract development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-neonBlue/10 to-skyBlue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If my skill set aligns with your project requirements, let's discuss how I can contribute to your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="btn-primary">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="btn-secondary">
                  View My Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
