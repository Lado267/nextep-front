import "./page.css";

export default async function ServiceDetails({ params }) {
  const { service } = await params;
//   const fullService = projectDetails[slug];
    console.log(service)

  return (
    <section className="service-details">
        <div className="container">
            <h1 id="service-title">Web Development</h1>
            
            <div className="service-hero">
                <div className="service-icon">
                    <img id="service-icon" src="web-dev-icon.png" alt="Web Development Icon" />
                </div>
                <div className="service-intro">
                    <p id="service-description">Transform your online presence with our custom web development solutions. We create responsive, user-friendly websites that drive business growth and provide exceptional user experiences.</p>
                </div>
            </div>
            
            <div className="service-content">
                <h2>What We Offer</h2>
                <div className="feature-grid">
                    <div className="feature-item">
                        <h3>Custom Website Development</h3>
                        <p>Tailored solutions that align with your brand identity and business objectives. We build websites that stand out from the competition.</p>
                    </div>
                    <div className="feature-item">
                        <h3>E-commerce Solutions</h3>
                        <p>Full-featured online stores with secure payment gateways, inventory management, and user-friendly interfaces to maximize your sales.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Content Management Systems</h3>
                        <p>Easy-to-use CMS solutions that allow you to update your website content without technical expertise.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Website Optimization</h3>
                        <p>Improve your website's performance, loading speed, and search engine ranking to reach more customers.</p>
                    </div>
                </div>
                
                <h2>Our Process</h2>
                <div className="process-steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Discovery & Planning</h3>
                            <p>We analyze your business needs, target audience, and objectives to create a strategic plan for your website.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Design & Prototyping</h3>
                            <p>Our designers create wireframes and visual designs that align with your brand and provide optimal user experience.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Development</h3>
                            <p>Our developers bring the designs to life with clean, efficient code and responsive functionality.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h3>Testing & Launch</h3>
                            <p>We thoroughly test your website across devices and browsers before launching it to ensure flawless performance.</p>
                        </div>
                    </div>
                </div>
                
                <h2>Technologies We Use</h2>
                <div className="tech-list">
                    <span className="tech-tag">HTML5</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">Vue.js</span>
                    <span className="tech-tag">PHP</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">WordPress</span>
                    <span className="tech-tag">Shopify</span>
                </div>
                
                <div className="cta-section">
                    <h2>Ready to take the next step?</h2>
                    <p>Let's discuss how we can help your business grow with our web development services.</p>
                    <a href="contact.html" className="btn primary-btn large">Contact Us</a>
                </div>
            </div>
        </div>
    </section>
  );
}