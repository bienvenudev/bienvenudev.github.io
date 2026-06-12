import type { Metadata } from "next";
import Link from "next/link";
import LightboxProvider from "@/components/LightboxProvider";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "CBC-ALU Case Study | Bienvenu Cyuzuzo",
  description:
    "How I initiated and led the development of the official website for the Claude Builder Club at ALU — Anthropic's campus AI community.",
};

const META = [
  { label: "Year", value: "2026 – Present" },
  { label: "Context", value: "Anthropic · Claude Builder Clubs" },
  { label: "Role", value: "Technical Advisor & Lead Developer" },
  { label: "Stack", value: "React · TypeScript · Tailwind" },
];

const lnk = "underline underline-offset-[3px] decoration-current/35 hover:decoration-(--accent) transition-colors";

export default function CbcAluCaseStudy() {
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
            CBC-ALU
          </h1>
          <p className="text-(--text-muted) text-lg font-medium">
            Claude Builder Club at African Leadership University
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a
              href="https://cbc-alu.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-(--accent) hover:underline no-underline"
            >
              Live site ↗
            </a>
            <a
              href="https://github.com/Claude-Builder-Club-ALU/cbc-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-(--accent) hover:underline no-underline"
            >
              GitHub ↗
            </a>
          </div>
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
            src="/images/projects/cbc-alu/home.png"
            alt="CBC-ALU website homepage"
            width={1100}
            height={733}
            className="w-full h-auto"
            caption="CBC-ALU homepage"
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

        {/* ── What is the Claude Builder Club ──────────────────── */}
        <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
          What is the Claude Builder Club?
        </h2>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          <a href="https://claude.com/programs/campus" target="_blank" rel="noopener noreferrer"
            className={`font-bold ${lnk}`}>Claude Builder Clubs</a>{" "}
          are{" "}
          <strong className="text-(--text)">
            <a href="https://anthropic.com/" target="_blank" rel="noopener noreferrer"
              className={lnk}>Anthropic</a>&apos;s official student-led campus communities
          </strong>
          , part of the Claude for Education initiative. Club leads run technical
          workshops, hackathons, and demo nights to help students explore AI
          responsibly and build real things with it.
        </p>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          Members get API credits, Claude Pro access, and resources for building
          with Claude. It&apos;s one of the few programmes where students get direct
          access to frontier AI tools backed by an official institutional partnership
          with{" "}
          <a href="https://anthropic.com/" target="_blank" rel="noopener noreferrer"
            className={`font-semibold ${lnk}`}>Anthropic</a>.
        </p>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          The club has a presence on campuses globally. This is the site for the{" "}
          <a href="https://alueducation.com/" target="_blank" rel="noopener noreferrer"
            className={lnk}>ALU</a>{" "}
          chapter — where I serve as a{" "}
          <strong className="text-(--text)">Technical Advisor</strong>, supporting
          the ambassadors who run the club day-to-day.
        </p>

        {/* ── Why a Website ─────────────────────────────────────── */}
        <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
          Why a Website?
        </h2>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          Up until this point, all club communication happened over email. Students
          would receive event invites, session slides, and announcements — but emails
          get missed, buried, or ignored. There was no single place a student could
          go to catch up on what the club was doing or find resources from past events.
        </p>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          In a team meeting, we identified the need for a central hub. A website
          where students could:
        </p>
        <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
          <li className="mb-[0.4rem] leading-[1.7]">Find out what the club is and how to get involved</li>
          <li className="mb-[0.4rem] leading-[1.7]">Browse upcoming and past events</li>
          <li className="mb-[0.4rem] leading-[1.7]">Access slides and event recaps after missing a session</li>
          <li className="mb-[0.4rem] leading-[1.7]">See what other members have built</li>
          <li className="mb-[0.4rem] leading-[1.7]">Scroll through a gallery of past events</li>
        </ul>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          I proposed initiating the site development and took it from that conversation
          to a live, deployed product.
        </p>

        {/* ── What I Built ─────────────────────────────────────── */}
        <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
          What I Built
        </h2>
        <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
          <li className="mb-[0.4rem] leading-[1.7]">Landing page with club overview and call-to-action</li>
          <li className="mb-[0.4rem] leading-[1.7]">Events page with slides and recaps attached per event</li>
          <li className="mb-[0.4rem] leading-[1.7]">Gallery page for photos from campus events</li>
          <li className="mb-[0.4rem] leading-[1.7]">Member builds section showcasing student projects</li>
          <li className="mb-[0.4rem] leading-[1.7]">Resources / important communications section</li>
        </ul>

        {/* ── Events screenshot ─────────────────────────────────── */}
        <figure className="my-10">
          <div className="rounded-xl overflow-hidden border border-(--border-card)">
            <LightboxImage
              src="/images/projects/cbc-alu/events.png"
              alt="CBC-ALU events page"
              width={720}
              height={420}
              className="w-full h-auto"
              caption="Events page — slides and recaps attached per session"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
            Events page — slides and recaps attached per session
          </figcaption>
        </figure>

        {/* ── Projects screenshot ───────────────────────────────── */}
        <figure className="my-10">
          <div className="rounded-xl overflow-hidden border border-(--border-card)">
            <LightboxImage
              src="/images/projects/cbc-alu/projects.png"
              alt="CBC-ALU member builds / projects page"
              width={720}
              height={420}
              className="w-full h-auto"
              caption="Member builds — what students are building with Claude"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
            Member builds — what students are building with Claude
          </figcaption>
        </figure>

        {/* ── Gallery screenshot ────────────────────────────────── */}
        <figure className="my-10">
          <div className="rounded-xl overflow-hidden border border-(--border-card)">
            <LightboxImage
              src="/images/projects/cbc-alu/gallery.png"
              alt="CBC-ALU gallery page"
              width={720}
              height={420}
              className="w-full h-auto"
              caption="Gallery page — photos from campus CBC events"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
            Gallery page — photos from campus CBC events
          </figcaption>
        </figure>

        {/* ── Tech Stack ───────────────────────────────────────── */}
        <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
          Tech Stack
        </h2>
        <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
          <li className="mb-[0.4rem] leading-[1.7]">React &amp; TypeScript — component-based frontend</li>
          <li className="mb-[0.4rem] leading-[1.7]">Tailwind CSS — utility-first styling</li>
          <li className="mb-[0.4rem] leading-[1.7]">Vercel — deployment and hosting</li>
        </ul>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          The repo is public and open to contributions — other club members or advisors
          can submit PRs to add new content, fix issues, or improve the site.
        </p>

        {/* ── Always Evolving ──────────────────────────────────── */}
        <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
          Always Evolving
        </h2>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          Unlike the other projects in this portfolio, CBC-ALU is a live product
          that I actively maintain. Every time the club runs an event — a workshop,
          a demo night, a hackathon — there are new photos to push, new slides to
          attach, and new member builds to feature.
        </p>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          That ongoing responsibility has taught me something the other projects
          didn&apos;t: what it means to own a product after launch. Shipping is not the
          end — it&apos;s the beginning of keeping it useful.
        </p>

        {/* ── What I Learned ───────────────────────────────────── */}
        <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
          What I Learned
        </h2>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          This project started from a problem I identified in a room and decided to
          solve. No brief, no client spec, no grade attached. Just a real need and
          a decision to act on it.
        </p>
        <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
          That changes how you work. When you own the decision to build something,
          you think harder about whether it actually solves the problem — not just
          whether it works technically.
        </p>

      </article>
    </LightboxProvider>
  );
}
