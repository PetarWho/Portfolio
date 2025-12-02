import { PortfolioData, Interest, SocialLink } from '@/types';
import { technologies } from './technologies';
import { projects } from './projects';
import { certificates } from './certificates';

const interests: Interest[] = [
  {
    name: 'Artificial Intelligence',
    description: 'Exploring machine learning, neural networks, and AI applications',
    image: '/assets/interests/ai.jpg',
    icon: 'Brain',
  },
  {
    name: 'Virtual Reality',
    description: 'Immersive experiences and VR development',
    image: '/assets/interests/vr.jpg',
    icon: 'Glasses',
  },
  {
    name: 'Hardware',
    description: 'Computer hardware, electronics, and IoT devices',
    image: '/assets/interests/hardware.jpg',
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
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/petar.todorov.3538',
    icon: 'Facebook',
    ariaLabel: 'Follow me on Facebook',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/adrenalyne',
    icon: 'Instagram',
    ariaLabel: 'Follow me on Instagram',
  },
];

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Peter Penev',
    title: 'Full-Stack Developer',
    location: 'Plovdiv | Haskovo, Bulgaria',
    currentEmployment: 'Currently studying Software Technologies and Design at the University of Plovdiv',
    bio: [
      'Certified Fullstack Developer with expertise in both C# and Python, willing to take on complex programming challenges. My programming journey began at the Mathematics High School in Haskovo, which I graduated in 2021. Further honing my skills, I excelled at SoftUni, graduating in 2023 and consistently ranking among the top students.',
      "Focused on improving my skills and exploring new technology or even other fields beside programming. But I can't replace programming with anything else and never will!",
    ],
    discord: 'royvoytheboy',
  },
  technologies,
  projects,
  certificates,
  interests,
  socialLinks,
};
