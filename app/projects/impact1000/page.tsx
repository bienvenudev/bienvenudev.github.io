import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact1000 Africa Case Study | Bienvenu Cyuzuzo",
  description:
    "How I built the promotional website for the Impact 1000 Africa Initiative by Pulsepedia Group.",
};

export default function Impact1000CaseStudy() {
  return (
    <article className="case-study">
      <Link href="/#Projects" className="back-link">
        ← Back to Projects
      </Link>

      {/* Hero */}
      <div className="case-study-hero">
        <h1>Impact1000 Africa</h1>
        <div className="tag-list">
          <span className="tag">HTML</span>
          <span className="tag">CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">Client Work</span>
          <span className="tag">Non-profit Initiative</span>
          <span className="tag">Pan-African</span>
        </div>
        <p>
          A promotional website for the Impact 1000 Africa Initiative by
          Pulsepedia Group, a programme designed to train and empower 1,000
          businesses across the African continent.
        </p>
        <a
          href="https://pulsepediagroup.com/impact1000-africa/"
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
        Impact1000 Africa is an initiative under the Pulsepedia Group umbrella,
        targeting the development and empowerment of 1,000 African businesses
        through training, mentorship, and resources. The promotional site needed
        to clearly communicate the initiative&apos;s mission, eligibility criteria,
        and how businesses can get involved.
      </p>

      {/* Problem */}
      <h2>The Problem</h2>
      <p>
        The initiative was launching and needed a web presence that could quickly
        build awareness and drive applications from eligible businesses across
        Africa. The page had to work across a diverse audience (different
        countries, device types, and internet connection speeds) while
        maintaining a compelling, aspirational tone.
      </p>

      {/* Role */}
      <h2>My Role</h2>
      <p>
        I built this as part of my work with Pulsepedia Group, handling the
        front-end development for the initiative&apos;s landing page. The page was
        integrated into the existing Pulsepedia Group website.
      </p>

      {/* What I built */}
      <h2>What I Built</h2>
      <ul>
        <li>A focused landing page communicating the initiative&apos;s core mission</li>
        <li>Programme overview section: what the initiative offers and who it is for</li>
        <li>Application/participation call-to-action section</li>
        <li>Responsive layout optimised for mobile users across Africa</li>
        <li>Integration into the parent Pulsepedia Group website</li>
      </ul>

      {/* Tech stack */}
      <h2>Tech Stack</h2>
      <ul>
        <li>HTML5 &amp; CSS3: semantic structure and styling</li>
        <li>JavaScript: interactive UI components</li>
        <li>Integration with existing CMS / site structure</li>
      </ul>

      {/* Challenges */}
      <h2>Challenges &amp; Solutions</h2>
      <div className="placeholder-note">
        ✏️ <strong>Fill this in:</strong> What were the specific constraints?
        E.g., working within an existing design system, tight deadline for the
        launch, designing for audiences with variable internet access, or
        integrating with an existing platform.
      </div>

      {/* Outcomes */}
      <h2>Outcomes</h2>
      <div className="placeholder-note">
        ✏️ <strong>Fill this in:</strong> Did the initiative meet its
        application targets? Was there notable traffic to the page? Add any
        results or client feedback you can share here.
      </div>

      {/* Learnings */}
      <h2>What I Learned</h2>
      <p>
        Building for a pan-African audience reinforced how important it is to
        design with real-world constraints in mind, not the fast fibre
        connection at your desk. I also gained experience working within an
        existing brand system and understanding how a landing page fits into a
        larger marketing funnel.
      </p>
    </article>
  );
}
