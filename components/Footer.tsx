import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t border-(--border)">
      <div className="wrapper flex items-center justify-between gap-4 flex-wrap max-[560px]:flex-col max-[560px]:items-center max-[560px]:text-center max-[560px]:gap-5">
        <span className="font-bold text-[0.9rem] text-(--text)">
          Bienvenu Cyuzuzo
        </span>
        <SocialLinks />
        <span className="text-[0.8rem] text-(--text-subtle)">
          © {new Date().getFullYear()} · Built with Next.js
        </span>
      </div>
    </footer>
  );
}
