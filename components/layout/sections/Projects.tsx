"use client";

import { useState } from "react";

import { Filter, filters, projects } from "@/config/projects";
import Card from "@/components/ui/Card";
import "./Projects.component.css";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = projects.filter((p) => filter === "All" || p.type === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">
          <span className="projects__title-accent">&gt; </span>
          Projects
        </h2>

        {/* Filters and counter */}
        <div role="group" aria-label="Filter projects" className="projects__filters">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className="projects__filter"
            >
              {f.id}
            </button>
          ))}

          <span aria-live="polite" className="projects__counter">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Cards */}
        {visible.length === 0 ? (
          <p role="status" className="projects__empty">
            No project found.
          </p>
        ) : (
          <div className="projects__grid">
            {visible.map((p) => (
              <Card
                key={p.key}
                name={p.name}
                type={p.type}
                color={p.color}
                description={p.description}
                technologies={p.technologies}
                image={p.image}
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