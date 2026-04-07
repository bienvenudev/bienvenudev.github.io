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

const PROJECTS = [
  {
    num: "01",
    name: "DriveKGL",
    desc: "Car rental website for a Kigali-based client.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://drivekgl.com/",
    slug: "drivekgl",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)",
  },
  {
    num: "02",
    name: "Wasemac",
    desc: "Corporate website for a water & sewage engineering firm in Rwanda.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://wasemacltd.com/",
    slug: "wasemac",
    gradient: "linear-gradient(135deg, #042f2e 0%, #0d9488 100%)",
  },
  {
    num: "03",
    name: "Impact1000 Africa",
    desc: "Promotional site for an initiative training 1,000 businesses across Africa.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://pulsepediagroup.com/impact1000-africa/",
    slug: "impact1000",
    gradient: "linear-gradient(135deg, #431407 0%, #c2410c 100%)",
  },
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
      <section id="Projects" className="py-20">
        <div className="mb-10">
          <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-extrabold tracking-[-0.02em] text-[var(--text)]">
            Projects
          </h2>
          <p className="mt-1 text-[0.95rem] text-[var(--text-muted)]">Selected client work</p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {PROJECTS.map(({ num, name, desc, tags, live, slug, gradient }) => (
            <article
              key={slug}
              className="rounded-[20px] overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card)] transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              {/* Gradient top */}
              <div
                className="h-[180px] relative overflow-hidden"
                style={{ background: gradient }}
              >
                <span
                  className="text-[5rem] font-black leading-none absolute right-4 -bottom-2 tracking-[-0.04em] tabular-nums pointer-events-none select-none"
                  style={{ color: "rgba(255,255,255,0.08)" }}
                  aria-hidden="true"
                >
                  {num}
                </span>
              </div>

              {/* Body */}
              <div className="px-6 pt-5 pb-6 flex flex-col gap-2">
                <h3 className="text-[1.1rem] font-bold tracking-[-0.02em] text-[var(--text)]">
                  {name}
                </h3>
                <p className="text-[0.9rem] text-[var(--text-muted)] leading-[1.6]">{desc}</p>

                <div className="flex flex-wrap gap-[0.4rem] mt-1">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="text-[0.72rem] font-medium text-[var(--text-subtle)] bg-[var(--bg-card-hover)] py-[0.15rem] px-2 rounded-full border border-[var(--border)] tracking-[0.02em] uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mt-2">
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[var(--accent)] no-underline hover:underline"
                  >
                    Live site ↗
                  </a>
                  <Link
                    href={`/projects/${slug}`}
                    className="text-sm font-semibold text-[var(--accent)] no-underline hover:underline"
                  >
                    Case Study →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section id="Skills" className="py-20">
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-extrabold tracking-[-0.02em] text-[var(--text)] mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap gap-[0.6rem]">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="text-sm font-medium py-[0.4rem] px-4 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-muted)] tracking-[0.01em] transition-colors duration-200 cursor-default hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]"
            >
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
