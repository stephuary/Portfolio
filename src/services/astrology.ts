import {
  ZodiacSignInfo,
  ElementType,
  ModalityType,
  GuestProfile,
  NatalChartData,
  SensorySignature,
  SurpriseMoment,
  DepartmentTask,
  OlfactoryProfile,
  AcousticProfile,
  VisualLightingProfile,
  GustatoryProfile,
  TactileProfile,
  ArchetypeSummary
} from '../types';

export const ZODIAC_SIGNS: Record<string, ZodiacSignInfo> = {
  Aries: {
    name: 'Aries',
    symbol: '♈',
    element: 'Fire',
    modality: 'Cardinal',
    rulingPlanet: 'Mars',
    dateRange: 'Mar 21 – Apr 19',
    essence: 'Dynamic initiator, energized by heat, bold gestures, and immediate kinetic momentum.',
    hospitalityArchetype: 'The Radiant Pioneer',
    color: '#E06D53',
    accentColor: '#F98E73',
  },
  Taurus: {
    name: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    modality: 'Fixed',
    rulingPlanet: 'Venus',
    dateRange: 'Apr 20 – May 20',
    essence: 'Tactile epicurean, grounded by slow organic luxury, rich textures, and deep somatic presence.',
    hospitalityArchetype: 'The Earth Alchemist',
    color: '#9C8855',
    accentColor: '#BFA873',
  },
  Gemini: {
    name: 'Gemini',
    symbol: '♊',
    element: 'Air',
    modality: 'Mutable',
    rulingPlanet: 'Mercury',
    dateRange: 'May 21 – Jun 20',
    essence: 'Intellectually nimble, energized by conversational wit, eclectic libraries, and shifting perspectives.',
    hospitalityArchetype: 'The Polymath Explorer',
    color: '#8BA4B5',
    accentColor: '#A8C4D6',
  },
  Cancer: {
    name: 'Cancer',
    symbol: '♋',
    element: 'Water',
    modality: 'Cardinal',
    rulingPlanet: 'Moon',
    dateRange: 'Jun 21 – Jul 22',
    essence: 'Emotionally attuned sanctuary seeker, nurtured by protective cocoons and nostalgic warmth.',
    hospitalityArchetype: 'The Intimate Custodian',
    color: '#5B7C99',
    accentColor: '#789BB9',
  },
  Leo: {
    name: 'Leo',
    symbol: '♌',
    element: 'Fire',
    modality: 'Fixed',
    rulingPlanet: 'Sun',
    dateRange: 'Jul 23 – Aug 22',
    essence: 'Luminous presence drawn to theatrical grandeur, golden sunlight, and celebratory ceremony.',
    hospitalityArchetype: 'The Solar Sovereign',
    color: '#E6A147',
    accentColor: '#FFBF69',
  },
  Virgo: {
    name: 'Virgo',
    symbol: '♍',
    element: 'Earth',
    modality: 'Mutable',
    rulingPlanet: 'Mercury',
    dateRange: 'Aug 23 – Sep 22',
    essence: 'Refined perfectionist valuing botanical purity, artisanal bespoke craft, and discreet order.',
    hospitalityArchetype: 'The Botanical Purist',
    color: '#7D8C69',
    accentColor: '#9CAE87',
  },
  Libra: {
    name: 'Libra',
    symbol: '♎',
    element: 'Air',
    modality: 'Cardinal',
    rulingPlanet: 'Venus',
    dateRange: 'Sep 23 – Oct 22',
    essence: 'Aesthetic harmonizer seeking symmetry, poetic floral scents, and effortless social elegance.',
    hospitalityArchetype: 'The Harmonic Diplomat',
    color: '#A097B6',
    accentColor: '#C0B7D6',
  },
  Scorpio: {
    name: 'Scorpio',
    symbol: '♏',
    element: 'Water',
    modality: 'Fixed',
    rulingPlanet: 'Pluto & Mars',
    dateRange: 'Oct 23 – Nov 21',
    essence: 'Intense, magnetic mystic drawn to low-lit privacy, intoxicating smoky scents, and deep transformation.',
    hospitalityArchetype: 'The Nocturnal Mystic',
    color: '#6A567D',
    accentColor: '#8B749E',
  },
  Sagittarius: {
    name: 'Sagittarius',
    symbol: '♐',
    element: 'Fire',
    modality: 'Mutable',
    rulingPlanet: 'Jupiter',
    dateRange: 'Nov 22 – Dec 21',
    essence: 'Expansive wanderer inspired by exotic spices, high ceilings, philosophical vistas, and unconstrained freedom.',
    hospitalityArchetype: 'The Cosmopolitan Nomad',
    color: '#C75B7A',
    accentColor: '#E67797',
  },
  Capricorn: {
    name: 'Capricorn',
    symbol: '♑',
    element: 'Earth',
    modality: 'Cardinal',
    rulingPlanet: 'Saturn',
    dateRange: 'Dec 22 – Jan 19',
    essence: 'Quiet titan of taste, valuing architectural provenance, aged woods, timeless heirloom materials, and restorative stillness.',
    hospitalityArchetype: 'The Architectural Titan',
    color: '#7A6B5D',
    accentColor: '#9A8877',
  },
  Aquarius: {
    name: 'Aquarius',
    symbol: '♒',
    element: 'Air',
    modality: 'Fixed',
    rulingPlanet: 'Uranus & Saturn',
    dateRange: 'Jan 20 – Feb 18',
    essence: 'Avant-garde iconoclast craving cerebral acoustics, electric indigo lighting, and forward-thinking surprises.',
    hospitalityArchetype: 'The Visionary Futurist',
    color: '#5C9CA8',
    accentColor: '#79BCC9',
  },
  Pisces: {
    name: 'Pisces',
    symbol: '♓',
    element: 'Water',
    modality: 'Mutable',
    rulingPlanet: 'Neptune & Jupiter',
    dateRange: 'Feb 19 – Mar 20',
    essence: 'Transcendent dreamer enveloped by ethereal marine notes, meditative soundscapes, and boundaryless surrender.',
    hospitalityArchetype: 'The Ethereal Dreamweaver',
    color: '#4B889B',
    accentColor: '#68A8BC',
  },
};

