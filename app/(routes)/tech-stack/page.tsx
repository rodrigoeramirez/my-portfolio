import ContainerPage from "@/components/container";
import ContainerSkills from "@/components/container-skills";
import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import { databases, languages, tools } from "@/data";
import { Fragment } from "react";


const SkillSection = ({ title, data }) => {
    return (
      <div className="relative z-10 p-4 mt-6 max-w-6xl mx-auto">
        <h3 className="mb-4 text-xl">
          {title}
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-9 gap-4"> {/* Reducimos el gap */}
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
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Tech {' '}
                    <span className="font-bold text-secondary">Stack</span>
                </h1>
          <SkillSection title="Languages & Frameworks" data={languages} />
          <SkillSection title="Tools" data={tools} />
          <SkillSection title="Databases" data={databases} />
        </ContainerPage>
      </Fragment>
    );
  }
  