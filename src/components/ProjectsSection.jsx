import { ArrowRight, ExternalLink, Github, Award } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Attachable Handbike",
    description: (<br />, "Design of a product (Attachable Handbike) reinventing the way it is manufactured to reduce cost and maintain quality and performance."),
    additionalDescription: ("1st Prize for Best Final Degree Project (TFG) in Industrial Engineering at UPC Manresa. "),
    image: "/projects/handbike2.jpg",
    tags: ["SolidWorks", "3D Printing", "Mechanical Design"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Train Ticket Simulator",
    description:
      "Small project made in UOC that simulates the process of buying train tickets with an interactive platform.",
    image: "/projects/train-station-app.jpg",
    tags: ["Java", "JavaFX"],
    demoUrl: "https://github.com/pmorenogarcia/Train-Tickets-Simulator",
    githubUrl: "https://github.com/pmorenogarcia/Train-Tickets-Simulator",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Small Python app that fetches data from the Weather API from https://openweathermap.org/api webpage.",
    image: "/projects/weather-app.jpg",
    tags: ["Python", "API", "Weather"],
    demoUrl: "https://github.com/pmorenogarcia/Weather-API",
    githubUrl: "https://github.com/pmorenogarcia/Weather-API",
  },
  {
    id: 4,
    title: "Library Data Structure",
    description:
      "Small Java app that manages the data of a fictional Library using different Data Structures implementations.",
    image: "/projects/github-project.png",
    tags: ["Java", "Data Structures", "Algorithms"],
    demoUrl: "https://github.com/pmorenogarcia/Library_DataStructure",
    githubUrl: "https://github.com/pmorenogarcia/Library_DataStructure",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is a testament to my skills, dedication and improvement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={`${project.title}-${tag}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                  <br />
                  {project.additionalDescription && (
                    <span className="text-muted-foreground text-xs">
                      <br />
                      <Award size={16} className="inline mr-1" />
                      {project.additionalDescription}
                    </span>
                  )}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl.startsWith("http") && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl.startsWith("http") && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/pmorenogarcia"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
