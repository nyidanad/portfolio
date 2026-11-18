import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { NavLink } from "@/config/nav";

type MobileMenuProps = {
  navLinks: NavLink[];
  active: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu({navLinks, active, setMenuOpen}: MobileMenuProps) {
  return (
    <ul
      id="mobile-menu"
      className="absolute inset-x-0 top-full flex lg:hidden flex-col gap-1 border-b border-(--line) bg-(--bg) p-3 shadow-lg"
    >
      {navLinks.map(({ label, href }) => {
        const isActive = active === href.slice(1);

        return (
          <li key={href}>
            <Link
              href={href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive ? "page" : undefined}
              className={`block rounded-md border px-3.5 py-2.5 text-sm font-mono transition-colors duration-200 ${
                isActive
                  ? "border-(--line) bg-(--panel) text-(--cyan)"
                  : "border-transparent text-(--mute) hover:text-(--text)"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}
