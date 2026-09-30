'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas3D, ParticleFieldCanvas, FloatingGeometry, PostProcessing } from '@/components/three';
import { useGPUDetect, getQualityPreset } from '@/hooks/useGPUDetect';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Github, Linkedin, Mail, MapPin, Download, Sparkles, ArrowRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/AabanQureshi', label: 'GitHub', color: '#ffffff' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aaban-qureshi', label: 'LinkedIn', color: '#0a66c2' },
  { icon: Mail, href: 'mailto:aabanqureshi564@gmail.com', label: 'Email', color: '#ea4335' },
];

const contactInfo = [
  { icon: MapPin, text: 'Islamabad, Pakistan', color: '#06b6d4' },
  { icon: Mail, text: 'aabanqureshi564@gmail.com', color: '#8b5cf6' },
];

export function Hero3D() {
  const prefersReduced = useReducedMotion();
  const { tier } = useGPUDetect();
  const qualityPreset = getQualityPreset(tier);
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted w-3/4 mx-auto rounded" />
            <div className="h-4 bg-muted w-1/2 mx-auto rounded" />
            <div className="h-12 bg-muted w-1/4 mx-auto rounded mt-8" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-6 py-20" id="home">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Canvas3D
          frameloop={prefersReduced ? 'never' : 'demand'}
          className="w-full h-full"
          style={{ filter: prefersReduced ? 'none' : undefined }}
        >
          <color attach="background" args={['#0d1017']} />
          <fog attach="fog" args={['#0d1017', 0.02, 50]} />

          {/* Lights */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 7]} intensity={1.2} />
          <pointLight position={[-5, 5, 5]} color="#8b5cf6" intensity={0.5} decay={2} />
          <pointLight position={[5, -5, 5]} color="#06b6d4" intensity={0.4} decay={2} />

          {/* Particle Field */}
          <ParticleFieldCanvas
            quality={tier as 'high' | 'medium' | 'low'}
            reducedMotion={prefersReduced}
            size={0.018}
            speed={0.25}
            colorA="#8b5cf6"
            colorB="#06b6d4"
            colorC="#10b981"
            spread={10}
            mouseInfluence={0.4}
            scrollInfluence={0.05}
          />

          {/* Floating Geometry */}
          <FloatingGeometry
            quality={tier as 'high' | 'medium' | 'low'}
            reducedMotion={prefersReduced}
            colors={['#8b5cf6', '#06b6d4']}
          />

          {/* Post Processing */}
          <PostProcessing
            enabled={qualityPreset.bloom && !prefersReduced}
            bloomStrength={0.25}
            bloomRadius={0.4}
            bloomThreshold={0.85}
            chromaticAberration={0.002}
            vignette={0.2}
          />
        </Canvas3D>

        {/* Static fallback for reduced motion */}
        <AnimatePresence mode="wait">
          {prefersReduced && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(6,182,212,0.08) 50%, rgba(16,185,129,0.05) 100%)',
              }}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 cursor-default"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <motion.span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-foreground">Available for Contract / Freelance</span>
            <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full" style={{ background: 'rgba(139,92,246,0.2)' }}>
              .NET 8/9 • Azure • React
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{ lineHeight: 1.05 }}
          >
            <span className="block text-foreground">Aaban Rehman</span>
            <span className="block gradient-text" style={{ fontSize: '0.9em' }}>
              Full-Stack <span className="text-primary">.NET</span> Engineer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="mb-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable systems with <span className="text-primary font-medium">ASP.NET Core</span>,{' '}
            <span className="text-accent font-medium">Azure</span> &{' '}
            <span className="text-emerald font-medium">React</span>.{' '}
            <span className="font-medium">6+ Microsoft Certifications.</span>{' '}
            Open to freelance & contract opportunities.
          </motion.p>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="mb-10 flex flex-wrap items-center justify-center gap-2"
          >
            {[
              { label: '.NET 8/9', color: '#512BD4' },
              { label: 'ASP.NET Core', color: '#512BD4' },
              { label: 'C#', color: '#239120' },
              { label: 'EF Core', color: '#512BD4' },
              { label: 'SQL Server', color: '#CC2927' },
              { label: 'Azure', color: '#0089D6' },
              { label: 'React', color: '#61DAFB', textColor: '#000' },
              { label: 'TypeScript', color: '#3178C6' },
              { label: 'Blazor', color: '#512BD4' },
              { label: 'Clean Architecture', color: '#06b6d4' },
              { label: 'CQRS', color: '#10b981' },
            ].map((tech, i) => (
              <motion.span
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.3, ease: 'easeOut' }}
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: `${tech.color}20`,
                  color: tech.textColor || tech.color,
                  border: `1px solid ${tech.color}40`,
                }}
              >
                {tech.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group w-full sm:w-auto px-8 py-4 text-lg"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                border: 'none',
                boxShadow: '0 10px 40px -10px rgba(139,92,246,0.5)',
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal className="mr-2 h-5 w-5" />
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg group"
              style={{ borderColor: 'rgba(139,92,246,0.5)', color: '#8b5cf6' }}
              onClick={() => window.open('Aaban_Rehman_CV.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                className="group flex items-center gap-2 px-4 py-2 rounded-xl transition-all"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: social.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${social.color}20`;
                  e.currentTarget.style.borderColor = `${social.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <social.icon className="h-5 w-5" />
                <span className="text-sm font-medium hidden sm:inline">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            {contactInfo.map((info, i) => (
              <span key={info.text} className="flex items-center gap-2" style={{ color: info.color }}>
                <info.icon className="h-4 w-4" />
                {info.text}
              </span>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'currentColor' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Glass utility class
if (typeof document !== 'undefined' && !document.getElementById('hero3d-styles')) {
  const style = document.createElement('style');
  style.id = 'hero3d-styles';
  style.textContent = `
    .glass {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .gradient-text {
      background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;
  document.head.appendChild(style);
}

export default Hero3D;
