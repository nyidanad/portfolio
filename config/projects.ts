export type ProjectType = "Web" | "Mobile" | "Backend" | "DevOps" | "Engineer";
export type Filter = "All" | ProjectType;

export interface Project {
  key: string;
  name: string;
  type: ProjectType;
  color: string;
  description: string;
  technologies: string[];
  docUrl: string | undefined;
  repo: string | undefined;
  active: boolean;
}

export const projects: Project[] = [
  { 
    key: "webshop-admin", 
    name: "Webshop admin", 
    type: "Web", 
    color: "cyan",
    description: "Admin dashboard for order management.",
    technologies: ["Next.js", "TypeScript"],
    docUrl: undefined,
    repo: undefined,
    active: true
  },
  { 
    key: "fittrack", 
    name: "FitTrack",
    type: "Mobile", 
    color: "mint",
    description: "Workout Log and Progress Tracker Mobile App.",
    technologies: ["React Native", "Expo", "TypeScript"],
    docUrl: undefined,
    repo: undefined,
    active: false

  },
  { 
    key: "payments-api", 
    name: "Payments API", 
    type: "Backend",
    color: "amber",
    description: "REST API for online payment management.",
    technologies: ["Spring Boot", "Java"],
    docUrl: undefined,
    repo: undefined,
    active: false
  },
  { 
    key: "cicd-sablonok", 
    name: "CI/CD templates", 
    type: "DevOps",
    color: "vio",
    description: "Reusable build- and deploy pipeline templates.",
    technologies: ["GitHub Actions", "Docker"],
    docUrl: undefined,
    repo: undefined,
    active: false
  },
  { 
    key: "note-sync-app", 
    name: "Note sync app", 
    type: "Mobile",
    color: "mint",
    description: "Offline-first note taking app with syncronization.",
    technologies: ["React Native", "SQLite"],
    docUrl: undefined,
    repo: undefined,
    active: false
  },
  { 
    key: "cadcam-lathe-chuck", 
    name: "4 Jaw Lathe Chuck", 
    type: "Engineer",
    color: "red",
    description: "1:1 CAD-CAM model of a 4 jaw lathe chuck.",
    technologies: ["Autodesk 3D"],
    docUrl: undefined,
    repo: undefined,
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