import "./footer.css"
import "../../app/globals.css"
import Image from "next/image";
import Logo from "../../../public/logo.png";

export default function Footer() {
    return (
    <footer className="footer-bg text-whiteProject">
        <div className="content-margin flex flex-col main-vertical-gap main-padding p-[32px]">
            <a href="/">
             <Image src={Logo} alt="NextEp Logo" width={119} height={37} />
            </a>
            <div className="flex flex-row horizental-gap footer-text-color">
                <div className="flex flex-col vertical-gap">
                    <a href="/projects"><h5>Projects</h5></a>
                    <a href="/services"><h5>Services</h5></a>
                    <a href="/contact"><h5>Contact</h5></a>
                </div>
                <div className="flex flex-col vertical-gap footer-text-color">
                    <a href="#"><h5>Privacy Policy</h5></a>
                    <a href="#"><h5>Terms of Service</h5></a>
                    <a href="#"><h5>Cookie Policy</h5></a>
                </div>
            </div>
        </div>
    </footer>
    );
  }
