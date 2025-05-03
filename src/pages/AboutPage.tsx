import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Learn more about my journey, experience, and passion for creating
              exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -z-10 w-64 h-64 rounded-full bg-neonBlue/20 blur-[80px]"></div>
              <img
                src="https://i.ibb.co.com/8RMbqZ5/profile-picture.jpg"
                alt="About Me"
                className="w-full h-auto max-w-md mx-auto rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Journey</h2>
              <p className="text-lg text-muted-foreground">
                Hello! I'm Md Sajedul Islam, a passionate full-stack developer with over
                5 years of experience building web applications. My journey in
                tech began when I taught myself to code while studying Computer
                Science and Technology at Dhaka International University.
              </p>
              <p className="text-lg text-muted-foreground">
                Since then, I've worked with startups, agencies, and established
                companies to create impactful digital products. I specialize in
                JavaScript ecosystems, with expertise in React,Next Js, Node.js, and
                modern full-stack architectures.
              </p>
              {/* <p className="text-lg text-muted-foreground">
                When I'm not coding, you'll find me hiking in the mountains,
                reading sci-fi novels, or experimenting with new technologies.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
    

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Education Item */}
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <h3 className="text-xl font-semibold">
                  BSc in Computer Science
                </h3>
                <span className="text-sm px-3 py-1 bg-muted text-muted-foreground rounded-full">
                  2014 - 2018
                </span>
              </div>
              <p className="text-lg font-medium">Dhaka International University</p>
              <p className="text-muted-foreground mt-2">
                Graduated with honors. Specialized in software engineering and
                web development.
              </p>
            </div>

            {/* Certification Item */}
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <h3 className="text-xl font-semibold">
                  Full-Stack Web Development
                </h3>
                <span className="text-sm px-3 py-1 bg-muted text-muted-foreground rounded-full">
                  2022
                </span>
              </div>
              <p className="text-lg font-medium">Programming Hero</p>
              <p className="text-muted-foreground mt-2">
                Completed intensive 6-month bootcamp focused on modern
                JavaScript frameworks, backend development with Node.js, and
                database management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Beyond Coding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground">
                I'm passionate about staying up-to-date with emerging
                technologies. Currently learning about AI/ML integration in web
                applications.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Outdoor Enthusiast</h3>
              <p className="text-muted-foreground">
                When away from the keyboard, I love hiking, camping, and
                landscape photography. Nature helps me reset and think
                creatively.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Community Involvement
              </h3>
              <p className="text-muted-foreground">
                I regularly contribute to open-source projects and mentor
                aspiring developers through local coding meetups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing product design work or partnership
              opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="btn-primary">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="btn-secondary">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
