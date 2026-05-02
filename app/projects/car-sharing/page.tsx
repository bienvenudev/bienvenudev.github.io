import type { Metadata } from "next";
import Link from "next/link";
import LightboxProvider from "@/components/LightboxProvider";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Moni Share Case Study | Bienvenu Cyuzuzo",
  description:
    "How I built a full-stack car sharing application at The Gym, Kigali — simulating enterprise team workflows across two structured sprints.",
};

const META = [
  { label: "Year",    value: "2025 – 2026" },
  { label: "Context", value: "The Gym Curriculum" },
  { label: "Team",    value: "5 developers" },
  { label: "Role",    value: "Web Developer" },
  { label: "Stack",   value: "React · TypeScript · NestJS · PostgreSQL · Docker" },
];

const TRELLO_STAGES = ["Backlog", "Ready", "In Progress", "In Review", "Done"];
const REVIEW_STAGES = ["Peer Review", "Coach Review", "Senior Review"];

const lnk = "underline underline-offset-[3px] decoration-current/35 hover:decoration-(--accent) transition-colors";

export default function MoniShareCaseStudy() {
  return (
    <LightboxProvider>
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
          Moni Share
        </h1>
        <p className="text-(--text-muted) text-lg font-medium">
          Car sharing platform —{" "}
          <a href="https://www.the-gym.rw/" target="_blank" rel="noopener noreferrer"
             className={lnk}>The Gym</a>
          , Kigali
        </p>
        <p className="text-sm text-(--text-subtle) mt-2">
          Private repository · No public deployment
        </p>
      </div>

      {/* ── Hero screenshot — bleeds wider than the prose column ─ */}
      <div
        className="rounded-2xl overflow-hidden border border-(--border-card) mb-10"
        style={{
          width: "min(90vw, 1100px)",
          marginLeft: "calc(50% - min(45vw, 550px))",
        }}
      >
        <LightboxImage
          src="/images/projects/car-sharing/welcome-page.png"
          alt="Moni Share welcome page"
          width={1100}
          height={733}
          className="w-full h-auto"
          caption="Moni Share welcome page"
          priority
        />
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
        Moni Share is a car sharing web application built as part of{" "}
        <a href="https://www.the-gym.rw/" target="_blank" rel="noopener noreferrer"
           className={`font-semibold ${lnk}`}>The Gym</a>&apos;s
        curriculum in Kigali. It&apos;s a platform where car owners can list their
        vehicles and others can browse and book them.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        What made this project different wasn&apos;t just what we built — it was{" "}
        <em>how</em> we built it. The entire project was structured to simulate
        enterprise team dynamics: Figma designs, Trello boards, daily standups,
        and a real code review pipeline. It was one of the most complete simulations
        of professional development I&apos;ve been through.
      </p>

      {/* ── The Workflow ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Workflow
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-4">
        Work was managed through Trello. Each ticket moved through five stages:
      </p>

      {/* Trello pipeline */}
      <div className="flex items-center gap-2 flex-wrap my-4">
        {TRELLO_STAGES.map((stage, i) => (
          <span key={stage} className="flex items-center gap-2">
            <span
              className="px-2.5 py-1 rounded-md text-xs font-semibold border"
              style={{
                background: "var(--bg-card-hover)",
                border: "1px solid var(--border-card)",
                color: "var(--text)",
              }}
            >
              {stage}
            </span>
            {i < TRELLO_STAGES.length - 1 && (
              <span className="text-(--text-subtle) text-xs">→</span>
            )}
          </span>
        ))}
      </div>

      <p className="text-(--text-muted) leading-[1.8] mt-5 mb-3">
        Once a ticket was moved to &ldquo;In Review&rdquo;, it went through a three-stage
        review process before it could be marked done:
      </p>

      {/* Review pipeline */}
      <div className="flex items-center gap-2 flex-wrap my-4">
        {REVIEW_STAGES.map((stage, i) => (
          <span key={stage} className="flex items-center gap-2">
            <span
              className="px-3 py-1.5 rounded-md text-xs font-semibold border"
              style={{
                background: "var(--accent-dim)",
                borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
                color: "var(--accent)",
              }}
            >
              {stage}
            </span>
            {i < REVIEW_STAGES.length - 1 && (
              <span className="text-(--text-subtle) text-xs">→</span>
            )}
          </span>
        ))}
      </div>

      <p className="text-(--text-muted) leading-[1.8] mt-5 mb-[0.9rem]">
        The Senior Review was a live call — she would go through your code,
        give feedback, and share insights from real production experience. That
        part was especially valuable.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Every morning started with a standup:{" "}
        <em>what did I do yesterday, what am I doing today, any blockers?</em>{" "}
        It felt repetitive at first. Then I understood why teams do it.
      </p>

      {/* ── Two Sprints ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Two Sprints
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-4">
        The project ran across two distinct phases, separated by a short break:
      </p>

      <div className="flex flex-col gap-4 mb-2">
        <div
          className="px-5 py-4 rounded-xl border"
          style={{ background: "var(--bg-card)", borderColor: "var(--border-card)" }}
        >
          <p className="text-sm font-bold text-(--text) mb-0.5">
            Sprint 1 — Frontend
          </p>
          <p className="text-xs font-semibold text-(--accent) mb-2">
            Sept 29 – Nov 28, 2025
          </p>
          <p className="text-sm text-(--text-muted) leading-[1.6]">
            Build the full frontend from Figma designs, against a prepared Swagger API.
            The backend already existed — our job was to consume it correctly and make
            the UI match the specs.
          </p>
        </div>
        <div
          className="px-5 py-4 rounded-xl border"
          style={{ background: "var(--bg-card)", borderColor: "var(--border-card)" }}
        >
          <p className="text-sm font-bold text-(--text) mb-0.5">
            Sprint 2 — Backend
          </p>
          <p className="text-xs font-semibold text-(--accent) mb-2">
            Dec 19, 2025 – Feb 20, 2026
          </p>
          <p className="text-sm text-(--text-muted) leading-[1.6]">
            Build the NestJS backend ourselves. The same functionality the frontend
            relied on — now we had to implement it. Same Trello workflow, same review
            pipeline.
          </p>
        </div>
      </div>

      {/* ── Sprint 1: Frontend ───────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Sprint 1: Building the Frontend
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        We were given Figma screens and a Swagger API spec. The work was split into
        over 50 Trello tickets. Each team member would pick one up, implement it
        independently, then put it through the full review pipeline.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The features we built covered the full booking flow: browsing available cars,
        making and managing bookings, and handling different user roles
        (driver and car owner).
      </p>

      {/* available-cars screenshot */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card)">
          <LightboxImage
            src="/images/projects/car-sharing/available-cars.png"
            alt="Available cars listing screen"
            width={720}
            height={420}
            className="w-full h-auto"
            caption="Available cars — browse and filter listings"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Available cars — browse and filter listings
        </figcaption>
      </figure>

      {/* 2-col: booking-accepted + my-bookings */}
      <div className="grid grid-cols-2 gap-3 my-8 max-[500px]:grid-cols-1">
        <figure>
          <div className="rounded-xl overflow-hidden border border-(--border-card)">
            <LightboxImage
              src="/images/projects/car-sharing/booking-accepted.png"
              alt="Booking accepted confirmation screen"
              width={360}
              height={300}
              className="w-full h-auto"
              caption="Booking confirmed"
            />
          </div>
          <figcaption className="mt-2 text-center text-[0.75rem] text-(--text-subtle)">
            Booking confirmed
          </figcaption>
        </figure>
        <figure>
          <div className="rounded-xl overflow-hidden border border-(--border-card)">
            <LightboxImage
              src="/images/projects/car-sharing/my-bookings.png"
              alt="My bookings screen"
              width={360}
              height={300}
              className="w-full h-auto"
              caption="My bookings — driver view"
            />
          </div>
          <figcaption className="mt-2 text-center text-[0.75rem] text-(--text-subtle)">
            My bookings — driver view
          </figcaption>
        </figure>
      </div>

      {/* ── Sprint 2: Backend ─────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Sprint 2: Building the Backend
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        After the frontend was signed off, we switched to building the NestJS backend.
        The codebase we were handed to work in was intentionally complex — designed
        to teach us what a production-grade backend actually looks like.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Finding your way around someone else&apos;s large codebase is a real skill.
        This sprint made that very clear.
      </p>

      {/* manage-bookings screenshot */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card)">
          <LightboxImage
            src="/images/projects/car-sharing/manage-bookings.png"
            alt="Manage bookings screen"
            width={720}
            height={420}
            className="w-full h-auto"
            caption="Manage bookings — car owner view"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Manage bookings — car owner view
        </figcaption>
      </figure>

      {/* ── The Architecture ──────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Architecture
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The backend wasn&apos;t structured the way NestJS scaffolds it by default — one
        folder per feature with everything inside. Instead, it used a{" "}
        <strong className="text-(--text)">layered architecture</strong>: a persistence
        layer, a service/domain layer, a controller layer, and a presentation layer,
        each with clearly defined responsibilities.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The architect, Raphael Pigulla from{" "}
        <a href="https://www.maibornwolff.de/en/" target="_blank" rel="noopener noreferrer"
           className={`font-semibold ${lnk}`}>MaibornWolff</a>{" "}
        (a German software company), recorded a walkthrough explaining the design
        decisions. We had to watch it and work through the structure before writing
        a single line. It took time — but it gave me a much better mental model of
        what &ldquo;enterprise backend&rdquo; actually means in practice.
      </p>

      {/* ── A Moment Worth Remembering ───────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        A Moment Worth Remembering
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        During the frontend sprint, we hit a bug where deleting a car from the listing
        wouldn&apos;t reflect in the UI without a full page refresh. We traced it back to a
        race condition — the delete request would resolve but the list query would fetch
        stale data before the backend had finished updating.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        One teammate suggested{" "}
        <a href="https://tanstack.com/query" target="_blank" rel="noopener noreferrer"
           className={`font-semibold ${lnk}`}>TanStack Query</a>.
        Its cache invalidation approach solved the problem cleanly — after a mutation,
        you invalidate the relevant query and the UI updates automatically. I picked
        it up from that conversation, and it&apos;s been part of how I think about data
        fetching ever since.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        That&apos;s something team environments do that solo work doesn&apos;t — you pick up
        tools and patterns through other people solving problems out loud.
      </p>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Tech Stack
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">React &amp; TypeScript — component-based frontend</li>
        <li className="mb-[0.4rem] leading-[1.7]">
          <a href="https://tanstack.com/query" target="_blank" rel="noopener noreferrer"
             className={lnk}>TanStack Query</a>{" "}
          — server state management &amp; cache invalidation
        </li>
        <li className="mb-[0.4rem] leading-[1.7]">NestJS — layered backend architecture</li>
        <li className="mb-[0.4rem] leading-[1.7]">PostgreSQL — relational database</li>
        <li className="mb-[0.4rem] leading-[1.7]">Docker — containerized services</li>
        <li className="mb-[0.4rem] leading-[1.7]">Git &amp; GitHub — version control and peer review</li>
      </ul>

      {/* ── What I Learned ───────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Learned
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Moni Share was the closest thing to a real job I&apos;d experienced before
        actually having one. The Trello workflow, standups, and review pipeline weren&apos;t
        just process for its own sake — they existed because software built by teams
        without structure tends to fall apart.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The two-sprint structure also gave me something rare: perspective on the same
        product from both sides. Building the frontend first meant I deeply understood
        what the API needed to do. Building the backend second meant I understood why
        certain design decisions were made. Most developers only ever see one side at
        a time.
      </p>

    </article>
    </LightboxProvider>
  );
}
