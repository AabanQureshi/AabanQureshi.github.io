'use client';

import React from 'react';
import { Award, GraduationCap, BookOpen, Shield, CheckCircle, ExternalLink, Star, Medal } from "lucide-react";
import { Card3D } from "@/components/ui/3d/Card3D";
import { motion } from "framer-motion";

const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    code: "AZ-900",
    date: "2024",
    credentialId: "F2C3-4A1B-9E8D",
    skills: ["Cloud Concepts", "Azure Services", "Security", "Pricing", "SLA"],
    level: "Fundamental",
    badgeColor: "#0089D6",
    logoUrl: "/certs/azure-fundamentals.svg",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/...",
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    code: "AI-900",
    date: "2024",
    credentialId: "A7B2-9C4D-1E5F",
    skills: ["AI Workloads", "ML Principles", "Computer Vision", "NLP", "Responsible AI"],
    level: "Fundamental",
    badgeColor: "#68217A",
    logoUrl: "/certs/azure-ai.svg",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/...",
  },
  {
    id: 3,
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    code: "AZ-204",
    date: "2024",
    credentialId: "D4E8-2F1A-7B3C",
    skills: ["Azure SDK", "App Service", "Functions", "Storage", "Cosmos DB", "Authentication"],
    level: "Associate",
    badgeColor: "#0078D4",
    logoUrl: "/certs/azure-developer.svg",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/...",
  },
  {
    id: 4,
    name: "Microsoft Certified: Power Platform Fundamentals",
    issuer: "Microsoft",
    code: "PL-900",
    date: "2023",
    credentialId: "E5F1-3A7B-9C2D",
    skills: ["Power Apps", "Power Automate", "Power BI", "Dataverse", "Connectors"],
    level: "Fundamental",
    badgeColor: "#742774",
    logoUrl: "/certs/power-platform.svg",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/...",
  },
  {
    id: 5,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (via Coursera)",
    code: "META-FE",
    date: "2023",
    credentialId: "META-FE-2023-ABC123",
    skills: ["React", "JavaScript", "HTML/CSS", "Version Control", "Testing", "UI/UX"],
    level: "Professional",
    badgeColor: "#1877F2",
    logoUrl: "/certs/meta-frontend.svg",
    verifyUrl: "https://coursera.org/verify/professional-cert/...",
  },
  {
    id: 6,
    name: "Microsoft Back-End Developer Professional Certificate",
    issuer: "Microsoft (via Coursera)",
    code: "MS-BE",
    date: "2023",
    credentialId: "MS-BE-2023-XYZ789",
    skills: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "APIs", "Azure"],
    level: "Professional",
    badgeColor: "#512BD4",
    logoUrl: "/certs/ms-backend.svg",
    verifyUrl: "https://coursera.org/verify/professional-cert/...",
  },
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Virtual University of Pakistan",
    period: "2021 – 2025",
    location: "Islamabad, Pakistan",
    gpa: "3.7/4.0",
    highlights: [
      "Dean's List: 6 consecutive semesters",
      "Capstone: Distributed Task Scheduler (Open Source)",
      "Relevant Coursework: Algorithms, Distributed Systems, Database Systems, Computer Networks, Software Engineering",
      "ACM Student Chapter - Vice President",
    ],
    logoUrl: "/edu/vu-logo.svg",
  },
];

