import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { Button } from "../../components/ui/button";
import "./header.css";
import "../../app/globals.css";
import Link from "next/link";


export default function Header() {
    return (
      <header className={`header_background_color header_position`}>
        <div className="w-full">
          <ol className="header-padding flex flex-row header_justify_content items-center content-margin">
            <li>
              <Link href="/">
                <Image src={Logo} 
                alt="Nextep, a software development company logo" 
                className="w-[100px] h-[32px] header-logo-width"></Image>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Button variant='projectSelected' className="header_button_visible">Get in touch</Button>
              </Link>
            </li>
          </ol>
        </div>
      </header>
    );
  }
  