import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper footer-inner">
        <span className="footer-name">Bienvenu Cyuzuzo</span>
        <SocialLinks />
        <span className="footer-copy">
          © {new Date().getFullYear()} — Built with Next.js
        </span>
      </div>
    </footer>
  );
}
