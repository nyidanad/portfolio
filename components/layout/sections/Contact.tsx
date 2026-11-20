import { contact } from "@/config/contact";
import CopyButton from "@/components/ui/CopyButton";
import ContactForm from "@/components/ui/ContactForm";
import "./Contact.component.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">
          <span className="contact__title-accent">&gt; </span>
          Contact Me
        </h2>

        <div className="contact__grid">
          {/* Infos */}
          <div className="contact__info">
            <p className="contact__text">
              New project or collaboration? Send me a message, and I&apos;ll get back to you within a day.
            </p>

            <a href={`mailto:${contact.email}`} className="contact__email">
              {contact.email}
            </a>

            <div className="contact__actions">
              <CopyButton
                text={contact.email}
                label="Copy email"
                className="contact__btn"
              />
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__btn"
              >
                GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__btn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}