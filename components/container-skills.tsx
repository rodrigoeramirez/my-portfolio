import Image from "next/image";

interface ContainerSkillsProps {
    data: {
        id: number;
        title: string;
        image: string;
    };
}

export default function ContainerSkills(props: ContainerSkillsProps) {
    const { data } = props;
    const { title, image } = data;

    return (
        <div className="group relative inline-block w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl overflow-hidden shadow-xl transition-all duration-300">
            {/* Imagen con borde redondeado */}
            <div className="transition-all duration-300 group-hover:blur-sm">
                <Image
                    src={image}
                    alt={title}
                    width={512}   // Tamaño más pequeño de la imagen
                    height={512}  // Tamaño más pequeño de la imagen
                    className="object-cover w-full h-full rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                />
            </div>

            {/* Fondo oscuro con transición suave */}
            <div className="absolute inset-0 bg-[#131424] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl">
                {/* Título deslizante */}
                <h3 className="absolute opacity-0 text-white font-semibold text-xs sm:text-xs md:text-xs lg:text-base group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 text-center py-1 px-2 sm:py-2 sm:px-4 transition-all duration-500">
                    {title}
                </h3>
            </div>
        </div>
    );
}
