import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Github from "./components/Github";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Github />
    </main>
  );
}
