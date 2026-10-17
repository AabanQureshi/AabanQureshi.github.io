import { useState, type FormEvent, type ReactNode } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { emailConfigured, sendPortfolioEmail } from '@/lib/portfolio-email';
import { projects, certificates, services, profile, testimonials, experience, projectSlug } from '@/content';
import { ProjectCard } from './Portfolio';
import { CertificateArtwork } from './CertificateArtwork';
import { ProjectGallery } from './ProjectGallery';
import './portfolio.css';

export function Page({ title, children }: { title: string; children: ReactNode }) {
  const { pathname } = useLocation();
  return <div className="portfolio"><a className="skip-link" href="#main">Skip to content</a><header className="site-header page-width"><a className="wordmark" href="/">{profile.name}</a><nav aria-label="Collection navigation" className="page-navigation"><a href="/projects" aria-current={pathname.replace(/\/$/, '') === '/projects' ? 'page' : undefined}>Projects</a><a href="/certificates" aria-current={pathname.replace(/\/$/, '') === '/certificates' ? 'page' : undefined}>Certificates</a><a href="/services" aria-current={pathname.replace(/\/$/, '') === '/services' ? 'page' : undefined}>Services</a><a href="/#contact">Contact</a></nav></header><main id="main" className="page-width collection-page"><a className="text-link" href="/">← Back to home</a><h1>{title}</h1>{children}</main></div>;
}

export function ProjectsPage() {
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const filtered = projects.filter(project => (category === 'All' || project.category === category) && `${project.name} ${project.summary} ${project.technologies}`.toLowerCase().includes(search.trim().toLowerCase()));
  const pages = Math.max(1, Math.ceil(filtered.length / 6));
  return <Page title="Explore the work."><p>AI workflow concepts, business platforms, and APIs. Open a project for the problem, approach, and my contribution.</p><div className="collection-controls"><div><label className="filter-label" htmlFor="project-search">Find a project or technology</label><div className="search-field"><Search size={18} aria-hidden="true" /><input id="project-search" type="search" placeholder="Try AI, Ollama, billing, or Azure" value={search} onChange={event => { setSearch(event.target.value); setPage(0); }} /></div></div><div><label className="filter-label" htmlFor="project-category">Filter by category</label><select id="project-category" className="project-filter" value={category} onChange={event => { setCategory(event.target.value); setPage(0); }}>{['All', ...new Set(projects.map(project => project.category))].map(value => <option key={value}>{value}</option>)}</select></div></div><p className="collection-result" role="status">{filtered.length} of {projects.length} projects</p><div className="work-grid">{filtered.slice(page * 6, page * 6 + 6).map(project => <ProjectCard key={project.id} project={project} />)}</div>{!filtered.length && <div className="collection-empty"><h2>No matching projects</h2><p>Try another technology or clear the filters to see all the work.</p><button className="p-button" onClick={() => { setSearch(''); setCategory('All'); setPage(0); }}>Show all projects</button></div>}{pages > 1 && <nav className="pagination" aria-label="Project pages"><button className="p-button" disabled={page === 0} onClick={() => { setPage(page - 1); document.getElementById('project-search')?.focus(); }}>Previous</button><span role="status">Page {page + 1} of {pages}</span><button className="p-button" disabled={page + 1 >= pages} onClick={() => { setPage(page + 1); document.getElementById('project-search')?.focus(); }}>Next</button></nav>}<details className="all-project-pages"><summary>All project pages</summary><ul>{projects.map(project => <li key={project.id}><a className="text-link" href={`/projects/${projectSlug(project)}/`}>{project.name}</a></li>)}</ul></details></Page>;
}

