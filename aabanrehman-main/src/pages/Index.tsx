import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIAutomationSection from "@/components/AIAutomationSection";
import EducationCertificationsSection from "@/components/EducationCertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AIAutomationSection />
        <EducationCertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
