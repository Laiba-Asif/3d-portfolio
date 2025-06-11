import React from "react";
import Hero from "../../components/HeroSection";
import About from "../../components/AboutSection";
import ContactForm from "../../components/ContactSection";
import Experties from "../../components/Experties";
import Navbar from "../../components/Header/Navbar";
import ProjectSlider from "../../components/ProjectsSection";

const index = () => {
  return (
    
    <>
    <Navbar />
          <Hero />
          <About />
          <ProjectSlider/>
          <Experties />
      <ContactForm />
    </>
  );
};

export default index;
