import Image from "next/image";

import { Terminal } from "@/components/ui/Terminal";
import { Statistic } from "@/components/ui/Statistic";
import { LuCalendarDays, LuCodeXml, LuFolderGit2, LuLayers } from "react-icons/lu";

export default function Home() {
  return (
    <div className=" justify-center items-center flex flex-col mt-10">
      <div className="flex flex-row justify-between items-center">
        <div className="max-w-1/2">
          <p className="text-zinc-100 text-sm mb-5">
            <span className="text-[#4ade80]">$ </span> 
            whoami
          </p>
          <h1 className="text-zinc-100 text-7xl font-bold mb-5">
            Hi, I'm 
            <span className="text-[#4ade80]"> Dániel Nyíri</span>
          </h1>
          <p className="text-violet-300 text-2xl mb-5">Software Developer</p>
          <p className="text-zinc-500 text-sm mb-5">
            I build modern web and mobile applications, backends and CI/CD pipelines.<br />
            Clean code and great user experience are my goals.</p>
          <ul className="flex flex-row gap-3 text-sm text-zinc-500 mb-9">
            <li className="bg-[##3a3d43] border border-[##3a3d43] rounded-full text-zinc-500 text-[12px] px-2.5 py-0.5">Next.js</li>
            <li className="bg-[##3a3d43] border border-[##3a3d43] rounded-full text-zinc-500 text-[12px] px-2.5 py-0.5">TypeScript</li>
            <li className="bg-[##3a3d43] border border-[##3a3d43] rounded-full text-zinc-500 text-[12px] px-2.5 py-0.5">Java</li>
            <li className="bg-[##3a3d43] border border-[##3a3d43] rounded-full text-zinc-500 text-[12px] px-2.5 py-0.5">Python</li>
            <li className="bg-[##3a3d43] border border-[##3a3d43] rounded-full text-zinc-500 text-[12px] px-2.5 py-0.5">PostgreSQL</li>
            <li className="bg-[##3a3d43] border border-[#4ade80] rounded-full text-[#4ade80] text-[12px] px-2.5 py-0.5 hover:border-emerald-200 hover:text-emerald-200"><a href="/about">More...</a></li>
          </ul>

          <div className="flex flex-row gap-3">
            <a href="/projects" className="bg-[#4ade80] text-zinc-900 text-sm px-4 py-3 hover:text-emerald-50">./projects</a>
            <a href="/contact" className="border border-[#4ade80] text-[#4ade80] text-sm px-4 py-3 hover:bg-[#4ade80] hover:text-emerald-50">./contact</a>
          </div>
        </div>

        <div className="relative w-100 aspect-4/5">
          {/* Backdrop */}
          <div className="absolute top-4 left-5 w-full h-full border-2 border-[#4ade80] rounded-3xl" />

          {/* Image */}
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <Image
              src="/images/CV-profile-2026.jpg"
              alt="Hero Image"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Terminal */}
          <Terminal />
        </div>
      </div>

      <div className="flex flex-row gap-3 mt-10">
        <Statistic icon={<LuFolderGit2 />} title="Projects" value="5+" />
        <Statistic icon={<LuCodeXml />} title="Technologies" value="10+" />
        <Statistic icon={<LuCalendarDays />} title="Experience Level" value="Entry-level" />
        <Statistic icon={<LuLayers />} title="Specialization" value="Full Stack, DevOps" />
      </div>
    </div>
  );
}
