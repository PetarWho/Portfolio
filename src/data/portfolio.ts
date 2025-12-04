import { PortfolioData, Interest, SocialLink } from '@/types';
import { technologies } from './technologies';
import { projects } from './projects';
import { certificates } from './certificates';

const interests: Interest[] = [
  {
    name: 'Vibe Coding',
    description: 'Developing complex projects with a focus on efficiency and quality using AI tools',
    image: '/assets/interests/vibe-coding.gif',
    icon: 'Brain',
  },
  {
    name: 'Augmented Reality',
    description: 'Virtual enhancements integrated with real-world objects',
    image: '/assets/interests/ar.gif',
    icon: 'Glasses',
  },
  {
    name: 'Hardware',
    description: 'Computer hardware, electronics, and IoT devices',
    image: '/assets/interests/hardware.gif',
    icon: 'Cpu',
  },
];

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/PetarWho',
    icon: 'Github',
    ariaLabel: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/peterpenev/',
    icon: 'Linkedin',
    ariaLabel: 'Connect with me on LinkedIn',
  },
];

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Petar Penev',
    title: 'Full-Stack Developer',
    location: 'Plovdiv, Bulgaria',
    currentEmployment: 'Bachelor in Software Technologies and Design, and currently pursuing master\'s degree in Software Technologies and AI Systems at the University of Plovdiv',
    bio: [
      'Certified Fullstack Developer with expertise in both C# and Python, willing to take on complex programming challenges. I excelled at SoftUni, graduating in 2023 and consistently ranking among the top students.',
      "Focused on improving my skills and exploring new technology or even other fields beside programming. Lately I've been \"vibe coding\" complex SaaS projects and delivering high quality results in impressively short time frames.",
    ],
    email: 'contact@petarpenev.info',
  },
  technologies,
  projects,
  certificates,
  interests,
  socialLinks,
};
