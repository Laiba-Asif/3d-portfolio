import { Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
// import {BlueAvatar} from './BlueAvatar'
import { Avatar } from './Avatar-transformed'

const AvatarExperience = () => {
  return (
    <Canvas shadows camera={{position:[0,2,5], fov:30}}>
        <ambientLight intensity={2}/>
        <directionalLight position={[-2,0,3]} intensity={3} color={"#ff28d5"} />
        <directionalLight position={[2,0,3]} intensity={3} color={"#1c34ff"} />

        <Sparkles count={300} size={2} speed={0.2} color="pink" scale={[10,10,2]} />

        <group position-y={-1}>
            <Avatar />
        </group>
    </Canvas>
  )
}

export default AvatarExperience
