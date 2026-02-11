import React from 'react'

const GradientSphere = ({sphere1class , sphere2class}:{sphere1class:string , sphere2class:string}) => {
  return (
    <>
      <div className={sphere1class}></div>
      <div className={sphere2class}></div>
    </>
  )
}

export default GradientSphere
