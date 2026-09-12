import { PortfolioProject, PortfolioCategoryRow } from '../types/portfolio';

export const CELESTIAL_HOSPITALITY_PROJECT: PortfolioProject = {
  id: 'celestial-hospitality',
  slug: 'celestial-hospitality',
  title: 'CELESTIAL HOSPITALITY',
  tagline: 'The Birth-Chart Hotel Experience Engine',
  provocation: "What if a guest's birth chart turned their stay into a one-of-a-kind sensory experience?",
  categoryTag: 'HOSPITALITY INNOVATION',
  industry: 'Hospitality & Spatial Design',
  matchScore: 99,
  year: '2026',
  maturity: 'Interactive Working Prototype',
  badge: 'INTERACTIVE PROTOTYPE',
  gradientTheme: 'from-amber-950/80 via-stone-900 to-black',
  imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
  backdropUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1800&auto=format&fit=crop',
  synopsis:
    'A boutique hospitality system decoding Sun, Moon, and Rising natal signs into custom 5-sense room atmospheres, circadian Kelvin lighting, bespoke essential oil mists, and real-time staff dispatch.',
  theBreakthrough:
    'Translates birth coordinates into turnkey room staging with 4 master scents, 3 lighting scenes, and automated BOH workflows.',
  whyItMatters:
    'Replaces generic checkboxes with genuine energetic recognition, driving guest loyalty and direct booking margins.',
  frameworkPoints: [
    'Intake to Archetype: Translates natal data into Fire, Earth, Air, or Water profiles.',
    '5-Sense In-Room Orchestration: Synchronized diffusion, acoustic soundscapes, and Kelvin lighting.',
    'BOH Operational Dispatch: Departmental checklists for Housekeeping, Front Desk, and Culinary.',
    'In-Room Tablet Concierge: Guest touchpoint for celestial tonics and turn-down control.'
  ],
  metrics: [
    { label: 'Prototype Engine', value: '100% Interactive' },
    { label: 'Sub-Systems', value: '7 Live Views' },
    { label: 'Scale', value: '20–60 Keys' },
    { label: 'ADR Lift', value: '+$140 / Night' }
  ],
  episodes: [
    {
      episodeNumber: 1,
      title: 'Booking Intake & Archetype Visualizer',
      duration: 'Interactive',
      description: 'Capturing birth coordinates to generate Sun, Moon, and Rising hospitality profiles.',
      keyDeliverables: ['Live Natal Calculator', '12 Zodiac Archetype Cards', 'Stay Calibrator']
    },
    {
      episodeNumber: 2,
      title: '5-Sense Room Ambiance Stage',
      duration: 'Interactive',
      description: 'Real-time simulation of lighting temperatures, custom diffuser blends, and sound frequencies.',
      keyDeliverables: ['Lighting Scene Simulator', 'Aroma Diffusion Engine', 'Resonance Player']
    },
    {
      episodeNumber: 3,
      title: 'In-Room Guest Tablet Concierge',
      duration: 'Interactive',
      description: 'Guest digital interface for evening tonics, lighting moods, and celestial neighborhood guides.',
      keyDeliverables: ['Tablet UI', 'Evening Tonic Selector', 'Turn-Down Controls']
    },
    {
      episodeNumber: 4,
      title: 'Back-of-House Dispatch & Playbook',
      duration: 'Interactive',
      description: 'Friction-free task board for Housekeeping, Front Desk, and Food & Beverage.',
      keyDeliverables: ['Cross-Department Task Dispatch', 'Staff Playbook', 'Turn-Down Checklist']
    }
  ],
  isInteractivePrototype: true
};

