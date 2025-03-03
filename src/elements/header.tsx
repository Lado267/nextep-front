import Image from "next/image";
import Logo from "../../public/logo.png";
import { Button } from "../components/ui/button";
import "./header.css";

export default function Header(props: any) {
    return (
      <header className={`header_background_color flex flex-row justify-center items-center p-[12px] ${props.className}`}>
        <Image src={Logo} 
        alt="Nextep, a software development company logo" 
        className="w-[100px] h-[31px] md:hidden"></Image>
        <Button variant='project' className="header_button_visible">Get in touch</Button>
      </header>
    );
  }
  