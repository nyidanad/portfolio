"use client";

import { useState } from "react";

import { Filter, filters, projects } from "@/config/projects";
import Card from "@/components/ui/Card";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = projects.filter((p) => filter === "All" || p.type === filter);

  return (
    <section id="projects" className="min-h-screen py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 xl:px-0">
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
          <span className="text-(--cyan)">&gt; </span>
          Projects
        </h2>

        {/* Filters and counter */}
        <div
          role="group"
          aria-label="Filter projects"
          className="mt-6 mb-6 flex flex-wrap items-center gap-2 sm:mt-10 sm:gap-3"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className="cursor-pointer rounded-full border border-(--line) bg-(--panel) px-3 py-1.5 font-mono text-[clamp(11px,2.8vw,13px)] transition-colors hover:border-(--cyan) aria-pressed:border-(--cyan) aria-pressed:bg-(--cyan) aria-pressed:text-(--bg) lg:px-4 sm:py-1 lg:text-sm"
            >
              {f.id}
            </button>
          ))}

          <span
            aria-live="polite"
            className="basis-full font-mono text-[clamp(12px,2.8vw,13px)] text-(--mute) mt-2 mb-2 sm:ml-auto sm:basis-auto lg:text-sm sm:m-0"
          >
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Cards */}
        {visible.length === 0 ? (
          <p role="status" className="font-mono text-sm text-(--mute) sm:text-base">
            No project found.
          </p>
        ) : (
          <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:items-stretch md:gap-7">
            {visible.map((p) => (
              <Card
                key={p.key}
                name={p.name}
                type={p.type}
                color={p.color}
                description={p.description}
                technologies={p.technologies}
                docUrl={p.docUrl}
                repo={p.repo}
                active={p.active}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}