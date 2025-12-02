import { Technology } from '@/types';

// Auto-discover all technology images from public/assets/technologies
const technologyImages = import.meta.glob<{ default: string }>('/public/assets/technologies/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
});

// Name mapping for better display names (filename without extension -> display name)
const nameMap: Record<string, string> = {
  unity: 'Unity',
  dotnet: 'ASP.NET',
  django: 'Django',
  react: 'React',
  nodejs: 'Node.js',
  mssql: 'MS SQL',
  postgresql: 'PostgreSQL',
  angular: 'Angular',
  docker: 'Docker',
};

// Generate technologies array from discovered images
export const technologies: Technology[] = Object.entries(technologyImages)
  .map(([path]) => {
    // Extract filename without extension
    const filename = path.split('/').pop()?.replace(/\.[^.]+$/, '') || '';
    const displayName = nameMap[filename] || filename.charAt(0).toUpperCase() + filename.slice(1);
    
    return {
      name: displayName,
      image: `assets/technologies/${path.split('/').pop()}`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));
