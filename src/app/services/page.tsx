import { desktopServices } from "../../utils/serviceList";
import Image from "next/image";
import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "NextEp | Services - Digital Services, AI & Web Solutions",
  alternates: {
  canonical: "https://nextep.solutions/services",
  },
};

export default function Services() {
  return (
      <div className="services-container">
        <div className="mobile-content-appearance">
          <div className="mobile-title-appearance">
            <h1 className="services-title">Our Services</h1>
            <h2 className="services-subtitle">Digital Services, AI & Web Solutions</h2>
          </div>
          <p className="word-wrap">
              Explore our comprehensive range of services designed to meet your digital needs.At NextEp, we specialize in providing top-notch digital services, including website development, mobile app creation, and custom web solutions.
          </p>
        </div>
        <div className="desktop-content-appearance">
          <div className="desktop-title-appearance">
            <h1 className="services-title">Our Services - Digital Services, AI & Web Solutions</h1>
          </div>
          <p className="word-wrap">
              Explore our comprehensive range of services designed to meet your digital needs. At NextEp, we specialize in providing top-notch digital services, including website development, mobile app creation, and custom web solutions. Our team of experts is dedicated to delivering innovative and effective solutions that drive business growth.
          </p>
        </div>
        <p className="word-wrap desktop-content-appearance">
          Whether you need a new website, a mobile app, or a custom software application, we have the skills and experience to bring your vision to life. Contact us today to learn more about our services and how we can help you achieve your business goals.
        </p>
        <div className="services-grid">
          {desktopServices.map((service) => (
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