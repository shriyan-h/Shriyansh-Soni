export interface SocialLink {
  platform: string;
  url: string;
  icon: 'linkedin' | 'github' | 'twitter' | 'mail' | 'phone';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}