"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-8 ">
        
        <div className="flex justify-center mt-10 md:mt-0">
          <Image
            src="/profile.png"
            priority
            width="400"
            height="400"
            alt="Foto de perfil"
            className="object-cover "
          />
        </div>

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Hello, <br />
            <TypeAnimation
              sequence={[
                "I'm Rodrigo Ramírez", 1000,
                "I'm ", 100
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>
          {/* Aquí el texto será centrado en pantallas pequeñas y alineado a la izquierda en pantallas grandes */}
          <p className="mx-auto mb-3 text-xl md:mx-0 md:mb-8 text-center md:text-left">
            a Systems Information Analyst and Developer based in Argentina. I'm passionate about web development and have experience in both backend and frontend technologies. You can learn more about me on my LinkedIn page.
          </p>
          <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                <Link href="/my-projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fir rounded-xl hover:shadow-xl hover-shadow-white/50 "> View projects</Link>
                <Link href="/contact-me" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fir rounded-xl hover:shadow-xl hover-shadow-white/50 "> Contact me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
