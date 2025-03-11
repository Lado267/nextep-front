import DesktopHomeHeroImage from "../../public/desktopHero.png";
import MobileHomeHeroImage from "../../public/mobileHero.png";
import { prepareCompaniesForCarousel } from "./functions";

const mobileCarouselData = [
    {
      id: "1",
      name: "Bank of Georgia",
      logoUrl: "/placeholder.svg?height=64&width=200", // Replace with actual URL
    },
    {
      id: "2",
      name: "Arclon",
      logoUrl: "/placeholder.svg?height=64&width=200", // Replace with actual URL
    },
    {
      id: "3",
      name: "Making Science",
      logoUrl: "/placeholder.svg?height=64&width=200", // Replace with actual URL
    },
    {
      id: "4",
      name: "Philip Morris International",
      logoUrl: "/placeholder.svg?height=64&width=200", // Replace with actual URL
    },
    {
      id: "5",
      name: "GreenYellow",
      logoUrl: "/placeholder.svg?height=64&width=200", // Replace with actual URL
    },
    {
      id: "6",
      name: "AccessBank",
      logoUrl: "/placeholder.svg?height=64&width=200", // Replace with actual URL
    },
    {
      id: "7",
      name: "Extra",
      logoUrl: "/placeholder.svg?height=64&width=200", // Replace with actual URL
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