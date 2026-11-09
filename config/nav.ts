import { IconType } from "react-icons";
import { LuLayoutDashboard, LuUserRound, LuCodeXml, LuFileText, LuMail } from "react-icons/lu";
import { IoIosGitBranch, IoIosMail, IoLogoLinkedin } from "react-icons/io";

export interface NavLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface QuickAction {
  label: string;
  hint: string;
  href: string;
  icon: IconType;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "Overview", href: "#overview", icon: LuLayoutDashboard },
  { label: "About", href: "#about", icon: LuUserRound },
  { label: "Projects", href: "#projects", icon: LuCodeXml },
  { label: "Docs", href: "#docs", icon: LuFileText },
  { label: "Contact", href: "#contact", icon: LuMail },
];

export const quickActions: QuickAction[] = [
  { label: "Open GitHub", hint: "action", href: "https://github.com/nyidanad", icon: IoIosGitBranch , external: true },
  { label: "Open LinkedIn", hint: "action", href: "https://www.linkedin.com/in/dániel-nyíri-a761273a9/", icon: IoLogoLinkedin, external: true },
  { label: "Write an email", hint: "action", href: "mailto:nyiridaniel3@gmail.com", icon: IoIosMail  },
];