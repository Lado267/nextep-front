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
            <p className="services-title">Our Services</p>
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
            <p className="word-wrap text-primaryProject bg-tertiaryProject rounded-[8px] p-[16px] flex flex-col text-[16px] font-medium">
              Transform your business with our expertise in web development, mobile applications, and AI-powered solutions. Our team delivers innovative technology that drives growth and enhances your digital presence. We combine cutting-edge technologies with strategic thinking to create seamless, user-centric experiences that set your business apart. From responsive websites and intuitive mobile apps to custom AI integrations, we provide comprehensive digital solutions tailored to your specific needs. Our commitment to excellence and attention to detail ensures that every project we undertake contributes meaningfully to your business success and market position.
            </p>
        </div>
        <p className="word-wrap desktop-content-appearance text-tertiaryProject text-[20px] p-[12px]">
          Let&apos;s bring your digital vision to life. <Link href='/contact' className="text-quaternaryProject hover:underline">Contact us</Link> to discuss how our services can help achieve your business goals.
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