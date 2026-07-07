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
    id: 'abhinav-avasarala',
    name: 'Abhinav Avasarala',
    role: 'President',
    bio: 'President of the HPC Club, leading overall operations, strategic vision, and community growth.',
    image: '/images/leadership/abhinav_avasarala.png',
    track: 'Executive',
    github: 'https://github.com/Abhinav-Avasarala',
    linkedin: 'https://www.linkedin.com/in/abhinav-avasarala-417913230/'
  },
  {
    id: 'lam-nguyen',
    name: 'Lam Nguyen',
    role: 'Vice President',
    bio: 'Vice President of the HPC Club, managing project execution, club initiatives, and resource allocation.',
    image: '/images/leadership/lam_nguyen.jpg',
    track: 'Executive',
    linkedin: 'https://www.linkedin.com/in/lam-nguyen-34ba84238'
  },
  {
    id: 'adith-venkatesh',
    name: 'Adith Venkatesh',
    role: 'Technical Lead',
    bio: 'Leading the development of our agentic AI system and high-performance cluster infrastructure.',
    image: '/images/leadership/adith-venkatesh.JPG',
    track: 'Executive',
    github: 'https://github.com/avenka29',
    linkedin: 'https://www.linkedin.com/in/adith-venkatesh-ba3a1a210/'
  },
  {
    id: 'aleena-biswas',
    name: 'Aleena Biswas',
    role: 'Exec Member',
    bio: 'Executive member of the HPC Club, contributing to development and leadership initiatives.',
    image: '/images/leadership/aleena_biswas.png',
    track: 'Executive',
    linkedin: 'https://www.linkedin.com/in/aleena-biswas?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  },
  {
    id: 'netra-tank',
    name: 'Netra Tank',
    role: 'Workshop Lead',
    bio: 'Designing and leading technical workshops and hands-on tutorials on high-performance computing.',
    image: '/images/leadership/netra_tank.jpg',
    track: 'Executive',
    linkedin: 'https://www.linkedin.com/in/netra-tank-783220338'
  }
];

