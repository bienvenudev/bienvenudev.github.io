import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Sharing App Case Study | Bienvenu Cyuzuzo",
  description:
    "Building a full-stack car sharing web application as part of a structured bootcamp sprint in Kigali, Rwanda.",
};

const META = [
  { label: "Year",  value: "2025 – 2026" },
  { label: "Type",  value: "Team Project" },
  { label: "Role",  value: "Web Developer" },
  { label: "Stack", value: "React · TypeScript · NestJS · Docker" },
];

export default function CarSharingCaseStudy() {
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
          Car Sharing App
        </h1>
        <p className="text-(--text-muted) text-lg font-medium">
          Full-stack car sharing platform — Kigali, Rwanda
        </p>
      </div>

      {/* ── Hero screenshot — bleeds wider than the prose column ─ */}
      {/* 📸 Replace with: screenshot of the car sharing app dashboard / homepage */}
      <div
        className="rounded-2xl overflow-hidden border border-(--border-card) bg-(--bg-card)
                   flex items-center justify-center h-[420px] mb-10"
        style={{
          width: "min(90vw, 1100px)",
          marginLeft: "calc(50% - min(45vw, 550px))",
        }}
      >
        <p className="text-(--text-subtle) text-sm text-center px-8 leading-[1.8]">
          📸 <strong className="text-(--text)">Replace with:</strong> Car Sharing App — dashboard or booking screen<br />
          <span className="text-xs">(desktop or mobile view)</span>
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
        A full-stack car sharing web application built collaboratively within a
        structured bootcamp sprint environment at The Gym, Kigali. The platform
        enables users to list, discover, and book vehicles, handling the full
        lifecycle from authentication through to booking management.
      </p>

      {/* ── The Problem ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Problem
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Car ownership in Kigali is growing, yet idle vehicles represent an
        underutilised asset. The project explored building a peer-to-peer car
        sharing platform that connects vehicle owners with people who need
        short-term access — reducing costs for both parties while promoting
        more efficient use of existing resources.
      </p>

      {/* ── My Role ──────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        My Role
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I contributed as a web developer within an agile team, working primarily
        on the NestJS backend. My responsibilities included implementing REST API
        endpoints, writing business logic within the modular architecture, and
        integrating authentication flows. I also collaborated closely with
        frontend teammates and used Git &amp; GitHub for version control throughout.
      </p>

      {/* ── What I Built ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Built
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">REST API endpoints for core booking and vehicle management flows</li>
        <li className="mb-[0.4rem] leading-[1.7]">Authentication system (registration, login, JWT-based session handling)</li>
        <li className="mb-[0.4rem] leading-[1.7]">Business logic within a structured NestJS modular architecture</li>
        <li className="mb-[0.4rem] leading-[1.7]">Containerized services using Docker for consistent dev environments</li>
        <li className="mb-[0.4rem] leading-[1.7]">Collaboration via Git &amp; GitHub in an agile sprint workflow</li>
      </ul>

      {/* ── Screenshot: interior view ────────────────────────── */}
      {/* 📸 Replace with: a booking flow or vehicle listing screen */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card) bg-(--bg-card)
                        flex items-center justify-center h-[280px]">
          <p className="text-(--text-subtle) text-sm text-center px-8 leading-[1.8]">
            📸 <strong className="text-(--text)">Replace with:</strong> Booking flow or vehicle listing screen<br />
            <span className="text-xs">(any interior page showing the application UI)</span>
          </p>
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Vehicle listing — browse &amp; booking interface
        </figcaption>
      </figure>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Tech Stack
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">React &amp; TypeScript — component-based frontend</li>
        <li className="mb-[0.4rem] leading-[1.7]">NestJS — modular, structured backend framework</li>
        <li className="mb-[0.4rem] leading-[1.7]">Docker — containerized services for consistent environments</li>
        <li className="mb-[0.4rem] leading-[1.7]">Git &amp; GitHub — version control and team collaboration</li>
      </ul>

      {/* ── Challenges ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Challenges &amp; Solutions
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> What were the specific technical or
        collaboration challenges? E.g., coordinating backend/frontend contracts
        across team members, handling auth edge cases, working within sprint
        constraints, Docker networking issues.
      </div>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Outcomes
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> What was delivered at the end of the
        sprint? Was the project demoed or reviewed? Any positive feedback from
        mentors or peers?
      </div>

      {/* ── Learnings ────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Learned
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        This project was my first experience working within a structured backend
        framework (NestJS) and a real team environment with defined sprint cycles.
        I developed a deeper appreciation for modular architecture, the value of
        clear API contracts between frontend and backend, and how Docker removes
        the &ldquo;works on my machine&rdquo; problem in team projects.
      </p>

    </article>
  );
}
