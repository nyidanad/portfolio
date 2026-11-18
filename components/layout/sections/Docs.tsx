import type { CSSProperties } from "react";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import { docColors, docIcons, documents } from "@/config/docs";

const cols = "lg:grid-cols-[minmax(0,5fr)_repeat(4,minmax(0,1.25fr))]";

export default function Docs() {
  return (
    <section
      id="docs"
      className="min-h-[60vh] mt-[clamp(64px,10vw,128px)] px-5 sm:px-8
        lg:min-h-[75vh]"
    >
      <div
        className="mx-auto w-full max-w-6xl
          lg:px-8
          xl:px-0
          2xl:max-w-7xl
          min-[1920px]:max-w-[1600px]
          min-[2560px]:max-w-[1900px]"
      >
        <h2 className="mb-[clamp(24px,4vw,40px)] text-[clamp(36px,8vw,72px)] leading-[1.05] font-bold wrap-break-word">
          <span className="text-(--cyan)">&gt; </span>
          Documents
        </h2>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-(--line) bg-(--panel)">
          {/* Header */}
          <div
            className={`grid grid-cols-[minmax(0,1fr)_auto] gap-[clamp(12px,1.6vw,20px)] bg-(--bg) px-[clamp(14px,2vw,20px)] py-3 font-mono text-[clamp(11px,1.4vw,12px)] text-(--mute) ${cols}`}
          >
            <p>filename</p>
            <div className="hidden lg:contents">
              <p className="text-right">type</p>
              <p className="text-right">size</p>
              <p className="text-right">last update</p>
            </div>

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
                className={`group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-[clamp(12px,1.6vw,20px)] border-t border-(--line) px-[clamp(14px,2vw,20px)] py-[clamp(12px,1.5vw,14px)] transition-colors hover:bg-[color-mix(in_srgb,var(--c)_7%,transparent)] before:absolute before:inset-y-3 before:left-0 before:w-0.75 before:scale-y-0 before:rounded-r before:bg-(--c) before:transition-transform hover:before:scale-y-100 ${cols}`}
              >
                {/* Name */}
                <div className="flex min-w-0 items-center gap-[clamp(10px,1.4vw,14px)]">
                  <div className="flex size-[clamp(36px,5vw,42px)] shrink-0 items-center justify-center rounded-[10px] border border-[color-mix(in_srgb,var(--c)_35%,transparent)] bg-[color-mix(in_srgb,var(--c)_14%,transparent)] text-[clamp(17px,2.4vw,20px)] text-(--c)">
                    <Icon size="1em" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[clamp(16px,2.2vw,18px)] font-medium leading-tight">
                      {doc.name}
                    </p>
                    <p className="truncate font-mono text-[clamp(11px,1.4vw,12px)] text-(--mute)">
                      {doc.file_name}
                    </p>
                  </div>
                </div>

                {/* Meta: 1024px alatt rejtve, lg-től külön oszlopok */}
                <div className="hidden lg:contents">
                  {/* Type */}
                  <span className="justify-self-end rounded-full border border-[color-mix(in_srgb,var(--c)_40%,transparent)] px-2.5 py-0.5 font-mono text-xs text-(--c)">
                    {doc.type.toUpperCase()}
                  </span>

                  {/* Size & Last update */}
                  <span className="text-right font-mono text-sm">{doc.size}</span>
                  <span className="text-right font-mono text-sm">{doc.lastModified}</span>
                </div>

                {/* Button */}
                <span
                  aria-hidden="true"
                  className="grid size-[clamp(32px,4.5vw,36px)] place-items-center justify-self-end rounded-full border border-(--line) text-[clamp(16px,2.2vw,18px)] text-(--mute) transition-colors group-hover:border-(--c) group-hover:bg-(--c) group-hover:text-(--bg)"
                >
                  {isMarkdown ? <LuArrowUpRight size="1em" /> : <LuDownload size="1em" />}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}