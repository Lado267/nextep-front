// page.tsx
import Image from 'next/image';
import './page.css';
import image from '../../../public/contact_page_photo.jpg';
import facebook from '../../../public/social/facebook.png';
import whatsapp from '../../../public/social/whatsapp.png';
import linkedin from '../../../public/social/linkedin.png';

export default function ContactPage() {
  const subtitle = "Ready to help your company scale? Let's chat about how we can help"

  return (
    <div className="vertical-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className='page-title'>Get in touch</h1>
        <h4 className="text-tertiaryProject">{subtitle}</h4>
      </div>

      <div className="divider-light"></div>

      {/* Horizontal Container */}
      <div className="horizontal-container">
        {/* Content Section */}
        <div className="content-section">
          
          <h2>Pricing</h2>
          <div className="pricing-card">
            <div className="pricing-row">
              <span>Base rate:</span>
              <span className="price">$25/hr</span>
            </div>
            <div className="pricing-row">
              <span>Complexity range:</span>
              <span>1 - 2</span>
            </div>
            <div className="divider-light"></div>
            <div className="pricing-row">
              <span className="center-text">Project price:</span>
            </div>
            <div className="pricing-formula">
              Base rate x Complexity x Time
            </div>
          </div>
        
          <div className='contact-methods'>
            <div>
              <h2 className="email-title">Email us</h2>
              <p className="response-time">We will respond in 24 hours</p>
            </div>
            <h2 className='items-center justify-center'>OR</h2>
            <div className="social-links">
              <a href="#" className="social-icon">
                <Image src={facebook} alt="Facebook"/>
              </a>
              <a href="#" className="social-icon">
                <Image src={whatsapp} alt="WhatsApp"/>
              </a>
              <a href="#" className="social-icon">
                <Image src={linkedin} alt="LinkedIn"/>
              </a>
            </div>
          </div>

          <form action="/api/contact" method="POST" className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <Image 
            src={image} 
            alt="Contact" 
            width={464} 
            className='contact-image'
            priority 
            style={{ 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
              borderRadius: '4px'
            }}
          />
        </div>
      </div>
    </div>
  );
}