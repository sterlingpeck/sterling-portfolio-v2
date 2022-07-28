import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="">
        <div className="">
          <h1 className="">
            Hello, I'm Sterling.
            <br className="" />I am learning to build websites and apps.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="">
            <a href="#contact" className="">
              Contact Me
            </a>
            <a href="#projects" className="">
              Projects
            </a>
          </div>
        </div>
        <div className="">
          <img className="" alt="" src="./assets/screenshots/sterling.png" />
        </div>
      </div>
    </section>
  );
}
