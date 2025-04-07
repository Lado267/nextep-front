import DesktopHomeHeroImage from "../../public/desktopHero.png";
import MobileHomeHeroImage from "../../public/mobileHero.png";
import { prepareCompaniesForCarousel } from "./functions";

import bog from "../../public/companyLogos/mobile/bog.png";
import arcton from "../../public/companyLogos/mobile/arcton.png";
import access from "../../public/companyLogos/mobile/access.png";
import extra from "../../public/companyLogos/mobile/extra.png";
import croco from "../../public/companyLogos/mobile/croco.png";
import sweeft from "../../public/companyLogos/mobile/sweeft.png";
import philip from "../../public/companyLogos/mobile/philip.png";

import bogDesktop from "../../public/companyLogos/desktop/bogDesktop.png";
import arctonDesktop from "../../public/companyLogos/desktop/arctonDesktop.png";
import accessDesktop from "../../public/companyLogos/desktop/accessDesktop.png";
import extraDesktop from "../../public/companyLogos/desktop/extraDesktop.png";
import crocoDesktop from "../../public/companyLogos/desktop/crocoDesktop.png";
import sweeftDesktop from "../../public/companyLogos/desktop/sweeftDesktop.png";
import philipDesktop from "../../public/companyLogos/desktop/philipDesktop.png";

const mobileCarouselData = [
    {
      id: "1",
      name: "Bank of Georgia",
      logoUrl: bog, // Replace with actual URL
    },
    {
      id: "2",
      name: "Arcton",
      logoUrl: arcton, // Replace with actual URL
    },
    {
      id: "3",
      name: "Making Science",
      logoUrl: sweeft, // Replace with actual URL
    },
    {
      id: "4",
      name: "Philip Morris International",
      logoUrl: philip, // Replace with actual URL
    },
    {
      id: "5",
      name: "Crocobet",
      logoUrl: croco, // Replace with actual URL
    },
    {
      id: "6",
      name: "AccessBank",
      logoUrl: access, // Replace with actual URL
    },
    {
      id: "7",
      name: "Extra",
      logoUrl: extra, // Replace with actual URL
    },
]
const desktopCompanyData = [
  {
    id: "1",
    name: "Bank of Georgia",
    logoUrl: bogDesktop,
  },
  {
    id: "2",
    name: "Arcton",
    logoUrl: arctonDesktop,
  },
  {
    id: "3",
    name: "Making Science",
    logoUrl: sweeftDesktop,
  },
  {
    id: "4",
    name: "Philip Morris International",
    logoUrl: philipDesktop,
  },
  {
    id: "5",
    name: "Crocobet",
    logoUrl: crocoDesktop,
  },
  {
    id: "6",
    name: "AccessBank",
    logoUrl: accessDesktop,
  },
  {
    id: "7",
    name: "Extra",
    logoUrl: extraDesktop,
  },
]

const desktopCarouselData = prepareCompaniesForCarousel(desktopCompanyData, false)


export const HomePageAlt = {
  "mobile": {
    "hero": {
      "heroTitle": "Move beyond traditional methods\nEmbrace the digital evolution",
      "heroSubtitle1": "Businesses thrive through digital presence\nor cutting-edge technological solutions",
      "heroSubtitle2": "We can guide your business twards\nthe future of digital innovation",
      "heroImageAlt": "Digital business transformation expert examining interactive call-to-action interface, showcasing modern tech solutions",
      "heroImageSrc": MobileHomeHeroImage,
    },
    "carousel": {
      "title": "We have worked with",
      "companies": mobileCarouselData
    }
  },
  "desktop": {
    "hero": {
      "heroTitle": "Move beyond traditional methods\nEmbrace the digital evolution",
      "heroSubtitle1": "Businesses thrive through digital presence\nand cutting-edge technological solutions",
      "heroSubtitle2": "We expertly can guide your business\ntowards the future of digital innovation",
      "heroImageAlt": "Digital business transformation expert examining interactive call-to-action interface, showcasing modern tech solutions",
      "heroImageSrc": DesktopHomeHeroImage,
    },
    "carousel": {
      "title": "We have worked with",
      "companies": desktopCarouselData
    }
  }
}