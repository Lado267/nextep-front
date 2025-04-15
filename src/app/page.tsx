import Image from "next/image";
import { HomePageAlt } from "../utils/alt";
import { Button } from "../components/ui/button";
import CompanyCarouselMobile from "../elements/carousel/mobile/company_carousel_mobile";
import CompanyCarouselDesktop from "../elements/carousel/desktop/company_carousel_desktop";
import "./page.css"
import "./globals.css"
import Link from "next/link";

export const metadata = {
  title: "Nextep | Home - Digital Services, AI & Web Solutions",
  description: "Explore NextEp's digital services—websites, apps, AI tools, SEO & APIs. View our projects and get in touch to grow your online presence today.",
  alternates: {
    canonical: "https://nextep.solutions/",
  },
};
export default function Home() {
  return (
    <div className="dynamic-width overflow-x-hidden">
      <section className="desktop-content-appearance w-full desktop-background mt-[44px]">
        <div className="flex flex-col gap-[24px] mt-[8px]">
          <h1>{HomePageAlt.desktop.hero.heroTitle}</h1>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-tertiaryProject text-left text-[28px]">{HomePageAlt.desktop.hero.heroSubtitle1}</h2>
            <h2 className="text-tertiaryProject text-left text-[28px]">{HomePageAlt.desktop.hero.heroSubtitle2}</h2>
            <div className="flex flex-row gap-[16px]">
              <Link href="/services">
                <Button className="w-[160px] h-[40px] secondary-button-font" variant="projectSecondary">View Services</Button>
              </Link>
              <Link href="/contact">
                <Button className="w-[160px] h-[40px] hero-button-font" variant="projectSelected">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="desktop-content-appearance mt-[60px]">
        <CompanyCarouselDesktop companies={HomePageAlt.desktop.carousel.companies} />
      </section>
      <section className="desktop-content-appearance mt-[80px] flex-col-container gap-[24px]">
        <p className="word-wrap text-primaryProject bg-tertiaryProject rounded-[8px] p-[16px] flex flex-col text-[16px] font-medium">
          Discover our comprehensive digital services spanning web development, AI solutions, SEO, Marketing and custom software engineering. We deliver innovative websites, mobile apps, and enterprise solutions that drive measurable results. Our experienced team specializes in modern technologies and agile development practices to ensure your business stays ahead in the digital landscape. From strategic digital marketing campaigns to advanced search engine optimization, we help boost your online visibility and market reach. Our data-driven approach combines technical expertise with marketing insights to create solutions that not only look great but also perform exceptionally well in today&apos;s competitive digital environment.
        </p>
        <p className="word-wrap text-tertiaryProject bg-whiteProject rounded-[8px] p-[16px] flex flex-col text-[20px] font-medium">
          Move beyond traditional methods and embrace digital evolution with us. We can help you transform outdated processes into dynamic experiences!
          Allow us to elevate your online presence through innovative approaches.
        </p>

        <p className="text-tertiaryProject text-[20px] pl-[12px]">
          Explore our <Link href="/services" className="text-quaternaryProject hover:underline">digital solutions</Link>, including website creation, custom software development, marketing, AI and consulting.
        </p>
        <p className="word-wrap text-tertiaryProject bg-whiteProject rounded-[8px] p-[16px] text-[20px] font-medium">
          Whether you&apos;re looking to enhance your online presence, streamline your operations, or develop cutting-edge applications, NextEp is your trusted partner for all your digital needs. <Link href="/contact" className="text-quaternaryProject hover:underline">Start a project</Link> directly to discuss your requirements.
        </p>
      </section>

      <section className="flex flex-col mobile-content-appearance gap-[12px] items-center justify-center pl-[5vw] pr-[5wv]">
        <h2 className="text-center">{HomePageAlt.mobile.hero.heroTitle}</h2>
        <h4 className="text-center text-tertiaryProject">{HomePageAlt.mobile.hero.heroSubtitle1}</h4>
        <h4 className="text-center text-tertiaryProject">{HomePageAlt.mobile.hero.heroSubtitle2}</h4>
        <Link href="/contact">
          <Button variant="projectSelected">Schedule Consultation</Button>
        </Link>
        <Image alt={HomePageAlt.mobile.hero.heroImageAlt}
          src={HomePageAlt.mobile.hero.heroImageSrc}
          className="mt-[24px]" />
      </section>

      <section className="mobile-content-appearance mt-[32px] flex flex-col gap-[24px] pl-[5vw] pr-[5vw] text-center">
        <p className="word-wrap text-tertiaryProject bg-whiteProject rounded-[8px] mt-[8px] p-[24px] flex flex-col gap-[16px] text-[16px] font-medium">
          Whether you&apos;re looking to enhance your online presence, streamline your operations, or develop cutting-edge applications, NextEp is your trusted partner for all your digital needs.
        </p>
      </section>

      <section className="mobile-content-appearance-carousel">
        <CompanyCarouselMobile companies={HomePageAlt.mobile.carousel.companies} />
      </section>
    </div>
  );
}
