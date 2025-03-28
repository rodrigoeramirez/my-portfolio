import Image from "next/image";
import Link from "next/link";

interface ProjectsBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        techstack: Array<string>;
        urlGithub: string;
        urlDemo: string;
    };
}

export default function ProjectsBox(props: ProjectsBoxProps) {
    const { data } = props;
    const { id, title, image, techstack, urlGithub, urlDemo } = data;

    return (
        <div className="p-4 border border-teal-50 rounded-xl flex flex-col h-full">
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image
                src={image}
                alt="Project Image"
                width={200}
                height={200}
                className="w-full md:w-[200px] rounded-2xl h-auto"
            />

            {/* Contenedor de techstack */}
            <div className="mt-4 flex flex-wrap gap-3 mb-4 flex-grow-0">
                {techstack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-1 py-1 text-xs font-semibold bg-[#62748e] text-white rounded hover:bg-[#62748e]/80 transition duration-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Contenedor de los botones */}
            <div className="flex gap-2 mt-auto">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-[#4a0080] hover:bg-[#4a0080]/80"
                >
                    GitHub
                </Link>
                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Demo
                </Link>
            </div>
        </div>
    );
}
