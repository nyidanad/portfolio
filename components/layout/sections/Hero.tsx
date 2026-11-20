import Image from "next/image";
import Link from "next/link";
import "./Hero.component.css";

export default function Hero() {
  return (
    <section id="overview" className="hero">
      {/* Glow */}
      <div aria-hidden="true" className="hero__glow">
        <div className="hero__glow-circle" />
      </div>

      <div className="hero__inner">
        {/* Title */}
        <div className="hero__intro">
          <h1 className="hero__name">Dániel Nyíri</h1>
          <p className="hero__role">{">"} Software Engineer</p>
          <p className="hero__text">
            I build modern web and mobile applications, backends and CI/CD pipelines. My goal is clean code and a great user experience.
          </p>
          <div className="hero__actions">
            <Link href="#projects" className="hero__btn hero__btn--primary">
              View Projects
            </Link>
            <Link href="#contact" className="hero__btn hero__btn--outline">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Card */}
        <div className="hero__id-card">
          <div className="hero__photo">
            <Image
              alt="profile"
              src="/portfolio/images/CV-profile-2026.jpg"
              width={1000}
              height={1000}
              sizes="320px"
              priority
              className="hero__photo-img"
            />
          </div>
          <p className="hero__id-name">Dániel Nyíri</p>
          <p className="hero__id-role">software engineer</p>
          <div className="hero__id-meta">
            <p>id: dev-2026</p>
            <p>access: root</p>
          </div>

          {/* Barcode */}
          <div aria-hidden="true" className="hero__barcode" />
        </div>
      </div>
    </section>
  )
}