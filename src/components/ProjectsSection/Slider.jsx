import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { myProjects } from "../../constants";
import { Link } from "react-router-dom";

const Slider = () => {
    const swiperWrappedRef = useRef(null);

    function adjustMargin  (){
        const screenWidth = window.innerWidth;
        if(swiperWrappedRef.current){
            swiperWrappedRef.current.style.marginLeft = screenWidth <= 520? "0px":screenWidth<=650? "-50px":screenWidth<=800?"-100px":"-150px";
        }
    }
    useEffect(()=>{
        adjustMargin();
        window.addEventListener("resize", adjustMargin)
        return()=>window.removeEventListener("resize", adjustMargin)
    },[])
  return (
    <main className="bg-blue-900 py-10 h-screen flex items-center justify-center overflow-hidden z-50">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
  modules={[Navigation, Pagination]}
  grabCursor
  initialSlide={2}
  centeredSlides
  slidesPerView="auto"
  speed={800}
  slideToClickedSlide
  pagination={{ clickable: true }}
  breakpoints={{
    320: { spaceBetween: 40 },
    650: { spaceBetween: 30 },
    1000: { spaceBetween: 20 },
  }}
  onSwiper={(swiper) => {
    swiperWrappedRef.current = swiper.wrapperEl;
  }}
>
  {myProjects.map((project, idx) => (
    <SwiperSlide key={idx}>
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-full object-cover"
      />
      <div className="swiper-title absolute inset-0 w-full h-full flex items-center justify-end flex-col ">
        <h1 className="text-4xl font-bold">{project.name}</h1>
      </div>
      <div className="swiper-content absolute inset-0 w-full h-full flex flex-col justify-end">
        <div className="swiper-text-box">
          <p className="text-lg ">{project.des}</p>
        </div>
        <div className="swiper-footer absolute bottom-5 left-10 w-[80%] mx-auto flex items-center justify-between">
          <div className="swiper-tag flex gap-3">
            {project.tags.map((tag, tagIdx) => (
              <Link to={tag.link} key={tagIdx} style={{ "--i": tagIdx + 1 }}>
                #{tag.name}
              </Link>
            ))}
          </div>
         
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </main>
  );
};

export default Slider;
