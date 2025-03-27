import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../../../components/ui/carousel"
import { projectDetails } from '../../../utils/projectDetails';
import './page.css';

export default function ProjectDetails() {

  const project = projectDetails["silhouette"];

  return (
    <main className="project-details-container flex flex-col gap-[4px]">
      <div className="hero-section">
        <div className="hero-image">
          {/* Hero image would go here */}
          {/* <Image src="/images/ecommerce-hero.jpg" alt="E-commerce platform showcase" width={1200} height={600} /> */}
          <Image src={project.mainImage} alt="main cover image of project" className='rounded-lg shadow-sm'></Image>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Project Overview</h2>
        <p className="project-description">
          {project.projectOverview[0]}
        </p>
        <p className="project-description">
          {project.projectOverview[1]}
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Technology Stack</h2>
        <div className="max-w-full overflow-hidden">
          <Carousel className="w-full">
        <CarouselContent className="-ml-3 gap-[0px]">
          {project.techStack.map((item, index) => (
          <CarouselItem key={index} className="pl-2 sm:basis-1/6 basis-1/4">
        <div className="">
          <Card>
            <CardContent className="flex h-[84px] items-center justify-center p-6">
            <img 
          src={item.desktopIcon} 
          alt={`${item.slug} logo`} 
          className='tech-icon object-contain'
            />
            </CardContent>
          </Card>
        </div>
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="highlights">
          {project.keyFeatures.map((feature, index) => (
        <div key={index} className="highlight-item">
          <h3 className={`highlight-title highlight-${feature.title.toLowerCase().replace(' ', '')}`}>
            {feature.title}
          </h3>
          <p className="highlight-description">
            {feature.description}
          </p>
        </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">UI/UX Gallery</h2>
        <div className="gallery">
          {project.gallery.map((image, index) => (
        <Image 
          key={index}
          src={image} 
          alt={`Project showcase image ${index + 1}`}
          className="rounded-lg shadow-sm"
        />
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Development Process</h2>
        {project.developmentProcess.map((process, index) => (
          <p key={index} className="project-description">
        {process}
          </p>
        ))}
      </div>

      <div className="section">
        <h2 className="section-title">Results & Impact</h2>
        <div className="results-metrics">
          {project.resultsMetrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <div className="metric-value">{metric.value}</div>
          <div className="metric-label">{metric.label}</div>
        </div>
          ))}
        </div>
        <p className="project-description">
          The platform successfully handled the client's Black Friday sale with over 200,000 concurrent users and zero downtime. The implementation of the new search functionality improved product discoverability, leading to a significant increase in average order value.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Client Testimonial</h2>
        <div className="testimonial">
          <p className="testimonial-text">
        {project.testimonial.text}
          </p>
          <div className="testimonial-author">
        <div className="author-avatar">
          {/* <Image src="/images/sarah-johnson.jpg" alt="Sarah Johnson" width={60} height={60} className="avatar-image" /> */}
        </div>
        <div className="author-info">
          <div className="author-name">{project.testimonial.author.name}</div>
          <div className="author-position">{project.testimonial.author.position}</div>
        </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Ready to transform your business?</h2>
        <p className="cta-description">
          Let's discuss how we can help you build a modern digital solution tailored to your unique business needs.
        </p>
        <Link href="/contact" className="cta-button">Start Your Project</Link>
      </div>

      <div className="section related-projects">
        <h2 className="section-title">Related Projects</h2>
        <div className="related-scroll">
          {project.relatedProjects.map((relatedProject, index) => (
        <div key={index} className="related-card">
          <div className="related-image">
            {/* <Image src={`/images/related-${index + 1}.jpg`} alt={relatedProject.name} width={300} height={200} /> */}
          </div>
          <div className="related-content">
            <h3 className="related-name">{relatedProject.name}</h3>
            <p className="related-description">{relatedProject.description}</p>
            <Link href="#" className="related-link">
          View details
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
            </Link>
          </div>
        </div>
          ))}
        </div>
      </div>
    </main>
  );
}