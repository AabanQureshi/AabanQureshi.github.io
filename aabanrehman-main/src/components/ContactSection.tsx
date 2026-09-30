'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter, Send, MessageSquare, Code2, Briefcase, Heart, Zap, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card3D } from "@/components/ui/3d/Card3D";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aabanqureshi564@gmail.com",
    href: "mailto:aabanqureshi564@gmail.com",
    color: "#ea4335",
    description: "Best for project inquiries",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
    color: "#06b6d4",
    description: "UTC+5 | Remote-friendly",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "aaban-qureshi",
    href: "https://linkedin.com/in/aaban-qureshi",
    color: "#0a66c2",
    description: "Professional network",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "AabanQureshi",
    href: "https://github.com/AabanQureshi",
    color: "#ffffff",
    description: "Open source & code",
  },
];

const services = [
  {
    icon: Code2,
    title: "Custom .NET Development",
    description: "ASP.NET Core APIs, Blazor apps, microservices, and cloud-native architectures",
    price: "Project-based",
    color: "#8b5cf6",
  },
  {
    icon: Briefcase,
    title: "Technical Consulting",
    description: "Architecture reviews, code audits, performance optimization, and team mentoring",
    price: "Hourly / Retainer",
    color: "#06b6d4",
  },
  {
    icon: Zap,
    title: "Legacy Modernization",
    description: ".NET Framework to .NET 8/9 migration, monolith to microservices, cloud migration",
    price: "Project-based",
    color: "#10b981",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message too short (min 20 chars)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    try {
      // Using Formspree or similar service
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section className="py-24 px-6 relative" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium"
            style={{ background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.3)' }}>
            <MessageSquare className="w-4 h-4" style={{ color: '#8b5cf6' }} />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Let's Build <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Need a technical partner? Just want to say hi?
            I'd love to hear from you. Respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info & Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Methods */}
            <Card3D
              tiltFactor={5}
              scaleFactor={1.005}
              glowColor="#8b5cf6"
              className="p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0.03) 100%)',
                borderColor: 'rgba(139,92,246,0.2)',
              }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6" style={{ color: '#8b5cf6' }} />
                Contact Me
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, i) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl transition-all group"
                    style={{ background: 'rgba(139,92,246,0.03)', border: '1px solid transparent' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(139,92,246,0.08)';
                      e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(139,92,246,0.03)';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${contact.color}20`, color: contact.color }}>
                      <contact.icon className="w-6 h-6" style={{ color: contact.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">{contact.label}</span>
                        {contact.href && (
                          <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground hover:text-accent transition-colors"
                          >
                            Open
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-foreground/80 font-mono">{contact.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card3D>

            {/* Services */}
            <Card3D
              tiltFactor={5}
              scaleFactor={1.005}
              glowColor="#06b6d4"
              className="p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.03) 100%)',
                borderColor: 'rgba(6,182,212,0.2)',
              }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6" style={{ color: '#06b6d4' }} />
                Services
              </h3>
              <div className="space-y-4">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-xl transition-all group"
                    style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid transparent' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(6,182,212,0.1)';
                      e.currentTarget.style.borderColor = 'rgba(6,182,212,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(6,182,212,0.05)';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${service.color}20`, color: service.color }}>
                        <service.icon className="w-5 h-5" style={{ color: service.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium"
                          style={{ background: `${service.color}20`, color: service.color, border: `1px solid ${service.color}30` }}>
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card3D>

            {/* Availability Badge */}
            <Card3D
              tiltFactor={5}
              scaleFactor={1.005}
              glowColor="#10b981"
              className="p-6 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.03) 100%)',
                borderColor: 'rgba(16,185,129,0.2)',
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-3" style={{ color: '#10b981' }}>
                <motion.span
                  className="w-3 h-3 rounded-full"
                  style={{ background: '#10b981' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="font-semibold">Available for New Projects</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Currently accepting freelance & contract work.<br />
                Remote-first, timezone flexible (UTC+5 base).
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" style={{ color: '#ec4899' }} />
                  Open Source Contributor
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" style={{ color: '#f59e0b' }} />
                  Fast Response Time
                </span>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2"
          >
            <Card3D
              tiltFactor={3}
              scaleFactor={1.003}
              glowColor="#8b5cf6"
              className="p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0.02) 100%)',
                borderColor: 'rgba(139,92,246,0.15)',
              }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Send className="w-6 h-6" style={{ color: '#8b5cf6' }} />
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center py-16"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                      style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle className="w-10 h-10" />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground mb-6">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <Button
                      variant="outline"
                      onClick={() => setStatus('idle')}
                      className="gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            disabled={status === 'sending'}
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        </div>
                        {errors.name && (
                          <motion.p
                            id="name-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </motion.p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            disabled={status === 'sending'}
                          />
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        </div>
                        {errors.email && (
                          <motion.p
                            id="email-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Project inquiry / Collaboration / Just saying hi"
                          value={formData.subject}
                          onChange={handleChange}
                          className="pl-10"
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? 'subject-error' : undefined}
                          disabled={status === 'sending'}
                        />
                        <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      </div>
                      {errors.subject && (
                        <motion.p
                          id="subject-error"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.subject}
                        </motion.p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project, timeline, budget, or just say hello..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="resize-none"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          disabled={status === 'sending'}
                        />
                      </div>
                      {errors.message && (
                        <motion.p
                          id="message-error"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </motion.p>
                      )}
                      <p className="mt-1.5 text-xs text-muted-foreground text-right">
                        {formData.message.length}/2000 characters
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full py-4 text-lg gap-3"
                      disabled={status === 'sending'}
                      style={{
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                        border: 'none',
                        boxShadow: '0 10px 40px -10px rgba(139,92,246,0.5)',
                      }}
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to my{' '}
                      <a href="#" className="underline hover:text-primary">Privacy Policy</a>
                      . No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card3D>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Prefer direct email? <a href="mailto:aabanqureshi564@gmail.com" className="font-medium hover:text-primary transition-colors">aabanqureshi564@gmail.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import { AlertCircle } from "lucide-react";

export default ContactSection;