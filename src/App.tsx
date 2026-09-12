/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { GuestProfile, DepartmentTask } from './types';
import { PortfolioProject } from './types/portfolio';
import { ALL_PROJECTS, PORTFOLIO_ROWS, CELESTIAL_HOSPITALITY_PROJECT } from './data/portfolioData';
import {
  SAMPLE_GUEST_PROFILES,
  generateNatalChart,
  generateSensorySignature,
  generateSurpriseMoments,
  generateDepartmentTasks
} from './services/astrology';
import { playStephuaryChime } from './utils/audioChime';

// Stephuary Netflix Streaming Components
import { StephuaryNavbar } from './components/stephuary/StephuaryNavbar';
import { StephuaryBillboard } from './components/stephuary/StephuaryBillboard';
import { ProjectRow } from './components/stephuary/ProjectRow';
import { ProjectCard } from './components/stephuary/ProjectCard';
import { ProjectModal } from './components/stephuary/ProjectModal';
import { StephuaryLeftRail } from './components/stephuary/StephuaryLeftRail';
import { StephuaryFooter } from './components/stephuary/StephuaryFooter';

// Celestial Hospitality Prototype Components
import { IntakeBookingView } from './components/IntakeBookingView';
import { ArchetypeVisualizer } from './components/ArchetypeVisualizer';
import { SensoryOrchestratorView } from './components/SensoryOrchestratorView';
import { InRoomTabletView } from './components/InRoomTabletView';
import { BohDispatchView } from './components/BohDispatchView';
import { SurpriseVaultView } from './components/SurpriseVaultView';
import { PortfolioDossierView } from './components/PortfolioDossierView';
import { GeminiVipMemoModal } from './components/GeminiVipMemoModal';

import {
  Sparkles,
  Compass,
  Eye,
  Sliders,
  Tablet,
  ClipboardList,
  Gift,
  Briefcase,
  Bot,
  ArrowLeft,
  X
} from 'lucide-react';

export type ActiveView = 'intake' | 'archetype' | 'orchestrator' | 'tablet' | 'dispatch' | 'surprises' | 'portfolio';
export type AppMode = 'catalog' | 'prototype';

