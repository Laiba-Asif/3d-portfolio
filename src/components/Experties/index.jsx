import React from 'react'
import IconsSection from './IconsSection'
import GradientSphere from '../GradientSpheres'


const Experties = () => {
    
  return (
    <section className='w-screen bg-gradient-to-br from-[#330259] text-white ' >
        <GradientSphere
        sphere1class="about-gradient-sphere about-sphere-1"
        sphere2class="about-gradient-sphere about-sphere-2"
      />
        <div className="w-screen h-[60vh] sm:h-[50vh]"></div>
        <IconsSection />
        <div className="w-screen h-[60vh] sm:h-[50vh]"></div>
      
    </section>
  )
}

export default Experties
