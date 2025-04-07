import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Card, CardContent } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../../../components/ui/carousel"
import { projectDetails } from '../../../utils/projectDetails';
import { Gallery } from '../../../elements/gallery/gallery';
import './page.css';
import { HeroImage } from './hero_image';

export default async function ProjectDetails({ params }) {

  const { slug } = await params;
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
            <Image 
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
        <h2 className="section-title">Development Process</h2>
        {project.developmentProcess.map((process, index) => (
          <p key={index} className="project-description">
        {process}
          </p>
        ))}
      </div>

      {/* <div className="section">
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
      </div> */}

      {project.gallery && project.gallery.length > 0 && (
        <div className="section">
          <h2 className="section-title">UI/UX Gallery</h2>
          <Gallery images={project.gallery} />
        </div>
      )}

     

      {/* <div className="section">
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
      </div> */}
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