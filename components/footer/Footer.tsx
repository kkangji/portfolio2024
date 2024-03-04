import { useState } from "react";
// import EmailButton from "../emailButton/EmailButton";
import Contact from "../contact/Contact";

interface IFooter {
  onNavigate: (url: string) => void;
}

export default function Footer({ onNavigate }: IFooter) {
  const [showImg, setShowImg] = useState(false);

  const onShowImg = () => setShowImg(true);
  const onHideImg = () => setShowImg(false);

  return (
    <footer
      className="h-[899px] mt-10 relative font-Bebas-neue text-white lg:h-[100px] lg:bg-black lg:flex lg:items-center"
      id="contact"
      onMouseEnter={onShowImg}
      onMouseLeave={onHideImg}
    >
      <h2 className="text-5xl items-start pt-[100px] text-center lg:pt-0  lg:text-left lg:pl-20">
        Contact Me
      </h2>
      {showImg ? <Contact /> : null}
      <ul className="flex flex-col justify-around items-center w-full h-[200px] text-2xl mt-10 lg:flex-row lg:h-0 lg:w-[500px] lg:mt-0">
        {/* <li>
          <EmailButton />
        </li>
        <li>
          <button
            className="hover:text-red-300 hover:transition-all"
            onClick={() => onNavigate("")}
          >
            resume
          </button>
        </li> */}
        <li>
          <button
            className="hover:text-purple-300 hover:transition-all"
            onClick={() => onNavigate("https://github.com/kkangji")}
          >
            github
          </button>
        </li>
      </ul>
      <p className="absolute  bottom-0 w-full text-center text-xl lg:right-0 lg:w-[300px]">
        &copy; copyright 2023 kkangji_
      </p>
    </footer>
  );
}
