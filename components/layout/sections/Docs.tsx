import type { CSSProperties } from "react";
import { LuArrowUpRight, LuDownload } from "react-icons/lu";
import { docColors, docIcons, documents } from "@/config/docs";
import "./Docs.component.css";

export default function Docs() {
  return (
    <section id="docs" className="docs">
      <div className="docs__container">
        <h2 className="docs__title">
          <span className="docs__title-accent">&gt; </span>
          Documents
        </h2>

        {/* Table */}
        <div className="docs__table">
          {/* Header */}
          <div className="docs__head">
            <p>filename</p>
            <div className="docs__head-meta">
              <p>type</p>
              <p>size</p>
              <p>last update</p>
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
                className="docs__row"
              >
                {/* Name */}
                <div className="docs__name-wrap">
                  <div className="docs__icon">
                    <Icon size="1em" aria-hidden="true" />
                  </div>
                  <div className="docs__texts">
                    <p className="docs__name">{doc.name}</p>
                    <p className="docs__file">{doc.file_name}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="docs__meta">
                  <span className="docs__badge">{doc.type.toUpperCase()}</span>
                  <span className="docs__cell">{doc.size}</span>
                  <span className="docs__cell">{doc.lastModified}</span>
                </div>

                {/* Button */}
                <span aria-hidden="true" className="docs__button">
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