'use client';

import Image from 'next/image';
import { Card, CardContent } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../../../components/ui/carousel"

export function TechStackCarousel({ techStack }) {
  return (
    <div className="max-w-full overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent className="-ml-3 gap-[0px]">
          {techStack.map((item, index) => (
            <CarouselItem key={index} className="pl-2 sm:basis-1/6 basis-1/4">
              <div className="">
                <Card>
                  <CardContent className="flex h-[84px] items-center justify-center p-6">
                    <img 
                      src={item.desktopIcon} 
                      alt={`${item.slug} logo`} 
                      className='tech-icon object-contain'
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}