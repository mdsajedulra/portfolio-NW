import Projects from "@/components/module/Projects";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
  return (
    <>
      <Projects />
        {/* Project Process */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            My Development Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-neonBlue/20 text-neonBlue flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground">
                I begin with understanding project requirements, creating
                wireframes, and planning the architecture.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-skyBlue/20 text-skyBlue flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground">
                Next, I create high-fidelity designs with a focus on user
                experience and interface aesthetics.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-purpleTint/20 text-purpleTint flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground">
                I implement the designs with clean, maintainable code following
                best practices and conventions.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-aquaGreen/20 text-aquaGreen flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-muted-foreground">
                Finally, I thoroughly test the application and deploy it with
                optimized performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Collaborating?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
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
