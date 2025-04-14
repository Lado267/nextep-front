import desktopServiceIcon from "../../public/serviceIcons/desktopIcon.png"
import backendIcon from "../../public/serviceIcons/backendIcon.png"
import mobileIcon from "../../public/serviceIcons/mobileIcon.png"
import designIcon from "../../public/serviceIcons/designIcon.png"
import aiIcon from "../../public/serviceIcons/aiIcon.png"
import marketingIcon from "../../public/serviceIcons/marketingIcon.png"
import seoIcon from "../../public/serviceIcons/seoIcon.png"
import consultingIcon from "../../public/serviceIcons/consultingIcon.png"

// Combine all projects into one array with sections
export const desktopServices = [
    {   
        title: "Web Development", 
        subtitle: "Modern web applications with responsive design, fast load times, and seamless user experience across all devices",
        icon: desktopServiceIcon, 
        slug: "web-service"
    },
    { 
        title: "Backend Development", 
        subtitle: "Robust APIs and scalable server infrastructure solutions designed for high performance and security",
        icon: backendIcon,
        slug: "backend-service" 
    },
    { 
        title: "Mobile Development", 
        subtitle: "Native and cross-platform applications for iOS and Android, delivering smooth performance and engaging user experience",
        icon: mobileIcon,
        slug: "mobile-service" 
    },
    { 
        title: "User Interface Design", 
        subtitle: "Intuitive and engaging user interfaces with UX focus, creating memorable digital experiences that convert",
        icon: designIcon,
        slug: "ui-service" 
    },
    {
        title: "AI Solutions",
        subtitle: "Custom LLMs and generative AI integration for your business, leveraging cutting-edge machine learning technologies",
        icon: aiIcon,
        slug: "ai-service"
    },
    {
        title: "Marketing Solutions",
        subtitle: "Comprehensive digital marketing strategies to grow your online presence and drive measurable business results",
        icon: marketingIcon,
        slug: "marketing-service"
    },
    {
        title: "SEO Optimization",
        subtitle: "Search engine optimization to increase your visibility, improve rankings, and drive organic traffic to your website",
        icon: seoIcon,
        slug: "seo-service"
    },
    {
        title: "Technical Consulting",
        subtitle: "Expert guidance on technology strategy and implementation, helping you make informed decisions for sustainable growth",
        icon: consultingIcon,
        slug: "consulting-service"
    }
];

export const mobileServices = [
    {
        title: "Web", 
        subtitle: "Modern web apps with responsive design and fast load times",
        icon: desktopServiceIcon, 
        slug: "web-service"
    },
    { 
        title: "Backend", 
        subtitle: "Robust APIs and scalable server infrastructure solutions",
        icon: backendIcon,
        slug: "backend-service" 
    },
    { 
        title: "Mobile", 
        subtitle: "Native and cross-platform apps for iOS and Android",
        icon: mobileIcon,
        slug: "mobile-service" 
    },
    { 
        title: "Design", 
        subtitle: "Intuitive and engaging user interfaces with UX focus",
        icon: designIcon,
        slug: "ui-service" 
    },
    {
        title: "AI",
        subtitle: "Custom LLMs and generative AI integration for your business",
        icon: aiIcon,
        slug: "ai-service"
    },
    {
        title: "Marketing",
        subtitle: "Digital marketing strategies to grow your online presence",
        icon: marketingIcon,
        slug: "marketing-service"
    },
    {
        title: "SEO",
        subtitle: "Search engine optimization to increase your visibility",
        icon: seoIcon,
        slug: "seo-service"
    },
    {
        title: "Consulting",
        subtitle: "Expert guidance on technology strategy and implementation",
        icon: consultingIcon,
        slug: "consulting-service"
    }
];

