import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Backend Skills
  { name: 'Python', level: 90, category: 'backend' },
  { name: 'Java', level: 80, category: 'backend' },
  { name: 'PHP', level: 60, category: 'backend' },
  { name: 'Go', level: 65, category: 'backend' },
  { name: 'C++', level: 60, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'GraphQL', level: 60, category: 'backend' },

  // Frontend Skills
  { name: 'HTML/CSS', level: 70, category: 'frontend' },
  { name: 'JavaScript', level: 65, category: 'frontend' },
  { name: 'TypeScript', level: 65, category: 'frontend' },
  { name: 'React', level: 65, category: 'frontend' },
  { name: 'Tailwind CSS', level: 45, category: 'frontend' },

  // Tools Skills
  { name: 'Git & GitHub', level: 80, category: 'tools' },
  { name: 'GCP', level: 60, category: 'tools' },
  { name: 'Docker', level: 60, category: 'tools' },
  { name: 'Linux', level: 75, category: 'tools' },
  { name: 'VS Code', level: 90, category: 'tools' },
  { name: 'PyCharm', level: 90, category: 'tools' },
  { name: 'IntelliJ', level: 90, category: 'tools' },
  { name: 'Postman', level: 60, category: 'tools' },
  { name: 'Jira', level: 80, category: 'tools' },
  { name: 'Confluence', level: 80, category: 'tools' },

  // 3D Tools Skills
  { name: 'SolidWorks', level: 85, category: '3D Tools' },
  { name: 'AutoDesk', level: 60, category: '3D Tools' },
  { name: 'UltiMaker Cura', level: 65, category: '3D Tools' },
];
const categories = ["all", "backend", "frontend", "tools", "3D Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
