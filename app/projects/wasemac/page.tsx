import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wasemac Case Study | Bienvenu Cyuzuzo",
  description:
    "How I built the corporate website for Wasemac Ltd, a water and sewage solutions company in Rwanda.",
};

const META = [
  { label: "Year",   value: "2024" },
  { label: "Client", value: "Wasemac Ltd" },
  { label: "Role",   value: "Sole Developer" },
  { label: "Stack",  value: "HTML · CSS · JS" },
];

export default function WasemacCaseStudy() {
  return (
    <article className="max-w-[720px] mx-auto mb-24">

      {/* ── Full-bleed hero ──────────────────────────────────── */}
      {/*
        width: 100vw + margin-left: calc(50% - 50vw)
        breaks out of the 720px prose column to fill the full viewport.
        50% = half the article width (360px at max), 50vw = half viewport.
      */}
      <div
        className="relative overflow-hidden min-h-[90svh] flex flex-col"
        style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
      >
        {/* Background — 📸 Replace with: full-width screenshot of wasemacltd.com */}
        <Image
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
          alt="Water and sewage engineering infrastructure — placeholder, replace with Wasemac site screenshot"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient overlay: light at top → heavy at bottom for legible text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/80" />

        {/* Project info — anchored to bottom */}
        <div className="relative z-10 mt-auto px-8 pb-14 max-w-[1024px] mx-auto w-full text-center">

          {/* Title */}
          <h1 className="text-white font-black text-[clamp(3rem,8vw,5.5rem)]
                         tracking-[-0.04em] leading-[1.05] mb-3">
            Wasemac
          </h1>

          {/* Tagline */}
          <p className="text-white/70 text-lg font-medium mb-7">
            Corporate web presence for a water &amp; sewage engineering firm — Rwanda
          </p>

          {/* CTA */}
          <a
            href="https://wasemacltd.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white
                       bg-white/20 hover:bg-white/30 px-4 py-2.5 rounded-lg
                       border border-white/25 transition-colors no-underline"
          >
            Visit live site ↗
          </a>
        </div>
      </div>

      {/* ── Meta strip ──────────────────────────────────────── */}
      <div className="flex gap-8 flex-wrap pt-10 pb-8 border-b border-(--border-card)">
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
        Wasemac Ltd is a professional engineering firm specialising in water and
        sewage infrastructure projects across Rwanda. They needed a credible
        online presence that reflects the scale and quality of their work and
        gives potential partners and government clients confidence in their
        capabilities.
      </p>

      {/* ── Screenshot 1: Homepage ───────────────────────────── */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card) bg-(--bg-card)
                        flex items-center justify-center h-[280px]">
          <p className="text-(--text-subtle) text-sm text-center px-8 leading-[1.8]">
            📸 <strong className="text-(--text)">Replace with:</strong> Wasemac homepage screenshot<br />
            <span className="text-xs">(hero section + services overview)</span>
          </p>
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Wasemac homepage — hero &amp; services overview
        </figcaption>
      </figure>

      {/* ── The Problem ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Problem
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Without a website, Wasemac struggled to demonstrate their project
        portfolio and technical expertise to prospective clients who increasingly
        look for this information online before making procurement decisions.
        The site needed to feel professional and trustworthy — appropriate for
        a company bidding on large infrastructure contracts.
      </p>

      {/* ── My Role ──────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        My Role
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I was the sole developer on this project. I worked directly with the
        client to understand their audience, define the content structure, and
        build and deploy the site.
      </p>

      {/* ── What I Built ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Built
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">Multi-section corporate homepage (hero, services, about, projects)</li>
        <li className="mb-[0.4rem] leading-[1.7]">Services page clearly outlining their engineering offerings</li>
        <li className="mb-[0.4rem] leading-[1.7]">Project portfolio section to showcase past work</li>
        <li className="mb-[0.4rem] leading-[1.7]">Company profile / about page with key team information</li>
        <li className="mb-[0.4rem] leading-[1.7]">Contact form and location information</li>
        <li className="mb-[0.4rem] leading-[1.7]">Fully responsive layout optimised for mobile and desktop</li>
      </ul>

      {/* ── Screenshot 2: Services / Interior page ───────────── */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card) bg-(--bg-card)
                        flex items-center justify-center h-[280px]">
          <p className="text-(--text-subtle) text-sm text-center px-8 leading-[1.8]">
            📸 <strong className="text-(--text)">Replace with:</strong> Wasemac services page screenshot<br />
            <span className="text-xs">(services listing or project portfolio section)</span>
          </p>
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Services page — engineering offerings
        </figcaption>
      </figure>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Tech Stack
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">HTML5 &amp; CSS3 — semantic structure with custom styles</li>
        <li className="mb-[0.4rem] leading-[1.7]">Vanilla JavaScript — interactive components</li>
        <li className="mb-[0.4rem] leading-[1.7]">Responsive design patterns for mobile-first layout</li>
      </ul>

      {/* ── Challenges ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Challenges &amp; Solutions
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> What were the specific design or
        technical challenges? E.g., communicating technical services to a
        non-technical audience, working with limited content from the client,
        image-heavy portfolio pages and performance trade-offs.
      </div>

      {/* ── Outcomes ─────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Outcomes
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> Did the site lead to new business
        inquiries? Did the client report positive feedback from partners?
        Add any qualitative or quantitative results here.
      </div>

      {/* ── Learnings ────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Learned
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Corporate sites require a different tone and information architecture
        than consumer products. This project taught me how to design for trust
        and credibility — using whitespace, typography, and structure to signal
        professionalism — rather than just building a technically functional site.
      </p>

    </article>
  );
}
