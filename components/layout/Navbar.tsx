"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/config/nav";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

import Searchbar from "../ui/Searchbar";
import ThemeButton from "../ui/ThemeButton";
import MobileMenu from "../ui/MobileMenu";

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
    <header className="fixed inset-x-0 top-0 z-10">
      <nav className="flex h-14 w-full items-center bg-(--bg) border-b border-(--line) px-5">
        <div className="hidden md:flex basis-1/3 shrink-0 flex-row items-center gap-2.5">
          <span className="dot" />
          <p className="text-sm md:max-xl:text-xs text-(--mint) font-bold font-mono whitespace-nowrap">Active job seeker</p>
        </div>

        <ul className="hidden lg:flex basis-1/3 shrink-0 flex-row justify-center gap-0.5">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 border px-3.5 max-xl:px-2.5 py-1.5 text-sm max-xl:text-xs font-mono transition-colors duration-200 ${
                    isActive
                      ? "border-(--line) bg-(--panel) border-b-2 border-b-(--cyan) text-(--cyan) rounded-md shadow-sm"
                      : "border-transparent text-(--mute) hover:text-(--text)"
                  }`}
                >
                  <span className={isActive ? "text-(--cyan)" : ""}>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action buttons */}
        <div className="ml-auto lg:ml-0 flex flex-row lg:basis-1/3 shrink-0 justify-end items-center gap-2">
          <Searchbar />

          {/* Hamburger – mobil + tablet */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex lg:hidden size-9 items-center justify-center rounded-lg border border-(--line) bg-(--panel) text-(--text) transition-colors hover:border-(--cyan) hover:text-(--cyan)"
          >
            {menuOpen ? <FaXmark size={16} /> : <FaBars size={16} />}
          </button>

          <ThemeButton />
        </div>
      </nav>

      {menuOpen &&
        <MobileMenu navLinks={navLinks} active={active} setMenuOpen={setMenuOpen} />
      }
    </header>
  );
}