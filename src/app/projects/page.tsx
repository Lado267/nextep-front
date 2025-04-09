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
    <div>
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
      <section className="projects-additional-info">
        <h3>Our Projects - Digital Services and Web Solutions</h3>
        <p className="word-wrap">
          Explore our diverse range of projects showcasing our expertise in digital services and web solutions. At NextEp, we take pride in delivering high-quality projects that meet our clients' unique needs. From website development to custom software applications, our projects demonstrate our commitment to innovation and excellence. View project details to learn more about our approach, technologies used, and the results we've achieved. We are dedicated to providing exceptional digital services and web solutions that drive business growth and success.
        </p>
      </section>
    </div>
  );
}