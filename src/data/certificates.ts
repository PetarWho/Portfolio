import { Certificate } from '@/types';

// Auto-discover all certificate images from public/assets/certificates
const certificateImages = import.meta.glob<{ default: string }>('/public/assets/certificates/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

// Category priority for sorting (higher = shows first)
const categoryPriority: Record<string, number> = {
  'Diploma': 100,
  'DevOps': 80,
  'C#': 70,
  'Python': 70,
  'JavaScript': 70,
  'Database': 60,
  'Fundamentals': 50,
};

// Metadata for certificates (map filename without extension to certificate details)
// To add a new certificate: 
// 1. Add the image to public/assets/certificates/ 
// 2. Add its metadata here using the filename (without extension) as the key
// Priority: Higher numbers appear first (optional, defaults to 0)
const certificateMetadata: Record<string, Omit<Certificate, 'id' | 'image'>> = {
  'cs-fullstack': {
    name: 'C# Full Stack Developer',
    issuer: 'SoftUni',
    category: 'Diploma',
    date: new Date(2023, 10, 30),
    url: 'https://softuni.bg/Certificates/Details/194008/5057c7c5',
    priority: 10, // Top priority - Full Stack Diploma
    technologies: ['C#', 'ASP.NET', 'MS SQL', 'Entity Framework'],
  },
  'python-fullstack': {
    name: 'Python Full Stack Developer',
    issuer: 'SoftUni',
    category: 'Diploma',
    date: new Date(2023, 10, 30),
    url: 'https://softuni.bg/Certificates/Details/194004/7d85ea2a',
    priority: 10, // Top priority - Full Stack Diploma
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
  'cs-web-developer': {
    name: 'C# Web Developer',
    issuer: 'SoftUni',
    category: 'Diploma',
    date: new Date(2023, 3, 19),
    url: 'https://softuni.bg/Certificates/Details/169766/5d9c15aa',
    priority: 9, // High priority - Web Developer Diploma
    technologies: ['C#', 'ASP.NET', 'MS SQL'],
  },
  'python-web-developer': {
    name: 'Python Web Developer',
    issuer: 'SoftUni',
    category: 'Diploma',
    date: new Date(2023, 9, 19),
    url: 'https://softuni.bg/Certificates/Details/188050/b51c5dbf',
    priority: 9, // High priority - Web Developer Diploma
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
  'devops-infrastructure': {
    name: 'DevOps Infrastructure & Configuration Management',
    issuer: 'SoftUni',
    category: 'DevOps',
    date: new Date(2023, 5, 7),
    url: 'https://softuni.bg/Certificates/Details/172021/43be563b',
    technologies: ['Docker', 'Linux'],
  },
  'devops-cicd': {
    name: 'DevOps Containerization CI/CD & Monitoring',
    issuer: 'SoftUni',
    category: 'DevOps',
    date: new Date(2023, 2, 28),
    url: 'https://softuni.bg/Certificates/Details/164675/1243b0aa',
    technologies: ['Docker', 'CI/CD'],
  },
  'python-web-fundamentals': {
    name: 'Python Web Fundamentals',
    issuer: 'SoftUni',
    category: 'Python',
    date: new Date(2023, 7, 14),
    url: 'https://softuni.bg/Certificates/Details/182433/9e72fca2',
    technologies: ['Python', 'Django'],
  },
  'python-web-basics': {
    name: 'Python Web Basics',
    issuer: 'SoftUni',
    category: 'Python',
    date: new Date(2023, 6, 5),
    url: 'https://softuni.bg/Certificates/Details/177909/6208bf92',
    technologies: ['Python', 'Django'],
  },
  'asp-net-advanced': {
    name: 'ASP.NET Advanced',
    issuer: 'SoftUni',
    category: 'C#',
    date: new Date(2022, 11, 19),
    url: 'https://softuni.bg/Certificates/Details/152355/69871d0a',
    technologies: ['C#', 'ASP.NET', 'MS SQL'],
  },
  'asp-net-fundamentals': {
    name: 'ASP.NET Fundamentals',
    issuer: 'SoftUni',
    category: 'C#',
    date: new Date(2022, 9, 31),
    url: 'https://softuni.bg/Certificates/Details/146633/075b5d97',
    technologies: ['C#', 'ASP.NET'],
  },
  'ef-core': {
    name: 'Entity Framework Core',
    issuer: 'SoftUni',
    category: 'C#',
    date: new Date(2022, 7, 16),
    url: 'https://softuni.bg/Certificates/Details/141231/76e1890e',
    technologies: ['C#', 'Entity Framework', 'MS SQL'],
  },
  'ms-sql': {
    name: 'MS SQL',
    issuer: 'SoftUni',
    category: 'Database',
    date: new Date(2022, 5, 20),
    url: 'https://softuni.bg/Certificates/Details/134815/5978704b',
    technologies: ['MS SQL'],
  },
  'cs-oop': {
    name: 'C# OOP',
    issuer: 'SoftUni',
    category: 'C#',
    date: new Date(2021, 11, 13),
    url: 'https://softuni.bg/Certificates/Details/120461/ce4a19a9',
    technologies: ['C#'],
  },
  'python-oop': {
    name: 'Python OOP',
    issuer: 'SoftUni',
    category: 'Python',
    date: new Date(2023, 3, 10),
    url: 'https://softuni.bg/Certificates/Details/168170/160eb901',
    technologies: ['Python'],
  },
  'js-applications': {
    name: 'JavaScript Applications',
    issuer: 'SoftUni',
    category: 'JavaScript',
    date: new Date(2022, 3, 12),
    url: 'https://softuni.bg/Certificates/Details/131609/40a7ad83',
    technologies: ['JavaScript', 'React', 'Node.js'],
  },
  'js-advanced': {
    name: 'JavaScript Advanced',
    issuer: 'SoftUni',
    category: 'JavaScript',
    date: new Date(2022, 1, 25),
    url: 'https://softuni.bg/Certificates/Details/126574/7399f62c',
    technologies: ['JavaScript'],
  },
  'cs-advanced': {
    name: 'C# Advanced',
    issuer: 'SoftUni',
    category: 'C#',
    date: new Date(2021, 11, 17),
    url: 'https://softuni.bg/Certificates/Details/121964/6f3bc82f',
    technologies: ['C#'],
  },
  'python-advanced': {
    name: 'Python Advanced',
    issuer: 'SoftUni',
    category: 'Python',
    date: new Date(2023, 1, 21),
    url: 'https://softuni.bg/Certificates/Details/159468/9ee2c40d',
    technologies: ['Python'],
  },
  'programming-fundamentals': {
    name: 'Programming Fundamentals',
    issuer: 'SoftUni',
    category: 'Fundamentals',
    date: new Date(2021, 7, 18),
    url: 'https://softuni.bg/Certificates/Details/111691/6c4c2bc3',
    technologies: ['Python', 'C#'],
  },
  'programming-basics': {
    name: 'Programming Basics',
    issuer: 'SoftUni',
    category: 'Fundamentals',
    date: new Date(2021, 3, 19),
    url: 'https://softuni.bg/certificates/details/105246/1aa54ea2',
    technologies: ['C#', 'Python'],
  },
};

// Generate certificates array from discovered images + metadata
const certificatesWithMetadata = Object.entries(certificateImages)
  .map(([path]) => {
    // Extract filename without extension
    const filename = path.split('/').pop()?.replace(/\.[^.]+$/, '') || '';
    const metadata = certificateMetadata[filename];
    
    // Only include certificates that have metadata
    if (!metadata) {
      console.warn(`Certificate image found but no metadata: ${filename}`);
      return null;
    }
    
    return {
      id: filename,
      image: `assets/certificates/${path.split('/').pop()}`,
      ...metadata,
    } as Certificate;
  })
  .filter((cert): cert is Certificate => cert !== null);

export const certificates: Certificate[] = certificatesWithMetadata.sort((a, b) => {
  // Multi-level sorting:
  // 1. Priority (higher first) - defaults to 0 if not set
  const priorityA = a.priority ?? 0;
  const priorityB = b.priority ?? 0;
  if (priorityA !== priorityB) {
    return priorityB - priorityA;
  }
  
  // 2. Category priority (higher first)
  const categoryA = a.category || '';
  const categoryB = b.category || '';
  const catPriorityA = categoryPriority[categoryA] ?? 0;
  const catPriorityB = categoryPriority[categoryB] ?? 0;
  if (catPriorityA !== catPriorityB) {
    return catPriorityB - catPriorityA;
  }
  
  // 3. Date (newest first)
  return b.date.getTime() - a.date.getTime();
});
