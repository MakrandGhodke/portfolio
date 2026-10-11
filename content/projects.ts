export interface ProjectPipelineStep {
  step: number;
  title: string;
  description: string;
  technicalDetails: string;
}

export interface ProjectAccuracyMetric {
  beforeValue: number;
  afterValue: number;
  label: string;
  metricName: string;
  explanation: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  oneLiner: string;
  context: string;
  role?: string;
  status: "Active" | "Shipped" | "Paused";
  featured: boolean;
  stack: string[];
  links: {
    github: string;
    live?: string;
    demoVideo?: string;
    demoPoster?: string;
  };
  overview: {
    problem: string;
    approach?: string;
    architecture?: string;
  };
  metrics?: ProjectAccuracyMetric;
  pipeline?: ProjectPipelineStep[];
  features?: string[];
  coverage?: string[];
  highlights?: string[];
  improvements?: string[];
  roadmap?: string[];
}

export const projects: ProjectData[] = [
  {
    slug: "digiguide",
    title: "DigiGuide",
    tagline: "AI landmark recognition and audio tour guide for Darmstadt.",
    oneLiner:
      "Point your phone at a landmark; get its history, a spoken guide and live weather.",
    context:
      "TU Darmstadt INNODATA team project (4 people), Oct 2025 – Feb 2026. Ongoing development continues on the personal repo.",
    role: "Co-developed the POST /predict inference endpoint; led data acquisition and the RGB preprocessing pipeline. Team of 4.",
    status: "Active",
    featured: true,
    stack: [
      "Flutter",
      "Dart",
      "FastAPI",
      "PyTorch",
      "CLIP",
      "FAISS",
      "Pillow",
      "SQLite",
      "Open-Meteo",
    ],
    links: {
      github: "https://github.com/MakrandGhodke/digiguide",
      demoVideo: "", // Placeholder, to be populated later
      demoPoster: "", // Placeholder
    },
    overview: {
      problem:
        "Tourists in a city walk past landmarks without context. Generic image search and basic classifiers are unreliable on phone photos with variable angles, lighting, and rotations.",
      approach:
        "Instead of training a classifier, photos are turned into 512-dim semantic embeddings with OpenAI CLIP (clip-vit-base-patch32), L2-normalised, and matched against a FAISS vector index (IndexFlatL2) built from a reference photo set. Distance is converted to cosine similarity; a match is confirmed at similarity ≥ 0.85. Adding a landmark means adding photos and rebuilding the index, with no retraining.",
    },
    metrics: {
      beforeValue: 30,
      afterValue: 100,
      label: "5 initial classes",
      metricName: "Classification Accuracy",
      explanation:
        "Early accuracy was 30% across the 5 initial target classes. I traced it to the image preprocessing pipeline: images weren't converted to RGB before CLIP. Fixing it and rebuilding the pipeline took accuracy from 30% to 100% on those 5 classes.",
    },
    pipeline: [
      {
        step: 1,
        title: "Capture",
        description: "Flutter camera or gallery input",
        technicalDetails: "Raw image stream + GPS coordinates extracted via Geolocator plugin.",
      },
      {
        step: 2,
        title: "Transport",
        description: "Multipart HTTP POST",
        technicalDetails: "Payload dispatched to FastAPI backend endpoint POST /predict.",
      },
      {
        step: 3,
        title: "Rotation Fix",
        description: "Orientation correction & multi-angle eval",
        technicalDetails: "Pillow EXIF transpose and evaluation evaluated at 0°, 90°, 180°, 270°.",
      },
      {
        step: 4,
        title: "Embedding",
        description: "CLIP Vision Transformer extraction",
        technicalDetails: "clip-vit-base-patch32 produces a 512-dimensional L2-normalised vector.",
      },
      {
        step: 5,
        title: "Vector Search",
        description: "FAISS top-k candidate lookup",
        technicalDetails: "IndexFlatL2 distance converted directly to cosine similarity.",
      },
      {
        step: 6,
        title: "Validation",
        description: "Similarity gating & GPS fallback",
        technicalDetails: "Similarity threshold ≥ 0.85; if below threshold and GPS is available, Haversine formula ranks landmarks within 50 km as suggestions.",
      },
      {
        step: 7,
        title: "Narration",
        description: "Contextual tour synthesis",
        technicalDetails: "Assembles curated historical dossier, fun facts, live Open-Meteo weather, and text-to-speech audio guide.",
      },
    ],
    features: [
      "Proximity audio tour: auto-narration triggered within 100 m of a known landmark.",
      "Curated historical dossiers with architect profiles, trivia, and visiting times.",
      "Live Open-Meteo weather integration with dynamic visit recommendations.",
      "Explore by category: Urban architecture, Historical monuments, and Nature parks.",
      "Offline-first favourites bookmarking and scan history stored in SQLite.",
      "Dual Material 3 light/dark UI with smooth transitions.",
      "Secure JWT authentication with bcrypt password hashing on FastAPI backend.",
    ],
    coverage: [
      "Mathildenhöhe (UNESCO World Heritage)",
      "Residenzschloss Darmstadt",
      "Waldspirale (Hundertwasser Architecture)",
      "Darmstadtium Science & Congress Centre",
      "Staatstheater Darmstadt",
      "Plus 6 additional Darmstadt landmarks (11 total)",
    ],
    roadmap: [
      "Interactive map view with GPS route planning",
      "German & English bilingual audio narration",
      "Offline vector caching on-device",
      "Hybrid visual + GPS multi-modal scoring",
      "Expansion to Frankfurt and Mainz landmark registries",
    ],
  },
  {
    slug: "spendwise",
    title: "SpendWise",
    tagline: "Household finance tracker, installable as a PWA.",
    oneLiner:
      "Household budgeting app designed to be fast, shared by a household, and strictly isolated per user.",
    context: "Personal project, Mar 2026 – May 2026, built solo.",
    status: "Shipped",
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    links: {
      live: "https://fintrack-black.vercel.app/",
      github: "https://github.com/MakrandGhodke/SpendWise",
      demoVideo: "", // Placeholder
      demoPoster: "", // Placeholder
    },
    overview: {
      problem:
        "Household budgeting apps are either bloated with unnecessary upsells or lack privacy. I needed a responsive system that is quick to use, supports shared household insights, and guarantees strict per-user data isolation.",
      architecture:
        "Multi-tenant PostgreSQL schema with Row Level Security (RLS) for per-user data isolation, Supabase Auth for session tokens, and Next.js App Router API endpoints for transaction CRUD with filtering, sorting, and pagination.",
    },
    highlights: [
      "6-month interactive analytics dashboard with spending velocity graphs.",
      "Fast transaction CRUD with server-side filtering, sorting, and pagination.",
      "Installable Progressive Web App (PWA) tested on iOS Safari and Android Chrome.",
      "Edge-deployed on Vercel with serverless data fetching and optimized caching.",
      "Zero telemetry trackers or third-party ad SDKs.",
    ],
    improvements: [
      "Recurring expense scheduling and automated rule categorization",
      "Budget threshold push notifications for monthly limits",
      "Multi-currency exchange rate sync via European Central Bank API",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
