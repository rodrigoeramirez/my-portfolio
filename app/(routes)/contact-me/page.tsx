import Contact from "@/components/contact";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";

export default function ContactMe () {
    return (
        <><TransitionPage></TransitionPage>
        
        <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Contact {' '}
                    <span className="font-bold text-secondary">Me</span>
                </h1>
        <Contact></Contact>
        </ContainerPage></>
    );
}