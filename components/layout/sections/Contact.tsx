import { contact } from "@/config/contact";
import CopyButton from "@/components/ui/CopyButton";
import ContactForm from "@/components/ui/ContactForm";

const btn =
  "cursor-pointer rounded-md border border-(--cyan) text-(--cyan) font-mono transition-colors hover:bg-(--cyan)/15 " +
  "px-[clamp(14px,1.5vw,24px)] py-[clamp(8px,1.5vw,12px)] text-[clamp(12px,1.5vw,16px)] " +
  "2xl:px-7 2xl:py-3.5 2xl:text-[18px]";

export default function Contact() {
  return (
    <section id="contact" className="min-h-[80vh] px-5 pb-[clamp(15px,8vw,40px)] sm:px-8">
      <div
        className="mx-auto w-full max-w-6xl
          lg:px-8
          xl:px-0
          2xl:max-w-7xl
          min-[1920px]:max-w-[1600px]
          min-[2560px]:max-w-[1900px]"
      >
        <h2 className="mb-[clamp(24px,4vw,40px)] text-[clamp(36px,8vw,72px)] leading-[1.05] font-bold wrap-break-word">
          <span className="text-(--cyan)">&gt; </span>
          Contact Me
        </h2>

        <div
          className="grid grid-cols-1 items-start gap-[clamp(32px,5vw,48px)]
            lg:grid-cols-2 lg:gap-[clamp(24px,3vw,48px)]
            2xl:gap-16"
        >
          {/* Infos */}
          <div className="min-w-0">
            <p className="mb-[clamp(16px,2.5vw,32px)] max-w-125 text-[clamp(15px,1.8vw,20px)] leading-relaxed text-(--mute) 2xl:max-w-2xl">
              New project or collaboration? Send me a message, and I'll get back to you within a day.
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-2 inline-block max-w-full break-all border-b-2 border-dashed border-(--cyan) text-[clamp(18px,5vw,44px)] leading-[1.1] font-bold tracking-tight text-(--cyan) transition-colors hover:bg-(--cyan) hover:text-(--bg)
                lg:text-[clamp(22px,3vw,40px)]
                2xl:text-[clamp(36px,2.6vw,56px)]"
            >
              {contact.email}
            </a>

            <div className="mt-[clamp(24px,3vw,40px)] flex flex-wrap gap-[clamp(8px,1.5vw,16px)]">
              <CopyButton
                text={contact.email}
                label="Copy email"
                className={btn}
              />
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={btn}
              >
                GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={btn}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="w-full min-w-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}