// Row 1: Places I'd Love to Redesign
export const PLACES_REDESIGN_PROJECTS: PortfolioProject[] = [
  {
    id: 'bookstore-social-club',
    slug: 'bookstore-social-club',
    title: 'THE BOOKSTORE AS A SOCIAL CLUB',
    tagline: 'Physical-to-Community Cultural Redesign',
    provocation: 'What if independent bookstores were designed around lingering instead of browsing?',
    categoryTag: 'COMMUNITY & RETAIL',
    industry: 'Cultural Spaces',
    matchScore: 97,
    year: '2026',
    maturity: 'Concept Architecture',
    badge: 'S ORIGINAL',
    gradientTheme: 'from-amber-900/60 via-stone-900 to-black',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1507842229451-79b1be886a20?q=80&w=1800&auto=format&fit=crop',
    synopsis:
      'Reinventing the brick-and-mortar bookstore as an evening parlor: acoustic reading nooks, membership lockers, espresso-to-cocktail counters, and curated communal salons.',
    theBreakthrough:
      'Converts low-margin transactional book sales into high-margin recurring membership and hospitality beverage revenue.',
    whyItMatters:
      'Physical third places are vanishing; spaces that combine quiet intellectual focus with warm social connection command immense devotion.',
    frameworkPoints: [
      'Day-to-night spatial transformation from quiet daytime workspace to evening literary bar.',
      'Curated private lockers for members to store works-in-progress and personal collections.',
      'Acoustic zoning preventing lounge conversation from bleeding into deep-reading chambers.'
    ],
    metrics: [
      { label: 'Revenue Model', value: 'Membership + F&B' },
      { label: 'Dwell Time', value: '3.4x Increase' },
      { label: 'Format', value: 'Hybrid Third Place' }
    ],
    episodes: [
      {
        episodeNumber: 1,
        title: 'The Third Place Deficit',
        duration: 'Spatial Plan',
        description: 'Why modern coffee shops feel sterile and how literary parlors fill the loneliness gap.',
        keyDeliverables: ['Floorplan Zoning Blueprint', 'Day-to-Night Lighting Schedule']
      },
      {
        episodeNumber: 2,
        title: 'Membership & Salon Program',
        duration: 'Financial Model',
        description: 'Subscription tiers, private author salons, and cocktail tasting pairings.',
        keyDeliverables: ['Unit Economics Model', 'Event Programming Calendar']
      }
    ]
  },
  {
    id: 'airport-gate-cortisol',
    slug: 'airport-gate-cortisol',
    title: 'THE ZERO-CORTISOL AIRPORT GATE',
    tagline: 'Aviation Terminal Experience Architecture',
    provocation: 'What if airport departure gates lowered nervous system arousal instead of spiking it?',
    categoryTag: 'INFRASTRUCTURE & SPATIAL',
    industry: 'Aviation & Transit',
    matchScore: 96,
    year: '2026',
    maturity: 'Concept Architecture',
    badge: 'S ORIGINAL',
    gradientTheme: 'from-stone-800/80 via-stone-900 to-black',
    imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1800&auto=format&fit=crop',
    synopsis:
      'Replacing blaring PA speakers and plastic row seating with biophilic acoustic pods, ambient visual boarding queues, and warm circadian illumination.',
    theBreakthrough:
      'Removes gate lice crowding and boarding anxiety through private acoustic micro-alcoves and subtle visual color shifts.',
    whyItMatters:
      'Transit anxiety triggers autonomic stress; airports that calm passengers experience +42% higher concession retail spending.',
    frameworkPoints: [
      'Elimination of loud acoustic gate announcements in favor of haptic and directional ultrasonic chimes.',
      'Modular ergonomic lounge furniture featuring acoustic felt surrounds and wireless inductive power.',
      'Color-calibrated departure portals reducing gate crowding by 60%.'
    ],
    metrics: [
      { label: 'Gate Crowding', value: '-62% Congestion' },
      { label: 'Acoustic Decibels', value: '-18 dB Quiet' },
      { label: 'Retail Spend', value: '+42% Lift' }
    ],
    episodes: [
      {
        episodeNumber: 1,
        title: 'Deconstructing Gate Stress',
        duration: 'Spatial Audit',
        description: 'The psychological triggers of group boarding calls and auditory overload in terminals.',
        keyDeliverables: ['Acoustic Decibel Heatmap', 'Crowd Flow Simulation']
      },
      {
        episodeNumber: 2,
        title: 'The Biophilic Pod Architecture',
        duration: 'Design Spec',
        description: 'Curved timber pods, indoor air purification, and directional ambient gate lighting.',
        keyDeliverables: ['Modular Seating Specs', 'Silent Boarding UX System']
      }
    ]
  },
  {
    id: 'hair-salon-sanctuary',
    slug: 'hair-salon-sanctuary',
    title: 'THE QUIET HAIR SALON SANCTUARY',
    tagline: 'Service Ritual & Acoustic Redesign',
    provocation: 'What if getting your hair done was treated as a sensory reset rather than noisy small talk?',
    categoryTag: 'SERVICE DESIGN',
    industry: 'Wellness & Beauty',
    matchScore: 94,
    year: '2026',
    maturity: 'Concept Architecture',
    badge: 'S ORIGINAL',
    gradientTheme: 'from-amber-950/60 via-stone-900 to-black',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1800&auto=format&fit=crop',
    synopsis:
      'A silent salon model featuring private Japanese washing chambers, noise-cancelling acoustic baffles, tactile consultation cards, and bespoke aromatherapy scalp therapies.',
    theBreakthrough:
      'Decouples salon services from forced chatter, converting appointments into restorative meditation rituals.',
    whyItMatters:
      '68% of high-end salon clients report conversational exhaustion; quiet sanctuary salons enjoy 92% rebooking rates and higher ticket sizes.',
    frameworkPoints: [
      'Visual preference cards allowing clients to request pure silence, music, or consultation.',
      'Head spa washing chambers with warm waterfall rinses and low-lux amber backlighting.',
      'Private acoustic curtain dividers separating styling stations.'
    ],
    metrics: [
      { label: 'Client Rebooking', value: '92% Retention' },
      { label: 'Average Ticket', value: '+$85 Premium' },
      { label: 'Format', value: 'Private Sanctuary' }
    ],
    episodes: [
      {
        episodeNumber: 1,
        title: 'The Silent Consultation',
        duration: 'Service Ritual',
        description: 'Designing non-verbal guest preference signaling and sensory consultation cards.',
        keyDeliverables: ['Guest Ritual Playbook', 'Acoustic Layout Plan']
      }
    ]
  },
  {
    id: 'laundromat-third-place',
    slug: 'laundromat-third-place',
    title: 'THE SOCIAL LAUNDROMAT & PARLOR',
    tagline: 'Urban Neighborhood Third Place',
    provocation: 'What if waiting for laundry was the highlight of your Sunday neighborhood routine?',
    categoryTag: 'URBAN INTERVENTION',
    industry: 'Neighborhood Spaces',
    matchScore: 95,
    year: '2026',
    maturity: 'Concept Architecture',
    badge: 'S ORIGINAL',
    gradientTheme: 'from-amber-950/50 via-stone-900 to-black',
    imageUrl: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1800&auto=format&fit=crop',
    synopsis:
      'Combining high-efficiency quiet laundry machines with third-wave pour-over coffee, vinyl listening stations, natural wines, and lush indoor botanical seating.',
    theBreakthrough:
      'Transforms the most depressing urban chore into a thriving neighborhood cultural hangout.',
    whyItMatters:
      'Apartment dwellers crave authentic connection in their immediate walkable radius without corporate pretense.',
    frameworkPoints: [
      'Acoustic isolation dampening machine vibration into smooth rhythmic white noise.',
      'Seamless mobile notifications alerting guests when wash cycles finish while they sip wine.',
      'Communal folding tables crafted from polished butcher block with reading lamps.'
    ],
    metrics: [
      { label: 'Space Utilization', value: '94% Peak Hours' },
      { label: 'Ancillary F&B', value: '55% of Revenue' },
      { label: 'Neighborhood NPS', value: '+88 Score' }
    ],
    episodes: [
      {
        episodeNumber: 1,
        title: 'Chore to Ritual',
        duration: 'Venture Blueprint',
        description: 'Space planning, acoustic vibration dampening, and specialty coffee integration.',
        keyDeliverables: ['Acoustic Baffle Engineering', 'F&B Menu Matrix']
      }
    ]
  }
];

