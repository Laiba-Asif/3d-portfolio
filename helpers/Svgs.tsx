import React from "react";

const Svgs = () => {
   const skills = [
    { name: "MERN", level: 97 },
    { name: "PERN", level: 70 },
    { name: "Fast API", level: 70 },
    { name: "My SQL", level: 80 },
    { name: "Websockets", level: 50 },
    { name: "Docker", level: 60 },
    { name: "GitHub", level: 80 },
  ];

  return (
    <div className=" min-w-full flex flex-col">
      {/* about */}
      <svg
        id="about-svg-header"
        className="w-full h-auto"
        viewBox="0 0 500 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Profile Picture Background */}
        <polyline
          id="about-profile-background"
          // className="fill-[#1a1a1a13]"
          points="65,170 145,170 145,50 135,40 135,10 125,0 70,0 10,0 0,10 0,160 10,170"
        />

        {/* Header Content Background */}
        <polyline
          id="about-header-background"
          // className="fill-[#1a1a1a]"
          points="145,85 250,85 260,95 490,95 500,105 500,135 500,150 490,160 200,160 190,170 145,170"
        />

        {/* Profile Picture Mask */}
        <mask id="about-profil-picture-mask">
          <rect fill="black" x="0" y="0" width="145" height="170" />
          <polyline
            fill="white"
            points="65,170 145,170 145,50 135,40 135,10 125,0 70,0 10,0 0,10 0,160 10,170"
          />
          <rect
            id="about-profile-picture-mask-rect"
            fill="black"
            width="145"
            height="170"
            style={{ transition: "1.2s", transform: "translateY(-205px)" }}
            x="0"
            y="0"
          />
        </mask>

        {/* Profile Picture */}
        <image
          href="/images/avatar.png"
          height="170"
          width="145"
          className="h-[13rem] "
          x="2"
          mask="url(#about-profil-picture-mask)"
          style={{ imageRendering: "optimizeSpeed" }}
        />

        {/* Profile Picture Animated Gradient */}
        <g mask="url(#about-profil-picture-mask)">
          <rect
            fill="url(#about-profile-picture-mask-gradient)"
            height="35"
            width="155"
            y="170"
            id="about-profile-picture-gradient"
            style={{ transition: "1.2s", transform: "translateY(-205px)" }}
          />
        </g>

        {/* Borders */}
        <polyline
          className="stroke-[#00b7ff] stroke-[2]"
          fill="none"
          points="65,170 10,170 0,160 0,10 10,0 70,0"
        />
        <polyline
          className="stroke-[#00b7ff] stroke-[2]"
          fill="none"
          points="65,170 145,170 145,50 135,40 135,10 125,0 70,0"
        />
        <polyline
          className="stroke-[#00b7ff] stroke-[2]"
          fill="none"
          points="145,85 250,85 260,95 490,95 500,105 500,135"
        />
        <polyline
          className="stroke-[#00b7ff] stroke-[2]"
          fill="none"
          points="145,170 190,170 200,160 490,160 500,150 500,135"
        />

        {/* Header Content */}
        <g transform="translate(170 118)" fill="#fff" fontWeight="bold">
          <text x="0" y="0" fontSize="10" className="uppercase">
            Name :
          </text>
          <text x="0" y="20" fontSize="14">
            Laiba
          </text>
          <text x="110" y="0" fontSize="10" className="uppercase">
            Age :
          </text>
          <text x="110" y="20" fontSize="14">
            22
          </text>
          <text x="200" y="0" fontSize="10" className="uppercase">
            From :
          </text>
          <text x="200" y="20" fontSize="14">
            Pakistan
          </text>
        </g>

        {/* Gradient Definition */}
        <defs>
          <linearGradient
            id="about-profile-picture-mask-gradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#3a2d20" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3a2d20" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* skills */}

      <svg viewBox="0 0 500 380" className="w-full h-auto">
        {/* Frame */}
        <polyline
          points="250,35 200,35 200,10 190,0 10,0 0,10 0,330 10,340 197,340 215,358 215,370 250,370 400,370 410,360 490,360 500,350 500,55 490,45 310,45 300,35"
          fill="none"
          stroke="#00b7ff"
          opacity="0.2"
        />
        <polyline
          points="250,35 200,35 200,10 190,0 10,0 0,10 0,330 10,340 197,340 215,358 215,370 250,370"
          fill="none"
          stroke="#00b7ff"
          strokeWidth="2"
        />
        <polyline
          points="250,35 300,35 310,45 490,45 500,55 500,350 490,360 410,360 400,370 250,370"
          fill="none"
          stroke="#00b7ff"
          strokeWidth="2"
        />

        {/* Header Section */}
        <rect
          x="0"
          y="0"
          height="47"
          width="500"
          fill="#00b7ff"
          opacity=".15"
          mask="url(#about-header-mask)"
        ></rect>
        <text x="30" y="25" fill="white" fontSize="18" fontWeight="bold">
          Skills
        </text>

        <foreignObject x="0" y="60" width="500" height="280" margin="0 0 0px 0">
          <div className="flex flex-col bg-transparent text-blue-400 font-medium">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`w-full ${index % 2 === 0 ? "" : "bg-blue-500/10"}`}
              >
                <div className="flex items-center h-10 w-[90%] mx-auto gap-4">
                  <span className="w-1/3">{skill.name}</span>
                  <div className="w-full h-2 bg-[#00b7ff33] bg-opacity-20">
                    <div
                      className="h-2 bg-gradient-to-r from-[#2d88dd] to-[#34bfff]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </foreignObject>
      </svg>

      {/* about */}
      <svg
        className="max-w-full "
        viewBox="0 0 500 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <polyline
          points="250,35 200,35 200,10 190,0 10,0 0,10 0,35 0,315 10,325 100,325 110,335 250,335 490,335 500,325 500,55 490,45 410,45 400,35"
          fill="none"
          className="stroke-[#00b7ff] stroke-[2]"
          strokeWidth="1"
          opacity="1"
        />

        {/* Line Left */}
        <polyline
          points="250,35 200,35 200,10 190,0 10,0 0,10 0,35 0,315 10,325 100,325 110,335 250,335"
          className="stroke-[#00b7ff] stroke-[2]"
          strokeWidth="1"
        />

        {/* Line Right */}
        <polyline
          points="250,35 400,35 410,45 490,45 500,55 500,325 490,335 250,335"
          className="stroke-[#00b7ff] stroke-[2]"
          strokeWidth="1"
        />

        {/* Header mask */}
        <mask id="about-header-mask">
          <polyline fill="white" points="0,37 0,10 10,0 190,0 200,10 200,37" />
          <rect fill="white" x="0" y="210" width="500" height="6" />
        </mask>

        {/* Header box */}
        <rect
          x="0"
          y="0"
          height="47"
          width="500"
          fill="#00b7ff"
          opacity=".15"
          mask="url(#about-header-mask)"
        />

        {/* Header Text */}
        <text
          x="73"
          y="25"
          fontSize="18"
          fontWeight="bold"
          className="fill-white"
        >
          ABOUT
        </text>

        {/* --- First Content --- */}
        <g transform="translate(10 65)">
          <image
            href="/assets/baby-pixel.png"
            x="6"
            y="7"
            height="64"
            width="64"
          />
          <text x="88" y="33" className="fill-white text-sm">
            At the age of 16, I first came in touch with Programming
          </text>
          <text x="88" y="50" className="fill-white text-sm">
             and development out of curiosity.
          </text>
        </g>

        {/* --- Second Content --- */}
        <g transform="translate(10 145)">
          <image
            href="/assets/heart-pixel.png"
            x="413"
            y="6"
            height="64"
            width="64"
          />
          <text x="5" y="33" className="fill-white text-sm">
            Learnt things that fascinated me — with self-paced, 
          </text>
          <text x="5" y="50" className="fill-white text-sm">
             hands-on approach, and with purpose.
          </text>
        </g>

        {/* --- Third Content --- */}
        <g transform="translate(10 225)">
          <image
            href="/assets/rocket-pixel.png"
            x="6"
            y="7"
            height="64"
            width="64"
          />
          <text x="88" y="33" className="fill-white text-sm">
            Now, after professional coaching, I am looking for
          </text>
          <text x="88" y="50" className="fill-white text-sm">
            new challenges to work as a web developer.
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Svgs;
