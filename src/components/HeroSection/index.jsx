import React from "react";
import GradientSphere from "../GradientSpheres";
import HeroExperience from "./HeroExperience";
import Navbar from "../Header/Navbar";
import TrailContainer from "../helpers/TrailContainer";

const Hero = () => {
  return (
    <section id="home" className="h-screen relative px-5 max-md:px-0  ">
      <Navbar/>
      <GradientSphere
        sphere1class={"gradient-sphere sphere-1"}
        sphere2class={"gradient-sphere sphere-2 "}
      />
          {/* mr peabody */}
          <img
            src="/images/mr-peabody.png"
            alt="mr peabody"
            className=" h-[10rem] absolute top-0  left-0"
          />
      <div className="w-full h-full flex-center z-30">
        <div className="container relative w-full h-full ">
          <div className="md:mt-40 mt-32 relative ml-20 z-20 blackops ">
            <h1 className="font-bold md:text-9xl text-5xl ">LAIBA ASIF</h1>
            <h1 className="font-bold md:text-9xl text-5xl ">FRONTEND</h1>
          </div>

          <div className="absolute w-full z-30 bottom-20 right-0 blackops">
            <div className="flex justify-between items-end">
              {/* <div className='flex flex-col items-center md:gap-5 gap-1 '>
                <p className='md:text-base text-xs'>Explore</p>
                <img className='size-7 animate-bounce' src="/images/arrowdown.svg" alt="arrowdown" />
              </div> */}
              <div>
                
              </div>
              <div className="flex flex-col items-end">
                {/* <img src="/images/shape.svg" alt="shape" /> */}
                <h1 className="font-bold md:text-9xl text-5xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrailContainer />
      <div className="w-full min-h-[100vh] absolute inset-0 z-20">
        <HeroExperience/>
      </div>
        
    </section>
  );
};

export default Hero;
