import SilhouetteMainImage from "../../public/projects/silhouette/silhouette-main.png"
import MasteryMainImage from "../../public/projects/mastery/mainImage.png"
import TradingAnalystMainImage from "../../public/projects/tradingAnalyst/mainImage.png"
import QuotieMainImage from "../../public/projects/quotie/mainImage.png"
import BiMainImage from "../../public/projects/biAnalysis/mainImage.jpg"
import IncidentManagerMainImage from "../../public/projects/incidentManager/mainImage.png"
import InsightPediaMainImage from "../../public/projects/insightpedia/mainImage.jpeg"
import RAGMainImage from "../../public/projects/RAG/mainImage.png"

// These would typically come from your backend or CMS
const webProjects = [
  {
    id: 1,
    name: "Silhouette",
    description: "Modern online store with payment integration and inventory management",
    image: SilhouetteMainImage,
    slugs: ["react", "nodejs", "postgresql"],
    resourceLinks: {
      react: "https://react.dev",
      nodejs: "https://nodejs.org",
      postgresql: "https://www.postgresql.org"
    },
    link: "/projects/silhouette",
    slug: "silhouette",
  },
  {
    id: 2,
    name: "Mastery",
    description: "The platform offers interactive chapter-based learning with quizzes",
    image: MasteryMainImage,
    slugs: ["react", "nodejs", "postgresql", "strapi"],
    resourceLinks: {
      react: "https://react.dev",
      nodejs: "https://nodejs.org",
      postgresql: "https://www.postgresql.org",
      strapi: "https://strapi.io"
    },
    link: "/projects/mastery",
    slug: "mastery"
  },
];

const macosProjects = [ 
  {
    id: 4,
    name: "Crypto Trading Strategy Analyst",
    description: "The application allows users to create and backtest trading algorithms",
    image: TradingAnalystMainImage,
    slugs: ["swift", "vapor", "postgresql"],
    resourceLinks: {
      swift: "https://swift.org",
      vapor: "https://vapor.codes",
      postgresql: "https://www.postgresql.org"
    },
    link: "/projects/trading",
    slug: "trading"
  },
];

const mobileProjects = [
  {
    id: 5,
    name: "Quotie - Quotes App",
    description: "Mobile app for getting inspired by quotes and sharing them",
    image: QuotieMainImage,
    slugs: ["swift", "vapor", "postgresql"],
    resourceLinks: {
      swift: "https://swift.org",
      vapor: "https://vapor.codes",
      postgresql: "https://www.postgresql.org"
    },
    link: "/projects/quotie",
    slug: "quotie"
  },
];

const backendProjects = [
  {
    id: 8,
    name: "AI Incident Manager",
    description: "AI-powered incident management system integrated into JIRA",
    image: IncidentManagerMainImage,
    slugs: ["python", "llm", "jira"],
    resourceLinks: {
      python: "https://python.org",
      llm: "https://openai.com",
      jira: "https://www.atlassian.com/software/jira"
    },
    link: "/projects/ai-incident-manager",
    slug: "ai-incident-manager"
  },
  {
    id: 9,
    name: "AI DB Analyzer", 
    description: "Database analysis tool with AI capabilities for beginners",
    image: BiMainImage,
    slugs: ["python", "llm", "postgresql"],
    resourceLinks: {
      python: "https://python.org",
      llm: "https://openai.com",
      postgresql: "https://www.postgresql.org"
    },
    link: "/projects/ai-db-analyzer",
    slug: "ai-db-analyzer"
  },
  {
    id: 11,
    name: "InsightPedia",
    description: "App that searches Wikipedia and provides AI-generated summaries for topics",
    image: InsightPediaMainImage,
    slugs: ["python", "llm", "wikipedia api"],
    resourceLinks: {
      python: "https://python.org",
      llm: "https://openai.com",
      "wikipedia api": "https://www.mediawiki.org/wiki/API:Main_page"
    },
    link: "/projects/insightpedia",
    slug: "insightpedia"
  },
  {
    id: 12,
    name: "Legal RAG System",
    description: "Retrieval-Augmented Generation system for legal document analysis",
    image: RAGMainImage,
    slugs: ["python", "llm", "qdrant"],
    resourceLinks: {
      python: "https://python.org",
      llm: "https://openai.com",
      qdrant: "https://qdrant.tech"
    },
    link: "/projects/legal-rag",
    slug: "legal-rag"
  }
];

// Combine all projects into one array with sections
export const allProjects = [
  { section: "Backend Development", projects: backendProjects },
  { section: "Web Development", projects: webProjects },
  { section: "macOS Development", projects: macosProjects},
  { section: "Mobile Development", projects: mobileProjects }
];
