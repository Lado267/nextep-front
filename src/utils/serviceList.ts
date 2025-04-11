import desktopServiceIcon from "../../public/serviceIcons/desktopIcon.png"
import backendIcon from "../../public/serviceIcons/backendIcon.png"
import mobileIcon from "../../public/serviceIcons/mobileIcon.png"
import designIcon from "../../public/serviceIcons/designIcon.png"

// Combine all projects into one array with sections
  export const desktopServices = [
    {   
        title: "Web Development", 
        subtitle: "Modern web apps with responsive design and fast load times",
        icon: desktopServiceIcon, 
        slug: "web-service"
    },
    { 
        title: "Backend Development", 
        subtitle: "Robust APIs and scalable server infrastructure solutions",
        icon: backendIcon,
        slug: "backend-service" 
    },
    { 
        title: "Mobile Development", 
        subtitle: "Native and cross-platform apps for iOS and Android",
        icon: mobileIcon,
        slug: "mobile-service" 
    },
    { 
        title: "User Interface Design", 
        subtitle: "Intuitive and engaging user interfaces with UX focus",
        icon: designIcon,
        slug: "ui-service" 
    },
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
    }
];

