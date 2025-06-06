


import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

export default function ContactForm() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const validate = (name, email, message) => {
    const newErrors = {};
    if (!name) newErrors.name = "Please enter your name";
    if (!email) newErrors.email = "Please enter your email";
    if (!message) newErrors.message = "Please enter your message";
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const validationErrors = validate(name, email, message);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // clear errors on successful validation

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
          // Maybe reset form or show success state
        },
        (error) => {
          console.error("Email error:", error.text);
          // Handle error gracefully
        }
      );
  };

  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section>
      {/* ... your header bars and SVG frame remain the same */}

      <div className="min-h-full md:[width:92rem] md:[max-width:calc(100%-60px)] flex items-center justify-start md:px-6 md:pl-8 md:ml-8 py-16 md:py-28">
        <div className="md:w-[580px] md:max-w-[45%] max-md:w-full">
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

            {/* Header Section */}
            <rect
              x="0"
              y="0"
              height="57"
              width="500"
              fill="#00b7ff"
              opacity=".15"
              mask="url(#about-header-mask)"
            ></rect>
            <text x="30" y="25" fill="white" fontSize="18" fontWeight="bold">
              CHALLENGE ME
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
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                  animate={errors.name ? "shake" : ""}
                  variants={shakeAnimation}
                >
                  <div
                    className="bg-black"
                    style={{
                      clipPath:
                        "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                    }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder={errors.name ? errors.name : "your Name"}
                      className={`w-full px-4 py-3 text-white placeholder-cyan-300 focus:outline-none bg-transparent ${
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
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                  animate={errors.email ? "shake" : ""}
                  variants={shakeAnimation}
                >
                  <div
                    className="bg-black/70"
                    style={{
                      clipPath:
                        "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                    }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder={errors.email ? errors.email : "Email"}
                      className="w-full px-4 py-3 text-white placeholder-cyan-300 focus:outline-none bg-transparent"
                    />
                  </div>
                </motion.div>


                {/* Message */}
                <motion.div
                  className={`group bg-cyan-400 p-[1px] focus-within:bg-cyan-500 ${
                    errors.message ? "border-2 border-red-500" : ""
                  }`}
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                  animate={errors.message ? "shake" : ""}
                  variants={shakeAnimation}
                >
                  <div
                    className="bg-black/70"
                    style={{
                      clipPath:
                        "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                    }}
                  >
                    <textarea
                      name="message"
                      placeholder={errors.message ? errors.message : "your Message"}
                      rows="3"
                      className="w-full px-4 py-3 bg-transparent text-white placeholder-cyan-300 focus:outline-none resize-none"
                    />
                  </div>
                </motion.div>

               

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-[178px] ml-[13rem] mt-1 px-6 py-3 text-lg font-semibold text-white bg-cyan-500 shadow-lg hover:bg-cyan-600"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                  }}
                >
                  <div
                    className="absolute top-1 left-1 h-3 w-3 bg-blue-950"
                    style={{
                      clipPath:
                        "polygon(0px 0px, 100% 0px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0px 100%)",
                      zIndex: 1,
                    }}
                  />
                  <span className="relative z-10">Send Me Raven</span>
                </motion.button>
              </motion.form>
            </foreignObject>
          </svg>
        </div>
      </div>
    </Section>
  );
}
