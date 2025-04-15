import React from 'react';
import "./page.css";

export const metadata = {
    title: "NextEp | Cookie Policy",
    alternates: {
      canonical: "https://nextep.solutions/cookie-policy",
    },
  };

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-container">
      <div className="policy-header">
        <h1>Cookie Policy</h1>
        <p>Last updated: April 15, 2025</p>
      </div>

      <div className="policy-section">
        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device when you browse websites. 
          They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
      </div>

      <div className="policy-section">
        <h2>How we use cookies</h2>
        <p>
          NEXTEP uses cookies for several purposes, including:
        </p>
        <ul>
          <li>Ensuring the website functions properly</li>
          <li>Remembering your preferences and settings</li>
          <li>Understanding how you use our website</li>
          <li>Improving our services and user experience</li>
          <li>Marketing and advertising purposes</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>Types of cookies we use</h2>
        
        <div className="cookie-type">
          <h3>Essential cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such as security, 
            network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.
          </p>
        </div>
        
        <div className="cookie-type">
          <h3>Performance cookies</h3>
          <p>
            These cookies collect information about how visitors use our website, such as which pages they visit most often. 
            All information these cookies collect is aggregated and therefore anonymous.
          </p>
        </div>
        
        <div className="cookie-type">
          <h3>Functionality cookies</h3>
          <p>
            These cookies allow the website to remember choices you make and provide enhanced, more personal features. 
            They may be set by us or by third-party providers whose services we have added to our pages.
          </p>
        </div>
        
        <div className="cookie-type">
          <h3>Marketing cookies</h3>
          <p>
            These cookies are used to track visitors across websites. The intention is to display ads that are relevant and 
            engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
          </p>
        </div>
      </div>

      <div className="policy-section">
        <h2>Managing cookies</h2>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. 
          The methods for doing so vary from browser to browser, and from version to version.
        </p>
        <p>
          You can also delete cookies that have already been set. You can do this through your browser settings.
        </p>
        <p>
          Please note that by deleting or disabling future cookies, your user experience may be affected and you might not be able to take advantage of certain functions of our site.
        </p>
      </div>

      <div className="policy-section">
        <h2>Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.
        </p>
        <p>
          Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>
      </div>

      <div className="policy-section">
        <h2>Contact us</h2>
        <p>
          If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
        </p>
        <p className="contact-info">
          Email: <a href="mailto:jack@dmin.com">jack@dmin.com</a><br />
          Phone: +995 555 48 78 95
        </p>
      </div>

      <div className="cookie-consent">
        <h3>Cookie Consent</h3>
        <p>Choose which cookies you want to accept:</p>
        
        <div className="consent-options">
          <div className="consent-option">
            <input type="checkbox" id="essential" checked disabled />
            <label htmlFor="essential">Essential (Required)</label>
          </div>
          
          <div className="consent-option">
            <input type="checkbox" id="performance" />
            <label htmlFor="performance">Performance</label>
          </div>
          
          <div className="consent-option">
            <input type="checkbox" id="functionality" />
            <label htmlFor="functionality">Functionality</label>
          </div>
          
          <div className="consent-option">
            <input type="checkbox" id="marketing" />
            <label htmlFor="marketing">Marketing</label>
          </div>
        </div>
        
        <div className="consent-buttons">
          <button className="accept-all">Accept All</button>
          <button className="save-preferences">Save Preferences</button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;