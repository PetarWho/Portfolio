import { Technology } from '@/types';

// Direct mapping of technology names to their image paths
// This ensures images load correctly without glob import issues
const technologiesData: Technology[] = [
  { name: 'ASP.NET', image: 'assets/technologies/dotnet.png' },
  { name: 'Angular', image: 'assets/technologies/angular.png' },
  { name: 'Django', image: 'assets/technologies/django.png' },
  { name: 'Docker', image: 'assets/technologies/docker.png' },
  { name: 'FastAPI', image: 'assets/technologies/fastapi.png' },
  { name: 'Flutter', image: 'assets/technologies/flutter.png' },
  { name: 'MS SQL', image: 'assets/technologies/mssql.png' },
  { name: 'MySQL', image: 'assets/technologies/mysql.png' },
  { name: 'Node.js', image: 'assets/technologies/nodejs.png' },
  { name: 'PostgreSQL', image: 'assets/technologies/postgresql.png' },
  { name: 'Python', image: 'assets/technologies/python.png' },
  { name: 'React', image: 'assets/technologies/react.png' },
  { name: 'Unity', image: 'assets/technologies/unity.png' },
];

export const technologies: Technology[] = technologiesData.sort((a, b) =>
  a.name.localeCompare(b.name)
);
