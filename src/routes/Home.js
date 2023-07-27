import React from "react";
import Center from "../components/Center";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Center />
      <Projects />
      <Footer />
    </>
  );
}
