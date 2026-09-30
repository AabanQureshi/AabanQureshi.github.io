import { Bot, Server, Workflow } from "lucide-react";

const aiWork = [
  {
    title: "Azure AI Fundamentals (AI-900)",
    description: "Microsoft Certified in Azure AI Fundamentals with practical understanding of AI service capabilities, responsible AI concepts, and AI solution design patterns for production systems.",
    icon: Bot
  },
  {
    title: "Workflow Automation",
    description: "Implemented ASP.NET Core background services for automated contract generation, invoice creation, and Firebase notifications, cutting response times by 50%.",
    icon: Server
  },
  {
    title: "Event-Driven Integration",
    description: "Integrated Azure Service Bus in distributed .NET services to support asynchronous, event-driven workflows across microservices.",
    icon: Workflow
  }
];

const AIAutomationSection = () => {
  return (
    <section className="py-24 px-6 relative" id="ai-automation">
      {/* Background decoration with different color */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-sm mb-4 block animate-fade-in">{"<AI & Automation />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            AI &amp; <span className="text-gradient">Automation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Leveraging AI and automation tools to build intelligent, efficient systems
          </p>
        </div>

        {/* AI Work Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiWork.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-border transition-all duration-300 hover:shadow-elevated hover-lift animate-scale-in bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-accent/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIAutomationSection;
