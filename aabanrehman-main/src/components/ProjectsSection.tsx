'use client';

import React from 'react';
import { Github, ExternalLink, Star, Database, Server, Cloud, Globe, Shield, Zap, Users, Code2 } from "lucide-react";
import { Card3D } from "@/components/ui/3d/Card3D";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "FinTech Payment Gateway",
    tagline: "High-throughput payment processing with multi-provider support",
    description: "Built a production-grade payment gateway handling 10k+ transactions/day with support for Stripe, PayPal, and local payment providers. Features include fraud detection, webhook management, retry logic, and comprehensive audit logging.",
    longDescription: "A complete payment orchestration platform built with ASP.NET Core 8, featuring clean architecture, domain-driven design, and event-driven microservices. The system processes payments through multiple providers with automatic failover, implements 3D Secure 2.0, and provides real-time dashboards for merchants. Built with PCI-DSS compliance in mind.",
    type: "fullstack",
    status: "production",
    technologies: ["C#", "ASP.NET Core 8", "EF Core", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Kubernetes", "Azure", "Blazor", "TypeScript", "SignalR"],
    highlights: [
      "99.99% uptime SLA achieved",
      "Sub-200ms p99 latency",
      "PCI-DSS Level 1 ready architecture",
      "Multi-region deployment with auto-failover",
    ],
    stats: { stars: 247, forks: 38, issues: 12 },
    links: { github: "https://github.com/AabanQureshi/payment-gateway", demo: "https://paygateway.demo.com" },
    featured: true,
  },
  {
    id: 2,
    name: "E-Commerce Microservices Platform",
    tagline: "Scalable e-commerce with inventory, orders, and customer management",
    description: "Developed a cloud-native e-commerce platform using microservices architecture. Includes product catalog, inventory management, order processing, customer accounts, and admin dashboard. Deployed on AKS with full observability.",
    longDescription: "A comprehensive e-commerce solution built as 6 independent microservices communicating via gRPC and event-driven messaging. Features include: catalog service with elasticsearch-powered search, inventory with reservation patterns, order saga orchestration, customer identity with B2C support, and a Blazor WebAssembly admin portal. Implements CQRS with Event Sourcing for order domain.",
    type: "backend",
    status: "production",
    technologies: ["C#", "ASP.NET Core", "gRPC", "MassTransit", "PostgreSQL", "Elasticsearch", "Redis", "Docker", "Kubernetes", "Azure", "Blazor WASM", "MudBlazor"],
    highlights: [
      "6 microservices, independently deployable",
      "Event-sourced order aggregate",
      "Horizontal scaling to 100k+ products",
      "Full distributed tracing with OpenTelemetry",
    ],
    stats: { stars: 189, forks: 24, issues: 8 },
    links: { github: "https://github.com/AabanQureshi/ecommerce-microservices", demo: null },
    featured: true,
  },
  {
    id: 3,
    name: "Real-Time Collaboration Dashboard",
    tagline: "Multi-user collaborative workspace with live cursors and presence",
    description: "Built a Figma-like collaborative editing experience for internal tools. Real-time presence, cursor positions, selection sharing, and conflict-free editing using CRDTs. WebSocket infrastructure supporting 500+ concurrent users per document.",
    longDescription: "A real-time collaboration engine built on SignalR with Yjs CRDT implementation. Supports collaborative text editing, diagramming, and whiteboarding. Features include: user presence with avatars, live cursor tracking, selection broadcasting, offline-first sync, and granular permission system. Backend uses Azure SignalR Service for scale.",
    type: "fullstack",
    status: "production",
    technologies: ["C#", "ASP.NET Core", "SignalR", "Yjs", "React", "TypeScript", "Azure SignalR", "Redis", "PostgreSQL", "Docker"],
    highlights: [
      "500+ concurrent users per document",
      "Sub-50ms end-to-end latency",
      "Offline-first with conflict resolution",
      "Granular role-based access control",
    ],
    stats: { stars: 312, forks: 45, issues: 15 },
    links: { github: "https://github.com/AabanQureshi/realtime-collab", demo: "https://collab.demo.com" },
    featured: true,
  },
  {
    id: 4,
    name: "AI-Powered Code Review Assistant",
    tagline: "Automated PR analysis with Azure OpenAI integration",
    description: "Created a GitHub App that analyzes pull requests using GPT-4, providing security scanning, performance suggestions, and code quality feedback. Integrates with Azure DevOps and GitHub Actions.",
    longDescription: "An intelligent code review bot that runs on every PR, analyzing changes for security vulnerabilities, performance anti-patterns, and maintainability issues. Uses Azure OpenAI with fine-tuned prompts for .NET codebases. Features include: incremental analysis (only changed files), custom rule engine, SARIF output for GitHub Security tab, and Slack/Teams notifications.",
    type: "tool",
    status: "beta",
    technologies: ["C#", "ASP.NET Core", "Azure OpenAI", "GitHub API", "Octokit", "Roslyn", "Docker", "Azure Container Apps", "TypeScript", "React"],
    highlights: [
      "Analyzes PRs in <30 seconds",
      "60+ built-in rules for .NET",
      "Custom rule DSL for teams",
      "Integrates with GitHub Checks API",
    ],
    stats: { stars: 456, forks: 67, issues: 23 },
    links: { github: "https://github.com/AabanQureshi/ai-code-review", demo: null },
    featured: false,
  },
  {
    id: 5,
    name: "Distributed Task Scheduler",
    tagline: "Cron-like job scheduler with horizontal scaling and exactly-once semantics",
    description: "Built a distributed task scheduler supporting delayed jobs, recurring schedules, retries with exponential backoff, and distributed locking. Handles 1M+ jobs/day with zero data loss.",
    longDescription: "A robust job scheduling system inspired by Hangfire but built for cloud-native environments. Uses PostgreSQL for persistence, distributed locks for leader election, and supports both cron expressions and interval-based scheduling. Features: job chaining, batching, priority queues, dead letter handling, and a Blazor management UI.",
    type: "backend",
    status: "open-source",
    technologies: ["C#", "ASP.NET Core", "PostgreSQL", "Redis", "Docker", "Blazor", "SignalR", "Quartz.NET"],
    highlights: [
      "Exactly-once execution guarantee",
      "Horizontal scaling with leader election",
      "1M+ jobs/day on 3-node cluster",
      "Web-based management dashboard",
    ],
    stats: { stars: 523, forks: 89, issues: 18 },
    links: { github: "https://github.com/AabanQureshi/distributed-scheduler", demo: null },
    featured: false,
  },
  {
    id: 6,
    name: "Healthcare Patient Portal",
    tagline: "HIPAA-compliant patient management with telehealth integration",
    description: "Developed a comprehensive patient portal for a healthcare provider. Features appointment scheduling, medical records access, secure messaging, telehealth video calls, prescription management, and insurance claims.",
    longDescription: "A full-stack healthcare application built with strict security and compliance requirements. Implements FHIR-standard data models, end-to-end encryption, audit trails for all PHI access, and role-based access control. Telehealth integration uses WebRTC with TURN servers. Blazor Server for SEO-critical pages, Blazor WASM for interactive dashboard.",
    type: "fullstack",
    status: "production",
    technologies: ["C#", "ASP.NET Core", "Blazor", "EF Core", "SQL Server", "Azure", "WebRTC", "Twilio Video", "SendGrid", "Docker", "Azure Key Vault"],
    highlights: [
      "HIPAA compliant with BAA",
      "FHIR R4 data model",
      "10k+ active patients",
      "99.9% uptime since launch",
    ],
    stats: { stars: 0, forks: 0, issues: 0 },
    links: { github: null, demo: null },
    featured: false,
  },
];

