import Image from "next/image";
import { HomePageAlt } from "../utils/alt";
import { Button } from "../components/ui/button";
import CompanyCarouselMobile from "../elements/carousel/mobile/company_carousel_mobile";
import CompanyCarouselDesktop from "../elements/carousel/desktop/company_carousel_desktop";
import "./page.css"
import "./globals.css"

export default function Home() {
  return (
    <>
      <section className="desktop-content-appearance w-full desktop-background">
          <div className="flex flex-col gap-[24px] mt-[44px]">
            <h1>{HomePageAlt.desktop.hero.heroTitle}</h1>
            <div className="flex flex-col gap-[28px]">
              <h4>{HomePageAlt.desktop.hero.heroSubtitle1}</h4>
              <h4>{HomePageAlt.desktop.hero.heroSubtitle2}</h4>
              <div className="flex flex-row gap-[16px]">
                <Button variant="projectUnselected">View Projects</Button>
                <Button variant="projectSelected">Get in touch</Button>
              </div>
            </div>
          </div>
      </section>
      <section className="desktop-content-appearance">
        <CompanyCarouselDesktop companies={HomePageAlt.desktop.carousel.companies}/>
      </section>

      <section className="flex flex-col mobile-content-appearance gap-[12px] items-center justify-center w-[90vw]">
          <h1 className="text-center">{HomePageAlt.mobile.hero.heroTitle}</h1>
          <h4 className="text-center text-tertiaryProject">{HomePageAlt.mobile.hero.heroSubtitle1}</h4>
          <h4 className="text-center text-tertiaryProject">{HomePageAlt.mobile.hero.heroSubtitle2}</h4>
          <Button variant="projectSelected">Get in touch</Button>
          <Image alt={HomePageAlt.mobile.hero.heroImageAlt} 
                 src={HomePageAlt.mobile.hero.heroImageSrc}
                 className="mt-[24px] w-full"/>
      </section>
      <section className="mobile-content-appearance">
        <CompanyCarouselMobile companies={HomePageAlt.mobile.carousel.companies}/>
      </section>
    </>
  );
}
