import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "ASP.NET Core Developer",
    company: "OwaSoft Technologies",
    period: "July 2025 – Present",
    current: true,
    responsibilities: [
      "Developing and maintaining scalable applications using ASP.NET Core MVC, micro-architecture patterns, and modern development practices",
      "Collaborating seamlessly with the frontend team, leveraging full-stack expertise to ensure smooth integration between backend and UI components",
      "Leading and mentoring interns, providing technical guidance, code reviews, and training",
      "Designing and managing server-side architecture and database pipelines for reliability and scalability",
      "Overseeing production server maintenance, deployments, monitoring, and performance optimization",
    ],
  },
  {
    title: "Internee",
    company: "Kartoa Technologies",
    period: "Mar 2025 – May 2025",
    current: false,
    responsibilities: [
      "Gained hands-on full-stack development experience by working on real client projects using Blazor for frontend and ASP.NET Core for backend services",
      "Contributed to building modules for a legal-tech platform (WooqLaw.com), implementing features specific to lawyers' workflows and case management",
      "Collaborated closely with senior developers to understand and apply enterprise architecture patterns",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 relative" id="experience">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{"<Experience />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building enterprise solutions and mentoring the next generation of developers
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-primary border-primary glow-primary' : 'bg-card border-accent'}`} />
              
              {/* Content card */}
              <div className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Building2 className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 p-6 rounded-xl glass border border-border">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">BS Software Engineering</h3>
              <p className="text-muted-foreground font-mono text-sm">International Islamic University, Islamabad</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground ml-16">2022 – Present</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
