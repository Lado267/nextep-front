import Image from 'next/image';
import Link from 'next/link';
import './page.css';
import { projectData } from "../../utils/projectData"

export default function ProjectsPage() {
  // These would typically come from your backend or CMS
  const webProjects = [
    {
      id: 1,
      name: "Silhouette",
      description: "Modern online store with payment integration and inventory management",
      image: "/placeholder-project.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "/projects/details",
      slug: "silhouette"
    },
    {
      id: 2,
      name: "Corporate Website",
      description: "Responsive business website with custom CMS and analytics",
      image: "/placeholder-project.jpg",
      tags: ["Next.js", "Tailwind CSS", "GraphQL"],
      link: "/projects/details",
      slug: "corporate-website"
    },
    {
      id: 3,
      name: "Travel Booking App",
      description: "Full-featured travel booking platform with user accounts",
      image: "/placeholder-project.jpg",
      tags: ["React", "Express", "PostgreSQL"],
      link: "/projects/details",
      slug: "travel-booking-app"
    },
    {
      id: 4,
      name: "Real Estate Portal",
      description: "Property listing and management system with advanced search",
      image: "/placeholder-project.jpg",
      tags: ["Vue.js", "Django", "Redis"],
      link: "/projects/details",
      slug: "real-estate-portal"
    }
  ];

  const mobileProjects = [
    {
      id: 5,
      name: "Food Delivery App",
      description: "Mobile app for ordering food with real-time tracking",
      image: "/placeholder-project.jpg",
      tags: ["React Native", "Firebase", "Stripe"],
      link: "/projects/details",
      slug: "food-delivery-app"
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "Health and fitness monitoring app with social features",
      image: "/placeholder-project.jpg",
      tags: ["Flutter", "Firebase", "REST API"],
      link: "/projects/details",
      slug: "fitness-tracker"
    },
    {
      id: 7,
      name: "Language Learning App",
      description: "Interactive language learning platform with progress tracking",
      image: "/placeholder-project.jpg",
      tags: ["Swift", "Kotlin", "Node.js"],
      link: "/projects/details",
      slug: "language-learning-app"
    }
  ];

  const backendProjects = [
    {
      id: 8,
      name: "Payment Gateway",
      description: "Secure payment processing system with multi-currency support",
      image: "/placeholder-project.jpg",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "/projects/details",
      slug: "payment-gateway"
    },
    {
      id: 9,
      name: "CRM System",
      description: "Customer relationship management with analytics dashboard",
      image: "/placeholder-project.jpg",
      tags: ["Python", "Django", "PostgreSQL"],
      link: "/projects/details",
      slug: "crm-system"
    },
    {
      id: 10,
      name: "Inventory Management",
      description: "Real-time inventory tracking system with barcode scanning",
      image: "/placeholder-project.jpg",
      tags: ["Java", "Spring Boot", "MySQL"],
      link: "/projects/details",
      slug: "inventory-management"
    }
  ];

  // Combine all projects into one array with sections
  const allProjects = [
    { section: "Web Development", projects: webProjects },
    { section: "Mobile Development", projects: mobileProjects },
    { section: "Backend Development", projects: backendProjects }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Our Projects</h1>

      {allProjects.map((section) => (
        <div key={section.section} className="section-container">
          <h2 className="section-title">{section.section}</h2>
          <div className="project-scroll">
            {section.projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <Image src={project.image} alt={project.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <Link href={`${project.link}?slug=${project.slug}`} className="project-button">
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <button className="view-all-button">View all {section.section.toLowerCase()} projects</button>
          </div>
        </div>
      ))}
    </div>
  );
}