import { contact } from "@/config/contact";
import CopyButton from "@/components/ui/CopyButton";
import ContactForm from "@/components/ui/ContactForm";

const btn = "cursor-pointer rounded-md border border-(--cyan) px-5 py-2.5 font-mono text-[15px] text-(--cyan) transition-colors hover:bg-(--cyan)/15";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[80vh]">
      <div className="max-w-6xl m-auto">
        <h2 className="text-7xl font-bold mb-10">
          <span className="text-(--cyan)">&gt; </span>
          Contact Me
        </h2>

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Infos */}
          <div>
            <p className="max-w-125 text-(--mute) mb-6">
              New project or collaboration? Send me a message, and I'll get back to you within a day.
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-2 inline-block break-all border-b-2 border-dashed border-(--cyan) text-[clamp(24px,4vw,44px)] leading-[1.1] font-bold tracking-tight text-(--cyan) transition-colors hover:bg-(--cyan) hover:text-(--bg)"
            >
              {contact.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <CopyButton text={contact.email} label="Copy email" className={btn} />
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className={btn}>
                GitHub
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={btn}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}