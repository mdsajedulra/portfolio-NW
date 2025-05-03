const Education = () => {
  return (
    <>
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Work Experience
          </h2>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* Experience Item */}
            <div className="relative pl-8 border-l-2 border-neonBlue">
              <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-neonBlue"></div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-xl font-semibold">
                    Senior Frontend Developer
                  </h3>
                  <span className="text-sm px-3 py-1 bg-neonBlue/10 text-neonBlue rounded-full">
                    2021 - Present
                  </span>
                </div>
                <p className="text-lg font-medium mb-2">TechCorp Inc.</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Led the development of the company's flagship SaaS product
                  </li>
                  <li>Implemented modern React architecture with TypeScript</li>
                  <li>Improved application performance by 40%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>

            {/* Experience Item */}
            <div className="relative pl-8 border-l-2 border-neonBlue">
              <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-neonBlue"></div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-xl font-semibold">
                    Full-Stack Developer
                  </h3>
                  <span className="text-sm px-3 py-1 bg-neonBlue/10 text-neonBlue rounded-full">
                    2019 - 2021
                  </span>
                </div>
                <p className="text-lg font-medium mb-2">DevAgency</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed web applications for various clients</li>
                  <li>Worked with React, Node.js, and MongoDB</li>
                  <li>Implemented CI/CD pipelines for automated deployments</li>
                  <li>Collaborated closely with design and product teams</li>
                </ul>
              </div>
            </div>

            {/* Experience Item */}
            <div className="relative pl-8 border-l-2 border-neonBlue">
              <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-neonBlue"></div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h3 className="text-xl font-semibold">
                    Junior Web Developer
                  </h3>
                  <span className="text-sm px-3 py-1 bg-neonBlue/10 text-neonBlue rounded-full">
                    2018 - 2019
                  </span>
                </div>
                <p className="text-lg font-medium mb-2">StartupX</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Built responsive websites using HTML, CSS, and JavaScript
                  </li>
                  <li>
                    Learned React.js and started implementing single page
                    applications
                  </li>
                  <li>
                    Collaborated with senior developers to improve coding
                    practices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
