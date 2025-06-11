import React from 'react'
import {motion} from 'framer-motion'
import { Twitter, Linkedin, Github, Instagram, Volume2, VolumeX } from "lucide-react";
const Sidebar = () => {
    const socialLinks = [
  { icon: <Instagram size={20} />, href: "https://facebook.com" },
  { icon: <Twitter size={20} />, href: "https://twitter.com" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
  { icon: <Github size={20} />, href: "https://github.com" },
];
  return (
      <div className="absolute left-5 bottom-20 hidden md:flex flex-col gap-12 items-center space-y-6 z-30">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "10rem", opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[2px] bg-white mb-6 "
        />
        <div className="flex flex-col space-y-8">
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
      </div>
  )
}

export default Sidebar
