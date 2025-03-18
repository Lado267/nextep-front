import desktopServiceIcon from "../../../public/serviceIcons/desktopIcon.png"
import backendIcon from "../../../public/serviceIcons/backendIcon.png"
import mobileIcon from "../../../public/serviceIcons/mobileIcon.png"
import designIcon from "../../../public/serviceIcons/designIcon.png"
import Image, { StaticImageData } from "next/image";
import "./page.css"
import "../../app/globals.css";

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <Image src={desktopServiceIcon} alt="icon for web development service"/>
          </div>
          <div className="service-content">
            <h2 className="service-title">Web Development</h2>
            <p className="service-description">Lorem ipsum custom description lorem</p>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <Image src={backendIcon} alt="icon for backend development service"/>
          </div>
          <div className="service-content">
            <h2 className="service-title">Backend Development</h2>
            <p className="service-description">Lorem ipsum custom description lorem</p>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <Image src={mobileIcon} alt="icon for mobile development service"/>
          </div>
          <div className="service-content">
            <h2 className="service-title">Mobile Development</h2>
            <p className="service-description">Lorem ipsum custom description lorem</p>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <Image src={designIcon} alt="icon for User Interface design service"/>
          </div>
          <div className="service-content">
            <h2 className="service-title">User Interface Design</h2>
            <p className="service-description">Lorem ipsum custom description lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
}