import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { GiSaveArrow } from "react-icons/gi";

export default function LandingPart() {
  const landingRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    let ctx = gsap.context(() => {
      tl.from(".title", { opacity: 0, y: 100, stagger: 0.5, duration: 2 })
        .to(".accent-text", { opacity: 0.3, stagger: 0.3 })
        .from(".scroll", { opacity: 0 }, 2);
    }, landingRef);

    return () => ctx.kill();
  }, [landingRef]);
  return (
    <main
      className="relative flex justify-around flex-col text-white"
      ref={landingRef}
    >
      <div className="relative font-bodoni-moda flex flex-col min-h-screen justify-center text-[90px] leading-[70px] md:text-[100px] md:leading-[90px] lg:text-[150px] lg:leading-[130px] ">
        <div className="hidden md:block w-full h-screen ">
          <video
            src={require("../../public/assets/whale.mp4")}
            loop={true}
            autoPlay={true}
            className="h-[100%] w-full object-fill"
          />
        </div>
        <div className="absolute md:bottom-[10%] text-center md:text-left md:pl-10 w-full">
          <h2 className="title ml-2">
            <span className="accent-text">C</span>reative <br />
            <span className="title">Developer</span>
          </h2>
          <p className="title text-lg pl-[90px] md:text-xl mt-5 lg:text-2xl lg:mt-[30px]">
            no lisk no fun
          </p>
        </div>
        <div className="w-full h-[150px] absolute bottom-10 text-center md:w-[400px] md:right-[3%] md:bottom-[50%] lg:top-[20%]">
          <p className="title font-Bebas-neue text-2xl w-[400px] m-auto  md:text-5xl md:w-[400px] lg:text-6xl ">
            INTERACTIVE WEB <span className="accent-text">DEVELOPMENT</span>
            <span className="accent-text">YOUTUBE</span> BASEBALL
            <span className="accent-text"> WORKOUT</span> HEALTHY LIFE
            <span className="accent-text">TRAVEL</span> POSITIVE
            <span className="accent-text">WHALE</span>
          </p>
        </div>
      </div>
      <div className="scroll absolute bottom-5 left-[50%] animate-bounce">
        <GiSaveArrow size={20} />
      </div>
    </main>
  );
}
