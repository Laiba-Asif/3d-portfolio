import React from "react";
import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {

  const {animation} = useControls({
    animation:{

      value: "Typing",
      options:["Typing","Falling","Standing"]
    }
  })
  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset="night" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.43}      
          scale={10}
          far={10}
          resolution={256}
          color={"#000000"}

          blur={1}
        />

      <Avatar animation={animation}/>
      <ambientLight intensity={2} />
{  animation === "Typing" && 
       <mesh scale={[0.8,0.5,0.8]} position-y={0.20}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
}
     

      <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
        <planeGeometry />
        <meshStandardMaterial color="white" />

      </mesh>
      </group>
      
    </>
  );
};


// E97OV5