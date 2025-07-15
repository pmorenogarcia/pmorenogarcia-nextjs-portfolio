import { Briefcase, Code, User, Box, Workflow } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Ambitious Software Developer & Mechanical Engineer
            </h3>

            <p className="text-muted-foreground">
              My name is Pol, I'm 24 years old, and I hold a degree 
              in Mechanical Engineering from UPC Manresa. Currently, 
              I’m pursuing a Bachelor's degree in Techniques for Software 
              Application Development at the UOC, with a strong focus on 
              becoming a skilled software developer.
            </p>

            <p className="text-muted-foreground">
              I consider myself an ambitious person with an special ability 
              to learn. Selfcritical ability that drives me and motivates me 
              to personal growth in all areas. I have excelent experience in 
              teamwork and leadership. I'm passionate about the world or sector 
              related to new technologies. I'm also the type of person who is 
              open to the public, passionate and eager to learn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="public\cv\CV_pmorenogarcia_2025.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Backend Development</h4>
                  <p className="text-muted-foreground">
                    Creating robust server-side applications and APIs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">CI/CD</h4>
                  <p className="text-muted-foreground">
                    Understanding of Continuous Integration and Continuous
                    Deployment practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Box className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">3D Design</h4>
                  <p className="text-muted-foreground">
                    Still learning 3D design and printing, with a focus on
                    creating functional prototypes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
