import React from "react";
import { projects } from "../utils/projectdata.js";

export default function Projects() {
  return (
    <section id="projects" className="">
      <div className="">
        <div className="">
          <h1 className="">Projects:</h1>
          <p className="">
            Here is a small collection of projects that I have work on in the
            past. Most contain usage of HTML, CSS, Javascript and REACT.
          </p>
        </div>
        <div className="">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="">
              <div className="">
                <img alt="" className="" src={project.image} />
                <div className="">
                  <h1 className="">{project.title}</h1>
                  <p className="">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
