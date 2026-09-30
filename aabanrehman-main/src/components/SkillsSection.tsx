'use client';

import React from 'react';
import { Code2, Database, Cloud, Layers, Server, Cpu, Globe, Shield, Terminal, Network } from "lucide-react";
import {
  SiDotnet,
  SiReact,
  SiGit,
  SiBlazor,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMysql,
  SiAmazon,
  SiFirebase,
  SiStripe,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiGraphql,
  SiNginx,
  SiLinux,
} from "react-icons/si";
import { Card3D } from "@/components/ui/3d/Card3D";
import { motion } from "framer-motion";

// Skill categories with icons and colors
const skillCategories = [
  {
    id: 'backend',
    label: 'Backend',
    icon: Code2,
    iconColor: '#8b5cf6',
    bgGradient: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 100%)',
    borderColor: 'rgba(139,92,246,0.3)',
    skills: [
      { name: "C#", icon: SiDotnet, color: "#239120" },
      { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
      { name: "Entity Framework Core", icon: SiDotnet, color: "#512BD4" },
      { name: "Clean Architecture", icon: Layers, color: "#06b6d4" },
      { name: "CQRS / MediatR", icon: Network, color: "#10b981" },
      { name: "Domain-Driven Design", icon: Cpu, color: "#f59e0b" },
      { name: "Microservices", icon: Server, color: "#8b5cf6" },
      { name: "Minimal APIs", icon: Terminal, color: "#06b6d4" },
      { name: "SignalR", icon: Globe, color: "#10b981" },
      { name: "Background Jobs (Hangfire)", icon: Cpu, color: "#f59e0b" },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Globe,
    iconColor: '#06b6d4',
    bgGradient: 'linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0.05) 100%)',
    borderColor: 'rgba(6,182,212,0.3)',
    skills: [
      { name: "Blazor", icon: SiBlazor, color: "#512BD4" },
      { name: "React", icon: SiReact, color: "#61DAFB", textColor: "#000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", textColor: "#000" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiCss3, color: "#06b6d4" },
      { name: "Razor Pages", icon: SiBlazor, color: "#512BD4" },
      { name: "Fluent UI", icon: Globe, color: "#0078d4" },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    iconColor: '#10b981',
    bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)',
    borderColor: 'rgba(16,185,129,0.3)',
    skills: [
      { name: "SQL Server", icon: Database, color: "#CC2927" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "EF Core", icon: SiDotnet, color: "#512BD4" },
      { name: "Dapper", icon: Terminal, color: "#06b6d4" },
      { name: "Migrations", icon: Database, color: "#8b5cf6" },
      { name: "Query Optimization", icon: Cpu, color: "#f59e0b" },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    iconColor: '#f59e0b',
    bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)',
    borderColor: 'rgba(245,158,11,0.3)',
    skills: [
      { name: "Azure", icon: Cloud, color: "#0089D6" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "GitHub Actions", icon: SiGit, color: "#F05032" },
      { name: "Azure DevOps", icon: Cloud, color: "#0078D4" },
      { name: "CI/CD Pipelines", icon: Terminal, color: "#10b981" },
      { name: "Terraform", icon: Layers, color: "#623CE4" },
      { name: "Linux", icon: SiLinux, color: "#FCC624", textColor: "#000" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
    ],
  },
  {
    id: 'messaging',
    label: 'Messaging & API',
    icon: Network,
    iconColor: '#ec4899',
    bgGradient: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(236,72,153,0.05) 100%)',
    borderColor: 'rgba(236,72,153,0.3)',
    skills: [
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
      { name: "gRPC", icon: Globe, color: "#06b6d4" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "REST APIs", icon: Globe, color: "#8b5cf6" },
      { name: "OpenAPI/Swagger", icon: Shield, color: "#85EA2D" },
      { name: "Rate Limiting", icon: Shield, color: "#f59e0b" },
      { name: "Authentication (JWT/OAuth)", icon: Shield, color: "#10b981" },
      { name: "API Versioning", icon: Code2, color: "#06b6d4" },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Integrations',
    icon: Terminal,
    iconColor: '#6366f1',
    bgGradient: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0.05) 100%)',
    borderColor: 'rgba(99,102,241,0.3)',
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Visual Studio", icon: Terminal, color: "#5C2D91" },
      { name: "VS Code", icon: Code2, color: "#007ACC" },
      { name: "JetBrains Rider", icon: Cpu, color: "#000000" },
      { name: "Postman", icon: Globe, color: "#FF6C37" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", textColor: "#000" },
      { name: "Stripe", icon: SiStripe, color: "#008CDD" },
      { name: "Serilog", icon: Terminal, color: "#8b5cf6" },
      { name: "xUnit / NUnit", icon: Shield, color: "#10b981" },
      { name: "OpenTelemetry", icon: Globe, color: "#06b6d4" },
    ],
  },
];