const ZODIAC_LIST = Object.values(ZODIAC_SIGNS);

export const ARCHETYPE_CATALOG: Record<string, ArchetypeSummary> = {
  Aries: {
    archetypeTitle: 'The Radiant Pioneer',
    tagline: 'High-energy trailblazer who values swift service, crisp air, and immediate welcome impact.',
    coreTraits: ['Fast & Decisive', 'Values Immediate Impact', 'Prefers Crisp Cool Air (67°F)'],
    howTheyRecharge: 'Dynamic daytime activity followed by deep, uninterrupted quiet sleep.',
    suiteCalibration: 'Uplifting citrus aroma, 67°F crisp air, energizing morning pour-over dark roast.',
    staffServiceTip: 'Keep check-in under two minutes. Suggest adventurous local dining and outdoor activities.',
    socialRhythm: 'Independent & Discreet',
    energyRhythm: 'High Kinetic'
  },
  Taurus: {
    archetypeTitle: 'The Grounded Epicurean',
    tagline: 'Tactile connoisseur who seeks unhurried artisanal dining, natural textures, and deep comfort.',
    coreTraits: ['Tactile Luxury Lover', 'Appreciates Artisanal Food', 'Recharges in Unhurried Comfort'],
    howTheyRecharge: 'Slow evening soaks, rich local wine, and heavyweight organic linen bedding.',
    suiteCalibration: 'Grounding cedar and amber scent, 69°F balanced comfort, washed linen bedding.',
    staffServiceTip: 'Never rush interactions. Highlight organic farm-to-table dining and the pillow menu.',
    socialRhythm: 'Balanced & Warm',
    energyRhythm: 'Steady & Grounded'
  },
  Gemini: {
    archetypeTitle: 'The Curious Polymath',
    tagline: 'Lively thinker who thrives on fresh cultural tips, light conversation, and stimulating variety.',
    coreTraits: ['Curious & Sociable', 'Values Insider Tips', 'Loves Natural Morning Light'],
    howTheyRecharge: 'Exploring diverse neighborhood cafes during the day, quiet reading and chamomile at night.',
    suiteCalibration: 'Crisp bergamot and white tea aroma, bright morning lighting, oat milk flat white.',
    staffServiceTip: 'Share off-the-beaten-path bookshops, galleries, and hidden cocktail lounges.',
    socialRhythm: 'High-Touch & Social',
    energyRhythm: 'Adaptive Flow'
  },
  Cancer: {
    archetypeTitle: 'The Sanctuary Keeper',
    tagline: 'Intuitive traveler who treats their suite as a peaceful cocoon of warmth and privacy.',
    coreTraits: ['Deep Sanctuary Seeker', 'Appreciates Quiet Privacy', 'Values Warm Comforts'],
    howTheyRecharge: 'Curling up in soft bedding, steaming herbal sleep tea, and warm candlelight glow.',
    suiteCalibration: 'Subtle marine and chamomile mist, 70°F warm cozy atmosphere, plush down pillows.',
    staffServiceTip: 'Offer effortless, whisper-quiet service. Deliver an evening chamomile sleep tray discreetly.',
    socialRhythm: 'Independent & Discreet',
    energyRhythm: 'Steady & Grounded'
  },
  Leo: {
    archetypeTitle: 'The Charismatic Host',
    tagline: 'Luminous presence drawn to golden hour sunlight, celebratory hospitality, and attentive care.',
    coreTraits: ['Warm & Magnetic', 'Values Attentive Recognition', 'Enjoys Celebratory Touches'],
    howTheyRecharge: 'Sunlit morning terraces, poolside relaxation, and celebratory champagne dinners.',
    suiteCalibration: 'Warm amber scent, golden 2200K ambient lighting, luxurious plush robes.',
    staffServiceTip: 'Greet warmly by name, reserve prime tables, and acknowledge their stay with a personal note.',
    socialRhythm: 'High-Touch & Social',
    energyRhythm: 'High Kinetic'
  },
  Virgo: {
    archetypeTitle: 'The Mindful Purist',
    tagline: 'Detail-oriented traveler who values botanical purity, immaculate order, and wellness rituals.',
    coreTraits: ['Organized & Mindful', 'Wellness Oriented', 'Appreciates Flawless Execution'],
    howTheyRecharge: 'Clean, clutter-free space, gentle morning yoga, and ceremonial green matcha.',
    suiteCalibration: 'Clean eucalyptus and mint aroma, immaculate bedding, pure organic bath botanicals.',
    staffServiceTip: 'Ensure impeccable room staging and punctuality. Confirm all dietary preferences in advance.',
    socialRhythm: 'Balanced & Warm',
    energyRhythm: 'Steady & Grounded'
  },
  Libra: {
    archetypeTitle: 'The Aesthetic Harmonizer',
    tagline: 'Cultivated design lover seeking visual balance, delicate florals, and graceful hospitality.',
    coreTraits: ['Design & Art Enthusiast', 'Values Visual Harmony', 'Appreciates Elegant Details'],
    howTheyRecharge: 'Surrounded by curated art, soft acoustic melodies, and leisurely social dinners.',
    suiteCalibration: 'Freesia and white tea fragrance, balanced ambient lighting, silky sateen cotton sheets.',
    staffServiceTip: 'Highlight the hotel architecture and recommend scenic, beautifully designed cocktail lounges.',
    socialRhythm: 'High-Touch & Social',
    energyRhythm: 'Adaptive Flow'
  },
  Scorpio: {
    archetypeTitle: 'The Nocturnal Mystic',
    tagline: 'Perceptive guest who cherishes low amber lighting, total privacy, and meaningful luxury.',
    coreTraits: ['Deeply Private', 'Prefers Low Ambient Light', 'Values Thoughtful Subtlety'],
    howTheyRecharge: 'Evening solitude, deep soaking tub rituals, and peaceful sleep in total darkness.',
    suiteCalibration: 'Smoked cedar and dark amber, blackout curtains, chilled sparkling water with citrus.',
    staffServiceTip: 'Respect sanctuary mode. Deliver room amenities promptly with minimal intrusion.',
    socialRhythm: 'Independent & Discreet',
    energyRhythm: 'Steady & Grounded'
  },
  Sagittarius: {
    archetypeTitle: 'The Free-Spirited Explorer',
    tagline: 'Adventurous optimist inspired by expansive views, spontaneous discovery, and vibrant flavors.',
    coreTraits: ['Adventurous & Energetic', 'Loves Scenic Views', 'Prefers Flexible Pacing'],
    howTheyRecharge: 'Active day explorations followed by relaxed, casual evenings with craft cocktails.',
    suiteCalibration: 'Zesty grapefruit and warm spice scent, open window views, cold-brew coffee.',
    staffServiceTip: 'Recommend scenic hikes, hidden viewpoints, and bold local street food or bistros.',
    socialRhythm: 'High-Touch & Social',
    energyRhythm: 'High Kinetic'
  },
  Capricorn: {
    archetypeTitle: 'The Timeless Connoisseur',
    tagline: 'Discerning traveler who appreciates heritage quality, prompt service, and quiet elegance.',
    coreTraits: ['Punctual & Refined', 'Values Quiet Quality', 'Needs Restorative Sleep'],
    howTheyRecharge: 'Quiet evening reading, ergonomic mattress support, and zero ambient noise.',
    suiteCalibration: 'Aged wood and vetiver scent, tailored crisp sheets, pour-over dark roast at 7:00 AM.',
    staffServiceTip: 'Provide prompt, polished service. Ensure express check-out and seamless morning transit.',
    socialRhythm: 'Independent & Discreet',
    energyRhythm: 'Steady & Grounded'
  },
  Aquarius: {
    archetypeTitle: 'The Visionary Original',
    tagline: 'Forward-thinking guest drawn to modern design, smart room technology, and independent freedom.',
    coreTraits: ['Smart Tech Savvy', 'Independent Minded', 'Loves Innovative Touches'],
    howTheyRecharge: 'Eclectic ambient music, modern smart lighting scenes, and creative downtime.',
    suiteCalibration: 'Fresh alpine air scent, smart bedside controls, ceremonial matcha or cold brew.',
    staffServiceTip: 'Highlight in-room smart tablet features and contemporary art installations on property.',
    socialRhythm: 'Balanced & Warm',
    energyRhythm: 'Adaptive Flow'
  },
  Pisces: {
    archetypeTitle: 'The Dreamer & Mystic',
    tagline: 'Gentle romantic seeking serene waterside calm, soft acoustic soundscapes, and restorative sleep.',
    coreTraits: ['Serene & Gentle', 'Acoustic Sensitivity', 'Loves Bedtime Wind-Downs'],
    howTheyRecharge: 'Warm mineral salt baths, gentle acoustic soundscapes, and unhurried mornings.',
    suiteCalibration: 'Sea salt and blue lotus mist, plush down pillows, warm soothing sleep tea.',
    staffServiceTip: 'Use a gentle, warm tone. Provide quiet room placement away from elevators and offer late checkout.',
    socialRhythm: 'Balanced & Warm',
    energyRhythm: 'Adaptive Flow'
  }
};

