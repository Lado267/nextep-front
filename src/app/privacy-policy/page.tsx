import "./page.css"

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="content-wrapper">
        <h1 className="page-title">Privacy Policy</h1>
        
        <div className="policy-section">
          <h2>Introduction</h2>
          <p>At NEXTEP, we respect your privacy and are committed to protecting your personal data while providing you with exceptional software development services. This privacy policy outlines how we handle data when you engage with our development team or visit our website.</p>
        </div>
        
        <div className="policy-section">
          <h2>Data We Collect</h2>
          <p>In the process of delivering software development services, we may collect:</p>
          <ul>
            <li><strong>Client Information</strong> including company name, contact details, and project requirements.</li>
            <li><strong>Technical Data</strong> such as development environment specifications, hosting information, and system architecture details.</li>
            <li><strong>User Testing Data</strong> when conducting QA and usability testing for your software products.</li>
            <li><strong>Website Usage Data</strong> including how potential clients browse our portfolio and service offerings.</li>
          </ul>
        </div>
        
        <div className="policy-section">
          <h2>How We Use Your Data</h2>
          <p>We utilize collected data to:</p>
          <ul>
            <li>Deliver high-quality custom software development services tailored to your needs.</li>
            <li>Manage project timelines, resources, and communications.</li>
            <li>Improve our development methodologies and technical solutions.</li>
            <li>Maintain development environments and deployed applications.</li>
            <li>Provide ongoing technical support and maintenance services.</li>
            <li>Inform you about relevant technological advancements that could benefit your business.</li>
          </ul>
        </div>
        
        <div className="policy-section">
          <h2>Codebase and Project Security</h2>
          <p>We implement comprehensive security measures to protect your intellectual property and source code. This includes secure development environments, strict access controls, and encrypted repositories. All development artifacts and client-specific code are subject to strict confidentiality protocols.</p>
        </div>
        
        <div className="policy-section">
          <h2>Data Retention</h2>
          <p>Project data is retained according to contractual agreements with clients. Development artifacts, code repositories, and technical documentation are maintained for the duration specified in our service agreements, after which secure deletion protocols are followed unless extended maintenance is arranged.</p>
        </div>
        
        <div className="policy-section">
          <h2>Third-Party Services</h2>
          <p>Our development process may utilize third-party tools and services such as cloud hosting providers, version control systems, and development tools. Any third-party engagement adheres to our security standards and client confidentiality requirements.</p>
        </div>
        
        <div className="policy-section">
          <h2>Your Rights</h2>
          <p>As our client, you have rights regarding your project data and information:</p>
          <ul>
            <li>Access to all development documentation and source code as specified in service agreements.</li>
            <li>Request transfer of development environments and deployment configurations.</li>
            <li>Review of any data used for testing and quality assurance.</li>
            <li>Secure deletion of proprietary information upon project completion.</li>
          </ul>
        </div>
        
        <div className="policy-section">
          <h2>Contact Our Development Team</h2>
          <p>For questions about our data handling practices or to discuss a software development project:</p>
          <p>Email: <a href="mailto:jack@dmin.com">jack@dmin.com</a><br />
          Phone: +995 555 48 78 95</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;