// All individual skills for the tag cloud view
const allSkills = skillCategories.flatMap(cat => cat.skills);

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'bento' | 'grid'>('bento');

  return (
    <section className="py-24 px-6 relative" id="skills">
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
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium"
            style={{ background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.3)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#8b5cf6' }} />
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across the full stack — from cloud infrastructure to pixel-perfect UI.
            Primary focus: <span className="font-medium text-primary">.NET Ecosystem</span> & <span className="font-medium text-accent">Modern Web</span>.
          </p>

          {/* View Toggle */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setViewMode('bento')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${viewMode === 'bento'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-transparent hover:bg-secondary'}`}
              style={{
                border: '1px solid',
                borderColor: viewMode === 'bento' ? 'transparent' : 'hsl(var(--border))',
              }}
            >
              Bento Grid
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${viewMode === 'grid'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-transparent hover:bg-secondary'}`}
              style={{
                border: '1px solid',
                borderColor: viewMode === 'grid' ? 'transparent' : 'hsl(var(--border))',
              }}
            >
              Tag Cloud
            </button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${!activeCategory
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-transparent hover:bg-secondary'}`}
              style={{
                border: '1px solid',
                borderColor: !activeCategory ? 'transparent' : 'hsl(var(--border))',
              }}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'shadow-lg'
                    : 'bg-transparent hover:bg-secondary'
                }`}
                style={{
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? cat.iconColor : 'hsl(var(--border))',
                  color: activeCategory === cat.id ? cat.iconColor : 'hsl(var(--foreground))',
                }}
              >
                <cat.icon className="w-4 h-4" style={{ color: cat.iconColor }} />
                {cat.label}
              </button>
            ))}
          </div>

          {viewMode === 'bento' ? (
            /* Bento Grid View */
            <motion.div
              key="bento"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bento-grid"
              style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, minmax(220px, auto))' }}
            >
              {skillCategories
                .filter(cat => !activeCategory || cat.id === activeCategory)
                .map((cat, catIndex) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIndex * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bento-item span-2 tall"
                    style={{
                      gridColumn: cat.id === 'backend' || cat.id === 'frontend' ? 'span 2' : 'span 2',
                      gridRow: cat.id === 'backend' || cat.id === 'frontend' ? 'span 2' : undefined,
                    }}
                  >
                    <Card3D
                      tiltFactor={8}
                      scaleFactor={1.01}
                      glowColor={cat.iconColor}
                      className="h-full p-6"
                      style={{
                        background: cat.bgGradient,
                        borderColor: cat.borderColor,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {/* Category Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                            style={{ background: `${cat.iconColor}20`, color: cat.iconColor }}>
                            <cat.icon className="w-6 h-6" style={{ color: cat.iconColor }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{cat.label}</h3>
                            <p className="text-xs text-muted-foreground">{cat.skills.length} Technologies</p>
                          </div>
                        </div>
                        <span className="text-2xl font-bold" style={{ color: `${cat.iconColor}30` }}>
                          {cat.skills.length}+
                        </span>
                      </div>

                      {/* Skills List */}
                      <div className="flex-1 flex flex-wrap gap-2">
                        {cat.skills.map((skill, i) => (
                          <motion.span
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: catIndex * 0.08 + i * 0.03, duration: 0.3 }}
                            className="px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-default group"
                            style={{
                              background: `${skill.color}15`,
                              color: skill.textColor || skill.color,
                              border: `1px solid ${skill.color}30`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = `${skill.color}30`;
                              e.currentTarget.style.borderColor = `${skill.color}60`;
                              e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = `${skill.color}15`;
                              e.currentTarget.style.borderColor = `${skill.color}30`;
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            <skill.icon className="inline w-3 h-3 mr-1.5" style={{ color: skill.textColor || skill.color, verticalAlign: 'middle' }} />
                            {skill.name}
                          </motion.span>
                        ))}
                      </div>
                    </Card3D>
                  </motion.div>
                ))}
            </motion.div>
          ) : (
            /* Tag Cloud View */
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {allSkills
                .filter(skill => !activeCategory || skillCategories.find(c => c.id === activeCategory)?.skills.includes(skill))
                .map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-default group"
                    style={{
                      background: `${skill.color}15`,
                      color: skill.textColor || skill.color,
                      border: `1px solid ${skill.color}30`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${skill.color}30`;
                      e.currentTarget.style.borderColor = `${skill.color}60`;
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                      e.currentTarget.style.boxShadow = `0 8px 20px ${skill.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${skill.color}15`;
                      e.currentTarget.style.borderColor = `${skill.color}30`;
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <skill.icon className="inline w-4 h-4 mr-2" style={{ color: skill.textColor || skill.color, verticalAlign: 'middle' }} />
                    {skill.name}
                  </motion.span>
                ))}
            </motion.div>
          )}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Years Experience", value: "3+", icon: Code2, color: "#8b5cf6" },
            { label: "Projects Delivered", value: "15+", icon: Server, color: "#06b6d4" },
            { label: "Technologies", value: "40+", icon: Layers, color: "#10b981" },
            { label: "Certifications", value: "6+", icon: Shield, color: "#f59e0b" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass p-6 rounded-2xl text-center"
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

export default SkillsSection;