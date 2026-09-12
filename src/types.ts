export type ElementType = 'Fire' | 'Earth' | 'Air' | 'Water';

export type ModalityType = 'Cardinal' | 'Fixed' | 'Mutable';

export interface ZodiacSignInfo {
  name: string;
  symbol: string;
  element: ElementType;
  modality: ModalityType;
  rulingPlanet: string;
  dateRange: string;
  essence: string;
  hospitalityArchetype: string;
  color: string;
  accentColor: string;
}

export interface GuestStayPreferences {
  morningBeverage: 'Pour-Over Dark Roast Coffee' | 'Oat Milk Flat White' | 'Ceremonial Matcha' | 'English Breakfast Tea' | 'Fresh Mint Herbal Tea';
  interactionStyle: 'Discreet & Seamless (respect quiet time)' | 'Warm & Curated (love insider tips & friendly chat)' | 'Absolute Privacy (sanctuary mode, minimal contact)';
  eveningWindDown: 'Chamomile & Lavender Bedtime Tea' | 'Spiced Artisanal Nightcap Cocktail' | 'Chilled Sparkling Mineral Water with Lemon' | 'Warm Golden Oat Milk with Cinnamon';
  scentTolerance: 'Signature Astrological Scent' | 'Subtle & Fresh Only' | '100% Unscented / Hypoallergenic';
  roomTemperature: 'Crisp & Cool (67°F)' | 'Balanced Comfort (69°F)' | 'Warm & Cozy (72°F)';
  pillowType: 'Plush Goose Down' | 'Firm Natural Latex' | 'Cooling Memory Foam' | 'Organic Buckwheat';
  tripPurpose: 'Deep Rest & Unplugging' | 'Celebration & Weekend Indulgence' | 'Creative Focus / Solo Work' | 'Exploration & Dining';
}

export interface GuestProfile {
  id: string;
  name: string;
  roomNumber: string;
  arrivalTime: string;
  departureDate?: string;
  nights: number;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  preferences: GuestStayPreferences;
  dietaryNotes: string;
}

export interface ArchetypeSummary {
  archetypeTitle: string;
  tagline: string;
  coreTraits: string[];
  howTheyRecharge: string;
  suiteCalibration: string;
  staffServiceTip: string;
  socialRhythm: 'High-Touch & Social' | 'Balanced & Warm' | 'Independent & Discreet';
  energyRhythm: 'High Kinetic' | 'Steady & Grounded' | 'Adaptive Flow';
}

export interface NatalChartData {
  sunSign: ZodiacSignInfo;
  moonSign: ZodiacSignInfo;
  risingSign: ZodiacSignInfo;
  elementalBalance: {
    fire: number;
    earth: number;
    air: number;
    water: number;
  };
  dominantElement: ElementType;
  modality: ModalityType;
  stayRhythm: {
    name: string;
    description: string;
    timing: string;
  };
  hospitalityTitle: string;
  guestKeynote: string;
  archetype: ArchetypeSummary;
}

export interface OlfactoryProfile {
  signatureName: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  arrivalMist: string;
  eveningTurnDownSpray: string;
  botanicalPairing: string;
  diffusionSchedule?: Array<{ time: string; ritual: string; intensity: string }>;
}

export interface AcousticProfile {
  frequencyHz: number;
  frequencyLabel: string;
  musicalArchetype: string;
  arrivalSoundscape: string;
  daytimeLandscape: string;
  nightWindDown: string;
  instrumentation: string[];
}

export interface VisualLightingProfile {
  kelvinTemp: number;
  kelvinName: string;
  colorHex: string;
  ambianceName: string;
  arrivalScene: string;
  turnDownScene: string;
  materialSightlines: string[];
  chromaticTone: string;
}

export interface GustatoryProfile {
  arrivalElixir: string;
  elixirDescription: string;
  bespokeMiniBar: string[];
  eveningSleepTonic: string;
  culinaryPairingPhilosophy: string;
  herbalInfusion: string;
}

export interface TactileProfile {
  linenMaterial: string;
  threadCountOrWeight: string;
  robeTexture: string;
  pillowCuration: string[];
  bathAmenity: string;
  groundingObject: string;
}

export interface SensorySignature {
  olfactory: OlfactoryProfile;
  acoustic: AcousticProfile;
  visual: VisualLightingProfile;
  gustatory: GustatoryProfile;
  tactile: TactileProfile;
}

export interface SurpriseMoment {
  id: string;
  dayIndex: number;
  dayLabel: string;
  department: 'Front Desk' | 'Housekeeping' | 'Food & Beverage' | 'Concierge' | 'Wellness & Spa';
  title: string;
  description: string;
  revealMechanism: string;
  astrologicalTrigger: string;
  impactScore: number;
  iconName: string;
}

export interface DepartmentTask {
  id: string;
  dayNumber: number;
  department: 'Housekeeping' | 'F&B' | 'Concierge' | 'Wellness' | 'Front Desk';
  title: string;
  actionDetails: string;
  timing: string;
  completed: boolean;
  priority: 'VIP High' | 'Standard' | 'Critical Surprise';
}

