import { useState, type FormEvent, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { emailConfigured, sendPortfolioEmail } from '@/lib/portfolio-email';
import { projects, services, profile, testimonials } from '@/content';
import { ProjectCard } from './Portfolio';
import './portfolio.css';

function Page({ title, children }: { title: string; children: ReactNode }) {
  return <div className="portfolio"><a className="skip-link" href="#main">Skip to content</a><header className="site-header page-width"><a className="wordmark" href="/">{profile.name}</a><div className="page-navigation"><a href="/projects">Projects</a><a href="/services">Services</a><a href="/#contact">Contact</a></div></header><main id="main" className="page-width collection-page"><a className="text-link" href="/">← Back to home</a><h1>{title}</h1>{children}</main></div>;
}

export function ProjectsPage() {
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(0);
  const filtered = projects.filter(project => category === 'All' || project.category === category);
  const pages = Math.max(1, Math.ceil(filtered.length / 6));
  return <Page title="Projects"><p>Explore the work, the problems, and the engineering decisions behind them.</p><label className="filter-label" htmlFor="project-category">Filter by category</label><select id="project-category" className="project-filter" value={category} onChange={event => { setCategory(event.target.value); setPage(0); }}>{['All', ...new Set(projects.map(project => project.category))].map(value => <option key={value}>{value}</option>)}</select><div className="work-grid">{filtered.slice(page * 6, page * 6 + 6).map(project => <ProjectCard key={project.id} project={project} />)}</div>{!filtered.length && <p>No projects in this category yet.</p>}<nav className="pagination" aria-label="Project pages"><button className="p-button" disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button><span role="status">Page {page + 1} of {pages}</span><button className="p-button" disabled={page + 1 >= pages} onClick={() => setPage(page + 1)}>Next</button></nav></Page>;
}

export function ServicesPage() {
  return <Page title="How I can help"><p>{profile.servicesIntro}</p><div className="services-directory">{services.map(service => <article key={service.title}><h2>{service.title}</h2><p>{service.details || service.text}</p><p className="service-technologies">{service.tools}</p><a className="text-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(service.title + ' enquiry')}`}>Discuss your project <ArrowUpRight size={16} /></a></article>)}</div></Page>;
}

export function FeedbackSection() {
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
