import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const SKILLS = [
  { name: "HTML5",       icon: "devicon-html5-plain colored" },
  { name: "CSS",        icon: "https://raw.githubusercontent.com/CSS-Next/logo.css/48f24dccd4e169118d17bab998c3d276e95167df/css.svg" },
  { name: "Tailwind",    icon: "devicon-tailwindcss-plain colored" },
  { name: "JavaScript",  icon: "devicon-javascript-plain colored" },
  { name: "TypeScript",  icon: "devicon-typescript-plain colored" },
  { name: "React",       icon: "devicon-react-original colored" },
  { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", darkInvert: true },
  { name: "Node.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "NestJS",      icon: "devicon-nestjs-plain colored" },
  { name: "Git",         icon: "devicon-git-plain colored" },
  { name: "GitHub",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", darkInvert: true },
  { name: "MongoDB",     icon: "devicon-mongodb-plain colored" },
  { name: "PostgreSQL",  icon: "devicon-postgresql-plain colored" },
  { name: "Docker",      icon: "devicon-docker-plain colored" },
  { name: "VSCode",      icon: "devicon-vscode-plain colored" },
  { name: "Linux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Vite",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "npm",         icon: "devicon-npm-original-wordmark colored" },
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
          <div className="flex flex-col gap-5 max-w-140 max-md:items-center max-md:order-2 max-md:max-w-full">

            {/* Status badge */}
            <span className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-(--text-muted) bg-(--bg-card) border border-(--border-card) px-3 py-1.5 rounded-full w-fit tracking-[0.01em]">
              <span
                className="w-1.75 h-1.75 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e] shrink-0"
                aria-hidden="true"
              />
              Available for work
            </span>

            {/* Heading */}
            <h1 className="text-(length:--text-hero) font-black tracking-[-0.04em] leading-[1.05] text-(--text)">
              Hi, I&apos;m Bienvenu.<br />
              <span className="text-(--accent)">Frontend Dev.</span>
            </h1>

            {/* Bio */}
            <p className="text-(length:--text-body) leading-[1.75] text-(--text-muted) max-w-125">
              A software engineering student and web developer from Rwanda,
              building{" "}
              <span className="text-(--accent) font-semibold">accessible</span>,
              performant products. Studying at{" "}
              <a
                href="https://alueducation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text) font-semibold underline underline-offset-[3px] decoration-(--border-card) hover:decoration-(--accent) transition-colors"
              >
                ALU
              </a>{" "}
              &amp; training at{" "}
              <a
                href="https://www.the-gym.rw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text) font-semibold underline underline-offset-[3px] decoration-(--border-card) hover:decoration-(--accent) transition-colors"
              >
                The Gym
              </a>
              .
            </p>

            <SocialLinks />
          </div>

          {/* Right: avatar */}
          <div className="shrink-0 flex justify-center max-md:order-1">
            <div className="relative w-65 h-65 rounded-full overflow-hidden border-2 border-(--border-card) shadow-[0_0_0_8px_var(--accent-dim)] max-md:w-45 max-md:h-45">
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
          <h2 className="text-(length:--text-section) font-extrabold tracking-[-0.02em] text-(--text)">
            Projects
          </h2>
          <p className="mt-1 text-[0.95rem] text-(--text-muted)">Selected client work</p>
        </div>

        <div className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
          {PROJECTS.map(({ num, name, desc, tags, live, slug, gradient }) => (
            <article
              key={slug}
              className="rounded-[20px] overflow-hidden border border-(--border-card) bg-(--bg-card) transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              {/* Gradient top */}
              <div
                className="h-45 relative overflow-hidden"
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
                <h3 className="text-[1.1rem] font-bold tracking-[-0.02em] text-(--text)">
                  {name}
                </h3>
                <p className="text-[0.9rem] text-(--text-muted) leading-[1.6]">{desc}</p>

                <div className="flex flex-wrap gap-[0.4rem] mt-1">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="text-[0.72rem] font-medium text-(--text-subtle) bg-(--bg-card-hover) py-[0.15rem] px-2 rounded-full border border-(--border) tracking-[0.02em] uppercase"
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
                    className="text-sm font-semibold text-(--accent) no-underline hover:underline"
                  >
                    Live site ↗
                  </a>
                  <Link
                    href={`/projects/${slug}`}
                    className="text-sm font-semibold text-(--accent) no-underline hover:underline"
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
        <h2 className="text-(length:--text-section) font-extrabold tracking-[-0.02em] text-(--text) mb-8">
          Skills
        </h2>

        {/* Marquee */}
        <div className="relative overflow-hidden marquee-wrap">
          {/* Left fade */}
          <div
            className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-(--bg) to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          {/* Right fade */}
          <div
            className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-(--bg) to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Scrolling strip — duplicated for seamless loop */}
          <div className="marquee-track flex w-max items-end pb-2 gap-4">
            {[...SKILLS, ...SKILLS].map(({ name, icon, darkInvert }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 mx-4"
              >
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center"
                  style={{ background: darkInvert ? "var(--skill-mono-bg)" : "var(--bg-card)" }}
                >
                  {icon.startsWith("https://") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={icon} alt="" width={40} height={40} style={darkInvert ? { filter: "var(--skill-mono-filter)" } : undefined} aria-hidden="true" />
                  ) : (
                    <i className={`${icon} text-[2.50rem]`} aria-hidden="true" />
                  )}
                </div>
                <span className="text-xs text-(--text-muted) whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Background ────────────────────────────────────── */}
      <section id="Background" className="py-20">
        <h2 className="text-(length:--text-section) font-extrabold tracking-[-0.02em] text-(--text) mb-8">
          Background
        </h2>
        <div className="flex flex-col gap-4">

          {/* Education */}
          <div className="p-6 border border-(--border-card) rounded-2xl bg-(--bg-card) flex gap-4 items-start">
            {/* Logo badge */}
            <a
              href="https://alueducation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/alu-logo-color.png"
                alt="African Leadership University"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </a>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-(--accent)">
                Education
              </span>
              <div className="flex items-baseline justify-between gap-4 mt-0.5">
                <h3 className="text-[1.05rem] font-bold tracking-[-0.02em] text-(--text)">
                  BSc. (Hons) Software Engineering
                </h3>
                <span className="text-[0.8rem] text-(--text-subtle) whitespace-nowrap shrink-0">
                  2024 – 2027
                </span>
              </div>
              <p className="text-sm text-(--text-muted) mt-0.5">
                <a
                  href="https://alueducation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 hover:text-(--accent) transition-colors"
                >
                  African Leadership University
                </a>{" "}
                — Rwanda
              </p>
              <p className="text-[0.9rem] text-(--text-muted) leading-[1.7] mt-3">
                A software engineering programme in partnership with Holberton School,
                focused on practical skills through project-based and peer learning.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="p-6 border border-(--border-card) rounded-2xl bg-(--bg-card) flex gap-4 items-start">
            {/* Logo badge */}
            <a
              href="https://www.the-gym.rw/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/thegym-logo.jpeg"
                alt="The Gym"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </a>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-(--accent)">
                Experience
              </span>
              <div className="flex items-baseline justify-between gap-4 mt-0.5">
                <h3 className="text-[1.05rem] font-bold tracking-[-0.02em] text-(--text)">
                  Software Developer Trainee
                </h3>
                <span className="text-[0.8rem] text-(--text-subtle) whitespace-nowrap shrink-0">
                  2024 – 2025
                </span>
              </div>
              <p className="text-sm text-(--text-muted) mt-0.5">
                <a
                  href="https://www.the-gym.rw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 hover:text-(--accent) transition-colors"
                >
                  The Gym
                </a>{" "}
                — Rwanda
              </p>
              <p className="text-[0.9rem] text-(--text-muted) leading-[1.7] mt-3">
                Intensive training programme with mentorship from international senior
                developers. Selected based on merit; focused on building
                production-quality software through real-world projects.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
