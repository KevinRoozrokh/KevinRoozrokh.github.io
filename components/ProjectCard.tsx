import React from 'react';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './SocialIcons';
import { useAnimationObserver } from './hooks/useAnimationObserver';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [cardRef, isVisible] = useAnimationObserver<HTMLDivElement>({ 
    threshold: 0.2, 
    repeat: true 
  });

  return (
    <div 
      ref={cardRef}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:hover:shadow-accent/20 flex flex-col initial-hidden ${isVisible ? 'animate-rotate-in' : ''}`}
    >
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
              <ExternalLinkIcon className="w-8 h-8" />
            </a>
          )}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
            <GitHubIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-dark-text-secondary flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;