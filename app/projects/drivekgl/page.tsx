import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DriveKGL Case Study | Bienvenu Cyuzuzo",
  description:
    "How I designed and built the DriveKGL car rental website for a client's business in Rwanda.",
};

const TAGS = ["HTML", "CSS", "JavaScript", "Client Work", "Rwanda"];

export default function DriveKGLCaseStudy() {
  return (
    <article className="max-w-[720px] mx-auto mt-24 mb-24">
      <Link
        href="/#Projects"
        className="inline-flex items-center gap-1.5 text-sm font-semibold
                   text-(--text-muted) hover:text-(--accent) transition-colors
                   no-underline mb-10"
      >
        ← Back to Projects
      </Link>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="mb-12 pb-10 border-b border-(--border-card)">
        <h1 className="text-(length:--text-case-hero) font-black tracking-[-0.04em] leading-[1.1] text-(--text) mb-4">
          DriveKGL
        </h1>
        <div className="flex flex-wrap gap-2 my-4">
          {TAGS.map((t) => (
            <span
              key={t}
              className="text-[0.78rem] font-medium px-[0.7rem] py-[0.2rem] rounded-full bg-(--accent-dim) text-(--accent) border"
              style={{ borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          A car rental website built for a client&apos;s business in Kigali, Rwanda.
          The goal was a fast, professional online presence that converts visitors
          into inquiries.
        </p>
        <a
          href="https://drivekgl.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-(--accent) hover:underline no-underline"
        >
          Visit live site ↗
        </a>
      </div>

      {/* ── Overview ─────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">Overview</h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        DriveKGL is a car rental service based in Kigali. The client needed a
        website that clearly communicated their available fleet, pricing, and
        booking process, all without unnecessary complexity.
      </p>

      {/* ── The Problem ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">The Problem</h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The client was operating entirely through phone calls and word of mouth,
        with no online presence. Potential customers had no way to browse the
        fleet, understand pricing, or reach out outside of business hours.
      </p>

      {/* ── My Role ──────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">My Role</h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I handled the full project from initial brief to deployment. This
        included requirements gathering, design, development, and handoff.
      </p>

      {/* ── What I Built ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">What I Built</h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">Landing page highlighting the rental service and value proposition</li>
        <li className="mb-[0.4rem] leading-[1.7]">Fleet showcase section with car details and availability</li>
        <li className="mb-[0.4rem] leading-[1.7]">Clear calls-to-action linking to WhatsApp and phone for bookings</li>
        <li className="mb-[0.4rem] leading-[1.7]">Responsive layout that works well on low-end mobile devices common in Rwanda</li>
        <li className="mb-[0.4rem] leading-[1.7]">Fast load times through optimised images and minimal JavaScript</li>
      </ul>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">Tech Stack</h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">HTML5 &amp; CSS3: semantic markup and hand-crafted styles</li>
        <li className="mb-[0.4rem] leading-[1.7]">Vanilla JavaScript: for interactive UI elements</li>
        <li className="mb-[0.4rem] leading-[1.7]">No frameworks: kept the build lightweight for performance</li>
      </ul>

      {/* ── Challenges ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">Challenges &amp; Solutions</h2>
      <div className="px-5 py-4 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted) my-6">
        ✏️ <strong>Fill this in:</strong> Describe specific challenges you faced
        (e.g., design decisions, client feedback rounds, mobile performance on
        slow connections) and how you solved them.
      </div>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">Outcomes</h2>
      <div className="px-5 py-4 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted) my-6">
        ✏️ <strong>Fill this in:</strong> Add any measurable results, e.g.,
        &ldquo;The client reported a 3× increase in inquiries within the first month.&rdquo;
      </div>

      {/* ── What I Learned ───────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">What I Learned</h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Working with a real client sharpened my ability to translate business
        requirements into design decisions. I also deepened my appreciation for
        performance budgets, Rwanda&apos;s mobile network conditions made image
        optimisation non-negotiable, not a nice-to-have.
      </p>
    </article>
  );
}
