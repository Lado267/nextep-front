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
import { url } from "inspector";

const mobileCarouselData = [
    {
      id: "1",
      name: "Bank of Georgia",
      logoUrl: bog, // Replace with actual URL
      url: "https://www.bog.ge/en/",
    },
    {
      id: "2",
      name: "Arcton",
      logoUrl: arcton, // Replace with actual URL
      url: "https://arcton.com/",
    },
    {
      id: "3",
      name: "Making Science",
      logoUrl: sweeft, // Replace with actual URL
      url: "https://www.makingscience.com/en/",
    },
    {
      id: "4",
      name: "Philip Morris International",
      logoUrl: philip, // Replace with actual URL
      url: "https://www.pmi.com/",
    },
    {
      id: "5",
      name: "Crocobet",
      logoUrl: croco, // Replace with actual URL
      url: "https://www.crocobet.com/",
    },
    {
      id: "6",
      name: "AccessBank",
      logoUrl: access, // Replace with actual URL
      url: "https://www.accessbank.com/",
    },
    {
      id: "7",
      name: "Extra",
      logoUrl: extra, // Replace with actual URL
      url: "https://extra.ge/",
    },
]
const desktopCompanyData = [
  {
    id: "1",
    name: "Bank of Georgia",
    logoUrl: bogDesktop,
    url: "https://www.bog.ge/en/",
  },
  {
    id: "2",
    name: "Arcton",
    logoUrl: arctonDesktop,
    url: "https://arcton.com/",
  },
  {
    id: "3",
    name: "Making Science",
    logoUrl: sweeftDesktop,
    url: "https://www.makingscience.com/en/",
  },
  {
    id: "4",
    name: "Philip Morris International",
    logoUrl: philipDesktop,
    url: "https://www.pmi.com/",
  },
  {
    id: "5",
    name: "Crocobet",
    logoUrl: crocoDesktop,
    url: "https://www.crocobet.com/",
  },
  {
    id: "6",
    name: "AccessBank",
    logoUrl: accessDesktop,
    url: "https://www.accessbank.com/",
  },
  {
    id: "7",
    name: "Extra",
    logoUrl: extraDesktop,
    url: "https://extra.ge/",
  },
]

const desktopCarouselData = prepareCompaniesForCarousel(desktopCompanyData, false)


export const HomePageAlt = {
    "mobile": {
        "hero": {
            "heroTitle": `Take a step from legacy\nmethods to digital business\nexcellence`,
            "heroSubtitle1": "Every modern business needs digital\nrepresentation or an innovative technological\nsolution.",
            "heroSubtitle2": "We will level up your business to the Nextep of\ntechnological evolution",
            "heroImageAlt": "Digital business transformation expert examining interactive call-to-action interface",
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
            "heroSubtitle1": "Businesses thrive through digital presence\nor cutting-edge technological solutions",
            "heroSubtitle2": "We can guide your business twards\nthe future of digital innovation",
            "heroImageAlt": "Digital transformation expert examining interactive interface for modern tech solutions",
            "heroImageSrc": DesktopHomeHeroImage,
        },
        "carousel": {
            "title": "We have worked with",
            "companies": desktopCarouselData
        }
    }
}