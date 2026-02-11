import { Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Avatar } from './Avatar'

const HeroExperience = () => {
  return (
    <Canvas>
        <ambientLight intensity={2}/>
        <directionalLight position={[-2,0,3]} intensity={3} color={"#ff28d5"} />
        <directionalLight position={[2,0,3]} intensity={3} color={"#1c34ff"} />

        <Sparkles count={100} size={2} speed={0.2} color="pink" scale={[10,10,2]} />

        <group>
          {/* working avatar */}
            <Avatar scale={9} position={[0,-15,0]} />
        </group>
    </Canvas>
  )
}

export default HeroExperience