export const SAMPLE_GUEST_PROFILES: GuestProfile[] = [
  {
    id: 'guest-julian',
    name: 'Julian Sterling',
    roomNumber: 'Suite 404 (The Penthouse)',
    arrivalTime: '15:30',
    departureDate: '3 Nights',
    nights: 3,
    birthDate: '1988-04-06', // Aries Sun
    birthTime: '06:15',      // Aries/Taurus Rising
    birthCity: 'London, UK',
    preferences: {
      morningBeverage: 'Pour-Over Dark Roast Coffee',
      interactionStyle: 'Discreet & Seamless (respect quiet time)',
      eveningWindDown: 'Spiced Artisanal Nightcap Cocktail',
      scentTolerance: 'Signature Astrological Scent',
      roomTemperature: 'Crisp & Cool (67°F)',
      pillowType: 'Firm Natural Latex',
      tripPurpose: 'Celebration & Weekend Indulgence'
    },
    dietaryNotes: 'Prefers cold-pressed citrus, fiery botanicals, sparkling digestifs'
  },
  {
    id: 'guest-elena',
    name: 'Elena Rostova',
    roomNumber: 'Villa 12 (Garden Pavilion)',
    arrivalTime: '17:00',
    departureDate: '4 Nights',
    nights: 4,
    birthDate: '1992-05-12', // Taurus Sun
    birthTime: '11:45',      // Leo Rising
    birthCity: 'Florence, Italy',
    preferences: {
      morningBeverage: 'Oat Milk Flat White',
      interactionStyle: 'Warm & Curated (love insider tips & friendly chat)',
      eveningWindDown: 'Chamomile & Lavender Bedtime Tea',
      scentTolerance: 'Signature Astrological Scent',
      roomTemperature: 'Balanced Comfort (69°F)',
      pillowType: 'Plush Goose Down',
      tripPurpose: 'Deep Rest & Unplugging'
    },
    dietaryNotes: 'Organic single-origin estate chocolates, herbal decoctions, no refined sugars'
  },
  {
    id: 'guest-kaelen',
    name: 'Dr. Kaelen Thorne',
    roomNumber: 'Suite 208 (Library Loft)',
    arrivalTime: '14:00',
    departureDate: '3 Nights',
    nights: 3,
    birthDate: '1995-06-08', // Gemini Sun
    birthTime: '09:20',      // Cancer/Leo Rising
    birthCity: 'San Francisco, USA',
    preferences: {
      morningBeverage: 'Ceremonial Matcha',
      interactionStyle: 'Warm & Curated (love insider tips & friendly chat)',
      eveningWindDown: 'Chilled Sparkling Mineral Water with Lemon',
      scentTolerance: 'Subtle & Fresh Only',
      roomTemperature: 'Crisp & Cool (67°F)',
      pillowType: 'Cooling Memory Foam',
      tripPurpose: 'Creative Focus / Solo Work'
    },
    dietaryNotes: 'High-adaptogen matcha, sparkling botanical tonics, light Mediterranean sharing'
  },
  {
    id: 'guest-seraphina',
    name: 'Seraphina Chen',
    roomNumber: 'Suite 502 (Ocean Terrace)',
    arrivalTime: '18:30',
    departureDate: '5 Nights',
    nights: 5,
    birthDate: '1990-11-14', // Scorpio Sun
    birthTime: '21:30',      // Cancer Rising
    birthCity: 'Kyoto, Japan',
    preferences: {
      morningBeverage: 'Fresh Mint Herbal Tea',
      interactionStyle: 'Absolute Privacy (sanctuary mode, minimal contact)',
      eveningWindDown: 'Warm Golden Oat Milk with Cinnamon',
      scentTolerance: 'Signature Astrological Scent',
      roomTemperature: 'Balanced Comfort (69°F)',
      pillowType: 'Plush Goose Down',
      tripPurpose: 'Deep Rest & Unplugging'
    },
    dietaryNotes: 'Nightly blue lotus & chamomile broths, ocean minerals, umami teas'
  }
];


