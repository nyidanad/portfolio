"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { navLinks, quickActions } from "@/config/nav";
import { IconType } from "react-icons";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface Item {
  label: string;
  hint: string;
  href: string;
  icon: IconType;
  external?: boolean;
}

const items: Item[] = [
  ...navLinks.map(({ label, href, icon }) => ({ label, href, icon, hint: "page" })),
  ...quickActions,
];

export default function QuickSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [modKey, setModKey] = useState("Ctrl");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => i.label.toLowerCase().includes(q)) : items;
  }, [query]);

  const close = useCallback(() => setOpen(false), []);
  const openPalette = useCallback(() => {
    setQuery("");
    setSelected(0);
    setOpen(true);
  }, []);

  const run = useCallback(
    (item: Item) => {
      close();
      if (item.href.startsWith("#")) {
        document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", item.href);
      } else if (item.href.startsWith("mailto:")) {
        window.location.href = item.href;
      } else if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
      }
    },
    [close]
  );

  // On MacOS it shows ⌘, else it's Ctrl.
  useEffect(() => {
    setModKey(/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl");
  }, []);

  // Escape keybindings
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close();
        else openPalette();
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, openPalette]);

  // Navigation keybindings
  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && results[selected]) {
      e.preventDefault();
      run(results[selected]);
    }
  };

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex items-center gap-2.5 rounded-lg border border-(--line) bg-(--panel) px-3 py-1.5 min-w-9 min-h-9 text-sm text-(--text) transition-colors hover:border-(--cyan) hover:text-(--cyan)"
      >
        <FaMagnifyingGlass size={14} />
        <span className="hidden sm:inline font-mono">Quick search</span>
        <kbd className="rounded border border-(--line) px-1.5 text-[11px] text-(--mute)">
          {modKey} K
        </kbd>
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[14vh] backdrop-blur-sm"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Quick search"
              className="w-full max-w-lg overflow-hidden rounded-xl border border-(--line) bg-(--bg) shadow-2xl"
            >
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelected(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Jump to a page or run an action…"
                aria-label="Quick search"
                className="w-full border-b border-(--line) bg-transparent px-5 py-4 text-base text-(--text) outline-none placeholder:text-(--mute)"
              />
              <ul role="listbox" className="max-h-[50vh] overflow-auto p-2">
                {results.length === 0 ? (
                  <li className="px-3 py-3 text-sm text-(--mute)">No results</li>
                ) : (
                  results.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.href} role="option" aria-selected={i === selected}>
                        <button
                          type="button"
                          onMouseEnter={() => setSelected(i)}
                          onClick={() => run(item)}
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${
                            i === selected ? "bg-(--panel) text-(--text)" : "text-(--mute)"
                          }`}
                        >
                          <Icon className="size-4.5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
                          {item.label}
                          <span className="ml-auto text-[11px] text-(--mute)">{item.hint}</span>
                        </button>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}