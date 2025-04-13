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
        <h1 className="services-title">Our Services - Digital Presence, AI & Web Solutions</h1>
        <p className="word-wrap">
            Explore our comprehensive range of services designed to meet your digital needs. At NextEp, we specialize in providing top-notch digital services, including website development, mobile app creation, AI and custom web solutions. Our team of experts is dedicated to delivering innovative and effective solutions that drive business growth.
        </p>
        <p className="word-wrap">
          With a strong focus on quality and innovation, we leverage cutting-edge technologies and industry best practices to deliver solutions that exceed expectations. Our tailored approach ensures that each project is customized to meet your specific requirements. From responsive web design to advanced AI implementations, we maintain clear communication throughout the development process, ensuring your project stays on track and aligns with your business objectives.
        </p>
        <p className="word-wrap">
          Whether you need a new website, a mobile app, or a custom software application, we have the skills and experience to bring your vision to life. <Link href="/contact" className="contact-link">Get in touch for a free consultation</Link> today to learn more about our services and how we can help you achieve your business goals.
        </p>
        <div className="services-grid">
          {desktopServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-card-link"
              aria-label={`Learn more about our ${service.title} services`}
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