import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
import { cn } from "@/lib/utils"
import "./company_carousel.css"

// Define the company data type
export interface Company {
  id: string
  name: string
  logoUrl: string
}

interface CompanyCarouselProps {
  companies: Company[]
  className?: string
}

export default function CompanyCarousel({ companies, className }: CompanyCarouselProps) {

    let carouselItems = companies.map((company) => {
        return [company]
    })

  return (
    <div className={cn("w-[100vw]", className)}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[100vw]"
      >
        <CarouselContent className="-ml-4">
          {carouselItems.map((group, groupIndex) => (
            <CarouselItem
              key={`group-${groupIndex}`}
              className="pl-4 basis-full basis-1/2"
            >
              <div className={cn("grid gap-4", "carousel-grid")}>
                {group.map((company) => (
                  <div
                    key={company.id}
                    className="bg-white rounded-lg p-6 h-[100vh] flex flex-col items-center justify-center shadow-sm border border-gray-100"
                  >
                    <div className="relative w-[100vw] h-16">
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
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  )
}