// Row 2: Hospitality Is Just the Beginning
export const HOSPITALITY_BEGINNING_PROJECTS: PortfolioProject[] = [
  {
    id: 'cinema-hotel',
    slug: 'cinema-hotel',
    title: 'THE HOTEL OF 35MM CINEMA',
    tagline: 'Experiential Cinephile Hospitality',
    provocation: 'What if every hotel room was an acoustically tuned private movie theater?',
    categoryTag: 'CINEMATIC HOSPITALITY',
    industry: 'Hospitality & Film',
    matchScore: 98,
    year: '2026',
    maturity: 'Concept Architecture',
    badge: 'S ORIGINAL',
    gradientTheme: 'from-red-950/70 via-stone-900 to-black',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1800&auto=format&fit=crop',
    synopsis:
      'A 30-room hotel curated around cinema history: 4K laser projection beds, Dolby Atmos acoustic velvet walls, archived 35mm film reels, and late-night themed room-service concessions.',
    theBreakthrough:
      'Transforms in-room hotel television from an ignored afterthought into the primary reason for guest booking.',
    whyItMatters:
      'Standard hotel media is broken; travelers crave deep theatrical absorption paired with vintage cocktail craft.',
    frameworkPoints: [
      'Custom acoustic insulation between suites achieving STC 65 studio ratings.',
      'Curated physical film library and digital boutique streaming selections with director commentary.',
      'Nightly concession cart serving artisanal brown-butter truffle popcorn and crafted negronis.'
    ],
    metrics: [
      { label: 'ADR Premium', value: '+$190 vs Comp' },
      { label: 'Weekend Occupancy', value: '98% Steady' },
      { label: 'Press & Media', value: 'Viral Reach' }
    ],
    episodes: [
      {
        episodeNumber: 1,
        title: 'The Theatrical Bedframe',
        duration: 'Hardware Spec',
        description: 'Engineering ultra-short-throw 4K projection into custom upholstered acoustic headboards.',
        keyDeliverables: ['Audiovisual Hardware Spec', 'Acoustic Wall Detail']
      },
      {
        episodeNumber: 2,
        title: 'The Director’s Turn-Down',
        duration: 'F&B Concept',
        description: 'Late-night vintage theater candy carts, bespoke cocktails, and curated 16mm short film reels.',
        keyDeliverables: ['Concessions Menu', 'Film Curatorial Guide']
      }
    ]
  },
  {
    id: 'no-menu-restaurant',
    slug: 'no-menu-restaurant',
    title: 'THE RESTAURANT WITH NO MENU',
    tagline: 'Psychological Dining Experience',
    provocation: 'What if dinner began with three questions instead of a printed menu?',
    categoryTag: 'CULINARY EXPERIENCE',
    industry: 'Gastronomy & Psychology',
    matchScore: 97,
    year: '2026',
    maturity: 'Concept Architecture',
    badge: 'S ORIGINAL',
    gradientTheme: 'from-amber-950/70 via-stone-900 to-black',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1800&auto=format&fit=crop',
    synopsis:
      'An intimate 12-seat counter where chefs interview diners about memory, mood, and sensory desires to improvise a custom 7-course tasting on the spot.',
    theBreakthrough:
      'Removes the anxiety of ordering while creating spontaneous, unrepeatable culinary theater.',
    whyItMatters:
      'Fixed tasting menus have become formulaic; true luxury is bespoke empathy executed at the highest culinary standard.',
    frameworkPoints: [
      'Rapid 3-minute intake conversation assessing appetite, nostalgia, and flavor inclinations.',
      'Mise-en-place pantry organized by acidity, umami, crunch, and temperature rather than dishes.',
      'Handwritten culinary keepsake card detailing what was cooked and why.'
    ],
    metrics: [
      { label: 'Guest Capacity', value: '24 Covers/Night' },
      { label: 'Beverage Pairing', value: '95% Take-rate' },
      { label: 'Booking Waitlist', value: '4 Months' }
    ],
    episodes: [
      {
        episodeNumber: 1,
        title: 'The Intake Interview',
        duration: 'Service Design',
        description: 'How to ask questions that reveal subconscious cravings without sounding clinical.',
        keyDeliverables: ['Host Dialogue Script', 'Pantry Matrix Diagram']
      }
    ]
  },
  {
    id: 'circadian-hotel',
    slug: 'circadian-hotel',
    title: 'THE CIRCADIAN SLEEP SANCTUARY',
    tagline: 'Neurobiology-Driven Hospitality',
    provocation: 'What if a hotel stay reset your cellular clock and healed your sleep debt in 48 hours?',
    categoryTag: 'WELLNESS HOSPITALITY',
    industry: 'Sleep Science & Hotels',
    matchScore: 99,
    year: '2026',
    maturity: 'Concept Architecture',
    badge: 'S ORIGINAL',
    gradientTheme: 'from-sky-950/70 via-stone-900 to-black',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1800&auto=format&fit=crop',
    synopsis:
      'Biophilic cabins designed with medical-grade light frequencies, organic copper grounding sheets, cold plunge suites, and zero blue-light twilight protocols.',
    theBreakthrough:
      'Leverages chronobiology to turn standard hotel sleep into measurable physiological recovery.',
    whyItMatters:
      '73% of travelers report worse sleep in hotels than at home; solving the sleep equation creates fierce guest loyalty.',
    frameworkPoints: [
      'Automated sunrise simulation waking guests with gradual 1800K to 4500K spectrum light.',
      'Temperature-regulated mattress cooling dropping to 64°F during deep REM stages.',
      'Soundproofed acoustic envelope eliminating high-frequency city chatter.'
    ],
    metrics: [
      { label: 'Deep REM Sleep', value: '+41% Measured' },
      { label: 'Repeat Booking', value: '78% Year 1' },
      { label: 'Average Stay', value: '3.6 Nights' }
    ],
    episodes: [
      {
        episodeNumber: 1,
        title: 'The Sleep Architecture',
        duration: 'Lighting & HVAC',
        description: 'Engineering temperature drop curves and spectrum lighting into room controls.',
        keyDeliverables: ['Circadian Light Curve', 'HVAC Thermal Profile']
      }
    ]
  },
  {
    id: 'night-train-sabbatical',
    slug: 'night-train-sabbatical',
    title: 'THE CREATIVE SLEEPER TRAIN',
    tagline: 'Slow Mobility & Creative Residency',
    provocation: 'What if the overnight sleeper train was reimagined as a moving creative residency?',
    categoryTag: 'MOBILITY & CULTURE',
    industry: 'Rail & Creative Spaces',
    matchScore: 96,
    year: '2026',
    maturity: 'Concept Architecture',
    badge: 'S ORIGINAL',
    gradientTheme: 'from-amber-950/70 via-stone-900 to-black',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    backdropUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1800&auto=format&fit=crop',
    synopsis:
      'A luxury sleeper train route featuring quiet writing car compartments, observation dome salons, espresso bars, and dark landscape observation cabins.',
    theBreakthrough:
      'Turns travel transit time into concentrated creative focus through rhythmic train motion and distraction-free luxury.',
    whyItMatters:
      'Flying is an ordeal; sleeper rail offers romanticism, sustainability, and deep psychological spaciousness.',
    frameworkPoints: [
      'Mahogany-lined micro-studios with drafting desks and panoramic landscape windows.',
      'Communal dining carriage serving seasonal regionally sourced breakfasts and dinners.',
      'Zero-Wi-Fi quiet cars designed for deep reading, writing, and contemplation.'
    ],
    metrics: [
      { label: 'Passenger Rating', value: '4.98 / 5.0' },
      { label: 'Carbon Saved', value: '-85% vs Flight' },
      { label: 'Booking Demand', value: 'Sold Out 6 Mo' }
    ],
    episodes: [
      {
        episodeNumber: 1,
        title: 'The Rail Studio Spec',
        duration: 'Carriage Layout',
        description: 'Converting vintage sleeper carriages into modern writing and contemplation cabins.',
        keyDeliverables: ['Carriage Floorplan', 'Acoustic Suspension Design']
      }
    ]
  }
];

export const ALL_PROJECTS: PortfolioProject[] = [
  CELESTIAL_HOSPITALITY_PROJECT,
  ...PLACES_REDESIGN_PROJECTS
];

export const PORTFOLIO_ROWS: PortfolioCategoryRow[] = [
  {
    id: 'places-redesign',
    title: "Places I'd Love to Redesign",
    subtitle: 'Physical-to-digital spatial transformations and service architecture',
    projects: PLACES_REDESIGN_PROJECTS
  }
];
