import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
import { cn } from "@/lib/utils"
import "./company_carousel.css"
import { HomePageAlt } from "@/utils/alt"

// Define the company data type
export interface Company {
  id: string
  name: string
  logoUrl: string
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
    <div className={cn("w-[100vw] flex flex-col gap-[12px]", className)}>
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
              className="pl-4 basis-full basis-1/2"
            >
              <div className={cn("grid gap-4", "carousel-grid")}>
                {group.map((company) => (
                  <div
                    key={company.id}
                    className="rounded-lg p-6 h-[100vh] flex flex-col items-center justify-center shadow-sm border border-gray-100"
                  >
                    <div className={`relative ${isMobile ? "w-[100px] h-[40px]" : "w-[240px] h-[100px]"} h-16`}>
                      <Image
                        src={company.logoUrl || "/placeholder.svg?height=64&width=200"}
                        alt={`${company.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">{company.name}</p>
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

