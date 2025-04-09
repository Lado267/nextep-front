import { services } from "../../utils/serviceList";
import Image from "next/image";
import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "NextEp | Services - Digital Services, Projects & Web Solutions",
  alternates: {
  canonical: "https://nextep.solutions/services",
  },
};

export default function Services() {
  return (
    <div>
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
        <section className="services-additional-info">
          <h3>Our Services - Digital Services and Web Solutions</h3>
          <p className="word-wrap">
            Explore our comprehensive range of services designed to meet your digital needs. At NextEp, we specialize in providing top-notch digital services, including website development, mobile app creation, and custom web solutions. Our team of experts is dedicated to delivering innovative and effective solutions that drive business growth. Whether you need a new website, a mobile app, or a custom software application, we have the skills and experience to bring your vision to life. Contact us today to learn more about our services and how we can help you achieve your business goals.
          </p>
        </section>
      </div>
    </div>
  );
}