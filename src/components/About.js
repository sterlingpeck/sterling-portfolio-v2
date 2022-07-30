import React from "react";

import {
  CodeIcon, // Javascript
  ColorSwatchIcon, // CSS
  CubeIcon, // HTML
  ServerIcon, // Server
  PaperAirplaneIcon, // APIs
  DatabaseIcon, // SQL
} from "@heroicons/react/solid";

import profileImg from "../assets/screenshots/profile.png";

const About = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">About Me</p>
          <h1 className="py-3 text-5-xl md:text-7xl font-bold">Hello!</h1>
          <p className="text-2xl">
            My name is Sterling Peck and currently I work as a Senior Systems
            Administrator and am an aspiring Full Stack Developer!
          </p>
          <a href="https://github.com/sterlingpeck">
            <button className="sm:my-4 px-8 py-3 mb-4 rounded-xl">
              Github
            </button>
          </a>
        </div>
        <div>
          <img className="w-full sm:my-4 px-8 py-3 mb-4" src={profileImg}></img>
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Tools I use</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CubeIcon className="h-6 text-indigo-600" />
              HTML
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ColorSwatchIcon className="h-6 text-indigo-600" />
              CSS/Tailwind/Handlebars
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <CodeIcon className="h-6 text-indigo-600" />
              Javascript/REACT
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" />
              Server
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" />
              APIs
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" />
              SQL and Databases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
