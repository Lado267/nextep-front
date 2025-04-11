"use client";
import Image from "next/image";
import { services } from "../utils/serviceList";
import Link from "next/link";
import "./serviceGrid.css";

export default function ServiceGrid() {
    return (
        <div className="services-grid">
            {services.map((service) => (
            <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card-link"
            >
                <div className="service-card">
                    <div className="service-content">
                        <h2 className="service-title">{service.title}</h2>
                    </div>
                    <div className="service-icon">
                        <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        width={64}
                        height={64}
                        priority
                        />
                    </div>
                </div>
            </Link>
            ))}
        </div>
    )
}




