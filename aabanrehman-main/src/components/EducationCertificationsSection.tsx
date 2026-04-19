import { ExternalLink } from "lucide-react";

interface TimelineItem {
  type: "education" | "certification";
  title: string;
  institution: string;
  date: string;
  icon: string;
  url?: string;
}

const timelineItems: TimelineItem[] = [
  {
    type: "education",
    title: "BS Software Engineering",
    institution: "International Islamic University Islamabad",
    date: "Jan 2022 – Jun 2026 (Expected)",
    icon: "🎓",
  },
  {
    type: "certification",
    title: "Microsoft Back-End Engineer Specialization",
    institution: "Microsoft",
    date: "2024",
    icon: "📜",
    url: "https://coursera.org/share/d7b58dc00880dd25c756231875902c67",
  },
  {
    type: "certification",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    institution: "Microsoft",
    date: "2024",
    icon: "📜",
    url: "https://www.credly.com/badges/5ff6c7e6-65f3-41e4-818f-1c064af0ddd4",
  },
  {
    type: "certification",
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    institution: "Microsoft",
    date: "2024",
    icon: "📜",
    url: "https://www.credly.com/badges/5ff6c7e6-65f3-41e4-818f-1c064af0ddd4/linked_in_profile",
  },
  {
    type: "certification",
    title: "Database Integration and Management",
    institution: "Microsoft",
    date: "2024",
    icon: "📜",
    url: "https://coursera.org/share/603e6cd1da70309418d4ee081cff7980",
  },
  {
    type: "certification",
    title: "Meta React Specialization",
    institution: "Meta",
    date: "2023",
    icon: "📜",
    url: "https://coursera.org/share/d38d5cf9760f03180ce0e6c49a20a671",
  },
  {
    type: "certification",
    title: "Deployments and DevOps",
    institution: "Microsoft",
    date: "2024",
    icon: "📜",
    url: "https://www.coursera.org/account/accomplishments/records/12HJG9FIBXL9",
  },
];

const EducationCertificationsSection = () => {
  return (
    <section className="py-24 px-6 relative" id="education">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block animate-fade-in">{"<Education />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Academic background and professional credentials in modern technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {timelineItems.map((item, index) => {
            const isEducation = item.type === "education";
            const ContentWrapper = item.url ? 'a' : 'div';
            const wrapperProps = item.url ? { 
              href: item.url, 
              target: "_blank", 
              rel: "noopener noreferrer" 
            } : {};

            return (
              <div key={index} className="relative pl-8 md:pl-20 pb-8 last:pb-0 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 hover:scale-125 ${isEducation ? 'bg-primary border-primary glow-primary' : 'bg-card border-accent hover:border-primary'}`} />
                
                {/* Content card */}
                <ContentWrapper
                  {...wrapperProps}
                  className={`block p-5 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 group hover-lift ${item.url ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform ${isEducation ? 'bg-primary/20' : 'bg-accent/20'}`}>
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${isEducation ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                            {isEducation ? '🎓 Education' : '📜 Certification'}
                          </span>
                        </div>
                        {item.url && (
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        )}
                      </div>
                      
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base leading-tight mt-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm font-mono text-muted-foreground mt-1">
                        {item.institution}
                      </p>
                      
                      <p className="text-xs text-muted-foreground mt-2">
                        {item.date}
                      </p>
                      
                      {item.url && (
                        <span className="text-xs text-primary mt-2 inline-block group-hover:underline">
                          Verify Credential →
                        </span>
                      )}
                    </div>
                  </div>
                </ContentWrapper>
              </div>
            );
          })}
        </div>

        {/* Summary badge */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <span className="text-2xl">🎖️</span>
            <span className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">6+</span> Microsoft & Meta Verified Certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertificationsSection;
