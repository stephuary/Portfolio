import React, { useRef } from 'react';
import { PortfolioProject } from '../../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectDrawer } from './ProjectDrawer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  rowId: string;
  title: string;
  subtitle?: string;
  projects: PortfolioProject[];
  selectedProject: PortfolioProject | null;
  onSelectProject: (project: PortfolioProject | null) => void;
  onLaunchPrototype?: () => void;
}

export const ProjectRow: React.FC<Props> = ({
  rowId,
  title,
  subtitle,
  projects,
  selectedProject,
  onSelectProject,
  onLaunchPrototype
}) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!projects || projects.length === 0) return null;

  // Check if the selected project belongs to this row
  const hasSelectedProjectInRow = selectedProject && projects.some((p) => p.id === selectedProject.id);

  return (
    <section id={`row-${rowId}`} className="relative py-3 space-y-2 group/row select-none">
      {/* Row Header with Clean Netflix Typography */}
      <div className="px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide font-sans">
            {title}
          </h2>
          {subtitle && (
            <span className="hidden md:inline text-xs text-neutral-400 font-normal">
              {subtitle}
            </span>
          )}
        </div>

        {/* Carousel Navigation Chevrons */}
        <div className="flex items-center gap-1 opacity-80 group-hover/row:opacity-100 transition-opacity">
          <button
            onClick={() => handleScroll('left')}
            className="w-7 h-7 rounded-sm bg-black/70 hover:bg-white text-neutral-300 hover:text-black flex items-center justify-center transition-all border border-neutral-800"
            title="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-7 h-7 rounded-sm bg-black/70 hover:bg-white text-neutral-300 hover:text-black flex items-center justify-center transition-all border border-neutral-800"
            title="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={rowRef}
        className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth px-6 sm:px-12 lg:px-16 py-3"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedProject?.id === project.id}
            onSelectProject={(p) => {
              if (selectedProject?.id === p.id) {
                onSelectProject(null); // toggle off
              } else {
                onSelectProject(p);
              }
            }}
            onLaunchPrototype={onLaunchPrototype}
          />
        ))}
      </div>

      {/* Expanding Inline Netflix Drawer (Exact replica of IMG_7448.jpeg) */}
      {hasSelectedProjectInRow && selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          onClose={() => onSelectProject(null)}
          onLaunchPrototype={onLaunchPrototype || (() => {})}
        />
      )}
    </section>
  );
};