export default function App() {
  // App Mode: 'catalog' (Netflix-style Stephuary) or 'prototype' (Celestial Hospitality Engine)
  const [appMode, setAppMode] = useState<AppMode>('catalog');

  // Search & Catalog State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Celestial Hotel Prototype State
  const [profile, setProfile] = useState<GuestProfile>(SAMPLE_GUEST_PROFILES[0]);
  const [activePrototypeView, setActivePrototypeView] = useState<ActiveView>('intake');
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Compute live natal chart and sensory profiles for the prototype
  const chart = useMemo(() => generateNatalChart(profile), [profile]);
  const sensory = useMemo(() => generateSensorySignature(chart), [chart]);
  const surprises = useMemo(() => generateSurpriseMoments(chart, profile.nights), [chart, profile.nights]);

  // Initial department tasks
  const [tasks, setTasks] = useState<DepartmentTask[]>(() =>
    generateDepartmentTasks(chart, sensory, profile.nights, profile.arrivalTime)
  );

  const handleUpdateProfile = (updated: Partial<GuestProfile>) => {
    const next = { ...profile, ...updated };
    setProfile(next);
    const newChart = generateNatalChart(next);
    const newSensory = generateSensorySignature(newChart);
    setTasks(generateDepartmentTasks(newChart, newSensory, next.nights, next.arrivalTime));
    showToast(`Stay calibrated for ${next.name}`);
  };

  const handleSelectPreset = (preset: GuestProfile) => {
    setProfile(preset);
    const newChart = generateNatalChart(preset);
    const newSensory = generateSensorySignature(newChart);
    setTasks(generateDepartmentTasks(newChart, newSensory, preset.nights, preset.arrivalTime));
    showToast(`Loaded guest profile: ${preset.name}`);
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  };

  // Launch the Astrological Hotel Prototype
  const handleLaunchHotelPrototype = () => {
    setAppMode('prototype');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Loaded Celestial Hospitality Prototype');
  };

  // Switch back to Stephuary Streaming Catalog
  const handleReturnToCatalog = () => {
    setAppMode('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playStephuaryChime();
  };

  // Filter projects if search query is active
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return ALL_PROJECTS.filter(
      p =>
        p.title.toLowerCase().includes(q) ||
        p.provocation.toLowerCase().includes(q) ||
        p.categoryTag.toLowerCase().includes(q) ||
        p.synopsis.toLowerCase().includes(q) ||
        p.industry.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col font-sans selection:bg-[#E50914] selection:text-white">
      {/* Top Global Navigation (Classic Netflix Top Bar) */}
      <StephuaryNavbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onLaunchPrototype={handleLaunchHotelPrototype}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          if (catId === 'all' || catId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const el = document.getElementById(`row-${catId}`);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        activeCategory={activeCategory}
        activeViewMode={appMode}
        onToggleViewMode={setAppMode}
      />

      {/* Left Navigation Rail (Exact replica of IMG_7449.png TV rail) */}
      <StephuaryLeftRail
        activeSection={activeCategory}
        onSelectNav={(nav) => {
          setActiveCategory(nav);
          if (nav === 'home') {
            setAppMode('catalog');
            setSearchQuery('');
            setSelectedProject(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else if (nav === 'search') {
            setAppMode('catalog');
            const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
            if (searchInput) searchInput.focus();
          } else if (nav === 'coming-soon' || nav === 'places-redesign') {
            setAppMode('catalog');
            const el = document.getElementById('row-places-redesign');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onLaunchPrototype={handleLaunchHotelPrototype}
      />

      {/* ============================================================ */}
      {/* MODE 1: STEPHUARY STREAMING CATALOG (EXACT NETFLIX REPLICA)  */}
      {/* ============================================================ */}
      {appMode === 'catalog' && (
        <main className="flex-1 w-full pl-14 sm:pl-16 pb-16 bg-[#141414]">
          {/* Billboard Hero Section (Exact replica of IMG_7449.png) */}
          <StephuaryBillboard
            onLaunchHotelPrototype={handleLaunchHotelPrototype}
            onOpenInfo={() => {
              setSelectedProject(CELESTIAL_HOSPITALITY_PROJECT);
            }}
          />

          {/* Search Results Mode */}
          {searchQuery.trim() ? (
            <div className="px-6 sm:px-12 lg:px-16 py-8 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl text-white font-bold">
                    Search Results for "{searchQuery}"
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1">
                    Found {filteredProjects.length} matching titles
                  </p>
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="flex items-center gap-1.5 text-xs text-[#E50914] hover:underline"
                >
                  <X className="w-4 h-4" />
                  <span>Clear Search</span>
                </button>
              </div>

              {filteredProjects.length === 0 ? (
                <div className="text-center py-20 bg-neutral-900/50 border border-neutral-800 rounded p-8">
                  <p className="text-neutral-400 text-sm">
                    No results for "{searchQuery}". Try searching for "hospitality", "hotel", "cinema", or "bookstore".
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      isSelected={selectedProject?.id === project.id}
                      onSelectProject={(p) => setSelectedProject(p)}
                      onLaunchPrototype={handleLaunchHotelPrototype}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Streaming Rows (Strictly only the 2 requested rows!) */
            <div className="space-y-4 -mt-12 sm:-mt-20 relative z-20">
              {PORTFOLIO_ROWS.map((row) => (
                <ProjectRow
                  key={row.id}
                  rowId={row.id}
                  title={row.title}
                  subtitle={row.subtitle}
                  projects={row.projects}
                  selectedProject={selectedProject}
                  onSelectProject={(p) => setSelectedProject(p)}
                  onLaunchPrototype={handleLaunchHotelPrototype}
                />
              ))}
            </div>
          )}

          {/* Streaming Footer (with big red NETFLIX logo matching IMG_7449.png) */}
          <StephuaryFooter
            onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onLaunchPrototype={handleLaunchHotelPrototype}
          />
        </main>
      )}

      {/* ============================================================ */}
      {/* MODE 2: CELESTIAL GUEST PERSONALIZATION PROTOTYPE            */}
      {/* ============================================================ */}
      {appMode === 'prototype' && (
        <div className="flex-1 flex flex-col bg-stone-950 text-stone-100 pl-14 sm:pl-16 pt-16">
          {/* Top Prototype Switcher Banner */}
          <section className="bg-stone-900/90 border-b border-stone-800 py-3 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  id="btn-back-to-stephuary"
                  onClick={handleReturnToCatalog}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black hover:bg-stone-800 border border-stone-700 text-amber-300 hover:text-amber-200 text-xs font-semibold transition-all group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>‹ Back to Stephuary Netflix Home</span>
                </button>
                <div className="h-4 w-px bg-stone-700 hidden sm:block" />
                <div className="hidden sm:block text-xs font-mono text-stone-400">
                  <span className="text-amber-400 font-semibold">Featured Live Prototype:</span> Celestial Hospitality
                </div>
              </div>

              {/* Right Side: Active Guest Chip & Gemini VIP Memo */}
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
                <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-stone-950 border border-stone-800 text-xs">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: chart.sunSign.color }} />
                  <span className="text-stone-400">{profile.roomNumber}:</span>
                  <span className="text-stone-100 font-medium">{profile.name}</span>
                  <span className="text-[11px] text-amber-400 font-serif">({chart.sunSign.name})</span>
                </div>

                <button
                  id="btn-open-gemini-memo-prototype"
                  onClick={() => setIsAiModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-xs text-amber-300 font-medium hover:bg-amber-500 hover:text-stone-950 transition-all shadow-sm cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">AI VIP Briefing & Note</span>
                  <span className="sm:hidden">VIP Briefing</span>
                </button>
              </div>
            </div>
          </section>

          {/* Prototype Navigation Sub-Tabs */}
          <nav className="sticky top-16 z-30 bg-stone-950/95 backdrop-blur-md border-b border-stone-800 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none text-xs">
              <button
                id="nav-intake"
                onClick={() => setActivePrototypeView('intake')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePrototypeView === 'intake'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>1. Booking & Preferences</span>
              </button>

              <button
                id="nav-archetype"
                onClick={() => setActivePrototypeView('archetype')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePrototypeView === 'archetype'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>2. Archetype Visualizer</span>
              </button>

              <button
                id="nav-orchestrator"
                onClick={() => setActivePrototypeView('orchestrator')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePrototypeView === 'orchestrator'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>3. Room Ambiance (5 Senses)</span>
              </button>

              <button
                id="nav-tablet"
                onClick={() => setActivePrototypeView('tablet')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePrototypeView === 'tablet'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>4. In-Room Guest Tablet</span>
              </button>

              <button
                id="nav-dispatch"
                onClick={() => setActivePrototypeView('dispatch')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePrototypeView === 'dispatch'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                }`}
              >
                <ClipboardList className="w-3.5 h-3.5" />
                <span>5. Staff Action Checklist</span>
              </button>

              <button
                id="nav-surprises"
                onClick={() => setActivePrototypeView('surprises')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePrototypeView === 'surprises'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                }`}
              >
                <Gift className="w-3.5 h-3.5" />
                <span>6. Surprise & Delights</span>
              </button>

              <button
                id="nav-portfolio"
                onClick={() => setActivePrototypeView('portfolio')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activePrototypeView === 'portfolio'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>7. Boutique Feasibility & Value</span>
              </button>
            </div>
          </nav>

          {/* Main Prototype Body */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {activePrototypeView === 'intake' && (
              <IntakeBookingView
                profile={profile}
                chart={chart}
                onUpdateProfile={handleUpdateProfile}
                onSelectPreset={handleSelectPreset}
                onProceedToOrchestrator={() => setActivePrototypeView('orchestrator')}
              />
            )}

            {activePrototypeView === 'archetype' && (
              <div className="space-y-6">
                <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Interactive Archetype Visualizer</span>
                  </div>
                  <h2 className="font-serif text-2xl text-stone-100 font-normal">
                    Visualizing How Astrological Archetypes Translate into Boutique Hospitality
                  </h2>
                  <p className="text-sm text-stone-300 mt-1.5 max-w-3xl leading-relaxed">
                    Click any zodiac sign below or adjust the guest's birth details in Tab 1 to see how their core elemental archetype, hospitality profile, and tailored amenities dynamically respond.
                  </p>
                </div>

                <ArchetypeVisualizer
                  chart={chart}
                  preferences={profile.preferences}
                  guestName={profile.name}
                  roomNumber={profile.roomNumber}
                  onSelectSign={(signName) => {
                    const signDateMap: Record<string, string> = {
                      Aries: '1990-04-05',
                      Taurus: '1992-05-10',
                      Gemini: '1995-06-08',
                      Cancer: '1993-07-12',
                      Leo: '1989-08-10',
                      Virgo: '1994-09-08',
                      Libra: '1991-10-05',
                      Scorpio: '1990-11-14',
                      Sagittarius: '1996-12-05',
                      Capricorn: '1988-01-10',
                      Aquarius: '1997-02-08',
                      Pisces: '1993-03-05'
                    };
                    if (signDateMap[signName]) {
                      handleUpdateProfile({ birthDate: signDateMap[signName] });
                    }
                  }}
                />
              </div>
            )}

            {activePrototypeView === 'orchestrator' && (
              <SensoryOrchestratorView
                sensory={sensory}
                chart={chart}
                profile={profile}
              />
            )}

            {activePrototypeView === 'tablet' && (
              <InRoomTabletView
                profile={profile}
                chart={chart}
                sensory={sensory}
              />
            )}

            {activePrototypeView === 'dispatch' && (
              <BohDispatchView
                tasks={tasks}
                chart={chart}
                sensory={sensory}
                profile={profile}
                onToggleTask={handleToggleTask}
              />
            )}

            {activePrototypeView === 'surprises' && (
              <SurpriseVaultView
                moments={surprises}
                chart={chart}
                profile={profile}
              />
            )}

            {activePrototypeView === 'portfolio' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-mono font-semibold">
                      Part of Stephuary Portfolio
                    </span>
                    <h3 className="font-serif text-xl text-stone-100 mt-0.5">
                      Creative Systems Architecture & Hospitality Models
                    </h3>
                  </div>
                  <button
                    onClick={handleReturnToCatalog}
                    className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs transition-all shadow-md"
                  >
                    View All in Stephuary Catalog →
                  </button>
                </div>

                <PortfolioDossierView />
              </div>
            )}
          </main>

          {/* Prototype Footer */}
          <footer className="border-t border-stone-800 bg-stone-950 py-6 text-xs text-stone-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="font-serif text-stone-200 text-sm">Celestial Hospitality Prototype</span>
                <span className="mx-2">·</span>
                <span>Part of the Stephuary Experience Architect Portfolio</span>
              </div>
              <div className="flex items-center gap-4 text-stone-400">
                <button
                  onClick={handleReturnToCatalog}
                  className="text-amber-400 hover:underline"
                >
                  Return to Stephuary Netflix Home
                </button>
                <span>·</span>
                <span className="text-stone-500">20–60 Room Boutique Scale</span>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* Fallback Detail Modal (if opened via Search or More Info when not inline) */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onLaunchPrototype={() => {
            setSelectedProject(null);
            handleLaunchHotelPrototype();
          }}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}

      {/* Gemini AI VIP Memo Modal */}
      <GeminiVipMemoModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        profile={profile}
        chart={chart}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 border border-neutral-700 text-white text-xs px-4 py-2.5 rounded shadow-2xl flex items-center gap-2 animate-slide-up">
          <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
