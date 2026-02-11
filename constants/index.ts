
const  Frontend_url = process.env.Frontend_url || "http://localhost:3000";
const navLinks = [
  { href: `${Frontend_url}/#home`, label: "Home" },
  { href: `${Frontend_url}/#about`, label: "About" },
  { href: `${Frontend_url}/#experience`, label: "Experience" },
  { href: `${Frontend_url}/#projects`, label: "Projects" },
  { href: `${Frontend_url}/#contact`, label: "Contact" },
  { href: `${Frontend_url}/#resume`, label: "Resume" },
];

const socialLinks = [
  { icon: "<Instagram size={20} />", href: "https://facebook.com" },
  { icon: "<Twitter size={20} />", href: "https://twitter.com" },
  { icon: "<Linkedin size={20} />", href: "https://linkedin.com" },
  { icon: "<Github size={20} />", href: "https://github.com" },
];
const experties = [
 {
        img: "/icons/Icon10.jpeg",
        title: "24/7 Support",
        text: "Online chat. Response in 1-2 minutes"
    },
    {
        img: "/icons/Icon1.jpeg",
        title: "Switching Devices",
        text: "Start playing on one device, continue on another"
    },
    {
        img: "/icons/Icon3.jpeg",
        title: "Gameplay Streaming",
        text: "Stream your gameplay to YouTube!"
    },
    {
        img: "/icons/Icon4.jpeg",
        title: "Cloud Saves",
        text: "Your progress is automatically saved to the cloud"
    },
    {
        img: "/icons/Icon5.jpeg",
        title: "Custom Avatars",
        text: "Create and personalize your in-game identity"
    },
    {
        img: "/icons/Icon6.jpeg",
        title: "Weekly Challenges",
        text: "New missions every week to keep the fun going"
    },
]
const myProjects = [
  {
    id: 1,
    category: "Full Stack",
    name: "Zoom Clone",
    des: "A video conferencing web application to do video calling alongside screen sharing. I developed this using Next 14 and used clerk for authentication and Stream React video SDK for video calling.",
    img: "/zoom.png",
    github: "https://github.com/Laiba-Asif/Next.Js_zoom-clone",
    tags: [
      { name: "goLive", color: "blue-text-gradient", link: "https://zoom-by-laiba.vercel.app/" },
      { name: "github", color: "green-text-gradient", link: "https://github.com/Laiba-Asif/Next.Js_zoom-clone" },
    ],
  },
  {
    id: 2,
    category: "Full Stack",
    name: "Netflix Clone",
    des: "You can easily watch the trailers of your favourite TV show, movie and get to know about your fav protagonist. Utilized JWT for authentication via Nodejs, Express and Mongodb and TMDB movie api to fetch movies at backend and used React and tailwind css for frontend and axios as well!",
    img: "/1.png",
    github: "https://github.com/Laiba-Asif/mern-netflix-clone",
    tags: [
      { name: "goLive", color: "pink-text-gradient", link: "https://laiba-netflix-clone.vercel.app/" },
      { name: "github", color: "blue-text-gradient", link: "https://github.com/Laiba-Asif/mern-netflix-clone" },
    ],
  },
  {
    id: 3,
    category: "Full Stack",
    name: "Real Estate App",
    des: "Easily find the best place to live. Developed a dynamic real estate frontend application using React, Node.js, and SCSS, enhancing user experience with responsive design and efficient component architecture.",
    img: "/project-1.png",
    github: "https://github.com/Laiba-Asif/Real-Estate-Frontend",
    tags: [
      { name: "goLive", color: "green-text-gradient", link: "https://real-estate-laiba.vercel.app/" },
      { name: "github", color: "pink-text-gradient", link: "https://github.com/Laiba-Asif/Real-Estate-Frontend" },
    ],
  },
  {
    id: 4,
    category: "Frontend",
    name: "Student Management System",
    des: "School management system for organizing classes, managing students and faculty, tracking attendance, assessing performance, and facilitating communication.",
    img: "/project-2.png",
    github: "https://github.com/Laiba-Asif/Student-Management-System",
    tags: [
      { name: "goLive", color: "blue-text-gradient", link: "https://student-management-system-laibae.vercel.app/" },
      { name: "github", color: "green-text-gradient", link: "https://github.com/Laiba-Asif/Student-Management-System" },
    ],
  },
  {
    id: 5,
    category: "Frontend",
    name: "NextLevelFood Community",
    des: "An app to get and share recipes of your favorite food. Features community interaction and image sharing. Developed using Next.js and Node.js.",
    img: "/project-3.png",
    github: "https://github.com/Laiba-Asif/Nextlevel-foodies-community",
    tags: [
      { name: "goLive", color: "pink-text-gradient", link: "https://nextlevelfoodies.vercel.app/" },
      { name: "github", color: "blue-text-gradient", link: "https://github.com/Laiba-Asif/Nextlevel-foodies-community" },
    ],
  },
  {
    id: 6,
    category: "Frontend",
    name: "Weather Forecasting",
    des: "Get weather updates for any city worldwide. Developed using OpenWeather API, HTML, CSS, JavaScript, React, and Fetch API.",
    img: "/project-5.png",
    github: "https://github.com/Laiba-Asif/Weather-Forcasting-App",
    tags: [
      { name: "goLive", color: "pink-text-gradient", link: "https://weather-forcasting-app-six.vercel.app/" },
      { name: "github", color: "green-text-gradient", link: "https://github.com/Laiba-Asif/Weather-Forcasting-App" },
    ],
  },
  {
    id: 7,
    category: "Frontend",
    name: "Typing Speed Testing",
    des: "Test your typing speed with score tracking. Developed using HTML, CSS, JavaScript, and React.",
    img: "/project-6.png",
    github: "https://github.com/Laiba-Asif/Typing-speed-test",
    tags: [
      { name: "goLive", color: "green-text-gradient", link: "https://typing-speed-test-psi-one.vercel.app/" },
      { name: "github", color: "blue-text-gradient", link: "https://github.com/Laiba-Asif/Typing-speed-test" },
    ],
  },
  {
    id: 8,
    category: "Frontend",
    name: "Piano Game",
    des: "Play a piano game with keyboard controls. Keys are demonstrated on the piano. Developed using HTML, CSS, JavaScript, and React.",
    img: "/project-7.png",
    github: "https://github.com/Laiba-Asif/Piano-Game",
    tags: [
      { name: "goLive", color: "pink-text-gradient", link: "https://pianoplay.vercel.app/" },
      { name: "github", color: "green-text-gradient", link: "https://github.com/Laiba-Asif/Piano-Game" },
    ],
  },
  {
    id: 9,
    category: "Frontend",
    name: "Tic Tac Toe",
    des: "A simple Tic Tac Toe game developed using React Hooks and CSS.",
    img: "/project-8.png",
    github: "https://github.com/Laiba-Asif/tic-tac-toe-Game",
    tags: [
      { name: "goLive", color: "blue-text-gradient", link: "https://tic-tac-toe-laiba.netlify.app/" },
      { name: "github", color: "green-text-gradient", link: "https://github.com/Laiba-Asif/tic-tac-toe-Game" },
    ],
  },
  {
    id: 10,
    category: "Vanilla JS",
    name: "3D Images Slider",
    des: "A 3D infinite image slider developed with HTML, CSS animations, and maths coordinates.",
    img: "/project-4.png",
    github: "https://github.com/Laiba-Asif/CSS-3D-Slider-",
    tags: [
      { name: "goLive", color: "green-text-gradient", link: "https://github.com/Laiba-Asif/CSS-3D-Slider-" },
      { name: "github", color: "blue-text-gradient", link: "https://github.com/Laiba-Asif/CSS-3D-Slider-" },
    ],
  },
  {
    id: 11,
    category: "Vanilla JS",
    name: "Starbucks Animated Slider",
    des: "A Starbucks-themed animated slider built using HTML, CSS, and JavaScript.",
    img: "/project-9.png",
    github: "https://github.com/Laiba-Asif/Starbucks-animated-slider",
    tags: [
      { name: "goLive", color: "pink-text-gradient", link: "https://starbucks-animated-slider.vercel.app/" },
      { name: "github", color: "green-text-gradient", link: "https://github.com/Laiba-Asif/Starbucks-animated-slider" },
    ],
  },
];


// const iconsList = [
//   {
//     name: "html",
//     image: "/images/html.svg",
//   },
//   {
//     name: "css",
//     image: "/images/css.svg",
//   },
//   {
//     name: "javascript",
//     image: "/images/js.svg",
//   },
//   {
//     name: "react",
//     image: "/images/react.svg",
//   },
//   {
//     name: "typescript",
//     image: "/images/ts.svg",
//   },
//   {
//     name: "github",
//     image: "/images/github.svg",
//   },
//   {
//     name: "gsap",
//     image: "/images/gsap.svg",
//   },
//   {
//     name: "threejs",
//     image: "/images/threejs.svg",
//   },
//   {
//     name: "figma",
//     image: "/images/figma.svg",
//   },
//   {
//     name: "aws",
//     image: "/images/aws.svg",
//   },
// ];




export {
  navLinks,
  socialLinks,
  experties,
  myProjects,
};