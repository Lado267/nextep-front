import Image from "next/image";
import { HomePageAlt } from "../utils/alt";
import { Button } from "../components/ui/button";
import CompanyCarousel from "../elements/carousel/company_carousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <section>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col">
            <h1>{HomePageAlt.mobile.hero.heroTitle}</h1>
            <h4>{HomePageAlt.mobile.hero.heroSubtitle1}</h4>
            <h4>{HomePageAlt.mobile.hero.heroSubtitle2}</h4>
          </div>
            <Image alt={HomePageAlt.mobile.hero.heroImageAlt} src={HomePageAlt.mobile.hero.heroImageSrc}></Image>
        </div>
      </section> */}
      <section className="flex flex-col gap-[12px] items-center justify-center">
          <h1 className="text-center">{HomePageAlt.mobile.hero.heroTitle}</h1>
          <h4 className="text-center text-tertiaryProject">{HomePageAlt.mobile.hero.heroSubtitle1}</h4>
          <h4 className="text-center text-tertiaryProject">{HomePageAlt.mobile.hero.heroSubtitle2}</h4>
          <Button variant="projectSelected">Get in touch</Button>
          <Image alt={HomePageAlt.mobile.hero.heroImageAlt} 
                 src={HomePageAlt.mobile.hero.heroImageSrc}
                 className="mt-[24px] w-[90vw]"/>
      </section>
      <section>
        <CompanyCarousel companies={HomePageAlt.mobile.carousel.companies} isMobile={true}/>
      </section>
    </div>
  );
}
