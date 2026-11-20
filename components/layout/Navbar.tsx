"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/config/nav";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

import Searchbar from "../ui/Searchbar";
import ThemeButton from "../ui/ThemeButton";
import MobileMenu from "../ui/MobileMenu";
import "./Navbar.component.css";

const ids = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [active, setActive] = useState(ids[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  // Escape-re bezárja a menüt
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="navbar">
      <nav className="navbar__bar">
        <div className="navbar__status">
          <span className="dot" />
          <p className="navbar__status-text">Active job seeker</p>
        </div>

        <ul className="navbar__links">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);

            return (
              <li key={href} className="navbar__item">
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
                >
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action buttons */}
        <div className="navbar__actions">
          <Searchbar />

          {/* Hamburger – mobil + tablet */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="navbar__hamburger"
          >
            {menuOpen ? <FaXmark size={16} /> : <FaBars size={16} />}
          </button>

          <ThemeButton />
        </div>
      </nav>

      {menuOpen && (
        <MobileMenu navLinks={navLinks} active={active} setMenuOpen={setMenuOpen} />
      )}
    </header>
  );
}