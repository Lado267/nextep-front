import SilhouetteMainImage from "../../public/projects/silhouette/silhouette-main.png";
import Silhouette2 from "../../public/projects/silhouette/silhouette-2.png";
import Silhouette3 from "../../public/projects/silhouette/silhouette-3.png";

import MasteryMainImage from "../../public/projects/mastery/mainImage.png";
import MasteryChapterPage from "../../public/projects/mastery/image1.png";
import MasteryBooksPage from "../../public/projects/mastery/image2.png";

import TradingAnalystMainImage from "../../public/projects/tradingAnalyst/mainImage.png";
import TradingAnalystCodeView from "../../public/projects/tradingAnalyst/image1.png";
import TradingAnalystResultsView from "../../public/projects/tradingAnalyst/image2.png";
import TradingAnalystResultsView2 from "../../public/projects/tradingAnalyst/image3.png";

import BiAnalysisMainImage from "../../public/projects/biAnalysis/mainImage.jpg";

import QuotieMainImage from "../../public/projects/quotie/mainImage.png";
import Quotie2 from "../../public/projects/quotie/image1.png";
import Quotie3 from "../../public/projects/quotie/image2.png";
import Quotie4 from "../../public/projects/quotie/image3.png";

import IncidentManagerMainImage from "../../public/projects/incidentManager/mainImage.png";
import InsightPediaMainImage from "../../public/projects/insightpedia/mainImage.jpeg";

import RAGMainImage from "../../public/projects/RAG/mainImage.png";

