import SilhouetteMainImage from "../../public/projects/silhouette/silhouette-main.png"
import Silhouette2 from "../../public/projects/silhouette/silhouette-2.png"
import Silhouette3 from "../../public/projects/silhouette/silhouette-3.png"

import MasteryMainImage from "../../public/projects/mastery/mainImage.png"
import MasteryChapterPage from "../../public/projects/mastery/image1.png"
import MasteryBooksPage from "../../public/projects/mastery/image2.png"

import TradingAnalystMainImage from "../../public/projects/tradingAnalyst/mainImage.png"
import TradingAnalystCodeView from "../../public/projects/tradingAnalyst/image1.png"
import TradingAnalystResultsView from "../../public/projects/tradingAnalyst/image2.png"
import TradingAnalystResultsView2 from "../../public/projects/tradingAnalyst/image3.png"

import QuotieMainImage from "../../public/projects/quotie/mainImage.png"
import Quotie2 from "../../public/projects/quotie/image1.png"
import Quotie3 from "../../public/projects/quotie/image2.png"
import Quotie4 from "../../public/projects/quotie/image3.png"

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
            },
            { 
              slug: "strapi",
              desktopIcon: "/techLogos/desktop/strapi.png",
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
    },
    "trading": {
      mainImage: TradingAnalystMainImage,
      gallery: [
        TradingAnalystMainImage, 
        TradingAnalystCodeView, 
        TradingAnalystResultsView, 
        TradingAnalystResultsView2
      ],
      techStack: [
          { 
            slug: "swift",
            desktopIcon: "/techLogos/desktop/swift.png",
            mobileIcon: "/techLogos/mobile/swift.png"
          },
          { 
            slug: "vapor",
            desktopIcon: "/techLogos/desktop/vapor.png",
            mobileIcon: "/techLogos/mobile/vapor.png"
          }
      ],
      typeSlug: "trading",
      projectOverview: [
          "Trading Strategy Analyst is a sophisticated Swift-based platform for developing, testing, and analyzing cryptocurrency trading strategies.",
          "The application allows users to create and backtest trading algorithms across different exchanges and trading pairs."
      ],
      keyFeatures: [
          { title: "Multi-Exchange Support", description: "Trading strategies can be developed for Binance, Bittrex, and other exchanges." },
          { title: "Flexible Interval Selection", description: "Support for multiple candlestick intervals including 1 Hour and 1 Day." },
          { title: "Cryptocurrency Pair Trading", description: "Trade multiple cryptocurrency pairs like ADA/GEL, BTC/USD, ETH/EUR." },
          { title: "Strategy Development", description: "Write custom trading strategies in Python with comprehensive testing capabilities." },
          { title: "Backtesting", description: "Detailed test results and performance metrics for developed trading strategies." },
          { title: "Strategy Management", description: "Save and manage multiple trading strategies within the application." }
      ],
      developmentProcess: [
          "Developed using Python with a focus on algorithmic trading and strategy analysis.",
          "1. Design Phase: Created intuitive UI for trading strategy development",
          "2. Backend Development: Implemented robust Swift trading algorithm framework",
          "3. Exchange Integration: Developed secure API connections with multiple exchanges",
          "4. Testing & Optimization: Ensured comprehensive backtesting and strategy validation"
      ],
      resultsMetrics: [
          { value: "2+", label: "Supported Exchanges" },
          { value: "5+", label: "Cryptocurrency Pairs" },
          { value: "2", label: "Candlestick Intervals" },
          { value: "Unlimited", label: "Strategy Saves" }
      ],
      testimonial: {
          text: "A powerful tool for developing and testing cryptocurrency trading strategies with unparalleled flexibility.",
          author: {
              name: "Trader",
              position: "Algorithmic Trading Enthusiast"
          }
      },
      relatedProjects: [
          { name: "Strategy Editor", description: "Advanced code editor for trading algorithms" },
          { name: "Backtesting Engine", description: "Comprehensive performance analysis and strategy validation" },
          { name: "Exchange Connector", description: "Secure API integrations with multiple trading platforms" }
      ]
    },
    "quotie": {
      mainImage: QuotieMainImage, // Placeholder for main image
      gallery: [
          Quotie2, // Replace with actual image paths
          Quotie3, 
          Quotie4
      ],
      techStack: [
          { 
            slug: "swift",
            desktopIcon: "/techLogos/desktop/swift.png",
            mobileIcon: "/techLogos/mobile/swift.png"
          },
          { 
            slug: "vapor",
            desktopIcon: "/techLogos/desktop/vapor.png",
            mobileIcon: "/techLogos/mobile/vapor.png"
          }
      ],
      typeSlug: "mobile",
      projectOverview: [
          "Quotie is an innovative mobile application for discovering, categorizing, and exploring inspirational quotes from notable figures.",
          "The app provides a user-friendly interface for browsing quotes across various categories and themes."
      ],
      keyFeatures: [
          { title: "Quote Categories", description: "Multiple categories including Relationships, Self Improvement, and more." },
          { title: "Diverse Quote Sources", description: "Quotes from influential personalities like Einstein, Socrates, Elon Musk, and Paolo Coelho." },
          { title: "Category Filtering", description: "Easy filtering by topics such as Friendship, Attitude, Education, Fitness, and Love." },
          { title: "Gallery View", description: "Visually appealing gallery of quotes with background images." },
          { title: "Quote Details", description: "Comprehensive quote information with author profiles." },
          { title: "Download Option", description: "Ability to download and share quotes" }
      ],
      developmentProcess: [
          "Developed using modern mobile app technologies with a focus on user experience and content discovery.",
          "1. Design Phase: Created intuitive UI/UX for quote browsing",
          "2. Frontend Development: Implemented responsive iOS Native components",
          "3. Content Integration: Curated quotes from various notable figures",
          "4. Testing & Optimization: Ensured smooth navigation and content presentation"
      ],
      resultsMetrics: [
          { value: "6+", label: "Quote Categories" },
          { value: "10+", label: "Featured Authors" },
          { value: "100+", label: "Quotes Available" },
          { value: "Multiple", label: "Filtering Options" }
      ],
      testimonial: {
          text: "A beautifully designed app that brings inspiration and wisdom from great minds right to your fingertips.",
          author: {
              name: "User",
              position: "Quote Enthusiast"
          }
      },
      relatedProjects: [
          { name: "Category Browsing", description: "Intuitive quote category navigation" },
          { name: "Author Profiles", description: "Detailed information about quote authors" },
          { name: "Quote Sharing", description: "Easy sharing and download functionality" }
      ]
  }
};

