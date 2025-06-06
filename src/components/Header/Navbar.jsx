
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Twitter, Linkedin, Github, Instagram, Volume2, VolumeX } from "lucide-react";
import Sidebar from "./Sidebar";


const socialLinks = [
  { icon: <Instagram size={20} />, href: "https://facebook.com" },
  { icon: <Twitter size={20} />, href: "https://twitter.com" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
  { icon: <Github size={20} />, href: "https://github.com" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const toggleSound = () => setSoundOn((prev) => !prev);

  // Bar animation variants
  const topBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };
  const middleBarVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomBarVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  return (
    <div className="w-full h-full absolute z-50">

<Sidebar/>
      

      {/* Buttons container */}
      <div className="flex space-x-4 p-4 items-center absolute right-10 top-10">
        {/* Sound toggle button */}
        <button
          onClick={toggleSound}
          aria-label="Toggle Sound"
          className="p-2 rounded-md bg-[#ff28d5]/60 hover:bg-blue-900 text-white transition z-50 max-md:hidden"
        >
          {soundOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>

        {/* Hamburger toggle button with 3 bars */}
        

        <button
          onClick={toggleNav}
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          className=" flex flex-col justify-center items-center w-10 h-10 gap-[6px] bg-[#1c34ff] hover:bg-blue-900 rounded-md  transition z-50"
        >
          <motion.span
            className="block w-6 h-[2px] bg-white origin-center"
            variants={topBarVariants}
            animate={navOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white origin-center"
            variants={middleBarVariants}
            animate={navOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[2px] bg-white origin-center"
            variants={bottomBarVariants}
            animate={navOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Fullscreen nav menu */}
      <motion.nav
        initial={{ opacity: 0, y: "-100%" }}
        animate={navOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col justify-center items-center space-y-8 z-40`}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setNavOpen(false)} // close menu on click
            className="text-white text-4xl font-bold hover:text-blue-400 transition blackops"
          >
            {label}
          </a>
        ))}

        <div className="max-md:flex md:hidden items-center justify-between w-[70%] absolute bottom-20">
            <div className="flex items-center justify-center gap-8">

             {socialLinks.map(({ icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-blue-400 transition cursor-pointer"
            >
              {icon}
            </a>
          ))}
            </div>
            <div>
                  <button
          onClick={toggleSound}
          aria-label="Toggle Sound"
          className="p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition z-50"
        >
          {soundOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
            </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
