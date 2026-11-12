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
    <div className="flex min-h-97.5 flex-col rounded-xl border border-(--line) bg-(--panel) transition-all duration-200 ease-out hover:border-(--cyan) hover:border-b-4 hover:shadow-[0_12px_30px_-12px_color-mix(in_srgb,var(--cyan)_40%,transparent)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex flex-row gap-1.5 border-b border-(--line) px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-(--line)" />
        <span className="h-2 w-2 rounded-full bg-(--line)" />
        <span className="h-2 w-2 rounded-full bg-(--line)" />
      </div>

      {/* <Image /> */}
      <div className="relative">
        <div className="h-40 w-full bg-(--bg)" />
        {active && (
          <div className="flex flex-row gap-2 items-center absolute top-3 right-3">
            <p className="text-[12px] text-(--mint) bg-(--mint)/20 px-2 py-1 font-mono">Active</p>
          </div>
         )
        }
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className={`self-start rounded-full border px-3 py-1 font-mono text-[12px] ${colorStyles[color]}`}>
          {type}
        </span>
        <h3 className="mt-3 mb-0.5 text-2xl font-bold">{name}</h3>
        <p className="mb-4 leading-tight text-(--mute)">{description}</p>
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
      <div className="flex flex-row justify-between border-t border-(--line) px-4 py-3 cursor-pointer">
        <a
          // href={docUrl}
          download
          className="group flex flex-row items-center gap-1 text-(--mute) transition-colors hover:text-(--cyan)"
        >
          <span className="font-mono text-[12px]">Documentation</span>
          <IoMdDownload />
        </a>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-row items-center gap-1 text-(--mute) transition-colors hover:text-(--cyan)"
        >
          <span className="font-mono text-[12px]">GitHub</span>
          <LuFolderGit2 />
        </a>
      </div>
    </div>
  );
}