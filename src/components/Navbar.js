import React from "react";

export default function Navbar() {
  return (
    <header className="">
      <div className="">
        <a className="">
          <a href="#about" className="">
            Sterling Peck
          </a>
        </a>
        <nav className="">
          <a href="#projects" className="">
            Projects
          </a>
          <a href="#Github" className="mr-5 hover:text-white">
            Github
          </a>
        </nav>
        <a href="#contact" className="">
          Contact
        </a>
      </div>
    </header>
  );
}
