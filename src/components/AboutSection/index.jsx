import React from "react";
import GradientSphere from "../GradientSpheres";
import TrailContainer from "../helpers/TrailContainer";
import Svgs from '../helpers/Svgs'



const About = () => {
  return (
    <section
      id="about"
      className="flex relative px-5 md:px-16  w-full h-full z-50 "
    >
      <GradientSphere
        sphere1class={"about-gradient-sphere about-sphere-1"}
        sphere2class={"about-gradient-sphere about-sphere-2 "}
      />
      <div className="flex flex-row  max-md:flex-col w-full ">
        <div className="md:w-[580px] md:max-w-[45%]   z-50 min-h-full  flex items-center justify-start  ">
          <Svgs />
        </div>

        <div className="flex-1 pl-30 z-50">
          {/* skills */}
         
        </div>
      </div>

      {/* trail section */}
      <TrailContainer />
    </section>
  );
};

export default About;
