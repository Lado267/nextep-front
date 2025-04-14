// page.tsx
import Image from 'next/image';
import './page.css';
import image from '../../../public/contact_page_photo.jpg';
import facebook from '../../../public/social/facebook.png';
import whatsapp from '../../../public/social/whatsapp.png';
import viber from '../../../public/social/viber.png';
// Contact.jsx
import React from 'react';

export const metadata = {
  alternates: {
    title: "NextEp | Contact Us - Digital Services, AI & Web Solutions",
    canonical: "https://nextep.solutions/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <main className="contact-container">
        
        <div className="contact-header-container">
          {/* <div className="flex flex-col gap-4 contact-inner-container">
            <h1 className="contact-title">Contact Us - Get in Touch for Digital Services and Web Solutions</h1>
            <p className="contact-subtitle pl-[5vw] pr-[5vw]">You can contact us on Whatsapp, Viber, Facebook or shoot us a direct mail from this page</p>
          </div> */}

          <div className="mobile-content-appearance">
            <div className="mobile-title-appearance mb-[24px]">
              <p className="contact-title">Contact Us</p>
              <h2 className="contact-subtitle">Get in Touch for Digital Services and Web Solutions</h2>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <p className="word-wrap text-center">
                Looking to contact us for digital services, projects, or web solutions? At NextEp, we make it easy to get in touch.
              </p>
              <p className="word-wrap text-center">
                Whether you prefer to reach out via email, phone, or social media, our contact information is readily available. We offer transparent pricing and are committed to providing excellent customer service.
              </p>
            </div>
          </div>
          <div className="desktop-content-appearance">
            <div className="desktop-title-appearance">
              <h1 className="contact-title">Contact Us - for Digital Services and Web Solutions</h1>
            </div>
            <div className='flex flex-col gap-[12px]'>
              {/* <p className="word-wrap text-left">
                Looking to contact us for digital services, projects, or web solutions? At NextEp, we make it easy to get in touch. Whether you prefer to reach out via email, phone, or social media, our contact information is readily available. We offer transparent pricing and are committed to providing excellent customer service.
              </p>
              <p className="word-wrap">
              Contact us today to discuss your project requirements and discover how we can help you achieve your business goals. Our team is ready to assist you with any questions you may have about our services, pricing, or project process.
              </p> */}
            </div>
          </div>



          {/* Contact Info Component */}
          <div className="contact-info pt-[36px]">
            <div className="contact-row flex items-center justify-between">
              <div className="contact-label mr-2">Email:</div>
                <div className="contact-value">
                  <a href="mailto:kaxamiqeladze@gmail.com">kaxamiqeladze@gmail.com</a>
                </div>
              </div>
              <div className="contact-row flex items-center justify-between">
                <div className="contact-label mr-2">Phone:</div>
                  <div className="contact-value">
                    <a href="tel:+995599738023">+995 599738023</a>
                  </div>
                </div>
              </div>
            </div>

        <div className="contact-divider"></div>

        <div className="main-content">
          <div className="left-column">
            <section className="pricing-section">
              <h2 className="pricing-title">Pricing</h2>
              <div className="pricing-table">
                <div className="pricing-row">
                  <div className="pricing-label">Base rate (per developer):</div>
                  <div className="pricing-value">$25/hr</div>
                </div>
                <div className="pricing-row">
                  <div className="pricing-label">Complexity range:</div>
                  <div className="pricing-value">1 - 2</div>
                </div>
                <div className="pricing-divider"></div>
                <div className="pricing-row">
                  <div className="pricing-label">Project price:</div>
                  <div className="pricing-formula">Base rate x Complexity x Time</div>
                </div>
              </div>
            </section>

            <section className="contact-methods">
              <div className="social-icons">
                <a href="https://wa.me/995599738023" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <Image src={whatsapp} alt="whatsapp icon"></Image>
                </a>
                <a href="tel:+995599738023" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <Image src={viber} alt="viber icon"></Image>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573529256520" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <Image src={facebook} alt="facebook icon"></Image>
                </a>
              </div>

              <div className="divider">
                <span>OR</span>
              </div>

              <div className="email-section">
                <a href="mailto:kaxamiqeladze@gmail.com">
                  <h2 className="email-title">Email us</h2>
                  <p className="email-response">We will respond in 24 hours</p>
                </a>
              </div>
            </section>
          </div>

          <div className="right-column">
            <div className="contact-image">
              <Image src={image} alt="Developer" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}