const EducationCertificationsSection = () => {
  const [view, setView] = useState<'certifications' | 'education'>('certifications');
  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative" id="education">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            <Award className="w-4 h-4" style={{ color: '#f59e0b' }} />
            Credentials & Education
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Verified <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6 Microsoft certifications, Meta & Microsoft professional certificates, and a CS degree —
            continuously investing in growth.
          </p>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 bg-secondary/50 rounded-xl p-1 w-fit mx-auto"
            style={{ border: '1px solid hsl(var(--border))' }}>
            <button
              onClick={() => setView('certifications')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${view === 'certifications'
                ? 'bg-background shadow-md'
                : 'text-muted-foreground hover:text-foreground'}`}
              style={{
                border: '1px solid',
                borderColor: view === 'certifications' ? 'transparent' : 'transparent',
              }}
            >
              <Award className="w-4 h-4 inline mr-2" />
              Certifications ({certifications.length})
            </button>
            <button
              onClick={() => setView('education')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${view === 'education'
                ? 'bg-background shadow-md'
                : 'text-muted-foreground hover:text-foreground'}`}
              style={{
                border: '1px solid',
                borderColor: view === 'education' ? 'transparent' : 'transparent',
              }}
            >
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Education
            </button>
          </div>
        </motion.div>

        {view === 'certifications' ? (
          /* Certifications Grid */
          <motion.div
            key="certs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card3D
                  tiltFactor={8}
                  scaleFactor={1.02}
                  glowColor={cert.badgeColor}
                  className="p-6 h-full flex flex-col"
                  onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                  style={{
                    cursor: 'pointer',
                    background: `linear-gradient(135deg, ${cert.badgeColor}15 0%, ${cert.badgeColor}05 100%)`,
                    borderColor: `${cert.badgeColor}30`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${cert.badgeColor}20`, color: cert.badgeColor }}>
                        {cert.logoUrl ? (
                          <img src={cert.logoUrl} alt={cert.name} className="w-8 h-8" style={{ filter: `drop-shadow(0 0 8px ${cert.badgeColor})` }} />
                        ) : (
                          <Award className="w-8 h-8" style={{ color: cert.badgeColor }} />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide"
                            style={{ background: `${cert.badgeColor}20`, color: cert.badgeColor, border: `1px solid ${cert.badgeColor}30` }}>
                            {cert.level}
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs font-mono text-muted-foreground"
                            style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
                            {cert.code}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground truncate">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <motion.div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${cert.badgeColor}20`, color: cert.badgeColor }}
                      animate={{ scale: expandedCert === cert.id ? 1.1 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {expandedCert === cert.id ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <ExternalLink className="w-5 h-5" />
                      )}
                    </motion.div>
                  </div>

                  {/* Date & Credential */}
                  <div className="flex items-center justify-between text-sm mb-4 pt-4 border-t"
                    style={{ borderColor: 'hsl(var(--border))' }}>
                    <div className="flex items-center gap-2" style={{ color: cert.badgeColor }}>
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium">{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground font-mono text-xs">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                    {cert.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.08 + 0.3 + i * 0.03 }}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: `rgba(139,92,246,0.1)`,
                          color: '#8b5cf6',
                          border: '1px solid rgba(139,92,246,0.2)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Verify Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 + 0.5 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.verifyUrl, '_blank');
                    }}
                    className="w-full py-2.5 rounded-xl text-sm font-medium transition-all group flex items-center justify-center gap-2"
                    style={{
                      background: 'transparent',
                      color: cert.badgeColor,
                      border: `1px solid ${cert.badgeColor}40`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${cert.badgeColor}15`;
                      e.currentTarget.style.borderColor = cert.badgeColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = `${cert.badgeColor}40`;
                    }}
                  >
                    <Shield className="w-4 h-4" />
                    Verify Credential
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>

                  {/* Expand indicator */}
                  <motion.div
                    className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4"
                    animate={{ rotate: expandedCert === cert.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Click for verification link</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Education Cards */
          <motion.div
            key="edu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card3D
                  tiltFactor={6}
                  scaleFactor={1.01}
                  glowColor="#8b5cf6"
                  className="p-8 h-full flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0.03) 100%)',
                    borderColor: 'rgba(139,92,246,0.2)',
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(139,92,246,0.15)', color: '#8b5cf6' }}>
                      {edu.logoUrl ? (
                        <img src={edu.logoUrl} alt={edu.institution} className="w-10 h-10" />
                      ) : (
                        <GraduationCap className="w-10 h-10" style={{ color: '#8b5cf6' }} />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                        style={{ background: 'rgba(139,92,246,0.2)', color: '#8b5cf6', border: '1px solid rgba(139,92,246,0.3)' }}>
                        Degree
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-2 mb-1">{edu.degree}</h3>
                      <p className="text-lg" style={{ color: '#8b5cf6' }}>{edu.institution}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl"
                    style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.1)' }}>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Period</div>
                      <div className="font-medium text-foreground">{edu.period}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Location</div>
                      <div className="font-medium text-foreground">{edu.location}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">GPA</div>
                      <div className="font-medium text-foreground">{edu.gpa}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Status</div>
                      <div className="font-medium" style={{ color: '#10b981' }}>Completed</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6 flex-1">
                    {edu.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-xl transition-all"
                        style={{ background: 'rgba(139,92,246,0.03)', border: '1px solid transparent' }}
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                        <span className="text-sm text-foreground leading-relaxed">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Medal */}
                  <div className="flex items-center justify-center gap-2 pt-4 border-t"
                    style={{ borderColor: 'hsl(var(--border))' }}>
                    <Medal className="w-5 h-5" style={{ color: '#f59e0b' }} />
                    <span className="text-sm font-medium text-muted-foreground">Graduated with Honors</span>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Microsoft Certs", value: "6", icon: Award, color: "#0089D6" },
            { label: "Professional Certs", value: "2", icon: BookOpen, color: "#1877F2" },
            { label: "Total Credentials", value: "8", icon: Shield, color: "#8b5cf6" },
            { label: "Years Learning", value: "4+", icon: GraduationCap, color: "#10b981" },
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
import { ChevronRight } from "lucide-react";

export default EducationCertificationsSection;