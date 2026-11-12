"use client";

import Card from "@/components/ui/Card";
import { Filter, filters, projects } from "@/config/projects";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = projects.filter((p) => filter === "All" || p.type === filter);

  return (
    <section id="projects" className="min-h-screen mt-32">
      <div className="max-w-6xl m-auto">
        <h2 className="text-7xl font-bold">
          <span className="text-(--cyan)">&gt; </span>
          Projects
        </h2>

        {/* Filters and counter */}
        <div
          role="group"
          aria-label="Filter projects"
          className="mt-10 mb-6 flex flex-wrap items-center gap-3"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className="cursor-pointer rounded-full border border-(--line) bg-(--panel) px-4 py-1 font-mono text-sm transition-colors hover:border-(--cyan) aria-pressed:border-(--cyan) aria-pressed:bg-(--cyan) aria-pressed:text-(--bg)"
            >
              {f.id}
            </button>
          ))}

          <span aria-live="polite" className="ml-auto font-mono text-sm text-(--mute)">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Cards */}
        {visible.length === 0 ? (
          <p
            role="status"
            className="font-mono text-(--mute)"
          >
            No project found.
          </p>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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