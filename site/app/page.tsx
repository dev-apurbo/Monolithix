import {
  ArrowRight,
  Braces,
  Check,
  Cloud,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
} from 'lucide-react';

const capabilities = [
  { icon: Code2, label: 'Product engineering', value: 'ACTIVE' },
  { icon: Database, label: 'Data systems', value: 'SYNCED' },
  { icon: Cloud, label: 'Cloud delivery', value: 'READY' },
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
    </main>
  );
}
