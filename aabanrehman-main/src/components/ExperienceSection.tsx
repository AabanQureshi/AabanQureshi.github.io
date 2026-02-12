import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Full Stack .NET + React (TS) Engineer",
    company: "OwaSoft Technologies",
    period: "July 2025 – Present",
    current: true,
    responsibilities: [
      "Developed and maintained scalable applications using ASP.NET Core MVC, micro-architecture patterns, and modern development practices",
      "Collaborated seamlessly with the frontend team, leveraging full-stack expertise to ensure smooth integration between backend and UI components",
      "Led and mentored interns, providing technical guidance, code reviews, and training to help them grow as developers",
      "Designed and managed server-side architecture and database pipelines, ensuring reliability, scalability, and efficiency",
      "Architected and implemented a microservices-based system for InkedFlow using ASP.NET Core MVC, comprising over 10+ .NET Core API projects",
      "Integrated third-party services including PostGrid, USPS, and Stripe, handling transactions efficiently and reducing integration errors by 30%",
    ],
  },
  {
    title: ".NET Developer",
    company: "Kartoa Technologies",
    period: "Feb 2025 – May 2025",
    current: false,
    responsibilities: [
      "Gained hands-on full-stack development experience working on real client projects using Blazor for frontend and ASP.NET Core for backend services",
      "Contributed to building modules for a legal-tech platform (WooqLaw.com), implementing features specific to lawyers' workflows and case management",
      "Collaborated closely with senior developers to understand and apply enterprise architecture patterns, improving code structure and maintainability",
      "Developed and optimized 5+ reusable components in Blazor, enhancing frontend efficiency",
      "Implemented API endpoints increasing data retrieval speed by 22% with ASP.NET Core",
    ],
  },
  {
    title: "Project Lead",
    company: "Adan IT Center",
    period: "Aug 2024 – Feb 2025",
    current: false,
    responsibilities: [
      "Led production readiness and go-live for the Learning Management System (LMS) in partnership with NAVTTC (National Vocational & Technical Training Commission)",
      "Collaborated directly with trainers, teachers, and institutes under NAVTTC to conduct system training sessions, demonstrate features, and gather feedback",
      "Attended and contributed to requirement refinement meetings with stakeholders, clarifying needs and prioritizing enhancements",
      "Oversaw final testing, deployment, and post-launch support, delivering a reliable, production-grade platform that supported government-backed skills development programs",
      "Applied production best practices to ensure scalability, data integrity, and maintainability in a live environment serving multi-institute users",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 relative" id="experience">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block animate-fade-in">{"<Experience />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building enterprise solutions and mentoring the next generation of developers
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20 pb-12 last:pb-0 animate-slide-in-left" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Timeline dot with glow */}
              <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${exp.current ? 'bg-primary border-primary glow-primary animate-pulse-glow' : 'bg-card border-accent hover:border-primary hover:scale-125'}`} />
              
              {/* Content card */}
              <div className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group hover-lift">
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
                      <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
