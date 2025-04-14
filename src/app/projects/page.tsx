import Image from 'next/image';
import Link from 'next/link';
import './page.css';
import { allProjects } from '../../utils/projectList';
import { Button } from '../../components/ui/button';

export const metadata = {
  title: "NextEp | Projects - Digital Services, AI & Web Solutions",
  alternates: {
    canonical: "https://nextep.solutions/projects",
  },
};

export default function ProjectsPage() {

  return (
    <div className="projects-container">
      <div className='flex flex-col gap-[12px] mb-[48px]'>
        <div className="mobile-content-appearance">
          <div className="mobile-title-appearance">
            <p className="projects-title">Our Projects</p>
            <h2 className="projects-subtitle">Digital Services, AI & Web Solutions</h2>
          </div>

        </div>
        <div className="desktop-content-appearance">
          <div className="desktop-title-appearance">
            <h1 className="projects-title">Our Projects - Digital Services, AI & Web Solutions</h1>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <p className="text-[16px] text-tertiaryProject">
              Explore our diverse range of projects showcasing our expertise in digital services and web solutions.
            </p>
          </div>
        </div>
      </div>

      {allProjects.map((section) => (
        <div key={section.section} className="section-container">

          <h2 className="section-title">{section.section}</h2>
          <p className="section-description">{section.sectionDescription}</p>
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
                        <span key={index} className="project-tag"><a href={(project.resourceLinks as Record<string, string>)[slug]}>{slug}</a></span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`${project.link}`}
                    className="project-link"
                    aria-label={`View details about ${project.name} project`}
                  >
                    <Button variant="projectSelected">
                      View this Project
                    </Button>
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