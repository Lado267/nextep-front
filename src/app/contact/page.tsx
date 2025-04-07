// page.tsx
import Image from 'next/image';
import './page.css';
import image from '../../../public/contact_page_photo.jpg';
import facebook from '../../../public/social/facebook.png';
import whatsapp from '../../../public/social/whatsapp.png';
import linkedin from '../../../public/social/linkedin.png';
import viber from '../../../public/social/viber.png';
// Contact.jsx
import React from 'react';
import {Button} from '../../components/ui/button';

export default function ContactPage() {
  return (
    <main className="contact-container">
      <h1 className="contact-title">Get in touch</h1>
      <p className="contact-subtitle">You can contact us on Whatsapp, Viber, Facebook or shoot us a direct mail from this page</p>

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
              <a href="#" className="social-icon">
                <Image src={whatsapp} alt="whatsapp icon"></Image>
              </a>
              <a href="#" className="social-icon">
                <Image src={viber} alt="viber icon"></Image>
              </a>
              <a href="#" className="social-icon">
                <Image src={facebook} alt="facebook icon"></Image>
              </a>
            </div>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="email-section">
              <h2 className="email-title">Email us</h2>
              <p className="email-response">We will respond in 24 hours</p>
            </div>
            
          </section>
          
          <section className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" placeholder="First name" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" id="lastName" placeholder="Last name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="you@company.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <div className="phone-input">
                  <select className="country-code">
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="CA">CA</option>
                  </select>
                  <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <Button type="submit" variant="projectSelected" className="submit-button">Send Message</Button>
            </form>
          </section>
        </div>
        
        <div className="right-column">
          <div className="contact-image">
            <Image src={image} alt="Developer" />
          </div>
        </div>
      </div>
    </main>
  );
}