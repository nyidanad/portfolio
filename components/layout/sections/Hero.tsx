import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="overview"
      className="min-h-screen flex justify-center items-center mt-4 px-5 py-[clamp(32px,6vw,64px)] sm:px-8"
    >
      {/* Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-[45%] aspect-square w-[min(900px,140vw)] translate-x-[30%] -translate-y-1/2 bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--cyan)_20%,transparent),transparent)]" />
      </div>

      <div className="relative flex w-full max-w-6xl flex-col items-start gap-[clamp(32px,4vw,56px)] md:w-auto md:flex-row md:items-center">
        {/* Title */}
        <div className="min-w-0 mt-8 md:mt-0">
          <h1
            className="text-[clamp(52px,9vw,104px)] font-bold text-(--text) tracking-tighter leading-none"
            style={{ textShadow: "-2px 0 var(--cyan), 2px 0 var(--amber)" }}
          >
            Dániel Nyíri
          </h1>
          <p className="mb-[clamp(16px,2.5vw,24px)] font-mono text-sm text-(--mint)">
            {">"} Software Engineer
          </p>
          <p className="mb-[clamp(20px,3vw,32px)] max-w-137.5 text-[clamp(16px,1.8vw,20px)] text-(--mute)">
            I build modern web and mobile applications, backends and CI/CD pipelines. My goal is clean code and a great user experience.
          </p>
          <div className="flex flex-row flex-wrap gap-[clamp(12px,2vw,24px)]">
            <Link
              href="#projects"
              className="rounded-md bg-(--cyan) px-[clamp(16px,2.5vw,24px)] py-[clamp(10px,1.4vw,12px)] font-mono text-[clamp(14px,1.6vw,16px)] text-(--bg) hover:brightness-115"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-(--cyan) px-[clamp(16px,2.5vw,24px)] py-[clamp(10px,1.4vw,12px)] font-mono text-[clamp(14px,1.6vw,16px)] text-(--cyan) hover:bg-(--cyan)/20"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Card */}
        <div className="w-[clamp(250px,19vw,320px)] shrink-0 rounded-[18px] border border-(--line) bg-(--panel) p-[clamp(14px,2vw,18px)] shadow-[0_30px_80px_-30px_color-mix(in_srgb,var(--cyan)_55%,transparent)]">
          <div className="relative overflow-hidden rounded-[10px]">
            <Image
              alt="profile"
              src="/images/CV-profile-2026.jpg"
              width={1000}
              height={1000}
              sizes="320px"
              priority
              style={{ width: "100%", height: "auto" }}
              className="block aspect-4/5 object-cover object-[50%_22%]"
            />
          </div>
          <p className="mt-4 text-[clamp(20px,3vw,24px)] font-bold tracking-tight text-(--text)">
            Dániel Nyíri
          </p>
          <p className="font-mono text-[clamp(12px,1.4vw,14px)] text-(--mint)">software engineer</p>
          <div className="mt-[clamp(14px,2vw,20px)] flex flex-row justify-between gap-2">
            <p className="font-mono text-[clamp(12px,1.4vw,14px)] text-(--mute)">id: dev-2026</p>
            <p className="font-mono text-[clamp(12px,1.4vw,14px)] text-(--mute)">access: root</p>
          </div>

          {/* Barcode */}
          <div
            aria-hidden="true"
            className="h-8.5 opacity-80 mt-3"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--text) 0 2px, transparent 2px 5px, var(--text) 5px 6px, transparent 6px 10px)",
            }}
          />
        </div>
      </div>
    </section>
  )
}