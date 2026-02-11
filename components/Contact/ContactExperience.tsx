import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, useGLTF, useAnimations, Environment } from '@react-three/drei'



const ContactExperience = () => {
  return (
    <Canvas className="h-full w-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
        <directionalLight position={[-2,0,3]} intensity={3} color={"#ff28d5"} />
        <directionalLight position={[2,0,3]} intensity={3} color={"#1c34ff"} />
        {/* <Environment preset="city" /> */}
      {/* <OrbitControls /> */}

      <group scale={[2, 2, 2]}>
        <Text3D
          position={[0, -2, -4]}
          curveSegments={32}
          bevelEnabled={true}
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.7}
          letterSpacing={-0.05}
          size={1.5}
          font="/fonts/pirata.json"
        >
          {`Hey \n There`}
          <meshNormalMaterial />
        </Text3D>

      </group>
    </Canvas>
  )
}

export default ContactExperience
