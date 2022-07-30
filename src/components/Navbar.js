import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header>
      <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold mr-4 sm:text-4xl">
              Sterling Peck
            </a>
            <ul className="hidden md:flex">
              <li>
                <a data-testid="about" href="#about">
                  {" "}
                  About
                </a>
              </li>
              <li>
                <a data-testid="projects" href="#projects">
                  {" "}
                  Projects
                </a>
              </li>
              <li>
                <a
                  data-testid="projects"
                  href="../../assets/Sterling Peck_Resume_2022.pdf"
                >
                  {" "}
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <a href="#contact">
              <button className="px-8 py-3">Contact Me</button>
            </a>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Projects</li>
          <li className="border-b-2 border-zinc-300 w-full">Resume</li>
          <div className="flex flex-col">
            <a href="https://github.com/sterlingpeck">
              <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                Github
              </button>
            </a>
            <a href="#Contact">
              <button className="px-8 py-3">Contact Me</button>
            </a>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
