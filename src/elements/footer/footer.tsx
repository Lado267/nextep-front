import "./footer.css"
import "../../app/globals.css"
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import { SocialShare } from '../../components/SocialShare';
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-bg text-whiteProject">
            <div className="content-margin flex flex-col main-vertical-gap main-padding p-[32px]">
                <Link href="/">
                    <Image src={Logo} alt="NextEp Logo" width={119} height={37} />
                </Link>
                <div className="flex flex-row horizental-gap footer-text-color">
                    <div className="flex flex-col vertical-gap footer-text-color justify-center">
                        <Link href="privacy-policy"><p className="footer-link">Privacy Policy</p></Link>
                        <Link href="#"><p className="footer-link">Terms of Service</p></Link>
                        <Link href="#"><p className="footer-link">Cookie Policy</p></Link>
                    </div>
                    <div className="ml-auto mt-auto flex flex-col gap-4">
                        <SocialShare
                            url="https://nextep.solutions"
                            title="NextEp Solutions - Digital Services & Web Development"
                            description="Discover our comprehensive digital services spanning web development, AI solutions, SEO, Marketing and custom software engineering."
                        />
                        <Link href="https://facebook.com/nextepsolutions" target="_blank" className="facebook-follow-btn flex items-center gap-2">
                            <FaFacebook size={20} />
                            Follow us on Facebook
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
