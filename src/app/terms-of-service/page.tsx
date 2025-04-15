import "./page.css"

export const metadata = {
    title: "NextEp | Terms of Service - Digital Presence & Web Solutions",
    description: "Read our Terms of Service to understand the guidelines, rights, and responsibilities when using NextEp's digital transformation and web development services.",
    alternates: {
      canonical: "https://nextep.solutions/terms-of-service",
    },
  };  

export default function TermsOfService() {
    return (
      <div className="terms-container">
        <h1 className="terms-title">Terms of Service</h1>
        
        <div className="terms-section">
          <h2>1. Introduction</h2>
          <p>Welcome to NEXTEP ("Company", "we", "our", "us"). By using our services, you agree to these Terms of Service. Please read them carefully.</p>
        </div>
        
        <div className="terms-section">
          <h2>2. Use of Services</h2>
          <p>Our services are designed to help your company scale through digital transformation. You may use our services only as permitted by law and these terms.</p>
          <p>When using our services, you agree to:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Use the services only for legitimate business purposes</li>
            <li>Respect intellectual property rights</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </div>
        
        <div className="terms-section">
          <h2>3. Pricing and Payment</h2>
          <p>Our pricing is based on the formula: Base rate × Complexity × Time</p>
          <p>The base rate is $25/hr per developer, with a complexity range of 1-2 depending on the project requirements.</p>
          <p>Payment terms:</p>
          <ul>
            <li>All prices are in USD unless otherwise stated</li>
            <li>Invoices are issued monthly or upon project completion</li>
            <li>Payment is due within 14 days of invoice date</li>
            <li>Late payments may incur additional fees</li>
          </ul>
        </div>
        
        <div className="terms-section">
          <h2>4. Intellectual Property</h2>
          <p>Unless otherwise agreed in writing:</p>
          <ul>
            <li>You retain ownership of content you provide to us</li>
            <li>We retain ownership of our development methods, tools, and knowledge</li>
            <li>Upon full payment, you receive a license to use the deliverables for your business purposes</li>
            <li>Neither party may use the other's logos or trademarks without permission</li>
          </ul>
        </div>
        
        <div className="terms-section">
          <h2>5. Confidentiality</h2>
          <p>Both parties agree to maintain the confidentiality of any proprietary information shared during the course of our business relationship.</p>
          <p>This includes but is not limited to:</p>
          <ul>
            <li>Business strategies and financial information</li>
            <li>Technical specifications and documentation</li>
            <li>Customer and user data</li>
            <li>Software architecture and code</li>
          </ul>
        </div>
        
        <div className="terms-section">
          <h2>6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, NEXTEP shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>
          <p>Our total liability for any claim arising out of these terms shall not exceed the amount paid by you to us for the services during the 12 months preceding the claim.</p>
        </div>
        
        <div className="terms-section">
          <h2>7. Term and Termination</h2>
          <p>These terms remain in effect until terminated by either party. Either party may terminate if:</p>
          <ul>
            <li>The other party breaches these terms and fails to cure within 30 days of notice</li>
            <li>The other party becomes insolvent or bankrupt</li>
            <li>By mutual written agreement</li>
          </ul>
          <p>Upon termination:</p>
          <ul>
            <li>All outstanding payments become immediately due</li>
            <li>Each party shall return or destroy confidential information of the other party</li>
            <li>Sections on confidentiality, intellectual property, and liability survive termination</li>
          </ul>
        </div>
        
        <div className="terms-section">
          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of [Jurisdiction], without regard to its conflict of law principles.</p>
          <p>Any disputes shall be resolved in the courts of [Jurisdiction], and you consent to the personal jurisdiction of such courts.</p>
        </div>
        
        <div className="terms-section">
          <h2>9. Amendments</h2>
          <p>We may modify these terms at any time by posting the revised terms on our website. Your continued use of our services after such changes constitutes your acceptance of the revised terms.</p>
        </div>
        
        <div className="terms-section">
          <h2>10. Contact</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p>Email: jack@dmin.com</p>
          <p>Phone: +995 555 48 78 95</p>
        </div>
        
        <div className="terms-date">
          <p>Last updated: April, 2025</p>
        </div>
      </div>
    );
  };