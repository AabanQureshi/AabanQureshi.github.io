import { useState, type FormEvent } from 'react';

import { ArrowUpRight, ArrowDown, Plus, Minus, Menu, X, Github, Linkedin, Check, Layers3, Download, BrainCircuit, Workflow } from 'lucide-react';

import { emailConfigured, sendPortfolioEmail } from '@/lib/portfolio-email';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import { projects, certificates, experience, profile, services, resume, projectSlug, type Project } from '@/content';

import { FeedbackSection } from './PortfolioPages';

import './portfolio.css';

import { ProjectGallery } from './ProjectGallery';
import { CertificateArtwork } from './CertificateArtwork';

const email = profile.email;

function ProfilePortrait() {

  const [failedPhoto, setFailedPhoto] = useState<string | null>(null);

  if (!profile.showPhoto || !profile.photo || failedPhoto === profile.photo) return null;

  return <div className="portrait-stage"><span className="portrait-orbit" aria-hidden="true" /><div className="hero-portrait"><img src={profile.photo} alt={profile.photoAlt} width={440} height={550} fetchPriority="high" onError={() => setFailedPhoto(profile.photo)} /></div><div className="technology-float float-dotnet"><span aria-hidden="true"><BrainCircuit size={22} /></span><div><b>AI engineering</b><small>Models meet real systems</small></div></div><div className="technology-float float-cloud"><span aria-hidden="true"><Workflow size={22} /></span><div><b>AI workflows</b><small>Connect. Review. Automate.</small></div></div><div className="portrait-stack" aria-label="Core technologies"><span>Ollama</span><span>.NET 8 / .NET 9</span><span>Azure</span></div></div>;

}

function ProjectVisual({ kind }: { kind: string }) {

  return <div className={`project-visual visual-${kind}`} aria-hidden="true">

    {kind === 'invoice' ? <div className="invoice-art"><div className="mini-sidebar"><span className="mini-logo">s.</span><i /><i /><i /><i /></div><div className="mini-dashboard"><div className="mini-heading"><b>Overview</b><span>This month</span></div><span className="mini-caption">Your business, in balance</span><div className="mini-metrics"><div><span>Invoiced</span><b>24,800</b></div><div><span>Collected</span><b>21,450</b></div></div><div className="bar-chart">{[36,52,43,66,57,85,70,94,80,100,88,115].map((h,i) => <i key={i} style={{ height: h }} />)}</div><div className="mini-row"><span>Recent invoices</span><span>View all</span></div><div className="mini-row"><span>Brand identity project</span><span className="mini-paid">Paid</span></div></div><div className="floating-receipt"><Check size={16} /><span>Invoice processed</span></div></div>

      : kind === 'quiz' ? <div className="quiz-art"><span className="quiz-mark">q.</span><span className="mini-caption">Software fundamentals</span><div className="quiz-progress"><i /></div><span className="mini-caption">Question 04 of 12</span><h4>Good architecture starts<br />with clear boundaries.</h4><div className="quiz-choice"><span>A</span> Separate responsibilities <Check size={15} /></div><div className="quiz-choice"><span>B</span> Share everything</div><div className="quiz-foot">A little structure. A lot of clarity.</div></div>

      : <div className="billing-art"><div className="workflow-node">Service contract <Check size={15} /></div><div className="workflow-line" /><div className="workflow-node node-center"><Layers3 size={19} /> Billing engine</div><div className="workflow-branches" /><div className="workflow-options"><span>Weekly</span><span>Monthly</span><span>Custom</span></div><div className="workflow-line" /><div className="workflow-node">Invoice generated <Check size={15} /></div></div>}

    <span className="visual-note">Illustrative interface</span></div>;

}

