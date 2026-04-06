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
      <section
        id="About"
        className="min-h-[calc(100svh-64px)] pt-16 flex items-center"
      >
        <div className="grid grid-cols-[1fr_auto] gap-16 items-center w-full py-16 max-md:grid-cols-1 max-md:gap-10 max-md:text-center max-md:py-10">

          {/* Left: text */}
          <div className="flex flex-col gap-5 max-w-[560px] max-md:items-center max-md:order-2 max-md:max-w-full">

            {/* Status badge */}
            <span className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border-card)] px-3 py-1.5 rounded-full w-fit tracking-[0.01em]">
              <span
                className="w-[7px] h-[7px] rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] shrink-0"
                aria-hidden="true"
              />
              Available for work
            </span>

            {/* Heading */}
            <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-black tracking-[-0.04em] leading-[1.05] text-[var(--text)]">
              Hi, I&apos;m Bienvenu.<br />
              <span className="text-[var(--accent)]">Frontend Dev.</span>
            </h1>

            {/* Bio */}
            <p className="text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.75] text-[var(--text-muted)] max-w-[500px]">
              A software engineering student and web developer from Rwanda,
              building{" "}
              <span className="text-[var(--accent)] font-semibold">accessible</span>,
              performant products. Studying at{" "}
              <a
                href="https://alueducation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text)] font-semibold underline underline-offset-[3px] decoration-[var(--border-card)] hover:decoration-[var(--accent)] transition-colors"
              >
                ALU
              </a>{" "}
              &amp; training at{" "}
              <a
                href="https://www.the-gym.rw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text)] font-semibold underline underline-offset-[3px] decoration-[var(--border-card)] hover:decoration-[var(--accent)] transition-colors"
              >
                The Gym
              </a>
              .
            </p>

            <SocialLinks />
          </div>

          {/* Right: avatar */}
          <div className="shrink-0 flex justify-center max-md:order-1">
            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-2 border-[var(--border-card)] shadow-[0_0_0_8px_var(--accent-dim)] max-md:w-[180px] max-md:h-[180px]">
              <Image
                src="/images/bienvenu-bw.jpg"
                alt="Bienvenu Cyuzuzo"
                fill
                sizes="260px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section id="Projects" className="projects-section section">
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
                <a href="https://drivekgl.com/" target="_blank" rel="noopener noreferrer">
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
                Corporate website for a water &amp; sewage engineering firm in Rwanda.
              </p>
              <div className="project-tags">
                {["HTML", "CSS", "JavaScript"].map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="https://wasemacltd.com/" target="_blank" rel="noopener noreferrer">
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
                Promotional site for an initiative training 1,000 businesses across Africa.
              </p>
              <div className="project-tags">
                {["HTML", "CSS", "JavaScript"].map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="https://pulsepediagroup.com/impact1000-africa/" target="_blank" rel="noopener noreferrer">
                  Live site ↗
                </a>
                <Link href="/projects/impact1000">Case Study →</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section id="Skills" className="skills-section section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Background ────────────────────────────────────── */}
      <section id="Background" className="bg-section section">
        <h2>Background</h2>
        <div className="bg-entries">
          {/* Education */}
          <div className="bg-entry">
            <span className="bg-label">Education</span>
            <span className="bg-date">2024 – 2027</span>
            <h3>BSc. (Hons) Software Engineering</h3>
            <p className="bg-org">
              <a href="https://alueducation.com/" target="_blank" rel="noopener noreferrer">
                African Leadership University
              </a>{" "}
              — Rwanda
            </p>
            <p>
              A software engineering programme in partnership with Holberton School,
              focused on practical skills through project-based and peer learning.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-entry">
            <span className="bg-label">Experience</span>
            <span className="bg-date">2024 – 2025</span>
            <h3>Software Developer Trainee</h3>
            <p className="bg-org">
              <a href="https://www.the-gym.rw/" target="_blank" rel="noopener noreferrer">
                The Gym
              </a>{" "}
              — Rwanda
            </p>
            <p>
              Intensive training programme with mentorship from international senior
              developers. Selected based on merit; focused on building
              production-quality software through real-world projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
