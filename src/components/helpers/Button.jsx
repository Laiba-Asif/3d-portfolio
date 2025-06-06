import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link href="#contact" className="no-underline">
      <div
        id="landing-cta-button"
        className="relative inline-block mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-700/20 shadow-lg transition-colors duration-300 hover:bg-[#1a120b] overflow-hidden cursor-pointer"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
        }}
      >
        {/* Decorative corner */}
        <div
          className="absolute top-1 left-1 h-3 w-3 bg-[#EED9C4]"
          style={{
            clipPath:
              "polygon(0px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%)",
            zIndex: 1,
          }}
        />

        {/* Button Text */}
        <span className="relative z-10 pirata">Download My Resume</span>
      </div>
    </Link>
  );
};

export default Button;
