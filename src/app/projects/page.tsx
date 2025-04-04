import Image from 'next/image';
import Link from 'next/link';
import './page.css';
import { allProjects } from '../../utils/projectList';
import { Button } from '../../components/ui/button';

export default function ProjectsPage() {

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
                  <Image src={project.image} alt={project.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className="project-content">
                  <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.slugs.map((slug, index) => (
                        <span key={index} className="project-tag">{slug}</span>
                      ))}
                    </div>
                  </div>
                  <Link href={`${project.link}`} className="project-link">
                    <Button variant="projectSelected">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}