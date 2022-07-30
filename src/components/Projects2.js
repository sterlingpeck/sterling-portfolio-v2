import React from "react";

import project1Img from "../assets/screenshots/Run_Buddy.png";
// import project2Img from "../assets/screenshots/.png";
// import project3Img from "../assets/screenshots/.png";
// import project4Img from "../assets/screenshots/.png";

const Projects = () => {
  return (
    (
      <section>
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
              <p className="text-2xl">HTML and CSS</p>
              <h1 className="py-3 text-5-xl md:text-7xl font-bold">
                Run Buddy
              </h1>
              <p className="text-2xl">
                A modern looking website I built as a project for class.
              </p>
              <button className="py-3 px-6 sm:w-[60%] my-4">
                Code Repository
              </button>
            </div>
            <div>
              <img className="w-full" src={project1Img}></img>
            </div>
            <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
              <p>Tools used</p>
              <div className="flex justify-between flex-wrap px-4">
                <p className="flex px-4 py-2 text-slate-500">
                  <CubeIcon className="h-6 text-indigo-600" />
                  HTML
                </p>
                <p className="flex px-4 py-2 text-slate-500">
                  <ColorSwatchIcon className="h-6 text-indigo-600" />
                  CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    (
      <section>
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
          <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
              <p className="text-2xl">HTML and CSS</p>
              <h1 className="py-3 text-5-xl md:text-7xl font-bold">
                Run Buddy
              </h1>
              <p className="text-2xl">
                A modern looking website I built as a project for class.
              </p>
              <button className="py-3 px-6 sm:w-[60%] my-4">
                Code Repository
              </button>
            </div>
            <div>
              <img className="w-full" src={project1Img}></img>
            </div>
            <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
              <p>Tools used</p>
              <div className="flex justify-between flex-wrap px-4">
                <p className="flex px-4 py-2 text-slate-500">
                  <CubeIcon className="h-6 text-indigo-600" />
                  HTML
                </p>
                <p className="flex px-4 py-2 text-slate-500">
                  <ColorSwatchIcon className="h-6 text-indigo-600" />
                  CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Projects;
