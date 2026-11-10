import { Timeline } from "@/components/ui/Timeline"
import { stack } from "@/config/stack"

export default function About() {
  return (
    <section id="about" className="min-h-screen">
      <div className="max-w-6xl m-auto">
        <h2 className="text-7xl font-bold mb-10">
          <span className="text-(--cyan)">&gt; </span>
          About
        </h2>

        <div className="flex flex-col gap-4 mb-4 md:flex-row">
          {/* Experiences */}
          <div className="min-h-32 min-w-0 flex-1 bg-(--panel) border border-(--line) rounded-xl p-6">
            <h3 className="text-2xl font-bold"><span className="text-(--cyan) mr-2.5">//</span>Experiences</h3>
            <ul className="mt-6 flex flex-col gap-6 border-l border-(--line) pl-6 text-sm font-mono">
              <li className="relative before:absolute before:top-1.25 before:-left-7 before:size-2 before:rounded-full before:bg-(--cyan) before:shadow-[0_0_0_3px_var(--panel)]">
                <p className="text-(--mute)">2025.06. - 2025.08.</p>
                <h4 className="text-[18px] text-(--mint) font-bold my-1">Software Engineer Intern</h4>
                <p className="mb-1">Simplesoft Kft.</p>
                <ul className="list-disc ml-8 text-(--mute) leading-relaxed max-w-md">
                  <li>Developing modern web applications using Next.js and TypeScript.</li>
                  <li>Fixing various issues and bugs.</li>
                  <li>Refactoring existing components.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="min-h-32 min-w-0 flex-1 bg-(--panel) border border-(--line) rounded-xl p-6">
            <h3 className="text-2xl text-(--text) font-bold"><span className="text-(--cyan) mr-2.5">//</span>Education</h3>
            <ul className="mt-6 flex flex-col gap-6 border-l border-(--line) pl-6 text-sm font-mono">
              <Timeline>
                <p className="text-(--mute)">2024.09. - 2026.06.</p>
                <h4 className="text-[18px] text-(--amber) font-bold my-1">Computer Science Engineer (MSc)</h4>
                <p className="">University of Miskolc</p>
              </Timeline>

              <Timeline>
                <p className="text-(--mute)">2020.09. - 2024.06.</p>
                <h4 className="text-[18px] text-(--amber) font-bold my-1">Computer Science Operational Engineer (BSc)</h4>
                <p className="">University of Miskolc</p>
              </Timeline>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="min-h-32 min-w-0 flex-2 bg-(--panel) border border-(--line) rounded-xl p-6">
          <h3 className="text-2xl text-(--text) font-bold">
            <span className="text-(--cyan) mr-2.5">//</span>Tech Stack
          </h3>

          <dl className="mt-6 divide-y divide-(--line) border-y border-(--line)">
            {stack.map((group) => (
              <div
                key={group.label}
                className="grid gap-2 py-3.5 sm:grid-cols-[160px_1fr] sm:items-baseline"
              >
                <dt className="font-mono text-sm text-(--mute)">{group.label}</dt>
                <dd className="flex flex-wrap gap-x-2 gap-y-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-(--line) bg-(--cyan)/5 px-2.5 py-0.5 font-mono text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
