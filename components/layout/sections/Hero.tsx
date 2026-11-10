import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="overview" className="min-h-screen flex justify-center items-center mt-4">
      {/* Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-[45%] aspect-square w-[min(900px,140vw)] translate-x-[30%] -translate-y-1/2 bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--cyan)_20%,transparent),transparent)]" />
      </div>
      <div className="relative max-w-6xl flex flex-row gap-14 items-center">
        {/* Title */}
        <div>
          <h1 
            className="text-[104px] font-bold text-(--text) tracking-tighter leading-none"
            style={{ textShadow: "-2px 0 var(--cyan), 2px 0 var(--amber)" }}
          >
            Dániel Nyíri
          </h1>
          <p className="text-sm text-(--mint) font-mono mb-6">{'>'} Software Engineer</p>
          <p className="text-xl text-(--mute) max-w-137.5 mb-8">I build modern web and mobile applications, backends and CI/CD pipelines. My goal is clean code and a great user experience.</p>
          <div className="flex flex-row gap-6">
            <Link href="#projects" className="bg-(--cyan) text-(--bg) font-mono px-6 py-3 rounded-md hover:brightness-115">View Projects</Link>
            <Link href="#contact" className="border border-(--cyan) text-(--cyan) font-mono px-6 py-3 rounded-md hover:bg-(--cyan)/20">Contact Me</Link>
          </div>
        </div>

        {/* Card */}
        <div className="w-[min(320px,80vw)] rounded-[18px] border border-(--line) bg-(--panel) p-4.5 shadow-[0_30px_80px_-30px_color-mix(in_srgb,var(--cyan)_55%,transparent)]">
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
          <p className="text-2xl text-(--text) font-bold tracking-tight mt-4">Dániel Nyíri</p>
          <p className="text-sm text-(--mint) font-mono">software engineer</p>
          <div className="flex flex-row justify-between mt-5">
            <p className="text-sm text-(--mute) font-mono">id: dev-2026</p>
            <p className="text-sm text-(--mute) font-mono">access: root</p>
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