export function calculateSunSign(dateStr: string): ZodiacSignInfo {
  if (!dateStr) return ZODIAC_SIGNS.Taurus;
  const parts = dateStr.split('-');
  const m = parseInt(parts[1], 10);
  const d = parseInt(parts[2], 10);

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return ZODIAC_SIGNS.Aries;
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return ZODIAC_SIGNS.Taurus;
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return ZODIAC_SIGNS.Gemini;
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return ZODIAC_SIGNS.Cancer;
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return ZODIAC_SIGNS.Leo;
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return ZODIAC_SIGNS.Virgo;
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return ZODIAC_SIGNS.Libra;
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return ZODIAC_SIGNS.Scorpio;
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return ZODIAC_SIGNS.Sagittarius;
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return ZODIAC_SIGNS.Capricorn;
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return ZODIAC_SIGNS.Aquarius;
  return ZODIAC_SIGNS.Pisces;
}

export function estimateMoonSign(dateStr: string, timeStr: string = '12:00'): ZodiacSignInfo {
  const sun = calculateSunSign(dateStr);
  const sunIndex = ZODIAC_LIST.findIndex(s => s.name === sun.name);
  // Moon shifts approx 1 sign every 2.5 days. Use date day + time hash
  const parts = (dateStr || '1990-01-01').split('-');
  const d = parseInt(parts[2] || '1', 10);
  const [h] = (timeStr || '12:00').split(':').map(Number);
  const shift = (Math.floor(d * 1.6) + Math.floor(h / 6)) % 12;
  const moonIndex = (sunIndex + shift + 4) % 12;
  return ZODIAC_LIST[moonIndex];
}

export function estimateRisingSign(dateStr: string, timeStr: string = '12:00'): ZodiacSignInfo {
  const sun = calculateSunSign(dateStr);
  const sunIndex = ZODIAC_LIST.findIndex(s => s.name === sun.name);
  const [h] = (timeStr || '12:00').split(':').map(Number);
  // At sunrise (approx 06:00), rising sign is Sun sign. Every 2 hours moves ~1 sign forward.
  const hourOffset = Math.floor(((h - 6 + 24) % 24) / 2);
  const risingIndex = (sunIndex + hourOffset) % 12;
  return ZODIAC_LIST[risingIndex];
}

export function generateNatalChart(profile: GuestProfile): NatalChartData {
  const sunSign = calculateSunSign(profile.birthDate);
  const moonSign = estimateMoonSign(profile.birthDate, profile.birthTime);
  const risingSign = estimateRisingSign(profile.birthDate, profile.birthTime);

  // Weightings: Sun (40%), Moon (30%), Rising (30%)
  const elements = [sunSign.element, moonSign.element, risingSign.element];
  const fireCount = elements.filter(e => e === 'Fire').length;
  const earthCount = elements.filter(e => e === 'Earth').length;
  const airCount = elements.filter(e => e === 'Air').length;
  const waterCount = elements.filter(e => e === 'Water').length;

  const total = elements.length;
  const balance = {
    fire: Math.round((fireCount / total) * 100),
    earth: Math.round((earthCount / total) * 100),
    air: Math.round((airCount / total) * 100),
    water: Math.round((waterCount / total) * 100),
  };

  const counts: Record<ElementType, number> = { Fire: fireCount, Earth: earthCount, Air: airCount, Water: waterCount };
  const dominantElement = (Object.keys(counts) as ElementType[]).reduce((a, b) => counts[a] >= counts[b] ? a : b);

  const modality = sunSign.modality;

  const stayRhythmMap: Record<ModalityType, { name: string; description: string; timing: string }> = {
    Cardinal: {
      name: 'Arrival-Focused (Immediate Wow Factor)',
      description: 'Loves an immediate signature welcome moment within 90 minutes of arrival, followed by spacious free time.',
      timing: 'Flagship arrival greeting + swift check-in'
    },
    Fixed: {
      name: 'Nightly Ritual (Consistent Comfort)',
      description: 'Prefers an elevated, dependable evening turn-down ritual that deepens every night of their stay.',
      timing: 'Nightly turn-down touches with peak gift on the last night'
    },
    Mutable: {
      name: 'Spontaneous & Varied (Delightful Surprises)',
      description: 'Appreciates shifting culinary treats, unexpected concierge tips, and variety across their stay.',
      timing: 'Distributed midday and evening surprises'
    }
  };

  const hospitalityTitle = `${sunSign.name} Sun · ${moonSign.name} Moon · ${risingSign.name} Ascendant`;
  const guestKeynote = `${sunSign.hospitalityArchetype} with ${moonSign.element} emotional depth and ${risingSign.element} sensory filter.`;

  const archetype = ARCHETYPE_CATALOG[sunSign.name] || ARCHETYPE_CATALOG.Taurus;

  return {
    sunSign,
    moonSign,
    risingSign,
    elementalBalance: balance,
    dominantElement,
    modality,
    stayRhythm: stayRhythmMap[modality],
    hospitalityTitle,
    guestKeynote,
    archetype
  };
}


