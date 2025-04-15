import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { projectDetails } from '../../../utils/projectDetails';
import { Gallery } from '../../../elements/gallery/gallery';
import './page.css';
import { HeroImage } from './hero_image';

// Move Carousel to a separate client component
import { TechStackCarousel } from './techstack_carousel';

// Add this before the generateMetadata function
interface Project {
  title: string;
  projectOverview: string[];
  mainImage: string;
  techStack: string[];
  developmentProcess: string[];
  gallery?: string[];
}

interface Params {
  params: {
    slug: string;
  };
}

interface ProjectDetails {
  [key: string]: Project;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {

  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const project = projectDetails[`${slug}`] as Project;

  if (!project) {
    return {
      title: 'Project Not Found - NextEp Solutions',
      alternates: {
        canonical: 'https://nextep.solutions/projects',
      },
    };
  }

  return {
    title: `NextEp | ${project.title}`,
    description: project.projectOverview[0], // Using first paragraph as description
    alternates: {
      canonical: `https://nextep.solutions/projects/${slug}`,
    },
  };
}

export default async function ProjectDetails({ params }) {
  const { slug } = params;
  const project = projectDetails[slug] as Project;

  return (
    <main className="project-details-container flex flex-col gap-[4px]">
      <div className="hero-section">
        <HeroImage 
          src={project.mainImage} 
          alt={`${project.title} project cover`} 
        />
      </div>

      <div className="section">
        <h1 className="section-title">About the Project</h1>
        <div className="project-description">
          {project.projectOverview.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Built With</h2>
        <TechStackCarousel techStack={project.techStack} />
      </div>

      <div className="section">
        <p className="section-title">Development Journey</p>
        {project.developmentProcess.map((process, index) => (
          <p key={index} className="project-description">
            {process}
          </p>
        ))}
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="section">
          <p className="section-title">Project Gallery</p>
          <Gallery images={project.gallery} />
        </div>
      )}

      <div className='h-[1px] w-full bg-red'></div>
      <div className="cta-section">
        <p className="cta-title">Ready to Start Your Project?</p>
        <p className="cta-description">
          Let&apos;s discuss how we can create a custom digital solution for your business needs.
        </p>
        <Link href="/contact" className="contact-link">
            <button className='cta-button'>Start the Conversation</button>
        </Link>
      </div>
    </main>
  );
}