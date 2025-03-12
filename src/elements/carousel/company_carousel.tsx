import Image, { StaticImageData } from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
import { cn } from "@/lib/utils"
import "./company_carousel.css"
import { HomePageAlt } from "@/utils/alt"

// Define the company data type
export interface Company {
  id: string
  name: string
  logoUrl: StaticImageData
}

interface CompanyCarouselProps {
  companies: Company[]
  className?: string
  isMobile: boolean
}

export default function CompanyCarousel({ companies, className, isMobile }: CompanyCarouselProps) {

    let carouselItems = companies.map((company) => {
        return [company]
    })

  return (
    <div className={cn("flex flex-col gap-[12px]", className)}>
      <h3 className="text-tertiaryProject">{HomePageAlt.mobile.carousel.title}</h3>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {carouselItems.map((group, groupIndex) => (
            <CarouselItem
              key={`group-${groupIndex}`}
              className={`pl-4`}
            >
              <div className={cn("grid gap-4", "carousel-grid")}>
                {group.map((company) => (
                  <div
                    key={company.id}
                    className={`rounded-lg p-3 flex flex-col items-center justify-center shadow-sm border border-gray-100 w-[100px] h-[42px]`}
                  >
                    <div className="relative h-[28px] w-[100px] flex items-center justify-center">
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

