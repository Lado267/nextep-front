import Image from 'next/image';
import { StaticImageData } from 'next/image';
import "./service_card.css";

interface ServiceCardProps {
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, iconAlt, title, description }: ServiceCardProps) {
    return (
      <div className="flex flex-row p-2 rounded-lg shadow-sm items-start justify-start bg-projectWhite gap-[12px] service-card-sizing service-card-bg">
        <Image src={icon} alt={iconAlt} className="service-card-image-size"/>
        <div className="flex flex-col pt-[4px] w-full h-full flex-1">
            <h3 className='service-card-title truncate'>{title}</h3>
            <text className='line-clamp-3 break-words w-full h-full service-card-desc'>{description}</text>
        </div>
      </div>
    );
}