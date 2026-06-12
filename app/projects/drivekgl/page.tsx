import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DriveKGL Case Study | Bienvenu Cyuzuzo",
  description:
    "How I designed and built the DriveKGL car rental website for a client's business in Rwanda.",
};

export default function DriveKGLCaseStudy() {
  return (
    <article className="case-study">
      <Link href="/#Projects" className="back-link">
        ← Back to Projects
      </Link>

      {/* Hero */}
      <div className="case-study-hero">
        <h1>DriveKGL</h1>
        <div className="tag-list">
          <span className="tag">HTML</span>
          <span className="tag">CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Client Work</span>
          <span className="tag">Rwanda</span>
        </div>
        <p>
          A car rental website built for a client&apos;s business in Kigali, Rwanda.
          The goal was a fast, professional online presence that converts visitors
          into inquiries.
        </p>
        <a
          href="https://drivekgl.com/"
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
        DriveKGL is a car rental service based in Kigali. The client needed a
        website that clearly communicated their available fleet, pricing, and
        booking process, all without unnecessary complexity.
      </p>

      {/* Problem */}
      <h2>The Problem</h2>
      <p>
        The client was operating entirely through phone calls and word of mouth,
        with no online presence. Potential customers had no way to browse the
        fleet, understand pricing, or reach out outside of business hours.
      </p>

      {/* Role */}
      <h2>My Role</h2>
      <p>
        I handled the full project from initial brief to deployment. This
        included requirements gathering, design, development, and handoff.
      </p>

      {/* What I built */}
      <h2>What I Built</h2>
      <ul>
        <li>Landing page highlighting the rental service and value proposition</li>
        <li>Fleet showcase section with car details and availability</li>
        <li>Clear calls-to-action linking to WhatsApp and phone for bookings</li>
        <li>Responsive layout that works well on low-end mobile devices common in Rwanda</li>
        <li>Fast load times through optimised images and minimal JavaScript</li>
      </ul>

      {/* Tech stack */}
      <h2>Tech Stack</h2>
      <ul>
        <li>HTML5 &amp; CSS3: semantic markup and hand-crafted styles</li>
        <li>Vanilla JavaScript: for interactive UI elements</li>
        <li>No frameworks: kept the build lightweight for performance</li>
      </ul>

      {/* Challenges */}
      <h2>Challenges &amp; Solutions</h2>
      <div className="placeholder-note">
        ✏️ <strong>Fill this in:</strong> Describe specific challenges you faced
        (e.g., design decisions, client feedback rounds, mobile performance on
        slow connections) and how you solved them.
      </div>

      {/* Outcomes */}
      <h2>Outcomes</h2>
      <div className="placeholder-note">
        ✏️ <strong>Fill this in:</strong> Add any measurable results, e.g.,
        &ldquo;The client reported a 3× increase in inquiries within the first month.&rdquo;
      </div>

      {/* Learnings */}
      <h2>What I Learned</h2>
      <p>
        Working with a real client sharpened my ability to translate business
        requirements into design decisions. I also deepened my appreciation for
        performance budgets, Rwanda&apos;s mobile network conditions made image
        optimisation non-negotiable, not a nice-to-have.
      </p>
    </article>
  );
}
