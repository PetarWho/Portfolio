export interface Technology {
  name: string;
  icon?: string; // Icon name from lucide-react or image path
  image?: string; // Optional image URL for logos
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  image?: string;
  icon?: string; // Icon name from lucide-react
  date: Date;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: Date;
  url?: string;
  image?: string;
  description?: string;
  category?: string;
  priority?: number; // Higher number = higher priority (shown first). Default: 0
}

export interface Interest {
  name: string;
  description: string;
  image?: string;
  icon?: string; // Icon name from lucide-react
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon name from lucide-react
  ariaLabel: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string[];
  location: string;
  currentEmployment: string;
  email?: string;
  discord?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  technologies: Technology[];
  projects: Project[];
  certificates: Certificate[];
  interests: Interest[];
  socialLinks: SocialLink[];
}

export interface NavItem {
  name: string;
  path: string;
  ariaLabel?: string;
}
