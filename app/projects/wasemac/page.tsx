import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wasemac Case Study | Bienvenu Cyuzuzo",
  description:
    "How I built the corporate website for Wasemac Ltd, a water and sewage solutions company in Rwanda.",
};

export default function WasemacCaseStudy() {
  return (
    <article className="case-study">
      <Link href="/#Projects" className="back-link">
        ← Back to Projects
      </Link>

      {/* Hero */}
      <div className="case-study-hero">
        <h1>Wasemac</h1>
        <div className="tag-list">
          <span className="tag">HTML</span>
          <span className="tag">CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Client Work</span>
          <span className="tag">Corporate</span>
          <span className="tag">Rwanda</span>
        </div>
        <p>
          A corporate website for Wasemac Ltd, a water and sewage engineering
          solutions company operating in Rwanda. The site communicates their
          services, expertise, and project portfolio to prospective clients.
        </p>
        <a
          href="https://wasemacltd.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-cta"
        >
          Visit live site ↗
        </a>
      </div>

      {/* Overview */}
      <h2>Overview</h2>
      <p>
        Wasemac Ltd is a professional engineering firm specialising in water and
        sewage infrastructure projects across Rwanda. They needed a credible
        online presence that reflects the scale and quality of their work and
        gives potential partners and government clients confidence in their
        capabilities.
      </p>

      {/* Problem */}
      <h2>The Problem</h2>
      <p>
        Without a website, Wasemac struggled to demonstrate their project
        portfolio and technical expertise to prospective clients who increasingly
        look for this information online before making procurement decisions.
        The site needed to feel professional and trustworthy — appropriate for
        a company bidding on large infrastructure contracts.
      </p>

      {/* Role */}
      <h2>My Role</h2>
      <p>
        I was the sole developer on this project. I worked directly with the
        client to understand their audience, define the content structure, and
        build and deploy the site.
      </p>

      {/* What I built */}
      <h2>What I Built</h2>
      <ul>
        <li>A multi-section corporate homepage (hero, services, about, projects)</li>
        <li>Services page clearly outlining their engineering offerings</li>
        <li>Project portfolio section to showcase past work</li>
        <li>Company profile / about page with key team information</li>
        <li>Contact form and location information</li>
        <li>Fully responsive layout optimised for mobile and desktop</li>
      </ul>

      {/* Tech stack */}
      <h2>Tech Stack</h2>
      <ul>
        <li>HTML5 &amp; CSS3 — semantic structure with custom styles</li>
        <li>Vanilla JavaScript — for interactive components</li>
        <li>Responsive design patterns for mobile-first layout</li>
      </ul>

      {/* Challenges */}
      <h2>Challenges &amp; Solutions</h2>
      <div className="placeholder-note">
        ✏️ <strong>Fill this in:</strong> What were the specific design or
        technical challenges? E.g., communicating technical services to a
        non-technical audience, working with limited content from the client,
        image-heavy portfolio pages and performance trade-offs.
      </div>

      {/* Outcomes */}
      <h2>Outcomes</h2>
      <div className="placeholder-note">
        ✏️ <strong>Fill this in:</strong> Did the site lead to new business
        inquiries? Did the client report positive feedback from partners?
        Add any qualitative or quantitative results here.
      </div>

      {/* Learnings */}
      <h2>What I Learned</h2>
      <p>
        Corporate sites require a different tone and information architecture
        than consumer products. This project taught me how to design for trust
        and credibility — using whitespace, typography, and structure to signal
        professionalism — rather than just building a technically functional site.
      </p>
    </article>
  );
}
