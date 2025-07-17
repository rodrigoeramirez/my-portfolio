import { HomeIcon, UserRound, Linkedin, Speech, Code, FolderOpen, Github } from "lucide-react";

export const socialNetworks = [

    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/rodrigo-e-ramirez/",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/rodrigoeramirez",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "About Me",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Tech Stack",
        icon: <Code size={25} color="#fff" strokeWidth={1} />,
        link: "/tech-stack",
    },
    {
        id: 4,
        title: "My Projects",
        icon: <FolderOpen size={25} color="#fff" strokeWidth={1} />,
        link: "/my-projects",
    },
    {
        id: 5,
        title: "Contact Me",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact-me",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Specialist in Equipment and Network Maintenance",
        subtitle: "Registro de la Propiedad de La Provincia de Buenos Aires",
        description: "In addition to the routine tasks related to equipment and network maintenance, I was responsible for developing custom applications and scripts to optimize and streamline processes, improving efficiency and reducing work time.",
        date: "2021-2024",
    },

]

export const dataPortfolio = [
    {
        id: 1,
        title: "Gimnasios",
        image: "/image-1.jpeg",
        techstack:["Node.js", "Nest.js", "React","Mysql"],
        urlGithub: "https://github.com/PedroCarassale/BACKEND-2024-UTN-GRUPO-6",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Tickets e Incidencias",
        image: "/image-2.jpeg",
        techstack:["Java", "Spring Boot", "React","Mysql"],
        urlGithub: "https://github.com/rodrigoeramirez/BACKEND-GRUPO-8",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Gestion de Espacios",
        image: "/image-3.jpeg",
        techstack:["Node.js","React","Mysql"],
        urlGithub: "https://github.com/EmJoHig/gestion-espacios-app",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "My Portfolio",
        image: "/image-4.jpeg",
        techstack:["React","Next.js","Tailwind CSS"],
        urlGithub: "https://github.com/rodrigoeramirez/my-portfolio",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Script's: Automatización de procesos",
        image: "/image-5.jpeg",
        techstack:["Batchfile","Powershell"],
        urlGithub: "https://github.com/rodrigoeramirez/script-s-de-clonaci-n",
        urlDemo: "#!",
    }
];

export const tools= [
    {
        id: 1,
        title: "Postman",
        image: "/postman.png",
    },
    {
        id: 2,
        title: "Visual Studio Code",
        image: "/vsc.png",
    },
    {
        id: 3,
        title: "Vite.js",
        image: "/vite.png",
    },
    {
        id: 4,
        title: "GitHub",
        image: "/github.png",
    },
    {
        id: 5,
        title: "Photoshop",
        image: "/photoshop.png",
    },
    {
        id: 6,
        title: "Figma",
        image: "/figma.png",
    },
    {
        id: 7,
        title: "IntelliJ IDEA",
        image: "/intellij_idea.png",
    }
]

export const databases=[
        
    {
        id: 1,
        title: "MySQL",
        image: "/mysql.png",
    },
    {
        id: 2,
        title: "SQL Server",
        image: "/sql_server.png",
    },
    {
        id: 3,
        title: "PostgreSQL",
        image: "/postgre_sql.png",
    },
    {
        id: 4,
        title: "Adabas",
        image: "/adabas.png",
    }

]

export const languages = [
    {
        id: 1,
        title: "Java",
        image: "/java.png",
    },
    {
        id: 2,
        title: "JavaScript",
        image: "/js.png",
    },
    {
        id: 3,
        title: "TypeScript",
        image: "/typescript.png",
    },
    {
        id: 4,
        title: "Spring Boot",
        image: "/springboot.png",
    },
    {
        id: 5,
        title: "Node.js",
        image: "/node.png",
    },
    {
        id: 6,
        title: "React",
        image: "/react.png",
    },
    {
        id: 9,
        title: "Nest.js",
        image: "/nest.png",
    },
    {
        id: 7,
        title: "Next.js",
        image: "/next.png",
    },
    {
        id: 8,
        title: "Tailwind CSS",
        image: "/tailwind.png",
    },
    {
        id: 9,
        title: "Natural",
        image: "/natural.png",
    }
    
];
