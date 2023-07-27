import React from "react";
import Center2 from "../components/Center2";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Center2 heading="CONTACT." content="Have something to talk about?" />
      <Form />
      <Footer />
    </>
  );
}
