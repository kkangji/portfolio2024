import { gsap } from "gsap";
import { useContext, useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectSingle from "../projectSingle/ProjectSingle";
import { ProjectContext } from "@/store/page";

export default function Project() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);
    const projects = useContext(ProjectContext)

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-500vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "3000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);

    return (

        <section id='project' className="overflow-hidden scroll-section-outer">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="scroll-section-inner h-[100vh] w-[400vw] flex flex-row relative ">
                    {projects.map((project: any) => (
                        <div key={project?.id}>
                            <ProjectSingle project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}
