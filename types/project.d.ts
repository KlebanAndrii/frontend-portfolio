interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoLink: string;
  codeLink: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  expanded: number | null;
  onToggleExpand: (index: number) => void;
  isActive?: boolean;
  isMobile?: boolean;
}