function ProjectArtwork({ project }: { project: Project }) {

  const [failedImage, setFailedImage] = useState<string | null>(null);
  if (project.status === 'Design concept') return <div className="project-visual workflow-concept" aria-hidden="true"><span className="workflow-concept-label">Proposed workflow</span><div className="concept-node"><Workflow size={20} /><span>{project.name.includes('Inbox') ? 'Incoming enquiry' : 'Sample document'}</span></div><div className="concept-connector" /><div className="concept-node concept-model"><BrainCircuit size={22} /><span>{project.name.includes('Inbox') ? 'Classify & draft' : 'Extract & validate'}</span></div><div className="concept-connector" /><div className="concept-node"><Check size={20} /><span>Human review</span></div><small>Sample data · Design concept</small></div>;

  if (project.image && failedImage !== project.image) {

    return <div className="project-visual visual-upload"><img src={project.image} alt={project.imageAlt || `${project.name} screenshot`} loading="lazy" onError={() => setFailedImage(project.image!)} /><span className="artwork-label">{project.imageAlt?.toLowerCase().includes("interface concept") ? "Interface concept" : project.imageAlt?.toLowerCase().includes("workflow") ? "Workflow diagram" : "Project visual"}</span></div>;

  }

  if (project.kind && project.kind !== 'generic') return <ProjectVisual kind={project.kind} />;

  return <div className="project-visual visual-generic" aria-hidden="true"><Layers3 size={56} strokeWidth={1} /><span>{project.category}</span><strong>{project.name}</strong></div>;

}

export function ProjectCard({ project }: { project: Project }) {

  const mediaCount = (['image', 'video'] as const).map(type => {

    const count = project.media?.filter(item => item.type === type).length || 0;

    const label = type === 'image' ? 'screenshot' : 'video';

    return count ? `${count} ${label}${count === 1 ? '' : 's'}` : '';

  }).filter(Boolean).join(' · ');

  return <article className={`work-item ${project.featured ? 'work-featured' : ''}`}><Dialog><DialogTrigger asChild><button className="project-cover" aria-label={`Read about ${project.name}`}><ProjectArtwork project={project} /><span className="project-open">Explore project <ArrowUpRight size={20} /></span></button></DialogTrigger><DialogContent className="portfolio-dialog"><span className="muted">{project.category}</span><DialogTitle>{project.name}</DialogTitle><DialogDescription>{project.description}</DialogDescription><ProjectGallery media={project.media?.length ? project.media : project.image ? [{ type: 'image', src: project.image, alt: project.imageAlt || `${project.name} screenshot` }] : []} /><h3>The problem</h3><p>{project.challenge}</p><h3>The approach</h3><p>{project.approach}</p><ul>{(project.features || []).map(f => <li key={f}>{f}</li>)}</ul><div className="project-links">{project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight size={16} /></a>}{project.sourceUrl && <a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View source <Github size={16} /></a>}</div><div className="dialog-meta"><b>My contribution</b><p>{project.role}</p><b>Technology</b><p>{project.technologies}</p></div><a className="p-button" href={`mailto:${email}?subject=${encodeURIComponent(`Let's discuss ${project.name}`)}`}>Discuss a similar project <ArrowUpRight size={17} /></a></DialogContent></Dialog><div className="project-meta"><h3><a href={`/projects/${projectSlug(project)}/`}>{project.name}</a></h3><span>{project.category}</span></div><p>{project.summary}</p>{project.status && <span className="project-status">{project.status}</span>}<a className="text-link project-detail-link" href={`/projects/${projectSlug(project)}/`}>Read project details <ArrowUpRight size={16} /></a>{mediaCount && <small className="project-media-count">{mediaCount}</small>}</article>;

}

function Contact() {

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'receipt-error' | 'error'>('idle');

  const configured = emailConfigured;

  async function submit(e: FormEvent<HTMLFormElement>) {

    e.preventDefault();

    if (['sending', 'sent', 'receipt-error'].includes(status)) return;

    const form = e.currentTarget;

    const data = new FormData(form);

    if (data.get('company_url')) return;

    setStatus('sending');

    const name = String(data.get('name')).trim();

    const fromEmail = String(data.get('email')).trim();

    const message = String(data.get('message')).trim();

    try {

      const result = await sendPortfolioEmail({

        from_name: name, from_email: fromEmail, to_name: name, to_email: fromEmail,

        name, email: fromEmail, message,

        submission_type: 'Project enquiry', email_heading: 'New project enquiry',

        reply_heading: 'Thanks for reaching out',

        reply_message: 'Thank you for getting in touch. Your enquiry has been received. I will review your message and get back to you as soon as possible.',

        reply_details: 'You can reply to this email if you would like to add any project details. In the meantime, you can explore my work at aabanrehman.me.',

        publish_consent: 'Not applicable — private enquiry', publish_email_consent: 'No',

      });

      setStatus(result); form.reset();

    } catch { setStatus('error'); }

  }

  return <section className="contact-section page-width" id="contact"><div className="contact-copy"><span className="section-kicker">Have something in mind?</span><h2>Let’s build<br />something useful.</h2><p>{profile.contactIntro}</p><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={21} /></a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>

    {configured ? <form className="contact-form" onSubmit={submit}><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} pattern=".*\S.*" /><label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" name="email" autoComplete="email" placeholder="alex@company.com" required maxLength={200} /><label htmlFor="contact-message">What are you working on?</label><textarea id="contact-message" name="message" placeholder="A little about your project, timeline, and what you need help with…" rows={4} required minLength={20} maxLength={5000} /><div hidden><label>Company website<input name="company_url" tabIndex={-1} autoComplete="off" /></label></div><button className="p-button" disabled={['sending', 'sent', 'receipt-error'].includes(status)}>{status === 'sending' ? 'Sending…' : 'Send project enquiry'}<ArrowUpRight size={17} /></button><p role="status">{status === 'sent' ? 'Your enquiry has been sent. Thanks for reaching out.' : status === 'receipt-error' ? 'Your enquiry was received, but the acknowledgment email could not be sent. No need to submit again.' : status === 'error' ? 'Your message could not be sent. Please use the email link; your message is still here.' : 'Your message goes directly to my inbox.'}</p></form>

      : <div className="contact-invitation"><span>Start a conversation</span><h3>Good work starts<br />with a clear brief.</h3><p>Share your idea, the problem you’re solving, and your timeline. We can work out the next step together.</p><a className="p-button" href={`mailto:${email}?subject=Project%20enquiry`}>Email me about a project <ArrowUpRight size={18} /></a><small>{profile.contactLocation}</small></div>}</section>;

}

