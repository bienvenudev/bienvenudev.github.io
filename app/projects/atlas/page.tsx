import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas Case Study | Bienvenu Cyuzuzo",
  description:
    "Building Atlas — a mentorship platform connecting Rwandan diaspora professionals with local youth for career growth.",
};

const META = [
  { label: "Year",  value: "2025" },
  { label: "Type",  value: "Team Project" },
  { label: "Role",  value: "Developer" },
  { label: "Stack", value: "TBD" },
];

export default function AtlasCaseStudy() {
  return (
    <article className="max-w-[720px] mx-auto mt-24 mb-24">

      {/* ── Back link ─────────────────────────────────────────── */}
      <Link
        href="/#Projects"
        className="inline-flex items-center gap-1.5 text-sm font-semibold
                   text-(--text-muted) hover:text-(--accent) transition-colors
                   no-underline mb-10"
      >
        ← Back to Projects
      </Link>

      {/* ── Header ───────────────────────────────────────────── */}
      <div className="text-center mb-10">
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-black tracking-[-0.04em]
                       leading-[1.05] text-(--text) mb-3">
          Atlas
        </h1>
        <p className="text-(--text-muted) text-lg font-medium">
          Diaspora mentorship platform — Rwanda
        </p>
      </div>

      {/* ── Hero screenshot — bleeds wider than the prose column ─ */}
      {/* 📸 Replace with: Atlas homepage or dashboard screenshot */}
      <div
        className="rounded-2xl overflow-hidden border border-(--border-card) bg-(--bg-card)
                   flex items-center justify-center h-[420px] mb-10"
        style={{
          width: "min(90vw, 1100px)",
          marginLeft: "calc(50% - min(45vw, 550px))",
        }}
      >
        <p className="text-(--text-subtle) text-sm text-center px-8 leading-[1.8]">
          📸 <strong className="text-(--text)">Replace with:</strong> Atlas — homepage or mentor discovery screen<br />
          <span className="text-xs">(desktop view)</span>
        </p>
      </div>

      {/* ── Meta strip ──────────────────────────────────────── */}
      <div className="flex gap-8 flex-wrap pb-8 border-b border-(--border-card)">
        {META.map(({ label, value }) => (
          <div key={label}>
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.08em] text-(--text-subtle) block mb-0.5">
              {label}
            </span>
            <span className="text-(--text) font-medium text-sm">{value}</span>
          </div>
        ))}
      </div>

      {/* ── Overview ─────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Overview
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Atlas is a mentorship and professional networking platform designed to
        bridge the gap between successful Rwandan diaspora professionals worldwide
        and ambitious local youth. The platform facilitates meaningful mentorship
        relationships, enabling diaspora members to give back to the community
        by sharing their expertise and networks.
      </p>

      {/* ── The Problem ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Problem
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Rwandan youth with ambition often lack access to mentors who have
        navigated the global career paths they aspire to. Meanwhile, diaspora
        professionals who want to give back have no structured way to connect
        with the next generation at home. The gap between these two groups is
        not a lack of willingness — it&apos;s a lack of infrastructure.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Atlas aims to be that infrastructure: a trusted, focused platform where
        connections lead to real career transformation.
      </p>

      {/* ── My Role ──────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        My Role
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I contributed as a developer on the Atlas team, working on building and
        connecting the platform&apos;s core features. This involved collaborating
        with teammates to define the user flows and then implementing them
        end-to-end.
      </p>

      {/* ── What I Built ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Built
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">Mentor discovery and profile browsing</li>
        <li className="mb-[0.4rem] leading-[1.7]">Connection and mentorship request flows</li>
        <li className="mb-[0.4rem] leading-[1.7]">User onboarding for both mentors and mentees</li>
        <li className="mb-[0.4rem] leading-[1.7]">Profile management for diaspora professionals</li>
      </ul>

      {/* ── Screenshot: interior view ────────────────────────── */}
      {/* 📸 Replace with: mentor profile or connection screen */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card) bg-(--bg-card)
                        flex items-center justify-center h-[280px]">
          <p className="text-(--text-subtle) text-sm text-center px-8 leading-[1.8]">
            📸 <strong className="text-(--text)">Replace with:</strong> Mentor profile or discovery screen<br />
            <span className="text-xs">(any interior page of the Atlas platform)</span>
          </p>
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Mentor discovery — connect with diaspora professionals
        </figcaption>
      </figure>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Tech Stack
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> Add the technologies used (frontend
        framework, backend, database, hosting, etc.).
      </div>

      {/* ── Challenges ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Challenges &amp; Solutions
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> What were the specific challenges?
        E.g., designing matching logic, building trust between strangers online,
        handling timezone differences for diaspora users.
      </div>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Outcomes
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> Current status of the project —
        MVP delivered, in active development, launched, users onboarded?
      </div>

      {/* ── Learnings ────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Learned
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Atlas reinforced how much product thinking matters alongside technical
        execution. Building a platform centred on human relationships — not just
        data — pushed me to consider trust, tone, and onboarding experience as
        seriously as any technical requirement. The mission of the project also
        made it one of the most personally meaningful things I&apos;ve worked on.
      </p>

    </article>
  );
}
