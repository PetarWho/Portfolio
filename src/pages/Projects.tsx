import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <Section>
      <Container>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Projects</h1>
          <p className="text-gray-400 mt-2">Selected projects showcasing my work across web and desktop development.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