const typeLabels = {
  fullstack: { label: "Full-Stack", color: "#8b5cf6", icon: Code2 },
  backend: { label: "Backend", color: "#06b6d4", icon: Server },
  frontend: { label: "Frontend", color: "#10b981", icon: Globe },
  tool: { label: "Tool/Lib", color: "#f59e0b", icon: Zap },
};

const statusLabels = {
  production: { label: "Production", color: "#10b981", icon: CheckCircle },
  beta: { label: "Beta", color: "#f59e0b", icon: Shield },
  "open-source": { label: "Open Source", color: "#ec4899", icon: Github },
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'backend' | 'frontend' | 'tool'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter);

  return (
    <section className="py-24 px-6 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium"
            style={{ background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.3)' }}>
            <Code2 className="w-4 h-4" style={{ color: '#8b5cf6' }} />
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Code</span> That Ships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production systems, open-source tools, and client work — all built with the same
            attention to architecture, testing, and maintainability.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All', icon: null },
              { id: 'fullstack', label: 'Full-Stack', icon: Code2 },
              { id: 'backend', label: 'Backend', icon: Server },
              { id: 'frontend', label: 'Frontend', icon: Globe },
              { id: 'tool', label: 'Tools', icon: Zap },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  filter === tab.id
                    ? 'shadow-lg'
                    : 'bg-transparent hover:bg-secondary'
                }`}
                style={{
                  border: '1px solid',
                  borderColor: filter === tab.id
                    ? (tab.id === 'all' ? '#8b5cf6' : typeLabels[tab.id as keyof typeof typeLabels].color)
                    : 'hsl(var(--border))',
                  color: filter === tab.id
                    ? (tab.id === 'all' ? '#8b5cf6' : typeLabels[tab.id as keyof typeof typeLabels].color)
                    : 'hsl(var(--foreground))',
                }}
              >
                {tab.icon && <tab.icon className="w-4 h-4" />}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Card3D
                tiltFactor={project.featured ? 10 : 6}
                scaleFactor={1.015}
                glowColor={typeLabels[project.type].color}
                className="h-full p-6 flex flex-col"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                style={{
                  cursor: 'pointer',
                  background: `linear-gradient(135deg, ${typeLabels[project.type].color}15 0%, ${typeLabels[project.type].color}05 100%)`,
                  borderColor: `${typeLabels[project.type].color}30`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.span
                        className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                        style={{
                          background: `${typeLabels[project.type].color}20`,
                          color: typeLabels[project.type].color,
                          border: `1px solid ${typeLabels[project.type].color}30`,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.08 + 0.3, type: 'spring', stiffness: 500 }}
                      >
                        {typeLabels[project.type].label}
                      </motion.span>
                      <motion.span
                        className="px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                        style={{
                          background: `${statusLabels[project.status].color}20`,
                          color: statusLabels[project.status].color,
                          border: `1px solid ${statusLabels[project.status].color}30`,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.08 + 0.35, type: 'spring', stiffness: 500 }}
                      >
                        {React.createElement(statusLabels[project.status].icon, { className: "inline w-3 h-3" })}
                        {statusLabels[project.status].label}
                      </motion.span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 truncate">{project.name}</h3>
                  </div>
                  {project.featured && (
                    <motion.div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Star className="w-5 h-5 text-white" />
                    </motion.div>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-foreground/80 mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 + 0.4 + i * 0.05 }}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 6).map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.08 + 0.5 + i * 0.02 }}
                      className="px-2 py-0.5 rounded text-xs font-medium"
                      style={{
                        background: 'rgba(139,92,246,0.1)',
                        color: '#8b5cf6',
                        border: '1px solid rgba(139,92,246,0.2)',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 6 && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.08 + 0.6 }}
                      className="px-2 py-0.5 rounded text-xs font-medium text-muted-foreground"
                      style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)' }}
                    >
                      +{project.technologies.length - 6}
                    </motion.span>
                  )}
                </div>

                {/* Footer - Stats & Links */}
                <div className="flex items-center justify-between pt-4 border-t mt-auto"
                  style={{ borderColor: 'hsl(var(--border))' }}
                >
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3.5 h-3.5" />
                        {project.stats.stars}
                      </a>
                    )}
                    <span className="flex items-center gap-1" style={{ color: '#f59e0b' }}>
                      <Star className="w-3.5 h-3.5" />
                      {project.stats.forks}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl transition-all group"
                        style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#8b5cf6';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(139,92,246,0.1)';
                          e.currentTarget.style.color = '#8b5cf6';
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl transition-all group"
                        style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#06b6d4';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(6,182,212,0.1)';
                          e.currentTarget.style.color = '#06b6d4';
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Expand indicator */}
                <motion.div
                  className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4"
                  animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Click for details</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            style={{ borderColor: 'rgba(139,92,246,0.5)', color: '#8b5cf6' }}
            onClick={() => window.open('https://github.com/AabanQureshi', '_blank')}
          >
            <Github className="w-5 h-5" />
            View All on GitHub
            <ExternalLink className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { CheckCircle, ChevronRight } from "lucide-react";

export default ProjectsSection;