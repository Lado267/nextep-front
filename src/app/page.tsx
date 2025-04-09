import Image from "next/image";
import { HomePageAlt } from "../utils/alt";
import { Button } from "../components/ui/button";
import CompanyCarouselMobile from "../elements/carousel/mobile/company_carousel_mobile";
import CompanyCarouselDesktop from "../elements/carousel/desktop/company_carousel_desktop";
import "./page.css"
import "./globals.css"


export const metadata = {
  alternates: {
    canonical: "https://nextep.solutions/",
  },
};
export default function Home() {
  return (
    <>
      <section className="desktop-content-appearance w-full desktop-background mt-[44px]">
          <div className="flex flex-col gap-[24px] mt-[8px]">
            <h1>{HomePageAlt.desktop.hero.heroTitle}</h1>
            <div className="flex flex-col gap-[20px]">
              <h4 className="text-tertiaryProject">{HomePageAlt.desktop.hero.heroSubtitle1}</h4>
              <h4 className="text-tertiaryProject">{HomePageAlt.desktop.hero.heroSubtitle2}</h4>
              <div className="flex flex-row gap-[16px]">
                <a href="/services">
                  <Button className="w-[160px] h-[40px] secondary-button-font" variant="projectSecondary">Services</Button>
                </a>
                <a href="/contact">
                  <Button className="w-[160px] h-[40px] hero-button-font" variant="projectSelected">Get in touch</Button>
                </a>
              </div>
            </div>
          </div>
      </section>
      
      <section className="desktop-content-appearance mt-[44px]">
        <CompanyCarouselDesktop companies={HomePageAlt.desktop.carousel.companies}/>
      </section>

      <section className="flex flex-col mobile-content-appearance gap-[12px] items-center justify-center w-[90vw]">
          <h2 className="text-center">{HomePageAlt.mobile.hero.heroTitle}</h2>
          <h4 className="text-center text-tertiaryProject">{HomePageAlt.mobile.hero.heroSubtitle1}</h4>
          <h4 className="text-center text-tertiaryProject">{HomePageAlt.mobile.hero.heroSubtitle2}</h4>
          <a href="/contact">
            <Button variant="projectSelected">Get in touch</Button>
          </a>
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