export function generateSensorySignature(chart: NatalChartData): SensorySignature {
  const element = chart.dominantElement;

  const olfactoryCatalog: Record<ElementType, OlfactoryProfile> = {
    Fire: {
      signatureName: 'Solar Ember & Cardamom Blanc',
      topNotes: ['Blood Orange', 'Cracked Black Peppercorn', 'Pink Grapefruit'],
      heartNotes: ['Smoked Cardamom', 'Wild Cinnamon Bark', 'Golden Cistus'],
      baseNotes: ['Amber Resin', 'Smoked Vetiver', 'Warm Atlas Cedarwood'],
      arrivalMist: 'Blood Orange & Black Pepper Cold-Pressed Vapor',
      eveningTurnDownSpray: 'Spiced Sandalwood & Wild Amber Pillow Mist',
      diffusionSchedule: [
        { time: '07:30', ritual: 'Solar Awakening Mist', intensity: 'Medium' },
        { time: '17:00', ritual: 'Golden Hour Smoked Cardamom', intensity: 'Subtle' },
        { time: '21:30', ritual: 'Warm Amber Sleep Cocoon', intensity: 'Gentle Low' }
      ],
      botanicalPairing: 'Freshly cut bitter orange branches in artisanal terracotta vessels.'
    },
    Earth: {
      signatureName: 'Ancient Hinoki & Grounding Vetiver',
      topNotes: ['Bergamot Peel', 'Crushed Moss', 'Forest Rain'],
      heartNotes: ['Japanese Hinoki Wood', 'Virginian Cedar', 'Wild Fig'],
      baseNotes: ['Javanese Vetiver', 'Dark Patchouli', 'Warm Tonka Bean'],
      arrivalMist: 'Japanese Hinoki & Damp Stone Botanical Vapor',
      eveningTurnDownSpray: 'Oakmoss & French Lavender Grounding Pillow Mist',
      diffusionSchedule: [
        { time: '07:30', ritual: 'Forest Rain & Cedar Awakening', intensity: 'Low' },
        { time: '16:30', ritual: 'Warm Vetiver Deepening', intensity: 'Medium' },
        { time: '21:00', ritual: 'Ancient Hinoki Bedtime Sanctuary', intensity: 'Medium Low' }
      ],
      botanicalPairing: 'Single carved cedar branch and hand-pressed river stone incense holder.'
    },
    Air: {
      signatureName: 'Bergamot Fleur & White Tea Ether',
      topNotes: ['Crisp Italian Bergamot', 'Green Neroli Leaf', 'Morning Sage'],
      heartNotes: ['Silvery White Tea', 'Freesia', 'Crushed Juniper Berry'],
      baseNotes: ['Cashmere Wood', 'Clean White Musk', 'Sunlit Iris'],
      arrivalMist: 'Calabrian Bergamot & Silver White Tea Ether',
      eveningTurnDownSpray: 'Chamomile Blossom & Crisp Linen Vapor',
      diffusionSchedule: [
        { time: '07:00', ritual: 'Crisp Green Neroli Daylight Awakening', intensity: 'Brisk' },
        { time: '14:30', ritual: 'White Tea & Juniper Focus Dispersion', intensity: 'Medium' },
        { time: '22:00', ritual: 'Soft Cashmere & Chamomile Slumber', intensity: 'Ultra-light' }
      ],
      botanicalPairing: 'Air plants and dried silver dollar eucalyptus in minimal blown-glass vases.'
    },
    Water: {
      signatureName: 'Marine Salt & Sacred Blue Lotus',
      topNotes: ['Ocean Mist', 'Dewy Bamboo', 'Crisp Sea Salt'],
      heartNotes: ['Egyptian Blue Lotus', 'Water Lily', 'Orris Root'],
      baseNotes: ['Mineral Driftwood', 'Sea Moss', 'Subtle Frankincense'],
      arrivalMist: 'Sea Salt & Blue Lotus Micro-Droplet Cloud',
      eveningTurnDownSpray: 'Sacred Blue Lotus & Clary Sage Deep Sleep Mist',
      diffusionSchedule: [
        { time: '08:00', ritual: 'Coastal Dew & Bamboo Awakening', intensity: 'Soft' },
        { time: '17:30', ritual: 'Lotus Twilight Hydro-Aura', intensity: 'Medium' },
        { time: '21:00', ritual: 'Deep Ocean Sound & Scent Integration', intensity: 'Continuous Low' }
      ],
      botanicalPairing: 'Single white lotus bloom floating in hand-hammered dark zinc bowl.'
    }
  };

  const acousticCatalog: Record<ElementType, AcousticProfile> = {
    Fire: {
      frequencyHz: 528,
      frequencyLabel: '528 Hz — DNA Transformation & Solar Vitality',
      musicalArchetype: 'Percussive Rhythms, Warm Flamenco Brass, Dynamic Textures',
      arrivalSoundscape: 'Live-recorded Andalusian nylon strings blended with warm analog vinyl crackle',
      daytimeLandscape: 'Uptempo warm organic polyrhythms that stimulate executive creative momentum',
      nightWindDown: 'Downtempo warm cello and analog brass filtered through tape delay',
      instrumentation: ['Analog Synthesizer Drone', 'Tibetan Singing Bowl in C#', 'Warm Marimba', 'Cello']
    },
    Earth: {
      frequencyHz: 432,
      frequencyLabel: '432 Hz — Natural Harmonic Earth Resonance',
      musicalArchetype: 'Acoustic Folk, Upright Bass, Deep Resonator Gongs, Binaural Grounding',
      arrivalSoundscape: 'Slow resonant acoustic upright bass and woodblock tones timed to human resting pulse',
      daytimeLandscape: 'Minimal piano compositions recorded in wooden auditoriums with natural reverb',
      nightWindDown: 'Deep 432Hz sine drone accompanied by subtle autumn forest wind field recordings',
      instrumentation: ['Upright Bass', 'Rosewood Marimba', '432Hz Crystal Bowl', 'Vintage Steinway Piano']
    },
    Air: {
      frequencyHz: 639,
      frequencyLabel: '639 Hz — Cerebral Harmony & Lucid Inspiration',
      musicalArchetype: 'Eclectic Curated Modular Ambient, Contemporary Classical, Wind Chimes',
      arrivalSoundscape: 'Atmospheric harp arpeggios woven into gentle high-frequency glass crystal chimes',
      daytimeLandscape: 'Nuanced contemporary neo-classical piano and ambient modular soundscapes',
      nightWindDown: 'Slowly evolving drone chords that gently quiet inner conversational dialogue',
      instrumentation: ['Concert Harp', 'Glass Armonica', 'Modular Synthesizer', 'Flute harmonics']
    },
    Water: {
      frequencyHz: 396,
      frequencyLabel: '396 / 741 Hz — Ocean Intuition & Cellular Surrender',
      musicalArchetype: 'Submerged Hydro-Acoustics, Ambient Cello, Singing Bowls, Theta Waves',
      arrivalSoundscape: 'Hydrophone recordings of remote Pacific currents layered with warm cello tones',
      daytimeLandscape: 'Ethereal ambient strings that create a serene, womb-like emotional container',
      nightWindDown: 'Deep Delta-wave binaural pulse layered under rhythmic midnight shore breaks',
      instrumentation: ['Hydrophone Ocean Waves', '741Hz Frosted Quartz Bowl', 'Deep Sub-Bass', 'Solfeggio Bells']
    }
  };

  const visualCatalog: Record<ElementType, VisualLightingProfile> = {
    Fire: {
      kelvinTemp: 2200,
      kelvinName: 'Solar Flare Amber (2200K)',
      colorHex: '#E06D53',
      ambianceName: 'Golden Hour Horizon',
      arrivalScene: 'Backlit sculptural bronze fixtures with warm perimeter cove illumination and flame-mimic hearth lamps.',
      turnDownScene: 'Deep ember-glow at 10% luminous flux, evoking a dying desert campfire under the stars.',
      materialSightlines: ['Brushed Copper Trays', 'Raw Travertine Mantels', 'Cognac Saddle Leather'],
      chromaticTone: 'Terracotta, Rich Ochre, Burnished Brass'
    },
    Earth: {
      kelvinTemp: 2600,
      kelvinName: 'Warm Hearth Candlelight (2600K)',
      colorHex: '#9C8855',
      ambianceName: 'Sanctuary Forest Glow',
      arrivalScene: 'Filtered dappled light mimicking sunshine through high tree canopies, illuminating raw wood grains.',
      turnDownScene: 'Single pinpoint warm sconce illuminating a botanical installation, total bedroom blackout transition.',
      materialSightlines: ['Hand-Chiseled Basalt Stone', 'Raw European Oak', 'Unlacquered Patinated Bronze'],
      chromaticTone: 'Deep Olive, Forest Pine, Warm Clay'
    },
    Air: {
      kelvinTemp: 3400,
      kelvinName: 'Crisp Alpine Daylight (3400K)',
      colorHex: '#8BA4B5',
      ambianceName: 'Sunlit Skylight Atelier',
      arrivalScene: 'Open sheer drapery framing unconstrained horizon vistas with clean architectural wash lighting.',
      turnDownScene: 'Ethereal perimeter halo lighting with moon-mimicking indirect sconces.',
      materialSightlines: ['Curved Fluted Glass', 'Mirrored Horizon Vistas', 'Polished White Carrera Marble'],
      chromaticTone: 'Slate Blue, Polished Nickel, Cloud White'
    },
    Water: {
      kelvinTemp: 2000,
      kelvinName: 'Bioluminescent Indigo & Low Candlelight (2000K)',
      colorHex: '#5B7C99',
      ambianceName: 'Twilight Abyssal Sanctuary',
      arrivalScene: 'Moody, deeply atmospheric illumination with concealed floor-level light grazing reflective surfaces.',
      turnDownScene: 'Ultra-low flickering candle effect (1800K) casting gentle watery ripples onto ceiling arches.',
      materialSightlines: ['Hammered Dark Zinc', 'Deep Indigo Glazed Ceramics', 'Smoked Glass Water Vessles'],
      chromaticTone: 'Midnight Navy, Sea-Foam Grey, Gunmetal'
    }
  };

  const gustatoryCatalog: Record<ElementType, GustatoryProfile> = {
    Fire: {
      arrivalElixir: 'Smoked Blood Orange & Roasted Cardamom Shrub',
      elixirDescription: 'A fiery, digestive-stimulating welcome pour topped with house ginger beer and burnt rosemary smoke.',
      bespokeMiniBar: ['Chipotle Dark Chocolate Bark (72%)', 'Cold-Pressed Habanero Tangerine Spritz', 'Small-Batch Single Malt Mezcal'],
      eveningSleepTonic: 'Warm Golden Milk with organic turmeric, ashwagandha, black pepper, and wildflower honey.',
      culinaryPairingPhilosophy: 'Char-forward wood-fired preparations, fermented chile glazes, bold spiced reductions.',
      herbalInfusion: 'Whole organic cloves, cinnamon curls, dried orange peel, and holy basil (Tulsi).'
    },
    Earth: {
      arrivalElixir: 'Cold-Pressed Root Elixir with Burdock & Black Walnut',
      elixirDescription: 'A deeply grounded mineral tonic with maple water, roasted chicory, and birch sap.',
      bespokeMiniBar: ['Raw Cacao Truffles with Celtic Sea Salt', 'Single-Estate Heirloom Nut Butters', 'Biodynamic Pinot Noir (2018)'],
      eveningSleepTonic: 'Reishi Mushroom and Cacao restorative broth with Madagascar bourbon vanilla.',
      culinaryPairingPhilosophy: 'Earthy root vegetable tartines, sourdough with cultured pasture butter, slow braises.',
      herbalInfusion: 'Roasted dandelion root, French linden blossom, and lemon verbena.'
    },
    Air: {
      arrivalElixir: 'Calabrian Bergamot & Sparkling Silver Needle White Tea',
      elixirDescription: 'An effervescent, botanical-rich aperitif with juniper hydrosol and crushed mint essence.',
      bespokeMiniBar: ['Yuzu & Bergamot Pâte de Fruits', 'Artisanal Rosemary Marcona Almonds', 'Crisp Pet-Nat Natural Sparkling Wine'],
      eveningSleepTonic: 'Passionflower & Blue Skullcap infusion designed to quiet cerebral hyperactivity.',
      culinaryPairingPhilosophy: 'Aerated mousses, crisp micro-greens, citrus-cured crudos, tapas-style variety.',
      herbalInfusion: 'High-mountain white tea buds, lavender tips, and Moroccan spearmint.'
    },
    Water: {
      arrivalElixir: 'Egyptian Blue Lotus & Salted Cucumber Hydration Draught',
      elixirDescription: 'A chilled crystalline infusion imbued with ocean electrolytes, blue spirulina, and aloe.',
      bespokeMiniBar: ['Matcha Sea Salt Caramels', 'Umeboshi Plum Sparkling Tonic', 'Jun Kombucha Fermented with Wild Jasmine'],
      eveningSleepTonic: 'Warm Blue Lotus, Valerian, and Oat Straw dream broth for emotional decompression.',
      culinaryPairingPhilosophy: 'Delicate dashi broths, seaweed salads, steamed wild fish in parchment, soothing congees.',
      herbalInfusion: 'Egyptian blue lotus petals, organic chamomile blossoms, and sweet dried licorice.'
    }
  };

  const tactileCatalog: Record<ElementType, TactileProfile> = {
    Fire: {
      linenMaterial: 'Crisp Percale Egyptian Long-Staple Cotton (500 TC)',
      threadCountOrWeight: 'Cool, temperature-regulating weave that prevents overheating under heavy duvets',
      robeTexture: 'Waffle-weave textured lightweight pima cotton with brushed micro-suede collar',
      pillowCuration: ['Firm Goose Down', 'Aerated Latex Core (Active Neck Support)'],
      bathAmenity: 'Eucalyptus & Pink Himalayan Hot Bath Salt with ginger root oil',
      groundingObject: 'Polished Red Jasper palm stone resting on a forged iron bedside dish'
    },
    Earth: {
      linenMaterial: 'Stone-Washed Belgian Heavyweight Raw Linen',
      threadCountOrWeight: 'Substantial, grounding 240 GSM weight that cradles the nervous system',
      robeTexture: 'Plush organic Turkish velour toweling robe (600 GSM) with oversized cocoon hood',
      pillowCuration: ['Buckwheat Hull Grounding Pillow', 'Ultra-Heavy European White Duck Down'],
      bathAmenity: 'Volcanic Rhassoul Clay & Dead Sea Magnesium Flakes bath treatment',
      groundingObject: 'Hand-chiseled Basalt river stone inscribed with the guest’s natal coordinates'
    },
    Air: {
      linenMaterial: 'Gossamer-Light Italian Sateen Cotton (800 TC)',
      threadCountOrWeight: 'Silky, frictionless, nearly weightless drape allowing effortless movement',
      robeTexture: 'Mulberry silk kimono robe with breathable bamboo-cotton interior lining',
      pillowCuration: ['Zero-Gravity Microfiber Cloud Pillow', 'Cooling Gel-Infused Memory Foam'],
      bathAmenity: 'Effervescent White Tea & Cypress Botanical Bath Bombs',
      groundingObject: 'Raw Selenite Crystal wand designed to clear energetic static before sleep'
    },
    Water: {
      linenMaterial: 'Brushed Micro-Modal & Egyptian Cotton Sateen Blend',
      threadCountOrWeight: 'Velvety, cocooning tactile feel that emulates gentle water immersion',
      robeTexture: 'Double-faced cashmere-touch microfiber with plush sherpa cuffs',
      pillowCuration: ['Soft Malleable Hungarian Goose Down', 'Water-Chamber Reversible Pillow'],
      bathAmenity: 'Organic Atlantic Kelp, Spirulina, and Magnesium Soak with fresh cedar sprigs',
      groundingObject: 'Polished Black Tourmaline & Labradorite sphere to shield nocturnal dreams'
    }
  };

  return {
    olfactory: olfactoryCatalog[element],
    acoustic: acousticCatalog[element],
    visual: visualCatalog[element],
    gustatory: gustatoryCatalog[element],
    tactile: tactileCatalog[element],
  };
}

