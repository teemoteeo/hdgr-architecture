export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  type: string;
  status?: string;
  collaboration?: string[];
  description: string;
  hero: string;
  images: string[];
  area?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "nepal-school",
    title: "NEPAL SCHOOL",
    subtitle: "Earthquake & Flood Resistant Modular School",
    year: "2025",
    location: "Nepal, Multiple Locations",
    type: "Educational",
    status: "1ST PLACE - Under Construction",
    collaboration: ["Emilya Skipar", "Nina Dobroczyńska"],
    description: "Award-winning modular school prototype for rural Nepal. Designed to withstand floods and earthquakes using local materials and simple construction. Features expandable 3.75x3.75m grid system with interchangeable wall panels of brick, stone, compressed earth, and bamboo. Elevated 60cm on stone/concrete plinths for flood protection. Lightweight metal and polycarbonate roof independent from walls for seismic resilience. Central courtyard promotes integration, with vegetable garden for educational and nutritional purposes.",
    hero: "/images/nepal-school-hero.jpg",
    images: [
      "/images/nepal-school-1.jpg",
      "/images/nepal-school-2.jpg",
      "/images/nepal-school-3.jpg",
    ],
    area: "210m² (Phase 1)",
    tags: ["competition winner", "modular", "sustainable", "under construction"],
  },
  {
    slug: "casa-brodna",
    title: "DOM JEDNORODZINNY",
    subtitle: "Year-Round Garden Contact Family Home",
    year: "2024",
    location: "Bródno, Warsaw, Poland",
    type: "Residential",
    collaboration: [],
    description: "Single-family house combining privacy with natural light. High windows circling the building placed above eye level ensure intimacy while flooding interiors with daylight. Constructed from modular hemp concrete walls for energy efficiency and year-round comfort. Features three winter gardens serving as warm enclosed spaces in winter and open zones in summer. Rectangular form inspired by traditional woodsheds from Bródno and Targówek heritage, maximizing plot length for outdoor living.",
    hero: "/images/casa-brodna-hero.jpg",
    images: [
      "/images/casa-brodna-1.jpg",
      "/images/casa-brodna-2.jpg",
    ],
    tags: ["residential", "sustainable", "hemp concrete"],
  },
  {
    slug: "reuse-abbey",
    title: "REUSE THE ABBEY",
    subtitle: "Meditation Center in Benedictine Ruins",
    year: "2025",
    location: "Pozzaglia Sabina, Italy",
    type: "Cultural",
    collaboration: ["Nina Dobroczyńska", "Julia Świstuniuk"],
    description: "Adaptive reuse of 11th-century Benedictine abbey ruins S. Maria del Piano into meditation center for yoga, workshops, and artistic events. Design based on grid derived from existing ruin proportions. Ruins preserved as-is, complemented by light timber structures matching original rhythm. Modular construction facilitates assembly of naves, pavilions, and canopies. Main nave with rectangular skylight serves as communal space for performances and group meditation. Transept and presbytery with circular skylight for individual meditation. Yoga pavilion overlooks greenery, service pavilion houses kitchen, dining, and bathrooms.",
    hero: "/images/reuse-abbey-hero.jpg",
    images: [
      "/images/reuse-abbey-1.jpg",
      "/images/reuse-abbey-2.jpg",
      "/images/reuse-abbey-3.jpg",
    ],
    tags: ["adaptive reuse", "cultural", "timber construction"],
  },
  {
    slug: "fasanenplatz",
    title: "FASANENPLATZ URBAN WORKSHOPS",
    subtitle: "Berlin-Warsaw Student Exchange",
    year: "2025",
    location: "Fasanenplatz, Berlin, Germany",
    type: "Urban Design",
    collaboration: ["TU Berlin Students"],
    description: "Urban intervention for central Berlin square developed in collaboration with TU Berlin students. Three main interventions: transforming old parking structure into restaurant/bar headquarters to free park space; extending university building wings to create intimate student patios with added educational spaces; relocating stage to lowest topographic point surrounded by water feature. Water addresses frequent flooding while improving acoustics. Design preserves existing functions while enhancing spatial quality and accessibility.",
    hero: "/images/fasanenplatz-hero.jpg",
    images: [
      "/images/fasanenplatz-1.jpg",
      "/images/fasanenplatz-2.jpg",
    ],
    tags: ["urban design", "public space", "collaboration"],
  },
  {
    slug: "reuse-temple",
    title: "REUSE THE TEMPLE",
    subtitle: "Open-Air Theater in Unfinished Temple",
    year: "2025",
    location: "Ponzano di Fermo, Italy",
    type: "Cultural",
    status: "Competition Entry",
    collaboration: ["Nina Dobroczyńska", "Marta Benetti"],
    description: "Transformation of unfinished Madonna delle Cataste temple (begun 1921) into open-air theater. Design based on original temple's geometric lines. Stage positioned before ruins which serve as backdrop or active extension. Plaza gently lowered for improved sightlines and acoustics. New elements - brick platforms and corten steel pergola - are delicate and functional. Pergola connects stages and provides communal space for gathering and shade. Varied paving and vegetation naturally define circulation. Smaller intimate stage at plot's end. Pergola opens to wild nature and cultivated fields, creating dual backdrops.",
    hero: "/images/reuse-temple-hero.jpg",
    images: [
      "/images/reuse-temple-1.jpg",
      "/images/reuse-temple-2.jpg",
    ],
    tags: ["competition", "adaptive reuse", "theater", "corten steel"],
  },
];
