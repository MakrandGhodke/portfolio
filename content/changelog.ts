export interface ChangelogEntry {
  id: string;
  date: string;
  project: "DigiGuide" | "SpendWise" | "Portfolio";
  projectSlug: "digiguide" | "spendwise" | "portfolio";
  title: string;
  summary: string;
  tags: string[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    id: "dg-05",
    date: "2026-10-01",
    project: "DigiGuide",
    projectSlug: "digiguide",
    title: "Docker containerization on Render & 38-test pytest CI suite",
    summary:
      "Containerized FastAPI + CLIP backend with pre-cached model weights to prevent OOM on Render. Wrote 38 mocked pytest tests covering security regressions (path traversal, invalid upload 500s) and set up automated GitHub Actions CI.",
    tags: ["Docker", "Render", "pytest", "CI/CD", "FastAPI"],
  },
  {
    id: "dg-04",
    date: "2026-03-28",
    project: "DigiGuide",
    projectSlug: "digiguide",
    title: "Expanded landmark index to 11 Darmstadt sites & Haversine fallback",
    summary:
      "Added reference embeddings for Mathildenhöhe, Residenzschloss, Waldspirale, and 8 more locations. Integrated Haversine proximity fallback for candidate suggestions when visual confidence is below 0.85.",
    tags: ["FAISS", "CLIP", "Geospatial", "Computer Vision"],
  },
  {
    id: "sw-03",
    date: "2026-03-15",
    project: "SpendWise",
    projectSlug: "spendwise",
    title: "Vercel production deployment and PWA manifest install test",
    summary:
      "Shipped production build to Vercel with web app manifest and service worker configuration. Verified standalone installation and offline shell caching on iOS and Android.",
    tags: ["Next.js", "PWA", "Vercel", "Production"],
  },
  {
    id: "sw-02",
    date: "2026-03-02",
    project: "SpendWise",
    projectSlug: "spendwise",
    title: "Row Level Security (RLS) policies & Supabase Auth integration",
    summary:
      "Implemented multi-tenant tenant isolation in PostgreSQL using Supabase RLS. Enforced strict user-level access across all transaction, budget, and category tables.",
    tags: ["PostgreSQL", "Supabase", "Security", "Auth"],
  },
  {
    id: "dg-03",
    date: "2026-02-12",
    project: "DigiGuide",
    projectSlug: "digiguide",
    title: "RGB channel preprocessing fix: 30% → 100% accuracy on initial classes",
    summary:
      "Identified that input images were not converted to RGB prior to tensor transformation. Rebuilding the image preprocessing pipeline resolved color inversion artifacts and boosted target class recognition to 100% on the 5 baseline classes.",
    tags: ["Bugfix", "PyTorch", "Pillow", "Inference"],
  },
  {
    id: "dg-02",
    date: "2026-01-20",
    project: "DigiGuide",
    projectSlug: "digiguide",
    title: "FastAPI inference service & EXIF orientation normalization",
    summary:
      "Built the POST /predict endpoint with multi-angle rotation evaluation (0°, 90°, 180°, 270°) to handle varied smartphone capture orientations robustly.",
    tags: ["FastAPI", "Python", "Inference"],
  },
  {
    id: "dg-01",
    date: "2025-11-10",
    project: "DigiGuide",
    projectSlug: "digiguide",
    title: "Initial vector search prototype with CLIP & FAISS IndexFlatL2",
    summary:
      "Replaced proposed classification architectures with zero-shot semantic retrieval via OpenAI CLIP (clip-vit-base-patch32) and FAISS vector indexing.",
    tags: ["Architecture", "CLIP", "FAISS", "Embeddings"],
  },
];

export function getLatestChangelogEntries(count = 3): ChangelogEntry[] {
  return changelogEntries.slice(0, count);
}
