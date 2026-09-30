import { useState, type CSSProperties, type FormEvent } from 'react';
import { ArrowUpRight, ArrowDown, Plus, Minus, Menu, X, Github, Linkedin, Check, Layers3, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { projects, certificates, experience, profile, services, resume, type Project } from '@/content';
import './portfolio.css';



const email = profile.email;


function Assembly() {
  const [exploded, setExploded] = useState(false);
  return <div className={`assembly-stage ${exploded ? 'is-exploded' : ''}`}>
    <div className="stage-top"><span>From interface to infrastructure</span><span>+</span></div>
    <div className="assembly-viewport" aria-hidden="true"><div className="assembly-shadow" /><div className="assembly">
      {[0, 1, 2, 3].map(level => <div className={`slab slab-${level}`} key={level} style={{ '--level': level } as CSSProperties}><div className="slab-face"><div className="slab-grid" />{level === 3 ? <div className="slab-emblem"><Layers3 size={68} strokeWidth={1} /><span>AR</span></div> : <div className="slab-circuit"><i /><i /><i /><i /><i /><i /></div>}<span className="slab-serial">{['Infrastructure', 'Data', 'Application', 'Interface'][level]}</span></div><div className="slab-edge edge-front"><i /><i /><i /></div><div className="slab-edge edge-side" /></div>)}
    </div></div><div className="stage-bottom"><span>Thoughtfully connected.<br />Built to work together.</span><button onClick={() => setExploded(!exploded)} aria-pressed={exploded}><Layers3 size={15} />{exploded ? 'Assemble layers' : 'Explore the layers'}</button></div>
  </div>;
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
  if (project.image && failedImage !== project.image) {
    return <div className="project-visual visual-upload"><img src={project.image} alt={project.imageAlt || `${project.name} screenshot`} loading="lazy" onError={() => setFailedImage(project.image!)} /></div>;
  }
  if (project.kind && project.kind !== 'generic') return <ProjectVisual kind={project.kind} />;
  return <div className="project-visual visual-generic" aria-hidden="true"><Layers3 size={56} strokeWidth={1} /><span>{project.category}</span><strong>{project.name}</strong></div>;
}

function ProjectCard({ project }: { project: Project }) {
  return <article className={`work-item ${project.featured ? 'work-featured' : ''}`}><Dialog><DialogTrigger asChild><button className="project-cover" aria-label={`Read about ${project.name}`}><ProjectArtwork project={project} /><span className="project-open"><ArrowUpRight size={23} /></span></button></DialogTrigger><DialogContent className="portfolio-dialog"><span className="muted">{project.category}</span><DialogTitle>{project.name}</DialogTitle><DialogDescription>{project.description}</DialogDescription><h3>The problem</h3><p>{project.challenge}</p><h3>The approach</h3><p>{project.approach}</p><ul>{(project.features || []).map(f => <li key={f}>{f}</li>)}</ul><div className="project-links">{project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight size={16} /></a>}{project.sourceUrl && <a className="text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">View source <Github size={16} /></a>}</div><div className="dialog-meta"><b>My contribution</b><p>{project.role}</p><b>Technology</b><p>{project.technologies}</p></div><a className="p-button" href={`mailto:${email}?subject=${encodeURIComponent(`Let's discuss ${project.name}`)}`}>Discuss a similar project <ArrowUpRight size={17} /></a></DialogContent></Dialog><div className="project-meta"><h3>{project.name}</h3><span>{project.category}</span></div><p>{project.summary}</p></article>;
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const configured = Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('company_url')) return;
    setStatus('sending');
    const name = String(data.get('name')).trim();
    const fromEmail = String(data.get('email')).trim();
    const message = String(data.get('message')).trim();
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, { from_name: name, from_email: fromEmail, name, email: fromEmail, message }, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      setStatus('sent'); form.reset();
    } catch { setStatus('error'); }
  }
  return <section className="contact-section page-width" id="contact"><div className="contact-copy"><span className="section-kicker">Have something in mind?</span><h2>Let’s build<br />something useful.</h2><p>{profile.contactIntro}</p><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={21} /></a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>
    {configured ? <form className="contact-form" onSubmit={submit}><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} pattern=".*\S.*" /><label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" name="email" autoComplete="email" placeholder="alex@company.com" required maxLength={200} /><label htmlFor="contact-message">What are you working on?</label><textarea id="contact-message" name="message" placeholder="A little about your project, timeline, and what you need help with…" rows={4} required minLength={20} maxLength={5000} /><div hidden><label>Company website<input name="company_url" tabIndex={-1} autoComplete="off" /></label></div><button className="p-button" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send project enquiry'}<ArrowUpRight size={17} /></button><p role="status">{status === 'sent' ? 'Your enquiry has been sent. Thanks for reaching out.' : status === 'error' ? 'Your message could not be sent. Please use the email link; your message is still here.' : 'Your message goes directly to my inbox.'}</p></form>
      : <div className="contact-invitation"><span>Start a conversation</span><h3>Good work starts<br />with a clear brief.</h3><p>Share your idea, the problem you’re solving, and your timeline. We can work out the next step together.</p><a className="p-button" href={`mailto:${email}?subject=Project%20enquiry`}>Email me about a project <ArrowUpRight size={18} /></a><small>{profile.contactLocation}</small></div>}</section>;
}



