"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
    }
  };

  return (
    <button 
      className="bg-(--panel) border border-(--line) rounded-md min-w-9 min-h-9 hover:border-(--cyan) hover:text-(--cyan)
        lg:mr-3 xl:mr-0" 
      type="button" 
      onClick={toggle}
    >
      {theme === "dark" ? (
        <LuMoon size={18} className="m-auto" />
      ) : (
        <LuSun size={18} className="m-auto" />
      )}
    </button>
  );
}