export function generateSurpriseMoments(chart: NatalChartData, nights: number): SurpriseMoment[] {
  const element = chart.dominantElement;
  const modality = chart.modality;
  const sun = chart.sunSign.name;

  const moments: SurpriseMoment[] = [];

  // Day 1 Arrival Moment (Universal to all, but styled by Modality & Element)
  if (modality === 'Cardinal') {
    moments.push({
      id: 'surprise-1',
      dayIndex: 1,
      dayLabel: 'Arrival Evening (Within 90 Min)',
      department: 'Front Desk',
      title: 'The Sovereign Arrival Toast & Celestial Welcome Key',
      description: `Immediately following in-suite registration, a handcrafted brass cloche is presented containing a custom wax-sealed celestial scroll with their ${sun} planetary alignment and a personalized welcome pour of ${element === 'Fire' ? 'Smoked Blood Orange Reserve' : 'Botanical Elixir'}.`,
      revealMechanism: 'In-suite Butler presentation with personalized handwritten alignment cipher.',
      astrologicalTrigger: `Cardinal ${element}: Craves immediate, decisive impact that proves the hotel anticipated their exact energy.`,
      impactScore: 98,
      iconName: 'Sparkles'
    });
  } else if (modality === 'Fixed') {
    moments.push({
      id: 'surprise-1',
      dayIndex: 1,
      dayLabel: 'Night 1 Turn-Down Ritual',
      department: 'Housekeeping',
      title: 'The Sacred First Sanctuary Seal',
      description: `A customized bedside turn-down that introduces the guest’s tactile sanctuary: a heated basalt stone bath tray, hand-poured custom elemental candle, and a curated grounding nightcap.`,
      revealMechanism: 'Discreet evening turn-down when the guest returns from dinner.',
      astrologicalTrigger: `Fixed ${element}: Anchors trust through uncompromising somatic comfort and predictability.`,
      impactScore: 94,
      iconName: 'Flame'
    });
  } else {
    moments.push({
      id: 'surprise-1',
      dayIndex: 1,
      dayLabel: 'Arrival Afternoon',
      department: 'Concierge',
      title: 'The Secret Chamber Key & Curated Reading Archive',
      description: `Upon entering the suite, the guest discovers a rare first-edition volume matched to their ${sun} archetype placed beside a handwritten invitation to the property’s private speakeasy vault.`,
      revealMechanism: 'Hidden in plain sight on the reading table under soft directional light.',
      astrologicalTrigger: `Mutable ${element}: Sparks immediate intellectual intrigue and curiosity.`,
      impactScore: 95,
      iconName: 'BookOpen'
    });
  }

  // Mid-Stay Moments
  if (nights >= 2) {
    moments.push({
      id: 'surprise-2',
      dayIndex: 2,
      dayLabel: 'Day 2 Golden Hour',
      department: 'Food & Beverage',
      title: 'The Astrological Chef Pairing & Secret Cellar Pour',
      description: `Executive Chef sends an unlisted amuse-bouche formulated with ${element === 'Fire' ? 'fermented spicy citrus and smoked salt' : element === 'Earth' ? 'aged black truffle and stone-ground chestnut' : element === 'Air' ? 'aerated elderflower and compressed melon' : 'kelp butter and cured Hamachi'} with a sommelier pour from the hotel private reserve.`,
      revealMechanism: 'Delivered unannounced at the guest’s dinner table with a bespoke astrological menu card.',
      astrologicalTrigger: `${chart.hospitalityTitle}: Resonates with their elemental palate profile.`,
      impactScore: 96,
      iconName: 'Utensils'
    });
  }

  if (nights >= 3) {
    moments.push({
      id: 'surprise-3',
      dayIndex: 3,
      dayLabel: 'Day 3 Midday / Twilight',
      department: 'Wellness & Spa',
      title: 'The Starlight Sound & Solfeggio Hydro-Therapy',
      description: `A private 45-minute elemental sound bath in the vitality pool, calibrated to ${chart.dominantElement === 'Water' ? '396Hz emotional release' : '528Hz cellular vitality'} with underwater acoustic transducers.`,
      revealMechanism: 'Hand-delivered gold-embossed envelope with a scheduled private spa sanctuary reservation.',
      astrologicalTrigger: `Circadian tuning designed for their ${chart.moonSign.name} emotional core.`,
      impactScore: 99,
      iconName: 'Music'
    });
  }

  // Departure Keepsake Moment
  moments.push({
    id: 'surprise-departure',
    dayIndex: nights,
    dayLabel: `Day ${nights} Departure`,
    department: 'Concierge',
    title: 'The Bespoke Sensory Keepsake & Transit Elixir',
    description: `At checkout, the guest is presented with a 30ml travel flacon of their bespoke suite scent, an engraved stone talisman inscribed with their natal coordinates, and a thermocooled travel tonic to protect their circadian balance during flights.`,
    revealMechanism: 'Placed discreetly in their departure vehicle or handed over with warm eye contact at private salon checkout.',
    astrologicalTrigger: 'Extends the one-of-one hospitality memory indefinitely into their everyday reality.',
    impactScore: 97,
    iconName: 'Gift'
  });

  return moments;
}

