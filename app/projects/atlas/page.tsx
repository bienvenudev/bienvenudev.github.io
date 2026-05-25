import type { Metadata } from "next";
import Link from "next/link";
import LightboxProvider from "@/components/LightboxProvider";
import LightboxImage from "@/components/LightboxImage";

export const metadata: Metadata = {
  title: "Atlas Case Study | Bienvenu Cyuzuzo",
  description:
    "How my team built Atlas — a diaspora mentorship platform — and placed 2nd at the Code2Unlock Hackathon 2025 in Kigali.",
};

const META = [
  { label: "Year",  value: "2025" },
  { label: "Event", value: "Code2Unlock Hackathon" },
  { label: "Role",  value: "Frontend Developer" },
  { label: "Stack", value: "React · TypeScript · Tailwind · Prisma" },
];

const TIMELINE = [
  {
    date: "Aug 25",
    label: "Kickoff",
    detail: "32 teams. Deep dive into the challenges. SolvitAfrica presents Challenge 2: Unlocking Diaspora Potential.",
  },
  {
    date: "Aug 26 – Sept 11",
    label: "Build Phase",
    detail: "Ask, listen, build. Coaching sessions and online Q&As.",
  },
  {
    date: "Sept 11",
    label: "Selection Day — The Gate",
    detail: "First pitch and prototype. 7 of 32 teams selected to continue. We made the cut.",
    highlight: true,
  },
  {
    date: "Sept 14–18",
    label: "Crunch Week",
    detail: "Masterclasses, review sessions, and hands-on guidance from Dutch mentors. Refine the code, perfect the pitch.",
  },
  {
    date: "Sept 19",
    label: "Graduation Day",
    detail: "Final pitch to a panel of judges and challenge owners. Prize ceremony.",
    highlight: true,
  },
];

const lnk = "underline underline-offset-[3px] decoration-current/35 hover:decoration-(--accent) transition-colors";

