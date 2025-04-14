import desktopServiceIcon from "../../public/serviceIcons/desktopIcon.png";
import backendIcon from "../../public/serviceIcons/backendIcon.png";
import mobileIcon from "../../public/serviceIcons/mobileIcon.png";
import designIcon from "../../public/serviceIcons/designIcon.png";
import aiIcon from "../../public/serviceIcons/aiIcon.png";
import seoIcon from "../../public/serviceIcons/seoIcon.png";
import marketingIcon from "../../public/serviceIcons/marketingIcon.png";
import consultingIcon from "../../public/serviceIcons/consultingIcon.png";

export const serviceDetails = {
  "web-service": {
    title: "Web Development",
    icon: desktopServiceIcon,
    description:
      "Transform your online presence with our custom web development solutions. We create responsive, user-friendly websites that drive business growth and provide exceptional user experiences.",
    features: [
      {
        title: "Custom Website Development",
        description:
          "Tailored solutions that align with your brand identity and business objectives. We build websites that stand out from the competition.",
      },
      {
        title: "E-commerce Solutions",
        description:
          "Full-featured online stores with secure payment gateways, inventory management, and user-friendly interfaces to maximize your sales.",
      },
      {
        title: "Content Management Systems",
        description:
          "Easy-to-use CMS solutions that allow you to update your website content without technical expertise.",
      },
      {
        title: "Website Optimization",
        description:
          "Improve your website's performance, loading speed, and search engine ranking to reach more customers.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "We analyze your business needs, target audience, and objectives to create a strategic plan for your website.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Our designers create wireframes and visual designs that align with your brand and provide optimal user experience.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Our developers bring the designs to life with clean, efficient code and responsive functionality.",
      },
      {
        step: 4,
        title: "Testing & Launch",
        description:
          "We thoroughly test your website across devices and browsers before launching it to ensure flawless performance.",
      },
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "WordPress",
    ],
  },
  "backend-service": {
    title: "Backend Development",
    icon: backendIcon,
    description:
      "Build robust and scalable server-side solutions with our expert backend development services. We create secure, efficient APIs and database architectures.",
    features: [
      {
        title: "API Development",
        description: "Custom RESTful and GraphQL APIs designed for scalability and performance.",
      },
      {
        title: "Database Architecture",
        description: "Optimized database design and implementation for efficient data management.",
      },
      {
        title: "Cloud Integration",
        description: "Seamless integration with cloud platforms like AWS, Azure, and Google Cloud.",
      },
      {
        title: "Security Implementation",
        description: "Robust security measures to protect your data and applications.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Deep dive into your backend needs and system requirements.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description: "Creating scalable and maintainable system architecture.",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Building secure and efficient backend systems.",
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description: "Thorough testing and smooth deployment to production.",
      },
    ],
    technologies: [
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Redis",
    ],
  },
  "mobile-service": {
    title: "Mobile Development",
    icon: mobileIcon,
    description:
      "Create powerful mobile applications for iOS and Android platforms. We deliver native and cross-platform solutions that engage users and drive results.",
    features: [
      {
        title: "Native App Development",
        description: "Platform-specific apps for iOS and Android with optimal performance.",
      },
      {
        title: "Cross-Platform Solutions",
        description: "Efficient multi-platform development using React Native and Flutter.",
      },
      {
        title: "UI/UX Design",
        description: "Engaging and intuitive mobile interfaces following platform guidelines.",
      },
      {
        title: "App Store Optimization",
        description: "Strategic app store presence and visibility optimization.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Mobile Strategy",
        description: "Defining your mobile app strategy and platform selection.",
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Creating engaging mobile interfaces and user experiences.",
      },
      {
        step: 3,
        title: "Development",
        description: "Building robust and performant mobile applications.",
      },
      {
        step: 4,
        title: "Testing & Launch",
        description: "Comprehensive testing and app store deployment.",
      },
    ],
    technologies: [
      "Swift",
      "Kotlin",
      "React Native",
      "Flutter",
      "Firebase",
      "iOS",
      "Android",
      "TypeScript",
    ],
  },
  "ui-service": {
    title: "User Interface Design",
    icon: designIcon,
    description:
      "Create beautiful and functional user interfaces that enhance user experience and drive engagement. We focus on user-centered design principles.",
    features: [
      {
        title: "UI Design",
        description: "Modern and aesthetic interface designs that reflect your brand.",
      },
      {
        title: "UX Research",
        description: "User research and testing to validate design decisions.",
      },
      {
        title: "Design Systems",
        description: "Comprehensive design systems for consistent user experiences.",
      },
      {
        title: "Interactive Prototypes",
        description: "High-fidelity prototypes for testing and visualization.",
      },
    ],
    process: [
      {
        step: 1,
        title: "User Research",
        description: "Understanding user needs and behavior patterns.",
      },
      {
        step: 2,
        title: "Design Concepts",
        description: "Creating initial design concepts and wireframes.",
      },
      {
        step: 3,
        title: "Visual Design",
        description: "Developing detailed visual designs and components.",
      },
      {
        step: 4,
        title: "Handoff & Implementation",
        description: "Preparing designs for development implementation.",
      },
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Principle",
      "Framer",
      "Zeplin",
      "Abstract",
    ],
  },
  "ai-service": {
    title: "AI Solutions",
    icon: aiIcon,
    description:
      "Leverage artificial intelligence and machine learning to transform your business with intelligent automation, predictive analytics, and data-driven insights.",
    features: [
      {
        title: "Machine Learning Models",
        description: "Custom ML solutions for prediction, classification, and pattern recognition.",
      },
      {
        title: "Natural Language Processing",
        description: "Text analysis, chatbots, and language understanding systems.",
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis for object detection and recognition.",
      },
      {
        title: "AI Integration",
        description: "Seamless integration of AI capabilities into existing systems.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Data Assessment",
        description: "Evaluating data quality and requirements for AI implementation.",
      },
      {
        step: 2,
        title: "Model Development",
        description: "Building and training custom AI models.",
      },
      {
        step: 3,
        title: "Integration",
        description: "Implementing AI solutions into production systems.",
      },
      {
        step: 4,
        title: "Monitoring & Optimization",
        description: "Continuous monitoring and improvement of AI models.",
      },
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenAI",
      "Python",
      "CUDA",
      "Keras",
      "NumPy",
    ],
  },
  "seo-service": {
    title: "SEO Optimization",
    icon: seoIcon,
    description:
      "Improve your online visibility and drive organic traffic with our comprehensive SEO services tailored to your business goals.",
    features: [
      {
        title: "Technical SEO",
        description: "Website optimization for search engine crawlers and performance.",
      },
      {
        title: "Content Strategy",
        description: "Keyword research and content optimization for better rankings.",
      },
      {
        title: "Link Building",
        description: "Strategic backlink acquisition and authority building.",
      },
      {
        title: "Analytics & Reporting",
        description: "Detailed performance tracking and ROI measurement.",
      },
    ],
    process: [
      {
        step: 1,
        title: "SEO Audit",
        description: "Comprehensive analysis of current SEO performance.",
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Creating customized SEO roadmap and tactics.",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Executing SEO optimizations and improvements.",
      },
      {
        step: 4,
        title: "Monitoring & Adjustment",
        description: "Tracking results and adjusting strategies as needed.",
      },
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Moz",
      "Screaming Frog",
      "Google Search Console",
      "Yoast SEO",
      "Schema Markup",
    ],
  },
  "marketing-service": {
    title: "Digital Marketing",
    icon: marketingIcon,
    description:
      "Drive growth with comprehensive digital marketing strategies that increase brand awareness, engage customers, and generate leads.",
    features: [
      {
        title: "Social Media Marketing",
        description: "Strategic social media presence and campaign management.",
      },
      {
        title: "Content Marketing",
        description: "Engaging content creation and distribution strategies.",
      },
      {
        title: "Email Marketing",
        description: "Targeted email campaigns and automation workflows.",
      },
      {
        title: "PPC Advertising",
        description: "Paid advertising campaigns across multiple platforms.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Market Analysis",
        description: "Understanding target audience and competition.",
      },
      {
        step: 2,
        title: "Strategy Creation",
        description: "Developing comprehensive marketing plans.",
      },
      {
        step: 3,
        title: "Campaign Execution",
        description: "Implementing marketing initiatives across channels.",
      },
      {
        step: 4,
        title: "Performance Analysis",
        description: "Measuring results and optimizing campaigns.",
      },
    ],
    technologies: [
      "HubSpot",
      "Mailchimp",
      "Google Ads",
      "Facebook Ads",
      "Buffer",
      "Hootsuite",
      "Google Analytics",
      "Salesforce",
    ],
  },
  "consulting-service": {
    title: "IT Consulting",
    icon: consultingIcon,
    description:
      "Strategic technology consulting to help businesses optimize operations, reduce costs, and drive digital transformation.",
    features: [
      {
        title: "Technology Assessment",
        description: "Evaluation of current systems and recommendations for improvement.",
      },
      {
        title: "Digital Strategy",
        description: "Strategic planning for digital transformation initiatives.",
      },
      {
        title: "Process Optimization",
        description: "Streamlining business processes through technology.",
      },
      {
        title: "Security Planning",
        description: "Cybersecurity strategy and implementation guidance.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Understanding business challenges and objectives.",
      },
      {
        step: 2,
        title: "Analysis",
        description: "Evaluating options and developing recommendations.",
      },
      {
        step: 3,
        title: "Strategy Development",
        description: "Creating actionable implementation plans.",
      },
      {
        step: 4,
        title: "Implementation Support",
        description: "Guidance and oversight during execution.",
      },
    ],
    technologies: [
      "ITIL",
      "Agile",
      "DevOps",
      "Cloud Architecture",
      "Enterprise Architecture",
      "Risk Management",
      "Business Analysis",
      "Project Management",
    ],
  },
};
