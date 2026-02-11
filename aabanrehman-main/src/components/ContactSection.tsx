import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = "aabanqureshi564@gmail.com";

// Service options as per improvement plan
const SERVICE_OPTIONS = [
  { value: "custom-dotnet", label: "Custom .NET Application Development" },
  { value: "api-development", label: "API Development & Integration" },
  { value: "cloud-solutions", label: "Cloud Solutions (Azure/AWS)" },
  { value: "database-design", label: "Database Design & Optimization" },
  { value: "fullstack-dev", label: "Full-Stack Web Development" },
  { value: "legacy-modernization", label: "Legacy System Modernization" },
  { value: "consulting", label: "Technical Consulting & Code Review" },
  { value: "maintenance", label: "Ongoing Maintenance & Support" },
];

// Budget options as per improvement plan
const BUDGET_OPTIONS = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-3k", label: "$1,000 - $3,000" },
  { value: "3k-5k", label: "$3,000 - $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-plus", label: "$10,000+" },
  { value: "discuss", label: "Prefer to Discuss" },
];

// Timeline options as per improvement plan
const TIMELINE_OPTIONS = [
  { value: "urgent", label: "ASAP (Within 1 week)" },
  { value: "short", label: "1-2 weeks" },
  { value: "medium", label: "3-4 weeks" },
  { value: "long", label: "1-2 months" },
  { value: "flexible", label: "Flexible timeline" },
];

// Contact preference options
const CONTACT_PREFERENCE_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp" },
];

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  contactPreference: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    contactPreference: "email",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required dropdown fields
      if (!formData.service) {
        toast({
          title: "Service Required",
          description: "Please select a service type.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      if (!formData.budget) {
        toast({
          title: "Budget Required",
          description: "Please select a budget range.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      if (!formData.timeline) {
        toast({
          title: "Timeline Required",
          description: "Please select a project timeline.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Validate environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check environment variables.");
      }

      // Get human-readable labels for dropdown values
      const serviceLabel = SERVICE_OPTIONS.find(o => o.value === formData.service)?.label || formData.service;
      const budgetLabel = BUDGET_OPTIONS.find(o => o.value === formData.budget)?.label || formData.budget;
      const timelineLabel = TIMELINE_OPTIONS.find(o => o.value === formData.timeline)?.label || formData.timeline;
      const contactPrefLabel = CONTACT_PREFERENCE_OPTIONS.find(o => o.value === formData.contactPreference)?.label || formData.contactPreference;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        service: serviceLabel,
        budget: budgetLabel,
        timeline: timelineLabel,
        contact_preference: contactPrefLabel,
        message: formData.message,
        // Legacy fields for backward compatibility
        name: formData.name,
        email: formData.email,
      };

      // Send main email to you
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // Send auto-reply to the user (if auto-reply template is configured)
      if (autoReplyTemplateId) {
        try {
          const autoReplyParams = {
            to_name: formData.name,
            to_email: formData.email,
            service: serviceLabel,
            budget: budgetLabel,
            timeline: timelineLabel,
            // Legacy fields
            name: formData.name,
            email: formData.email,
          };
          
          await emailjs.send(
            serviceId,
            autoReplyTemplateId,
            autoReplyParams,
            publicKey
          );
        } catch (autoReplyError) {
          console.warn(
            "Auto-reply email could not be sent (user will not receive confirmation), but main notification was delivered successfully:",
            autoReplyError
          );
          // Don't throw error - main email was successful
        }
      }

      toast({
        title: "Message sent successfully! ✓",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      });
      setFormData({ 
        name: "", 
        email: "", 
        phone: "",
        company: "",
        service: "", 
        budget: "",
        timeline: "",
        contactPreference: "email",
        message: "" 
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Failed to send message",
        description: `Please try again or contact me directly at ${CONTACT_EMAIL}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-6 relative" id="contact">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">{"<Contact />"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations about tech
          </p>
        </div>

        {/* Contact card */}
        <div className="p-8 md:p-12 rounded-2xl glass border border-border shadow-elevated overflow-hidden">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Left - Contact Form */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-muted-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary w-full box-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-muted-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary w-full box-border"
                    />
                  </div>
                </div>
                
                {/* Row 2: Phone and Company (optional) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm text-muted-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border focus:border-primary w-full box-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm text-muted-foreground">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border focus:border-primary w-full box-border"
                    />
                  </div>
                </div>
                
                {/* Service Required */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm text-muted-foreground">
                    Service Required *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger className="bg-secondary/50 border-border focus:border-primary w-full box-border">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Row: Budget and Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-sm text-muted-foreground">
                      Estimated Budget *
                    </Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      required
                    >
                      <SelectTrigger className="bg-secondary/50 border-border focus:border-primary w-full box-border">
                        <SelectValue placeholder="Select budget range..." />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGET_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="text-sm text-muted-foreground">
                      Project Timeline *
                    </Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                      required
                    >
                      <SelectTrigger className="bg-secondary/50 border-border focus:border-primary w-full box-border">
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIMELINE_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {/* Preferred Contact Method */}
                <div className="space-y-3">
                  <Label className="text-sm text-muted-foreground">
                    Preferred Contact Method *
                  </Label>
                  <RadioGroup
                    value={formData.contactPreference}
                    onValueChange={(value) => setFormData({ ...formData, contactPreference: value })}
                    className="flex flex-wrap gap-4"
                  >
                    {CONTACT_PREFERENCE_OPTIONS.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={option.value} 
                          id={`contact-${option.value}`}
                          className="border-border text-primary"
                        />
                        <Label 
                          htmlFor={`contact-${option.value}`} 
                          className="text-sm text-foreground cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-muted-foreground">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, requirements, and any specific details..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none w-full box-border"
                  />
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-[200px] bg-gradient-primary text-primary-foreground font-semibold glow-primary hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact info - below form */}
          <div className="mt-8 pt-8 border-t border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-6">Or reach out directly</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <a 
                href={`mailto:${CONTACT_EMAIL}`} 
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:glow-primary transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">{CONTACT_EMAIL}</p>
                </div>
              </a>

              <a 
                href="tel:+923470506699" 
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">+92 347 0506699</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="font-mono text-sm text-foreground">Islamabad</p>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">Connect on social</h4>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/aaban-qureshi/" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-[200px]">
                  <Button variant="outline" className="w-full border-border hover:border-primary hover:bg-secondary">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/AabanQureshi" target="_blank" rel="noopener noreferrer" className="flex-1 max-w-[200px]">
                  <Button variant="outline" className="w-full border-border hover:border-primary hover:bg-secondary">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by <span className="text-primary">Aaban Rehman</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">© 2025 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
