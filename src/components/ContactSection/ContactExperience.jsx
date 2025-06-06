import { OrbitControls, Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {Avatar} from './Avatar'

const ContactExperience = () => {
  return (
    <Canvas className='h-full w-full'
    camra={{position: [0, 0, 5]}}>
        <ambientLight intensity={2}/>
            <directionalLight position={[-5 ,5 ,5]} intensity={2} />

        <group scale={[2, 2, 2]}>
            <Text3D position={[-3.5, -2.5 ,-4]}
               curveSegments= {32}
               bevelEnabled={true}
               bevelSize={0.04}
               bevelThickness={0.1}
               height={0.5}
               lineHeight={0.5}
               letterSpacing={-0.05}
               size={1.5}
               font='/fonts/pirata.json'
            >
                {`Hey`}
                <meshNormalMaterial />
                {/* <OrbitControls/> */}
            </Text3D>
            <Avatar scale={2} position={[0 ,-2,0]}/>
        </group>
      
    </Canvas>
  )
}

export default ContactExperience
