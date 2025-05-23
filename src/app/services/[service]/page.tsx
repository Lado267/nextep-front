import Link from "next/link";
import "./page.css";
import { serviceDetails } from "@/utils/serviceDetails";

export async function generateMetadata({ params }): Promise<Metadata> {
    const { service } = params;
    const serviceData = serviceDetails[service];

    let finalTitle = `NextEp | ${serviceData.title} - Digital Presence, AI & Web Solutions`
    if (finalTitle.length > 60) { 
      finalTitle = `NextEp | ${serviceData.title} - Digital Presence & Web Solutions`;
    }
  
    if (!serviceData) {
      return {
        title: 'Service Not Found - NextEp Solutions',
        alternates: {
          canonical: 'https://nextep.solutions/services',
        },
      };
    }
  
    return {
      title: finalTitle,
      description: serviceData.description,
      alternates: {
        canonical: `https://nextep.solutions/services/${service}`,
      },
    };
  }

export default async function ServiceDetails({ params }) {
  const { service } = params;
  const serviceData = serviceDetails[service];

  if (!serviceData) {
    throw new Error('Service not found');
  }

  return (
    <section className="service-details">
        <div className="container">
            <h1 id="service-title">{serviceData.title}</h1>
            
            <div className="service-hero">
                <div className="service-icon">
                    <img id="service-icon" src={serviceData.icon.src} alt={`${serviceData.title} Icon`} />
                </div>
                <div className="service-intro">
                    <p id="service-description">{serviceData.description}</p>
                </div>
            </div>
            
            <div className="service-content_details">
                <h2 className="">What We Offer</h2>
                <div className="feature-grid">
                    {serviceData.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
                
                <p className="section-title-h2">Our Process</p>
                <div className="process-steps">
                    {serviceData.process.map((step, index) => (
                        <div key={index} className="step">
                            <div className="step-number">{step.step}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <p className="section-title-h2">Technologies We Use</p>
                <div className="tech-list">
                    {serviceData.technologies.map((tech, index) => (
                        <Link key = {index} href={tech.link} ><span key={index} className="tech-tag">{tech.name}</span></Link>
                    ))}
                </div>
                
                <div className="cta-section">
                    <p>Ready to take the next step?</p>
                    <p>Let&apos;s discuss how we can help your business grow with our {serviceData.title.toLowerCase()} services.</p>
                    <a href="/contact" className="btn primary-btn large">Contact Us</a>
                </div>
            </div>
        </div>
    </section>
  );
}