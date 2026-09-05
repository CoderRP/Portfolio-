import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

/* Replace the placeholders below with your real education details. */
const EDUCATION = {
  university: 'Chandigarh University',
  school: 'KDMA International',
};

const LINKS = {
  github: 'https://github.com/CoderRP',
  linkedin: 'http://www.linkedin.com/in/rishi-pandey-835aa31bb',
};

const Icon = ({ name, size = 18, stroke = 1.7 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  const paths = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    arrowUp: <><path d="M12 19V5"/><path d="m6 11 6-6 6 6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.8S18.1.4 15 2.5a13.4 13.4 0 0 0-6 0C5.9.4 4.7.8 4.7.8A5 5 0 0 0 4.6 4 5.4 5.4 0 0 0 3.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9" rx="1"/><path d="M4 5.5v.01"/></>,
    mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></>,
    external: <><path d="M14 5h5v5"/><path d="M12 12 19 5"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    x: <><path d="M6 6l12 12M18 6 6 18"/></>,
    sparkle: <><path d="m12 3 1.4 4.2L17.5 9l-4.1 1.8L12 15l-1.4-4.2L6.5 9l4.1-1.8L12 3Z"/><path d="m19 14 .7 2.2L22 17l-2.3.8L19 20l-.7-2.2L16 17l2.3-.8L19 14Z"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    database: <><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/><path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    graduation: <><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 11.5V15c2.7 2.2 7.3 2.2 10 0v-3.5"/><path d="M21 9v6"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const projects = [
  {
    index: '01',
    name: 'CA Saathi',
    eyebrow: 'AI-powered SaaS · 2026 — Present',
    description: 'A practice-management platform for CA firms, bringing client operations, documents, GST workflows, billing, notices and AI-assisted drafting into one focused product.',
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma'],
    stats: [['10,000+', 'invoice rows processed'], ['90 sec', 'AI draft workflow']],
    visual: 'saathi',
    action: 'Project details',
    href: '#contact',
  },
  {
    index: '02',
    name: 'BookFlow',
    eyebrow: 'Booking platform · 2025',
    description: 'A full-stack booking platform with secure authentication, protected admin workflows, user management, date-based scheduling and Firebase-backed APIs.',
    stack: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Vercel'],
    stats: [['RBAC', 'admin access control'], ['Admin SDK', 'secure user API']],
    visual: 'bookflow',
    action: 'Project details',
    href: '#contact',
  },
];

const skillGroups = [
  { title: 'Frontend', icon: 'layers', items: ['React.js', 'Next.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'] },
  { title: 'Backend', icon: 'code', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Java'] },
  { title: 'Data', icon: 'database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL'] },
  { title: 'Core', icon: 'check', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Git', 'GitHub', 'Vercel'] },
];

function ProductWindow({ type }) {
  if (type === 'saathi') {
    return (
      <div className="window-shell saathi-shell">
        <div className="window-toolbar"><span className="dots"><i/><i/><i/></span><span>CA Saathi</span><span className="toolbar-note">workspace</span></div>
        <div className="saathi-ui">
          <aside className="mini-nav"><div className="mini-brand">C</div><span className="nav-active">Overview</span><span>Clients</span><span>GST</span><span>Notices</span></aside>
          <div className="saathi-main">
            <div className="mini-head"><div><span>Reconciliation</span><strong>Invoice review</strong></div><span className="mini-tag">10,000+ rows</span></div>
            <div className="recon-summary">
              <div className="summary-item primary"><span>Imported</span><b>Purchase register</b><small>Source data normalized</small></div>
              <div className="summary-arrow">→</div>
              <div className="summary-item"><span>Compared</span><b>GSTR-2B</b><small>Invoices matched by rules</small></div>
            </div>
            <div className="recon-table">
              <div className="table-heading"><span>Review queue</span><span>Status</span></div>
              <div className="table-row"><span><i className="dot green"/>Matched invoices</span><em>Ready</em></div>
              <div className="table-row"><span><i className="dot amber"/>Missing invoices</span><em>Review</em></div>
              <div className="table-row"><span><i className="dot blue"/>Value mismatches</span><em>Review</em></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="window-shell bookflow-shell">
      <div className="window-toolbar"><span className="dots"><i/><i/><i/></span><span>BookFlow</span><span className="toolbar-note">schedule</span></div>
      <div className="bookflow-ui">
        <div className="schedule-side"><div className="mini-brand dark">B</div><span className="nav-active">Calendar</span><span>Bookings</span><span>Users</span><span>Settings</span></div>
        <div className="schedule-main">
          <div className="schedule-head"><div><span>Weekly schedule</span><strong>Appointments</strong></div><span className="secure-pill"><Icon name="check" size={12}/> protected</span></div>
          <div className="week-row">{['MON','TUE','WED','THU','FRI'].map((d) => <span key={d}>{d}</span>)}</div>
          <div className="time-grid">
            <div className="time-labels"><span>09:00</span><span>11:00</span><span>13:00</span><span>15:00</span></div>
            <div className="booking-grid">
              <i className="booking b1">Client onboarding</i><i className="booking b2">Consultation</i><i className="booking b3">Review</i><i className="booking b4">Team slot</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const nav = useMemo(() => [['home', 'Home'], ['work', 'Work'], ['skills', 'Stack'], ['about', 'About'], ['contact', 'Contact']], []);

  useEffect(() => {
    const revealNodes = [...document.querySelectorAll('[data-reveal]')];
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealNodes.forEach((node) => revealObserver.observe(node));

    const sectionNodes = nav.map(([id]) => document.getElementById(id)).filter(Boolean);
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sectionNodes.forEach((node) => sectionObserver.observe(node));

    return () => { revealObserver.disconnect(); sectionObserver.disconnect(); };
  }, [nav]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="topbar">
        <nav className="nav container">
          <button className="wordmark" onClick={() => go('home')} aria-label="Go to top"><span>R</span><b>Rishi Pandey</b></button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {nav.map(([id, label]) => <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>{label}</button>)}
          </div>
          <a className="nav-contact" href="mailto:rishipandey941@gmail.com">Get in touch <Icon name="arrow" size={14}/></a>
          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu"><Icon name={menuOpen ? 'x' : 'menu'} size={19}/></button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy" data-reveal>
            <p className="kicker"><span/>Available for software engineering roles</p>
            <h1>Thoughtful software.<br/><em>Quietly excellent.</em></h1>
            <p className="hero-sub">I’m Rishi, a full-stack developer who turns complex workflows into clean, dependable products.</p>
            <div className="hero-actions">
              <button className="pill primary" onClick={() => go('work')}>Explore my work <Icon name="arrow" size={15}/></button>
              <a className="pill secondary" href="mailto:rishipandey941@gmail.com">Email me <Icon name="mail" size={14}/></a>
            </div>
            <div className="hero-note"><span>Based on a simple idea:</span> make the complicated feel obvious.</div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="hero-orbit" aria-hidden="true"><span/><span/><span/></div>
            <ProductWindow type="saathi" />
            <div className="hero-caption"><span>Currently building</span><strong>CA Saathi</strong></div>
          </div>
        </section>

        <section className="intro-strip"><div className="container intro-inner"><span className="intro-large">Software is at its best when the complexity disappears.</span><span className="intro-small">Product-minded engineering<br/>from interface to database.</span></div></section>

        <section id="work" className="work container section">
          <div className="section-intro" data-reveal>
            <div><p className="eyebrow">Selected work</p><h2>Built to be <em>useful.</em></h2></div>
            <p>Two products. Two different problems. The same attention to clarity, performance and reliable user flows.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.name} data-reveal>
                <div className="project-visual-wrap"><ProductWindow type={project.visual}/></div>
                <div className="project-info">
                  <div className="project-topline"><span>{project.index}</span><span>{project.eyebrow}</span></div>
                  <div className="project-title-row"><h3>{project.name}</h3><a href={project.href} onClick={(e) => e.preventDefault()} aria-label={`Open ${project.name}`}><Icon name="external" size={17}/></a></div>
                  <p>{project.description}</p>
                  <div className="chips">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-stats">{project.stats.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
                  <button className="project-link" onClick={() => go('contact')}>{project.action} <Icon name="arrow" size={14}/></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="container">
            <div className="section-intro compact" data-reveal><div><p className="eyebrow">Technology</p><h2>A focused <em>toolkit.</em></h2></div><p>Enough range to take a feature from interface to database and ship it with care.</p></div>
            <div className="skill-grid">{skillGroups.map(group => <div className="skill" data-reveal key={group.title}><div className="skill-head"><div className="skill-icon"><Icon name={group.icon} size={17}/></div><h3>{group.title}</h3></div><div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
          </div>
        </section>

        <section id="about" className="about container section">
          <div className="about-copy" data-reveal>
            <p className="eyebrow">About</p>
            <h2>Calm systems.<br/><em>Strong foundations.</em></h2>
            <p>I’m a Computer Science engineering graduate who enjoys the parts of software that need both structure and judgment: clean interfaces, sensible data models, secure workflows and useful product decisions.</p>
            <p>Right now I’m focused on full-stack product development, especially SaaS workflows and AI-assisted experiences, while strengthening core software engineering fundamentals.</p>
          </div>
          <div className="about-list" data-reveal>
            <div className="timeline-item"><span>2026 — now</span><b>CA Saathi</b><small>Full-stack SaaS · AI workflows · PostgreSQL</small></div>
            <div className="timeline-item"><span>2025</span><b>KodNest Technologies</b><small>Java · SQL · React · Agile development</small></div>
            <div className="timeline-item"><span>Education</span><b>{EDUCATION.university}</b><small>B.E. Computer Science & Engineering · CGPA 7.72</small></div>
            <div className="timeline-item"><span>School</span><b>{EDUCATION.school}</b><small>CBSE · Intermediate 89.4% · Matriculation 10.0 CGPA</small></div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container contact-card" data-reveal>
            <div className="contact-copy"><p className="eyebrow">Contact</p><h2>Good software starts with a <em>good conversation.</em></h2><p>Open to entry-level software engineering opportunities and thoughtful conversations about building useful products.</p></div>
            <div className="contact-actions"><a className="pill primary large" href="mailto:rishipandey941@gmail.com">rishipandey941@gmail.com <Icon name="arrow" size={15}/></a><div className="socials"><a href={LINKS.github} target="_blank" rel="noreferrer"><Icon name="github" size={16}/> GitHub</a><a href={LINKS.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={16}/> LinkedIn</a></div></div>
          </div>
        </section>
      </main>

      <footer className="footer container"><span>© {new Date().getFullYear()} Rishi Pandey</span><span>Designed with restraint.</span><button onClick={() => go('home')} aria-label="Back to top"><Icon name="arrowUp" size={14}/></button></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
