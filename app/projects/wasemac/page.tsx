import type { Metadata } from "next";
import Link from "next/link";
import LightboxProvider from "@/components/LightboxProvider";
import LightboxImage from "@/components/LightboxImage";

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
          Wasemac
        </h1>
        <p className="text-(--text-muted) text-lg font-medium">
          Water &amp; sewage engineering — Rwanda
        </p>
        <a
          href="https://wasemacltd.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold
                     text-(--accent) hover:underline no-underline"
        >
          Visit live site ↗
        </a>
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
          src="/images/projects/wasemac/wasemac-homepage.png"
          alt="Wasemac homepage"
          width={1100}
          height={733}
          className="w-full h-auto"
          caption="Wasemac homepage"
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
        Wasemac Ltd is a professional engineering firm specialising in water and
        sewage infrastructure projects across Rwanda. They needed a credible
        online presence that reflects the scale and quality of their work and
        gives potential partners and government clients confidence in their
        capabilities.
      </p>

      {/* ── The Problem ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Problem
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Without a website, Wasemac struggled to demonstrate their project
        portfolio and technical expertise to prospective clients who increasingly
        look for this information online before making procurement decisions.
        The site needed to feel professional and trustworthy, appropriate for
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

      {/* ── Screenshot: About page ───────────────────────────── */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card)">
          <LightboxImage
            src="/images/projects/wasemac/wasemac-about.png"
            alt="Wasemac about page"
            width={720}
            height={400}
            className="w-full h-auto"
            caption="About page — company profile & team"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          About page — company profile &amp; team
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

      {/* ── Learnings ────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Learned
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Corporate sites require a different tone and information architecture
        than consumer products. This project taught me how to design for trust
        and credibility using whitespace, typography, and structure to signal
        professionalism rather than just building a technically functional site.
      </p>

    </article>
    </LightboxProvider>
  );
}
