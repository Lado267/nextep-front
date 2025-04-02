import { services } from "../../utils/serviceList";
import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      
      <div className="services-grid">
        {services.map((service) => (
          <Link 
            key={service.slug} 
            href={`/services/${service.slug}`} 
            className="service-card-link"
          >
            <div className="service-card">
              <div className="service-icon">
                <Image 
                  src={service.icon} 
                  alt={`${service.title} icon`}
                  width={64}
                  height={64}
                  priority
                />
              </div>
              <div className="service-content">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}