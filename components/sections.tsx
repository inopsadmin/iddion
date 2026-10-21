import Link from 'next/link';
import {
  nav,
  hero,
  problem,
  stats,
  platform,
  customers,
  roles,
  features,
  resources,
  calculator,
  trust,
  cta,
  faqs,
  footer,
} from '@/lib/content';
import { Arrow, Icon, LogoMark, MixedTitle, Photo, Pill, Script } from './ui';
import PlatformTabs from './PlatformTabs';
import FeatureCarousel from './FeatureCarousel';
import Newsletter from './Newsletter';

export function SiteHeader() {
  return (
    <header className="header">
      <nav aria-label="Main" className="header__inner">
        <Link href="/" className="brand">
          <LogoMark />
          <span className="brand__name">IDDION</span>
        </Link>
        <div className="header__links">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="header__actions">
          <Link href={nav.login.href} className="btn btn--outline">
            {nav.login.label}
          </Link>
          <a href={nav.cta.href} className="btn btn--dark">
            {nav.cta.label}
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">
            {hero.titleBefore}
            <br />
            <Script>{hero.titleScript}</Script>
            <br />
            {hero.titleAfter}
          </h1>
          <p className="hero__body">{hero.body}</p>
          <div className="btn-row">
            <a href={hero.primary.href} className="btn btn--dark">
              {hero.primary.label} <Arrow />
            </a>
            <a href={hero.secondary.href} className="btn btn--outline">
              {hero.secondary.label}
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="block hero__block hero__block--a" aria-hidden="true" />
          <div className="block hero__block hero__block--b" aria-hidden="true" />
          <div className="block hero__block hero__block--c" aria-hidden="true" />
          <div className="block hero__block hero__block--d" aria-hidden="true" />
          <Photo src={hero.photo.src} alt={hero.photo.alt} className="hero__photo" />
          <div className="live-card">
            <div className="live-card__head">
              <span>{hero.liveCard.title}</span>
              <Pill text="Live" status="ok" />
            </div>
            <div className="live-card__grid">
              {hero.liveCard.tiles.map((t) => (
                <div key={t.label} className="live-card__tile">
                  <div className={`live-card__label live-card__label--${t.tone}`}>{t.label}</div>
                  <div className="live-card__value">{t.value}</div>
                  <div className="live-card__note">{t.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="problem">
      <div className="problem__panel">
        <div className="problem__top">
          <h2 className="h2">{problem.title}</h2>
          <div className="problem__copy">
            {problem.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="problem__cards">
          {problem.cards.map((c) => (
            <div key={c.highlight} className="card-soft">
              <Icon name={c.icon} />
              <p>
                <span className={`text-${c.color}`}>{c.highlight}</span> {c.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="section">
      <div className="wrap split">
        <div className="stats__visual">
          <div className="stats__arch" aria-hidden="true" />
          <Photo src={stats.photo.src} alt={stats.photo.alt} className="stats__photo" />
          <div className="vendor-card">
            <div className="vendor-card__head">
              <span className="vendor-card__dot" aria-hidden="true" />
              <span>
                <span className="vendor-card__name">{stats.vendorCard.name}</span>
                <Pill text={stats.vendorCard.badge} status="ok" />
              </span>
            </div>
            <div className="vendor-card__line">{stats.vendorCard.line1}</div>
            <div className="vendor-card__sub">{stats.vendorCard.line2}</div>
          </div>
        </div>
        <div className="stats__text">
          <h2 className="h2 stats__title">
            <MixedTitle before={stats.titleBefore} script={stats.titleScript} after={stats.titleAfter} />
          </h2>
          <div className="stats__grid">
            <div className="stats__lead">
              <div className="stats__big">{stats.lead.value}</div>
              <p>
                <strong>{stats.lead.strong}</strong> {stats.lead.rest}
              </p>
            </div>
            <div className="stats__side">
              {stats.side.map((s) => (
                <div key={s.value}>
                  <div className="stats__mid">{s.value}</div>
                  <p>
                    <strong>{s.strong}</strong> {s.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Platform() {
  return (
    <section id="platform" className="section section--tight-top">
      <div className="wrap">
        <div className="center-intro">
          <div className="platform__script">{platform.scriptLine}</div>
          <h2 className="platform__title">{platform.title}</h2>
          <p>
            {platform.intro} <strong>{platform.introStrong}</strong> {platform.introAfter}
          </p>
        </div>
        <PlatformTabs />
      </div>
    </section>
  );
}

export function Customers() {
  return (
    <section id="customers" className="section section--no-top">
      <div className="wrap">
        <p className="customers__title">{customers.title}</p>
        <ul className="industries">
          {customers.industries.map((i) => (
            <li key={i.label} className="industry">
              <Icon name={i.icon} />
              <span>{i.label}</span>
            </li>
          ))}
        </ul>
        <ul className="clients" aria-label="Customers">
          {customers.clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Roles() {
  return (
    <section id="roles" className="section section--no-top">
      <div className="wrap">
        <div className="roles__top">
          <div className="roles__intro">
            <h2 className="h2">
              <MixedTitle before={roles.titleBefore} script={roles.titleScript} />
            </h2>
            <p>{roles.body}</p>
          </div>
          <div className="hub" aria-hidden="true">
            <div className="hub__core">
              <div className="hub__inner">
                <LogoMark size={46} />
              </div>
            </div>
            <div className="hub__spokes">
              {roles.hub.map((h) => (
                <div key={h.label} className="hub__spoke">
                  <span className="hub__line" />
                  <span className={`hub__avatar ring-${h.color}`}>{h.initials}</span>
                  <span className={`hub__pill soft-${h.color}`}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="roles__cards">
          {roles.cards.map((c) => (
            <div key={c.label} className="role-card">
              <div className={`role-card__label text-${c.color}`}>{c.label}</div>
              <h3 className="role-card__title">{c.title}</h3>
              <p className="role-card__body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="section section--no-top">
      <div className="wrap">
        <h2 className="h2 features__title">{features.title}</h2>
        <p className="features__body">{features.body}</p>
        <FeatureCarousel />
      </div>
    </section>
  );
}

export function Resources() {
  return (
    <section id="resources" className="section section--no-top">
      <div className="wrap">
        <h2 className="h2 resources__title">
          <MixedTitle before={resources.titleBefore} script={resources.titleScript} after={resources.titleAfter} />
        </h2>
        <div className="resources__grid">
          {resources.items.map((r) => (
            <Link key={r.href} href={r.href} className="resource">
              <Photo src={r.image} alt={r.alt} className="resource__img" />
              <span className="resource__title">{r.title}</span>
              <span className="resource__more">Read more ›</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Calculator() {
  return (
    <section className="calc">
      <div className="calc__wrap">
        <div className="calc__card">
          <div className="calc__text">
            <p className="calc__kicker">{calculator.kicker}</p>
            <h2 className="calc__title">{calculator.title}</h2>
            <p className="calc__body">{calculator.body}</p>
            <Link href={calculator.cta.href} className="calc__btn">
              {calculator.cta.label}
            </Link>
          </div>
          <div className="calc__box">
            <div className="calc__box-title">{calculator.boxTitle}</div>
            <div className="calc__tiles">
              {calculator.tiles.map((t) => (
                <div key={t.label} className="calc__tile">
                  <div className="calc__tile-value">{t.value}</div>
                  <div className="calc__tile-label">{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section id="trust" className="section">
      <div className="wrap split">
        <div className="trust__intro">
          <h2 className="h2">
            <MixedTitle before={trust.titleBefore} script={trust.titleScript} after={trust.titleAfter} />
          </h2>
          <p>{trust.body}</p>
          <Link href={trust.link.href} className="link-arrow">
            {trust.link.label} <Arrow />
          </Link>
        </div>
        <div className="trust__grid">
          {trust.items.map((t) => (
            <div key={t.title} className="trust-card">
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section id="demo" className="section section--no-top">
      <div className="wrap">
        <h2 className="h2 cta__title">
          <MixedTitle before={cta.titleBefore} script={cta.titleScript} after={cta.titleAfter} />
        </h2>
        <div className="cta__grid">
          {cta.cards.map((c) => (
            <div key={c.title} className={`cta-card cta-card--${c.tone}`}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <Link href={c.button.href} className={c.dark ? 'btn btn--dark' : 'btn btn--outline'}>
                {c.button.label} {c.dark ? <Arrow /> : null}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section section--no-top">
      <div className="faq">
        <h2 className="h2 faq__title">FAQs</h2>
        {faqs.map((f, i) => (
          <details key={f.q} className="faq__item" open={i === 0}>
            <summary>
              {f.q}
              <span aria-hidden="true" className="faq__plus">
                +
              </span>
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__news">
            <div className="brand">
              <LogoMark size={30} />
              <span className="brand__name brand__name--light">IDDION</span>
            </div>
            <p className="footer__news-title">{footer.newsletterTitle}</p>
            <p>{footer.newsletterBody}</p>
            <Newsletter />
          </div>
          {footer.columns.map((col) => (
            <div key={col.title} className="footer__col">
              <p className="footer__col-title">{col.title}</p>
              {col.links.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>{footer.legal}</p>
          <div className="footer__legal">
            {footer.bottomLinks.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
