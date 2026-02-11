
"use client";

import React, { useRef, useState, FormEvent, JSX } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import ContactExperience from "./ContactExperience";
import { ArrowUp, Heart } from "lucide-react";

/** --------------------
 * Types
 * ------------------- */
type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm(): JSX.Element {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  /** --------------------
   * Validation
   * ------------------- */
  const validate = (
    name: string | null,
    email: string | null,
    message: string | null
  ): FormErrors => {
    const newErrors: FormErrors = {};

    if (!name?.trim()) newErrors.name = "Please enter your name";
    if (!email?.trim()) newErrors.email = "Please enter your email";
    if (!message?.trim()) newErrors.message = "Please enter your message";

    return newErrors;
  };

  /** --------------------
   * Email Handler
   * ------------------- */
  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    const validationErrors = validate(name, email, message);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    emailjs
      .sendForm(
        "service_axa8gmz",
        "template_9s522jz",
        formRef.current,
        "f2vUryC2VYca5hSDQ"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          formRef.current?.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    const quickLinks = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Resume", href: "/#resume" },
  ];


  /** --------------------
   * Animations
   * ------------------- */
  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer>

    <div className="relative  bg-background overflow-hidden">
  {/* Background grid */}

  <div className="relative max-w-7xl mx-auto px-6 py-20">
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT — CONTACT FORM */}
     <div className="w-full flex justify-center lg:justify-start">
  <div className="w-full max-w-130">
          <svg viewBox="0 0 500 450" className="w-full h-auto">
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

            {/* Header */}
            <rect
              x="0"
              y="0"
              height="57"
              width="500"
              fill="#00b7ff"
              opacity=".15"
              mask="url(#about-header-mask)"
            ></rect>
            <text x="20" y="25" fill="white" fontSize="14" fontWeight="bold" className="uppercase text-center mr-5">
              Anonymous Message
            </text>

            <foreignObject x="0" y="40" width="500" height="370">
              <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-3 p-4 bg-transparent text-blue-200 font-medium"
              >
                {/* Name */}
                <motion.div
                  className={`group bg-cyan-400 p-[1.5px] focus-within:bg-cyan-500 ${
                    errors.name ? "border-2 border-red-500" : ""
                  }`}
                  animate={errors.name ? "shake" : ""}
                  variants={shakeAnimation}
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <div className="bg-black/60" style={{ clipPath: "inherit" }}>
                    <input
                      type="text"
                      name="name"
                      placeholder={errors.name ?? "your Name"}
                      className={`w-full px-4 py-3 text-white placeholder-cyan-300 bg-transparent focus:outline-none ${
                        errors.name ? "text-red-500" : ""
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  className={`group bg-cyan-400 p-[1.5px] focus-within:bg-cyan-500 ${
                    errors.email ? "border-2 border-red-500" : ""
                  }`}
                  animate={errors.email ? "shake" : ""}
                  variants={shakeAnimation}
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <div className="bg-black/60" style={{ clipPath: "inherit" }}>
                    <input
                      type="email"
                      name="email"
                      placeholder={errors.email ?? "Email"}
                      className="w-full px-4 py-3 text-white placeholder-cyan-300 bg-transparent focus:outline-none"
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  className={`group bg-cyan-400 p-[1px] focus-within:bg-cyan-500 ${
                    errors.message ? "border-2 border-red-500" : ""
                  }`}
                  animate={errors.message ? "shake" : ""}
                  variants={shakeAnimation}
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <div className="bg-black/60" style={{ clipPath: "inherit" }}>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder={errors.message ?? "your Message"}
                      className="w-full px-4 py-3 text-white placeholder-cyan-300 bg-transparent focus:outline-none resize-none"
                    />
                  </div>
                </motion.div>

                {/* Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-44.5 ml-52 mt-1 px-6 py-3 text-lg font-semibold text-white bg-cyan-500 shadow-lg hover:bg-cyan-600"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                  }}
                >
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </motion.form>
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* RIGHT — CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        {/* Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Speak Your Mind,{" "}
            <span className="text-primary">Anonymously</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Your thoughts, unfiltered and untraced. Share feedback, appreciation,
            or just a random thought — safely and anonymously.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-4 max-w-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition"
        >
          <span className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition">
            <ArrowUp className="w-4 h-4" />
          </span>
          <span className="text-sm">Back to top</span>
        </button>
      </motion.div>
    </div>
    
  </div>


</div>

<div className="border-t border-primary/10">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                Designed with <Heart className="w-4 h-4 text-primary animate-pulse" /> by{" "}
                <span className="text-primary font-medium">Laiba Asif</span>
              </p>
            </div>
          </div>
      </div>
    </footer>

  );
}

