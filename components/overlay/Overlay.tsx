import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface IOverlay {
    color: string,
}

interface ColorMap {
    [key: string]: string;
}

export default function Overlay({ color }: IOverlay) {
    const changeRef = useRef<HTMLDivElement>(null)
    const colorVariants: ColorMap = {
        blue: 'bg-[#114863]',
        black: 'bg-black bg-opacity-70',
    }

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: changeRef.current,
                start: 'top 30%',
                end: 'top ',
            },
        })
        let ctx = gsap.context(() => {
            tl.to('.bar', { height: 0, ease: "power4.inOut", duration: 1, stagger: { amount: 0.5 } })
        }, changeRef);
        return () => ctx.revert();
    }, [])
    return (
        <div className='w-full h-[100vh] flex z-50 ' ref={changeRef} >
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>
            <div className={`bar w-[10vw] h-[105vh] ${colorVariants[color]}`}></div>

        </div>
    )
}
