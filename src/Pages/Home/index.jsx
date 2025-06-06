import React from "react";
import Hero from "../../components/HeroSection";
import About from "../../components/AboutSection";
import ContactForm from "../../components/ContactSection";
// import AvatarExperience from '../../components/modelAvatar/AvatarExperience'

const index = () => {
  return (
    <>
          <Hero />
          <About />
      <ContactForm />
    </>
  );
};

export default index;
