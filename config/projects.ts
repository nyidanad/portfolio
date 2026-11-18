export type ProjectType = "Web" | "Mobile" | "Backend" | "DevOps" | "Engineer";
export type Filter = "All" | ProjectType;

export interface Project {
  key: string;
  name: string;
  type: ProjectType;
  color: string;
  description: string;
  technologies: string[];
  image: string | undefined;
  docUrl: string | undefined;
  repo: string | undefined;
  active: boolean;
}

export const projects: Project[] = [
  { 
    key: "listify", 
    name: "Listify", 
    type: "Mobile", 
    color: "mint",
    description: "Shopping list and finance tracker app with AI assistant.",
    technologies: ["Expo", "TypeScript", "Supabase", "Llamma3"],
    image: "/images/screenshots/listify-screenshot.webp",
    docUrl: "/docs/NyiriDaniel-MSc-thesis.pdf",
    repo: "https://github.com/nyidanad/Listify",
    active: false
  },
  { 
    key: "cadcam-lathe-chuck", 
    name: "4 Jaw Lathe Chuck", 
    type: "Engineer",
    color: "red",
    description: "1:1 CAD-CAM model of a 4 jaw lathe chuck.",
    technologies: ["Autodesk 3D"],
    image: "/images/screenshots/lathe_chuck-screenshot.webp",
    docUrl: "/docs/NyiriDaniel-CADCAM-thesis.pdf",
    repo: "https://github.com/nyidanad/Four_jaw-Lathe-Chuck",
    active: false
  }
];

export const filters: { id: Filter }[] = [
  { id: "All" },
  { id: "Web" },
  { id: "Mobile" },
  { id: "Backend" },
  { id: "DevOps" },
  { id: "Engineer" },
];