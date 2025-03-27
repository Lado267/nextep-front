import SilhouetteMainImage from "../../public/projects/silhouette/silhouette-main.png"
import Silhouette2 from "../../public/projects/silhouette/silhouette-2.png"
import Silhouette3 from "../../public/projects/silhouette/silhouette-3.png"

import MasteryMainImage from "../../public/projects/mastery/mainImage.png"
import MasteryChapterPage from "../../public/projects/mastery/image1.png"
import MasteryBooksPage from "../../public/projects/mastery/image2.png"

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
    },
    "mastery": {
        mainImage: MasteryMainImage,
        gallery: [MasteryMainImage, MasteryChapterPage, MasteryBooksPage],
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
            "Mastery is an innovative online learning platform that helps users quickly understand and master book content without reading the entire book.",
            "The platform offers interactive chapter-based learning with multiple difficulty levels and comprehensive book summaries."
        ],
        keyFeatures: [
            { title: "Chapter Mastery", description: "Interactive learning modules for each book chapter with quiz-based understanding." },
            { title: "Difficulty Levels", description: "Tailored learning experiences for Beginner, Student, and Master levels." },
            { title: "Book Categories", description: "Curated content across Health, Wealth, Relationships, and Spiritual domains." },
            { title: "One-Day Mastery", description: "Learn key insights from books in a single day without full reading." },
            { title: "Interactive Quizzes", description: "Comprehensive question sets to test and reinforce learning." },
            { title: "Book Selection", description: "Wide range of popular non-fiction books from renowned authors." }
        ],
        developmentProcess: [
            "Developed using modern web technologies with a focus on user learning experience.",
            "1. Design Phase: Created intuitive UI/UX for book learning platform",
            "2. Frontend Development: Implemented responsive React components",
            "3. Backend Integration: Developed secure API endpoints for learning progress tracking",
            "4. Testing & Optimization: Ensured cross-device compatibility and smooth user interaction"
        ],
        resultsMetrics: [
            { value: "4+", label: "Topic Categories" },
            { value: "10+", label: "Books Available" },
            { value: "3", label: "Learning Levels" },
            { value: "30", label: "Average Minutes per Book" }
        ],
        testimonial: {
            text: "Mastery provides an exceptional way to learn and understand book insights quickly and effectively.",
            author: {
                name: "User",
                position: "Verified Learner"
            }
        },
        relatedProjects: [
            { name: "Interactive Learning", description: "Chapter-based learning modules" },
            { name: "Book Summaries", description: "Concise key insights from popular books" },
            { name: "Progress Tracking", description: "User learning progress and achievement system" }
        ]
    }
};

