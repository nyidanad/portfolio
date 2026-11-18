import { Fragment } from "react";
import { Project } from "@/config/projects";
import { IoMdDownload } from "react-icons/io";
import { LuFolderGit2 } from "react-icons/lu";

const colorStyles: Record<string, string> = {
  cyan: "border-(--cyan) text-(--cyan)",
  mint: "border-(--mint) text-(--mint)",
  amber: "border-(--amber) text-(--amber)",
  vio: "border-(--vio) text-(--vio)",
  red: "border-(--red) text-(--red)",
};

export default function Card({ name, type, description, color, technologies, docUrl, repo, active }: Project) {
  return (
    <div className="flex w-full max-w-[320px] flex-col rounded-xl border border-(--line) bg-(--panel) transition-all duration-200 ease-out hover:border-(--cyan) hover:border-b-4 hover:shadow-[0_12px_30px_-12px_color-mix(in_srgb,var(--cyan)_40%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:min-h-97.5 md:max-w-none">
      <div className="flex flex-row gap-1.5 border-b border-(--line) px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-(--line)" />
        <span className="h-2 w-2 rounded-full bg-(--line)" />
        <span className="h-2 w-2 rounded-full bg-(--line)" />
      </div>

      {/* <Image /> */}
      <div className="relative">
        <div className="h-36 w-full bg-(--bg) sm:h-40" />
        {active && (
          <div className="absolute top-3 right-3 flex flex-row items-center gap-2">
            <p className="bg-(--mint)/20 px-2 py-1 font-mono text-[12px] text-(--mint)">Active</p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className={`self-start rounded-full border px-3 py-1 font-mono text-[clamp(9px,2.6vw,10px)] lg:text-[11px] xl:text-xs ${colorStyles[color]}`}>
          {type}
        </span>
        <h3 className="mt-3 mb-0.5 text-xl font-bold sm:text-2xl">{name}</h3>
        <p className="mb-4 text-[clamp(13px,3.4vw,15px)] leading-tight text-(--mute) xl:text-base">{description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {technologies.map((technology, i) => (
            <Fragment key={technology}>
              {i > 0 && (
                <span aria-hidden="true" className="text-[12px] text-(--amber)">•</span>
              )}
              <span className="font-mono text-[12px] text-(--amber)">{technology}</span>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-row flex-wrap items-center justify-between gap-x-4 border-t border-(--line) px-4 py-1.5">
        <a
          // href={docUrl}
          download
          className="cursor-pointer flex flex-row items-center gap-1.5 py-1.5 text-(--mute) transition-colors hover:text-(--cyan)"
        >
          <span className="font-mono text-[12px]">Documentation</span>
          <IoMdDownload />
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer flex flex-row items-center gap-1.5 py-1.5 text-(--mute) transition-colors hover:text-(--cyan)"
        >
          <span className="font-mono text-[12px]">GitHub</span>
          <LuFolderGit2 />
        </a>
      </div>
    </div>
  );
}