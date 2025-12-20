
export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}
