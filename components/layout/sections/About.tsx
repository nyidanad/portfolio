import { Timeline } from "@/components/ui/Timeline"
import { stack } from "@/config/stack"

export default function About() {
  return (
    <section id="about" className="min-h-screen py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-8 xl:px-0">
        <h2 className="mb-[clamp(18px,4vw,40px)] text-4xl font-bold sm:text-5xl lg:mb-10 lg:text-7xl">
          <span className="text-(--cyan)">&gt; </span>
          About
        </h2>

        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Experiences */}
          <div className="min-h-32 min-w-0 flex-1 rounded-xl border border-(--line) bg-(--panel) p-4 sm:p-6">
            <h3 className="text-xl font-bold sm:text-2xl">
              <span className="mr-2.5 text-(--cyan)">//</span>Experiences
            </h3>
            <ul className="mt-5 flex flex-col gap-6 border-l border-(--line) pl-6 font-mono text-[clamp(11px,3vw,13px)] sm:mt-6 sm:text-sm">
              <li className="relative before:absolute before:top-1.25 before:-left-7 before:size-2 before:rounded-full before:bg-(--cyan) before:shadow-[0_0_0_3px_var(--panel)]">
                <p className="text-[clamp(12px,3vw,14px)] text-(--mute)">2025.06. - 2025.08.</p>
                <h4 className="my-1 text-base font-bold text-(--mint) text-[clamp(14px,3vw,18px)]">Software Engineer Intern</h4>
                <p className="mb-1">Simplesoft Kft.</p>
                <ul className="ml-5 list-disc leading-relaxed text-(--mute) sm:ml-8">
                  <li>Developing modern web applications using Next.js and TypeScript.</li>
                  <li>Fixing various issues and bugs.</li>
                  <li>Refactoring existing components.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="min-h-32 min-w-0 flex-1 rounded-xl border border-(--line) bg-(--panel) p-4 sm:p-6">
            <h3 className="text-xl font-bold text-(--text) sm:text-2xl">
              <span className="mr-2.5 text-(--cyan)">//</span>Education
            </h3>
            <ul className="mt-5 flex flex-col gap-6 border-l border-(--line) pl-6 font-mono text-[clamp(11px,3vw,13px)] sm:mt-6 sm:text-sm">
              <Timeline>
                <p className="text-[clamp(12px,3vw,14px)] text-(--mute)">2024.09. - 2026.06.</p>
                <h4 className="my-1 text-base font-bold text-(--amber) text-[clamp(14px,3vw,18px)]">Computer Science Engineer (MSc)</h4>
                <p>University of Miskolc</p>
              </Timeline>

              <Timeline>
                <p className="text-[clamp(12px,3vw,14px)] text-(--mute)">2020.09. - 2024.06.</p>
                <h4 className="my-1 text-base font-bold text-(--amber) text-[clamp(14px,3vw,18px)]">Computer Science Operational Engineer (BSc)</h4>
                <p>University of Miskolc</p>
              </Timeline>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="min-h-32 min-w-0 rounded-xl border border-(--line) bg-(--panel) p-4 sm:p-6">
          <h3 className="text-xl font-bold text-(--text) sm:text-2xl">
            <span className="mr-2.5 text-(--cyan)">//</span>Tech Stack
          </h3>

          <dl className="mt-5 divide-y divide-(--line) border-y border-(--line) sm:mt-6">
            {stack.map((group) => (
              <div
                key={group.label}
                className="grid gap-2 py-3.5 sm:grid-cols-[120px_1fr] sm:items-baseline md:grid-cols-[160px_1fr]"
              >
                <dt className="font-mono text-[clamp(11px,2.7vw,13px)] text-(--mute) lg:text-sm">{group.label}</dt>
                <dd className="flex flex-wrap gap-x-2 gap-y-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-(--line) bg-(--cyan)/5 px-2 py-0.5 font-mono text-[clamp(11px,2.7vw,13px)] sm:px-2.5 lg:text-sm"
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