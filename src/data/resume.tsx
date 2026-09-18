import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Muhammad\nShaheer\nMalik",
  initials: "MSM",
  url: "https://shaheer-portfolio-omega.vercel.app/",
  location: "ISLAMABAD, PAKISTAN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    `Full Stack Software Engineer building scalable SaaS & AI-driven Web and Mobile Applications. 
  
I specialize in Next.js, React.js, React Native, TypeScript and Node.js, Delivering production-ready Systems with real Business Impact. From role-based SaaS platforms to AI-Powered Mobile Apps.`,
  summary:
    `I’m a Full Stack Software Engineer with 2+ years of hands-on experience building end-to-end Web and Mobile Applications using Next.js, React, React Native, TypeScript and Node.js.
    
  I’ve worked on scalable SaaS products and AI-powered Platforms, Designing Systems that Automate Workflows, Improve Efficiency and Deliver seamless User Experiences. My work includes real-time Applications, Secure Authentication Systems, Cloud-Based Architectures and API-driven Backends.

  Beyond development, I value clean Architecture, Maintainable Code and Performance-Optimized UI/UX. I enjoy collaborating in Remote and Agile Environments, Taking ownership from Idea to Deployment and Continuously learning Modern Technologies.
  
  Currently open to Remote, International and Freelance Opportunities where I can contribute to impactful products and grow with a strong Engineering Team.`,
  avatarUrl: "/mine.png",

skills: [
  "Frontend & Mobile: Next.js, React.js, React Native, TypeScript, Tailwind CSS, Framer Motion",
  "Backend & APIs: Node.js, Express.js, FastAPI, REST API Design, Microservices",
  "AI & LLM Integration: Gemini AI, Prompt Engineering, LLM API Integration, NLP, TF-IDF, scikit-learn",
  "Databases & Storage: Firebase (Firestore, Auth, Storage), MongoDB, PostgreSQL, Cloudinary",
  "Testing & Issue Management: Jira, Debugging, Issue Reproduction, Root Cause Analysis, Functional Testing, UAT",
  "Dev Tools & Workflow: Git, GitHub, CI/CD, Agile/Scrum, Figma",
  "Cloud & Deployment: Firebase Hosting, Vercel, Cloud Functions",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "shaheermalik03@gmail.com",
    tel: "+923150058936",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/malik-shaheer03",
        icon: Icons.github,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/malik_shaheer03",
        icon: Icons.instagram,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/malik-shaheer03",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:shaheermalik03@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/Muhammad_Shaheer_Malik_Full_Stack_Resume.pdf",
        icon: Icons.resume,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Pakistan Digital Authority",
      badges: ["Full-time"],
      href: "",
      location: "Onsite",
      title: "Software Engineer",
      logoUrl: "/pda.png",
      start: "Sep 2026",
      end: "Present",
      description: (
        <>
          Contributing to the engineering and quality lifecycle of high-impact government digital platforms, working directly with stakeholders to understand, investigate, and resolve system-level concerns. Act as a technical bridge between clients and development teams by reproducing reported issues across development and staging environments and identifying their functional and workflow impact. Convert complex client-reported problems into structured Jira tickets with clear technical analysis, reproduction steps, and actionable requirements for developers. Collaborate throughout the resolution cycle from initial investigation and developer coordination to retesting fixes and validating outcomes with stakeholders. Contributing to the reliability, usability, and operational stability of <strong>PMOS</strong> and{" "} <strong>Fuel Pass</strong>, helping ensure these systems perform effectively in real-world government operations.
        </>
      ),
    },
    
    {
      company: "Pakistan Television Corporation Limited",
      badges: ["Internship"],
      href: "",
      location: "Onsite",
      title: "Web Developer",
      logoUrl: "/ptv.png",
      start: "Aug 2025",
      end: "Oct 2025",
      description:
        "Completed an On-Site Internship where I Contributed to Designing, Developing, and Optimizing Web Applications. Gained Hands-On Experience in both Frontend and Backend Technologies, Improving System Functionality and User Experience. Strengthened Skills in Collaborative Development and Problem-Solving within a Professional Environment.",
    },

    {
      company: "GDSC CUI",
      badges: ["CO LEAD"],
      href: "",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/gdsc.png",
      start: "Sep 2023",
      end: "Feb 2024",
      description:
        "As the Co-Lead of GDSC CUI, I played a key role in leading web development initiatives, mentoring students, and organizing events to foster a collaborative learning environment. My focus was on guiding the team in building impactful projects using the latest web technologies, helping our university community grow in technical expertise and innovation.",
    },

  ],
  education: 
  [
    {
      school: "COMSATS Univeristy Islamabad",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelors in Software Engineering",
      logoUrl: "/Comsats.jpg",
      start: "2022",
      end: "2026",
    },
  ],

  projects: 
  [
    {
      title: "Traccar",
      href: "https://malik-shaheer03.github.io/Traccar/",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "A car tracking and security system with a landing page, sign-in/signup, dashboard and Firebase integration.",
      technologies: ["React.js", "CSS", "Firebase", "GitHub Pages"],
      links: [
        {
          type: "Website",
          href: "https://malik-shaheer03.github.io/Traccar/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/Traccar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./Traccar.mp4",
    },
    {
      title: "SMST Dashboard",
      href: "https://malik-shaheer03.github.io/SMST-Dashboard-HTML-CSS/Dashboard/dashboard.html",
      dates: "May 2025 - Present",
      active: true,
      description:
        "Developed a multi-screen dashboard with sections for video content, resources, account settings, and course enrollment.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      links: [
        {
          type: "Website",
          href: "https://malik-shaheer03.github.io/SMST-Dashboard-HTML-CSS/Dashboard/dashboard.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/SMST-Dashboard-HTML-CSS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./smstdash.mp4",
    },
    {
      title: "Portfolio Website",
      href: "",
      dates: "April 2025 - Present",
      active: true,
      description:
        "A personal portfolio website built with Next.js to showcase my projects and skills. The website features a sleek design, smooth navigation, and is fully responsive. Deployed on Vercel for fast, reliable performance and continuous integration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://shaheer-portfolio-omega.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/shaheer-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./PortfolioWebsite.mp4",
    },
    {
      title: "Flight Management System",
      dates: "Jul 2023 - Present",
      active: true,
      description:
        "Developed a C++-based Flight Management System using DSA and Prim’s Algorithm to calculate shortest travel routes between user-selected destinations with route options like Faisal Movers and Daewoo",
      technologies: ["C++", "DSA", "Prim’s Algorithm", "CLI-based Interface"],
      links: [
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/Flight-Management-System-DSA-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./flightmsDSA.mp4",
    },
    {
      title: "CareerAI - Career Guidance System",
      href: "https://career-guidance-system-inky.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "This AI-driven Career Guidance System leverages expert system principles to analyze user interests, skills, and goals, providing personalized and actionable career recommendations through a dynamic web interface.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Expert System"],
      links: [
        {
          type: "Website",
          href: "https://career-guidance-system-inky.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/career-guidance-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./CareerAI.mp4",
    },
    {
      title: "Lumina - Premium Wallpaper Collection",
      href: "https://lumina-two-ruby.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A Stunning Wallpaper Discovery Platform using Modern Web Technologies. This responsive Web App delivers a Cinematic browsing Experience with Advanced Features.",
      technologies: ["Next.js", "TypeScript" , "Material-UI" , "Tailwind CSS", "Pexels API"],
      links: [
        {
          type: "Website",
          href: "https://lumina-two-ruby.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/Lumina",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./Lumina.mp4",
    },
    {
      title: "SecureBank",
      href: "https://secure-bank-nine.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A Modern Banking Web App evolved from a first-semester Console Project into a secure, user-friendly Financial Platform. Built with Firebase and Real-Time Features, It Redefines Traditional Banking with a Sleek, Intuitive Interface.",
      technologies: ["React.js" , "Next.js", "TypeScript" , "Tailwind CSS" , "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://secure-bank-nine.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/SecureBank",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./SecureBank.mp4",
    },

    {
      title: "Netflix Clone",
      href: "https://netflix-clone-ashy-eight-83.vercel.app/",
      dates: "July 2025 - Present",
      active: true,
      description:
        "A pixel-perfect Netflix Clone built with Next.js 15, TypeScript, and Tailwind CSS, featuring real-time data from TMDB API and Firebase Authentication. Includes multi-page navigation, search, watchlist, and responsive design that mirrors the Netflix experience.",
      technologies: ["Next.js", "TypeScript" , "Tailwind CSS" , "Firebase" , "TMDB API"],
      links: [
        {
          type: "Website",
          href: "https://netflix-clone-ashy-eight-83.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/netflix-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./netflixClone.mp4",
    },

    {
      title: "RangeFit Gym",
      href: "https://range-fit-gym-demo.vercel.app/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "A comprehensive Full-Stack Web Application that modernizes gym operations by replacing traditional manual record-keeping with a digital management system.",
      technologies: ["Next.js", "React.js", "TypeScript" , "Tailwind CSS" , "Firebase" , "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://range-fit-gym-demo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./rangeFit.mp4",
    },

      {
      title: "StratSim - Strategic Buisness Simulation",
      href: "https://stratsim-weld.vercel.app/",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "A production-grade strategic business simulation platform built with Next.js 14, React 19, TypeScript & Firebase. Run a virtual company through multi-quarter scenarios, compete against AI opponents, and export PDF reports — all wrapped in a premium glass-morphism UI.",
      technologies: ["Next.js", "React", "TypeScript" , "Tailwind CSS" , "Three.js" , "Firebase" , "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://stratsim-weld.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/malik-shaheer03/StratSim-Business-Simulation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./StratSim.mp4",
    },

  ],
} as const;
