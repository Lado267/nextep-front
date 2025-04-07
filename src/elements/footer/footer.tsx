import "./footer.css"
import "../../app/globals.css"
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";

export default function Footer() {
    return (
    <footer className="footer-bg text-whiteProject">
        <div className="content-margin flex flex-col main-vertical-gap main-padding p-[32px]">
            <Link href="/">
             <Image src={Logo} alt="NextEp Logo" width={119} height={37} />
            </Link>
            <div className="flex flex-row horizental-gap footer-text-color">
                <div className="flex flex-col vertical-gap">
                    <Link href="/projects"><h5>Projects</h5></Link>
                    <Link href="/services"><h5>Services</h5></Link>
                    <Link href="/contact"><h5>Contact</h5></Link>
                </div>
                <div className="flex flex-col vertical-gap footer-text-color">
                    <Link href="#"><h5>Privacy Policy</h5></Link>
                    <Link href="#"><h5>Terms of Service</h5></Link>
                    <Link href="#"><h5>Cookie Policy</h5></Link>
                </div>
            </div>
        </div>
    </footer>
    );
  }
