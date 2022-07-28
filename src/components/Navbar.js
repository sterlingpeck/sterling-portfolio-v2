import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <header>
      <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <a href="#about" className="text-3xl font-bold mr-4 sm:text-4xl">
              Sterling Peck
            </a>
            <ul className="hidden md:flex">
              <li>About</li>
              <li>Projects</li>
              <li>Github</li>
              <li>Resume</li>
              <li>Contact Me</li>
            </ul>
          </div>
        </div>
        <MenuIcon className="w-5" />
      </div>
      {/* 
      <nav className="">
        <a href="#projects" className="text-3xl">
          Projects
        </a>
        <a href="https://github.com/sterlingpeck" className="">
          Github
        </a>
      </nav>
      <a href="#contact" className="">
        Contact
      </a>
      <a href="../../assests/Sterling Peck_Resume_2022.pdf" className="">
        Resume
      </a> */}
    </header>
  );
};

export default Navbar;
