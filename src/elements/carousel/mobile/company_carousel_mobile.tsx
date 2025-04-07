import Image, { StaticImageData } from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "../../../components/ui/carousel"
import { cn } from "@/lib/utils"
import "./company_carousel_mobile.css"
import { HomePageAlt } from "@/utils/alt"
import { v4 as uuidv4 } from 'uuid';

// Define the company data type
export interface Company {
  id: string
  name: string
  logoUrl: StaticImageData
}

interface CompanyCarouselProps {
  companies: Company[]
  className?: string
}

export default function CompanyCarouselMobile({ companies, className }: CompanyCarouselProps) {

    const carouselItems = companies.map((company) => {
        return [company]
    })

  return (
    <div className={cn("flex flex-col gap-[12px] p-4 w-[90vw]", className)}>
      <h3 className="text-tertiaryProject text-center">{HomePageAlt.mobile.carousel.title}</h3>
      <div className="relative">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-primaryProject to-transparent z-10"></div>
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
            }}
            className="h-[60px]"
          >
            <CarouselContent className="-ml-2">
              {carouselItems.map((group) => (
                <CarouselItem
                  key={uuidv4()}
                  className={`pl-2 basis-auto`}
                >
                  <div className={cn("grid gap-4 rounded-lg", "carousel-grid-mobile")}>
                    {group.map((company) => (
                      <div
                        key={company.id}
                        className={`carousel-grid-mobile carousel-item-size-mobile rounded-lg p-3 flex flex-col items-center justify-center shadow-sm border border-gray-100`}
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
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-primaryProject to-transparent z-10"></div>
      </div>
    </div>
  )
}

