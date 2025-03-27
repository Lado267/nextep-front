import SilhouetteMainImage from "../../public/projects/silhouette/silhouette-main.png"
import Silhouette2 from "../../public/projects/silhouette/silhouette-2.png"
import Silhouette3 from "../../public/projects/silhouette/silhouette-3.png"

export const projectDetails = {
    "silhouette": {
        mainImage: SilhouetteMainImage,
        gallery: [SilhouetteMainImage, Silhouette2, Silhouette3],
        techStack: [
            { 
              slug: "react",
              desktopIcon: "/techLogos/desktop/react.png",
              mobileIcon: "/techLogos/mobile/react.png"
            },
            { 
              slug: "nodejs",
              desktopIcon: "/techLogos/desktop/nodejs.png",
              mobileIcon: "/techLogos/mobile/nodejs.png"
            },
            { 
              slug: "postgresql",
              desktopIcon: "/techLogos/desktop/postgresql.png",
              mobileIcon: "/techLogos/mobile/postgresql.png"
            }
        ],
        typeSlug: "web",
        projectOverview: [
            "Silhouette is an e-commerce platform specializing in high-quality bodywear and shapewear, offering a seamless online shopping experience for customers.",
            "The website provides a user-friendly interface with detailed product information, size selection, and streamlined purchasing process."
        ],
        keyFeatures: [
            { title: "Product Variety", description: "Multiple styles of bodywear and shapewear with detailed product images and descriptions." },
            { title: "Size Selection", description: "Comprehensive size options from XXS to 2XL with clear size guide." },
            { title: "Color Options", description: "Multiple color choices for products, including black and neutral tones." },
            { title: "Responsive Design", description: "Mobile-friendly interface with consistent user experience across devices." },
            { title: "Product Zoom", description: "Multiple product view angles and detailed image gallery." },
            { title: "Easy Checkout", description: "Simplified ordering process with multiple delivery options." }
        ],
        developmentProcess: [
            "Developed using modern web technologies with a focus on user experience and performance.",
            "1. Design Phase: Created intuitive UI/UX for bodywear e-commerce platform",
            "2. Frontend Development: Implemented responsive React components",
            "3. Backend Integration: Developed secure API endpoints for product and order management",
            "4. Testing & Optimization: Ensured cross-device compatibility and performance"
        ],
        resultsMetrics: [
            { value: "4+", label: "Product Categories" },
            { value: "129 ₾", label: "Average Product Price" },
            { value: "7", label: "Size Options per Product" },
            { value: "2", label: "Color Options" }
        ],
        testimonial: {
            text: "Silhouette offers an exceptional online shopping experience with high-quality bodywear and an intuitive platform.",
            author: {
                name: "Customer",
                position: "Verified Buyer"
            }
        },
        relatedProjects: [
            { name: "Product Catalog", description: "Detailed bodywear and shapewear product listings" },
            { name: "Size Guide", description: "Comprehensive sizing information and recommendations" },
            { name: "Checkout System", description: "Streamlined online purchasing process" }
        ]
    }
};