export default function AtlasCaseStudy() {
  return (
    <LightboxProvider>
    <article className="max-w-[720px] mx-auto mt-24 mb-24">

      {/* ── Back link ─────────────────────────────────────────── */}
      <Link
        href="/#Projects"
        className="inline-flex items-center gap-1.5 text-sm font-semibold
                   text-(--text-muted) hover:text-(--accent) transition-colors
                   no-underline mb-8"
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
          Diaspora mentorship platform — Kigali, Rwanda
        </p>
        <div className="flex justify-center gap-5 mt-5">
          <a
            href="https://atlasc2u.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-(--accent) hover:underline no-underline"
          >
            Live demo ↗
          </a>
          <a
            href="https://github.com/Hanki-C2U/hanki-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-(--accent) hover:underline no-underline"
          >
            GitHub ↗
          </a>
          </div>
          <p className="text-sm text-(--text-muted) mt-2">
            No sign-up needed — the demo lets you explore as a pre-filled user.
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
          src="/images/projects/atlas/atlas-homepage.png"
          alt="Atlas platform homepage"
          width={1100}
          height={733}
          className="w-full h-auto"
          caption="Atlas platform homepage"
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

      {/* ── The Challenge ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Challenge
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-4">
        We were one of 32 teams that participated in the{" "}
        <a href="https://code2unlock.org/" target="_blank" rel="noopener noreferrer"
           className={`font-bold ${lnk}`}>Code2Unlock Hackathon</a>{" "}
        — a multi-week sprint run by{" "}
        <a href="https://code2unlock.org/" target="_blank" rel="noopener noreferrer"
           className={lnk}>Code2Unlock Skills &amp; Jobs</a>{" "}
        in Kigali. Our team picked up{" "}
        <strong className="text-(--text)">Challenge 2</strong>, posed by{" "}
        <a href="https://solvit.africa/" target="_blank" rel="noopener noreferrer"
           className={`font-bold ${lnk}`}>SolvitAfrica</a>:
      </p>
      <blockquote
        className="my-6 pl-5 border-l-[3px] border-(--accent)"
        style={{ borderLeftColor: "var(--accent)" }}
      >
        <p
          className="text-[1.05rem] font-semibold leading-[1.7] italic"
          style={{ color: "var(--text)" }}
        >
          &ldquo;How might we design a sustainable, inclusive, tech-enabled bridge
          between diaspora professionals and youth to foster job readiness and
          meaningful employment?&rdquo;
        </p>
        <cite className="block mt-2 text-sm text-(--text-subtle) not-italic">
          —{" "}
          <a href="https://solvit.africa/" target="_blank" rel="noopener noreferrer"
             className={lnk}>
            SolvitAfrica
          </a>
          ,{" "}
          <a href="https://code2unlock.org/" target="_blank" rel="noopener noreferrer"
             className={lnk}>
            Code2Unlock Hackathon 2025
          </a>
        </cite>
      </blockquote>

      {/* ── The Problem ──────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Problem
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Many educated Rwandan youth lack mentorship, global perspectives, and career
        readiness tools. At the same time, the diaspora holds valuable expertise and
        networks — and a genuine eagerness to contribute to national development —
        but this resource is unstructured and untapped.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The gap between these two groups is not a lack of willingness on either side.
        It&apos;s a lack of infrastructure. Atlas was our answer.
      </p>

      {/* ── The Sprint ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Sprint
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-4">
        This wasn&apos;t a 48-hour hackathon.{" "}
        <a href="https://code2unlock.org/" target="_blank" rel="noopener noreferrer"
           className={lnk}>Code2Unlock</a>{" "}
        ran over nearly four weeks, with multiple structured phases:
      </p>

      {/* Timeline */}
      <div className="relative mt-6 mb-2">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-[2px]"
          style={{ background: "var(--border-card)" }}
          aria-hidden="true"
        />
        <div className="flex flex-col gap-5">
          {TIMELINE.map(({ date, label, detail, highlight }) => (
            <div key={date} className="flex gap-4">
              <div className="relative mt-1 shrink-0">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: highlight ? "var(--accent)" : "transparent",
                    border: `2px solid ${highlight ? "var(--accent)" : "var(--border-card)"}`,
                    boxShadow: highlight ? "0 0 0 3px var(--bg)" : "none",
                  }}
                />
              </div>
              <div className="pb-1">
                <p className="text-sm font-bold text-(--text)">
                  {date}{" "}
                  <span className="text-(--accent) font-semibold">— {label}</span>
                </p>
                <p className="text-sm text-(--text-muted) mt-0.5 leading-[1.6]">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── with-coaches photo ───────────────────────────────── */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card)">
          <LightboxImage
            src="/images/projects/atlas/with-coaches.jpg"
            alt="With Dutch mentors during Crunch Week"
            width={720}
            height={480}
            className="w-full h-auto"
            caption="Crunch Week — with our Dutch mentors at The Gym, Kigali"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Crunch Week — with our Dutch mentors at{" "}
          <a href="https://www.the-gym.rw/" target="_blank" rel="noopener noreferrer"
             className={lnk}>The Gym</a>
          , Kigali
        </figcaption>
      </figure>

      {/* ── My Role ──────────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        My Role
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        I was the frontend developer on a team of four. My focus was building and
        polishing the user interface — translating the product vision into screens
        that felt intuitive and trustworthy enough to pitch to a panel of judges
        under pressure.
      </p>

      {/* ── What I Built ─────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Built
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">Mentor discovery and profile browsing UI</li>
        <li className="mb-[0.4rem] leading-[1.7]">Mentorship connection and request flows</li>
        <li className="mb-[0.4rem] leading-[1.7]">Onboarding experience for both mentors and mentees</li>
        <li className="mb-[0.4rem] leading-[1.7]">Profile pages for diaspora professionals</li>
        <li className="mb-[0.4rem] leading-[1.7]">Overall component architecture and styling with Tailwind</li>
      </ul>

      {/* ── Mentor discovery screenshot ──────────────────────── */}
      <figure className="my-10">
        <div className="rounded-xl overflow-hidden border border-(--border-card)">
          <LightboxImage
            src="/images/projects/atlas/atlas-mentor-discovery.png"
            alt="Atlas mentor discovery screen"
            width={720}
            height={400}
            className="w-full h-auto"
            caption="Mentor discovery — browse and connect with diaspora professionals"
          />
        </div>
        <figcaption className="mt-2.5 text-center text-[0.8rem] text-(--text-subtle)">
          Mentor discovery — browse and connect with diaspora professionals
        </figcaption>
      </figure>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        Tech Stack
      </h2>
      <ul className="pl-6 mb-4 text-(--text-muted) list-disc">
        <li className="mb-[0.4rem] leading-[1.7]">React &amp; TypeScript — component-based frontend</li>
        <li className="mb-[0.4rem] leading-[1.7]">Tailwind CSS — utility-first styling</li>
        <li className="mb-[0.4rem] leading-[1.7]">Prisma — backend ORM (handled by teammates)</li>
        <li className="mb-[0.4rem] leading-[1.7]">Supabase — database &amp; auth on the full version</li>
      </ul>

      {/* ── The Result ───────────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        The Result
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-6">
        On September 19th — Graduation Day — we pitched Atlas to a panel of judges
        and challenge owners at{" "}
        <a href="https://www.the-gym.rw/" target="_blank" rel="noopener noreferrer"
           className={lnk}>The Gym</a>
        , Kigali. Out of 7 finalists (chosen from 32 teams), we placed{" "}
        <strong className="text-(--text)">2nd</strong>.
      </p>

      {/* Photo grid: presentation + prize */}
      <div className="grid grid-cols-2 gap-3 my-8 max-[500px]:grid-cols-1">
        <figure>
          <div className="rounded-xl overflow-hidden border border-(--border-card) h-[220px] max-[500px]:h-auto">
            <LightboxImage
              src="/images/projects/atlas/atlas-presentation.jpg"
              alt="Presenting Atlas at Graduation Day"
              width={360}
              height={220}
              className="w-full h-full object-cover max-[500px]:h-auto max-[500px]:object-contain"
              caption="Pitching Atlas to the judges"
            />
          </div>
          <figcaption className="mt-2 text-center text-[0.75rem] text-(--text-subtle)">
            Pitching Atlas to the judges
          </figcaption>
        </figure>
        <figure>
          <div className="rounded-xl overflow-hidden border border-(--border-card) h-[220px] max-[500px]:h-auto">
            <LightboxImage
              src="/images/projects/atlas/prize.jpg"
              alt="Receiving 2nd place at Code2Unlock"
              width={360}
              height={220}
              className="w-full h-full object-cover max-[500px]:h-auto max-[500px]:object-contain"
              caption="Receiving 2nd place — Code2Unlock 2025"
            />
          </div>
          <figcaption className="mt-2 text-center text-[0.75rem] text-(--text-subtle)">
            Receiving 2nd place —{" "}
            <a href="https://code2unlock.org/" target="_blank" rel="noopener noreferrer"
               className={lnk}>Code2Unlock 2025</a>
          </figcaption>
        </figure>
      </div>

      {/* ── After the Hackathon ──────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        After the Hackathon
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Like many hackathon projects, Atlas slowed down after the energy of the
        sprint faded. The Supabase free tier for the full version eventually ran
        out, and the team moved on to other commitments.
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        What&apos;s live at{" "}
        <a
          href="https://atlasc2u.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--accent) font-semibold hover:underline"
        >
          atlasc2u.vercel.app
        </a>{" "}
        is a demo version pre-filled with mock data — enough to explore the
        concept and flows, but features like messaging and session booking are
        intentionally non-functional. It&apos;s a prototype, preserved as a record
        of what we built and presented.
      </p>

      {/* ── What I Learned ───────────────────────────────────── */}
      <h2 className="text-[1.1rem] font-bold text-(--accent) mt-10 mb-3 tracking-[-0.01em]">
        What I Learned
      </h2>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        Building Atlas was the first time I worked on a product with a genuinely
        meaningful mission — not just a technical exercise. That changes how you
        make decisions. You start asking &ldquo;does this flow feel trustworthy?&rdquo;
        rather than just &ldquo;does this code work?&rdquo;
      </p>
      <p className="text-(--text-muted) leading-[1.8] mb-[0.9rem]">
        The multi-week format also taught me that real product work is iterative.
        The prototype we pitched on Sept 19th was meaningfully different from what
        we had on Sept 11th — not because we added features, but because we kept
        refining until it felt right.
      </p>

    </article>
    </LightboxProvider>
  );
}
