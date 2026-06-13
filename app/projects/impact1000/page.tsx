import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact1000 Africa Case Study | Bienvenu Cyuzuzo",
  description:
    "How I built the promotional website for the Impact 1000 Africa Initiative by Pulsepedia Group.",
};

const TAGS = ["HTML", "CSS", "JavaScript", "Client Work", "Non-profit Initiative", "Pan-African"];

export default function Impact1000CaseStudy() {
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
          Impact1000 Africa
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
          A promotional website for the Impact 1000 Africa Initiative by
          Pulsepedia Group, a programme designed to train and empower 1,000
          businesses across the African continent.
        </p>
        <a
          href="https://pulsepediagroup.com/impact1000-africa/"
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
        Impact1000 Africa is an initiative under the Pulsepedia Group umbrella,
        targeting the development and empowerment of 1,000 African businesses
        through training, mentorship, and resources. The promotional site needed
        to clearly communicate the initiative&apos;s mission, eligibility criteria,
        and how businesses can get involved.
      </p>

      {/* ── The Problem ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">The Problem</h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The initiative was launching and needed a web presence that could quickly
        build awareness and drive applications from eligible businesses across
        Africa. The page had to work across a diverse audience (different
        countries, device types, and internet connection speeds) while
        maintaining a compelling, aspirational tone.
      </p>

      {/* ── My Role ──────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">My Role</h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I built this as part of my work with Pulsepedia Group, handling the
        front-end development for the initiative&apos;s landing page. The page was
        integrated into the existing Pulsepedia Group website.
      </p>

      {/* ── What I Built ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">What I Built</h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">A focused landing page communicating the initiative&apos;s core mission</li>
        <li className="mb-[0.4rem] leading-[1.7]">Programme overview section: what the initiative offers and who it is for</li>
        <li className="mb-[0.4rem] leading-[1.7]">Application/participation call-to-action section</li>
        <li className="mb-[0.4rem] leading-[1.7]">Responsive layout optimised for mobile users across Africa</li>
        <li className="mb-[0.4rem] leading-[1.7]">Integration into the parent Pulsepedia Group website</li>
      </ul>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">Tech Stack</h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">HTML5 &amp; CSS3: semantic structure and styling</li>
        <li className="mb-[0.4rem] leading-[1.7]">JavaScript: interactive UI components</li>
        <li className="mb-[0.4rem] leading-[1.7]">Integration with existing CMS / site structure</li>
      </ul>

      {/* ── Challenges ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">Challenges &amp; Solutions</h2>
      <div className="px-5 py-4 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted) my-6">
        ✏️ <strong>Fill this in:</strong> What were the specific constraints?
        E.g., working within an existing design system, tight deadline for the
        launch, designing for audiences with variable internet access, or
        integrating with an existing platform.
      </div>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">Outcomes</h2>
      <div className="px-5 py-4 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted) my-6">
        ✏️ <strong>Fill this in:</strong> Did the initiative meet its
        application targets? Was there notable traffic to the page? Add any
        results or client feedback you can share here.
      </div>

      {/* ── What I Learned ───────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">What I Learned</h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Building for a pan-African audience reinforced how important it is to
        design with real-world constraints in mind, not the fast fibre
        connection at your desk. I also gained experience working within an
        existing brand system and understanding how a landing page fits into a
        larger marketing funnel.
      </p>
    </article>
  );
}
