"use client";

import { SearchTrigger } from "fumadocs-ui/layouts/shared/slots/search-trigger";
import { ThemeSwitch } from "fumadocs-ui/layouts/shared/slots/theme-switch";
import { GitFork, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/catalog", label: "Catalog" },
  { href: "/docs", label: "Guide" },
  { href: "/examples", label: "Examples" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  function isCurrentRoute(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (mobileMenuRef.current?.contains(target)) return;
      setMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Link className="site-wordmark" href="/" aria-label="Effective HTML home">
        <span className="site-wordmark-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        Effective HTML
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isCurrentRoute(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <a
          className="site-nav-github"
          href="https://github.com/plannotator/effective-html"
          aria-label="Effective HTML on GitHub"
        >
          <GitFork aria-hidden="true" />
        </a>
        <SearchTrigger className="catalog-icon-button" />
        <ThemeSwitch className="catalog-theme-switch" />
      </nav>

      <div className="site-nav-mobile">
        <SearchTrigger className="catalog-icon-button" />
        <div className="mobile-nav-menu" ref={mobileMenuRef}>
          <button
            ref={menuButtonRef}
            type="button"
            className="mobile-nav-trigger"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-navigation-panel"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          {menuOpen ? (
            <nav
              id="mobile-navigation-panel"
              className="mobile-nav-panel"
              aria-label="Mobile navigation"
            >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrentRoute(link.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://github.com/plannotator/effective-html">
              GitHub
            </a>
            <ThemeSwitch className="catalog-theme-switch" />
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
