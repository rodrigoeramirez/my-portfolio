import ContainerPage from "@/components/container";
import ContainerSkills from "@/components/container-skills";
import TransitionPage from "@/components/transition-page";
import { databases, languages, tools } from "@/data";
import { Fragment } from "react";

// Definir un tipo para los items en `data`
interface SkillItem {
  id: number;
  title: string;
  image: string;
}

interface SkillSectionProps {
  title: string;
  data: SkillItem[];
}

const SkillSection = ({ title, data }: SkillSectionProps) => {
  return (
    <div className="relative z-10 p-4 mt-6 max-w-6xl mx-auto">
      <h3 className="mb-4 text-xl"> {/* Centrado en móvil, alineación a la izquierda en pantallas más grandes */}
        {title}
      </h3>
      <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-9 gap-4 justify-center sm:justify-start"> {/* Centrado solo en móvil */}
        {data.map((item) => (
          <ContainerSkills key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default function TechStack() {
  return (
    <Fragment>
      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl leading-tight text-center sm:text-left md:text-5xl md:mt-10"> {/* Centrado solo en móvil */}
          Tech {' '}
          <span className="font-bold text-secondary">Stack</span>
        </h1>
        <SkillSection title="Languages & Frameworks" data={languages} />
        <SkillSection title="Tools" data={tools} />
        <SkillSection title="Databases" data={databases} />
      </ContainerPage>
    </Fragment>
  );
}
