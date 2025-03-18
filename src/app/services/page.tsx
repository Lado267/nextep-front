import ServiceCard from "../../elements/servicecard/service_card";
import desktopServiceIcon from "../../../public/serviceIcons/desktopIcon.png"
import backendIcon from "../../../public/serviceIcons/backendIcon.png"
import mobileIcon from "../../../public/serviceIcons/mobileIcon.png"
import designIcon from "../../../public/serviceIcons/designIcon.png"
import Image, { StaticImageData } from "next/image";

  export default function Services() {
    return (
      <div className="flex flex-col items-center justify-center">
      <ServiceCard
        icon={desktopServiceIcon}
        iconAlt="Icon for web development service card"
        title="Web Development"
        description="lorem ipsum custom description lorem"
      />
      <ServiceCard
        icon={backendIcon}
        iconAlt="Icon for backend development service card"
        title="Backend Development"
        description="We design and develop websites that are visually appealing and user-friendly."
      />
      <ServiceCard
        icon={mobileIcon}
        iconAlt="Icon for mobile development service card"
        title="Mobile Development"
        description="lorem ipsum custom description lorem appealing and user-friendly."
      />
      <ServiceCard
        icon={designIcon}
        iconAlt="Icon for design service card"
        title="User Interface Design"
        description="We design and develop websites lorem ipsum custom description lorem lorem ipsum custom"
      />
      </div>
    );
  }