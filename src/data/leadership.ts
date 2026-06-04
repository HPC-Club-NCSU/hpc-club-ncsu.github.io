export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string; // Path relative to public folder
  track?: 'Track A' | 'Track B' | 'Track C' | 'Executive';
  github?: string;
  linkedin?: string;
}

export const leadershipData: Leader[] = [
  {
    id: 'adith-venkatesh',
    name: 'Adith Venkatesh',
    role: 'Technical Lead',
    bio: 'Leading the development of our agentic AI system and high-performance cluster infrastructure.',
    image: '/images/leadership/adith-venkatesh.JPG',
    track: 'Executive',
    github: 'https://github.com/avenka29',
    linkedin: 'https://www.linkedin.com/in/adith-venkatesh-ba3a1a210/'
  }
];
