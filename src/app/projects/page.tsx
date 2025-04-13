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
              <h1 className="projects-title">Our Projects</h1>
              <h2 className="projects-subtitle">Digital Services, AI & Web Solutions</h2>
            </div>
            <p className="word-wrap text-center">
              Explore our diverse range of projects showcasing our expertise in digital services and web solutions.
            </p>
          </div>
          <div className="desktop-content-appearance">
            <div className="desktop-title-appearance">
              <h1 className="projects-title">Our Projects - Digital Services, AI & Web Solutions</h1>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <p className="word-wrap text-left">
                Explore our diverse range of projects showcasing our expertise in digital services and web solutions.
              </p>
              <p className="word-wrap">
                View project details to learn more about our approach, technologies used, and the results we've achieved. We are dedicated to providing exceptional digital services and web solutions that drive business growth and success.
              </p>
            </div>
          </div>
        </div>

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