import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  Cloud,
  CloudCog,
  Code2,
  Component,
  Database,
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from 'lucide-react';

const capabilities = [
  { icon: Code2, label: 'Product engineering', value: 'ACTIVE' },
  { icon: Database, label: 'Data systems', value: 'SYNCED' },
  { icon: Cloud, label: 'Cloud delivery', value: 'READY' },
];

const services = [
  {
    icon: Component,
    number: '01',
    title: 'Product strategy & UX',
    copy: 'Turn complex requirements into a focused roadmap, clear journeys, and interfaces people actually enjoy using.',
  },
  {
    icon: Globe2,
    number: '02',
    title: 'Web application engineering',
    copy: 'Fast, resilient platforms built around your business logic—not forced into a one-size-fits-all template.',
  },
  {
    icon: Smartphone,
    number: '03',
    title: 'Mobile product development',
    copy: 'Purpose-built mobile experiences that feel native, stay maintainable, and connect cleanly to your ecosystem.',
  },
  {
    icon: Bot,
    number: '04',
    title: 'AI & workflow automation',
    copy: 'Practical automation that removes repetitive work, improves decisions, and keeps humans in control.',
  },
  {
    icon: CloudCog,
    number: '05',
    title: 'Cloud systems & APIs',
    copy: 'Secure infrastructure, thoughtful integrations, and APIs designed to grow with your product.',
  },
  {
    icon: Gauge,
    number: '06',
    title: 'Performance & modernization',
    copy: 'Untangle legacy bottlenecks, improve stability, and give existing software a sharper second life.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Frame the right problem',
    copy: 'We align on the users, business outcome, constraints, and the smallest valuable product to ship.',
  },
  {
    number: '02',
    title: 'Design the whole system',
    copy: 'Experience, architecture, and delivery are shaped together so good ideas survive implementation.',
  },
  {
    number: '03',
    title: 'Build, learn, improve',
    copy: 'Short cycles, visible progress, and clean releases keep the product useful from the first launch onward.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Monolithix home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>Monolithix</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
        </nav>

        <a className="header-cta" href="#contact">
          Start a project <ArrowRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Software studio / Dhaka &amp; beyond
          </div>

          <h1>
            Software that moves your <span>business forward.</span>
          </h1>

          <p className="hero-lede">
            Monolithix designs and engineers sharp digital products—from first
            idea to scalable launch. One focused team, every layer covered.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Build with us <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#work">
              Explore our work
            </a>
          </div>

          <div className="hero-proof" aria-label="Our approach">
            <span>
              <Check size={15} /> Strategy
            </span>
            <span>
              <Check size={15} /> Experience
            </span>
            <span>
              <Check size={15} /> Engineering
            </span>
          </div>
        </div>

        <div className="system-card" aria-label="Monolithix delivery system">
          <div className="system-card-glow" />
          <div className="system-topbar">
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span>MONOLITHIX / CORE</span>
            <span className="online"><i /> ONLINE</span>
          </div>

          <div className="system-body">
            <div className="system-label">
              <span>DELIVERY ENGINE</span>
              <span>v2.6</span>
            </div>

            <div className="core-visual">
              <div className="core-orbit core-orbit-one" />
              <div className="core-orbit core-orbit-two" />
              <div className="core-mark">
                <Layers3 size={34} strokeWidth={1.5} />
              </div>
              <span className="core-node node-one" />
              <span className="core-node node-two" />
              <span className="core-node node-three" />
            </div>

            <div className="capability-list">
              {capabilities.map(({ icon: Icon, label, value }) => (
                <div className="capability-row" key={label}>
                  <span className="capability-icon"><Icon size={16} /></span>
                  <span>{label}</span>
                  <span className="capability-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="system-footer">
              <span><Braces size={14} /> BUILD_0826</span>
              <span><ShieldCheck size={14} /> SECURE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="capability-strip" aria-label="What we build">
        <p>Built for ambitious teams</p>
        <div>
          <span>Web applications</span>
          <span>Mobile platforms</span>
          <span>AI automation</span>
          <span>Cloud systems</span>
        </div>
      </section>

      <section className="section-shell services-section" id="services">
        <div className="section-kicker">
          <span>01</span>
          Capabilities
        </div>
        <div className="split-heading">
          <h2>One team for the<br />whole product.</h2>
          <p>
            From a blank page to a production system, we connect product
            thinking with dependable engineering at every step.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, number, title, copy }) => (
            <article className="service-card" key={title}>
              <div className="service-card-top">
                <Icon size={22} strokeWidth={1.5} />
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#contact" aria-label={`Discuss ${title}`}>
                Discuss this <ArrowUpRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-kicker">
          <span>02</span>
          Product thinking
        </div>
        <div className="split-heading">
          <h2>Built around real<br />work, not trends.</h2>
          <p>
            We make complex systems feel calm. These product concepts show the
            kind of clear, useful software Monolithix is built to deliver.
          </p>
        </div>

        <div className="work-grid">
          <article className="work-card work-card-wide">
            <div className="work-copy">
              <span className="work-type">Operations platform / Concept</span>
              <h3>Kinetiq</h3>
              <p>
                A unified financial operations workspace that turns scattered
                reporting into clear, confident decisions.
              </p>
              <div className="work-tags">
                <span>Product design</span><span>Data systems</span><span>Web app</span>
              </div>
            </div>
            <div className="product-window finance-window" aria-hidden="true">
              <div className="product-window-bar"><i /><i /><i /><span>kinetiq / overview</span></div>
              <div className="finance-layout">
                <div className="mini-sidebar">
                  <b>K</b><i className="active" /><i /><i /><i />
                </div>
                <div className="finance-main">
                  <div className="mini-heading"><span>Overview</span><i /></div>
                  <div className="metric-row">
                    <div><small>NET FLOW</small><b>$84.2k</b><em>+14.8%</em></div>
                    <div><small>RUNWAY</small><b>18.4 mo</b><em>Healthy</em></div>
                  </div>
                  <div className="chart-card">
                    <div className="chart-title"><span>Operating health</span><small>LAST 8 MONTHS</small></div>
                    <div className="chart-bars">
                      {[32, 46, 41, 58, 52, 70, 65, 84].map((height, index) => (
                        <i key={index} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="work-card work-card-tall">
            <div className="work-copy">
              <span className="work-type">Field service / Concept</span>
              <h3>RelayOS</h3>
              <p>
                A mobile-first command layer that keeps field teams, schedules,
                and critical updates moving together.
              </p>
              <div className="work-tags">
                <span>Mobile</span><span>Automation</span><span>Cloud</span>
              </div>
            </div>
            <div className="phone-stage" aria-hidden="true">
              <div className="phone-card phone-card-back">
                <div className="phone-notch" />
                <span className="route-line route-a" /><span className="route-line route-b" />
                <i className="map-dot map-dot-one" /><i className="map-dot map-dot-two" />
              </div>
              <div className="phone-card">
                <div className="phone-notch" />
                <div className="phone-header"><small>GOOD MORNING</small><b>Today’s route</b></div>
                <div className="route-progress"><span><i /></span><em>4 of 6 complete</em></div>
                <div className="task-card active"><small>10:30</small><b>Site inspection</b><span>Uttara, Dhaka</span></div>
                <div className="task-card"><small>12:15</small><b>Equipment handoff</b><span>Gulshan, Dhaka</span></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell process-section" id="process">
        <div className="section-kicker">
          <span>03</span>
          How we work
        </div>
        <div className="process-heading">
          <h2>Less ceremony.<br />More momentum.</h2>
          <div className="process-principle">
            <Workflow size={28} strokeWidth={1.4} />
            <p>Small senior team. Direct collaboration. Weekly working software.</p>
          </div>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell about-section" id="about">
        <div className="about-panel">
          <div className="about-copy">
            <div className="section-kicker"><span>04</span> Why Monolithix</div>
            <h2>Solid at the core.<br />Flexible everywhere else.</h2>
            <p>
              The name reflects how we work: one accountable product team, a
              clear technical foundation, and no gaps between the people who
              plan, design, and build.
            </p>
          </div>
          <div className="about-values">
            <div><Sparkles size={20} /><strong>Clarity first</strong><span>We make the difficult understandable.</span></div>
            <div><Layers3 size={20} /><strong>Built as one</strong><span>Every layer works toward the same goal.</span></div>
            <div><ShieldCheck size={20} /><strong>Made to last</strong><span>Clean systems beat quick fixes.</span></div>
          </div>
        </div>
      </section>

      <section className="section-shell contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <span className="contact-label">A good project starts with a clear conversation.</span>
        <h2>Have a hard problem?<br /><span>Good. Let’s solve it.</span></h2>
        <p>
          Tell us what you are building, where it is stuck, or what needs to
          change. We’ll respond with a practical next step.
        </p>
        <a className="button button-primary contact-button" href="mailto:hello@monolithix.dev?subject=New%20project%20for%20Monolithix">
          hello@monolithix.dev <ArrowUpRight size={18} />
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>Monolithix</span>
        </a>
        <p>Software, shaped around what matters.</p>
        <span>© 2026 Monolithix</span>
      </footer>
    </main>
  );
}
