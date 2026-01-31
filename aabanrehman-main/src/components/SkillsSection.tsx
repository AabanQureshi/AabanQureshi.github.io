import { Code2, Database, Cloud, Layers, GitBranch, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: ["C#", "ASP.NET Core", "MVC Core", "Blazor", "JavaScript", "jQuery", "React"],
    color: "primary",
  },
  {
    title: "Database & ORM",
    icon: Database,
    skills: ["MSSQL Server", "MySQL", "Entity Framework Core", "SQL", "Database Management"],
    color: "accent",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Microsoft Azure", "Cloud Computing", "Deployment", "CI/CD", "Azure Fundamentals"],
    color: "primary",
  },
  {
    title: "Architecture & Design",
    icon: Layers,
    skills: ["Clean Architecture", "Domain Driven Design", "Vertical Slice", "SOLID Principles", "Microservices"],
    color: "accent",
  },
  {
    title: "APIs & Services",
    icon: Server,
    skills: ["RESTful APIs", "Controller APIs", "Minimal APIs", "Web APIs"],
    color: "primary",
  },
  {
    title: "Tools & Frontend",
    icon: GitBranch,
    skills: ["Git", "HTML", "CSS", "Bootstrap", "Version Control"],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{"<Skills />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isAccent = category.color === "accent";
            
            return (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isAccent ? 'bg-accent/20' : 'bg-primary/20'}`}>
                  <Icon className={`w-6 h-6 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
