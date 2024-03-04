import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function ProjectTitle() {
    const titleRef = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline()

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 70%',
                end: 'top',
            },
        })
        let ctx = gsap.context(() => {
            tl.fromTo('.title', { opacity: 0, y: 0 }, { opacity: 1, y: -30 })
            tl.fromTo('.title', { x: 0 }, { x: "10%" })
        }, titleRef);

        return () => ctx.revert();
    }, [])
    return (
        <div className="h-[500px] flex items-end" ref={titleRef}>
            <h2 className="text-yellow-50 text-[4em] xl:text-[9em] font-be-vietnam title">MY PROJECT.</h2>
        </div>
    )
}
