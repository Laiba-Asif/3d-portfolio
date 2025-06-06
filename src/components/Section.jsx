import React from 'react'

const Section = ({ children, bgColor = "transparent" }) => {
  return (
    <section className="relative h-screen w-screen p-8  mx-auto flex flex-col items-start justify-center md:px-6 md:pl-8 md:ml-8  py-16 md:py-28">
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: bgColor }}
      />
      {children}
    </section>
  );
};


export default Section
