'use client';

import React from 'react';
import { Briefcase, Code2, Cloud, Globe, Database, Server, Users, Award, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { Card3D } from "@/components/ui/3d/Card3D";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Full-Stack .NET Developer",
    company: "Freelance / Contract",
    location: "Remote",
    period: "Jan 2024 – Present",
    type: "current",
    description: "Building scalable web applications and APIs for clients across fintech, healthcare, and e-commerce sectors. Specializing in clean architecture, cloud-native solutions, and modern frontend experiences.",
    achievements: [
      "Architected and delivered 5+ production applications using ASP.NET Core 8/9 with Clean Architecture",
      "Implemented CI/CD pipelines reducing deployment time by 70% using GitHub Actions & Azure DevOps",
      "Designed microservices with gRPC communication, RabbitMQ event bus, and distributed caching",
      "Built real-time features with SignalR achieving sub-100ms latency for 10k+ concurrent users",
      "Optimized EF Core queries reducing database load by 60% through compiled queries & batching",
      "Mentored junior developers on SOLID principles, testing strategies, and domain-driven design",
    ],
    technologies: [
      "C#", "ASP.NET Core", "Blazor", "React", "TypeScript",
      "EF Core", "SQL Server", "PostgreSQL", "Redis", "RabbitMQ",
      "Docker", "Kubernetes", "Azure", "GitHub Actions", "Terraform",
    ],
    links: [
      { label: "Case Studies", href: "#projects" },
      { label: "GitHub", href: "https://github.com/AabanQureshi" },
    ],
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "Tech Solutions Inc.",
    location: "Islamabad, Pakistan",
    period: "Jun 2023 – Dec 2023",
    type: "past",
    description: "Contributed to enterprise-grade .NET applications in an agile team environment. Gained hands-on experience with full SDLC, code reviews, and production deployments.",
    achievements: [
      "Developed RESTful APIs serving 50k+ daily requests with 99.9% uptime",
      "Implemented authentication/authorization with JWT, IdentityServer4, and OAuth2",
      "Built responsive Blazor Server dashboards with real-time data visualization",
      "Wrote comprehensive unit/integration tests achieving 85%+ code coverage",
      "Participated in code reviews and improved team velocity through pair programming",
      "Automated database migrations and seeding for multi-environment deployments",
    ],
    technologies: [
      "C#", "ASP.NET Core", "Blazor Server", "EF Core", "SQL Server",
      "IdentityServer4", "xUnit", "Moq", "Docker", "Azure DevOps",
    ],
    links: [],
  },
  {
    id: 3,
    role: "Junior .NET Developer (Part-time)",
    company: "StartupXYZ",
    location: "Remote",
    period: "Jan 2022 – May 2023",
    type: "past",
    description: "Early-career role building MVPs and prototypes for startup clients. Rapid iteration, direct client communication, and end-to-end feature ownership.",
    achievements: [
      "Built 3 MVPs from concept to deployment within 4-6 week cycles",
      "Integrated payment processing (Stripe) and third-party APIs",
      "Implemented background job processing for email, reporting, and data sync",
      "Designed database schemas and optimized slow queries",
      "Collaborated directly with founders on product strategy and technical decisions",
    ],
    technologies: [
      "C#", "ASP.NET Core", "Razor Pages", "EF Core", "SQLite/SQL Server",
      "Stripe API", "Hangfire", "Bootstrap", "jQuery", "Git",
    ],
    links: [],
  },
];

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative" id="experience">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            <Briefcase className="w-4 h-4" style={{ color: '#8b5cf6' }} />
            Professional Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Where I've <span className="gradient-text">Made Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startup MVPs to enterprise systems — delivering production-grade .NET solutions
            across domains and team sizes.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(180deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)' }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative pl-20 pb-16"
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-4 flex-shrink-0 z-10"
                style={{
                  background: exp.type === 'current' ? '#10b981' : 'hsl(var(--background))',
                  borderColor: exp.type === 'current' ? '#10b981' : '#8b5cf6',
                  boxShadow: exp.type === 'current' ? '0 0 20px #10b981, 0 0 40px #10b98180' : '0 0 0 4px hsl(var(--background))',
                }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.2 }}
              >
                {exp.type === 'current' && (
                  <motion.div
                    className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-full"
                    style={{ border: '2px solid #10b981', opacity: 0.6 }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>

              {/* Connecting line to next */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-10 bottom-16 w-0.5" style={{ background: 'hsl(var(--border))' }} />
              )}

              {/* Experience Card */}
              <Card3D
                tiltFactor={5}
                scaleFactor={1.005}
                glowColor={exp.type === 'current' ? '#10b981' : '#8b5cf6'}
                className="p-6 md:p-8"
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                style={{ cursor: 'pointer' }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.span
                        className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                        style={{
                          background: exp.type === 'current' ? 'rgba(16,185,129,0.2)' : 'rgba(139,92,246,0.2)',
                          color: exp.type === 'current' ? '#10b981' : '#8b5cf6',
                          border: exp.type === 'current' ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(139,92,246,0.3)',
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 500 }}
                      >
                        {exp.type === 'current' ? 'Current' : 'Past'}
                      </motion.span>
                      {exp.type === 'current' && (
                        <motion.div
                          className="flex items-center gap-1 text-xs font-medium"
                          style={{ color: '#10b981' }}
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
                          Now
                        </motion.div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-lg" style={{ color: '#8b5cf6' }}>{exp.company}</p>
                  </div>

                  <div className="flex flex-col items-end md:items-end gap-2 text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Globe className="w-4 h-4" style={{ color: '#06b6d4' }} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" style={{ color: '#f59e0b' }} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  className="text-muted-foreground mb-6 leading-relaxed"
                >
                  {exp.description}
                </motion.p>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="space-y-3 mb-6"
                >
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.5 + i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-xl transition-all group"
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
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                      <span className="text-sm text-foreground leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.6 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {exp.technologies.slice(0, 8).map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.6 + i * 0.03 }}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{
                        background: 'rgba(139,92,246,0.1)',
                        color: '#8b5cf6',
                        border: '1px solid rgba(139,92,246,0.2)',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {exp.technologies.length > 8 && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.7 }}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-muted-foreground"
                      style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)' }}
                    >
                      +{exp.technologies.length - 8} more
                    </motion.span>
                  )}
                </motion.div>

                {/* Links */}
                {exp.links.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.7 }}
                    className="flex items-center gap-4 pt-4 border-t"
                    style={{ borderColor: 'hsl(var(--border))' }}
                  >
                    {exp.links.map((link, i) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.7 + i * 0.1 }}
                        className="flex items-center gap-1.5 text-sm font-medium transition-colors group"
                        style={{ color: '#8b5cf6' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#8b5cf6'}
                      >
                        {link.label}
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                    ))}
                  </motion.div>
                )}

                {/* Expand indicator */}
                <motion.div
                  className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4 pt-4 border-t"
                  style={{ borderColor: 'hsl(var(--border))' }}
                  animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Click to expand</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Total Experience", value: "3+ Years", icon: Briefcase, color: "#8b5cf6" },
            { label: "Production Apps", value: "10+", icon: Server, color: "#06b6d4" },
            { label: "Lines of Code", value: "500k+", icon: Code2, color: "#10b981" },
            { label: "Team Size Led", value: "5", icon: Users, color: "#f59e0b" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass p-6 rounded-2xl text-center hover-lift"
            >
              <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `${stat.color}20`, color: stat.color }}>
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import { useState } from 'react';

export default ExperienceSection;