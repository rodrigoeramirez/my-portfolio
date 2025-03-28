import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { Fragment } from "react";

export default function AboutMe() {
    return (
        <Fragment>
            <TransitionPage></TransitionPage>
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">My {' '}
                    <span className="font-bold text-secondary">Experience</span>
                </h1>
            <TimeLine></TimeLine>
            
            </ContainerPage>
        </Fragment>
    );
}