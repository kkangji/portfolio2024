import { HeartIcon } from "@/icons/icons";

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-40 w-full pt-2 text-white bg-transparent">
      <div className="flex items-center justify-between h-10 px-5">
        <div className="flex items-center w-[180px] ">
          <div className="w-4 mr-3 animate-bounce">
            <HeartIcon />
          </div>
          <h1 className="flex items-center justify-center text-xs font-press-start md:text-lg">
            Thanida
          </h1>
        </div>
        <ul className="flex justify-between w-60 md:text-xl">
          <li className="font-thin">{/* <a href="#about">about</a> */}</li>
          <li className="font-thin">
            <a href="#project">project</a>
          </li>
          <li className="font-thin">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
