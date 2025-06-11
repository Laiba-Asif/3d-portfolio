import React from 'react'
import {experties} from '../../constants'
import IconCard from './IconCard'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)


const IconsSection = () => {
    useGSAP(()=>{
        gsap.from(".iconstext",{
            y:100,
            opacity:0,
            scrollTrigger: {
                trigger: ".iconstext",
                start: "center center"
            }
        })

        const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".icons-section", 
    start: "top center",
    end: "bottom top",
    scrub: 1
  }
});

        tl.fromTo(".icon-card:nth-child(1)",
            {x:150},
            {x:-135},0
        )
        tl.fromTo(".icon-card:nth-child(2)",
            {y:150},
            {y:-60},0
        )
        tl.fromTo(".icon-card:nth-child(3)",
            {x:-150},
            {x:135},0
        )

        tl.fromTo(".icon-card:nth-child(4)",
            {x:150},
            {x:-100},0
        )
        tl.fromTo(".icon-card:nth-child(5)",
            {y:150},
            {y:-50},0
        )
        tl.fromTo(".icon-card:nth-child(6)",
            {x:-150},
            {x:100},0
        )
    })
  return (
    <section className='icons-section w-screen h-auto min-h-screen z-36'>
  <div className="w-full min-h-screen flex items-center justify-center flex-col py-20">
    <h1 className='iconstext pb-10 font-bold text-white text-5xl sm:text-6xl lg:text-8xl pirata text-center'>Plenty Of Cool Stuff</h1>

    <div className='flex justify-center w-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6 w-full px-4 sm:px-10 max-w-6xl'>

        {experties.map((item, index) => (
          <div className="icon-card" key={item.title}>
            <IconCard img={item.img} title={item.title} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  )
}

export default IconsSection
