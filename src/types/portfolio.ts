export type ProjectMaturity =
  | 'Interactive Working Prototype'
  | 'Operational System Diagnostic'
  | 'Concept Architecture'
  | 'Venture Spec & Financials'
  | 'Screenplay & Narrative Bible'
  | 'Curriculum & Framework';

export interface ConceptEpisode {
  episodeNumber: number;
  title: string;
  duration: string;
  description: string;
  keyDeliverables: string[];
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  provocation: string; // "What if..." question from PDF
  categoryTag: string; // e.g. "HOSPITALITY OPERATIONS", "WELLNESS RETENTION"
  industry: string; // e.g. "Hospitality", "Wellness", "Culture", "Entertainment", "Software"
  matchScore: number; // e.g. 99, 98, 97
  year: string; // "2026"
  maturity: ProjectMaturity;
  badge?: 'S ORIGINAL' | 'INTERACTIVE PROTOTYPE' | 'DIAGNOSTIC' | 'NEW SEASON';
  gradientTheme: string;
  imageUrl: string;
  backdropUrl?: string;
  synopsis: string;
  theBreakthrough: string;
  whyItMatters: string;
  frameworkPoints: string[];
  metrics: Array<{ label: string; value: string }>;
  episodes: ConceptEpisode[];
  isInteractivePrototype?: boolean;
}

export interface PortfolioCategoryRow {
  id: string;
  title: string;
  subtitle?: string;
  projects: PortfolioProject[];
}
