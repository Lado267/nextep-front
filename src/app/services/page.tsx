import { desktopServices } from "../../utils/serviceList";
import Image from "next/image";
import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "NextEp | Services - Digital Presence, AI & Web Solutions",
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
            <h2 className="services-subtitle">Digital Solutions</h2>
          </div>
          <p className="word-wrap text-center text-tertiaryProject">
              We specialize in website development, mobile apps, and custom web solutions powered by AI.
          </p>
        </div>
        <div className="desktop-content-appearance">
          <div className="desktop-title-appearance">
            <h1 className="services-title">Our Digital Services</h1>
          </div>
          <p className="word-wrap text-primaryProject bg-secondaryProject rounded-[8px] pt-[16px] pl-[16px] pb-[16px] flex flex-col text-[16px] font-medium">
              Transform your business with our expertise in web development, mobile applications, and AI-powered solutions. Our team delivers innovative technology that drives growth.
          </p>
        </div>
        <p className="word-wrap desktop-content-appearance text-tertiaryProject">
          Let&apos;s bring your digital vision to life. Contact us to discuss how our services can help achieve your business goals.
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