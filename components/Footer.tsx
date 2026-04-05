import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <SocialLinks />
        <p>© {new Date().getFullYear()} Bienvenu Cyuzuzo</p>
      </div>
    </footer>
  );
}
