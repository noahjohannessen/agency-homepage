import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import htm from "https://esm.sh/htm@3.1.1";

const html = htm.bind(React.createElement);

const smsHref =
  "sms:+12819083152?&body=Hi%20Noah%2C%20I%27d%20like%20to%20schedule%20a%20short%20call.";
const linkedInUrl = "https://linkedin.com/in/noahrj/";

const services = [
  {
    title: "Website Cleanup",
    text: "Your site might be fine, but if people leave before reaching out, something's off. I'll tighten up the structure, wording, and speed so it actually earns trust.",
  },
  {
    title: "New Websites",
    text: "A clean, straightforward site that shows what you do, who it's for, and how to get in touch. Nothing flashy. Just something that works.",
  },
  {
    title: "Lead Workflows",
    text: "When someone fills out a form or sends a message, what happens next matters. I'll build a simple follow up process so leads don't slip through the cracks.",
  },
  {
    title: "Phone Tech",
    text: "Missed calls happen. I set up text back automations and routing so you can respond quickly, even when you're busy with a job.",
  },
  {
    title: "Google Business Profile",
    text: "Most people search before they call. I'll make sure your Google profile is accurate, filled out, and actually helping you show up in local results.",
  },
];

const fakePortfolio = [
  {
    name: "Cedar North Home Care",
    outcome: "Families were finding them but not reaching out. I simplified the site, tightened the local online presence, and reworked the intake flow. Inquiry quality went up.",
    image: "./cedar.png",
    url: "https://noahjohannessen.github.io/portfolio/cedar-north/",
  },
  {
    name: "Riverline Dental Studio",
    outcome: "Their site looked decent on mobile but fell apart on desktop. Cleaned it up, rewrote the key pages, and got their Google profile pulling more first time callers.",
    image: "./riverline.png",
    url: "https://noahjohannessen.github.io/portfolio/riverline-dental/",
  },
  {
    name: "Lone Star Comfort Services",
    outcome: "Good reputation, bad follow up. Built a lead workflow and missed call text back system so they stopped losing people between the first call and the booking, bundled with new website.",
    image: "./lonestar.png",
    url: "https://noahjohannessen.github.io/portfolio/lone-star-comfort/",
  },
];

function BrandLockup() {
  return html`
    <a className="brand" href="#home" aria-label="Noah Johannessen Home">
      <span className="brand-mark" aria-hidden="true">NJ</span>
      <span className="brand-text">
        <strong>Noah Johannessen</strong>
        <small>Local Growth Consultant</small>
      </span>
    </a>
  `;
}

function Hero() {
  const [imageMissing, setImageMissing] = React.useState(false);

  return html`
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Independent Consultant</p>
          <h1>I Help Local Businesses Get Found Online and Turn Visitors Into Clients</h1>
          <p className="lead">
            I studied Computer Science at Texas A&M and now I work directly with service
            businesses. Fixing what's broken, building what's needed, and setting businesses up for success.
          </p>
          <div className="hero-actions">
            <a className="btn btn-ghost" href="#portfolio">Portfolio</a>
            <a className="btn btn-primary" href=${smsHref}>Send Me a Text</a>
            <a className="btn btn-ghost" href=${linkedInUrl} target="_blank" rel="noreferrer noopener"
              >LinkedIn</a
            >
          </div>
          <div className="meta-list">
            <a href="mailto:njohannessen@tamu.edu">njohannessen@tamu.edu</a>
            <a href="tel:2819083152">2819083152</a>
          </div>
        </div>

        <aside className="headshot-wrap" aria-label="Noah Johannessen headshot">
          ${imageMissing
      ? html`<div className="headshot-fallback" aria-hidden="true">NJ</div>`
      : html`
                  <img
                    src="./headshot.jpg"
                    alt="Noah Johannessen"
                    className="headshot"
                    onError=${() => setImageMissing(true)}
                  />
                `
    }
        </aside>
      </div>
    </section>
  `;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return html`
    <div>
      <header className="site-header">
        <div className="container nav-row">
          <${BrandLockup} />

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded=${menuOpen}
            onClick=${() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <nav className=${menuOpen ? "site-nav open" : "site-nav"} aria-label="Primary">
            <a href="#home" onClick=${() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick=${() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick=${() => setMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick=${() => setMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick=${() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <${Hero} />

        <section id="about" className="section">
          <div className="container">
            <h2>What I Actually Do</h2>
            <p className="section-lead">
              Most local businesses don't need a full agency. They need someone who can look at
              what they have, figure out what's not working, and fix it.
            </p>
            <div className="panel">
              <ul className="outcome-list">
                <li>Make your website clear enough that someone landing on it for the first time knows exactly what you offer.</li>
                <li>Help you show up when people nearby search for your specialty.</li>
                <li>Set up follow up systems so you're not losing leads to slow response times.</li>
                <li>Give you real numbers to look at, not dashboards full of stuff that doesn't matter.</li>
                <li>Focus on a handful of changes that actually move the needle instead of a long to do list.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section split-band">
          <div className="container split-grid">
            <article className="panel">
              <h2>Why Work With Me</h2>
              <p>
                I keep my client list small on purpose. You'll talk to me directly, not an account
                manager, not an intern. I do the work myself and I care more about what actually
                brings you clients than what looks impressive on a report.
              </p>
            </article>

            <article className="panel">
              <h2>A Bit About Me</h2>
              <p>
                I come from a Computer Science background at Texas A&M, but I've always leaned
                more toward building things that solve real problems than chasing academic theory.
                I like clean work and getting things done.
              </p>
            </article>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>What I Can Help With</h2>
            <p className="section-lead">
              Every business is a little different, but these are the areas where I tend to make
              the biggest impact.
            </p>

            <div className="service-grid">
              ${services.map(
    (service) => html`
                  <article className="panel service-card" key=${service.title}>
                    <h3>${service.title}</h3>
                    <p>${service.text}</p>
                  </article>
                `
  )}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <h2>Recent Work</h2>
            <p className="section-lead">A few examples. Names are changed.</p>
            <div className="portfolio-grid">
              ${fakePortfolio.map(
    (item) => html`
                  <article className="panel portfolio-card" key=${item.name}>
                    <a
                      href=${item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="portfolio-thumb-wrap"
                      aria-label=${`Open ${item.name} mock website`}
                    >
                      <img
                        src=${item.image}
                        alt=${`${item.name} mock website thumbnail`}
                        className="portfolio-thumb"
                        loading="lazy"
                      />
                    </a>
                    <p className="mini-tag">Case Study</p>
                    <h3>${item.name}</h3>
                    <p>${item.outcome}</p>
                    <a
                      href=${item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="portfolio-link"
                    >
                      View Website
                    </a>
                  </article>
                `
  )}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <article className="panel how-i-think">
              <h2>How I Approach Things</h2>
              <p>
                I start by looking at what a potential customer actually experiences, from the
                Google search to the phone call. Then I find the spots where people drop off and
                fix those first. No big overhauls, just improvements where they count.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <article className="panel">
              <h2>Let's Talk</h2>
              <p className="section-lead">
                If you're curious whether I can help, just shoot me a text. I'll take a look at
                what you've got and give you an honest take.
              </p>
              <div className="contact-list">
                <a href=${smsHref}>Text: 2819083152</a>
                <a href="mailto:njohannessen@tamu.edu">Email: njohannessen@tamu.edu</a>
                <a href=${linkedInUrl} target="_blank" rel="noreferrer noopener">LinkedIn</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">2026, Noah Johannessen</div>
      </footer>
    </div>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
