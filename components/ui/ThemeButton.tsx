"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import "./ThemeButton.component.css";

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
    <button className="theme-toggle" type="button" onClick={toggle}>
      {theme === "dark" ? (
        <LuMoon size={18} className="theme-toggle__icon" />
      ) : (
        <LuSun size={18} className="theme-toggle__icon" />
      )}
    </button>
  );
}