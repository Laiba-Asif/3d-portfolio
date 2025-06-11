import React, { useState } from "react";
import GradientSphere from "../GradientSpheres";
import HeroExperience from "./HeroExperience";
import TrailContainer from "../helpers/TrailContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 40,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 30,
      duration: 3,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.7) {
          document.querySelector(".svg").remove();
          setTimeout(() => {
            setShowContent(true);
          }, 50);

          this.kill();
        }
      },
    });
  });

  useGSAP(
    () => {
      if (!showContent) return;

      const tl = gsap.timeline();

      tl.fromTo(
        ".reveal-mask",
        {
          transformOrigin: "100% 0%", // bottom right
          delay: 1.5,
          rotate: 0,
          scaleY: 4,
        },
        {
          rotate: 90, // sweep up toward top left
          duration: 2.2,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(".reveal-mask", { display: "none" });
          },
        },
        "-=1.2"
      );

      tl.fromTo(".hero-text", { opacity: 0 ,x:100}, {x:0, opacity: 1, duration: 1 });
    },
    { dependencies: [showContent] }
  );

 

  return (
    <div className="relative">
      
      
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-20  bg-[#0b0620] w-full h-screen overflow-hidden ">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  LA
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/images/bg-svg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <section
          id="home"
          className="home-bg  h-screen relative px-5 max-md:px-0 bg-[#0b0620] "
        >
          <div className="reveal-mask absolute w-full z-50 h-full top-0 left-0 bg-[#0b0620]  pointer-events-none"></div>
          <GradientSphere
            sphere1class={"gradient-sphere sphere-1"}
            sphere2class={"gradient-sphere sphere-2 "}
          />
         
          <div className="w-full h-full flex-center z-30">
            <div className="container relative w-full h-full ">
              <div className="md:mt-40 mt-32 relative ml-20 z-20 blackops hero-text ">
                <h1 className="font-bold md:text-9xl text-5xl ">LAIBA ASIF</h1>
                <h1 className="font-bold md:text-9xl text-5xl ">FRONTEND</h1>
              </div>

              <div className="absolute w-full z-30 bottom-20 right-0 blackops">
                <div className="flex justify-between items-end">
                  {/* <div className='flex flex-col items-center md:gap-5 gap-1 '>
                <p className='md:text-base text-xs'>Explore</p>
                <img className='size-7 animate-bounce' src="/images/arrowdown.svg" alt="arrowdown" />
              </div> */}
                  <div></div>
                  <div className="flex flex-col items-end">
                    {/* <img src="/images/shape.svg" alt="shape" /> */}
                    <h1 className="font-bold md:text-9xl text-5xl">
                      DEVELOPER
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TrailContainer />
          <div className="w-full min-h-[100vh] absolute inset-0 z-20">
            <HeroExperience />
          </div>
        </section>
      )}
    </div>
  );
};

export default Hero;
