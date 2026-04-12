import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wasemac Case Study | Bienvenu Cyuzuzo",
  description:
    "How I built the corporate website for Wasemac Ltd, a water and sewage solutions company in Rwanda.",
};

export default function WasemacCaseStudy() {
  return (
    <article className="mx-auto mt-28 mb-20 max-w-[720px]">

      {/* Back link */}
      <Link
        href="/#Projects"
        className="inline-flex items-center gap-[0.4rem] mb-10 text-sm font-semibold
                   text-(--text-muted) no-underline py-[0.4rem] px-3
                   border border-(--border-card) rounded-lg bg-(--bg-card)
                   transition-colors duration-200
                   hover:text-(--accent) hover:border-(--accent) hover:no-underline"
      >
        ← Back to Projects
      </Link>

      {/* Hero */}
      <div className="mb-12 pb-10 border-b border-(--border-card)">
        <h1 className="text-(length:--text-case-hero) font-black tracking-[-0.04em] leading-[1.1] mb-4">
          Wasemac
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 my-4">
          {["HTML", "CSS", "JavaScript", "Client Work", "Corporate", "Rwanda"].map((tag) => (
            <span
              key={tag}
              className="text-[0.78rem] font-medium py-[0.2rem] px-[0.7rem]
                         rounded-full bg-(--accent-dim) text-(--accent)
                         border border-(--accent)/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          A corporate website for Wasemac Ltd, a water and sewage engineering
          solutions company operating in Rwanda. The site communicates their
          services, expertise, and project portfolio to prospective clients.
        </p>

        <a
          href="https://wasemacltd.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[0.35rem] mt-5 text-[0.9rem] font-semibold text-(--accent) hover:underline"
        >
          Visit live site ↗
        </a>
      </div>

      {/* Overview */}
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

      {/* Problem */}
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

      {/* Role */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        My Role
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I was the sole developer on this project. I worked directly with the
        client to understand their audience, define the content structure, and
        build and deploy the site.
      </p>

      {/* What I built */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Built
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">A multi-section corporate homepage (hero, services, about, projects)</li>
        <li className="mb-[0.4rem] leading-[1.7]">Services page clearly outlining their engineering offerings</li>
        <li className="mb-[0.4rem] leading-[1.7]">Project portfolio section to showcase past work</li>
        <li className="mb-[0.4rem] leading-[1.7]">Company profile / about page with key team information</li>
        <li className="mb-[0.4rem] leading-[1.7]">Contact form and location information</li>
        <li className="mb-[0.4rem] leading-[1.7]">Fully responsive layout optimised for mobile and desktop</li>
      </ul>

      {/* Tech stack */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Tech Stack
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">HTML5 &amp; CSS3 — semantic structure with custom styles</li>
        <li className="mb-[0.4rem] leading-[1.7]">Vanilla JavaScript — for interactive components</li>
        <li className="mb-[0.4rem] leading-[1.7]">Responsive design patterns for mobile-first layout</li>
      </ul>

      {/* Challenges */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Challenges &amp; Solutions
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> What were the specific design or
        technical challenges? E.g., communicating technical services to a
        non-technical audience, working with limited content from the client,
        image-heavy portfolio pages and performance trade-offs.
      </div>

      {/* Outcomes */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Outcomes
      </h2>
      <div className="my-6 py-4 px-5 border-l-[3px] border-(--accent) bg-(--accent-dim) rounded-r-lg text-sm text-(--text-muted)">
        ✏️ <strong>Fill this in:</strong> Did the site lead to new business
        inquiries? Did the client report positive feedback from partners?
        Add any qualitative or quantitative results here.
      </div>

      {/* Learnings */}
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