export function generateDepartmentTasks(
  chart: NatalChartData,
  sensory: SensorySignature,
  nights: number,
  arrivalTime: string
): DepartmentTask[] {
  const tasks: DepartmentTask[] = [
    {
      id: 'task-1',
      dayNumber: 1,
      department: 'Housekeeping',
      title: 'Pre-Arrival Atmospheric Calibration',
      actionDetails: `Diffuse ${sensory.olfactory.signatureName} at 60% intensity 45 mins prior to ${arrivalTime}. Set lighting scene to ${sensory.visual.kelvinName} (${sensory.visual.kelvinTemp}K). Lay out ${sensory.tactile.linenMaterial} with ${sensory.tactile.pillowCuration[0]}.`,
      timing: `T-45 Min (by ${arrivalTime})`,
      completed: true,
      priority: 'VIP High'
    },
    {
      id: 'task-2',
      dayNumber: 1,
      department: 'Front Desk',
      title: 'Cosmic Intake Verbal Calibration',
      actionDetails: `Brief Front Desk Butler on ${chart.sunSign.name} profile (${chart.dominantElement} - ${chart.modality}). Avoid corporate script. Greet with warm, grounded confidence; provide immediate keys without lobby delay.`,
      timing: `Upon Arrival (${arrivalTime})`,
      completed: true,
      priority: 'VIP High'
    },
    {
      id: 'task-3',
      dayNumber: 1,
      department: 'F&B',
      title: 'Arrival Elixir Presentation',
      actionDetails: `Deliver chilled ${sensory.gustatory.arrivalElixir} on hammered metallic tray with crystal tumblers within 8 minutes of luggage delivery. Check for dietary safety.`,
      timing: `${arrivalTime} + 10 min`,
      completed: false,
      priority: 'VIP High'
    },
    {
      id: 'task-4',
      dayNumber: 1,
      department: 'Housekeeping',
      title: 'Elemental Turn-Down Protocol',
      actionDetails: `Execute evening turn-down: Mist bed with ${sensory.olfactory.eveningTurnDownSpray}. Activate in-room acoustic loop at ${sensory.acoustic.frequencyLabel}. Place ${sensory.tactile.groundingObject} on nightstand.`,
      timing: '20:30',
      completed: false,
      priority: 'VIP High'
    },
    {
      id: 'task-5',
      dayNumber: 2,
      department: 'Wellness',
      title: 'Circadian Acoustic Morning Alignment',
      actionDetails: `Queue morning soundscape (${sensory.acoustic.daytimeLandscape}) on suite audio. Deliver fresh morning herbal infusion (${sensory.gustatory.herbalInfusion}) upon requested wakeup call.`,
      timing: '08:00',
      completed: false,
      priority: 'Standard'
    },
    {
      id: 'task-6',
      dayNumber: 2,
      department: 'F&B',
      title: 'Surprise & Delight Execution: Astrological Pairing',
      actionDetails: `Kitchen to dispatch bespoke chef tasting bite to guest table at dinner with sommelier introduction of the astrological flavor profile.`,
      timing: '19:45',
      completed: false,
      priority: 'Critical Surprise'
    },
    {
      id: 'task-7',
      dayNumber: nights,
      department: 'Concierge',
      title: 'Departure Keepsake Handover',
      actionDetails: `Stage 30ml travel perfume of ${sensory.olfactory.signatureName} and custom leather-bound astrological stay dossier for checkout handover. Ensure valets pack luggage with care.`,
      timing: 'Check-out (12:00)',
      completed: false,
      priority: 'Critical Surprise'
    }
  ];

  return tasks;
}
