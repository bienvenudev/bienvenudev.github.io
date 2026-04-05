"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  // null = not yet mounted (avoids SSR mismatch)
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Sync initial dark state from the class set by the no-FOUC inline script
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuOpen &&
        ulRef.current &&
        !ulRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  function toggleTheme() {
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
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header>
      <nav className="primary-nav">
        <div className="wrapper">
          <h1 className="main-title">
            <Link href="/" aria-label="Homepage">
              Bienvenu
            </Link>
          </h1>

          <ul ref={ulRef} className={menuOpen ? "open" : ""}>
            {/* Close button — visible only on mobile inside the slide-in panel */}
            <li>
              <button
                className="menu menu-close"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#ffffff"
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                  />
                </svg>
              </button>
            </li>

            <li>
              <Link href="/#About" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#Skills" onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#Background" onClick={closeMenu}>
                Background
              </Link>
            </li>
            <li>
              <Link href="/#Projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Theme toggle — only renders after mount to avoid hydration flash */}
        {isDark !== null && (
          <div
            className="mode"
            onClick={toggleTheme}
            role="button"
            tabIndex={0}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
          >
            {isDark ? (
              /* Sun icon — shown in dark mode, click to go light */
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g clipPath="url(#nav-sun-clip)" fill="#ffffff">
                  <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
                </g>
                <defs>
                  <clipPath id="nav-sun-clip">
                    <path fill="#ffffff" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              /* Moon icon — shown in light mode, click to go dark */
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#ffffff"
                />
              </svg>
            )}
          </div>
        )}

        {/* Hamburger — visible only on mobile */}
        <button
          ref={hamburgerRef}
          className="menu menu-open"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M7 12H17M9 18H15"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
