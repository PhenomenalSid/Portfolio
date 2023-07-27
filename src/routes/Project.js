import React from "react";
import Center2 from "../components/Center2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Project() {
  return (
    <>
      <Navbar />
      <Center2 heading="PROJECTS." content="Some of my most recent works" />
      <Projects />
      <Footer />
    </>
  );
}
