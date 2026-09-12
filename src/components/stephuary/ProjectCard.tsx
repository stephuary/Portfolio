import React, { useState } from 'react';
import { PortfolioProject } from '../../types/portfolio';
import { Play, Bell, Check, Plus } from 'lucide-react';
import { playStephuaryChime } from '../../utils/audioChime';

interface Props {
  project: PortfolioProject;
  isSelected?: boolean;
  onSelectProject: (project: PortfolioProject) => void;
  onLaunchPrototype?: () => void;
}

export const ProjectCard: React.FC<Props> = ({
  project,
  isSelected = false,
  onSelectProject,
  onLaunchPrototype
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isReminderSet, setIsReminderSet] = useState(true);

  const handleClick = () => {
    playStephuaryChime();
    onSelectProject(project);
  };

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playStephuaryChime();
    if (project.isInteractivePrototype && onLaunchPrototype) {
      onLaunchPrototype();
    } else {
      setIsReminderSet(!isReminderSet);
    }
  };

  return (
    <div
      id={`project-card-${project.id}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex-none w-[260px] sm:w-[300px] md:w-[330px] aspect-[16/9] rounded-sm overflow-hidden cursor-pointer select-none transition-all duration-300 group ${
        isSelected
          ? 'ring-2 ring-white scale-[1.02] shadow-2xl z-20'
          : 'hover:scale-[1.04] hover:z-10 shadow-lg'
      }`}
    >
      {/* 1. Cinematic Photographic Key Art */}
      <img
        src={project.imageUrl}
        alt={project.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
      />

      {/* 2. Netflix-Style Vignette Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* 3. Red "S" Ribbon Monogram (Top-Left) */}
      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
        <span className="font-sans font-black text-base sm:text-lg text-[#E50914] tracking-tighter leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          S
        </span>
        {project.isInteractivePrototype && (
          <span className="bg-[#E50914] text-white font-bold text-[9px] px-1.5 py-0.2 rounded-xs uppercase tracking-wider shadow">
            LIVE PROTOTYPE
          </span>
        )}
      </div>

      {/* 4. Match Score (Top-Right) */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <span className="text-[11px] font-bold text-[#46d369] drop-shadow-md">
          {project.matchScore}%
        </span>
      </div>

      {/* 5. Title & Action Treatment (Bottom) */}
      <div className="absolute bottom-0 inset-x-0 p-3 z-10 flex flex-col justify-end">
        {/* Title in bold condensed uppercase (Netflix key art style) */}
        <h3 className="font-sans font-extrabold text-sm sm:text-base text-white tracking-wide uppercase leading-tight line-clamp-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group-hover:text-white">
          {project.title}
        </h3>

        {/* Action strip when selected or hovered (matching IMG_7449) */}
        {isSelected ? (
          <div className="mt-2 flex items-center justify-between bg-white text-black px-2.5 py-1 rounded-sm text-[11px] font-bold shadow animate-in fade-in duration-200">
            {project.isInteractivePrototype ? (
              <button
                onClick={handleActionClick}
                className="flex items-center gap-1.5 w-full justify-center"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Prototype</span>
              </button>
            ) : (
              <button
                onClick={handleActionClick}
                className="flex items-center gap-1.5 w-full justify-center"
              >
                <Bell className="w-3.5 h-3.5 fill-current" />
                <span>Remind me</span>
              </button>
            )}
          </div>
        ) : (
          <div className="mt-1 flex items-center justify-between text-[10px] text-neutral-300 font-medium opacity-80 group-hover:opacity-100">
            <span className="truncate max-w-[170px] uppercase font-mono tracking-wider">
              {project.categoryTag}
            </span>
            <span className="flex items-center gap-1 text-neutral-400">
              {isReminderSet ? (
                <>
                  <Check className="w-2.5 h-2.5 text-[#46d369]" />
                  <span>In List</span>
                </>
              ) : (
                <>
                  <Plus className="w-2.5 h-2.5" />
                  <span>Add</span>
                </>
              )}
            </span>
          </div>
        )}
      </div>

      {/* 6. Netflix Downward Pointer Caret when selected (pointing into drawer as in IMG_7448) */}
      {isSelected && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-white z-30 pointer-events-none" />
      )}
    </div>
  );
};
