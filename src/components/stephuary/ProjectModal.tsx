import React, { useEffect, useState } from 'react';
import { PortfolioProject } from '../../types/portfolio';
import { ALL_PROJECTS } from '../../data/portfolioData';
import { X, Play, Plus, Check, Sparkles, Share2 } from 'lucide-react';
import { playStephuaryChime } from '../../utils/audioChime';

interface Props {
  project: PortfolioProject | null;
  onClose: () => void;
  onLaunchPrototype: () => void;
  onSelectProject: (p: PortfolioProject) => void;
}

export const ProjectModal: React.FC<Props> = ({
  project,
  onClose,
  onLaunchPrototype,
  onSelectProject
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'episodes' | 'details'>('overview');
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const relatedProjects = ALL_PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 select-none">
      <div
        className="relative w-full max-w-4xl bg-[#181818] border border-neutral-800 rounded-lg shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/70 hover:bg-black border border-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Photographic Billboard Header */}
        <div className="relative min-h-[300px] sm:min-h-[360px] flex items-end p-6 sm:p-10 shrink-0 overflow-hidden bg-black">
          <img
            src={project.backdropUrl || project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181818]/80 via-transparent to-transparent" />

          {/* Title & Actions */}
          <div className="relative z-10 space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-[#E50914] text-xl leading-none">S</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-300 font-bold font-mono">
                ORIGINAL CONCEPT
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-300 font-mono">{project.categoryTag}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {project.title}
            </h2>

            {/* Quick Meta Specs */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 flex-wrap font-sans">
              <span className="text-[#46d369] font-bold">{project.matchScore}% Match</span>
              <span>{project.year}</span>
              <span className="border border-neutral-500 px-1 py-0.2 rounded text-[10px] text-neutral-300 font-mono">
                TV-MA
              </span>
              <span>{project.maturity}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              {project.isInteractivePrototype ? (
                <button
                  id="modal-btn-launch-prototype"
                  onClick={() => {
                    playStephuaryChime();
                    onClose();
                    onLaunchPrototype();
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded bg-[#E50914] hover:bg-[#b80710] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Launch Live Working Prototype</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    playStephuaryChime();
                    setActiveTab('episodes');
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Explore Episodes</span>
                </button>
              )}

              <button
                onClick={() => {
                  playStephuaryChime();
                  setIsSaved(!isSaved);
                }}
                className={`p-2.5 rounded border flex items-center justify-center transition-colors ${
                  isSaved
                    ? 'bg-neutral-900 border-[#46d369] text-[#46d369]'
                    : 'bg-black/60 border-neutral-700 text-neutral-300 hover:text-white'
                }`}
                title={isSaved ? 'In My List' : '+ My List'}
              >
                {isSaved ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded bg-black/60 border border-neutral-700 text-neutral-300 hover:text-white transition-colors"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {copiedLink && (
                <span className="text-xs text-[#46d369] font-mono">Link copied!</span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs (OVERVIEW | EPISODES | DETAILS) */}
        <div className="flex items-center gap-6 px-6 sm:px-10 border-b border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-400 bg-[#181818]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 relative transition-colors ${
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
            className={`py-3.5 relative transition-colors flex items-center gap-1.5 ${
              activeTab === 'episodes' ? 'text-white' : 'hover:text-neutral-200'
            }`}
          >
            <span>Episodes</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-800 text-neutral-300">
              {project.episodes?.length || 0}
            </span>
            {activeTab === 'episodes' && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E50914]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`py-3.5 relative transition-colors ${
              activeTab === 'details' ? 'text-white' : 'hover:text-neutral-200'
            }`}
          >
            Details & Impact
            {activeTab === 'details' && (
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E50914]" />
            )}
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1 bg-[#181818]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1">
                      Synopsis
                    </h3>
                    <p className="text-sm text-neutral-200 leading-relaxed font-light">
                      {project.synopsis}
                    </p>
                  </div>

                  <div className="bg-black/40 border border-neutral-800 rounded p-4 space-y-1">
                    <h4 className="text-xs uppercase tracking-wider text-[#46d369] font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>The Experience Breakthrough</span>
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.theBreakthrough}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-1">
                      Why This Matters
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {project.whyItMatters}
                    </p>
                  </div>
                </div>

                {/* Right Column Metrics */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                    Key Metrics
                  </h4>
                  <div className="space-y-2">
                    {project.metrics?.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-black/40 border border-neutral-800">
                        <div className="text-[10px] text-neutral-400 uppercase font-mono">{m.label}</div>
                        <div className="text-sm font-bold text-white font-mono mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Concepts */}
              {relatedProjects.length > 0 && (
                <div className="pt-4 border-t border-neutral-800 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-bold">
                    More Like This
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {relatedProjects.map((rel) => (
                      <div
                        key={rel.id}
                        onClick={() => onSelectProject(rel)}
                        className="p-2.5 rounded bg-black/50 border border-neutral-800 hover:border-white transition-colors cursor-pointer group"
                      >
                        <img
                          src={rel.imageUrl}
                          alt={rel.title}
                          referrerPolicy="no-referrer"
                          className="w-full aspect-[16/9] object-cover rounded mb-2"
                        />
                        <div className="text-xs font-bold text-white group-hover:text-white line-clamp-1">
                          {rel.title}
                        </div>
                        <div className="text-[10px] text-neutral-400 truncate mt-0.5">
                          {rel.categoryTag}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'episodes' && (
            <div className="space-y-3">
              {project.episodes?.map((ep) => (
                <div
                  key={ep.episodeNumber}
                  className="p-4 rounded bg-black/40 border border-neutral-800 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sm font-mono font-bold text-neutral-300 shrink-0">
                    {ep.episodeNumber}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{ep.title}</h4>
                      <span className="text-xs text-[#46d369] font-mono">[{ep.duration}]</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">{ep.description}</p>
                    {ep.keyDeliverables?.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        {ep.keyDeliverables.map((del, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono"
                          >
                            ✓ {del}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-4">
              <div className="p-4 rounded bg-black/40 border border-neutral-800 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#46d369] font-bold">
                  Core Architectural Framework
                </h4>
                <div className="space-y-1.5">
                  {project.frameworkPoints?.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-[#E50914] font-bold mt-0.5">▪</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
