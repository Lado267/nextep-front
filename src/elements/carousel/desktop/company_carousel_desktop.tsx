import Image, { StaticImageData } from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel"
import { cn } from "@/lib/utils"
import "./company_carousel_desktop.css"
import { HomePageAlt } from "@/utils/alt"
import { v4 as uuidv4 } from 'uuid';

// Define the company data type
export interface Company {
  id: string
  name: string
  logoUrl: StaticImageData
}

interface CompanyCarouselProps {
  companies: Company[][]
  className?: string
}

export default function CompanyCarouselDesktop({ companies, className }: CompanyCarouselProps) {

  return (
    <div className={cn("flex flex-col w-[100vw] gap-[16px]", className)}>
      <h3 className="text-tertiaryProject text-start">{HomePageAlt.desktop.carousel.title}</h3>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full h-[244px]"
      >
        <CarouselContent className="">
          {companies.map((group, groupIndex) => (
            <CarouselItem
              key={uuidv4()}
              className={`pl-4`}
            >
              <div className={cn("grid gap-4 rounded-lg", "")}>
                {group.map((company) => (
                  <div
                    key={uuidv4()}
                    className={`carousel-grid-desktop carousel-item-size-desktop rounded-lg p-3 flex flex-col items-center justify-center shadow-sm border border-gray-100`}
                  >
                    <div className="h-[60px] flex items-center justify-center">
                      <Image
                        src={company.logoUrl}
                        alt={`${company.name} logo`}
                        className="object-contain"
                        width={0}
                        height={60}
                        style={{ width: 'auto', height: '60px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

