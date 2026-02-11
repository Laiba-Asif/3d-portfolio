import React from "react";
import GradientSphere from "../GradientSpheres";
import Svgs from "@/helpers/Svgs";
import { Award } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative md:pl-30 w-full h-screen bg-[hsl(var(--bg-color))] text-[hsl(var(--color-primary))] z-10"
    >
      {/* Gradient Spheres */}
      <GradientSphere
        sphere1class="about-gradient-sphere about-sphere-1 z-10"
        sphere2class="about-gradient-sphere about-sphere-2 z-10"
      />

      <div className="flex w-full overflow-y-auto h-full relative z-10">
        {/* LEFT COLUMN: scrollable content */}
        <div className="w-full md:w-[45%] p-5 md:px-16 mt-20">
          <Svgs />
        </div>

        {/* RIGHT COLUMN: static portrait */}
        <div className="hidden md:flex w-[55%] sticky top-0 h-screen items-center justify-center">
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-[hsl(var(--primary)/20)] blur-[80px] rounded-full transform scale-90" />

            {/* Portrait container */}
            <div className="relative">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-100 lg:h-120 rounded-3xl overflow-hidden portrait-glow">
                <img
                  src={'/images/myImg.jpeg'}
                  alt="Expert portrait"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(to_top, hsl(var(--bg-color)/80), transparent)]" />
              </div>

              {/* Floating badge */}
              <div className="hidden sm:block absolute -right-4 sm:-right-8 top-8 bg-[hsl(var(--card)/90)] backdrop-blur-sm border border-[hsl(var(--border)/50)] rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary)/20)] flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">Final Year</p>
                    <p className="text-sm font-semibold text-[hsl(var(--card-foreground))]">SE Student</p>
                  </div>
                </div>
              </div>

              {/* Bottom info card */}
              <div className="hidden sm:block absolute -left-4 sm:-left-8 bottom-12 bg-[hsl(var(--card)/90)] backdrop-blur-sm border border-[hsl(var(--border)/50)] rounded-2xl p-4 shadow-2xl max-w-[200px]">
                <p className="text-xs text-[hsl(var(--muted-foreground))] mb-1">Currently Learning</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-[hsl(var(--card-foreground)/70)]">
                    AI and Machine Learning
                  </span>
                </div>
                <p className="text-xs text-[hsl(var(--primary))] mt-1">Open to Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
