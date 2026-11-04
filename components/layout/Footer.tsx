import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between px-16 h-12 border-t border-zinc-700">
      <p className="text-[12px] text-zinc-500">&copy; 2026 Dániel Nyíri · built from coffee and commits</p>
      <ul className="flex gap-3.5">
        <li>
          <a href="https://github.com/nyidanad" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-zinc-500 hover:text-[#4ade80]" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/dániel-nyíri-a761273a9/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-zinc-500 hover:text-[#4ade80]" />
          </a>
        </li>
        <li>
          <a href="mailto:nyiridaniel3@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail className="w-6 h-6 text-zinc-500 hover:text-[#4ade80]" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer