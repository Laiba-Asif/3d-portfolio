import React from 'react'

const IconCard = ({ img, title, text }) => {
  return (
    <div className="card-glow p-6 rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 hover:scale-105 hover:rotate-1 transition-transform duration-500 ease-out">
      <div className="flex flex-col items-center gap-4">
        <img src={img} alt={title} className="w-24 h-24 drop-shadow-lg" />
        <h2 className="font-bold text-white text-2xl">{title}</h2>
        <p className="text-white/70 text-center max-w-[200px]">{text}</p>
      </div>
    </div>
  )
}

export default IconCard
