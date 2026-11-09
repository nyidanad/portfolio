"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/config/nav";
import Link from "next/link";

import Searchbar from "../ui/Searchbar";
import ThemeButton from "../ui/ThemeButton";

const ids = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [active, setActive] = useState(ids[0]);

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

  return (
    <header className="sticky top-0 z-10 border-r border-(--line)">
      <nav className="flex h-14 items-center bg-(--bg) border-b border-(--line) px-5">
        {/* Title */}
        <div className="basis-1/3 shrink-0 flex flex-row items-center gap-2">
          <span className="dot" />
          <p className="text-sm font-bold font-mono">nyiri.dev</p>
        </div>

        {/* Routes */}
        <ul className="flex basis-1/3 shrink-0 flex-row justify-center gap-0.5">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 border px-3.5 py-1.5 text-sm font-mono transition-colors duration-200 ${
                    isActive
                      ? "border-(--line) bg-(--panel) border-b-2 border-b-(--cyan) text-(--cyan) rounded-md shadow-sm *:shadow-(--cyan)"
                      : "border-transparent text-(--mute) hover:text-(--txt)"
                  }`}
                >
                  <span className={`${isActive ? "text-(--txt)" : ""}`}>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action buttons */}
        <div className="flex flex-row basis-1/3 shrink-0 justify-end items-center gap-2">
          <Searchbar />
          <ThemeButton />
        </div>

      </nav>
    </header>
  );
}