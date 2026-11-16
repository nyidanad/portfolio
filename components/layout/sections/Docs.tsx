import type { CSSProperties } from "react";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import { docColors, docIcons, documents } from "@/config/docs";

const cols = "grid-cols-[minmax(0,5fr)_repeat(4,minmax(0,1.25fr))]";

export default function Docs() {
  return (
    <section id="docs" className="min-h-[80vh] mt-32">
      <div className="max-w-6xl m-auto">
        <h2 className="text-7xl font-bold mb-10">
          <span className="text-(--cyan)">&gt; </span>
          Documents
        </h2>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-(--line) bg-(--panel)">
          {/* Header */}
          <div className={`grid ${cols} gap-5 bg-(--bg) px-5 py-3 font-mono text-xs text-(--mute)`}>
            <p>filename</p>
            <p className="text-right">type</p>
            <p className="text-right">size</p>
            <p className="text-right">last update</p>
            <p />
          </div>

          {/* Documents */}
          {documents.map((doc) => {
            const Icon = docIcons[doc.type];
            const color = docColors[doc.type];
            const isMarkdown = doc.type === "md";

            return (
              <a
                key={doc.key}
                href={doc.href}
                {...(isMarkdown
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : { download: true })}
                style={{ "--c": `var(--${color})` } as CSSProperties}
                className={`group relative grid ${cols} items-center gap-5 border-t border-(--line) px-5 py-3.5 transition-colors hover:bg-[color-mix(in_srgb,var(--c)_7%,transparent)] before:absolute before:inset-y-3 before:left-0 before:w-0.75 before:scale-y-0 before:rounded-r before:bg-(--c) before:transition-transform hover:before:scale-y-100`}
              >
                {/* Name */}
                <div className="flex min-w-0 items-center gap-3.5">
                  <div className="flex size-10.5 shrink-0 items-center justify-center rounded-[10px] border border-[color-mix(in_srgb,var(--c)_35%,transparent)] bg-[color-mix(in_srgb,var(--c)_14%,transparent)] text-(--c)">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-medium leading-tight">{doc.name}</p>
                    <p className="truncate font-mono text-xs text-(--mute)">{doc.file_name}</p>
                  </div>
                </div>

                {/* Type */}
                <span className="justify-self-end rounded-full border border-[color-mix(in_srgb,var(--c)_40%,transparent)] px-2.5 py-0.5 font-mono text-xs text-(--c)">
                  {doc.type.toUpperCase()}
                </span>

                {/* Size & Last update */}
                <span className="text-right font-mono text-sm">{doc.size}</span>
                <span className="text-right font-mono text-sm">{doc.lastModified}</span>

                {/* Button */}
                <span
                  aria-hidden="true"
                  className="grid size-9 place-items-center justify-self-end rounded-full border border-(--line) text-(--mute) transition-colors group-hover:border-(--c) group-hover:bg-(--c) group-hover:text-(--bg)"
                >
                  {isMarkdown ? <LuArrowUpRight size={18} /> : <LuDownload size={18} />}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}