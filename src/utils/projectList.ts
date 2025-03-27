import SilhouetteMainImage from "../../public/projects/silhouette/silhouette-main.png"
import MasteryMainImage from "../../public/projects/mastery/mainImage.png"
import TradingAnalystMainImage from "../../public/projects/tradingAnalyst/mainImage.png"
import QuotieMainImage from "../../public/projects/quotie/mainImage.png"

// These would typically come from your backend or CMS
  const webProjects = [
    {
      id: 1,
      name: "Silhouette",
      description: "Modern online store with payment integration and inventory management",
      image: SilhouetteMainImage,
      slugs: ["react", "nodejs", "postgresql"],
      link: "/projects/silhouette",
      slug: "silhouette",
    },
    {
      id: 2,
      name: "Mastery",
      description: "The platform offers interactive chapter-based learning with quizzes",
      image: MasteryMainImage,
      slugs: ["react", "nodejs", "postgresql", "strapi"],
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
      link: "/projects/quotie",
      slug: "quotie"
    },
  ];

  const backendProjects = [
    {
      id: 8,
      name: "Payment Gateway",
      description: "Secure payment processing system with multi-currency support",
      image: "/placeholder-project.jpg",
      slugs: ["nodejs", "express", "mongodb"],
      link: "/projects/payment-gateway",
      slug: "payment-gateway"
    },
    {
      id: 9,
      name: "CRM System",
      description: "Customer relationship management with analytics dashboard",
      image: "/placeholder-project.jpg",
      slugs: ["python", "django", "postgresql"],
      link: "/projects/crm-system",
      slug: "crm-system"
    },
    {
      id: 10,
      name: "Inventory Management",
      description: "Real-time inventory tracking system with barcode scanning",
      image: "/placeholder-project.jpg",
      slugs: ["java", "spring-boot", "mysql"],
      link: "/projects/inventory-management",
      slug: "inventory-management"
    }
  ];

  // Combine all projects into one array with sections
  export const allProjects = [
    { section: "Web Development", projects: webProjects },
    { section: "macOS Development", projects: macosProjects},
    { section: "Mobile Development", projects: mobileProjects },
    { section: "Backend Development", projects: backendProjects }
  ];
