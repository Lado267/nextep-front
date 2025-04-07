// page.tsx
import Image from 'next/image';
import './page.css';
import image from '../../../public/contact_page_photo.jpg';
import facebook from '../../../public/social/facebook.png';
import whatsapp from '../../../public/social/whatsapp.png';
import linkedin from '../../../public/social/linkedin.png';
// Contact.jsx
import React from 'react';
import {Button} from '../../components/ui/button';

export default function ContactPage() {
  return (
    <main className="contact-container">
      <h1 className="contact-title">Get in touch</h1>
      <p className="contact-subtitle">You can contact us on Whatsapp, Viber, Facebook or shoot us a direct mail from this page</p>
      
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
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 3.49C20.5 2.94 20.05 2.49 19.5 2.49H4.5C3.95 2.49 3.5 2.94 3.5 3.49V20.49C3.5 21.04 3.95 21.49 4.5 21.49H19.5C20.05 21.49 20.5 21.04 20.5 20.49V3.49ZM9 17.49H6.5V9.49H9V17.49ZM7.75 8.49C6.92 8.49 6.25 7.82 6.25 6.99C6.25 6.16 6.92 5.49 7.75 5.49C8.58 5.49 9.25 6.16 9.25 6.99C9.25 7.82 8.58 8.49 7.75 8.49ZM17.5 17.49H15V13.24C15 12.24 14.5 11.49 13.38 11.49C12.26 11.49 11.5 12.24 11.5 13.24V17.49H9V9.49H11.5V10.49C11.5 10.49 12.13 9.49 13.81 9.49C15.5 9.49 17.5 10.49 17.5 13.24V17.49Z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.498 10.82C17.498 11.2 17.498 11.58 17.498 11.95C17.498 15.59 14.688 19.73 9.748 19.73C8.12 19.73 6.6 19.28 5.298 18.51C5.507 18.54 5.723 18.55 5.938 18.55C7.300 18.55 8.548 18.11 9.528 17.37C8.255 17.35 7.170 16.51 6.798 15.36C6.957 15.39 7.121 15.41 7.290 15.41C7.534 15.41 7.770 15.38 7.991 15.32C6.666 15.06 5.669 13.88 5.669 12.47C5.669 12.46 5.669 12.44 5.669 12.43C6.063 12.65 6.517 12.78 6.997 12.79C6.221 12.28 5.724 11.42 5.724 10.44C5.724 9.91 5.870 9.42 6.128 9C7.561 10.74 9.720 11.9 12.138 12.01C12.091 11.79 12.067 11.57 12.067 11.34C12.067 9.76 13.347 8.48 14.928 8.48C15.749 8.48 16.493 8.83 17.010 9.39C17.653 9.26 18.258 9.01 18.805 8.67C18.588 9.37 18.127 9.96 17.528 10.33C18.115 10.26 18.668 10.1 19.188 9.87C18.807 10.47 18.320 11 17.758 11.42C17.765 11.55 17.768 11.69 17.768 11.82H17.498V10.82Z"/>
                </svg>
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