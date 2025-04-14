import React from 'react';
import Link from 'next/link';
import { projectDetails } from '../../../utils/projectDetails';
import { Gallery } from '../../../elements/gallery/gallery';
import './page.css';
import { HeroImage } from './hero_image';

// Move Carousel to a separate client component
import { TechStackCarousel } from './techstack_carousel';

export default async function ProjectDetails({ params }) {
  const { slug } = params;
  const project = projectDetails[slug];

  return (
    <main className="project-details-container flex flex-col gap-[4px]">
      <div className="hero-section">
        <HeroImage 
          src={project.mainImage} 
          alt="main cover image of project" 
        />
      </div>

      <div className="section">
        <p className="section-title">Project Overview</p>
        <p className="project-description">
          {project.projectOverview[0]}
        </p>
        <p className="project-description">
          {project.projectOverview[1]}
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Technology Stack</h2>
        <TechStackCarousel techStack={project.techStack} />
      </div>

      <div className="section">
        <h2 className="section-title">Development Process</h2>
        {project.developmentProcess.map((process, index) => (
          <p key={index} className="project-description">
        {process}
          </p>
        ))}
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="section">
          <h2 className="section-title">UI/UX Gallery</h2>
          <Gallery images={project.gallery} />
        </div>
      )}

      <div className='h-[1px] w-full bg-red'></div>
      <div className="cta-section">
        <h2 className="cta-title">Ready to take the Next Step?</h2>
        <p className="cta-description">
          Let us discuss how we can help you build a modern digital solution tailored to your unique business needs.
        </p>
        <Link href="/contact" className="">
            <button className='cta-button'>Get in touch</button>
        </Link>
      </div>
    </main>
  );
}