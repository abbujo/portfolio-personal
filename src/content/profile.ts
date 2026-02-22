export interface Project {
    title: string;
    client?: string; // e.g. "MUFC Transfers News"
    category: string;
    description: string;
    tags: string[];
    highlights: string[];
    impact: string;
    image: string;
    link?: string; // External link (e.g. Wayback)
    status?: "active" | "offline"; // Status indicator
    caseStudy?: {
        problem: string;
        solution: string;
        result: string;
    };
}

export const config = {
    badgeText: "Open to opportunities",
    resumeUrl: "/Abhishek_Joshi_Resume.pdf",
};

export const personalInfo = {
    name: "Abhishek Joshi",
    title: "Software Engineer",
    subtitle: "Automated Systems & Cloud Infrastructure",
    location: "Ripponlea, VIC 3185, Australia",
    phone: "0481 422 769",
    email: "joshi.abj13@gmail.com",
    socials: {
        linkedin: "https://www.linkedin.com/in/joshiabj13/",
        github: "https://github.com/abhishek-joshi",
        orcid: "https://orcid.org/0000-0003-2677-287X",
    },
    about: [
        "I am a Software Engineer with specific expertise in Golang, React, and AWS. My focus is on building scalable automated content systems and resilient cloud infrastructure.",
        "With a proven track record in microservices and production reliability, I enjoy solving complex engineering challenges that drive community growth and user engagement.",
        "Currently based in Melbourne, I am open to opportunities where I can leverage my full-stack skills to build impactful software solutions."
    ],
    availability: "Available for new projects"
};

export const projects: Project[] = [
    {
        title: "imgpipe (imgtool)",
        category: "Full Stack Tooling",
        description: "High-performance AVIF-only image pipeline for modern web projects.",
        tags: ["React", "Express", "Node.js", "sharp", "CLI"],
        highlights: [
            "Engineered a full-stack application with a React frontend and Express backend API.",
            "Developed a powerful CLI for fast, concurrent batch processing of folders and globs.",
            "Implemented smart policies for automated, highly optimized AVIF conversions."
        ],
        impact: "Delivered a local, privacy-first tool targeting optimal mobile speeds and LCP.",
        image: "/images/projects/imgpipe.png",
        link: "https://imgtool-psi.vercel.app/",
        status: "active"
    },
    {
        title: "GCC Melbourne",
        client: "Green Commercial Cleaning",
        category: "B2B Website & SEO",
        description: "An optimized, high-performance static marketing website architected to drive local commercial cleaning leads.",
        tags: ["Astro", "Tailwind CSS", "TypeScript"],
        highlights: [
            "Engineered a scalable Static Site Generator (SSG) architecture with Astro v5 for ultra-fast performance.",
            "Implemented a strict, token-based design system using Tailwind CSS v4 to ensure visual consistency.",
            "Built environment-aware SEO strategies, including LocalBusiness JSON-LD schema and smart indexing rules."
        ],
        impact: "Delivered a premium, fast-loading digital presence established specifically for B2B lead generation.",
        image: "/images/projects/1.png",
        link: "https://www.gccmelbourne.com.au/",
        status: "active"
    },
    {
        title: "SitePulse",
        category: "Full Stack Tooling",
        description: "A high-performance SEO & Accessibility auditing tool with real-time reporting.",
        tags: ["Astro", "React", "Fastify", "Puppeteer"],
        highlights: [
            "Implemented dual-device Lighthouse auditing with automatic page discovery.",
            "Built a real-time dashboard using Server-Sent Events (SSE) for progress tracking.",
            "Designed a monorepo architecture with CI/CD for automated auditing."
        ],
        impact: "Enabled automated, comprehensive performance and accessibility auditing for static sites.",
        image: "/images/projects/sitepulse.png",
        link: "https://github.com/abbujo/SeoTool.git",
        status: "active"
    },
    {
        title: "Automated Content Posting System",
        client: "MUFC Transfers News",
        category: "Automation • Content Systems",
        link: "https://www.facebook.com/Mufctransfersnews",
        description: "An automated pipeline ensuring consistent content delivery for a high-traffic social media page.",
        tags: ["Golang", "AWS Lambda", "Facebook Graph API"],
        highlights: [
            "Engineered an automated content scheduling and publishing workflow.",
            "Implemented retry logic and error handling for reliable delivery.",
            "Integrated basic observability to monitor failed posts."
        ],
        impact: "Scaled community growth to 32,000+ users via automated reach.",
        image: "/images/projects/mufc-transfers-news.jpg",
        status: "active",
        caseStudy: {
            problem: "Manual content posting was time-consuming and led to inconsistent engagement.",
            solution: "Built a serverless automation pipeline to schedule and publish content.",
            result: "Achieved consistent 24/7 publishing coverage with minimal manual intervention."
        }
    },
    {
        title: "GoodFour",
        category: "Full Stack Web App",
        description: "An interactive fantasy sports platform allowing users to draft teams and compete in real-time. (Discontinued)",
        tags: ["React", "Node.js", "GCP", "PostgreSQL"],
        highlights: [
            "Built a responsive, realtime frontend interface.",
            "Developed scalable backend services for score processing.",
            "Implemented secure user authentication and data management."
        ],
        impact: "Connected eligible users with sustainable brands via gamification.",
        image: "/images/projects/goodfour.png", // Updated per user request
        link: "https://web.archive.org/web/20220301182731/http://goodfour.com.au/#/",
        status: "offline"
    }
];