export function CertificatesPage() {
  return <Page title="Learning, backed by credentials."><p>{certificates.length} credentials across cloud, backend engineering, databases, and delivery. Each links directly to the issuing platform.</p><div className="certificate-directory">{certificates.map(certificate => <article className="certificate-card" key={certificate.id}><div className="certificate-emblem"><CertificateArtwork issuerLogo={certificate.issuerLogo} issuer={certificate.issuer} /></div><span className="certificate-issuer">{certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ''}</span><h2>{certificate.title}</h2>{certificate.image && <img className="certificate-preview" src={certificate.image} alt={`${certificate.title} certificate`} loading="lazy" />}<a className="text-link" href={certificate.url || certificate.image} target="_blank" rel="noopener noreferrer">View credential <ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only"> for {certificate.title} (opens in a new tab)</span></a></article>)}</div><div className="collection-next"><h2>See the skills in practice.</h2><p>Explore the applications and engineering decisions behind the credentials.</p><a className="p-button" href="/projects">Explore all projects <ArrowUpRight size={18} aria-hidden="true" /></a></div></Page>;
}

export function ServicesPage() {
  return <Page title="How I can help"><p>{profile.servicesIntro}</p><div className="services-directory">{services.map(service => <article key={service.title}><h2>{service.title === 'AI engineering' ? <a href="/ai-engineering/">{service.title}</a> : service.title === 'Workflow automation' ? <a href="/workflow-automation/">{service.title}</a> : service.title}</h2><p>{service.details || service.text}</p><p className="service-technologies">{service.tools}</p><a className="text-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(service.title + ' enquiry')}`}>Discuss your project <ArrowUpRight size={16} /></a></article>)}</div></Page>;
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(item => projectSlug(item) === slug);
  if (!project) return <Page title="Project not found"><p>This project is unavailable. <a href="/projects/">Browse all projects.</a></p></Page>;
  return <Page title={project.name}><article className="project-case-study"><p>{project.category}{project.status ? ` · ${project.status}` : ''}</p><p>{project.description}</p><ProjectGallery media={project.media?.length ? project.media : project.image ? [{ type: 'image', src: project.image, alt: project.imageAlt || project.name, caption: project.imageCredit }] : []} />{project.imageSourceUrl && <a className="text-link" href={project.imageSourceUrl} target="_blank" rel="noreferrer">{project.imageCredit || 'Image source'} <ArrowUpRight size={15} /></a>}<h2>The problem</h2><p>{project.challenge}</p><h2>The approach</h2><p>{project.approach}</p><ul>{project.features?.map(feature => <li key={feature}>{feature}</li>)}</ul><h2>My contribution</h2><p>{project.role}</p><h2>Technology</h2><p>{project.technologies}</p><div className="project-links">{project.demoUrl && <a className="text-link" href={project.demoUrl} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={17} /></a>}{project.sourceUrl && <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer">View source <ArrowUpRight size={17} /></a>}</div><a className="p-button" href={`mailto:${profile.email}?subject=${encodeURIComponent('Project enquiry: ' + project.name)}`}>Discuss a similar workflow <ArrowUpRight size={18} /></a><p><a className="text-link" href="/projects/">Browse all projects</a></p></article></Page>;
}

export function AboutPage() {
  return <Page title={`About ${profile.name}`}><div className="project-case-study"><p>{profile.role} · {profile.location}</p><p>{profile.about}</p><h2>Engineering background</h2>{experience.map(item => <article key={item.id}><h3>{item.role} at {item.company}</h3><p>{item.date}</p><p>{item.text}</p></article>)}<h2>Education</h2><p>{profile.education.title}, {profile.education.institution}. {profile.education.dates}</p><h2>Explore the work</h2><p><a className="text-link" href="/projects/">Projects and AI workflow concepts <ArrowUpRight size={17} /></a></p><p><a className="text-link" href="/certificates/">Verified credentials <ArrowUpRight size={17} /></a></p><div className="project-links"><a className="text-link" href={profile.github}>GitHub</a><a className="text-link" href={profile.linkedin}>LinkedIn</a><a className="text-link" href={`mailto:${profile.email}`}>Contact Aaban</a></div></div></Page>;
}

export function AIServicePage({ kind }: { kind: 'engineering' | 'automation' }) {
  const service = services.find(item => item.title === (kind === 'engineering' ? 'AI engineering' : 'Workflow automation'))!;
  return <Page title={service.title}><article className="project-case-study"><p>{service.text}</p><h2>How I approach the work</h2><p>{service.details}</p><h2>Tools and foundations</h2><p>{service.tools}</p><h2>Start with a defined task</h2><p>Tell me what your team repeats, where the data lives, and which decisions need human approval. We can scope an integration or workflow around those constraints.</p><a className="p-button" href={`mailto:${profile.email}?subject=${encodeURIComponent(service.title + ' enquiry')}`}>Discuss your workflow <ArrowUpRight size={18} /></a><h2>Explore related work</h2><ul>{projects.filter(item => /AI|Ollama/.test(item.name + item.technologies)).slice(0, 5).map(item => <li key={item.id}><a className="text-link" href={`/projects/${projectSlug(item)}/`}>{item.name}{item.status ? ` (${item.status})` : ''}</a></li>)}</ul></article></Page>;
}

export function FeedbackSection() {
  if (!testimonials.length) return null;
  return <section className="feedback-section page-width" id="feedback"><div className="section-heading"><div><span className="section-kicker">Working together</span><h2>Client feedback</h2></div><a className="text-link" href="/feedback">Worked with me? Leave feedback <ArrowUpRight size={17} /></a></div>{testimonials.length ? <div className="testimonial-grid">{testimonials.slice(0, 3).map((item, index) => <figure key={`${item.name}-${index}`}><blockquote>{item.quote}</blockquote><figcaption><strong>{item.name}</strong>{item.company && <span>{item.company}</span>}{item.project && <span>{item.project}</span>}{item.consentToPublishEmail && item.publicEmail && <a href={`mailto:${item.publicEmail}`}>{item.publicEmail}</a>}</figcaption></figure>)}</div> : <p>If we’ve worked together, I’d welcome your perspective on the collaboration.</p>}</section>;
}

export function FeedbackPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'receipt-error' | 'email' | 'error'>('idle');
  const configured = emailConfigured;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (['sending', 'sent', 'receipt-error'].includes(status)) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('website')) return;
    const value = (key: string) => String(data.get(key) || '').trim();
    const consent = data.get('publish') === 'on';
    const emailConsent = consent && data.get('publishEmail') === 'on';
    const message = `Name: ${value('name')}\nCompany / role: ${value('company')}\nProject: ${value('project')}\nEmail: ${value('email')}\n\n${value('feedback')}\n\nPermission to publish name and feedback: ${consent ? 'Yes' : 'No'}\nPermission to publish email address: ${emailConsent ? 'Yes' : 'No'}`;
    if (!configured) {
      window.location.href = `mailto:${profile.email}?subject=Client%20feedback&body=${encodeURIComponent(message)}`;
      setStatus('email');
      return;
    }
    setStatus('sending');
    const parameters = {
      from_name: value('name'), from_email: value('email'), to_name: value('name'), to_email: value('email'),
      company: value('company') || 'Not provided', project: value('project') || 'Not provided',
      feedback: value('feedback'), message,
      submission_type: 'Client feedback', email_heading: 'New client feedback',
      reply_heading: 'Thank you for your feedback',
      reply_message: 'Thank you for sharing your experience working with me. Your feedback has been received and will be reviewed personally.',
      reply_details: `Permission to publish name, company/project details and feedback: ${consent ? 'Yes' : 'No'}\nPermission to publish email address: ${emailConsent ? 'Yes' : 'No'}\n\nNothing is published automatically. Your email stays private unless both permissions are Yes. Reply to this email to change your permissions or request removal.`,
      publish_consent: consent ? 'Yes' : 'No', publish_email_consent: emailConsent ? 'Yes' : 'No',
    };
    try {
      const result = await sendPortfolioEmail(parameters);
      setStatus(result); form.reset();
    } catch { setStatus('error'); }
  }
  return <Page title="Share your experience"><p>Tell me about our collaboration. Feedback is reviewed before publication. You can send private feedback too.</p><form className="contact-form feedback-form" onSubmit={submit}><label htmlFor="feedback-name">Your name</label><input id="feedback-name" name="name" required pattern=".*\S.*" maxLength={100} autoComplete="name" /><label htmlFor="feedback-email">Email address</label><input id="feedback-email" name="email" type="email" required maxLength={200} autoComplete="email" /><label htmlFor="feedback-company">Company / role (optional)</label><input id="feedback-company" name="company" maxLength={150} /><label htmlFor="feedback-project">Project or service (optional)</label><input id="feedback-project" name="project" maxLength={150} /><label htmlFor="feedback-message">Your feedback</label><textarea id="feedback-message" name="feedback" required minLength={20} maxLength={1500} rows={6} /><label className="consent-row"><input type="checkbox" name="publish" />I give permission to publish my name, company/project details, and feedback on this portfolio.</label><label className="consent-row"><input type="checkbox" name="publishEmail" />I also give permission to display my email address publicly alongside my published feedback.</label><p className="consent-note">Both choices are optional. Your email stays private unless you select both permissions. You can request removal by emailing {profile.email}.</p><div hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div><button className="p-button" disabled={['sending', 'sent', 'receipt-error'].includes(status)}>{status === 'sending' ? 'Sending…' : configured ? 'Send feedback' : 'Continue in email'}</button><p role="status">{status === 'sent' ? 'Thank you. Your feedback was sent for review and an acknowledgment was sent to your email.' : status === 'receipt-error' ? 'Your feedback was received, but the acknowledgment email could not be sent. You do not need to submit again.' : status === 'email' ? 'Your email app has been requested. Send the prepared message there to complete your submission.' : status === 'error' ? `Could not send. Your feedback is still here; please email ${profile.email}.` : !configured ? 'This opens a prepared message in your email app. Nothing is submitted until you send it.' : 'Your feedback goes directly to my inbox for review.'}</p></form></Page>;
}
