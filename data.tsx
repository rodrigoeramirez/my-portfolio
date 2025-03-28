import { HomeIcon, UserRound, Linkedin, Crop, Pencil, Computer, Book, Rocket, Speech, Code, FolderOpen, Github, Youtube } from "lucide-react";

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
        title: "Developer",
        subtitle: "Registro de la Propiedad de La Provincia de Buenos Aires",
        description: "In my role as a developer, I program in natural language to maintain systems that handle large volumes of data. Additionally, I implement new features to enhance the functionality of the organization.",
        date: "2025 ",
    },
    {
        id: 2,
        title: "Specialist in Equipment and Network Maintenance",
        subtitle: "Registro de la Propiedad de La Provincia de Buenos Aires",
        description: "In addition to the routine tasks related to equipment and network maintenance, I was responsible for developing custom applications and scripts to optimize and streamline processes, improving efficiency and reducing work time.",
        date: "2021-2024",
    },

]


export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Gimnasios",
        image: "/image-1.jpg",
        techstack:["Node.js", "Nest.js", "React","Mysql"],
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Tickets e Incidencias",
        image: "/image-2.jpg",
        techstack:["Java", "Spring Boot", "React","Mysql"],
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Gestion de Espacios",
        image: "/image-3.jpg",
        techstack:["Node.js","React","Mysql"],
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "My Portfolio",
        image: "/image-4.jpg",
        techstack:["React","Next.js","Tailwind CSS"],
        urlGithub: "#!",
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
        image: "/IntelliJ_IDEA.png",
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
    }
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];