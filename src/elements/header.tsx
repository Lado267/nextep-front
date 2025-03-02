import Image from "next/image";
import Logo from "../../public/logo.png";
import { Button } from "../components/ui/button";

export default function Header() {
    return (
      <header className="bg-primaryProject flex flex-row justify-center items-center p-[12px]">
        <Image src={Logo} 
        alt="Nextep, a software development company logo" 
        className="w-[100px] h-[31px]"></Image>
        <Button variant="project" className="phone:invisible desktop:visible">Get in touch</Button>
      </header>
    );
  }
  