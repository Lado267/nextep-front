import SilhouetteMainImage from "../../public/projects/silhouette/silhouette-main.png"
import MasteryMainImage from "../../public/projects/mastery/mainImage.png"

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
      description: "Responsive business website with custom CMS and analytics",
      image: MasteryMainImage,
      slugs: ["nextjs"],
      link: "/projects/mastery",
      slug: "mastery"
    },
    {
      id: 3,
      name: "Travel Booking App",
      description: "Full-featured travel booking platform with user accounts",
      image: "/placeholder-project.jpg",
      slugs: ["react", "express", "postgresql"],
      link: "/projects/travel-booking-app",
      slug: "travel-booking-app"
    },
    {
      id: 4,
      name: "Real Estate Portal",
      description: "Property listing and management system with advanced search",
      image: "/placeholder-project.jpg",
      slugs: ["vuejs", "django", "redis"],
      link: "/projects/real-estate-portal",
      slug: "real-estate-portal"
    }
  ];

  const mobileProjects = [
    {
      id: 5,
      name: "Food Delivery App",
      description: "Mobile app for ordering food with real-time tracking",
      image: "/placeholder-project.jpg",
      slugs: ["react-native", "firebase", "stripe"],
      link: "/projects/food-delivery-app",
      slug: "food-delivery-app"
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "Health and fitness monitoring app with social features",
      image: "/placeholder-project.jpg",
      slugs: ["flutter", "firebase", "rest-api"],
      link: "/projects/fitness-tracker",
      slug: "fitness-tracker"
    },
    {
      id: 7,
      name: "Language Learning App",
      description: "Interactive language learning platform with progress tracking",
      image: "/placeholder-project.jpg",
      slugs: ["swift", "kotlin", "nodejs"],
      link: "/projects/language-learning-app",
      slug: "language-learning-app"
    }
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
    { section: "Mobile Development", projects: mobileProjects },
    { section: "Backend Development", projects: backendProjects }
  ];
