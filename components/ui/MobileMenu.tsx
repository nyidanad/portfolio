import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { NavLink } from "@/config/nav";
import "./MobileMenu.component.css";

type MobileMenuProps = {
  navLinks: NavLink[];
  active: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu({ navLinks, active, setMenuOpen }: MobileMenuProps) {
  return (
    <ul id="mobile-menu" className="mobile-menu">
      {navLinks.map(({ label, href }) => {
        const isActive = active === href.slice(1);

        return (
          <li key={href} className="mobile-menu__item">
            <Link
              href={href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive ? "page" : undefined}
              className={`mobile-menu__link${isActive ? " mobile-menu__link--active" : ""}`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}