export default function Portfolio() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [openService, setOpenService] = useState<number | null>(0);

  return <div className="portfolio"><a className="skip-link" href="#main">Skip to content</a><header className="site-header page-width" onKeyDown={event => { if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); event.currentTarget.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}><a className="wordmark" href="#" aria-label={`${profile.name}, home`}><span className="brand-symbol" aria-hidden="true">a<span>r</span></span><span>{profile.name}<span className="wordmark-caption">{profile.role}</span></span></a><nav aria-label="Main navigation" className={menuOpen ? 'nav-open' : ''}>{[['Work', '#work'], ['Skills', '#skills'], ['Certificates', '#certificates'], ['About', '#about']].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16} /></a></nav><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} onKeyDown={e => { if (e.key === 'Escape') setMenuOpen(false); }}>{menuOpen ? <X /> : <Menu />}</button></header>

    <main id="main"><section className={`hero page-width ${profile.showPhoto && profile.photo ? 'hero-with-portrait' : 'hero-text-only'}`}><div className="hero-copy"><p className="availability"><span /> {profile.availability}</p><h1 className="content-lines">{profile.headline}</h1><p className="hero-intro">{profile.introduction}</p><div className="hero-actions"><a className="p-button" href="#work">Explore my work <ArrowDown size={17} /></a><a className="text-link hero-resume" href={resume.file} download>Download resume <Download size={17} /></a></div><div className="hero-location"><span className="location-dot" /> {profile.location} <span>{profile.workLocation}</span></div></div><ProfilePortrait /></section>

    <div className="stack-band page-width"><span>Built on solid foundations</span><div>{profile.foundations.map(item => <b key={item}>{item}</b>)}</div></div>

    <section className="discovery-strip page-width" aria-label="Explore the portfolio"><a href="/projects"><span className="discovery-count">{String(projects.length).padStart(2, '0')}</span><div><h2>Explore all projects</h2><p>AI workflow concepts, software projects, and the decisions behind them.</p></div><ArrowUpRight size={25} /></a><a href="/certificates"><span className="discovery-count">{String(certificates.length).padStart(2, '0')}</span><div><h2>Browse certificates</h2><p>Explore the learning behind the work. View credentials and issuers.</p></div><ArrowUpRight size={25} /></a></section><section className="work-section page-width" id="work"><div className="section-heading"><div><span className="section-kicker">Selected projects</span><h2>Behind the interface,<br />a lot of thought.</h2></div><p className="content-lines">{profile.projectsIntro}</p></div><div className="work-grid">{projects.filter(project => project.showOnHome !== false).slice(0, 3).map(project => <ProjectCard key={project.id} project={project} />)}</div><div className="collection-callout"><div><strong>There's more behind the build.</strong><p>Browse all {projects.length} projects, with technologies and project details.</p></div><a className="p-button" href="/projects">See all projects <ArrowUpRight size={18} /></a></div></section>

    <section className="expertise-section" id="expertise"><div className="expertise-inner page-width"><div><span className="section-kicker">How I can help</span><h2>The whole picture.<br />The details, too.</h2><p>{profile.servicesIntro}</p><a href={resume.file} download className="text-link">Download my résumé <Download size={17} /></a></div><div className="service-list">{services.filter(service => service.showOnHome !== false).slice(0, 3).map((service, i) => <div className="service" key={service.title}><h3><button aria-expanded={openService === i} aria-controls={`service-${i}`} onClick={() => setOpenService(openService === i ? null : i)}>{service.title}{openService === i ? <Minus size={20} /> : <Plus size={20} />}</button></h3><div id={`service-${i}`} hidden={openService !== i}><p>{service.text}</p><span>{service.tools}</span></div></div>)}<a className="text-link section-more" href="/services">All services <ArrowUpRight size={17} /></a></div></div></section>

    <section className="skills-section page-width" id="skills"><div className="section-heading"><div><span className="section-kicker">The toolkit</span><h2>Built with purpose.<br />Backed by the right tools.</h2></div><p>AI integrations, workflow automation, and the engineering foundation behind them.</p></div><div className="skills-grid">{[{ title: 'Core foundations', label: 'Engineering', tools: profile.foundations }, ...services.filter(service => service.showOnHome !== false).slice(0, 3).map(service => ({ title: service.title, label: 'Capabilities', tools: service.tools.split(/[,·|]/).map(tool => tool.trim()).filter(Boolean) }))].map(group => <article className="skill-card" key={group.title}><span className="skill-label">{group.label}</span><h3>{group.title}</h3><div className="skill-tags">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div></section><section className="home-certificates page-width" id="certificates"><div className="section-heading"><div><span className="section-kicker">Always learning</span><h2>Credentials you<br />can check.</h2></div><a className="p-button" href="/certificates">All {certificates.length} certificates <ArrowUpRight size={18} /></a></div><div className="certificate-preview-grid">{certificates.slice(0, 3).map(certificate => <a className="certificate-preview" key={certificate.id} href={certificate.url || certificate.image || '/certificates'} target={certificate.url || certificate.image ? '_blank' : undefined} rel="noopener noreferrer"><div className="certificate-preview-image certificate-placeholder"><CertificateArtwork image={certificate.image} issuerLogo={certificate.issuerLogo} issuer={certificate.issuer} /></div><div className="certificate-preview-copy"><span>{certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ''}</span><h3>{certificate.title}</h3><span className="certificate-action">View credential <ArrowUpRight size={17} /></span></div></a>)}</div></section><section className="about-section page-width" id="about"><div className="about-heading"><span className="section-kicker">A little about me</span><h2 className="content-lines">{profile.aboutHeading}</h2><p>{profile.about}</p><div className="education-note"><span>{profile.education.title}</span><p>{profile.education.institution}<br />{profile.education.dates}</p></div></div><div className="experience-list"><h3>Where I’ve contributed</h3>{experience.map(item => <article key={item.id}><span>{item.date}</span><h4>{item.company}</h4><b>{item.role}</b><p>{item.text}</p></article>)}</div></section><FeedbackSection /><Contact /></main><footer className="site-footer page-width"><span>© {new Date().getFullYear()} {profile.name}</span><nav aria-label="More about Aaban"><a href="/about/">About Aaban</a><a href="/ai-engineering/">AI engineering</a><a href="/workflow-automation/">Workflow automation</a></nav><a href="#">Back to top <ArrowUpRight size={16} /></a></footer></div>;

}
