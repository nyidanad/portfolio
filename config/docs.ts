import { IconType } from "react-icons";
import { FaRegFileLines, FaRegFilePdf, FaRegFileWord, FaRegFileZipper } from "react-icons/fa6";

export type DocType = "pdf" | "docx" | "md" | "zip";
export type ColorType = "cyan" | "mint" | "amber" | "vio" | "red";

export const docIcons: Record<DocType, IconType> = {
  pdf: FaRegFilePdf,
  docx: FaRegFileWord,
  md: FaRegFileLines,
  zip: FaRegFileZipper,
};

export const docColors: Record<DocType, ColorType> = {
  pdf: "red",
  docx: "cyan",
  md: "vio",
  zip: "amber",
};

export interface Document {
  key: string;
  name: string;
  file_name: string;
  type: DocType;
  size: string;
  lastModified: string;
  href: string;
}

export const documents: Document[] = [
  {
    key: "cv-hun",
    name: "CV Hungarian version",
    file_name: "NyiriDaniel_CV-HUN.pdf",
    type: "pdf",
    size: "148 kb",
    lastModified: "2026/09/23",
    href: "/docs/NyiriDaniel_CV-HUN.pdf"
  },
  {
    key: "cv-eng",
    name: "CV English version",
    file_name: "NyiriDaniel_CV-ENG.pdf",
    type: "pdf",
    size: "140 kb",
    lastModified: "2026/10/20",
    href: "/docs/NyiriDaniel_CV-ENG.pdf"
  },
]