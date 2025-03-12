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

const desktopCarouselData = prepareCompaniesForCarousel(mobileCarouselData, false)


export const HomePageAlt = {
    "mobile": {
        "hero": {
            "heroTitle": `Take a step from legacy\nmethods to digital business\nexcellence`,
            "heroSubtitle1": "Every modern business needs digital\nrepresentation or an innovative technological\nsolution.",
            "heroSubtitle2": "We will level up your business to the Nextep of\ntechnological evolution",
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
            "heroTitle": "Take a step from the legacy methods towards digital business excellence",
            "heroSubtitle1": "Every modern business needs digital representation or an innovative technological solution.",
            "heroSubtitle2": "We will level up your business to the Nextep of technological evolution",
            "heroImageAlt": "Digital business transformation expert examining interactive call-to-action interface, showcasing modern tech solutions",
            "heroImageSrc": DesktopHomeHeroImage,
        },
        "carousel": {
            "title": "We have worked with",
            "companies": desktopCarouselData
        }
    }
}