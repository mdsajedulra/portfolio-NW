import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Skills = () => {
  interface TechItem {
    technology: string;
    techimage: string;
  }

  const techStack: TechItem[] = [
    {
      technology: "HTML",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      technology: "CSS",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      technology: "Tailwind CSS",
      techimage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
    },
    {
      technology: "JavaScript",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      technology: "TypeScript",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      technology: "React",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },

    {
      technology: "Redux Toolkit",
      techimage:
        "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    },
    {
      technology: "RTK Query",
      techimage: "https://redux-toolkit.js.org/img/redux.svg",
    },
    {
      technology: "Node.js",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      technology: "Express.js",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      technology: "MongoDB",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      technology: "Mongoose",
      techimage:
        "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png",
    },
    {
      technology: "WordPress",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
    {
      technology: "Firebase",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      technology: "Next.js",
      techimage:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  ];

  return (
    <section className="bg-muted/30 dark:bg-muted/10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and tools I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {techStack.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-4 text-center border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-neonBlue animate-on-scroll"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="bg-muted/50 dark:bg-muted w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                <img src={skill.techimage} alt="" />
              </div>
              <h3 className="text-sm font-medium">{skill.technology}</h3>
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
  );
};

export default Skills;
