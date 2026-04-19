import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = "aabanqureshi564@gmail.com";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check environment variables.");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
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
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ 
        name: "", 
        email: "", 
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message.
          </p>
        </div>

        {/* Contact card */}
        <div className="p-8 md:p-12 rounded-2xl glass border border-border shadow-elevated overflow-hidden">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Left - Contact Form */}
            <div className="md:col-span-3">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-muted-foreground">
                      Name
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
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary w-full box-border"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-secondary/50 border-border focus:border-primary resize-none w-full box-border"
                  />
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-[200px] bg-gradient-primary text-white font-semibold hover:opacity-90 transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(81,43,212,0.3)]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Right - Contact info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-4">
                <a 
                  href={`mailto:${CONTACT_EMAIL}`} 
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-lg">📧</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors truncate">{CONTACT_EMAIL}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-mono text-sm text-foreground">Islamabad, Pakistan</p>
                  </div>
                </div>
                
                {/* Social links */}
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.linkedin.com/in/aaban-qureshi/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all text-sm text-foreground hover:text-primary"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/AabanQureshi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all text-sm text-foreground hover:text-primary"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm font-mono">
            Designed & Built by <span className="text-primary">Aaban Rehman</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">© 2026 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
