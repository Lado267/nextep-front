import Image from 'next/image';
import Link from 'next/link';
import './page.css';

export default function ProjectsPage() {
  // These would typically come from your backend or CMS
  const webProjects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Modern online store with payment integration and inventory management",
      image: "/placeholder-project.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "/projects/details"
    },
    {
      id: 2,
      name: "Corporate Website",
      description: "Responsive business website with custom CMS and analytics",
      image: "/placeholder-project.jpg",
      tags: ["Next.js", "Tailwind CSS", "GraphQL"],
      link: "/projects/details"
    },
    {
      id: 3,
      name: "Travel Booking App",
      description: "Full-featured travel booking platform with user accounts",
      image: "/placeholder-project.jpg",
      tags: ["React", "Express", "PostgreSQL"],
      link: "/projects/details"
    },
    {
      id: 4,
      name: "Real Estate Portal",
      description: "Property listing and management system with advanced search",
      image: "/placeholder-project.jpg",
      tags: ["Vue.js", "Django", "Redis"],
      link: "/projects/details"
    }
  ];

  const mobileProjects = [
    {
      id: 5,
      name: "Food Delivery App",
      description: "Mobile app for ordering food with real-time tracking",
      image: "/placeholder-project.jpg",
      tags: ["React Native", "Firebase", "Stripe"],
      link: "/projects/details"
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "Health and fitness monitoring app with social features",
      image: "/placeholder-project.jpg",
      tags: ["Flutter", "Firebase", "REST API"],
      link: "/projects/details"
    },
    {
      id: 7,
      name: "Language Learning App",
      description: "Interactive language learning platform with progress tracking",
      image: "/placeholder-project.jpg",
      tags: ["Swift", "Kotlin", "Node.js"],
      link: "/projects/details"
    }
  ];

  const backendProjects = [
    {
      id: 8,
      name: "Payment Gateway",
      description: "Secure payment processing system with multi-currency support",
      image: "/placeholder-project.jpg",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "/projects/details"
    },
    {
      id: 9,
      name: "CRM System",
      description: "Customer relationship management with analytics dashboard",
      image: "/placeholder-project.jpg",
      tags: ["Python", "Django", "PostgreSQL"],
      link: "/projects/details"
    },
    {
      id: 10,
      name: "Inventory Management",
      description: "Real-time inventory tracking system with barcode scanning",
      image: "/placeholder-project.jpg",
      tags: ["Java", "Spring Boot", "MySQL"],
      link: "/projects/details"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Our Projects</h1>

      <div className="section-container">
        <h2 className="section-title">Web Development</h2>
        <div className="project-scroll">
          {webProjects.map((project) => (
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
                <Link href={project.link} className="project-button">
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <button className="view-all-button">View all web projects</button>
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Mobile Development</h2>
        <div className="project-scroll">
          {mobileProjects.map((project) => (
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
                <Link href={project.link} className="project-button">
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <button className="view-all-button">View all mobile projects</button>
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Backend Development</h2>
        <div className="project-scroll">
          {backendProjects.map((project) => (
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
                <Link href={project.link} className="project-button">
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <button className="view-all-button">View all backend projects</button>
        </div>
      </div>
    </div>
  );
}