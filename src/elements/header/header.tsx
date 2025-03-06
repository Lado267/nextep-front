import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Button } from "../../components/ui/button";
import "./header.css";
import "../../app/globals.css";

export default function Header(props: any) {
    return (
      <header className={`header_background_color header_position`}>
        <div className="w-full">
          <ol className="header-padding flex flex-row header_justify_content items-center content-margin">
            <li>
              <Image src={Logo} 
              alt="Nextep, a software development company logo" 
              className="w-[100px] h-[32px] header-logo-width"></Image>
            </li>
            <li>
              <Button variant='project' className="header_button_visible">Get in touch</Button>
            </li>
          </ol>
        </div>
      </header>
    );
  }
  