// Skill groups for "Pill Grid"
export const skills = [
    {
        category: "Languages",
        items: ["Golang", "Python", "JavaScript", "TypeScript", "C# .NET"]
    },
    {
        category: "Web Technologies",
        items: ["React", "Node.js", "Astro", "HTML5", "CSS3"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS Lambda", "Google Cloud Platform", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines"]
    },
    {
        category: "Tools & Methodologies",
        items: ["Git", "Agile / Scrum", "TDD", "Microservices Architecture"]
    }
];

// Experience - simplified for "About" or "Resume" section if needed
export const experience = [
    {
        role: "Freelance Software Developer",
        period: "Jan 2020 – Present",
        company: "Self-Employed",
        description: "Specialized in Golang/AWS automation and full-stack web apps.",
        highlights: [
            "Delivered scalable automation solutions using Golang and AWS Lambda.",
            "Built high-performance web applications with React and Astro.",
            "Managed end-to-end development lifecycles for diverse client projects."
        ]
    },
    {
        role: "Web Developer Intern",
        period: "Jan 2025 – Apr 2025",
        company: "Stacked Learning",
        description: "Developed JS applications and managed defect lifecycles.",
        highlights: [
            "Contributed to frontend development using modern JavaScript frameworks.",
            "Optimized application performance and addressed accessibility issues.",
            "Collaborated with senior developers on defect resolution and code reviews."
        ]
    },
    {
        role: "Senior Technical Associate",
        period: "May 2017 – Dec 2018",
        company: "Bank of America",
        description: "Migrated legacy .NET apps to Python/Quartz and managed production releases.",
        highlights: [
            "Led the migration of critical legacy applications to modern Python pipelines.",
            "Managed production releases and ensured high system availability.",
            "Automated reporting processes, saving significant manual effort."
        ]
    }
];

export const education = [
    {
        year: "2020 - 2022",
        degree: "Masters of Applied Information Technology",
        institution: "RMIT University"
    },
    {
        year: "2013 - 2017",
        degree: "Bachelor of Engineering (Computer Science)",
        institution: "Visvesvaraya Technological University"
    }
];

export const visa = {
    status: "Student Visa (Subclass 500)",
    rights: "Full working rights during scheduled breaks, 48 hours/fortnight during study sessions."
};

export const publications = [
    {
        title: "A Survey of Design Techniques for Conversational Agents",
        authors: "Ramesh, K., Ravishankaran, S., Joshi, A., Chandrasekaran, K.",
        year: "2017",
        venue: "Information, Communication and Computing Technology (ICICCT 2017)",
        link: "https://doi.org/10.1007/978-981-10-6544-6_31",
        orcid: "https://orcid.org/0000-0003-2677-287X"
    }
];
