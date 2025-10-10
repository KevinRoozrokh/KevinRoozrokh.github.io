import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const FILTERS: (Project['category'] | 'All')[] = ['All', 'AI', 'Blockchain', 'Web', 'Mobile'];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<(Project['category'] | 'All')>('All');

  const filteredProjects: Project[] = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <Section id="projects" title="My Projects">
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {FILTERS.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
              activeFilter === filter
                ? 'bg-accent text-dark-bg'
                : 'bg-gray-200 dark:bg-dark-card text-gray-700 dark:text-dark-text-secondary hover:bg-accent/50 dark:hover:bg-accent/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
