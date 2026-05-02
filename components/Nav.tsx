"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#About",      label: "About",      sectionId: "About"      },
  { href: "/#Projects",   label: "Projects",   sectionId: "Projects"   },
  { href: "/#Skills",     label: "Skills",     sectionId: "Skills"     },
  { href: "/#Background", label: "Background", sectionId: "Background" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("About");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section — fires when a section crosses the middle band of the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }, [isDark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav-header${scrolled ? " nav-scrolled" : ""}`}>
        <div className="nav-inner wrapper justify-between">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            Bienvenu
          </Link>

          {/* Desktop links */}
          <nav className="nav-links" aria-label="Primary navigation">
            {NAV_LINKS.map(({ href, label, sectionId }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${activeSection === sectionId ? " nav-link--active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: theme toggle + hamburger */}
          <div className="nav-controls">
            {isDark !== null && (
              <button
                className="theme-btn"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  /* Sun — shown in dark mode */
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 3V1M12 23v-2M4.22 4.22 2.81 2.81M21.19 21.19l-1.41-1.41M1 12H3M21 12h2M4.22 19.78l-1.41 1.41M21.19 2.81l-1.41 1.41M12 6a6 6 0 1 0 0 12A6 6 0 0 0 12 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  /* Moon — shown in light mode */
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            )}

            {/* Hamburger (mobile only) */}
            <button
              className="hamburger-btn"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="mobile-backdrop is-open"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      {/* Mobile slide-in menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="mobile-menu-close"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        >
          ✕
        </button>

        <nav>
          {NAV_LINKS.map(({ href, label, sectionId }) => (
            <Link
              key={href}
              href={href}
              className={`mobile-nav-link${activeSection === sectionId ? " mobile-nav-link--active" : ""}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
