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

  console.log(companies)

  return (
    <div className={cn("flex flex-col w-[100vw] gap-[12px] p-4", className)}>
      <h3 className="text-tertiaryProject text-center">{HomePageAlt.mobile.carousel.title}</h3>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full h-[42px]"
      >
        <CarouselContent className="">
          {companies.map((group, groupIndex) => (
            <CarouselItem
              key={uuidv4()}
              className={`pl-4`}
            >
              <div className={cn("grid gap-4 rounded-lg", "carousel-grid")}>
                {group.map((company) => (
                  <div
                    key={uuidv4()}
                    className={`carousel-item-size-mobile rounded-lg p-3 flex flex-col items-center justify-center shadow-sm border border-gray-100`}
                  >
                    <div className="h-[28px] flex items-center justify-center">
                      <Image
                        src={company.logoUrl}
                        alt={`${company.name} logo`}
                        className="object-contain"
                        width={0}
                        height={28}
                        style={{ width: 'auto', height: '28px' }}
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

