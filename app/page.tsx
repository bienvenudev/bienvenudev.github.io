import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const SKILLS = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Web Accessibility (A11Y)",
  "Git",
  "GitHub",
  "Vite",
  "npm",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="About" className="hero-section">
        <div className="wrapper hero-grid">
          {/* Left: text */}
          <div className="hero-content">
            <span className="status-badge">
              <span className="status-dot" aria-hidden="true" />
              Available for work
            </span>

            <h1 className="hero-title">
              Hi, I&apos;m Bienvenu.<br />
              <span className="hero-title--accent">Software Developer</span>
            </h1>

            <p className="hero-bio">
              A software engineering student and web developer from Rwanda,
              building{" "}
              <span className="text-accent">accessible</span>,
              performant products. Studying at{" "}
              <a
                href="https://alueducation.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ALU
              </a>{" "}
              &amp; training at{" "}
              <a
                href="https://www.the-gym.rw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Gym
              </a>
              .
            </p>

            <SocialLinks />
          </div>

          {/* Right: avatar */}
          <div className="hero-avatar">
            <div className="avatar-ring">
              <Image
                src="/images/Bienvenu- BW Mugshot.jpg"
                alt="Bienvenu Cyuzuzo"
                width={260}
                height={260}
                className="avatar-photo"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section id="Projects" className="projects-section section">
        <div className="wrapper">
          <div className="section-header">
            <h2>Projects</h2>
            <p className="section-sub">Selected client work</p>
          </div>

          <div className="project-grid">
            {/* DriveKGL */}
            <article className="project-card">
              <div className="project-visual project-visual--drivekgl">
                <span className="project-num" aria-hidden="true">01</span>
              </div>
              <div className="project-body">
                <h3>DriveKGL</h3>
                <p>Car rental website for a Kigali-based client.</p>
                <div className="project-tags">
                  {["HTML", "CSS", "JavaScript"].map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href="https://drivekgl.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site ↗
                  </a>
                  <Link href="/projects/drivekgl">Case Study →</Link>
                </div>
              </div>
            </article>

            {/* Wasemac */}
            <article className="project-card">
              <div className="project-visual project-visual--wasemac">
                <span className="project-num" aria-hidden="true">02</span>
              </div>
              <div className="project-body">
                <h3>Wasemac</h3>
                <p>
                  Corporate website for a water &amp; sewage engineering firm in
                  Rwanda.
                </p>
                <div className="project-tags">
                  {["HTML", "CSS", "JavaScript"].map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href="https://wasemacltd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site ↗
                  </a>
                  <Link href="/projects/wasemac">Case Study →</Link>
                </div>
              </div>
            </article>

            {/* Impact1000 */}
            <article className="project-card">
              <div className="project-visual project-visual--impact1000">
                <span className="project-num" aria-hidden="true">03</span>
              </div>
              <div className="project-body">
                <h3>Impact1000 Africa</h3>
                <p>
                  Promotional site for an initiative training 1,000 businesses
                  across Africa.
                </p>
                <div className="project-tags">
                  {["HTML", "CSS", "JavaScript"].map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href="https://pulsepediagroup.com/impact1000-africa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site ↗
                  </a>
                  <Link href="/projects/impact1000">Case Study →</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section id="Skills" className="skills-section section">
        <div className="wrapper">
          <h2>Skills</h2>
          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Background ────────────────────────────────────── */}
      <section id="Background" className="bg-section section">
        <div className="wrapper">
          <h2>Background</h2>
          <div className="bg-entries">
            {/* Education */}
            <div className="bg-entry">
              <span className="bg-label">Education</span>
              <span className="bg-date">2024 – 2027</span>
              <h3>BSc. (Hons) Software Engineering</h3>
              <p className="bg-org">
                <a
                  href="https://alueducation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  African Leadership University
                </a>{" "}
                — Rwanda
              </p>
              <p>
                A software engineering programme in partnership with Holberton
                School, focused on practical skills through project-based and
                peer learning.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-entry">
              <span className="bg-label">Experience</span>
              <span className="bg-date">2024 – 2025</span>
              <h3>Software Developer Trainee</h3>
              <p className="bg-org">
                <a
                  href="https://www.the-gym.rw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Gym
                </a>{" "}
                — Rwanda
              </p>
              <p>
                Intensive training programme with mentorship from international
                senior developers. Selected based on merit; focused on building
                production-quality software through real-world projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
