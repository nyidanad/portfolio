"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/nav";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const crumb = pathname === '/' ? '~' : '~' + pathname;

  return (
    <header className="border-b border-zinc-700">
      <nav className="flex justify-between items-center px-16 h-14">
        <Link href="/" className="navbar-logo">
          <p className="text-[#4ade80] text-sm font-bold">
            daniel@portfolio:
            <span className="text-violet-300">{crumb}</span>
            $
          </p>
        </Link>

        <ul className="flex gap-0.5">
          {navLinks.map(({ label, href }) => {
            const active = isActive(pathname, href);
            return (
              <li
                key={href}
                className={`text-sm px-2.5 py-1.5  ${active ? "bg-emerald-600/25 text-[#4ade80]" : "text-zinc-500 hover:text-zinc-100"}`}
              >
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
