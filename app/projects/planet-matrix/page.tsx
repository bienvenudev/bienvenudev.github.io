import type { Metadata } from "next";
import Link from "next/link";
import LightboxProvider from "@/components/LightboxProvider";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "PlanetMatrix Case Study | Bienvenu Cyuzuzo",
  description:
    "How I designed and built the marketing site for PlanetMatrix, an AI-powered ESG & climate intelligence platform, from a blank canvas to a deployed, email-wired product.",
};

const META = [
  { label: "Year",  value: "2026" },
  { label: "Type",  value: "Client project" },
  { label: "Role",  value: "Designer & Frontend Developer" },
  { label: "Stack", value: "Next.js · TypeScript · Tailwind v4 · Resend · Vercel" },
];

const LIVE_URL: string | null = "https://www.planet-matrix.com/";

const lnk = "underline underline-offset-[3px] decoration-current/35 hover:decoration-(--accent) transition-colors";

export default function PlanetMatrixCaseStudy() {
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
          PlanetMatrix
        </h1>
        <p className="text-(--text-muted) text-lg font-medium">
          ESG &amp; climate intelligence platform · design &amp; build
        </p>
        {LIVE_URL ? (
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold
                       text-(--accent) hover:underline no-underline"
          >
            Visit live site ↗
          </a>
        ) : (
          <p className="text-sm text-(--text-subtle) mt-2">
            Client project · Live site link pending
          </p>
        )}
      </div>

      {/* ── Hero screenshot, bleeds wider than the prose column ─ */}
      <div
        className="rounded-2xl overflow-hidden border border-(--border-card) mb-10"
        style={{
          width: "min(90vw, 1100px)",
          marginLeft: "calc(50% - min(45vw, 550px))",
        }}
      >
        <LightboxImage
          src="/images/projects/planet-matrix/hero.png"
          alt="PlanetMatrix landing page hero: One Platform. All Your ESG. Infinite Impact."
          width={1100}
          height={620}
          className="w-full h-auto"
          caption="The hero: One Platform. All Your ESG. Infinite Impact."
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
        PlanetMatrix is a climate-tech startup building an ESG (Environmental,
        Social, Governance) platform, an AI-powered tool that helps industries,
        farms, and factories monitor water, energy, and carbon data and stay
        compliant with international sustainability frameworks. They reached out
        with a tight brief: they needed a credible, production-ready marketing
        site for the product, and a short deadline to ship it.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The catch was that there was nothing to build from. No Figma file, no
        brand guidelines beyond a one-page pitch document, no component library.
        Just a concept, a content direction, and a blank canvas. I&apos;d be doing
        both the design and the engineering myself.
      </p>

      {/* ── The Problem ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Problem
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        ESG platforms live or die on trust. The audience (sustainability leads,
        compliance officers, industrial operators) needs to believe the product
        is serious, accurate, and audit-ready before they&apos;ll book a demo. That
        meant the site couldn&apos;t just <em>look</em> nice; it had to communicate
        technical credibility: real-feeling dashboards, real frameworks, a clear
        data-to-action narrative.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        But I had no designer to hand me a polished mockup, and no pre-built
        dashboard screenshots that matched the dark, technical aesthetic the
        product needed. I had to invent the visual language and build it at the
        same time, under deadline.
      </p>

      {/* ── My Role ──────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        My Role
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I&apos;ve built solo for clients before, but on PlanetMatrix I owned the{" "}
        <em>design</em> end to end alongside the engineering, starting from a
        blank canvas instead of a handed-off mockup. Every decision was mine:
        colour palette, typography, logo treatment, component layout, <em>and</em>{" "}
        the code that implemented it. If a section didn&apos;t feel trustworthy,
        there was no one to blame and no one to fix it but me.
      </p>

      {/* ── What I Built ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Built
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">A full single-page marketing site with fixed navigation, an animated hero, and smooth-scroll sections</li>
        <li className="mb-[0.4rem] leading-[1.7]">An interactive &ldquo;How It Works&rdquo; section with four tabbed panels (Collect → Analyze → Act → Report), each with its own custom dashboard visualization</li>
        <li className="mb-[0.4rem] leading-[1.7]">Four bespoke dark-themed dashboards: a live data-source table, an AI risk-analysis panel, a geographic intelligence map, and a compliance reporting view</li>
        <li className="mb-[0.4rem] leading-[1.7]">A capabilities grid, a three-step compliance journey, a frameworks section, and an impact-pillars layout</li>
        <li className="mb-[0.4rem] leading-[1.7]">A fully functional &ldquo;Book a Demo&rdquo; form wired to a real email-delivery backend</li>
        <li className="mb-[0.4rem] leading-[1.7]">A complete deployment pipeline: custom domain, DNS, and transactional email</li>
      </ul>

      {/* ── The Dashboards ───────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Dashboards
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The dashboards were the heart of the site, and the most time-consuming
        piece. Generic placeholder charts looked fake, so instead of decoration I
        designed four screens that actually reflect the product&apos;s domain, one for
        each step of the &ldquo;How It Works&rdquo; flow. They&apos;re visualizations built into the
        landing page itself rather than a live app (a preview of what the actual
        product will do), but the goal was for them to read as the real thing.
      </p>

      {/* Collect, full width */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card)">
          <LightboxImage
            src="/images/projects/planet-matrix/collect-dashboard.png"
            alt="Collect dashboard: live data sources table"
            width={1100}
            height={620}
            className="w-full h-auto"
            caption="Collect: a live data-source table pulling from water sensors, energy grids, supply chain, and a climate API, with per-source status"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Collect: a live data-source table with per-source status
        </figcaption>
      </figure>

      {/* Analyze + Act, 2-col */}
      <div className="grid grid-cols-2 gap-3 my-8 max-[500px]:grid-cols-1">
        <figure>
          <div className="rounded-xl overflow-hidden border border-(--border-card)">
            <LightboxImage
              src="/images/projects/planet-matrix/analyze-dashboard.png"
              alt="Analyze dashboard: AI risk analysis panel"
              width={540}
              height={340}
              className="w-full h-auto"
              caption="Analyze: ESG score, exposure trend, and AI anomaly detection"
            />
          </div>
          <figcaption className="mt-2 text-center text-[0.75rem] text-(--text-subtle)">
            Analyze: ESG score &amp; AI anomaly detection
          </figcaption>
        </figure>
        <figure>
          <div className="rounded-xl overflow-hidden border border-(--border-card)">
            <LightboxImage
              src="/images/projects/planet-matrix/act-dashboard.png"
              alt="Act dashboard: geographic intelligence map and recommended actions"
              width={540}
              height={340}
              className="w-full h-auto"
              caption="Act: geographic intelligence map with recommended actions and live alerts"
            />
          </div>
          <figcaption className="mt-2 text-center text-[0.75rem] text-(--text-subtle)">
            Act: geographic intelligence &amp; recommended actions
          </figcaption>
        </figure>
      </div>

      {/* Report, full width */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card)">
          <LightboxImage
            src="/images/projects/planet-matrix/report-dashboard.png"
            alt="Report dashboard: compliance reporting view"
            width={1100}
            height={620}
            className="w-full h-auto"
            caption="Report: carbon footprint, emissions over time, and framework-completion progress across CSRD, PCAF, SFDR, and GRI"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Report: compliance progress across CSRD, PCAF, SFDR &amp; GRI
        </figcaption>
      </figure>

      {/* ── The Hard Parts ───────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Hard Parts
      </h2>

      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        <strong className="text-(--text)">Designing without a designer.</strong>{" "}
        I leaned on AI design tooling to explore directions fast, then refined the
        output into a coherent system: a deep-purple-on-near-black palette, a
        custom dotted-globe logo mark, and a consistent card language. The
        dashboards were where this mattered most: each one had to map to a real
        slice of the domain, like water-leakage risk, scope emissions, and
        framework-completion percentages.
      </p>

      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        <strong className="text-(--text)">Tailwind v4, the hard way.</strong>{" "}
        Midway through, I migrated the entire site from vanilla CSS to{" "}
        <a href="https://tailwindcss.com/blog/tailwindcss-v4" target="_blank" rel="noopener noreferrer"
           className={lnk}>Tailwind v4</a>.
        The version matters: v4 dropped the old <code>@tailwind</code> directives for a single{" "}
        <code>@import &quot;tailwindcss&quot;</code>, changed how arbitrary values and font
        families work, and removed config-file assumptions I&apos;d taken for granted.
        Several classes that &ldquo;should&rdquo; have worked silently failed until I traced
        them back to v4&apos;s new conventions. A good lesson in not trusting muscle
        memory across a major version.
      </p>

      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        <strong className="text-(--text)">Email that actually sends.</strong>{" "}
        The &ldquo;Book a Demo&rdquo; form needed to deliver real emails from a branded
        domain. I set up{" "}
        <a href="https://resend.com/" target="_blank" rel="noopener noreferrer"
           className={lnk}>Resend</a>{" "}
        for transactional email, verified the domain via DNS records, and built a
        Next.js API route to handle submissions. The recurring gotcha: environment
        variables only take effect on <em>new</em> deployments, so the form kept
        failing in production until I learned to always redeploy after touching
        secrets, and to read the API&apos;s JSON error response instead of guessing.
      </p>

      {/* Demo form screenshot */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card)">
          <LightboxImage
            src="/images/projects/planet-matrix/demo-form.png"
            alt="Book a Demo form wired to a transactional email backend"
            width={1100}
            height={620}
            className="w-full h-auto"
            caption="The Book a Demo form, wired to a real transactional-email backend on a verified domain"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          The &ldquo;Book a Demo&rdquo; form, wired to a verified-domain email backend
        </figcaption>
      </figure>

      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        <strong className="text-(--text)">Deployment &amp; DNS.</strong>{" "}
        Connecting a custom domain meant coordinating between a domain registrar
        and the hosting platform: A records, CNAMEs, verification TXT records, and
        the occasional propagation wait. I also had to migrate the whole project
        between hosting accounts cleanly, re-pointing the domain without downtime.
      </p>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Tech Stack
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">Next.js &amp; TypeScript: App Router, API routes, server-rendered marketing pages</li>
        <li className="mb-[0.4rem] leading-[1.7]">Tailwind CSS v4: utility-first styling with custom CSS-variable design tokens</li>
        <li className="mb-[0.4rem] leading-[1.7]">
          <a href="https://resend.com/" target="_blank" rel="noopener noreferrer"
             className={lnk}>Resend</a>:{" "}
          transactional email delivery from a verified domain
        </li>
        <li className="mb-[0.4rem] leading-[1.7]">Vercel: hosting, environment management, and deployment pipeline</li>
      </ul>

      {/* ── What I Learned ───────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Learned
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The biggest shift was realizing how much design <em>is</em> engineering when
        you&apos;re solo. I couldn&apos;t hide behind &ldquo;the mockup said so.&rdquo; Every spacing
        choice, every contrast decision, every &ldquo;does this dashboard look real enough
        to trust&rdquo; judgment was mine to own. It made me a more deliberate developer.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I also learned that the unglamorous infrastructure work (DNS records, env
        vars, redeploys, domain verification) is where projects actually get stuck.
        Writing the UI was the fun part; getting email to send reliably from a custom
        domain in production taught me more about how the web actually fits together
        than any component ever did.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        And I learned to respect version changes. The Tailwind v3-to-v4 migration
        looked like a find-and-replace job and turned out to be a genuine relearning
        of how the tool works. &ldquo;It works on my machine&rdquo; usually means &ldquo;I haven&apos;t
        read the changelog yet.&rdquo;
      </p>

    </article>
    </LightboxProvider>
  );
}
