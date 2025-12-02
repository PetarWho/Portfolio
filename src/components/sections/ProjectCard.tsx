import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import { Project } from '@/types';
import { Github, ExternalLink, Gift, DollarSign, Plane, CheckSquare } from 'lucide-react';
import { formatDate } from '@/utils/helpers';

const iconMap = { Gift, DollarSign, Plane, CheckSquare } as const;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = (iconMap as any)[project.icon || 'Gift'];

  return (
    <Card as="article" hoverable className="p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 rounded-lg bg-[var(--color-primary-500)]/10 text-[var(--color-primary-accent)]" aria-hidden="true">
              <Icon size={24} />
            </div>
          )}
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        </div>
        <time className="text-md text-gray-400" dateTime={project.date.toISOString()}>
          {formatDate(project.date)}
        </time>
      </div>

      <p className="text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="primary" size="sm">{tech}</Badge>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] rounded-md px-2 py-1"
            aria-label={`Open GitHub repository for ${project.name}`}
          >
            <Github size={18} />
            <span>Code</span>
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] rounded-md px-2 py-1"
            aria-label={`Open live demo for ${project.name}`}
          >
            <ExternalLink size={18} />
            <span>Live</span>
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
