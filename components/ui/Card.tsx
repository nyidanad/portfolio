import { Fragment } from "react";
import { Project } from "@/config/projects";
import { IoMdDownload } from "react-icons/io";
import { LuFolderGit2 } from "react-icons/lu";
import Image from "next/image";
import "./Card.component.css";

export default function Card({ name, type, description, color, technologies, image, docUrl, repo, active }: Project) {
  return (
    <div className="card">
      <div className="card__header">
        <span className="card__dot" />
        <span className="card__dot" />
        <span className="card__dot" />
      </div>

      {/* Screenshot */}
      <div className="card__screenshot">
        {image && (
          <Image
            src={image}
            alt={`${name} screenshot`}
            fill
            sizes="(min-width: 768px) 33vw, 320px"
            className="card__image"
          />
        )}

        {active && (
          <div className="card__active-wrap">
            <p className="card__active">Active</p>
          </div>
        )}
      </div>

      <div className="card__body">
        <span className={`card__type card__type--${color}`}>{type}</span>
        <h3 className="card__title">{name}</h3>
        <p className="card__description">{description}</p>
        <div className="card__tech">
          {technologies.map((technology, i) => (
            <Fragment key={technology}>
              {i > 0 && (
                <span aria-hidden="true" className="card__tech-sep">•</span>
              )}
              <span className="card__tech-item">{technology}</span>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="card__footer">
        <a href={docUrl} download className="card__link">
          <span className="card__link-text">Documentation</span>
          <IoMdDownload />
        </a>
        <a href={repo} target="_blank" rel="noopener noreferrer" className="card__link">
          <span className="card__link-text">GitHub</span>
          <LuFolderGit2 />
        </a>
      </div>
    </div>
  );
}