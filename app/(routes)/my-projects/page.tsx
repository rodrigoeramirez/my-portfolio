import ContainerPage from "@/components/container";
import ProjectsBox from "@/components/projects-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";
import { Fragment } from "react";

export default function MyProjects (){
    return(
        <Fragment>
            <TransitionPage></TransitionPage>
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">My {' '}
                    <span className="font-bold text-secondary">Projects</span>
                </h1>
                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-4">
                    
                {dataPortfolio.map((data)=>(
                        <ProjectsBox key={data.id} data={data}></ProjectsBox>
                    ))}
                </div>    
            </ContainerPage>
        </Fragment>
    );
}