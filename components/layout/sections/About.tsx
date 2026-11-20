import { Timeline } from "@/components/ui/Timeline"
import { stack } from "@/config/stack"
import "./About.component.css"

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">
          <span className="about__title-accent">&gt; </span>
          About
        </h2>

        <div className="about__row">
          {/* Experiences */}
          <div className="about__panel about__panel--half">
            <h3 className="about__heading">
              <span className="about__slashes">//</span>Experiences
            </h3>
            <ul className="about__timeline">
              <Timeline>
                <p className="about__date">2025.06. - 2025.08.</p>
                <h4 className="about__role about__role--mint">Software Engineer Intern</h4>
                <p className="about__place about__place--spaced">Simplesoft Kft.</p>
                <ul className="about__tasks">
                  <li>Developing modern web applications using Next.js and TypeScript.</li>
                  <li>Fixing various issues and bugs.</li>
                  <li>Refactoring existing components.</li>
                </ul>
              </Timeline>
            </ul>
          </div>

          {/* Education */}
          <div className="about__panel about__panel--half">
            <h3 className="about__heading">
              <span className="about__slashes">//</span>Education
            </h3>
            <ul className="about__timeline">
              <Timeline>
                <p className="about__date">2024.09. - 2026.06.</p>
                <h4 className="about__role about__role--amber">Computer Science Engineer (MSc)</h4>
                <p className="about__place">University of Miskolc</p>
              </Timeline>

              <Timeline>
                <p className="about__date">2020.09. - 2024.06.</p>
                <h4 className="about__role about__role--amber">Computer Science Operational Engineer (BSc)</h4>
                <p className="about__place">University of Miskolc</p>
              </Timeline>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="about__panel">
          <h3 className="about__heading">
            <span className="about__slashes">//</span>Tech Stack
          </h3>

          <dl className="about__stack">
            {stack.map((group) => (
              <div key={group.label} className="about__stack-row">
                <dt className="about__stack-label">{group.label}</dt>
                <dd className="about__stack-items">
                  {group.items.map((item) => (
                    <span key={item} className="about__chip">{item}</span>
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