export const projectDetails = {
  silhouette: {
    title: "Silhouette - Premium Bodywear E-commerce",
    mainImage: SilhouetteMainImage,
    gallery: [SilhouetteMainImage, Silhouette2, Silhouette3],
    techStack: [
      {
        slug: "react",
        desktopIcon: "/techLogos/desktop/react.png",
        mobileIcon: "/techLogos/mobile/react.png",
      },
      {
        slug: "nodejs",
        desktopIcon: "/techLogos/desktop/nodejs.png",
        mobileIcon: "/techLogos/mobile/nodejs.png",
      },
      {
        slug: "postgresql",
        desktopIcon: "/techLogos/desktop/postgresql.png",
        mobileIcon: "/techLogos/mobile/postgresql.png",
      },
    ],
    typeSlug: "web",
    projectOverview: [
      "Silhouette is a premium e-commerce platform for high-quality bodywear and shapewear. It offers an extensive collection of products from top designers, featuring sustainable and ethically sourced materials. The site differentiates itself through exceptional customer service and a seamless shopping experience.",
      
      "The website features a sophisticated interface with easy navigation and detailed product information including high-resolution images, size charts, and care instructions. Customers can filter products by size, color, style, and price. The streamlined purchasing process minimizes steps while maximizing convenience.",
      
      "Built for scalability and security, Silhouette incorporates secure payment processing, real-time inventory management, and efficient order fulfillment. Customer accounts provide personalized experiences through order tracking, wish lists, and purchase history, enhancing engagement and loyalty."
    ],
    keyFeatures: [
      {
        title: "Product Variety",
        description:
          "Multiple styles of bodywear and shapewear with detailed product images and descriptions.",
      },
      {
        title: "Size Selection",
        description: "Comprehensive size options from XXS to 2XL with clear size guide.",
      },
      {
        title: "Color Options",
        description: "Multiple color choices for products, including black and neutral tones.",
      },
      {
        title: "Responsive Design",
        description: "Mobile-friendly interface with consistent user experience across devices.",
      },
      {
        title: "Product Zoom",
        description: "Multiple product view angles and detailed image gallery.",
      },
      {
        title: "Easy Checkout",
        description: "Simplified ordering process with multiple delivery options.",
      },
    ],
    developmentProcess: [
      "Silhouette was developed using agile methodologies and modern technology stack, prioritizing user experience and scalability. The project followed these phases:",
      
      "Design Phase (4 weeks): The team conducted user research to understand customer preferences, performed competitive analysis, and created interactive prototypes for all key user journeys.",
      
      "Frontend Development (8 weeks): Built with React.js for its component architecture, implementing responsive design principles and performance optimization techniques including code splitting and lazy loading.",
      
      "Backend Integration (6 weeks): Created with Node.js and Express.js with PostgreSQL database, featuring secure API endpoints and third-party service integration.",
      
      "Testing and launch were conducted with comprehensive strategies for quality assurance and continuous deployment."
    ],
    resultsMetrics: [
      { value: "4+", label: "Product Categories" },
      { value: "129 ₾", label: "Average Product Price" },
      { value: "7", label: "Size Options per Product" },
      { value: "2", label: "Color Options" },
    ],
    testimonial: {
      text: "Silhouette offers an exceptional online shopping experience with high-quality bodywear and an intuitive platform.",
      author: {
        name: "Customer",
        position: "Verified Buyer",
      },
    },
    relatedProjects: [
      { name: "Product Catalog", description: "Detailed bodywear and shapewear product listings" },
      { name: "Size Guide", description: "Comprehensive sizing information and recommendations" },
      { name: "Checkout System", description: "Streamlined online purchasing process" },
    ],
  },
  mastery: {
    title: "Mastery - Speed Learning Platform",
    mainImage: MasteryMainImage,
    gallery: [MasteryMainImage, MasteryChapterPage, MasteryBooksPage],
    techStack: [
      {
        slug: "react",
        desktopIcon: "/techLogos/desktop/react.png",
        mobileIcon: "/techLogos/mobile/react.png",
      },
      {
        slug: "nodejs",
        desktopIcon: "/techLogos/desktop/nodejs.png",
        mobileIcon: "/techLogos/mobile/nodejs.png",
      },
      {
        slug: "postgresql",
        desktopIcon: "/techLogos/desktop/postgresql.png",
        mobileIcon: "/techLogos/mobile/postgresql.png",
      },
      {
        slug: "strapi",
        desktopIcon: "/techLogos/desktop/strapi.png",
        mobileIcon: "/techLogos/mobile/postgresql.png",
      },
    ],
    typeSlug: "web",
    projectOverview: [
      "Mastery is an innovative learning platform designed to accelerate understanding of book content without reading entire books. It serves ambitious professionals and students seeking efficient knowledge acquisition through advanced learning methodologies and AI-driven content analysis.",
      
      "The platform delivers interactive, chapter-based learning experiences with multiple difficulty levels. Content is crafted by subject matter experts and enhanced with AI insights. Users progress at their own pace through learning paths that align with their goals.",
      
      "Each book undergoes rigorous analysis and structuring, transforming dense text into digestible modules with knowledge checks and practical applications. The system incorporates spaced repetition for optimal retention and gamification elements to motivate learners."
    ],
    keyFeatures: [
      {
        title: "Chapter Mastery",
        description:
          "Interactive learning modules for each book chapter with quiz-based understanding.",
      },
      {
        title: "Difficulty Levels",
        description: "Tailored learning experiences for Beginner, Student, and Master levels.",
      },
      {
        title: "Book Categories",
        description: "Curated content across Health, Wealth, Relationships, and Spiritual domains.",
      },
      {
        title: "One-Day Mastery",
        description: "Learn key insights from books in a single day without full reading.",
      },
      {
        title: "Interactive Quizzes",
        description: "Comprehensive question sets to test and reinforce learning.",
      },
      {
        title: "Book Selection",
        description: "Wide range of popular non-fiction books from renowned authors.",
      },
    ],
    developmentProcess: [
      "Mastery was developed using a user-centric approach and agile framework, emphasizing educational effectiveness and technological innovation. Key phases included:",
      
      "Design Phase (6 weeks): Research into educational psychology principles and user needs, creating detailed UI/UX strategy focusing on intuitive learning environments.",
      
      "Frontend Development (10 weeks): Built with React.js, implementing responsive design for cross-device accessibility and interactive learning elements with gamification features.",
      
      "Backend Integration (8 weeks): Developed with Node.js and PostgreSQL, featuring adaptive learning algorithms that adjust content difficulty based on user performance.",
      
      "Content development, testing, and deployment were executed with continuous improvement processes based on user feedback."
    ],
    resultsMetrics: [
      { value: "4+", label: "Topic Categories" },
      { value: "10+", label: "Books Available" },
      { value: "3", label: "Learning Levels" },
      { value: "30", label: "Average Minutes per Book" },
    ],
    testimonial: {
      text: "Mastery provides an exceptional way to learn and understand book insights quickly and effectively.",
      author: {
        name: "User",
        position: "Verified Learner",
      },
    },
    relatedProjects: [
      { name: "Interactive Learning", description: "Chapter-based learning modules" },
      { name: "Book Summaries", description: "Concise key insights from popular books" },
      { name: "Progress Tracking", description: "User learning progress and achievement system" },
    ],
  },
  trading: {
    title: "Trading Strategy Analyst - Crypto Trading Platform",
    mainImage: TradingAnalystMainImage,
    gallery: [
      TradingAnalystMainImage,
      TradingAnalystCodeView,
      TradingAnalystResultsView,
      TradingAnalystResultsView2,
    ],
    techStack: [
      {
        slug: "swift",
        desktopIcon: "/techLogos/desktop/swift.png",
        mobileIcon: "/techLogos/mobile/swift.png",
      },
      {
        slug: "vapor",
        desktopIcon: "/techLogos/desktop/vapor.png",
        mobileIcon: "/techLogos/mobile/vapor.png",
      },
    ],
    typeSlug: "trading",
    projectOverview: [
      "Trading Strategy Analyst is a Swift-based platform for developing, testing, and analyzing cryptocurrency trading strategies. Designed for both novice and expert traders, it integrates advanced technical analysis with intuitive strategy development tools.",
      
      "The application supports algorithm creation and backtesting across multiple cryptocurrency exchanges and trading pairs. It incorporates technical indicators like Moving Averages, RSI, and MACD, allowing for custom trading logic implementation through a flexible scripting interface.",
      
      "Key features include real-time market data processing, comprehensive backtesting capabilities, and detailed performance analytics with metrics such as Sharpe Ratio and maximum drawdown. The platform also offers portfolio management tools and cloud integration for accessibility."
    ],
    keyFeatures: [
      {
        title: "Multi-Exchange Support",
        description:
          "Trading strategies can be developed for Binance, Bittrex, and other exchanges.",
      },
      {
        title: "Flexible Interval Selection",
        description: "Support for multiple candlestick intervals including 1 Hour and 1 Day.",
      },
      {
        title: "Cryptocurrency Pair Trading",
        description: "Trade multiple cryptocurrency pairs like ADA/GEL, BTC/USD, ETH/EUR.",
      },
      {
        title: "Strategy Development",
        description:
          "Write custom trading strategies in Python with comprehensive testing capabilities.",
      },
      {
        title: "Backtesting",
        description:
          "Detailed test results and performance metrics for developed trading strategies.",
      },
      {
        title: "Strategy Management",
        description: "Save and manage multiple trading strategies within the application.",
      },
    ],
    developmentProcess: [
      "Trading Strategy Analyst was developed iteratively, combining agile methodologies with algorithmic trading principles. The development process included:",
      
      "Design Phase (5 weeks): Market research to understand trader needs, competitive analysis, and user-centric design focusing on intuitive interfaces.",
      
      "Backend Development (9 weeks): Implemented using Swift and Vapor framework, creating modular architecture for trading algorithms and technical indicators.",
      
      "Exchange Integration (7 weeks): Connected with cryptocurrency exchanges through secure API implementations, featuring real-time data streaming and robust error handling.",
      
      "Testing focused on backtesting accuracy and performance optimization to ensure reliability under various market conditions."
    ],
    resultsMetrics: [
      { value: "2+", label: "Supported Exchanges" },
      { value: "5+", label: "Cryptocurrency Pairs" },
      { value: "2", label: "Candlestick Intervals" },
      { value: "Unlimited", label: "Strategy Saves" },
    ],
    testimonial: {
      text: "A powerful tool for developing and testing cryptocurrency trading strategies with unparalleled flexibility.",
      author: {
        name: "Trader",
        position: "Algorithmic Trading Enthusiast",
      },
    },
    relatedProjects: [
      { name: "Strategy Editor", description: "Advanced code editor for trading algorithms" },
      {
        name: "Backtesting Engine",
        description: "Comprehensive performance analysis and strategy validation",
      },
      {
        name: "Exchange Connector",
        description: "Secure API integrations with multiple trading platforms",
      },
    ],
  },
  quotie: {
    title: "Quotie - Inspirational Quote Discovery App",
    mainImage: QuotieMainImage, // Placeholder for main image
    gallery: [
      Quotie2, // Replace with actual image paths
      Quotie3,
      Quotie4,
    ],
    techStack: [
      {
        slug: "swift",
        desktopIcon: "/techLogos/desktop/swift.png",
        mobileIcon: "/techLogos/mobile/swift.png",
      },
      {
        slug: "vapor",
        desktopIcon: "/techLogos/desktop/vapor.png",
        mobileIcon: "/techLogos/mobile/vapor.png",
      },
    ],
    typeSlug: "mobile",
    projectOverview: [
      "Quotie is a mobile application designed for users seeking daily inspiration and wisdom. It serves as a digital sanctuary of quotes from notable figures across philosophy, science, arts, and leadership, aiming to uplift and motivate users.",
      
      "The app features an intuitive interface for seamless navigation and quote discovery across various categories and themes. Users can browse quotes with visually appealing layouts, search by author or keyword, and receive a daily inspirational quote. Customization options allow for personalized experiences."
    ],
    keyFeatures: [
      {
        title: "Quote Categories",
        description: "Multiple categories including Relationships, Self Improvement, and more.",
      },
      {
        title: "Diverse Quote Sources",
        description:
          "Quotes from influential personalities like Einstein, Socrates, Elon Musk, and Paolo Coelho.",
      },
      {
        title: "Category Filtering",
        description:
          "Easy filtering by topics such as Friendship, Attitude, Education, Fitness, and Love.",
      },
      {
        title: "Gallery View",
        description: "Visually appealing gallery of quotes with background images.",
      },
      {
        title: "Quote Details",
        description: "Comprehensive quote information with author profiles.",
      },
      { title: "Download Option", description: "Ability to download and share quotes" },
    ],
    developmentProcess: [
      "Quotie was developed using a mobile-first approach prioritizing user experience and content discoverability. The process included:",
      
      "Design Phase (4 weeks): User research to understand motivation for quote consumption, creating intuitive UI/UX focused on visual appeal and content discovery.",
      
      "Frontend Development (8 weeks): Built using Swift for iOS, implementing custom UI components for quote presentation and interaction features like swipe navigation.",
      
      "Content Integration (Ongoing): Curating diverse quotes from reputable sources, categorized by themes and topics, with regular content updates based on user engagement.",
      
      "Testing ensured cross-device compatibility and performance optimization for smooth browsing experience."
    ],
    resultsMetrics: [
      { value: "6+", label: "Quote Categories" },
      { value: "10+", label: "Featured Authors" },
      { value: "100+", label: "Quotes Available" },
      { value: "Multiple", label: "Filtering Options" },
    ],
    testimonial: {
      text: "A beautifully designed app that brings inspiration and wisdom from great minds right to your fingertips.",
      author: {
        name: "User",
        position: "Quote Enthusiast",
      },
    },
    relatedProjects: [
      { name: "Category Browsing", description: "Intuitive quote category navigation" },
      { name: "Author Profiles", description: "Detailed information about quote authors" },
      { name: "Quote Sharing", description: "Easy sharing and download functionality" },
    ],
  },
  "ai-db-analyzer": {
    title: "BiAnalysis - AI-Powered Business Intelligence",
    mainImage: BiAnalysisMainImage,
    gallery: [],
    techStack: [
      {
        slug: "python",
        desktopIcon: "/techLogos/desktop/python.png",
        mobileIcon: "/techLogos/mobile/python.png",
      },
      {
        slug: "llm",
        desktopIcon: "/techLogos/desktop/llm.jpg",
        mobileIcon: "/techLogos/mobile/llm.jpg",
      },
      {
        slug: "postgresql",
        desktopIcon: "/techLogos/desktop/postgresql.png",
        mobileIcon: "/techLogos/mobile/postgresql.png",
      },
    ],
    typeSlug: "backend",
    projectOverview: [
      "BiAnalysis is an AI-powered business intelligence platform that transforms raw data into actionable insights. Designed for organizations seeking to leverage their data assets, it provides tools for advanced analysis, visualization, and reporting.",
      
      "The platform processes complex datasets from various sources, transforming raw data into interpretable visualizations. It supports multiple data formats, ensures data consistency, and features an intuitive interface accessible to users with varying technical expertise.",
      
      "BiAnalysis enables businesses to unlock potential within their data, revealing hidden trends and opportunities. It spans various business functions from sales performance analysis to operational efficiency optimization, with predictive capabilities for proactive decision-making."
    ],
    keyFeatures: [
      {
        title: "Data Processing",
        description: "Advanced data cleaning and preprocessing capabilities ensure data quality and reliability for accurate analysis. BiAnalysis automatically handles data inconsistencies, missing values, and outliers, preparing data for effective analysis."
      },
      {
        title: "Statistical Analysis",
        description: "Comprehensive statistical tools, including regression analysis, correlation analysis, and hypothesis testing, enable in-depth data exploration and pattern discovery. Users can perform a wide range of statistical analyses to uncover significant relationships and trends within their data."
      },
      {
        title: "Visualization",
        description: "Interactive charts and graphs, such as dashboards, heatmaps, and scatter plots, provide dynamic data visualization for easy understanding and communication of insights. BiAnalysis offers a rich library of visualization options, allowing users to present data in compelling and informative ways."
      },
      {
        title: "Report Generation",
        description: "Automated report generation with customizable templates and key insights saves time and effort in creating comprehensive business reports. Users can schedule reports to be generated automatically and distributed to stakeholders, ensuring timely access to critical information."
      },
      {
        title: "Data Integration",
        description: "Support for multiple data sources and formats, including databases, spreadsheets, and cloud services, ensures seamless data integration from across the organization. BiAnalysis can connect to various data sources simultaneously, providing a unified view of business data."
      },
      {
        title: "Custom Metrics",
        description: "Define and track custom business metrics and KPIs tailored to specific business needs and objectives, allowing for focused performance monitoring and goal tracking. Users can create custom metrics and dashboards to monitor the KPIs that are most relevant to their business."
      }
    ],
    developmentProcess: [
      "BiAnalysis was developed using Python's ecosystem for data analysis and machine learning, following agile methodology with focus on performance and scalability. The process included:",
      
      "Design Phase (5 weeks): Analysis of business intelligence requirements, designing data processing pipelines and intuitive interfaces for data exploration.",
      
      "Core Development (10 weeks): Implementing advanced data analysis algorithms using NumPy, pandas, and scikit-learn with continuous performance optimization.",
      
      "Data Source Integration (7 weeks): Creating connectors for databases, spreadsheets, and cloud services with extensible architecture for future additions.",
      
      "Testing validated analysis accuracy using benchmark datasets and real-world business scenarios, with iterative refinements based on user feedback."
    ],
    resultsMetrics: [
      { value: "5+", label: "Analysis Types" },
      { value: "10+", label: "Report Templates" },
      { value: "3", label: "Data Formats" },
      { value: "99%", label: "Accuracy Rate" },
    ],
    testimonial: {
      text: "BiAnalysis transformed our data analysis process with its powerful features and intuitive interface.",
      author: {
        name: "Client",
        position: "Business Analyst",
      },
    },
  },
  "ai-incident-manager": {
    title: "AI Incident Manager - Smart JIRA Integration",
    mainImage: IncidentManagerMainImage,
    gallery: [],
    techStack: [
      {
        slug: "python",
        desktopIcon: "/techLogos/desktop/python.png",
        mobileIcon: "/techLogos/mobile/python.png",
      },
      {
        slug: "llm",
        desktopIcon: "/techLogos/desktop/llm.jpg",
        mobileIcon: "/techLogos/mobile/llm.jpg",
      },
      {
        slug: "jira",
        desktopIcon: "/techLogos/desktop/jira.png",
        mobileIcon: "/techLogos/mobile/jira.png",
      }
    ],
    typeSlug: "backend",
    projectOverview: [
      "AI Incident Manager is an intelligent system that integrates with JIRA to provide automated incident resolution capabilities. It leverages artificial intelligence to transform the incident lifecycle from detection to resolution, learning from past incidents to predict and prevent future occurrences.",
      
      "The platform offers automated incident categorization, intelligent routing, and AI-driven root cause analysis. It monitors system metrics in real-time to identify potential issues before they escalate, with predictive capabilities for resource allocation.",
      
      "Organizations implementing this system achieve reduced resolution times, lower operational costs, and improved service quality. It automates routine tasks while providing insights into incident patterns and system vulnerabilities for continuous improvement."
    ],
    keyFeatures: [
      {
        title: "JIRA Integration",
        description: "Seamless integration with JIRA for real-time incident tracking and updates, ensuring all incident-related activities are synchronized and visible within the JIRA platform. This integration allows for a unified workflow, eliminating the need to switch between different systems and improving team collaboration."
      },
      {
        title: "AI Analysis",
        description: "Intelligent incident analysis and categorization using machine learning algorithms, automatically classifying incidents based on patterns and historical data. This feature reduces manual effort in incident triage and ensures that incidents are quickly assigned to the relevant teams with accurate categorization."
      },
      {
        title: "Automated Response",
        description: "AI-powered incident response suggestions and automated workflows, providing guided steps for incident resolution and automating repetitive tasks. The system suggests optimal solutions based on similar past incidents, accelerating resolution times and reducing the reliance on manual troubleshooting."
      }
    ],
    developmentProcess: [
      "AI Incident Manager was developed using Python for AI algorithms and JIRA API integration, following agile sprints with continuous testing. Key phases included:",
      
      "Planning & Design (6 weeks): Analyzing incident workflows and JIRA functionalities, designing modular system architecture for integration points.",
      
      "AI Algorithm Development (10 weeks): Creating intelligent analysis models for incident categorization and root cause analysis using TensorFlow and scikit-learn.",
      
      "JIRA Integration (8 weeks): Implementing secure communication channels between the system and JIRA for ticket creation and workflow management.",
      
      "Testing validated AI response accuracy with diverse incident scenarios and ensured reliable operation under various conditions."
    ],
    resultsMetrics: [
      { value: "90%", label: "Accuracy Rate" },
      { value: "50%", label: "Time Saved" },
      { value: "24/7", label: "Monitoring" }
    ],
    testimonial: {
      text: "This AI-powered system has revolutionized our incident management process, significantly reducing resolution times and improving our team's efficiency.",
      author: {
        name: "Operations Manager",
        position: "Enterprise Client"
      }
    },
    relatedProjects: [
      { name: "Incident Analysis", description: "AI-based incident pattern recognition for proactive issue detection and prevention. This project focuses on using AI to identify patterns in incident data to predict and prevent future incidents, enhancing system stability and reducing reactive efforts." },
      { name: "JIRA Automation", description: "Automated incident workflow management within JIRA, streamlining incident handling from creation to closure. This includes automated notifications, escalations, and reporting, all managed within the JIRA environment to improve workflow efficiency and reduce manual intervention." }
    ],
  },
  insightpedia: {
    title: "InsightPedia - AI-Enhanced Wikipedia Explorer",
    mainImage: InsightPediaMainImage,
    gallery: [],
    techStack: [
      {
        slug: "python",
        desktopIcon: "/techLogos/desktop/python.png",
        mobileIcon: "/techLogos/mobile/python.png",
      },
      {
        slug: "llm",
        desktopIcon: "/techLogos/desktop/llm.jpg",
        mobileIcon: "/techLogos/mobile/llm.jpg",
      },
      {
        slug: "sql",
        desktopIcon: "/techLogos/desktop/sql.png",
        mobileIcon: "/techLogos/mobile/sql.png",
      },
    ],
    typeSlug: "backend",
    projectOverview: [
      "InsightPedia revolutionizes Wikipedia interaction using AI to search, analyze, and present information in digestible formats. It transforms vast knowledge into concise summaries while maintaining accuracy and relevance.",
      
      "The platform features semantic search capabilities, AI summarization, and topic analysis tools that identify key concepts and relationships. Users can customize summary length and complexity to meet their specific needs.",
      
      "Advanced features include comparative analysis between topics, historical context tracing, and reading level adaptation for different expertise levels. InsightPedia continuously evolves with regular updates to models and features based on user feedback."
    ],
    keyFeatures: [
      {
        title: "Smart Search",
        description: "Intelligent Wikipedia content search and retrieval using semantic understanding to match user intent with relevant articles, moving beyond simple keyword matching to deliver contextually appropriate results.",
      },
      {
        title: "AI Summarization",
        description: "Advanced LLM-based content summarization that distills lengthy Wikipedia articles into concise, informative summaries while preserving key facts and contextual relationships.",
      },
      {
        title: "Topic Analysis",
        description: "In-depth topic analysis and key points extraction that identifies central themes, critical information, and relationships between concepts to facilitate deeper understanding.",
      },
      {
        title: "Custom Summary Options",
        description: "User-configurable summary length, depth, and focus areas to deliver personalized information tailored to specific needs and time constraints.",
      },
      {
        title: "Cross-reference Integration",
        description: "Automatic linking of related topics and concepts to facilitate exploration and provide a comprehensive understanding of interconnected subjects.",
      },
      {
        title: "Multilingual Support",
        description: "Support for multiple languages, enabling users to access and summarize Wikipedia content from different language editions.",
      },
    ],
    developmentProcess: [
      "InsightPedia was developed with Python backend, advanced language models, and sophisticated information retrieval systems. Key phases included:",
      
      "Conceptualization (6 weeks): Analyzing user needs in Wikipedia consumption, creating product specifications and interactive prototypes for intuitive knowledge discovery.",
      
      "AI Model Development (10 weeks): Building and fine-tuning models for semantic search and summarization with focus on factual accuracy and contextual relevance.",
      
      "Backend Development (8 weeks): Creating data pipelines for Wikipedia content processing with performance optimization for real-time responses.",
      
      "Testing ensured AI model accuracy across diverse knowledge domains and system stability under high user volumes."
    ],
    resultsMetrics: [
      { value: "1M+", label: "Articles Access" },
      { value: "95%", label: "Summary Accuracy" },
      { value: "<5s", label: "Response Time" },
      { value: "85%", label: "User Satisfaction" },
      { value: "40%", label: "Time Saved" },
    ],
    testimonial: {
      text: "InsightPedia makes complex Wikipedia topics easily digestible through AI summaries. It has transformed how our students research topics, dramatically reducing the time needed to grasp new concepts while maintaining comprehensive understanding.",
      author: {
        name: "Educational Tech Lead",
        position: "Academic Institution",
      },
    },
    relatedProjects: [
      { name: "Content Analysis", description: "AI-powered content understanding and semantic processing system for large text repositories" },
      { name: "Knowledge Base", description: "Structured information storage and retrieval system with advanced query capabilities" },
      { name: "Learning Accelerator", description: "Educational technology platform focused on rapid knowledge acquisition and retention" },
    ],
  },
  "legal-rag": {
    title: "Legal RAG System - Intelligent Document Analysis",
    mainImage: RAGMainImage,
    gallery: [],
    techStack: [
      {
        slug: "python",
        desktopIcon: "/techLogos/desktop/python.png",
        mobileIcon: "/techLogos/mobile/python.png",
      },
      {
        slug: "llm",
        desktopIcon: "/techLogos/desktop/llm.jpg",
        mobileIcon: "/techLogos/mobile/llm.jpg",
      },
      {
        slug: "jira",
        desktopIcon: "/techLogos/desktop/jira.png",
        mobileIcon: "/techLogos/mobile/jira.png",
      },
      {
        slug: "vector-db",
        desktopIcon: "/techLogos/desktop/vectordb.png",
        mobileIcon: "/techLogos/mobile/vectordb.png",
      },
    ],
    typeSlug: "backend",
    projectOverview: [
      "Legal RAG System is a specialized platform for legal document analysis, combining vector search with language models to transform how professionals interact with legal repositories. It addresses challenges in legal research, language complexity, and information extraction.",
      
      "The system processes various document formats, extracts structured information, and transforms text into searchable vectors. Its semantic search capabilities find documents based on conceptual similarity rather than exact matches.",
      
      "The RAG approach ensures generated content is grounded in legal sources, maintaining accuracy critical in legal applications. Features include case summarization, contract analysis, and legal research assistance, organized into knowledge graphs revealing relationships between concepts."
    ],
    keyFeatures: [
      {
        title: "Document Analysis",
        description: "AI-powered legal document processing and analysis with specialized recognition of legal entities, clauses, citations, and arguments, enabling comprehensive understanding of complex legal texts.",
      },
      {
        title: "Vector Search",
        description: "Advanced vector database for efficient information retrieval using semantic search capabilities that understand legal concepts and terminology, moving beyond keyword-based approaches.",
      },
      {
        title: "Legal Context",
        description: "Specialized processing for legal terminology and context, including jurisdiction-specific understanding, precedent recognition, and legal principle identification.",
      },
      {
        title: "Document Generation",
        description: "Automated generation of legal document summaries, case briefs, and analytical reports that extract key information while maintaining legal accuracy and proper citation.",
      },
      {
        title: "Knowledge Base",
        description: "Comprehensive legal document repository and search functionality with built-in connections between related cases, statutes, regulations, and legal principles.",
      },
      {
        title: "Integration Support",
        description: "Seamless integration with existing legal systems including case management software, document management systems, and e-discovery platforms.",
      },
    ],
    developmentProcess: [
      "The Legal RAG System was developed combining expertise in legal informatics and artificial intelligence, prioritizing accuracy and security. Key phases included:",
      
      "Requirements Gathering (8 weeks): Consulting legal professionals to understand workflow challenges and ethical requirements for system design.",
      
      "Architecture Development (10 weeks): Creating document processing pipelines for legal texts with specialized NLP modules for citation extraction and entity recognition.",
      
      "AI Model Development (12 weeks): Fine-tuning language models on legal corpora for domain-specific understanding across practice areas.",
      
      "Testing included rigorous validation by legal experts to ensure outputs meet professional standards and comprehensive security audits for client confidentiality."
    ],
    resultsMetrics: [
      { value: "98%", label: "Accuracy Rate" },
      { value: "1M+", label: "Documents Processed" },
      { value: "<2s", label: "Search Time" },
      { value: "24/7", label: "Availability" },
      { value: "70%", label: "Time Saved" },
      { value: "5+", label: "Legal Specialties" },
    ],
    testimonial: {
      text: "This RAG system has transformed how we analyze and process legal documents, significantly improving our efficiency. What previously took associates hours of painstaking review can now be accomplished in minutes, with greater accuracy and consistency. The system's ability to connect relevant precedents and identify subtle legal relationships has given us a competitive edge in complex litigation and due diligence processes.",
      author: {
        name: "Legal Director",
        position: "Law Firm Partner",
      },
    },
    relatedProjects: [
      { name: "Document Processing", description: "Advanced legal document analysis with specialized extraction of legal entities, arguments, and citations" },
      { name: "Vector Search", description: "Efficient information retrieval system optimized for legal knowledge and terminology" },
      { name: "Legal AI", description: "AI-powered legal document management with comprehensive compliance and analytics capabilities" },
      { name: "Case Law Navigator", description: "Interactive system for exploring legal precedents and their relationships to current cases" },
    ],
  },
};
