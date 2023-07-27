import React from "react";
import Center2 from "../components/Center2";
import Footer from "../components/Footer";
import Myself from "../components/Myself";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <Center2 heading="ABOUT." content="I'm a Full-Stack Web Developer " />
      <Myself />
      <Footer />
    </>
  );
}
