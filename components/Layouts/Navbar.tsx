"use client"
import { motion } from "framer-motion";
import gsap from "gsap";

import { Twitter, Linkedin, Github, Instagram,Mail } from "lucide-react";
// import Sidebar from "./Sidebar";
import { useGSAP } from "@gsap/react";
import { navLinks } from "@/constants";
import { useState } from "react";

const socialLinks = [
  { icon: <Github size={20} />, href: "https://github.com/Laiba-Asif" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/laibae-awan" },
  { icon: <Mail size={20} />, href: "mailto:laibae.awan@gmail.com" },
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/laibae_awan/" },
];

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.set([".bar-top", ".bar-middle", ".bar-bottom"], {
      width: "10rem", // Start expanded
    })

      .to(".hamburger", {
        x: "50vw", // Move to center
        duration: 1.5,
        ease: "power2.inOut",
      })

      .to(".hamburger", {
        x: "85vw", // Move to right while still wide
        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(".hamburger", {
        x: "85vw", // Move to right while still wide
        duration: 1.5,
        ease: "power2.inOut",
      })

      .to(
        ".bar-top",
        {
          width: "2.5rem",
          duration: 0.4,
          ease: "power1.inOut",
        },
        "<"
      ) // shrink after full move

      .to(
        ".bar-middle",
        {
          width: "2rem",
          duration: 0.4,
          ease: "power1.inOut",
        },
        "<"
      )

      .to(
        ".bar-bottom",
        {
          width: "1.25rem",
          duration: 0.4,
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  return (
    <div
  className={`fixed top-0 right-0 w-full h-screen overflow-hidden z-50 ${
    navOpen ? "pointer-events-auto" : "pointer-events-none"
  }`}
>
      {/* <Sidebar /> */}

      {/* Buttons container */}
      <div
  className="flex flex-col items-end gap-1 hamburger z-999 absolute top-10 left-0 pointer-events-auto"
  onClick={toggleNav}
>
        <div className="bar-top h-2 bg-white" style={{ width: "2.5rem" }}></div>
        <div
          className="bar-middle h-2 bg-white"
          style={{ width: "2rem" }}
        ></div>
        <div
          className="bar-bottom h-2 bg-white"
          style={{ width: "1.25rem" }}
        ></div>
      </div>

      {/* Fullscreen nav menu */}
      <motion.nav
        initial={{ opacity: 0, y: "-100%" }}
        animate={navOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full h-full bg-gray-900  flex flex-col justify-center items-center space-y-8 z-50`}
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

        <div className="max-md:flex md:hidden items-center justify-between z-[999] absolute bottom-20">
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
          <div></div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
