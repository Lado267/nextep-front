import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SilhouetteMainImage from "../../../../public/projects/silhouette/silhouette-main.png"
import Silhouette2 from "../../../../public/projects/silhouette/silhouette-2.png"
import Silhouette3 from "../../../../public/projects/silhouette/silhouette-3.png"

export default function ProjectDetails() {
  return (
    <main className="project-details-container flex flex-col gap-[20px]">
      <div className="hero-section">
        <div className="hero-image">
          {/* Hero image would go here */}
          {/* <Image src="/images/ecommerce-hero.jpg" alt="E-commerce platform showcase" width={1200} height={600} /> */}
          <Image src={SilhouetteMainImage} alt="main cover image of project" className='mt-[40px] rounded-lg shadow-sm'></Image>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Project Overview</h2>
        <p className="project-description">
          This comprehensive e-commerce platform was developed for Global Retail Inc. to modernize their online shopping experience and integrate with their existing inventory management system. The solution includes a responsive frontend for customers, an admin dashboard for staff, and robust APIs for third-party integrations.
        </p>
        <p className="project-description">
          The client needed a scalable solution that could handle seasonal traffic spikes and support their expansion into new markets. Our platform was built with performance and flexibility in mind, allowing them to quickly adapt to changing business requirements.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Technology Stack</h2>
        <div className="tech-stack">
          <div className="tech-item">
            <div className="tech-icon">R</div>
            <span className="tech-name">React</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">N</div>
            <span className="tech-name">Node.js</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">M</div>
            <span className="tech-name">MongoDB</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">S</div>
            <span className="tech-name">Stripe API</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">R</div>
            <span className="tech-name">Redis</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">G</div>
            <span className="tech-name">GraphQL</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">A</div>
            <span className="tech-name">AWS</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">D</div>
            <span className="tech-name">Docker</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="highlights">
          <div className="highlight-item">
            <h3 className="highlight-title">Advanced Search</h3>
            <p className="highlight-description">Implemented Elasticsearch for fast and accurate product search with filters and recommendations.</p>
          </div>
          <div className="highlight-item">
            <h3 className="highlight-title">Secure Payments</h3>
            <p className="highlight-description">Integrated Stripe for secure payment processing with support for multiple currencies and payment methods.</p>
          </div>
          <div className="highlight-item">
            <h3 className="highlight-title">Inventory Sync</h3>
            <p className="highlight-description">Real-time inventory synchronization between online store and physical locations.</p>
          </div>
          <div className="highlight-item">
            <h3 className="highlight-title">Customer Accounts</h3>
            <p className="highlight-description">Personalized user accounts with order history, wishlists, and saved payment methods.</p>
          </div>
          <div className="highlight-item">
            <h3 className="highlight-title">Admin Dashboard</h3>
            <p className="highlight-description">Comprehensive admin panel for product management, order processing, and analytics.</p>
          </div>
          <div className="highlight-item">
            <h3 className="highlight-title">Mobile Optimization</h3>
            <p className="highlight-description">Fully responsive design with dedicated mobile optimization for seamless shopping on any device.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">UI/UX Gallery</h2>
        <div className="gallery grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
          <Image src={Silhouette2} alt='image showcasing project'></Image>
          <Image src={Silhouette3} alt='image showcasing project'></Image>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Development Process</h2>
        <p className="project-description">
          We followed an Agile methodology with two-week sprints and regular client reviews. The project was broken down into four phases:
        </p>
        <p className="project-description">
          <strong>1. Discovery & Planning:</strong> Conducted user research, competitive analysis, and defined the technical architecture. Created detailed wireframes and user flows for approval.
        </p>
        <p className="project-description">
          <strong>2. Design & Frontend Development:</strong> Designed the UI components, implemented responsive layouts, and developed reusable React components. Focus on performance and accessibility.
        </p>
        <p className="project-description">
          <strong>3. Backend Implementation:</strong> Built the Node.js API layer, MongoDB database structure, and integrated third-party services. Implemented security measures and data validation.
        </p>
        <p className="project-description">
          <strong>4. Testing & Deployment:</strong> Conducted comprehensive testing, including performance, security, and usability. Implemented CI/CD pipeline and deployed to AWS infrastructure.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Results & Impact</h2>
        <div className="results-metrics">
          <div className="metric-card">
            <div className="metric-value">42%</div>
            <div className="metric-label">Increase in online sales</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">3.2s</div>
            <div className="metric-label">Average page load time reduction</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">27%</div>
            <div className="metric-label">Increase in mobile conversions</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">99.9%</div>
            <div className="metric-label">Uptime during peak seasons</div>
          </div>
        </div>
        <p className="project-description">
          The platform successfully handled the client's Black Friday sale with over 200,000 concurrent users and zero downtime. The implementation of the new search functionality improved product discoverability, leading to a significant increase in average order value.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Client Testimonial</h2>
        <div className="testimonial">
          <p className="testimonial-text">
            "The Nextep team delivered beyond our expectations. Our new e-commerce platform has transformed our business, allowing us to scale operations and provide a better experience for our customers. The attention to detail and technical expertise demonstrated throughout the project was exceptional."
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">
              {/* <Image src="/images/sarah-johnson.jpg" alt="Sarah Johnson" width={60} height={60} className="avatar-image" /> */}
            </div>
            <div className="author-info">
              <div className="author-name">Sarah Johnson</div>
              <div className="author-position">CTO, Global Retail Inc.</div>
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
          {[
            { name: "CRM System", description: "Customer relationship management with analytics dashboard" },
            { name: "Payment Gateway", description: "Secure payment processing system with multi-currency support" },
            { name: "Mobile App", description: "Mobile app for ordering and tracking deliveries" }
          ].map((project, index) => (
            <div key={index} className="related-card">
              <div className="related-image">
                {/* <Image src={`/images/related-${index + 1}.jpg`} alt={project.name} width={300} height={200} /> */}
              </div>
              <div className="related-content">
                <h3 className="related-name">{project.name}</h3>
                <p className="related-description">{project.description}</p>
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