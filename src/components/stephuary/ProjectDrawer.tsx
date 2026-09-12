import React, { useState } from 'react';
import { PortfolioProject } from '../../types/portfolio';
import { X, Play, Plus, Check } from 'lucide-react';
import { playStephuaryChime } from '../../utils/audioChime';

interface Props {
  project: PortfolioProject;
  onClose: () => void;
  onLaunchPrototype: () => void;
}

export const ProjectDrawer: React.FC<Props> = ({
  project,
  onClose,
  onLaunchPrototype
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'episodes' | 'details'>('overview');
  const [isInList, setIsInList] = useState(false);

  const handlePlay = () => {
    playStephuaryChime();
    if (project.isInteractivePrototype) {
      onLaunchPrototype();
    }
  };

  return (
    <div
      id={`netflix-drawer-${project.id}`}
      className="relative w-full bg-[#181818] border-y border-neutral-800 my-4 shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300 select-none z-30"
    >
      {/* Close button (top right, matching IMG_7448.jpeg) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-40 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-white/20"
        title="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex flex-col lg:flex-row min-h-[360px]">
        {/* Left Column: Metadata & Details (Matching IMG_7448.jpeg) */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 max-w-2xl">
          <div className="space-y-3">
            {/* Title */}
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
              {project.title}
            </h2>

            {/* Stars & Meta Specs (Exact replica of IMG_7448.jpeg) */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 font-sans flex-wrap">
              {/* 5 Red Stars */}
              <div className="text-[#E50914] text-base tracking-widest font-serif leading-none">
                ★★★★★
              </div>
              <span className="text-neutral-200 font-semibold">{project.year}</span>
              <span className="border border-neutral-600 px-1 py-0.2 rounded text-[11px] text-neutral-300 font-mono">
                TV-MA
              </span>
              <span className="text-neutral-300">
                {project.isInteractivePrototype ? 'Interactive Working Prototype' : '1 Season'}
              </span>
            </div>

            {/* Tab: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-3 pt-1 text-xs sm:text-sm leading-relaxed text-neutral-300">
                <p className="line-clamp-3">
                  {project.synopsis}
                </p>

                {/* Metadata List (Starring, Genres, Tone) */}
                <div className="space-y-1 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                  <div>
                    <span className="text-neutral-500 font-medium">Starring: </span>
                    <span className="text-neutral-200">Stephuary (Experience Architect)</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 font-medium">Genres: </span>
                    <span className="text-neutral-200">{project.industry}, {project.categoryTag}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 font-medium">This experience is: </span>
                    <span className="text-neutral-200">Immersive, Sensory, Visionary</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: EPISODES */}
            {activeTab === 'episodes' && (
              <div className="space-y-2 pt-1 max-h-48 overflow-y-auto no-scrollbar">
                {project.episodes?.map((ep) => (
                  <div
                    key={ep.episodeNumber}
                    className="p-2.5 rounded bg-black/40 border border-neutral-800/80 flex items-start gap-3"
                  >
                    <span className="font-mono font-bold text-neutral-500 text-xs pt-0.5">
                      {ep.episodeNumber}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <span>{ep.title}</span>
                        <span className="text-[10px] text-[#46d369] font-mono">[{ep.duration}]</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        {ep.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: DETAILS */}
            {activeTab === 'details' && (
              <div className="space-y-2 pt-1 text-xs text-neutral-300">
                <div className="p-3 bg-black/40 rounded border border-neutral-800">
                  <div className="text-[#46d369] font-semibold text-xs mb-1">Core Innovation:</div>
                  <p className="text-neutral-300 text-xs leading-relaxed">{project.theBreakthrough}</p>
                </div>
                <div className="p-3 bg-black/40 rounded border border-neutral-800">
                  <div className="text-[#E50914] font-semibold text-xs mb-1">Strategic Impact:</div>
                  <p className="text-neutral-300 text-xs leading-relaxed">{project.whyItMatters}</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons & Tabs Footer */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3">
              {/* Launch Prototype or Play button */}
              {project.isInteractivePrototype ? (
                <button
                  onClick={() => {
                    playStephuaryChime();
                    onLaunchPrototype();
                  }}
                  className="flex items-center gap-2 px-5 py-2 rounded bg-[#E50914] hover:bg-[#b80710] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Working Prototype</span>
                </button>
              ) : (
                <button
                  onClick={handlePlay}
                  className="flex items-center gap-2 px-5 py-2 rounded bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Explore Concept</span>
                </button>
              )}

              {/* + MY LIST button (matching IMG_7448.jpeg) */}
              <button
                onClick={() => {
                  playStephuaryChime();
                  setIsInList(!isInList);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded border border-neutral-600 hover:border-white text-white text-xs font-semibold uppercase tracking-wider transition-colors bg-black/30"
              >
                {isInList ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#46d369]" />
                    <span>In My List</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ My List</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom Tabs (OVERVIEW | EPISODES | DETAILS) */}
            <div className="flex items-center gap-6 border-b border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-400">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'overview' ? 'text-white' : 'hover:text-neutral-200'
                }`}
              >
                Overview
                {activeTab === 'overview' && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E50914]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('episodes')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'episodes' ? 'text-white' : 'hover:text-neutral-200'
                }`}
              >
                Experience Episodes
                {activeTab === 'episodes' && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E50914]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'details' ? 'text-white' : 'hover:text-neutral-200'
                }`}
              >
                Details
                {activeTab === 'details' && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E50914]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Cinematic Photographic Still with Circular Play Button (Exact replica of IMG_7448.jpeg) */}
        <div
          className="relative lg:w-[45%] min-h-[260px] lg:min-h-full cursor-pointer group overflow-hidden bg-black flex items-center justify-center"
          onClick={handlePlay}
        >
          <img
            src={project.backdropUrl || project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-transparent to-transparent hidden lg:block" />

          {/* Iconic Netflix Circular Play Button (center of photo, matching IMG_7448.jpeg) */}
          <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/90 bg-black/40 group-hover:bg-[#E50914] group-hover:border-[#E50914] flex items-center justify-center transition-all duration-300 shadow-2xl group-hover:scale-110">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
          </div>

          {project.isInteractivePrototype && (
            <div className="absolute bottom-4 right-4 z-10 bg-[#E50914] text-white px-2.5 py-1 text-xs font-bold uppercase rounded shadow">
              Click to Launch Prototype
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