export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<number | null>(0);
  return <div className="portfolio"><a className="skip-link" href="#main">Skip to content</a><header className="site-header page-width"><a className="wordmark" href="#" aria-label={`${profile.name}, home`}><span className="brand-symbol" aria-hidden="true">a<span>r</span></span><span>{profile.name}<span className="wordmark-caption">{profile.role}</span></span></a><nav aria-label="Main navigation" className={menuOpen ? 'nav-open' : ''}>{[['Work', '#work'], ['Expertise', '#expertise'], ['About', '#about']].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={16} /></a></nav><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} onKeyDown={e => { if (e.key === 'Escape') setMenuOpen(false); }}>{menuOpen ? <X /> : <Menu />}</button></header>
    <main id="main"><section className="hero page-width"><div className="hero-copy"><p className="availability"><span /> {profile.availability}</p><h1 className="content-lines">{profile.headline}</h1><p className="hero-intro">{profile.introduction}</p><div className="hero-actions"><a className="p-button" href="#work">Explore my work <ArrowDown size={17} /></a><a className="text-link" href="#contact">Let’s discuss your project <ArrowUpRight size={17} /></a></div><div className="hero-location"><span className="location-dot" /> {profile.location} <span>{profile.workLocation}</span></div></div><Assembly /></section>
    <div className="stack-band page-width"><span>Built on solid foundations</span><div>{profile.foundations.map(item => <b key={item}>{item}</b>)}</div></div>
    <section className="work-section page-width" id="work"><div className="section-heading"><div><span className="section-kicker">Selected projects</span><h2>Behind the interface,<br />a lot of thought.</h2></div><p className="content-lines">{profile.projectsIntro}</p></div><div className="work-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></section>
    <section className="expertise-section" id="expertise"><div className="expertise-inner page-width"><div><span className="section-kicker">How I can help</span><h2>The whole picture.<br />The details, too.</h2><p>{profile.servicesIntro}</p><a href={resume.file} download className="text-link">Download my résumé <Download size={17} /></a></div><div className="service-list">{services.map((service, i) => <div className="service" key={service.title}><h3><button aria-expanded={openService === i} aria-controls={`service-${i}`} onClick={() => setOpenService(openService === i ? null : i)}>{service.title}{openService === i ? <Minus size={20} /> : <Plus size={20} />}</button></h3><div id={`service-${i}`} hidden={openService !== i}><p>{service.text}</p><span>{service.tools}</span></div></div>)}</div></div></section>
    <section className="about-section page-width" id="about"><div className="about-heading"><span className="section-kicker">A little about me</span><h2 className="content-lines">{profile.aboutHeading}</h2><p>{profile.about}</p><div className="education-note"><span>{profile.education.title}</span><p>{profile.education.institution}<br />{profile.education.dates}</p></div><div className="certificates"><h3>Selected certificates</h3><ul>{certificates.map(certificate => <li key={certificate.id}><a className="credential-link" href={certificate.url || certificate.image} target="_blank" rel="noopener noreferrer"><span>{certificate.title}<small>{certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ''} · {certificate.url ? 'View credential' : 'View certificate'}</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>{certificate.image && certificate.url && <a className="certificate-image-link" href={certificate.image} target="_blank" rel="noopener noreferrer" aria-label={`View certificate image for ${certificate.title}`}>View certificate image <ArrowUpRight size={13} /></a>}</li>)}</ul></div></div><div className="experience-list"><h3>Where I’ve contributed</h3>{experience.map(item => <article key={item.id}><span>{item.date}</span><h4>{item.company}</h4><b>{item.role}</b><p>{item.text}</p></article>)}</div></section><Contact /></main><footer className="site-footer page-width"><span>© {new Date().getFullYear()} {profile.name}</span><span>Considered design. Thoughtful engineering.</span><a href="#">Back to top <ArrowUpRight size={16} /></a></footer></div>;
}
