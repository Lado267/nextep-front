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
                <div className="flex flex-col vertical-gap footer-text-color">
                    <Link href="#"><p className="footer-link">Privacy Policy</p></Link>
                    <Link href="#"><p className="footer-link">Terms of Service</p></Link>
                    <Link href="#"><p className="footer-link">Cookie Policy</p></Link>
                </div>
            </div>
        </div>
    </footer>
    );
  }
